<template>
    <div>
        <div
            class="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-2 py-6 dark:bg-[#060818] sm:px-4"
        >
            <!-- Decorative Images -->
            <img src="/assets/images/auth/coming-soon-object1.png" alt="image" class="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
            <img src="/assets/images/auth/coming-soon-object2.png" alt="image" class="absolute left-24 top-0 h-40 md:left-[30%]" />
            <img src="/assets/images/auth/coming-soon-object3.png" alt="image" class="absolute right-0 top-0 h-[300px]" />
            <img src="/assets/images/auth/polygon-object.svg" alt="image" class="absolute bottom-0 end-[28%]" />

            
                <div class="relative flex w-full flex-col items-center justify-center gap-6 px-2 pb-10 pt-6 sm:px-4">
                    <div class="w-full max-w-[450px] mx-auto bg-white/90 dark:bg-black/70 rounded-xl shadow p-5">
                        <div class="mb-8 text-center">
                            <h1 class="text-2xl font-extrabold uppercase !leading-snug text-primary md:text-3xl">Sign Up</h1>
                            <p class="text-sm font-bold leading-normal text-white-dark">Enter your email and password to register</p>
                        </div>
                        <form class="space-y-4 dark:text-white" @submit.prevent="onSubmit">
                            <div v-if="error" class="text-red-500 text-xs mb-2 text-center">{{ error }}</div>
                            <div>
                                <label for="Name" class="block mb-1 text-sm font-semibold">Name</label>
                                <div class="relative text-white-dark">
                                    <input id="Name" v-model="form.name" type="text" placeholder="Enter Name" class="form-input ps-10 placeholder:text-white-dark text-sm py-2" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <icon-user :fill="true" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label for="Email" class="block mb-1 text-sm font-semibold">Email</label>
                                <div class="relative text-white-dark">
                                    <input id="Email" v-model="form.email" type="email" placeholder="Enter Email" class="form-input ps-10 placeholder:text-white-dark text-sm py-2" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <icon-mail :fill="true" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label for="Password" class="block mb-1 text-sm font-semibold">Password</label>
                                <div class="relative text-white-dark">
                                    <input id="Password" v-model="form.password" type="password" placeholder="Enter Password" class="form-input ps-10 placeholder:text-white-dark text-sm py-2" />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <icon-lock-dots :fill="true" />
                                    </span>
                                </div>
                            </div>
                            <button type="submit" :disabled="loading" class="btn btn-gradient !mt-4 w-full border-0 uppercase font-bold shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] text-sm py-2">
                                <span v-if="loading">Registering...</span>
                                <span v-else>Sign Up</span>
                            </button>
                        </form>                    
                    </div>
                </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import appSetting from '@/app-setting';
import { useAppStore } from '@/stores/index';
import { useRouter } from 'vue-router';
import { useMeta } from '@/composables/use-meta';

// import Popper from '@/components/popper.vue';
import IconCaretDown from '@/components/icon/icon-caret-down.vue';
import IconUser from '@/components/icon/icon-user.vue';
import IconMail from '@/components/icon/icon-mail.vue';
import IconLockDots from '@/components/icon/icon-lock-dots.vue';
import IconInstagram from '@/components/icon/icon-instagram.vue';
import IconFacebookCircle from '@/components/icon/icon-facebook-circle.vue';
import IconTwitter from '@/components/icon/icon-twitter.vue';
import IconGoogle from '@/components/icon/icon-google.vue';

useMeta({ title: 'Register Cover' });
const router = useRouter();
const store = useAppStore();
// multi language
const i18n = reactive(useI18n());
const changeLanguage = (item: any) => {
    i18n.locale = item.code;
    appSetting.toggleLanguage(item);
};
const currentFlag = computed(() => {
    return `/assets/images/flags/${i18n.locale.toUpperCase()}.svg`;
});

// Register form logic
const form = reactive({
    name: '',
    email: '',
    password: '',
    newsletter: false,
});
const error = ref('');
const loading = ref(false);

function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const onSubmit = async () => {
    error.value = '';
    if (!form.name || !form.email || !form.password) {
        error.value = 'All fields are required.';
        return;
    }
    if (!validateEmail(form.email)) {
        error.value = 'Please enter a valid email address.';
        return;
    }
    if (form.password.length < 6) {
        error.value = 'Password must be at least 6 characters.';
        return;
    }
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        router.push('/auth/cover-login');
    }, 1200);
};
</script>