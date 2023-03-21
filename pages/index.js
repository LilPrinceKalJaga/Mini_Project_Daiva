import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/src/components/navbar.components";

export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <h1>VALORANT</h1>
      <div className="h-screen w-full">
            <Image
              src="/4kk.jpg"
              alt="Picture of the author"
              width={600}
              height={300}
            />

          </div>
  </div>
  )
}
