import SignInForm from "@/modules/components/sign-in-form";
import Image from "next/image";

export default function LoginPage() {
  return (
      <main className="flex main-h-screen flex-col items-center p-24">
        <SignInForm />
      </main>
  );
}
