"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import heroimg from "../../public/assets/LINE_ALBUM_Congrat Petch 2_240108_183.jpg";
import MyProject from "@/components/MyProject";
import Techstack from "@/components/Techstack";
import Experienceandeducation from "@/components/Experienceandeducation";
import Contact from "@/components/Contact";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const HeadRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHead = () => {
    if (HeadRef.current) {
      HeadRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div ref={HeadRef} className="flex flex-col items-center min-h-screen px-4 sm:px-0">
      <Navbar scrollToContact={scrollToContact} scrollToHead={scrollToHead} />
      <div className="w-full max-w-[700px]">
        <div className="w-full mt-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-[60%] flex flex-col gap-3">
              <h1 className="text-3xl md:text-5xl font-bold">
                Hi, I&apos;m Arkorn{" "}
                <span className="wave-animation cursor-grab z-0">👋</span>
              </h1>
              <h2 className="font-medium text-[16px] md:text-[18px]">
                I am actively looking for a Full Stack Developer position, with
                a strong focus on coding and building innovative solutions.
              </h2>
            </div>
            <div className="w-[150px] md:w-[200px]">
              <Image
                src={heroimg}
                alt="image"
                className="rounded-full"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-6 flex flex-col gap-3">
          <h2 className="text-xl md:text-2xl font-bold">About</h2>
          <p className="text-gray-600 text-[16px] md:text-[18px]">
            I am transitioning into Full-Stack Software Development, focusing on
            technologies like NextJs, React, and Express. I am eager to learn
            and grow in both Front-end and Back-end, solving complex problems
            and building high-quality solutions. My goal is to continue evolving
            as a Full-Stack Developer and contribute to innovative applications.
          </p>
        </div>
        <MyProject />
        <Experienceandeducation />
        <Techstack />
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}
