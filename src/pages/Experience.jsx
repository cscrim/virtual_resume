import { contactLinks } from "../data/contactLinks";
import { skillsAndTools } from "../data/skillsAndTools";
import { experienceDetails } from "../data/experienceDetails";
import { educationDetails } from "../data/educationDetails";
// import CourtneyResume from "../assets/files/courtneyresume.pdf";
// import { DownloadSimple } from "@phosphor-icons/react";
// import LinkButton from "../components/LinkButton";
import LinkSocial from "../components/LinkSocial";
import ChipList from "../components/ChipList";
import IconList from "../components/IconList";

function Experience() {
  return (
    <main className="main-container pt-0">
      <section className="pt-0 py-4 md:py-4">
        <div className="mx-auto space-y-4 lg:max-w-screen-lg pb-4">
          <h1 className="text-5xl text-center leading-relaxed">Courtney Scrimshaw</h1>
          {/* <p className="text-xl md:text-2xl text-center">
            my career journey 
          </p> */}

          <div className="w-fit mx-auto">
            {/* <LinkButton
              label="Download Resume"
              href={CourtneyResume}
              size="lg"
              target="_blank"
              iconRight={<DownloadSimple weight="bold" className="text-xl" />}
            /> */}
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-3 grid-auto-rows gap-4 md:gap-10">
        <section className="section-card md:col-span-1 md:order-1">
          <h2>Contact</h2>
          <div className="space-y-6">
            {contactLinks.map((contactItem) => {
              return (
                <LinkSocial
                  key={contactItem.id}
                  url={contactItem.url}
                  icon={contactItem.icon}
                  title={contactItem.title}
                />
              );
            })}
          </div>
        </section>

        <section className="section-card md:col-span-1 row-span-1 md:order-3">
          <h2>Profile</h2>
          <p className="text-xl">
            With 8+ years of experience in SaaS, I blend technical expertise and business strategy to build user-centric, scalable solutions. Proficient in full-stack development and API integrations, I create products that drive both innovation and functionality. My ability to bridge technical and business needs enables me to lead teams and deliver impactful products that align with market demands.
          </p>
        </section>

        <section className="section-card md:col-span-2 md:row-span-3 md:order-2">
          <h2>Experience</h2>
          <ul className="flex flex-col gap-10 pl-10">
            {experienceDetails.map((role) => {
              return (
                <li
                  key={role.id}
                  className="relative flex flex-col gap-4
                  before:absolute before:w-4 before:h-4 before:rounded-full before:bg-seafoam-500 before:-left-10 before:top-1.5 before:animate-radiate
                  [&:not(:last-of-type)]:after:absolute after:bg-seafoam-500 after:opacity-30 after:w-px after:h-[calc(100%+2rem)] after:-left-8 after:top-3"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-semibold">{role.jobTitle}</p>
                    <p className="text-base leading-none text-fuschia-50 flex justify-between">
                      <span>{role.company}</span>
                      <span>{role.yearRange}</span>
                    </p>
                  </div>

                  <ul className="list-disc pl-4 flex flex-col gap-2">
                    {role.description.map((item, index) => {
                      return (
                        <li key={index} className="ps-2">
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <ChipList labels={role.skillsAndTools} />
                </li>
              );
            })}
          </ul>
        </section>

        <section className="section-card md:col-span-2 md:order-8 md:col-start-2">
          <h2>Education</h2>
          <IconList listItems={educationDetails} />
        </section>

        <section className="section-card md:col-span-1 row-span-1 md:order-5">
          <h2>Skills</h2>
          <ChipList labels={skillsAndTools.skills} variant="secondary" />
        </section>

        <section className="section-card md:col-span-1 row-span-1 md:order-6">
          <h2>Tools</h2>
          <ChipList labels={skillsAndTools.tools} variant="secondary" />
        </section>
      </div>
    </main>
  );
}

export default Experience;