import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";

export const CodeBlock = ({
  children,
  fileName,
}: {
  children: string;
  fileName?: string;
}) => {
  return (
    <div className="flex flex-col items-center border border-white rounded-lg md:max-w-[50%] w-full max-h-[50%] overflow-clip">
      <div className="border-b w-full overflow-scroll">
        <SyntaxHighlighter
          language="typescript"
          style={dark}
          customStyle={{ background: "transparent" }}
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
