<template>
<!-- ========update to gite============= -->
  <div class="bg-white dark:bg-[#0e1726] min-h-screen" :class="{ 'dark text-gray-600-dark': store.semidark }">
    <div class="w-full p-4">
      <!-- Header -->
      <div class="bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-gray-400">HRMIS Report</h1>
      </div>
      <!-- Report Filters and Details -->
      <div class="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
        <h2 class="text-lg font-bold text-gray-400 mb-4">Report Details</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <!-- Project Selection -->
          <div class="relative">
            <label for="projectSelect" class="text-gray-600 flex items-center font-bold text-lg">Select modules</label>
            <select
              id="projectSelect"
              v-model="selecteModules"
              class="w-full h-12 p-2 pr-2 border-none text-gray-400 rounded mt-1 bg-gray-200  dark:bg-gray-700 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Select modules for report"
            >
              <option value="">Select a Modules</option>
              <option v-for="project in uniqueProjects" :key="project" :value="project">{{ project || 'No Project' }}</option>
            </select>
            <div class="absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
              <i class="fas fa-folder text-gray-500"></i>
            </div>
          </div>

         <div class="relative flex items-end space-x-2">
          <button
            @click="printReport"
            class="h-12 px-4 py-2 bg-gray-200  dark:bg-gray-700 text-gray-400 rounded hover:bg-gray-700 flex items-center justify-center transition duration-300"
            aria-label="Print report based on current filters"
          >
            <i class="fas fa-print mr-2"></i>
            View Record
          </button>
          <button
            class="h-12 w-28 px-4 py-2 bg-gray-200  dark:bg-gray-700 text-gray-400 rounded hover:bg-gray-700 flex items-center justify-center transition duration-300"
            aria-label="Export Excel"
            @click="exportExcel"
          >
            <i class="fas fa-file-excel mr-1"></i> Excel
          </button>
          <button
            class="h-12 w-28 px-4 py-2 bg-gray-200  dark:bg-gray-700 text-gray-400 rounded hover:bg-gray-700 flex items-center justify-center transition duration-300"
            aria-label="Export PDF"
            @click="exportPDF"
          >
            <i class="fas fa-file-pdf mr-1"></i> PDF
          </button>
        </div>
        </div>   
    <!-- =============Staff Leave report ================== -->
    <div v-if="selecteModules === 'Leave Staff'" class="mt-8">
      <h2 class="text-lg font-bold text-gray-800 mb-4">Staff Taking Leave</h2>
      <div class="overflow-x-auto bg-white dark:bg-[#0e1726] rounded shadow-lg">
        <table class="w-full border-collapse text-sm sm:text-base">
          <thead class="bg-gray-800 text-gray-400">
            <tr>
              <th class="px-2 py-2">#</th>
              <th class="px-2 py-2">ID</th>
              <th class="px-2 py-2">Name</th>
              <th class="px-2 py-2">Leave Type</th>
              <th class="px-2 py-2">From Date</th>
              <th class="px-2 py-2">To Date</th>
              <th class="px-2 py-2">Period</th>
              <th class="px-2 py-2">Remaining Balance</th>
              <th class="px-2 py-2">Balance Usage</th>
              <th class="px-2 py-2">Reason</th>
              <th class="px-2 py-2">Responsibilities</th>
              <th class="px-2 py-2">Check By</th>
              <th class="px-2 py-2">Approve By</th>
              <th class="px-2 py-2">Approved</th>
            </tr>
          </thead>
          <tbody>
           <tr v-for="(leave, idx) in leaveData" :key="leave.id + '-' + leave.fromDate + '-' + leave.toDate" class="border-b bg-white dark:bg-[#0e1726] ">
              <td class="px-2 py-2">{{ idx + 1 }}</td>
              <td class="px-2 py-2">{{ leave.id }}</td>
              <td class="px-2 py-2">{{ leave.requestBy }}</td>
              <td class="px-2 py-2">{{ leave.type }}</td>
              <td class="px-2 py-2">{{ leave.fromDate }}</td>
              <td class="px-2 py-2">{{ leave.toDate }}</td>
              <td class="px-2 py-2">{{ leave.period }}</td>
              <td class="px-2 py-2">{{ leave.remainingBalance }}</td>
              <td class="px-2 py-2">{{ leave.balanceUsage }}</td>
              <td class="px-2 py-2">{{ leave.reason }}</td>
              <td class="px-2 py-2">{{ leave.responsibilities }}</td>
              <td class="px-2 py-2">{{ leave.checkBy }}</td>
              <td class="px-2 py-2">{{ leave.approveBy }}</td>
              <td class="px-2 py-2">{{ leave.isApproved ? 'Yes' : 'No' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

          <!-- Timesheet Table for Timesheet Project -->
        <div v-if="selecteModules === 'Timesheet'" class="overflow-x-auto no-scrollbar">
          <table class="w-full border-collapse rounded overflow-hidden text-sm sm:text-base bg-white dark:bg-[#0e1726]">
            <thead>
              <tr class="bg-gray-900 text-gray-400 font-bold">
                <th class="px-2 py-2 text-left">ID Staff</th>
                <th class="px-2 py-2 text-left">Name Staff</th>
                <th class="px-2 py-2 text-left">Project</th>
                <th class="px-2 py-2 text-left">Timesheet</th>
                <th class="px-2 py-2 text-left">Total Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(staff, idx) in timesheetData" :key="staff.id || idx" class="bg-white dark:bg-[#0e1726]  text-gray-400">
              <td class="px-2 py-2 ">{{ staff.id }}</td>
              <td class="px-2 py-2 ">{{ staff.name }}</td>
              <td class="px-2 py-2 ">{{ staff.project }}</td>
              <td class="px-2 py-2 ">{{ staff.timesheet }}</td>
              <td class="px-2 py-2 ">{{ staff.totalTime || '0.0' }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- Filtered Staff Table -->
        <div
          v-if="selecteModules && selecteModules !== 'Leave Staff' && selecteModules !== 'Timesheet'"
          class="overflow-x-auto no-scrollbar"
        >
          <table v-if="selecteModules === 'Attendance'" class="w-full border-collapse rounded bg-white dark:bg-[#0e1726]  overflow-hidden text-sm sm:text-base">
            <thead>
              <tr class="bg-gray-800 text-xs sm:text-sm text-gray-400 font-bold">
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden sm:table-cell">#</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">ID</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Name</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Gender</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Department</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Position</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Scan-In</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Scan-Out</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">Leave Type</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">From Date</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">To Date</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Shift Type</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Period</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Remark</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Option</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(staff, index) in filteredStaff" :key="index">
                <tr
                  class="border-b transition duration-150 bg-white dark:bg-[#0e1726] "
                  :class="{
                    'bg-white': index % 2 === 0,
                    'bg-gray-50': index % 2 !== 0
                  }"
                >
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden sm:table-cell">{{ index + 1 }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.id }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.name }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.gender }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.department }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.position }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">{{ staff.scanIn || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">{{ staff.scanOut || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.leaveType || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.attendanceFromDate || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.toDate || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.shiftType || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.period || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.remark || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">
                    <button
                      @click="toggleDetails(staff)"
                      class="text-gray-700 hover:text-gray-900 p-1"
                      :aria-expanded="selectedStaffId === staff.id"
                      :aria-controls="'dropdown-' + staff.id"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr v-if="selectedStaffId === staff.id" :id="'dropdown-' + staff.id" class="p-0">
                  <td :colspan="15" class="p-0">
                 <div class="dropdown-content bg-gray-600 border 0 p-2 shadow-lg">
                      <table class="w-full border-collapse text-sm sm:text-base bg-white dark:bg-[#0e1726]">
                        <thead>
                          <tr class="bg-gray-600 text-xs md:text-sm text-gray-400 font-bold">
                            <th class="px-2 py-1 text-left">ID</th>
                            <th class="px-2 py-1 text-left">Name</th>
                            <th class="px-2 py-1 text-left">Gender</th>
                            <th class="px-2 py-1 text-left">Department</th>
                            <th class="px-2 py-1 text-left">Position</th>
                            <th class="px-2 py-1 text-left">Scan-In</th>
                            <th class="px-2 py-1 text-left">Scan-Out</th>
                            <th class="px-2 py-1 text-left">Leave Type</th>
                            <th class="px-2 py-1 text-left">From Date</th>
                            <th class="px-2 py-1 text-left">To Date</th>
                            <th class="px-2 py-1 text-left">Shift Type</th>
                            <th class="px-2 py-1 text-left">Period</th>
                            <th class="px-2 py-1 text-left">Remark</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="px-2 py-1">{{ staff.id }}</td>
                            <td class="px-2 py-1">{{ staff.name }}</td>
                            <td class="px-2 py-1">{{ staff.gender }}</td>
                            <td class="px-2 py-1">{{ staff.department }}</td>
                            <td class="px-2 py-1">{{ staff.position }}</td>
                            <td class="px-2 py-1">{{ staff.scanIn || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.scanOut || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.leaveType || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.attendanceFromDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.toDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.shiftType || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.period || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.remark || '-' }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <table v-else class="w-full border-collapse rounded overflow-hidden text-sm sm:text-base">
            <thead>
              <tr class="bg-gray-800 text-xs sm:text-sm text-gray-400 font-bold">
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden sm:table-cell">#</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">ID</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Name</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Position</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Level</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">Grade</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Category</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Direct Manager</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">Indirect Manager</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">Previous Wage/Day</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell">Previous Wage/Week</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell">Status</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Remark</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Scan-In</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Scan-Out</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell">Leave Type</th>
                <th class="px-2 py-2 sm:px-4 sm:py-3 text-left">Option</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(staff, index) in filteredStaff" :key="index">
               <tr
                  class="border-b transition duration-150 bg-white dark:bg-[#0e1726] "
                  :class="{
                    'rejected-row': staff.status === 'Rejected',
                    'bg-white dark:bg-gray-800': index % 2 === 0 && staff.status !== 'Rejected',
                    'bg-gray-50 dark:bg-[#0e1726]': index % 2 !== 0 && staff.status !== 'Rejected'
                  }"
                >
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden sm:table-cell">{{ index + 1 }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.id }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.name }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">{{ staff.position }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">{{ staff.level || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.grade || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.category || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">{{ staff.directManager || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.indirectManager || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.previousWageDay || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell">{{ staff.previousWageWeek || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell">
                    <span
                      class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                      :class="{
                        'bg-gray-800 text-gray-400': staff.status === 'Approved',
                        'bg-gray-400 text-white': staff.status === 'Pending',
                        'bg-gray-600 text-gray-400': staff.status === 'Rejected'
                      }"
                    >
                      {{ staff.status || 'Pending' }}
                    </span>
                  </td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.remark || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.scanIn || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.scanOut || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell">{{ staff.leaveType || '-' }}</td>
                  <td class="px-2 py-2 sm:px-4 sm:py-4">
                    <button
                      @click="toggleDetails(staff)"
                      class="text-gray-600 hover:text-gray-900 p-1"
                      :aria-expanded="selectedStaffId === staff.id"
                      :aria-controls="'dropdown-' + staff.id"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr v-if="selectedStaffId === staff.id" :id="'dropdown-' + staff.id" class="p-2 bg-white dark:bg-[#0e1726] ">
                  <td :colspan="17" class="p-0">
                   <div class="dropdown-content bg-gray-600   p-2 shadow-lg">
                      <table class="w-full border-collapse text-sm sm:text-base bg-white dark:bg-[#0e1726] ">
                        <thead>
                          <tr class="bg-gray-600 text-xs md:text-sm text-gray-400 font-bold">
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
                            <th class="px-2 py-1 text-left">Last Updated</th>
                            <th class="px-2 py-1 text-left">Adjustment Date</th>
                            <th class="px-2 py-1 text-left">Request Date</th>
                            <th class="px-2 py-1 text-left">Checked By</th>
                            <th class="px-2 py-1 text-left">Check Date</th>
                            <th class="px-2 py-1 text-left">Approved By</th>
                            <th class="px-2 py-1 text-left">Approve Date</th>
                            <th class="px-2 py-1 text-left">Reason</th>
                            <th class="px-2 py-1 text-left">Remark</th>
                            <th class="px-2 py-1 text-left">Scan-In</th>
                            <th class="px-2 py-1 text-left">Scan-Out</th>
                            <th class="px-2 py-1 text-left">Leave Type</th>
                            <th class="px-2 py-1 text-left">Attendance From Date</th>
                            <th class="px-2 py-1 text-left">To Date</th>
                            <th class="px-2 py-1 text-left">Shift Type</th>
                            <th class="px-2 py-1 text-left">Period</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class=" bg-white dark:bg-[#0e1726] ">
                            <td class="px-2 py-1">{{ staff.maxSalary || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.newStaff ? 'Yes' : 'No' }}</td>
                            <td class="px-2 py-1">{{ staff.wageDay || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.wageWeek || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.increaseDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.stopDropOpt || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.startDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.fromProject || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.toProject || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.transferDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.endDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.lastUpdated || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.adjustmentDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.requestDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.checkedBy || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.checkDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.approvedBy || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.approveDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.adjustmentReason || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.remark || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.scanIn || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.scanOut || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.leaveType || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.attendanceFromDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.toDate || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.shiftType || '-' }}</td>
                            <td class="px-2 py-1">{{ staff.period || '-' }}</td>
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
    

        <div v-else class="text-gray-600 text-center">Select a Modules from the overview to view details.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '@/stores/index';
export default {
  props: {
    data() {
    return {
      selecteModules: '',
      statusFilter: '',
      salaryRange: '',
      dateRange: '',
      overviewSelecteModulesselecteModules: '',
      selectedStaffId: null,
      selectedStaff: {},
    };
  },
  leaveStaffData:{
    type:Array,
    default:()=>[
        { requestBy: 'CHEA Udom', type: 'Annual Leave', period: '1', fromDate: '2025-01-06', toDate: '2025-01-06', remainingBalance: '1 Days', balanceUsage: '1 Days', reason: 'Busy at province', responsibilities: 'MEAN Dara', checkBy: 'MEAN Dara', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-08', toDate: '2025-01-08', remainingBalance: '0 Days', balanceUsage: '1 Days', reason: 'I have feeling not well.', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-08', toDate: '2025-01-08', remainingBalance: '-0.5 Days', balanceUsage: '1 Days', reason: 'Sick', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-15', toDate: '2025-01-15', remainingBalance: '1 Days', balanceUsage: '1.5 Days', reason: 'Feeling not well', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'OUK Vyta', type: 'Annual Leave', period: '1', fromDate: '2025-01-17', toDate: '2025-01-17', remainingBalance: '0 Days', balanceUsage: '1 Days', reason: 'Go to wedding sister', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'CHEA Udom', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-17', toDate: '2025-01-17', remainingBalance: '0.5 Days', balanceUsage: '1.5 Days', reason: 'Busy at home', responsibilities: 'MEAN Dara', checkBy: 'MEAN Dara', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'OUK Vyta', type: 'Annual Leave', period: '1', fromDate: '2025-01-20', toDate: '2025-01-20', remainingBalance: '-1 Days', balanceUsage: '2 Days', reason: 'Busy at province', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'LY Chaiheag', type: 'Annual Leave', period: '1', fromDate: '2025-01-20', toDate: '2025-01-20', remainingBalance: '8 Days', balanceUsage: '1 Days', reason: ' Feeling down, No feeling to work ', responsibilities: 'MEAN Dara', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'OUK Vyta', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-23', toDate: '2025-01-23', remainingBalance: '-1.5 Days', balanceUsage: '2.5 Days', reason: 'I am not well', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-24', toDate: '2025-01-24', remainingBalance: '1.5 Days', balanceUsage: '2 Days', reason: 'Due personal issues', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-27', toDate: '2025-01-27', remainingBalance: '2 Days', balanceUsage: '3.5 Days', reason: 'due personal issues at province', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { requestBy: 'CHEA Nita', type: 'Annual Leave', period: '1', fromDate: '2025-01-28', toDate: '2025-01-28', remainingBalance: '3 Days', balanceUsage: '3.5 Days', reason: 'Have event at provind', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true }
    ]

  },
  timesheetData:{
    type:Array,
    default:()=>[
      
        { id: 'S001', name: 'Alice', project: 'Highway Expansion', timesheet: 'Filled', manager: 'Manager A', photo: '', totalTime: '350.0' },
        { id: 'S002', name: 'Bob', project: 'Commercial Complex', timesheet: 'Pending', manager: 'Manager B', photo: '', totalTime: '321.0' },
        { id: 'S003', name: 'Charlie', project: 'Residential Tower', timesheet: 'Filled', manager: 'Manager C', photo: '', totalTime: '403.0' },
      
    ]
  },
    recruitmentData: {
      type: Array,
      default: () => [
        {
          name: 'John Doe',
          position: 'Software Engineer',
          project: 'Recruitment',
          cpCode: 'CP001',
          headOfDept: 'Alice Brown',
          level: 'Senior',
          grade: 'G6',
          category: 'Technical',
          directManager: 'Bob Wilson',
          indirectManager: 'Alice Brown',
          startDate: '2025-07-01',
          endDate: '2026-06-30',
          maxSalary: '80000',
          status: 'Approved'
        },
        {
          name: 'Jane Smith',
          position: 'Project Manager',
          project: 'Recruitment',
          cpCode: 'CP002',
          headOfDept: 'Emma Davis',
          level: 'Mid',
          grade: 'G5',
          category: 'Administrative',
          directManager: 'David Lee',
          indirectManager: 'Emma Davis',
          startDate: '2025-07-09',
          endDate: '2030-10-10',
          maxSalary: '5000',
          status: 'Approved'
        },
        {
          name: 'Mike Johnson',
          position: 'HR Specialist',
          project: 'Recruitment',
          cpCode: 'CP003',
          headOfDept: 'Frank Miller',
          level: 'Junior',
          grade: 'G4',
          category: 'HR',
          directManager: '',
          indirectManager: 'Frank Miller',
          startDate: '',
          endDate: '',
          maxSalary: null,
          status: 'Rejected'
        }
      ],
    },
    adjustmentData: {
      type: Array,
      default: () => [
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
          startDate: '2025-07-06',
          fromProject: '',
          toProject: '',
          transferDate: '',
          endDate: '',
          other: '',
          status: 'Approved',
          previousWageDay: '23000',
          previousWageWeek: '28000',
          adjustmentDate: '02:15 PM +07, Wednesday, July 09, 2025',
          adjustmentReason: 'Manual Adjustment',
          lastUpdated: '02:15 PM +07, Wednesday, July 09, 2025',
          photo: '/src/image/construtor4.jpg',
          requestedBy: 'John Smith',
          requestDate: '2025-07-02',
          checkedBy: 'Jane Doe',
          checkDate: '2025-07-02',
          approvedBy: 'Robert Brown',
          approveDate: '2025-07-09'
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
          startDate: '2025-07-06',
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
          lastUpdated: '02:15 PM +07, Wednesday, July 09, 2025',
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
          startDate: '2025-07-06',
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
          lastUpdated: '02:15 PM +07, Wednesday, July 09, 2025',
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
          startDate: '2025-07-01',
          fromProject: '',
          toProject: '',
          transferDate: '',
          endDate: '',
          other: '',
          status: 'Approved',
          previousWageDay: '39000',
          previousWageWeek: '44000',
          adjustmentDate: '02:15 PM +07, Wednesday, July 09, 2025',
          adjustmentReason: 'Manual Adjustment',
          lastUpdated: '02:15 PM +07, Wednesday, July 09, 2025',
          photo: '/src/image/construtor2.jpg',
          requestedBy: 'John Smith',
          requestDate: '2025-07-02',
          checkedBy: 'Jane Doe',
          checkDate: '2025-07-02',
          approvedBy: 'Robert Brown',
          approveDate: '2025-07-09'
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
          startDate: '2025-07-01',
          fromProject: '',
          toProject: '',
          transferDate: '',
          endDate: '',
          other: '',
          status: 'Approved',
          previousWageDay: '39000',
          previousWageWeek: '44000',
          adjustmentDate: '02:15 PM +07, Wednesday, July 09, 2025',
          adjustmentReason: 'Manual Adjustment',
          lastUpdated: '02:15 PM +07, Wednesday, July 09, 2025',
          photo: '/src/image/construtor3.jpg',
          requestedBy: 'John Smith',
          requestDate: '2025-07-02',
          checkedBy: 'Jane Doe',
          checkDate: '2025-07-02',
          approvedBy: 'Robert Brown',
          approveDate: '2025-07-09'
        }
      ],
    },
    attendanceData: {
      type: Array,
      default: () => [
        { id: 'S0001', name: 'Muen Vannarith', gender: 'Female', department: 'Structural Engineerin', position: 'Civil Engineer', scanIn: '12:59:24', scanOut: '18:44:45', leaveType: 'Annual Leave', fromDate: '2025-06-02', shiftType: 'AM', toDate: '2025-06-02', period: '0.5', remark: 'Annual Leave' },
        { id: 'S0002', name: 'Sok Chetra', gender: 'Female', department: 'Structural Engineerin', position: 'Structural Engineer', scanIn: '10:30:00', scanOut: '17:00:00', leaveType: 'Annual Leave', fromDate: '2025-06-02', shiftType: 'AM', toDate: '2025-06-02', period: '0.5', remark: 'Annual Leave' },
        { id: 'S0003', name: 'Sam Sreyneang', gender: 'Female', department: 'Geotechnical Engineering', position: 'Geotechnical Engineer', scanIn: '08:00:00', scanOut: '17:00:00', leaveType: 'Annual Leave', fromDate: '2025-06-02', shiftType: 'PM', toDate: '2025-06-02', period: '0.7', remark: 'Annual Leave' },
        { id: 'S0004', name: 'Heng Sokheng', gender: 'Male', department: 'Structural Engineerin', position: 'Transportation Engineer', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-02', shiftType: 'AM', toDate: '2025-06-02', period: '0.5', remark: 'No Scan' },
        { id: 'S0005', name: 'Kim Sophaktra', gender: 'Male', department: 'Structural Engineerin', position: 'Transportation Engineer', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-02', shiftType: 'AM', toDate: '2025-06-02', period: '0.5', remark: 'No Scan' },
        { id: 'S0006', name: 'Chan Ritthy', gender: 'Female', department: 'Transportation Engineering', position: 'Accountant', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-02', shiftType: 'AM', toDate: '2025-06-02', period: '0.5', remark: 'No Scan' },
        { id: 'S0007', name: 'Ngai Vanny', gender: 'Male', department: 'Materials Engineering', position: 'Environmental Engineer', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-02', shiftType: 'PM', toDate: '2025-06-02', period: '0.7', remark: 'Absence' },
        { id: 'S0008', name: 'Phan Sophak', gender: 'Female', department: 'Geotechnical Engineering', position: 'Project Manager', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-03', shiftType: 'AM', toDate: '2025-06-03', period: '0.5', remark: 'No Scan' },
        { id: 'S0009', name: 'Tieng Sreymom', gender: 'Male', department: 'Structural Engineerin', position: 'Civil Engineering Technician', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-03', shiftType: 'AM', toDate: '2025-06-03', period: '0.5', remark: 'No Scan' },
        { id: 'S0010', name: 'Paen Sotha', gender: 'Female', department: 'Transportation Engineering', position: 'Research Engineer', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-03', shiftType: 'PM', toDate: '2025-06-03', period: '0.7', remark: 'Absence' },
        { id: 'S0011', name: 'Keo Vandine', gender: 'Male', department: 'Materials Engineering', position: 'Site Supervisor', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-03', shiftType: 'AM', toDate: '2025-06-03', period: '0.5', remark: 'No Scan' },
        { id: 'S0012', name: 'Lim Sokhom', gender: 'Female', department: 'Geotechnical Engineering', position: 'Construction Manager', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-04', shiftType: 'PM', toDate: '2025-06-04', period: '0.7', remark: 'Absence' },
        { id: 'S0013', name: 'Mao Channa', gender: 'Male', department: 'Structural Engineerin', position: 'Structural Inspector', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-04', shiftType: 'AM', toDate: '2025-06-04', period: '0.5', remark: 'No Scan' },
        { id: 'S0014', name: 'Yim Suphan', gender: 'Female', department: 'Transportation Engineering', position: 'Payroll Specialist', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-04', shiftType: 'PM', toDate: '2025-06-04', period: '0.7', remark: 'Absence' },
        { id: 'S0015', name: 'Chau Vannirath', gender: 'Male', department: 'Materials Engineering', position: 'Construction Safety Office', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-05', shiftType: 'AM', toDate: '2025-06-05', period: '0.5', remark: 'No Scan' },
        { id: 'S0016', name: 'Pech Sokhna', gender: 'Female', department: 'Geotechnical Engineering', position: 'Quality Control Engineer', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-05', shiftType: 'PM', toDate: '2025-06-05', period: '0.7', remark: 'Absence' },
        { id: 'S0017', name: 'Than Srilai', gender: 'Male', department: 'Structural Engineerin', position: 'Contracts Administrator', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-05', shiftType: 'AM', toDate: '2025-06-05', period: '0.5', remark: 'No Scan' },
        { id: 'S0018', name: 'Khem Rosmey', gender: 'Female', department: 'Transportation Engineering', position: 'Heavy Equipment Engineer', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-06', shiftType: 'PM', toDate: '2025-06-06', period: '0.7', remark: 'Absence' }
      ],
    },
    leaveData: {
      type: Array,
      default: () => [
        { id:'SSC001', requestBy: 'CHEA Udom', type: 'Annual Leave', period: '1', fromDate: '2025-01-06', toDate: '2025-01-06', remainingBalance: '1 Days', balanceUsage: '1 Days', reason: 'Busy at province', responsibilities: 'MEAN Dara', checkBy: 'MEAN Dara', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC003', requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-08', toDate: '2025-01-08', remainingBalance: '0 Days', balanceUsage: '1 Days', reason: 'I have feeling not well.', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC003', requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-08', toDate: '2025-01-08', remainingBalance: '-0.5 Days', balanceUsage: '1 Days', reason: 'Sick', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC003', requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-15', toDate: '2025-01-15', remainingBalance: '1 Days', balanceUsage: '1.5 Days', reason: 'Feeling not well', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC005', requestBy: 'OUK Vyta', type: 'Annual Leave', period: '1', fromDate: '2025-01-17', toDate: '2025-01-17', remainingBalance: '0 Days', balanceUsage: '1 Days', reason: 'Go to wedding sister', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC006', requestBy: 'CHEA Udom', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-17', toDate: '2025-01-17', remainingBalance: '0.5 Days', balanceUsage: '1.5 Days', reason: 'Busy at home', responsibilities: 'MEAN Dara', checkBy: 'MEAN Dara', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC007', requestBy: 'OUK Vyta', type: 'Annual Leave', period: '1', fromDate: '2025-01-20', toDate: '2025-01-20', remainingBalance: '-1 Days', balanceUsage: '2 Days', reason: 'Busy at province', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC008', requestBy: 'LY Chaiheag', type: 'Annual Leave', period: '1', fromDate: '2025-01-20', toDate: '2025-01-20', remainingBalance: '8 Days', balanceUsage: '1 Days', reason: ' Feeling down, No feeling to work ', responsibilities: 'MEAN Dara', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC009', requestBy: 'OUK Vyta', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-23', toDate: '2025-01-23', remainingBalance: '-1.5 Days', balanceUsage: '2.5 Days', reason: 'I am not well', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC003', requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-24', toDate: '2025-01-24', remainingBalance: '1.5 Days', balanceUsage: '2 Days', reason: 'Due personal issues', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC003', requestBy: 'CHEA Nita', type: 'Annual Leave', period: '0.5', fromDate: '2025-01-27', toDate: '2025-01-27', remainingBalance: '2 Days', balanceUsage: '3.5 Days', reason: 'due personal issues at province', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true },
        { id:'SSC003', requestBy: 'CHEA Nita', type: 'Annual Leave', period: '1', fromDate: '2025-01-28', toDate: '2025-01-28', remainingBalance: '3 Days', balanceUsage: '3.5 Days', reason: 'Have event at provind', responsibilities: 'CHEA Udom', checkBy: 'CHEA Udom', approveBy: 'MEAN Dara', isApproved: true }
      ],
    },
    processList: {
      type: Array,
      default: () => [],
    },
    approvedLeaves: {
      type: Array,
      default: () => [],
    },
    staffList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selecteModules: '',
      statusFilter: '',
      salaryRange: '',
      dateRange: '',
      overviewSelecteModulesselecteModules: '',
      selectedStaffId: null,
      selectedStaff: {},
    };
  },
  computed: {
     store() {
      return useAppStore();
    },
   uniqueProjects() {
  const recruitmentProjects = this.recruitmentData.map(staff => staff.project || '');
  const adjustmentProjects = this.adjustmentData.flatMap(staff => [
    staff.fromProject || '',
    staff.toProject || '',
  ]);
  const leaveStaffProjects = this.staffList.map(staff => staff.project || '');
  const timesheetProjects = this.staffList.map(staff => staff.project || '');
  // Add 'Timesheet' as a selectable project
  const allProjects = [
    'Adjustment Rating',
    'Attendance',
    'Timesheet',
    'Leave Staff',
    ...adjustmentProjects,
    ...recruitmentProjects,
    ...adjustmentProjects,
    ...timesheetProjects
  ];
  // Remove duplicates and empty strings
  return [...new Set(allProjects)].filter(p => p);
},

    combinedStaff() {
      const recruitmentStaff = this.recruitmentData.map(staff => {
        const attendance = this.attendanceData.find(a => a.id === staff.cpCode || a.name === staff.name) || {};
        const leave = this.leaveData.find(l => l.id === staff.cpCode || l.name === staff.name) || {};
        return {
          ...staff,
          source: 'recruitment',
          id: staff.cpCode,
          wageDay: staff.status === 'Approved' ? Math.round(staff.maxSalary / 7) : null,
          wageWeek: staff.status === 'Approved' ? staff.maxSalary : null,
          previousWageDay: staff.status === 'Approved' ? Math.round((staff.maxSalary / 7) * 0.9) : null,
          previousWageWeek: staff.status === 'Approved' ? Math.round(staff.maxSalary * 0.9) : null,
          newStaff: true,
          stopDropOpt: staff.status === 'Approved' ? 'Active' : staff.status === 'Pending' ? 'Pending' : 'Inactive',
          fromProject: '',
          toProject: staff.project,
          transferDate: '',
          other: '',
          adjustmentDate: staff.status === 'Approved' ? '02:15 PM +07, Wednesday, July 09, 2025' : '',
          adjustmentReason: staff.status === 'Approved' ? 'New Recruitment' : '',
          lastUpdated: '02:15 PM +07, Wednesday, July 09, 2025',
          photo: '/src/image/placeholder.jpg',
          requestedBy: staff.status === 'Approved' ? 'HR Admin' : '',
          requestDate: staff.status === 'Approved' ? '2025-07-01' : '',
          checkedBy: staff.status === 'Approved' ? 'Jane Doe' : '',
          checkDate: staff.status === 'Approved' ? '2025-07-02' : '',
          approvedBy: staff.status === 'Approved' ? 'Robert Brown' : '',
          approveDate: staff.status === 'Approved' ? '2025-07-09' : '',
          remark: attendance.remark || leave.remark || null,
          scanIn: leave.scanIn || attendance.scanIn || null,
          scanOut: leave.scanOut || attendance.scanOut || null,
          leaveType: leave.leaveType || attendance.leaveType || null,
          attendanceFromDate: attendance.fromDate || leave.fromDate || null,
          toDate: leave.toDate || attendance.toDate || null,
          shiftType: leave.shiftType || attendance.shiftType || null,
          period: leave.period || attendance.period || null,
          department: attendance.department || leave.department || null,
          gender: attendance.gender || leave.gender || null,
        };
      });
      const adjustmentStaff = this.adjustmentData.map(staff => {
        const attendance = this.attendanceData.find(a => a.id === staff.id || a.name === staff.name) || {};
        const leave = this.leaveData.find(l => l.id === staff.id || l.name === staff.name) || {};
        return {
          ...staff,
          source: 'adjustment',
          project: 'Adjustment Rating',
          cpCode: staff.id,
          headOfDept: null,
          remark: attendance.remark || leave.remark || null,
          scanIn: leave.scanIn || attendance.scanIn || null,
          scanOut: leave.scanOut || attendance.scanOut || null,
          leaveType: leave.leaveType || attendance.leaveType || null,
          attendanceFromDate: attendance.fromDate || leave.fromDate || null,
          toDate: leave.toDate || attendance.toDate || null,
          shiftType: leave.shiftType || attendance.shiftType || null,
          period: leave.period || attendance.period || null,
          department: attendance.department || leave.department || null,
          gender: attendance.gender || leave.gender || null,
        };
      });
      const attendanceStaff = this.attendanceData.map(staff => ({
        ...staff,
        source: 'attendance',
        id: staff.id,
        project: 'Attendance',
        toProject: null,
        fromProject: null,
        attendanceFromDate: staff.fromDate,
        status: null,
        maxSalary: null,
        wageDay: null,
        wageWeek: null,
        previousWageDay: null,
        previousWageWeek: null,
        newStaff: false,
        stopDropOpt: null,
        startDate: null,
        transferDate: null,
        endDate: null,
        other: null,
        adjustmentDate: null,
        adjustmentReason: null,
        lastUpdated: null,
        photo: null,
        requestedBy: null,
        requestDate: null,
        checkedBy: null,
        checkDate: null,
        approvedBy: null,
        approveDate: null,
      }));
      const leaveStaff = this.leaveData
        .filter(l => !attendanceStaff.some(a => a.id === l.id || a.name === l.name))
        .map(staff => ({
          ...staff,
          source: 'leave',
          id: staff.id,
          project: 'Leave Staff',
          toProject: null,
          fromProject: null,
          attendanceFromDate: staff.fromDate,
          status: null,
          maxSalary: null,
          wageDay: null,
          wageWeek: null,
          previousWageDay: null,
          previousWageWeek: null,
          newStaff: false,
          stopDropOpt: null,
          startDate: null,
          transferDate: null,
          endDate: null,
          other: null,
          adjustmentDate: null,
          adjustmentReason: null,
          lastUpdated: null,
          photo: null,
          requestedBy: null,
          requestDate: null,
          checkedBy: null,
          checkDate: null,
          approvedBy: null,
          approveDate: null,
          remark: staff.option || null,
        }));

      const allStaff = [...recruitmentStaff, ...adjustmentStaff, ...attendanceStaff, ...leaveStaff];
      const uniqueStaff = [];
      const seenIds = new Set();

      for (const staff of allStaff) {
        const key = staff.id || staff.name;
        if (!seenIds.has(key)) {
          seenIds.add(key);
          uniqueStaff.push(staff);
        } else {
          const existing = uniqueStaff.find(s => (s.id || s.name) === key);
          if (staff.source === 'leave') {
            existing.remark = staff.remark || existing.remark;
            existing.scanIn = staff.scanIn || existing.scanIn;
            existing.scanOut = staff.scanOut || existing.scanOut;
            existing.leaveType = staff.leaveType || existing.leaveType;
            existing.attendanceFromDate = staff.attendanceFromDate || existing.attendanceFromDate;
            existing.toDate = staff.toDate || existing.toDate;
            existing.shiftType = staff.shiftType || existing.shiftType;
            existing.period = staff.period || existing.period;
            existing.department = staff.department || existing.department;
            existing.gender = staff.gender || existing.gender;
          } else if (staff.source === 'attendance' && existing.source !== 'leave') {
            existing.remark = staff.remark || existing.remark;
            existing.scanIn = staff.scanIn || existing.scanIn;
            existing.scanOut = staff.scanOut || existing.scanOut;
            existing.leaveType = staff.leaveType || existing.leaveType;
            existing.attendanceFromDate = staff.attendanceFromDate || existing.attendanceFromDate;
            existing.toDate = staff.toDate || existing.toDate;
            existing.shiftType = staff.shiftType || existing.shiftType;
            existing.period = staff.period || existing.period;
            existing.department = staff.department || existing.department;
            existing.gender = staff.gender || existing.gender;
          } else if (staff.source === 'adjustment' && existing.source !== 'attendance' && existing.source !== 'leave') {
            Object.assign(existing, staff);
          } else if (staff.source === 'recruitment' && existing.source !== 'attendance' && existing.source !== 'leave' && existing.source !== 'adjustment') {
            Object.assign(existing, staff);
          }
        }
      }

      this.staffList.forEach(staff => {
        const key = staff.id || staff.name;
        if (!seenIds.has(key)) {
          seenIds.add(key);
          uniqueStaff.push({
            ...staff,
            source: 'timesheet',
            project: staff.project,
            remark: null,
            scanIn: null,
            scanOut: null,
            leaveType: null,
            attendanceFromDate: null,
            toDate: null,
            shiftType: null,
            period: null,
            department: null,
            gender: null,
          });
        }
      });

      return uniqueStaff;
    },
    filteredLeaveData() {
  // Deduplicate leaveData by id and date
  const uniqueLeaves = [];
  const seenKeys = new Set();
  for (const leave of this.leaveData) {
    const key = `${leave.id}-${leave.fromDate}-${leave.toDate}`;
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      uniqueLeaves.push(leave);
    }
  }

  let result = uniqueLeaves;
  if (this.dateRange) {
    const [start, end] = this.dateRange.split(' to ').map(date => new Date(date));
    if (start && end && !isNaN(start) && !isNaN(end)) {
      result = result.filter(leave => {
        const fromDate = new Date(leave.fromDate);
        const toDate = new Date(leave.toDate);
        return (fromDate >= start && fromDate <= end) || (toDate >= start && toDate <= end);
      });
    }
  }
  return result;
},

    filteredStaff() {
      let result = this.combinedStaff;

      if (this.selecteModules) {
        result = result.filter(
          staff =>
            staff.project === this.selecteModules ||
            staff.toProject === this.selecteModules ||
            staff.fromProject === this.selecteModules
        );
      }

      if (this.statusFilter && this.selecteModules !== 'Attendance') {
        result = result.filter(staff => staff.status === this.statusFilter);
      }

      if (this.salaryRange && this.selecteModules !== 'Attendance') {
        const [min, max] = this.salaryRange.split('-').map(Number);
        if (min && max) {
          result = result.filter(staff => {
            const salary = staff.wageWeek || staff.maxSalary;
            return salary && salary >= min && salary <= max;
          });
        }
      }

      if (this.dateRange) {
        const [start, end] = this.dateRange.split(' to ').map(date => new Date(date));
        if (start && end && !isNaN(start) && !isNaN(end)) {
          result = result.filter(staff => {
            const dates = [
              staff.startDate,
              staff.endDate,
              staff.transferDate,
              staff.attendanceFromDate,
              staff.toDate,
              staff.requestDate,
              staff.checkDate,
              staff.approveDate,
              staff.adjustmentDate,
            ]
              .filter(Boolean)
              .map(d => new Date(d));
            return dates.some(date => date >= start && date <= end);
          });
        }
      }

      return result;
    },
    filteredOverviewProjects() {
      return this.overviewSelecteModulesselecteModules
        ? [this.overviewSelecteModulesselecteModules]
        : this.uniqueProjects;
    },
  },
  methods: {
     exportExcel() {
      alert('Export to Excel clicked!');
        // Implement Excel export logic here
      },
      exportPDF() {
        alert('Export to PDF clicked!');
        // Implement PDF export logic here
      },
    selectProject(project) {
      this.selecteModules = project;
    },
    getStaffCount(project) {
      return this.combinedStaff.filter(
        staff => staff.project === project || staff.toProject === project || staff.fromProject === project
      ).length;
    },
    getStatusCount(project, status) {
      return this.combinedStaff.filter(
        staff =>
          (staff.project === project || staff.toProject === project || staff.fromProject === project) &&
          staff.status === status
      ).length;
    },
    getAttendanceIssues(project) {
      return this.combinedStaff.filter(
        staff =>
          (staff.project === project || staff.toProject === project || staff.fromProject === project) &&
          staff.remark &&
          ['No Scan', 'Absence'].includes(staff.remark)
      ).length;
    },
    getPendingLeaveRequests(project) {
      return this.processList.filter(leave => {
        const staff = this.combinedStaff.find(s => s.name === leave.requestBy);
        return staff && (staff.project === project || staff.toProject === project || staff.fromProject === project) && !leave.isApproved;
      }).length;
    },
    getApprovedLeaves(project) {
      return this.approvedLeaves.filter(leave => {
        const staff = this.combinedStaff.find(s => s.name === leave.requestBy);
        return staff && (staff.project === project || staff.toProject === project || staff.fromProject === project) && leave.isApproved;
      }).length;
    },
    getPendingTimesheets(project) {
      return this.staffList.filter(staff =>
        staff.project === project && staff.timesheet === 'Pending'
      ).length;
    },
    getTotalHours(project) {
      return this.staffList
        .filter(staff => staff.project === project)
        .reduce((sum, staff) => sum + (parseFloat(staff.totalTime) || 0), 0);
    },
    filterOverviewProjects() {
      if (this.overviewSelecteModulesselecteModules) {
        this.selecteModules = this.overviewSelecteModulesselecteModules;
      }
    },
    toggleDetails(staff) {
      this.selectedStaffId = this.selectedStaffId === staff.id ? null : staff.id;
      this.selectedStaff = { ...staff };
    },
    closeAllSubTables() {
      this.selectedStaffId = null;
      this.selectedStaff = {};
    },
    printReport() {
      if (!this.selecteModules) {
        alert('Please select a Modules to print the report.');
        return;
      }

      const printWindow = window.open('', '_blank');
      
      if (this.selecteModules === 'Attendance') {
        printWindow.document.write(`
          <html>
            <head>
              <title>Attendance Report - ${this.selecteModules}</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { text-align: center; }
                .filters { margin-bottom: 20px; }
                .filter-item { margin: 5px 0; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { padding: 8px; text-align: left; }
                th { background-color: #333; color: white; }
                .details-table { margin-left: 20px; }
                .details-table th { background-color: #4a5568; }
                @media print {
                  body { margin: 0; }
                  .no-print { display: none; }
                }
              </style>
            </head>


            <body>
              <h1>Attendance Report: ${this.selecteModules}</h1>
              <div class="filters">
                <div class="filter-item"><strong>Project:</strong> ${this.selecteModules}</div>
                <div class="filter-item"><strong>Date Range:</strong> ${this.dateRange || 'Any'}</div>
              </div>
          <table>
              <thead>
                <tr>
                  <th>ID Staff</th>
                  <th>Name Staff</th>
                  <th>Project</th>
                  <th>Timesheet</th>
                  <th>Total Time</th>
                </tr>
              </thead>
              <tbody>
               ${this.timesheetData
                .map(
                  staff => `
                    <tr>
                      <td>${staff.id || '-'}</td>
                      <td>${staff.name || '-'}</td>
                      <td>${staff.project || '-'}</td>
                      <td>${staff.timesheet || '-'}</td>
                      <td>${staff.totalTime || '0.0'}</td>
                    </tr>
                  `
                )
              .join('')}
              </tbody>
            </table>

              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Scan-In</th>
                    <th>Scan-Out</th>
                    <th>Leave Type</th>
                    <th>From Date</th>
                    <th>To Date</th>
                    <th>Shift Type</th>
                    <th>Period</th>
                    <th>Remark</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.filteredStaff.map((staff, index) => `
                    <tr>
                      <td>${index + 1}</td>
                      <td>${staff.id}</td>
                      <td>${staff.name}</td>
                      <td>${staff.gender}</td>
                      <td>${staff.department}</td>
                      <td>${staff.position}</td>
                      <td>${staff.scanIn || '-'}</td>
                      <td>${staff.scanOut || '-'}</td>
                      <td>${staff.leaveType || '-'}</td>
                      <td>${staff.attendanceFromDate || '-'}</td>
                      <td>${staff.toDate || '-'}</td>
                      <td>${staff.shiftType || '-'}</td>
                      <td>${staff.period || '-'}</td>
                      <td>${staff.remark || '-'}</td>
                    </tr>
                    <tr>
                      <td colspan="14">
                        <table class="details-table">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Gender</th>
                              <th>Department</th>
                              <th>Position</th>
                              <th>Scan-In</th>
                              <th>Scan-Out</th>
                              <th>Leave Type</th>
                              <th>From Date</th>
                              <th>To Date</th>
                              <th>Shift Type</th>
                              <th>Period</th>
                              <th>Remark</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>${staff.id}</td>
                              <td>${staff.name}</td>
                              <td>${staff.gender}</td>
                              <td>${staff.department}</td>
                              <td>${staff.position}</td>
                              <td>${staff.scanIn || '-'}</td>
                              <td>${staff.scanOut || '-'}</td>
                              <td>${staff.leaveType || '-'}</td>
                              <td>${staff.attendanceFromDate || '-'}</td>
                              <td>${staff.toDate || '-'}</td>
                              <td>${staff.shiftType || '-'}</td>
                              <td>${staff.period || '-'}</td>
                              <td>${staff.remark || '-'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  `).join('')}
               
        `);
 }
 // In the printReport method, update the 'Leave Staff' case style section
else if (this.selecteModules === 'Leave Staff') {
  printWindow.document.write(`
    <html>
      <head>
        <title>Leave Staff Report - ${this.selecteModules}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { text-align: center; }
          .filters { margin-bottom: 20px; }
          .filter-item { margin: 5px 0; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #333; color: white; }
          tr:nth-child(even) { background-color: #f7fafc; }
          tr:nth-child(odd) { background-color: #ffffff; }
          @media print {
            body { margin: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <h1>Leave Staff Report: ${this.selecteModules}</h1>
        <div class="filters">
          <div class="filter-item"><strong>Project:</strong> ${this.selecteModules}</div>
          <div class="filter-item"><strong>Date Range:</strong> ${this.dateRange || 'Any'}</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Leave Type</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Period</th>
              <th>Reason</th>
              <th>Remaining Balance</th>
              <th>Balance Usage</th>
              <th>Responsibilities</th>
              <th>Checked By</th>
              <th>Approved By</th>
              <th>Approved</th>
            </tr>
          </thead>
          <tbody>
            ${this.filteredLeaveData
              .map(
                (leave, idx) => `
                  <tr>
                    <td>${idx + 1}</td>
                    <td>${leave.id || '-'}</td>
                    <td>${leave.requestBy || '-'}</td>
                    <td>${leave.type || '-'}</td>
                    <td>${leave.fromDate || '-'}</td>
                    <td>${leave.toDate || '-'}</td>
                    <td>${leave.period || '-'}</td>
                    <td>${leave.reason || '-'}</td>
                    <td>${leave.remainingBalance || '-'}</td>
                    <td>${leave.balanceUsage || '-'}</td>
                    <td>${leave.responsibilities || '-'}</td>
                    <td>${leave.checkBy || '-'}</td>
                    <td>${leave.approveBy || '-'}</td>
                    <td>${leave.isApproved ? 'Yes' : 'No'}</td>
                  </tr>
                `
              )
              .join('')}
          </tbody>
        </table>
      </body>
    </html>
  `);
}
 
 else if (this.selecteModules === 'Timesheet') {
    printWindow.document.write(`
      <html>
        <head>
          <title>Timesheet Report - ${this.selecteModules}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { text-align: center; }
            .filters { margin-bottom: 20px; }
            .filter-item { margin: 5px 0; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #333; color: white; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>Timesheet Report: ${this.selecteModules}</h1>
          <div class="filters">
            <div class="filter-item"><strong>Project:</strong> ${this.selecteModules}</div>
            <div class="filter-item"><strong>Date Range:</strong> ${this.dateRange || 'Any'}</div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID Staff</th>
                <th>Name Staff</th>
                <th>Project</th>
                <th>Timesheet</th>
                <th>Total Time</th>
              </tr>
            </thead>
            <tbody>
              ${this.timesheetData
                .map(
                  staff => `
                    <tr>
                      <td>${staff.id || '-'}</td>
                      <td>${staff.name || '-'}</td>
                      <td>${staff.project || '-'}</td>
                      <td>${staff.timesheet || '-'}</td>
                      <td>${staff.totalTime || '0.0'}</td>
                    </tr>
                  `
                )
                .join('')}
            </tbody>
          </table>
        </body>
      </html>
    `);

      } else {
        printWindow.document.write(`
          <html>
            <head>
              <title>Project Report - ${this.selecteModules}</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { text-align: center; }
                .filters { margin-bottom: 20px; }
                .filter-item { margin: 5px 0; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { padding: 8px; text-align: left; }
                th { background-color: #333; color: white; }
                .rejected { background-color: #e2e8f0; }
                .status-approved { background-color: #333; color: white; padding: 2px 8px; border-radius: 9999px; }
                .status-pending { background-color: #a0aec0; color: white; padding: 2px 8px; border-radius: 9999px; }
                .status-rejected { background-color: #718096; color: white; padding: 2px 8px; border-radius: 9999px; }
                .details-table { margin-left: 20px; }
                .details-table th { background-color: #4a5568; }
                @media print {
                  body { margin: 0; }
                  .no-print { display: none; }
                }
              </style>
            </head>
            <body>
              <h1>Project Report: ${this.selecteModules}</h1>
              <div class="filters">
                <div class="filter-item"><strong>Project:</strong> ${this.selecteModules || 'All Projects'}</div>
                <div class="filter-item"><strong>Status:</strong> ${this.statusFilter || 'All Statuses'}</div>
                <div class="filter-item"><strong>Weekly Wage Range:</strong> ${this.salaryRange || 'Any'}</div>
                <div class="filter-item"><strong>Date Range:</strong> ${this.dateRange || 'Any'}</div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Level</th>
                    <th>Grade</th>
                    <th>Category</th>
                    <th>Direct Manager</th>
                    <th>Indirect Manager</th>
                    <th>Previous Wage/Day</th>
                    <th>Previous Wage/Week</th>
                    <th>Status</th>
                    <th>Remark</th>
                    <th>Scan-In</th>
                    <th>Scan-Out</th>
                    <th>Leave Type</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.filteredStaff
                    .filter(staff => staff.adjustmentDate)
                    .map((staff, index) => `
                      <tr ${staff.status === 'Rejected' ? 'class="rejected"' : ''}>
                        <td>${index + 1}</td>
                        <td>${staff.id}</td>
                        <td>${staff.name}</td>
                        <td>${staff.position}</td>
                        <td>${staff.level || '-'}</td>
                        <td>${staff.grade || '-'}</td>
                        <td>${staff.category || '-'}</td>
                        <td>${staff.directManager || '-'}</td>
                        <td>${staff.indirectManager || '-'}</td>
                        <td>${staff.previousWageDay || '-'}</td>
                        <td>${staff.previousWageWeek || '-'}</td>
                        <td>
                          <span class="status-${staff.status?.toLowerCase() || 'pending'}">
                            ${staff.status || 'Pending'}
                          </span>
                        </td>
                        <td>${staff.remark || '-'}</td>
                        <td>${staff.scanIn || '-'}</td>
                        <td>${staff.scanOut || '-'}</td>
                        <td>${staff.leaveType || '-'}</td>
                      </tr>
                      <tr>
                        <td colspan="16">
                          <table class="details-table">
                            <thead>
                              <tr>
                                <th>Last Updated</th>
                                <th>Adjustment Date</th>
                                <th>Request Date</th>
                                <th>Checked By</th>
                                <th>Check Date</th>
                                <th>Approved By</th>
                                <th>Approve Date</th>
                                <th>Remark</th>
                                <th>Scan-In</th>
                                <th>Scan-Out</th>
                                <th>Leave Type</th>
                                <th>Attendance From Date</th>
                                <th>To Date</th>
                                <th>Shift Type</th>
                                <th>Period</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>${staff.lastUpdated || '-'}</td>
                                <td>${staff.adjustmentDate || '-'}</td>
                                <td>${staff.requestDate || '-'}</td>
                                <td>${staff.checkedBy || '-'}</td>
                                <td>${staff.checkDate || '-'}</td>
                                <td>${staff.approvedBy || '-'}</td>
                                <td>${staff.approveDate || '-'}</td>
                                <td>${staff.remark || '-'}</td>
                                <td>${staff.scanIn || '-'}</td>
                                <td>${staff.scanOut || '-'}</td>
                                <td>${staff.leaveType || '-'}</td>
                                <td>${staff.attendanceFromDate || '-'}</td>
                                <td>${staff.toDate || '-'}</td>
                                <td>${staff.shiftType || '-'}</td>
                                <td>${staff.period || '-'}</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    `).join('')}
               
        `);
      }
      printWindow.document.close();
    },
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
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap');

* {
  box-sizing: border-box;
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
.rejected-row {
  background-color: #fdfcfc !important; /* light red for light mode */
}
.dark .rejected-row {
  background-color: #2d2a354c !important; /* dark red for dark mode */
}

input,
select {
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

.relative input[type='text'] + div > i.fas,
.relative select + div > i.fas {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
  text-align: left;
}

button:focus,
select:focus,
input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

.dropdown-content {
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  th,
  td {
    min-width: 120px;
  }
}

@media (max-width: 480px) {
  select,
  input {
    font-size: 14px;
    padding: 4px;
  }
  h1,
  h2,
  h3 {
    font-size: 16px;
  }
}
</style>