import Banner from "@/components/modules/banner/Banner";
import Features from "@/components/modules/features/Features";
import Telesales from "@/components/modules/telesales/Telesales";
import ToursList from "@/components/modules/toursList/ToursList";
import WhyUs from "@/components/modules/whyUs/WhyUs";

export default function Home() {
  return (
    <>
      <Banner />
      <div style={{ padding: "0 31px" }}>
        <ToursList />
        <Telesales />
        <WhyUs />
        <Features />
      </div>
    </>
  );
}
