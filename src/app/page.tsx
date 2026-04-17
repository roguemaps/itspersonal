"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ResumeButton from "@/components/ui/resumeButton";

import profilePic from "../../public/my_face_1.jpeg";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
        <ResumeButton
          onClick={() => router.push("/static_view")}
          buttonLabel="Static View"
        />
        <h1 className="animate-slide-in-1 text-6xl font-bold text-center sm:text-left">
          My Work Experience
        </h1>
        <div className="animate-slide-in-2 w-full mt-8 flex items-center justify-left">
          <Image src={profilePic} alt="My Face" width={200} height={200} />
        </div>
        <div className="animate-slide-in-3 w-full mt-8 flex items-center justify-center flex-col">
          <p className="text-2xl text-left">
            I&#39;m a Senior Software Engineer with 9 years of experience in
            building scalable web and mobile applications. I&#39;ve worked at
            companies of all sizes, from startups to large enterprises, and have
            a proven track record of delivering high-quality software.
          </p>
          <p className="text-2xl text-center mt-4 text-left">
            I&#39;m passionate about building products that solve real problems
            and have a positive impact on people&#39;s lives. I&#39;m always
            looking for new challenges and opportunities to grow as an engineer.
          </p>
          <p className="text-2xl text-center mt-4 text-left">
            Take a look below to see some of the companies I&#39;ve worked at
            and the impact I&#39;ve had there.
          </p>
        </div>
        <Carousel className="animate-slide-in-4 w-full mt-8 w-full items-center justify-start gap-4 border rounded p-4">
          <CarouselContent className="p-2">
            <CarouselItem className="basis-full text-black p-4 rounded">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Varo Bank</h2>
                  <p>Senior Software Engineer (2022 - 2026)</p>
                </CardHeader>
                <CardContent className="text-lg">
                  <ul className="list-disc list-inside">
                    <li>
                      Architected a complete rewrite of 3 core applications
                      using React Native and Expo Router, resulting in a 3x
                      increase in engineering efficiency and streamlined
                      cross-platform deployment.
                    </li>
                    <li>
                      Optimized internal operations by engineering a custom
                      suite of administrative tools, significantly reducing
                      operational overhead and call center friction.
                    </li>
                    <li>
                      Collaborated with Stakeholders to translate complex
                      business requirements into scalable technical roadmaps,
                      ensuring 100% on-time delivery of mission-critical
                      features.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full text-black p-4 rounded">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">GLOBALID</h2>
                  <p>Lead Full-stack Engineer (2021 -2022)</p>
                </CardHeader>
                <CardContent className="text-lg">
                  <ul className="list-disc list-inside">
                    <li>
                      Engineered high-concurrency microservices using Node.js
                      and NestJS, implementing industry best practices for
                      security and performance.
                    </li>
                    <li>
                      Mentored junior/mid-level engineers, establishing rigorous
                      code review standards and modernizing the frontend stack
                      with TypeScript and Recoil
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full text-black p-4 rounded">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">HUMBLPAY</h2>
                  <p>Senior Software Engineer (2020 - 2021)</p>
                </CardHeader>
                <CardContent className="text-lg">
                  <ul className="list-disc list-inside">
                    <li>
                      Launched a cross-platform component library using React,
                      CapacitorJS, and Storybook, enabling 100% UI consistency
                      across web and mobile products.
                    </li>
                    <li>
                      Streamlined Developer Experience (DX) by redesigning the
                      onboarding pipeline, cutting time-to-first-commit by 50%
                      while improving team morale.
                    </li>
                    <li>
                      Managed complex state transitions for multi-stage
                      financial onboarding using Redux and Hooks, reducing
                      logic- related bugs by 40%.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full text-black p-4 rounded">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">BESTBUY</h2>
                  <p>Engineer Level 4 (2020)</p>
                </CardHeader>
                <CardContent className="text-lg">
                  <ul className="list-disc list-inside">
                    <li>
                      Orchestrated a multi-team internal React Native
                      application, aligning architectural standards across
                      different product squads.
                    </li>
                    <li>
                      Modernized repository architecture by shifting multiple
                      applications to a mono-repo, reducing developer friction
                      and dependency bottlenecks.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full text-black p-4 rounded">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">NuOrder</h2>
                  <p>Full-Stack Engineer (2019 - 2020)</p>
                </CardHeader>
                <CardContent className="text-lg">
                  <ul className="list-disc list-inside">
                    <li>
                      Architected a Major UI Modernization: Led the migration of
                      the core web application through a major Material UI
                      version transition, ensuring zero downtime and maintaining
                      visual consistency across the platform.
                    </li>
                    <li>
                      Legacy System Refactoring: Systematically modernized a
                      legacy Express.js application, improving code
                      maintainability and API response times through optimized
                      middleware and route handling.
                    </li>
                    <li>
                      Performance Optimization: Leveraged Material UI and React
                      best practices to transform a dated interface into a
                      high-performance, cutting edge web experience,
                      significantly reducing client-side latency.
                    </li>
                    <li>
                      Scalable Feature Delivery: Implemented performant new
                      features in React and Redux, directly addressing end-user
                      pain points and improving the overall workflow for B2B
                      e-commerce clients.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full text-black p-4 rounded">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">
                    FlowJo (Acquired by BD)
                  </h2>
                  <p>
                    Lead Front-end Engineer - Full Stack Node Engineer (2015 -
                    2019)
                  </p>
                </CardHeader>
                <CardContent className="text-lg">
                  <ul className="list-disc list-inside">
                    <li>
                      Acquisition Success: Spearheaded the development of a
                      speculative Node/React SPA that modernized FlowJo&#39;s
                      legacy software, serving as a primary technical driver for
                      the company&#39;s acquisition by BD.
                    </li>
                    <li>
                      Architecture & Patent: Named as a key contributor on a
                      design patent (US D832,296) for innovative UI/UX
                      workflows; influenced the strategic shift to Web View
                      architecture for dynamic releases.
                    </li>
                    <li>
                      Testing & Reliability: Overhauled the testing culture with
                      Jest and Mocha, stabilizing crucial endpoint routes by
                      migrating from Redux-Thunk to Redux-Saga.
                    </li>
                    <li>
                      Life Sciences Impact: Engineered systems for sharing
                      life-saving Life Science data using React, Redux, Node.js,
                      and Happi.js, directly increasing researcher productivity.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-gray-500" />
          <CarouselNext className="bg-gray-500" />
        </Carousel>
      </main>
    </div>
  );
}
