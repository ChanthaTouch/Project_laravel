<template>
  <div class="min-h-screen bg-white dark:bg-[#0e1726] w-full" :class="{ 'dark text-gray-600-dark': store.semidark }">
    <div class="w-full p-4">
      <div class="bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
        <h2 class="text-xl font-bold text-gray-400">Staff Taking Leave</h2>
      </div>
      
      <div class="flex gap-2 mb-4">
          <button
            @click="exportExcel"
            class="h-10 px-4 py-2 bg-gray-200 dark:bg-gray-800 border-gray-800 rounded flex items-center transition duration-300"
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

      <div class="bg-gray-800 p-4 sm:p-6 rounded shadow-lg">
        <div class="flex space-x-4 mb-4">
          <button
            @click="activeTab = 'request'"
            :class="[
              'px-4 py-2 rounded-t transition',
              activeTab === 'request'
                ? 'bg-gray-100 dark:bg-gray-600 text-gray-400 '
                : 'bg-gray-100 dark:bg-gray-400 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            <i class="fas fa-edit"></i> Taking Leave Request Form
          </button>
          <button
            @click="activeTab = 'process'"
            :class="[
              'px-4 py-2 rounded-t transition',
              activeTab === 'process'
               ? 'bg-gray-100 dark:bg-gray-600 text-gray-400 '
                : 'bg-gray-100 dark:bg-gray-400 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            <i class="fas fa-spinner"></i> Taking Leave App. Process
          </button>
          <button
            @click="activeTab = 'approved'"
            :class="[
              'px-4 py-2 rounded-t transition',
              activeTab === 'approved'
               ? 'bg-gray-100 dark:bg-gray-600 text-gray-400 '
                : 'bg-gray-100 dark:bg-gray-400 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            <i class="fas fa-check"></i> Taking Leave Approved
          </button>
          <button
            @click="activeTab = 'history'"
            :class="[
              'px-4 py-2 rounded-t transition',
              activeTab === 'history'
               ? 'bg-gray-100 dark:bg-gray-600 text-gray-400 '
                : 'bg-gray-100 dark:bg-gray-400 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            <i class="fas fa-history"></i> Personal Taking Leave History
          </button>
        </div>
        <div v-if="activeTab === 'request'" class="bg-white dark:bg-[#0e1726] p-4 rounded-lg shadow-lg">
          <h3 class="text-lg mb-2 text-gray-400 font-bold size-18">Leave Request Form</h3>
          <form @submit.prevent="submitRequest" class="grid grid-cols-3 gap-4 p-4 bg-white dark:bg-[#0e1726] rounded shadow-lg">
            <!-- Row 1 -->
            <div>
              <label class="text-gray-400 flex items-center font-bold size-18">Wish to take</label>
              <div class="relative">
                <select v-model="leaveType" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 bg-gray-400 dark:bg-gray-800" required>
                  <option value="" disabled selected>Select leave type</option>
                  <option value="Annual">Annual leave</option>
                  <option value="Sick">Sick leave</option>
                  <option value="Special">Special leave</option>
                  <option value="Maternity">Maternity leave</option>
                  <option value="Unpaid">Unpaid leave</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-list text-gray-500"></i>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">From date</label>
              <div class="relative">
                <input type="date" v-model="fromDate" class="w-full h-10 p-2 border-none text-600 rounded mt-1 bg-gray-300 dark:bg-gray-800 pl-12 custom-date-input">
                <i class="fas fa-calendar-alt  absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded text-gray-500"></i>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">To date</label>
              <div class="relative">
                <input type="date" v-model="toDate" class="w-full h-10 p-2 pr-2 border-none rounded mt-1 bg-gray-400 dark:bg-gray-800 pl-12 custom-date-input text-left">
                <i class="fas fa-calendar-alt absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <!-- Row 2 -->
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">From shift</label>
              <div class="relative">
                <select v-model="fromShift" class="w-full h-10 p-2 border-none rounded mt-1 bg-gray-400 dark:bg-gray-800 pl-12">
                  <option value="" disabled selected>Select</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-list text-gray-500"></i>
                </div>
              </div>
            </div>
          
            
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">For period</label>
              <div class="relative">
                <input type="number" v-model="period" class="w-full h-10 p-2 border-none rounded mt-1 bg-gray-400 dark:bg-gray-800 pl-12 custom-number-input" min="0">
                <i class="fas fa-sort-numeric-up absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <!-- Row 3 -->
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Forward annual leave balance</label>
              <div class="relative">
                <input type="number" v-model="forwardBalance" class="w-full h-10 p-2 border-none rounded mt-1 bg-gray-400 dark:bg-gray-800 pl-12 custom-number-input">
                <i class="fas fa-sort-numeric-up absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Remaining annual leave balance</label>
              <div class="relative">
                <input type="number" v-model="remainingBalance" class="w-full h-10 p-2 border-none rounded mt-1 bg-gray-400 dark:bg-gray-800 pl-12 custom-number-input">
                <i class="fas fa-sort-numeric-up absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Direct Supervisor</label>
              <div class="relative">
                <select v-model="supervisor" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 bg-gray-400 dark:bg-gray-800" required>
                  <option value="" disabled selected>Select</option>
                  <option>MEAM Dara</option>
                  <option>CHEA Udom</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-user-shield text-gray-500"></i>
                </div>
              </div>
            </div>
            <!-- ================update to push ================ -->
            <!-- Row 4 -->
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">My regular duties and responsibilities will be cover by</label>
              <div class="relative">
                <select v-model="responsibilities" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 bg-gray-400 dark:bg-gray-800" required>
                  <option value="" disabled selected>Select Responsibilities</option>
                  <option>MEAN Dara</option>
                  <option>CHEA Udom</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-user-tie text-gray-500"></i>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Line Manager</label>
              <div class="relative">
                <select v-model="lineManager" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 bg-gray-400 dark:bg-gray-800" required>
                  <option value="" disabled selected>Select</option>
                  <option>MEAN Dara</option>
                  <option>CHEA Udom</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-user-cog text-gray-500"></i>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Reason</label>
              <textarea v-model="reason" class="w-full p-2 border-none rounded mt-1 h-20 bg-gray-400 dark:bg-gray-800"></textarea>
            </div>
            <!-- Submit Button -->
            <div class="col-span-3 text-right">
              <button type="submit" class="px-4 py-2 bg-gray-600 text-white h-11 rounded hover:bg-gray-700 flex items-center transition duration-300"><i class="fas fa-paper-plane mr-1"></i>Request</button>
            </div>
          </form>
        </div>

        <div v-if="activeTab === 'process'" class="bg-white dark:bg-[#0e1726] p-4 rounded-lg shadow-lg">
          <h3 class="text-lg mb-2 font-bold size-18">Taking Leave App. Process</h3>
          <div class="flex space-x-4 mb-4 bg-white dark:bg-[#0e1726] p-4 rounded shadow-lg">
            <div class="relative w-1/5">
              <label class="text-gray-600 flex items-center font-bold size-18">Year</label>
              <select v-model="searchYear" class="w-full h-9 p-2 pl-12 border-none rounded bg-gray-400 dark:bg-gray-800">
                <option>2025</option>
              </select>
              <div class="absolute top-2/3 left-1 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                <i class="fas fa-calendar-alt text-gray-500"></i>
              </div>
            </div>
            <div class="relative w-1/5">
              <label class="text-gray-600 flex items-center font-bold size-18">Leave Type</label>
              <select v-model="searchLeaveType" class="w-4/5 h-9 p-2 pl-12 border-none rounded bg-gray-400 dark:bg-gray-800">
                <option>All</option>
                <option>Annual</option>
                <option>Sick</option>
                <option>Special</option>
                <option>Maternity</option>
                <option>Unpaid</option>
              </select>
              <div class="absolute top-2/3 left-1 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                <i class="fas fa-list text-gray-500"></i>
              </div>
            </div>
            <div class="relative w-1/5">
              <label class="text-gray-600 flex items-center font-bold size-18">Month</label>
              <select v-model="searchMonth" class="w-full h-9 p-2 pl-12 border-none rounded bg-gray-400 dark:bg-gray-800">
                <option>All</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
              </select>
              <div class="absolute top-2/3 left-1 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                <i class="fas fa-dollar-sign text-gray-500"></i>
              </div>
            </div>
            <div class="relative w-1/5">
              <label class="text-gray-600 flex items-center font-bold size-18">Department</label>
              <select v-model="searchDeptPro" class="w-full h-9 p-2 pl-12 border-none rounded bg-gray-400 dark:bg-gray-800">
                <option>All</option>
                <option>Dept 1</option>
                <option>Dept 2</option>
              </select>
              <div class="absolute top-2/3 left-1 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                <i class="fas fa-building text-gray-500"></i>
              </div>
            </div>
            <div class="relative w-1/5">
              <label class="text-gray-600 flex items-center font-bold size-18">Search</label>
              <input v-model="searchNameId" type="text" placeholder="Search by name/id..." class="w-full h-10 p-2 pl-12 border-none rounded bg-gray-400 dark:bg-gray-800" />
              <div class="absolute top-2/3 left-1 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                <i class="fas fa-search text-gray-500"></i>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto h-auto shadow-lg">
             <table class="w-full border-collapse rounded-lg overflow-hidden text-sm sm:text-base ">
              <thead class="bg-white dark:bg-[#0e1726]">
                <tr class="text-xs sm:text-sm font-bold">
                  <th class=" text-gray-400 p-2">#</th>
                  <th class=" text-gray-400 p-2">Request By</th>
                  <th class=" text-gray-400 p-2">Leave Type</th>
                  <th class=" text-gray-400 p-2">Period (Day)</th>
                  <th class=" text-gray-400 p-2">From Date</th>
                  <th class=" text-gray-400 p-2">To Date</th> 
                  <th class=" text-gray-400 p-2">Balance Remaining</th>
                  <th class=" text-gray-400 p-2">Balance Usage</th>
                  <th class=" text-gray-400 p-2">Reason</th>
                  <th class=" text-gray-400 p-2">Responsibilities</th>
                  <th class=" text-gray-400 p-2">Check By</th>
                  <th class=" text-gray-400 p-2">Approve By</th>
                  <th class=" text-gray-400 p-2">Status</th>
                  <th class=" text-gray-400 p-2">Option</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(process, index) in processList" :key="index" class=" text-gray-400">
                  <td class=" text-gray-400 p-2">{{ index + 1 }}</td>
                  <td class=" text-gray-400 p-2">{{ process.requestBy || 'Current User' }}</td>
                  <td class=" text-gray-400 p-2">{{ process.type }}</td>
                  <td class=" text-gray-400 p-2">{{ process.period }}</td>
                  <td class=" text-gray-400 p-2">{{ process.fromDate }}</td>
                  <td class=" text-gray-400 p-2">{{ process.toDate }}</td>
                  <td class=" text-gray-400 p-2">{{ process.remainingBalance }}</td>
                  <td class=" text-gray-400 p-2">{{ process.forwardBalance - process.remainingBalance }}</td>
                  <td class=" text-gray-400 p-2">{{ process.reason }}</td>
                  <td class=" text-gray-400 p-2">{{ process.responsibilities }}</td>
                  <td class=" text-gray-400 p-2">{{ process.supervisor }}</td>
                  <td class=" text-gray-400 p-2">{{ process.lineManager }}</td>
                  <td class=" text-gray-400 p-2 ">{{ process.status || 'Pending' }}</td>
                  <td class=" text-gray-400 p-2"><button class="bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700"><i class="fas fa-eye mr-1"></i>View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button @click="closeProcessTab" class="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Close</button>
        </div>

        <div v-if="activeTab === 'approved'" class="bg-white dark:bg-[#0e1726] p-4 rounded-lg shadow-lg">
          <h3 class="text-lg mb-2 text-gray-400 font-bold size-18">Taking Leave Approved</h3>
          <div class="flex space-x-4 mb-4 bg-white dark:bg-[#0e1726] p-4 rounded shadow-lg">
            <div class="relative w-1/5">
              <label class="text-gray-600 flex items-center font-bold size-18">Year</label>
              <select v-model="searchYear" class="w-full h-10 p-2 pl-12 border-none rounded bg-gray-400 dark:bg-gray-800">
                <option>2025</option>
              </select>
              <div class="absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                <i class="fas fa-calendar-alt text-gray-500"></i>
              </div>
            </div>
            <div class="relative w-1/5">
              <label class="text-gray-600 flex items-center font-bold size-18">Leave Type</label>
              <select v-model="searchType" class="w-full h-10 p-2 pl-12 border-none rounded bg-gray-400 dark:bg-gray-800">
                <option>All</option>
                <option>Annual</option>
                <option>Sick</option>
                <option>Special</option>
              </select>
              <div class="absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                <i class="fas fa-list text-gray-500"></i>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto h-auto shadow">
             <table class="w-full border-collapse rounded-lg overflow-hidden text-sm sm:text-base">
              <thead>
                <tr class="text-xs sm:text-sm font-bold">
                  <th class=" p-2 text-gray-400">#</th>
                  <th class=" p-2 text-gray-400">ID</th>
                  <th class=" p-2 text-gray-400">Request_by</th>
                  <th class=" p-2 text-gray-400">Leave Type</th>
                  <th class=" p-2 text-gray-400">Period (Day)</th>
                  <th class=" p-2 text-gray-400">From Date</th>
                  <th class=" p-2 text-gray-400">To Date</th>
                  <th class=" p-2 text-gray-400">Balance Remaining</th>
                  <th class=" p-2 text-gray-400">Balance Usage</th>
                  <th class=" p-2 text-gray-400">Reason</th>
                  <th class=" p-2 text-gray-400">Responsibilities by</th>
                  <th class=" p-2 text-gray-400">Check by </th>
                  <th class=" p-2 text-gray-400">Approve by</th>
                  <th class=" p-2 text-gray-400">Status</th>
                  <th class=" p-2 text-gray-400">Option</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(leave, index) in approvedLeaves" :key="index" class="">
                  <td class=" p-2 text-gray-400">{{ index + 1 }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.id }}</td>
                  <td class=" p-2 text-gray-400" :class="{'text-gray-400': leave.isApproved, 'text-gray-600': !leave.isApproved}">
                    {{ leave.requestBy }} <span v-if="leave.isApproved"></span><span v-else>Ã¢Å“â€”</span>
                  </td>
                  <td class=" p-2 text-gray-400">{{ leave.type }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.period }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.fromDate }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.toDate }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.remainingBalance }}</td>
                  <td class="p-2 text-gray-400">{{ leave.balanceUsage }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.reason }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.responsibilities }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.checkBy }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.approveBy }}</td>
                  <td class=" p-2 text-gray-400">Approved</td>
                  <td class=" p-2 text-gray-400"><button class="bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700"><i class="fas fa-eye mr-1"></i>View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button @click="closeApprovedTab" class="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">Close</button>
        </div>

        <div v-if="activeTab === 'history'" class="bg-white dark:bg-[#0e1726] p-4 rounded-lg shadow-lg">
          <h3 class="text-lg mb-2 text-gray-400 font-bold size-18">Personal Taking Leave History</h3>
          <div class="flex space-x-4 mb-4 bg-white dark:bg-[#0e1726] p-4 rounded shadow-lg">
            <div class="relative w-1/5">
              <label class="text-gray-600 flex items-center font-bold size-18">Year</label>
              <select v-model="historySearchYear" class="w-full h-10 p-2 pl-12 border-none rounded bg-gray-400 dark:bg-gray-800">
                <option>2025</option>
              </select>
              <div class="absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                <i class="fas fa-calendar-alt text-gray-500"></i>
              </div>
            </div>
            <div class="relative w-1/5">
              <label class="text-gray-600 flex items-center font-bold size-18">Leave Type</label>
              <select v-model="historySearchType" class="w-full h-10 p-2 pl-12 border-none rounded bg-gray-400 dark:bg-gray-800">
                <option>All</option>
                <option>Annual</option>
                <option>Sick</option>
                <option>Special</option>
              </select>
              <div class="absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                <i class="fas fa-list text-gray-500"></i>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto h-auto shadow-lg">
            <table class="w-full border-collapse rounded-lg overflow-hidden text-sm sm:text-base">
              <thead>
                <tr class="text-xs sm:text-sm font-bold">
                  <th class=" p-2 text-gray-400">#</th>
                  <th class=" p-2 text-gray-400">ID</th>
                  <th class=" p-2 text-gray-400">Request By</th>
                  <th class=" p-2 text-gray-400">Leave Type</th>
                  <th class=" p-2 text-gray-400">Period (Day)</th>
                  <th class=" p-2 text-gray-400">From Date</th>
                  <th class=" p-2 text-gray-400">Shift Type</th>
                  <th class=" p-2 text-gray-400">To Date</th>
                  <th class=" p-2 text-gray-400">Shift Type</th>
                  <th class=" p-2 text-gray-400">Reason</th>
                  <th class=" p-2 text-gray-400">Responsibilities</th>
                  <th class=" p-2 text-gray-400">Approve By</th>
                  <th class=" p-2 text-gray-400">Status</th>
                  <th class=" p-2 text-gray-400">Option</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(leave, index) in personalHistory" :key="index" class="">
                  <td class=" p-2 text-gray-400">{{ index + 1 }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.id }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.requestBy }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.type }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.period }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.fromDate }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.fromShift }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.toDate }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.toShift }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.reason }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.responsibilities }}</td>
                  <td class=" p-2 text-gray-400">{{ leave.approveBy }}</td>
                  <td class=" p-2 text-gray-400">Approved</td>
                  <td class=" p-2 text-gray-400"><button class="bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700"><i class="fas fa-eye mr-1"></i>View</button></td>
                </tr>
              </tbody>
            </table>
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
    const currentDate = new Date().toISOString().split('T')[0]; // Current date: 2025-06-26
    return {
      activeTab: 'request',
      leaveType: 'Annual',
      fromDate: '2025-06-10',
      fromShift: 'Morning',
      toDate: '2025-06-10',
      toShift: 'Evening',
      period: '1',
      reason: '',
      forwardBalance: '5',
      remainingBalance: '4',
      responsibilities: '',
      supervisor: '',
      lineManager: '',
      searchYear: '2025',
      searchLeaveType: 'All',
      searchMonth: 'All',
      searchDeptPro: 'All',
      searchNameId: '',
      searchType: 'All',
      historySearchYear: '2025',
      historySearchType: 'All',
      approvedLeaves: [
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
      processLeaveType: '',
      processFromDate: '',
      processFromShift: '',
      processToDate: '',
      processToShift: '',
      processPeriod: '',
      processReason: '',
      processForwardBalance: '',
      processRemainingBalance: '',
      processResponsibilities: '',
      processSupervisor: '',
      processLineManager: '',
      personalHistory: [
        { requestBy: 'CHEA Udom', type: 'Annual Leave', period: '1', fromDate: '2025-06-10', fromShift: 'Morning', toDate: '2025-06-10', toShift: 'Afternoon', reason: 'Busy at home', responsibilities: 'CHEA Udom', approveBy: 'CHEA Udom' },
        { requestBy: 'CHEA Nita', type: 'Annual Leave', period: '1', fromDate: '2025-06-05', fromShift: 'Morning', toDate: '2025-06-05', toShift: 'Afternoon', reason: 'Sick', responsibilities: 'MEAN Dara', approveBy: 'CHEA Udom' }
      ],
      processList: [] // Initialize processList to store submitted processes
    };
  },
  methods: {
    submitRequest() {
      const newLeave = {
        requestBy: 'Current User', // Assuming current user submits
        type: this.leaveType,
        period: this.period,
        fromDate: this.fromDate,
        fromShift: this.fromShift,
        toDate: this.toDate,
        toShift: this.toShift,
        reason: this.reason,
        responsibilities: this.responsibilities,
        remainingBalance: this.remainingBalance,
        balanceUsage: this.forwardBalance - this.remainingBalance,
        checkBy: this.supervisor,
        approveBy: this.lineManager,
        isApproved: false // Initially not approved
      };
      this.processList.push(newLeave); // Add to process list for approval
      this.resetForm();
    },
    
    resetForm() {
      this.leaveType = 'Annual';
      this.fromDate = '2025-06-10';
      this.fromShift = 'Morning';
      this.toDate = '2025-06-10';
      this.toShift = 'Evening';
      this.period = '1';
      this.reason = '';
      this.forwardBalance = '5';
      this.remainingBalance = '4';
      this.responsibilities = '';
      this.supervisor = '';
      this.lineManager = '';
    },
     store() {
      return useAppStore();
    },
    closeProcessTab() {
      this.activeTab = 'request';
    },
    closeApprovedTab() {
      this.activeTab = 'request';
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap');

* {
  box-sizing: border-box;
}
thead tr th {
  background-color: #000 !important;
}
label { font-weight: bold; }
input, select, textarea {
  display: block;
  margin-top: 4px;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
}
.custom-date-input {
  padding-left: 48px;
}
.custom-number-input {
  padding-left: 48px;
}
input[type="date"] + i.fas.fa-calendar-alt,
input[type="number"] + i.fas.fa-sort-numeric-up,
select + i.fas {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
  text-align: left;
}
th, td { text-align: left; }
button {
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
}
button:focus { outline: none; }
@media (max-width: 768px) {
  .grid-cols-3 {
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
  select, input, textarea {
    font-size: 0.9rem;
    padding: 0.25rem;
  }
  h3 {
    font-size: 1.1rem;
  }
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
  }
  table {
    min-width: 600px;
  }
  th, td {
    white-space: nowrap;
  }
}
</style>