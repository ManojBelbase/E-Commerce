import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
type Props = {
  rating: number;
};
const TOTAL_STAR_LENGTH = 5;
const RatingStars = ({ rating }: Props) => {
  const fullStarLength = Math.floor(rating);
  const emptyStarLength =
    TOTAL_STAR_LENGTH - TOTAL_STAR_LENGTH - Math.ceil(rating);
  const halfStarLenght = TOTAL_STAR_LENGTH - fullStarLength - emptyStarLength;
  return (
    <div className="flex items-center gap-1">
      {new Array(fullStarLength).fill("_").map((_, ind) => (
        <FaStar key={ind} />
      ))}
      {new Array(halfStarLenght).fill("_").map((_, ind) => (
        <FaStarHalfAlt key={ind} />
      ))}
      {new Array(emptyStarLength).fill("_").map((_, ind) => (
        <FaRegStar key={ind} />
      ))}
    </div>
  );
};

export default RatingStars;
