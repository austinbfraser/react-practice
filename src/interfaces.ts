export interface CommentData {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replies: ReplyData[]
}

export interface ReplyData extends Omit<CommentData, "replies"> {
  replyingTo: string
}

export interface User {
  image: {
    png: string
    webp: string
  }
  username: string
}

export interface DataJSON {
  currentUser: User
  comments: CommentData[]
}