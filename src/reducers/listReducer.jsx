import { CONSTANTS } from '../actions';

let listId = 2;
let cardId = 6;

const initialState = [
  {
    title: 'first try',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'this is the first task',
      },
      {
        id: `card-${1}`,
        text: 'second tsht sjakfds aldks task',
      },
    ],
  },
  {
    title: 'second one',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'this isdkf sdk f ksdk sadk yess',
      },
      {
        id: `card-${3}`,
        text: 'ssfjk skjf  ksd fskl aslfksd kjkf sksdfj sdkkdfj sdj jskdflks dfksdfj sdkf',
      },
      {
        id: `card-${4}`,
        text: 'fdjkf sdk fkdf sdksd fsdlsad fsdllskdf klsdfsdj',
      },
      {
        id: `card-${5}`,
        text: 'fdjkf llskdf klsdfsdj',
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
            draggableId
        } = action.payload

        const newState = [...state]

        //in the same list
        if(droppableIdStart === droppableIdEnd) {
            const list = state.find(list => droppableIdStart === list.id)
            const card = list.cards.splice(droppableIndexStart, 1)
            list.cards.splice(droppableIndexEnd, 0, ...card)
        }

        return newState
    }

    default:
      return state;
  }
};

export default listReducer;
