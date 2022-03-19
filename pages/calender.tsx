/* eslint-disable no-unused-vars */
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import styled from "styled-components";
import { Button } from "../button/button";
import { useRouter } from "next/router";

export default function Calender() {
  const router = useRouter()
  return (
    <SDiv>
      <SH1>カレンダーです</SH1>
      <DayPicker />
      <br />
      <Button onClick={() => router.back()}>戻る</Button>
    </SDiv>
  );
};

const SDiv = styled.div`
  background: #86bd5a;
  margin: 0;
`;

const SH1 = styled.h1`
  margin: 0;
  color: #396346;
`;
