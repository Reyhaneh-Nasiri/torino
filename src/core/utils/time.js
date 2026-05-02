const formatTime = (date) => {
  const d = new Date(date);
  return `${d.getHours() < 10 ? "0" + d.getHours() : d.getHours()}:${d.getMinutes() ? "0" + d.getMinutes() : d.getMinutes()}`;
};

export { formatTime };
