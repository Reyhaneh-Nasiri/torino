import { publicFetch } from "@/core/services/http/publicFetch";

export const getTourById = async (tourId) => {
  if (!tourId) return null;

  try {
    return await publicFetch(`/tour/${tourId}`, {
      next: {
        revalidate: 60,
        tags: [`tour-${tourId}`],
      },
    });
  } catch (error) {
    console.error(`Error fetching tour ${tourId}:`, error);
    return null;
  }
};
