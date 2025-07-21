import axios from 'axios';
import { API_BASE_URL } from '@/config/api';
import { useUserStore } from '@/stores/user'; // <<== Import user store

const userStore = useUserStore(); // <<== Get userStore

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Automatically attach token to each request
api.interceptors.request.use((config) => {
    const token = userStore.getToken; // <<== Your stored token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

/*
    api end points
    - GET /api/roles: create roles
    Data returned:
    {
        "guard_name": "web",
        "name": "hris1",
        "updated_at": "2025-04-30T07:51:49.000000Z",
        "created_at": "2025-04-30T07:51:49.000000Z",
        "id": 4
    }
*/ 
export const fetchRoles = () => api.get('/roles');
/*
    api end points
    - POST /api/roles: create roles
    Data returned:
    {
        "guard_name": "web",
        "name": "hris1",
        "updated_at": "2025-04-30T07:51:49.000000Z",
        "created_at": "2025-04-30T07:51:49.000000Z",
        "id": 4
    }
*/ 
export const addRole = (data: any) => api.post('/roles', data);
export const updateRole = (id: number, data: any) => api.put(`/roles/${id}`, data);
export const deleteRole = (id: number) => api.delete(`/roles/${id}`);

/**
 *  GET /api/roles/list
 * Data Returned:
 * [
    {
        "role": "sysadmin",
        "permissions": [
            "systemadmin"
        ]
    },
    {
        "role": "cmsuser",
        "permissions": [
            "cms publish articles",
            "cms unpublish articles",
            "cms read articles",
            "cms edit articles",
            "cms create articles"
        ]
    },
    {
        "role": "hris",
        "permissions": []
    },
    {
        "role": "labourcontroll",
        "permissions": []
    },
    {
        "role": "stockcontrol",
        "permissions": []
    },
    {
        "role": "stockcontrol1",
        "permissions": []
    },
    {
        "role": "task progress",
        "permissions": []
    }
]

 */
    export const fetchRolesPermissionList = () => api.get('/roles/list');




export const fetchAllRoles = () => api.get('/roles');

/*

    api end points
    - GET /api/roles: Fetch all roles

    Data returned:
    [
        {
            "id": 1,
            "name": "sysadmin",
            "guard_name": "web",
            "created_at": "2025-04-25T03:15:31.000000Z",
            "updated_at": "2025-04-25T03:15:31.000000Z"
        },
        {
            "id": 2,
            "name": "cmsuser",
            "guard_name": "web",
            "created_at": "2025-04-25T03:15:31.000000Z",
            "updated_at": "2025-04-25T03:15:31.000000Z"
        }
    ]

*/

