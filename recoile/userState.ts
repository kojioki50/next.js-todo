import { atom } from "recoil";

export const UserState = atom<string[]>({
  key: "USER_STATE",
  default: [],
});
