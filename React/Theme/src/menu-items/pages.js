// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'employeePage',
            title: 'Employee Data',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'addEmp',
                    title: 'Add',
                    type: 'item',
                    url: '/pages/page/addEmp'
                },
                {
                    id: 'listEmp',
                    title: 'List',
                    type: 'item',
                    url: '/pages/page/employeePage'
                }
            ]
        }
    ]
};

export default pages;
