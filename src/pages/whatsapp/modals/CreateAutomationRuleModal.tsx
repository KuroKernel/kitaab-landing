import React, { useState, useEffect } from 'react';
import { X, Zap, AlertCircle, Send, Plus, Settings } from 'lucide-react';
import { useCreateAutomationRule } from '../hooks/useWhatsApp';
import { CreateAutomationPayload, AutomationTrigger, AutomationAction } from '../../../types/whatsapp.types';

interface CreateAutomationRuleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Trigger options with descriptions
const triggerOptions: { value: AutomationTrigger; label: string; description: string }[] = [
  { value: 'sale_completed', label: 'Sale Completed', description: 'When a sale is marked as completed' },
  { value: 'payment_due', label: 'Payment Due', description: 'When a payment becomes due' },
  { value: 'customer_added', label: 'Customer Added', description: 'When a new customer is added' },
  { value: 'order_placed', label: 'Order Placed', description: 'When a customer places an order' },
  { value: 'low_stock', label: 'Low Stock', description: 'When product inventory runs low' },
  { value: 'birthday', label: 'Customer Birthday', description: 'On customer\'s birthday' },
  { value: 'custom', label: 'Custom Event', description: 'Define a custom trigger event' },
];

// Action options
const actionOptions: { value: AutomationAction; label: string; description: string }[] = [
  { value: 'send_message', label: 'Send WhatsApp Message', description: 'Send a WhatsApp message to the customer' },
  { value: 'send_invoice', label: 'Send Invoice', description: 'Generate and send an invoice' },
  { value: 'send_reminder', label: 'Send Reminder', description: 'Send a payment or follow-up reminder' },
  { value: 'update_customer', label: 'Update Customer', description: 'Update customer information' },
  { value: 'create_task', label: 'Create Task', description: 'Create a task for team members' },
];

// Available variables for message templates
const availableVariables = [
  { key: '{{customer_name}}', label: 'Customer Name' },
  { key: '{{business_name}}', label: 'Business Name' },
  { key: '{{amount}}', label: 'Amount' },
  { key: '{{date}}', label: 'Date' },
  { key: '{{invoice_number}}', label: 'Invoice Number' },
  { key: '{{outstanding_balance}}', label: 'Outstanding Balance' },
];

const CreateAutomationRuleModal: React.FC<CreateAutomationRuleModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    trigger_type: 'sale_completed' as AutomationTrigger,
    action_type: 'send_message' as AutomationAction,
    message_template: '',
    is_active: true,
  });

  // Trigger conditions - dynamic based on trigger type
  const [triggerConditions, setTriggerConditions] = useState<Record<string, any>>({
    delay_minutes: 0,
  });

  // Action config - dynamic based on action type
  const [actionConfig, setActionConfig] = useState<Record<string, any>>({});

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showVariableHelper, setShowVariableHelper] = useState(false);
  const createAutomationMutation = useCreateAutomationRule();

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        description: '',
        trigger_type: 'sale_completed',
        action_type: 'send_message',
        message_template: '',
        is_active: true,
      });
      setTriggerConditions({ delay_minutes: 0 });
      setActionConfig({});
      setErrors({});
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

  const handleTriggerConditionChange = (key: string, value: any) => {
    setTriggerConditions(prev => ({ ...prev, [key]: value }));
  };

  const handleActionConfigChange = (key: string, value: any) => {
    setActionConfig(prev => ({ ...prev, [key]: value }));
  };

  const insertVariable = (variable: string) => {
    const textarea = document.querySelector('textarea[name="message_template"]') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = formData.message_template;
      const newText = text.substring(0, start) + variable + text.substring(end);
      handleInputChange('message_template', newText);

      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + variable.length, start + variable.length);
      }, 0);
    } else {
      handleInputChange('message_template', formData.message_template + variable);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Automation rule name is required';
    }

    if (formData.action_type === 'send_message' && !formData.message_template.trim()) {
      newErrors.message_template = 'Message template is required for send message action';
    }

    if (triggerConditions.delay_minutes < 0) {
      newErrors.delay = 'Delay cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload: CreateAutomationPayload = {
      name: formData.name.trim(),
      description: formData.description.trim() || undefined,
      trigger_type: formData.trigger_type,
      trigger_conditions: triggerConditions,
      action_type: formData.action_type,
      action_config: actionConfig,
      message_template: formData.action_type === 'send_message' ? formData.message_template.trim() : undefined,
      is_active: formData.is_active,
    };

    try {
      await createAutomationMutation.mutateAsync(payload);
      onClose();
    } catch (error) {
      console.error('Failed to create automation rule:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Create Automation Rule</h2>
            <p className="text-sm text-gray-600 mt-1">
              Automate WhatsApp messages and actions based on business events
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={createAutomationMutation.isPending}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Rule Name */}
          <div>
            <label htmlFor="rule-name" className="block text-sm font-semibold text-gray-900 mb-2">
              Rule Name *
            </label>
            <input
              id="rule-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g., Send Thank You Message After Sale"
              className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={createAutomationMutation.isPending}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Rule Description */}
          <div>
            <label htmlFor="rule-description" className="block text-sm font-semibold text-gray-900 mb-2">
              Description (Optional)
            </label>
            <input
              id="rule-description"
              type="text"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Brief description of this automation"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
              disabled={createAutomationMutation.isPending}
            />
          </div>

          {/* Trigger Section */}
          <div className="p-5 bg-purple-50 border-2 border-purple-200 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Trigger</h3>
                <p className="text-sm text-gray-600">When should this automation run?</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Trigger Type */}
              <div>
                <label htmlFor="trigger-type" className="block text-sm font-semibold text-gray-900 mb-2">
                  Trigger Event *
                </label>
                <select
                  id="trigger-type"
                  value={formData.trigger_type}
                  onChange={(e) => handleInputChange('trigger_type', e.target.value as AutomationTrigger)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                  disabled={createAutomationMutation.isPending}
                >
                  {triggerOptions.map(trigger => (
                    <option key={trigger.value} value={trigger.value}>
                      {trigger.label} - {trigger.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delay Settings */}
              <div>
                <label htmlFor="delay" className="block text-sm font-semibold text-gray-900 mb-2">
                  Delay (Minutes)
                </label>
                <input
                  id="delay"
                  type="number"
                  min="0"
                  value={triggerConditions.delay_minutes}
                  onChange={(e) => handleTriggerConditionChange('delay_minutes', parseInt(e.target.value))}
                  placeholder="0"
                  className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow ${
                    errors.delay ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={createAutomationMutation.isPending}
                />
                <p className="text-xs text-gray-600 mt-1">
                  Wait this many minutes after the trigger before executing the action (0 = immediate)
                </p>
                {errors.delay && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.delay}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="p-5 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Action</h3>
                <p className="text-sm text-gray-600">What should happen when triggered?</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Action Type */}
              <div>
                <label htmlFor="action-type" className="block text-sm font-semibold text-gray-900 mb-2">
                  Action Type *
                </label>
                <select
                  id="action-type"
                  value={formData.action_type}
                  onChange={(e) => handleInputChange('action_type', e.target.value as AutomationAction)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                  disabled={createAutomationMutation.isPending}
                >
                  {actionOptions.map(action => (
                    <option key={action.value} value={action.value}>
                      {action.label} - {action.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Template - Only for send_message action */}
              {formData.action_type === 'send_message' && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message-template" className="block text-sm font-semibold text-gray-900">
                      Message Template *
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowVariableHelper(!showVariableHelper)}
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                      disabled={createAutomationMutation.isPending}
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
                            disabled={createAutomationMutation.isPending}
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
                    placeholder="Dear {{customer_name}}, thank you for your purchase..."
                    rows={5}
                    className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none ${
                      errors.message_template ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={createAutomationMutation.isPending}
                  />
                  {errors.message_template ? (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message_template}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-500 mt-1">
                      Use variables to personalize automated messages
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Active Status Toggle */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-semibold text-gray-900">Activate Rule Immediately</p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Start running this automation as soon as it's created
                </p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => handleInputChange('is_active', e.target.checked)}
                  className="sr-only peer"
                  disabled={createAutomationMutation.isPending}
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </div>
            </label>
          </div>

          {/* Preview Summary */}
          <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-primary-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-2">Automation Summary</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <strong>When:</strong> {triggerOptions.find(t => t.value === formData.trigger_type)?.label}
                    {triggerConditions.delay_minutes > 0 && ` (after ${triggerConditions.delay_minutes} minutes)`}
                  </p>
                  <p>
                    <strong>Then:</strong> {actionOptions.find(a => a.value === formData.action_type)?.label}
                  </p>
                  <p>
                    <strong>Status:</strong> {formData.is_active ? 'Active' : 'Inactive'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={createAutomationMutation.isPending}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={createAutomationMutation.isPending}
              className="px-6 py-2.5 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {createAutomationMutation.isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  Create Automation Rule
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAutomationRuleModal;
