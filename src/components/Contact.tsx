import Link from "next/link";
export default function Contact() {
  return (
    <div className="w-full mt-20 mb-20 flex flex-col gap-6 items-center">
      <div className="bg-black hover:bg-gray-900 px-4 text-white py-2 rounded-lg text-center">
        Contact
      </div>
      <h2 className="text-3xl md:text-5xl font-bold">Get in Touch</h2>
      <p className="text-gray-600 text-center text-lg md:text-xl">
        Let&apos;s connect! Feel free to reach out {" "}
        <Link href="https://www.linkedin.com/in/arkornpat/" className="underline">via LinkedIn</Link>{" "}
         or <Link href={"mailto:arkorn.pat@gmail.com"} className="underline">arkorn.pat@gmail.com</Link> and I&apos;ll get back to you as soon as I can.
      </p>
    </div>
  );
}
