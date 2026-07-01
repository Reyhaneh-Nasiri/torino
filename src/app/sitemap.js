// app/sitemap.js
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:6500";

function createRoute(
  path,
  priority = 0.7,
  changeFrequency = "weekly",
  lastModified,
) {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: lastModified || new Date().toISOString().split("T")[0],
    changeFrequency,
    priority,
  };
}

export default async function sitemap() {
  const staticRoutes = [createRoute("/", 1.0, "daily")];
  let tourRoutes = [];

  try {
    const response = await fetch(`${API_URL}/tour`, {
      next: { revalidate: 3600 },
    });

    if (response.ok) {
      const tours = await response.json();

      if (Array.isArray(tours)) {
        tourRoutes = tours.map((tour) =>
          createRoute(`/tours/${tour.id || tour._id}`, 0.8, "daily"),
        );
      }
    }
  } catch (error) {
    console.error("Error generating dynamic sitemap routes:", error);
  }

  return [...staticRoutes, ...tourRoutes];
}
