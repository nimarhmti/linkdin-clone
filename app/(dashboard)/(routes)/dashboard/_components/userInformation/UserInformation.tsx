import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignIn, SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
//interfaces and types------------------------>
interface userInfoModel {
  firstName: string | undefined | null;
  lastName: string | undefined | null;
  profileImage: string | undefined | null;
}

//mainComponents------------------------------->
export default async function UserInformation() {
  const user = await currentUser();
  const userInfo: userInfoModel = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    profileImage: user?.imageUrl,
  };

  //conditional rendering--------------------->
  const ShowAvatar = () =>
    user?.id ? (
      <AvatarImage src={`${userInfo.profileImage}`} />
    ) : (
      <AvatarImage src="https://github.com/shadcn.png" />
    );
  /////

  //returned Components------------------------>
  return (
    <div className="flex items-center flex-col justify-center bg-white px-2 py-4 rounded-lg border">
      <Avatar>
        <ShowAvatar />
        <AvatarFallback>
          {userInfo.firstName?.charAt(0)}
          {userInfo.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <SignedIn>
        <div className="text-center">
          <p className="font-semibold">
            {userInfo.firstName} {user?.lastName}
          </p>
          <p className="text-xs">
            @{user?.firstName}
            {user?.lastName}
          </p>
        </div>
      </SignedIn>
      <hr className=" border-gray-200 w-full my-5" />
      <div className="flex justify-between w-full px-4 text-sm">
        <p className="font-semibold text-gray-400">Posts</p>
        <p className="text-blue-400">66</p>
      </div>

      <div className="flex justify-between w-full px-4 text-sm">
        <p className="font-semibold text-gray-400">Comments</p>
        <p className="text-blue-400">3</p>
      </div>
    </div>
  );
}
