import { combineReducers } from 'redux'
import { SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECIEVE_POSTS } from '../actions'
import Action from '../models/Action'

const selectedSubreddit = (state: any = "reactjs", action: Action) => {
    switch(action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

const initialPostsState = {
    isFetching: false,
    didValidate: false,
    items: []
}

const posts = (state: any = initialPostsState, action: Action) => {
    switch(action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didValidate: false,
                items: action.posts,
            })
        case RECIEVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.recievedAt
            })
        default:
            return state
    }
}

const postsBySubreddit = (state: any = {}, action: Action) => {
    switch(action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECIEVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
})

export default rootReducer