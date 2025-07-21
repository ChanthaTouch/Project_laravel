<template>
  <div class="min-h-screen bg-white dark:bg-[#0e1726] w-full" :class="{ 'dark text-gray-600-dark': store.semidark }">
    <div class="w-full p-4">
      <div class="bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center">
        <h2 class="text-xl font-bold text-gray-400">List Clients</h2>
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
      <div class="flex justify-between items-center gap-2 mb-4 add-client-row">
        <!-- Button on the Right -->
      <button 
        @click="showAddModal = true"
        class="h-12 px-4 py-2 bg-gray-200 dark:bg-gray-900 rounded font-bold text-gray-500"
      >
        + Add New Clients
      </button>
      <!-- Search Input on the Left -->
      <div class="relative w-full sm:w-1/3">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search By ID & Name"
          class="w-full h-12 p-2 pr-2 border-none rounded bg-gray-200 dark:bg-gray-900 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <i class="fas fa-search absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-800 flex items-center justify-center rounded"></i>
      </div>


    </div>


        <table class="w-full text-left">
          <thead>
            <tr class="bg-gray-700 text-gray-300">
              <th class="p-2">#</th>
              <th class="p-2">Long Name</th>
              <th class="p-2">Address</th>
              <th class="p-2">Phone Number</th>
              <th class="p-2">Email</th>
              <th class="p-2">Web</th>
              <th class="p-2">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(client, index) in filteredClients" :key="client.id" class="border-b bg-white dark:bg-[#0e1726] text-gray-500">
              <td class="p-2">{{ index + 1 }}</td>
              <td class="p-2">{{ client.longName }}</td>
              <td class="p-2">{{ client.address }}</td>
              <td class="p-2">{{ client.phone }}</td>
              <td class="p-2">{{ client.email }}</td>
              <td class="p-2">{{ client.web }}</td>
              <td class="p-2">
                <button @click="editClient(client)" class="text-gray-700 mr-2"><i class="fas fa-edit"></i></button>
                <button @click="deleteClient(client.id)" class="text-gray-600"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Add New Client Modal -->
      <div v-if="showAddModal" class="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-start justify-center z-50">
        <div class="bg-white dark:bg-[#0e1726] w-full h-full p-4 sm:p-6 rounded-none sm:rounded-lg shadow-xl overflow-y-auto scrollbar-hide">
          <div class="bg-gray-900 rounded-md px-4 py-3 sm:px-6 sm:py-3 mb-2 flex justify-between items-center">
            <h2 class="text-xl font-bold text-gray-400">Add New Clients</h2>
          </div>
          <form action="" class="grid grid-cols-3 gap-4 w-full">
            <div>
              <label class="block">Long Name</label>
              <div class="relative">
                <input v-model="newClient.longName" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Long Name">
                <i class="fas fa-info-circle absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Short Name</label>
              <div class="relative">
                <input v-model="newClient.shortName" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Short Name">
                <i class="fas fa-user absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Address</label>
              <div class="relative">
                <input v-model="newClient.address" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Address">
                <i class="fas fa-map-marker-alt absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Phone</label>
              <div class="relative">
                <input v-model="newClient.phone" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Phone">
                <i class="fas fa-phone absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Email</label>
              <div class="relative">
                <input v-model="newClient.email" type="email" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Email">
                <i class="fas fa-envelope absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Web</label>
              <div class="relative">
                <input v-model="newClient.web" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Web">
                <i class="fas fa-globe absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div class="col-span-3">
              <label class="block">File</label>
              <div class="flex items-center">
                <button class="bg-gray-200 dark:bg-gray-700 text-gray-500 px-4 py-2 rounded mr-2">Browse...</button>
                <span class="text-gray-500">No file selected.</span>
              </div>
            </div>
          </form>
          <div class="mt-4 flex justify-end gap-2">
            <button @click="showAddModal = false" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-500">Close</button>
            <button @click="addClient" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 rounded">Add New</button>
          </div>
        </div>
      </div>

      <!-- Edit Client Modal -->
      <div v-if="showEditModal" class="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-start justify-center z-50">
        <div class="bg-white dark:bg-[#0e1726] w-full h-full p-4 sm:p-6 rounded-none sm:rounded-lg shadow-xl overflow-y-auto scrollbar-hide">
          <div class="bg-gray-900 rounded-md px-4 py-3 sm:px-6 sm:py-3 mb-2 flex justify-between items-center">
            <h2 class="text-xl font-bold text-gray-400">Edit Client</h2>
          </div>
          <form action="" class="grid grid-cols-3 gap-4 w-full">
            <div>
              <label class="block">Long Name</label>
              <div class="relative">
                <input v-model="editClientData.longName" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Long Name">
                <i class="fas fa-info-circle absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Short Name</label>
              <div class="relative">
                <input v-model="editClientData.shortName" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Short Name">
                <i class="fas fa-user absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Address</label>
              <div class="relative">
                <input v-model="editClientData.address" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Address">
                <i class="fas fa-map-marker-alt absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Phone</label>
              <div class="relative">
                <input v-model="editClientData.phone" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Phone">
                <i class="fas fa-phone absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Email</label>
              <div class="relative">
                <input v-model="editClientData.email" type="email" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Email">
                <i class="fas fa-envelope absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div>
              <label class="block">Web</label>
              <div class="relative">
                <input v-model="editClientData.web" type="text" class="w-full h-12 p-2 pr-2 border-none rounded mt-1 bg-gray-200 dark:bg-gray-800 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Web">
                <i class="fas fa-globe absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"></i>
              </div>
            </div>
            <div class="col-span-3">
              <label class="block">File</label>
              <div class="flex items-center">
                <button class="bg-gray-200 dark:bg-gray-700 text-gray-500 px-4 py-2 rounded mr-2">Browse...</button>
                <span class="text-gray-500">No file selected.</span>
              </div>
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
    const currentDate = new Date('2025-07-14T10:39:00+07:00').toISOString().split('T')[0]; // 10:39 AM +07, July 14, 2025
    return {
      searchQuery: '',
      showAddModal: false,
      showEditModal: false,
      newClient: {
        id: `CL${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        longName: '',
        shortName: '',
        address: '',
        phone: '',
        email: '',
        web: ''
      },
      editClientData: {
        id: '',
        longName: '',
        shortName: '',
        address: '',
        phone: '',
        email: '',
        web: ''
      },
      clients: [
        { id: 'CL012', longName: 'GreenTech Solutions', address: 'Siem Reap, Cambodia', phone: '(+855) 23 888 999', email: 'info@greentech.com', web: 'http://www.greentech.com' },
        { id: 'CL013', longName: 'BlueWave Enterprises', address: 'Battambang, Cambodia', phone: '(+855) 77 555 333', email: 'contact@bluewave.com', web: 'http://www.bluewave.com' },
        { id: 'CL014', longName: 'Sunrise Innovations', address: 'Sihanoukville, Cambodia', phone: '(+855) 99 444 222', email: '', web: 'http://www.sunriseinnovations.com' },
        { id: 'CL015', longName: 'RiverStone Corp', address: 'Kampong Thom, Cambodia', phone: '', email: 'support@riverstone.com', web: '' },
        { id: 'CL016', longName: 'EcoBuild Co.', address: 'Phnom Penh, Cambodia', phone: '(+855) 23 777 666', email: 'info@ecobuild.com', web: 'http://www.ecobuild.com' },
        { id: 'CL017', longName: 'PeakPerformance Ltd', address: 'Kandal, Cambodia', phone: '(+855) 88 333 111', email: 'contact@peakperformance.com', web: 'http://www.peakperformance.com' },
        { id: 'CL018', longName: 'Horizon Ventures', address: 'Takeo, Cambodia', phone: '(+855) 92 666 444', email: 'info@horizonventures.com', web: 'http://www.horizonventures.com' },
        { id: 'CL019', longName: 'CrystalClear Solutions', address: 'Kampong Cham, Cambodia', phone: '', email: 'support@crystalclear.com', web: 'http://www.crystalclear.com' },
        { id: 'CL020', longName: 'GoldenFields Agro', address: 'Prey Veng, Cambodia', phone: '(+855) 70 222 888', email: 'info@goldenfields.com', web: '' },
        { id: 'CL021', longName: 'SkyHigh Technologies', address: 'Pursat, Cambodia', phone: '(+855) 95 111 777', email: 'contact@skyhigh.com', web: 'http://www.skyhigh.com' },
        { id: 'CL022', longName: 'OceanBreeze Trading', address: 'Koh Kong, Cambodia', phone: '(+855) 81 444 999', email: 'sales@oceanbreeze.com', web: 'http://www.oceanbreeze.com' }
      ]
    };
  },
  computed: {
    filteredClients() {
      return this.clients.filter(client =>
        client.longName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        client.id.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    store() {
      return useAppStore();
    },
    addClient() {
      this.clients.push({ ...this.newClient });
      this.showAddModal = false;
      this.newClient = {
        id: `CL${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        longName: '',
        shortName: '',
        address: '',
        phone: '',
        email: '',
        web: ''
      };
    },
    deleteClient(id) {
      this.clients = this.clients.filter(client => client.id !== id);
    },
    editClient(client) {
      this.editClientData = { ...client };
      this.showEditModal = true;
    },
    saveEdit() {
      const index = this.clients.findIndex(client => client.id === this.editClientData.id);
      if (index !== -1) {
        this.clients.splice(index, 1, { ...this.editClientData });
      }
      this.showEditModal = false;
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
 .add-client-row {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
  .add-client-row > * {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .flex {
    flex-direction: column;
    gap: 0.5rem;
  }
  input[type="text"] {
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