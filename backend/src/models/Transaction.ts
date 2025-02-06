import mongoose, { Document, Schema } from 'mongoose';

export interface ITransaction extends Document {
  order: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentDetails: {
    provider: string;
    transactionId: string;
    [key: string]: any;
  };
}

const transactionSchema = new Schema<ITransaction>({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'USD'
  },
  paymentMethod: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentDetails: {
    provider: String,
    transactionId: String
  }
}, {
  timestamps: true
});

export const Transaction = mongoose.model<ITransaction>('Transaction', transactionSchema);
