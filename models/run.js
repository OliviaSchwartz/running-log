const { Schema, model } = require('mongoose')

const runSchema = new Schema(
  {
    date: { type: Date, required: true },
    distance: { type: Number, required: true },
    time: { type: Number, required: true },
    difficulty: { type: Number, required: true }
  },
  { timestamps: true }
)
module.exports = runSchema
