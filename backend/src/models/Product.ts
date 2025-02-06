import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  platform: string[];
  genre: string[];
  publisher: string;
  developer: string;
  releaseDate: Date;
  images: string[];
  stock: number;
  rating: number;
  isActive: boolean;
  systemRequirements: {
    minimum: object;
    recommended: object;
  };
}

const productSchema = new Schema<IProduct>({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discountPrice: Number,
  platform: [{
    type: String,
    required: true
  }],
  genre: [{
    type: String,
    required: true
  }],
  publisher: {
    type: String,
    required: true
  },
  developer: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  images: [String],
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  isActive: {
    type: Boolean,
    default: true
  },
  systemRequirements: {
    minimum: {
      type: Object,
      required: true
    },
    recommended: {
      type: Object,
      required: true
    }
  }
}, {
  timestamps: true
});

export const Product = mongoose.model<IProduct>('Product', productSchema);
