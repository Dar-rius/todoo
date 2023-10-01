"use client";
import Image from "next/image";
import Check from "@/public/checkmark.svg";
import Close from "@/public/close.svg";
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

  const deleteData = async (id: string) => {
    try {
      const res = await fetch(`/api/todo/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!res) {
        console.log(res);
      }
      router.refresh();
      return res.json();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "15%",
      }}
    >
      <button onClick={() => deleteData(_id)} className={styles.bouton}>
        <Image src={Close} alt={"Task delete"} width={30} height={30} />
      </button>
      <button onClick={() => updateData(_id)} className={styles.bouton}>
        <Image src={Check} alt={"Task finish"} width={30} height={30} />
      </button>
    </div>
  );
}
