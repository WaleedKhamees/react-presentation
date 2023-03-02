import { ReactNode } from "react";

export const CodeBlock = ({
  children,
  fileName,
}: {
  children: ReactNode;
  fileName?: string;
}) => {
  return (
    <div className="flex flex-col items-center border border-white rounded-lg max-w-full max-h-[50%]">
      <pre className="text-white border-b w-full overflow-scroll">
        <code className="m-4 inline-block">{children}</code>
      </pre>
      <p className="font-mono w-full text-center py-2 text-body">
        {fileName ?? "unnamed"}
      </p>
    </div>
  );
};
