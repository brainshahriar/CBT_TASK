import mongoose from "mongoose";
import Technology from "./TechnologyInterface";

const technologySchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  question_id:[{ 
    type:mongoose.Types.ObjectId,
    ref:"question"
}],
});

const technologyModel = mongoose.model<Technology>("technology", technologySchema);

export default technologyModel;
