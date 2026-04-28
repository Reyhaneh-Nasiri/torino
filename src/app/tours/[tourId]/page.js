import TourDetail from "@/components/templates/TourDetail";
import { serverFetch } from "@/core/services/http";

const TourDetailsPage = async ({ params }) => {
  const { tourId } = await params;

  const tourData = await serverFetch(`/tour/${tourId}`, null, {
    cache: "no-store",
  });

  return <TourDetail {...tourData} />;
};

export default TourDetailsPage;
