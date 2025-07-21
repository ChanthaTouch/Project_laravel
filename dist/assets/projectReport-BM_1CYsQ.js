import{_ as b,e as A,c as h,a as e,H as S,$ as k,F as u,z as g,j as v,C as x,y as D,o as y,A as n}from"./index-dI1uNq6t.js";const _={props:{data(){return{selecteModules:"",statusFilter:"",salaryRange:"",dateRange:"",overviewSelecteModulesselecteModules:"",selectedStaffId:null,selectedStaff:{}}},leaveStaffData:{type:Array,default:()=>[{requestBy:"CHEA Udom",type:"Annual Leave",period:"1",fromDate:"2025-01-06",toDate:"2025-01-06",remainingBalance:"1 Days",balanceUsage:"1 Days",reason:"Busy at province",responsibilities:"MEAN Dara",checkBy:"MEAN Dara",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-08",toDate:"2025-01-08",remainingBalance:"0 Days",balanceUsage:"1 Days",reason:"I have feeling not well.",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-08",toDate:"2025-01-08",remainingBalance:"-0.5 Days",balanceUsage:"1 Days",reason:"Sick",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-15",toDate:"2025-01-15",remainingBalance:"1 Days",balanceUsage:"1.5 Days",reason:"Feeling not well",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"OUK Vyta",type:"Annual Leave",period:"1",fromDate:"2025-01-17",toDate:"2025-01-17",remainingBalance:"0 Days",balanceUsage:"1 Days",reason:"Go to wedding sister",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"CHEA Udom",type:"Annual Leave",period:"0.5",fromDate:"2025-01-17",toDate:"2025-01-17",remainingBalance:"0.5 Days",balanceUsage:"1.5 Days",reason:"Busy at home",responsibilities:"MEAN Dara",checkBy:"MEAN Dara",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"OUK Vyta",type:"Annual Leave",period:"1",fromDate:"2025-01-20",toDate:"2025-01-20",remainingBalance:"-1 Days",balanceUsage:"2 Days",reason:"Busy at province",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"LY Chaiheag",type:"Annual Leave",period:"1",fromDate:"2025-01-20",toDate:"2025-01-20",remainingBalance:"8 Days",balanceUsage:"1 Days",reason:" Feeling down, No feeling to work ",responsibilities:"MEAN Dara",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"OUK Vyta",type:"Annual Leave",period:"0.5",fromDate:"2025-01-23",toDate:"2025-01-23",remainingBalance:"-1.5 Days",balanceUsage:"2.5 Days",reason:"I am not well",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-24",toDate:"2025-01-24",remainingBalance:"1.5 Days",balanceUsage:"2 Days",reason:"Due personal issues",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-27",toDate:"2025-01-27",remainingBalance:"2 Days",balanceUsage:"3.5 Days",reason:"due personal issues at province",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{requestBy:"CHEA Nita",type:"Annual Leave",period:"1",fromDate:"2025-01-28",toDate:"2025-01-28",remainingBalance:"3 Days",balanceUsage:"3.5 Days",reason:"Have event at provind",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0}]},timesheetData:{type:Array,default:()=>[{id:"S001",name:"Alice",project:"Highway Expansion",timesheet:"Filled",manager:"Manager A",photo:"",totalTime:"350.0"},{id:"S002",name:"Bob",project:"Commercial Complex",timesheet:"Pending",manager:"Manager B",photo:"",totalTime:"321.0"},{id:"S003",name:"Charlie",project:"Residential Tower",timesheet:"Filled",manager:"Manager C",photo:"",totalTime:"403.0"}]},recruitmentData:{type:Array,default:()=>[{name:"John Doe",position:"Software Engineer",project:"Recruitment",cpCode:"CP001",headOfDept:"Alice Brown",level:"Senior",grade:"G6",category:"Technical",directManager:"Bob Wilson",indirectManager:"Alice Brown",startDate:"2025-07-01",endDate:"2026-06-30",maxSalary:"80000",status:"Approved"},{name:"Jane Smith",position:"Project Manager",project:"Recruitment",cpCode:"CP002",headOfDept:"Emma Davis",level:"Mid",grade:"G5",category:"Administrative",directManager:"David Lee",indirectManager:"Emma Davis",startDate:"2025-07-09",endDate:"2030-10-10",maxSalary:"5000",status:"Approved"},{name:"Mike Johnson",position:"HR Specialist",project:"Recruitment",cpCode:"CP003",headOfDept:"Frank Miller",level:"Junior",grade:"G4",category:"HR",directManager:"",indirectManager:"Frank Miller",startDate:"",endDate:"",maxSalary:null,status:"Rejected"}]},adjustmentData:{type:Array,default:()=>[{id:"06605",name:"John Smith",position:"Engineer",level:"Senior",grade:"G6",category:"Technical",directManager:"John Doe",indirectManager:"Jane Smith",maxSalary:"50000",newStaff:!0,wageDay:"24000",wageWeek:"29000",increaseDate:"",stopDropOpt:"Active",startDate:"2025-07-06",fromProject:"",toProject:"",transferDate:"",endDate:"",other:"",status:"Approved",previousWageDay:"23000",previousWageWeek:"28000",adjustmentDate:"02:15 PM +07, Wednesday, July 09, 2025",adjustmentReason:"Manual Adjustment",lastUpdated:"02:15 PM +07, Wednesday, July 09, 2025",photo:"/src/image/construtor4.jpg",requestedBy:"John Smith",requestDate:"2025-07-02",checkedBy:"Jane Doe",checkDate:"2025-07-02",approvedBy:"Robert Brown",approveDate:"2025-07-09"},{id:"08539",name:"Alice Johnson",position:"Technician",level:"Mid",grade:"G5",category:"Technical",directManager:"Alice Brown",indirectManager:"",maxSalary:"40000",newStaff:!0,wageDay:"27000",wageWeek:"30000",increaseDate:"",stopDropOpt:"Pending",startDate:"2025-07-06",fromProject:"",toProject:"",transferDate:"",endDate:"",other:"",status:"Pending",previousWageDay:"26000",previousWageWeek:"29000",adjustmentDate:"",adjustmentReason:"",lastUpdated:"02:15 PM +07, Wednesday, July 09, 2025",photo:"/src/image/construtor1.jpg",requestedBy:"John Smith",requestDate:"2025-07-02",checkedBy:"Jane Doe",checkDate:"2025-07-02",approvedBy:"",approveDate:""},{id:"08591",name:"Robert Wilson",position:"Senior Engineer",level:"Senior",grade:"G7",category:"Technical",directManager:"Bob Wilson",indirectManager:"Carol White",maxSalary:"60000",newStaff:!0,wageDay:"40000",wageWeek:"45000",increaseDate:"",stopDropOpt:"Inactive",startDate:"2025-07-06",fromProject:"",toProject:"",transferDate:"",endDate:"",other:"",status:"Rejected",previousWageDay:"39000",previousWageWeek:"44000",adjustmentDate:"",adjustmentReason:"",lastUpdated:"02:15 PM +07, Wednesday, July 09, 2025",photo:"/src/image/construtor5.jpg",requestedBy:"John Smith",requestDate:"2025-07-02",checkedBy:"Jane Doe",checkDate:"2025-07-02",approvedBy:"",approveDate:""},{id:"08598",name:"Robert Wilson",position:"Engineer",level:"Senior",grade:"G7",category:"Technical",directManager:"Bob Wilson",indirectManager:"Carol White",maxSalary:"60000",newStaff:!0,wageDay:"60000",wageWeek:"55000",increaseDate:"",stopDropOpt:"Inactive",startDate:"2025-07-01",fromProject:"",toProject:"",transferDate:"",endDate:"",other:"",status:"Approved",previousWageDay:"39000",previousWageWeek:"44000",adjustmentDate:"02:15 PM +07, Wednesday, July 09, 2025",adjustmentReason:"Manual Adjustment",lastUpdated:"02:15 PM +07, Wednesday, July 09, 2025",photo:"/src/image/construtor2.jpg",requestedBy:"John Smith",requestDate:"2025-07-02",checkedBy:"Jane Doe",checkDate:"2025-07-02",approvedBy:"Robert Brown",approveDate:"2025-07-09"},{id:"08592",name:"Robert Wilson",position:"Engineer",level:"Senior",grade:"G7",category:"Technical",directManager:"Bob Wilson",indirectManager:"Carol White",maxSalary:"60000",newStaff:!0,wageDay:"60000",wageWeek:"55000",increaseDate:"",stopDropOpt:"Inactive",startDate:"2025-07-01",fromProject:"",toProject:"",transferDate:"",endDate:"",other:"",status:"Approved",previousWageDay:"39000",previousWageWeek:"44000",adjustmentDate:"02:15 PM +07, Wednesday, July 09, 2025",adjustmentReason:"Manual Adjustment",lastUpdated:"02:15 PM +07, Wednesday, July 09, 2025",photo:"/src/image/construtor3.jpg",requestedBy:"John Smith",requestDate:"2025-07-02",checkedBy:"Jane Doe",checkDate:"2025-07-02",approvedBy:"Robert Brown",approveDate:"2025-07-09"}]},attendanceData:{type:Array,default:()=>[{id:"S0001",name:"Muen Vannarith",gender:"Female",department:"Structural Engineerin",position:"Civil Engineer",scanIn:"12:59:24",scanOut:"18:44:45",leaveType:"Annual Leave",fromDate:"2025-06-02",shiftType:"AM",toDate:"2025-06-02",period:"0.5",remark:"Annual Leave"},{id:"S0002",name:"Sok Chetra",gender:"Female",department:"Structural Engineerin",position:"Structural Engineer",scanIn:"10:30:00",scanOut:"17:00:00",leaveType:"Annual Leave",fromDate:"2025-06-02",shiftType:"AM",toDate:"2025-06-02",period:"0.5",remark:"Annual Leave"},{id:"S0003",name:"Sam Sreyneang",gender:"Female",department:"Geotechnical Engineering",position:"Geotechnical Engineer",scanIn:"08:00:00",scanOut:"17:00:00",leaveType:"Annual Leave",fromDate:"2025-06-02",shiftType:"PM",toDate:"2025-06-02",period:"0.7",remark:"Annual Leave"},{id:"S0004",name:"Heng Sokheng",gender:"Male",department:"Structural Engineerin",position:"Transportation Engineer",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-02",shiftType:"AM",toDate:"2025-06-02",period:"0.5",remark:"No Scan"},{id:"S0005",name:"Kim Sophaktra",gender:"Male",department:"Structural Engineerin",position:"Transportation Engineer",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-02",shiftType:"AM",toDate:"2025-06-02",period:"0.5",remark:"No Scan"},{id:"S0006",name:"Chan Ritthy",gender:"Female",department:"Transportation Engineering",position:"Accountant",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-02",shiftType:"AM",toDate:"2025-06-02",period:"0.5",remark:"No Scan"},{id:"S0007",name:"Ngai Vanny",gender:"Male",department:"Materials Engineering",position:"Environmental Engineer",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-02",shiftType:"PM",toDate:"2025-06-02",period:"0.7",remark:"Absence"},{id:"S0008",name:"Phan Sophak",gender:"Female",department:"Geotechnical Engineering",position:"Project Manager",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-03",shiftType:"AM",toDate:"2025-06-03",period:"0.5",remark:"No Scan"},{id:"S0009",name:"Tieng Sreymom",gender:"Male",department:"Structural Engineerin",position:"Civil Engineering Technician",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-03",shiftType:"AM",toDate:"2025-06-03",period:"0.5",remark:"No Scan"},{id:"S0010",name:"Paen Sotha",gender:"Female",department:"Transportation Engineering",position:"Research Engineer",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-03",shiftType:"PM",toDate:"2025-06-03",period:"0.7",remark:"Absence"},{id:"S0011",name:"Keo Vandine",gender:"Male",department:"Materials Engineering",position:"Site Supervisor",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-03",shiftType:"AM",toDate:"2025-06-03",period:"0.5",remark:"No Scan"},{id:"S0012",name:"Lim Sokhom",gender:"Female",department:"Geotechnical Engineering",position:"Construction Manager",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-04",shiftType:"PM",toDate:"2025-06-04",period:"0.7",remark:"Absence"},{id:"S0013",name:"Mao Channa",gender:"Male",department:"Structural Engineerin",position:"Structural Inspector",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-04",shiftType:"AM",toDate:"2025-06-04",period:"0.5",remark:"No Scan"},{id:"S0014",name:"Yim Suphan",gender:"Female",department:"Transportation Engineering",position:"Payroll Specialist",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-04",shiftType:"PM",toDate:"2025-06-04",period:"0.7",remark:"Absence"},{id:"S0015",name:"Chau Vannirath",gender:"Male",department:"Materials Engineering",position:"Construction Safety Office",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-05",shiftType:"AM",toDate:"2025-06-05",period:"0.5",remark:"No Scan"},{id:"S0016",name:"Pech Sokhna",gender:"Female",department:"Geotechnical Engineering",position:"Quality Control Engineer",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-05",shiftType:"PM",toDate:"2025-06-05",period:"0.7",remark:"Absence"},{id:"S0017",name:"Than Srilai",gender:"Male",department:"Structural Engineerin",position:"Contracts Administrator",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-05",shiftType:"AM",toDate:"2025-06-05",period:"0.5",remark:"No Scan"},{id:"S0018",name:"Khem Rosmey",gender:"Female",department:"Transportation Engineering",position:"Heavy Equipment Engineer",scanIn:"-",scanOut:"-",leaveType:"",fromDate:"2025-06-06",shiftType:"PM",toDate:"2025-06-06",period:"0.7",remark:"Absence"}]},leaveData:{type:Array,default:()=>[{id:"SSC001",requestBy:"CHEA Udom",type:"Annual Leave",period:"1",fromDate:"2025-01-06",toDate:"2025-01-06",remainingBalance:"1 Days",balanceUsage:"1 Days",reason:"Busy at province",responsibilities:"MEAN Dara",checkBy:"MEAN Dara",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC003",requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-08",toDate:"2025-01-08",remainingBalance:"0 Days",balanceUsage:"1 Days",reason:"I have feeling not well.",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC003",requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-08",toDate:"2025-01-08",remainingBalance:"-0.5 Days",balanceUsage:"1 Days",reason:"Sick",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC003",requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-15",toDate:"2025-01-15",remainingBalance:"1 Days",balanceUsage:"1.5 Days",reason:"Feeling not well",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC005",requestBy:"OUK Vyta",type:"Annual Leave",period:"1",fromDate:"2025-01-17",toDate:"2025-01-17",remainingBalance:"0 Days",balanceUsage:"1 Days",reason:"Go to wedding sister",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC006",requestBy:"CHEA Udom",type:"Annual Leave",period:"0.5",fromDate:"2025-01-17",toDate:"2025-01-17",remainingBalance:"0.5 Days",balanceUsage:"1.5 Days",reason:"Busy at home",responsibilities:"MEAN Dara",checkBy:"MEAN Dara",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC007",requestBy:"OUK Vyta",type:"Annual Leave",period:"1",fromDate:"2025-01-20",toDate:"2025-01-20",remainingBalance:"-1 Days",balanceUsage:"2 Days",reason:"Busy at province",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC008",requestBy:"LY Chaiheag",type:"Annual Leave",period:"1",fromDate:"2025-01-20",toDate:"2025-01-20",remainingBalance:"8 Days",balanceUsage:"1 Days",reason:" Feeling down, No feeling to work ",responsibilities:"MEAN Dara",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC009",requestBy:"OUK Vyta",type:"Annual Leave",period:"0.5",fromDate:"2025-01-23",toDate:"2025-01-23",remainingBalance:"-1.5 Days",balanceUsage:"2.5 Days",reason:"I am not well",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC003",requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-24",toDate:"2025-01-24",remainingBalance:"1.5 Days",balanceUsage:"2 Days",reason:"Due personal issues",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC003",requestBy:"CHEA Nita",type:"Annual Leave",period:"0.5",fromDate:"2025-01-27",toDate:"2025-01-27",remainingBalance:"2 Days",balanceUsage:"3.5 Days",reason:"due personal issues at province",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0},{id:"SSC003",requestBy:"CHEA Nita",type:"Annual Leave",period:"1",fromDate:"2025-01-28",toDate:"2025-01-28",remainingBalance:"3 Days",balanceUsage:"3.5 Days",reason:"Have event at provind",responsibilities:"CHEA Udom",checkBy:"CHEA Udom",approveBy:"MEAN Dara",isApproved:!0}]},processList:{type:Array,default:()=>[]},approvedLeaves:{type:Array,default:()=>[]},staffList:{type:Array,default:()=>[]}},data(){return{selecteModules:"",statusFilter:"",salaryRange:"",dateRange:"",overviewSelecteModulesselecteModules:"",selectedStaffId:null,selectedStaff:{}}},computed:{store(){return A()},uniqueProjects(){const o=this.recruitmentData.map(d=>d.project||""),t=this.adjustmentData.flatMap(d=>[d.fromProject||"",d.toProject||""]);this.staffList.map(d=>d.project||"");const l=this.staffList.map(d=>d.project||""),i=["Adjustment Rating","Attendance","Timesheet","Leave Staff",...t,...o,...t,...l];return[...new Set(i)].filter(d=>d)},combinedStaff(){const o=this.recruitmentData.map(s=>{const p=this.attendanceData.find(m=>m.id===s.cpCode||m.name===s.name)||{},r=this.leaveData.find(m=>m.id===s.cpCode||m.name===s.name)||{};return{...s,source:"recruitment",id:s.cpCode,wageDay:s.status==="Approved"?Math.round(s.maxSalary/7):null,wageWeek:s.status==="Approved"?s.maxSalary:null,previousWageDay:s.status==="Approved"?Math.round(s.maxSalary/7*.9):null,previousWageWeek:s.status==="Approved"?Math.round(s.maxSalary*.9):null,newStaff:!0,stopDropOpt:s.status==="Approved"?"Active":s.status==="Pending"?"Pending":"Inactive",fromProject:"",toProject:s.project,transferDate:"",other:"",adjustmentDate:s.status==="Approved"?"02:15 PM +07, Wednesday, July 09, 2025":"",adjustmentReason:s.status==="Approved"?"New Recruitment":"",lastUpdated:"02:15 PM +07, Wednesday, July 09, 2025",photo:"/src/image/placeholder.jpg",requestedBy:s.status==="Approved"?"HR Admin":"",requestDate:s.status==="Approved"?"2025-07-01":"",checkedBy:s.status==="Approved"?"Jane Doe":"",checkDate:s.status==="Approved"?"2025-07-02":"",approvedBy:s.status==="Approved"?"Robert Brown":"",approveDate:s.status==="Approved"?"2025-07-09":"",remark:p.remark||r.remark||null,scanIn:r.scanIn||p.scanIn||null,scanOut:r.scanOut||p.scanOut||null,leaveType:r.leaveType||p.leaveType||null,attendanceFromDate:p.fromDate||r.fromDate||null,toDate:r.toDate||p.toDate||null,shiftType:r.shiftType||p.shiftType||null,period:r.period||p.period||null,department:p.department||r.department||null,gender:p.gender||r.gender||null}}),t=this.adjustmentData.map(s=>{const p=this.attendanceData.find(m=>m.id===s.id||m.name===s.name)||{},r=this.leaveData.find(m=>m.id===s.id||m.name===s.name)||{};return{...s,source:"adjustment",project:"Adjustment Rating",cpCode:s.id,headOfDept:null,remark:p.remark||r.remark||null,scanIn:r.scanIn||p.scanIn||null,scanOut:r.scanOut||p.scanOut||null,leaveType:r.leaveType||p.leaveType||null,attendanceFromDate:p.fromDate||r.fromDate||null,toDate:r.toDate||p.toDate||null,shiftType:r.shiftType||p.shiftType||null,period:r.period||p.period||null,department:p.department||r.department||null,gender:p.gender||r.gender||null}}),l=this.attendanceData.map(s=>({...s,source:"attendance",id:s.id,project:"Attendance",toProject:null,fromProject:null,attendanceFromDate:s.fromDate,status:null,maxSalary:null,wageDay:null,wageWeek:null,previousWageDay:null,previousWageWeek:null,newStaff:!1,stopDropOpt:null,startDate:null,transferDate:null,endDate:null,other:null,adjustmentDate:null,adjustmentReason:null,lastUpdated:null,photo:null,requestedBy:null,requestDate:null,checkedBy:null,checkDate:null,approvedBy:null,approveDate:null})),i=this.leaveData.filter(s=>!l.some(p=>p.id===s.id||p.name===s.name)).map(s=>({...s,source:"leave",id:s.id,project:"Leave Staff",toProject:null,fromProject:null,attendanceFromDate:s.fromDate,status:null,maxSalary:null,wageDay:null,wageWeek:null,previousWageDay:null,previousWageWeek:null,newStaff:!1,stopDropOpt:null,startDate:null,transferDate:null,endDate:null,other:null,adjustmentDate:null,adjustmentReason:null,lastUpdated:null,photo:null,requestedBy:null,requestDate:null,checkedBy:null,checkDate:null,approvedBy:null,approveDate:null,remark:s.option||null})),d=[...o,...t,...l,...i],c=[],a=new Set;for(const s of d){const p=s.id||s.name;if(!a.has(p))a.add(p),c.push(s);else{const r=c.find(m=>(m.id||m.name)===p);s.source==="leave"||s.source==="attendance"&&r.source!=="leave"?(r.remark=s.remark||r.remark,r.scanIn=s.scanIn||r.scanIn,r.scanOut=s.scanOut||r.scanOut,r.leaveType=s.leaveType||r.leaveType,r.attendanceFromDate=s.attendanceFromDate||r.attendanceFromDate,r.toDate=s.toDate||r.toDate,r.shiftType=s.shiftType||r.shiftType,r.period=s.period||r.period,r.department=s.department||r.department,r.gender=s.gender||r.gender):(s.source==="adjustment"&&r.source!=="attendance"&&r.source!=="leave"||s.source==="recruitment"&&r.source!=="attendance"&&r.source!=="leave"&&r.source!=="adjustment")&&Object.assign(r,s)}}return this.staffList.forEach(s=>{const p=s.id||s.name;a.has(p)||(a.add(p),c.push({...s,source:"timesheet",project:s.project,remark:null,scanIn:null,scanOut:null,leaveType:null,attendanceFromDate:null,toDate:null,shiftType:null,period:null,department:null,gender:null}))}),c},filteredLeaveData(){const o=[],t=new Set;for(const i of this.leaveData){const d=`${i.id}-${i.fromDate}-${i.toDate}`;t.has(d)||(t.add(d),o.push(i))}let l=o;if(this.dateRange){const[i,d]=this.dateRange.split(" to ").map(c=>new Date(c));i&&d&&!isNaN(i)&&!isNaN(d)&&(l=l.filter(c=>{const a=new Date(c.fromDate),s=new Date(c.toDate);return a>=i&&a<=d||s>=i&&s<=d}))}return l},filteredStaff(){let o=this.combinedStaff;if(this.selecteModules&&(o=o.filter(t=>t.project===this.selecteModules||t.toProject===this.selecteModules||t.fromProject===this.selecteModules)),this.statusFilter&&this.selecteModules!=="Attendance"&&(o=o.filter(t=>t.status===this.statusFilter)),this.salaryRange&&this.selecteModules!=="Attendance"){const[t,l]=this.salaryRange.split("-").map(Number);t&&l&&(o=o.filter(i=>{const d=i.wageWeek||i.maxSalary;return d&&d>=t&&d<=l}))}if(this.dateRange){const[t,l]=this.dateRange.split(" to ").map(i=>new Date(i));t&&l&&!isNaN(t)&&!isNaN(l)&&(o=o.filter(i=>[i.startDate,i.endDate,i.transferDate,i.attendanceFromDate,i.toDate,i.requestDate,i.checkDate,i.approveDate,i.adjustmentDate].filter(Boolean).map(c=>new Date(c)).some(c=>c>=t&&c<=l)))}return o},filteredOverviewProjects(){return this.overviewSelecteModulesselecteModules?[this.overviewSelecteModulesselecteModules]:this.uniqueProjects}},methods:{exportExcel(){alert("Export to Excel clicked!")},exportPDF(){alert("Export to PDF clicked!")},selectProject(o){this.selecteModules=o},getStaffCount(o){return this.combinedStaff.filter(t=>t.project===o||t.toProject===o||t.fromProject===o).length},getStatusCount(o,t){return this.combinedStaff.filter(l=>(l.project===o||l.toProject===o||l.fromProject===o)&&l.status===t).length},getAttendanceIssues(o){return this.combinedStaff.filter(t=>(t.project===o||t.toProject===o||t.fromProject===o)&&t.remark&&["No Scan","Absence"].includes(t.remark)).length},getPendingLeaveRequests(o){return this.processList.filter(t=>{const l=this.combinedStaff.find(i=>i.name===t.requestBy);return l&&(l.project===o||l.toProject===o||l.fromProject===o)&&!t.isApproved}).length},getApprovedLeaves(o){return this.approvedLeaves.filter(t=>{const l=this.combinedStaff.find(i=>i.name===t.requestBy);return l&&(l.project===o||l.toProject===o||l.fromProject===o)&&t.isApproved}).length},getPendingTimesheets(o){return this.staffList.filter(t=>t.project===o&&t.timesheet==="Pending").length},getTotalHours(o){return this.staffList.filter(t=>t.project===o).reduce((t,l)=>t+(parseFloat(l.totalTime)||0),0)},filterOverviewProjects(){this.overviewSelecteModulesselecteModules&&(this.selecteModules=this.overviewSelecteModulesselecteModules)},toggleDetails(o){this.selectedStaffId=this.selectedStaffId===o.id?null:o.id,this.selectedStaff={...o}},closeAllSubTables(){this.selectedStaffId=null,this.selectedStaff={}},printReport(){if(!this.selecteModules){alert("Please select a Modules to print the report.");return}const o=window.open("","_blank");this.selecteModules==="Attendance"?o.document.write(`
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
                <div class="filter-item"><strong>Date Range:</strong> ${this.dateRange||"Any"}</div>
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
               ${this.timesheetData.map(t=>`
                    <tr>
                      <td>${t.id||"-"}</td>
                      <td>${t.name||"-"}</td>
                      <td>${t.project||"-"}</td>
                      <td>${t.timesheet||"-"}</td>
                      <td>${t.totalTime||"0.0"}</td>
                    </tr>
                  `).join("")}
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
                  ${this.filteredStaff.map((t,l)=>`
                    <tr>
                      <td>${l+1}</td>
                      <td>${t.id}</td>
                      <td>${t.name}</td>
                      <td>${t.gender}</td>
                      <td>${t.department}</td>
                      <td>${t.position}</td>
                      <td>${t.scanIn||"-"}</td>
                      <td>${t.scanOut||"-"}</td>
                      <td>${t.leaveType||"-"}</td>
                      <td>${t.attendanceFromDate||"-"}</td>
                      <td>${t.toDate||"-"}</td>
                      <td>${t.shiftType||"-"}</td>
                      <td>${t.period||"-"}</td>
                      <td>${t.remark||"-"}</td>
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
                              <td>${t.id}</td>
                              <td>${t.name}</td>
                              <td>${t.gender}</td>
                              <td>${t.department}</td>
                              <td>${t.position}</td>
                              <td>${t.scanIn||"-"}</td>
                              <td>${t.scanOut||"-"}</td>
                              <td>${t.leaveType||"-"}</td>
                              <td>${t.attendanceFromDate||"-"}</td>
                              <td>${t.toDate||"-"}</td>
                              <td>${t.shiftType||"-"}</td>
                              <td>${t.period||"-"}</td>
                              <td>${t.remark||"-"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  `).join("")}
               
        `):this.selecteModules==="Leave Staff"?o.document.write(`
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
          <div class="filter-item"><strong>Date Range:</strong> ${this.dateRange||"Any"}</div>
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
            ${this.filteredLeaveData.map((t,l)=>`
                  <tr>
                    <td>${l+1}</td>
                    <td>${t.id||"-"}</td>
                    <td>${t.requestBy||"-"}</td>
                    <td>${t.type||"-"}</td>
                    <td>${t.fromDate||"-"}</td>
                    <td>${t.toDate||"-"}</td>
                    <td>${t.period||"-"}</td>
                    <td>${t.reason||"-"}</td>
                    <td>${t.remainingBalance||"-"}</td>
                    <td>${t.balanceUsage||"-"}</td>
                    <td>${t.responsibilities||"-"}</td>
                    <td>${t.checkBy||"-"}</td>
                    <td>${t.approveBy||"-"}</td>
                    <td>${t.isApproved?"Yes":"No"}</td>
                  </tr>
                `).join("")}
          </tbody>
        </table>
      </body>
    </html>
  `):this.selecteModules==="Timesheet"?o.document.write(`
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
            <div class="filter-item"><strong>Date Range:</strong> ${this.dateRange||"Any"}</div>
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
              ${this.timesheetData.map(t=>`
                    <tr>
                      <td>${t.id||"-"}</td>
                      <td>${t.name||"-"}</td>
                      <td>${t.project||"-"}</td>
                      <td>${t.timesheet||"-"}</td>
                      <td>${t.totalTime||"0.0"}</td>
                    </tr>
                  `).join("")}
            </tbody>
          </table>
        </body>
      </html>
    `):o.document.write(`
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
                <div class="filter-item"><strong>Project:</strong> ${this.selecteModules||"All Projects"}</div>
                <div class="filter-item"><strong>Status:</strong> ${this.statusFilter||"All Statuses"}</div>
                <div class="filter-item"><strong>Weekly Wage Range:</strong> ${this.salaryRange||"Any"}</div>
                <div class="filter-item"><strong>Date Range:</strong> ${this.dateRange||"Any"}</div>
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
                  ${this.filteredStaff.filter(t=>t.adjustmentDate).map((t,l)=>{var i;return`
                      <tr ${t.status==="Rejected"?'class="rejected"':""}>
                        <td>${l+1}</td>
                        <td>${t.id}</td>
                        <td>${t.name}</td>
                        <td>${t.position}</td>
                        <td>${t.level||"-"}</td>
                        <td>${t.grade||"-"}</td>
                        <td>${t.category||"-"}</td>
                        <td>${t.directManager||"-"}</td>
                        <td>${t.indirectManager||"-"}</td>
                        <td>${t.previousWageDay||"-"}</td>
                        <td>${t.previousWageWeek||"-"}</td>
                        <td>
                          <span class="status-${((i=t.status)==null?void 0:i.toLowerCase())||"pending"}">
                            ${t.status||"Pending"}
                          </span>
                        </td>
                        <td>${t.remark||"-"}</td>
                        <td>${t.scanIn||"-"}</td>
                        <td>${t.scanOut||"-"}</td>
                        <td>${t.leaveType||"-"}</td>
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
                                <td>${t.lastUpdated||"-"}</td>
                                <td>${t.adjustmentDate||"-"}</td>
                                <td>${t.requestDate||"-"}</td>
                                <td>${t.checkedBy||"-"}</td>
                                <td>${t.checkDate||"-"}</td>
                                <td>${t.approvedBy||"-"}</td>
                                <td>${t.approveDate||"-"}</td>
                                <td>${t.remark||"-"}</td>
                                <td>${t.scanIn||"-"}</td>
                                <td>${t.scanOut||"-"}</td>
                                <td>${t.leaveType||"-"}</td>
                                <td>${t.attendanceFromDate||"-"}</td>
                                <td>${t.toDate||"-"}</td>
                                <td>${t.shiftType||"-"}</td>
                                <td>${t.period||"-"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    `}).join("")}
               
        `),o.document.close()}},mounted(){document.addEventListener("click",o=>{!o.target.closest("table")&&!o.target.closest("button")&&this.closeAllSubTables()})},beforeUnmount(){document.removeEventListener("click",this.closeAllSubTables)}},B={class:"w-full p-4"},M={class:"bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200 mb-6"},T={class:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"},E={class:"relative"},j=["value"],w={class:"relative flex items-end space-x-2"},P={key:0,class:"mt-8"},C={class:"overflow-x-auto bg-white dark:bg-[#0e1726] rounded shadow-lg"},f={class:"w-full border-collapse text-sm sm:text-base"},$={class:"px-2 py-2"},R={class:"px-2 py-2"},U={class:"px-2 py-2"},N={class:"px-2 py-2"},I={class:"px-2 py-2"},L={class:"px-2 py-2"},O={class:"px-2 py-2"},W={class:"px-2 py-2"},H={class:"px-2 py-2"},F={class:"px-2 py-2"},q={class:"px-2 py-2"},J={class:"px-2 py-2"},G={class:"px-2 py-2"},V={class:"px-2 py-2"},K={key:1,class:"overflow-x-auto no-scrollbar"},Y={class:"w-full border-collapse rounded overflow-hidden text-sm sm:text-base bg-white dark:bg-[#0e1726]"},z={class:"px-2 py-2"},Q={class:"px-2 py-2"},X={class:"px-2 py-2"},Z={class:"px-2 py-2"},ee={class:"px-2 py-2"},te={key:2,class:"overflow-x-auto no-scrollbar"},ae={key:0,class:"w-full border-collapse rounded bg-white dark:bg-[#0e1726] overflow-hidden text-sm sm:text-base"},se={class:"px-2 py-2 sm:px-4 sm:py-4 hidden sm:table-cell"},ne={class:"px-2 py-2 sm:px-4 sm:py-4"},re={class:"px-2 py-2 sm:px-4 sm:py-4"},oe={class:"px-2 py-2 sm:px-4 sm:py-4"},le={class:"px-2 py-2 sm:px-4 sm:py-4"},de={class:"px-2 py-2 sm:px-4 sm:py-4"},ie={class:"px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell"},pe={class:"px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell"},ce={class:"px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell"},he={class:"px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell"},ye={class:"px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell"},me={class:"px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell"},ue={class:"px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell"},ge={class:"px-2 py-2 sm:px-4 sm:py-4"},xe={class:"px-2 py-2 sm:px-4 sm:py-4"},De=["onClick","aria-expanded","aria-controls"],ve=["id"],be={colspan:15,class:"p-0"},Ae={class:"dropdown-content bg-gray-600 border 0 p-2 shadow-lg"},Se={class:"w-full border-collapse text-sm sm:text-base bg-white dark:bg-[#0e1726]"},ke={class:"px-2 py-1"},_e={class:"px-2 py-1"},Be={class:"px-2 py-1"},Me={class:"px-2 py-1"},Te={class:"px-2 py-1"},Ee={class:"px-2 py-1"},je={class:"px-2 py-1"},we={class:"px-2 py-1"},Pe={class:"px-2 py-1"},Ce={class:"px-2 py-1"},fe={class:"px-2 py-1"},$e={class:"px-2 py-1"},Re={class:"px-2 py-1"},Ue={key:1,class:"w-full border-collapse rounded overflow-hidden text-sm sm:text-base"},Ne={class:"px-2 py-2 sm:px-4 sm:py-4 hidden sm:table-cell"},Ie={class:"px-2 py-2 sm:px-4 sm:py-4"},Le={class:"px-2 py-2 sm:px-4 sm:py-4"},Oe={class:"px-2 py-2 sm:px-4 sm:py-4"},We={class:"px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell"},He={class:"px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell"},Fe={class:"px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell"},qe={class:"px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell"},Je={class:"px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell"},Ge={class:"px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell"},Ve={class:"px-2 py-2 sm:px-4 sm:py-4 hidden lg:table-cell"},Ke={class:"px-2 py-2 sm:px-4 sm:py-4 hidden md:table-cell"},Ye={class:"px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell"},ze={class:"px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell"},Qe={class:"px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell"},Xe={class:"px-2 py-2 sm:px-4 sm:py-4 hidden xl:table-cell"},Ze={class:"px-2 py-2 sm:px-4 sm:py-4"},et=["onClick","aria-expanded","aria-controls"],tt=["id"],at={colspan:17,class:"p-0"},st={class:"dropdown-content bg-gray-600 p-2 shadow-lg"},nt={class:"w-full border-collapse text-sm sm:text-base bg-white dark:bg-[#0e1726]"},rt={class:"bg-white dark:bg-[#0e1726]"},ot={class:"px-2 py-1"},lt={class:"px-2 py-1"},dt={class:"px-2 py-1"},it={class:"px-2 py-1"},pt={class:"px-2 py-1"},ct={class:"px-2 py-1"},ht={class:"px-2 py-1"},yt={class:"px-2 py-1"},mt={class:"px-2 py-1"},ut={class:"px-2 py-1"},gt={class:"px-2 py-1"},xt={class:"px-2 py-1"},Dt={class:"px-2 py-1"},vt={class:"px-2 py-1"},bt={class:"px-2 py-1"},At={class:"px-2 py-1"},St={class:"px-2 py-1"},kt={class:"px-2 py-1"},_t={class:"px-2 py-1"},Bt={class:"px-2 py-1"},Mt={class:"px-2 py-1"},Tt={class:"px-2 py-1"},Et={class:"px-2 py-1"},jt={class:"px-2 py-1"},wt={class:"px-2 py-1"},Pt={class:"px-2 py-1"},Ct={class:"px-2 py-1"},ft={key:3,class:"text-gray-600 text-center"};function $t(o,t,l,i,d,c){return y(),h("div",{class:D(["bg-white dark:bg-[#0e1726] min-h-screen",{"dark text-gray-600-dark":c.store.semidark}])},[e("div",B,[t[20]||(t[20]=e("div",{class:"bg-gray-800 rounded-md px-6 py-3 mb-4 flex justify-between items-center"},[e("h1",{class:"text-xl font-bold text-gray-400"},"HRMIS Report")],-1)),e("div",M,[t[19]||(t[19]=e("h2",{class:"text-lg font-bold text-gray-400 mb-4"},"Report Details",-1)),e("div",T,[e("div",E,[t[5]||(t[5]=e("label",{for:"projectSelect",class:"text-gray-600 flex items-center font-bold text-lg"},"Select modules",-1)),S(e("select",{id:"projectSelect","onUpdate:modelValue":t[0]||(t[0]=a=>d.selecteModules=a),class:"w-full h-12 p-2 pr-2 border-none text-gray-400 rounded mt-1 bg-gray-200 dark:bg-gray-700 pl-12 custom-date-input focus:outline-none focus:ring-2 focus:ring-gray-400","aria-label":"Select modules for report"},[t[4]||(t[4]=e("option",{value:""},"Select a Modules",-1)),(y(!0),h(u,null,g(c.uniqueProjects,a=>(y(),h("option",{key:a,value:a},n(a||"No Project"),9,j))),128))],512),[[k,d.selecteModules]]),t[6]||(t[6]=e("div",{class:"absolute top-2/3 left-2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-[#0e1726] flex items-center justify-center rounded"},[e("i",{class:"fas fa-folder text-gray-500"})],-1))]),e("div",w,[e("button",{onClick:t[1]||(t[1]=(...a)=>c.printReport&&c.printReport(...a)),class:"h-12 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-400 rounded hover:bg-gray-700 flex items-center justify-center transition duration-300","aria-label":"Print report based on current filters"},t[7]||(t[7]=[e("i",{class:"fas fa-print mr-2"},null,-1),v(" View Record ")])),e("button",{class:"h-12 w-28 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-400 rounded hover:bg-gray-700 flex items-center justify-center transition duration-300","aria-label":"Export Excel",onClick:t[2]||(t[2]=(...a)=>c.exportExcel&&c.exportExcel(...a))},t[8]||(t[8]=[e("i",{class:"fas fa-file-excel mr-1"},null,-1),v(" Excel ")])),e("button",{class:"h-12 w-28 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-400 rounded hover:bg-gray-700 flex items-center justify-center transition duration-300","aria-label":"Export PDF",onClick:t[3]||(t[3]=(...a)=>c.exportPDF&&c.exportPDF(...a))},t[9]||(t[9]=[e("i",{class:"fas fa-file-pdf mr-1"},null,-1),v(" PDF ")]))])]),d.selecteModules==="Leave Staff"?(y(),h("div",P,[t[11]||(t[11]=e("h2",{class:"text-lg font-bold text-gray-800 mb-4"},"Staff Taking Leave",-1)),e("div",C,[e("table",f,[t[10]||(t[10]=e("thead",{class:"bg-gray-800 text-gray-400"},[e("tr",null,[e("th",{class:"px-2 py-2"},"#"),e("th",{class:"px-2 py-2"},"ID"),e("th",{class:"px-2 py-2"},"Name"),e("th",{class:"px-2 py-2"},"Leave Type"),e("th",{class:"px-2 py-2"},"From Date"),e("th",{class:"px-2 py-2"},"To Date"),e("th",{class:"px-2 py-2"},"Period"),e("th",{class:"px-2 py-2"},"Remaining Balance"),e("th",{class:"px-2 py-2"},"Balance Usage"),e("th",{class:"px-2 py-2"},"Reason"),e("th",{class:"px-2 py-2"},"Responsibilities"),e("th",{class:"px-2 py-2"},"Check By"),e("th",{class:"px-2 py-2"},"Approve By"),e("th",{class:"px-2 py-2"},"Approved")])],-1)),e("tbody",null,[(y(!0),h(u,null,g(l.leaveData,(a,s)=>(y(),h("tr",{key:a.id+"-"+a.fromDate+"-"+a.toDate,class:"border-b bg-white dark:bg-[#0e1726]"},[e("td",$,n(s+1),1),e("td",R,n(a.id),1),e("td",U,n(a.requestBy),1),e("td",N,n(a.type),1),e("td",I,n(a.fromDate),1),e("td",L,n(a.toDate),1),e("td",O,n(a.period),1),e("td",W,n(a.remainingBalance),1),e("td",H,n(a.balanceUsage),1),e("td",F,n(a.reason),1),e("td",q,n(a.responsibilities),1),e("td",J,n(a.checkBy),1),e("td",G,n(a.approveBy),1),e("td",V,n(a.isApproved?"Yes":"No"),1)]))),128))])])])])):x("",!0),d.selecteModules==="Timesheet"?(y(),h("div",K,[e("table",Y,[t[12]||(t[12]=e("thead",null,[e("tr",{class:"bg-gray-900 text-gray-400 font-bold"},[e("th",{class:"px-2 py-2 text-left"},"ID Staff"),e("th",{class:"px-2 py-2 text-left"},"Name Staff"),e("th",{class:"px-2 py-2 text-left"},"Project"),e("th",{class:"px-2 py-2 text-left"},"Timesheet"),e("th",{class:"px-2 py-2 text-left"},"Total Time")])],-1)),e("tbody",null,[(y(!0),h(u,null,g(l.timesheetData,(a,s)=>(y(),h("tr",{key:a.id||s,class:"bg-white dark:bg-[#0e1726] text-gray-400"},[e("td",z,n(a.id),1),e("td",Q,n(a.name),1),e("td",X,n(a.project),1),e("td",Z,n(a.timesheet),1),e("td",ee,n(a.totalTime||"0.0"),1)]))),128))])])])):x("",!0),d.selecteModules&&d.selecteModules!=="Leave Staff"&&d.selecteModules!=="Timesheet"?(y(),h("div",te,[d.selecteModules==="Attendance"?(y(),h("table",ae,[t[15]||(t[15]=e("thead",null,[e("tr",{class:"bg-gray-800 text-xs sm:text-sm text-gray-400 font-bold"},[e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden sm:table-cell"},"#"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"ID"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"Name"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"Gender"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"Department"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"Position"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell"},"Scan-In"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell"},"Scan-Out"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell"},"Leave Type"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell"},"From Date"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell"},"To Date"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell"},"Shift Type"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell"},"Period"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"Remark"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"Option")])],-1)),e("tbody",null,[(y(!0),h(u,null,g(c.filteredStaff,(a,s)=>(y(),h(u,{key:s},[e("tr",{class:D(["border-b transition duration-150 bg-white dark:bg-[#0e1726]",{"bg-white":s%2===0,"bg-gray-50":s%2!==0}])},[e("td",se,n(s+1),1),e("td",ne,n(a.id),1),e("td",re,n(a.name),1),e("td",oe,n(a.gender),1),e("td",le,n(a.department),1),e("td",de,n(a.position),1),e("td",ie,n(a.scanIn||"-"),1),e("td",pe,n(a.scanOut||"-"),1),e("td",ce,n(a.leaveType||"-"),1),e("td",he,n(a.attendanceFromDate||"-"),1),e("td",ye,n(a.toDate||"-"),1),e("td",me,n(a.shiftType||"-"),1),e("td",ue,n(a.period||"-"),1),e("td",ge,n(a.remark||"-"),1),e("td",xe,[e("button",{onClick:p=>c.toggleDetails(a),class:"text-gray-700 hover:text-gray-900 p-1","aria-expanded":d.selectedStaffId===a.id,"aria-controls":"dropdown-"+a.id},t[13]||(t[13]=[e("i",{class:"fas fa-eye"},null,-1)]),8,De)])],2),d.selectedStaffId===a.id?(y(),h("tr",{key:0,id:"dropdown-"+a.id,class:"p-0"},[e("td",be,[e("div",Ae,[e("table",Se,[t[14]||(t[14]=e("thead",null,[e("tr",{class:"bg-gray-600 text-xs md:text-sm text-gray-400 font-bold"},[e("th",{class:"px-2 py-1 text-left"},"ID"),e("th",{class:"px-2 py-1 text-left"},"Name"),e("th",{class:"px-2 py-1 text-left"},"Gender"),e("th",{class:"px-2 py-1 text-left"},"Department"),e("th",{class:"px-2 py-1 text-left"},"Position"),e("th",{class:"px-2 py-1 text-left"},"Scan-In"),e("th",{class:"px-2 py-1 text-left"},"Scan-Out"),e("th",{class:"px-2 py-1 text-left"},"Leave Type"),e("th",{class:"px-2 py-1 text-left"},"From Date"),e("th",{class:"px-2 py-1 text-left"},"To Date"),e("th",{class:"px-2 py-1 text-left"},"Shift Type"),e("th",{class:"px-2 py-1 text-left"},"Period"),e("th",{class:"px-2 py-1 text-left"},"Remark")])],-1)),e("tbody",null,[e("tr",null,[e("td",ke,n(a.id),1),e("td",_e,n(a.name),1),e("td",Be,n(a.gender),1),e("td",Me,n(a.department),1),e("td",Te,n(a.position),1),e("td",Ee,n(a.scanIn||"-"),1),e("td",je,n(a.scanOut||"-"),1),e("td",we,n(a.leaveType||"-"),1),e("td",Pe,n(a.attendanceFromDate||"-"),1),e("td",Ce,n(a.toDate||"-"),1),e("td",fe,n(a.shiftType||"-"),1),e("td",$e,n(a.period||"-"),1),e("td",Re,n(a.remark||"-"),1)])])])])])],8,ve)):x("",!0)],64))),128))])])):(y(),h("table",Ue,[t[18]||(t[18]=e("thead",null,[e("tr",{class:"bg-gray-800 text-xs sm:text-sm text-gray-400 font-bold"},[e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden sm:table-cell"},"#"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"ID"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"Name"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"Position"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell"},"Level"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell"},"Grade"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell"},"Category"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell"},"Direct Manager"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell"},"Indirect Manager"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell"},"Previous Wage/Day"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden lg:table-cell"},"Previous Wage/Week"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden md:table-cell"},"Status"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell"},"Remark"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell"},"Scan-In"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell"},"Scan-Out"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left hidden xl:table-cell"},"Leave Type"),e("th",{class:"px-2 py-2 sm:px-4 sm:py-3 text-left"},"Option")])],-1)),e("tbody",null,[(y(!0),h(u,null,g(c.filteredStaff,(a,s)=>(y(),h(u,{key:s},[e("tr",{class:D(["border-b transition duration-150 bg-white dark:bg-[#0e1726]",{"rejected-row":a.status==="Rejected","bg-white dark:bg-gray-800":s%2===0&&a.status!=="Rejected","bg-gray-50 dark:bg-[#0e1726]":s%2!==0&&a.status!=="Rejected"}])},[e("td",Ne,n(s+1),1),e("td",Ie,n(a.id),1),e("td",Le,n(a.name),1),e("td",Oe,n(a.position),1),e("td",We,n(a.level||"-"),1),e("td",He,n(a.grade||"-"),1),e("td",Fe,n(a.category||"-"),1),e("td",qe,n(a.directManager||"-"),1),e("td",Je,n(a.indirectManager||"-"),1),e("td",Ge,n(a.previousWageDay||"-"),1),e("td",Ve,n(a.previousWageWeek||"-"),1),e("td",Ke,[e("span",{class:D(["inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",{"bg-gray-800 text-gray-400":a.status==="Approved","bg-gray-400 text-white":a.status==="Pending","bg-gray-600 text-gray-400":a.status==="Rejected"}])},n(a.status||"Pending"),3)]),e("td",Ye,n(a.remark||"-"),1),e("td",ze,n(a.scanIn||"-"),1),e("td",Qe,n(a.scanOut||"-"),1),e("td",Xe,n(a.leaveType||"-"),1),e("td",Ze,[e("button",{onClick:p=>c.toggleDetails(a),class:"text-gray-600 hover:text-gray-900 p-1","aria-expanded":d.selectedStaffId===a.id,"aria-controls":"dropdown-"+a.id},t[16]||(t[16]=[e("i",{class:"fas fa-eye"},null,-1)]),8,et)])],2),d.selectedStaffId===a.id?(y(),h("tr",{key:0,id:"dropdown-"+a.id,class:"p-2 bg-white dark:bg-[#0e1726]"},[e("td",at,[e("div",st,[e("table",nt,[t[17]||(t[17]=e("thead",null,[e("tr",{class:"bg-gray-600 text-xs md:text-sm text-gray-400 font-bold"},[e("th",{class:"px-2 py-1 text-left"},"Max Salary"),e("th",{class:"px-2 py-1 text-left"},"New Staff"),e("th",{class:"px-2 py-1 text-left"},"Wage/Day"),e("th",{class:"px-2 py-1 text-left"},"Wage/Week"),e("th",{class:"px-2 py-1 text-left"},"Increase Week & Date"),e("th",{class:"px-2 py-1 text-left"},"Stop/Drop/Opt"),e("th",{class:"px-2 py-1 text-left"},"Start Date"),e("th",{class:"px-2 py-1 text-left"},"From Project"),e("th",{class:"px-2 py-1 text-left"},"To Project"),e("th",{class:"px-2 py-1 text-left"},"Transfer Date"),e("th",{class:"px-2 py-1 text-left"},"End Date"),e("th",{class:"px-2 py-1 text-left"},"Last Updated"),e("th",{class:"px-2 py-1 text-left"},"Adjustment Date"),e("th",{class:"px-2 py-1 text-left"},"Request Date"),e("th",{class:"px-2 py-1 text-left"},"Checked By"),e("th",{class:"px-2 py-1 text-left"},"Check Date"),e("th",{class:"px-2 py-1 text-left"},"Approved By"),e("th",{class:"px-2 py-1 text-left"},"Approve Date"),e("th",{class:"px-2 py-1 text-left"},"Reason"),e("th",{class:"px-2 py-1 text-left"},"Remark"),e("th",{class:"px-2 py-1 text-left"},"Scan-In"),e("th",{class:"px-2 py-1 text-left"},"Scan-Out"),e("th",{class:"px-2 py-1 text-left"},"Leave Type"),e("th",{class:"px-2 py-1 text-left"},"Attendance From Date"),e("th",{class:"px-2 py-1 text-left"},"To Date"),e("th",{class:"px-2 py-1 text-left"},"Shift Type"),e("th",{class:"px-2 py-1 text-left"},"Period")])],-1)),e("tbody",null,[e("tr",rt,[e("td",ot,n(a.maxSalary||"-"),1),e("td",lt,n(a.newStaff?"Yes":"No"),1),e("td",dt,n(a.wageDay||"-"),1),e("td",it,n(a.wageWeek||"-"),1),e("td",pt,n(a.increaseDate||"-"),1),e("td",ct,n(a.stopDropOpt||"-"),1),e("td",ht,n(a.startDate||"-"),1),e("td",yt,n(a.fromProject||"-"),1),e("td",mt,n(a.toProject||"-"),1),e("td",ut,n(a.transferDate||"-"),1),e("td",gt,n(a.endDate||"-"),1),e("td",xt,n(a.lastUpdated||"-"),1),e("td",Dt,n(a.adjustmentDate||"-"),1),e("td",vt,n(a.requestDate||"-"),1),e("td",bt,n(a.checkedBy||"-"),1),e("td",At,n(a.checkDate||"-"),1),e("td",St,n(a.approvedBy||"-"),1),e("td",kt,n(a.approveDate||"-"),1),e("td",_t,n(a.adjustmentReason||"-"),1),e("td",Bt,n(a.remark||"-"),1),e("td",Mt,n(a.scanIn||"-"),1),e("td",Tt,n(a.scanOut||"-"),1),e("td",Et,n(a.leaveType||"-"),1),e("td",jt,n(a.attendanceFromDate||"-"),1),e("td",wt,n(a.toDate||"-"),1),e("td",Pt,n(a.shiftType||"-"),1),e("td",Ct,n(a.period||"-"),1)])])])])])],8,tt)):x("",!0)],64))),128))])]))])):(y(),h("div",ft,"Select a Modules from the overview to view details."))])])],2)}const Ut=b(_,[["render",$t],["__scopeId","data-v-fecd5a1e"]]);export{Ut as default};
