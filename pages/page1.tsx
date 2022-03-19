import styled from "styled-components";
import { Button } from "../button/button";
import { useRouter } from "next/router";

export default function Page1() {
  const router = useRouter();
  return (
    <SDiv>
      <SH1>Page1です</SH1>
      <SLink as="a" href="calender">
        <a>カレンダー</a>
      </SLink>
      <br />
      <SLink as="a" href="dragdrop">
        <a>Drag and Drop</a>
      </SLink>
      <Button inputColor="blue" onClick={() => router.back()}>
        戻る
      </Button>
    </SDiv>
  );
};

const SDiv = styled.div`
  background: #77c49a;
  margin: 0;
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
