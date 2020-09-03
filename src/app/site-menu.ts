export interface ILink {
  name: string;
  link: string;
}

export const menuList: ILink[] = [
  { name: 'Home', link: '/' },
  // { name: 'Login', link: '/login' },
  // { name: 'Register', link: '/new-user' },
  // { name: 'UserProfile', link: '/user-profile' },
  { name: 'UsersList(forAdmin)', link: '/admin/users-list' },
];
