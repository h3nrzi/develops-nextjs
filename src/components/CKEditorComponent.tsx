"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from "ckeditor5";
import "ckeditor5/ckeditor5.css";

interface CKEditorComponentProps {
  value: string;
  onChange: (data: string) => void;
}

export default function CKEditorComponent({ value, onChange }: CKEditorComponentProps) {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: ["bold", "italic"],
        plugins: [Bold, Essentials, Italic, Paragraph],
      }}
      data={value}
      onChange={(_, editor) => {
        onChange(editor.getData());
      }}
    />
  );
}
