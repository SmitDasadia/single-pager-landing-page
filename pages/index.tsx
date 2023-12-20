import React, { useState } from "react";
import LoginForm from "@/components/LoginFrom";
import Welcome from "@/components/Welcome";
import Image from "next/image";

const Home = () => {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handleLogin = (isCorrect: any) => {
    setIsPasswordCorrect(isCorrect);
  };

  return (
    <section className="relative h-screen flex bg-center bg-cover">
      <Image
        src="/Images/homebg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-[#06070a] opacity-70"></div>
      <div className="container mx-auto flex justify-center items-center relative z-10 pb-10">
        {isPasswordCorrect ? (
          <Welcome />
        ) : (
          <div className="p-8 max-w-sm sm:max-w-md w-full bg-black/80">
            <LoginForm onLogin={handleLogin} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
