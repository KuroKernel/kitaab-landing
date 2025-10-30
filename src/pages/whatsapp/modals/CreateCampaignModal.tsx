import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, Users, MessageSquare, Plus, AlertCircle } from 'lucide-react';
import { useWhatsAppSegments, useMessageTemplates, useCreateCampaign } from '../hooks/useWhatsApp';
import { CreateCampaignPayload } from '../../../types/whatsapp.types';

interface CreateCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCampaignModal: React.FC<CreateCampaignModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    message_template: '',
    segment_ids: [] as string[],
    scheduled_at: '',
    variables: {} as Record<string, string>,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [scheduleType, setScheduleType] = useState<'now' | 'scheduled'>('now');
  const [showVariableHelper, setShowVariableHelper] = useState(false);

  // Fetch segments and templates
  const { data: segmentsData, isLoading: segmentsLoading } = useWhatsAppSegments();
  const { data: templatesData, isLoading: templatesLoading } = useMessageTemplates();
  const createCampaignMutation = useCreateCampaign();

  const segments = segmentsData || [];
  const templates = templatesData || [];

  // Available variables for message templates
  const availableVariables = [
    { key: '{{customer_name}}', label: 'Customer Name' },
    { key: '{{business_name}}', label: 'Business Name' },
    { key: '{{total_purchases}}', label: 'Total Purchases' },
    { key: '{{last_purchase_date}}', label: 'Last Purchase Date' },
    { key: '{{outstanding_balance}}', label: 'Outstanding Balance' },
  ];

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        description: '',
        message_template: '',
        segment_ids: [],
        scheduled_at: '',
        variables: {},
      });
      setErrors({});
      setScheduleType('now');
      setShowVariableHelper(false);
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

  const handleSegmentToggle = (segmentId: string) => {
    setFormData(prev => {
      const isSelected = prev.segment_ids.includes(segmentId);
      return {
        ...prev,
        segment_ids: isSelected
          ? prev.segment_ids.filter(id => id !== segmentId)
          : [...prev.segment_ids, segmentId]
      };
    });
  };

  const insertVariable = (variable: string) => {
    const textarea = document.querySelector('textarea[name="message_template"]') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = formData.message_template;
      const newText = text.substring(0, start) + variable + text.substring(end);
      handleInputChange('message_template', newText);

      // Set cursor position after inserted variable
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + variable.length, start + variable.length);
      }, 0);
    } else {
      // Fallback: append to end
      handleInputChange('message_template', formData.message_template + variable);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Campaign name is required';
    }

    if (!formData.message_template.trim()) {
      newErrors.message_template = 'Message template is required';
    } else if (formData.message_template.length > 1000) {
      newErrors.message_template = 'Message template must be less than 1000 characters';
    }

    if (formData.segment_ids.length === 0) {
      newErrors.segment_ids = 'Please select at least one customer segment';
    }

    if (scheduleType === 'scheduled') {
      if (!formData.scheduled_at) {
        newErrors.scheduled_at = 'Please select a date and time';
      } else {
        const scheduledDate = new Date(formData.scheduled_at);
        const now = new Date();
        if (scheduledDate <= now) {
          newErrors.scheduled_at = 'Scheduled time must be in the future';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload: CreateCampaignPayload = {
      name: formData.name.trim(),
      description: formData.description.trim() || undefined,
      message_template: formData.message_template.trim(),
      segment_ids: formData.segment_ids,
      scheduled_at: scheduleType === 'scheduled' ? formData.scheduled_at : undefined,
      variables: formData.variables,
    };

    try {
      await createCampaignMutation.mutateAsync(payload);
      onClose();
    } catch (error) {
      // Error is handled by the mutation hook with toast
      console.error('Failed to create campaign:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Create Campaign</h2>
            <p className="text-sm text-gray-600 mt-1">
              Create a new WhatsApp marketing campaign to reach your customers
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={createCampaignMutation.isPending}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Campaign Name */}
          <div>
            <label htmlFor="campaign-name" className="block text-sm font-semibold text-gray-900 mb-2">
              Campaign Name *
            </label>
            <input
              id="campaign-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g., New Year Sale Campaign"
              className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={createCampaignMutation.isPending}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Campaign Description */}
          <div>
            <label htmlFor="campaign-description" className="block text-sm font-semibold text-gray-900 mb-2">
              Description (Optional)
            </label>
            <input
              id="campaign-description"
              type="text"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Brief description of the campaign"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
              disabled={createCampaignMutation.isPending}
            />
          </div>

          {/* Message Template */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="message-template" className="block text-sm font-semibold text-gray-900">
                Message Template *
              </label>
              <button
                type="button"
                onClick={() => setShowVariableHelper(!showVariableHelper)}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                disabled={createCampaignMutation.isPending}
              >
                <Plus className="w-4 h-4" />
                Insert Variable
              </button>
            </div>

            {showVariableHelper && (
              <div className="mb-3 p-3 bg-primary-50 border border-primary-200 rounded-lg">
                <p className="text-xs text-gray-700 mb-2 font-medium">Click to insert:</p>
                <div className="flex flex-wrap gap-2">
                  {availableVariables.map((variable) => (
                    <button
                      key={variable.key}
                      type="button"
                      onClick={() => insertVariable(variable.key)}
                      className="px-3 py-1 bg-white border border-primary-300 rounded-md text-xs font-mono text-primary-700 hover:bg-primary-100 transition-colors"
                      disabled={createCampaignMutation.isPending}
                    >
                      {variable.key}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <textarea
              id="message-template"
              name="message_template"
              value={formData.message_template}
              onChange={(e) => handleInputChange('message_template', e.target.value)}
              placeholder="Hello {{customer_name}}, we have a special offer just for you..."
              rows={6}
              className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none ${
                errors.message_template ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={createCampaignMutation.isPending}
            />
            <div className="flex items-center justify-between mt-1">
              {errors.message_template ? (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message_template}
                </p>
              ) : (
                <p className="text-xs text-gray-500">
                  Use variables to personalize messages
                </p>
              )}
              <span className="text-xs text-gray-500">
                {formData.message_template.length}/1000
              </span>
            </div>
          </div>

          {/* Select Segments */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Target Segments *
            </label>
            {segmentsLoading ? (
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-sm text-gray-600">Loading segments...</p>
              </div>
            ) : segments.length === 0 ? (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  No segments available. Create customer segments first to target specific groups.
                </p>
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3">
                {segments.map((segment) => (
                  <label
                    key={segment.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.segment_ids.includes(segment.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 bg-white hover:border-primary-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.segment_ids.includes(segment.id)}
                      onChange={() => handleSegmentToggle(segment.id)}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      disabled={createCampaignMutation.isPending}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{segment.name}</p>
                      <p className="text-xs text-gray-600 flex items-center gap-1 mt-0.5">
                        <Users className="w-3 h-3" />
                        {segment.customer_count.toLocaleString()} customers
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            )}
            {errors.segment_ids && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.segment_ids}
              </p>
            )}
          </div>

          {/* Schedule Options */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Schedule
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setScheduleType('now')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  scheduleType === 'now'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 bg-white hover:border-primary-200'
                }`}
                disabled={createCampaignMutation.isPending}
              >
                <Send className={`w-5 h-5 mb-2 ${scheduleType === 'now' ? 'text-primary-600' : 'text-gray-400'}`} />
                <p className="text-sm font-semibold text-gray-900">Send Now</p>
                <p className="text-xs text-gray-600 mt-1">Send immediately after creation</p>
              </button>

              <button
                type="button"
                onClick={() => setScheduleType('scheduled')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  scheduleType === 'scheduled'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 bg-white hover:border-primary-200'
                }`}
                disabled={createCampaignMutation.isPending}
              >
                <Calendar className={`w-5 h-5 mb-2 ${scheduleType === 'scheduled' ? 'text-primary-600' : 'text-gray-400'}`} />
                <p className="text-sm font-semibold text-gray-900">Schedule</p>
                <p className="text-xs text-gray-600 mt-1">Choose a specific date/time</p>
              </button>
            </div>

            {scheduleType === 'scheduled' && (
              <div className="mt-3">
                <input
                  type="datetime-local"
                  value={formData.scheduled_at}
                  onChange={(e) => handleInputChange('scheduled_at', e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                  className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow ${
                    errors.scheduled_at ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={createCampaignMutation.isPending}
                />
                {errors.scheduled_at && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.scheduled_at}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Total Recipients Preview */}
          {formData.segment_ids.length > 0 && (
            <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Total Recipients: {segments
                      .filter(s => formData.segment_ids.includes(s.id))
                      .reduce((sum, s) => sum + s.customer_count, 0)
                      .toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Messages will be sent to customers in selected segments
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={createCampaignMutation.isPending}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={createCampaignMutation.isPending}
              className="px-6 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {createCampaignMutation.isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Create Campaign
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaignModal;
