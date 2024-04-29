import mongoose from "mongoose";

const ProjectDescriptionModel = new mongoose.Schema(
{
    ProjectName:String,
    ProjectDescription:String,
    User_ID : Number,
    Company_ID : Number,
    Approval : Boolean,
    Admin_Approval_ID: Number
}
);

export default mongoose.model('Project',ProjectDescriptionModel);