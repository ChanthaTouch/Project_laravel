<template>
    <div :class="{ 'dark text-white-dark': store.semidark }">
        <nav class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300">
            <div class="bg-white dark:bg-[#0e1726] h-full">
                <div class="flex justify-between items-center px-4 py-3">
                    <router-link to="/" class="main-logo flex items-center shrink-0">
                        <img class="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="" />
                        <span class="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">VRISTO</span>
                    </router-link>
                    <a
                        href="javascript:;"
                        class="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180 hover:text-primary"
                        @click="store.toggleSidebar()"
                    >
                        <icon-carets-down class="m-auto rotate-90" />
                    </a>
                </div>
                <perfect-scrollbar
                    :options="{
                        swipeEasing: true,
                        wheelPropagation: false,
                    }"
                    class="h-[calc(100vh-80px)] relative"
                >
                    <ul class="relative font-semibold space-y-0.5 p-4 py-0">
                        <li class="menu nav-item">
                            <button
                                type="button"
                                class="nav-link group w-full"
                                :class="{ active: activeDropdown === 'dashboard' }"
                                @click="activeDropdown === 'dashboard' ? (activeDropdown = null) : (activeDropdown = 'dashboard')"
                            >
                                <div class="flex items-center">
                                    <icon-menu-dashboard class="group-hover:!text-primary shrink-0" />
                                    <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                        {{ $t('dashboard') }}
                                    </span>
                                </div>
                                <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'dashboard' }">
                                    <icon-caret-down />
                                </div>
                            </button>
                            <vue-collapsible :isOpen="activeDropdown === 'dashboard'">
                                <ul class="sub-menu text-gray-500">
                                    <li>
                                        <router-link to="/" @click="toggleMobileMenu">{{ $t('sales') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/analytics" @click="toggleMobileMenu">{{ $t('analytics') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/finance" @click="toggleMobileMenu">{{ $t('finance') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/crypto" @click="toggleMobileMenu">{{ $t('crypto') }}</router-link>
                                    </li>
                                </ul>
                            </vue-collapsible>
                        </li>

                        <!-- <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <icon-minus class="w-4 h-5 flex-none hidden" />
                            <span>{{ $t('apps') }}</span>
                        </h2>

                        <li class="nav-item">
                            <ul>
                                <li class="nav-item">
                                    <router-link to="/apps/chat" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-chat class="group-hover:!text-primary shrink-0" />

                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('chat')
                                            }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/apps/mailbox" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-mailbox class="group-hover:!text-primary shrink-0" />

                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('mailbox')
                                            }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/apps/todolist" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-todo class="group-hover:!text-primary shrink-0" />

                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('todo_list')
                                            }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/apps/notes" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-notes class="group-hover:!text-primary shrink-0" />

                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('notes')
                                            }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/apps/scrumboard" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-scrumboard class="group-hover:!text-primary shrink-0" />

                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('scrumboard')
                                            }}</span>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/apps/contacts" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-contacts class="group-hover:!text-primary shrink-0" />

                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('contacts')
                                            }}</span>
                                        </div>
                                    </router-link>
                                </li>

                                <li class="menu nav-item">
                                    <button
                                        type="button"
                                        class="nav-link group w-full"
                                        :class="{ active: activeDropdown === 'invoice' }"
                                        @click="activeDropdown === 'invoice' ? (activeDropdown = null) : (activeDropdown = 'invoice')"
                                    >
                                        <div class="flex items-center">
                                            <icon-menu-invoice class="group-hover:!text-primary shrink-0" />

                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('invoice')
                                            }}</span>
                                        </div>
                                        <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'invoice' }">
                                            <icon-caret-down />
                                        </div>
                                    </button>
                                    <vue-collapsible :isOpen="activeDropdown === 'invoice'">
                                        <ul class="sub-menu text-gray-500">
                                            <li>
                                                <router-link to="/apps/invoice/list" @click="toggleMobileMenu">{{ $t('list') }}</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/apps/invoice/preview" @click="toggleMobileMenu">{{ $t('preview') }}</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/apps/invoice/add" @click="toggleMobileMenu">{{ $t('add') }}</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/apps/invoice/edit" @click="toggleMobileMenu">{{ $t('edit') }}</router-link>
                                            </li>
                                        </ul>
                                    </vue-collapsible>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/apps/calendar" class="group" @click="toggleMobileMenu">
                                        <div class="flex items-center">
                                            <icon-menu-calendar class="group-hover:!text-primary shrink-0" />

                                            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('calendar')
                                            }}</span>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </li> -->

                        <!-- <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <icon-minus class="w-4 h-5 flex-none hidden" />
                            <span>{{ $t('hris') }}</span>
                        </h2>

                        <li class="menu nav-item">
                            <button
                                type="button"
                                class="nav-link group w-full"
                                :class="{ active: activeDropdown === 'hris' }"
                                @click="activeDropdown === 'hris' ? (activeDropdown = null) : (activeDropdown = 'hris')"
                            >
                                <div class="flex items-center">
                                    <icon-menu-users class="group-hover:!text-primary shrink-0" />
                                    <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                        {{ $t('hris') }}
                                    </span>
                                </div>
                                <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'hris' }">
                                    <icon-caret-down />
                                </div>
                            </button>
                            <vue-collapsible :isOpen="activeDropdown === 'hris'">
                                <ul class="sub-menu text-gray-500">
                                    <li>
                                        <router-link to="/hris/employee-information" @click="toggleMobileMenu">{{ $t('employee_information') }}</router-link>
                                    </li>
                                </ul>
                            </vue-collapsible>
                            </li> -->
    <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
        <icon-minus class="w-4 h-5 flex-none hidden" />
        <span>{{ $t('sysadmin') }}</span>
    </h2>

  <li class="menu nav-item">
    <button
        type="button"
        class="nav-link group w-full"
        :class="{ active: activeDropdown === 'sysadmin' }"
        @click="activeDropdown === 'sysadmin' ? (activeDropdown = null) : (activeDropdown = 'sysadmin')"
    >
        <div class="flex items-center">
            <icon-settings class="group-hover:!text-primary shrink-0" />
            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                {{ $t('sysadmin') }}
            </span>
        </div>
        <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'sysadmin' }">
            <icon-caret-down />
        </div>
    </button>
    <vue-collapsible :isOpen="activeDropdown === 'sysadmin'">
        <ul class="sub-menu text-gray-500">
            <li>
                <router-link to="sysadmin/admin-staff" @click="toggleMobileMenu">{{ $t('admin') }}</router-link>
            </li>
            <li>
                <router-link to="/sysadmin/manage-user" @click="toggleMobileMenu">{{ $t('manage_user') }}</router-link>
            </li>
        </ul>
    </vue-collapsible>
</li>

<li class="menu nav-item">
    <button
        type="button"
        class="nav-link group w-full"
        :class="{ active: activeDropdown === 'HRMIS' }"
        @click="activeDropdown === 'HRMIS' ? (activeDropdown = null) : (activeDropdown = 'HRMIS')"
    >
        <div class="flex items-center">
             <icon-menu-users class="group-hover:!text-primary shrink-0" />
            <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                {{ $t('HRMIS') }}
            </span>
        </div>
        <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'HRMIS' }">
            <icon-caret-down />
        </div>
    </button>
    <vue-collapsible :isOpen="activeDropdown === 'HRMIS'">
        <ul class="sub-menu text-gray-500">
            <li>
                <router-link to="/HRMIS/timesheet" @click="toggleMobileMenu">{{ $t('Staff TimeSheet') }}</router-link>
            </li>
            <li>
                <router-link to="/HRMIS/manage-staff" @click="toggleMobileMenu">{{$t('Staff Profile')}}</router-link>
            </li>
            <li>
                <router-link to="/HRMIS/leave-staff" @click="toggleMobileMenu">{{ $t('Staff Leave')}}</router-link>
            </li>
            <li>
                <router-link to="/HRMIS/attendat-staff" @click="toggleMobileMenu">{{$t('Staff Attendance')}}</router-link>
            </li>
            <li>
                <router-link to="/HRMIS/recruitment-request" @click="toggleMobileMenu">{{ $t('Staff Recruitment Request') }}</router-link>
            </li>
            <li>
                <router-link to="/HRMIS/adjustment-rateing" @click="toggleMobileMenu">{{$t('Rate Adjustment Staff')}}</router-link>
            </li>
            <li>
                <router-link to="/HRMIS/project-report" @click="toggleMobileMenu">{{ $t('HRMIS Report')}}</router-link>
            </li>
            
        </ul>
    </vue-collapsible>
   
</li>
<li class="menu nav-item">
    <button 
        type="button"
        class="nav-link group w-full"
        :class="{active: activeDropdown === 'Customer'}"
        @click="activeDropdown === 'Customer' ? (activeDropdown = null) : (activeDropdown = 'Customer')"
    >
    <div class=" flex items-center">
        <icon-menu-users class="group-hover:!text-primary shrink-0" />
        <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
            {{ $t('Customer') }}
        </span>
    </div>
        <div :class="{'rtl:rotate-90 -rotate-90': activeDropdown !== 'Customer'}">
            <icon-caret-down/>
        </div>
    </button>
    <vue-collapsible :isOpen="activeDropdown === 'Customer'">
            <ul class="sub-menu text-gray-500">
                <li>
                    <router-link to="/Customer/project-client" @click="toggleMobileMenu">{{ $t('Project Client')}}</router-link>
                </li>
                <li>
                    <router-link to="/Customer/project-list" @click="toggleMobileMenu">{{ $t('Project List')}}</router-link>
                </li>
            </ul>
        </vue-collapsible>
</li>
                        <!-- <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <icon-minus class="w-4 h-5 flex-none hidden" />
                            <span>{{ $t('user_interface') }}</span>
                        </h2>

                        <li class="menu nav-item">
                            <button
                                type="button"
                                class="nav-link group w-full"
                                :class="{ active: activeDropdown === 'components' }"
                                @click="activeDropdown === 'components' ? (activeDropdown = null) : (activeDropdown = 'components')"
                            >
                                <div class="flex items-center">
                                    <icon-menu-components class="group-hover:!text-primary shrink-0" />

                                    <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                        $t('components')
                                    }}</span>
                                </div>
                                <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'components' }">
                                    <icon-caret-down />
                                </div>
                            </button>
                            <vue-collapsible :isOpen="activeDropdown === 'components'">
                                <ul class="sub-menu text-gray-500">
                                    <li>
                                        <router-link to="/components/tabs" @click="toggleMobileMenu">{{ $t('tabs') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/accordions" @click="toggleMobileMenu">{{ $t('accordions') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/modals" @click="toggleMobileMenu">{{ $t('modals') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/cards" @click="toggleMobileMenu">{{ $t('cards') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/carousel" @click="toggleMobileMenu">{{ $t('carousel') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/countdown" @click="toggleMobileMenu">{{ $t('countdown') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/counter" @click="toggleMobileMenu">{{ $t('counter') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/sweetalert" @click="toggleMobileMenu">{{ $t('sweet_alerts') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/timeline" @click="toggleMobileMenu">{{ $t('timeline') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/notifications" @click="toggleMobileMenu">{{ $t('notifications') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/media-object" @click="toggleMobileMenu">{{ $t('media_object') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/list-group" @click="toggleMobileMenu">{{ $t('list_group') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/pricing-table" @click="toggleMobileMenu">{{ $t('pricing_tables') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/components/lightbox" @click="toggleMobileMenu">{{ $t('lightbox') }}</router-link>
                                    </li>
                                </ul>
                            </vue-collapsible>
                        </li> -->         
                                  
<!-- <ul class="relative font-semibold space-y-0.5 p-4 py-0">

    <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
        <icon-minus class="w-4 h-5 flex-none hidden" />
        <span>{{ $t('auth') }}</span>
    </h2>
    <li class="menu nav-item">
        <button
            type="button"
            class="nav-link group w-full"
            :class="{ active: activeDropdown === 'auth' }"
            @click="activeDropdown === 'auth' ? (activeDropdown = null) : (activeDropdown = 'auth')"
        >
            <div class="flex items-center">
                <icon-menu-authentication class="group-hover:!text-primary shrink-0" />
                <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                    {{ $t('auth') }}
                </span>
            </div>
            <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'auth' }">
                <icon-caret-down />
            </div>
        </button>
        <vue-collapsible :isOpen="activeDropdown === 'auth'">
            <ul class="sub-menu text-gray-500">
                <li>
                    <router-link to="/auth/cover-login" @click="toggleMobileMenu">{{ $t('login') }}</router-link>
                </li>
                <li>
                    <router-link to="/auth/cover-register" @click="toggleMobileMenu">{{ $t('register') }}</router-link>
                </li>
                <li>
                    <router-link to="/auth/cover-forgot-password" @click="toggleMobileMenu">{{ $t('forgot_password') }}</router-link>
                </li>
            </ul>
        </vue-collapsible>
    </li>
</ul> -->

                    </ul>
                </perfect-scrollbar>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import iconMenuUsers from '../icon/menu/icon-menu-users.vue';{}
    import { useAppStore } from '@/stores/index';
    import VueCollapsible from 'vue-height-collapsible/vue3';

    import IconCaretsDown from '@/components/icon/icon-carets-down.vue';
    import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard.vue';
    import IconMinus from '@/components/icon/icon-minus.vue';
    import IconCaretDown from '@/components/icon/icon-caret-down.vue';
    // import IconMenuDatatables from '@/components/icon/menu/icon-menu-datatables.vue';
    // import IconMenuUsers from '@/components/icon/menu/icon-menu-users.vue';
    // import IconMenuPages from '@/components/icon/menu/icon-menu-pages.vue';
    // import IconMenuAuthentication from '@/components/icon/menu/icon-menu-authentication.vue';
    // import IconMenuDocumentation from '@/components/icon/menu/icon-menu-documentation.vue';
    import IconSettings from '@/components/icon/icon-settings.vue';

    const store = useAppStore();
    const activeDropdown: any = ref('');
    const subActive: any = ref('');

    onMounted(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 1024) {
            store.toggleSidebar();
        }
    };
</script>
