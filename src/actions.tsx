import * as fetch from 'isomorphic-fetch'
import Json from './models/Json'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECIEVE_POSTS = 'RECIEVE_POSTS'

export const selectSubreddit = (subreddit: string) => {
    return {
        type: SELECT_SUBREDDIT, 
        subreddit
    }
}

export const invalidateSubreddit = (subreddit: string) => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
} 

export const fetchPosts = (subreddit: string) => {
    return (dispatch: any) => {
        dispatch(requestPosts(subreddit))

        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then((response: any) => response.json())
            .then((json: Json) => dispatch(recievePosts(subreddit, json)))
    }
}

export const requestPosts = (subreddit: string) => {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export const recievePosts = (subreddit: string, response: Json) => {
    return {
        type: RECIEVE_POSTS,
        subreddit,
        posts: response.data.children.map(child => child.data),
        recievedAt: Date.now()
    }
}