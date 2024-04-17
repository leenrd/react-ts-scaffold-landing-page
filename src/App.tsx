import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, MoveRight, Clipboard, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import redirectToSite from "./utils/redirectToSite";
import { ModeToggle } from "./components/ui/themeToggle";
import copyText from "./utils/copyText";
import { useEffect, useState } from "react";

function App() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, []);

  const codeValue = "git clone git@github.com:leenrd/react-ts-scaffold.git";

  return (
    <main className="font-geist relative text-center">
      <img
        src="./bg.svg"
        className="absolute -z-10 -top-5  left-1/2 transform -translate-x-1/2 "
      />
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <span
          className="flex gap-3 justify-center items-center px-6 py-1 border-2 border-accent rounded-full cursor-pointer hover:bg-black hover:text-white transition-all font-semibold"
          onClick={() => redirectToSite("https://github.com/leenrd")}
        >
          <Github className=" h-[1rem] w-[1rem]" />
          <span className="flex gap-2 items-center justify-center">
            <p className=" ">Visit my other projects</p>
            <MoveRight className=" h-[1rem] w-[1rem] mt-1" />
          </span>
        </span>
        <h1 className="scroll-m-20 mt-7 text-4xl font-bold tracking-tight lg:text-5xl">
          Leenard's Frontend Starter
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Uses technologies like TypeScript, TailwindCSS w/ ShadcnUi,
          Lucide-icons, React-router-dom and more.
        </p>
        <div className="mt-9 flex gap-3 items-center justify-center">
          <Button
            variant={"default"}
            onClick={() =>
              redirectToSite("https://github.com/leenrd/react-ts-scaffold")
            }
          >
            Use Template
          </Button>
          <Button
            variant={"outline"}
            onClick={() =>
              redirectToSite("https://github.com/leenrd/node-ts-scaffold")
            }
          >
            Template for Backend
          </Button>
        </div>
        <div className="mt-16 flex justify-between items-center gap-2">
          <pre className="bg-secondary-foreground rounded-md w-fit py-2 px-5">
            <code className="text-accent">{codeValue}</code>
          </pre>
          <Button
            onClick={() =>
              copyText(
                codeValue,
                () => {
                  toast({
                    description: "Text copied! 🔥🔥🎉",
                  });
                  console.log("Text copied!");
                  setCopied(true);
                },
                (error) => {
                  console.error("Failed to copy:", error);
                }
              )
            }
            variant={"ghost"}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Clipboard className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto mb-[10rem]">
        <h2 className="text-4xl tracking-tight font-bold text-center mb-20">
          Dependencies
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {dependencies.map((dependency) => (
            <Dependencies
              key={dependency.name}
              name={dependency.name}
              desc={dependency.desc}
              img={dependency.img}
            />
          ))}
        </div>
      </div>
      <footer className="w-screen bg-secondary py-8">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          <p className="font-semibold text-wrap text-start">
            Built by{" "}
            <a href="https://github.com/leenrd" className="underline">
              leenard
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/leenrd/react-ts-scaffold"
              className="underline"
            >
              GitHub
            </a>{" "}
            .
          </p>
          <ModeToggle />
        </div>
      </footer>
      <Toaster />
    </main>
  );
}

const dependencies = [
  {
    name: "React",
    desc: "A JavaScript library for building user interfaces",
    img: "react.svg",
  },
  {
    name: "TypeScript",
    desc: "A typed superset of JavaScript that compiles to plain JavaScript",
    img: "typescript.svg",
  },
  {
    name: "TailwindCSS",
    desc: "A utility-first CSS framework for rapidly building custom designs",
    img: "tailwindcss.svg",
  },
  {
    name: "ShadcnUi",
    desc: "A set of components for TailwindCSS",
    img: "shadcnui.svg",
  },
  {
    name: "Lucide Icons",
    desc: "A set of simply beautiful open-source icons",
    img: "icon.svg",
  },
  {
    name: "React Router",
    desc: "Declarative routing for React",
    img: "reactrouter.svg",
  },
  {
    name: "React Query",
    desc: "Hooks for fetching, caching and updating asynchronous data in React",
    img: "reactquery.svg",
  },
  {
    name: "Vite",
    desc: "A build tool that aims to provide a faster and leaner development experience for modern web projects",
    img: "vite.svg",
  },
  {
    name: "Geist sans",
    desc: "Official Vercel font",
    img: "vercel.svg",
  },
];

const Dependencies = ({
  name,
  desc,
  img,
}: {
  name: string;
  desc: string;
  img: string;
}) => {
  return (
    <Card className="hover:border-1 text-start py-4 hover:border-purple-500 shadow-sm hover:shadow-xl transition duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="font-bold flex gap-4 items-center">
          <img
            className="h-6 w-6 filter invert mix-blend-difference"
            src={`/${img}`}
          />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
    </Card>
  );
};

export default App;
