import { PropsWithChildren } from "react";

export type TodoArrayType = {
  // userId: number;
  // id: number;
  // title: string;
  // completed: boolean;
  // value?: string;
  // index?: number;
  todos: Array<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    value?: string;
    index?: number;
  }
>;

};
