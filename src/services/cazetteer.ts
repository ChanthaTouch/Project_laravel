import axios from 'axios';
import { API_BASE_URL } from '@/config/api';
import { useUserStore } from '@/stores/user'; // <<== Import user store

const userStore = useUserStore(); // <<== Get userStore

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Automatically attach token to each request
api.interceptors.request.use((config) => {
    const token = userStore.getToken; // <<== Your stored token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

//*  GET /api/cazetteer/all-cazetteer-data
/*  Data Returned:
{
    "current_page": 1,
    "data": [
    {
        "Branch": "HO",
        "ID": "01",
        "Description": "Banteay Meanchey",
        "LocalDescription": "បន្ទាយមានជ័យ",
        "districts": [
            {
                "Branch": "HO",
                "ID": "0102",
                "Description": "Mongkol Borei",
                "LocalDescription": "មង្គលបូរី",
                "Province": "01",
                "communes": [
                    {
                        "Branch": "HO",
                        "ID": "010201",
                        "Description": "Banteay Neang",
                        "LocalDescription": "បន្ទាយនាង",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01020100",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020101",
                                "Description": "Ou Thum",
                                "LocalDescription": "អូរធំ",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020102",
                                "Description": "Phnum",
                                "LocalDescription": "ភ្នំ",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020103",
                                "Description": "Banteay Neang",
                                "LocalDescription": "បន្ទាយនាង",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020104",
                                "Description": "Kouk Pnov",
                                "LocalDescription": "គោកព្នៅ",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020105",
                                "Description": "Trang",
                                "LocalDescription": "ត្រាង",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020106",
                                "Description": "Pongro",
                                "LocalDescription": "ពង្រ",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020107",
                                "Description": "Kouk Tonloab",
                                "LocalDescription": "គោកទន្លាប់",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020108",
                                "Description": "Trabaek",
                                "LocalDescription": "ត្របែក",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020109",
                                "Description": "Khilek",
                                "LocalDescription": "ឃីឡិក",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020110",
                                "Description": "Samraong Pen",
                                "LocalDescription": "សំរោងពេន",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020111",
                                "Description": "Dang Run Lech",
                                "LocalDescription": "ដងរុនលិច",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020112",
                                "Description": "Dang Run Kaeut",
                                "LocalDescription": "ដងរុនកើត",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020113",
                                "Description": "Ou Snguot",
                                "LocalDescription": "អូរស្ងួត",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020114",
                                "Description": "Prey Changha Lech",
                                "LocalDescription": "ព្រៃចង្ហាលិច",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020115",
                                "Description": "Prey Changha Kaeut",
                                "LocalDescription": "ព្រៃចង្ហាកើត",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020116",
                                "Description": "Ou Andoung Lech",
                                "LocalDescription": "អូរអណ្ដូងលិច",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020117",
                                "Description": "Ou Andoung Kandal",
                                "LocalDescription": "អូរអណ្ដូងកណ្ដាល",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020118",
                                "Description": "Ou Andoung Kaeut",
                                "LocalDescription": "អូរអណ្ដូងកើត",
                                "Commune": "010201"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020119",
                                "Description": "Kouk Kduoch",
                                "LocalDescription": "គោកក្ដួច",
                                "Commune": "010201"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010202",
                        "Description": "Bat Trang",
                        "LocalDescription": "បត់ត្រង់",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01020200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020201",
                                "Description": "Khtum Reay Lech",
                                "LocalDescription": "ខ្ទុម្ពរាយលិច",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020202",
                                "Description": "Khtum Reay Kaeut",
                                "LocalDescription": "ខ្ទុម្ពរាយកើត",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020203",
                                "Description": "Anlong Thngan Kaeut",
                                "LocalDescription": "អន្លង់ថ្ងាន់កើត",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020204",
                                "Description": "Anlong Thngan Lech",
                                "LocalDescription": "អន្លង់ថ្ងាន់លិច",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020205",
                                "Description": "Bang Bat Lech",
                                "LocalDescription": "បង់បត់លិច",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020206",
                                "Description": "Bang Bat Kaeut",
                                "LocalDescription": "បង់បត់កើត",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020207",
                                "Description": "Bat Trang",
                                "LocalDescription": "បត់ត្រង់",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020208",
                                "Description": "Bat Trang Thum Lech",
                                "LocalDescription": "បត់ត្រង់ធំលិច",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020209",
                                "Description": "Bat Trang Thum Kaeut",
                                "LocalDescription": "បត់ត្រង់ធំកើត",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020210",
                                "Description": "Bat Trang Touch",
                                "LocalDescription": "បត់ត្រង់តូច",
                                "Commune": "010202"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020211",
                                "Description": "Preaek Chik",
                                "LocalDescription": "ព្រែកជីក",
                                "Commune": "010202"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010203",
                        "Description": "Chamnaom",
                        "LocalDescription": "ចំណោម",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01020300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020301",
                                "Description": "Pralay Char",
                                "LocalDescription": "ប្រឡាយចារ៍",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020302",
                                "Description": "Rongvean Lech",
                                "LocalDescription": "រង្វានលិច",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020303",
                                "Description": "Rongvean Kaeut",
                                "LocalDescription": "រង្វានកើត",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020304",
                                "Description": "Chamnaom Lech",
                                "LocalDescription": "ចំណោមលិច",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020305",
                                "Description": "Chamnaom Kaeut",
                                "LocalDescription": "ចំណោមកើត",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020306",
                                "Description": "Roung Kou Daeum",
                                "LocalDescription": "រោងគោដើម",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020307",
                                "Description": "Roung Kou Kandal",
                                "LocalDescription": "រោងគោកណ្ដាល",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020308",
                                "Description": "Roung Kou Chong",
                                "LocalDescription": "រោងគោចុង",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020309",
                                "Description": "Peam Roung Kou",
                                "LocalDescription": "ពាមរោងគោ",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020310",
                                "Description": "Ta Sal",
                                "LocalDescription": "តាសល់",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020311",
                                "Description": "Chuor Khchas",
                                "LocalDescription": "ជួរខ្ចាស់",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020312",
                                "Description": "Boeng Tras",
                                "LocalDescription": "បឹងត្រស់",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020313",
                                "Description": "Dang Trang",
                                "LocalDescription": "ដងត្រាង",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020314",
                                "Description": "Srae Prey",
                                "LocalDescription": "ស្រែព្រៃ",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020315",
                                "Description": "Bos Tonloab",
                                "LocalDescription": "បុស្បទន្លាប់",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020316",
                                "Description": "Ta  Bun",
                                "LocalDescription": "តាប៊ុន",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020317",
                                "Description": "Kouk Ponley",
                                "LocalDescription": "គោកពន្លៃ",
                                "Commune": "010203"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020318",
                                "Description": "Say Samon",
                                "LocalDescription": "សាយសាម៉ន",
                                "Commune": "010203"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010204",
                        "Description": "Kouk Ballangk",
                        "LocalDescription": "គោកបល្ល័ង្គ",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01020400",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010204"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020401",
                                "Description": "Kouk Ballangk",
                                "LocalDescription": "គោកបល្ល័ង្គ",
                                "Commune": "010204"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020402",
                                "Description": "Ta An",
                                "LocalDescription": "តាអន",
                                "Commune": "010204"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020403",
                                "Description": "Pralay Chrey",
                                "LocalDescription": "ប្រឡាយជ្រៃ",
                                "Commune": "010204"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020404",
                                "Description": "Cheung Chab",
                                "LocalDescription": "ជើងចាប",
                                "Commune": "010204"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020405",
                                "Description": "Phat Sandaong",
                                "LocalDescription": "ផាត់សណ្ដោង",
                                "Commune": "010204"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020406",
                                "Description": "Char Thmei",
                                "LocalDescription": "ចារថ្មី",
                                "Commune": "010204"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020407",
                                "Description": "Ph'av Thmei",
                                "LocalDescription": "ផ្អាវថ្មី",
                                "Commune": "010204"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020408",
                                "Description": "Ta Sal",
                                "LocalDescription": "តាសល់",
                                "Commune": "010204"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010205",
                        "Description": "Koy Maeng",
                        "LocalDescription": "គយម៉ែង",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01020500",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010205"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020501",
                                "Description": "Koy Maeng",
                                "LocalDescription": "គយម៉ែង",
                                "Commune": "010205"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020502",
                                "Description": "Sdei Leu",
                                "LocalDescription": "ស្ដីលើ",
                                "Commune": "010205"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020503",
                                "Description": "Phlov Siem",
                                "LocalDescription": "ផ្លូវសៀម",
                                "Commune": "010205"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020504",
                                "Description": "Ta Nong",
                                "LocalDescription": "តានង",
                                "Commune": "010205"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020505",
                                "Description": "Angkar Khmau",
                                "LocalDescription": "អង្ករខ្មៅ",
                                "Commune": "010205"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020506",
                                "Description": "Kasang Thmei",
                                "LocalDescription": "កសាងថ្មី",
                                "Commune": "010205"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020507",
                                "Description": "Stueng Chas",
                                "LocalDescription": "ស្ទឹងចាស់",
                                "Commune": "010205"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020508",
                                "Description": "Sdei Kraom",
                                "LocalDescription": "ស្ដីក្រោម",
                                "Commune": "010205"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010206",
                        "Description": "Ou Prasat",
                        "LocalDescription": "អូរប្រាសាទ",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01020600",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020601",
                                "Description": "Phnum Thum Tboung",
                                "LocalDescription": "ភ្នំធំត្បូង",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020602",
                                "Description": "Phnum Prasat",
                                "LocalDescription": "ភ្នំប្រាសាទ",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020603",
                                "Description": "Phnum Thum Cheung",
                                "LocalDescription": "ភ្នំធំជើង",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020604",
                                "Description": "Chamkar Louk",
                                "LocalDescription": "ចំការលោក",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020605",
                                "Description": "Phnum Thum Thmei",
                                "LocalDescription": "ភ្នំធំថ្មី",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020606",
                                "Description": "Anlong Sdei",
                                "LocalDescription": "អន្លង់ស្ដី",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020607",
                                "Description": "Kouk Thlong Kaeut",
                                "LocalDescription": "គោកធ្លង់កើត",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020608",
                                "Description": "Kouk Thlong Kandal",
                                "LocalDescription": "គោកធ្លង់កណ្ដាល",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020609",
                                "Description": "Ou Snguot",
                                "LocalDescription": "អូរស្ងួត",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020610",
                                "Description": "Ou Prasat",
                                "LocalDescription": "អូរប្រាសាទ",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020611",
                                "Description": "Kouk Ampil",
                                "LocalDescription": "គោកអំពិល",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020612",
                                "Description": "Ra Chamkar Chek",
                                "LocalDescription": "រ៉ាចំការចេក",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020613",
                                "Description": "Pou Rieng",
                                "LocalDescription": "ពោធិ៍រៀង",
                                "Commune": "010206"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020614",
                                "Description": "Rung Krabau",
                                "LocalDescription": "រូងក្របៅ",
                                "Commune": "010206"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010207",
                        "Description": "Phnum Touch",
                        "LocalDescription": "ភ្នំតូច",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01020700",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020701",
                                "Description": "Phnum Touch Tboung",
                                "LocalDescription": "ភ្នំតូចត្បូង",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020702",
                                "Description": "Phnum Touch Cheung",
                                "LocalDescription": "ភ្នំតូចជើង",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020703",
                                "Description": "Thnal Bat",
                                "LocalDescription": "ថ្នល់បត់",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020704",
                                "Description": "Ou Nhor",
                                "LocalDescription": "អូរញរ",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020705",
                                "Description": "Boeng Tras",
                                "LocalDescription": "បឹងត្រស់",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020706",
                                "Description": "Monourom",
                                "LocalDescription": "មនោរម្យ",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020707",
                                "Description": "Paoy Ta Sek",
                                "LocalDescription": "ប៉ោយតាសេក",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020708",
                                "Description": "Prey Totueng",
                                "LocalDescription": "ព្រៃទទឹង",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020709",
                                "Description": "Boeng Reang",
                                "LocalDescription": "បឹងរាំង",
                                "Commune": "010207"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020710",
                                "Description": "Voat Thmei",
                                "LocalDescription": "វត្ដថ្មី",
                                "Commune": "010207"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010208",
                        "Description": "Rohat Tuek",
                        "LocalDescription": "រហាត់ទឹក",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01020800",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020801",
                                "Description": "Pou Pir Daeum",
                                "LocalDescription": "ពោធិ៍ពីរដើម",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020802",
                                "Description": "Rohat Tuek",
                                "LocalDescription": "រហាត់ទឹក",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020803",
                                "Description": "Thnal Bat",
                                "LocalDescription": "ថ្នល់បត់",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020804",
                                "Description": "Kramol",
                                "LocalDescription": "ក្រមល់",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020805",
                                "Description": "Khtum Chrum",
                                "LocalDescription": "ខ្ទុំជ្រុំ",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020806",
                                "Description": "Chak Lech",
                                "LocalDescription": "ចកលិច",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020807",
                                "Description": "Doun Mul",
                                "LocalDescription": "ដូនមូល",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020808",
                                "Description": "Preaek Samraong",
                                "LocalDescription": "ព្រែកសំរោង",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020809",
                                "Description": "Ou Dangkao",
                                "LocalDescription": "អូរដង្កោ",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020810",
                                "Description": "Chamkar Chek",
                                "LocalDescription": "ចំការចេក",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020811",
                                "Description": "Ou Chuob",
                                "LocalDescription": "អូរជួប",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020812",
                                "Description": "Ka Svay",
                                "LocalDescription": "កស្វាយ",
                                "Commune": "010208"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020813",
                                "Description": "Chak Kaeut",
                                "LocalDescription": "ចកកើត",
                                "Commune": "010208"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010209",
                        "Description": "Ruessei Kraok",
                        "LocalDescription": "ឫស្សីក្រោក",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01020900",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020901",
                                "Description": "Anhchanh",
                                "LocalDescription": "អញ្ចាញ",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020902",
                                "Description": "Neang Ket",
                                "LocalDescription": "នាងកេត",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020903",
                                "Description": "Praek Ropov",
                                "LocalDescription": "ព្រែករពៅ",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020904",
                                "Description": "Sala Daeng",
                                "LocalDescription": "សាលាដែង",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020905",
                                "Description": "Samraong",
                                "LocalDescription": "សំរោង",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020906",
                                "Description": "Anlong Mean Troap",
                                "LocalDescription": "អន្លង់មានទ្រព្យ",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020907",
                                "Description": "Chamkar Ta Daok",
                                "LocalDescription": "ចំការតាដោក",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020908",
                                "Description": "Pralay Luong Kraom",
                                "LocalDescription": "ប្រទ្បាយហ្លួងក្រោម",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020909",
                                "Description": "Luong",
                                "LocalDescription": "ហ្លួង",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020910",
                                "Description": "Ou Ta Kol",
                                "LocalDescription": "អូរតាគល់",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020911",
                                "Description": "Pralay Luong Leu",
                                "LocalDescription": "ប្រទ្បាយហ្លួងលើ",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020912",
                                "Description": "Kouk Svay",
                                "LocalDescription": "គោកស្វាយ",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020913",
                                "Description": "Ou Ta Ma",
                                "LocalDescription": "អូរតាម៉ា",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020914",
                                "Description": "Kaoh Kaev",
                                "LocalDescription": "កោះកែវ",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020915",
                                "Description": "Phasi Sra",
                                "LocalDescription": "ផាស៊ីស្រា",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020916",
                                "Description": "Ruessei Kraok",
                                "LocalDescription": "ឫស្សីក្រោក",
                                "Commune": "010209"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01020917",
                                "Description": "Chumteav",
                                "LocalDescription": "ជំទាវ",
                                "Commune": "010209"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010210",
                        "Description": "Sambuor",
                        "LocalDescription": "សំបួរ",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01021000",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021001",
                                "Description": "Chhnaeum Meas",
                                "LocalDescription": "ឆ្នើមមាស",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021002",
                                "Description": "Sranal",
                                "LocalDescription": "ស្រណាល",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021003",
                                "Description": "La",
                                "LocalDescription": "ឡ",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021004",
                                "Description": "Ta Meaeng Pok",
                                "LocalDescription": "តាមែងពក",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021005",
                                "Description": "Sambuor",
                                "LocalDescription": "សំបួរ",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021006",
                                "Description": "Doun Loek",
                                "LocalDescription": "ដូនឡឹក",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021007",
                                "Description": "Kbal Krabei",
                                "LocalDescription": "ក្បាលក្របី",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021008",
                                "Description": "Srah Chhuk",
                                "LocalDescription": "ស្រះឈូក",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021009",
                                "Description": "Srae Prey",
                                "LocalDescription": "ស្រែព្រៃ",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021010",
                                "Description": "Chaek Angkar",
                                "LocalDescription": "ចែកអង្ករ",
                                "Commune": "010210"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021011",
                                "Description": "Thma Dab",
                                "LocalDescription": "ថ្មដប់",
                                "Commune": "010210"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010211",
                        "Description": "Soea",
                        "LocalDescription": "សឿ",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01021100",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021101",
                                "Description": "Ta Mau",
                                "LocalDescription": "តាម៉ៅ",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021102",
                                "Description": "Ansam Chek",
                                "LocalDescription": "អន្សមចេក",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021103",
                                "Description": "Tnaot",
                                "LocalDescription": "ត្នោត",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021104",
                                "Description": "Buor",
                                "LocalDescription": "បួរ",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021105",
                                "Description": "Bos Laok",
                                "LocalDescription": "បុស្សឡោក",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021106",
                                "Description": "Soea",
                                "LocalDescription": "សឿ",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021107",
                                "Description": "Boeng Touch",
                                "LocalDescription": "បឹងតូច",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021108",
                                "Description": "Phlov Damrei Leu",
                                "LocalDescription": "ផ្លូវដំរីលើ",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021109",
                                "Description": "Phlov Damrei Kraom",
                                "LocalDescription": "ផ្លូវដំរីក្រោម",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021110",
                                "Description": "Ou Soea",
                                "LocalDescription": "អូរសឿ",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021111",
                                "Description": "Kouk Samraong",
                                "LocalDescription": "គោកសំរោង",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021112",
                                "Description": "Balang Chrey",
                                "LocalDescription": "បល្ល័ង្គជ្រៃ",
                                "Commune": "010211"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021113",
                                "Description": "Ou Choub Thmey",
                                "LocalDescription": "អូរជួបថ្មី",
                                "Commune": "010211"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010212",
                        "Description": "Srah Reang",
                        "LocalDescription": "ស្រះរាំង",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01021200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010212"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021201",
                                "Description": "Ta In Muoy",
                                "LocalDescription": "តាអ៊ិន១",
                                "Commune": "010212"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021202",
                                "Description": "Ta In Pir",
                                "LocalDescription": "តាអ៊ិន២",
                                "Commune": "010212"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021203",
                                "Description": "Krouch",
                                "LocalDescription": "ក្រូច",
                                "Commune": "010212"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021204",
                                "Description": "Chamkar Chek",
                                "LocalDescription": "ចំការចេក",
                                "Commune": "010212"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021205",
                                "Description": "Srah Reang",
                                "LocalDescription": "ស្រះរាំង",
                                "Commune": "010212"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021206",
                                "Description": "Ta Chan",
                                "LocalDescription": "តាចាន់",
                                "Commune": "010212"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021207",
                                "Description": "Kouk Srok",
                                "LocalDescription": "គោកស្រុក",
                                "Commune": "010212"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021208",
                                "Description": "Kouk Chrab",
                                "LocalDescription": "គោកច្រាប",
                                "Commune": "010212"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021209",
                                "Description": "Kouk Krasang",
                                "LocalDescription": "គោកក្រសាំង",
                                "Commune": "010212"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010213",
                        "Description": "Ta Lam",
                        "LocalDescription": "តាឡំ",
                        "District": "0102",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01021300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010213"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021301",
                                "Description": "Preah Srae",
                                "LocalDescription": "ព្រះស្រែ",
                                "Commune": "010213"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021302",
                                "Description": "Ta Lam Kandal",
                                "LocalDescription": "តាឡំកណ្ដាល",
                                "Commune": "010213"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021303",
                                "Description": "Ta Lam Chong",
                                "LocalDescription": "តាឡំចុង",
                                "Commune": "010213"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021304",
                                "Description": "Boeng Khleang Lech",
                                "LocalDescription": "បឹងឃ្លាំងលិច",
                                "Commune": "010213"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021305",
                                "Description": "Chong Kouk",
                                "LocalDescription": "ចុងគោក",
                                "Commune": "010213"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021306",
                                "Description": "Boeng Khleang Kaeut",
                                "LocalDescription": "បឹងឃ្លាំងកើត",
                                "Commune": "010213"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021307",
                                "Description": "Khla Kham Chhkae",
                                "LocalDescription": "ខ្លាខាំឆ្កែ",
                                "Commune": "010213"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01021308",
                                "Description": "Boeng Veaeng",
                                "LocalDescription": "បឹងវែង",
                                "Commune": "010213"
                            }
                        ]
                    }
                ]
            },
            {
                "Branch": "HO",
                "ID": "0103",
                "Description": "Phnum Srok",
                "LocalDescription": "ភ្នំស្រុក",
                "Province": "01",
                "communes": [
                    {
                        "Branch": "HO",
                        "ID": "010301",
                        "Description": "Nam Tau",
                        "LocalDescription": "ណាំតៅ",
                        "District": "0103",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01030100",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030101",
                                "Description": "Rongvean",
                                "LocalDescription": "រង្វាន",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030102",
                                "Description": "Thmei Khang Tboung",
                                "LocalDescription": "ថ្មីខាងត្បូង",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030103",
                                "Description": "Thmei Khang Cheung",
                                "LocalDescription": "ថ្មីខាងជើង",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030104",
                                "Description": "Kouk Yeang",
                                "LocalDescription": "គោកយាង",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030105",
                                "Description": "Kouk Chas",
                                "LocalDescription": "គោកចាស់",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030106",
                                "Description": "Chrab",
                                "LocalDescription": "ច្រាប",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030107",
                                "Description": "Kantuot",
                                "LocalDescription": "កន្ទួត",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030108",
                                "Description": "Nam Tau",
                                "LocalDescription": "ណាំតៅ",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030109",
                                "Description": "Pongro",
                                "LocalDescription": "ពង្រ",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030110",
                                "Description": "Samraong",
                                "LocalDescription": "សំរោង",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030111",
                                "Description": "Khnang",
                                "LocalDescription": "ក្នាំង",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030112",
                                "Description": "Thnong Khang Tboung",
                                "LocalDescription": "ធ្នង់ខាងត្បូង",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030113",
                                "Description": "Thnong Khang Cheung",
                                "LocalDescription": "ធ្នង់ខាងជើង",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030114",
                                "Description": "Slaeng",
                                "LocalDescription": "ស្លែង",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030115",
                                "Description": "Takong",
                                "LocalDescription": "តាគង់",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030116",
                                "Description": "Yeang Otdam",
                                "LocalDescription": "យាងឧត្ដម",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030117",
                                "Description": "Ampil Kaong",
                                "LocalDescription": "អំពិលកោង",
                                "Commune": "010301"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030118",
                                "Description": "Kong Siem",
                                "LocalDescription": "កុងសៀម",
                                "Commune": "010301"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010302",
                        "Description": "Poy Char",
                        "LocalDescription": "ប៉ោយចារ",
                        "District": "0103",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01030200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030201",
                                "Description": "Paoy Snuol",
                                "LocalDescription": "ប៉ោយស្នួល",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030202",
                                "Description": "Poy Char",
                                "LocalDescription": "ប៉ោយចារ",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030203",
                                "Description": "Trapeang Thma Tboung",
                                "LocalDescription": "ត្រពាំងថ្មត្បូង",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030204",
                                "Description": "Trapeang Thma Cheung",
                                "LocalDescription": "ត្រពាំងថ្មជើង",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030205",
                                "Description": "Trapeang Thma Kandal",
                                "LocalDescription": "ត្រពាំងថ្មកណ្ដាល",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030206",
                                "Description": "Paoy Ta Ong",
                                "LocalDescription": "ប៉ោយតាអុង",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030207",
                                "Description": "Sambuor",
                                "LocalDescription": "សំបួរ",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030208",
                                "Description": "Pongro",
                                "LocalDescription": "ពង្រ",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030209",
                                "Description": "Koun Klaeng",
                                "LocalDescription": "កូនខ្លែង",
                                "Commune": "010302"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030210",
                                "Description": "Pras Andoung",
                                "LocalDescription": "ព្រះអណ្តូង",
                                "Commune": "010302"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010303",
                        "Description": "Ponley",
                        "LocalDescription": "ពន្លៃ",
                        "District": "0103",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01030300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010303"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030301",
                                "Description": "Ta Vong",
                                "LocalDescription": "តាវង",
                                "Commune": "010303"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030302",
                                "Description": "Ponley",
                                "LocalDescription": "ពន្លៃ",
                                "Commune": "010303"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030303",
                                "Description": "Svay Sa",
                                "LocalDescription": "ស្វាយស",
                                "Commune": "010303"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030304",
                                "Description": "Svay Khmau",
                                "LocalDescription": "ស្វាយខ្មៅ",
                                "Commune": "010303"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030305",
                                "Description": "Kouk Ta Sokh",
                                "LocalDescription": "គោគតាសុខ",
                                "Commune": "010303"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030306",
                                "Description": "Pou Roam Bon",
                                "LocalDescription": "ពោធិ៍រាំបុណ្យ",
                                "Commune": "010303"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010304",
                        "Description": "Spean Sraeng",
                        "LocalDescription": "ស្ពានស្រែង",
                        "District": "0103",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01030400",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010304"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030401",
                                "Description": "Rouk",
                                "LocalDescription": "រោគ",
                                "Commune": "010304"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030402",
                                "Description": "Mukh Chhneang",
                                "LocalDescription": "មុខឈ្នាង",
                                "Commune": "010304"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030403",
                                "Description": "Spean",
                                "LocalDescription": "ស្ពាន",
                                "Commune": "010304"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030404",
                                "Description": "Kouk Char",
                                "LocalDescription": "គោកចារ",
                                "Commune": "010304"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030405",
                                "Description": "Kandal",
                                "LocalDescription": "កណ្ដាល",
                                "Commune": "010304"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030406",
                                "Description": "Pongro",
                                "LocalDescription": "ពង្រ",
                                "Commune": "010304"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010305",
                        "Description": "Srah Chik",
                        "LocalDescription": "ស្រះជីក",
                        "District": "0103",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01030500",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010305"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030501",
                                "Description": "Moat Srah",
                                "LocalDescription": "មាត់ស្រះ",
                                "Commune": "010305"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030502",
                                "Description": "Srah Chhuk Khang Lech",
                                "LocalDescription": "ស្រះឈូកខាងលិច",
                                "Commune": "010305"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030503",
                                "Description": "Srah Chik",
                                "LocalDescription": "ស្រះជីក",
                                "Commune": "010305"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030504",
                                "Description": "Kouk Kral",
                                "LocalDescription": "គោកក្រោល",
                                "Commune": "010305"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030505",
                                "Description": "Kouk Rumchek",
                                "LocalDescription": "គោករំចេក",
                                "Commune": "010305"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030506",
                                "Description": "Kouk Ta Reach",
                                "LocalDescription": "គោកតារាជ្យ",
                                "Commune": "010305"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030507",
                                "Description": "Kandal Khang Lech",
                                "LocalDescription": "កណ្ដាលខាងលិច",
                                "Commune": "010305"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030508",
                                "Description": "Kandal Khang Kaeut",
                                "LocalDescription": "កណ្ដាលខាងកើត",
                                "Commune": "010305"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030509",
                                "Description": "Srah Chhuk Khang Kaeut",
                                "LocalDescription": "ស្រះឈូកខាងកើត",
                                "Commune": "010305"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010306",
                        "Description": "Phnum Dei",
                        "LocalDescription": "ភ្នំដី",
                        "District": "0103",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01030600",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030601",
                                "Description": "Phnum Dei",
                                "LocalDescription": "ភ្នំដី",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030602",
                                "Description": "Ponley",
                                "LocalDescription": "ពន្លៃ",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030603",
                                "Description": "Kouk Seh",
                                "LocalDescription": "គោកសេះ",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030604",
                                "Description": "Thnal Dach",
                                "LocalDescription": "ថ្នល់ដាច់",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030605",
                                "Description": "Bos Sbov",
                                "LocalDescription": "បុស្បូវ",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030606",
                                "Description": "Trapeang Prei",
                                "LocalDescription": "ត្រពាំងប្រីយ៍",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030607",
                                "Description": "Kamping Puoy",
                                "LocalDescription": "កំពីងពួយ",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030608",
                                "Description": "Spean Khmeng",
                                "LocalDescription": "ស្ពានក្មេង",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030609",
                                "Description": "Trang",
                                "LocalDescription": "ត្រាង",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030610",
                                "Description": "Kamping Puoy Muoy",
                                "LocalDescription": "កំពីងពួយមួយ",
                                "Commune": "010306"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01030611",
                                "Description": "Ponley Tbong",
                                "LocalDescription": "ពន្លៃត្បូង",
                                "Commune": "010306"
                            }
                        ]
                    }
                ]
            },
            {
                "Branch": "HO",
                "ID": "0104",
                "Description": "Preah Netr Preah",
                "LocalDescription": "ព្រះនេត្រព្រះ",
                "Province": "01",
                "communes": [
                    {
                        "Branch": "HO",
                        "ID": "010401",
                        "Description": "Chnuor Mean Chey",
                        "LocalDescription": "ឈ្នួរមានជ័យ",
                        "District": "0104",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01040100",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040101",
                                "Description": "Samraong Touch",
                                "LocalDescription": "សំរោងតូច",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040102",
                                "Description": "Kouk Pongro",
                                "LocalDescription": "គោកពង្រ",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040103",
                                "Description": "Thma Koul",
                                "LocalDescription": "ថ្មគោល",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040104",
                                "Description": "Proput",
                                "LocalDescription": "ប្រពុត",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040105",
                                "Description": "Bantoat Baoh",
                                "LocalDescription": "បន្ទាត់បោះ",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040106",
                                "Description": "Kouk Treas",
                                "LocalDescription": "គោកទ្រាស",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040107",
                                "Description": "Chhnuor",
                                "LocalDescription": "ឈ្នួរ",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040108",
                                "Description": "Samraong Thum",
                                "LocalDescription": "សំរោងធំ",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040109",
                                "Description": "Ruessei Khang",
                                "LocalDescription": "ឫស្សីខាង",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040110",
                                "Description": "Ruessei Kandal",
                                "LocalDescription": "ឫស្សីកណ្ដាល",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040111",
                                "Description": "Ropeatt",
                                "LocalDescription": "រពាត់",
                                "Commune": "010401"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040112",
                                "Description": "Kouk Trach",
                                "LocalDescription": "គោកត្រាច",
                                "Commune": "010401"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010402",
                        "Description": "Chob Vari",
                        "LocalDescription": "ជប់វារី",
                        "District": "0104",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01040200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040201",
                                "Description": "Chob",
                                "LocalDescription": "ជប់",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040202",
                                "Description": "Roul Chruk",
                                "LocalDescription": "រោលជ្រូក",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040203",
                                "Description": "Prasat",
                                "LocalDescription": "ប្រាសាទ",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040204",
                                "Description": "Krasang Thmei",
                                "LocalDescription": "ក្រសាំងថ្មី",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040205",
                                "Description": "Pradak",
                                "LocalDescription": "ប្រដាក",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040206",
                                "Description": "Chroab Thmei",
                                "LocalDescription": "ជ្រាប់ថ្មី",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040207",
                                "Description": "Chroab Chas",
                                "LocalDescription": "ជ្រាប់ចាស់",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040208",
                                "Description": "Kak",
                                "LocalDescription": "កក់",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040209",
                                "Description": "Kouk Lun",
                                "LocalDescription": "គោកលុន",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040210",
                                "Description": "Phnum Chonhcheang",
                                "LocalDescription": "ភ្នំជញ្ជាំង",
                                "Commune": "010402"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040211",
                                "Description": "Chakkrei",
                                "LocalDescription": "ចក្រី",
                                "Commune": "010402"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010403",
                        "Description": "Phnum Lieb",
                        "LocalDescription": "ភ្នំលៀប",
                        "District": "0104",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01040300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040301",
                                "Description": "Phnum Lieb Kaeut",
                                "LocalDescription": "ភ្នំលៀបកើត",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040302",
                                "Description": "Phnum Lieb Lech",
                                "LocalDescription": "ភ្នំលៀបលិច",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040303",
                                "Description": "Troyoung",
                                "LocalDescription": "ទ្រយោង",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040304",
                                "Description": "Tro Louk Cheung",
                                "LocalDescription": "ទ្រលោកជើង",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040305",
                                "Description": "Tro Louk Lech",
                                "LocalDescription": "ទ្រលោកលិច",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040306",
                                "Description": "Tro Louk Tboung",
                                "LocalDescription": "ទ្រលោកត្បូង",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040307",
                                "Description": "Laote",
                                "LocalDescription": "ឡោទេ",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040308",
                                "Description": "Rumduol",
                                "LocalDescription": "រំដួល",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040309",
                                "Description": "Pring Chuor",
                                "LocalDescription": "ព្រីងជួរ",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040310",
                                "Description": "Kantrab",
                                "LocalDescription": "កន្ដ្រប់",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040311",
                                "Description": "Tnaot",
                                "LocalDescription": "ត្នោត",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040312",
                                "Description": "Anlong Sa",
                                "LocalDescription": "អន្លង់សា",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040313",
                                "Description": "Kandaol",
                                "LocalDescription": "កណ្ដោល",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040314",
                                "Description": "Kambaor",
                                "LocalDescription": "កំបោរ",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040315",
                                "Description": "Kabau",
                                "LocalDescription": "កាបៅ",
                                "Commune": "010403"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040316",
                                "Description": "Kampong Krasang",
                                "LocalDescription": "កំពង់ក្រសាំង",
                                "Commune": "010403"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010404",
                        "Description": "Prasat",
                        "LocalDescription": "ប្រាសាទ",
                        "District": "0104",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01040400",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040401",
                                "Description": "Char",
                                "LocalDescription": "ចារ",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040402",
                                "Description": "Bat Trang",
                                "LocalDescription": "បត់ត្រង់",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040403",
                                "Description": "Sampov Lun",
                                "LocalDescription": "សំពៅលូន",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040404",
                                "Description": "Phlov Leav",
                                "LocalDescription": "ផ្លូវលាវ",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040405",
                                "Description": "Ta Am",
                                "LocalDescription": "តាអំ",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040406",
                                "Description": "Ampil",
                                "LocalDescription": "អំពិល",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040407",
                                "Description": "Kandal",
                                "LocalDescription": "កណ្ដាល",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040408",
                                "Description": "Thmei",
                                "LocalDescription": "ថ្មី",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040409",
                                "Description": "Aomal",
                                "LocalDescription": "ឱម៉ាល់",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040410",
                                "Description": "Tumloab",
                                "LocalDescription": "ទម្លាប់",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040411",
                                "Description": "Kien Banteay",
                                "LocalDescription": "កៀនបន្ទាយ",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040412",
                                "Description": "Prasat",
                                "LocalDescription": "ប្រាសាទ",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040413",
                                "Description": "Anlong Sa",
                                "LocalDescription": "អន្លង់សា",
                                "Commune": "010404"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040414",
                                "Description": "Kampream",
                                "LocalDescription": "កំព្រាម",
                                "Commune": "010404"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010405",
                        "Description": "Preak Netr Preah",
                        "LocalDescription": "ព្រះនេត្រព្រះ",
                        "District": "0104",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01040500",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040501",
                                "Description": "Paoy Kdoeang",
                                "LocalDescription": "ប៉ោយក្ដឿង",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040502",
                                "Description": "Cheung Voat",
                                "LocalDescription": "ជើងវត្ដ",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040503",
                                "Description": "Kandal",
                                "LocalDescription": "កណ្ដាល",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040504",
                                "Description": "Post Chas",
                                "LocalDescription": "ប៉ុស្ដិចាស់",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040505",
                                "Description": "Paoy Samraong",
                                "LocalDescription": "ប៉ោយសំរោង",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040506",
                                "Description": "Paoy Pring",
                                "LocalDescription": "ប៉ោយព្រីង",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040507",
                                "Description": "Paoy Ta Paen",
                                "LocalDescription": "ប៉ោយតាប៉ែន",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040508",
                                "Description": "Sreh Kaeut",
                                "LocalDescription": "ស្រេះកើត",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040509",
                                "Description": "Sreh Lech",
                                "LocalDescription": "ស្រេះលិច",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040510",
                                "Description": "Kouk Srok",
                                "LocalDescription": "គោកស្រុក",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040511",
                                "Description": "Sramaoch",
                                "LocalDescription": "ស្រមោច",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040512",
                                "Description": "Peam Sreh",
                                "LocalDescription": "ពាមស្រេះ",
                                "Commune": "010405"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040513",
                                "Description": "Doun Chraeng",
                                "LocalDescription": "ដូនច្រែង",
                                "Commune": "010405"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010406",
                        "Description": "Rohal",
                        "LocalDescription": "រហាល",
                        "District": "0104",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01040600",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040601",
                                "Description": "Rohal",
                                "LocalDescription": "រហាល",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040602",
                                "Description": "Sala Chheh",
                                "LocalDescription": "សាលាឆេះ",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040603",
                                "Description": "Chak",
                                "LocalDescription": "ចក",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040604",
                                "Description": "Tep Kaosa",
                                "LocalDescription": "ទេពកោសា",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040605",
                                "Description": "Snay",
                                "LocalDescription": "ស្នាយ",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040606",
                                "Description": "Anlong Thma",
                                "LocalDescription": "អន្លង់ថ្ម",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040607",
                                "Description": "Popel",
                                "LocalDescription": "ពពេល",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040608",
                                "Description": "Paoy Svay",
                                "LocalDescription": "ប៉ោយស្វាយ",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040609",
                                "Description": "Ruessei",
                                "LocalDescription": "ឫស្សី",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040610",
                                "Description": "Prey Moan",
                                "LocalDescription": "ព្រៃមាន់",
                                "Commune": "010406"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040611",
                                "Description": "Stueng Kambot",
                                "LocalDescription": "ស្ទឹងកំបុត",
                                "Commune": "010406"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010407",
                        "Description": "Tean Kam",
                        "LocalDescription": "ទានកាំ",
                        "District": "0104",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01040700",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010407"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040701",
                                "Description": "Bantoat Baoh",
                                "LocalDescription": "បន្ទាត់បោះ",
                                "Commune": "010407"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040702",
                                "Description": "Tean Kam Lech",
                                "LocalDescription": "ទានកាំលិច",
                                "Commune": "010407"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040703",
                                "Description": "Tean Kam Cheung",
                                "LocalDescription": "ទានកាំជើង",
                                "Commune": "010407"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040704",
                                "Description": "Tean Kam Tboung",
                                "LocalDescription": "ទានកាំត្បូង",
                                "Commune": "010407"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040705",
                                "Description": "Ou",
                                "LocalDescription": "អូរ",
                                "Commune": "010407"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040706",
                                "Description": "Ta Un",
                                "LocalDescription": "តាអ៊ុន",
                                "Commune": "010407"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010408",
                        "Description": "Tuek Chour",
                        "LocalDescription": "ទឹកជោរ",
                        "District": "0104",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01040800",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040801",
                                "Description": "Smach",
                                "LocalDescription": "ស្មាច់",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040802",
                                "Description": "Paoy Char",
                                "LocalDescription": "ប៉ោយចារ",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040803",
                                "Description": "Ta Khaek",
                                "LocalDescription": "តាខែក",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040804",
                                "Description": "Kouk kei",
                                "LocalDescription": "គោកកី",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040805",
                                "Description": "Tonloab",
                                "LocalDescription": "ទន្លាប់",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040806",
                                "Description": "Kouk Tiem",
                                "LocalDescription": "គោកទៀម",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040807",
                                "Description": "Char Leu",
                                "LocalDescription": "ចារលើ",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040808",
                                "Description": "Kantuot",
                                "LocalDescription": "កន្ទួត",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040809",
                                "Description": "Thmei",
                                "LocalDescription": "ថ្មី",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040810",
                                "Description": "Kandal",
                                "LocalDescription": "កណ្ដាល",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040811",
                                "Description": "Tuek Chour",
                                "LocalDescription": "ទឹកជោរ",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040812",
                                "Description": "Ta Siev",
                                "LocalDescription": "តាសៀវ",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040813",
                                "Description": "Kampong Thkov",
                                "LocalDescription": "កំពង់ថ្កូវ",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040814",
                                "Description": "Ta Pon",
                                "LocalDescription": "តាប៉ុន",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040815",
                                "Description": "Snay L'a",
                                "LocalDescription": "ស្នាយល្អ",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040816",
                                "Description": "Ta Daek",
                                "LocalDescription": "តាដែក",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040817",
                                "Description": "Samraong",
                                "LocalDescription": "សំរោង",
                                "Commune": "010408"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040818",
                                "Description": "Anlong Vil",
                                "LocalDescription": "អន្លង់វិល",
                                "Commune": "010408"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010409",
                        "Description": "Bos Sbov",
                        "LocalDescription": "បុស្បូវ",
                        "District": "0104",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01040900",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040901",
                                "Description": "Trabaek",
                                "LocalDescription": "ត្របែក",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040902",
                                "Description": "Kandal",
                                "LocalDescription": "កណ្ដាល",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040903",
                                "Description": "Kouk Thum",
                                "LocalDescription": "គោកធំ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040904",
                                "Description": "Bos Sbov",
                                "LocalDescription": "បុស្បូវ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040905",
                                "Description": "Soutr Mont",
                                "LocalDescription": "សូត្រមន្ដ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040906",
                                "Description": "Srah Khtum",
                                "LocalDescription": "ស្រះខ្ទំ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040907",
                                "Description": "Tabau",
                                "LocalDescription": "តាបៅ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040908",
                                "Description": "Kbal Khting",
                                "LocalDescription": "ក្បាលខ្ទីង",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040909",
                                "Description": "Smach",
                                "LocalDescription": "ស្មាច់",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040910",
                                "Description": "Boeng Veaeng",
                                "LocalDescription": "បឹងវែង",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040911",
                                "Description": "Bantoat Baoh",
                                "LocalDescription": "បន្ទាត់បោះ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040912",
                                "Description": "Pring Kaong",
                                "LocalDescription": "ព្រីងកោង",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040913",
                                "Description": "Khchas",
                                "LocalDescription": "ខ្ចាស់",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040914",
                                "Description": "Khnhaer",
                                "LocalDescription": "ខ្ញែរ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040915",
                                "Description": "Khu Svay",
                                "LocalDescription": "ឃូស្វាយ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040916",
                                "Description": "Khvav",
                                "LocalDescription": "ខ្វាវ",
                                "Commune": "010409"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01040917",
                                "Description": "Tbaeng",
                                "LocalDescription": "ត្បែង",
                                "Commune": "010409"
                            }
                        ]
                    }
                ]
            },
            {
                "Branch": "HO",
                "ID": "0105",
                "Description": "Ou Chrov",
                "LocalDescription": "អូរជ្រៅ",
                "Province": "01",
                "communes": [
                    {
                        "Branch": "HO",
                        "ID": "010501",
                        "Description": "Changha",
                        "LocalDescription": "ចង្ហា",
                        "District": "0105",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01050100",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010501"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050101",
                                "Description": "Boeng Seila",
                                "LocalDescription": "បឹងសិលា",
                                "Commune": "010501"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050102",
                                "Description": "Ta Chrueng",
                                "LocalDescription": "តាជ្រឹង",
                                "Commune": "010501"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050103",
                                "Description": "Ta Phaok",
                                "LocalDescription": "តាផោក",
                                "Commune": "010501"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050104",
                                "Description": "Paoy Voat",
                                "LocalDescription": "ប៉ោយវត្ដ",
                                "Commune": "010501"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050105",
                                "Description": "Chhuk",
                                "LocalDescription": "ឈូក",
                                "Commune": "010501"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050106",
                                "Description": "Chrey",
                                "LocalDescription": "ជ្រៃ",
                                "Commune": "010501"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010502",
                        "Description": "Koub",
                        "LocalDescription": "កូប",
                        "District": "0105",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01050200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050201",
                                "Description": "Yeang thmei",
                                "LocalDescription": "យាងថ្មី",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050202",
                                "Description": "Mak Heun",
                                "LocalDescription": "ម៉ក់ហឺន",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050203",
                                "Description": "Veang Muong",
                                "LocalDescription": "វាំងមួង",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050204",
                                "Description": "Koub Kaeut",
                                "LocalDescription": "កូបកើត",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050205",
                                "Description": "Khai Dan",
                                "LocalDescription": "ខៃដន",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050206",
                                "Description": "Naka Chhay",
                                "LocalDescription": "ណាកាឆាយ",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050207",
                                "Description": "Koub Lech",
                                "LocalDescription": "កូបលិច",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050208",
                                "Description": "Koub Cheung",
                                "LocalDescription": "កូបជើង",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050209",
                                "Description": "Ou Chrov",
                                "LocalDescription": "អូរជ្រៅ",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050210",
                                "Description": "Souriya Thmei",
                                "LocalDescription": "សូរិយាថ្មី",
                                "Commune": "010502"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050211",
                                "Description": "Koun Trei",
                                "LocalDescription": "កូនត្រី",
                                "Commune": "010502"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010503",
                        "Description": "Kuttasat",
                        "LocalDescription": "គុត្ដសត",
                        "District": "0105",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01050300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010503"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050301",
                                "Description": "Koub Touch",
                                "LocalDescription": "កូបតូច",
                                "Commune": "010503"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050302",
                                "Description": "Kaoh Char",
                                "LocalDescription": "កោះចារ",
                                "Commune": "010503"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050303",
                                "Description": "Kuttasat",
                                "LocalDescription": "គុត្ដសត",
                                "Commune": "010503"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050304",
                                "Description": "Yeay At",
                                "LocalDescription": "យាយអត",
                                "Commune": "010503"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010505",
                        "Description": "Samraong",
                        "LocalDescription": "សំរោង",
                        "District": "0105",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01050500",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050501",
                                "Description": "Banlech",
                                "LocalDescription": "បន្លិច",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050502",
                                "Description": "Neak Ta Chhor",
                                "LocalDescription": "អ្នកតាឈរ",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050503",
                                "Description": "Samraong",
                                "LocalDescription": "សំរោង",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050504",
                                "Description": "Kampong Reab",
                                "LocalDescription": "កំពង់រាប",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050505",
                                "Description": "Thmei",
                                "LocalDescription": "ថ្មី",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050506",
                                "Description": "Thmenh Trei",
                                "LocalDescription": "ធ្មេញត្រី",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050507",
                                "Description": "Bat Trang",
                                "LocalDescription": "បត់ត្រង់",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050508",
                                "Description": "Anhchanh",
                                "LocalDescription": "អញ្ចាញ",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050509",
                                "Description": "Voat",
                                "LocalDescription": "វត្ដ",
                                "Commune": "010505"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050510",
                                "Description": "Kandal",
                                "LocalDescription": "កណ្ដាល",
                                "Commune": "010505"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010506",
                        "Description": "Souphi",
                        "LocalDescription": "សូភី",
                        "District": "0105",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01050600",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010506"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050601",
                                "Description": "Souphi Cheung",
                                "LocalDescription": "សូភីជើង",
                                "Commune": "010506"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050602",
                                "Description": "Souphi Kandal",
                                "LocalDescription": "សូភីកណ្ដាល",
                                "Commune": "010506"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050603",
                                "Description": "Souphi Tboung",
                                "LocalDescription": "សូភីត្បូង",
                                "Commune": "010506"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050604",
                                "Description": "Kouk Chak",
                                "LocalDescription": "គោកចក",
                                "Commune": "010506"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050605",
                                "Description": "Kouk Prich",
                                "LocalDescription": "គោកព្រិច",
                                "Commune": "010506"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010507",
                        "Description": "Soengh",
                        "LocalDescription": "សឹង្ហ",
                        "District": "0105",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01050700",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010507"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050701",
                                "Description": "Soengh Lech",
                                "LocalDescription": "សឹង្ហលិច",
                                "Commune": "010507"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050702",
                                "Description": "Roka",
                                "LocalDescription": "រកា",
                                "Commune": "010507"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050703",
                                "Description": "Anlong Svay",
                                "LocalDescription": "អន្លង់ស្វាយ",
                                "Commune": "010507"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050704",
                                "Description": "Soengh Tboung",
                                "LocalDescription": "សឹង្ហត្បូង",
                                "Commune": "010507"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050705",
                                "Description": "Phkoam",
                                "LocalDescription": "ផ្គាំ",
                                "Commune": "010507"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050706",
                                "Description": "Pongro",
                                "LocalDescription": "ពង្រ",
                                "Commune": "010507"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050707",
                                "Description": "Tnaot",
                                "LocalDescription": "ត្នោត",
                                "Commune": "010507"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050708",
                                "Description": "Kandal",
                                "LocalDescription": "កណ្ដាល",
                                "Commune": "010507"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050709",
                                "Description": "Run",
                                "LocalDescription": "រុន",
                                "Commune": "010507"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010509",
                        "Description": "Ou Beichoan",
                        "LocalDescription": "អូរបីជាន់",
                        "District": "0105",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01050900",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050901",
                                "Description": "Banteay Thmei",
                                "LocalDescription": "បន្ទាយថ្មី",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050902",
                                "Description": "Chouk Chey",
                                "LocalDescription": "ជោគជ័យ",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050903",
                                "Description": "Ou Beichoan",
                                "LocalDescription": "អូរបីជាន់",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050904",
                                "Description": "Prasat",
                                "LocalDescription": "ប្រាសាទ",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050905",
                                "Description": "Prey Chan",
                                "LocalDescription": "ព្រៃចាន់",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050906",
                                "Description": "Preav Chas",
                                "LocalDescription": "ព្រាវចាស់",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050907",
                                "Description": "Seila Khmer",
                                "LocalDescription": "សិលាខ្មែរ",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050908",
                                "Description": "Snuol Tret",
                                "LocalDescription": "ស្នួលទ្រេត",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050909",
                                "Description": "Thnal Bat",
                                "LocalDescription": "ថ្នល់បត់",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050910",
                                "Description": "Tomnob Dach",
                                "LocalDescription": "ទំនប់ដាច់",
                                "Commune": "010509"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01050911",
                                "Description": "Yeang Dangkum",
                                "LocalDescription": "យាងដង្គំ",
                                "Commune": "010509"
                            }
                        ]
                    }
                ]
            },
            {
                "Branch": "HO",
                "ID": "0106",
                "Description": "Serei Saophoan",
                "LocalDescription": "សិរីសោភ័ណ",
                "Province": "01",
                "communes": [
                    {
                        "Branch": "HO",
                        "ID": "010602",
                        "Description": "Kampong Svay",
                        "LocalDescription": "កំពង់ស្វាយ",
                        "District": "0106",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01060200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010602"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060201",
                                "Description": "Kampong Svay",
                                "LocalDescription": "កំពង់ស្វាយ",
                                "Commune": "010602"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060202",
                                "Description": "Kangva",
                                "LocalDescription": "កងវ៉ា",
                                "Commune": "010602"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060203",
                                "Description": "Phum Pir",
                                "LocalDescription": "ភូមិ ២",
                                "Commune": "010602"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060204",
                                "Description": "Pongro",
                                "LocalDescription": "ពង្រ",
                                "Commune": "010602"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060205",
                                "Description": "Souphi",
                                "LocalDescription": "សូភី",
                                "Commune": "010602"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060206",
                                "Description": "Tarang Bal",
                                "LocalDescription": "តារាងបាល់",
                                "Commune": "010602"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060207",
                                "Description": "Kantuot",
                                "LocalDescription": "កន្ទួត",
                                "Commune": "010602"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060208",
                                "Description": "Kla Koun Chas",
                                "LocalDescription": "ខ្លាកូនចាស់",
                                "Commune": "010602"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060209",
                                "Description": "Kla Koun Thmey",
                                "LocalDescription": "ខ្លាកូនថ្មី",
                                "Commune": "010602"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010603",
                        "Description": "Kaoh Pong Satv",
                        "LocalDescription": "កោះពងសត្វ",
                        "District": "0106",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01060300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010603"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060301",
                                "Description": "Kaoh Pong Satv",
                                "LocalDescription": "កោះពងសត្វ",
                                "Commune": "010603"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060302",
                                "Description": "Ta Sok",
                                "LocalDescription": "តាសុខ",
                                "Commune": "010603"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060303",
                                "Description": "Preah Angk",
                                "LocalDescription": "ព្រះអង្គ",
                                "Commune": "010603"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060304",
                                "Description": "Snay Dangkot",
                                "LocalDescription": "ស្នាយដង្គត់",
                                "Commune": "010603"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060305",
                                "Description": "Angkear Bos",
                                "LocalDescription": "អង្គាបុស្ប",
                                "Commune": "010603"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010604",
                        "Description": "Mkak",
                        "LocalDescription": "ម្កាក់",
                        "District": "0106",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01060400",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010604"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060401",
                                "Description": "Mkak",
                                "LocalDescription": "ម្កាក់",
                                "Commune": "010604"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060402",
                                "Description": "Kbal Spean",
                                "LocalDescription": "ក្បាលស្ពាន",
                                "Commune": "010604"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060403",
                                "Description": "Ta Ma",
                                "LocalDescription": "តាម៉ា",
                                "Commune": "010604"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060404",
                                "Description": "Kouk Lieb",
                                "LocalDescription": "គោកលៀប",
                                "Commune": "010604"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060405",
                                "Description": "Chhuk",
                                "LocalDescription": "ឈូក",
                                "Commune": "010604"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060406",
                                "Description": "Doun Lei",
                                "LocalDescription": "ដូនឡី",
                                "Commune": "010604"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060407",
                                "Description": "Baek Chan",
                                "LocalDescription": "បែកចាន",
                                "Commune": "010604"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010605",
                        "Description": "Ou Ambel",
                        "LocalDescription": "អូរអំបិល",
                        "District": "0106",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01060500",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010605"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060501",
                                "Description": "Saesen",
                                "LocalDescription": "សែសិន",
                                "Commune": "010605"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060502",
                                "Description": "Kourothan",
                                "LocalDescription": "គោរដ្ឋាន",
                                "Commune": "010605"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060503",
                                "Description": "Roung Masin",
                                "LocalDescription": "រោងម៉ាស៊ីន",
                                "Commune": "010605"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060504",
                                "Description": "Prohut",
                                "LocalDescription": "ព្រហូត",
                                "Commune": "010605"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060505",
                                "Description": "Ou Ambel",
                                "LocalDescription": "អូរអំបិល",
                                "Commune": "010605"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010606",
                        "Description": "Phniet",
                        "LocalDescription": "ភ្នៀត",
                        "District": "0106",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01060600",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010606"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060601",
                                "Description": "Kantuot",
                                "LocalDescription": "កន្ទួត",
                                "Commune": "010606"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060602",
                                "Description": "Kampring",
                                "LocalDescription": "កំព្រីង",
                                "Commune": "010606"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060603",
                                "Description": "Phniet",
                                "LocalDescription": "ភ្នៀត",
                                "Commune": "010606"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060604",
                                "Description": "Neak Ta",
                                "LocalDescription": "អ្នកតា",
                                "Commune": "010606"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060605",
                                "Description": "Phum Thmei",
                                "LocalDescription": "ភូមិថ្មី",
                                "Commune": "010606"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060606",
                                "Description": "Bangruh",
                                "LocalDescription": "បង្រុះ",
                                "Commune": "010606"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060607",
                                "Description": "Sala Krau",
                                "LocalDescription": "សាលាក្រៅ",
                                "Commune": "010606"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010607",
                        "Description": "Preah Ponlea",
                        "LocalDescription": "ព្រះពន្លា",
                        "District": "0106",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01060700",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010607"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060701",
                                "Description": "Chak",
                                "LocalDescription": "ចក",
                                "Commune": "010607"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060702",
                                "Description": "Phum Muoy",
                                "LocalDescription": "ភូមិ ១",
                                "Commune": "010607"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060703",
                                "Description": "Phum Bei",
                                "LocalDescription": "ភូមិ ៣",
                                "Commune": "010607"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060704",
                                "Description": "Phum Buon",
                                "LocalDescription": "ភូមិ ៤",
                                "Commune": "010607"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060705",
                                "Description": "Prey Ruessei",
                                "LocalDescription": "ព្រៃឫស្សី",
                                "Commune": "010607"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060706",
                                "Description": "Preah Ponlea",
                                "LocalDescription": "ព្រះពន្លា",
                                "Commune": "010607"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060707",
                                "Description": "Kbal Spean",
                                "LocalDescription": "ក្បាលស្ពាន",
                                "Commune": "010607"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010608",
                        "Description": "Tuek Thla",
                        "LocalDescription": "ទឹកថ្លា",
                        "District": "0106",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01060800",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010608"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060801",
                                "Description": "Keab",
                                "LocalDescription": "គាប",
                                "Commune": "010608"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060802",
                                "Description": "Tumnob Chrey",
                                "LocalDescription": "ទំនប់ជ្រៃ",
                                "Commune": "010608"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060803",
                                "Description": "Tuek Thla",
                                "LocalDescription": "ទឹកថ្លា",
                                "Commune": "010608"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060805",
                                "Description": "Phnum Bak",
                                "LocalDescription": "ភ្នំបាក់",
                                "Commune": "010608"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060806",
                                "Description": "Dei Lou",
                                "LocalDescription": "ដីឡូតិ៍",
                                "Commune": "010608"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01060807",
                                "Description": "Banoy",
                                "LocalDescription": "បាណយ",
                                "Commune": "010608"
                            }
                        ]
                    }
                ]
            },
            {
                "Branch": "HO",
                "ID": "0107",
                "Description": "Thma Puok",
                "LocalDescription": "ថ្មពួក",
                "Province": "01",
                "communes": [
                    {
                        "Branch": "HO",
                        "ID": "010701",
                        "Description": "Banteay Chhmar",
                        "LocalDescription": "បន្ទាយឆ្មារ",
                        "District": "0107",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01070100",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070101",
                                "Description": "Kouk Samraong",
                                "LocalDescription": "គោកសំរោង",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070102",
                                "Description": "Kbal Tonsaong",
                                "LocalDescription": "ក្បាលទន្សោង",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070103",
                                "Description": "Banteay Chhmar Cheung",
                                "LocalDescription": "បន្ទាយឆ្មារជើង",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070105",
                                "Description": "Kbal Krabei",
                                "LocalDescription": "ក្បាលក្របី",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070106",
                                "Description": "Banteay Chhmar Tboung",
                                "LocalDescription": "បន្ទាយឆ្មារត្បូង",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070107",
                                "Description": "Banteay Chhmar Lech",
                                "LocalDescription": "បន្ទាយឆ្មារលិច",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070108",
                                "Description": "Thma Daekkeh",
                                "LocalDescription": "ថ្មដែកកេះ",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070109",
                                "Description": "Thlok",
                                "LocalDescription": "ធ្លក",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070110",
                                "Description": "Kouk Samraong Kaeut",
                                "LocalDescription": "គោកសំរោងកើត",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070111",
                                "Description": "Srah Chrey",
                                "LocalDescription": "ស្រះជ្រៃ",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070112",
                                "Description": "Dang Reaek",
                                "LocalDescription": "ដងរ៉ែក",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070113",
                                "Description": "Prasat Tbaeng",
                                "LocalDescription": "ប្រាសាទត្បែង",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070114",
                                "Description": "Prey Sangha",
                                "LocalDescription": "ព្រៃសង្ហា",
                                "Commune": "010701"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070115",
                                "Description": "Trapeang Thlok",
                                "LocalDescription": "ត្រពាំងធ្លក",
                                "Commune": "010701"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010702",
                        "Description": "Kouk Romiet",
                        "LocalDescription": "គោករមៀត",
                        "District": "0107",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01070200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070201",
                                "Description": "Kouk Prech",
                                "LocalDescription": "គោកព្រេច",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070202",
                                "Description": "Srae L'a",
                                "LocalDescription": "ស្រែល្អ",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070203",
                                "Description": "Kouk Romiet",
                                "LocalDescription": "គោករមៀត",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070204",
                                "Description": "Sdau",
                                "LocalDescription": "ស្ដៅ",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070205",
                                "Description": "Thmei",
                                "LocalDescription": "ថ្មី",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070206",
                                "Description": "Ta Lei",
                                "LocalDescription": "តាឡី",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070207",
                                "Description": "Sereika",
                                "LocalDescription": "សេរីកា",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070208",
                                "Description": "Ta Song",
                                "LocalDescription": "តាសុង",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070209",
                                "Description": "Trapeang Samraong",
                                "LocalDescription": "ត្រពាំងសំរោង",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070210",
                                "Description": "Thnal Bambaek",
                                "LocalDescription": "ថ្នល់បំបែក",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070211",
                                "Description": "Thma Chhatr",
                                "LocalDescription": "ថ្មឆ័ត្រ",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070212",
                                "Description": "Voa Preng",
                                "LocalDescription": "វល្លិប្រេង",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070213",
                                "Description": "Pram Minea",
                                "LocalDescription": "ប្រាំមីនា",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070214",
                                "Description": "Sameakki",
                                "LocalDescription": "សាមគ្គី",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070215",
                                "Description": "Banteay Mean Rit",
                                "LocalDescription": "បន្ទាយមានឬទ្ធិ",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070217",
                                "Description": "Spean",
                                "LocalDescription": "ស្ពាន",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070218",
                                "Description": "Kandaol",
                                "LocalDescription": "កណ្ដោល",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070219",
                                "Description": "Kdeb Thma",
                                "LocalDescription": "ក្ដិបថ្ម",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070220",
                                "Description": "Boeng Ta Srei",
                                "LocalDescription": "បឹងតាស្រី",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070221",
                                "Description": "Boeng Sokram",
                                "LocalDescription": "បឹងសុក្រម",
                                "Commune": "010702"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070222",
                                "Description": "Ta Mang",
                                "LocalDescription": "តាម៉ាំង",
                                "Commune": "010702"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010703",
                        "Description": "Phum Thmei",
                        "LocalDescription": "ភូមិថ្មី",
                        "District": "0107",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01070300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010703"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070301",
                                "Description": "Kab Chaor",
                                "LocalDescription": "កាប់ចោរ",
                                "Commune": "010703"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070302",
                                "Description": "Kouk Svay",
                                "LocalDescription": "គោកស្វាយ",
                                "Commune": "010703"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070303",
                                "Description": "Rolum Chrey",
                                "LocalDescription": "រលំជ្រៃ",
                                "Commune": "010703"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070304",
                                "Description": "Thmei Khang Lech",
                                "LocalDescription": "ថ្មីខាងលិច",
                                "Commune": "010703"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070305",
                                "Description": "Thmei Kandal",
                                "LocalDescription": "ថ្មីកណ្ដាល",
                                "Commune": "010703"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070306",
                                "Description": "Thmei Khang Tboung",
                                "LocalDescription": "ថ្មីខាងត្បូង",
                                "Commune": "010703"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070307",
                                "Description": "Totea",
                                "LocalDescription": "ទទា",
                                "Commune": "010703"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010704",
                        "Description": "Thma Puok",
                        "LocalDescription": "ថ្មពួក",
                        "District": "0107",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01070400",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010704"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070401",
                                "Description": "Thma Puok",
                                "LocalDescription": "ថ្មពួក",
                                "Commune": "010704"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070402",
                                "Description": "Neak Ta",
                                "LocalDescription": "អ្នកតា",
                                "Commune": "010704"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070403",
                                "Description": "Voat Chas",
                                "LocalDescription": "វត្ដចាស់",
                                "Commune": "010704"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070404",
                                "Description": "Kasen",
                                "LocalDescription": "កសិណ",
                                "Commune": "010704"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070405",
                                "Description": "Svay",
                                "LocalDescription": "ស្វាយ",
                                "Commune": "010704"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070406",
                                "Description": "Thnal Dach",
                                "LocalDescription": "ថ្នល់ដាច់",
                                "Commune": "010704"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070407",
                                "Description": "Anlong Trach",
                                "LocalDescription": "អន្លង់ត្រាច",
                                "Commune": "010704"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010705",
                        "Description": "Kouk Kakthen",
                        "LocalDescription": "គោកកឋិន",
                        "District": "0107",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01070500",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010705"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070501",
                                "Description": "Deu",
                                "LocalDescription": "ដឺ",
                                "Commune": "010705"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070502",
                                "Description": "Sdau",
                                "LocalDescription": "ស្ដៅ",
                                "Commune": "010705"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070503",
                                "Description": "Treas",
                                "LocalDescription": "ទ្រាស",
                                "Commune": "010705"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070504",
                                "Description": "Kouk Kakthen",
                                "LocalDescription": "គោកកឋិន",
                                "Commune": "010705"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070505",
                                "Description": "Ta Siev",
                                "LocalDescription": "តាសៀវ",
                                "Commune": "010705"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070506",
                                "Description": "Chonloas Dai",
                                "LocalDescription": "ជន្លាសដៃ",
                                "Commune": "010705"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070507",
                                "Description": "Ta Trai",
                                "LocalDescription": "តាត្រៃ",
                                "Commune": "010705"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070508",
                                "Description": "Preah Chhor",
                                "LocalDescription": "ព្រះឈរ",
                                "Commune": "010705"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070509",
                                "Description": "Kouk Kpos",
                                "LocalDescription": "គោកខ្ពស់",
                                "Commune": "010705"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010706",
                        "Description": "Kumru",
                        "LocalDescription": "គំរូ",
                        "District": "0107",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01070600",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010706"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070601",
                                "Description": "Andoung Khlong",
                                "LocalDescription": "អណ្ដូងខ្លុង",
                                "Commune": "010706"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070602",
                                "Description": "Kumru",
                                "LocalDescription": "គំរូ",
                                "Commune": "010706"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070603",
                                "Description": "Ta Yueng",
                                "LocalDescription": "តាយឹង",
                                "Commune": "010706"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070605",
                                "Description": "Aekakpheap",
                                "LocalDescription": "ឯកភាព",
                                "Commune": "010706"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070606",
                                "Description": "Phsar Thmei",
                                "LocalDescription": "ផ្សារថ្មី",
                                "Commune": "010706"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070607",
                                "Description": "Svay Chrum",
                                "LocalDescription": "ស្វាយជ្រុំ",
                                "Commune": "010706"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01070608",
                                "Description": "Prey Veaeng",
                                "LocalDescription": "ព្រៃវែង",
                                "Commune": "010706"
                            }
                        ]
                    }
                ]
            },
            {
                "Branch": "HO",
                "ID": "0108",
                "Description": "Svay Chek",
                "LocalDescription": "ស្វាយចេក",
                "Province": "01",
                "communes": [
                    {
                        "Branch": "HO",
                        "ID": "010801",
                        "Description": "Phkoam",
                        "LocalDescription": "ផ្គាំ",
                        "District": "0108",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01080100",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080101",
                                "Description": "Phkoam",
                                "LocalDescription": "ផ្គាំ",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080102",
                                "Description": "Yeang Vien",
                                "LocalDescription": "យាងវៀន",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080103",
                                "Description": "Yeang",
                                "LocalDescription": "យាង",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080104",
                                "Description": "Ampil",
                                "LocalDescription": "អំពិល",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080105",
                                "Description": "Ou",
                                "LocalDescription": "អូរ",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080106",
                                "Description": "Prasat Vien",
                                "LocalDescription": "ប្រាសាទវៀន",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080107",
                                "Description": "Ta Duol",
                                "LocalDescription": "តាដួល",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080108",
                                "Description": "Svay Sa",
                                "LocalDescription": "ស្វាយស",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080109",
                                "Description": "Mau",
                                "LocalDescription": "ម៉ៅ",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080110",
                                "Description": "Thma Koul",
                                "LocalDescription": "ថ្មគោល",
                                "Commune": "010801"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080111",
                                "Description": "Ta Koal",
                                "LocalDescription": "តាគល់",
                                "Commune": "010801"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010802",
                        "Description": "Sarongk",
                        "LocalDescription": "សារង្គ",
                        "District": "0108",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01080200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010802"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080201",
                                "Description": "Pheas Tboung",
                                "LocalDescription": "ភាសត្បូង",
                                "Commune": "010802"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080202",
                                "Description": "Pheas Cheung",
                                "LocalDescription": "ភាសជើង",
                                "Commune": "010802"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080203",
                                "Description": "Chrung",
                                "LocalDescription": "ជ្រុង",
                                "Commune": "010802"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080204",
                                "Description": "Phlas Kang",
                                "LocalDescription": "ផ្លាស់កង់",
                                "Commune": "010802"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080205",
                                "Description": "Kouk Phlu",
                                "LocalDescription": "គោកភ្លូ",
                                "Commune": "010802"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080206",
                                "Description": "Kantrong",
                                "LocalDescription": "កន្ទ្រង់",
                                "Commune": "010802"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010803",
                        "Description": "Sla Kram",
                        "LocalDescription": "ស្លក្រាម",
                        "District": "0108",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01080300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080301",
                                "Description": "Sla Kram",
                                "LocalDescription": "ស្លក្រាម",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080302",
                                "Description": "Kakaoh",
                                "LocalDescription": "កកោះ",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080303",
                                "Description": "Kamnab",
                                "LocalDescription": "កំណប់",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080304",
                                "Description": "Toap Siem",
                                "LocalDescription": "ទ័ពសៀម",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080305",
                                "Description": "Khlaeng Poar Cheung",
                                "LocalDescription": "ខ្លែងពណ៌ជើង",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080306",
                                "Description": "Prasat",
                                "LocalDescription": "ប្រាសាទ",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080307",
                                "Description": "Kouk Ampil",
                                "LocalDescription": "គោកអំពិល",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080308",
                                "Description": "Khlaeng Poar Tboung",
                                "LocalDescription": "ខ្លែងពណ៌ត្បូង",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080309",
                                "Description": "Boeng Snao",
                                "LocalDescription": "បឹងស្នោ",
                                "Commune": "010803"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080310",
                                "Description": "Chak Puork",
                                "LocalDescription": "ចក់ ពួក",
                                "Commune": "010803"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010804",
                        "Description": "Svay Chek",
                        "LocalDescription": "ស្វាយចេក",
                        "District": "0108",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01080400",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080401",
                                "Description": "Kouk Khvav",
                                "LocalDescription": "គោកខ្វាវ",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080402",
                                "Description": "Ponsay Cheung",
                                "LocalDescription": "ពន្សាយជើង",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080403",
                                "Description": "Kloeng",
                                "LocalDescription": "ក្លឹង",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080404",
                                "Description": "Baek Chan Chas",
                                "LocalDescription": "បែកចានចាស់",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080405",
                                "Description": "Ponsay Tboung",
                                "LocalDescription": "ពន្សាយត្បូង",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080406",
                                "Description": "Roka Thmei",
                                "LocalDescription": "រកាថ្មី",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080407",
                                "Description": "Ta Ong Lech",
                                "LocalDescription": "តាអុងលិច",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080408",
                                "Description": "Slaeng",
                                "LocalDescription": "ស្លែង",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080409",
                                "Description": "Thmei",
                                "LocalDescription": "ថ្មី",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080410",
                                "Description": "Khvav Lech",
                                "LocalDescription": "ខ្វាវលិច",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080411",
                                "Description": "Samraong",
                                "LocalDescription": "សំរោង",
                                "Commune": "010804"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080412",
                                "Description": "Chamkar Ko",
                                "LocalDescription": "ចំការគ",
                                "Commune": "010804"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010805",
                        "Description": "Ta Baen",
                        "LocalDescription": "តាបែន",
                        "District": "0108",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01080500",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010805"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080501",
                                "Description": "Kouk Ta Aek",
                                "LocalDescription": "គោកតាឯក",
                                "Commune": "010805"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080502",
                                "Description": "Ou Veaeng Cheung",
                                "LocalDescription": "អូរវែងជើង",
                                "Commune": "010805"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080503",
                                "Description": "Ta Baen",
                                "LocalDescription": "តាបែន",
                                "Commune": "010805"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080504",
                                "Description": "Kouk Roka",
                                "LocalDescription": "គោករកា",
                                "Commune": "010805"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080505",
                                "Description": "Ou Veaeng Tboung",
                                "LocalDescription": "អូរវែងត្បូង",
                                "Commune": "010805"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010806",
                        "Description": "Ta Phou",
                        "LocalDescription": "តាផូ",
                        "District": "0108",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01080600",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080601",
                                "Description": "Ta Phou",
                                "LocalDescription": "តាផូ",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080602",
                                "Description": "Pongro",
                                "LocalDescription": "ពង្រ",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080603",
                                "Description": "Ta Srei",
                                "LocalDescription": "តាស្រី",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080604",
                                "Description": "Prech Kei",
                                "LocalDescription": "ព្រេចកី",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080605",
                                "Description": "Kouk Kei",
                                "LocalDescription": "គោកកី",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080606",
                                "Description": "Khmoas",
                                "LocalDescription": "ឃ្មាស់",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080607",
                                "Description": "Thmei",
                                "LocalDescription": "ថ្មី",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080608",
                                "Description": "Baray",
                                "LocalDescription": "បារាយណ៍",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080609",
                                "Description": "Phchoek",
                                "LocalDescription": "ផ្ចឹក",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080610",
                                "Description": "Prech Tboung",
                                "LocalDescription": "ព្រេចត្បូង",
                                "Commune": "010806"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080611",
                                "Description": "Bantoat Baoh",
                                "LocalDescription": "បន្ទាត់បោះ",
                                "Commune": "010806"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010807",
                        "Description": "Treas",
                        "LocalDescription": "ទ្រាស",
                        "District": "0108",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01080700",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010807"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080701",
                                "Description": "Ponley Thmei",
                                "LocalDescription": "ពន្លៃថ្មី",
                                "Commune": "010807"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080702",
                                "Description": "Chaeng",
                                "LocalDescription": "ចែង",
                                "Commune": "010807"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080703",
                                "Description": "Doun Nouy",
                                "LocalDescription": "ដូនណូយ",
                                "Commune": "010807"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080704",
                                "Description": "Prei",
                                "LocalDescription": "ប្រីយ៍",
                                "Commune": "010807"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080705",
                                "Description": "Ponley Chas",
                                "LocalDescription": "ពន្លៃចាស់",
                                "Commune": "010807"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080706",
                                "Description": "Treas",
                                "LocalDescription": "ទ្រាស",
                                "Commune": "010807"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080707",
                                "Description": "Ampil Prong",
                                "LocalDescription": "អំពិលព្រង់",
                                "Commune": "010807"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080708",
                                "Description": "Ou Kakaoh",
                                "LocalDescription": "អូរកកោះ",
                                "Commune": "010807"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080709",
                                "Description": "Ta Voek",
                                "LocalDescription": "តាវឹក",
                                "Commune": "010807"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010808",
                        "Description": "Roluos",
                        "LocalDescription": "រលួស",
                        "District": "0108",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01080800",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010808"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080801",
                                "Description": "Baek Chan Thmei",
                                "LocalDescription": "បែកចានថ្មី",
                                "Commune": "010808"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080802",
                                "Description": "Khvav Kaeut",
                                "LocalDescription": "ខ្វាវកើត",
                                "Commune": "010808"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080803",
                                "Description": "Stueng",
                                "LocalDescription": "ស្ទឹង",
                                "Commune": "010808"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080804",
                                "Description": "Ta Ong Kaeut",
                                "LocalDescription": "តាអុងកើត",
                                "Commune": "010808"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080805",
                                "Description": "Slaeng",
                                "LocalDescription": "ស្លែង",
                                "Commune": "010808"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080806",
                                "Description": "Roluos",
                                "LocalDescription": "រលួស",
                                "Commune": "010808"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01080807",
                                "Description": "Ta Sman",
                                "LocalDescription": "តាស្មន់",
                                "Commune": "010808"
                            }
                        ]
                    }
                ]
            },
            {
                "Branch": "HO",
                "ID": "0109",
                "Description": "Malai",
                "LocalDescription": "ម៉ាឡៃ",
                "Province": "01",
                "communes": [
                    {
                        "Branch": "HO",
                        "ID": "010901",
                        "Description": "Boeng Beng",
                        "LocalDescription": "បឹងបេង",
                        "District": "0109",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01090100",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010901"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090101",
                                "Description": "Sangkae",
                                "LocalDescription": "សង្កែ",
                                "Commune": "010901"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090102",
                                "Description": "Pnum Roung",
                                "LocalDescription": "ភ្នំរូង",
                                "Commune": "010901"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090103",
                                "Description": "Chrey",
                                "LocalDescription": "ជ្រៃ",
                                "Commune": "010901"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090104",
                                "Description": "Lvea",
                                "LocalDescription": "ល្វា",
                                "Commune": "010901"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090105",
                                "Description": "Chambak",
                                "LocalDescription": "ចំបក់",
                                "Commune": "010901"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090106",
                                "Description": "Thmar Baing",
                                "LocalDescription": "ថ្មបាំង",
                                "Commune": "010901"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090107",
                                "Description": "Ou Kach",
                                "LocalDescription": "អូរកាច់",
                                "Commune": "010901"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010902",
                        "Description": "Malai",
                        "LocalDescription": "ម៉ាឡៃ",
                        "District": "0109",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01090200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010902"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090201",
                                "Description": "Doung",
                                "LocalDescription": "ដូង",
                                "Commune": "010902"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090202",
                                "Description": "Veal Hat",
                                "LocalDescription": "វាលហាត់",
                                "Commune": "010902"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090203",
                                "Description": "Kandal",
                                "LocalDescription": "កណ្ដាល",
                                "Commune": "010902"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090204",
                                "Description": "Kbal Spean",
                                "LocalDescription": "ក្បាលស្ពាន",
                                "Commune": "010902"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090205",
                                "Description": "Trasek Chrum",
                                "LocalDescription": "ត្រសេកជ្រុំ",
                                "Commune": "010902"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090206",
                                "Description": "Dambouk Vil",
                                "LocalDescription": "ដំបូកវិល",
                                "Commune": "010902"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090207",
                                "Description": "Voat Chas",
                                "LocalDescription": "វត្ដចាស់",
                                "Commune": "010902"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090208",
                                "Description": "Thmei",
                                "LocalDescription": "ថ្មី",
                                "Commune": "010902"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010903",
                        "Description": "Ou Sampoar",
                        "LocalDescription": "អូរសំព័រ",
                        "District": "0109",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01090300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010903"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090301",
                                "Description": "Ou Sampoar",
                                "LocalDescription": "អូរសំព័រ",
                                "Commune": "010903"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090302",
                                "Description": "Ou S'am",
                                "LocalDescription": "អូរស្អំ",
                                "Commune": "010903"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090303",
                                "Description": "Kbal Tumnob",
                                "LocalDescription": "ក្បាលទំនប់",
                                "Commune": "010903"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090304",
                                "Description": "Banteay Ti Pir",
                                "LocalDescription": "បន្ទាយទី២",
                                "Commune": "010903"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010904",
                        "Description": "Ou Sralau",
                        "LocalDescription": "អូរស្រឡៅ",
                        "District": "0109",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01090400",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010904"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090401",
                                "Description": "Ou Sralau",
                                "LocalDescription": "អូរស្រឡៅ",
                                "Commune": "010904"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090402",
                                "Description": "Phnum Kaubei",
                                "LocalDescription": "ភ្នំកៅបី",
                                "Commune": "010904"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090403",
                                "Description": "Kandaol",
                                "LocalDescription": "កណ្ដោល",
                                "Commune": "010904"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090404",
                                "Description": "Chheu Teal",
                                "LocalDescription": "ឈើទាល",
                                "Commune": "010904"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090405",
                                "Description": "Bueng Reang",
                                "LocalDescription": "បឹងរាំង",
                                "Commune": "010904"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090406",
                                "Description": "Svay Prey",
                                "LocalDescription": "ស្វាយព្រៃ",
                                "Commune": "010904"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090407",
                                "Description": "Chan Kiri",
                                "LocalDescription": "ចាន់គីរី",
                                "Commune": "010904"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090408",
                                "Description": "Thmei",
                                "LocalDescription": "ថ្មី",
                                "Commune": "010904"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010905",
                        "Description": "Tuol Pongro",
                        "LocalDescription": "ទួលពង្រ",
                        "District": "0109",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01090500",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090501",
                                "Description": "Tuol Pongro",
                                "LocalDescription": "ទួលពង្រ",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090502",
                                "Description": "Kaoh Snuol",
                                "LocalDescription": "កោះស្នួល",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090503",
                                "Description": "Khla Ngoab",
                                "LocalDescription": "ខ្លាងាប់",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090504",
                                "Description": "Banteay Ti Muoy",
                                "LocalDescription": "បន្ទាយទី១",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090505",
                                "Description": "Santepheap",
                                "LocalDescription": "សន្ដិភាព",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090506",
                                "Description": "Ou Ampil",
                                "LocalDescription": "អូរអំពិល",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090507",
                                "Description": "Reaksmei Meanchey",
                                "LocalDescription": "រស្មីមានជ័យ",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090508",
                                "Description": "Akphivat",
                                "LocalDescription": "អភិវឌ្ឍន៌",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090509",
                                "Description": "Toul Prasat",
                                "LocalDescription": "ទួលប្រាសាទ",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090510",
                                "Description": "Sralau Chrum",
                                "LocalDescription": "ស្រឡៅជ្រុំ",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090511",
                                "Description": "Boeng Chhouk",
                                "LocalDescription": "បឹងឈូក",
                                "Commune": "010905"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090512",
                                "Description": "Ou Kes",
                                "LocalDescription": "អូរកេស",
                                "Commune": "010905"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "010906",
                        "Description": "Ta Kong",
                        "LocalDescription": "តាគង់",
                        "District": "0109",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01090600",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "010906"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090601",
                                "Description": "Chaeng Maeng",
                                "LocalDescription": "ចែងម៉ែង",
                                "Commune": "010906"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090602",
                                "Description": "Ballangk",
                                "LocalDescription": "បល្ល័ង្គ",
                                "Commune": "010906"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090603",
                                "Description": "Paoy Angkor",
                                "LocalDescription": "ប៉ោយអង្គរ",
                                "Commune": "010906"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090604",
                                "Description": "Srah Phluoh",
                                "LocalDescription": "ស្រះភ្លោះ",
                                "Commune": "010906"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090605",
                                "Description": "Kcheay",
                                "LocalDescription": "ខ្ជាយ",
                                "Commune": "010906"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01090606",
                                "Description": "Ta Kong",
                                "LocalDescription": "តាគង់",
                                "Commune": "010906"
                            }
                        ]
                    }
                ]
            },
            {
                "Branch": "HO",
                "ID": "0110",
                "Description": "Paoy Paet",
                "LocalDescription": "ប៉ោយប៉ែត",
                "Province": "01",
                "communes": [
                    {
                        "Branch": "HO",
                        "ID": "011001",
                        "Description": "Nimitt",
                        "LocalDescription": "និមិត្ដ",
                        "District": "0110",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01100100",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100101",
                                "Description": "Nimitt Muoy",
                                "LocalDescription": "និមិត្ដ ១",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100102",
                                "Description": "Nimitt Pir",
                                "LocalDescription": "និមិត្ដ ២",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100103",
                                "Description": "Nimitt Bei",
                                "LocalDescription": "និមិត្ដ ៣",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100104",
                                "Description": "Nimitt Buon",
                                "LocalDescription": "និមិត្ដ ៤",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100105",
                                "Description": "Ou Chrov",
                                "LocalDescription": "អូរជ្រៅ",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100106",
                                "Description": "Dong Aranh",
                                "LocalDescription": "ដុងអារញ្ញ",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100107",
                                "Description": "Souriya",
                                "LocalDescription": "សូរិយា",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100108",
                                "Description": "Nimitt Thmei",
                                "LocalDescription": "និមិត្ដថ្មី",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100110",
                                "Description": "Thma Sen",
                                "LocalDescription": "ថ្មសិន",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100111",
                                "Description": "Anlong Svay",
                                "LocalDescription": "អន្លង់ស្វាយ",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100112",
                                "Description": "Koun Damrei",
                                "LocalDescription": "កូនដំរី",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100113",
                                "Description": "Koub Thum",
                                "LocalDescription": "កូបធំ",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100114",
                                "Description": "Reaksmei Sameakki",
                                "LocalDescription": "រស្មីសាមគ្គី",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100115",
                                "Description": "Reaksmei Serei Pheap",
                                "LocalDescription": "រស្មីសេរីភាព",
                                "Commune": "011001"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100116",
                                "Description": "Sokhsan",
                                "LocalDescription": "សុខសាន្ដ្ដ",
                                "Commune": "011001"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "011002",
                        "Description": "Paoy Paet",
                        "LocalDescription": "ប៉ោយប៉ែត",
                        "District": "0110",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01100200",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "011002"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100202",
                                "Description": "Baliley 1",
                                "LocalDescription": "បាលិលេយ្យ១",
                                "Commune": "011002"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100209",
                                "Description": "Tuol Prasat",
                                "LocalDescription": "ទួលប្រាសាទ",
                                "Commune": "011002"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100218",
                                "Description": "Baliley 2",
                                "LocalDescription": "បាលិលេយ្យ២",
                                "Commune": "011002"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100219",
                                "Description": "Mittapheap",
                                "LocalDescription": "មិត្តភាព",
                                "Commune": "011002"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100220",
                                "Description": "Chan Kiri",
                                "LocalDescription": "ចាន់គីរី",
                                "Commune": "011002"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100223",
                                "Description": "Tumnob Kor 5",
                                "LocalDescription": "ទំនប់ក៥",
                                "Commune": "011002"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "011003",
                        "Description": "Phsar Kandal",
                        "LocalDescription": "ផ្សារកណ្តាល",
                        "District": "0110",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01100300",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "011003"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100301",
                                "Description": "Phsar Kandal",
                                "LocalDescription": "ផ្សារកណ្តាល",
                                "Commune": "011003"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100302",
                                "Description": "Kilou Lekh Buon",
                                "LocalDescription": "គីឡូលេខបួន",
                                "Commune": "011003"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100303",
                                "Description": "Prachear Thoam Lech",
                                "LocalDescription": "ប្រជាធម្មលិច",
                                "Commune": "011003"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100309",
                                "Description": "Andoung Thma Meas",
                                "LocalDescription": "អណ្ដូងថ្មមាស",
                                "Commune": "011003"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100310",
                                "Description": "Stueng Bat",
                                "LocalDescription": "ស្ទឹងបត់",
                                "Commune": "011003"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "011004",
                        "Description": "Ou Chrov",
                        "LocalDescription": "អូរជ្រៅ",
                        "District": "0110",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01100400",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "011004"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100401",
                                "Description": "Ou Chrov",
                                "LocalDescription": "អូរជ្រៅ",
                                "Commune": "011004"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100402",
                                "Description": "Kbal Koh",
                                "LocalDescription": "ក្បាលកោះ",
                                "Commune": "011004"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100403",
                                "Description": "Kbal Spean 1",
                                "LocalDescription": "ក្បាលស្ពាន១",
                                "Commune": "011004"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100404",
                                "Description": "Kbal Spean 2",
                                "LocalDescription": "ក្បាលស្ពាន២",
                                "Commune": "011004"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100405",
                                "Description": "Samaki Mean Chey",
                                "LocalDescription": "សាមគ្គីមានជ័យ",
                                "Commune": "011004"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100406",
                                "Description": "Prey Prech",
                                "LocalDescription": "ព្រៃព្រិច",
                                "Commune": "011004"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100407",
                                "Description": "Paoy Paet",
                                "LocalDescription": "ប៉ោយប៉ែត",
                                "Commune": "011004"
                            }
                        ]
                    },
                    {
                        "Branch": "HO",
                        "ID": "011005",
                        "Description": "Ou Reusey",
                        "LocalDescription": "អូរឫស្សី",
                        "District": "0110",
                        "villages": [
                            {
                                "Branch": "HO",
                                "ID": "01100500",
                                "Description": "Other",
                                "LocalDescription": "ផ្សេងៗ",
                                "Commune": "011005"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100501",
                                "Description": "Ou Ruessei",
                                "LocalDescription": "អូរឬស្សី",
                                "Commune": "011005"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100502",
                                "Description": "Prachea Thorm Kaeut",
                                "LocalDescription": "ប្រជាធម្មកើត",
                                "Commune": "011005"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100503",
                                "Description": "Tuol Pongro",
                                "LocalDescription": "ទួលពង្រ",
                                "Commune": "011005"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100504",
                                "Description": "Ou Neang",
                                "LocalDescription": "អូរនាង",
                                "Commune": "011005"
                            },
                            {
                                "Branch": "HO",
                                "ID": "01100505",
                                "Description": "Prey Kub",
                                "LocalDescription": "ព្រៃគុប",
                                "Commune": "011005"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
*/
//write function get data from api end and export in to use other file
export const fetchAllCazetteer = () => api.get('/cazetteer/all-cazetteer-data');