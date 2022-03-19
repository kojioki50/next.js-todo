import styled from "styled-components";
import { Button } from "../button/button";
import { useRouter } from "next/router";

export default function Page2() {
  const router = useRouter();
  return (
    <SDiv>
      <SH1>Page2です</SH1>
      <SLink as="a" href="todo">
        <a>Todoアプリへ</a>
      </SLink>
      <br />
      <SLink as="a" href="parameter/1?name=bar">
        <a>UseParamへ</a>
      </SLink>
      <Button onClick={() => router.back()}>戻る</Button>
    </SDiv>
  );
};

const SDiv = styled.div`
  margin: 0;
  background: #77c49a;
`;

const SH1 = styled.h1`
  margin: 0;
  color: blue;
`;

const SLink = styled.a`
  color: yellow;
  text-decoration: none;
  padding: 0 20px;
  margin: 20px 0;
  cursor: pointer;
`;
