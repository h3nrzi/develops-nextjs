"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { forwardRef, useImperativeHandle, useCallback } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Code,
  List,
  ListOrdered,
  Link as LinkIcon,
  Highlighter,
  Heading1,
  Heading2,
} from "lucide-react";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Editor = forwardRef<HTMLDivElement, EditorProps>(
  ({ value, onChange, placeholder, className }, ref) => {
    const editor = useEditor({
      immediatelyRender: false,
      extensions: [
        StarterKit.configure({
          heading: {
            levels: [1, 2, 3],
          },
        }),
        Placeholder.configure({
          placeholder: placeholder || "متن خود را بنویسید...",
        }),
        Link.configure({
          openOnClick: false,
          HTMLAttributes: {
            class: "text-primary-500 underline",
          },
        }),
        Underline,
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
        Highlight.configure({
          multicolor: false,
        }),
      ],
      content: value,
      onUpdate: ({ editor }) => {
        onChange(editor.getHTML());
      },
      editorProps: {
        attributes: {
          class:
            "prose prose-sm max-w-none focus:outline-none min-h-[200px] p-4",
          dir: "auto",
        },
      },
    });

    useImperativeHandle(ref, () => editor?.view.dom as HTMLDivElement);

    const setLink = useCallback(() => {
      if (!editor) return;
      const url = window.prompt("URL:");
      if (url) {
        editor.chain().focus().setLink({ href: url }).run();
      }
    }, [editor]);

    if (!editor) return null;

    const ToolbarButton = ({
      onClick,
      active,
      children,
      title,
    }: {
      onClick: () => void;
      active?: boolean;
      children: React.ReactNode;
      title: string;
    }) => (
      <button
        type="button"
        onClick={onClick}
        title={title}
        className={`rounded p-2 transition-colors hover:bg-light-800 dark:hover:bg-dark-400 ${
          active ? "bg-light-800 text-primary-500 dark:bg-dark-400" : ""
        }`}
      >
        {children}
      </button>
    );

    return (
      <div
        className={`background-light900_dark300 light-border-2 text-dark300_light700 rounded-md border ${className}`}
      >
        <style>{`
          .ProseMirror h1 {
            font-size: 2em;
            font-weight: bold;
            margin: 0.67em 0;
          }
          .ProseMirror h2 {
            font-size: 1.5em;
            font-weight: bold;
            margin: 0.75em 0;
          }
          .ProseMirror ul,
          .ProseMirror ol {
            padding: 0 1.5rem;
            margin: 0.5rem 0;
          }
          .ProseMirror ul {
            list-style-type: disc;
          }
          .ProseMirror ol {
            list-style-type: decimal;
          }
          .ProseMirror li {
            margin: 0.25rem 0;
          }
          .ProseMirror code,
          .ProseMirror pre {
            direction: ltr;
            text-align: left;
            font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
          }
          .ProseMirror pre {
            background: #0F1117 !important;
            color: #DCE3F1 !important;
            padding: 1rem;
            border-radius: 0.5rem;
            border: 1px solid #212734;
            margin: 0.5rem 0;
          }
          .ProseMirror code {
            background: #F4F6F8 !important;
            color: #151821 !important;
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-size: 0.875em;
          }
          .dark .ProseMirror pre {
            background: #0F1117 !important;
            color: #DCE3F1 !important;
            border-color: #212734;
          }
          .dark .ProseMirror code {
            background: #212734 !important;
            color: #DCE3F1 !important;
          }
          .ProseMirror mark {
            background-color: #fef08a;
            padding: 0.125rem 0;
          }
          .dark .ProseMirror mark {
            background-color: #854d0e;
          }
        `}</style>
        <div className="flex flex-wrap gap-1 border-b border-light-400 p-2 dark:border-dark-400">
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            active={editor.isActive("heading", { level: 1 })}
            title="عنوان 1"
          >
            <Heading1 size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            active={editor.isActive("heading", { level: 2 })}
            title="عنوان 2"
          >
            <Heading2 size={18} />
          </ToolbarButton>

          <div className="mx-1 w-px bg-light-400 dark:bg-dark-400" />

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive("bold")}
            title="پررنگ"
          >
            <Bold size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive("italic")}
            title="کج"
          >
            <Italic size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive("underline")}
            title="زیرخط"
          >
            <UnderlineIcon size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            active={editor.isActive("highlight")}
            title="هایلایت"
          >
            <Highlighter size={18} />
          </ToolbarButton>

          <div className="mx-1 w-px bg-light-400 dark:bg-dark-400" />

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive("bulletList")}
            title="لیست"
          >
            <List size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive("orderedList")}
            title="لیست شماره‌دار"
          >
            <ListOrdered size={18} />
          </ToolbarButton>

          <div className="mx-1 w-px bg-light-400 dark:bg-dark-400" />

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            active={editor.isActive("code")}
            title="کد"
          >
            <Code size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            active={editor.isActive("codeBlock")}
            title="بلوک کد"
          >
            <Code size={18} strokeWidth={3} />
          </ToolbarButton>

          <ToolbarButton
            onClick={setLink}
            active={editor.isActive("link")}
            title="لینک"
          >
            <LinkIcon size={18} />
          </ToolbarButton>
        </div>

        <EditorContent editor={editor} />
      </div>
    );
  },
);

Editor.displayName = "Editor";
