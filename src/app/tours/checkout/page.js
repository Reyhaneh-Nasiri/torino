import Checkout from "@/components/templates/Checkout";
import { getCookie } from "@/lib/cookie";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/basket`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${await getCookie("accessToken")}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const CheckoutPage = async () => {
  const data = await getData();

  return <Checkout data={data} />;
};

export default CheckoutPage;
