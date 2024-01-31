import Image from "next/image";

import Button from "@/components/Button";
import { LoginBtn } from "@/components/auth/login-btn";

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-gradient-to-l from-sky-400 to-blue-800">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-white text-2xl">A simple authentication service</p>
        <LoginBtn>
          <Button text="Sign in"></Button>
        </LoginBtn>
      </div>
    </main>
  );
}
