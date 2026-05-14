"use client";
import { PLACES } from "@/constants/places";
import { filteredPlaces } from "@/core/utils/places";
import { useState } from "react";
import styles from "./index.module.css";

const LABELS = {
  origin: "مبدا",
  destination: "مقصد",
};

const PlaceAutocomplete = ({
  topPlaces,
  icon,
  label,
  value,
  onChange,
  error,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = query.trim()
    ? filteredPlaces(topPlaces, query)
    : topPlaces.slice(0, 4);

  const focusHandler = () => {
    setIsOpen(true);
    onChange("");
    if (value) setQuery(PLACES[value] || "");
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
    onChange("");
  };

  const selectHandler = (place) => {
    onChange(place.id);
    setQuery(PLACES[place.name]);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={`${error ? styles["field--error"] : null}`}
          value={query}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={() => setIsOpen(false)}
        />

        {!query.trim() && !value && !isOpen && (
          <p className={styles.placeholder}>
            {icon}
            {LABELS[label]}
          </p>
        )}

        {isOpen && (
          <div className={styles.dropdown}>
            {!query.trim() && <p className={styles.title}>پرتردد</p>}

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
        )}
      </div>
      {error ? <p className={styles.errorMessage}>{error}</p> : null}
    </div>
  );
};

export default PlaceAutocomplete;
