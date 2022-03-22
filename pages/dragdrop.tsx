import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  
} from "react-beautiful-dnd";
import styled from "styled-components";

import { Button } from "../button/button";
import { CHARACTERS } from "../public/CHARACTERS";

export default function DragDrop() {
  // resetServerContext();
  const router = useRouter();
  const [characters, updateCharacters] = useState(CHARACTERS);
  const handleOnDragEnd = (result: any) => {
    console.log(result);
    console.log(characters);
    const items = [...characters];
    console.log(items);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  };
  return (
    <SDiv>
      <header>
        <SH1>ドラッグ&ドロップ</SH1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <SLi
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <div className="characters-thumb">
                            <Image
                              src={thumb}
                              alt={`${name} Thumb`}
                              width="200px"
                              height="200px"
                            />
                          </div>
                          <p>{name}</p>
                        </SLi>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      <Button
        inputColor="red"
        onClick={() => router.back()}
        margin="0 40px 40px"
      >
        戻る
      </Button>
    </SDiv>
  );
}

const SDiv = styled.div`
  background: #86bd5a;
`;

const SH1 = styled.h1`
  color: #396346;
  margin-top: 0;
  margin-bottom: 50px;
`;

const SLi = styled.li`
  list-style: none;
  padding-bottom: 30px;
`;
