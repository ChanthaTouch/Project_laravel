<template>
  <div class="min-h-screen bg-white dark:bg-[#0e1726] w-full" :class="{ 'dark text-gray-600-dark': store.semidark }">
    <div class="w-full p-4">
      <div class="bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
        <h2 class="text-xl font-bold text-white">Staff Attendance Tracking</h2>
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

      <div class="bg-gray-800 p-4 sm:p-6 rounded shadow-lg ">
        <div class="flex space-x-4 mb-4 border-b ">
          <button @click="activeTab = 'daily'" :class="{'bg-gray-200 dark:bg-gray-500': activeTab === 'daily', 'bg-gray-200 dark:bg-gray-500 text-gray-700': activeTab !== 'daily'}" class="px-4 py-2 rounded-t-lg h-10"><i class="fas fa-calendar-day"></i> Daily Attendance</button>
          <button @click="activeTab = 'report'" :class="{'bg-gray-200 dark:bg-gray-500': activeTab === 'report', 'bg-gray-200 dark:bg-gray-500 text-gray-700': activeTab !== 'report'}" class="px-4 py-2 rounded-t-lg h-10"><i class="fas fa-chart-line"></i> Attendance Tracking Report</button>
          <button @click="activeTab = 'leave'" :class="{'bg-gray-200 dark:bg-gray-500': activeTab === 'leave', 'bg-gray-200 dark:bg-gray-500 text-gray-700': activeTab !== 'leave'}" class="px-4 py-2 rounded-t-lg h-10"><i class="fas fa-user-shield"></i> Staff take leave with Attendance Scan</button>
        </div>
        <div v-if="activeTab === 'daily'" class=" bg-white dark:bg-[#0e1726] p-4 rounded-lg shadow-lg">
          <h3 class="text-lg mb-2 text-gray-800 font-bold size-18">Daily Attendance Tracking</h3>
          <div class="grid grid-cols-6 gap-4 p-4 bg-white dark:bg-[#0e1726] rounded shadow-lg">
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Date</label>
              <div class="relative">
                <input type="date" v-model="date" class="w-full h-10 p-2 mt-1 text-gray-400 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input" required>
                <i class="fas fa-calendar-alt absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Shift Type</label>
              <div class="relative">
                <select v-model="shiftType" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 text-gray-400 bg-gray-200 dark:bg-gray-800" required>
                  <option value="" disabled selected>Select</option>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
               <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-clock text-gray-500"></i>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Search By Dept/Pro</label>
              <div class="relative">
                <select v-model="deptPro" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 text-gray-400 bg-gray-200 dark:bg-gray-800">
                  <option value="">Select Dept/Pro</option>
                  <option value="accounting">Transportation Engineering</option>
                  <option value="technical">Materials Engineering</option>
                  <option value="hr-admin">Structural Engineerin</option>
                  <option value="it">Geotechnical Engineering</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 text-gray-400 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-building text-gray-500"></i>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Search By Dept. Name</label>
              <div class="relative">
                <select v-model="deptName" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 text-gray-400 bg-gray-200 dark:bg-gray-800">
                  <option value="">Select Department</option>
                  <option value="accounting">Transportation Engineering</option>
                  <option value="technical">Materials Engineering</option>
                  <option value="hr-admin">Structural Engineerin</option>
                  <option value="it">Geotechnical Engineering</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 text-gray-400 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-building text-gray-500"></i>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Search Staff</label>
              <div class="relative">
                <input type="text" v-model="searchStaff" class="w-full h-10 p-2 border-none rounded mt-1 text-gray-400 bg-gray-200 dark:bg-gray-800 pl-12" placeholder="Search Labour in Working By...">
                <i class="fas fa-search absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Limit Record</label>
              <div class="relative">
                <input type="number" v-model="limitRecord" class="w-full h-10 p-2 border-none rounded mt-1 text-gray-400 bg-gray-200 dark:bg-gray-800 pl-12" min="1" value="350">
                <i class="fas fa-list-ol absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            
          </div>
          <div class="overflow-x-auto mt-4 h-auto rounded-lg shadow-lg">
            <table class="w-full border-collapse">
              <thead class="bg-black">
                <tr class="text-xs sm:text-sm font-bold">
                  <th class=" p-2 text-gray-400">#</th>
                  <th class=" p-2 text-gray-400">ID</th>
                  <th class=" p-2 text-gray-400">Name Khmer</th>
                  <th class=" p-2 text-gray-400">Gender</th>
                  <th class=" p-2 text-gray-400">Department/Environmental Engineeringt</th>
                  <th class=" p-2 text-gray-400">Position</th>
                  <th class=" p-2 text-gray-400">Date</th>
                  <th class=" p-2 text-gray-400">Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(staff, index) in filteredAttendance" :key="index" class="">
                  <td class=" p-2 text-gray-400">{{ index + 1 }}</td>
                  <td class=" p-2 text-gray-400">{{ staff.id }}</td>
                  <td class=" p-2 text-gray-400">{{ staff.name }}</td>
                  <td class=" p-2 text-gray-400">{{ staff.gender }}</td>
                  <td class=" p-2 text-gray-400">{{ staff.department }}</td>
                  <td class=" p-2 text-gray-400">{{ staff.position }}</td>
                  <td class=" p-2 text-gray-400">{{ staff.fromDate }}</td>
                  <td class=" p-2 text-gray-400">
                    <select v-model="staff.remark" class="w-full p-1 border-none rounded bg-gray-200 dark:bg-[#0e1726]">
                      <option value="No Scan">No Scan</option>
                      <option value="Annual Leave">Annual Leave</option>
                      <option value="Absence">Absence</option>
                      <option value="Others">Others</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
        <div v-if="activeTab === 'report'" class=" bg-white dark:bg-[#0e1726] p-4 rounded-lg shadow-lg">
          <h3 class="text-lg mb-2 text-gray-400 font-bold size-18">Attendance Tracking Report</h3>
          <div class="grid grid-cols-6 gap-4 p-4 bg-white dark:bg-[#0e1726] rounded shadow-lg">
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">From Date</label>
              <div class="relative">
                <input type="date" v-model="reportFromDate" @change="searchTrackingReport" class="w-full h-10 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input" required>
                <i class="fas fa-calendar-alt absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">To Date</label>
              <div class="relative">
                <input type="date" v-model="reportToDate" @change="searchTrackingReport" class="w-full h-10 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input" required>
                <i class="fas fa-calendar-alt absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Report List</label>
              <div class="relative">
                <select v-model="reportList" @change="searchTrackingReport" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800">
                  <option value="" disabled selected>Select Report</option>
                  <option value="daily">Daily Attendance Tracking</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-list text-gray-500"></i>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Search By Dept/Pro</label>
              <div class="relative">
                <select v-model="trackingDeptPro" @change="searchTrackingReport" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800">
                  <option value="">Select Dept/Pro</option>
                  <option value="accounting">Transportation Engineering</option>
                  <option value="technical">Materials Engineering</option>
                  <option value="hr-admin">Structural Engineerin</option>
                  <option value="it">Geotechnical Engineering</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-building text-gray-500"></i>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Search By Dept. Name</label>
              <div class="relative">
                <select v-model="trackingDeptName" @change="searchTrackingReport" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800">
                  <option value="">Select Department</option>
                  <option value="accounting">Transportation Engineering</option>
                  <option value="technical">Materials Engineering</option>
                  <option value="hr-admin">Structural Engineerin</option>
                  <option value="it">Geotechnical Engineering</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-building text-gray-500"></i>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Search Staff</label>
              <div class="relative">
                <input type="text" v-model="trackingSearchStaff" @input="searchTrackingReport" class="w-full h-10 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12" placeholder="Search Labour in Working By...">
                <i class="fas fa-search absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            
          </div>
          <div class="overflow-x-auto mt-4 h-auto shadow-lg rounded-lg" v-if="showTrackingReport">
            <table class="w-full border-collapse  overflow-hidden text-sm sm:text-base bg-white dark:bg-[#0e1726]">
              <thead class="bg-black">
                <tr class="text-xs sm:text-sm font-bold">
                  <th class="text-gray-400 p-2 ">ID</th>
                  <th class="text-gray-400 p-2 ">Name</th>
                  <th class="text-gray-400 p-2 ">Department</th>
                  <th class="text-gray-400 p-2 ">Date</th>
                  <th class="text-gray-400 p-2 ">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in trackingReportData" :key="index" class="text-gray-400">
                  <td class="text-gray-400 p-2">{{ data.id }}</td>
                  <td class="text-gray-400 p-2">{{ data.name }}</td>
                  <td class="text-gray-400 p-2">{{ data.department }}</td>
                  <td class="text-gray-400 p-2">{{ data.date }}</td>
                  <td class="text-gray-400 p-2">{{ data.status }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-else-if="trackingReportData.length === 0 && showTrackingReport" class="mt-4 text-center text-gray-600">No data available for the selected report.</p>
        </div>
        <div v-if="activeTab === 'leave'" class=" bg-white dark:bg-[#0e1726] p-4 rounded-lg shadow-lg">
          <h3 class="text-lg mb-2 text-gray-400 font-bold size-18">Staff take leave with Attendance Scan</h3>
          <div class="grid grid-cols-6 gap-4 p-4 bg-white dark:bg-[#0e1726] rounded shadow-lg">
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">From Date</label>
              <div class="relative">
                <input type="date" v-model="leaveFromDate" @change="searchLeaveData" class="w-full h-10 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input" required>
                <i class="fas fa-calendar-alt absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="text-gray-600 flex items-center font-bold size-18">Search By Dept/Pro</label>
              <div class="relative">
                <select v-model="leaveDeptPro" @change="searchLeaveData" class="w-full h-10 p-2 pl-12 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800">
                  <option value="">Select Dept/Pro</option>
                  <option value="accounting">Transportation Engineering</option>
                  <option value="technical">Materials Engineering</option>
                  <option value="hr-admin">Structural Engineerin</option>
                  <option value="it">Geotechnical Engineering</option>
                  <option value="business">Business Development Department</option>
                </select>
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded">
                  <i class="fas fa-building text-gray-500"></i>
                </div>
              </div>
            </div>
            <div class="col-span-4"></div>
           
          </div>
          <div class="overflow-x-auto mt-4 h-auto bg-white dark:bg-[#0e1726] shadow-lg border-collapse rounded-lg">
            <table class="w-full border-collapse rounded-lg overflow-hidden text-sm sm:text-base bg-white dark:bg-[#0e1726]">
              <thead class="bg-black">
                <tr class=" text-xs sm:text-sm text-white font-bold">
                  <th class=" p-2 text-gray-400">#</th>
                  <th class=" p-2 text-gray-400">ID</th>
                  <th class=" p-2 text-gray-400">Name</th>
                  <th class=" p-2 text-gray-400">Gender</th>
                  <th class=" p-2 text-gray-400">Department</th>
                  <th class=" p-2 text-gray-400">Scan-In</th>
                  <th class=" p-2 text-gray-400">Scan-Out</th>
                  <th class=" p-2 text-gray-400">Leave Type</th>
                  <th class=" p-2 text-gray-400">From Date</th>
                  <th class=" p-2 text-gray-400">To Date</th>
                  <th class=" p-2 text-gray-400">Shift Type</th>
                  <th class=" p-2 text-gray-400">Period</th>
                  <th class=" p-2 text-gray-400">Option</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(staff, index) in filteredLeaveData" :key="index" class="">
                  <td class=" text-gray-400 p-2">{{ index + 1 }}</td>
                  <td class=" text-gray-400 p-2">{{ staff.id }}</td>
                  <td class=" text-gray-400 p-2">{{ staff.name }}</td>
                  <td class=" text-gray-400 p-2">{{ staff.gender }}</td>
                  <td class=" text-gray-400 p-2">{{ staff.department }}</td>
                  <td class=" text-gray-400 p-2">
                    <input v-if="editingStaff && editingStaff.id === staff.id" v-model="editingStaff.scanIn" class="w-full p-1 border-none rounded bg-gray-200 dark:bg-gray-800" type="time">
                    <span v-else>{{ staff.scanIn }}</span>
                  </td>
                  <td class="p-2 text-gray-400">
                    <input v-if="editingStaff && editingStaff.id === staff.id" v-model="editingStaff.scanOut" class="w-full p-1 border-none rounded bg-gray-200 dark:bg-gray-800" type="time">
                    <span v-else>{{ staff.scanOut }}</span>
                  </td>
                  <td class="p-2 text-gray-400">
                    <select v-if="editingStaff && editingStaff.id === staff.id" v-model="editingStaff.leaveType" class="w-full p-1 border-none rounded bg-gray-200 dark:bg-gray-800">
                      <option value="">Select Leave Type</option>
                      <option value="Annual Leave">Annual Leave</option>
                      <option value="Sick Leave">Sick Leave</option>
                      <option value="Personal Leave">Personal Leave</option>
                      <option value="Maternity Leave">Maternity Leave</option>
                      <option value="Unpaid Leave">Unpaid Leave</option>
                    </select>
                    <span v-else>{{ staff.leaveType }}</span>
                  </td>
                  <td class="p-2 text-gray-400">
                    <input v-if="editingStaff && editingStaff.id === staff.id" v-model="editingStaff.fromDate" class="w-full p-1 border-none rounded bg-gray-200 dark:bg-gray-800" type="date">
                    <span v-else>{{ staff.fromDate }}</span>
                  </td>
                  <td class="p-2 text-gray-400">
                    <input v-if="editingStaff && editingStaff.id === staff.id" v-model="editingStaff.toDate" class="w-full p-1 border-none rounded bg-gray-200 dark:bg-gray-800" type="date">
                    <span v-else>{{ staff.toDate }}</span>
                  </td>
                  <td class="p-2 text-gray-400">
                    <select v-if="editingStaff && editingStaff.id === staff.id" v-model="editingStaff.shiftType" class="w-full p-1 border-none rounded bg-gray-200 dark:bg-gray-800">
                      <option value="">Select Shift</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                    </select>
                    <span v-else>{{ staff.shiftType }}</span>
                  </td>
                  <td class="p-2 text-gray-400">
                    <input v-if="editingStaff && editingStaff.id === staff.id" v-model="editingStaff.period" class="w-full p-1 border-none rounded bg-gray-200 dark:bg-gray-800" type="number" step="0.1" min="0">
                    <span v-else>{{ staff.period }}</span>
                  </td>
                  <td class="p-2 text-gray-400 flex justify-center space-x-2">
                    <button v-if="!editingStaff || editingStaff.id !== staff.id" @click="editStaff(staff)" class="text-blue-600 hover:text-blue-800" title="Edit">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button v-if="editingStaff && editingStaff.id === staff.id" @click="saveStaff(staff)" class="text-green-600 hover:text-green-800" title="Save">
                      <i class="fas fa-save"></i>
                    </button>
                    <button v-if="editingStaff && editingStaff.id === staff.id" @click="cancelEdit" class="text-red-600 hover:text-red-800" title="Cancel">
                      <i class="fas fa-times"></i>
                    </button>
                    <button @click="deleteStaff(staff)" class="text-red-600 hover:text-red-800" title="Delete">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
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
      activeTab: 'daily',
      date: '2025-06-02',
      fromDate: currentDate,
      toDate: currentDate,
      shiftType: 'AM',
      deptPro: '',
      deptName: '',
      searchStaff: '',
      limitRecord: 350,
      department: 'accounting',
      reportList: '',
      trackingDeptPro: '',
      trackingDeptName: '',
      trackingSearchStaff: '',
      reportFromDate: '2025-06-02',
      reportToDate: currentDate,
      showTrackingReport: false,
      leaveFromDate: '2025-06-02',
      leaveDeptPro: '',
      attendanceData: [
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
        { id: 'S0018', name: 'Khem Rosmey', gender: 'Female', department: 'Transportation Engineering', position: 'Heavy Equipment Engineer', scanIn: '-', scanOut: '-', leaveType: '', fromDate: '2025-06-06', shiftType: 'PM', toDate: '2025-06-06', period: '0.7', remark: 'Absence' },
      ],
      trackingReportData: [],
      leaveData: [
        { id: 'S0019', name: 'Say Sophap', gender: 'Female', department: 'Environmental Engineeringt', scanIn: '12:48:00', scanOut: '18:48:28', leaveType: 'Annual Leave', fromDate: '2025-06-02', toDate: '2025-06-02', shiftType: 'Morning', period: '0.5', option: '' },
        { id: 'S0020', name: 'Tum Vandine', gender: 'Female', department: 'Structural Engineerin', scanIn: '12:53:24', scanOut: '18:14:15', leaveType: 'Annual Leave', fromDate: '2025-06-02', toDate: '2025-06-02', shiftType: 'Morning', period: '0.5', option: '' },
        { id: 'S0021', name: 'Huot Sokhrath', gender: 'Female', department: 'Construction Engineering and Management', scanIn: '12:53:53', scanOut: '17:18:15', leaveType: 'Annual Leave', fromDate: '2025-06-02', toDate: '2025-06-02', shiftType: 'Morning', period: '0.5', option: '' },
        { id: 'S0022', name: 'Pov Chantri', gender: 'Female', department: 'Water Resources Engineering', scanIn: '13:25:34', scanOut: '18:11:08', leaveType: 'Annual Leave', fromDate: '2025-06-02', toDate: '2025-06-02', shiftType: 'Morning', period: '0.5', option: '' },
        { id: 'S0023', name: 'Suong Sokleng', gender: 'Female', department: 'Materials Engineering', scanIn: '13:00:11', scanOut: '19:16:10', leaveType: 'Annual Leave', fromDate: '2025-06-02', toDate: '2025-06-02', shiftType: 'Morning', period: '0.5', option: '' },
      ],
      editingStaff: null, // To track the staff member being edited
    };
  },
  computed: {
    filteredAttendance() {
      return this.attendanceData.filter(staff => {
        const staffDate = new Date(this.date);
        const matchesDate = !this.date || (new Date(staff.fromDate) <= staffDate && new Date(staff.toDate) >= staffDate);
        const matchesShift = !this.shiftType || staff.shiftType === this.shiftType;
        const matchesDeptPro = !this.deptPro || staff.department.toLowerCase().includes(this.deptPro.toLowerCase());
        const matchesDeptName = !this.deptName || staff.department.toLowerCase().includes(this.deptName.toLowerCase());
        const matchesSearch = !this.searchStaff || staff.name.toLowerCase().includes(this.searchStaff.toLowerCase());
        return matchesDate && matchesShift && matchesDeptPro && matchesDeptName && matchesSearch;
      }).slice(0, this.limitRecord);
    },
    filteredLeaveData() {
      return this.leaveData.filter(staff => {
        const staffDate = new Date(this.leaveFromDate);
        const matchesDate = !this.leaveFromDate || new Date(staff.fromDate) >= new Date(this.leaveFromDate);
        const matchesDeptPro = !this.leaveDeptPro || staff.department.toLowerCase().includes(this.leaveDeptPro.toLowerCase());
        return matchesDate && matchesDeptPro;
      });
    },
  },
  methods: {
    store() {
      return useAppStore();
    },
    searchAttendance() {
      console.log('Searching attendance...', this.date, this.shiftType, this.deptPro, this.deptName, this.searchStaff, this.limitRecord);
    },
    printReport() {
      window.print();
    },
    searchTrackingReport() {
      this.trackingReportData = this.attendanceData.filter(staff => {
        const from = new Date(this.reportFromDate);
        const to = new Date(this.reportToDate);
        const staffDate = new Date(staff.fromDate);
        const matchesDate = staffDate >= from && staffDate <= to;
        const matchesDeptPro = !this.trackingDeptPro || staff.department.includes(this.trackingDeptPro);
        const matchesDeptName = !this.trackingDeptName || staff.department.includes(this.trackingDeptName);
        const matchesSearch = !this.trackingSearchStaff || staff.name.toLowerCase().includes(this.trackingSearchStaff.toLowerCase());
        return matchesDate && matchesDeptPro && matchesDeptName && matchesSearch;
      }).map(staff => ({
        id: staff.id,
        name: staff.name,
        department: staff.department,
        date: staff.fromDate,
        status: staff.remark,
      }));
      this.showTrackingReport = true;
      console.log('Generating tracking report...', this.reportFromDate, this.reportToDate, this.trackingDeptPro, this.trackingDeptName, this.trackingSearchStaff);
    },
    printTrackingReport() {
      window.print();
    },
    searchLeaveData() {
      console.log('Searching leave data...', this.leaveFromDate, this.leaveDeptPro);
    },
    printLeaveReport() {
      window.print();
    },
    updateStatus() {
      console.log('Updating supervisor status...');
    },
    viewHistory() {
      console.log('Viewing supervisor history...');
    },
    editStaff(staff) {
      this.editingStaff = { ...staff }; // Create a copy of the staff data for editing
    },
    saveStaff(originalStaff) {
      const index = this.leaveData.findIndex(s => s.id === originalStaff.id);
      if (index !== -1 && this.editingStaff) {
        this.$set(this.leaveData, index, { ...this.editingStaff }); // Update the leaveData array
      }
      this.editingStaff = null; // Exit edit mode
    },
    cancelEdit() {
      this.editingStaff = null; // Cancel editing and revert to original data
    },
    deleteStaff(staff) {
      const index = this.leaveData.findIndex(s => s.id === staff.id);
      if (index !== -1) {
        this.leaveData.splice(index, 1); // Remove the staff member
      }
    },
  },
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
input, select {
  display: block;
  margin-top: 4px;
  border: none;
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


th, td { text-align: left; }
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

@media (max-height: 480px) {
  .flex {
    flex-direction: column;
    gap: 0.5rem;
  }
  .space-x-4 {
    margin-bottom: 0.5rem;
  }
  select, input {
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