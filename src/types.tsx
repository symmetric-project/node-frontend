export type Post = {
  id: string | null;
  title: string;
  link: string | null;
  deltaOps: string | null;
  nodeName: string;
  slug: string;
};

export type Node = {
  id: string | null;
  name: string;
  description: string | null;
  imageId: string | null;
};

export type User = {
  name: string;
  bases: number;
};
