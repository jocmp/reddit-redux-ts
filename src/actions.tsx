import Subreddit from './models/Subreddit'
import Json from './models/Json'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECIEVE_POSTS = 'RECIEVE_POSTS'

export const selectSubreddit = (subreddit: Subreddit) => {
    return {
        type: SELECT_SUBREDDIT, 
        subreddit
    }
}

export const invalidateSubreddit = (subreddit: Subreddit) => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
} 

export const requestPosts = (subreddit: Subreddit) => {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export const recievePosts = (subreddit: Subreddit, response: Json) => {
    return {
        type: RECIEVE_POSTS,
        subreddit,
        posts: response.data.children.map(child => child.data),
        recievedAt: Date.now()
    }
}