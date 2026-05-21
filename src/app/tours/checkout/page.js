import Checkout from "@/components/templates/Checkout";
import { privateFetch } from "@/core/services/http/privateFetch";
import { redirect } from "next/navigation";

const CheckoutPage = async () => {
  const getData = async () => {
    try {
      return await privateFetch("/basket", { cache: "no-store" });
    } catch (error) {
      if (error.message == 401) {
        console.log("برای خرید تور ابتدا وارد حساب خود شوید");
        redirect("/");
      } else {
        console.error(error);
      }
    }
  };

  const getProfile = async () => {
    try {
      return await privateFetch("/user/profile", { cache: "no-store" });
    } catch (error) {
      if (error.message != 401) {
        console.error(error);
      }
    }
  };

  const data = await getData();
  const userProfile = await getProfile();

  return <Checkout data={data} userProfile={userProfile} />;
};

export default CheckoutPage;
