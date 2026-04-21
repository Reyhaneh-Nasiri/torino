import Features from "@/components/modules/features/Features";
import Telesales from "@/components/modules/telesales/Telesales";
import ToursList from "@/components/modules/toursList/ToursList";

export default function Home() {
  return (
    <div style={{padding: "0 31px"}}>
      <ToursList />
      <Telesales />
      <Features />
    </div>
  );
}
