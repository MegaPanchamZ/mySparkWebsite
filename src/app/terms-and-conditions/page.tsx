import Image from "next/image";
import TermsAndConditions from "@/components/component/termscondtions";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-full">
      <TermsAndConditions />
    </div>
  )
}