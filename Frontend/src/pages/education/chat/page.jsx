"use client";
import BookGrid from "@/components/education/Book/BookGrid";
import Chat from "@/components/education/Book/chat";
import { useState } from "react";
const books = [
    {
        id: 1,
        image: "/books/Ancient-Science-of-Vastu.webp",
        title: "Ancient Science of Vastu",
        author: "Siddharth Borad & Dr. Jayshree Om",
        description: "Explore the foundational principles of Vastu Shastra and its impact on energy balance in architecture.",
        category: "Vastu Shastra",
        tags: ["Vastu", "Architecture", "Energy", "Home Design", "Ancient Science", "Spiritual Harmony"],
    },
    {
        id: 2,
        image: "/books/Elements-Of-Vedic-Astrology.webp",
        title: "Elements Of Vedic Astrology",
        author: "Dr. K.S. Charak",
        description: "A detailed guide on the core elements, charts, and planetary influences in Vedic Astrology.",
        category: "Astrology",
        tags: ["Vedic Astrology", "Planets", "Horoscope", "Birth Chart", "Jyotish", "Education"],
    },
    {
        id: 3,
        image: "/books/Encyclopedia-Vedic-Astrology-Remedies.webp",
        title: "Encyclopedia of Vedic Astrology Remedies",
        author: "Dr.Shankar Adawal",
        description: "Comprehensive reference for astrological remedies, gemstones, mantras, and planetary healing.",
        category: "Remedial Astrology",
        tags: ["Astrology Remedies", "Gemstones", "Mantras", "Healing", "Planets", "Karma"],
    },
    {
        id: 4,
        image: "/books/Numerology-Complete-Guide.webp",
        title: "Numerology: A Complete Guide to Understanding",
        author: "Hans Decoz",
        description: "Decode the hidden meanings of numbers and their influence on personality, destiny, and relationships.",
        category: "Numerology",
        tags: ["Numerology", "Numbers", "Destiny", "Spiritual Science", "Self Discovery", "Vibration"],
    },
    {
        id: 5,
        image: "/books/Past-Life-and-Pending-Karmas.webp",
        title: "Past Life and Pending Karmas",
        author: "Jay Yadav",
        description: "Delve into past life connections and unresolved karmas shaping the present and future.",
        category: "Karma & Spirituality",
        tags: ["Karma", "Past Life", "Rebirth", "Soul Journey", "Spiritual Growth", "Astrology"],
    },
    {
        id: 6,
        image: "/books/Practical-Vedic-Astrology.webp",
        title: "Practical Vedic Astrology: A Complete Self-Learning Treatise",
        author: "G.S. Agarwal",
        description: "A comprehensive and easy-to-understand self-learning guide on Vedic Astrology, covering charts, houses, and planetary interpretations in depth.",
        category: "Astrology",
        tags: ["Vedic Astrology", "Self Learning", "Horoscope", "Planets", "Houses", "Jyotish", "Prediction", "Beginner Guide", "Sagar Publications"],
    },
    {
        id: 7,
        image: "/books/Complete-Book-of-Numerology.webp",
        title: "The Complete Book of Numerology",
        author: "David Phillips",
        description: "A profound study on numerology revealing the hidden blueprint of your soul and destiny.",
        category: "Numerology",
        tags: ["Numerology", "Destiny", "Life Path", "Self Discovery", "Numbers", "Spiritual Science"],
    },
    {
        id: 8,
        image: "/books/Unfolding-the-Veil-of-Mystery-Vaastu.webp",
        title: "Unfolding the Veil of Mystery: Vaastu – The Art and Science",
        author: "Dr. B. Niranjan Babu / Similar Author",
        description: "Unravel the mystical aspects of Vaastu, blending scientific reasoning with ancient spiritual wisdom.",
        category: "Vastu Shastra",
        tags: ["Vaastu", "Architecture", "Energy", "Mysticism", "Harmony", "Sacred Geometry"],
    },
    {
        id: 9,
        image: "/books/Vedic-Astrology-Fundamentals-of-Jyotish.webp",
        title: "Vedic Astrology: A Guide to the Fundamentals of Jyotish",
        author: "Ronnie Gale Dreyer",
        description: "An excellent beginner’s guide to the fundamentals of Jyotish and planetary influences.",
        category: "Astrology",
        tags: ["Jyotish", "Vedic Astrology", "Planets", "Zodiac", "Horoscope", "Education"],
    },
    {
        id: 10,
        image: "/books/Vedic-Astrology-Textbook-Narsimha-Rao.webp",
        title: "Vedic Astrology Textbook",
        author: "Narsimha Rao",
        description: "Structured textbook on predictive astrology with modern interpretations and classical foundations.",
        category: "Academic Astrology",
        tags: ["Vedic Astrology", "Textbook", "Learning", "Charts", "Karma", "Jyotish"],
    },
];
export default function Page() {
    const [searchQuery, setSearchQuery] = useState("");
    return (<main className="">
      <Chat />
      <BookGrid books={books} searchQuery={searchQuery}/>
  
    </main>);
}
