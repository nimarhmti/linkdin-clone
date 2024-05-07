"use server";

import { currentUser } from "@clerk/nextjs/server";

export const createPostAction = async (formData: FormData) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("user not authentication");
  }
  const postInput = formData.get("postInput") as String;
  const image = formData.get("image") as File;
  let imageUrl: string | undefined;
  if (!postInput) throw new Error("post filed is required!");
};
