import { Schema, model } from 'mongoose'

const environmentSchema = new Schema({
    name: String,
    modelURL: String,
    imgURL: String,
    pathURL: String,
    description: String,
    author: String,
    license: String,
    exhibits: [{
        ref: "Exhibit",
        type: Schema.Types.ObjectId
    }],
    panels: [
        String //<--For now
        // ref: "Panel",
        // type: Schema.Types.ObjectId
    ],
    isUsed: Boolean
},
{timestamps: true,
versionKey: false})

export default model('Environment', environmentSchema)