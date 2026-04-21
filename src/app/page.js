import TourCard from "@/components/modules/tourCard/TourCard";
import tourImg from "@/assets/images/arbil.png"
const tour = {
  id: 1,
  image: tourImg,
  name: "هولیر",
  description: "مهر ماه . 3 روزه - پرواز - هتل 3 س...",
  price: 17500000
}
export default function Home() {
  return (
    <>
    <div style={{padding: "0 31px"}}>
    <TourCard tour={tour} />
    </div>
    </>
  );
}
