import Banner from "@/component/Banner";
import Featured from "@/component/Featured";
import HowItWorks from "@/component/HowItWorks";
import { Button } from "@heroui/react";
import { BiFootball } from "react-icons/bi";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
        <Banner></Banner>
        <Featured></Featured>
        <HowItWorks></HowItWorks>
    </div>
  );
}
