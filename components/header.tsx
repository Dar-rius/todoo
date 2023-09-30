import Image from "next/image";
import Home from "@/public/home.svg";
import Link from "next/link";
import styles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <Link href={"/"}>
          <Image src={Home} height={45} width={45} alt={"home page"} />
        </Link>

        <Link href={""} className={styles.link}>
          Se deconnecter
        </Link>
      </div>
    </header>
  );
}
