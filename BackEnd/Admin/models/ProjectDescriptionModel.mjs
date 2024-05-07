import mongoose from "mongoose";

const ProjectDescriptionModel = new mongoose.Schema(
{
    ProjectName:String,
    ProjectDescription:String,
    User_ID : Number,
    Student_ID:Number,
    proposal_ID : Number,
    Company_ID : Number,
    Approval : Boolean,
    Admin_Approval_ID: Number,
    Category:String,
    ProjectSubmissionDate:Date
}
);

export default mongoose.model('Project',ProjectDescriptionModel);