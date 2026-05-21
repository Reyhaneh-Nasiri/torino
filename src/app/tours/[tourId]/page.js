import TourDetail from "@/components/templates/TourDetail";
import { publicFetch } from "@/core/services/http/publicFetch";

const TourDetailsPage = async ({ params }) => {
  const { tourId } = await params;

  const tourData = await publicFetch(`/tour/${tourId}`, {
    cache: "no-store",
  });

  return <TourDetail {...tourData} />;
};

export default TourDetailsPage;
