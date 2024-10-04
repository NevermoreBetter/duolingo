import { Button } from "@/components/ui/button";
import {
 ClerkLoaded,
 ClerkLoading,
 SignedIn,
 SignedOut,
 SignInButton,
 SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

export default function Home() {
 return (
  <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col items-center justify-center p-4 gap-2 lg:flex-row">
   <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0"></div>
   <div className="flex flex-col items-center gap-y-8">
    <h1 className="text-lg lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
     Learn, practice and master new languages with Lingo.
    </h1>
    <div>
     <ClerkLoading>
      <Loader className="size-5 text-muted-foreground animate-spin" />
     </ClerkLoading>
     <ClerkLoaded>
      <SignedOut>
       <SignUpButton mode="modal" forceRedirectUrl={"/learn"}>
        <Button className="w-full" size={"lg"} variant={"secondary"}>
         Get Started
        </Button>
       </SignUpButton>
       <SignInButton mode="modal" forceRedirectUrl={"/"}>
        <Button className="w-full" size={"lg"} variant={"primaryOutline"}>
         I already have an account
        </Button>
       </SignInButton>
      </SignedOut>
      <SignedIn>
       <Button size={"lg"} variant={"secondary"} className="w-full" asChild>
        <Link href={"/learn"}>Continue Learning</Link>
       </Button>
      </SignedIn>
     </ClerkLoaded>
    </div>
   </div>
  </div>
 );
}
