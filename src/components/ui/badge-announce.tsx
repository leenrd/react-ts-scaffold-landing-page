import { Github, ArrowRightIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import redirectToSite from "@/utils/redirectToSite";

export function Announcement() {
  return (
    <div
      onClick={() => redirectToSite("https://github.com/leenrd")}
      className="inline-flex items-center text-background rounded-lg cursor-pointer bg-muted-background px-3 py-1 text-sm font-medium mb-10"
    >
      <Github className="h-4 w-4" />{" "}
      <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span>Check out on github</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </div>
  );
}
