import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { tomorrow as dark } from "react-syntax-highlighter/dist/esm/styles/prism";
SyntaxHighlighter.registerLanguage("ts", ts);

export const CodeBlock = ({
  children,
  fileName,
}: {
  children: string;
  fileName?: string;
}) => {
  return (
    <div className="flex flex-col items-center border border-white rounded-lg md:max-w-[50%] w-full max-h-[80%] overflow-clip">
      <div className="border-b w-full overflow-scroll ">
        <SyntaxHighlighter
          language={"ts"}
          style={dark}
          customStyle={{
            background: "transparent",
            margin: "0rem 0.5rem",
            padding: "0.5rem 0rem",
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
      <p className="font-mono w-full text-center py-2 text-body">
        {fileName ?? "unnamed"}
      </p>
    </div>
  );
};
