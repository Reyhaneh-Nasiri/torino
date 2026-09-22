"use client";

import { SquarePen } from "lucide-react";
import { useState } from "react";

import ProfileForm from "@/components/modules/ProfileForm/index.js";
import { useGetProfile } from "@/core/services/queries";
import { toPersianDate } from "@/core/utils/date";
import { e2p } from "@/core/utils/digit";

import styles from "./index.module.css";

const GENDER_MAP = {
  female: "زن",
  male: "مرد",
};

const FORMATTERS = {
  gender: (val) => GENDER_MAP[val],
  string: (val) => val,
  number: (val) => e2p(val),
  date: (val) => toPersianDate(val),
};

const PROFILE_SECTIONS = [
  {
    id: "account",
    title: "اطلاعات حساب کاربری",
    fields: [
      { id: 1, label: "شماره موبایل", name: "mobile", type: "number" },
      {
        id: 2,
        label: "ایمیل",
        name: "email",
        type: "string",
        customView: (data, onEdit) => (
          <div className={styles.item} key="email">
            <p className={styles.label}>ایمیل</p>
            <div className={styles.emailWrapper}>
              <p className={styles.value}>{data?.email || "__"}</p>
              <button
                className={styles.actionBtn}
                onClick={() => onEdit("account")}
              >
                <SquarePen />
                <span>{data?.email ? "ویرایش" : "افزودن"}</span>
              </button>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "personal",
    title: "اطلاعات شخصی",
    fields: [
      {
        id: 1,
        label: "نام و نام خانوادگی",
        name: "fullName",
        type: "string",
        placeholder: "نام و نام خانوادگی",
      },
      {
        id: 2,
        label: "کدملی",
        name: "nationalCode",
        type: "number",
        placeholder: "کدملی",
      },
      {
        id: 3,
        label: "جنسیت",
        name: "gender",
        type: "gender",
        placeholder: "جنسیت",
      },
      {
        id: 4,
        label: "تاریخ تولد",
        name: "birthDate",
        type: "date",
        placeholder: "تاریخ تولد",
      },
    ],
  },
  {
    id: "bank",
    title: "اطلاعات حساب بانکی",
    fields: [
      {
        id: 1,
        label: "شماره کارت",
        name: "payment.debitCard_code",
        type: "number",
        placeholder: "شماره کارت",
      },
      {
        id: 2,
        label: "شماره حساب",
        name: "payment.accountIdentifier",
        type: "number",
        placeholder: "شماره حساب",
      },
      {
        id: 3,
        label: "شماره شبا",
        name: "payment.shaba_code",
        type: "number",
        placeholder: "شماره شبا",
      },
    ],
  },
];

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
};

const InfoItem = ({ label, value, type = "string" }) => {
  const formattedValue = value
    ? FORMATTERS[type]
      ? FORMATTERS[type](value)
      : value
    : "__";
  return (
    <div className={styles.item}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{formattedValue}</p>
    </div>
  );
};

const Profile = () => {
  const { data, isFetching, error } = useGetProfile();
  const [activeEditSection, setActiveEditSection] = useState(null);

  if (isFetching)
    return <p className={styles.loading}>در حال دریافت اطلاعات...</p>;
  if (error) return <p className={styles.error}>{error.message}</p>;

  const handleToggleEdit = (section) => {
    setActiveEditSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className={styles.profile}>
      {PROFILE_SECTIONS.map((section) => {
        const isEditing = activeEditSection === section.id;

        return (
          <div key={section.id} className={styles.section}>
            <div className={styles.header}>
              <h3 className={styles.title}>{section.title}</h3>
              {!isEditing && section.id !== "account" && (
                <button
                  type="button"
                  className={styles.actionBtn}
                  onClick={() => handleToggleEdit(section.id)}
                >
                  <SquarePen />
                  <span>ویرایش اطلاعات</span>
                </button>
              )}
            </div>

            {isEditing ? (
              <ProfileForm
                section={section.id}
                fields={section.fields}
                editHandler={handleToggleEdit}
                data={data}
              />
            ) : (
              <div className={styles.items}>
                {section.fields.map((field) => {
                  if (field.customView) {
                    return field.customView(data, handleToggleEdit);
                  }
                  const val = getNestedValue(data, field.name);
                  return (
                    <InfoItem
                      key={field.name}
                      label={field.label}
                      type={field.type}
                      value={val}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
