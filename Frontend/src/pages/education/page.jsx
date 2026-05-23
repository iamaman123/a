"use client";
import React, { useState } from "react";
import BookGrid from "@/components/education/Book/BookGrid";
import EduHeroSection from "@/components/education/Book/eduhero";
import TestSection from "@/components/education/test/testsection";
const books = [
    {
        id: 1,
        image: "/books/Pitra-Book.png",
        title: "Pitra Tumhe Pukarte H",
        author: "Sunil Vashist",
        description: "Understand Pitra Dosha and perform remedies with ease.",
        category: "Spiritual",
        tags: ["Pitra Dosh", "Remedies", "Ancestral", "Astrology"],
    },
    {
        id: 2,
        image: "/books/Pitra-Book.png",
        title: "Pitra Dosh: Complete Guide",
        author: "Dr. Radha Sharma",
        description: "Explore deep karmic and ancestral astrology with practical solutions.",
        category: "Educational",
        tags: ["Pitra Dosh", "Karmic", "Ancestral", "Vedic"],
    },
    {
        id: 3,
        image: "/books/Jyotish-Book.png",
        title: "Jyotish: The Science of Soul & Karmic Mathematics",
        author: "Sunil Vashist",
        description: "Discover the mathematical essence of the soul and destiny.",
        category: "Academic",
        tags: ["Jyotish", "Mathematics", "Karma", "Soul"],
    },
    {
        id: 4,
        image: "/books/Pitra-Book.png",
        title: "Vastu Shastra Made Simple",
        author: "Dr. Anil Kumar",
        description: "Learn Vastu principles for a harmonious living space.",
        category: "Architecture",
        tags: ["Vastu", "Home", "Energy", "Feng Shui"],
    },
    {
        id: 5,
        image: "/books/Jyotish-Book.png",
        title: "Planetary Remedies Guide",
        author: "Swami Prakash",
        description: "Effective remedies for planetary afflictions and doshas.",
        category: "Remedial",
        tags: ["Remedies", "Planets", "Doshas", "Healing"],
    },
    {
        id: 6,
        image: "/books/Pitra-Book.png",
        title: "Nakshatra Secrets Unveiled",
        author: "Prof. Leela Devi",
        description: "Deep insights into Nakshatras and their influence on life.",
        category: "Academic",
        tags: ["Nakshatra", "Stars", "Destiny", "Vedic"],
    },
];
export default function Page() {
    const [searchQuery, setSearchQuery] = useState("");
    return (<main className="bg-gray-50 min-h-screen">
      <EduHeroSection onSearchChange={setSearchQuery}/>
      <BookGrid books={books} searchQuery={searchQuery}/>
      <TestSection />
    </main>);
}
