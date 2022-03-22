export{}
// import axios from "axios";
// import { useCallback, useState } from "react";
// import { TodoType } from "../types/type1";

// export const useTodo = () => {
//   const [users, setUsers] = useState<TodoType[]>([]);
//   const [isLoading, setLoading] = useState(false);

//   const fetch = useCallback(async () => {
//     setLoading(true);
//     try {
//       const result = await axios.get<TodoType[]>(
//         "https://jsonplaceholder.typicode.com/todos"
//       );
//       // const data = [];
//       setUsers(result.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   return { users, isLoading, fetch };
// };

