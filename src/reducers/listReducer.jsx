import { CONSTANTS } from "../actions"

let listId = 2
let cardId = 4

const initialState = [
    {
        title: "first try",
        id: 0,
        cards: [
            {
                id: 0,
                text: "this is the first task"
            },
            {
                id: 1,
                text: "second tsht sjakfds aldks task"
            },   
        ]
    },
    {
        title: "second one",
        id: 1,
        cards: [
            {
                id: 0,
                text: "this isdkf sdk f ksdk sadk yess"
            },
            {
                id: 1,
                text: "ssfjk skjf  ksd fskl aslfksd kjkf sksdfj sdkkdfj sdj jskdflks dfksdfj sdkf"
            },   
            {
                id: 2,
                text: "fdjkf sdk fkdf sdksd fsdlsad fsdllskdf klsdfsdj"
            }, 
            {
                id: 3,
                text: "fdjkf llskdf klsdfsdj"
            }, 
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listId
            }
            listId += 1
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardId
            }
            cardId += 1

           const newState = state.map((list) => {
                if(list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards : [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            })

            return newState
        default:
            return state
    }
}

export default listReducer
