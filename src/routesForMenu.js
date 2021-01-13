import DemoForMenu1 from '@/routes/DemoForMenu1'
import DemoForMenu2 from '@/routes/DemoForMenu2'
import DemoForMenu3 from '@/routes/DemoForMenu3'
import DemoForMenu4 from '@/routes/DemoForMenu4'
import DemoForMenu5 from '@/routes/DemoForMenu5'
export default [
    {
        index: '1',
        title: 'Demo1',
        icon: 'el-icon-ice-cream-round',
        children: [
            ...DemoForMenu1,
        ]
    },
    {
        index: '2',
        title: 'Demo2',
        icon: 'el-icon-lollipop',
        children: [
            ...DemoForMenu2,
        ]
    },

    {
        index: '3',
        title: 'Demo3',
        icon: 'el-icon-potato-strips',
        children: [
            ...DemoForMenu3,
        ]
    },

    {
        index: '4',
        title: 'Demo4',
        icon: 'el-icon-milk-tea',
        children: [
            ...DemoForMenu4,
        ]
    },

    {
        index: '5',
        title: 'Demo5',
        icon: 'el-icon-orange',
        children: [
            ...DemoForMenu5,
        ]
    },
]
