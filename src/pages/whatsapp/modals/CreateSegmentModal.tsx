import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, AlertCircle, Users, Filter } from 'lucide-react';
import { useCreateSegment } from '../hooks/useWhatsApp';
import { CreateSegmentPayload, SegmentType, SegmentCondition } from '../../../types/whatsapp.types';

interface CreateSegmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Available segment types with descriptions
const segmentTypes: { value: SegmentType; label: string; description: string }[] = [
  { value: 'purchase_value', label: 'Purchase Value', description: 'Segment by total purchase amount' },
  { value: 'purchase_frequency', label: 'Purchase Frequency', description: 'Segment by number of purchases' },
  { value: 'last_purchase', label: 'Last Purchase', description: 'Segment by recency of last purchase' },
  { value: 'category_preference', label: 'Category Preference', description: 'Segment by product categories' },
  { value: 'location', label: 'Location', description: 'Segment by geographic location' },
  { value: 'custom', label: 'Custom', description: 'Build custom segment with multiple conditions' },
];

// Available fields for conditions
const fieldOptions = [
  { value: 'total_purchases', label: 'Total Purchases (₹)', type: 'number' },
  { value: 'purchase_count', label: 'Number of Purchases', type: 'number' },
  { value: 'last_purchase_days', label: 'Days Since Last Purchase', type: 'number' },
  { value: 'average_order_value', label: 'Average Order Value (₹)', type: 'number' },
  { value: 'customer_name', label: 'Customer Name', type: 'string' },
  { value: 'phone_number', label: 'Phone Number', type: 'string' },
  { value: 'location', label: 'Location', type: 'string' },
  { value: 'category', label: 'Preferred Category', type: 'string' },
  { value: 'outstanding_balance', label: 'Outstanding Balance (₹)', type: 'number' },
];

// Operators based on field type
const operatorOptions = {
  number: [
    { value: 'equals', label: 'Equals (=)' },
    { value: 'not_equals', label: 'Not Equals (≠)' },
    { value: 'greater_than', label: 'Greater Than (>)' },
    { value: 'less_than', label: 'Less Than (<)' },
    { value: 'between', label: 'Between' },
  ],
  string: [
    { value: 'equals', label: 'Equals' },
    { value: 'not_equals', label: 'Not Equals' },
    { value: 'contains', label: 'Contains' },
    { value: 'not_contains', label: 'Does Not Contain' },
  ],
};

const CreateSegmentModal: React.FC<CreateSegmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    segment_type: 'custom' as SegmentType,
  });

  const [conditions, setConditions] = useState<SegmentCondition[]>([
    { field: 'total_purchases', operator: 'greater_than', value: '' }
  ]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const createSegmentMutation = useCreateSegment();

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        description: '',
        segment_type: 'custom',
      });
      setConditions([
        { field: 'total_purchases', operator: 'greater_than', value: '' }
      ]);
      setErrors({});
    }
  }, [isOpen]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleConditionChange = (index: number, field: keyof SegmentCondition, value: any) => {
    setConditions(prev => {
      const newConditions = [...prev];
      newConditions[index] = { ...newConditions[index], [field]: value };

      // Reset operator and value when field changes
      if (field === 'field') {
        const fieldType = fieldOptions.find(f => f.value === value)?.type || 'string';
        newConditions[index].operator = fieldType === 'number' ? 'greater_than' : 'equals';
        newConditions[index].value = '';
        newConditions[index].value2 = undefined;
      }

      // Reset value2 when operator changes from 'between'
      if (field === 'operator' && value !== 'between') {
        newConditions[index].value2 = undefined;
      }

      return newConditions;
    });

    // Clear conditions error
    if (errors.conditions) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.conditions;
        return newErrors;
      });
    }
  };

  const addCondition = () => {
    setConditions(prev => [
      ...prev,
      { field: 'total_purchases', operator: 'greater_than', value: '' }
    ]);
  };

  const removeCondition = (index: number) => {
    if (conditions.length > 1) {
      setConditions(prev => prev.filter((_, i) => i !== index));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Segment name is required';
    }

    // Validate conditions
    const hasInvalidConditions = conditions.some(condition => {
      if (!condition.field || !condition.operator) return true;
      if (condition.value === '' || condition.value === null || condition.value === undefined) return true;
      if (condition.operator === 'between' && (!condition.value2 || condition.value2 === '')) return true;
      return false;
    });

    if (hasInvalidConditions) {
      newErrors.conditions = 'All condition fields must be filled out';
    }

    // Validate numeric values
    const hasInvalidNumbers = conditions.some(condition => {
      const fieldInfo = fieldOptions.find(f => f.value === condition.field);
      if (fieldInfo?.type === 'number') {
        const val = parseFloat(condition.value as string);
        if (isNaN(val) || val < 0) return true;
        if (condition.operator === 'between') {
          const val2 = parseFloat(condition.value2 as string);
          if (isNaN(val2) || val2 < 0 || val2 <= val) return true;
        }
      }
      return false;
    });

    if (hasInvalidNumbers) {
      newErrors.conditions = 'Please enter valid numeric values';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Convert string values to appropriate types
    const processedConditions: SegmentCondition[] = conditions.map(condition => {
      const fieldInfo = fieldOptions.find(f => f.value === condition.field);
      const processed = { ...condition };

      if (fieldInfo?.type === 'number') {
        processed.value = parseFloat(condition.value as string);
        if (condition.operator === 'between' && condition.value2) {
          processed.value2 = parseFloat(condition.value2 as string);
        }
      }

      return processed;
    });

    const payload: CreateSegmentPayload = {
      name: formData.name.trim(),
      description: formData.description.trim() || undefined,
      segment_type: formData.segment_type,
      conditions: processedConditions,
    };

    try {
      await createSegmentMutation.mutateAsync(payload);
      onClose();
    } catch (error) {
      console.error('Failed to create segment:', error);
    }
  };

  const getFieldType = (fieldValue: string): string => {
    return fieldOptions.find(f => f.value === fieldValue)?.type || 'string';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Create Customer Segment</h2>
            <p className="text-sm text-gray-600 mt-1">
              Define conditions to group customers for targeted campaigns
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={createSegmentMutation.isPending}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Segment Name */}
          <div>
            <label htmlFor="segment-name" className="block text-sm font-semibold text-gray-900 mb-2">
              Segment Name *
            </label>
            <input
              id="segment-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g., High-Value Customers"
              className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={createSegmentMutation.isPending}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Segment Description */}
          <div>
            <label htmlFor="segment-description" className="block text-sm font-semibold text-gray-900 mb-2">
              Description (Optional)
            </label>
            <input
              id="segment-description"
              type="text"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Brief description of this segment"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
              disabled={createSegmentMutation.isPending}
            />
          </div>

          {/* Segment Type */}
          <div>
            <label htmlFor="segment-type" className="block text-sm font-semibold text-gray-900 mb-2">
              Segment Type
            </label>
            <select
              id="segment-type"
              value={formData.segment_type}
              onChange={(e) => handleInputChange('segment_type', e.target.value as SegmentType)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
              disabled={createSegmentMutation.isPending}
            >
              {segmentTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label} - {type.description}
                </option>
              ))}
            </select>
          </div>

          {/* Segment Conditions Builder */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-semibold text-gray-900">
                Segment Conditions *
              </label>
              <button
                type="button"
                onClick={addCondition}
                className="flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                disabled={createSegmentMutation.isPending}
              >
                <Plus className="w-4 h-4" />
                Add Condition
              </button>
            </div>

            <div className="space-y-3">
              {conditions.map((condition, index) => {
                const fieldType = getFieldType(condition.field);
                const operators = operatorOptions[fieldType as 'number' | 'string'] || operatorOptions.string;

                return (
                  <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      {/* Condition Number Badge */}
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">
                        {index + 1}
                      </div>

                      <div className="flex-1 space-y-3">
                        {/* Field Selection */}
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Field
                          </label>
                          <select
                            value={condition.field}
                            onChange={(e) => handleConditionChange(index, 'field', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            disabled={createSegmentMutation.isPending}
                          >
                            {fieldOptions.map(field => (
                              <option key={field.value} value={field.value}>
                                {field.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Operator Selection */}
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Operator
                          </label>
                          <select
                            value={condition.operator}
                            onChange={(e) => handleConditionChange(index, 'operator', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            disabled={createSegmentMutation.isPending}
                          >
                            {operators.map(op => (
                              <option key={op.value} value={op.value}>
                                {op.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Value Input(s) */}
                        <div>
                          <label className="block text-xs font-medium text-gray-700 mb-1">
                            Value
                          </label>
                          {condition.operator === 'between' ? (
                            <div className="flex items-center gap-2">
                              <input
                                type={fieldType === 'number' ? 'number' : 'text'}
                                value={condition.value as string}
                                onChange={(e) => handleConditionChange(index, 'value', e.target.value)}
                                placeholder="Min"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                disabled={createSegmentMutation.isPending}
                                step={fieldType === 'number' ? '0.01' : undefined}
                                min={fieldType === 'number' ? '0' : undefined}
                              />
                              <span className="text-gray-600 text-sm font-medium">to</span>
                              <input
                                type={fieldType === 'number' ? 'number' : 'text'}
                                value={condition.value2 as string || ''}
                                onChange={(e) => handleConditionChange(index, 'value2', e.target.value)}
                                placeholder="Max"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                disabled={createSegmentMutation.isPending}
                                step={fieldType === 'number' ? '0.01' : undefined}
                                min={fieldType === 'number' ? '0' : undefined}
                              />
                            </div>
                          ) : (
                            <input
                              type={fieldType === 'number' ? 'number' : 'text'}
                              value={condition.value as string}
                              onChange={(e) => handleConditionChange(index, 'value', e.target.value)}
                              placeholder={`Enter ${fieldOptions.find(f => f.value === condition.field)?.label.toLowerCase()}`}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              disabled={createSegmentMutation.isPending}
                              step={fieldType === 'number' ? '0.01' : undefined}
                              min={fieldType === 'number' ? '0' : undefined}
                            />
                          )}
                        </div>
                      </div>

                      {/* Remove Button */}
                      {conditions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeCondition(index)}
                          className="flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-1"
                          disabled={createSegmentMutation.isPending}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* AND Separator */}
                    {index < conditions.length - 1 && (
                      <div className="mt-3 flex items-center">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-3 text-xs font-semibold text-gray-600 bg-gray-50">
                          AND
                        </span>
                        <div className="flex-1 border-t border-gray-300"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {errors.conditions && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.conditions}
              </p>
            )}

            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-gray-700">
                <strong>Note:</strong> All conditions must be met (AND logic). Customers matching all conditions will be included in this segment.
              </p>
            </div>
          </div>

          {/* Preview Info */}
          <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Filter className="w-5 h-5 text-primary-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Segment Preview
                </p>
                <p className="text-xs text-gray-600">
                  This segment will include customers who match <strong>all {conditions.length}</strong> condition{conditions.length > 1 ? 's' : ''} above.
                  The customer count will be calculated after creation.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={createSegmentMutation.isPending}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={createSegmentMutation.isPending}
              className="px-6 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {createSegmentMutation.isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Users className="w-4 h-4" />
                  Create Segment
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSegmentModal;
