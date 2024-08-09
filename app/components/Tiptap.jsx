"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import React, { useCallback, useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import slugify from 'react-slugify';

import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import CodeBlock from "@tiptap/extension-code-block";
import TextAlign from "@tiptap/extension-text-align";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import History from "@tiptap/extension-history";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

import parser from "html-react-parser";

const Tiptap = () => {
  const [height, setHeight] = React.useState(480);
  const [width, setWidth] = React.useState(640);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [titleImageUrl, setTitleImageUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [codes, setCodes] = useState("");
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      CodeBlock,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      BulletList,
      ListItem,
      History,
      Image,
      Dropcursor,
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
    ],
    content: `
          `,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      console.log(html);
      setDescription(html);
    },
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
  });

  const addPost = async (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      subTitle: subTitle,
      slug: slugify(slug),
      codes: description,
      pageUrl: pageUrl,
      titleImageUrl: titleImageUrl,
      videoUrl: videoUrl,
    };
    const add = await fetch("http://localhost:3000/api/topic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const content = await add.json();
    console.log("formData", formData);
    console.log("content added", content);
  };

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: Math.max(320, parseInt(width, 10)) || 640,
        height: Math.max(180, parseInt(height, 10)) || 480,
      });
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <>
      <div>
        {/* Other inputs */}
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-md m-2"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subtitle"
          className="input input-bordered w-full max-w-md m-2"
          onChange={(e) => setSubTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Page url"
          className="input input-bordered w-full max-w-md m-2"
          onChange={(e) => setPageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title image url"
          className="input input-bordered w-full max-w-md m-2"
          onChange={(e) => setTitleImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Slug"
          className="input input-bordered w-full max-w-md m-2"
          onChange={(e) => setSlug(e.target.value)}
        />
        <input
          type="text"
          placeholder="Video url"
          className="input input-bordered w-full max-w-md m-2"
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        {/* Tiptap section */}
        <div className="control-group">
          <div className="button-group flex ">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={`editor-btn font-black ${
                editor.isActive("heading", { level: 1 }) && "active-editor-btn"
              }`}
            >
              H1
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`editor-btn font-black ${
                editor.isActive("heading", { level: 2 }) && "active-editor-btn"
              }`}
            >
              H2
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={`editor-btn font-black ${
                editor.isActive("heading ", { level: 3 }) && "active-editor-btn"
              }`}
            >
              H3
            </button>

            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`editor-btn mx-5 font-black ${
                editor.isActive("codeBlock") && "active-editor-btn"
              }`}
            >
              Block
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className={`editor-btn ml-5 font-black ${
                editor.isActive("bold") && "active-editor-btn"
              }`}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              // className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
              className={`editor-btn ml-5 font-black ${
                editor.isActive({ textAlign: "left" }) && "active-editor-btn"
              }`}
            >
              Left
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              // className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
              className={`editor-btn ml-5 font-black ${
                editor.isActive({ textAlign: "center" }) && "active-editor-btn"
              }`}
            >
              Center
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              // className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
              className={`editor-btn ml-8 font-black ${
                editor.isActive({ textAlign: "right" }) && "active-editor-btn"
              }`}
            >
              Right
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              // className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
              className={`editor-btn ml-8 font-black ${
                editor.isActive({ textAlign: "justify" }) && "active-editor-btn"
              }`}
            >
              Justify
            </button>
            <button
              className="ml-8 font-black"
              onClick={() => editor.chain().focus().unsetTextAlign().run()}
            >
              Unset
            </button>
            <button
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().chain().focus().undo().run()}
              className={`ml-8 font-black editor-btn`}
            >
              Undo
            </button>
            <button
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().chain().focus().redo().run()}
              className={`ml-8 font-black editor-btn`}
            >
              Redo
            </button>
            <button className="ml-8 font-black" onClick={addImage}>
              Set image
            </button>
            <input
              id="width"
              type="number"
              min="320"
              max="1024"
              placeholder="width"
              className="ml-8 font-black"
              value={width}
              onChange={(event) => setWidth(event.target.value)}
            />
            <input
              id="height"
              type="number"
              min="180"
              max="720"
              placeholder="height"
              value={height}
              className="ml-4 font-black"
              onChange={(event) => setHeight(event.target.value)}
            />
            <button className=" font-black" id="add" onClick={addYoutubeVideo}>
              Add YouTube video
            </button>
          </div>
        </div>
      </div>
      <button className="btn" onClick={addPost}>
        Save now!
      </button>
      <div>{parser(description)}</div>
      <div className="border-solid border-4 border-gray-600">
        <EditorContent editor={editor} />
      </div>
      <br />
    </>
  );
};

export default Tiptap;
