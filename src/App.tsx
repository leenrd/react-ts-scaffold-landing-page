import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clipboard, Check, SquareDashedBottomCode } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
// import redirectToSite from "./utils/redirectToSite";
import { ModeToggle } from "./components/ui/themeToggle";
import copyText from "./utils/copyText";
import { useEffect, useState } from "react";
import { Badge } from "./components/ui/badge";
import { cn } from "./lib/utils";
import { Announcement } from "./components/ui/badge-announce";

function App() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, []);

  const codeValue = "npx create-lnrd";

  return (
    <main className="inter-family relative text-center">
      <article className="bg-secondary-foreground text-background py-1">
        <p className="font-normal text-sm">
          Incoming ready made auth using JWT! 🦄
        </p>
      </article>
      <img
        src="./bg.svg"
        className="absolute -z-10 -top-5  left-1/2 transform -translate-x-1/2 "
      />
      <div className=" h-screen flex flex-col justify-center items-center">
        <Announcement />
        <h1 className="scroll-m-20 mt-7 text-4xl font-bold tracking-tight lg:text-5xl">
          Scaffold projects with ease
        </h1>
        <p className="[&:not(:first-child)]:mt-6 font-normal">
          Templating that provides clear and bare dependencies to get you
          started at speed.
        </p>
        <div className="mt-16 flex justify-between items-center gap-2">
          <pre className="bg-secondary-foreground flex items-center rounded-md w-fit py-2 px-5">
            <code className="text-accent">{codeValue}</code>
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
              className="hover:bg-secondary-foreground p-0 m-0 ml-5 hover:text-accent transition duration-300 ease-in-out"
            >
              {copied ? (
                <Check className="h-4 w-4 text-background p-0 m-0" />
              ) : (
                <Clipboard className="h-4 w-4 text-background p-0 m-0" />
              )}
            </Button>
          </pre>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto mb-[10rem]">
        <h2 className="text-4xl tracking-tight font-bold text-center">
          What's inside?
        </h2>
        <p className="mb-20 font-normal mt-6">
          The starter gives template choices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5">
          {dependencies.map((dependency) => (
            <Dependencies
              key={dependency.name}
              name={dependency.name}
              desc={dependency.desc}
            />
          ))}
        </div>
      </div>

      <footer className="bg-secondary py-8">
        <div className=" flex items-center justify-between px-20">
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
    name: "V1",
    desc: "Frontend template.",
    arr: ["React", "TypeScript", "TailwindCSS", "Vite", "Tanstack"],
  },
  {
    name: "V2",
    desc: "Backend template.",
    arr: ["Express", "TypeScript", "Mongo"],
  },
  {
    name: "V3",
    desc: "Backend template.",
    arr: ["Express", "TypeScript", "Postgres"],
  },
  {
    name: "V4",
    desc: "Full-stack template.",
    arr: ["NextJs", "TypeScript", "Redis", "Tailwind"],
  },
];

const Dependencies = ({ name, desc }: { name: string; desc: string }) => {
  const curr = dependencies.find((dep) => dep.name === name);

  return (
    <Card
      className={cn(
        "hover:border-1 text-start  py-4 hover:border-purple-500 shadow-sm hover:shadow-xl transition duration-300 ease-in-out rounded-none cursor-pointer",
        curr?.name === "Vitretack" ? "rounded-tl-md" : null,
        curr?.name === "Extygo" ? "rounded-tr-md" : null,
        curr?.name === "Extyql" ? "rounded-bl-md" : null,
        curr?.name === "Nextyred" ? "rounded-br-md" : null
      )}
    >
      <CardHeader>
        <CardTitle className="font-bold flex gap-4 items-center">
          <SquareDashedBottomCode />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-3">{desc}</p>
        {curr?.arr.map((dep) => (
          <Badge key={dep} className="mr-2 rounded-sm">
            {dep}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default App;
