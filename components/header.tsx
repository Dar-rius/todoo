import Link from "next/link";
import styles from "@/app/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <Link href={"/"} className={styles.link1}>
          Accueil
        </Link>

        <Link href={""} className={styles.link}>
          Se deconnecter
        </Link>
      </div>
    </header>
  );
}
