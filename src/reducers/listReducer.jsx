import { CONSTANTS } from '../actions';

let listId = 2;
let cardId = 6;

const initialState = [
  {
    title: 'first',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'This is the first task',
      },
      {
        id: `card-${1}`,
        text: 'First of second',
      },
    ],
  },
  {
    title: 'second one',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'This second',
      },
      {
        id: `card-${3}`,
        text: 'Move this on as u wish',
      },
      {
        id: `card-${4}`,
        text: 'Try moving the whole list',
      },
      {
        id: `card-${5}`,
        text: 'Moving only the cards inside the list',
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`,
      };
      listId += 1;
      return [...state, newList];
    }

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardId}`,
      };
      cardId += 1;

      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED: {
        const {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        } = action.payload

        const newState = [...state]

        //drag lists around
        if(type === "list"){
          const list = newState.splice(droppableIndexStart, 1)
          newState.splice(droppableIndexEnd, 0, ...list)
          return newState
        }

        //in the same list
        if(droppableIdStart === droppableIdEnd) {
            const list = state.find(list => droppableIdStart === list.id)
            const card = list.cards.splice(droppableIndexStart, 1)
            list.cards.splice(droppableIndexEnd, 0, ...card)
        }

        //in other list
        if(droppableIdStart !== droppableIdEnd) {
            //find list where the drag happened
            const listStart = state.find(list => droppableIdStart === list.id)
            //pullout the card from this list
            const card = listStart.cards.splice(droppableIndexStart, 1)
            //find list where the draf end
            const listEnd = state.find(list => droppableIdEnd === list.id)
            //put the card in the list
            listEnd.cards.splice(droppableIndexEnd, 0, ...card)
        }

        return newState
    }

    default:
      return state;
  }
};

export default listReducer;
