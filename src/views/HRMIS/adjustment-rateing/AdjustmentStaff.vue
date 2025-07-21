```vue
<template>
  <div class="p-4 sm:p-6 bg-white dark:bg-[#0e1726] min-h-screen" :class="{ 'dark text-gray-600-dark': store.semidark }">
    <div class="bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-white md:text-2xl">Rate Adjustment</h1>
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

    <div class="mb-4 sticky top-0 z-10 bg-white dark:bg-gray-800 rounded-t-lg">
      <ul class="flex border-b border-gray-300 overflow-x-auto no-scrollbar">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'px-4 py-2 text-sm font-bold rounded-t-lg transition-all duration-200 cursor-pointer',
            'focus:outline-none whitespace-nowrap',
            activeTab === index ? 'bg-gray-200 text-gray-800 shadow-md' : 'text-gray-600 hover:bg-gray-300'
          ]"
          @click="activeTab = index"
          tabindex="0"
          @keydown.enter.space="activeTab = index"
          role="tab"
          :aria-selected="activeTab === index"
          :aria-controls="'tab-panel-' + index"
        >
          {{ tab.name }}
        </li>
      </ul>
      
    </div>

    <div class="bg-gray-800 p-4 sm:p-6 rounded shadow-lg border ">
      <div v-if="activeTab === 0" id="tab-panel-0" role="tabpanel" class="space-y-4">
        <div class="overflow-x-auto no-scrollbar">
          <table class="w-full border-collapse rounded overflow-hidden text-sm sm:text-base bg-white dark:bg-[#0e1726]">
            <thead>
              <tr class="bg-gray-800 text-xs md:text-sm text-white font-bold">
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">#</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">ID</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Name</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">Position</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Level</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Grade</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">Category</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">Direct Manager</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">Indirect Manager</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">New Staff</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">Start Date</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">Option</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in staff" :key="index" class="border-b transition duration-150 ">
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">{{ index + 1 }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">{{ item.id }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">{{ item.name }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">{{ item.position || '-' }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">{{ item.level || '-' }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">{{ item.grade || '-' }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">{{ item.category || '-' }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">{{ item.directManager || '-' }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">{{ item.indirectManager || '-' }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">{{ item.newStaff ? 'Yes' : 'No' }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">{{ item.startDate }}</td>
                <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">
                  <button @click="openAdjustmentModal(item)" class="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center text-sm transition duration-300 mx-auto">
                    <i class="fas fa-adjust mr-1"></i> Adjustment
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Staff Adjustment Approved Tab -->
      <div v-if="activeTab === 1" id="tab-panel-1" role="tabpanel" class="space-y-4">
        <div class="overflow-x-auto no-scrollbar">
          <table class="w-full border-collapse rounded overflow-hidden text-sm sm:text-base bg-white dark:bg-[#0e1726]">
            <thead>
              <tr class="bg-gray-800 text-xs md:text-sm text-white font-bold">
                <th class="px-2 py-2 text-left">ID</th>
                <th class="px-2 py-2 text-left">Name</th>
                <th class="px-2 py-2 text-left">Position</th>
                <th class="px-2 py-2 text-left">Level</th>
                <th class="px-2 py-2 text-left">Grade</th>
                <th class="px-2 py-2 text-left">Category</th>
                <th class="px-2 py-2 text-left">Direct Manager</th>
                <th class="px-2 py-2 text-left">Indirect Manager</th>
                <th class="px-2 py-2 text-left">Option</th>
                <th class="px-2 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in filteredStaff" :key="item.id">
                <tr class="border-b transition duration-150 ">
                  <td class="px-2 py-2">{{ item.id }}</td>
                  <td class="px-2 py-2">{{ item.name }}</td>
                  <td class="px-2 py-2">{{ item.position || '-' }}</td>
                  <td class="px-2 py-2">{{ item.level || '-' }}</td>
                  <td class="px-2 py-2">{{ item.grade || '-' }}</td>
                  <td class="px-2 py-2">{{ item.category || '-' }}</td>
                  <td class="px-2 py-2">{{ item.directManager || '-' }}</td>
                  <td class="px-2 py-2">{{ item.indirectManager || '-' }}</td>
                  <td class="px-2 py-2">
                    <button
                      @click="toggleDetails(item)"
                      class="text-gray-700 hover:text-gray-900 p-1"
                      :aria-expanded="selectedStaffId === item.id"
                      :aria-controls="'dropdown-' + item.id"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                  </td>
                  <td class="px-2 py-2">
                    <button
                      :class="[
                        'px-2 py-1 text-xs rounded text-white',
                        item.status === 'Approved' ? 'bg-gray-800' :
                        item.status === 'Pending' ? 'bg-gray-400' :
                        'bg-gray-600'
                      ]"
                    >
                      {{ item.status }}
                    </button>
                  </td>
                </tr>
                <tr v-if="selectedStaffId === item.id">
                  <td  :colspan="10" class=" bg-gray-100 dark:bg-gray-600 p-2" :id="'dropdown-' + item.id" >
                    <div class="dropdown-content bg-white dark:bg-[#0e1726] border mt-1 p-2 rounded shadow-lg">
                      <table class="w-full border-collapse text-sm sm:text-base bg-white dark:bg-[#0e1726]">
                        <thead>
                          <tr class=" text-xs md:text-sm text-white font-bold">
                            <th class="px-2 py-1 text-left">Max Salary</th>
                            <th class="px-2 py-1 text-left">New Staff</th>
                            <th class="px-2 py-1 text-left">Wage/Day</th>
                            <th class="px-2 py-1 text-left">Wage/Week</th>
                            <th class="px-2 py-1 text-left">Increase Week & Date</th>
                            <th class="px-2 py-1 text-left">Stop/Drop/Opt</th>
                            <th class="px-2 py-1 text-left">Start Date</th>
                            <th class="px-2 py-1 text-left">From Project</th>
                            <th class="px-2 py-1 text-left">To Project</th>
                            <th class="px-2 py-1 text-left">Transfer Date</th>
                            <th class="px-2 py-1 text-left">End Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class=" bg-white dark:bg-[#0e1726] text-xs md:text-sm text-gray-400">
                            <td class="px-2 py-1">{{ item.maxSalary || '-' }}</td>
                            <td class="px-2 py-1">{{ item.newStaff ? 'Yes' : 'No' }}</td>
                            <td class="px-2 py-1">{{ item.wageDay || '-' }}</td>
                            <td class="px-2 py-1">{{ item.wageWeek || '-' }}</td>
                            <td class="px-2 py-1">{{ item.increaseDate || '-' }}</td>
                            <td class="px-2 py-1">{{ item.stopDropOpt || '-' }}</td>
                            <td class="px-2 py-1">{{ item.startDate || '-' }}</td>
                            <td class="px-2 py-1">{{ item.fromProject || '-' }}</td>
                            <td class="px-2 py-1">{{ item.toProject || '-' }}</td>
                            <td class="px-2 py-1">{{ item.transferDate || '-' }}</td>
                            <td class="px-2 py-1">{{ item.endDate || '-' }}</td>
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

      <!-- History Tab -->
      <div v-if="activeTab === 2" id="tab-panel-2" role="tabpanel" class="space-y-4">
        <div class="overflow-x-auto no-scrollbar">
          <table class="w-full border-collapse rounded overflow-hidden text-sm sm:text-base bg-gray-100 dark:bg-[#0e1726]">
            <thead>
              <tr class="bg-gray-800 text-xs md:text-sm text-white font-bold">
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">#</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">ID</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Name</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">Last Updated</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden lg:table-cell">Previous Wage/Day</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden lg:table-cell">Previous Wage/Week</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden xl:table-cell">Adjustment Date</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden xl:table-cell">Reason</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden xl:table-cell">Approved By</th>
                <th class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">Details</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, index) in approvedHistory" :key="item.id">
                <tr class="border-b transition duration-150 ">
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">{{ index + 1 }}</td>
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">{{ item.id }}</td>
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">{{ item.name }}</td>
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden md:table-cell">{{ item.lastUpdated || '-' }}</td>
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden lg:table-cell">{{ item.previousWageDay || '-' }}</td>
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden lg:table-cell">{{ item.previousWageWeek || '-' }}</td>
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden xl:table-cell">{{ item.adjustmentDate || '-' }}</td>
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden xl:table-cell">{{ item.adjustmentReason || '-' }}</td>
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm hidden xl:table-cell">{{ item.approvedBy || '-' }}</td>
                  <td class="px-2 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm">
                    <button
                      @click="toggleDetails(item)"
                      class="text-gray-700 hover:text-gray-900 p-1"
                      :aria-expanded="selectedStaffId === item.id"
                      :aria-controls="'history-dropdown-' + item.id"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr v-if="selectedStaffId === item.id">
                  <td :colspan="10" class="p-2" :id="'history-dropdown-' + item.id">
                    <div class="dropdown-content bg-gray-100 dark:bg-gray-800  mt-1 p-2  shadow-lg ">
                      <table class="w-full border-collapse text-sm sm:text-base bg-gray-100 dark:bg-[#0e1726]">
                        <thead>
                          <tr class="bg-gray-600 text-xs md:text-sm text-white font-bold">
                            <th class="px-2 py-1 text-left">Requested By</th>
                            <th class="px-2 py-1 text-left">Request Date</th>
                            <th class="px-2 py-1 text-left">Checked By</th>
                            <th class="px-2 py-1 text-left">Check Date</th>
                            <th class="px-2 py-1 text-left">Approved By</th>
                            <th class="px-2 py-1 text-left">Approve Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="px-2 py-1">{{ item.requestedBy || '-' }}</td>
                            <td class="px-2 py-1">{{ item.requestDate || '-' }}</td>
                            <td class="px-2 py-1">{{ item.checkedBy || '-' }}</td>
                            <td class="px-2 py-1">{{ item.checkDate || '-' }}</td>
                            <td class="px-2 py-1">{{ item.approvedBy || '-' }}</td>
                            <td class="px-2 py-1">{{ item.approveDate || '-' }}</td>
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

      <div v-if="showAdjustmentModal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-start justify-center z-50">
        <div class="bg-gray-100 dark:bg-[#0e1726] w-full h-full p-4 sm:p-6 rounded-none sm:rounded-lg overflow-y-auto scrollbar-hide">
          <div class="bg-gray-900 rounded-md px-4 py-3 sm:px-6 sm:py-3 mb-2 flex justify-between items-center">
            <h2 class="text-lg sm:text-xl font-bold text-white">Adjust Staff Rate</h2>
            <button @click="closeAdjustmentModal" class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-300 text-sm">×</button>
          </div>
          <div class="p-3 sm:p-4 flex flex-col lg:flex-row gap-4">
            <div class="flex flex-col items-center mb-6 w-full lg:w-1/5 p-4">
              <label class="block text-sm font-bold text-gray-600 mb-2">Photo (Only File JPEG)</label>
              <img
                :src="selectedStaff.photo || '/src/image/construtor.jpg'"
                alt="Staff Photo"
                class="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg mb-2 border border-gray-300"
              />
              <input
                type="file"
                accept="image/jpeg"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-gray-500 focus:border-gray-500 text-xs sm:text-sm"
                @change="handlePhotoUpload"
              />
              <div class="mt-2 text-sm text-gray-600">
                <p>ID: {{ selectedStaff.id || '-' }}</p>
                <p>Name: {{ selectedStaff.name || '-' }}</p>
                <p>Position: {{ selectedStaff.position || '-' }}</p>
                <p>Level: {{ selectedStaff.level || '-' }}</p>
              </div>
            </div>

            <div class="wh-full ml-3">
              <form @submit.prevent="submitAdjustment">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full ml-5 p-6">
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">ID</label>
                    <input v-model="selectedStaff.id" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" readonly />
                    <i class="fas fa-id-card font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Name</label>
                    <input v-model="selectedStaff.name" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-user font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Position</label>
                    <input v-model="selectedStaff.position" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-briefcase font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Level</label>
                    <input v-model="selectedStaff.level" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-layer-group font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Grade</label>
                    <input v-model="selectedStaff.grade" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-graduation-cap font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Category</label>
                    <input v-model="selectedStaff.category" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-list-alt font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Direct Manager</label>
                    <input v-model="selectedStaff.directManager" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-user-tie font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Indirect Manager</label>
                    <input v-model="selectedStaff.indirectManager" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-user-tie font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Max Salary</label>
                    <input v-model="selectedStaff.maxSalary" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-money-bill-wave font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">New Staff</label>
                    <input
                      v-model="selectedStaff.newStaff"
                      type="text"
                      class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10"
                      placeholder="Enter Yes or No"
                    />
                    <i class="fas fa-user-plus font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Wage/Day</label>
                    <input v-model="selectedStaff.wageDay" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-dollar-sign font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Wage/Week</label>
                    <input v-model="selectedStaff.wageWeek" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-dollar-sign font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Increase Week & Date</label>
                    <input v-model="selectedStaff.increaseDate" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-calendar-alt font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Stop/Drop/Opt</label>
                    <input v-model="selectedStaff.stopDropOpt" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-ban font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Start Date</label>
                    <input v-model="selectedStaff.startDate" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-1 pl-10" />
                    <i class="fas fa-calendar-check font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">From Project</label>
                    <input v-model="selectedStaff.fromProject" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-project-diagram font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">To Project</label>
                    <input v-model="selectedStaff.toProject" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-project-diagram font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">Transfer Date</label>
                    <input v-model="selectedStaff.transferDate" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-exchange-alt font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                  <div class="relative">
                    <label class="block text-sm font-bold text-gray-600">End Date</label>
                    <input v-model="selectedStaff.endDate" type="text" class="form-input w-full text-sm text-gray-500 text-left h-10 p-2 border border-gray-300 rounded mt-2 pl-10" />
                    <i class="fas fa-calendar-times font-bold absolute -mt-5 left-2 transform -translate-y-1/2 w-8 h-8 bg-gray-100 dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
                  </div>
                </div>
                <div class="flex justify-end mt-4">
                  <button type="button" @click="closeAdjustmentModal" class="px-4 py-2 bg-gray-400 text-white rounded mr-2">Cancel</button>
                  <button type="submit" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-green-700 transition duration-300">Submit Adjustment</button>
                </div>
              </form>
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
      staff: [
        {
          id: '06605',
          name: 'John Smith',
          position: 'Engineer',
          level: 'Senior',
          grade: 'G6',
          category: 'Technical',
          directManager: 'John Doe',
          indirectManager: 'Jane Smith',
          maxSalary: '50000',
          newStaff: true,
          wageDay: '24000',
          wageWeek: '29000',
          increaseDate: '',
          stopDropOpt: 'Active',
          startDate: '06/07/25',
          fromProject: '',
          toProject: '',
          transferDate: '',
          endDate: '',
          other: '',
          status: 'Approved',
          previousWageDay: '23000',
          previousWageWeek: '28000',
          adjustmentDate: '11:31 AM +07, Monday, July 07, 2025',
          adjustmentReason: 'Manual Adjustment',
          lastUpdated: '11:31 AM +07, Monday, July 07, 2025',
          photo: '/src/image/construtor4.jpg',
          requestedBy: 'John Smith',
          requestDate: '2025-07-02',
          checkedBy: 'Jane Doe',
          checkDate: '2025-07-02',
          approvedBy: 'Robert Brown',
          approveDate: '2025-07-07'
        },
        {
          id: '08539',
          name: 'Alice Johnson',
          position: 'Technician',
          level: 'Mid',
          grade: 'G5',
          category: 'Technical',
          directManager: 'Alice Brown',
          indirectManager: '',
          maxSalary: '40000',
          newStaff: true,
          wageDay: '27000',
          wageWeek: '30000',
          increaseDate: '',
          stopDropOpt: 'Pending',
          startDate: '06/07/25',
          fromProject: '',
          toProject: '',
          transferDate: '',
          endDate: '',
          other: '',
          status: 'Pending',
          previousWageDay: '26000',
          previousWageWeek: '29000',
          adjustmentDate: '',
          adjustmentReason: '',
          lastUpdated: '11:31 AM +07, Monday, July 07, 2025',
          photo: '/src/image/construtor1.jpg',
          requestedBy: 'John Smith',
          requestDate: '2025-07-02',
          checkedBy: 'Jane Doe',
          checkDate: '2025-07-02',
          approvedBy: '',
          approveDate: ''
        },
        {
          id: '08591',
          name: 'Robert Wilson',
          position: 'Senior Engineer',
          level: 'Senior',
          grade: 'G7',
          category: 'Technical',
          directManager: 'Bob Wilson',
          indirectManager: 'Carol White',
          maxSalary: '60000',
          newStaff: true,
          wageDay: '40000',
          wageWeek: '45000',
          increaseDate: '',
          stopDropOpt: 'Inactive',
          startDate: '06/07/25',
          fromProject: '',
          toProject: '',
          transferDate: '',
          endDate: '',
          other: '',
          status: 'Rejected',
          previousWageDay: '39000',
          previousWageWeek: '44000',
          adjustmentDate: '',
          adjustmentReason: '',
          lastUpdated: '11:31 AM +07, Monday, July 07, 2025',
          photo: '/src/image/construtor5.jpg',
          requestedBy: 'John Smith',
          requestDate: '2025-07-02',
          checkedBy: 'Jane Doe',
          checkDate: '2025-07-02',
          approvedBy: '',
          approveDate: ''
        },
        {
          id: '08598',
          name: 'Robert Wilson',
          position: 'Engineer',
          level: 'Senior',
          grade: 'G7',
          category: 'Technical',
          directManager: 'Bob Wilson',
          indirectManager: 'Carol White',
          maxSalary: '60000',
          newStaff: true,
          wageDay: '60000',
          wageWeek: '55000',
          increaseDate: '',
          stopDropOpt: 'Inactive',
          startDate: '01/07/25',
          fromProject: '',
          toProject: '',
          transferDate: '',
          endDate: '',
          other: '',
          status: 'Approved',
          previousWageDay: '39000',
          previousWageWeek: '44000',
          adjustmentDate: '11:31 AM +07, Monday, July 07, 2025',
          adjustmentReason: 'Manual Adjustment',
          lastUpdated: '11:31 AM +07, Monday, July 07, 2025',
          photo: '/src/image/construtor2.jpg',
          requestedBy: 'John Smith',
          requestDate: '2025-07-02',
          checkedBy: 'Jane Doe',
          checkDate: '2025-07-02',
          approvedBy: 'Robert Brown',
          approveDate: '2025-07-07'
        },
         {
          id: '08592',
          name: 'Robert Wilson',
          position: 'Engineer',
          level: 'Senior',
          grade: 'G7',
          category: 'Technical',
          directManager: 'Bob Wilson',
          indirectManager: 'Carol White',
          maxSalary: '60000',
          newStaff: true,
          wageDay: '60000',
          wageWeek: '55000',
          increaseDate: '',
          stopDropOpt: 'Inactive',
          startDate: '01/07/25',
          fromProject: '',
          toProject: '',
          transferDate: '',
          endDate: '',
          other: '',
          status: 'Approved',
          previousWageDay: '39000',
          previousWageWeek: '44000',
          adjustmentDate: '11:31 AM +07, Monday, July 07, 2025',
          adjustmentReason: 'Manual Adjustment',
          lastUpdated: '11:31 AM +07, Monday, July 07, 2025',
          photo: '/src/image/construtor3.jpg',
          requestedBy: 'John Smith',
          requestDate: '2025-07-02',
          checkedBy: 'Jane Doe',
          checkDate: '2025-07-02',
          approvedBy: 'Robert Brown',
          approveDate: '2025-07-07'
        },
      ],
      requestedBy: 'John Smith',
      requestDate: '2025-07-02',
      checkedBy: 'Jane Doe',
      checkDate: '2025-07-02',
      dueDate: '',
      acknowledgedBy: '',
      acknowledgeDate: '',
      activeTab: 0,
      tabs: [
        { name: 'StaffID' },
        { name: 'Staff Adjustment Approved' },
        { name: 'History' },
      ],
      showAdjustmentModal: false,
      selectedStaff: {},
      selectedStaffId: null,
      currentFilter: 'All',
    };
  },
  computed: { 
     store() {
      return useAppStore();
    },
    approvedHistory() {
      return this.staff.filter(item => item.status === 'Approved' && item.adjustmentDate);
    },
    filteredStaff() {
      if (this.currentFilter === 'Approved') {
        return this.staff.filter(item => item.status === 'Approved');
      } else if (this.currentFilter === 'Pending') {
        return this.staff.filter(item => item.status === 'Pending');
      } else if (this.currentFilter === 'Rejected') {
        return this.staff.filter(item => item.status === 'Rejected');
      }
      return this.staff;
    }
  },
  created() {
    this.showSubTable = this.staff.map(() => false);
  },
  methods: {
    toggleDetails(item) {
      this.selectedStaffId = this.selectedStaffId === item.id ? null : item.id;
    },
    openAdjustmentModal(item) {
      this.selectedStaff = { ...item };
      this.showAdjustmentModal = true;
    },
    closeAdjustmentModal() {
      this.showAdjustmentModal = false;
      this.selectedStaff = {};
    },
    submitAdjustment() {
      if (!this.validateWages(this.selectedStaff)) {
        alert('Please enter valid numerical values for Wage/Day and Wage/Week.');
        return;
      }
      const index = this.staff.findIndex(staff => staff.id === this.selectedStaff.id);
      if (index !== -1) {
        this.staff[index] = { ...this.selectedStaff };
        this.staff[index].previousWageDay = this.staff[index].previousWageDay || this.staff[index].wageDay;
        this.staff[index].previousWageWeek = this.staff[index].previousWageWeek || this.staff[index].wageWeek;
        this.staff[index].adjustmentDate = '11:31 AM +07, Monday, July 07, 2025';
        this.staff[index].adjustmentReason = 'Manual Adjustment';
        this.staff[index].lastUpdated = '11:31 AM +07, Monday, July 07, 2025';
        this.staff[index].status = 'Pending';
        this.staff[index].approvedBy = '';
        this.staff[index].approveDate = '';
      }
      this.closeAdjustmentModal();
      alert(`Rate adjusted for ${this.selectedStaff.name}: Wage/Day: ${this.selectedStaff.wageDay}, Wage/Week: ${this.selectedStaff.wageWeek}`);
    },
    validateWages(staff) {
      const wageDay = parseFloat(staff.wageDay);
      const wageWeek = parseFloat(staff.wageWeek);
      const maxSalary = parseFloat(staff.maxSalary);
      return (
        !isNaN(wageDay) &&
        !isNaN(wageWeek) &&
        wageDay > 0 &&
        wageWeek > 0 &&
        (!maxSalary || wageDay <= maxSalary)
      );
    },
    handlePhotoUpload(event) {
      const file = event.target.files[0];
      if (file && file.type === 'image/jpeg') {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedStaff.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload a JPEG file only.');
      }
    },
    closeAllSubTables() {
      this.selectedStaffId = null;
    }
  },
  mounted() {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('table') && !event.target.closest('button')) {
        this.closeAllSubTables();
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeAllSubTables);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap');
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.dropdown-content {
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 0.25rem;
  padding: 1rem;
}
</style>
```