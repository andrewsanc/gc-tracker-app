const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GolfCourseSchema = Schema(
  {
    name: { type: String, required: true },
    location: {
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
    },
    holes: [
      {
        number: { type: Number, required: true },
        par: { type: Number, required: true },
        distance: { type: Number, required: true },
      },
    ],
    par: { type: Number, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GolfCourse", GolfCourseSchema);
