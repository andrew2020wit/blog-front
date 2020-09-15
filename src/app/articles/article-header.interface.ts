export interface IArticleHeader {
  id: string;
  title: string;
  description: string;
  author: { id: string; fullName: string };
}
