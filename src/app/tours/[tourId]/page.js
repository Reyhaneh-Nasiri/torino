import TourDetail from "@/components/templates/TourDetail";
import { getTourById } from "@/core/services/api/tour";
import { notFound } from "next/navigation";

const TourDetailsPage = async ({ params }) => {
  const { tourId } = await params;

  const tourData = await getTourById(tourId);

  if (!tourData) {
    notFound();
  }

  return <TourDetail {...tourData} />;
};

export default TourDetailsPage;
