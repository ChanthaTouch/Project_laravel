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

// function to create a new user
/**
 * 
 * @returns {Promise<any>} - A promise that resolves to the response data from the API.
 * @throws {Error} - Throws an error if the API request fails.
 * Data input:
 * 
    {
    "name": "NOV Sihapanha",
    "username": "Sihapanha",
    "email": "Sihapanha@gmail.com",
    "phone_number": "016727296",
    "password": "1234567890",
    "active": 1,
    "roles": ["cmsuser","hris"]
    }

* Data returned:
    {
    "success": true,
    "data": [],
    "message": "User registered successfully."
    }
 */
export const createUser = async (data: any) => {
    try {
        const response = await api.post('/users/register', data); // Send a POST request to create a new user
        return response.data; // Return the data from the API response
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; // Re-throw the error for handling in the calling code
    }

};


// Function to fetch all users
/*
    api get-all-user end point
    - GET users/get-all-users: Fetch all roles for the logged in user
    Data returned:
    [
    {
        "id": 1,
        "name": "admin",
        "username": "admin",
        "email": "admin@example.com",
        "phone_number": "1234567890",
        "email_verified_at": null,
        "active": 1,
        "created_at": "2025-04-25T03:15:31.000000Z",
        "updated_at": "2025-04-25T03:15:31.000000Z",
        "roles": [
            {
                "id": 1,
                "name": "sysadmin",
                "guard_name": "web",
                "created_at": "2025-04-25T03:15:31.000000Z",
                "updated_at": "2025-04-25T03:15:31.000000Z",
                "pivot": {
                    "model_type": "App\\Models\\User",
                    "model_id": 1,
                    "role_id": 1
                },
                "permissions": [
                    {
                        "id": 1,
                        "name": "systemadmin",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 1,
                            "permission_id": 1
                        }
                    }
                ]
            }
        ],
        "permissions": []
    },
    {
        "id": 2,
        "name": "testuser",
        "username": "testuser",
        "email": "testuser@example.com",
        "phone_number": "0987654321",
        "email_verified_at": null,
        "active": 0,
        "created_at": "2025-04-25T03:15:32.000000Z",
        "updated_at": "2025-04-25T03:15:32.000000Z",
        "roles": [
            {
                "id": 2,
                "name": "cmsuser",
                "guard_name": "web",
                "created_at": "2025-04-25T03:15:31.000000Z",
                "updated_at": "2025-04-25T03:15:31.000000Z",
                "pivot": {
                    "model_type": "App\\Models\\User",
                    "model_id": 2,
                    "role_id": 2
                },
                "permissions": [
                    {
                        "id": 2,
                        "name": "cms publish articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 2
                        }
                    },
                    {
                        "id": 3,
                        "name": "cms unpublish articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 3
                        }
                    },
                    {
                        "id": 4,
                        "name": "cms read articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 4
                        }
                    },
                    {
                        "id": 5,
                        "name": "cms edit articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 5
                        }
                    },
                    {
                        "id": 6,
                        "name": "cms create articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 6
                        }
                    }
                ]
            }
        ],
        "permissions": []
    },
    {
        "id": 3,
        "name": "cmsadmin",
        "username": "cmsadmin",
        "email": "cmsadmin@example.com",
        "phone_number": "0987654322",
        "email_verified_at": null,
        "active": 1,
        "created_at": "2025-04-30T06:44:50.000000Z",
        "updated_at": "2025-04-30T06:44:50.000000Z",
        "roles": [
            {
                "id": 2,
                "name": "cmsuser",
                "guard_name": "web",
                "created_at": "2025-04-25T03:15:31.000000Z",
                "updated_at": "2025-04-25T03:15:31.000000Z",
                "pivot": {
                    "model_type": "App\\Models\\User",
                    "model_id": 3,
                    "role_id": 2
                },
                "permissions": [
                    {
                        "id": 2,
                        "name": "cms publish articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 2
                        }
                    },
                    {
                        "id": 3,
                        "name": "cms unpublish articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 3
                        }
                    },
                    {
                        "id": 4,
                        "name": "cms read articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 4
                        }
                    },
                    {
                        "id": 5,
                        "name": "cms edit articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 5
                        }
                    },
                    {
                        "id": 6,
                        "name": "cms create articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 6
                        }
                    }
                ]
            }
        ],
        "permissions": []
    },
    {
        "id": 4,
        "name": "NOV Piseth",
        "username": "novpiseth",
        "email": "novpiseth@gmail.com",
        "phone_number": "016727295",
        "email_verified_at": null,
        "active": 1,
        "created_at": "2025-05-02T03:06:11.000000Z",
        "updated_at": "2025-05-02T03:06:11.000000Z",
        "roles": [
            {
                "id": 2,
                "name": "cmsuser",
                "guard_name": "web",
                "created_at": "2025-04-25T03:15:31.000000Z",
                "updated_at": "2025-04-25T03:15:31.000000Z",
                "pivot": {
                    "model_type": "App\\Models\\User",
                    "model_id": 4,
                    "role_id": 2
                },
                "permissions": [
                    {
                        "id": 2,
                        "name": "cms publish articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 2
                        }
                    },
                    {
                        "id": 3,
                        "name": "cms unpublish articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 3
                        }
                    },
                    {
                        "id": 4,
                        "name": "cms read articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 4
                        }
                    },
                    {
                        "id": 5,
                        "name": "cms edit articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 5
                        }
                    },
                    {
                        "id": 6,
                        "name": "cms create articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 6
                        }
                    }
                ]
            }
        ],
        "permissions": []
    },
    {
        "id": 5,
        "name": "NOV Sihapanha",
        "username": "Sihapanha",
        "email": "Sihapanha@gmail.com",
        "phone_number": "016727296",
        "email_verified_at": null,
        "active": 1,
        "created_at": "2025-05-02T03:07:43.000000Z",
        "updated_at": "2025-05-02T03:07:43.000000Z",
        "roles": [
            {
                "id": 2,
                "name": "cmsuser",
                "guard_name": "web",
                "created_at": "2025-04-25T03:15:31.000000Z",
                "updated_at": "2025-04-25T03:15:31.000000Z",
                "pivot": {
                    "model_type": "App\\Models\\User",
                    "model_id": 5,
                    "role_id": 2
                },
                "permissions": [
                    {
                        "id": 2,
                        "name": "cms publish articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 2
                        }
                    },
                    {
                        "id": 3,
                        "name": "cms unpublish articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 3
                        }
                    },
                    {
                        "id": 4,
                        "name": "cms read articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 4
                        }
                    },
                    {
                        "id": 5,
                        "name": "cms edit articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 5
                        }
                    },
                    {
                        "id": 6,
                        "name": "cms create articles",
                        "guard_name": "web",
                        "created_at": "2025-04-25T03:15:31.000000Z",
                        "updated_at": "2025-04-25T03:15:31.000000Z",
                        "pivot": {
                            "role_id": 2,
                            "permission_id": 6
                        }
                    }
                ]
            },
            {
                "id": 3,
                "name": "hris",
                "guard_name": "web",
                "created_at": "2025-04-30T07:51:21.000000Z",
                "updated_at": "2025-04-30T07:51:21.000000Z",
                "pivot": {
                    "model_type": "App\\Models\\User",
                    "model_id": 5,
                    "role_id": 3
                },
                "permissions": []
            }
        ],
        "permissions": []
    }
]
*/
export const getAllUsers = async () => {
    try {
        const response = await api.get('/users/get-all-users');
        return response.data; // Return the data from the API response
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // Re-throw the error for handling in the calling code
    }
};

// function to update a user
/** 
 * 
 * api end points
 * - PUT /api/users/update-user/:id: update user
    * Data input:
        {
            "name": "NOV Sihapanha2",
            "username": "Sihapanha2",
            "email": "Sihapanha2@gmail.com",
            "phone_number": "026727296",
            "password": "1234567890",
            "active": 0,
            "roles": ["cmsuser","hris"]
        }
*/
export const updateUser = async (id: number, data: any) => {
    try {
        const response = await api.put(`/users/update-user/${id}`, data); // Send a PUT request to update the user
        return response.data; // Return the data from the API response
    } catch (error) {
        console.error('Error updating user:', error);
        throw error; // Re-throw the error for handling in the calling code
    }
};
// function to delete a user