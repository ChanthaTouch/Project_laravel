# Frontend Project
Version 1

## Project Overview

This is a Vue.js-based frontend project designed for building modern, responsive, and scalable web applications. The project is structured to ensure maintainability and ease of development.

---

## Folder Structure

The project follows a modular folder structure:

```
frontend_con/
├── public/                # Static assets served directly
│   ├── demo-prepare.html  # Example static HTML file
│   └── ...                # Other static files
├── src/                   # Main source code
│   ├── components/        # Reusable Vue components
│   ├── composables/       # Reusable logic (e.g., hooks)
│   ├── layouts/           # Layout components (e.g., app layout, auth layout)
│   ├── router/            # Vue Router configuration
│   ├── services/          # API service files for handling HTTP requests
│   ├── stores/            # State management (Vuex/Pinia)
│   ├── views/             # Page-level components
│   ├── config/            # Configuration files for global settings
│   └── ...                # Other folders/files
├── .env                   # Default environment variables
├── .env.prod              # Environment variables for production
├── .env.uat               # Environment variables for UAT (User Acceptance Testing)
├── README.md              # Project documentation
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── ...                    # Other configuration files
```

---

## Folder Descriptions

### `config/` Folder

The `config` folder contains configuration files that define global settings and constants used throughout the application. This helps centralize configuration and makes it easier to manage and update.

#### Common Use Cases for the `config/` Folder:
- **API Endpoints**: Define base URLs or endpoints for different services.
- **Application Settings**: Store global constants like app name, version, or feature flags.
- **Environment-Specific Configurations**: Load settings dynamically based on the environment (e.g., development, production, UAT).

#### Example File: `config/api.ts`
```typescript
// filepath: src/config/api.ts
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  TIMEOUT: 5000, // Request timeout in milliseconds
};
```

#### Example File: `config/app.ts`
```typescript
// filepath: src/config/app.ts
export const APP_CONFIG = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'MyApp',
  VERSION: '1.0.0',
};
```

#### How to Use Configurations in Code:
You can import configuration files wherever needed:
```typescript
import { API_CONFIG } from '@/config/api';

console.log(API_CONFIG.BASE_URL);
```

---

## Environment Configuration

The project uses environment files to manage configuration for different environments. These files allow you to define variables that can be accessed throughout the application.

### Environment Files

- **`.env`**: Default environment variables for local development.
- **`.env.prod`**: Environment variables for the production environment.
- **`.env.uat`**: Environment variables for the UAT (User Acceptance Testing) environment.

### How Environment Files Work

- These files are automatically loaded by Vite during the build or development process.
- Variables in these files should follow the naming convention `VITE_<VARIABLE_NAME>` to be accessible in the application.
- Example:
  ```env
  VITE_API_BASE_URL=https://api.example.com
  VITE_APP_NAME=MyApp
  ```

### Accessing Environment Variables in Code

You can access these variables in your Vue.js application using `import.meta.env`:
```javascript
console.log(import.meta.env.VITE_API_BASE_URL);
```

---

## Commands to Run Different Environments

You can use the following commands to run the application in different environments:

1. **Run in Local Development (`.env`)**:
   ```bash
   npm run dev
   ```

2. **Build for Production (`.env.prod`)**:
   ```bash
   npm run build --mode production
   ```

3. **Build for UAT (`.env.uat`)**:
   ```bash
   npm run build --mode uat
   ```

4. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

---

## Technologies Used

- **Vue.js 3**: Progressive JavaScript framework for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **Vue Router**: For managing application routes.
- **Pinia/Vuex**: State management library (depending on your implementation).
- **Axios/Fetch API**: For handling HTTP requests in the `services` folder.
- **TypeScript**: For type safety and better developer experience (if applicable).
- **SCSS/CSS**: For styling the application.

---

## Recommended Tools

- **Node.js**: Ensure you have Node.js installed (v16+ recommended).
- **VS Code**: Recommended IDE for development.
  - Extensions:
    - Vetur or Volar (for Vue.js support)
    - ESLint (for linting)
    - Prettier (for code formatting)
- **Git**: Version control system.

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd frontend_con
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build --mode production
   ```

5. **Build for UAT**:
   ```bash
   npm run build --mode uat
   ```

6. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## Project Features

- Modular and scalable folder structure.
- Reusable components and composables.
- Centralized API handling in the `services` folder.
- Centralized global settings in the `config` folder.
- State management with Pinia/Vuex.
- Routing with Vue Router.
- Fast development and build process with Vite.
- Environment-specific configurations using `.env` files.

---

## Developer Guide: Creating Modules and Submodules

To maintain consistency and scalability in the project, follow these steps when creating a new module or submodule. This structure ensures that the project remains modular, organized, and easy to extend.

### Steps to Create a Module and Submodule

1. **Create a Main Module Folder**:
   - Inside the `views/` folder, create a folder for the main module. Use uppercase naming for the folder (e.g., `SYSADMIN`).

2. **Create a Submodule Folder**:
   - Inside the main module folder, create a subfolder for the submodule. Use lowercase naming with hyphens for the folder (e.g., `manage-user`).

3. **Create Vue Files for the Submodule**:
   - Inside the submodule folder, create Vue files related to the submodule (e.g., `UserList.vue`, `UserForm.vue`).
   - These files will contain the UI and logic for the submodule.

4. **Update the Router**:
   - Add routes for the new module and submodule in the `router/index.ts` file.

4. **Update the Navigate Menu**:
   - Add routes for the new module and submodule in the `src\components\layout\Sidebar.vue` file.

5. **Create a Service File**:
   - Create a service file in the `services/` folder related to the module or submodule.
   - This file will handle all API calls and business logic for the module.

6. **Update the Store (if needed)**:
   - If the module requires state management, create a store file in the `stores/` folder.

---

### Example: Creating a Module for "System Administration" with a Submodule "Manage Users"

#### 1. Create a Service File
... (Include the example code provided earlier here) ...

#### 2. Create a Main Module Folder
... (Include the folder structure and explanation here) ...

#### 3. Create a Submodule Folder
... (Include the folder structure and explanation here) ...

#### 4. Create Vue Files for the Submodule
... (Include the `UserList.vue` example code here) ...

#### 5. Update the Router
... (Include the router example code here) ...

#### 6. Update the Store (if needed)
... (Include the store example code here) ...

---

### Best Practices

- **Consistency**: Follow the naming conventions for folders and files to maintain consistency.
- **Reusability**: Keep logic in the `services/` folder and reusable components in the `components/` folder.
- **Modularity**: Each module and submodule should be self-contained and easy to understand.
- **Documentation**: Add comments and documentation for complex logic to help future developers.

---

By following this guide, the project will remain organized, scalable, and easy to maintain for future developers.

---

## Recommendations

- **Testing**: Add unit and integration tests using tools like Jest or Vitest.
- **Linting**: Ensure consistent code quality with ESLint and Prettier.
- **Documentation**: Use tools like Storybook for documenting components.
- **CI/CD**: Set up automated pipelines for testing and deployment.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
