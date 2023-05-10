export interface IPosts {
  userId: number
  body: string
  id: number
  title: string
}

export interface IComments {
  body: string
  email: string
  id: number
  postId: number
  name: string
}
