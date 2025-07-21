<template>
    <div>
        <div class="panel">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <div class="relative w-64 ltr:mr-4 rtl:ml-4">
                        <input 
                            type="text" 
                            class="form-input peer" 
                            :placeholder="$t('search_users')"
                            v-model="searchQuery"
                        />
                        <div class="absolute right-[11px] top-1/2 -translate-y-1/2">
                            <icon-search class="w-4.5 h-4.5" />
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-primary" @click="openAddModal">
                    <icon-plus class="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                    {{ $t('add_user') }}
                </button>
            </div>

            <!-- Tabs -->
            <div class="mb-4">
                <ul class="flex border-b border-white-light dark:border-[#191e3a]">
                    <li>
                        <a
                            href="javascript:;"
                            class="p-3.5 -mb-[1px] block border border-transparent hover:text-primary"
                            :class="{ 'text-primary border-b border-primary !border-white-light dark:!border-[#191e3a] dark:!border-b-primary': activeTab === 'active' }"
                            @click="activeTab = 'active'"
                        >
                            {{ $t('active_users') }}
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:;"
                            class="p-3.5 -mb-[1px] block border border-transparent hover:text-primary"
                            :class="{ 'text-primary border-b border-primary !border-white-light dark:!border-[#191e3a] dark:!border-b-primary': activeTab === 'inactive' }"
                            @click="activeTab = 'inactive'"
                        >
                            {{ $t('inactive_users') }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Active Users Table -->
            <div v-show="activeTab === 'active'" class="datatable">
                <div class="table-responsive">
                    <table class="table-hover">
                        <thead>
                            <tr>
                                <th>{{ $t('name') }}</th>
                                <th>{{ $t('username') }}</th>
                                <th>{{ $t('email') }}</th>
                                <th>{{ $t('phonenumber') }}</th>
                                <th>{{ $t('role') }}</th>
                                <th>{{ $t('status') }}</th>
                                <th class="!text-center">{{ $t('options') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in filteredUsers" :key="user.id">
                                <td>{{ user.name }}</td>
                                <td>{{ user.username }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.phoneNumber }}</td>
                                <td>
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="role in user.roles" :key="role.id" class="badge badge-outline-primary">
                                            {{ role.name }}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge" :class="user.status === 'active' ? 'badge-outline-success' : 'badge-outline-danger'">
                                        {{ user.status }}
                                    </span>
                                </td>
                                <td class="text-center">
                                    <div class="flex items-center justify-center gap-4">
                                        <button type="button" class="btn btn-sm btn-outline-primary" @click="editUser(user)">
                                            <icon-pencil class="w-4.5 h-4.5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Inactive Users Table -->
            <div v-show="activeTab === 'inactive'" class="datatable">
                <div class="table-responsive">
                    <table class="table-hover">
                        <thead>
                            <tr>
                                <th>{{ $t('name') }}</th>
                                <th>{{ $t('username') }}</th>
                                <th>{{ $t('email') }}</th>
                                <th>{{ $t('phonenumber') }}</th>
                                <th>{{ $t('role') }}</th>
                                <th>{{ $t('status') }}</th>
                                <th class="!text-center">{{ $t('options') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in filteredUsers" :key="user.id">
                                <td>{{ user.name }}</td>
                                <td>{{ user.username }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.phoneNumber }}</td>
                                <td>
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="role in user.roles" :key="role.id" class="badge badge-outline-primary">
                                            {{ role.name }}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge" :class="user.status === 'active' ? 'badge-outline-success' : 'badge-outline-danger'">
                                        {{ user.status }}
                                    </span>
                                </td>
                                <td class="text-center">
                                    <div class="flex items-center justify-center gap-4">
                                        <button type="button" class="btn btn-sm btn-outline-primary" @click="editUser(user)">
                                            <icon-pencil class="w-4.5 h-4.5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Add User Modal -->
            <TransitionRoot appear :show="showAddModal" as="template">
                <Dialog as="div" @close="closeAddModal" class="relative z-[51]">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                    </TransitionChild>

                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-start justify-center px-4 py-8">
                            <TransitionChild
                                as="template"
                                enter="duration-300 ease-out"
                                enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100"
                                leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95"
                            >
                                <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                        @click="closeAddModal"
                                    >
                                        <icon-x />
                                    </button>
                                    <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        {{ $t('add_user') }}
                                    </div>
                                    <div class="p-5">
                                        <form @submit.prevent="submitAddUser">
                                            <div class="mb-5">
                                                <label for="name">{{ $t('name') }}</label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    v-model="newUser.name"
                                                    class="form-input"
                                                    :placeholder="$t('enter_name')"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-5">
                                                <label for="username">{{ $t('username') }}</label>
                                                <input
                                                    id="username"
                                                    type="text"
                                                    v-model="newUser.username"
                                                    class="form-input"
                                                    :placeholder="$t('enter_username')"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-5">
                                                <label for="email">{{ $t('email') }}</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    v-model="newUser.email"
                                                    class="form-input"
                                                    :placeholder="$t('enter_email')"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-5">
                                                <label for="phonenumber">{{ $t('phonenumber') }}</label>
                                                <input
                                                    id="phonenumber"
                                                    type="phonenumber"
                                                    v-model="newUser.phoneNumber"
                                                    class="form-input"
                                                    :placeholder="$t('enter_phonenumber')"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-5">
                                                <label for="role">{{ $t('role') }}</label>
                                                <select id="role" v-model="newUser.roles" class="form-select" multiple required>
                                                    <option v-for="role in roles" :key="role.id" :value="role.name">
                                                        {{ role.name }}
                                                    </option>
                                                </select>
                                                <small class="text-gray-500 dark:text-gray-400">{{ $t('hold_ctrl_to_select_multiple') }}</small>
                                            </div>
                                            <div class="mb-5">
                                                <label for="status">{{ $t('status') }}</label>
                                                <select id="status" v-model="newUser.status" class="form-select" required>
                                                    <option value="">{{ $t('select_status') }}</option>
                                                    <option value="active">{{ $t('active') }}</option>
                                                    <option value="inactive">{{ $t('inactive') }}</option>
                                                </select>
                                            </div>
                                            <div class="mb-5">
                                                <label for="password">{{ $t('password') }}</label>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    v-model="newUser.password"
                                                    class="form-input"
                                                    :placeholder="$t('enter_password')"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-5">
                                                <label for="confirm-password">{{ $t('confirm_password') }}</label>
                                                <input
                                                    id="confirm-password"
                                                    type="password"
                                                    v-model="newUser.confirmPassword"
                                                    class="form-input"
                                                    :placeholder="$t('confirm_password')"
                                                    required
                                                />
                                            </div>
                                            <div class="flex justify-end gap-4">
                                                <button type="button" class="btn btn-outline-danger" @click="closeAddModal">
                                                    {{ $t('cancel') }}
                                                </button>
                                                <button type="submit" class="btn btn-primary">
                                                    {{ $t('save') }}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>

            <!-- Edit User Modal -->
            <TransitionRoot appear :show="showEditModal" as="template">
                <Dialog as="div" @close="closeEditModal" class="relative z-[51]">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                    </TransitionChild>

                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-start justify-center px-4 py-8">
                            <TransitionChild
                                as="template"
                                enter="duration-300 ease-out"
                                enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100"
                                leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95"
                            >
                                <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                        @click="closeEditModal"
                                    >
                                        <icon-x />
                                    </button>
                                    <div class="text-lg font-bold bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        {{ $t('edit_user') }}
                                    </div>
                                    <div class="p-5">
                                        <form @submit.prevent="submitEditUser">
                                            <div class="mb-5">
                                                <label for="edit-name">{{ $t('name') }}</label>
                                                <input
                                                    id="edit-name"
                                                    type="text"
                                                    v-model="editUserData.name"
                                                    class="form-input"
                                                    :placeholder="$t('enter_name')"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-5">
                                                <label for="edit-username">{{ $t('username') }}</label>
                                                <input
                                                    id="edit-username"
                                                    type="text"
                                                    v-model="editUserData.username"
                                                    class="form-input"
                                                    :placeholder="$t('enter_username')"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-5">
                                                <label for="edit-email">{{ $t('email') }}</label>
                                                <input
                                                    id="edit-email"
                                                    type="email"
                                                    v-model="editUserData.email"
                                                    class="form-input"
                                                    :placeholder="$t('enter_email')"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-5">
                                                <label for="phonenumber">{{ $t('phonenumber') }}</label>
                                                <input
                                                    id="edit-phonenumber"
                                                    type="phonenumber"
                                                    v-model="editUserData.phoneNumber"
                                                    class="form-input"
                                                    :placeholder="$t('enter_phonenumber')"
                                                    required
                                                />
                                            </div>
                                            <div class="mb-5">
                                                <label for="edit-role">{{ $t('role') }}</label>
                                                <select id="edit-role" v-model="editUserData.roles" class="form-select" multiple required>
                                                    <option v-for="role in roles" :key="role.id" :value="role.name">
                                                        {{ role.name }}
                                                    </option>
                                                </select>
                                                <small class="text-gray-500 dark:text-gray-400">{{ $t('hold_ctrl_to_select_multiple') }}</small>
                                            </div>
                                            <div class="mb-5">
                                                <label for="edit-status">{{ $t('status') }}</label>
                                                <select id="edit-status" v-model="editUserData.status" class="form-select" required>
                                                    <option value="">{{ $t('select_status') }}</option>
                                                    <option value="active">{{ $t('active') }}</option>
                                                    <option value="inactive">{{ $t('inactive') }}</option>
                                                </select>
                                            </div>
                                            <div class="mb-5">
                                                <label for="edit-password">{{ $t('password') }}</label>
                                                <input
                                                    id="edit-password"
                                                    type="password"
                                                    v-model="editUserData.password"
                                                    class="form-input"
                                                    :placeholder="$t('enter_password')"
                                                />
                                                <small class="text-gray-500 dark:text-gray-400">{{ $t('password_leave_blank') }}</small>
                                            </div>
                                            <div class="mb-5">
                                                <label for="edit-confirm-password">{{ $t('confirm_password') }}</label>
                                                <input
                                                    id="edit-confirm-password"
                                                    type="password"
                                                    v-model="editUserData.confirmPassword"
                                                    class="form-input"
                                                    :placeholder="$t('confirm_password')"
                                                />
                                                <small class="text-gray-500 dark:text-gray-400">{{ $t('password_leave_blank') }}</small>
                                            </div>
                                            <div class="flex justify-end gap-4">
                                                <button type="button" class="btn btn-outline-danger" @click="closeEditModal">
                                                    {{ $t('cancel') }}
                                                </button>
                                                <button type="submit" class="btn btn-primary">
                                                    {{ $t('update') }}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>

            <!-- Deactivate Confirmation Modal -->
            <TransitionRoot appear :show="showDeactivateConfirm" as="template">
                <Dialog as="div" @close="cancelDeactivate" class="relative z-[51]">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                    </TransitionChild>

                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-start justify-center px-4 py-8">
                            <TransitionChild
                                as="template"
                                enter="duration-300 ease-out"
                                enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100"
                                leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95"
                            >
                                <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <div class="w-16 h-16 rounded-full bg-danger/20 flex items-center justify-center mx-auto mb-5">
                                                <icon-trash class="w-8 h-8 text-danger" />
                                            </div>
                                            <h3 class="text-lg font-bold mb-3">{{ $t('deactivate_user') }}</h3>
                                            <p class="text-gray-500 dark:text-gray-400 mb-5">
                                                {{ $t('deactivate_user_confirmation', { username: userToDeactivate?.username }) }}
                                            </p>
                                            <div class="flex justify-center gap-4">
                                                <button type="button" class="btn btn-outline-danger" @click="cancelDeactivate">
                                                    {{ $t('cancel') }}
                                                </button>
                                                <button type="button" class="btn btn-danger" @click="proceedDeactivate">
                                                    {{ $t('deactivate') }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
import IconPlus from '@/components/icon/icon-plus.vue';
import IconPencil from '@/components/icon/icon-pencil.vue';
import IconTrash from '@/components/icon/icon-trash.vue';
import IconX from '@/components/icon/icon-x.vue';
import IconSearch from '@/components/icon/icon-search.vue'; // correct path lowercase 'icon'
import { createUser,updateUser,getAllUsers } from '@/services/UserList';
import {fetchRoles} from '@/services/rolesPermissions';

const fetchRolesData = async () => {
    try {
        const response = await fetchRoles(); // Fetch data from the API
        //console.log('Full API Response:', response); // Log the entire response to verify its structure

        // Extract the roles array from the response
        const fetchedRoles = Array.isArray(response) ? response : response.data || [];
        //console.log('Fetched Roles:', fetchedRoles); // Log the fetched roles

        // Ensure roles is an array
        if (!Array.isArray(fetchedRoles)) {
            console.error('Error: Roles data is not an array.');
            return;
        }

        // Update the roles variable
        roles.value = fetchedRoles.map((role: any) => ({
            id: role.id,
            name: role.name
        }));
    } catch (error) {
        console.error('Error fetching roles:', error);
    }
};

const fetchAllUsers = async () => {
    try {
        const response = await getAllUsers(); // Fetch data from the API
        //console.log('Full API Response:', response); // Log the entire response to verify its structure

        // Extract the users array from the response
        const users = Array.isArray(response) ? response : response.data || [];
        //console.log('Fetched Users:', users); // Log the fetched users

        // Ensure users is an array
        if (!Array.isArray(users)) {
            console.error('Error: Users data is not an array.');
            return;
        }

        // Process the data to match the table structure
        const processedUsers = users.map((user: any) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            roles: user.roles || [], // Include all roles
            phoneNumber: user.phone_number,
            lastLogin: user.updated_at, // Use `updated_at` as the last login time
            status: user.active === 1 ? 'active' : 'inactive', // Map `active` field to `status`
        }));

        // Separate users into active and inactive
        activeUsers.value = processedUsers.filter(user => user.status === 'active');
        inactiveUsers.value = processedUsers.filter(user => user.status === 'inactive');

        //console.log('Active Users:', activeUsers.value);
        //console.log('Inactive Users:', inactiveUsers.value);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

// Call the function to fetch users when the component is mounted

const activeTab = ref('active');
const showAddModal = ref(false);
const showDeactivateConfirm = ref(false);

const roles = ref<{ id: number; name: string }[]>([]);
interface Role {
    id: number;
    name: string;
}


// Sample data - replace with actual API calls
const activeUsers = ref<User[]>([]); // Explicitly typed as an array of User
const inactiveUsers = ref<User[]>([]); // Explicitly typed as an array of User

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phoneNumber: string;
    roles: Role[]; // Updated to include roles as an array of Role objects
    lastLogin: string;
    status: string;
}

const userToDeactivate = ref<User | null>(null);

const searchQuery = ref('');
const filteredUsers = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return (activeTab.value === 'active' ? activeUsers.value : inactiveUsers.value).filter(user => {
        return (
            user.name.toLowerCase().includes(query) || // Search by name
            user.username.toLowerCase().includes(query) || // Search by username
            user.email.toLowerCase().includes(query) || // Search by email
            user.phoneNumber.toLowerCase().includes(query) || // Search by phone number
            user.roles.some(role => role.name.toLowerCase().includes(query)) // Search by role
        );
    });
});

// Removed unused declaration of userToAdd as it is not being used in the code.

const openAddModal = () => {
    showAddModal.value = true;
};

const closeAddModal = () => {
    showAddModal.value = false;
    resetNewUser();
};

const resetNewUser = () => {
    newUser.value = {
        name: '',
        username: '',
        email: '',
        phoneNumber: '', // Added phoneNumber property
        roles: [],
        status: '',
        password: '',
        confirmPassword: ''
    };
};

const newUser = ref({
    name: '',
    username: '',
    email: '',
    phoneNumber: '', // Added phone number field
    roles: [], // Updated to store multiple roles
    status: '',
    password: '',
    confirmPassword: ''
});

const submitAddUser = async () => {
    if (newUser.value.password !== newUser.value.confirmPassword) {
        alert('Passwords do not match!'); // Show an error message
        return;
    }

    // Prepare the data to send to the API
    const userData = {
        name: newUser.value.name,
        username: newUser.value.username,
        email: newUser.value.email,
        phone_number: newUser.value.phoneNumber || '', // Add phone number if needed
        password: newUser.value.password,
        active: newUser.value.status === 'active' ? 1 : 0,
        //roles: newUser.value.role.split(',').map(role => role.trim()) // Convert roles to an array
        roles: newUser.value.roles // Send the array of roles
    };

    try {
        // Call the createUser function
        const response = await createUser(userData);
        console.log('User created successfully:', response);

        // Add the new user to the appropriate list
        const userToAdd = {
            id: Math.max(...[...activeUsers.value, ...inactiveUsers.value].map(u => u.id)) + 1,
            name: newUser.value.name,
            username: newUser.value.username,
            email: newUser.value.email,
            phoneNumber: newUser.value.phoneNumber, // Include phoneNumber
            roles: userData.roles.map((role, index) => ({ id: index + 1, name: role })), // Convert roles to objects with id
            lastLogin: new Date().toLocaleString(),
            status: newUser.value.status
        };

        if (newUser.value.status === 'active') {
            activeUsers.value.push(userToAdd);
        } else {
            inactiveUsers.value.push(userToAdd);
        }

        // Close the modal and reset the form
        closeAddModal();
    } catch (error) {
        //console.error('Error creating user:', error);
        alert('Failed to create user. Please try again.'); // Show an error message
    }
};

//edit user : declar variable, modal load, edit, and modal close
const showEditModal = ref(false);
const editUserData = ref<{
    id: number;
    name: string;
    username: string;
    email: string;
    phoneNumber: string;
    roles: string[]; // Explicitly typed as an array of strings
    status: string;
    password: string;
    confirmPassword: string;
}>({
    id: 0,
    name: '',
    username: '',
    email: '',
    phoneNumber: '', // Added phone number field
    roles: [], // Updated to store multiple roles
    status: '',
    password: '',
    confirmPassword: ''
});

const editUser = (user: User) => {
    editUserData.value = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        roles: user.roles.map(role => role.name), // Extract role names into an array
        status: user.status,
        password: '',
        confirmPassword: ''
    };
    showEditModal.value = true;
};


const submitEditUser = async () => {
    if (editUserData.value.password && editUserData.value.password !== editUserData.value.confirmPassword) {
        alert('Passwords do not match!'); // Show an error message
        return;
    }

    // Prepare the data to send to the API
    const userData: any = {
        name: editUserData.value.name,
        username: editUserData.value.username,
        email: editUserData.value.email,
        phone_number: editUserData.value.phoneNumber || '', // Add phone number if needed
        active: editUserData.value.status === 'active' ? 1 : 0,
        roles: editUserData.value.roles, // Send the array of roles
    };

    // Add password to userData only if provided
    if (editUserData.value.password && editUserData.value.password.trim() !== '') {
        userData.password = editUserData.value.password;
    }

    try {
        // Call the updateUser function
        const response = await updateUser(editUserData.value.id, userData);
        console.log('User updated successfully:', response);

        // Update the user in the appropriate list
        const userIndex = activeUsers.value.findIndex(u => u.id === editUserData.value.id);
        if (userIndex !== -1) {
            activeUsers.value[userIndex] = {
                ...activeUsers.value[userIndex],
                ...userData,
                roles: userData.roles.map(role => ({ name: role })), // Convert roles to objects
                status: editUserData.value.status
            };
        } else {
            const inactiveUserIndex = inactiveUsers.value.findIndex(u => u.id === editUserData.value.id);
            if (inactiveUserIndex !== -1) {
                inactiveUsers.value[inactiveUserIndex] = {
                    ...inactiveUsers.value[inactiveUserIndex],
                    ...userData,
                    roles: userData.roles.map(role => ({ name: role })), // Convert roles to objects
                    status: editUserData.value.status
                };
            }
        }

        // Handle status change
        if (editUserData.value.status !== activeTab.value) {
            const sourceList = activeTab.value === 'active' ? activeUsers : inactiveUsers;
            const targetList = activeTab.value === 'active' ? inactiveUsers : activeUsers;

            const userIndex = sourceList.value.findIndex(u => u.id === editUserData.value.id);
            if (userIndex !== -1) {
                const [user] = sourceList.value.splice(userIndex, 1);
                targetList.value.push(user);
            }
        }

        // Close the modal
        closeEditModal();
    } catch (error) {
        console.error('Error updating user:', error);
        const err = error as { response?: { data?: { error?: string } } };
        if (err.response && err.response.data && err.response.data.error) {
            alert(`Failed to update user: ${JSON.stringify(err.response.data.error)}`); // Show API error message
        } else {
            alert('Failed to update user. Please try again.'); // Show a generic error message
        }
    }
};

const closeEditModal = () => {
    showEditModal.value = false;
    editUserData.value = {
        id: 0,
        name: '',
        username: '',
        email: '',
        phoneNumber: '',
        roles: [],
        status: '',
        password: '',
        confirmPassword: ''
    };
};

const cancelDeactivate = () => {
    showDeactivateConfirm.value = false;
    userToDeactivate.value = null;
};

const proceedDeactivate = () => {
    if (userToDeactivate.value) {
        deactivateUser(userToDeactivate.value);
        showDeactivateConfirm.value = false;
        userToDeactivate.value = null;
    }
};

const deactivateUser = (user: User) => {
    // Find the user in active users
    const userIndex = activeUsers.value.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
        // Remove from active users
        const [deactivatedUser] = activeUsers.value.splice(userIndex, 1);
        // Add to inactive users
        inactiveUsers.value.push(deactivatedUser);
    }
};

//active this function when component is mounted example: when the page is loaded
// or when the modal is opened
onMounted(() => {
    fetchAllUsers();
    fetchRolesData(); // Fetch roles when the component is mounted (in modal create/edit user and role)
});

</script>