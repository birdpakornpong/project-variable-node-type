import * as dynamoose from "dynamoose";

export const TypeSchema = new dynamoose.Schema(
  {
    id: {
      type: Number,
      hashKey: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sk: {
      type: String,
      rangeKey: true, // จำเป็นมาก
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "CreateDate",
      updatedAt: "UpdateDate",
    },
  }
);
