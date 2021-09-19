export type Post = {
  id: string | null;
  title: string;
  link: string | null;
  delta: string | null;
};

export type Node = {
  id: string | null;
  name: string;
  description: string | null;
  imageId: string | null;
};

export type User = {
  name: string,
  bases: number,
}