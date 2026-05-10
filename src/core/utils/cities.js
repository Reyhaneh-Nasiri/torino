export const getTopCities = (tours, type = "all") => {
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

