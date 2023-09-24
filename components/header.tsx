import Image from "next/image";
import  Home from "@/public/home.svg"
import Link from "next/link";


export default function Header(){
    return(
        <header>
            <div>
                <Image
                    src={Home}
                    height={200}
                    width={200}
                    alt={"home page"}
                />

            <Link href={""}>
                Se deconnecter
            </Link>
            </div>
        </header>
    )
}