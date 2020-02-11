export const INC_VOTE="INCREMENT_VOTE"
export const DEC_VOTE="DECREMENT_VOTE"
export const ADD_DATA="ADD_DATA"
export const ADD_POST="ADD_POST"

export const incVote=(post)=>({
    type:INC_VOTE,
    post
})

export const decVote=(post)=>({
    type:DEC_VOTE,
    post
})

export const addData=(post)=>({
    type:ADD_DATA,
    post
})

export const addPost=(post)=>({
    type:ADD_POST,
    post
})

