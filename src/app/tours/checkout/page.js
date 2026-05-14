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

const getProfile = async () => {
  const res = await fetch(`${process.env.BASE_URL}/user/profile`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${await getCookie("accessToken")}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }
  return res.json();
};

const CheckoutPage = async () => {
  const data = await getData();
  const userProfile = await getProfile();

  return <Checkout data={data} userProfile={userProfile} />;
};

export default CheckoutPage;
