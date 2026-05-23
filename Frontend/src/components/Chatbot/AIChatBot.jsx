"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import AIChatBox from "@/components/Chatbot/AIChatBox";
import { motion, AnimatePresence } from "framer-motion";
import Orb from "../ui/bits/orb";
export default function AIChatBot({ onSend, }) {
    const [messages, setMessages] = useState([]);
    const [started, setStarted] = useState(false);
    const handleSend = (text) => {
        if (!started)
            setStarted(true);
        setMessages((prev) => [...prev, { role: "user", text }]);
        // Call optional onSend callback if provided
        onSend?.(text);
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: "✨ This is a demo reply. Soon this will read your kundli & respond with spiritual clarity.",
                },
            ]);
        }, 600);
    };
    const orbRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const handleHover = useCallback((state) => {
        setHovered(state);
        orbRef.current?.setHoverState?.(state);
    }, []);
    useEffect(() => {
        if (!orbRef.current)
            return;
        const intensity = hovered ? 1.2 : 0.5;
        orbRef.current.setIntensity?.(intensity);
    }, [hovered]);
    return (<div className="
        w-full 
        max-w-sm 
        mx-auto 
        flex 
        flex-col 
        rounded-3xl 
        border border-gray-200 
        bg-white 
        shadow-[0_12px_40px_rgba(0,0,0,0.05)]
        overflow-hidden 
        h-[650px]
        font-mono
      ">
      {/* HEADER */}
      <div className="px-6 py-5 border-b border-gray-100 bg-white">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          Chatbot
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Ask spiritual, kundli-based questions
        </p>
      </div>

      {/* ORB + INTRO (fades on first message) */}
      <AnimatePresence>
        {!started && (<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97, y: -8 }} transition={{ duration: 0.4, ease: "easeOut" }} className="flex flex-col items-center justify-center py-10 px-6 pointer-events-none">
            <div className="relative h-40 w-40 flex items-center justify-center">
                  <Orb hoverIntensity={0.8} rotateOnHover hue={220} forceHoverState={hovered}/>

            </div>

            <p className="text-center text-[13px] mt-4 text-gray-600 leading-relaxed">
              A calm & spiritual AI that understands your charts  
              and answers with clarity, compassion & Vedic insight.
            </p>
          </motion.div>)}
      </AnimatePresence>

      {/* CHAT MESSAGES */}
      <div className="
          flex-1 
          overflow-y-auto 
          px-6 
          py-4 
          space-y-4 
          scrollbar-thin 
          scrollbar-track-transparent 
          scrollbar-thumb-gray-300
        ">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (<motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className={`w-fit max-w-[80%] px-4 py-2 rounded-2xl text-[13px] ${msg.role === "user"
                ? "ml-auto bg-fuchsia-100 text-fuchsia-700 rounded-br-sm"
                : "mr-auto bg-gray-100 text-gray-800 rounded-bl-sm"}`}>
              {msg.text}
            </motion.div>))}
        </AnimatePresence>
      </div>

      {/* CHATBOX */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <AIChatBox onSend={handleSend}/>
      </div>
    </div>);
}
