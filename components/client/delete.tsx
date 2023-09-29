"use client";
import Image from "next/image";
import Close from "@/public/close.svg";
import Check from "@/public/checkmark.svg";

const deleteData = async(id: string) => {
    try {
        let res = await fetch(`/api/project/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"Application/json"
            }
        });
        if (!res.ok){
            console.error("Ca passe pas")
        }
        return res.json()
    }
    catch(err) {
        console.error(err)
    }
}

export default function Delete(id: {id:number}) {
  return (
    <div
      style={{
        width: "15%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <button onClick={
          ()=>{
              let _id = id.id.toString()
            deleteData(_id).then((res)=>{
                console.log(res)
            })
          }
      }>
        <Image src={Close} alt={"Fermer"} width={30} height={30} />
      </button>
      <button >
        <Image src={Check} alt={"Finish"} width={30} height={30} />
      </button>
    </div>
  );
}
