import cn from "@/lib/cn";
import { splitFirstAndRest } from "@/utils";
import React from "react";
import TrumpetIcon from "../TrumpetIcon";

interface Props {
  title: string;
  body: string;
  className?: string;
}

const AwardCard: React.FC<Props> = ({ title, body, className }) => {
  const [titleFirst, titleRest] = splitFirstAndRest(title);

  return (
    <div className={cn("flex gap-2", className)}>
      <TrumpetIcon className="text-primary size-11" />
      <div>
        <div className="uppercase mb-1 font-semibold">
          <span className="text-primary">{titleFirst}</span> {titleRest}
        </div>
        <div>{body}</div>
      </div>
    </div>
  );
};

export default AwardCard;
