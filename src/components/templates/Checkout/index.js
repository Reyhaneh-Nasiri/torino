"use client";
import OrderSummaryCard from "@/components/modules/OrderSummaryCard";
import PassengerForm from "@/components/modules/PassengerForm";
import { checkoutSchema } from "@/core/schemas/checkout";
import { useOrder } from "@/core/services/mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";

const Checkout = ({ data }) => {
  const { mutate, isPending } = useOrder();
  const {
    control,
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      nationalCode: "",
      fullName: "",
      gender: "",
      birthDate: "",
    },
    mode: "onChange",
  });
  const onSubmit = (values) => {
    mutate(values);
  };

  return (
    <div className={styles.container}>
      <PassengerForm
        register={register}
        trigger={trigger}
        setValue={setValue}
        errors={errors}
        control={control}
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
