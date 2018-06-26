import MainPage from 'components/MainPage';
import Blog from 'containers/BlogContainer';
import Comments from 'containers/CommentsContainer';
import UserList from 'containers/UserListContainer';

export default [
    {
        path: '/',
        exact: true,
        component: MainPage,
    },
    {
        path: '/articles',
        exact: true,
        component: Blog,
    },
    {
        path: '/comments',
        exact: true,
        component: Comments,
    },
    {
        path: '/users',
        exact: true,
        component: UserList,
    },
    {
        path: '/users/:id',
        exact: true,
        component: UserList,
    },
]