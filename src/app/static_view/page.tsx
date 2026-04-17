"use client";
import { useRouter } from "next/navigation";

import ResumeButton from "@/components/ui/resumeButton";

import ResumeSection from "./resume_section";
import { WorkHistory } from "./work_history";

export default function StaticView() {
  const router = useRouter();
  return (
    <div className="flex h-full w-full items-center justify-center flex-col gap-8 m-8 fade-in">
      <div className="w-2/3 mx-auto flex justify-center mt-10 flex-col gap-8">
        <div className="flex w-full justify-center items-center mt-10 mx-auto text-center">
          <ResumeButton
            onClick={() => router.push("/")}
            buttonLabel="Back to Dynamic View"
          />
        </div>

        <h1 className="text-2xl font-bold">This is a static view</h1>
        <div className="flex-1 border-b border-gray-300"></div>
        <ResumeSection title="Summary">
          <p>
            Senior Full Stack Engineer with 10+ years of experience architecting
            and scaling high-performance applications across Fintech and
            E-commerce.{" "}
          </p>
          <p>
            CExpert in React Native, Node.js, and TypeScript, with a proven
            track record of tripling engineering velocity through modular
            architecture and DevOps optimization. Design patent holder with a
            focus on bridging the gap between complex backend systems and
            intuitive, user-centric interfaces.
          </p>
        </ResumeSection>
        <ResumeSection title="Skills">
          <ul className="list-disc list-inside">
            <li>
              <strong>Languages:</strong>JavaScript (ES6+), TypeScript, Kotlin,
              Go
            </li>
            <li>
              <strong>Frontend:</strong>React, React Native, Recoil, Expo,
              Next.js, Material UI, Swift, Kotlin
            </li>
            <li>
              <strong>Backend:</strong>Node.js, NestJS, Express, GraphQL, Go,
              Kotlin, Spring Boot
            </li>
            <li>
              <strong>Tools/Cloud:</strong> AWS, Docker, Git, CI/CD, Jest,
              Storybook
            </li>
          </ul>
        </ResumeSection>
        <ResumeSection title="Patents">
          <p>Key contributor on Patent number US D832,296 October 30, 2018</p>
        </ResumeSection>
        <div className="flex-1 border-b border-gray-300"></div>
        <ResumeSection title="Experience">
          <WorkHistory
            company="Varo"
            role="Senior Full Stack Engineer"
            duration="2023 - 2026"
          >
            <ul className="list-disc list-inside">
              <li>
                Architected a complete rewrite of 3 core applications using
                React Native and Expo Router, resulting in a 3x increase in
                engineering efficiency and streamlined cross-platform
                deployment.
              </li>
              <li>
                Optimized internal operations by engineering a custom suite of
                administrative tools, significantly reducing operational
                overhead and call center friction.
              </li>
              <li>
                Collaborated with Stakeholders to translate complex business
                requirements into scalable technical roadmaps, ensuring 100%
                on-time delivery of mission-critical features.
              </li>
            </ul>
          </WorkHistory>
          <WorkHistory
            company="GLOBALID"
            role="Lead Full Stack Engineer"
            duration="2021 - 2022"
          >
            <ul className="list-disc list-inside">
              <li>
                Engineered high-concurrency microservices using Node.js and
                NestJS, implementing industry best practices for security and
                performance.
              </li>
              <li>
                Mentored junior/mid-level engineers, establishing rigorous code
                review standards and modernizing the frontend stack with
                TypeScript and Recoil.
              </li>
            </ul>
          </WorkHistory>
          <WorkHistory
            company="HUMBLPAY"
            role="Senior Software Engineer"
            duration="2020 - 2021"
          >
            <ul className="list-disc list-inside">
              <li>
                Launched a cross-platform component library using React,
                CapacitorJS, and Storybook, enabling 100% UI consistency across
                web and mobile products.
              </li>
              <li>
                Streamlined Developer Experience (DX) by redesigning the
                onboarding pipeline, cutting &ldquo;time-to-first-commit&rdquo;
                by 50% while improving team morale.
              </li>
              <li>
                Managed complex state transitions for multi-stage financial
                onboarding using Redux and Hooks, reducing logic-related bugs by
                40%.
              </li>
            </ul>
          </WorkHistory>
          <WorkHistory
            company="BESTBUY"
            role="Engineer Level 4"
            duration="2020"
          >
            <ul className="list-disc list-inside">
              <li>
                Orchestrated a multi-team internal React Native application,
                aligning architectural standards across different product
                squads.
              </li>
              <li>
                Modernized repository architecture by shifting multiple
                applications to a mono-repo, reducing developer friction and
                dependency bottlenecks.
              </li>
            </ul>
          </WorkHistory>
          <WorkHistory
            company="NuOrder"
            role="Full-Stack Engineer"
            duration="2019 - 2020"
          >
            <ul className="list-disc list-inside">
              <li>
                Architected a Major UI Modernization: Led the migration of the
                core web application through a major Material UI version
                transition, ensuring zero downtime and maintaining visual
                consistency across the platform.
              </li>
              <li>
                Legacy System Refactoring: Systematically modernized a legacy
                Express.js application, improving code maintainability and API
                response times through optimized middleware and route handling.
              </li>
              <li>
                Performance Optimization: Leveraged Material UI and React best
                practices to transform a dated interface into a
                high-performance, &ldquo;cutting edge&rdquo; web experience,
                significantly reducing client-side latency.
              </li>
              <li>
                Scalable Feature Delivery: Implemented performant new features
                in React and Redux, directly addressing end-user pain points and
                improving the overall workflow for B2B e-commerce clients.
              </li>
            </ul>
          </WorkHistory>
          <WorkHistory
            company="FlowJo (Acquired by BD)"
            role="Lead Front-end Engineer - Full Stack Node Engineer"
            duration="2015 - 2019"
          >
            <ul className="list-disc list-inside">
              <li>
                Acquisition Success: Spearheaded the development of a
                speculative Node/React SPA that modernized FlowJo&rsquo;s legacy
                software, serving as a primary technical driver for the
                company&rsquo;s acquisition by BD.
              </li>
              <li>
                Architecture & Patent: Named as a key contributor on a design
                patent (US D832,296) for innovative UI/UX workflows; influenced
                the strategic shift to Web View architecture for dynamic
                releases.
              </li>
              <li>
                Testing & Reliability: Overhauled the testing culture with Jest
                and Mocha, stabilizing crucial endpoint routes by migrating from
                Redux-Thunk to Redux-Saga.
              </li>
              <li>
                Life Sciences Impact: Engineered systems for sharing life-saving
                Life Science data using React, Redux, Node.js, and Happi.js,
                directly increasing researcher productivity.
              </li>
            </ul>
          </WorkHistory>
        </ResumeSection>
        <ResumeSection title="Education">
          <p>
            Hamline University, MN — Flexible Curriculum (Computer Science) -
            2005
          </p>
        </ResumeSection>
      </div>
    </div>
  );
}
