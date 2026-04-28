"use client";
import OrderSummaryCard from "@/components/modules/OrderSummaryCard";
import PassengerForm from "@/components/modules/PassengerForm";
import { useOrder } from "@/core/services/mutations";
import { useState } from "react";
import styles from "./index.module.css";

const Checkout = ({ data }) => {
  const [form, setForm] = useState({
    nationalCode: "",
    fullName: "",
    gender: "",
    birthDate: "",
  });
  const { mutate, isPending } = useOrder();
  const orderHandler = () => {
    mutate(form);
  };

  return (
    <div className={styles.container}>
      <PassengerForm form={form} setForm={setForm} />
      <OrderSummaryCard {...data} orderHandler={orderHandler} isPending={isPending} />
    </div>
  );
};

export default Checkout;
