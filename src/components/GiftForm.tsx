import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Gift } from 'lucide-react';

const giftSchema = z.object({
  recipientName: z.string().min(2, 'Recipient name is required'),
  recipientEmail: z.string().email('Valid email is required'),
  giftMessage: z.string().max(200, 'Message must be less than 200 characters'),
});

type GiftFormData = z.infer<typeof giftSchema>;

interface GiftFormProps {
  onSubmit: (data: GiftFormData) => void;
  onCancel: () => void;
}

const GiftForm: React.FC<GiftFormProps> = ({ onSubmit, onCancel }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<GiftFormData>({
    resolver: zodResolver(giftSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Recipient's Name</label>
        <input
          {...register('recipientName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
        {errors.recipientName && (
          <p className="mt-1 text-sm text-red-600">{errors.recipientName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Recipient's Email</label>
        <input
          type="email"
          {...register('recipientEmail')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
        {errors.recipientEmail && (
          <p className="mt-1 text-sm text-red-600">{errors.recipientEmail.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gift Message</label>
        <textarea
          {...register('giftMessage')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
        />
        {errors.giftMessage && (
          <p className="mt-1 text-sm text-red-600">{errors.giftMessage.message}</p>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
        >
          <Gift className="mr-2 h-5 w-5" />
          Send as Gift
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default GiftForm;