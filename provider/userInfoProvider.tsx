import React, { createContext, ReactNode, useState } from "react";



export const UserInfoContext = createContext(
  {} as {
    userInfo: Array<string>;
    setUserInfo: React.Dispatch<React.SetStateAction<Array<string>>>;
  }
);

export const UserInfoProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState<Array<string>>([]);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};
