const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScorecardSchema = Schema(
  {
    name: { type: String, required: true },
    golfCourse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GolfCourse",
      required: true,
    },
    players: [
      {
        name: { type: String, required: true },
        scores: [
          {
            hole: { type: Number, required: true },
            strokes: { type: Number, required: true },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Scorecard", ScorecardSchema);
