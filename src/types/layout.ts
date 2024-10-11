import { PostType } from './post'

export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'title'> {
  type?: string
}
