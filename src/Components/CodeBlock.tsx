import { ReactNode } from "react";

export const CodeBlock = ({
  children,
  fileName,
}: {
  children: ReactNode;
  fileName?: string;
}) => {
  return (
    <div className="flex flex-col items-center w-1/2 max-h-[66.66%] border border-white rounded-lg">
      <pre className="text-white border-b w-full h-full overflow-scroll">
        <code className="m-4 inline-block">{children}</code>
      </pre>
      <p className="font-mono w-full text-center py-2 text-body">{fileName ?? "unnamed"}</p>
    </div>
  );
};
