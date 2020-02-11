import {INC_VOTE, DEC_VOTE, ADD_DATA, ADD_POST} from "../actions"

//const  initialCount= 0
const initialState={
    post:[]
}


function vote(state=initialState,action)
{
    const{post}=action

    switch (action.type) {
        case INC_VOTE:
            //console.log(post)
            return{
             ...state,
                [post]:post.voteScore+=1

            }
        case DEC_VOTE:{
            return {
                ...state,
                [post]:post.voteScore-=1
            }
        }
        case ADD_DATA:
            //console.log(action.post)
            return{
                ...state,
                post:post
            }

        case ADD_POST:

            console.log(state.post)
            return {
                ...state,
                post:[...state.post,post]

            }

           // console.log(this.state.post)

        default:
            return state
    }
}

export default vote