import { generateHTML } from "@tiptap/html";
import React, { useMemo } from "react";
import { defaultEditorContent } from "@/lib/default-content";
import { defaultExtensions } from "@/lib/default-extensions";
// import useLocalStorage from "@/hooks/use-local-storage";

const json = defaultEditorContent;

export default function PreviewPage() {
  // const json = useLocalStorage("novel__content", defaultEditorContent);
  const output = useMemo(() => {
    return generateHTML(json, defaultExtensions);
  }, [json]);

  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: output }}></div>
  );
}
