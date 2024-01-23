// TrelloList.js
import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';

const TrelloList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className='bg-gray-400 rounded-md w-80 p-4 ml-4 h-fit'>
            <h3 className='text-center capitalize mb-3'>{title}</h3>
            {cards.map((card, index) => (
              <TrelloCard
                index={index}
                key={card.id}
                text={card.text}
                id={card.id}
              />
            ))}
            <TrelloActionButton listId={listId} />
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TrelloList;
