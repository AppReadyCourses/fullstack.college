import mongoose, { Schema, Types } from "mongoose";
const ObejctID = Types.ObjectId;

const TopicSchema = new Schema(
  {
    title: String,
    subTitle: String,
    slug: String,
    codes: String,
    pageUrl: String,
    titleImageUrl: String,
    videoUrl: String,
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "tags" }],
  },
  {
    timestamps: true,
  }
);

const TagSchema = new Schema(
  {
    name: String,
    topics: [{ type: mongoose.Schema.Types.ObjectId, ref: "topics" }],
  },
  {
    timestamps: true,
  }
);

// const ctSchema = new Schema({
//   topic: { type: ObejctID, ref: Topic },
//   tag: { type: ObejctID, ref: Tag },
// });
// const CTRel = model("CTRel", ctSchema)

export const Topic =
  mongoose.models.Topic || mongoose.model("Topic", TopicSchema);
export const Tag = mongoose.models.Tag || mongoose.model("Tag", TagSchema);
// export const CTRel = mongoose.models.CTRel || mongoose.model("CTRel", ctSchema);

// export default Course;
