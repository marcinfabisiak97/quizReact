import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const RightColumn = ({ columnId, column, score, setScore, colorAlert, colBtnRight }) => {

  return (
    <div className="rightColumn">
      <h2>{column.name}</h2>
      <Droppable droppableId={columnId} >
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="rightColumn__dropable"
            >
              {column.items.map((item, index) => {
                return (

                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                  >
                    {(provided, snapshot) => {

                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={colBtnRight}
                          style={{

                            ...provided.draggableProps.style,

                          }}
                        >
                          {item.content}

                        </div>
                      );
                    }}
                  </Draggable>

                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};
export default RightColumn;
