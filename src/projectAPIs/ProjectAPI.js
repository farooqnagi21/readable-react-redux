const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token){
    console.log("called")
    token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}
export const getAll = () =>
    fetch(`${api}/posts`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
            'Authorization':token
        },
    }).then(resp => resp.json());

export const getCategories=()=>
    fetch(`${api}/categories`,{
        method:'GET',
        headers:{
            ...headers,
            'Content_Type':'application/json',
            'Authorization':token
        },
    }).then(resp=>resp.json());

export const vote=(id,option)=>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
            'Authorization':token
        },
        body: JSON.stringify({ option })
    }).then(resp=>resp.json());

export const addPost=(post)=>
    fetch(`${api}/posts`,{
        method: 'Post',
        headers:{
            ...headers,
            'Content-Type':'application/json',
            'Authorization':token
        },
        body: JSON.stringify({
            title: post.title,
            category: post.category,
            id: post.id,

            timestamp: post.timestamp,
            body: post.body,
            author: post.author,
            voteScore: post.voteScore,
            deleted: post.deleted})
    }).then(resp=>resp.json());

//
//
//
// export const get = (bookId) =>
//     fetch(`${api}/books/${bookId}`, { headers })
//         .then(res => res.json())
//         .then(data => data.book)
//
// export const update = (book, shelf) =>
//     fetch(`${api}/books/${book.id}`, {
//         method: 'PUT',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ shelf })
//     }).then(res => res.json())
//
// export const search = (query) =>
//     fetch(`${api}/search`, {
//         method: 'POST',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ query })
//     }).then(res => res.json())
//         .then(data => data.books)