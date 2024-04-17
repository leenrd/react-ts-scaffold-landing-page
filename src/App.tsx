import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, MoveRight, Clipboard, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import redirectToSite from "./utils/redirectToSite";
import { ModeToggle } from "./components/ui/themeToggle";
import copyText from "./utils/copyText";
import { useState } from "react";

function App() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const codeValue = "npm install react-ts-scaffold";

  return (
    <main className="font-brand relative">
      <img src="./bg.svg" className="absolute -z-10 -top-5" />
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <span
          className="flex gap-3 justify-center items-center px-6 py-1 border-2 border-slate-900 rounded-full cursor-pointer hover:bg-slate-900 hover:text-white transition-all font-semibold"
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
          <pre className="bg-secondary-foreground rounded-md w-[30rem] py-2 px-3 ">
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
            />
          ))}
        </div>
      </div>
      <footer className="w-screen bg-secondary py-8">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          <p className="font-semibold">
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
  },
  {
    name: "TypeScript",
    desc: "A typed superset of JavaScript that compiles to plain JavaScript",
  },
  {
    name: "TailwindCSS",
    desc: "A utility-first CSS framework for rapid UI development",
  },
  {
    name: "ShadcnUi",
    desc: "A set of TailwindCSS components",
  },
  {
    name: "Lucide-icons",
    desc: "A set of simply beautiful open-source icons",
  },
  {
    name: "React-router-dom",
    desc: "Declarative routing for React",
  },
  {
    name: "Geist",
    desc: "Vercel official font",
  },
  {
    name: "Vite",
    desc: "A fast development server that supports hot module replacement (HMR) and fast refresh.",
  },
  {
    name: "React Query",
    desc: "Query data in React with a hook-based approach",
  },
];

const Dependencies = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <Card className="hover:border-1 hover:border-purple-500 shadow-sm hover:shadow-xl transition duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
    </Card>
  );
};

export default App;
