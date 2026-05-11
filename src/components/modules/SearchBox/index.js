import PlaceAutocomplete from "@/components/atoms/PlaceAutocomplete";
import TourDatePicker from "@/components/atoms/TourDatePicker";
import styles from "./index.module.css";

const SearchBox = ({ topPlaces }) => {
  return (
    <div className={styles.container}>
      <PlaceAutocomplete
        topPlaces={topPlaces}
        icon={<i className="fa-solid fa-location-dot"></i>}
        label="مبدا"
      />
      <PlaceAutocomplete
        topPlaces={topPlaces}
        icon={<i className="fa-solid fa-globe"></i>}
        label="مقصد"
      />
      <TourDatePicker />
      <button>جستجو</button>
    </div>
  );
};

export default SearchBox;
