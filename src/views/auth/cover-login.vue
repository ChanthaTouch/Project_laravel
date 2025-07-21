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
                <div class="w-full min-h-[450px] max-w-[450px] mx-auto bg-white/90 dark:bg-black/70 rounded-xl shadow p-5">
                    <div class="mb-8 text-center">
                        <h1 class=" text-lg font-extrabold uppercase !leading-snug text-primary md:text-3xl"> Welcome to Futura System</h1>
                        <p class="text-sm font-bold leading-normal text-white-dark">Enter your username and password to login</p>
                    </div>
                    <form class="space-y-4 dark:text-white" @submit.prevent="handleSubmit">
                        <div v-if="error" class="text-red-500 text-xs mb-2 text-center">{{ error }}</div>
                        <div>
                            <label for="Username" class="block mb-1 text-sm font-semibold">Username</label>
                            <div class="relative text-white-dark">
                                <input id="Username" v-model="formData.username" type="text" placeholder="Enter Username" class="form-input ps-10 placeholder:text-white-dark text-sm py-2" />
                                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                    <icon-mail :fill="true" />
                                </span>
                            </div>
                        </div>
                        <div>
                            <label for="Password" class="block mb-1 text-sm font-semibold">Password</label>
                            <div class="relative text-white-dark">
                                <input id="Password" v-model="formData.password" type="password" placeholder="Enter Password" class="form-input ps-10 placeholder:text-white-dark text-sm py-2" />
                                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                    <icon-lock-dots :fill="true" />
                                </span>
                            </div>
                        </div>
                        <button type="submit" :disabled="loading" class="btn btn-gradient !mt-4 w-full border-0 uppercase font-bold shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] text-sm py-2">
                            <span v-if="loading">Signing in...</span>
                            <span v-else>Sign In</span>
                        </button>
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { API_BASE_URL } from '@/config/api';
import { login } from '@/services/coverLogin';
import { computed, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import appSetting from '@/app-setting';
import { useAppStore } from '@/stores/index';
import { useRouter } from 'vue-router';
import { useMeta } from '@/composables/use-meta';
import { useUserStore } from '@/stores/user';
import IconMail from '@/components/icon/icon-mail.vue';
import IconLockDots from '@/components/icon/icon-lock-dots.vue';
import IconInstagram from '@/components/icon/icon-instagram.vue';
import IconFacebookCircle from '@/components/icon/icon-facebook-circle.vue';
import IconTwitter from '@/components/icon/icon-twitter.vue';
import IconGoogle from '@/components/icon/icon-google.vue';

useMeta({ title: 'Login Cover' });
const router = useRouter();
const store = useAppStore();
const userStore = useUserStore();
// multi language
const i18n = reactive(useI18n());
const changeLanguage = (item: any) => {
    i18n.locale = item.code;
    appSetting.toggleLanguage(item);
};
const currentFlag = computed(() => {
    return `/assets/images/flags/${i18n.locale.toUpperCase()}.svg`;
});

const formData = reactive({
    username: '',
    password: ''
});
const error = ref('');
const loading = ref(false);

const handleSubmit = async () => {
    error.value = '';
    loading.value = true;
    try {
        const response = await login(formData);
        if (response.data.access_token) {
            userStore.setUser(response.data);
            router.push('/');
        } else {
            error.value = 'Invalid username or password.';
        }
    } catch (e) {
        error.value = 'Login failed. Please try again.';
    } finally {
        loading.value = false;
    }
};
</script>