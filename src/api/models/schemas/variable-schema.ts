import * as dynamoose from "dynamoose";

export const VariableSchema = new dynamoose.Schema(
  {
    id: {
      type: Number,
      hashKey: true,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    variable: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    typeId: {
      type: Number,
      required: true,
    },
    mean: {
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
