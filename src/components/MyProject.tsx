import Image from "next/image";
import petsitter from "../../public/assets/petsitter.png";
import personal from "../../public/assets/personal.png";
import Link from "next/link";

export default function MyProject() {
  return (
    <div className="w-full mt-20 flex flex-col gap-6 items-center">
      <div className="bg-black hover:bg-gray-900 px-4 text-white py-2 rounded-lg text-center">
        My Projects
      </div>
      <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
      <p className="text-gray-600 text-center text-lg md:text-xl">
        Projects I’ve worked on both individually and collaboratively with
        friends, featuring a variety of challenges and creative solutions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
        <Link href={"https://pet-sitter-two.vercel.app/"}>
          <div className="card bg-base-100 w-full max-w-[350px] flex flex-col justify-between min-h-[420px] shadow-xl border mx-auto">
          <figure className="overflow-hidden">
              <Image
                src={petsitter}
                alt="project petsitter image"
                className="hover:scale-110 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Pet sitter
                <div className="badge badge-secondary">2024 - Present</div>
              </h2>
              <p className="text-sm text-gray-500">
                A Petsitter is a modern Next.js and TypeScript web app
                connecting Pet Owners with Pet Sitters. It features Supabase
                authentication, real-time chat, map and streamlined booking and
                payment management.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline text-[12px]">NextJs</div>
                <div className="badge badge-outline text-[12px]">
                  Typescript
                </div>
                <div className="badge badge-outline text-[12px]">SQL</div>
                <div className="badge badge-outline text-[12px]">Tailwind</div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"https://personal-blog-coral-seven.vercel.app/"}>
          <div className="card bg-base-100 w-full max-w-[350px] flex flex-col justify-between min-h-[420px] shadow-xl border mx-auto">
          <figure className="overflow-hidden">
              <Image
                src={personal}
                alt="project personal blog image"
                className="hover:scale-110 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Personal Blog
                <div className="badge badge-secondary">2024</div>
              </h2>
              <p className="text-sm text-gray-500">
                A personal blog platform where users can create, edit, and share
                posts, log in, and comment on others&lsquo; posts. It includes
                an admin feature to manage content and moderate comments.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline text-[12px]">React</div>
                <div className="badge badge-outline text-[12px]">
                  Javascript
                </div>
                <div className="badge badge-outline text-[12px]">Tailwind</div>
                <div className="badge badge-outline text-[12px]">SQL</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
