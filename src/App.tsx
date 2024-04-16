import { Button } from "./components/ui/button";
import { Github } from "lucide-react";

// no dependencies for api calls yet
function App() {
  return (
    <main className="font-brand">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <span className="flex gap-3 justify-center items-center px-6 py-1 bg-gray-500 rounded-full">
          <Github className="text-white h-[1.15rem] w-[1.15rem]" />
          <p className=" text-white">Visit my other projects</p>
        </span>
        <h1 className="scroll-m-20 mt-7 text-4xl font-bold tracking-tight lg:text-5xl">
          Leenard's Frontend Starter
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Uses technologies like TypeScript, TailwindCSS w/ ShadcnUi,
          Lucide-icons, React-router-dom and more.
        </p>
        <div className="mt-9 flex gap-3 items-center justify-center">
          <Button variant={"outline"}>Use Template</Button>
          <Button variant={"secondary"}>Github</Button>
        </div>
      </div>
    </main>
  );
}

export default App;
