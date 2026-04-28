import Banner from "@/components/modules/banner/Banner";
import Features from "@/components/modules/Features";
import SearchBox from "@/components/modules/searchBox/SearchBox";
import Telesales from "@/components/modules/telesales/Telesales";
import ToursList from "@/components/modules/ToursList";
import WhyUs from "@/components/modules/whyUs";
import { serverFetch } from "@/core/services/http";

export default async function Home({ searchParams }) {
  const data = await serverFetch("/tour", searchParams, { cache: "no-store" });
  console.log(data);
  return (
    <>
      <Banner />
      <div style={{ padding: "0 31px" }}>
        <SearchBox />
        <ToursList toursData={data} />
        <Telesales />
        <WhyUs />
        <Features />
      </div>
    </>
  );
}
