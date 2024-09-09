import SignUpForm from "@/modules/components/sign-up-form";
import Image from "next/image";

export default function SignUpPage() {
  return (
      <main className="flex main-h-screen flex-col items-center p-24">
        <SignUpForm />
      </main>
  );
}
