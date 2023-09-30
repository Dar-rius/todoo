"use client";
import Image from "next/image";
import Check from "@/public/checkmark.svg";
import styles from "@/app/styles/page.module.css";
import { useRouter } from "next/navigation";

export default function CheckButton({ id }: { id: number }) {
  let _id = id.toString();
  let router = useRouter();

  const updateData = async (id: string) => {
    try {
      let res = await fetch(`/api/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        console.log("Error");
      }
      router.refresh();
      return res.json();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={() => updateData(_id)} className={styles.bouton}>
      <Image src={Check} alt={"Task finish"} width={30} height={30} />
    </button>
  );
}
