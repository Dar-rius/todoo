import styles from "./styles/page.module.css";
import Header from "@/components/header";
import Forms from "@/components/client/project/projects";
import prisma from "@/prisma";
import Link from "next/link";
import React, { use } from "react";
import Delete from "@/components/client/project/delete";
import { format } from "date-fns";

const getData = async () => {
  try {
    const data = await prisma.project.findMany();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default function Home() {
  let res = use(getData());
  const date = new Date();

  return (
    <main>
      <Header />
      <section className={styles.sec}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "1.5%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <strong
              style={{
                color: "#32E6E2",
                fontSize: "36px",
                marginRight: "5%",
              }}
            >
              {date.getDate()}
            </strong>
            <div
              style={{
                fontSize: "18px",
              }}
            >
              <strong>{format(date, "MMMM")}</strong>
              <div>{date.getFullYear()}</div>
            </div>
          </div>

          <div
            style={{
              fontSize: "28px",
            }}
          >
            {format(date, "eeee")}
          </div>
        </div>
        <Forms />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginRight: "24%",
            marginLeft: "24%",
          }}
        >
          {res?.map((item) => (
            <div className={styles.projects} key={item.id}>
              <Link
                href={`/todo/${item.id}`}
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Link>
              <Delete id={item.id} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
