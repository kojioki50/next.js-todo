/* eslint-disable no-nested-ternary */
import {
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast, ToastContainer, Zoom } from "react-toastify";
import styles from "../styles/Todo.module.css";
import { useRecoilState } from "recoil";
import { Button } from "../button/button";
import { useTodo } from "../hooks/hook1";
import { UserInfoContext } from "../provider/userInfoProvider";
import { UserState } from "../recoile/userState";
import { useRouter } from "next/router";

export default function Todo() {
  const [definiteTodos, setDefiniteTodos] = useRecoilState(UserState);
  const [indefiniteTodos, setindefiniteTodos] = useState<string[]>([]);
  const {userInfo, setUserInfo } = useContext(UserInfoContext);
    const router = useRouter();
  const [textInput, setTextInput] = useState<string>('');

  const { users, isLoading, fetch } = useTodo();
  

  useEffect(() => {
    fetch();
  }, [fetch]);

  const textChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTextInput(e.target.value);
  };

  const addData = () => {
    setUserInfo(users);
  }

  const addArea = () => {
    const newTextInput = [...indefiniteTodos, textInput];
    setindefiniteTodos(newTextInput);
    setTextInput("");
    toast("新しい議案が提出されました", {
      style: {
        background: "skyblue"
      },
    });
  };

  const deleteArea = (index: number) => {
    deleteList(index);
    toast("議案が否決されました。", {
      style: {
        background: "skyblue",
      },
    });
  };

  const completeArea = (index: number) => {
    deleteList(index);

    const defineteLine = [...definiteTodos, indefiniteTodos[index]];
    setDefiniteTodos(defineteLine);
    toast("議案が可決されました。", {
      style: {
        background: "skyblue",
      },
    });
  };

  const backArea = (index: number) => {
    const backLine = [...definiteTodos];
    backLine.splice(index, 1);
    setDefiniteTodos(backLine);
    const indefiniteLine = [...indefiniteTodos, definiteTodos[index]];
    setindefiniteTodos(indefiniteLine);
    toast("可決された議案が保留になりました。", {
      style: {
        background: "skyblue",
      },
    });
  };

  const deleteList = (index: number) => {
    const deleteLine = [...indefiniteTodos];
    deleteLine.splice(index, 1);
    setindefiniteTodos(deleteLine);
  };

  const filteredUsers = users.filter((user) => {
    return user.completed === false;
  });
  console.log(filteredUsers);

  return (
    <>
      <h1 className={styles.title}>議案投票箱</h1>
      <div className={styles.addarea}>
        <input
          className={styles.addtext}
          placeholder="投票してください"
          value={textInput}
          onChange={textChange}
        />
        <Button
          // className={styles.addbutton}
          padding="5px 15px"
          border-radius="9999px"
          cursor="pointer"
          onClick={addArea}
          disabled={textInput[0] === "" || textInput === ""}
        >
          追加
        </Button>
        <Button
          padding="5px 15px"
          border-radius="9999px"
          cursor="pointer"
          onClick={addData}
        >
          決定箱のデータ取得
        </Button>
        {/* <ToastContainer autoClose={1000} /> */}
      </div>
      <div className={styles.indefinitearea}>
        <div className={styles.box}>未決定箱</div>
        <div>
          {isLoading ? (
            <p className={styles.loading}>データ取得中</p>
          ) : users && users.length && filteredUsers.length ? (
            <ul>
              {filteredUsers.map((user, index) => {
                return (
                  <div key={index} className={styles.containerlist}>
                    <li className={styles.apidata}>{user.title}</li>
                  </div>
                );
              })}
            </ul>
          ) : (
            <p className={styles.loaded}>該当するデータはありません。</p>
          )}
        </div>
        <ul id="indefinite-list">
          {indefiniteTodos.map((value, index) => {
            return (
              <div key={index} className={styles.containerlist}>
                <li className={styles.eachlist}>{value}</li>
                <Button margin="10px 5px" onClick={() => completeArea(index)}>
                  決定
                </Button>
                {/* <ToastContainer autoClose={1000} /> */}
                <Button margin="10px 5px" onClick={() => deleteArea(index)}>
                  却下
                </Button>
                {/* <ToastContainer autoClose={1000} /> */}
              </div>
            );
          })}
        </ul>
      </div>
      <div className={styles.definitearea}>
        <div className={styles.box}>決定箱</div>
        <div>
          {isLoading ? (
            <p className={styles.loading}>データ取得中</p>
          ) : users ? (
            <ul>
              {userInfo
                .filter((user) => {
                  return user.completed === true;
                })
                .map((user, index) => {
                  return (
                    <div key={index} className={styles.containerlist}>
                      <li className={styles.apidata}>{user.title}</li>
                    </div>
                  );
                })}
            </ul>
          ) : (
            <p className="loaded">該当するデータはありません。</p>
          )}
        </div>
        <ul className={styles.indefinitelist}>
          {definiteTodos.map((value, index) => {
            return (
              <div key={index} className={styles.containerlist}>
                <li className={styles.eachlist}>{value}</li>
                <Button margin="10px 5px" onClick={() => backArea(index)}>
                  保留
                </Button>
                {/* <ToastContainer autoClose={1000} /> */}
              </div>
            );
          })}
        </ul>
      </div>
      <Button
        inputColor="purple"
        onClick={() => router.back()}
        margin="50px 50px 0"
      >
        戻る
      </Button>
    </>
  );
};
