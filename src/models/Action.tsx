import Post from './Post'

interface Action {
    subreddit: number 
    type: string
    posts: Post[]
    recievedAt: number
}

export default Action;

