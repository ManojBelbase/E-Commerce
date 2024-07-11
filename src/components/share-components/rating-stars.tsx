import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
type Props = {
  rating: number;
};
const TOTAL_STARS_COUNT = 5;
const RatingStars = ({ rating }: Props) => {
  const fullStarLength = Math.floor(rating); // 2
  const emptyStarLength = TOTAL_STARS_COUNT - Math.ceil(rating);
  const halfStarLength = TOTAL_STARS_COUNT - fullStarLength - emptyStarLength;

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {new Array(fullStarLength).fill("_").map((_, ind) => (
        <FaStar key={ind} />
      ))}
      {new Array(halfStarLength).fill("_").map((_, ind) => (
        <FaStarHalfAlt key={ind} />
      ))}
      {new Array(emptyStarLength).fill("_").map((_, ind) => (
        <FaRegStar key={ind} />
      ))}
    </div>
  );
};

export default RatingStars;
