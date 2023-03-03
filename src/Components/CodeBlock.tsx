import { useContext, useState } from "react";
import { BsClipboard } from "react-icons/bs";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { tomorrow as dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight as light } from "react-syntax-highlighter/dist/esm/styles/prism";
import { DarkModeContext } from "../App";
import { Btn } from "./Btn";

SyntaxHighlighter.registerLanguage("ts", ts);

export const CodeBlock = ({
  children,
  fileName,
}: {
  children: string;
  fileName?: string;
}) => {
  const { darkMode } = useContext(DarkModeContext);
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
    <div className="flex flex-col items-center border dark:border-white border-black rounded-lg md:max-w-[48%] w-full max-h-[80%] overflow-clip">
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
      <div className="border-t dark:border-white border-black w-full overflow-scroll relative">
        <SyntaxHighlighter
          language={"ts"}
          style={darkMode ? dark : light}
          customStyle={{
            background: "transparent",
            margin: "0rem 0.5rem",
            padding: "0.5rem 0rem",
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
