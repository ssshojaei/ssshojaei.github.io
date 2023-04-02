import { PostType } from './post'

export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string
}
