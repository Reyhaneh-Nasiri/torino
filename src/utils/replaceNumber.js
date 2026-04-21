const e2p = (s) => s?.toString().replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

const p2e = (s) =>
  s?.toString().replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

const sp = (number) => {
  const seperatedNumber = number
    ?.toString()
    .match(/(\d+?) (?=(\d{3})+(?!\d) |$)/g);
  const joinedNumber = seperatedNumber?.join(",");
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };
