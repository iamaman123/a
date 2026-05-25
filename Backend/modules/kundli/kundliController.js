import Kundli from "./kundliModel.js";
import AppError from "../../utils/appError.js";

// @desc    Generate Kundli
// @route   POST /api/kundli/generate
export const generateKundli = async (req, res, next) => {
  try {
    let { title, personalInfo, type } = req.body;

    // Handle flat request structure from Frontend
    if (!personalInfo) {
      personalInfo = {
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        timeOfBirth: req.body.timeOfBirth,
        placeOfBirth: req.body.placeOfBirth,
        gender: req.body.gender ? (req.body.gender.charAt(0).toUpperCase() + req.body.gender.slice(1)) : undefined, // Convert male -> Male
      };
    }

    if (!title) {
      title = `${personalInfo.name || "My"}'s Kundli`;
    }

    // TODO: Integrate MCP Server and RAG for astrological calculations
    const mockKundliData = {
      ascendant: "Aries",
      moonSign: "Taurus",
      sunSign: "Gemini",
      predictions: "You will have a great day!",
    };

    const newKundli = await Kundli.create({
      user: req.user ? req.user.id : undefined, // Link to user if logged in
      title,
      personalInfo,
      type: type || "D1",
      kundliData: mockKundliData, 
      status: "ready", // Mock status
    });

    res.status(201).json({
      status: "success",
      data: {
        kundli: newKundli,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all saved Kundlis for logged in user
// @route   GET /api/kundli
export const getSavedKundlis = async (req, res, next) => {
  try {
    const kundlis = await Kundli.find({ user: req.user.id });

    res.status(200).json({
      status: "success",
      results: kundlis.length,
      data: {
        kundlis,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get specific Kundli
// @route   GET /api/kundli/:id
export const getKundliById = async (req, res, next) => {
  try {
    const kundli = await Kundli.findById(req.params.id);

    if (!kundli) {
      return next(new AppError("No Kundli found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        kundli,
      },
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete specific Kundli
// @route   DELETE /api/kundli/:id
export const deleteKundli = async (req, res, next) => {
  try {
    const kundli = await Kundli.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id, // Only allow user to delete their own kundli
    });

    if (!kundli) {
      return next(new AppError("No Kundli found with that ID or unauthorized", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
