"use client";
import React from "react";
import Image from "next/image";
import BookButton from "./BookButton";
const BookCard = ({ image, title, author, description, onAskAI, }) => {
    return (<div className="mt-2 group flex flex-col items-center overflow-hidden hover:shadow-xl rounded-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Book Image */}
      <div className="relative w-full h-[230px] sm:h-[250px] md:h-[270px] overflow-hidden">
        <Image src={image || "/books/placeholder.webp"} alt={title} fill quality={90} className="object-contain transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" priority={false} loading="lazy" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48L3N2Zz4=" onError={(e) => {
            const target = e.target;
            if (target.src !== "/books/placeholder.webp") {
                target.src = "/books/placeholder.webp";
            }
        }}/>
        <div className="absolute inset-0 bg-gradient-to-t from-orange-50/40 via-transparent to-transparent pointer-events-none"/>
      </div>

      {/* Book Info */}
      <div className="flex flex-col items-center text-center w-full p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{author}</p>
        {description && (<p className="text-xs text-gray-600 line-clamp-2 max-w-xs">
            {description}
          </p>)}

        {/* Button */}
        <div className="mt-2">
          <BookButton onClick={onAskAI} label="Ask AI"/>
        </div>
      </div>
    </div>);
};
export default BookCard;
