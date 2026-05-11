import Banner from "@/components/modules/Banner";
import Features from "@/components/modules/Features";
import SearchBox from "@/components/modules/SearchBox";
import Telesales from "@/components/modules/Telesales";
import ToursList from "@/components/modules/ToursList";
import WhyUs from "@/components/modules/WhyUs";
import { serverFetch } from "@/core/services/http";
import { getTopPlaces } from "@/core/utils/places";

export default async function Home({ searchParams }) {
  const data = await serverFetch("/tour", searchParams, { cache: "no-store" });
  const TOP_PLACES = getTopPlaces(data);
  return (
    <>
      <Banner />
      <div style={{ padding: "0 31px" }}>
        <SearchBox topPlaces={TOP_PLACES} />
        <ToursList toursData={data} />
        <Telesales />
        <WhyUs />
        <Features />
      </div>
    </>
  );
}
