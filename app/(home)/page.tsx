import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div className="text-4xl mb-5 font-semibold">
          Hey, I&apos;m Sohail</div>
        <div className="flex sm:flex-row flex-col items-start gap-8 mt-9">
          <div className="flex flex-col items-center flex-[1]">
            <Image
              src="/profile-pic.png"
              width={180}
              height={100}
              alt="profile"
              className="rounded-full mt-1.5 bg-primary-foreground"
            />
            <p className="text- text-center mt-3 text-muted-foreground font-semibold">
              Software Engineer.
            </p>
            <div className="flex flex-row items-center">
              <Link
                href="https://github.com/sohailshah20"
                className={buttonVariants({ variant: "link", className: 'text-base' },)}
              >
                <GithubIcon className="mr-1 w-4 h-4" />
                GitHub
              </Link>
              <Link
                href="https://twitter.com/Sohail__shah_"
                className={buttonVariants({
                  variant: "link",
                  className: "-ml-3 text-base",
                })}
              >
                <TwitterIcon className="mr-1 w-4 h-4" /> Twitter
              </Link>
            </div>
          </div>
          <div className="flex-[3]">
            <p className="text-lg prose dark:prose-invert prose-p:m-0">
              I am a Software Engineer residing in Hyderabad, India. I spend my days developing back-end services at Synectiks and my evenings working on personal projects, particularly focusing on Golang. I am passionate about learning and mastering Golang, and I am currently involved in numerous projects utilizing this language.
              I use product strategy and systems thinking to develop scalable, reliable, and efficient applications that delight customers. I am passionate about all things technology, software engineering, and cloud computing, and I enjoy reading and writing about these topics. Connect with me on LinkedIn!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6">
        <p className="text-lg prose dark:prose-invert prose-p:m-0">
          <span className="font-semibold text-primary">Work:</span> I currently work as a Software Engineer at Synectiks, where I lead the development of internal applications integrating various AWS services. I have previously interned as a Java-Backend Software Engineer at Wink Software, where I developed core functionalities using Java and Spring Boot. My current experience includes developing highly scalable microservice applications and CLI tools using GoLang and AWS cloud APIs.
        </p>
        <p className="text-lg prose dark:prose-invert prose-p:m-0">
          <span className="font-semibold text-primary">Skills:</span> My expertise includes Java, JavaScript, Go, SQL, Spring/SpringBoot, NodeJS, AWS, Serverless technologies, Docker, Microservices, HTML, and CSS. I love diving deep into topics and getting into the nitty-gritty details until I fully understand them.
        </p>
        <p className="text-lg prose dark:prose-invert prose-p:m-0">
          <span className="font-semibold text-primary">Personal:</span> When I am not coding or designing applications, I spend my time watching movies and anime. I hold a Bachelor{"'"}s degree in Computer Science Engineering from Muffakham Jah College of Engineering & Technology. Unlike most people from Hyderabad, I am not a big foodie. And i like cats!
        </p>
      </div>
    </div>
  );
}
