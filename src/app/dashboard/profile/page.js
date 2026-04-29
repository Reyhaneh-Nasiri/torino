import Profile from "@/components/templates/Profile";
import { getCookie } from "@/lib/cookie";


async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/user/profile`, {
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
const ProfilePage = async () => {
  const data = await getData();

  return (
    <Profile data={data} />
  )
}

export default ProfilePage