import Check from "@/public/checkmark.svg"
import Header from "@/components/header";
import Image from "next/image";

export  default function Todo(){
    return(
        <main>
           <Header/>

            <section>
                <div>
                    <mark>Project Test</mark>
                    <input placeholder="Ajouter une nouvelle tache"/>
                    <button>+</button>
                </div>

                <div>
                    <strong>Todo</strong>
                    <div>
                        <p>Creer une nouvelle base de donnees et la connecter</p>
                        <Image
                            src={Check}
                            alt={"Task finish"}
                        />
                    </div>
                    <div>
                        <p>Creer une paage Auth</p>
                        <Image
                            src={Check}
                            alt={"Task finish"}
                        />
                    </div>
                </div>

                <div>
                    <strong>Completed</strong>
                    <div>
                        <p>Initialiser le projet</p>
                    </div>
                </div>
            </section>
        </main>
    )
}