import React from "react";

export interface TimelineCardProps {
  year: string;
  content: string | string[];
  highlight?: boolean;
  image?: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  year,
  content,
  highlight = false,
  image,
}) => (
  <div className="w-56 h-60 inline-flex flex-col justify-start items-center gap-1">
    <div
      className={`self-stretch h-16 px-2.5 py-4 rounded-t-2xl ${
        highlight
          ? "bg-gradient-to-b from-red-200/20 to-stone-300/20"
          : "bg-black/10 outline outline-1 outline-white/40"
      } backdrop-blur-md inline-flex justify-center items-center`}
    >
      <div className="text-center text-rose-50 text-3xl font-semibold font-['Geist'] leading-10">
        {year}
      </div>
    </div>
    <div
      className={`self-stretch flex-1 px-6 py-4 rounded-b-2xl ${
        highlight
          ? "bg-gradient-to-b from-red-200/20 to-stone-300/20"
          : "bg-black/10 outline outline-1 outline-white/40"
      } backdrop-blur-md flex flex-col justify-center items-center gap-2`}
    >
      {image ? (
        <img
          className="self-stretch flex-1 object-contain"
          src={image}
          alt={year}
        />
      ) : Array.isArray(content) ? (
        content.map((line, idx) => (
          <div
            key={idx}
            className="self-stretch text-center text-rose-50 text-sm font-semibold font-['Geist'] leading-tight"
          >
            {line}
            {idx < content.length - 1 && (
              <div className="my-1 h-px bg-white/40" />
            )}
          </div>
        ))
      ) : (
        <div className="self-stretch text-center text-rose-50 text-sm font-semibold font-['Geist'] leading-tight">
          {content}
        </div>
      )}
    </div>
  </div>
);

export default TimelineCard;
