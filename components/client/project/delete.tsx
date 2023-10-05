"use client";
import Image from "next/image";
import Check from "@/public/checkmark.svg";
import styles from "@/app/styles/page.module.css";
import { useRouter } from "next/navigation";

export default function Delete(id: { id: number }) {
  let _id = id.id.toString();
  let router = useRouter();

  const deleteData = async (id: string) => {
    try {
      let res = await fetch(`/api/project/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
        },
      });
      if (!res.ok) {
        console.error("Ca passe pas");
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
        width: "15%",
      }}
    >
      <button
        onClick={() => {
          deleteData(_id).then((res) => {
            console.log(res);
          });
        }}
        className={styles.bouton}
      >
        <Image
          src={Check}
          alt={"Finish"}
          width={30}
          height={30}
          className={styles.ima}
        />
      </button>
    </div>
  );
}
