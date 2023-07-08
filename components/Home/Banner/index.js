import BannerCarousel from "../../Home/Banner/BannerCarousel";
export default function Banner() {
  return (
    <div className="container overflow-hidden">
      <div className="grid grid-cols-1 !gap-5 pb-[108px] lg:pt-[60px] items-center banner">
        <div className="h-full">
          <BannerCarousel />
        </div>
      </div>
    </div>
  );
}
