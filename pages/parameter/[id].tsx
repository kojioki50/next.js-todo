import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "../../button/button";

export default function Parameter() {
  const router = useRouter();
  const { id,name } = router.query;
  return (
    <SDiv>
      <SH1>パラメーターページです</SH1>
      <SP>
        id:
        {id}
      </SP>
      <SP>
        name:
        {name}
      </SP>
      <br />
      <Button onClick={() => router.back()}>戻る</Button>
    </SDiv>
  );
};
const SDiv = styled.div`
  background: #52bedf;
`;

const SH1 = styled.h1`
  margin: 0;
  color: #237254;
`;

const SP = styled.p`
  color: #2f56c0;
  margin: 20px 20px 0;
`;
