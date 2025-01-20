import Image from "next/image";
import ex from "../../public/assets/ex.svg";
import nextjs from "../../public/assets/next.svg";
import node from "../../public/assets/node.svg";
import js from "../../public/assets/js.svg";
import ts from "../../public/assets/ts.svg";
import supa from "../../public/assets/supa.svg";
import postsql from "../../public/assets/post.svg";
import mongo from "../../public/assets/mongo.svg";
import go from "../../public/assets/go.svg"
import nuxt from "../../public/assets/nuxt.svg"

export default function Techstack() {
  return (
    <div className="w-full mt-20 flex flex-col gap-6 items-center">
    <div className="bg-black hover:bg-gray-900 px-4 text-white py-2 rounded-lg text-center">
      Tech Stack
    </div>
    <h2 className="text-3xl md:text-5xl font-bold">
      Tech Stack & Beyond
    </h2>
    <p className="text-gray-600 text-center text-lg md:text-xl">
      From the frameworks and tools I&apos;ve worked with to the
      innovative technologies I&apos;m eager to dive into, my tech stack
      is a blend of expertise and curiosity.
    </p>
    <div className="w-full flex flex-col gap-3">
      <h2 className="text-xl md:text-2xl font-bold mb-2">My TechStack</h2>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-1">
          <Image src={ts} alt="Typescript icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">Typescript</p>
        </div>
        <div className="flex flex-col gap-1">
          <Image src={js} alt="Javascript icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">Javascript</p>
        </div>
        <div className="flex flex-col gap-1">
          <Image src={nextjs} alt="NextJs icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">NextJS</p>
        </div>
        <div className="flex flex-col gap-1">
          <Image src={ex} alt="Express icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">ExpressJs</p>
        </div>
        <div className="flex flex-col gap-1">
          <Image src={node} alt="NodeJS icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">NodeJs</p>
        </div>
        <div className="flex flex-col gap-1">
          <Image src={supa} alt="Supabase icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">Supabase</p>
        </div>
      </div>
      <div className="flex w-full justify-center gap-10">
        <div className="flex flex-col gap-1">
          <Image src={postsql} alt="Postgresql icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">Postgresql</p>
        </div>
        <div className="flex flex-col gap-1">
          <Image src={mongo} alt="MongoDb icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">MongoDB</p>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col gap-3">
      <h2 className="text-xl md:text-2xl font-bold mb-2">TechStack Interested</h2>
      <div className="flex w-full justify-center gap-10">
        <div className="flex flex-col gap-1">
          <Image src={go} alt="Go icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">Go</p>
        </div>
        <div className="flex flex-col gap-1">
          <Image src={nuxt} alt="Nuxt icon" className="w-10 md:w-20" />
          <p className="text-center font-semibold hidden sm:block">Nuxt</p>
        </div>
      </div>
    </div>
  </div>
  );
}
