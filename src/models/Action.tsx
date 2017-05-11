import Post from './Post'

interface Action {
    subreddit: string 
    type: string
    posts: Post[]
    recievedAt: number
}

export default Action;

