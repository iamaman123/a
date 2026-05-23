"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
/* -------------------------------- DATA -------------------------------- */
const QUIZ = [
    {
        id: 1,
        question: "What is Vedic Astrology primarily based on?",
        options: [
            { label: "Solar Zodiac", value: "a" },
            { label: "Sidereal Zodiac", value: "b" },
            { label: "Western Elements", value: "c" },
            { label: "Chinese Calendar", value: "d" },
        ],
        correct: "b",
    },
    {
        id: 2,
        question: "Which chart is the main chart in Vedic Astrology?",
        options: [
            { label: "Navamsa Chart", value: "a" },
            { label: "Moon Chart", value: "b" },
            { label: "Lagna (D1) Chart", value: "c" },
            { label: "Hora Chart", value: "d" },
        ],
        correct: "c",
    },
    {
        id: 3,
        question: "How many Rashis (Zodiac Signs) are there?",
        options: [
            { label: "9", value: "a" },
            { label: "10", value: "b" },
            { label: "12", value: "c" },
            { label: "27", value: "d" },
        ],
        correct: "c",
    },
    {
        id: 4,
        question: "Which planet signifies karma and discipline?",
        options: [
            { label: "Jupiter", value: "a" },
            { label: "Saturn", value: "b" },
            { label: "Mars", value: "c" },
            { label: "Venus", value: "d" },
        ],
        correct: "b",
    },
    {
        id: 5,
        question: "What does the 10th house represent?",
        options: [
            { label: "Marriage", value: "a" },
            { label: "Career & Status", value: "b" },
            { label: "Health", value: "c" },
            { label: "Education", value: "d" },
        ],
        correct: "b",
    },
    {
        id: 6,
        question: "Which Dasha system is most commonly used?",
        options: [
            { label: "Yogini", value: "a" },
            { label: "Kalachakra", value: "b" },
            { label: "Vimshottari", value: "c" },
            { label: "Ashtottari", value: "d" },
        ],
        correct: "c",
    },
    {
        id: 7,
        question: "How many Nakshatras are there?",
        options: [
            { label: "12", value: "a" },
            { label: "24", value: "b" },
            { label: "27", value: "c" },
            { label: "36", value: "d" },
        ],
        correct: "c",
    },
    {
        id: 8,
        question: "Rahu and Ketu are known as?",
        options: [
            { label: "Outer planets", value: "a" },
            { label: "Shadow planets", value: "b" },
            { label: "Benefic planets", value: "c" },
            { label: "Natural malefics", value: "d" },
        ],
        correct: "b",
    },
    {
        id: 9,
        question: "Navamsa chart is mainly used for?",
        options: [
            { label: "Career", value: "a" },
            { label: "Health", value: "b" },
            { label: "Marriage & Dharma", value: "c" },
            { label: "Wealth", value: "d" },
        ],
        correct: "c",
    },
    {
        id: 10,
        question: "Which planet represents wisdom and expansion?",
        options: [
            { label: "Mercury", value: "a" },
            { label: "Jupiter", value: "b" },
            { label: "Sun", value: "c" },
            { label: "Moon", value: "d" },
        ],
        correct: "b",
    },
];
/* -------------------------------- COMPONENT -------------------------------- */
const Quiz = () => {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);
    const question = QUIZ[current];
    const handleNext = () => {
        if (selected === question.correct)
            setScore((s) => s + 1);
        setSelected(null);
        if (current + 1 < QUIZ.length) {
            setCurrent((c) => c + 1);
        }
        else {
            setCompleted(true);
        }
    };
    return (<section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Vedic Astrology Quiz
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            Test your understanding of Jyotish fundamentals.
          </p>
        </motion.div>

        {/* Quiz Card */}
        <AnimatePresence mode="wait">
          {!completed ? (<motion.div key={question.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }} className="rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl p-8">
              <div className="mb-6 text-sm text-gray-500">
                Question {current + 1} of {QUIZ.length}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {question.question}
              </h3>

              <div className="space-y-3">
                {question.options.map((opt) => (<button key={opt.value} onClick={() => setSelected(opt.value)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${selected === opt.value
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-indigo-300"}`}>
                    {opt.label}
                  </button>))}
              </div>

              <button disabled={!selected} onClick={handleNext} className="mt-8 w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition disabled:opacity-40">
                {current + 1 === QUIZ.length ? "Finish Quiz" : "Next Question"}
              </button>
            </motion.div>) : (<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center rounded-3xl bg-white/80 border border-gray-200 shadow-xl p-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Quiz Completed 🎉
              </h3>
              <p className="text-gray-600 mb-6">
                You scored <span className="font-semibold">{score}</span> out of{" "}
                {QUIZ.length}
              </p>
              <button onClick={() => {
                setCurrent(0);
                setScore(0);
                setCompleted(false);
            }} className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium">
                Retry Quiz
              </button>
            </motion.div>)}
        </AnimatePresence>
      </div>
    </section>);
};
export default Quiz;
