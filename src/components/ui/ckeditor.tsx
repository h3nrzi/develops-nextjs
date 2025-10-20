"use client";

import { useEffect, useState } from "react";
import "ckeditor5/ckeditor5.css";

interface CKEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function CKEditorComponent({
  value,
  onChange,
  placeholder,
}: CKEditorProps) {
  const [Editor, setEditor] = useState<any>(null);

  useEffect(() => {
    import("@ckeditor/ckeditor5-react").then((mod) => {
      import("ckeditor5").then((ck) => {
        setEditor(() => ({
          CKEditor: mod.CKEditor,
          ...ck,
        }));
      });
    });
  }, []);

  if (!Editor)
    return (
      <div className="flex min-h-[350px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent"></div>
      </div>
    );

  const {
    CKEditor,
    ClassicEditor,
    Bold,
    Essentials,
    Italic,
    Paragraph,
    Heading,
    Link,
    List,
    Underline,
    Code,
    CodeBlock,
    BlockQuote,
    Image,
    ImageToolbar,
    ImageUpload,
    ImageResize,
    LinkImage,
    Table,
    TableToolbar,
    HorizontalLine,
    Strikethrough,
    Base64UploadAdapter,
  } = Editor;

  return (
    <div className="ckeditor-wrapper">
      <style>{`
        .ckeditor-wrapper,
        .ckeditor-wrapper * {
          font-family: inherit !important;
        }
        .ckeditor-wrapper .ck-editor__editable {
          direction: rtl;
          text-align: right;
          min-height: 350px;
        }
        .ckeditor-wrapper .ck-content {
          font-family: inherit !important;
        }
        .ckeditor-wrapper .ck-content h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
        }
        .ckeditor-wrapper .ck-content h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.75em 0;
        }
        .ckeditor-wrapper .ck-content h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin: 0.83em 0;
        }
        .ckeditor-wrapper .ck-content ul,
        .ckeditor-wrapper .ck-content ol {
          padding-right: 2rem;
          padding-left: 0;
          margin: 1em 0;
        }
        .ckeditor-wrapper .ck-content ul {
          list-style-type: disc;
        }
        .ckeditor-wrapper .ck-content ol {
          list-style-type: decimal;
        }
        .ckeditor-wrapper .ck-content li {
          margin: 0.5em 0;
        }
        .ckeditor-wrapper .ck-content img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 1em 0;
        }
        .ckeditor-wrapper .ck-content a {
          color: #0969da;
          text-decoration: underline;
          cursor: pointer;
        }
        .ckeditor-wrapper .ck-content a:hover {
          text-decoration: none;
        }
        .ckeditor-wrapper .ck-content hr {
          border: none !important;
          border-top: 1px solid #e5e7eb !important;
          margin: 1.5em 0 !important;
          height: 1px !important;
        }
      `}</style>
      <CKEditor
        editor={ClassicEditor}
        config={{
          licenseKey: "GPL",
          language: "ar",
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "|",
            "link",
            "uploadImage",
            "insertTable",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "code",
            "codeBlock",
            "blockQuote",
            "horizontalLine",
          ],
          plugins: [
            Bold,
            Essentials,
            Italic,
            Paragraph,
            Heading,
            Link,
            List,
            Underline,
            Code,
            CodeBlock,
            BlockQuote,
            Image,
            ImageToolbar,
            ImageUpload,
            ImageResize,
            LinkImage,
            Table,
            TableToolbar,
            HorizontalLine,
            Strikethrough,
            Base64UploadAdapter,
          ],
          heading: {
            options: [
              {
                model: "paragraph",
                title: "پاراگراف",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "عنوان ۱",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "عنوان ۲",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "عنوان ۳",
                class: "ck-heading_heading3",
              },
            ],
          },
          link: {
            defaultProtocol: "https://",
            decorators: {
              openInNewTab: {
                mode: "manual",
                label: "Open in a new tab",
                attributes: {
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
              },
            },
          },
          image: {
            toolbar: ["imageTextAlternative", "imageResize"],
            resizeUnit: "px",
          },
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },
          placeholder: placeholder || "متن خود را بنویسید...",
        }}
        data={value}
        onChange={(_, editor) => {
          onChange(editor.getData());
        }}
      />
    </div>
  );
}
