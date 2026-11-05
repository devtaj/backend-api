import mongoose from "mongoose";

const cultureandTraditionsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,

        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Auth",
            required: true
        },
        imageUrl: {
            type: [String]
        }

    },
    { timestamps: true }

);


export default mongoose.model("CultureandTraditions", cultureandTraditionsSchema);  