zzz<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Super Admin Portal</h1>
      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
        Logout
      </button>
    </div>

    <!-- Tabs -->
    <div class="flex space-x-4 mb-6">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['px-4 py-2 rounded-lg', activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700']"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Chairman of Board of Directors Tab -->
    <div v-if="activeTab === 'Chairman of Board of Directors'" class="bg-white p-6 rounded-lg shadow">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Manage Chairman</h2>
        <button @click="openAddChairmanModal" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Chairman
        </button>
      </div>
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 px-4 py-2 text-left">Profile Picture</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="chairman in chairmen" :key="chairman.id" class="hover:bg-gray-100 relative">
            <td class="border border-gray-300 px-4 py-2">
              <img :src="chairman.profilePic" alt="Profile Picture" class="w-10 h-10 rounded-full object-cover" />
            </td>
            <td class="border border-gray-300 px-4 py-2">{{ chairman.name }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ chairman.email }}</td>
            <td class="border border-gray-300 px-4 py-2 text-center flex justify-center space-x-2">
              <button @click="toggleDetailDropdown(chairman)" class="text-blue-500 hover:text-blue-700 mr-2">
                <i class="fas fa-eye"></i>
              </button>
              <button @click="editChairman(chairman)" class="text-gray-500 hover:text-gray-700 mr-2">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="deleteChairman(chairman.id)" class="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
            <!-- Dropdown for Chairman Details -->
            <td v-if="showDetailDropdown && selectedPerson.id === chairman.id && selectedPerson.role === 'chairman'" colspan="4" class="absolute left-0 right-0 bg-pink-100 border border-pink-300 rounded-lg shadow-lg z-10 mt-1 p-4">
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-4">
                  <label class="text-pink-700 font-semibold">Select Person:</label>
                  <select
                    v-model="selectedPersonId"
                    @change="updateSelectedPerson"
                    class="p-2 border border-pink-300 rounded-lg bg-pink-50 text-pink-800 focus:ring-pink-400 focus:border-pink-400"
                  >
                    <option value="" disabled>Select a person</option>
                    <optgroup label="Chairmen">
                      <option v-for="chairman in chairmen" :key="'chairman-' + chairman.id" :value="'chairman-' + chairman.id">
                        {{ chairman.name }}
                      </option>
                    </optgroup>
                    <optgroup label="Secretaries">
                      <option v-for="secretary in secretaries" :key="'secretary-' + secretary.id" :value="'secretary-' + secretary.id">
                        {{ secretary.name }}
                      </option>
                    </optgroup>
                    <optgroup label="General Managers">
                      <option v-for="manager in generalManagers" :key="'manager-' + manager.id" :value="'manager-' + manager.id">
                        {{ manager.name }}
                      </option>
                    </optgroup>
                    <optgroup label="Deputy Directors">
                      <option v-for="deputy in deputyDirectors" :key="'deputy-' + deputy.id" :value="'deputy-' + deputy.id">
                        {{ deputy.name }}
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div v-if="selectedPerson" class="bg-purple-50 rounded-lg overflow-x-auto">
                  <table class="w-full border-collapse border border-purple-300">
                    <thead>
                      <tr class="bg-purple-100 text-purple-800">
                        <th class="border border-purple-300 px-4 py-2 text-left">Profile Picture</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Name</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Email</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Start Date</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Work Description</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Today's Tasks (May 23, 2025)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-purple-800">
                        <td class="border border-purple-300 px-4 py-2">
                          <img :src="selectedPerson.profilePic" alt="Profile" class="w-12 h-12 rounded-full object-cover border-2 border-purple-300" />
                        </td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.name }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.email }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.startDate || 'Not specified' }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.work || 'No work description provided' }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.todayTasks || 'No tasks specified for today' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Secretary Tab -->
    <div v-if="activeTab === 'Secretary'" class="bg-white p-6 rounded-lg shadow">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Manage Secretary</h2>
        <button @click="openAddSecretaryModal" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Secretary
        </button>
      </div>
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 px-4 py-2 text-left">Profile Picture</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="secretary in secretaries" :key="secretary.id" class="hover:bg-gray-100 relative">
            <td class="border border-gray-300 px-4 py-2">
              <img :src="secretary.profilePic" alt="Profile Picture" class="w-10 h-10 rounded-full object-cover" />
            </td>
            <td class="border border-gray-300 px-4 py-2">{{ secretary.name }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ secretary.email }}</td>
            <td class="border border-gray-300 px-4 py-2 text-center flex justify-center space-x-2">
              <button @click="toggleDetailDropdown(secretary)" class="text-blue-500 hover:text-blue-700 mr-2">
                <i class="fas fa-eye"></i>
              </button>
              <button @click="editSecretary(secretary)" class="text-gray-500 hover:text-gray-700 mr-2">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="deleteSecretary(secretary.id)" class="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
            <!-- Dropdown for Secretary Details -->
            <td v-if="showDetailDropdown && selectedPerson.id === secretary.id && selectedPerson.role === 'secretary'" colspan="4" class="absolute left-0 right-0 bg-pink-100 border border-pink-300 rounded-lg shadow-lg z-10 mt-1 p-4">
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-4">
                  <label class="text-pink-700 font-semibold">Select Person:</label>
                  <select
                    v-model="selectedPersonId"
                    @change="updateSelectedPerson"
                    class="p-2 border border-pink-300 rounded-lg bg-pink-50 text-pink-800 focus:ring-pink-400 focus:border-pink-400"
                  >
                    <option value="" disabled>Select a person</option>
                    <optgroup label="Chairmen">
                      <option v-for="chairman in chairmen" :key="'chairman-' + chairman.id" :value="'chairman-' + chairman.id">
                        {{ chairman.name }}
                      </option>
                    </optgroup>
                    <optgroup label="Secretaries">
                      <option v-for="secretary in secretaries" :key="'secretary-' + secretary.id" :value="'secretary-' + secretary.id">
                        {{ secretary.name }}
                      </option>
                    </optgroup>
                    <optgroup label="General Managers">
                      <option v-for="manager in generalManagers" :key="'manager-' + manager.id" :value="'manager-' + manager.id">
                        {{ manager.name }}
                      </option>
                    </optgroup>
                    <optgroup label="Deputy Directors">
                      <option v-for="deputy in deputyDirectors" :key="'deputy-' + deputy.id" :value="'deputy-' + deputy.id">
                        {{ deputy.name }}
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div v-if="selectedPerson" class="bg-purple-50 rounded-lg overflow-x-auto">
                  <table class="w-full border-collapse border border-purple-300">
                    <thead>
                      <tr class="bg-purple-100 text-purple-800">
                        <th class="border border-purple-300 px-4 py-2 text-left">Profile Picture</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Name</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Email</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Start Date</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Work Description</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Today's Tasks (May 23, 2025)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-purple-800">
                        <td class="border border-purple-300 px-4 py-2">
                          <img :src="selectedPerson.profilePic" alt="Profile" class="w-12 h-12 rounded-full object-cover border-2 border-purple-300" />
                        </td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.name }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.email }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.startDate || 'Not specified' }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.work || 'No work description provided' }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.todayTasks || 'No tasks specified for today' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- General Manager Tab -->
    <div v-if="activeTab === 'General Manager'" class="bg-white p-6 rounded-lg shadow">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Manage General Manager</h2>
        <button @click="openAddGeneralManagerModal" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add General Manager
        </button>
      </div>
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 px-4 py-2 text-left">Profile Picture</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="manager in generalManagers" :key="manager.id" class="hover:bg-gray-100 relative">
            <td class="border border-gray-300 px-4 py-2">
              <img :src="manager.profilePic" alt="Profile Picture" class="w-10 h-10 rounded-full object-cover" />
            </td>
            <td class="border border-gray-300 px-4 py-2">{{ manager.name }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ manager.email }}</td>
            <td class="border border-gray-300 px-4 py-2 text-center flex justify-center space-x-2">
              <button @click="toggleDetailDropdown(manager)" class="text-blue-500 hover:text-blue-700 mr-2">
                <i class="fas fa-eye"></i>
              </button>
              <button @click="editGeneralManager(manager)" class="text-gray-500 hover:text-gray-700 mr-2">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="deleteGeneralManager(manager.id)" class="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
            <!-- Dropdown for General Manager Details -->
            <td v-if="showDetailDropdown && selectedPerson.id === manager.id && selectedPerson.role === 'manager'" colspan="4" class="absolute left-0 right-0 bg-pink-100 border border-pink-300 rounded-lg shadow-lg z-10 mt-1 p-4">
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-4">
                  <label class="text-pink-700 font-semibold">Select Person:</label>
                  <select
                    v-model="selectedPersonId"
                    @change="updateSelectedPerson"
                    class="p-2 border border-pink-300 rounded-lg bg-pink-50 text-pink-800 focus:ring-pink-400 focus:border-pink-400"
                  >
                    <option value="" disabled>Select a person</option>
                    <optgroup label="Chairmen">
                      <option v-for="chairman in chairmen" :key="'chairman-' + chairman.id" :value="'chairman-' + chairman.id">
                        {{ chairman.name }}
                      </option>
                    </optgroup>
                    <optgroup label="Secretaries">
                      <option v-for="secretary in secretaries" :key="'secretary-' + secretary.id" :value="'secretary-' + secretary.id">
                        {{ secretary.name }}
                      </option>
                    </optgroup>
                    <optgroup label="General Managers">
                      <option v-for="manager in generalManagers" :key="'manager-' + manager.id" :value="'manager-' + manager.id">
                        {{ manager.name }}
                      </option>
                    </optgroup>
                    <optgroup label="Deputy Directors">
                      <option v-for="deputy in deputyDirectors" :key="'deputy-' + deputy.id" :value="'deputy-' + deputy.id">
                        {{ deputy.name }}
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div v-if="selectedPerson" class="bg-purple-50 rounded-lg overflow-x-auto">
                  <table class="w-full border-collapse border border-purple-300">
                    <thead>
                      <tr class="bg-purple-100 text-purple-800">
                        <th class="border border-purple-300 px-4 py-2 text-left">Profile Picture</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Name</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Email</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Start Date</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Work Description</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Today's Tasks (May 23, 2025)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-purple-800">
                        <td class="border border-purple-300 px-4 py-2">
                          <img :src="selectedPerson.profilePic" alt="Profile" class="w-12 h-12 rounded-full object-cover border-2 border-purple-300" />
                        </td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.name }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.email }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.startDate || 'Not specified' }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.work || 'No work description provided' }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.todayTasks || 'No tasks specified for today' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Deputy Director-General Tab -->
    <div v-if="activeTab === 'Deputy Director-General'" class="bg-white p-6 rounded-lg shadow">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Manage Deputy Director-General</h2>
        <button @click="openAddDeputyDirectorModal" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Deputy Director-General
        </button>
      </div>
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-300 px-4 py-2 text-left">Profile Picture</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="deputy in deputyDirectors" :key="deputy.id" class="hover:bg-gray-100 relative">
            <td class="border border-gray-300 px-4 py-2">
              <img :src="deputy.profilePic" alt="Profile Picture" class="w-10 h-10 rounded-full object-cover" />
            </td>
            <td class="border border-gray-300 px-4 py-2">{{ deputy.name }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ deputy.email }}</td>
            <td class="border border-gray-300 px-4 py-2 text-center flex justify-center space-x-2">
              <button @click="toggleDetailDropdown(deputy)" class="text-blue-500 hover:text-blue-700 mr-2">
                <i class="fas fa-eye"></i>
              </button>
              <button @click="editDeputyDirector(deputy)" class="text-gray-500 hover:text-gray-700 mr-2">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="deleteDeputyDirector(deputy.id)" class="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
            <!-- Dropdown for Deputy Director Details -->
            <td v-if="showDetailDropdown && selectedPerson.id === deputy.id && selectedPerson.role === 'deputy'" colspan="4" class="absolute left-0 right-0 bg-pink-100 border border-pink-300 rounded-lg shadow-lg z-10 mt-1 p-4">
              <div class="flex flex-col space-y-2">
                <div class="flex items-center space-x-4">
                  <label class="text-pink-700 font-semibold">Select Person:</label>
                  <select
                    v-model="selectedPersonId"
                    @change="updateSelectedPerson"
                    class="p-2 border border-pink-300 rounded-lg bg-pink-50 text-pink-800 focus:ring-pink-400 focus:border-pink-400"
                  >
                    <option value="" disabled>Select a person</option>
                    <optgroup label="Chairmen">
                      <option v-for="chairman in chairmen" :key="'chairman-' + chairman.id" :value="'chairman-' + chairman.id">
                        {{ chairman.name }}
                      </option>
                    </optgroup>
                    <optgroup label="Secretaries">
                      <option v-for="secretary in secretaries" :key="'secretary-' + secretary.id" :value="'secretary-' + secretary.id">
                        {{ secretary.name }}
                      </option>
                    </optgroup>
                    <optgroup label="General Managers">
                      <option v-for="manager in generalManagers" :key="'manager-' + manager.id" :value="'manager-' + manager.id">
                        {{ manager.name }}
                      </option>
                    </optgroup>
                    <optgroup label="Deputy Directors">
                      <option v-for="deputy in deputyDirectors" :key="'deputy-' + deputy.id" :value="'deputy-' + deputy.id">
                        {{ deputy.name }}
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div v-if="selectedPerson" class="bg-purple-50 rounded-lg overflow-x-auto">
                  <table class="w-full border-collapse border border-purple-300">
                    <thead>
                      <tr class="bg-purple-100 text-purple-800">
                        <th class="border border-purple-300 px-4 py-2 text-left">Profile Picture</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Name</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Email</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Start Date</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Work Description</th>
                        <th class="border border-purple-300 px-4 py-2 text-left">Today's Tasks (May 23, 2025)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="text-purple-800">
                        <td class="border border-purple-300 px-4 py-2">
                          <img :src="selectedPerson.profilePic" alt="Profile" class="w-12 h-12 rounded-full object-cover border-2 border-purple-300" />
                        </td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.name }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.email }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.startDate || 'Not specified' }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.work || 'No work description provided' }}</td>
                        <td class="border border-purple-300 px-4 py-2">{{ selectedPerson.todayTasks || 'No tasks specified for today' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- MODALS -->
    <!-- Add Chairman Modal -->
    <div v-if="showAddChairmanModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Add Chairman</h2>
        <form @submit.prevent="addChairman" class="space-y-4">
          <div v-if="chairmanError" class="text-red-600 text-sm">{{ chairmanError }}</div>
          <div class="mb-4">
            <label for="chairman-profile-pic" class="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" id="chairman-profile-pic" @change="handleProfilePicUpload($event, 'newChairman')" accept="image/*" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <img v-if="newChairman.profilePic" :src="newChairman.profilePic" alt="Preview" class="mt-2 w-20 h-20 rounded-full object-cover" />
          </div>
          <div class="mb-4">
            <label for="chairman-name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="chairman-name" v-model="newChairman.name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter chairman name" required>
          </div>
          <div class="mb-4">
            <label for="chairman-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="chairman-email" v-model="newChairman.email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter chairman email" required>
          </div>
          <div class="mb-4">
            <label for="chairman-start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" id="chairman-start-date" v-model="newChairman.startDate" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="chairman-work" class="block text-sm font-medium text-gray-700">Work Description</label>
            <textarea id="chairman-work" v-model="newChairman.work" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter work description" rows="3"></textarea>
          </div>
          <div class="mb-4">
            <label for="chairman-today-tasks" class="block text-sm font-medium text-gray-700">Today's Tasks (May 23, 2025)</label>
            <textarea id="chairman-today-tasks" v-model="newChairman.todayTasks" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter today's tasks" rows="3"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeAddChairmanModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
              <span v-if="loading">Loading...</span>
              <span v-else>Add</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Edit Chairman Modal -->
    <div v-if="showEditChairmanModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Edit Chairman</h2>
        <form @submit.prevent="updateChairman" class="space-y-4">
          <div v-if="chairmanError" class="text-red-600 text-sm">{{ chairmanError }}</div>
          <div class="mb-4">
            <label for="edit-chairman-profile-pic" class="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" id="edit-chairman-profile-pic" @change="handleProfilePicUpload($event, 'editChairman')" accept="image/*" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <img v-if="editChairman.profilePic" :src="editChairman.profilePic" alt="Preview" class="mt-2 w-20 h-20 rounded-full object-cover" />
          </div>
          <div class="mb-4">
            <label for="edit-chairman-name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="edit-chairman-name" v-model="editChairman.name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-chairman-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="edit-chairman-email" v-model="editChairman.email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-chairman-start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" id="edit-chairman-start-date" v-model="editChairman.startDate" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-chairman-work" class="block text-sm font-medium text-gray-700">Work Description</label>
            <textarea id="edit-chairman-work" v-model="editChairman.work" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter work description" rows="3"></textarea>
          </div>
          <div class="mb-4">
            <label for="edit-chairman-today-tasks" class="block text-sm font-medium text-gray-700">Today's Tasks (May 23, 2025)</label>
            <textarea id="edit-chairman-today-tasks" v-model="editChairman.todayTasks" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter today's tasks" rows="3"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeEditChairmanModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
              <span v-if="loading">Loading...</span>
              <span v-else>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Add Secretary Modal -->
    <div v-if="showAddSecretaryModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Add Secretary</h2>
        <form @submit.prevent="addSecretary" class="space-y-4">
          <div v-if="secretaryError" class="text-red-600 text-sm">{{ secretaryError }}</div>
          <div class="mb-4">
            <label for="secretary-profile-pic" class="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" id="secretary-profile-pic" @change="handleProfilePicUpload($event, 'newSecretary')" accept="image/*" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <img v-if="newSecretary.profilePic" :src="newSecretary.profilePic" alt="Preview" class="mt-2 w-20 h-20 rounded-full object-cover" />
          </div>
          <div class="mb-4">
            <label for="secretary-name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="secretary-name" v-model="newSecretary.name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter secretary name" required>
          </div>
          <div class="mb-4">
            <label for="secretary-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="secretary-email" v-model="newSecretary.email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter secretary email" required>
          </div>
          <div class="mb-4">
            <label for="secretary-start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" id="secretary-start-date" v-model="newSecretary.startDate" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="secretary-work" class="block text-sm font-medium text-gray-700">Work Description</label>
            <textarea id="secretary-work" v-model="newSecretary.work" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter work description" rows="3"></textarea>
          </div>
          <div class="mb-4">
            <label for="secretary-today-tasks" class="block text-sm font-medium text-gray-700">Today's Tasks (May 23, 2025)</label>
            <textarea id="secretary-today-tasks" v-model="newSecretary.todayTasks" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter today's tasks" rows="3"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeAddSecretaryModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
              <span v-if="loading">Loading...</span>
              <span v-else>Add</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Edit Secretary Modal -->
    <div v-if="showEditSecretaryModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Edit Secretary</h2>
        <form @submit.prevent="updateSecretary" class="space-y-4">
          <div v-if="secretaryError" class="text-red-600 text-sm">{{ secretaryError }}</div>
          <div class="mb-4">
            <label for="edit-secretary-profile-pic" class="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" id="edit-secretary-profile-pic" @change="handleProfilePicUpload($event, 'editSecretary')" accept="image/*" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <img v-if="editSecretary.profilePic" :src="editSecretary.profilePic" alt="Preview" class="mt-2 w-20 h-20 rounded-full object-cover" />
          </div>
          <div class="mb-4">
            <label for="edit-secretary-name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="edit-secretary-name" v-model="editSecretary.name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-secretary-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="edit-secretary-email" v-model="editSecretary.email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-secretary-start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" id="edit-secretary-start-date" v-model="editSecretary.startDate" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-secretary-work" class="block text-sm font-medium text-gray-700">Work Description</label>
            <textarea id="edit-secretary-work" v-model="editSecretary.work" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter work description" rows="3"></textarea>
          </div>
          <div class="mb-4">
            <label for="edit-secretary-today-tasks" class="block text-sm font-medium text-gray-700">Today's Tasks (May 23, 2025)</label>
            <textarea id="edit-secretary-today-tasks" v-model="editSecretary.todayTasks" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter today's tasks" rows="3"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeEditSecretaryModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
              <span v-if="loading">Loading...</span>
              <span v-else>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Add General Manager Modal -->
    <div v-if="showAddGeneralManagerModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Add General Manager</h2>
        <form @submit.prevent="addGeneralManager" class="space-y-4">
          <div v-if="managerError" class="text-red-600 text-sm">{{ managerError }}</div>
          <div class="mb-4">
            <label for="manager-profile-pic" class="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" id="manager-profile-pic" @change="handleProfilePicUpload($event, 'newGeneralManager')" accept="image/*" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <img v-if="newGeneralManager.profilePic" :src="newGeneralManager.profilePic" alt="Preview" class="mt-2 w-20 h-20 rounded-full object-cover" />
          </div>
          <div class="mb-4">
            <label for="manager-name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="manager-name" v-model="newGeneralManager.name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter manager name" required>
          </div>
          <div class="mb-4">
            <label for="manager-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="manager-email" v-model="newGeneralManager.email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter manager email" required>
          </div>
          <div class="mb-4">
            <label for="manager-start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" id="manager-start-date" v-model="newGeneralManager.startDate" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="manager-work" class="block text-sm font-medium text-gray-700">Work Description</label>
            <textarea id="manager-work" v-model="newGeneralManager.work" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter work description" rows="3"></textarea>
          </div>
          <div class="mb-4">
            <label for="manager-today-tasks" class="block text-sm font-medium text-gray-700">Today's Tasks (May 23, 2025)</label>
            <textarea id="manager-today-tasks" v-model="newGeneralManager.todayTasks" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter today's tasks" rows="3"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeAddGeneralManagerModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
              <span v-if="loading">Loading...</span>
              <span v-else>Add</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Edit General Manager Modal -->
    <div v-if="showEditGeneralManagerModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Edit General Manager</h2>
        <form @submit.prevent="updateGeneralManager" class="space-y-4">
          <div v-if="managerError" class="text-red-600 text-sm">{{ managerError }}</div>
          <div class="mb-4">
            <label for="edit-manager-profile-pic" class="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" id="edit-manager-profile-pic" @change="handleProfilePicUpload($event, 'editGeneralManager')" accept="image/*" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <img v-if="editGeneralManager.profilePic" :src="editGeneralManager.profilePic" alt="Preview" class="mt-2 w-20 h-20 rounded-full object-cover" />
          </div>
          <div class="mb-4">
            <label for="edit-manager-name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="edit-manager-name" v-model="editGeneralManager.name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-manager-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="edit-manager-email" v-model="editGeneralManager.email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-manager-start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" id="edit-manager-start-date" v-model="editGeneralManager.startDate" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-manager-work" class="block text-sm font-medium text-gray-700">Work Description</label>
            <textarea id="edit-manager-work" v-model="editGeneralManager.work" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter work description" rows="3"></textarea>
          </div>
          <div class="mb-4">
            <label for="edit-manager-today-tasks" class="block text-sm font-medium text-gray-700">Today's Tasks (May 23, 2025)</label>
            <textarea id="edit-manager-today-tasks" v-model="editGeneralManager.todayTasks" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter today's tasks" rows="3"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeEditGeneralManagerModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
              <span v-if="loading">Loading...</span>
              <span v-else>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Add Deputy Director-General Modal -->
    <div v-if="showAddDeputyDirectorModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Add Deputy Director-General</h2>
        <form @submit.prevent="addDeputyDirector" class="space-y-4">
          <div v-if="deputyError" class="text-red-600 text-sm">{{ deputyError }}</div>
          <div class="mb-4">
            <label for="deputy-profile-pic" class="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" id="deputy-profile-pic" @change="handleProfilePicUpload($event, 'newDeputyDirector')" accept="image/*" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <img v-if="newDeputyDirector.profilePic" :src="newDeputyDirector.profilePic" alt="Preview" class="mt-2 w-20 h-20 rounded-full object-cover" />
          </div>
          <div class="mb-4">
            <label for="deputy-name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="deputy-name" v-model="newDeputyDirector.name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter deputy director name" required>
          </div>
          <div class="mb-4">
            <label for="deputy-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="deputy-email" v-model="newDeputyDirector.email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter deputy director email" required>
          </div>
          <div class="mb-4">
            <label for="deputy-start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" id="deputy-start-date" v-model="newDeputyDirector.startDate" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="deputy-work" class="block text-sm font-medium text-gray-700">Work Description</label>
            <textarea id="deputy-work" v-model="newDeputyDirector.work" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter work description" rows="3"></textarea>
          </div>
          <div class="mb-4">
            <label for="deputy-today-tasks" class="block text-sm font-medium text-gray-700">Today's Tasks (May 23, 2025)</label>
            <textarea id="deputy-today-tasks" v-model="newDeputyDirector.todayTasks" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter today's tasks" rows="3"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeAddDeputyDirectorModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
              <span v-if="loading">Loading...</span>
              <span v-else>Add</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Edit Deputy Director-General Modal -->
    <div v-if="showEditDeputyDirectorModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-semibold mb-4">Edit Deputy Director-General</h2>
        <form @submit.prevent="updateDeputyDirector" class="space-y-4">
          <div v-if="deputyError" class="text-red-600 text-sm">{{ deputyError }}</div>
          <div class="mb-4">
            <label for="edit-deputy-profile-pic" class="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input type="file" id="edit-deputy-profile-pic" @change="handleProfilePicUpload($event, 'editDeputyDirector')" accept="image/*" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <img v-if="editDeputyDirector.profilePic" :src="editDeputyDirector.profilePic" alt="Preview" class="mt-2 w-20 h-20 rounded-full object-cover" />
          </div>
          <div class="mb-4">
            <label for="edit-deputy-name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="edit-deputy-name" v-model="editDeputyDirector.name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-deputy-email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="edit-deputy-email" v-model="editDeputyDirector.email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-deputy-start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" id="edit-deputy-start-date" v-model="editDeputyDirector.startDate" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
          </div>
          <div class="mb-4">
            <label for="edit-deputy-work" class="block text-sm font-medium text-gray-700">Work Description</label>
            <textarea id="edit-deputy-work" v-model="editDeputyDirector.work" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter work description" rows="3"></textarea>
          </div>
          <div class="mb-4">
            <label for="edit-deputy-today-tasks" class="block text-sm font-medium text-gray-700">Today's Tasks (May 23, 2025)</label>
            <textarea id="edit-deputy-today-tasks" v-model="editDeputyDirector.todayTasks" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter today's tasks" rows="3"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeEditDeputyDirectorModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" :disabled="loading" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300">
              <span v-if="loading">Loading...</span>
              <span v-else>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuperAdminPortal',
  data() {
    return {
      loggedIn: false,
      credentials: {
        username: '',
        password: '',
      },
      activeTab: 'Chairman of Board of Directors',
      tabs: ['Chairman of Board of Directors', 'Secretary', 'General Manager', 'Deputy Director-General'],
      chairmen: [
        {
          id: 1,
          name: 'Chairman One',
          email: 'chairman1@example.com',
          profilePic: 'https://picsum.photos/200?random=1',
          startDate: '2023-01-15',
          work: 'Oversees board meetings, sets strategic direction, approves major financial decisions, and ensures compliance with corporate governance.',
          todayTasks: 'Conduct Q2 strategic review meeting at 6:24 PM, finalize board agenda for next week, review financial reports.',
        },
        {
          id: 2,
          name: 'Chairman Two',
          email: 'chairman2@example.com',
          profilePic: 'https://picsum.photos/200?random=5',
          startDate: '2022-11-10',
          work: 'Guides long-term vision, collaborates with executives on policy-making, represents the board in external engagements.',
          todayTasks: 'Meet with stakeholders at 7:00 PM, approve CSR initiative budget, discuss merger strategy with legal team.',
        },
        {
          id: 3,
          name: 'Chairman Three',
          email: 'chairman3@example.com',
          profilePic: 'https://picsum.photos/200?random=6',
          startDate: '2021-05-22',
          work: 'Leads board evaluations, ensures ethical standards, facilitates conflict resolution among board members.',
          todayTasks: 'Review annual performance reports at 6:50 PM, plan board retreat, sign off on compliance audit.',
        },
      ],
      secretaries: [
        {
          id: 1,
          name: 'Secretary One',
          email: 'secretary1@example.com',
          profilePic: 'https://picsum.photos/200?random=2',
          startDate: '2022-06-01',
          work: 'Manages administrative tasks, records minutes during meetings, coordinates board schedules, and ensures documentation compliance.',
          todayTasks: 'Prepare minutes for the morning board meeting, schedule follow-up with legal team at 5:30 PM, organize files for annual audit.',
        },
        {
          id: 2,
          name: 'Secretary Two',
          email: 'secretary2@example.com',
          profilePic: 'https://picsum.photos/200?random=7',
          startDate: '2023-02-14',
          work: 'Handles correspondence, maintains corporate records, assists with regulatory filings, and supports board communication.',
          todayTasks: 'Draft board meeting agenda for next week at 7:10 PM, file quarterly compliance reports, update meeting calendar.',
        },
        {
          id: 3,
          name: 'Secretary Three',
          email: 'secretary3@example.com',
          profilePic: 'https://picsum.photos/200?random=8',
          startDate: '2021-08-30',
          work: 'Coordinates annual general meetings, ensures legal compliance, manages board documentation, and liaises with external auditors.',
          todayTasks: 'Finalize AGM schedule at 6:55 PM, review legal documents, prepare board presentation slides.',
        },

      ],
      generalManagers: [
        {
          id: 1,
          name: 'General Manager One',
          email: 'gm1@example.com',
          profilePic: 'https://picsum.photos/200?random=3',
          startDate: '2021-09-10',
          work: 'Supervises daily operations, manages department heads, ensures company goals are met, and reports performance metrics to the board.',
          todayTasks: 'Meet with sales team at 5:45 PM to review quarterly targets, approve budget for marketing campaign, assess operational bottlenecks.',
        },
        {
          id: 2,
          name: 'General Manager Two',
          email: 'gm2@example.com',
          profilePic: 'https://picsum.photos/200?random=9',
          startDate: '2022-04-05',
          work: 'Drives operational efficiency, oversees budget allocation, leads cross-departmental projects, and ensures quality standards.',
          todayTasks: 'Conduct operational review at 7:15 PM, finalize Q2 budget plan, meet with production team to address delays.',
        },
        {
          id: 3,
          name: 'General Manager Three',
          email: 'gm3@example.com',
          profilePic: 'https://picsum.photos/200?random=10',
          startDate: '2023-07-18',
          work: 'Manages staff training programs, monitors financial performance, implements strategic goals, and liaises with external partners.',
          todayTasks: 'Review training program feedback at 7:20 PM, approve vendor contracts, discuss expansion plans with finance team.',
        },
  
      ],
      deputyDirectors: [
        {
          id: 1,
          name: 'Deputy Director One',
          email: 'dd1@example.com',
          profilePic: 'https://picsum.photos/200?random=4',
          startDate: '2023-03-20',
          work: 'Assists the Director-General, oversees specific departments like HR and IT, implements strategic initiatives, and monitors project timelines.',
          todayTasks: 'Review IT infrastructure upgrade plan at 6:24 PM, conduct HR policy meeting, prepare report for Director-General.',
        },
        {
          id: 2,
          name: 'Deputy Director Two',
          email: 'dd2@example.com',
          profilePic: 'https://picsum.photos/200?random=11',
          startDate: '2022-09-12',
          work: 'Supports operational strategies, manages finance and marketing departments, ensures policy implementation, and tracks KPIs.',
          todayTasks: 'Analyze marketing campaign results at 7:30 PM, review financial forecasts, schedule team performance review.',
        },
        {
          id: 3,
          name: 'Deputy Director Three',
          email: 'dd3@example.com',
          profilePic: 'https://picsum.photos/200?random=12',
          startDate: '2021-12-01',
          work: 'Oversees R&D and logistics, coordinates with external stakeholders, drives innovation projects, and ensures supply chain efficiency.',
          todayTasks: 'Discuss R&D project updates at 7:40 PM, meet with logistics team to optimize delivery schedules, review innovation proposals.',
        },
       
  
      ],
      showAddChairmanModal: false,
      showEditChairmanModal: false,
      showAddSecretaryModal: false,
      showEditSecretaryModal: false,
      showAddGeneralManagerModal: false,
      showEditGeneralManagerModal: false,
      showAddDeputyDirectorModal: false,
      showEditDeputyDirectorModal: false,
      showDetailDropdown: false,
      selectedPerson: null,
      selectedPersonId: '',
      chairmanError: '',
      secretaryError: '',
      managerError: '',
      deputyError: '',
      newChairman: { name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' },
      editChairman: { id: null, name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' },
      newSecretary: { name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' },
      editSecretary: { id: null, name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' },
      newGeneralManager: { name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' },
      editGeneralManager: { id: null, name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' },
      newDeputyDirector: { name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' },
      editDeputyDirector: { id: null, name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' },
      loading: false,
    };
  },
    methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        if (this.credentials.username === 'superadmin' && this.credentials.password === '1234') {
          this.loggedIn = true;
        } else {
          this.loginError = 'Invalid username or password';
        }
        this.loading = false;
      }, 1000);
    },
    logout() {
      this.loggedIn = false;
      this.credentials = { username: '', password: '' };
    },
    generateId() {
      return Math.floor(Math.random() * 1000000);
    },
    handleProfilePicUpload(event, target) {
      const file = event.target.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          this.chairmanError = 'Please upload a valid image file';
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          this[target].profilePic = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    // Chairman
    openAddChairmanModal() { this.showAddChairmanModal = true; this.chairmanError = ''; },
    closeAddChairmanModal() { this.showAddChairmanModal = false; this.newChairman = { name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' }; this.chairmanError = ''; },
    addChairman() {
      this.loading = true;
      setTimeout(() => {
        if (!this.newChairman.name || !this.newChairman.email || !this.newChairman.startDate) {
          this.chairmanError = 'Name, email, and start date are required';
        } else if (!this.isValidEmail(this.newChairman.email)) {
          this.chairmanError = 'Invalid email format';
        } else {
          this.chairmen.push({
            id: this.generateId(),
            ...this.newChairman,
            profilePic: this.newChairman.profilePic || 'https://picsum.photos/200?random=' + this.generateId()
          });
          this.closeAddChairmanModal();
        }
        this.loading = false;
      }, 1000);
    },
    editChairman(chairman) {
      Object.assign(this.editChairman, chairman);
      this.showEditChairmanModal = true;
      this.chairmanError = '';
    },
    updateChairman() {
      this.loading = true;
      setTimeout(() => {
        if (!this.editChairman.name || !this.editChairman.email || !this.editChairman.startDate) {
          this.chairmanError = 'Name, email, and start date are required';
        } else if (!this.isValidEmail(this.editChairman.email)) {
          this.chairmanError = 'Invalid email format';
        } else {
          const index = this.chairmen.findIndex(c => c.id === this.editChairman.id);
          if (index !== -1) {
            Object.assign(this.chairmen[index], this.editChairman);
            this.closeEditChairmanModal();
          }
        }
        this.loading = false;
      }, 1000);
    },
    closeEditChairmanModal() {
      this.showEditChairmanModal = false;
      this.editChairman = { id: null, name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' };
      this.chairmanError = '';
    },
    deleteChairman(chairmanId) {
      if (confirm('Are you sure you want to delete this chairman?')) {
        this.chairmen = this.chairmen.filter(c => c.id !== chairmanId);
      }
    },

    // Secretary
    openAddSecretaryModal() { this.showAddSecretaryModal = true; this.secretaryError = ''; },
    closeAddSecretaryModal() { this.showAddSecretaryModal = false; this.newSecretary = { name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' }; this.secretaryError = ''; },
    addSecretary() {
      this.loading = true;
      setTimeout(() => {
        if (!this.newSecretary.name || !this.newSecretary.email || !this.newSecretary.startDate) {
          this.secretaryError = 'Name, email, and start date are required';
        } else if (!this.isValidEmail(this.newSecretary.email)) {
          this.secretaryError = 'Invalid email format';
        } else {
          this.secretaries.push({
            id: this.generateId(),
            ...this.newSecretary,
            profilePic: this.newSecretary.profilePic || 'https://picsum.photos/200?random=' + this.generateId()
          });
          this.closeAddSecretaryModal();
        }
        this.loading = false;
      }, 1000);
    },
    editSecretary(secretary) {
      Object.assign(this.editSecretary, secretary);
      this.showEditSecretaryModal = true;
      this.secretaryError = '';
    },
    updateSecretary() {
      this.loading = true;
      setTimeout(() => {
        if (!this.editSecretary.name || !this.editSecretary.email || !this.editSecretary.startDate) {
          this.secretaryError = 'Name, email, and start date are required';
        } else if (!this.isValidEmail(this.editSecretary.email)) {
          this.secretaryError = 'Invalid email format';
        } else {
          const index = this.secretaries.findIndex(s => s.id === this.editSecretary.id);
          if (index !== -1) {
            Object.assign(this.secretaries[index], this.editSecretary);
            this.closeEditSecretaryModal();
          }
        }
        this.loading = false;
      }, 1000);
    },
    closeEditSecretaryModal() {
      this.showEditSecretaryModal = false;
      this.editSecretary = { id: null, name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' };
      this.secretaryError = '';
    },
    deleteSecretary(secretaryId) {
      if (confirm('Are you sure you want to delete this secretary?')) {
        this.secretaries = this.secretaries.filter(s => s.id !== secretaryId);
      }
    },

    // General Manager
    openAddGeneralManagerModal() { this.showAddGeneralManagerModal = true; this.managerError = ''; },
    closeAddGeneralManagerModal() { this.showAddGeneralManagerModal = false; this.newGeneralManager = { name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' }; this.managerError = ''; },
    addGeneralManager() {
      this.loading = true;
      setTimeout(() => {
        if (!this.newGeneralManager.name || !this.newGeneralManager.email || !this.newGeneralManager.startDate) {
          this.managerError = 'Name, email, and start date are required';
        } else if (!this.isValidEmail(this.newGeneralManager.email)) {
          this.managerError = 'Invalid email format';
        } else {
          this.generalManagers.push({
            id: this.generateId(),
            ...this.newGeneralManager,
            profilePic: this.newGeneralManager.profilePic || 'https://picsum.photos/200?random=' + this.generateId()
          });
          this.closeAddGeneralManagerModal();
        }
        this.loading = false;
      }, 1000);
    },
    editGeneralManager(manager) {
      Object.assign(this.editGeneralManager, manager);
      this.showEditGeneralManagerModal = true;
      this.managerError = '';
    },
    updateGeneralManager() {
      this.loading = true;
      setTimeout(() => {
        if (!this.editGeneralManager.name || !this.editGeneralManager.email || !this.editGeneralManager.startDate) {
          this.managerError = 'Name, email, and start date are required';
        } else if (!this.isValidEmail(this.editGeneralManager.email)) {
          this.managerError = 'Invalid email format';
        } else {
          const index = this.generalManagers.findIndex(m => m.id === this.editGeneralManager.id);
          if (index !== -1) {
            Object.assign(this.generalManagers[index], this.editGeneralManager);
            this.closeEditGeneralManagerModal();
          }
        }
        this.loading = false;
      }, 1000);
    },
    closeEditGeneralManagerModal() {
      this.showEditGeneralManagerModal = false;
      this.editGeneralManager = { id: null, name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' };
      this.managerError = '';
    },
    deleteGeneralManager(managerId) {
      if (confirm('Are you sure you want to delete this general manager?')) {
        this.generalManagers = this.generalManagers.filter(m => m.id !== managerId);
      }
    },

    // Deputy Director
    openAddDeputyDirectorModal() { this.showAddDeputyDirectorModal = true; this.deputyError = ''; },
    closeAddDeputyDirectorModal() { this.showAddDeputyDirectorModal = false; this.newDeputyDirector = { name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' }; this.deputyError = ''; },
    addDeputyDirector() {
      this.loading = true;
      setTimeout(() => {
        if (!this.newDeputyDirector.name || !this.newDeputyDirector.email || !this.newDeputyDirector.startDate) {
          this.deputyError = 'Name, email, and start date are required';
        } else if (!this.isValidEmail(this.newDeputyDirector.email)) {
          this.deputyError = 'Invalid email format';
        } else {
          this.deputyDirectors.push({
            id: this.generateId(),
            ...this.newDeputyDirector,
            profilePic: this.newDeputyDirector.profilePic || 'https://picsum.photos/200?random=' + this.generateId()
          });
          this.closeAddDeputyDirectorModal();
        }
        this.loading = false;
      }, 1000);
    },
    editDeputyDirector(deputy) {
      Object.assign(this.editDeputyDirector, deputy);
      this.showEditDeputyDirectorModal = true;
      this.deputyError = '';
    },
    updateDeputyDirector() {
      this.loading = true;
      setTimeout(() => {
        if (!this.editDeputyDirector.name || !this.editDeputyDirector.email || !this.editDeputyDirector.startDate) {
          this.deputyError = 'Name, email, and start date are required';
        } else if (!this.isValidEmail(this.editDeputyDirector.email)) {
          this.deputyError = 'Invalid email format';
        } else {
          const index = this.deputyDirectors.findIndex(d => d.id === this.editDeputyDirector.id);
          if (index !== -1) {
            Object.assign(this.deputyDirectors[index], this.editDeputyDirector);
            this.closeEditDeputyDirectorModal();
          }
        }
        this.loading = false;
      }, 1000);
    },
    closeEditDeputyDirectorModal() {
      this.showEditDeputyDirectorModal = false;
      this.editDeputyDirector = { id: null, name: '', email: '', profilePic: '', startDate: '', work: '', todayTasks: '' };
      this.deputyError = '';
    },
    deleteDeputyDirector(deputyId) {
      if (confirm('Are you sure you want to delete this deputy director?')) {
        this.deputyDirectors = this.deputyDirectors.filter(d => d.id !== deputyId);
      }
    },

    // Utility
    toggleDetailDropdown(person) {
      this.selectedPerson = { ...person, role: this.activeTab === 'Chairman of Board of Directors' ? 'chairman' : this.activeTab === 'Secretary' ? 'secretary' : this.activeTab === 'General Manager' ? 'manager' : 'deputy' };
      this.selectedPersonId = `${this.selectedPerson.role}-${this.selectedPerson.id}`;
      this.showDetailDropdown = !this.showDetailDropdown;
      if (!this.showDetailDropdown) this.selectedPerson = null;
    },
    updateSelectedPerson() {
      const [role, id] = this.selectedPersonId.split('-');
      const people = {
        chairman: this.chairmen,
        secretary: this.secretaries,
        manager: this.generalManagers,
        deputy: this.deputyDirectors,
      };
      this.selectedPerson = people[role].find(p => p.id === parseInt(id)) || null;
      this.showDetailDropdown = !!this.selectedPerson;
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  },
};
</script>

<style scoped>
/* [Previous styles remain unchanged] */
</style>