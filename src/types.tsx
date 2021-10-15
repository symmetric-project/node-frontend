export type Post = {
  id: string | null;
  title: string;
  link: string | null;
  rawState: string | null;
  nodeName: string;
  slug: string;
  creationTimestamp: number;
  author: User;
  thumbnailUrl: string;
  imageUrl: string;
  bases: number;
};

export type Node = {
  name: string;
  description: string | null;
  imageId: string | null;
};

export type User = {
  id: string;
  name: string;
  bases: number;
};

export type Comment = {
  id: string;
  postId: string;
  rawState: string;
  author: User;
  creationTimestamp: number;
};
