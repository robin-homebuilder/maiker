import mongoose, { Schema } from "mongoose";

const PackageSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    sub_title: String,
    short_description: String,
    slug: {
      type: String,
      required: true,
    },
    price: Number,
    inclusions: Array,
    note: String
  },
  { timestamps: true }
);

const Package = mongoose.models.Package || mongoose.model("Package", PackageSchema);

export default Package;