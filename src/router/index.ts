import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';
import { useUserStore } from '@/stores/user';

import HomeView from '../views/index.vue';

const routes: RouteRecordRaw[] = [
    // dashboard
    { path: '/', name: 'home', component: HomeView },
    {
        path: '/analytics',
        name: 'analytics',
        component: () => import(/* webpackChunkName: "analytics" */ '../views/analytics.vue'),
    },
    {
        path: '/finance',
        name: 'finance',
        component: () => import(/* webpackChunkName: "finance" */ '../views/finance.vue'),
    },
    {
        path: '/crypto',
        name: 'crypto',
        component: () => import(/* webpackChunkName: "crypto" */ '../views/crypto.vue'),
    },

    // apps
    {
        path: '/apps/chat',
        name: 'chat',
        component: () => import(/* webpackChunkName: "apps-chat" */ '../views/apps/chat.vue'),
    },
    {
        path: '/apps/mailbox',
        name: 'mailbox',
        component: () => import(/* webpackChunkName: "apps-mailbox" */ '../views/apps/mailbox.vue'),
    },
    {
        path: '/apps/todolist',
        name: 'todolist',
        component: () => import(/* webpackChunkName: "apps-todolist" */ '../views/apps/todolist.vue'),
    },
    {
        path: '/apps/notes',
        name: 'notes',
        component: () => import(/* webpackChunkName: "apps-notes" */ '../views/apps/notes.vue'),
    },
    {
        path: '/apps/scrumboard',
        name: 'scrumboard',
        component: () => import(/* webpackChunkName: "apps-scrumboard" */ '../views/apps/scrumboard.vue'),
    },
    {
        path: '/apps/contacts',
        name: 'contacts',
        component: () => import(/* webpackChunkName: "apps-contacts" */ '../views/apps/contacts.vue'),
    },
    // invoice
    {
        path: '/apps/invoice/list',
        name: 'invoice-list',
        component: () => import(/* webpackChunkName: "apps-invoice-list" */ '../views/apps/invoice/list.vue'),
    },
    {
        path: '/apps/invoice/preview',
        name: 'invoice-preview',
        component: () => import(/* webpackChunkName: "apps-invoice-preview" */ '../views/apps/invoice/preview.vue'),
    },
    {
        path: '/apps/invoice/add',
        name: 'invoice-add',
        component: () => import(/* webpackChunkName: "apps-invoice-add" */ '../views/apps/invoice/add.vue'),
    },
    {
        path: '/apps/invoice/edit',
        name: 'invoice-edit',
        component: () => import(/* webpackChunkName: "apps-invoice-edit" */ '../views/apps/invoice/edit.vue'),
    },
    {
        path: '/apps/calendar',
        name: 'calendar',
        component: () => import(/* webpackChunkName: "apps-calendar" */ '../views/apps/calendar.vue'),
    },

    // components
    {
        path: '/components/tabs',
        name: 'tabs',
        component: () => import(/* webpackChunkName: "components-tabs" */ '../views/components/tabs.vue'),
    },
    {
        path: '/components/accordions',
        name: 'accordions',
        component: () => import(/* webpackChunkName: "components-accordions" */ '../views/components/accordions.vue'),
    },
    {
        path: '/components/modals',
        name: 'modals',
        component: () => import(/* webpackChunkName: "components-modals" */ '../views/components/modals.vue'),
    },
    {
        path: '/components/cards',
        name: 'cards',
        component: () => import(/* webpackChunkName: "components-cards" */ '../views/components/cards.vue'),
    },
    {
        path: '/components/carousel',
        name: 'carousel',
        component: () => import(/* webpackChunkName: "components-carousel" */ '../views/components/carousel.vue'),
    },
    {
        path: '/components/countdown',
        name: 'countdown',
        component: () => import(/* webpackChunkName: "components-countdown" */ '../views/components/countdown.vue'),
    },
    {
        path: '/components/counter',
        name: 'counter',
        component: () => import(/* webpackChunkName: "components-counter" */ '../views/components/counter.vue'),
    },
    {
        path: '/components/sweetalert',
        name: 'sweetalert',
        component: () => import(/* webpackChunkName: "components-sweetalert" */ '../views/components/sweetalert.vue'),
    },
    {
        path: '/components/timeline',
        name: 'timeline',
        component: () => import(/* webpackChunkName: "components-timeline" */ '../views/components/timeline.vue'),
    },
    {
        path: '/components/notifications',
        name: 'notifications',
        component: () => import(/* webpackChunkName: "components-notifications" */ '../views/components/notifications.vue'),
    },
    {
        path: '/components/media-object',
        name: 'media-object',
        component: () => import(/* webpackChunkName: "components-media-object" */ '../views/components/media-object.vue'),
    },
    {
        path: '/components/list-group',
        name: 'list-group',
        component: () => import(/* webpackChunkName: "components-list-group" */ '../views/components/list-group.vue'),
    },
    {
        path: '/components/pricing-table',
        name: 'pricing-table',
        component: () => import(/* webpackChunkName: "components-pricing-table" */ '../views/components/pricing-table.vue'),
    },
    {
        path: '/components/lightbox',
        name: 'lightbox',
        component: () => import(/* webpackChunkName: "components-lightbox" */ '../views/components/lightbox.vue'),
    },
    // authentication
    {
        path: '/auth/boxed-signin',
        name: 'boxed-signin',
        component: () => import(/* webpackChunkName: "auth-boxed-signin" */ '../views/auth/boxed-signin.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/boxed-signup',
        name: 'boxed-signup',
        component: () => import(/* webpackChunkName: "auth-boxed-signup" */ '../views/auth/boxed-signup.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/boxed-lockscreen',
        name: 'boxed-lockscreen',
        component: () => import(/* webpackChunkName: "auth-boxed-lockscreen" */ '../views/auth/boxed-lockscreen.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/boxed-password-reset',
        name: 'boxed-password-reset',
        component: () => import(/* webpackChunkName: "auth-boxed-password-reset" */ '../views/auth/boxed-password-reset.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/cover-login',
        name: 'cover-login',
        component: () => import(/* webpackChunkName: "auth-cover-login" */ '../views/auth/cover-login.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/cover-register',
        name: 'cover-register',
        component: () => import(/* webpackChunkName: "auth-cover-register" */ '../views/auth/cover-register.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/cover-lockscreen',
        name: 'cover-lockscreen',
        component: () => import(/* webpackChunkName: "auth-cover-lockscreen" */ '../views/auth/cover-lockscreen.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/cover-password-reset',
        name: 'cover-password-reset',
        component: () => import(/* webpackChunkName: "auth-cover-password-reset" */ '../views/auth/cover-password-reset.vue'),
        meta: { layout: 'auth' },
    },
   
    {
        path:'/customer',
        children: [
            {
                path:'project-client',
                name:'project-client',
                component: () => import(/* webpackChunkName: "project-client" */ '../views/customer/project-client/ClientProject.vue'),
                meta: { 
                    requiresAuth: true
                }
            },
            {
                path:'project-list',
                name:'project-list',
                component: () => import(/* webpackChunkName: "project-list" */ '../views/customer/project-list/projectList.vue'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },

    // hrmis routes
    {
        path: '/HRMIS',
        children: [
            {
                path: 'timesheet',
                name: 'timesheet',
                component: () => import(/* webpackChunkName: "timesheet" */ '../views/HRMIS/timesheet/TimesheetStaff.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'manage-staff',
                name: 'manage-staff',
                component: () => import(/* webpackChunkName: "-manage-staff" */ '../views/HRMIS/manage-staff/StaffList.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path:'leave-staff',
                name: 'leave-staff',
                component: () => import(/* webpackChunkName: "leave-staff" */ '../views/HRMIS/leave-staff/LeaveStaff.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                 path:'attendat-staff',
                 name:'attendat-staff',
                 component:()=>import( /* webpackChunkName: "attendat-staff" */ '../views/HRMIS/attendat-staff/staff-attendat.vue'),
                 meta:{
                    requiresAuth: true
                 }
            },
            {
                path:'recruitment-request',
                name:'recruitment-request',
                component:()=>import( /* webpackChunkName: "recruitment-request" */ '../views/HRMIS/recruitment-request/StaffRecruitment.vue'),
                meta:{
                    requiresAuth: true
                }
            },
            {
                path:'adjustment-rateing',
                name:'adjustment-rateing',
                component:()=>import(/* webpackChunkName: "adjustment-rateing" */ '../views/HRMIS/adjustment-rateing/AdjustmentStaff.vue'),
                meta:{
                    requiresAuth: true
                }
            },
             {
                path:'project-report',
                name:'project-report',
                component:()=>import(/* webpackChunkName: "management" */ '../views/HRMIS/project-report/projectReport.vue'),
                meta:{
                    requiresAuth: true
                }
                
            }
       
        ]
    },
    // sysadmin routes
    {
        path: '/SYSADMIN',
        children: [
            {
                path: 'manage-user',
                name: 'sysadmin-manage-user',
                component: () => import(/* webpackChunkName: "sysadmin-manage-user" */ '../views/SYSADMIN/manage-user/UserList.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'admin-staff',
                name: 'sysadmin-admin-staff',
                component: () => import(/* webpackChunkName: "sysadmin-admin-staff" */ '../views/SYSADMIN/admin-staff/SupperAdmin.vue'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

// Define public routes that don't require authentication
const publicRoutes = [
    '/auth/cover-login',
    '/auth/cover-register',
    '/auth/boxed-signin',
    '/auth/boxed-signup',
    '/auth/boxed-lockscreen',
    '/auth/boxed-password-reset',
    '/auth/cover-lockscreen',
    '/auth/cover-password-reset'
];

router.beforeEach((to, from, next) => {
    const store = useAppStore();
    const userStore = useUserStore();

    // Set layout based on route meta
    if (to?.meta?.layout === 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }

    // Check if route requires authentication
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !userStore.isLoggedIn) {
        // Redirect to login page if not authenticated
        next({ path: '/auth/cover-login' });
    } else {
        // Allow navigation
        next();
    }
});

router.afterEach((to, from) => {
    appSetting.changeAnimation();
});

export default router;