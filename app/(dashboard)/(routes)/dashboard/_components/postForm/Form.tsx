"use client";
import { createPostAction } from "@/Actions/createPostAction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Divide, ImageIcon, XIcon } from "lucide-react";

import React, { ChangeEvent, useRef, useState } from "react";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { user } = useUser();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePostAction = async (formData: FormData) => {
    const formDataCopy = formData;
    ref.current?.reset();
    const text = formData.get("postInput") as String;
    if (!text.trim()) throw new Error("you must provide a post");
    try {
      // createPostAVtion()
    } catch (error) {
      console.log("error message", error);
    }
  };
  return (
    <div className="bg-white p-2 rounded-lg">
      <form ref={ref} action={createPostAction} className="space-y-3">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <input
            type="text"
            name="postInput"
            placeholder="start writing a post"
            className="flex-1 rounded-full outline-none py-4 px-4 border object-cover"
          />
          <input
            ref={inputFileRef}
            type="file"
            accept="image/*"
            name="image"
            hidden
            onChange={onChangeHandler}
          />
          {/* <button type="submit" hidden>
            Post
          </button> */}
        </div>
        {/* image preview */}
        {preview && (
          <div>
            <img src={preview} className="w-full rounded-lg" />
          </div>
        )}
        <div className="flex items-center justify-end space-x-2">
          <Button type="button" onClick={() => inputFileRef.current?.click()}>
            <ImageIcon className="mr-1" color="currentColor" />
            {preview ? "Change" : "Add"} Image
          </Button>
          {preview && (
            <Button
              type="button"
              variant="secondary"
              onClick={() => setPreview(null)}
            >
              <XIcon color="currentColor" className="mr-1" />
              Remove Image
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
