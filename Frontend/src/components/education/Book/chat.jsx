"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ChatBox from "./chatbox";
// Lazy-load react-markdown for performance
const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });
import remarkGfm from "remark-gfm";
const Chat = () => {
    const [messages, setMessages] = useState([
        {
            id: "intro",
            role: "assistant",
            content: "Hi 👋 I'm your AI teacher for **Bṛhat Parāśara Horā Śāstra**. Ask any questions about this book. 🤔",
        },
        {
            id: "question",
            role: "user",
            content: "🧠 What are *special lagnas*?",
        },
        {
            id: "answer",
            role: "assistant",
            content: `**Special Lagnas** are explained in Chapter 5 of *Bṛhat Parāśara Horā Śāstra*.  
They include **Bhava Lagna**, **Hora Lagna**, and **Ghaṭika Lagna**.

- **Bhava Lagna:** Calculated by dividing the time from sunrise to birth into 5-ghaṭi intervals (120 minutes each), then adding the quotient to the Sun's longitude at sunrise.  
- **Hora Lagna:** Calculated by dividing the time from sunrise to birth by 2.5 ghaṭis (60 minutes), then adding it to the Sun's longitude at sunrise.  
- **Ghaṭika Lagna:** Changes every 24 minutes from sunrise. The number of ghaṭis past sunrise is counted as signs, and the vighaṭis divided by 2 are treated as degrees. This sum is added to the Sun's longitude at sunrise.

Each special Lagna yields a different Bhava chart, and their combined analysis gives a more accurate picture of planetary effects.`,
        },
    ]);
    const containerRef = useRef(null);
    // Auto-scroll to bottom on new message
    useEffect(() => {
        const el = containerRef.current;
        if (el)
            el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }, [messages.length]);
    const handleSend = (newMessage) => {
        if (!newMessage.trim())
            return;
        setMessages((prev) => [
            ...prev,
            { id: crypto.randomUUID(), role: "user", content: newMessage },
            {
                id: crypto.randomUUID(),
                role: "assistant",
                content: "(Demo) Thanks for your question! A detailed answer will appear here soon.",
            },
        ]);
    };
    return (<section className="relative mx-auto w-full bg-gradient-to-br from-[#ff8dc7] via-[#a48eff] to-[#3fcaff] p-[2px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden" style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        }}>
      {/* Glassmorphic Chat Container */}
      <div className="bg-white/60 backdrop-blur-2xl p-5 sm:p-8 md:p-10 font-[Inter] text-gray-800">
        <div ref={containerRef} className="h-[70vh] overflow-y-auto rounded-2xl bg-white/70 p-4 sm:p-6 flex flex-col gap-4 scroll-smooth">
          {messages.map((msg) => (<motion.div key={msg.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] whitespace-pre-line break-words rounded-2xl px-4 py-3 text-[15px] leading-relaxed shadow-sm transition-all ${msg.role === "assistant"
                ? "bg-white/90 text-gray-800 ring-1 ring-black/5"
                : "bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 text-white font-medium shadow-md"}`}>
                {/* Render Markdown safely */}
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                strong: ({ children }) => (<strong className="font-semibold text-gray-900">
                        {children}
                      </strong>),
                em: ({ children }) => (<em className="italic text-gray-700">{children}</em>),
                ul: ({ children }) => (<ul className="list-disc ml-5 space-y-1">{children}</ul>),
                li: ({ children }) => (<li className="text-gray-800">{children}</li>),
                p: ({ children }) => (<p className="mb-2 last:mb-0">{children}</p>),
            }}>
                  {msg.content}
                </ReactMarkdown>
              </div>
            </motion.div>))}
        </div>

        {/* Input Box */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5">
          <ChatBox onSend={handleSend}/>
        </motion.div>
      </div>

      {/* Floating background gradient animation */}
      <motion.div className="absolute -top-20 -left-20 h-72 w-72 bg-gradient-to-tr from-[#ff9ae0] via-[#a38bff] to-[#3ccaff] rounded-full blur-3xl opacity-40" animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
        }} transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
        }}/>
    </section>);
};
export default Chat;
