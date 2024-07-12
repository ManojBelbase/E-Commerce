import { Tproduct } from "@/types/product";
import React from "react";
import RatingStars from "../share-components/rating-stars";

type Props = {
  product: Pick<Tproduct, "reviews">;
};

export default function ProductReviews({ product }: Props) {
  return (
    <section className="mt-12">
      <h3 className="font-medium text-2xl mb-5">
        What customers think about this product
      </h3>

      {product.reviews?.length > 0 ? (
        <ReviewsList product={product} />
      ) : (
        <p className="text-center text-muted-foreground py-2 bg-slate-100">
          There are no reviews for this product.
        </p>
      )}
    </section>
  );
}

function ReviewsList({
  product: { reviews },
}: {
  product: Pick<Tproduct, "reviews">;
}) {
  return (
    <div>
      {reviews.map((review, ind) => {
        return (
          <section key={ind} className="py-5 border-b">
            <h4 className="text-lg font-meduim">{review.username}</h4>
            <div className="flex gap-2 items-center">
              <RatingStars rating={review.rating} />
              <span>({review.rating})</span>
            </div>
            <p className="mt-5 text-muted-foreground">{review.message}</p>
          </section>
        );
      })}
    </div>
  );
}
