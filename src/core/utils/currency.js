const formatCurrency = (value, locale = "fa-IR") => {
  return new Intl.NumberFormat(locale, {
    useGrouping: true,
  }).format(value);
};

export { formatCurrency };
