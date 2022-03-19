import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <SDiv>
      <SH1>Homeです</SH1>
      <Link href="/page1">
        <a>Page1</a>
      </Link>
      <br />
      <Link href="/page2">
        <a>Page2</a>
      </Link>
      <style jsx>
        {`
          a {
              display: block,
              marginTop: 20px,
              marginLeft: 20px,
              paddingBottom: 20px,
              color: yellow,
              fontSize: 20px,
              textDecoration: none,
            }
            `}
      </style>
    </SDiv>
  );
};

const SH1 = styled.h1`
  margin: 0;
  color: blue;
`;

const SDiv = styled.div`
  background: #77c49a;
  margin: 0;
  height: auto;
`;
