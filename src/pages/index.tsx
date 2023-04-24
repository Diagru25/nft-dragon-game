import Image from "next/image";
import { Inter, Chakra_Petch } from "next/font/google";
import InputLabel from "@/components/input-label/InputLabel";

const inter = Chakra_Petch({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <InputLabel/>
        <input placeholder="dihasisaisdha"/>
    </main>
  );
}
