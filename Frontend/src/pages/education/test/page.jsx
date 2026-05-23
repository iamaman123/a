"use client";
import React from "react";
import TestSection from "@/components/education/test/testsection";
import SubjectCard from "@/components/education/test/SubjectCard";
import TestHero from "@/components/education/test/TestHero";
export default function TestPage() {
    return (<>
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden 
                 bg-gradient-to-br from-[#fafafa] via-[#f6f6ff] to-[#fff] text-black font-[Inter]">

     <TestHero />

     <SubjectCard />
      
    </section>
    <div className="flex justify-center relative w-full">
          <TestSection onSubmitEmail={() => {
            // Handle email submission
            if (process.env.NODE_ENV === "development") {
                console.log("Email submitted");
            }
        }}/>
        </div>
        </>);
}
