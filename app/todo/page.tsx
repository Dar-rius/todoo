import Check from "@/public/checkmark.svg"
import Header from "@/components/header";
import Image from "next/image";
import styles from "../styles/todo.module.css"

export  default function Todo(){
    return(
        <main>
           <Header/>
            <section className={styles.sec}>
                <strong style={{
                    fontSize:"26px",
                    display:"flex",
                    marginLeft:"23%",
                    marginBottom:"1.5%"
                }}>
                    Project Test
                </strong>
                <div className={styles.sec2}>
                    <input placeholder="Ajouter une nouvelle tache"/>
                    <button>+</button>
                </div>

                <div>
                    <strong
                        style={{
                            fontSize:"24px",
                            display:"flex",
                            marginLeft:"23%",
                            marginBottom:"1.5%"}}
                    >
                        Todo
                    </strong>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        marginRight:"24%",
                        marginLeft:"24%",
                    }}>
                        <div className={styles.projects}>
                            <p
                                style={{
                                    fontSize:"16px",
                                }}>
                                Creer une nouvelle base de donnees et la connecter
                            </p>
                            <Image
                                src={Check}
                                alt={"Task finish"}
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className={styles.projects}>
                            <p style={{
                                fontSize:"16px",
                            }}>
                                Creer une paage Auth
                            </p>
                            <Image
                                src={Check}
                                alt={"Task finish"}
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <strong
                        style={{
                            fontSize:"24px",
                            display:"flex",
                            marginLeft:"23%",
                            marginBottom:"1.5%"}}
                    >
                        Completed
                    </strong>
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        marginRight:"24%",
                        marginLeft:"24%",
                    }}>
                        <div className={styles.projectsCompleted}>
                            <p style={{
                                fontSize:"16px",
                                color:"#85929E"
                            }}>
                                Initialiser le projet
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}