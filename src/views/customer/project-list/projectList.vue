<template>
  <div class="min-h-screen bg-white dark:bg-[#0e1726] w-full" :class="{ 'dark text-gray-600-dark': store.semidark }">
    <div class="w-full p-4">
      <div class="bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
        <h2 class="text-xl font-bold text-gray-400">List Projects</h2>
      </div>
      <!-- test deloy to vercel -->
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

      <div class="flex justify-between items-center gap-2 mb-4 add-project-row">
        <button
          @click="showAddModal = true"
          class="h-12 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded font-bold text-gray-500"
        >
          + Add New Project
        </button>
        <div class="relative w-full sm:w-1/3">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search By ID & Name"
            class="w-full h-12 p-2 pr-2 border-none rounded bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <i class="fas fa-search absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
        </div>
      </div>

      <div class="bg-gray-800 p-4 sm:p-6 rounded shadow-lg">
        <table class="w-full text-left">
          <thead>
            <tr class="bg-gray-700 text-gray-300">
              <th class="p-2">#</th>
              <th class="p-2">Name</th>
              <th class="p-2">Client Name</th>
              <th class="p-2">Project Email</th>
              <th class="p-2">Start Date</th>
              <th class="p-2">End Date</th>
              <th class="p-2">Location</th>
              <th class="p-2">Budget</th>
              <th class="p-2">Min Labour</th>
              <th class="p-2">Max Labour</th>
              <th class="p-2">Variant OTAM</th>
              <th class="p-2">Variant OTPM</th>
              <th class="p-2">Variant ExtraOT</th>
              <th class="p-2">Team OT Limit</th>
              <th class="p-2">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(project, index) in filteredProjects" :key="project.id" class="border-b bg-white dark:bg-[#0e1726] text-gray-500">
              <td class="p-2">{{ index + 1 }}</td>
              <td class="p-2">{{ project.name }}</td>
              <td class="p-2">{{ project.client }}</td>
              <td class="p-2">{{ project.email }}</td>
              <td class="p-2">{{ formatDate(project.startDate) }}</td>
              <td class="p-2">{{ formatDate(project.endDate) }}</td>
              <td class="p-2">{{ project.location }}</td>
              <td class="p-2">{{ project.budget }}</td>
              <td class="p-2">{{ project.minLabour }}</td>
              <td class="p-2">{{ project.maxLabour }}</td>
              <td class="p-2">{{ project.variantOTAM }}</td>
              <td class="p-2">{{ project.variantOTPM }}</td>
              <td class="p-2">{{ project.variantExtraOT }}</td>
              <td class="p-2">{{ project.teamOTLimit }}</td>
              <td class="p-2">
                <button @click="editProject(project)" class="text-gray-700 mr-2"><i class="fas fa-edit"></i></button>
                <button @click="deleteProject(project.id)" class="text-gray-600"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Add New Project Modal -->
      <div v-if="showAddModal" class="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-start justify-center z-50">
        <div class="bg-white dark:bg-[#0e1726] w-full h-full p-4 sm:p-6 rounded-none sm:rounded-lg shadow-xl overflow-y-auto scrollbar-hide">
          <div class="bg-gray-900 rounded-md px-4 py-3 sm:px-6 sm:py-3 mb-2 flex justify-between items-center">
            <h2 class="text-xl font-bold text-gray-400">Add New Project</h2>
          </div>
          <form class="grid grid-cols-2 gap-4 w-full">
            <div class="relative">
              <label class="block">Projects Name</label>
              <input v-model="newProject.name" type="text" class="w-full h-12 p-2 pr-2 border-none rounded bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Project Name">
              <i class="fas fa-project-diagram absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Projects Short Name</label>
              <input v-model="newProject.shortName" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Project Short Name">
              <i class="fas fa-tag absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">E-mail</label>
              <input v-model="newProject.email" type="email" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="E-mail">
              <i class="fas fa-envelope absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Client Name</label>
              <input v-model="newProject.client" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Client Name">
              <i class="fas fa-user absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Start Date</label>
              <input v-model="newProject.startDate" type="date" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <i class="fas fa-calendar-day absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block" >End Date</label>
              <input v-model="newProject.endDate" type="date" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <i class="fas fa-calendar-day absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Location</label>
              <input v-model="newProject.location" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Location">
              <i class="fas fa-map-marker-alt absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Budget</label>
              <input v-model="newProject.budget" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="$0.00">
              <i class="fas fa-dollar-sign absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Minimum Labour</label>
              <input v-model.number="newProject.minLabour" type="number" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="100">
              <i class="fas fa-users absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Maximum Labour</label>
              <input v-model.number="newProject.maxLabour" type="number" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="200">
              <i class="fas fa-users absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Time In AM</label>
              <select v-model="newProject.timeInAM" class="w-full h-12 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option value="" disabled selected>Select Start Hour</option>
                <option v-for="hour in 12" :key="hour" :value="`${hour}:00`">{{ `${hour}:00` }}</option>
              </select>
              <i class="fas fa-clock absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Time Out AM</label>
              <select v-model="newProject.timeOutAM" class="w-full h-12 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option value="" disabled selected>Select Start Hour</option>
                <option v-for="hour in 12" :key="hour" :value="`${hour}:00`">{{ `${hour}:00` }}</option>
              </select>
              <i class="fas fa-clock absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Time In PM</label>
              <select v-model="newProject.timeInPM" class="w-full h-12 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option value="" disabled selected>Select Start Hour</option>
                <option v-for="hour in 12" :key="hour" :value="`${hour}:00`">{{ `${hour}:00` }}</option>
              </select>
              <i class="fas fa-clock absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Time Out PM</label>
              <select v-model="newProject.timeOutPM" class="w-full h-12 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option value="" disabled selected>Select Start Hour</option>
                <option v-for="hour in 12" :key="hour" :value="`${hour}:00`">{{ `${hour}:00` }}</option>
              </select>
              <i class="fas fa-clock absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Variant OTAM (min and h)</label>
              <input v-model="newProject.variantOTAM" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="0.5-2">
              <i class="fas fa-hourglass-half absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Variant OTPM (min and h)</label>
              <input v-model="newProject.variantOTPM" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="0.5-6">
              <i class="fas fa-hourglass-half absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Variant ExtraOT (min and h)</label>
              <input v-model="newProject.variantExtraOT" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="0.30">
              <i class="fas fa-hourglass-half absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Limitation of Team OT (percentage)</label>
              <input v-model="newProject.teamOTLimit" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="0.30">
              <i class="fas fa-percentage absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative col-span-2">
              <label class="block">Choose File</label>
              <input ref="fileInput" type="file" @change="handleFileUpload" class="w-3/2 h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <i class="fas fa-file-upload absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
          </form>
          <div class="mt-4 flex justify-end gap-2">
            <button @click="showAddModal = false" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-500">Close</button>
            <button @click="addProject" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 rounded">Add New</button>
          </div>
        </div>
      </div>

      <!-- Edit Project Modal -->
      <div v-if="showEditModal" class="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-start justify-center z-50">
        <div class="bg-white dark:bg-[#0e1726] w-full h-full p-4 sm:p-6 rounded-none sm:rounded-lg shadow-xl overflow-y-auto scrollbar-hide">
          <div class="bg-gray-900 rounded-md px-4 py-3 sm:px-6 sm:py-3 mb-2 flex justify-between items-center">
            <h2 class="text-xl font-bold text-gray-400">Edit Project</h2>
          </div>
          <form class="grid grid-cols-2 gap-4 w-full">
            <div class="relative">
              <label class="block">Projects Name</label>
              <input v-model="editProjectData.name" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Project Name">
              <i class="fas fa-project-diagram absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Projects Short Name</label>
              <input v-model="editProjectData.shortName" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Project Short Name">
              <i class="fas fa-tag absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">E-mail</label>
              <input v-model="editProjectData.email" type="email" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="E-mail">
              <i class="fas fa-envelope absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Client Name</label>
              <input v-model="editProjectData.client" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Client Name">
              <i class="fas fa-user absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Start Date</label>
              <input v-model="editProjectData.startDate" type="date" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <i class="fas fa-calendar-day absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">End Date</label>
              <input v-model="editProjectData.endDate" type="date" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <i class="fas fa-calendar-day absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Location</label>
              <input v-model="editProjectData.location" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Location">
              <i class="fas fa-map-marker-alt absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Budget</label>
              <input v-model="editProjectData.budget" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="$0.00">
              <i class="fas fa-dollar-sign absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Minimum Labour</label>
              <input v-model.number="editProjectData.minLabour" type="number" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="100">
              <i class="fas fa-users absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Maximum Labour</label>
              <input v-model.number="editProjectData.maxLabour" type="number" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="200">
              <i class="fas fa-users absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Time In AM</label>
              <select v-model="editProjectData.timeInAM" class="w-full h-12 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option value="" disabled selected>Select Start Hour</option>
                <option v-for="hour in 12" :key="hour" :value="`${hour}:00`">{{ `${hour}:00` }}</option>
              </select>
              <i class="fas fa-clock absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Time Out AM</label>
              <select v-model="editProjectData.timeOutAM" class="w-full h-12 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option value="" disabled selected>Select Start Hour</option>
                <option v-for="hour in 12" :key="hour" :value="`${hour}:00`">{{ `${hour}:00` }}</option>
              </select>
              <i class="fas fa-clock absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Time In PM</label>
              <select v-model="editProjectData.timeInPM" class="w-full h-12 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option value="" disabled selected>Select Start Hour</option>
                <option v-for="hour in 12" :key="hour" :value="`${hour}:00`">{{ `${hour}:00` }}</option>
              </select>
              <i class="fas fa-clock absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Time Out PM</label>
              <select v-model="editProjectData.timeOutPM" class="w-full h-12 p-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option value="" disabled selected>Select Start Hour</option>
                <option v-for="hour in 12" :key="hour" :value="`${hour}:00`">{{ `${hour}:00` }}</option>
              </select>
              <i class="fas fa-clock absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Variant OTAM (min and h)</label>
              <input v-model="editProjectData.variantOTAM" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="0.5-2">
              <i class="fas fa-hourglass-half absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Variant OTPM (min and h)</label>
              <input v-model="editProjectData.variantOTPM" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="0.5-6">
              <i class="fas fa-hourglass-half absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Variant ExtraOT (min and h)</label>
              <input v-model="editProjectData.variantExtraOT" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="0.30">
              <i class="fas fa-hourglass-half absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative">
              <label class="block">Limitation of Team OT (percentage)</label>
              <input v-model="editProjectData.teamOTLimit" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="0.30">
              <i class="fas fa-percentage absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
            <div class="relative col-span-2">
              <label class="block">Choose File</label>
              <input ref="editFileInput" type="file" @change="handleFileUploadEdit" class="w-3/2 h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 focus:outline-none focus:ring-2 focus:ring-gray-400">
              <i class="fas fa-file-upload absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 flex items-center justify-center rounded"></i>
            </div>
          </form>
          <div class="mt-4 flex justify-end gap-2">
            <button @click="showEditModal = false" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-500">Close</button>
            <button @click="saveEdit" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 rounded">Save</button>
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
    const currentDate = new Date('2025-07-18T16:29:00+07:00').toISOString().split('T')[0]; // 04:29 PM +07, July 18, 2025
    return {
      searchQuery: '',
      showAddModal: false,
      showEditModal: false,
      newProject: {
        id: `P${Math.floor(Math.random() * 10000).toString().padStart(5, '0')}`,
        name: '',
        shortName: '',
        email: '',
        client: '',
        startDate: '',
        endDate: '',
        location: '',
        budget: '',
        minLabour: 0,
        maxLabour: 0,
        timeInAM: '',
        timeOutAM: '',
        timeInPM: '',
        timeOutPM: '',
        variantOTAM: '',
        variantOTPM: '',
        variantExtraOT: '',
        teamOTLimit: '',
        file: null
      },
      editProjectData: {
        id: '',
        name: '',
        shortName: '',
        email: '',
        client: '',
        startDate: '',
        endDate: '',
        location: '',
        budget: '',
        minLabour: 0,
        maxLabour: 0,
        timeInAM: '',
        timeOutAM: '',
        timeInPM: '',
        timeOutPM: '',
        variantOTAM: '',
        variantOTPM: '',
        variantExtraOT: '',
        teamOTLimit: '',
        file: null
      },
      projects: [
        { id: 'P25301', name: 'Eco-Friendly Residential Complex', shortName: 'EFRC', client: 'Green Living Solutions', email: 'contact@greenliving.com', startDate: '2025-08-01', endDate: '2026-12-31', location: 'Siem Reap Province', budget: '$500000.00', minLabour: 100, maxLabour: 200, timeInAM: '7:00', timeOutAM: '11:00', timeInPM: '12:00', timeOutPM: '16:00', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null },
        { id: 'P25302', name: 'Smart City Infrastructure', shortName: 'SCI', client: 'UrbanTech Innovations', email: 'info@urbantech.kh', startDate: '2025-05-15', endDate: '2027-03-31', location: 'Phnom Penh Municipality', budget: '$2000000.00', minLabour: 150, maxLabour: 300, timeInAM: '8:00', timeOutAM: '12:00', timeInPM: '13:00', timeOutPM: '17:00', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null },
        { id: 'P25303', name: 'Coastal Resort Development', shortName: 'CRD', client: 'Blue Horizon Resorts', email: 'projects@bluehorizon.com', startDate: '2025-03-01', endDate: '2026-09-30', location: 'Sihanoukville', budget: '$750000.00', minLabour: 120, maxLabour: 250, timeInAM: '7:30', timeOutAM: '11:30', timeInPM: '12:30', timeOutPM: '16:30', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null },
        { id: 'P24304', name: 'Industrial Park Expansion', shortName: 'IPE', client: 'Global Manufacturing Co.', email: 'admin@globalmfg.com', startDate: '2024-10-01', endDate: '2025-10-31', location: 'Kampong Cham Province', budget: '$1000000.00', minLabour: 200, maxLabour: 400, timeInAM: '8:00', timeOutAM: '12:00', timeInPM: '13:00', timeOutPM: '17:00', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null },
        { id: 'P24305', name: 'Solar Farm Installation', shortName: 'SFI', client: 'Renewable Energy Corp', email: 'solar@renewenergy.kh', startDate: '2024-06-01', endDate: '2025-02-28', location: 'Battambang Province', budget: '$600000.00', minLabour: 80, maxLabour: 150, timeInAM: '7:00', timeOutAM: '11:00', timeInPM: '12:00', timeOutPM: '16:00', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null },
        { id: 'P23306', name: 'Hospital Renovation Project', shortName: 'HRP', client: 'HealthCare Cambodia', email: 'healthcare@hc.org', startDate: '2023-12-01', endDate: '2025-06-30', location: 'Phnom Penh Municipality', budget: '$800000.00', minLabour: 90, maxLabour: 180, timeInAM: '8:00', timeOutAM: '12:00', timeInPM: '13:00', timeOutPM: '17:00', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null },
        { id: 'P23307', name: 'Bridge Reconstruction', shortName: 'BRC', client: 'Ministry of Public Works', email: 'projects@mpw.gov.kh', startDate: '2023-09-01', endDate: '2024-12-31', location: 'Kampot Province', budget: '$450000.00', minLabour: 70, maxLabour: 140, timeInAM: '7:30', timeOutAM: '11:30', timeInPM: '12:30', timeOutPM: '16:30', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null },
        { id: 'P23308', name: 'Commercial Plaza Development', shortName: 'CPD', client: 'Cityscape Developers', email: 'info@cityscape.kh', startDate: '2023-06-15', endDate: '2024-08-31', location: 'Phnom Penh Municipality', budget: '$1200000.00', minLabour: 110, maxLabour: 220, timeInAM: '8:00', timeOutAM: '12:00', timeInPM: '13:00', timeOutPM: '17:00', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null },
        { id: 'P22309', name: 'Water Treatment Facility', shortName: 'WTF', client: 'CleanWater Solutions', email: 'contact@cleanwater.kh', startDate: '2022-11-01', endDate: '2024-03-31', location: 'Kandal Province', budget: '$700000.00', minLabour: 100, maxLabour: 200, timeInAM: '7:00', timeOutAM: '11:00', timeInPM: '12:00', timeOutPM: '16:00', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null },
        { id: 'P22310', name: 'School Building Project', shortName: 'SBP', client: 'Education First NGO', email: 'projects@edu1st.org', startDate: '2022-08-01', endDate: '2023-12-31', location: 'Takeo Province', budget: '$300000.00', minLabour: 60, maxLabour: 120, timeInAM: '8:00', timeOutAM: '12:00', timeInPM: '13:00', timeOutPM: '17:00', variantOTAM: '0.5-2', variantOTPM: '0.5-6', variantExtraOT: '0.30', teamOTLimit: '0.30', file: null }
      ]
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project =>
        project.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        project.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        project.shortName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    store() {
      return useAppStore();
    },
    formatDate(date) {
      return new Date(date).toLocaleString('en-GB', { dateStyle: 'short' });
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.newProject.file = file; // Store the file object
      }
    },
    handleFileUploadEdit(event) {
      const file = event.target.files[0];
      if (file) {
        this.editProjectData.file = file; // Store the file object
      }
    },
    addProject() {
      if (!this.newProject.name || !this.newProject.shortName || !this.newProject.email || !this.newProject.client || !this.newProject.startDate || !this.newProject.endDate || !this.newProject.location) {
        alert('Please fill all required fields.');
        return;
      }
      this.projects.push({ ...this.newProject });
      this.showAddModal = false;
      this.newProject = {
        id: `P${Math.floor(Math.random() * 10000).toString().padStart(5, '0')}`,
        name: '',
        shortName: '',
        email: '',
        client: '',
        startDate: '',
        endDate: '',
        location: '',
        budget: '',
        minLabour: 0,
        maxLabour: 0,
        timeInAM: '',
        timeOutAM: '',
        timeInPM: '',
        timeOutPM: '',
        variantOTAM: '',
        variantOTPM: '',
        variantExtraOT: '',
        teamOTLimit: '',
        file: null
      };
      this.$refs.fileInput.value = ''; // Reset file input
    },
    deleteProject(id) {
      this.projects = this.projects.filter(project => project.id !== id);
    },
    editProject(project) {
      this.editProjectData = { ...project };
      this.showEditModal = true;
    },
    saveEdit() {
      const index = this.projects.findIndex(project => project.id === this.editProjectData.id);
      if (index !== -1) {
        this.projects.splice(index, 1, { ...this.editProjectData });
      }
      this.showEditModal = false;
      this.$refs.editFileInput.value = ''; // Reset file input
    },
    exportExcel() {
      console.log('Export to Excel triggered');
    },
    exportPDF() {
      console.log('Export to PDF triggered');
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap');

* {
  box-sizing: border-box;
}
label { font-weight: bold; }
input, select, textarea {
  display: block;
  margin-top: 4px;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
}
button {
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
}
button:focus { outline: none; }
@media (max-width: 768px) {
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
  .add-project-row {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
  .add-project-row > * {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .flex {
    flex-direction: column;
    gap: 0.5rem;
  }
  input[type="text"], input[type="date"], select {
    width: 100%;
  }
  table {
    font-size: 0.7rem;
  }
  th, td {
    padding: 0.2rem;
  }
}
</style>