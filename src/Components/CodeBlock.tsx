import { ReactNode } from "react";

export const CodeBlock = ({
  children,
  fileName,
}: {
  children: ReactNode;
  fileName: string;
}) => {
  return (
    <div className="w-1/2 border rounded-md">
      <pre className="text-white border-b">
        <code>{children}</code>
      </pre>
      <p className="font-mono w-full text-center py-2 text-body">{fileName}</p>
    </div>
  );
};
