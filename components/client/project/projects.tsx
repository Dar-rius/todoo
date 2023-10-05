"use client";
import styles from "@/app/styles/page.module.css";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Forms() {
  let name = useRef("");
  let router = useRouter();

  const refresh = () => {
    router.refresh();
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      let data = { name: name.current };
      const res = await fetch("/api/project", {
        method: "POST",
        body: JSON.stringify(data),
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
    <form onSubmit={handleSubmit} className={styles.sec2}>
      <input
        name="name"
        placeholder="Ajourter un nouveau projet"
        onChange={(e) => (name.current = e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}
