"use client";
import { PLACES } from "@/constants/places";
import { filteredPlaces } from "@/core/utils/places";
import { useState } from "react";
import styles from "./index.module.css";
const PlaceAutocomplete = ({ topPlaces, icon, label }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const options = query.trim()
    ? filteredPlaces(topPlaces, query)
    : topPlaces.slice(0, 4);
  const focusHandlar = () => {
    setIsOpen(true);
    setQuery(PLACES[selectedPlace?.name] || query);
    setSelectedPlace(null);
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const selectHandler = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          value={selectedPlace ? PLACES[selectedPlace.name] : query}
          onChange={changeHandler}
          onFocus={focusHandlar}
          onBlur={() => setIsOpen(false)}
        />
        {!query.trim() && !selectedPlace && !isOpen && (
          <p className={styles.placeholder}>
            {icon}
            {label}
          </p>
        )}

        {isOpen ? (
          <div className={styles.dropdown}>
            {query.trim() ? null : <p className={styles.title}>پرتردد</p>}

            <ul className={styles.placeList}>
              {options.map((option) => (
                <li
                  key={option.id}
                  className={styles.placeItem}
                  onPointerDown={() => selectHandler(option)}
                >
                  <i className="fa-solid fa-map-marker-alt"></i>
                  {PLACES[option.name]}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PlaceAutocomplete;
