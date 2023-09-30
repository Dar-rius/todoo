"use client";
import styles from "@/app/styles/page.module.css";
import React, { useState } from "react";

export async function handleSubmit(name: { name: string }) {
  console.log(name);
  try {
    const res = await fetch("/api/project", {
      method: "POST",
      body: JSON.stringify(name),
    });
    if (!res.ok) {
      console.log("Error in request");
    }
    return res
  } catch (err) {
    console.error(err);
  }
}

export default function Forms() {
  let [name, setName] = useState("");

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

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