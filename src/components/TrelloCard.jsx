// TrelloCard.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='bg-white rounded-lg p-1 mb-2'>{text}</div>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
