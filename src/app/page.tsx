import CarouselSection from "@/components/home-page/carousel/Carousel-section";
import CategoriesWrapper from "@/components/home-page/categories/categories-wrapper";
import ProductWrapper from "@/components/home-page/products/product-wrapper";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <CarouselSection />
      <CategoriesWrapper />
      <ProductWrapper />
    </div>
  );
}
