// import Image from "next/image";
// import CarouselDemo from "@/components/carousel-demo";
import DIgitalItems from "@/components/digital-Items";
import Title from "@/components/new-products/title";
import NewProducts from "@/components/new-products";
import ServiceTitle from "@/components/new-services/title";
import NewServices from "@/components/new-services";
import SwipeDemo from "@/components/swipe";
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center lg:bg-custom-gray/20 pt-6 lg:pt-12 pb-24 w-full">
      <section className="flex justify-center items-center mx-auto container">
        {/* <CarouselDemo slides={5} /> */}
        <SwipeDemo />
      </section>
      <section className="flex justify-center items-center mt-9 px-6 lg:px-0 rounded-md container">
        <DIgitalItems />
      </section>
      <Title />
      <section className="flex justify-center items-center px-6 lg:px-0 rounded-md container">
        <NewProducts />
      </section>
      <ServiceTitle />
      <section className="flex justify-center items-center px-6 lg:px-0 rounded-md container">
        <NewServices />
      </section>
    </main>
  );
}
