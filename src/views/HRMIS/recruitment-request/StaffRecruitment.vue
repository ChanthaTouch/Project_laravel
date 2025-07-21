<template>
  <div class="bg-white dark:bg-[#0e1726] h-auto" :class="{ 'dark text-gray-600-dark': store.semidark }">
    <div class="w-full p-4">
      <div class="bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-gray-400">Employee Profile List</h1>
      </div>

      <div class="flex gap-2 mb-4">
          <button
            @click="exportExcel"
            class="h-10 px-4 py-2 bg-gray-200 dark:bg-gray-800 border-gray-800 rounded  flex items-center transition duration-300"
          >
            <i class="fas fa-file-excel mr-2"></i> Excel
          </button>
          <button
            @click="exportPDF"
            class="h-10 px-4 py-2 bg-gray-200 dark:bg-gray-800 border-gray-800 rounded flex items-center transition duration-300"
          >
            <i class="fas fa-file-pdf mr-2"></i> PDF
          </button>
        </div>

      <div>
        <div class="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg ">
          <!-- Staff List and Search -->
          <div v-if="!selectedStaff && !isAddingStaff">
          <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div class="relative w-full sm:w-1/2">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search staff by name, position, project, etc."
                class="w-full h-12 p-2 pr-2 border border-gray-300 rounded bg-gray-200 dark:bg-gray-600 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Search staff"
              />
              <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726]  flex items-center justify-center rounded">
                <i class="fas fa-search text-gray-500"></i>
              </div>
            </div>
            <button
              @click="openRecruitmentForm()"
              class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center transition duration-300"
              aria-label="Recruit new staff"
            >
              <i class="fas fa-user-plus mr-2"></i> Recruit
            </button>
          </div>
           <div class="overflow-x-auto no-scrollbar">
            <table class="w-full border-collapse rounded overflow-hidden text-sm sm:text-base ">
              <thead>
                <tr class="bg-gray-800 text-xs sm:text-sm text-gray-400 font-bold">
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden sm:table-cell">#</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Name</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Position</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Project</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">CP Code</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Head of Dept</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Level</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">Grade</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Category</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Direct Mgr</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">Indirect Mgr</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Start Date</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">End Date</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Max Salary</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Status</th>
                  <th class="px-2 py-2 sm:px-4 sm:py-3 text-center">Option</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(staff, index) in filteredStaff"
                  :key="index"
                   class="border-b transition duration-150 bg-white dark:bg-[#0e1726] "
                  :class="{
                    'rejected-row': staff.status === 'Rejected',
                    'bg-white dark:bg-gray-800': index % 2 === 0 && staff.status !== 'Rejected',
                    'bg-gray-50 dark:bg-[#0e1726]': index % 2 !== 0 && staff.status !== 'Rejected'
                  }"
                >
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden sm:table-cell">{{ index + 1 }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.name }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.position }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">{{ staff.project || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.cpCode || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.headOfDept || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">{{ staff.level || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.grade || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.category || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">{{ staff.directManager || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.indirectManager || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.startDate || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.endDate || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">{{ staff.maxSalary || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">
                    <span
                      class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                      :class="{
                        'bg-gray-100 dark:bg-gray-800  text-gray-400': staff.status === 'Approved',
                        'bg-gray-300 dark:bg-gray-700  text-gray-400': staff.status === 'Pending',
                        'bg-gray-200 dark:bg-gray-900  text-gray-400': staff.status === 'Rejected'
                      }"
                    >
                      {{ staff.status || 'Pending' }}
                    </span>
                  </td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 flex justify-center space-x-2">
                    <button
                      @click="editStaff(staff, index)"
                      class="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center text-sm transition duration-300"
                      aria-label="Edit staff"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      @click="showRecruitmentForm(staff)"
                      class="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center text-sm transition duration-300"
                      aria-label="View staff"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <button
                      @click="deleteStaff(index)"
                      class="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center text-sm transition duration-300"
                      aria-label="Delete staff"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

          <!-- Recruitment Form -->
            <div v-if="selectedStaff || isAddingStaff" class="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-start justify-center z-50 ">
            <div class="bg-white dark:bg-[#0e1726] w-full h-full p-4 sm:p-6 rounded-none sm:rounded-lg shadow-xl overflow-y-auto scrollbar-hide">
             
                <div class="bg-gray-900 rounded-md px-4 py-3 sm:px-6 sm:py-3 mb-2 flex justify-between items-center">
                  <h2 class="text-xl font-bold text-gray-400">{{ isAddingStaff ? 'Recruit New Staff' : 'Recruitment Request Form' }}</h2>
                  <button
                    @click="isAddingStaff ? cancelAddStaff() : cancelRecruitment()"
                    class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-300 text-sm"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                <form @submit.prevent="isAddingStaff ? addStaff() : submitRequest()" class="grid grid-cols-4 gap-4 w-full">
                  <!-- Name -->
                  <div>
                    <label for="newName" class="text-gray-600 flex items-center font-bold text-lg">Name</label>
                    <div class="relative">
                      <input
                        id="newName"
                        v-model="currentName"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter name"
                        required
                        :disabled="!isAddingStaff"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-user text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Position -->
                  <div>
                    <label for="newPosition" class="text-gray-600 flex items-center font-bold text-lg">Position</label>
                    <div class="relative">
                      <input
                        id="newPosition"
                        v-model="currentPosition"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter position"
                        required
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-briefcase text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Project -->
                  <div>
                    <label for="newProject" class="text-gray-600 flex items-center font-bold text-lg">Project</label>
                    <div class="relative">
                      <input
                        id="newProject"
                        v-model="currentProject"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter project name"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] items-center justify-center rounded">
                        <i class="fas fa-folder text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- CP Code -->
                  <div>
                    <label for="newCpCode" class="text-gray-600 flex items-center font-bold text-lg">CP Code / Project Code</label>
                    <div class="relative">
                      <input
                        id="newCpCode"
                        v-model="currentCpCode"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter CP/Project Code"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-code text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Head of Department -->
                  <div>
                    <label for="newHeadOfDept" class="text-gray-600 flex items-center font-bold text-lg">Head of Department</label>
                    <div class="relative">
                      <input
                        id="newHeadOfDept"
                        v-model="currentHeadOfDept"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter Head of Department"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-user-tie text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Level -->
                  <div>
                    <label for="newLevel" class="text-gray-600 flex items-center font-bold text-lg">Level</label>
                    <div class="relative">
                      <input
                        id="newLevel"
                        v-model="currentLevel"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="e.g., Junior, Mid, Senior"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-layer-group text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Grade -->
                  <div>
                    <label for="newGrade" class="text-gray-600 flex items-center font-bold text-lg">Grade</label>
                    <div class="relative">
                      <input
                        id="newGrade"
                        v-model="currentGrade"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="e.g., G5, G6"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-award text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Category -->
                  <div>
                    <label for="newCategory" class="text-gray-600 flex items-center font-bold text-lg">Category</label>
                    <div class="relative">
                      <input
                        id="newCategory"
                        v-model="currentCategory"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="e.g., Technical, Administrative"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-tags text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Direct Manager -->
                  <div>
                    <label for="newDirectManager" class="text-gray-600 flex items-center font-bold text-lg">Direct Manager</label>
                    <div class="relative">
                      <input
                        id="newDirectManager"
                        v-model="currentDirectManager"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter direct manager's name"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-user-friends text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Indirect Manager -->
                  <div>
                    <label for="newIndirectManager" class="text-gray-600 flex items-center font-bold text-lg">Indirect Manager</label>
                    <div class="relative">
                      <input
                        id="newIndirectManager"
                        v-model="currentIndirectManager"
                        type="text"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter indirect manager's name (if any)"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-user-tag text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Start Date -->
                  <div>
                    <label for="newStartDate" class="text-gray-600 flex items-center font-bold text-lg">Start Date</label>
                    <div class="relative">
                      <input
                        id="newStartDate"
                        v-model="currentStartDate"
                        type="date"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-calendar-alt text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- End Date -->
                  <div>
                    <label for="newEndDate" class="text-gray-600 flex items-center font-bold text-lg">End Date</label>
                    <div class="relative">
                      <input
                        id="newEndDate"
                        v-model="currentEndDate"
                        type="date"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-calendar-times text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Max Salary -->
                  <div>
                    <label for="newMaxSalary" class="text-gray-600 flex items-center font-bold text-lg">Max. Gross Salary</label>
                    <div class="relative">
                      <input
                        id="newMaxSalary"
                        v-model="currentMaxSalary"
                        type="number"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter max gross salary"
                      />
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-money-bill-wave text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Status -->
                  <div>
                    <label for="status" class="text-gray-600 flex items-center font-bold text-lg">Status</label>
                    <div class="relative">
                      <select
                        id="status"
                        v-model="currentStatus"
                        class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                      <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                        <i class="fas fa-info-circle text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Buttons -->
                  
                </form>
                 <div class="col-span-2 flex justify-end space-x-4 mt-4">
                    <button
                      type="button"
                      class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center transition duration-300"
                      @click="isAddingStaff ? cancelAddStaff() : cancelRecruitment()"
                      aria-label="Cancel form"
                    >
                      <i class="fas fa-times mr-2"></i> Cancel
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 flex items-center transition duration-300"
                      aria-label="Submit form"
                    >
                      <i class="fas fa-check mr-2"></i> {{ isAddingStaff ? 'Add' : 'Submit Request' }}
                    </button>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/index';
export default {
  data() {
    return {
      missingStaff: [
        {
          name: 'John Doe',
          position: 'Software Engineer',
          project: 'Project Alpha',
          cpCode: 'CP001',
          headOfDept: 'Alice Brown',
          level: 'Senior',
          grade: 'G6',
          category: 'Technical',
          directManager: 'Bob Wilson',
          indirectManager: '',
          startDate: '2025-07-01',
          endDate: '2026-06-30',
          maxSalary: 80000,
          status: 'Approved',
        },
        {
          name: 'Jane Smith',
          position: 'Project Manager',
          project: 'Project Beta',
          cpCode: 'CP002',
          headOfDept: 'Carol White',
          level: 'Mid',
          grade: 'G5',
          category: 'Administrative',
          directManager: 'David Lee',
          indirectManager: 'Emma Davis',
          startDate: '',
          endDate: '',
          maxSalary: null,
          status: 'Pending',
        },
        {
          name: 'Mike Johnson',
          position: 'HR Specialist',
          project: '',
          cpCode: '',
          headOfDept: 'Frank Miller',
          level: 'Junior',
          grade: 'G4',
          category: 'HR',
          directManager: '',
          indirectManager: '',
          startDate: '',
          endDate: '',
          maxSalary: null,
          status: 'Rejected',
        },
      ],
      selectedStaff: null,
      isAddingStaff: false,
      form: {
        name: '',
        project: '',
        cpCode: '',
        headOfDept: '',
        position: '',
        level: '',
        grade: '',
        category: '',
        directManager: '',
        indirectManager: '',
        startDate: '',
        endDate: '',
        maxSalary: '',
        benefits: [],
        newRecruitment: false,
        numberOfRecruitment: 1,
        externalAnnouncement: false,
        otherAnnouncement: false,
        advertisingFee: null,
        duration: null,
        fromDate: '',
        status: 'Pending',
      },
      availableBenefits: [
        'Seniority Payment',
        'Health Insurance',
        'Work Accident Insurance',
        'Area Allowance',
        'Mission Allowance',
      ],
      newStaff: {
        name: '',
        position: '',
        project: '',
        cpCode: '',
        headOfDept: '',
        level: '',
        grade: '',
        category: '',
        directManager: '',
        indirectManager: '',
        startDate: '',
        endDate: '',
        maxSalary: null,
        status: 'Pending',
      },
      searchQuery: '',
      editingIndex: null,
    };
  },
  computed: {
     store() {
      return useAppStore();
    },
    filteredStaff() {
      if (!this.searchQuery) return this.missingStaff;
      const query = this.searchQuery.toLowerCase();
      return this.missingStaff.filter(staff => {
        return (
          (staff.name && staff.name.toLowerCase().includes(query)) ||
          (staff.position && staff.position.toLowerCase().includes(query)) ||
          (staff.project && staff.project.toLowerCase().includes(query)) ||
          (staff垂直 && staff.cpCode.toLowerCase().includes(query)) ||
          (staff.headOfDept && staff.headOfDept.toLowerCase().includes(query)) ||
          (staff.level && staff.level.toLowerCase().includes(query)) ||
          (staff.grade && staff.grade.toLowerCase().includes(query)) ||
          (staff.category && staff.category.toLowerCase().includes(query)) ||
          (staff.directManager && staff.directManager.toLowerCase().includes(query)) ||
          (staff.indirectManager && staff.indirectManager.toLowerCase().includes(query)) ||
          (staff.status && staff.status.toLowerCase().includes(query))
        );
      });
    },
    currentName: {
      get() {
        return this.isAddingStaff ? this.newStaff.name : this.form.name;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.name = value;
        } else {
          this.form.name = value;
        }
      }
    },
    currentPosition: {
      get() {
        return this.isAddingStaff ? this.newStaff.position : this.form.position;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.position = value;
        } else {
          this.form.position = value;
        }
      }
    },
    currentProject: {
      get() {
        return this.isAddingStaff ? this.newStaff.project : this.form.project;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.project = value;
        } else {
          this.form.project = value;
        }
      }
    },
    currentCpCode: {
      get() {
        return this.isAddingStaff ? this.newStaff.cpCode : this.form.cpCode;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.cpCode = value;
        } else {
          this.form.cpCode = value;
        }
      }
    },
    currentHeadOfDept: {
      get() {
        return this.isAddingStaff ? this.newStaff.headOfDept : this.form.headOfDept;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.headOfDept = value;
        } else {
          this.form.headOfDept = value;
        }
      }
    },
    currentLevel: {
      get() {
        return this.isAddingStaff ? this.newStaff.level : this.form.level;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.level = value;
        } else {
          this.form.level = value;
        }
      }
    },
    currentGrade: {
      get() {
        return this.isAddingStaff ? this.newStaff.grade : this.form.grade;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.grade = value;
        } else {
          this.form.grade = value;
        }
      }
    },
    currentCategory: {
      get() {
        return this.isAddingStaff ? this.newStaff.category : this.form.category;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.category = value;
        } else {
          this.form.category = value;
        }
      }
    },
    currentDirectManager: {
      get() {
        return this.isAddingStaff ? this.newStaff.directManager : this.form.directManager;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.directManager = value;
        } else {
          this.form.directManager = value;
        }
      }
    },
    currentIndirectManager: {
      get() {
        return this.isAddingStaff ? this.newStaff.indirectManager : this.form.indirectManager;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.indirectManager = value;
        } else {
          this.form.indirectManager = value;
        }
      }
    },
    currentStartDate: {
      get() {
        return this.isAddingStaff ? this.newStaff.startDate : this.form.startDate;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.startDate = value;
        } else {
          this.form.startDate = value;
        }
      }
    },
    currentEndDate: {
      get() {
        return this.isAddingStaff ? this.newStaff.endDate : this.form.endDate;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.endDate = value;
        } else {
          this.form.endDate = value;
        }
      }
    },
    currentMaxSalary: {
      get() {
        return this.isAddingStaff ? this.newStaff.maxSalary : this.form.maxSalary;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.maxSalary = value;
        } else {
          this.form.maxSalary = value;
        }
      }
    },
    currentStatus: {
      get() {
        return this.isAddingStaff ? this.newStaff.status : this.form.status;
      },
      set(value) {
        if (this.isAddingStaff) {
          this.newStaff.status = value;
        } else {
          this.form.status = value;
        }
      }
    },
  },
  methods: {
    openRecruitmentForm() {
      this.isAddingStaff = true;
      this.selectedStaff = null;
      this.resetForm();
    },
    showRecruitmentForm(staff) {
      this.selectedStaff = staff;
      this.isAddingStaff = false;
      this.form = {
        name: staff.name,
        project: staff.project || '',
        cpCode: staff.cpCode || '',
        headOfDept: staff.headOfDept || '',
        position: staff.position,
        level: staff.level || '',
        grade: staff.grade || '',
        category: staff.category || '',
        directManager: staff.directManager || '',
        indirectManager: staff.indirectManager || '',
        startDate: staff.startDate || '',
        endDate: staff.endDate || '',
        maxSalary: staff.maxSalary || '',
        benefits: [],
        newRecruitment: false,
        numberOfRecruitment: 1,
        externalAnnouncement: false,
        otherAnnouncement: false,
        advertisingFee: null,
        duration: null,
        fromDate: '',
        status: staff.status || 'Pending',
      };
    },
    editStaff(staff, index) {
      this.editingIndex = index;
      this.isAddingStaff = true;
      this.selectedStaff = null;
      this.newStaff = { ...staff };
    },
    deleteStaff(index) {
      if (confirm('Are you sure you want to delete this staff member?')) {
        this.missingStaff.splice(index, 1);
      }
    },
    cancelRecruitment() {
      this.selectedStaff = null;
      this.resetForm();
    },
    submitRequest() {
      const formData = { ...this.form };
      console.log('Form Submitted:', formData);
      if (this.editingIndex !== null) {
        this.missingStaff[this.editingIndex] = { ...this.form };
        this.editingIndex = null;
      }
      this.cancelRecruitment();
    },
    resetForm() {
      this.form = {
        name: '',
        project: '',
        cpCode: '',
        headOfDept: '',
        position: '',
        level: '',
        grade: '',
        category: '',
        directManager: '',
        indirectManager: '',
        startDate: '',
        endDate: '',
        maxSalary: '',
        benefits: [],
        newRecruitment: false,
        numberOfRecruitment: 1,
        externalAnnouncement: false,
        otherAnnouncement: false,
        advertisingFee: null,
        duration: null,
        fromDate: '',
        status: 'Pending',
      };
    },
    addStaff() {
      if (this.editingIndex !== null) {
        this.missingStaff[this.editingIndex] = { ...this.newStaff };
        this.editingIndex = null;
      } else {
        this.missingStaff.push({ ...this.newStaff });
      }
      this.isAddingStaff = false;
      this.resetNewStaff();
    },
    cancelAddStaff() {
      this.isAddingStaff = false;
      this.editingIndex = null;
      this.resetNewStaff();
    },
    resetNewStaff() {
      this.newStaff = {
        name: '',
        position: '',
        project: '',
        cpCode: '',
        headOfDept: '',
        level: '',
        grade: '',
        category: '',
        directManager: '',
        indirectManager: '',
        startDate: '',
        endDate: '',
        maxSalary: null,
        status: 'Pending',
      };
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap');

* {
  box-sizing: border-box;
}

.rejected-row {
  background-color: #fdfcfc !important; /* light red for light mode */
}
.dark .rejected-row {
  background-color: #2d2a354c !important; /* dark red for dark mode */
}

label {
  font-weight: bold;
  display: flex;
  align-items: center;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

input,
select,
textarea {
  display: block;
  margin-top: 4px;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  transition: all 0.3s;
}

.custom-date-input {
  padding-left: 48px;
}

.relative input[type='date'] + div > i.fas,
.relative input[type='number'] + div > i.fas,
.relative input[type='text'] + div > i.fas,
.relative select + div > i.fas {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
  z-index: 1;
  text-align: left;
}

input[type='checkbox'] {
  accent-color: #4b5563;
  cursor: pointer;
}

input[type='checkbox']:hover {
  border-color: #6b7280;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  .w-full {
    padding: 0.5rem;
  }
  .bg-white {
    padding: 0.5rem;
  }
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  th, td {
    min-width: 120px;
  }
}

@media (max-width: 480px) {
  .flex {
    flex-direction: column;
    gap: 8px;
  }
  select,
  input,
  textarea {
    font-size: 14px;
    padding: 4px;
  }
  h3 {
    font-size: 16px;
  }
  button {
    width: 100%;
  }
}
</style>