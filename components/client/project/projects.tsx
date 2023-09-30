"use client";
import styles from "@/app/styles/page.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Forms() {
  let [name, setName] = useState("");
  let router = useRouter();

  const refresh = () => {
    router.refresh();
  };

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  async function handleSubmit(name: { name: string }) {
    console.log(name);
    try {
      const res = await fetch("/api/project", {
        method: "POST",
        body: JSON.stringify(name),
      });
      if (!res.ok) {
        console.log("Error in request");
      }
      refresh();
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        handleSubmit({ name }).then((res) => console.log(res));
      }}
      className={styles.sec2}
    >
      <input
        name="name"
        placeholder="Ajourter un nouveau projet"
        onChange={handleChange}
      />
      <button type="submit">+</button>
    </form>
  );
}
