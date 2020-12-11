
import Router from 'vue-router';

import mainTable from '../components/main-table';
import table2 from '../components/table2';



let router = new Router({
    routes: [
        {
            path: '/',
            name: 'mainTable',
            component: mainTable,
            props: true
        },
        {
            path: '/table2',
            name: 'table2',
            component: table2,
            props: true
        },
    ]
})

export default router;