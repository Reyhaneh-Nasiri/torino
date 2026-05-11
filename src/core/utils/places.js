import { PLACES } from "@/constants/places";

export const getTopPlaces = (tours, type = "all") => {
  const result = tours.reduce((acc, tour) => {
    let cities = [];

    if (type === "origin") cities = [tour.origin];
    else if (type === "destination") cities = [tour.destination];
    else cities = [tour.origin, tour.destination];

    cities.forEach((city) => {
      if (!acc[city.id]) {
        acc[city.id] = {
          id: city.id,
          name: city.name,
          count: 0,
        };
      }

      acc[city.id].count += 1;
    });

    return acc;
  }, {});

  return Object.values(result).sort((a, b) => b.count - a.count);
};

export const filteredPlaces = (places, query) => {
  if (!query?.trim()) return places;

  const queryNormalized = query.trim().toLowerCase();

  return places.filter(
    (place) =>
      place.name.toLowerCase().includes(queryNormalized) ||
      PLACES[place.name].toLowerCase().includes(queryNormalized),
  );
};
