import Image from "next/image";
import jstimg from "../../public/assets/JST.jpg";
import techupicon from "../../public/assets/tech.png";
import thammasat from "../../public/assets/Emblem_of_Thammasat_University.png";
export default function Experienceandeducation() {
  return (
    <>
      <div className="w-full mt-20 flex flex-col gap-6 items-center">
        <div className="bg-black hover:bg-gray-900 px-4 text-white py-2 rounded-lg text-center">
          Experience & Education
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">
          Experience & Education
        </h2>
        <p className="text-gray-600 text-center text-lg md:text-xl">
          This is a summary of my work experience and educational background in
          software development and other fields.
        </p>
      </div>
      <div className="w-full mt-6 flex flex-col gap-3">
        <h2 className="text-xl md:text-2xl font-bold">Experience</h2>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="rounded-full w-10 h-10 border border-gray-300">
                <Image
                  src={jstimg}
                  alt="jst icon"
                  className="object-cover w-10 rounded-full"
                />
              </div>
              <div className="flex gap-3">
                <h3 className="font-bold">JST GROUP</h3>
                <h3>Internship</h3>
              </div>
            </div>
            <p className="text-gray-500">June 2020 - Aug 2020</p>
          </div>
        </div>
        <p className="text-gray-600 text-[16px] md:text-[18px]">
          Coordinated with the drawing team to verify design accuracy and
          compliance with specifications, collaborated with the technical team
          to clarify details and ensure inter-departmental communication, and
          assisted in troubleshooting and resolving discrepancies in drawings
          and calculations.
        </p>
      </div>
      <div className="w-full mt-6 flex flex-col gap-3">
        <h2 className="text-xl md:text-2xl font-bold">Education</h2>
        <div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="rounded-full w-10 h-10 border border-gray-300">
                  <Image
                    src={techupicon}
                    alt="techup icon"
                    className="object-cover w-10 rounded-full"
                  />
                </div>
                <h3 className="font-bold">TechUp Bootcamp</h3>
              </div>
              <p className="text-gray-500">Sep 2024 - Jan 2025</p>
            </div>
          </div>
          <p className="text-gray-600 text-[16px] md:text-[18px]">
            Completed a Full-Stack Development Bootcamp, covering key areas such
            as programming fundamentals, web development (HTML, CSS, JavaScript,
            React), and back-end technologies (Node.js, Express.js, databases).
            Gained hands-on experience with Git/GitHub, version control, and
            real-world engineering tools. Worked on group projects using Scrum
            methodologies, enhancing communication and teamwork skills in
            software development.
          </p>
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="rounded-full w-10 h-10 border border-gray-300">
                  <Image
                    src={thammasat}
                    alt="Thammasat University icon"
                    className="object-cover w-10 rounded-full"
                  />
                </div>
                <div className="flex gap-3">
                  <h3 className="font-bold">Thammasat University</h3>
                  <h3>chemical engineering</h3>
                </div>
              </div>
              <p className="text-gray-500">Aug 2018 - May 2022</p>
            </div>
          </div>
          <p className="text-gray-600 text-[16px] md:text-[18px]">
            Completed a Bachelor&lsquo;s Degree with Second-Class Honors in Chemical
            Engineering
          </p>
        </div>
      </div>
    </>
  );
}
