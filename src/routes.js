import Demo from '@/routes/Demo'
export default [
    {path: '/', redirect: '/Demo1'},
    {path: '/vue-sass/', redirect: '/Demo1'},
    ...Demo,
    {path: '*', redirect: '/Demo1'}
]
