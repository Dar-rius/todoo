import styles from './styles/page.module.css'
import Header from "@/components/header";
import Close from "@/public/close.svg"
import Check from "@/public/checkmark.svg"
import Image from "next/image";
import Link from "next/link";
import prisma from "@/prisma";

const getData = async() => {
  try{
    let res = await prisma.project.findMany()
    return res
  }catch (err){
    console.error(err)
  }
}
export default async function Home() {
  let data = await getData()
  return (
    <main>
      <Header/>
      <section className={styles.sec}>
        <div style={{
          display:"flex",
          justifyContent:"space-around",
          alignItems:"center",
          marginBottom:"1.5%",
        }}>
          <div  style={{
            display:"flex",
            alignItems:"center", }}>
            <strong
              style={{
                color:"#32E6E2",
                fontSize:"36px",
                marginRight:"5%"
              }}
            >24</strong>
            <div style={{
              fontSize:"18px"
            }}>
              <strong>
                Septembre
              </strong>
              <div>
                2023
              </div>
            </div>
          </div>

          <div style={{
            fontSize:"28px"
          }}>
            Lundi
          </div>
        </div>

        <div className={styles.sec2}>
          <input placeholder="Ajourter un nouveau projet" />
          <button>+</button>
        </div>

        <div style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          marginRight:"24%",
          marginLeft:"24%",
        }}>
          {data.map((item)=>
            <div className={styles.projects} key={item.id}>
              <Link href={""}
                    style={{
                      fontSize:"18px",
                      fontWeight:"bold"
                    }}
              >{item.name}
              </Link>

              <div style={{
                width:"15%",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
              }}>
                <Image
                    src={Close}
                    alt={"Fermer"}
                    width={30}
                    height={30}
                />
                <Image
                    src={Check}
                    alt={"Finish"}
                    width={30}
                    height={30}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
