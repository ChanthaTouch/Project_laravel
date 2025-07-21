<template>
  <div class="min-h-screen bg-white dark:bg-[#0e1726] w-full" :class="{ 'dark text-gray-600-dark': store.semidark }">
    <div class="w-full p-4">
      <div class="bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
        <h2 class="text-xl font-bold text-gray-300">Staff Timesheet List</h2>
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
        
      <!-- Staff List Table -->
      <div v-if="!showTimesheetForm" class="bg-gray-800 p-4 sm:p-6 rounded shadow-lg">
        <h2 class="text-sm sm:text-base font-semibold text-gray-400 mb-2">Staff List</h2>
        <!-- Search Input -->
        <div class="mb-4 relative">
          <input
            v-model="searchStaff"
            type="text"
            placeholder="Search Staff by ID, Name, Project, or Timesheet..."
            class="w-full h-10 px-3 py-2 border-none rounded text-sm sm:text-base focus:ring-gray-500 focus:border-gray-500 bg-gray-500 pl-12 custom-date-input"
          />
          <i class="fas fa-search absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
        </div>
        <!-- Mobile Card Layout -->
        <div v-if="isMobile" class="space-y-4">
          <div v-for="staff in paginatedStaff" :key="staff.id" class="bg-gray-50 p-3 sm:p-4 rounded">
            <p class="text-sm sm:text-base"><strong>ID:</strong> {{ staff.id }}</p>
            <p class="text-sm sm:text-base"><strong>Name:</strong> {{ staff.name }}</p>
            <p class="text-sm sm:text-base"><strong>Project:</strong> {{ staff.project }}</p>
            <p class="text-sm sm:text-base"><strong>Timesheet:</strong> {{ staff.timesheet }}</p>
            <p class="text-sm sm:text-base"><strong>Total Time:</strong> {{ staff.totalTime || '0.0' }}</p>
            <button @click="showTimesheet(staff)" class="bg-gray-800 text-gray-300 px-4 py-2 rounded text-sm sm:text-base mt-2 w-full">Show</button>
          </div>
        </div>
        <!-- Desktop/Tablet Table -->
        <div v-else class="overflow-x-auto h-auto bg-white dark:bg-[#0e1726] shadow-lg rounded-lg ">
          <table class="w-full border-collapse">
            <thead>
              <tr class="text-sm sm:text-base font-bold bg-gray-900 text-gray-300">
                <th class=" text-gray-400 p-2 text-left">ID Staff</th>
                <th class=" text-gray-400 p-2 text-left">Name Staff</th>
                <th class=" text-gray-400 p-2 text-left">Project</th>
                <th class=" text-gray-400 p-2 text-left">Timesheet</th>
                <th class=" text-gray-400 p-2 text-left">Total Time</th>
                <th class=" text-gray-400 p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td colspan="6" class=" p-2 text-center text-sm sm:text-base text-gray-500">Loading...</td>
              </tr>
              <tr v-else-if="filteredStaffList.length === 0">
                <td colspan="6" class=" p-2 text-center text-sm sm:text-base text-gray-500">No staff found.</td>
              </tr>
              <tr v-else v-for="staff in paginatedStaff" :key="staff.id" class="">
                <td class=" text-gray-400 p-2 text-sm sm:text-base ">{{ staff.id }}</td>
                <td class=" text-gray-400 p-2 text-sm sm:text-base ">{{ staff.name }}</td>
                <td class=" text-gray-400 p-2 text-sm sm:text-base ">{{ staff.project }}</td>
                <td class=" text-gray-400 p-2 text-sm sm:text-base ">{{ staff.timesheet }}</td>
                <td class=" text-gray-400 p-2 text-sm sm:text-base ">{{ staff.totalTime || '0.0' }}</td>
                <td class=" text-gray-400 p-2 text-center">
                  <button
                    @click="showTimesheet(staff)"
                    class="bg-gray-800 text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base hover:bg-gray-700"
                  >
                    Show
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Pagination -->
        <div class="flex justify-end mt-4 flex-wrap gap-2" v-if="totalPages > 1">
          <button
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="bg-gray-800 text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-gray-700 text-sm sm:text-base"
            :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
          >
            Previous
          </button>
          <span class="text-sm sm:text-base text-gray-600 mx-2 self-center">Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="bg-gray-800 text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-gray-700 text-sm sm:text-base"
            :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
          >
            Next
          </button>
        </div>
      </div>

      <!-- Timesheet Form -->
      <form @submit.prevent="saveAndSubmitTimesheet" v-if="showTimesheetForm" class="space-y-4 sm:space-y-6 w-full bg-gray-800 p-4 sm:p-6 rounded shadow-lg">
        <!-- User and Timesheet Information -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <!-- User Information -->
          <div class="bg-white dark:bg-[#0e1726] p-2 sm:p-3 lg:p-4 rounded-lg shadow">
            <h2 class="text-sm sm:text-base font-semibold text-gray-400 mb-2">EMPLOYEE INFORMATION</h2>
            <div class="flex items-center gap-3 sm:gap-4">
              <img :src="user.photo || '/src/image/manprofile.png'" alt="User Photo" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300" />
              <div>
                <p class="text-sm sm:text-base"><strong>Employee:</strong> {{ user.name }}</p>
                <p class="text-sm sm:text-base"><strong>Code:</strong> {{ user.id }}</p>
                <p class="text-sm sm:text-base"><strong>Manager:</strong> {{ user.manager }}</p>
              </div>
            </div>
          </div>
          <!-- Timesheet Information -->
          <div class="bg-white dark:bg-[#0e1726] p-2 sm:p-3 lg:p-4 rounded-lg shadow">
            <h2 class="text-sm sm:text-base font-semibold text-gray-400 mb-2">TIMESHEET INFORMATION</h2>
            <p class="text-sm sm:text-base"><strong>Week:</strong> 24</p>
            <p class="text-sm sm:text-base"><strong>Period:</strong> 09/06/2025 - 15/06/2025</p>
            <p class="text-sm sm:text-base">
              <strong>Status:</strong>
              <span :class="{
                'text-yellow-600': timesheetStatus === 'Not Submitted',
                'text-green-600': timesheetStatus === 'Submitted',
                'text-blue-600': timesheetStatus === 'Saved'
              }">
                {{ timesheetStatus }}
              </span>
              <span class="text-gray-500 ml-2">(Copy from week)</span>
            </p>
          </div>
        </div>

        <!-- Information Section -->
        <div class="bg-white dark:bg-[#0e1726] p-2 sm:p-3 rounded mb-4 text-sm sm:text-base flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3">
          <span class="text-gray-400">« Previous week | Current week | Quick jump | Next week »</span>
          <span class="text-gray-500">Note: You don't have leave for this week. (Submit Leave)</span>
          <span class="text-red-500">Timesheet submission needed</span>
        </div>

        <!-- Timesheet Entry Section -->
        <div class="bg-white dark:bg-[#0e1726] p-2 sm:p-3 lg:p-4 rounded-lg shadow mb-4">
          <h2 class="text-sm sm:text-base font-semibold text-gray-400 mb-2">TIMESHEET ENTRY</h2>
          <!-- Multi-Select Dropdowns -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
            <!-- Project Multi-Select -->
            <div>
              <label class="text-gray-400 font-bold text-sm sm:text-base">Project</label>
              <div class="relative">
                <div class="relative">
                  <input
                    v-model="searchProject"
                    type="text"
                    :placeholder="selectedProjects.length ? '' : 'Select Projects...'"
                    :value="selectedProjects.length ? selectedProjects.map(id => projects.find(p => p.id === id)?.name).join(', ') : ''"
                    class="w-full px-2 sm:px-3 bg-gray-200 dark:bg-gray-800 py-1.5 sm:py-2 border border-gray-800 rounded text-sm sm:text-base pr-8 sm:pr-10"
                    :class="{ 'text-black': selectedProjects.length, 'text-gray-500': !selectedProjects.length }"
                    @focus="showProjectDropdown = true"
                    @blur="delayHideDropdown('project')"
                    @input="handleSearchInput('selectedProjects', $event.target.value)"
                  />
                  <button
                    v-if="selectedProjects.length"
                    @click="clearSelections('selectedProjects')"
                    class="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm"
                  >
                    ✕
                  </button>
                </div>
                <div v-if="showProjectDropdown" class="absolute z-10 w-full bg-white dark:bg-[#0e1726] border border-gray-300 rounded-lg mt-2 max-h-60 overflow-y-auto dropdown-no-scrollbar">
                  <div
                    v-for="project in filteredProjects"
                    :key="project.id"
                    class="px-2 sm:px-3 py-1.5 sm:p-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                    :class="{ 'bg-white dark:bg-gray-600 font-semibold': selectedProjects.includes(project.id) }"
                    @click="toggleSelection('selectedProjects', project.id)"
                  >
                    {{ project.name }}
                  </div>
                </div>
              </div>
            </div>
            <!-- Contract Multi-Select -->
            <div>
              <label class="text-gray-400 font-bold text-sm sm:text-base">Contract</label>
              <div class="relative">
                <div class="relative">
                  <input
                    v-model="searchContract"
                    type="text"
                    :placeholder="selectedContracts.length ? '' : 'Select Contracts...'"
                    :value="selectedContracts.length ? selectedContracts.map(id => contracts.find(c => c.id === id)?.name).join(', ') : ''"
                    class="w-full px-2 sm:px-3 bg-gray-200 dark:bg-gray-800 py-1.5 sm:py-2 border border-gray-800 rounded text-sm sm:text-base pr-8 sm:pr-10"
                    :class="{ 'text-black': selectedContracts.length, 'text-gray-500': !selectedContracts.length }"
                    @focus="showContractDropdown = true"
                    @blur="delayHideDropdown('contract')"
                    @input="handleSearchInput('selectedContracts', $event.target.value)"
                  />
                  <button
                    v-if="selectedContracts.length"
                    @click="clearSelections('selectedContracts')"
                    class="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm"
                  >
                    ✕
                  </button>
                </div>
                <div v-if="showContractDropdown" class="absolute z-10 w-full bg-white dark:bg-[#0e1726] border border-gray-300 rounded-lg mt-2 max-h-60 overflow-y-auto dropdown-no-scrollbar">
                  <div
                    v-for="contract in filteredContracts"
                    :key="contract.id"
                    class="px-2 sm:px-3 py-1.5 sm:p-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                    :class="{ 'bg-white dark:bg-gray-600 font-semibold': selectedContracts.includes(contract.id) }"
                    @click="toggleSelection('selectedContracts', contract.id)"
                  >
                    {{ contract.name }}
                  </div>
                </div>
              </div>
            </div>
            <!-- Component Multi-Select -->
            <div>
              <label class="text-gray-400 font-bold text-sm sm:text-base">Component</label>
              <div class="relative">
                <div class="relative">
                  <input
                    v-model="searchComponent"
                    type="text"
                    :placeholder="selectedComponents.length ? '' : 'Select Components...'"
                    :value="selectedComponents.length ? selectedComponents.map(id => components.find(c => c.id === id)?.name).join(', ') : ''"
                   class="w-full px-2 sm:px-3 bg-gray-200 dark:bg-gray-800 py-1.5 sm:py-2 border border-gray-800 rounded text-sm sm:text-base pr-8 sm:pr-10"
                    :class="{ 'text-black': selectedComponents.length, 'text-gray-500': !selectedComponents.length }"
                    @focus="showComponentDropdown = true"
                    @blur="delayHideDropdown('component')"
                    @input="handleSearchInput('selectedComponents', $event.target.value)"
                  />
                  <button
                    v-if="selectedComponents.length"
                    @click="clearSelections('selectedComponents')"
                    class="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm"
                  >
                    ✕
                  </button>
                </div>
                <div v-if="showComponentDropdown" class="absolute z-10 w-full bg-white dark:bg-[#0e1726] border border-gray-300 rounded-lg mt-2 max-h-60 overflow-y-auto dropdown-no-scrollbar">
                  <div
                    v-for="component in filteredComponents"
                    :key="component.id"
                    class="px-2 sm:px-3 py-1.5 sm:p-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                    :class="{ 'bg-white dark:bg-gray-600 font-semibold': selectedComponents.includes(component.id) }"
                    @click="toggleSelection('selectedComponents', component.id)"
                  >
                    {{ component.name }}
                  </div>
                </div>
              </div>
            </div>
            <!-- Phase Multi-Select -->
            <div>
              <label class="text-gray-400 font-bold text-sm sm:text-base">Phase</label>
              <div class="relative">
                <div class="relative">
                  <input
                    v-model="searchPhase"
                    type="text"
                    :placeholder="selectedPhases.length ? '' : 'Select Phases...'"
                    :value="selectedPhases.length ? selectedPhases.map(id => phases.find(p => p.id === id)?.name).join(', ') : ''"
                   class="w-full px-2 sm:px-3 bg-gray-200 dark:bg-gray-800 py-1.5 sm:py-2 border border-gray-800 rounded text-sm sm:text-base pr-8 sm:pr-10"
                    :class="{ 'text-black': selectedPhases.length, 'text-gray-500': !selectedPhases.length }"
                    @focus="showPhaseDropdown = true"
                    @blur="delayHideDropdown('phase')"
                    @input="handleSearchInput('selectedPhases', $event.target.value)"
                  />
                  <button
                    v-if="selectedPhases.length"
                    @click="clearSelections('selectedPhases')"
                    class="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm"
                  >
                    ✕
                  </button>
                </div>
                <div v-if="showPhaseDropdown" class="absolute z-10 w-full bg-white dark:bg-[#0e1726] border border-gray-300 rounded-lg mt-2 max-h-60 overflow-y-auto dropdown-no-scrollbar">
                  <div
                    v-for="phase in filteredPhases"
                    :key="phase.id"
                    class="px-2 sm:px-3 py-1.5 sm:p-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                    :class="{ 'bg-white dark:bg-gray-600 font-semibold': selectedPhases.includes(phase.id) }"
                    @click="toggleSelection('selectedPhases', phase.id)"
                  >
                    {{ phase.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Timesheet Table -->
          <div class="overflow-x-auto h-auto">
            <!-- Mobile: Show one day at a time with tabs -->
            <div v-if="isMobile" class="mb-4">
              <div class="flex overflow-x-auto space-x-1 sm:space-x-2 mb-2">
                <button
                  v-for="day in days"
                  :key="day.date"
                  @click="selectedDay = day.date"
                  class="px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm whitespace-nowrap"
                  :class="{
                    'bg-gray-800 text-gray-300': selectedDay === day.date,
                    'bg-white dark:bg-gray-600 text-gray-400': selectedDay !== day.date,
                    'bg-orange-200': day.isWeekend
                  }"
                >
                  {{ day.name }} {{ day.date }}
                </button>
              </div>
              <div class="bg-white dark:bg-[#0e1726] p-2 sm:p-3 rounded">
                <div class="mb-2">
                  <label class="text-sm sm:text-base font-semibold text-gray-400">Chargeable Time</label>
                  <input
                    type="number"
                    v-model.number="timesheet[selectedDay]"
                    min="0"
                    max="24"
                    step="0.1"
                    class="w-full bg-white dark:bg-[#0e1726] px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded text-sm sm:text-base text-center focus:ring-gray-500 focus:border-gray-500"
                    @input="validateHours(selectedDay)"
                  />
                </div>
                <div>
                  <label class="text-sm sm:text-base font-semibold text-gray-400">Non-Chargeable Time</label>
                  <div class="relative">
                    <input
                      v-model="searchNonChargeable"
                      type="text"
                      :placeholder="selectedNonChargeable.length ? '' : 'Select Non-Chargeable...'"
                      :value="selectedNonChargeable.length ? selectedNonChargeable.map(id => nonChargeableOptions.find(o => o.id === id)?.name).join(', ') : ''"
                      class="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded text-sm sm:text-base pr-8 sm:pr-10"
                      :class="{ 'text-black': selectedNonChargeable.length, 'text-gray-500': !selectedNonChargeable.length }"
                      @focus="showNonChargeableDropdown = true"
                      @blur="delayHideDropdown('nonChargeable')"
                      @input="handleSearchInput('selectedNonChargeable', $event.target.value)"
                    />
                    <button
                      v-if="selectedNonChargeable.length"
                      @click="clearSelections('selectedNonChargeable')"
                      class="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm"
                    >
                      ✕
                    </button>
                    <div v-if="showNonChargeableDropdown" class="absolute z-10 w-full bg-white dark:bg-[#0e1726] border border-gray-300 rounded-lg mt-2 max-h-60 overflow-y-auto dropdown-no-scrollbar">
                      <div
                        v-for="option in filteredNonChargeableOptions"
                        :key="option.id"
                        class="px-2 sm:px-3 py-1.5 sm:p-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                        :class="{ 'bg-white dark:bg-gray-600 font-semibold': selectedNonChargeable.includes(option.id) }"
                        @click="toggleSelection('selectedNonChargeable', option.id)"
                      >
                        {{ option.name }}
                      </div>
                    </div>
                  </div>
                  <input
                    type="number"
                    v-model.number="nonChargeableTimesheet[selectedDay]"
                    min="0"
                    max="24"
                    step="0.1"
                    class="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded text-sm sm:text-base text-center focus:ring-gray-500 focus:border-gray-500 mt-2"
                    @input="validateHours(selectedDay)"
                  />
                </div>
                <p class="text-sm sm:text-base mt-2"><strong>Total:</strong> {{ (timesheet[selectedDay] || 0) + (nonChargeableTimesheet[selectedDay] || 0) }}</p>
              </div>
            </div>
            <!-- Desktop/Tablet: Full table -->
            <table v-else class="w-full border-collapse">
              <thead>
                <tr class="bg-white dark:bg-[#0e1726] text-gray-400">
                  <th class=" p-2 text-center text-xs sm:text-sm">Week/day</th>
                  <th v-for="day in days" :key="day.date" class=" p-2 text-center text-xs sm:text-sm">
                    {{ day.name }}<br />{{ day.date }}
                  </th>
                  <th class=" text-gray-400 p-2 text-center text-sm sm:text-base">Total</th>
                </tr>
              </thead>
              <tbody>
                <!-- Chargeable Time -->
                <tr class="">
                  <td class=" p-2 text-sm sm:text-base font-semibold text-gray-400">Total Chargeable time</td>
                  <td v-for="day in days" :key="day.date" class=" p-2 text-center">
                    <input
                      type="number"
                      v-model.number="timesheet[day.date]"
                      min="0"
                      max="24"
                      step="0.1"
                      class="w-16 bg-gray-200 dark:bg-gray-800 text-gray-400 sm:w-20 px-1 sm:px-2 py-1 sm:py-1.5 border border-gray-300 rounded text-sm sm:text-base text-center focus:ring-gray-500 focus:border-gray-500"
                      :class="{ 'bg-gray-200 dark:bg-gray-600': day.isWeekend }"
                      @input="validateHours(day.date)"
                    />
                  </td>
                  <td class=" p-2 text-center  text-sm sm:text-base font-semibold text-gray-400">{{ totalChargeableHours }}</td>
                </tr>
                <!-- Non-Chargeable Time -->
                <tr class="">
                  <td class=" p-2 text-sm sm:text-base">
                    <div class="relative">
                      <div class="relative">
                        <input
                          v-model="searchNonChargeable"
                          type="text"
                          :placeholder="selectedNonChargeable.length ? '' : 'Select Non-Chargeable...'"
                          :value="selectedNonChargeable.length ? selectedNonChargeable.map(id => nonChargeableOptions.find(o => o.id === id)?.name).join(', ') : ''"
                          class="w-full px-2 sm:px-3 bg-white dark:bg-[#0e1726] py-1.5 sm:py-2 border  rounded text-sm sm:text-base pr-8 sm:pr-10"
                          :class="{ 'text-black': selectedNonChargeable.length, 'text-gray-500': !selectedNonChargeable.length }"
                          @focus="showNonChargeableDropdown = true"
                          @blur="delayHideDropdown('nonChargeable')"
                          @input="handleSearchInput('selectedNonChargeable', $event.target.value)"
                        />
                        <button
                          v-if="selectedNonChargeable.length"
                          @click="clearSelections('selectedNonChargeable')"
                          class="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm"
                        >
                          ✕
                        </button>
                      </div>
                      <div v-if="showNonChargeableDropdown" class="absolute z-10 w-full bg-white dark:bg-[#0e1726] border  rounded-lg mt-2 max-h-60 overflow-y-auto dropdown-no-scrollbar">
                        <div
                          v-for="option in filteredNonChargeableOptions"
                          :key="option.id"
                          class="px-2 sm:px-3 py-1.5 sm:p-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                          :class="{ 'bg-gray-200 dark:bg-[#0e1726] font-semibold': selectedNonChargeable.includes(option.id) }"
                          @click="toggleSelection('selectedNonChargeable', option.id)"
                        >
                          {{ option.name }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td v-for="day in days" :key="day.date" class=" p-2 text-center">
                    <input
                      type="number"
                      v-model.number="nonChargeableTimesheet[day.date]"
                      min="0"
                      max="24"
                      step="0.1"
                      class="w-16 sm:w-20 bg-gray-200 dark:bg-gray-800 px-1 sm:px-2 py-1 sm:py-1.5 border-gray-600 rounded text-sm sm:text-base text-center focus:ring-gray-500 focus:border-gray-500"
                      :class="{ 'bg-gray-200 dark:bg-gray-600': day.isWeekend }"
                      @input="validateHours(day.date)"
                    />
                  </td>
                  <td class=" p-2 text-center text-sm sm:text-base font-semibold text-gray-400">{{ totalNonChargeableHours }}</td>
                </tr>
                <!-- Total Time -->
                <tr class="bg-gray-200 dark:bg-[#0e1726]">
                  <td class="p-2 text-sm sm:text-base font-semibold text-gray-400">Total time</td>
                  <td v-for="day in days" :key="day.date" class=" p-2 text-center text-sm sm:text-base text-gray-400">
                    {{ (timesheet[day.date] || 0) + (nonChargeableTimesheet[day.date] || 0) }}
                  </td>
                  <td class="p-2 text-center text-sm sm:text-base font-semibold text-gray-400">{{ totalHours }}</td>
                </tr>
              </tbody>
            </table>
            <br> 
            <br>
          </div>
          <!-- Comment Section -->
          <div class="bg-white dark:bg-[#0e1726] p-2 sm:p-3 lg:p-4 rounded-lg shadow mb-4">
            <h2 class="text-sm sm:text-base font-semibold text-gray-400 mb-2">COMMENT</h2>
            <textarea v-model="comment" class="w-full px-2 sm:px-3 py-1.5 sm:py-2  bg-gray-200 dark:bg-gray-800 rounded text-sm sm:text-base" rows="4" placeholder="Add your comments here..."></textarea>
          </div>
          <!-- Action Buttons -->
          <div class="flex justify-end space-x-3 sm:space-x-4 flex-wrap gap-2">
            <button
              type="button"
              @click="cancelTimesheet"
              class="bg-gray-400 text-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded 0 text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-gray-800 text-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-gray-700 text-sm sm:text-base"
            >
              Save and Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/index';
export default {
  name: 'TimesheetStaff',
  data() {
    return {
      loading: false,
      staffList: [
        { id: 'S001', name: 'Alice', project: 'Highway Expansion', timesheet: 'Filled', manager: 'Manager A', photo: '', totalTime: '0.0' },
        { id: 'S002', name: 'Bob', project: 'Commercial Complex', timesheet: 'Pending', manager: 'Manager B', photo: '', totalTime: '0.0' },
        { id: 'S003', name: 'Charlie', project: 'Residential Tower', timesheet: 'Filled', manager: 'Manager C', photo: '', totalTime: '0.0' },
      ],
      searchStaff: '',
      showTimesheetForm: false,
      user: {},
      timesheetStatus: 'Not Submitted',
      selectedProjects: [],
      selectedContracts: [],
      selectedComponents: [],
      selectedPhases: [],
      selectedNonChargeable: [],
      searchProject: '',
      searchContract: '',
      searchComponent: '',
      searchPhase: '',
      searchNonChargeable: '',
      showProjectDropdown: false,
      showContractDropdown: false,
      showComponentDropdown: false,
      showPhaseDropdown: false,
      showNonChargeableDropdown: false,
      comment: '',
      projects: [
        { id: 1, name: 'Highway Expansion' },
        { id: 2, name: 'Commercial Complex' },
        { id: 3, name: 'Residential Tower' },
        { id: 4, name: 'Bridge Reconstruction' },
        { id: 5, name: 'Airport Runway Upgrade' },
        { id: 6, name: 'Water Treatment Plant' },
        { id: 7, name: 'Railway Station' },
        { id: 8, name: 'Dam Construction' },
        { id: 9, name: 'Industrial Warehouse' },
        { id: 10, name: 'Urban Park Development' },
      ],
      contracts: [
        { id: 1, name: 'Fixed-Price Contract' },
        { id: 2, name: 'Cost-Plus Contract' },
        { id: 3, name: 'Time and Materials' },
        { id: 4, name: 'Unit Price Contract' },
        { id: 5, name: 'Design-Build Contract' },
        { id: 6, name: 'Lump Sum Contract' },
        { id: 7, name: 'Guaranteed Maximum Price' },
        { id: 8, name: 'Incentive Contract' },
        { id: 9, name: 'Build-Operate-Transfer' },
        { id: 10, name: 'Joint Venture Contract' },
      ],
      components: [
        { id: 1, name: 'Foundation Work' },
        { id: 2, name: 'Structural Framing' },
        { id: 3, name: 'Concrete Pouring' },
        { id: 4, name: 'Masonry Work' },
        { id: 5, name: 'Roofing Installation' },
        { id: 6, name: 'Plumbing Systems' },
        { id: 7, name: 'Electrical Systems' },
        { id: 8, name: 'HVAC Installation' },
        { id: 9, name: 'Road Paving' },
        { id: 10, name: 'Landscaping' },
      ],
      phases: [
        { id: 1, name: 'Site Preparation' },
        { id: 2, name: 'Design and Planning' },
        { id: 3, name: 'Foundation Construction' },
        { id: 4, name: 'Structural Erection' },
        { id: 5, name: 'Exterior Finishing' },
        { id: 6, name: 'Interior Finishing' },
        { id: 7, name: 'Utilities Installation' },
        { id: 8, name: 'Testing and Commissioning' },
        { id: 9, name: 'Handover and Occupancy' },
        { id: 10, name: 'Maintenance Planning' },
      ],
      nonChargeableOptions: [
        { id: 1, name: 'Training' },
        { id: 2, name: 'Admin Work' },
      ],
      days: [
        { name: 'Mon', date: '09/06', isWeekend: false },
        { name: 'Tue', date: '10/06', isWeekend: false },
        { name: 'Wed', date: '11/06', isWeekend: false },
        { name: 'Thu', date: '12/06', isWeekend: false },
        { name: 'Fri', date: '13/06', isWeekend: false },
        { name: 'Sat', date: '14/06', isWeekend: true },
        { name: 'Sun', date: '15/06', isWeekend: true },
      ],
      timesheet: {
        '09/06': 0,
        '10/06': 0,
        '11/06': 0,
        '12/06': 0,
        '13/06': 0,
        '14/06': 0,
        '15/06': 0,
      },
      nonChargeableTimesheet: {
        '09/06': 0,
        '10/06': 0,
        '11/06': 0,
        '12/06': 0,
        '13/06': 0,
        '14/06': 0,
        '15/06': 0,
      },
      currentPage: 1,
      pageSize: 5,
      selectedDay: '09/06', // Default to first day for mobile view
      windowWidth: window.innerWidth, // Initial window width
    };
  },
  computed: {
     store() {
      return useAppStore();
    },
    isMobile() {
      return this.windowWidth < 640; // Adjusted breakpoint for mobile
    },
    filteredStaffList() {
      if (!this.searchStaff) return this.staffList;
      const query = this.searchStaff.toLowerCase();
      return this.staffList.filter(staff =>
        staff.id.toLowerCase().includes(query) ||
        staff.name.toLowerCase().includes(query) ||
        staff.project.toLowerCase().includes(query) ||
        staff.timesheet.toLowerCase().includes(query)
      );
    },
    totalPages() {
      return Math.ceil(this.filteredStaffList.length / this.pageSize);
    },
    paginatedStaff() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredStaffList.slice(start, start + this.pageSize);
    },
    totalChargeableHours() {
      return Object.values(this.timesheet).reduce((sum, hours) => sum + Number(hours), 0).toFixed(1);
    },
    totalNonChargeableHours() {
      return Object.values(this.nonChargeableTimesheet).reduce((sum, hours) => sum + Number(hours), 0).toFixed(1);
    },
    totalHours() {
      return (Number(this.totalChargeableHours) + Number(this.totalNonChargeableHours)).toFixed(1);
    },
    filteredProjects() {
      return this.projects.filter(project =>
        project.name.toLowerCase().includes(this.searchProject.toLowerCase())
      );
    },
    filteredContracts() {
      return this.contracts.filter(contract =>
        contract.name.toLowerCase().includes(this.searchContract.toLowerCase())
      );
    },
    filteredComponents() {
      return this.components.filter(component =>
        component.name.toLowerCase().includes(this.searchComponent.toLowerCase())
      );
    },
    filteredPhases() {
      return this.phases.filter(phase =>
        phase.name.toLowerCase().includes(this.searchPhase.toLowerCase())
      );
    },
    filteredNonChargeableOptions() {
      return this.nonChargeableOptions.filter(option =>
        option.name.toLowerCase().includes(this.searchNonChargeable.toLowerCase())
      );
    },
  },
  methods: {
    showTimesheet(staff) {
      this.user = { ...staff, photo: staff.photo || '/src/image/manprofile.png' };
      this.showTimesheetForm = true;
      this.selectedProjects = [];
      this.selectedContracts = [];
      this.selectedComponents = [];
      this.selectedPhases = [];
      this.selectedNonChargeable = [];
      this.searchProject = '';
      this.searchContract = '';
      this.searchComponent = '';
      this.searchPhase = '';
      this.searchNonChargeable = '';
      this.showProjectDropdown = false;
      this.showContractDropdown = false;
      this.showComponentDropdown = false;
      this.showPhaseDropdown = false;
      this.showNonChargeableDropdown = false;
      this.comment = '';
      this.timesheetStatus = 'Not Submitted';
      this.timesheet = {
        '09/06': 0,
        '10/06': 0,
        '11/06': 0,
        '12/06': 0,
        '13/06': 0,
        '14/06': 0,
        '15/06': 0,
      };
      this.nonChargeableTimesheet = {
        '09/06': 0,
        '10/06': 0,
        '11/06': 0,
        '12/06': 0,
        '13/06': 0,
        '14/06': 0,
        '15/06': 0,
      };
      this.selectedDay = '09/06';
    },
    cancelTimesheet() {
      this.showTimesheetForm = false;
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    validateHours(date) {
      const chargeable = Number(this.timesheet[date]) || 0;
      const nonChargeable = Number(this.nonChargeableTimesheet[date]) || 0;
      const total = chargeable + nonChargeable;
      if (total > 24) {
        alert(`Total hours for ${date} cannot exceed 24. Currently: ${total}`);
        this.timesheet[date] = Math.max(0, 24 - nonChargeable);
      }
      if (chargeable < 0) this.timesheet[date] = 0;
      if (nonChargeable < 0) this.nonChargeableTimesheet[date] = 0;
    },
    saveAndSubmitTimesheet() {
      this.timesheetStatus = 'Submitted';
      const staffIndex = this.staffList.findIndex(staff => staff.id === this.user.id);
      if (staffIndex !== -1) {
        this.staffList[staffIndex].totalTime = this.totalHours;
        this.staffList[staffIndex].timesheet = 'Filled';
        this.staffList[staffIndex].project = this.selectedProjects
          .map(id => this.projects.find(p => p.id === id)?.name)
          .join(', ') || 'None';
      }
      alert('Timesheet submitted!');
      this.showTimesheetForm = false;
    },
    toggleSelection(field, id) {
      if (this[field].includes(id)) {
        this[field] = this[field].filter(item => item !== id);
      } else {
        this[field].push(id);
      }
    },
    clearSelections(field) {
      this[field] = [];
      if (field === 'selectedProjects') this.searchProject = '';
      else if (field === 'selectedContracts') this.searchContract = '';
      else if (field === 'selectedComponents') this.searchComponent = '';
      else if (field === 'selectedPhases') this.searchPhase = '';
      else if (field === 'selectedNonChargeable') this.searchNonChargeable = '';
    },
    handleSearchInput(field, value) {
      if (field === 'selectedProjects') this.searchProject = value;
      else if (field === 'selectedContracts') this.searchContract = value;
      else if (field === 'selectedComponents') this.searchComponent = value;
      else if (field === 'selectedPhases') this.searchPhase = value;
      else if (field === 'selectedNonChargeable') this.searchNonChargeable = value;
      if (!value) this.clearSelections(field);
    },
    delayHideDropdown(type) {
      setTimeout(() => {
        if (type === 'project') this.showProjectDropdown = false;
        if (type === 'contract') this.showContractDropdown = false;
        if (type === 'component') this.showComponentDropdown = false;
        if (type === 'phase') this.showPhaseDropdown = false;
        if (type === 'nonChargeable') this.showNonChargeableDropdown = false;
      }, 200);
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap');

* {
  box-sizing: border-box;
}
thead tr th {

  background-color: #000 !important;
}
label { font-weight: bold; }
input, select {
  display: block;
  margin-top: 4px;
  border-radius: 4px;
  padding: 0.5rem;
  width: 100%;
}

.custom-date-input {
  padding-left: 48px;
}

input[type="date"] + i.fas.fa-calendar-alt,
input[type="text"] + i.fas.fa-search,
input[type="number"] + i.fas.fa-list-ol,
select + i.fas {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
  z-index: 1;
  text-align: left;
}
/* Remove all borders from table, th, td */
table, th, td {
  border: none !important;
  box-shadow: none !important;
}

button {
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
}
button:focus { outline: none; }

@media (max-width: 768px) {
  .grid-cols-3, .grid-cols-6, .grid-cols-4 {
    grid-template-columns: 1fr;
  }
  .p-4 {
    padding: 0.5rem;
  }
  table {
    font-size: 0.8rem;
  }
  th, td {
    padding: 0.25rem;
  }
  button {
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .flex {
    flex-direction: column;
    gap: 0.5rem;
  }
  .space-x-4 {
    margin-bottom: 0.5rem;
  }
  select, input {
    font-size: 0.9rem;
  }
}
</style>