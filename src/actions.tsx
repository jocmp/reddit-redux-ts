import fetch from 'isomorphic-fetch'
import Json from './models/Json'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECIEVE_POSTS = 'RECIEVE_POSTS'

export const selectnumber = (subreddit: number) => {
    return {
        type: SELECT_SUBREDDIT, 
        subreddit
    }
}

export const invalidatenumber = (subreddit: number) => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
} 

export const fetchPosts = (subreddit: number) => {
    return (dispatch: any) {
        dispatch(requestPosts(subreddit))
    }
}

export const requestPosts = (subreddit: number) => {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export const recievePosts = (subreddit: number, response: Json) => {
    return {
        type: RECIEVE_POSTS,
        subreddit,
        posts: response.data.children.map(child => child.data),
        recievedAt: Date.now()
    }
}