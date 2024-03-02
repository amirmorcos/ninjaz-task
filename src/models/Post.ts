import { Owner } from "./Owner";

export interface Post {
  id: string;
  image: string;
  likes: number;
  tags: Array<string>;
  text: string;
  publishDate: string;
  updatedDate?: string;
  owner: Owner;
}
