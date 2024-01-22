const initalState = [
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

const listReducer = (state = initalState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default listReducer