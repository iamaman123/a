import mongoose from "mongoose";

const kundliSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    title: {
      type: String,
      required: [true, "Please provide a title for the Kundli"],
    },
    personalInfo: {
      name: {
        type: String,
        required: [true, "Please provide a name"],
      },
      dateOfBirth: {
        type: Date,
        required: [true, "Please provide date of birth"],
      },
      timeOfBirth: {
        type: String, // HH:mm format
        required: [true, "Please provide time of birth"],
      },
      placeOfBirth: {
        type: String,
        required: [true, "Please provide place of birth"],
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
      },
    },
    // Root level fields for direct Frontend alignment
    name: String,
    dateOfBirth: String,
    placeOfBirth: String,
    timeOfBirth: String,
    gender: String,
    charts: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    planetaryPositions: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
    predictions: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
    chartData: {
      type: Object, // To store JSON containing planetary positions, birth chart, etc.
      default: {},
    },
    type: {
      type: String,
      default: "D1", // e.g., "D1", "Navamsa"
    },
    status: {
      type: String,
      enum: ["ready", "processing"],
      default: "processing",
    },
  },
  {
    timestamps: true,
  }
);

const Kundli = mongoose.model("Kundli", kundliSchema);

export default Kundli;
