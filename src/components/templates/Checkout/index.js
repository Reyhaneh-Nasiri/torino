"use client";
import OrderSummaryCard from "@/components/modules/OrderSummaryCard";
import PassengerForm from "@/components/modules/PassengerForm";
import { checkoutSchema } from "@/core/schemas/checkout";
import { useOrder } from "@/core/services/mutations";
import {
  gregorianToJalaliString,
  jalaliToGregorianString,
} from "@/core/utils/date";
import { p2e } from "@/core/utils/digit";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";

const Checkout = ({ data, userProfile }) => {
  const { mutate, isPending } = useOrder();
  const {
    control,
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      nationalCode: String(userProfile?.nationalCode ?? ""),
      fullName: [userProfile?.firstName, userProfile?.lastName]
        .filter(Boolean)
        .join(" "),
      gender: userProfile?.gender || "",
      birthDate: gregorianToJalaliString(userProfile?.birthDate) || "",
    },
    mode: "onChange",
  });
  const onSubmit = (values) => {
    const formatValues = {
      ...values,
      birthDate: jalaliToGregorianString(p2e(values.birthDate)),
    };
    mutate(formatValues);
  };

  return (
    <div className={`${styles.container} content-boxed`}>
      <PassengerForm
        register={register}
        trigger={trigger}
        setValue={setValue}
        errors={errors}
        control={control}
        userProfile={userProfile}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <OrderSummaryCard
          {...data}
          orderHandler={() => {}}
          isPending={isPending}
          isFormSubmitting={isSubmitting}
        />
      </form>
    </div>
  );
};

export default Checkout;
