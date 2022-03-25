import { PropsWithChildren } from "react";

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  value?: string;
  index?: number;
  users: 
    TodoType[]
  ;
};
