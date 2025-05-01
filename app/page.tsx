import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Moon } from 'lucide-react'
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <nav>
      {/* Left */}
      collapseButton
      {/* Right */}
      <div className="flex items-center gap-4">
        <Link href='/dashboard'>Dashboard</Link>
        <Moon />
        <Avatar>
          <AvatarImage
            className="size-8"
            src='https://img.freepik.com/free-vector/smiling-boy-yellow-hoodie_1308-175701.jpg?semt=ais_hybrid&w=740' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
