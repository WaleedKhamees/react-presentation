import { useMemo, useState } from "react";
import { BsClipboard } from "react-icons/bs";
import hljs from "highlight.js/lib/common";

import { Btn } from "./Btn";

import "../github.css";

export const CodeBlock = ({
  children,
  fileName,
}: {
  children: string;
  fileName?: string;
}) => {
  const Code = useMemo(() => {
    return hljs.highlight(children, { language: "ts" }).value;
  }, [children]);

  const [message, setMessage] = useState("");

  const CopyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setMessage("✅");
      setTimeout(() => {
        setMessage("");
      }, 1000);
      console.log("Text copied to clipboard");
    } catch (err) {
      setMessage("❎");
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-col items-center border dark:border-white border-black rounded-lg md:max-w-[50%] w-full max-h-[80%] overflow-clip">
      <div className="flex items-center justify-between px-4 py-2 w-full">
        <p className="font-mono w-full py-2 dark:text-bodyDark text-bodyLight">
          {fileName ?? "unnamed"}
        </p>
        <Btn
          onClick={() => CopyToClipBoard()}
          className="py-2 px-2 rounded-lg transition-all duration-1000 ease-in-out"
        >
          {message === "" ? <BsClipboard /> : message}
        </Btn>
      </div>
      <div className="border-t dark:border-white border-black w-full overflow-scroll">
        <pre className="lang-ts code my-2 px-2 w-fit">
          <code
            className="code whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: Code,
            }}
          ></code>
        </pre>
      </div>
    </div>
  );
};
