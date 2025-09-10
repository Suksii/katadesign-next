"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Type,
  LinkIcon,
  Unlink,
} from "lucide-react";
import { useState } from "react";

const TextEditor = () => {
  const [fontSize, setFontSize] = useState("text-base");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      ListItem.configure({
        HTMLAttributes: {
          class: "my-custom-list-item",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline hover:text-blue-800",
        },
      }),
    ],
    content: "<span></span>",
    editorProps: {
      attributes: {
        class: `prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none min-h-[350px] ${fontSize}`,
      },
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  const saveContent = () => {
    if (editor) {
      console.log(editor.getJSON());
    }
  };

  const handleFontSizeChange = (newSize) => {
    setFontSize(newSize);
    const editorElement = editor.view.dom;
    const fontSizeClasses = [
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-2xl",
      "text-3xl",
      "text-4xl",
    ];
    fontSizeClasses.forEach((cls) => editorElement.classList.remove(cls));
    editorElement.classList.add(newSize);
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL:", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const fontSizeOptions = [
    { value: "text-sm", label: "Small (14px)" },
    { value: "text-base", label: "Base (16px)" },
    { value: "text-lg", label: "Large (18px)" },
    { value: "text-xl", label: "XL (20px)" },
    { value: "text-2xl", label: "2XL (24px)" },
    { value: "text-3xl", label: "3XL (30px)" },
    { value: "text-4xl", label: "4XL (36px)" },
  ];

  return (
    <div className="flex flex-col w-full mx-auto">
      <div className="w-full py-12">
        <div className="flex space-x-2 mb-4 flex-wrap gap-2">
          {/* Font Size Selector */}
          <div className="relative">
            <button className="p-2 border rounded hover:bg-gray-100 flex items-center">
              <Type className="w-4 h-4" />
            </button>
            <select
              value={fontSize}
              onChange={(e) => {
                const newSize = e.target.value;
                setFontSize(newSize);
                handleFontSizeChange(newSize);
              }}
              className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
            >
              {fontSizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bold */}
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 border rounded hover:bg-gray-100 cursor-pointer ${
              editor.isActive("bold") ? "bg-gray-300" : ""
            }`}
            title="Bold"
          >
            <Bold className="w-4 h-4" />
          </button>

          {/* Italic */}
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 border rounded hover:bg-gray-100 cursor-pointer ${
              editor.isActive("italic") ? "bg-gray-300" : ""
            }`}
            title="Italic"
          >
            <Italic className="w-4 h-4" />
          </button>

          {/* Underline */}
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 border rounded hover:bg-gray-100 cursor-pointer ${
              editor.isActive("underline") ? "bg-gray-300" : ""
            }`}
            title="Underline"
          >
            <UnderlineIcon className="w-4 h-4" />
          </button>

          {/* Bullet List */}
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 border rounded hover:bg-gray-100 cursor-pointer ${
              editor.isActive("bulletList") ? "bg-gray-300" : ""
            }`}
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </button>

          {/* Ordered List */}
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 border rounded hover:bg-gray-100 cursor-pointer ${
              editor.isActive("orderedList") ? "bg-gray-300" : ""
            }`}
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>

          {/* Add Link */}
          <button
            onClick={setLink}
            className={`p-2 border rounded hover:bg-gray-100 cursor-pointer ${
              editor.isActive("link") ? "bg-gray-300" : ""
            }`}
            title="Add Link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Editor */}
        <EditorContent
          editor={editor}
          className="border rounded p-4 min-h-[300px] bg-white"
        />

        {/* Save Button */}
        <button
          onClick={saveContent}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 active:scale-95 transition-all duration-300 ease-in-out font-semibold text-sm uppercase tracking-wider cursor-pointer border-0 focus:outline-none relative rounded overflow-hidden group
  "
        >
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded pointer-events-none"></span>

          <span className="relative z-10 flex items-center justify-center gap-2">
            Sačuvaj
          </span>
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
