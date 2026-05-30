"use client";
import PlaceAutocomplete from "@/components/atoms/PlaceAutocomplete";
import TourDatePicker from "@/components/atoms/TourDatePicker";
import { searchSchema } from "@/core/schemas/search";
import { jalaliToGregorianString } from "@/core/utils/date";
import { p2e } from "@/core/utils/digit";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import styles from "./index.module.css";

const SearchBox = ({ topPlaces }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const originId = searchParams.get("originId");
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      originId: "",
      destinationId: "",
      dates: [],
    },
    mode: "onSubmit",
  });

  const searchHandler = (data) => {
    const params = new URLSearchParams();

    params.set("originId", data.originId);
    params.set("destinationId", data.destinationId);

    if (data.dates?.[0]) {
      params.set("startDate", jalaliToGregorianString(p2e(data.dates[0])));
    }
    if (data.dates?.[1]) {
      params.set("endDate", jalaliToGregorianString(p2e(data.dates[1])));
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <>
      {originId ? (
        <p className={styles.allToursBtn} onClick={() => router.push("/?")}>
          مشاهده همه تورها
        </p>
      ) : null}

      <div  className={`${styles.container} content-boxed`}>
        <Controller
          name="originId"
          control={control}
          render={({ field, fieldState }) => (
            <PlaceAutocomplete
              topPlaces={topPlaces}
              icon={<i className="fa-solid fa-location-dot"></i>}
              label="origin"
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="destinationId"
          control={control}
          render={({ field, fieldState }) => (
            <PlaceAutocomplete
              topPlaces={topPlaces}
              icon={<i className="fa-solid fa-globe"></i>}
              label="destination"
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="dates"
          control={control}
          render={({ field, fieldState }) => (
            <TourDatePicker
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />
        <button onClick={handleSubmit(searchHandler)}>جستجو</button>
      </div>
    </>
  );
};

export default SearchBox;
