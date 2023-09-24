import styles from './styles/page.module.css'
import Header from "@/components/header";
import Close from "@/public/close.svg"
import Check from "@/public/checkmark.svg"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <Header/>
      <section>
        <div>
          <div>
            <strong>24</strong>
            <div>
              Septembre
              2023
            </div>
          </div>

          <div>
            Lundi
          </div>
        </div>

        <div>
          <input placeholder="Ajourter un nouveau projet" />
          <button>+</button>
        </div>

        <div>
          <Link href={""}>Projet Test</Link>
          <Image
              src={Close}
              alt={"Fermer"}
          />
          <Image
              src={Check}
              alt={"Finish"}
          />
        </div>

        <div>
          <Link href={""}>Projet Test 1</Link>
          <Image
              src={Close}
              alt={"Fermer"}
          />
          <Image
              src={Check}
              alt={"Finish"}
          />
        </div>
      </section>
    </main>
  )
}
