import React, { memo, MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  margin?: string;
  inputColor?: string;
  id?: string;
  padding?: string;
  cursor?: string
};

// eslint-disable-next-line react/display-name
export const Button = memo((props: Props) => {
  const { onClick, children, inputColor, margin, disabled, id, padding,cursor } = props;
  return (
    <SButton
      margin={margin}
      inputColor={inputColor}
      onClick={onClick}
      disabled={disabled}
      id={id}
      cursor={cursor}
      padding={padding}
    >
      {children}
    </SButton>
  );
});

const SButton = styled.button<Props>`
  border-radius: 9999px;
  cursor: pointer;
  color: ${(props) => props.inputColor || "palevioletred"};
  margin: ${(props) => props.margin || "20px 20px;"};
`;
