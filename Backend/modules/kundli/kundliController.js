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

    const mockCharts = {
      birthChart: [
        [7, 0, 0],
        [0, 1, 8],
        [6, 5, 4],
      ],
      navamsa: [
        [3, 9, 2],
        [4, 1, 12],
        [5, 6, 11],
      ],
      dashamsa: [
        [2, 3, 1],
        [11, 1, 5],
        [10, 9, 6],
      ],
    };

    const mockPlanetaryPositions = [
      { planet: "Sun", sign: "Pisces", degree: "24°18'", house: 7 },
      { planet: "Moon", sign: "Gemini", degree: "12°45'", house: 10 },
      { planet: "Mars", sign: "Capricorn", degree: "8°32'", house: 5 },
      { planet: "Mercury", sign: "Aquarius", degree: "15°22'", house: 6 },
      { planet: "Jupiter", sign: "Cancer", degree: "28°15'", house: 11 },
      { planet: "Venus", sign: "Aries", degree: "5°48'", house: 8 },
      { planet: "Saturn", sign: "Sagittarius", degree: "22°12'", house: 4 },
      { planet: "Rahu", sign: "Aquarius", degree: "18°35'", house: 6 },
      { planet: "Ketu", sign: "Leo", degree: "18°35'", house: 12 },
    ];

    const mockPredictions = [
      {
        category: "Career & Profession",
        description: "Excellent prospects in technology and communication fields. Jupiter in 11th house brings gains through networking and partnerships. Promotion or job change likely in next 6 months.",
        strength: "high",
      },
      {
        category: "Finance & Wealth",
        description: "Steady financial growth with multiple income sources. Venus in 8th house suggests gains through investments. Avoid major expenses in Mercury retrograde periods.",
        strength: "high",
      },
      {
        category: "Health & Vitality",
        description: "Generally robust health with strong immunity. Mars in 5th house gives good physical strength. Pay attention to digestive health and avoid stress-related issues.",
        strength: "medium",
      },
      {
        category: "Marriage & Relationships",
        description: "Harmonious relationships with spouse and family. Moon in 10th house brings emotional stability. Favorable time for marriage proposals and partnerships.",
        strength: "high",
      },
    ];

    const newKundli = await Kundli.create({
      user: req.user ? req.user.id : undefined, // Link to user if logged in
      title,
      personalInfo,
      name: personalInfo.name,
      dateOfBirth: req.body.dateOfBirth || (personalInfo.dateOfBirth ? new Date(personalInfo.dateOfBirth).toISOString().split('T')[0] : ""),
      placeOfBirth: personalInfo.placeOfBirth,
      timeOfBirth: personalInfo.timeOfBirth,
      gender: personalInfo.gender,
      charts: mockCharts,
      planetaryPositions: mockPlanetaryPositions,
      predictions: mockPredictions,
      type: type || "D1",
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
