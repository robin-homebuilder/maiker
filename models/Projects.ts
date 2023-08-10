import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
    },
    image_base_url: {
      type: String,
      required: true,
    },
    main_image: String,
    other_image: Array
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;