import { defineStore } from 'pinia';

interface UserState {
    user: {
        id?: number;
        username?: string;
        email?: string;
        name?: string;
        role?: string;
        token?: string;
        access_token?: string;
        refresh_token?: string;
        token_type?: string;
        expires_in?: number;
    } | null;
    isAuthenticated: boolean;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        user: null,
        isAuthenticated: false
    }),
    
    getters: {
        getUser: (state) => state.user,
        getToken: (state) => state.user?.access_token || state.user?.token,
        isLoggedIn: (state) => state.isAuthenticated
    },
    
    actions: {
        setUser(userData: any) {
            console.log('Setting user data:', userData);
            
            // Handle different token structures
            const userWithToken = {
                ...userData,
                // If token exists, use it, otherwise use access_token
                token: userData.token || userData.access_token,
                // Preserve the original token fields
                access_token: userData.access_token,
                refresh_token: userData.refresh_token,
                token_type: userData.token_type,
                expires_in: userData.expires_in
            };
            
            this.user = userWithToken;
            this.isAuthenticated = true;
            
            // Store in localStorage for persistence
            localStorage.setItem('user', JSON.stringify(this.user));
            
            console.log('User store state after setUser:', {
                user: this.user,
                isAuthenticated: this.isAuthenticated,
                token: this.getToken
            });
        },
        
        clearUser() {
            this.user = null;
            this.isAuthenticated = false;
            localStorage.removeItem('user');
        },
        
        // Initialize user from localStorage on app start
        initializeUser() {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                console.log('Initializing user from localStorage:', parsedUser);
                
                // Ensure token is properly set
                if (parsedUser.access_token && !parsedUser.token) {
                    parsedUser.token = parsedUser.access_token;
                }
                
                this.user = parsedUser;
                this.isAuthenticated = true;
                
                console.log('User store initialized with:', {
                    user: this.user,
                    isAuthenticated: this.isAuthenticated,
                    token: this.getToken
                });
            }
        }
    }
}); 