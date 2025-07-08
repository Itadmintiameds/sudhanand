import { timelineData } from './timelineData';
import TimelineCard from "./TimelineCard";

const Timeline: React.FC = () => {
  const rows = [];
  for (let i = 0; i < timelineData.length; i += 4) {
    rows.push(timelineData.slice(i, i + 4));
  }

  return (
    <div className="self-stretch px-28 py-20 bg-gradient-to-b from-black/60 to-stone-500/60 backdrop-blur-[2px] flex flex-col justify-center items-center">
      <div className="w-[1040px] flex flex-col justify-start items-start gap-12">
        {rows.map((row, index) => (
          <div key={index} className="w-full h-60 flex justify-center items-center gap-4">
            {row.map((entry, idx) => (
              <TimelineCard key={idx} {...entry} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
