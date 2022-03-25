import React, { createContext, ReactNode, useState } from "react";
import { TodoType } from "../types/type1";

export const UserInfoContext = createContext(
  {} as {
    userInfo: TodoType[];
    setUserInfo: React.Dispatch<React.SetStateAction<TodoType[]>>;
  }
);

export const UserInfoProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState<TodoType[]>([]);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
