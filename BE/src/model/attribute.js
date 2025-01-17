import { number } from "joi";
import mongoose, { Schema } from "mongoose";
const ValueAttributeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        }
    },
    { timestamps: true, versionKey: false }
)
export const ValueAttributeModel = mongoose.model("ValueAttribute", ValueAttributeSchema);

const AttributeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        values: [
            {
                type: Schema.Types.ObjectId,
                ref: "ValueAttribute",
            },
        ],
    },
    { timestamps: true, versionKey: false }
)

export default mongoose.model("Attribute", AttributeSchema)