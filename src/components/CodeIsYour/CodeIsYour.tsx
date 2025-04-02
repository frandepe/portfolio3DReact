"use client";

import { CodeBlock, CodeBlockCode } from "@/components/ui/code-block";

export function CodeIsYour() {
  const code = `
      // Este código es completamente del cliente 
      // y puedes modificarlo como desees.
      
      function greet(name) {
        return \`Hola, \${name}!\`;
      }
      
      // Llamamos la función para saludar al "Mundo"
      greet("Mundo");`;

  return (
    <div className="w-full h-full">
      <CodeBlock>
        <CodeBlockCode code={code} language="javascript" />
      </CodeBlock>
    </div>
  );
}
