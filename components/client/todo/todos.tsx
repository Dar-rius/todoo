"use client";
import styles from "@/app/styles/todo.module.css";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo({ id }: { id: string }) {
  let content = useRef("");
  let router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = { content: content.current, projectId: Number(id) };
      console.log(data.projectId);
      console.log(data.content);
      let res = await fetch("/api/todo", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        console.log("Error in pos data");
      }
      router.refresh();
      return res.json();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.sec2}>
      <input
        placeholder="Ajouter une nouvelle tache"
        onChange={(e) => (content.current = e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}
