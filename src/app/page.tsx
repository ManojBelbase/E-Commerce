import CarouselWrapper from "@/components/home-page/carousel/carousel-wrapper";
import CategoriesWrapper from "@/components/home-page/categories/categories-wrapper";
import ProductWrapper from "@/components/home-page/products/product-wrapper";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <CarouselWrapper />
      <CategoriesWrapper />
      <ProductWrapper />
    </div>
  );
}
