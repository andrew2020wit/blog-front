export interface ILink {
  name: string;
  link: string;
}

export const menuList: ILink[] = [
  { name: 'Home', link: '/' },
  { name: 'Our users', link: '/users-list' },
];
