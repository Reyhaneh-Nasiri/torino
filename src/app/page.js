import Banner from "@/components/modules/Banner";
import Features from "@/components/modules/Features";
import SearchBox from "@/components/modules/SearchBox";
import Telesales from "@/components/modules/Telesales";
import ToursList from "@/components/modules/ToursList";
import WhyUs from "@/components/modules/WhyUs";
import { publicFetch } from "@/core/services/http/publicFetch";
import { getTopPlaces } from "@/core/utils/places";

export default async function Home({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  const query = {};

  if (resolvedSearchParams?.originId)
    query.originId = resolvedSearchParams.originId;
  if (resolvedSearchParams?.destinationId)
    query.destinationId = resolvedSearchParams.destinationId;
  if (resolvedSearchParams?.startDate)
    query.startDate = resolvedSearchParams.startDate;
  if (resolvedSearchParams?.endDate)
    query.endDate = resolvedSearchParams.endDate;

  const data = await publicFetch("/tour", query, { cache: "no-store" });
  const TOP_PLACES = getTopPlaces(
    await publicFetch("/tour", { cache: "no-store" }),
  );

  return (
    <>
        <Banner />
        <SearchBox topPlaces={TOP_PLACES} query={query} />
        <ToursList toursData={data} query={query} />
        <Telesales />
        <WhyUs />
        <Features />
    </>
  );
}
