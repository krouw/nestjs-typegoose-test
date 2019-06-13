import { Typegoose, prop } from 'typegoose';

export class Product extends Typegoose {
  _id: any;

  @prop({ default: '', lowercase: true })
  category?: string;

  @prop({ default: '' })
  description?: string;

  @prop({ default: 0 })
  deviceCount: number;

  @prop({ default: '', lowercase: true })
  hardwareVersion?: string;

  @prop({ required: true, unique: true, lowercase: true })
  uid: string;

  @prop({ default: '', lowercase: true })
  manufacturer?: string;

  @prop({ required: true, unique: true, lowercase: true })
  name: string;

  @prop({
    required: true,
    lowercase: true,
    enum: ['device', 'gateway'],
  })
  nodeType: string;

  @prop({ required: true })
  secret: string;

  @prop({ default: [] })
  tags?: [];
}

const ProductModelConfig = {
  typegooseClass: Product,
  schemaOptions: {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (doc, ret, options) => {
        delete ret._id;
        delete ret.__v;
        delete ret.id;
        return ret;
      },
    },
    timestamps: true,
  },
};

export default ProductModelConfig;
