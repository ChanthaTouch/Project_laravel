<template>
  <div class="p-6 bg-white dark:bg-gray-900 from-indigo-50 to-blue-100 min-h-screen" :class="{ 'dark text-gray-600-dark': store.semidark }">
   <!-- filepath: StaffList.vue -->
    <div class="bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-gray-600">Employee Profile List</h1>
      <button
        @click="openAddUserModal"
        class="bg-gray-600 text-gray-400 px-5 py-2 rounded-md hover:bg-gray-700 transition-all duration-300"
      >
        Add Staff
      </button>
    </div>
   
    <div class="p-4 sm:p-6 rounded shadow-lg  bg-white dark:bg-gray-900">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-2 sm:gap-y-0 mb-2 sm:mb-4">
        <!-- Staff Summary -->
        <div class="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 text-xs sm:text-sm">
          <span class="text-gray-600 font-bold whitespace-nowrap">Active Staffs: {{ activeStaffCount }}</span>
          <span class="text-gray-600 font-bold whitespace-nowrap">Inactive Staffs: {{ inactiveStaffCount }}</span>
          <span class="bg-white dark:bg-gray-900 text-gray-500 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs">FDC Alert in 60 days: {{ fdcAlert60 }}</span>
          <span class="bg-white dark:bg-gray-900 text-gray-500 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs">FDC Alert in 30 days: {{ fdcAlert30 }}</span>
          <span class="bg-white dark:bg-gray-900 text-gray-500 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs">Probation Alert in 30 days: {{ probationAlert }}</span>
          <div class="flex gap-2 mb-4">
          <button
            @click="exportExcel"
            class="h-10 px-4 py-2 bg-gray-200 dark:bg-gray-800  rounded  flex items-center transition duration-300"
          >
            <i class="fas fa-file-excel mr-2"></i> Excel
          </button>
          <button
            @click="exportPDF"
            class="h-10 px-4 py-2 bg-gray-200 dark:bg-gray-800  rounded flex items-center transition duration-300"
          >
            <i class="fas fa-file-pdf mr-2"></i> PDF
          </button>
        </div>
        </div>
        <!-- Search and Filter -->
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-x-2 w-full sm:w-auto">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search by ID & Name"
            class="px-3 py-1.5 sm:px-4 sm:py-2 border bg-gray-200 dark:bg-gray-800  rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 text-xs sm:text-sm w-full"
          />
          <select
            v-model="selectedDepartment"
            class="px-3  py-1.5 sm:px-4 sm:py-2 border bg-gray-200 dark:bg-gray-800  rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 text-xs sm:text-sm w-full"
          >
            <option value="">-- Select Department --</option>
            <option value="Project Department">Project Department</option>
            <option value="Technical Department">Technical Department</option>
          </select>
        </div>
      </div>

      <!-- Staff List Table with Dropdown -->
      <div class="overflow-x-auto bg-white dark:bg-gray-900">
        <table class="w-full border-collapse rounded-lg overflow-hidden">
           
          <thead>
            <tr class=" text-xs sm:text-sm font-bold">
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">#</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Staff ID</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Name Khmer</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Name Latin</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Position</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Gender</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">Department</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden lg:table-cell">Division</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">Contract Type</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Status</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden sm:table-cell">Photo</th>
              <th class="px-2 text-gray-600 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden lg:table-cell">Signature</th>
              <th class="px-2 text-gray-600 py-2 text-center text-xs sm:px-4 sm:py-3 sm:text-sm">Option</th>
            </tr>
          </thead>
         
          <tbody>
            <!-- Mobile Card Layout -->
            <template v-for="(staff, index) in filteredStaff" :key="staff.staffId">
              <tr
                class=" transition duration-150 md:hidden"
                :class="{
                  'bg-white': index % 2 === 0 && staff.status === 'Active',
                  'bg-gray-50': index % 2 !== 0 && staff.status === 'Active',
                  'bg-gray-200 text-gray-800': staff.status === 'Resigned'
                }"
              >
                <td colspan="13" class="p-4">
                  <div class="flex flex-col space-y-2 p-3 bg-white rounded-lg shadow-sm border border-gray-600">
                    <div class="flex justify-between">
                      <span class="font-semibold text-gray-700">#{{ index + 1 }}</span>
                      <span class="text-gray-800">{{ staff.staffId }}</span>
                    </div>
                    <div>
                      <span class="font-medium text-gray-600">Name:</span>
                      <span>{{ staff.firstNameKh }} {{ staff.lastNameKh }} ({{ staff.firstNameLatin }} {{ staff.lastNameLatin }})</span>
                    </div>
                    <div>
                      <span class="font-medium text-gray-600">Position:</span>
                      <span>{{ staff.position }}</span>
                    </div>
                    <div>
                      <span class="font-medium text-gray-600">Gender:</span>
                      <span>{{ staff.gender }}</span>
                    </div>
                    <div class="hidden md:block">
                      <span class="font-medium text-gray-600">Department:</span>
                      <span>{{ staff.department }}</span>
                    </div>
                    <div class="hidden lg:block">
                      <span class="font-medium text-gray-600">Division:</span>
                      <span>{{ staff.division }}</span>
                    </div>
                    <div class="hidden md:block">
                      <span class="font-medium text-gray-600">Contract Type:</span>
                      <span>{{ staff.contractType }}</span>
                    </div>
                    <div>
                      <span class="font-medium text-gray-600">Status:</span>
                      <span
                        :class="{
                          'inline-block text-lg': true,
                          'text-gray-700': staff.status === 'Active',
                          'text-gray-600': staff.status === 'Resigned'
                        }"
                        :title="staff.status"
                      >
                        <i :class="staff.status === 'Active' ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                      </span>
                    </div>
                    <div class="hidden sm:block">
                      <span class="font-medium text-gray-600">Photo:</span>
                      <img
                        :src="staff.photo"
                        alt="Photo"
                        class="w-10 h-10 rounded-full object-cover border-4 border-gray-500 inline-block"
                      />
                    </div>
                    <div class="hidden lg:block">
                      <span class="font-medium text-gray-600">Signature:</span>
                      <span>{{ staff.signature || 'Signature' }}</span>
                    </div>
                    <div class="flex justify-center space-x-2">
                      <button @click="editStaffMember(staff)" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        @click="viewStaffDetails(staff)"
                        @dblclick="closeStaffDetails(staff)"
                        title="View Details"
                        class="text-gray-700 hover:text-gray-900 p-1"
                      >
                        <i class="fas fa-eye text-lg"></i>
                      </button>
                      <button @click="deleteStaff(staff.staffId)" title="Delete Staff" class="text-gray-600 hover:text-gray-800 p-1">
                        <i class="fas fa-trash-alt text-lg"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <!-- Desktop Table Layout -->
              <tr
                class=" transition duration-150 hidden md:table-row bg-white dark:bg-gray-900"
                :class="{
                  'bg-white': index % 2 === 0 && staff.status === 'Active',
                  'bg-gray-50': index % 2 !== 0 && staff.status === 'Active',
                  'bg-gray-200 text-gray-800': staff.status === 'Resigned'
                }"
              >
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm">{{ index + 1 }}</td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm">{{ staff.staffId }}</td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm">{{ staff.firstNameKh }} {{ staff.lastNameKh }}</td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm">{{ staff.firstNameLatin }} {{ staff.lastNameLatin }}</td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm">{{ staff.position }}</td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm">{{ staff.gender }}</td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm hidden md:table-cell">{{ staff.department }}</td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm hidden lg:table-cell">{{ staff.division }}</td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm hidden md:table-cell">{{ staff.contractType }}</td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-center">
                  <span
                    :class="{
                      'inline-block text-lg': true,
                      'text-gray-700': staff.status === 'Active',
                      'text-gray-600': staff.status === 'Resigned'
                    }"
                    :title="staff.status"
                  >
                    <i :class="staff.status === 'Active' ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                  </span>
                </td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm hidden sm:table-cell">
                  <div class="relative inline-block">
                    <img
                      :src="staff.photo"
                      alt="Photo"
                      class="w-8 h-8 rounded-full object-cover border-4 border-gray-500 sm:w-10 sm:h-10"
                    />
                  </div>
                </td>
                <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm hidden lg:table-cell">{{ staff.signature || 'Signature' }}</td>
                <td class="px-2 py-2 text-center text-xs sm:px-4 sm:py-4 sm:text-sm">
                  <div class="flex justify-center space-x-2">
                    <button @click="editStaffMember(staff)" class="text-gray-500 hover:text-gray-700">
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      @click="viewStaffDetails(staff)"
                      @dblclick="closeStaffDetails(staff)"
                      title="View Details"
                      class="text-gray-700 hover:text-gray-900 p-1"
                    >
                      <i class="fas fa-eye text-lg"></i>
                    </button>
                    <button @click="deleteStaff(staff.staffId)" title="Delete Staff" class="text-gray-600 hover:text-gray-800 p-1">
                      <i class="fas fa-trash-alt text-lg"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <!-- Edit Profile Staff Modal -->
              <div v-if="showEditStaffModal" class="edit-profile-modal fixed inset-0 bg-gray-800 bg-opacity-50 flex items-start justify-center z-50 overflow-y-auto">
                <div class="bg-white dark:bg-gray-900 shadow-xl w-full max-w-screen h-screen overflow-y-auto scrollbar-hide hide-scrollbar">
                  <div class="sticky top-0 bg-white dark:bg-gray-900 z-10  border-gray-600 p-4 sm:p-6">

                      <div class="bg-gray-900 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
                          <h2 class="text-xl font-bold text-gray-600">
                              <i class="fas fa-user-edit text-gray-400 mr-2"></i>
                              Edit Employee Profile
                          </h2>
                          <button @click="closeEditStaffModal" class="text-gray-500 hover:text-gray-300 text-lg sm:text-xl">
                            <i class="fas fa-times"></i>
                          </button>
                       </div>

                    <!-- Main Tab Navigation -->
                    <div class="flex flex-col sm:flex-row sm:overflow-x-auto  border-gray-600 mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
                      <button
                        v-for="tab in mainTabs"
                        :key="tab.id"
                        @click="activeMainTab = tab.id"
                        :class="[
                          'px-3 py-2 text-xs sm:text-sm font-medium w-full sm:w-auto text-left sm:text-center rounded-lg transition-all duration-200',
                          activeMainTab === tab.id ? 'bg-gray-300 text-gray-600 shadow-md' : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                        ]"
                      >
                        <i :class="tab.icon" class="mr-2"></i>
                        {{ tab.label }}
                      </button>
                    </div>
                  </div>

                  <!-- Form Content -->
                  <form @submit.prevent="updateStaff" class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div v-if="staffError" class="text-gray-600 text-xs sm:text-sm bg-gray-200 p-2 sm:p-3 rounded-lg">{{ staffError }}</div>

                    <!-- Basic Info Section -->
                    <div v-if="activeMainTab === 'basic-info'" class="space-y-4 sm:space-y-6">
                      <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                        <i class="fas fa-user text-gray-600 mr-2"></i>
                        Basic Information
                      </h3>
                      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        <div>
                          <label for="edit-staff-id" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-id-card text-gray-600 mr-2"></i>
                            Staff ID
                          </label>
                          <input
                            type="text"
                            id="edit-staff-id"
                            v-model="editStaff.staffId"
                            placeholder="e.g. S0867"
                           class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            required
                            readonly
                          />
                        </div>
                        <div>
                          <label for="edit-first-name-kh" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                            First Name (Khmer)
                          </label>
                          <input
                            type="text"
                            id="edit-first-name-kh"
                            v-model="editStaff.firstNameKh"
                            placeholder="e.g. Khmer"
                            class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label for="edit-last-name-kh" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                            Last Name (Khmer)
                          </label>
                          <input
                            type="text"
                            id="edit-last-name-kh"
                            v-model="editStaff.lastNameKh"
                            placeholder="e.g. Khmer"
                            class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label for="edit-first-name-latin" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                            First Name (Latin)
                          </label>
                          <input
                            type="text"
                            id="edit-first-name-latin"
                            v-model="editStaff.firstNameLatin"
                            placeholder="e.g. LEN"
                            class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label for="edit-last-name-latin" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                            Last Name (Latin)
                          </label>
                          <input
                            type="text"
                            id="edit-last-name-latin"
                            v-model="editStaff.lastNameLatin"
                            placeholder="e.g. Ros"
                            class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label for="edit-position" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-briefcase text-gray-600 mr-2"></i>
                            Position
                          </label>
                          <input
                            type="text"
                            id="edit-position"
                            v-model="editStaff.position"
                            placeholder="e.g. Project Manager"
                            class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label for="edit-gender" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-venus-mars text-gray-600 mr-2"></i>
                            Gender
                          </label>
                          <select id="edit-gender" v-model="editStaff.gender" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div>
                          <label for="edit-department" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-building text-gray-600 mr-2"></i>
                            Department
                          </label>
                          <select id="edit-department" v-model="editStaff.department" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required>
                            <option value="">-- Select Department --</option>
                            <option value="Project Department">Project Department</option>
                            <option value="Technical Department">Technical Department</option>
                            <option value="Creative Department">Creative Department</option>
                            <option value="Analytics Department">Analytics Department</option>
                            <option value="Management Department">Management Department</option>
                            <option value="Engineering Department">Engineering Department</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Finance Department">Finance Department</option>
                            <option value="Marketing Department">Marketing Department</option>
                            <option value="Sales Department">Sales Department</option>
                            <option value="Support Department">Support Department</option>
                          </select>
                        </div>
                        <div>
                          <label for="edit-division" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-sitemap text-gray-600 mr-2"></i>
                            Division
                          </label>
                          <input
                            type="text"
                            id="edit-division"
                            v-model="editStaff.division"
                            placeholder="e.g. Management"
                            class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label for="edit-contract-type" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-file-contract text-gray-600 mr-2"></i>
                            Contract Type
                          </label>
                          <select id="edit-contract-type" v-model="editStaff.contractType" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required>
                            <option value="">Select Contract Type</option>
                            <option value="Project Base Contract (PB)">Project Base Contract (PB)</option>
                            <option value="Internship Contract">Internship Contract</option>
                          </select>
                        </div>
                        <div>
                          <label for="edit-status" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-toggle-on text-gray-600 mr-2"></i>
                            Status
                          </label>
                          <select id="edit-status" v-model="editStaff.status" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required>
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Resigned">Resigned</option>
                          </select>
                        </div>
                        <div>
                          <label for="edit-contract-end-date" class="form-label text-xs sm:text-sm flex items-center">
                            <i class="fas fa-calendar-times text-gray-600 mr-2"></i>
                            Contract End Date
                          </label>
                          <input
                            type="date"
                            id="edit-contract-end-date"
                            v-model="editStaff.contractEndDate"
                            class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Contract Info Section -->
                    <div v-if="activeMainTab === 'contract-info'" class="space-y-4 sm:space-y-6">
                      <div class="flex flex-col sm:flex-row sm:overflow-x-auto  border-gray-600 space-y-2 sm:space-y-0 sm:space-x-2">
                        <button
                          v-for="tab in contractInfoTabs"
                          :key="tab.id"
                          @click="activeContractInfoTab = tab.id"
                          :class="[
                            'px-3 py-2 text-xs sm:text-sm font-medium w-full sm:w-auto text-left sm:text-center rounded-lg transition-all duration-200',
                            activeContractInfoTab === tab.id ? 'bg-gray-400 text-gray-600 shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                          ]"
                        >
                          <i :class="tab.icon" class="mr-2"></i>
                          {{ tab.label }}
                        </button>
                      </div>
                      <div v-if="activeContractInfoTab === 'contract-employee'" class="space-y-3 sm:space-y-4">
                        <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                          <i class="fas fa-file-signature text-gray-600 mr-2"></i>
                          Contract Employee
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          <div>
                            <label for="edit-contract-id" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-id-card text-gray-600 mr-2"></i>
                              Contract ID
                            </label>
                            <input
                              type="text"
                              id="edit-contract-id"
                              v-model="editStaff.contractId"
                              placeholder="e.g. C12345"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-contract-terms" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-file-alt text-gray-600 mr-2"></i>
                              Contract Terms
                            </label>
                            <textarea
                              id="edit-contract-terms"
                              v-model="editStaff.contractTerms"
                              placeholder="e.g. Full-time, 2-year contract"
                              class="form-input text-xs sm:text-sm w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 resize-y"
                              rows="3 sm:rows-4"
                            ></textarea>
                          </div>
                          <div>
                            <label for="edit-contract-start-date" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-calendar-alt text-gray-600 mr-2"></i>
                              Start Date
                            </label>
                            <input
                              type="date"
                              id="edit-contract-start-date"
                              v-model="editStaff.contractStartDate"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                      <div v-if="activeContractInfoTab === 'contract-details'" class="space-y-3 sm:space-y-4">
                        <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                          <i class="fas fa-file-alt text-gray-600 mr-2"></i>
                          Contract Details
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div>
                            <label for="edit-salary" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-dollar-sign text-gray-600 mr-2"></i>
                              Salary
                            </label>
                            <input
                              type="number"
                              id="edit-salary"
                              v-model="editStaff.salary"
                              placeholder="e.g. 1000"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-benefits" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-gift text-gray-600 mr-2"></i>
                              Benefits
                            </label>
                            <textarea
                              id="edit-benefits"
                              v-model="editStaff.benefits"
                              placeholder="e.g. Health insurance, annual leave"
                              class="form-input text-xs sm:text-sm w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 resize-y"
                              rows="3 sm:rows-4"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div v-if="activeContractInfoTab === 'termination-extension'" class="space-y-3 sm:space-y-4">
                        <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                          <i class="fas fa-file-excel text-gray-600 mr-2"></i>
                          Termination/Extension
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          <div>
                            <label for="edit-termination-date" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-calendar-times text-gray-600 mr-2"></i>
                              Termination Date
                            </label>
                            <input
                              type="date"
                              id="edit-termination-date"
                              v-model="editStaff.terminationDate"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-termination-reason" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-comment text-gray-600 mr-2"></i>
                              Reason for Termination
                            </label>
                            <textarea
                              id="edit-termination-reason"
                              v-model="editStaff.terminationReason"
                              placeholder="e.g. End of contract"
                              class="form-input text-xs sm:text-sm w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 resize-y"
                              rows="3 sm:rows-4"
                            ></textarea>
                          </div>
                          <div>
                            <label for="edit-extension-date" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-calendar-plus text-gray-600 mr-2"></i>
                              Extension Date
                            </label>
                            <input
                              type="date"
                              id="edit-extension-date"
                              v-model="editStaff.extensionDate"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Family Info Section -->
                    <div v-if="activeMainTab === 'family-info'" class="space-y-4 sm:space-y-6">
                      <div class="flex flex-col sm:flex-row sm:overflow-x-auto  border-gray-600 space-y-2 sm:space-y-0 sm:space-x-2">
                        <button
                          v-for="tab in familyInfoTabs"
                          :key="tab.id"
                          @click="activeFamilyInfoTab = tab.id"
                          :class="[
                            'px-3 py-2 text-xs sm:text-sm font-medium w-full sm:w-auto text-left sm:text-center rounded-lg transition-all duration-200',
                            activeFamilyInfoTab === tab.id ? 'bg-gray-400 text-gray-600 shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                          ]"
                        >
                          <i :class="tab.icon" class="mr-2"></i>
                          {{ tab.label }}
                        </button>
                      </div>
                      <div v-if="activeFamilyInfoTab === 'family-book-detail'" class="space-y-3 sm:space-y-4">
                        <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                          <i class="fas fa-book text-gray-600 mr-2"></i>
                          Family Book Detail
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          <div>
                            <label for="edit-family-book-number" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-book-open text-gray-600 mr-2"></i>
                              Family Book Number
                            </label>
                            <input
                              type="text"
                              id="edit-family-book-number"
                              v-model="editStaff.familyBookNumber"
                              placeholder="e.g. FB123456"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-family-book-issued-date" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-calendar-alt text-gray-600 mr-2"></i>
                              Issued Date
                            </label>
                            <input
                              type="date"
                              id="edit-family-book-issued-date"
                              v-model="editStaff.familyBookIssuedDate"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-family-book-issued-place" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-map-marker-alt text-gray-600 mr-2"></i>
                              Issued Place
                            </label>
                            <input
                              type="text"
                              id="edit-family-book-issued-place"
                              v-model="editStaff.familyBookIssuedPlace"
                              placeholder="e.g. Phnom Penh"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Education Info Section -->
                    <div v-if="activeMainTab === 'education-info'" class="space-y-4 sm:space-y-6">
                      <div class="flex flex-col sm:flex-row sm:overflow-x-auto  border-gray-600 space-y-2 sm:space-y-0 sm:space-x-2">
                        <button
                          v-for="tab in educationInfoTabs"
                          :key="tab.id"
                          @click="activeEducationInfoTab = tab.id"
                          :class="[
                            'px-3 py-2 text-xs sm:text-sm font-medium w-full sm:w-auto text-left sm:text-center rounded-lg transition-all duration-200',
                            activeEducationInfoTab === tab.id ? 'bg-gray-400 text-gray-600 shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                          ]"
                        >
                          <i :class="tab.icon" class="mr-2"></i>
                          {{ tab.label }}
                        </button>
                      </div>
                      <div v-if="activeEducationInfoTab === 'academic-training'" class="space-y-3 sm:space-y-4">
                        <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                          <i class="fas fa-graduation-cap text-gray-600 mr-2"></i>
                          Academic Training
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          <div>
                            <label for="edit-degree" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-certificate text-gray-600 mr-2"></i>
                              Degree
                            </label>
                            <input
                              type="text"
                              id="edit-degree"
                              v-model="editStaff.degree"
                              placeholder="e.g. Bachelor of Science"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-institution" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-university text-gray-600 mr-2"></i>
                              Institution
                            </label>
                            <input
                              type="text"
                              id="edit-institution"
                              v-model="editStaff.institution"
                              placeholder="e.g. Royal University of Phnom Penh"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-graduation-year" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-calendar-check text-gray-600 mr-2"></i>
                              Graduation Year
                            </label>
                            <input
                              type="number"
                              id="edit-graduation-year"
                              v-model="editStaff.graduationYear"
                              placeholder="e.g. 2020"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Career History Info Section -->
                    <div v-if="activeMainTab === 'career-history-info'" class="space-y-4 sm:space-y-6">
                      <div class="flex flex-col sm:flex-row sm:overflow-x-auto  border-gray-600 space-y-2 sm:space-y-0 sm:space-x-2">
                        <button
                          v-for="tab in careerHistoryInfoTabs"
                          :key="tab.id"
                          @click="activeCareerHistoryInfoTab = tab.id"
                          :class="[
                            'px-3 py-2 text-xs sm:text-sm font-medium w-full sm:w-auto text-left sm:text-center rounded-lg transition-all duration-200',
                            activeCareerHistoryInfoTab === tab.id ? 'bg-gray-400 text-gray-600 shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                          ]"
                        >
                          <i :class="tab.icon" class="mr-2"></i>
                          {{ tab.label }}
                        </button>
                      </div>
                      <div v-if="activeCareerHistoryInfoTab === 'previous-employment'" class="space-y-3 sm:space-y-4">
                        <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                          <i class="fas fa-briefcase text-gray-600 mr-2"></i>
                          Previous Employment
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          <div>
                            <label for="edit-previous-company" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-building text-gray-600 mr-2"></i>
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="edit-previous-company"
                              v-model="editStaff.previousCompany"
                              placeholder="e.g. ABC Corp"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-previous-role" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                              Role
                            </label>
                            <input
                              type="text"
                              id="edit-previous-role"
                              v-model="editStaff.previousRole"
                              placeholder="e.g. Software Engineer"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-previous-start-date" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-calendar-alt text-gray-600 mr-2"></i>
                              Start Date
                            </label>
                            <input
                              type="date"
                              id="edit-previous-start-date"
                              v-model="editStaff.previousStartDate"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Career Info Section -->
                    <div v-if="activeMainTab === 'career-info'" class="space-y-4 sm:space-y-6">
                      <div class="flex flex-col sm:flex-row sm:overflow-x-auto  border-gray-600 space-y-2 sm:space-y-0 sm:space-x-2">
                        <button
                          v-for="tab in careerInfoTabs"
                          :key="tab.id"
                          @click="activeCareerInfoTab = tab.id"
                          :class="[
                            'px-3 py-2 text-xs sm:text-sm font-medium w-full sm:w-auto text-left sm:text-center rounded-lg transition-all duration-200',
                            activeCareerInfoTab === tab.id ? 'bg-gray-400 text-gray-600 shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                          ]"
                        >
                          <i :class="tab.icon" class="mr-2"></i>
                          {{ tab.label }}
                        </button>
                      </div>
                      <div v-if="activeCareerInfoTab === 'current-employment'" class="space-y-3 sm:space-y-4">
                        <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                          <i class="fas fa-briefcase text-gray-600 mr-2"></i>
                          Current Employment
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          <div>
                            <label for="edit-current-position" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                              Current Position
                            </label>
                            <input
                              type="text"
                              id="edit-current-position"
                              v-model="editStaff.currentPosition"
                              placeholder="e.g. Project Manager"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-current-department" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-building text-gray-600 mr-2"></i>
                              Department
                            </label>
                            <input
                              type="text"
                              id="edit-current-department"
                              v-model="editStaff.currentDepartment"
                              placeholder="e.g. Project Department"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label for="edit-current-start-date" class="form-label text-xs sm:text-sm flex items-center">
                              <i class="fas fa-calendar-alt text-gray-600 mr-2"></i>
                              Start Date
                            </label>
                            <input
                              type="date"
                              id="edit-current-start-date"
                              v-model="editStaff.currentStartDate"
                              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Form Footer -->
                    <div class="sticky bottom-0 bg-white dark:bg-gray-900 p-4 sm:p-6">
                      <div class="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                        <button type="button" @click="closeEditStaffModal" class="bg-gray-300 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-400 text-xs sm:text-sm w-full sm:w-auto transition-all duration-200">
                          Cancel
                        </button>
                        <button type="submit" :disabled="loading" class="bg-gray-300 text-gray-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-700 disabled:bg-gray-400 text-xs sm:text-sm w-full sm:w-auto transition-all duration-200">
                          <span v-if="loading">Saving...</span>
                          <span v-else>Save</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- Dropdown Table for Staff Details -->
              <tr v-if="selectedStaff && selectedStaff.staffId === staff.staffId" class="bg-white dark:bg-gray-900">
                <td colspan="13" class="p-2 sm:p-4">
                  <div class="border border-gray-600 rounded-lg shadow-sm">
                    <table class="w-full border-collapse">
                      <thead>
                        <tr class="bg-gray-600 text-gray-600">
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm">Staff ID</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm">Name (Khmer)</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm">Name (Latin)</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm">Position</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm">Gender</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm hidden md:table-cell">Department</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm hidden lg:table-cell">Division</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm hidden md:table-cell">Contract Type</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm">Status</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm hidden sm:table-cell">Contract End Date</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm hidden md:table-cell">Date of Birth</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm hidden lg:table-cell">Nationality (English)</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm hidden lg:table-cell">Nationality (Khmer)</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm hidden md:table-cell">Current Address</th>
                          <th class="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm hidden lg:table-cell">Last Viewed</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- Mobile Card for Dropdown -->
                        <tr class="md:hidden">
                          <td colspan="15" class="p-2 sm:p-4">
                            <div class="flex flex-col space-y-2 p-3 bg-white dark:bg-gray-900 rounded-lg">
                              <div><span class="font-medium text-gray-600">Staff ID:</span> {{ staff.staffId }}</div>
                              <div><span class="font-medium text-gray-600">Name (Khmer):</span> {{ staff.firstNameKh }} {{ staff.lastNameKh }}</div>
                              <div><span class="font-medium text-gray-600">Name (Latin):</span> {{ staff.firstNameLatin }} {{ staff.lastNameLatin }}</div>
                              <div><span class="font-medium text-gray-600">Position:</span> {{ staff.position }}</div>
                              <div><span class="font-medium text-gray-600">Gender:</span> {{ staff.gender }}</div>
                              <div class="hidden md:block"><span class="font-medium text-gray-600">Department:</span> {{ staff.department }}</div>
                              <div class="hidden lg:block"><span class="font-medium text-gray-600">Division:</span> {{ staff.division }}</div>
                              <div class="hidden md:block"><span class="font-medium text-gray-600">Contract Type:</span> {{ staff.contractType }}</div>
                              <div><span class="font-medium text-gray-600">Status:</span> {{ staff.status }}</div>
                              <div class="hidden sm:block"><span class="font-medium text-gray-600">Contract End Date:</span> {{ staff.contractEndDate }}</div>
                              <div class="hidden md:block"><span class="font-medium text-gray-600">Date of Birth:</span> {{ staff.dateOfBirth || 'N/A' }}</div>
                              <div class="hidden lg:block"><span class="font-medium text-gray-600">Nationality (Eng):</span> {{ staff.nationalityEng || 'N/A' }}</div>
                              <div class="hidden lg:block"><span class="font-medium text-gray-600">Nationality (Kh):</span> {{ staff.nationalityKh || 'N/A' }}</div>
                              <div class="hidden md:block">
                                <span class="font-medium text-gray-600">Address:</span>
                                {{ staff.currentAddress ? `${staff.currentAddress.house}, ${staff.currentAddress.street}, ${staff.currentAddress.village}, ${staff.currentAddress.commune}, ${staff.currentAddress.district}, ${staff.currentAddress.provinceCity}, ${staff.currentAddress.country}` : 'N/A' }}
                              </div>
                              <div class="hidden lg:block"><span class="font-medium text-gray-600">Last Viewed:</span> 01:12 PM +07 on Tuesday, June 03, 2025</div>
                            </div>
                          </td>
                        </tr>
                        <!-- Desktop Table for Dropdown -->
                        <tr class="hidden md:table-row bg-white hover:bg-white dark:bg-gray-900 transition duration-150">
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600">{{ staff.staffId }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600">{{ staff.firstNameKh }} {{ staff.lastNameKh }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600">{{ staff.firstNameLatin }} {{ staff.lastNameLatin }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600">{{ staff.position }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600">{{ staff.gender }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600 hidden md:table-cell">{{ staff.department }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600 hidden lg:table-cell">{{ staff.division }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600 hidden md:table-cell">{{ staff.contractType }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600">{{ staff.status }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600 hidden sm:table-cell">{{ staff.contractEndDate }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600 hidden md:table-cell">{{ staff.dateOfBirth || 'N/A' }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600 hidden lg:table-cell">{{ staff.nationalityEng || 'N/A' }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600 hidden lg:table-cell">{{ staff.nationalityKh || 'N/A' }}</td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600 hidden md:table-cell">
                            {{ staff.currentAddress ? `${staff.currentAddress.house}, ${staff.currentAddress.street}, ${staff.currentAddress.village}, ${staff.currentAddress.commune}, ${staff.currentAddress.district}, ${staff.currentAddress.provinceCity}, ${staff.currentAddress.country}` : 'N/A' }}
                          </td>
                          <td class="px-2 py-2 text-xs sm:px-4 sm:py-4 sm:text-sm text-gray-600 hidden lg:table-cell">01:12 PM +07 on Tuesday, June 03, 2025</td>
                        </tr>
                        <!-- Sub-Table for Contract Employee Records -->
                        <tr class="bg-white dark:bg-gray-900">
                          <td colspan="15" class="p-2 sm:p-4">
                            <h3 class="text-lg font-medium text-gray-600 mb-4">Contract Details</h3>
                            <div class="border border-gray-600 rounded-lg shadow-sm">
                              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                                <thead>
                                  <tr class="bg-white dark:bg-gray-900">
                                    <th class="py-2 px-4 ">#</th>
                                    <th class="py-2 px-4 ">Staff ID</th>
                                    <th class="py-2 px-4 ">Employee Name</th>
                                    <th class="py-2 px-4 ">Contract Type</th>
                                    <th class="py-2 px-4 ">Department</th>
                                    <th class="py-2 px-4 ">Start Date</th>
                                    <th class="py-2 px-4 ">End Date</th>
                                    <th class="py-2 px-4 ">Option</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(record, index) in contractEmployeeRecords" :key="index" class="hover:bg-gray-50">
                                    <td class="py-2 px-4  text-center">{{ index + 1 }}</td>
                                    <td class="py-2 px-4 ">{{ record.staffId }}</td>
                                    <td class="py-2 px-4 ">{{ record.employeeName }}</td>
                                    <td class="py-2 px-4 ">{{ record.contractType }}</td>
                                    <td class="py-2 px-4 ">{{ record.department }}</td>
                                    <td class="py-2 px-4 ">{{ record.startDate }}</td>
                                    <td class="py-2 px-4 ">{{ record.endDate }}</td>
                                    <td class="py-2 px-4 ">Option</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="relative">
      <!-- Add Staff Modal -->
       <!-- =============updated add new staff modal ========= -->
      <div v-if="showAddStaffModal" class="fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-100 flex items-start justify-center z-50">
        <div class="add-staff-modal bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg shadow-xl w-full max-w-screen h-screen overflow-y-auto scrollbar-hide">
          <!-- Modal Header -->
         <div class="sticky top-0 bg-white dark:bg-gray-900 z-10  border-gray-600 p-6">
      <div class="bg-gray-900 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
        <h2 class="text-xl font-bold text-gray-600">
          <i class="fas fa-user-plus text-gray-400 mr-2 font-bold"></i>
          Add New Employee
        </h2>
        <button @click="closeAddUserModal" class="text-gray-500 hover:text-gray-400">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <!-- Main Tabs Navigation -->
      <div class="add-staff-tabs flex space-x-2 mt-4 overflow-x-auto">
        <button
          v-for="tab in ['Personal Info', 'Family Info', 'Education Info', 'Career History Info', 'Contract Info']"
          :key="tab"
          :class="[
            'px-4 py-2 rounded-t-lg text-sm font-medium transition-all duration-200 flex items-center flex-1',
            activeFormTab === tab ? 'bg-gray-500 text-gray-600 shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          ]"
          @click="activeFormTab = tab"
        >
          <i v-if="tab === 'Personal Info'" class="fas fa-user mr-2 text-gray-700"></i>
          <i v-if="tab === 'Family Info'" class="fas fa-users mr-2 text-gray-700"></i>
          <i v-if="tab === 'Education Info'" class="fas fa-graduation-cap mr-2 text-gray-700"></i>
          <i v-if="tab === 'Career History Info'" class="fas fa-briefcase mr-2 text-gray-700"></i>
          <i v-if="tab === 'Contract Info'" class="fas fa-file-signature mr-2 text-gray-700"></i>
          {{ tab }}
        </button>
      </div>
    </div>

          <!-- Form Content -->
          <form @submit.prevent="addStaff" class="p-6 space-y-6  bg-white dark:bg-gray-900">
            <div v-if="staffError" class="text-red-600 text-sm bg-red-100 p-3 rounded-lg">{{ staffError }}</div>

            <!-- Personal Info Section -->
            <div v-if="activeFormTab === 'Personal Info'" class="space-y-6">
              <div class="flex overflow-x-auto  border-gray-600 bg-white dark:bg-gray-900 shadow-sm rounded-t-lg p-2">
          <button
            v-for="tab in personalInfoTabs"
            :key="tab.id"
            @click="activePersonalInfoTab = tab.id"
            :class="[
              'px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-all duration-200',
              activePersonalInfoTab === tab.id 
                ? 'bg-gray-500 text-gray-600 shadow-md mr-3'
                : 'bg-gray-300 text-gray-800 hover:bg-gray-400 mr-3'
            ]">
            <i :class="tab.icon" class="mr-2 text-gray-700"></i>
            {{ tab.label }}
          </button>
        </div>

              <!-- Basic Info Sub-Tab -->
               
        <div v-if="activePersonalInfoTab === 'basic-info'" class="space-y-4">
       <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
           <i class="fas fa-user text-gray-600 mr-2"></i>
               Basic Information
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Photo Upload Section -->
          <div class="col-span-1">
            <label for="add-photo-upload" class="form-label flex items-center">
              <i class="fas fa-camera text-gray-600 mr-2"></i>
              Upload Photo
            </label>
            <input
              type="file"
              id="add-photo-upload"
              accept="image/*"
              @change="handlePhotoUpload"
              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
            />
            <div v-if="newStaff.photoPreview" class="mt-4">
              <img
                :src="newStaff.photoPreview"
                alt="Photo Preview"
                class="w-20 h-20 rounded-full object-cover border-4 border-teal-400"
              />
            </div>
          </div>
          <div>
            <label for="add-staff-id" class="form-label flex items-center">
              <i class="fas fa-id-card text-gray-600 mr-2"></i>
              Staff ID
            </label>
            <input
              type="text"
              id="add-staff-id"
              v-model="newStaff.staffId"
              placeholder="e.g. S1001"
              class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label for="add-first-name-kh" class="form-label flex items-center">
              <i class="fas fa-user-tie text-gray-600 mr-2"></i>
              First Name (Thai)
                </label>
                <input
                  type="text"
                  id="add-first-name-kh"
                  v-model="newStaff.firstNameKh"
                  placeholder="e.g. สุขา"
                  class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label for="add-last-name-kh" class="form-label flex items-center">
                  <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                  Last Name (Thai)
                </label>
                <input
                  type="text"
                  id="add-last-name-kh"
                  v-model="newStaff.lastNameKh"
                  placeholder="e.g. พาน"
                  class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label for="add-first-name-latin" class="form-label flex items-center">
                  <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                  First Name (Latin)
                </label>
                <input
                  type="text"
                  id="add-first-name-latin"
                  v-model="newStaff.firstNameLatin"
                  placeholder="e.g. SOKHA"
                  class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label for="add-last-name-latin" class="form-label flex items-center">
                  <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                  Last Name (Latin)
                </label>
                <input
                  type="text"
                  id="add-last-name-latin"
                  v-model="newStaff.lastNameLatin"
                  placeholder="e.g. PHAN"
                  class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label for="add-gender" class="form-label flex items-center">
                  <i class="fas fa-venus-mars text-gray-600 mr-2"></i>
                  Gender
                </label>
                <select id="add-gender" v-model="newStaff.gender" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required>
                  <option value="">Select Gender</option>
                  <option value="Male"</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label for="add-marital-status" class="form-label flex items-center">
                  <i class="fas fa-heart text-gray-600 mr-2"></i>
                  Marital Status
                </label>
                <select id="add-marital-status" v-model="newStaff.maritalStatus" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                  <option value="">Select Option</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>
              <div>
                <label for="add-bank-name" class="form-label flex items-center">
                  <i class="fas fa-university text-gray-600 mr-2"></i>
                  Bank Name
                </label>
                <input
                  type="text"
                  id="add-bank-name"
                  v-model="newStaff.bankName"
                  placeholder="e.g. Krungthai Bank"
                  class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label for="add-bank-account" class="form-label flex items-center">
                  <i class="fas fa-credit-card text-gray-600 mr-2"></i>
                  Bank Account
                </label>
                <input
                  type="text"
                  id="add-bank-account"
                  v-model="newStaff.bankAccount"
                  placeholder="e.g. 1234-5678-9012"
                  class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label for="add-date-of-birth" class="form-label flex items-center">
                  <i class="fas fa-calendar-alt text-gray-600 mr-2"></i>
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="add-date-of-birth"
                  v-model="newStaff.dateOfBirth"
                  class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label for="add-nationality-eng" class="form-label flex items-center">
                  <i class="fas fa-flag text-gray-600 mr-2"></i>
                  Nationality (Eng)
                </label>
                <input
                  type="text"
                  id="add-nationality-eng"
                  v-model="newStaff.nationalityEng"
                  placeholder="e.g. English"
                  class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label for="add-nationality-kh" class="form-label flex items-center">
                  <i class="fas fa-flag text-gray-600 mr-2"></i>
                  Nationality (Khmer)
                </label>
                <input
                  type="text"
                  id="add-first-name-kh"
                  v-model="newStaff.firstNameKh"
                  placeholder="e.g. មានា"
                  class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
            </div>
          </div>
            
             
            
              <div class="flex overflow-x-auto  border-gray-600">
                    <button
                      v-for="tab in personalInfoAddressTabs"
                      :key="tab.id"
                      @click="activepersonalInfoAddressTabs = tab.id"
                      :class="[
                        'px-4 py-2 text-sm font-medium whitespace-nowrap',
                        activepersonalInfoAddressTabs === tab.id 
                          ?'bg-gray-500 text-gray-600 shadow-md mr-3 rounded-t-lg'
                          :'bg-gray-200 text-gray-800 hover:bg-gray-200 mr-3 rounded-t-lg'
                      ]"
                    >
                      <i :class="tab.icon" class="mr-2"></i>
                      {{ tab.label }}
                    </button>
                  </div>
                </div>
          
              <!-- Current Address Sub-Tab -->
              <div v-if="activepersonalInfoAddressTabs === 'current-address'" class="space-y-4">
               <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                  <i class="fas fa-map-marker-alt ext-gray-600 mr-2"></i>
                  Current Address
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label for="current-house" class="form-label">House</label>
                    <input type="text" id="current-house" v-model="newStaff.currentAddress.house" placeholder="e.g. #12A" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="current-street" class="form-label">Street</label>
                    <input type="text" id="current-street" v-model="newStaff.currentAddress.street" placeholder="e.g. St. 123" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="current-group" class="form-label">Group</label>
                    <input type="text" id="current-group" v-model="newStaff.currentAddress.group" placeholder="e.g. Group 5" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="current-village" class="form-label">Village</label>
                    <input type="text" id="current-village" v-model="newStaff.currentAddress.village" placeholder="e.g. Toul Tompoung" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="current-commune" class="form-label">Commune</label>
                    <input type="text" id="current-commune" v-model="newStaff.currentAddress.commune" placeholder="e.g. Chamkarmon" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="current-district" class="form-label">District</label>
                    <input type="text" id="current-district" v-model="newStaff.currentAddress.district" placeholder="e.g. Chamkarmon" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="current-province-city" class="form-label">Province/City</label>
                    <input type="text" id="current-province-city" v-model="newStaff.currentAddress.provinceCity" placeholder="e.g. Phnom Penh" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="current-country" class="form-label">Country</label>
                    <input type="text" id="current-country" v-model="newStaff.currentAddress.country" placeholder="e.g. Cambodia" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                </div>
              </div>

              <!-- Permanent Address Sub-Tab -->
              <div v-if="activepersonalInfoAddressTabs === 'permanent-address'" class="space-y-4">
                <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                  <i class="fas fa-home text-gray-600 mr-2"></i>
                  Permanent Address
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label for="permanent-house" class="form-label">House</label>
                    <input type="text" id="permanent-house" v-model="newStaff.permanentAddress.house" placeholder="e.g. #12A" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="permanent-street" class="form-label">Street</label>
                    <input type="text" id="permanent-street" v-model="newStaff.permanentAddress.street" placeholder="e.g. St. 123" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="permanent-group" class="form-label">Group</label>
                    <input type="text" id="permanent-group" v-model="newStaff.permanentAddress.group" placeholder="e.g. Group 5" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="permanent-village" class="form-label">Village</label>
                    <input type="text" id="permanent-village" v-model="newStaff.permanentAddress.village" placeholder="e.g. Toul Tompoung" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="permanent-commune" class="form-label">Commune</label>
                    <input type="text" id="permanent-commune" v-model="newStaff.permanentAddress.commune" placeholder="e.g. Chamkarmon" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="permanent-district" class="form-label">District</label>
                    <input type="text" id="permanent-district" v-model="newStaff.permanentAddress.district" placeholder="e.g. Chamkarmon" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="permanent-province-city" class="form-label">Province/City</label>
                    <input type="text" id="permanent-province-city" v-model="newStaff.permanentAddress.provinceCity" placeholder="e.g. Phnom Penh" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="permanent-country" class="form-label">Country</label>
                    <input type="text" id="permanent-country" v-model="newStaff.permanentAddress.country" placeholder="e.g. Cambodia" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                </div>
              </div>

              <!-- Place of Birth Sub-Tab -->
              <div v-if="activepersonalInfoAddressTabs === 'place-of-birth'" class="space-y-4">
               <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                  <i class="fas fa-map-pin text-gray-600 mr-2"></i>
                  Place of Birth
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label for="place-of-birth-village" class="form-label">Village</label>
                    <input type="text" id="place-of-birth-village" v-model="newStaff.placeOfBirth.village" placeholder="e.g. Toul Tompoung" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="place-of-birth-commune" class="form-label">Commune</label>
                    <input type="text" id="place-of-birth-commune" v-model="newStaff.placeOfBirth.commune" placeholder="e.g. Chamkarmon" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="place-of-birth-district" class="form-label">District</label>
                    <input type="text" id="place-of-birth-district" v-model="newStaff.placeOfBirth.district" placeholder="e.g. Chamkarmon" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="place-of-birth-province-city" class="form-label">Province/City</label>
                    <input type="text" id="place-of-birth-province-city" v-model="newStaff.placeOfBirth.provinceCity" placeholder="e.g. Phnom Penh" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                  <div>
                    <label for="place-of-birth-country" class="form-label">Country</label>
                    <input type="text" id="place-of-birth-country" v-model="newStaff.placeOfBirth.country" placeholder="e.g. Cambodia" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                  </div>
                </div>
              </div>

              <!-- National ID Sub-Tab -->
              <div v-if="activepersonalInfoAddressTabs === 'national-id'" class="space-y-4">
               <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                  <i class="fas fa-id-card text-gray-600 mr-2"></i>
                  National ID Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="national-id-number" class="form-label">National ID Number</label>
                    <input type="text" id="national-id-number" v-model="newStaff.nationalId" placeholder="e.g. 123456789" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="national-id-issued-date" class="form-label">Issued Date</label>
                    <input type="date" id="national-id-issued-date" v-model="newStaff.nationalIdIssuedDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="national-id-expiry-date" class="form-label">Expiry Date</label>
                    <input type="date" id="national-id-expiry-date" v-model="newStaff.nationalIdExpiryDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="national-id-issued-by" class="form-label">Issued By</label>
                    <input type="text" id="national-id-issued-by" v-model="newStaff.nationalIdIssuedBy" placeholder="e.g. Ministry of Interior" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                </div>
              </div>

              <!-- Passport Sub-Tab -->
              <div v-if="activepersonalInfoAddressTabs === 'passport'" class="space-y-4">
               <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                  <i class="fas fa-passport text-gray-600 mr-2"></i>
                  Passport Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="passport-number" class="form-label">Passport Number</label>
                    <input type="text" id="passport-number" v-model="newStaff.passport" placeholder="e.g. P1234567" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="passport-issued-date" class="form-label">Issued Date</label>
                    <input type="date" id="passport-issued-date" v-model="newStaff.passportIssuedDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="passport-expiry-date" class="form-label">Expiry Date</label>
                    <input type="date" id="passport-expiry-date" v-model="newStaff.passportExpiryDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="passport-issued-by" class="form-label">Issued By</label>
                    <input type="text" id="passport-issued-by" v-model="newStaff.passportIssuedBy" placeholder="e.g. Ministry of Foreign Affairs" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                </div>
              </div>

              <!-- Visa Sub-Tab -->
              <div v-if="activepersonalInfoAddressTabs === 'visa'" class="space-y-4">
               <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                  <i class="fas fa-stamp text-gray-600 mr-2"></i>
                  Visa Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="visa-number" class="form-label">Visa Number</label>
                    <input type="text" id="visa-number" v-model="newStaff.visa" placeholder="e.g. V12345" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="visa-type" class="form-label">Visa Type</label>
                    <select id="visa-type" v-model="newStaff.visaType" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                      <option value="">Select Visa Type</option>
                      <option value="Tourist">Tourist</option>
                      <option value="Business">Business</option>
                      <option value="Work">Work</option>
                      <option value="Student">Student</option>
                    </select>
                  </div>
                  <div>
                    <label for="visa-issued-date" class="form-label">Issued Date</label>
                    <input type="date" id="visa-issued-date" v-model="newStaff.visaIssuedDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="visa-expiry-date" class="form-label">Expiry Date</label>
                    <input type="date" id="visa-expiry-date" v-model="newStaff.visaExpiryDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                </div>
              </div>

              <!-- Driving License Sub-Tab -->
              <div v-if="activepersonalInfoAddressTabs === 'driving-license'" class="space-y-4">
               <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                  <i class="fas fa-id-card-alt text-gray-600 mr-2"></i>
                  Driving License Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="driving-license-number" class="form-label">License Number</label>
                    <input type="text" id="driving-license-number" v-model="newStaff.drivingLicense" placeholder="e.g. DL123456" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="driving-license-type" class="form-label">License Type</label>
                    <select id="driving-license-type" v-model="newStaff.drivingLicenseType" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                      <option value="">Select License Type</option>
                      <option value="A">A - Motorcycle</option>
                      <option value="B">B - Car</option>
                      <option value="C">C - Truck</option>
                      <option value="D">D - Bus</option>
                    </select>
                  </div>
                  <div>
                    <label for="driving-license-issued-date" class="form-label">Issued Date</label>
                    <input type="date" id="driving-license-issued-date" v-model="newStaff.drivingLicenseIssuedDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="driving-license-expiry-date" class="form-label">Expiry Date</label>
                    <input type="date" id="driving-license-expiry-date" v-model="newStaff.drivingLicenseExpiryDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                </div>
              </div>

              <!-- Contact Point Sub-Tab -->
              <div v-if="activepersonalInfoAddressTabs === 'contact-point'" class="space-y-4">
               <h3 class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
                  <i class="fas fa-address-book text-gray-600 mr-2"></i>
                  Contact Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-phone" class="form-label">Phone Number</label>
                    <input type="text" id="contact-phone" v-model="newStaff.contactPoint.phone" placeholder="e.g. +85512345678" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="contact-email" class="form-label">Email Address</label>
                    <input type="email" id="contact-email" v-model="newStaff.contactPoint.email" placeholder="e.g. email@example.com" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="emergency-contact-name" class="form-label">Emergency Contact Name</label>
                    <input type="text" id="emergency-contact-name" v-model="newStaff.emergencyContactName" placeholder="e.g. Chandara Sam" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="emergency-contact-phone" class="form-label">Emergency Contact Phone</label>
                    <input type="text" id="emergency-contact-phone" v-model="newStaff.emergencyContactPhone" placeholder="e.g. +85598765432" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label for="emergency-contact-relation" class="form-label">Emergency Contact Relation</label>
                    <input type="text" id="emergency-contact-relation" v-model="newStaff.emergencyContactRelation" placeholder="e.g. Spouse" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </div>
                </div>
              </div>
            <!-- Family Info Section -->
          <div v-if="activeFormTab === 'Family Info'" class="space-y-6">
            <!-- Sub-Tab Navigation -->
            <div class="flex overflow-x-auto  border-gray-600">
              <button
                v-for="tab in familyInfoTabs"
                :key="tab.id"
                @click="activeFamilyInfoTab = tab.id"
                :class="[
                  'px-4 py-2 text-sm font-medium whitespace-nowrap',
                  activeFamilyInfoTab === tab.id 
                    ?'bg-gray-500 text-gray-600 shadow-md mr-3 rounded-t-lg'
                    :'bg-gray-200 text-gray-800 hover:bg-gray-200 mr-3 rounded-t-lg'
                ]"
              >
                <i :class="tab.icon" class="mr-2"></i>
                {{ tab.label }}
              </button>
            </div>

            <!-- Family Book Details Sub-Tab -->
            <div v-if="activeFamilyInfoTab === 'family-book-details'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-book text-gray-600 mr-2"></i>
                Family Book Details
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label for="family-book-no" class="form-label flex items-center">
                    <i class="fas fa-book text-gray-600 mr-2"></i>
                    Family Book No
                  </label>
                  <input type="text" id="family-book-no" v-model="newStaff.familyBookNo" placeholder="e.g. FB123456" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="issued-date" class="form-label flex items-center">
                    <i class="fas fa-calendar-day text-gray-600 mr-2"></i>
                    Issued Date
                  </label>
                  <input type="date" id="issued-date" v-model="newStaff.familyIssuedDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="expired-date" class="form-label flex items-center">
                    <i class="fas fa-calendar-times text-gray-600 mr-2"></i>
                    Expired Date
                  </label>
                  <input type="date" id="expired-date" v-model="newStaff.familyExpiredDate" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
              </div>
            </div>

            <!-- About Spouse Sub-Tab -->
            <div v-if="activeFamilyInfoTab === 'about-spouse'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-user-friends text-gray-600 mr-2"></i>
                Spouse Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label for="spouse-name-kh" class="form-label flex items-center">
                    <i class="fas fa-user-friends text-gray-600 mr-2"></i>
                    Spouse Name (Khmer)
                  </label>
                  <input type="text" id="spouse-name-kh" v-model="newStaff.spouseNameKh" placeholder="e.g. Khmer" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="spouse-name-latin" class="form-label flex items-center">
                    <i class="fas fa-user-friends text-gray-600 mr-2"></i>
                    Spouse Name (Latin)
                  </label>
                  <input type="text" id="spouse-name-latin" v-model="newStaff.spouseNameLatin" placeholder="e.g. Chandara" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="nationality-spouse" class="form-label flex items-center">
                    <i class="fas fa-flag text-gray-600 mr-2"></i>
                    Nationality
                  </label>
                  <input type="text" id="nationality-spouse" v-model="newStaff.spouseNationality" placeholder="e.g. Khmer" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="occupation-spouse" class="form-label flex items-center">
                    <i class="fas fa-briefcase text-gray-600 mr-2"></i>
                    Occupation
                  </label>
                  <input type="text" id="occupation-spouse" v-model="newStaff.spouseOccupation" placeholder="e.g. Teacher" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
              </div>
            </div>

            <!-- About Children Sub-Tab -->
            <div v-if="activeFamilyInfoTab === 'about-children'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-child text-gray-600 mr-2"></i>
                Children Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label for="children-number" class="form-label flex items-center">
                    <i class="fas fa-child text-gray-600 mr-2"></i>
                    Children Number
                  </label>
                  <input type="number" id="children-number" v-model="newStaff.childrenNumber" placeholder="e.g. 2" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="son-number" class="form-label flex items-center">
                    <i class="fas fa-male text-gray-600 mr-2"></i>
                    Son Number
                  </label>
                  <input type="number" id="son-number" v-model="newStaff.sonNumber" placeholder="e.g. 1" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="daughter-number" class="form-label flex items-center">
                    <i class="fas fa-female text-gray-600 mr-2"></i>
                    Daughter Number
                  </label>
                  <input type="number" id="daughter-number" v-model="newStaff.daughterNumber" placeholder="e.g. 1" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
              </div>
            </div>

            <!-- About Parents Sub-Tab -->
            <div v-if="activeFamilyInfoTab === 'about-parents'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-users text-gray-600 mr-2"></i>
                Parents Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label for="father-name" class="form-label flex items-center">
                    <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                    Father's Name
                  </label>
                  <input type="text" id="father-name" v-model="newStaff.fatherName" placeholder="e.g. John Doe" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="mother-name" class="form-label flex items-center">
                    <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                    Mother's Name
                  </label>
                  <input type="text" id="mother-name" v-model="newStaff.motherName" placeholder="e.g. Jane Doe" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
              </div>
            </div>

            <!-- Beneficiary Info Sub-Tab -->
            <div v-if="activeFamilyInfoTab === 'beneficiary-info'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-user-check text-gray-600 mr-2"></i>
                Beneficiary Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label for="beneficiary-name" class="form-label flex items-center">
                    <i class="fas fa-user-check text-gray-600 mr-2"></i>
                    Beneficiary Name
                  </label>
                  <input type="text" id="beneficiary-name" v-model="newStaff.beneficiaryName" placeholder="e.g. Chandara Sam" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="beneficiary-relationship" class="form-label flex items-center">
                    <i class="fas fa-link text-gray-600 mr-2"></i>
                    Beneficiary Relationship
                  </label>
                  <input type="text" id="beneficiary-relationship" v-model="newStaff.beneficiaryRelationship" placeholder="e.g. Spouse" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
              </div>
            </div>

            <!-- Emergency Contact Sub-Tab -->
            <div v-if="activeFamilyInfoTab === 'emergency-contact'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-user-shield text-gray-600 mr-2"></i>
                Emergency Contact Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label for="emergency-contact-name" class="form-label flex items-center">
                    <i class="fas fa-user-shield text-gray-600 mr-2"></i>
                    Emergency Contact Name
                  </label>
                  <input type="text" id="emergency-contact-name" v-model="newStaff.emergencyContactName" placeholder="e.g. Chandara Sam" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="emergency-contact-phone" class="form-label flex items-center">
                    <i class="fas fa-phone text-gray-600 mr-2"></i>
                    Emergency Contact Phone
                  </label>
                  <input type="text" id="emergency-contact-phone" v-model="newStaff.emergencyContactPhone" placeholder="e.g. +85598765432" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
                <div>
                  <label for="emergency-contact-relation" class="form-label flex items-center">
                    <i class="fas fa-link text-gray-600 mr-2"></i>
                    Emergency Contact Relation
                  </label>
                  <input type="text" id="emergency-contact-relation" v-model="newStaff.emergencyContactRelation" placeholder="e.g. Spouse" class="form-input bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" required />
                </div>
              </div>
            </div>
          </div>

                    <!-- Education Info Section -->
          <div v-if="activeFormTab === 'Education Info'" class="space-y-6">
            <!-- Sub-Tab Navigation -->
            <div class="flex overflow-x-auto  border-gray-600">
              <button
                v-for="tab in educationInfoTabs"
                :key="tab.id"
                @click="activeEducationInfoTab = tab.id"
                :class="[
                  'px-4 py-2 text-sm font-medium whitespace-nowrap',
                  activeEducationInfoTab === tab.id 
                   ?'bg-gray-500 text-gray-600 shadow-md mr-3 rounded-t-lg'
                   :'bg-gray-200 text-gray-800 hover:bg-gray-200 mr-3 rounded-t-lg'
                ]"
              >
                <i :class="tab.icon" class="mr-2"></i>
                {{ tab.label }}
              </button>
            </div>

            <!-- Academic Training Sub-Tab -->
            <div v-if="activeEducationInfoTab === 'academic-training'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-graduation-cap text-gray-600 mr-2"></i>
                I. Academic Training
              </h3>
              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                <thead>
                  <tr class="bg-white dark:bg-gray-900">
                    <th class="py-2 px-4 ">#</th>
                    <th class="py-2 px-4 ">Staff ID</th>
                    <th class="py-2 px-4 ">Education Level</th>
                    <th class="py-2 px-4 ">Major/Skill</th>
                    <th class="py-2 px-4 ">Name of Institute</th>
                    <th class="py-2 px-4 ">City</th>
                    <th class="py-2 px-4 ">Country</th>
                    <th class="py-2 px-4 ">Date Started</th>
                    <th class="py-2 px-4 ">Date Ended</th>
                    <th class="py-2 px-4 ">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in academicTrainingRecords" :key="index" class="hover:bg-gray-50">
                    <td class="py-2 px-4  text-center">{{ index + 1 }}</td>
                    <td class="py-2 px-4 ">{{ record.staffId }}</td>
                    <td class="py-2 px-4 ">{{ record.educationLevel }}</td>
                    <td class="py-2 px-4 ">{{ record.majorSkill }}</td>
                    <td class="py-2 px-4 ">{{ record.instituteName }}</td>
                    <td class="py-2 px-4 ">{{ record.city }}</td>
                    <td class="py-2 px-4 ">{{ record.country }}</td>
                    <td class="py-2 px-4 ">{{ record.dateStarted }}</td>
                    <td class="py-2 px-4 ">{{ record.dateEnded }}</td>
                    <td class="py-2 px-4 ">Option</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Training Before Employment Sub-Tab -->
            <div v-if="activeEducationInfoTab === 'training-before-employment'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-chalkboard-teacher text-gray-600 mr-2"></i>
                II. Training Before Employment
              </h3>
              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                <thead>
                  <tr class="bg-white dark:bg-gray-900">
                    <th class="py-2 px-4 ">#</th>
                    <th class="py-2 px-4 ">Staff ID</th>
                    <th class="py-2 px-4 ">Course Title</th>
                    <th class="py-2 px-4 ">Name of Institute</th>
                    <th class="py-2 px-4 ">Type of Train</th>
                    <th class="py-2 px-4 ">City</th>
                    <th class="py-2 px-4 ">Country</th>
                    <th class="py-2 px-4 ">Duration</th>
                    <th class="py-2 px-4 ">Date Started</th>
                    <th class="py-2 px-4 ">Date Ended</th>
                    <th class="py-2 px-4 ">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in trainingBeforeRecords" :key="index" class="hover:bg-gray-50">
                    <td class="py-2 px-4  text-center">{{ index + 1 }}</td>
                    <td class="py-2 px-4 ">{{ record.staffId }}</td>
                    <td class="py-2 px-4 ">{{ record.courseTitle }}</td>
                    <td class="py-2 px-4 ">{{ record.instituteName }}</td>
                    <td class="py-2 px-4 ">{{ record.typeOfTrain }}</td>
                    <td class="py-2 px-4 ">{{ record.city }}</td>
                    <td class="py-2 px-4 ">{{ record.country }}</td>
                    <td class="py-2 px-4 ">{{ record.duration }}</td>
                    <td class="py-2 px-4 ">{{ record.dateStarted }}</td>
                    <td class="py-2 px-4 ">{{ record.dateEnded }}</td>
                    <td class="py-2 px-4 ">Option</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Training After Employment Sub-Tab -->
            <div v-if="activeEducationInfoTab === 'training-after-employment'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-chalkboard text-gray-600 mr-2"></i>
                III. Training After Employment
              </h3>
              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                <thead>
                  <tr class="bg-white dark:bg-gray-900">
                    <th class="py-2 px-4 ">#</th>
                    <th class="py-2 px-4 ">Staff ID</th>
                    <th class="py-2 px-4 ">Course Title</th>
                    <th class="py-2 px-4 ">Name of Institute</th>
                    <th class="py-2 px-4 ">Type of Train</th>
                    <th class="py-2 px-4 ">City</th>
                    <th class="py-2 px-4 ">Country</th>
                    <th class="py-2 px-4 ">Duration</th>
                    <th class="py-2 px-4 ">Date Started</th>
                    <th class="py-2 px-4 ">Date Ended</th>
                    <th class="py-2 px-4 ">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in trainingAfterRecords" :key="index" class="hover:bg-gray-50">
                    <td class="py-2 px-4  text-center">{{ index + 1 }}</td>
                    <td class="py-2 px-4 ">{{ record.staffId }}</td>
                    <td class="py-2 px-4 ">{{ record.courseTitle }}</td>
                    <td class="py-2 px-4 ">{{ record.instituteName }}</td>
                    <td class="py-2 px-4 ">{{ record.typeOfTrain }}</td>
                    <td class="py-2 px-4 ">{{ record.city }}</td>
                    <td class="py-2 px-4 ">{{ record.country }}</td>
                    <td class="py-2 px-4 ">{{ record.duration }}</td>
                    <td class="py-2 px-4 ">{{ record.dateStarted }}</td>
                    <td class="py-2 px-4 ">{{ record.dateEnded }}</td>
                    <td class="py-2 px-4 ">Option</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

                <!-- Career History Info Section -->
          <div v-if="activeFormTab === 'Career History Info'" class="space-y-6">
            <!-- Sub-Tab Navigation -->
            <div class="flex overflow-x-auto  border-gray-600">
              <button
                v-for="tab in careerHistoryInfoTabs"
                :key="tab.id"
                @click="activeCareerHistoryInfoTab = tab.id"
                :class="[
                  'px-4 py-2 text-sm font-medium whitespace-nowrap',
                  activeCareerHistoryInfoTab === tab.id 
                    ? 'bg-gray-500 text-gray-600 shadow-md mr-3 rounded-t-lg'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                ]"
              >
                <i :class="tab.icon" class="mr-2"></i>
                {{ tab.label }}
              </button>
            </div>

            <!-- Previous Employment Sub-Tab -->
            <div v-if="activeCareerHistoryInfoTab === 'previous-employment'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-briefcase text-gray-600 mr-2"></i>
                I. Previous Employment
              </h3>
              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                <thead>
                  <tr class="bg-white dark:bg-gray-900">
                    <th class="py-2 px-4 ">#</th>
                    <th class="py-2 px-4 ">Staff ID</th>
                    <th class="py-2 px-4 ">Company Name</th>
                    <th class="py-2 px-4 ">Position</th>
                    <th class="py-2 px-4 ">Department</th>
                    <th class="py-2 px-4 ">City</th>
                    <th class="py-2 px-4 ">Country</th>
                    <th class="py-2 px-4 ">Date Started</th>
                    <th class="py-2 px-4 ">Date Ended</th>
                    <th class="py-2 px-4 ">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in previousEmploymentRecords" :key="index" class="hover:bg-gray-50">
                    <td class="py-2 px-4  text-center">{{ index + 1 }}</td>
                    <td class="py-2 px-4 ">{{ record.staffId }}</td>
                    <td class="py-2 px-4 ">{{ record.companyName }}</td>
                    <td class="py-2 px-4 ">{{ record.position }}</td>
                    <td class="py-2 px-4 ">{{ record.department }}</td>
                    <td class="py-2 px-4 ">{{ record.city }}</td>
                    <td class="py-2 px-4 ">{{ record.country }}</td>
                    <td class="py-2 px-4 ">{{ record.dateStarted }}</td>
                    <td class="py-2 px-4 ">{{ record.dateEnded }}</td>
                    <td class="py-2 px-4 ">Option</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Current Employment Sub-Tab -->
            <div v-if="activeCareerHistoryInfoTab === 'current-employment'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-building text-gray-600 mr-2"></i>
                II. Current Employment
              </h3>
              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                <thead>
                  <tr class="bg-white dark:bg-gray-900">
                    <th class="py-2 px-4 ">#</th>
                    <th class="py-2 px-4 ">Staff ID</th>
                    <th class="py-2 px-4 ">Company Name</th>
                    <th class="py-2 px-4 ">Position</th>
                    <th class="py-2 px-4 ">Department</th>
                    <th class="py-2 px-4 ">City</th>
                    <th class="py-2 px-4 ">Country</th>
                    <th class="py-2 px-4 ">Date Started</th>
                    <th class="py-2 px-4 ">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in currentEmploymentRecords" :key="index" class="hover:bg-gray-50">
                    <td class="py-2 px-4  text-center">{{ index + 1 }}</td>
                    <td class="py-2 px-4 ">{{ record.staffId }}</td>
                    <td class="py-2 px-4 ">{{ record.companyName }}</td>
                    <td class="py-2 px-4 ">{{ record.position }}</td>
                    <td class="py-2 px-4 ">{{ record.department }}</td>
                    <td class="py-2 px-4 ">{{ record.city }}</td>
                    <td class="py-2 px-4 ">{{ record.country }}</td>
                    <td class="py-2 px-4 ">{{ record.dateStarted }}</td>
                    <td class="py-2 px-4 ">Option</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Promotions/Transfers Sub-Tab -->
            <div v-if="activeCareerHistoryInfoTab === 'promotions-transfers'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-exchange-alt text-gray-600 mr-2"></i>
                III. Promotions/Transfers
              </h3>
              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                <thead>
                  <tr class="bg-white dark:bg-gray-900">
                    <th class="py-2 px-4 ">#</th>
                    <th class="py-2 px-4 ">Staff ID</th>
                    <th class="py-2 px-4 ">Action Type</th>
                    <th class="py-2 px-4 ">Previous Position</th>
                    <th class="py-2 px-4 ">New Position</th>
                    <th class="py-2 px-4 ">Previous Department</th>
                    <th class="py-2 px-4 ">New Department</th>
                    <th class="py-2 px-4 ">Date of Action</th>
                    <th class="py-2 px-4 ">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in promotionsTransfersRecords" :key="index" class="hover:bg-gray-50">
                    <td class="py-2 px-4  text-center">{{ index + 1 }}</td>
                    <td class="py-2 px-4 ">{{ record.staffId }}</td>
                    <td class="py-2 px-4 ">{{ record.actionType }}</td>
                    <td class="py-2 px-4 ">{{ record.previousPosition }}</td>
                    <td class="py-2 px-4 ">{{ record.newPosition }}</td>
                    <td class="py-2 px-4 ">{{ record.previousDepartment }}</td>
                    <td class="py-2 px-4 ">{{ record.newDepartment }}</td>
                    <td class="py-2 px-4 ">{{ record.dateOfAction }}</td>
                    <td class="py-2 px-4 ">Option</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Contract Info Section -->
          <div v-if="activeFormTab === 'Contract Info'" class="space-y-6">
            <!-- Sub-Tab Navigation -->
            <div class="flex overflow-x-auto  border-gray-600">
              <button
                v-for="tab in contractInfoTabs"
                :key="tab.id"
                @click="activeContractInfoTab = tab.id"
                :class="[
                  'px-4 py-2 text-sm font-medium whitespace-nowrap',
                  activeContractInfoTab === tab.id 
                   ?'bg-gray-500 text-gray-600 shadow-md mr-3 rounded-t-lg'
                   :'bg-gray-200 text-gray-800 hover:bg-gray-200 mr-3 rounded-t-lg'
                ]"
              >
                <i :class="tab.icon" class="mr-2"></i>
                {{ tab.label }}
              </button>
            </div>

            <!-- Contract Employee Sub-Tab -->
            <div v-if="activeContractInfoTab === 'contract-employee'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-user-tie text-gray-600 mr-2"></i>
                I. Contract Employee
              </h3>
              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                <thead>
                  <tr class="">
                    <th class="py-2 text-gray-400  px-4 ">#</th>
                    <th class="py-2 text-gray-400  px-4 ">Staff ID</th>
                    <th class="py-2 text-gray-400  px-4 ">Employee Name</th>
                    <th class="py-2 text-gray-400  px-4 ">Contract Type</th>
                    <th class="py-2 text-gray-400  px-4 ">Department</th>
                    <th class="py-2 text-gray-400  px-4 ">Start Date</th>
                    <th class="py-2 text-gray-400  px-4 ">End Date</th>
                    <th class="py-2 text-gray-400  px-4 ">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in contractEmployeeRecords" :key="index" class="hover:bg-gray-50">
                    <td class="py-2 text-gray-400 px-4  text-center">{{ index + 1 }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.staffId }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.employeeName }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.contractType }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.department }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.startDate }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.endDate }}</td>
                    <td class="py-2 text-gray-400 px-4 ">Option</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Contract Details Sub-Tab -->
            <div v-if="activeContractInfoTab === 'contract-details'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-file-contract text-gray-600 mr-2"></i>
                II. Contract Details
              </h3>
              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                <thead>
                  <tr class="">
                    <th class="py-2 text-gray-400  px-4 ">#</th>
                    <th class="py-2 text-gray-400  px-4 ">Staff ID</th>
                    <th class="py-2 text-gray-400  px-4 ">Contract Number</th>
                    <th class="py-2 text-gray-400  px-4 ">Salary</th>
                    <th class="py-2 text-gray-400  px-4 ">Benefits</th>
                    <th class="py-2 text-gray-400  px-4 ">Start Date</th>
                    <th class="py-2 text-gray-400  px-4 ">End Date</th>
                    <th class="py-2 text-gray-400  px-4 ">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in contractDetailsRecords" :key="index" class="hover:bg-gray-50">
                    <td class="py-2 text-gray-400 px-4  text-center">{{ index + 1 }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.staffId }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.contractNumber }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.salary }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.benefits }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.startDate }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.endDate }}</td>
                    <td class="py-2 text-gray-400 px-4 ">Option</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Termination/Extension Sub-Tab -->
            <div v-if="activeContractInfoTab === 'termination-extension'" class="space-y-4">
              <h3 class="text-lg font-medium text-gray-800  mb-4 flex items-center">
                <i class="fas fa-times-circle text-gray-600 mr-2"></i>
                III. Termination/Extension
              </h3>
              <table class="min-w-full bg-white dark:bg-gray-900 border border-gray-600">
                <thead>
                  <tr class="">
                    <th class="py-2  text-gray-400 px-4 ">#</th>
                    <th class="py-2  text-gray-400 px-4 ">Staff ID</th>
                    <th class="py-2  text-gray-400 px-4 ">Action Type</th>
                    <th class="py-2  text-gray-400 px-4 ">Reason</th>
                    <th class="py-2  text-gray-400 px-4 ">Date of Action</th>
                    <th class="py-2  text-gray-400 px-4 ">New End Date</th>
                    <th class="py-2  text-gray-400 px-4 ">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, index) in terminationExtensionRecords" :key="index" class="hover:bg-gray-50">
                    <td class="py-2 text-gray-400 px-4  text-center">{{ index + 1 }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.staffId }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.actionType }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.reason }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.dateOfAction }}</td>
                    <td class="py-2 text-gray-400 px-4 ">{{ record.newEndDate }}</td>
                    <td class="py-2 text-gray-400 px-4 ">Option</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
            <!-- Form Footer -->
           <div class="sticky bottom-0 bg-white dark:bg-gray-900 p-6 border-t border-gray-600">
              <div class="flex justify-end space-x-3">
                <button type="button" @click="closeAddUserModal" class="bg-gray-500 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-200">
                  Cancel
                </button>
                <button type="submit" :disabled="loading" class="bg-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-black disabled:bg-gray-400 transition-all duration-200">
                  <span v-if="loading">Saving...</span>
                  <span v-else >Save</span>
                </button>
              </div>
           
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import { useAppStore } from '@/stores/index';
export default {
  name: 'EmployeeProfileList',
  data() {
    return {
      searchQuery: '',
      selectedDepartment: '',
      activeFormTab: 'Personal Info',
      activePersonalInfoTab: 'basic-info',
      activeMainTab: 'basic-info',
      activeCareerInfoTab: 'current-employment',
      activepersonalInfoAddressTabs: 'current-address',
      activeContractInfoTab: 'contract-employee',
      activeFamilyInfoTab: 'family-book-details',
      activeEducationInfoTab: 'academic-training',
      activeCareerHistoryInfoTab: 'previous-employment',
      activeContractInfoTab: 'contract-employee',
      showAddStaffModal: false,
      showEditStaffModal: false,
      showViewDetailModal: false,
      activeEditPersonalInfoTab: 'basic-info',
      activeEditPersonalInfoAddressTab: 'current-address',
      staffError: '',
      loading: false,
      openDropdown: null,
      selectedStaff: null,
      personalInfoTabs: [
        { id: 'basic-info', label: 'Basic Info', icon: 'fas fa-user' },
      ],
      personalInfoAddressTabs: [
        { id: 'current-address', label: 'I. Current Address', icon: 'fas fa-map-marker-alt' },
        { id: 'permanent-address', label: 'II. Permanent Address', icon: 'fas fa-home' },
        { id: 'place-of-birth', label: 'III. Place of Birth', icon: 'fas fa-map-pin' },
        { id: 'national-id', label: 'IV. National ID', icon: 'fas fa-id-card' },
        { id: 'passport', label: 'V. Passport', icon: 'fas fa-passport' },
        { id: 'visa', label: 'VI. Visa', icon: 'fas fa-stamp' },
        { id: 'driving-license', label: 'VII. Driving License', icon: 'fas fa-id-card-alt' },
        { id: 'contact-point', label: 'VIII. Contact Point', icon: 'fas fa-address-book' },
      ],
      familyInfoTabs: [
        { id: 'family-book-details', label: 'Family Book Details', icon: 'fas fa-book' },
        { id: 'about-spouse', label: 'About Spouse', icon: 'fas fa-user-friends' },
        { id: 'about-children', label: 'About Children', icon: 'fas fa-child' },
        { id: 'about-parents', label: 'About Parents', icon: 'fas fa-users' },
        { id: 'beneficiary-info', label: 'Beneficiary Info', icon: 'fas fa-user-check' },
        { id: 'emergency-contact', label: 'Emergency Contact', icon: 'fas fa-user-shield' },
      ],
      educationInfoTabs: [
        { id: 'academic-training', label: 'I. Academic Training', icon: 'fas fa-graduation-cap' },
        { id: 'training-before-employment', label: 'II. Training Before Employment', icon: 'fas fa-chalkboard-teacher' },
        { id: 'training-after-employment', label: 'III. Training After Employment', icon: 'fas fa-chalkboard' },
      ],
      contractInfoTabs: [
        { id: 'contract-employee', label: 'I. Contract Employee', icon: 'fas fa-user-tie' },
        { id: 'contract-details', label: 'II. Contract Details', icon: 'fas fa-file-contract' },
        { id: 'termination-extension', label: 'III. Termination/Extension', icon: 'fas fa-times-circle' },
      ],
      contractEmployeeRecords: [
        { staffId: 'S0867', employeeName: 'John Doe', contractType: 'Full-Time', department: 'HR', startDate: '2023-01-01', endDate: '2025-12-31' },
      ],
      contractDetailsRecords: [
        { staffId: 'S0867', contractNumber: 'C12345', salary: '$5000', benefits: 'Health Insurance', startDate: '2023-01-01', endDate: '2025-12-31' },
      ],
      terminationExtensionRecords: [
        { staffId: 'S0867', actionType: 'Extension', reason: 'Performance', dateOfAction: '2025-06-01', newEndDate: '2026-12-31' },
      ],
      previousEmploymentRecords: [
        { staffId: 'S0867', companyName: 'ABC Corp', position: 'Manager', department: 'Sales', city: 'Phnom Penh', country: 'Khmer', dateStarted: '2015', dateEnded: '2020' },
      ],
      currentEmploymentRecords: [
        { staffId: 'S0867', companyName: 'XYZ Inc', position: 'Senior Manager', department: 'Marketing', city: 'Phnom Penh', country: 'Khmer', dateStarted: '2021' },
      ],
      promotionsTransfersRecords: [
        { staffId: 'S0867', actionType: 'Promotion', previousPosition: 'Manager', newPosition: 'Senior Manager', previousDepartment: 'Sales', newDepartment: 'Marketing', dateOfAction: '2021' },
      ],
      academicTrainingRecords: [
        { staffId: 'S0867', educationLevel: 'Bachelor', majorSkill: 'Computer Science', instituteName: 'Royal University of Phnom Penh', city: 'Phnom Penh', country: 'Cambodia', dateStarted: '2002', dateEnded: '2008' },
      ],  
      newStaff: {
        staffId: '',
        firstNameKh: '',
        lastNameKh: '',
        firstNameLatin: '',
        lastNameLatin: '',
        gender: '',
        maritalStatus: '',
        bankName: '',
        bankAccount: '',
        nssfId: '',
        dateOfBirth: '',
        nationalityEng: '',
        nationalityKh: '',
        currentAddress: {
          house: '',
          street: '',
          group: '',
          village: '',
          commune: '',
          district: '',
          provinceCity: '',
          country: '',
        },
        permanentAddress: {
          house: '',
          street: '',
          group: '',
          village: '',
          commune: '',
          district: '',
          provinceCity: '',
          country: '',
        },
        placeOfBirth: {
          village: '',
          commune: '',
          district: '',
          provinceCity: '',
          country: '',
        },
        nationalId: '',
        nationalIdIssuedDate: '',
        nationalIdExpiryDate: '',
        nationalIdIssuedBy: '',
        passport: '',
        passportIssuedDate: '',
        passportExpiryDate: '',
        passportIssuedBy: '',
        visa: '',
        visaType: '',
        visaIssuedDate: '',
        visaExpiryDate: '',
        drivingLicense: '',
        drivingLicenseType: '',
        drivingLicenseIssuedDate: '',
        drivingLicenseExpiryDate: '',
        contactPoint: {
          phone: '',
          email: '',
        },
        emergencyContactName: '',
        emergencyContactPhone: '',
        emergencyContactRelation: '',
        photo: '',
        photoPreview: '',
        familyBookNo: '',
        familyIssuedDate: '',
        familyExpiredDate: '',
        spouseNameKh: '',
        spouseNameLatin: '',
        spouseNationality: '',
        spouseOccupation: '',
        childrenNumber: '',
        sonNumber: '',
        daughterNumber: '',
        fatherName: '',
        motherName: '',
        beneficiaryName: '',
        beneficiaryRelationship: '',
        educationLevel: '',
        major: '',
        university: '',
        graduationYear: '',
        certificate: '',
        previousCompany: '',
        previousPosition: '',
        yearsOfExperience: '',
        careerStartDate: '',
        careerEndDate: '',
        reasonForLeaving: '',
        contractType: '',
        contractStartDate: '',
        contractEndDate: '',
        position: '',
        department: '',
        division: '',
        salary: '',
      },
  editStaff: {
        staffId: '',
        firstNameKh: '',
        lastNameKh: '',
        firstNameLatin: '',
        lastNameLatin: '',
        position: '',
        gender: '',
        department: '',
        division: '',
        contractType: '',
        status: '',
        contractEndDate: '',
        contractId: '',
        contractTerms: '',
        contractStartDate: '',
        salary: '',
        benefits: '',
        terminationDate: '',
        terminationReason: '',
        extensionDate: '',
        familyBookNumber: '',
        familyBookIssuedDate: '',
        familyBookIssuedPlace: '',
        spouseName: '',
        spouseOccupation: '',
        spouseContact: '',
        childName: '',
        childAge: '',
        childGender: '',
        fatherName: '',
        motherName: '',
        parentContact: '',
        beneficiaryName: '',
        beneficiaryRelationship: '',
        beneficiaryContact: '',
        emergencyName: '',
        emergencyRelationship: '',
        emergencyContact: '',
        degree: '',
        institution: '',
        graduationYear: '',
        trainingBeforeName: '',
        trainingBeforeProvider: '',
        trainingBeforeYear: '',
        trainingAfterName: '',
        trainingAfterProvider: '',
        trainingAfterDate: '',
        previousCompany: '',
        previousRole: '',
        previousStartDate: '',
        previousEndDate: '',
        previousResponsibilities: '',
        currentPosition: '',
        currentDepartment: '',
        currentStartDate: '',
        currentResponsibilities: '',
        achievementTitle: '',
        achievementDate: '',
        achievementDescription: ''
      },
      mainTabs: [
        { id: 'basic-info', label: 'Basic Info', icon: 'fas fa-user' },
        { id: 'contract-info', label: 'Contract Info', icon: 'fas fa-file-contract' },
        { id: 'family-info', label: 'Family Info', icon: 'fas fa-users' },
        { id: 'education-info', label: 'Education Info', icon: 'fas fa-graduation-cap' },
        { id: 'career-history-info', label: 'Career History', icon: 'fas fa-briefcase' },
        { id: 'career-info', label: 'Career Info', icon: 'fas fa-trophy' }
      ],
      contractInfoTabs: [
        { id: 'contract-employee', label: 'Contract Employee', icon: 'fas fa-file-signature' },
        { id: 'contract-details', label: 'Contract Details', icon: 'fas fa-file-alt' },
        { id: 'termination-extension', label: 'Termination/Extension', icon: 'fas fa-file-excel' }
      ],
      familyInfoTabs: [
        { id: 'family-book-detail', label: 'Family Book Detail', icon: 'fas fa-book' },
        { id: 'about-spouse', label: 'About Spouse', icon: 'fas fa-user-friends' },
        { id: 'about-children', label: 'About Children', icon: 'fas fa-child' },
        { id: 'about-parents', label: 'About Parents', icon: 'fas fa-users' },
        { id: 'beneficiary-info', label: 'Beneficiary Info', icon: 'fas fa-hand-holding-heart' },
        { id: 'emergency-contact', label: 'Emergency Contact', icon: 'fas fa-phone-alt' }
      ],
      educationInfoTabs: [
        { id: 'academic-training', label: 'Academic Training', icon: 'fas fa-graduation-cap' },
        { id: 'training-before-employment', label: 'Training Before Employment', icon: 'fas fa-chalkboard-teacher' },
        { id: 'training-after-employment', label: 'Training After Employment', icon: 'fas fa-chalkboard' }
      ],
      careerHistoryInfoTabs: [
        { id: 'previous-employment', label: 'Previous Employment', icon: 'fas fa-briefcase' }
      ],
      careerInfoTabs: [
        { id: 'current-employment', label: 'Current Employment', icon: 'fas fa-briefcase' },
        { id: 'achievements', label: 'Achievements', icon: 'fas fa-trophy' }
      ],
      staffList: [
        {
          staffId: 'S1001',
          firstNameKh: 'សុខណា',
          lastNameKh: 'ផាន',
          firstNameLatin: 'SOKHNA',
          lastNameLatin: 'Phan',
          position: 'Project Manager',
          gender: 'Male',
          department: 'Project Department',
          division: 'Management',
          contractType: 'Project Base Contract (PB)',
          contractEndDate: '2025-12-31',
          status: 'Active',
          photo: 'https://picsum.photos/200?random=1',
          signature: 'Signature',
        },
      ],
    };
  },
  computed: {

    store() {
      return useAppStore();
    },
    
    activeStaffCount() {
      return this.staffList.filter(staff => staff.status === 'Active').length;
    },
    inactiveStaffCount() {
      return this.staffList.filter(staff => staff.status === 'Resigned').length;
    },
    fdcAlert60() {
      const today = new Date();
      return this.staffList.filter(staff => {
        if (staff.status === 'Active') {
          const endDate = new Date(staff.contractEndDate);
          const diffTime = endDate - today;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays >= 0 && diffDays <= 60;
        }
        return false;
      }).length;
    },
    fdcAlert30() {
      const today = new Date();
      return this.staffList.filter(staff => {
        if (staff.status === 'Active') {
          const endDate = new Date(staff.contractEndDate);
          const diffTime = endDate - today;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays >= 0 && diffDays <= 30;
        }
        return false;
      }).length;
    },
    probationAlert() {
      const today = new Date();
      return this.staffList.filter(staff => {
        if (staff.status === 'Active' && staff.contractType === 'Internship Contract') {
          const startDate = new Date(staff.contractStartDate);
          const diffTime = today - startDate;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays >= 0 && diffDays <= 30;
        }
        return false;
      }).length;
    },
    filteredStaff() {
      return this.staffList.filter(staff => {
        const searchMatch = staff.staffId.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          `${staff.firstNameLatin} ${staff.lastNameLatin}`.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          `${staff.firstNameKh} ${staff.lastNameKh}`.toLowerCase().includes(this.searchQuery.toLowerCase());
        const departmentMatch = !this.selectedDepartment || staff.department === this.selectedDepartment;
        return searchMatch && departmentMatch;
      });
    },
  },
  
// ==========edit profile ===========
methods: {
  
    editStaffMember(staff) {
      this.editStaff = this.deepCopy(staff);
      this.showEditStaffModal = true;
      this.staffError = '';
    },
    closeEditStaffModal() {
      this.showEditStaffModal = false;
      this.editStaff = {
        staffId: '',
        firstNameKh: '',
        lastNameKh: '',
        firstNameLatin: '',
        lastNameLatin: '',
        position: '',
        gender: '',
        department: '',
        division: '',
        contractType: '',
        status: '',
        contractEndDate: '',
        contractId: '',
        contractTerms: '',
        contractStartDate: '',
        salary: '',
        benefits: '',
        terminationDate: '',
        terminationReason: '',
        extensionDate: '',
        familyBookNumber: '',
        familyBookIssuedDate: '',
        familyBookIssuedPlace: '',
        spouseName: '',
        spouseOccupation: '',
        spouseContact: '',
        childName: '',
        childAge: '',
        childGender: '',
        fatherName: '',
        motherName: '',
        parentContact: '',
        beneficiaryName: '',
        beneficiaryRelationship: '',
        beneficiaryContact: '',
        emergencyName: '',
        emergencyRelationship: '',
        emergencyContact: '',
        degree: '',
        institution: '',
        graduationYear: '',
        trainingBeforeName: '',
        trainingBeforeProvider: '',
        trainingBeforeYear: '',
        trainingAfterName: '',
        trainingAfterProvider: '',
        trainingAfterDate: '',
        previousCompany: '',
        previousRole: '',
        previousStartDate: '',
        previousEndDate: '',
        previousResponsibilities: '',
        currentPosition: '',
        currentDepartment: '',
        currentStartDate: '',
        currentResponsibilities: '',
        achievementTitle: '',
        achievementDate: '',
        achievementDescription: ''
      };
      this.staffError = '';
    },
   
    
    handleEditPhotoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.editStaff.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async updateStaff() {
      this.loading = true;
      this.staffError = '';

      try {
        const index = this.staffList.findIndex(staff => staff.staffId === this.editStaff.staffId);
        if (index !== -1) {
          this.staffList[index] = { ...this.editStaff };
        }
        // this.closeEditStaffModal();
      } catch (error) {
        this.staffError = 'Failed to update staff. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    toggleDropdown(staffId) {
        this.openDropdown = this.openDropdown === staffId ? null : staffId;
      },
    openAddUserModal() {
      this.showAddStaffModal = true;
      this.newStaff = {
        staffId: '',
        firstNameKh: '',
        lastNameKh: '',
        firstNameLatin: '',
        lastNameLatin: '',
        gender: '',
        maritalStatus: '',
        bankName: '',
        bankAccount: '',
        nssfId: '',
        dateOfBirth: '',
        nationalityEng: '',
        nationalityKh: '',
        currentAddress: {
          house: '',
          street: '',
          group: '',
          village: '',
          commune: '',
          district: '',
          provinceCity: '',
          country: '',
        },
        permanentAddress: {
          house: '',
          street: '',
          group: '',
          village: '',
          commune: '',
          district: '',
          provinceCity: '',
          country: '',
        },
        placeOfBirth: {
          village: '',
          commune: '',
          district: '',
          provinceCity: '',
          country: '',
        },
        nationalId: '',
        nationalIdIssuedDate: '',
        nationalIdExpiryDate: '',
        nationalIdIssuedBy: '',
        passport: '',
        passportIssuedDate: '',
        passportExpiryDate: '',
        passportIssuedBy: '',
        visa: '',
        visaType: '',
        visaIssuedDate: '',
        visaExpiryDate: '',
        drivingLicense: '',
        drivingLicenseType: '',
        drivingLicenseIssuedDate: '',
        drivingLicenseExpiryDate: '',
        contactPoint: {
          phone: '',
          email: '',
        },
        emergencyContactName: '',
        emergencyContactPhone: '',
        emergencyContactRelation: '',
        photo: '',
        photoPreview: '',
        familyBookNo: '',
        familyIssuedDate: '',
        familyExpiredDate: '',
        spouseNameKh: '',
        spouseNameLatin: '',
        spouseNationality: '',
        spouseOccupation: '',
        childrenNumber: '',
        sonNumber: '',
        daughterNumber: '',
        fatherName: '',
        motherName: '',
        beneficiaryName: '',
        beneficiaryRelationship: '',
        educationLevel: '',
        major: '',
        university: '',
        graduationYear: '',
        certificate: '',
        previousCompany: '',
        previousPosition: '',
        yearsOfExperience: '',
        careerStartDate: '',
        careerEndDate: '',
        reasonForLeaving: '',
        contractType: '',
        contractStartDate: '',
        contractEndDate: '',
        position: '',
        department: '',
        division: '',
        salary: '',
      };
      this.staffError = '';
    },
    closeAddUserModal() {
      this.showAddStaffModal = false;
      this.staffError = '';
    },
    handlePhotoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newStaff.photoPreview = e.target.result;
        };
        reader.readAsDataURL(file);
        this.newStaff.photo = file;
      }
    },
    addStaff() {
      this.loading = true;
      this.staffError = '';

      setTimeout(() => {
        if (!this.newStaff.staffId || !this.newStaff.firstNameKh || !this.newStaff.lastNameKh || !this.newStaff.firstNameLatin || !this.newStaff.lastNameLatin) {
          this.staffError = 'All required fields must be filled!';
          this.loading = false;
          return;
        }

        const staffExists = this.staffList.some(staff => staff.staffId === this.newStaff.staffId);
        if (staffExists) {
          this.staffError = 'Staff ID already exists!';
          this.loading = false;
          return;
        }

        const newStaffData = {
          ...this.newStaff,
          status: 'Active',
          photo: this.newStaff.photoPreview || 'https://picsum.photos/200?random',
          signature: 'Signature',
        };
        this.staffList.push(newStaffData);
        this.closeAddUserModal();
        this.loading = false;
      }, 1000);
    },
    insertMultipleStaff(staffArray) {
      this.loading = true;
      this.staffError = '';

      setTimeout(() => {
        const errors = [];
        const newStaffList = [];

        staffArray.forEach((staff, index) => {
          if (!staff.staffId || !staff.firstNameKh || !staff.lastNameKh || !staff.firstNameLatin || !staff.lastNameLatin) {
            errors.push(`Staff at index ${index} is missing required fields (staffId, firstNameKh, lastNameKh, firstNameLatin, lastNameLatin).`);
            return;
          }

          if (this.staffList.some(existingStaff => existingStaff.staffId === staff.staffId)) {
            errors.push(`Staff ID ${staff.staffId} at index ${index} already exists.`);
            return;
          }

          const newStaffData = {
            staffId: staff.staffId,
            firstNameKh: staff.firstNameKh,
            lastNameKh: staff.lastNameKh,
            firstNameLatin: staff.firstNameLatin,
            lastNameLatin: staff.lastNameLatin,
            position: staff.position || 'Employee',
            gender: staff.gender || 'Male',
            department: staff.department || 'General',
            division: staff.division || 'General',
            contractType: staff.contractType || 'Project Base Contract (PB)',
            contractEndDate: staff.contractEndDate || '2025-12-31',
            status: staff.status || 'Active',
            photo: staff.photo || `https://picsum.photos/200?random=${index + 2}`,
            signature: staff.signature || 'Signature',
            maritalStatus: staff.maritalStatus || '',
            bankName: staff.bankName || '',
            bankAccount: staff.bankAccount || '',
            nssfId: staff.nssfId || '',
            dateOfBirth: staff.dateOfBirth || '',
            nationalityEng: staff.nationalityEng || '',
            nationalityKh: staff.nationalityKh || '',
            currentAddress: staff.currentAddress || { house: '', street: '', group: '', village: '', commune: '', district: '', provinceCity: '', country: '' },
            permanentAddress: staff.permanentAddress || { house: '', street: '', group: '', village: '', commune: '', district: '', provinceCity: '', country: '' },
            placeOfBirth: staff.placeOfBirth || { village: '', commune: '', district: '', provinceCity: '', country: '' },
            nationalId: staff.nationalId || '',
            nationalIdIssuedDate: staff.nationalIdIssuedDate || '',
            nationalIdExpiryDate: staff.nationalIdExpiryDate || '',
            nationalIdIssuedBy: staff.nationalIdIssuedBy || '',
            passport: staff.passport || '',
            passportIssuedDate: staff.passportIssuedDate || '',
            passportExpiryDate: staff.passportExpiryDate || '',
            passportIssuedBy: staff.passportIssuedBy || '',
            visa: staff.visa || '',
            visaType: staff.visaType || '',
            visaIssuedDate: staff.visaIssuedDate || '',
            visaExpiryDate: staff.visaExpiryDate || '',
            drivingLicense: staff.drivingLicense || '',
            drivingLicenseType: staff.drivingLicenseType || '',
            drivingLicenseIssuedDate: staff.drivingLicenseIssuedDate || '',
            drivingLicenseExpiryDate: staff.drivingLicenseExpiryDate || '',
            contactPoint: staff.contactPoint || { phone: '', email: '' },
            emergencyContactName: staff.emergencyContactName || '',
            emergencyContactPhone: staff.emergencyContactPhone || '',
            emergencyContactRelation: staff.emergencyContactRelation || '',
            familyBookNo: staff.familyBookNo || '',
            familyIssuedDate: staff.familyIssuedDate || '',
            familyExpiredDate: staff.familyExpiredDate || '',
            spouseNameKh: staff.spouseNameKh || '',
            spouseNameLatin: staff.spouseNameLatin || '',
            spouseNationality: staff.spouseNationality || '',
            spouseOccupation: staff.spouseOccupation || '',
            childrenNumber: staff.childrenNumber || '',
            sonNumber: staff.sonNumber || '',
            daughterNumber: staff.daughterNumber || '',
            fatherName: staff.fatherName || '',
            motherName: staff.motherName || '',
            beneficiaryName: staff.beneficiaryName || '',
            beneficiaryRelationship: staff.beneficiaryRelationship || '',
            educationLevel: staff.educationLevel || '',
            major: staff.major || '',
            university: staff.university || '',
            graduationYear: staff.graduationYear || '',
            certificate: staff.certificate || '',
            previousCompany: staff.previousCompany || '',
            previousPosition: staff.previousPosition || '',
            yearsOfExperience: staff.yearsOfExperience || '',
            careerStartDate: staff.careerStartDate || '',
            careerEndDate: staff.careerEndDate || '',
            reasonForLeaving: staff.reasonForLeaving || '',
            contractStartDate: staff.contractStartDate || '',
            salary: staff.salary || '',
          };

          newStaffList.push(newStaffData);
        });

        if (errors.length > 0) {
          this.staffError = errors.join(' ');
          this.loading = false;
          return;
        }

        this.staffList.push(...newStaffList);
        this.loading = false;
        this.staffError = `Successfully added ${newStaffList.length} staff members.`;
      }, 1000);
    },
    viewStaffDetails(staff) {
      if (this.selectedStaff && this.selectedStaff.staffId === staff.staffId) {
        this.selectedStaff = null; // Close dropdown if clicking the same staff
      } else {
        this.selectedStaff = this.deepCopy(staff); // Open new staff, closing any previous
      }
    },
    closeStaffDetails(staff) {
      if (this.selectedStaff && this.selectedStaff.staffId === staff.staffId) {
        this.selectedStaff = null; // Close dropdown on double click
      }
    },
    filteredContractRecords(staffId) {
      return this.contractEmployeeRecords.filter(record => record.staffId === staffId);
    },
    editStaff(staff) {
  console.log('Edit button clicked for staff:', JSON.stringify(staff, null, 2));
  this.editStaff = this.deepCopy(staff);
  this.showEditStaffModal = true;
  console.log('Edit modal opened, showEditStaffModal:', this.showEditStaffModal);
  console.log('editStaff initialized with:', JSON.stringify(this.editStaff, null, 2));
  this.staffError = '';
},
    // closeEditStaffModal() {
    //   console.log('Closing edit modal, showEditStaffModal:', this.showEditStaffModal);
    //   this.showEditStaffModal = false;
    //   this.staffError = '';
    //   console.log('Edit modal closed, showEditStaffModal:', this.showEditStaffModal);
    // },
    // viewStaffDetails(staff) {
    //   console.log('View details for:', JSON.stringify(staff, null, 2));
    //   this.selectedStaff = this.deepCopy(staff);
    //   this.showViewDetailModal = true;
    //   this.activeDetailTab = 'personal-info';
    // },
    closeViewDetailModal() {
      console.log('Closing view detail modal');
      this.showViewDetailModal = false;
      this.selectedStaff = null;
    },
    deleteStaff(staffId) {
      this.staffList = this.staffList.filter(staff => staff.staffId !== staffId);
    },
  },
  mounted() {
    const multipleStaff = [
      { staffId: 'S1002', firstNameKh: 'សុភា', lastNameKh: 'គឹម', firstNameLatin: 'SOPHEA', lastNameLatin: 'Kim', position: 'Developer', gender: 'Female', department: 'Technical Department', division: 'Engineering', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1003', firstNameKh: 'រតនា', lastNameKh: 'លី', firstNameLatin: 'RATANA', lastNameLatin: 'Ly', position: 'Designer', gender: 'Male', department: 'Creative Department', division: 'Design', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1004', firstNameKh: 'សុជាតា', lastNameKh: 'ហេង', firstNameLatin: 'SOCHEATA', lastNameLatin: 'Heng', position: 'Analyst', gender: 'Female', department: 'Analytics Department', division: 'Data', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1005', firstNameKh: 'សុខ', lastNameKh: 'ណារ៉ា', firstNameLatin: 'SOK', lastNameLatin: 'Nara', position: 'Manager', gender: 'Male', department: 'Management Department', division: 'Management', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1006', firstNameKh: 'ម៉ានី', lastNameKh: 'សុខ', firstNameLatin: 'MANI', lastNameLatin: 'Sok', position: 'Engineer', gender: 'Female', department: 'Engineering Department', division: 'Engineering', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1007', firstNameKh: 'ផារ៉ុម', lastNameKh: 'ចាន់', firstNameLatin: 'PHAROM', lastNameLatin: 'Chan', position: 'HR', gender: 'Male', department: 'Human Resources', division: 'HR', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1008', firstNameKh: 'ស្រីនាង', lastNameKh: 'ផាន', firstNameLatin: 'SRINEANG', lastNameLatin: 'Phan', position: 'Accountant', gender: 'Female', department: 'Finance Department', division: 'Finance', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1009', firstNameKh: 'វណ្ណដា', lastNameKh: 'ស', firstNameLatin: 'VANNDA', lastNameLatin: 'Sar', position: 'Marketing', gender: 'Male', department: 'Marketing Department', division: 'Marketing', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1010', firstNameKh: 'សុខហេង', lastNameKh: 'រតនៈ', firstNameLatin: 'SOKHENG', lastNameLatin: 'Rotan', position: 'Sales', gender: 'Female', department: 'Sales Department', division: 'Sales', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1011', firstNameKh: 'ច័ន្ទណារ៉ា', lastNameKh: 'ថោ', firstNameLatin: 'CHANRAR', lastNameLatin: 'Tho', position: 'Support', gender: 'Male', department: 'Support Department', division: 'Support', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1012', firstNameKh: 'សុភក្ត', lastNameKh: 'គង់', firstNameLatin: 'SUPHAK', lastNameLatin: 'Kong', position: 'Developer', gender: 'Female', department: 'Technical Department', division: 'Engineering', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1013', firstNameKh: 'រ៉ាមី', lastNameKh: 'ឡេង', firstNameLatin: 'RAMI', lastNameLatin: 'Leng', position: 'Designer', gender: 'Male', department: 'Creative Department', division: 'Design', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1014', firstNameKh: 'សុភុង', lastNameKh: 'ហុក', firstNameLatin: 'SUPHONG', lastNameLatin: 'Hok', position: 'Analyst', gender: 'Female', department: 'Analytics Department', division: 'Data', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1015', firstNameKh: 'ចន្ទរ៉ា', lastNameKh: 'ពៅ', firstNameLatin: 'Chandara', lastNameLatin: 'Pov', position: 'Manager', gender: 'Male', department: 'Management Department', division: 'Management', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1016', firstNameKh: 'មីណា', lastNameKh: 'ចាន់', firstNameLatin: 'MINA', lastNameLatin: 'Chan', position: 'Engineer', gender: 'Female', department: 'Engineering Department', division: 'Engineering', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1017', firstNameKh: 'រ៉ាត្រី', lastNameKh: 'សេង', firstNameLatin: 'RATRI', lastNameLatin: 'Seng', position: 'HR', gender: 'Male', department: 'Human Resources', division: 'HR', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1018', firstNameKh: 'ស្រីមុំ', lastNameKh: 'ផាន', firstNameLatin: 'SRIMOM', lastNameLatin: 'Phan', position: 'Accountant', gender: 'Female', department: 'Finance Department', division: 'Finance', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1019', firstNameKh: 'វណ្ណី', lastNameKh: 'ផុង', firstNameLatin: 'VANNI', lastNameLatin: 'Phong', position: 'Marketing', gender: 'Male', department: 'Marketing Department', division: 'Marketing', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1020', firstNameKh: 'សុខណា', lastNameKh: 'ហ៊ុន', firstNameLatin: 'SOKHNA', lastNameLatin: 'Hun', position: 'Sales', gender: 'Female', department: 'Sales Department', division: 'Sales', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
      { staffId: 'S1021', firstNameKh: 'ច័ន្ទរតនៈ', lastNameKh: 'សៀង', firstNameLatin: 'CHANROTN', lastNameLatin: 'Sieng', position: 'Support', gender: 'Male', department: 'Support Department', division: 'Support', contractType: 'Project Base Contract (PB)', contractEndDate: '2025-12-31', status: 'Active' },
    ];

    this.insertMultipleStaff(multipleStaff);
  },
};
</script>
<style scoped>
.add-staff-modal {
  max-height: 100vh;
}
/* Hide scrollbar but keep functionality */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
@media (max-width: 767px) {
  .flex-col {
    gap: 0.5rem;
  }
}
/* Adjust table cell wrapping for better fit */
td, th {
  white-space: normal;
  word-break: break-word;
}
thead tr {
  background-color: #000 !important;
}

</style>