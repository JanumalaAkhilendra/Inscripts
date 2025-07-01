"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ChevronRight,
  Search,
  Bell,
  EyeOff,
  ArrowUpDown,
  Filter,
  Grid3X3,
  Download,
  Upload,
  Share,
  Plus,
  ChevronDown,
  Info,
  ChevronsRight,
  GitFork,
  ListFilter,
  Link,
  Link2,
  RefreshCcw,
  Ellipsis,
  BriefcaseBusiness,
  CalendarDays,
  Clock,
  UserRound,
  Globe,
} from "lucide-react"

const jobData = [
  {
    id: 1,
    task: "Launch social media campaign for product launch",
    submitted: "15-11-2024",
    status: "In-progress",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000",
  },
  {
    id: 2,
    task: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhang.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000",
  },
  {
    id: 3,
    task: "Finalize user testing feedback for app redesign",
    submitted: "05-12-2024",
    status: "In-progress",
    submitter: "Mark Johnson",
    url: "www.markjohns.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000",
  },
  {
    id: 4,
    task: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000",
  },
  {
    id: 5,
    task: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "In-progress":
      return "bg-[#fff3d6] text-[#85640b] border-0"
    case "Need to start":
      return "bg-[#e2e8f0] text-[#475569] border-0"
    case "Complete":
      return "bg-[#d3f2e3] text-[#0a6e3d] border-0"
    case "Blocked":
      return "bg-[#ffe1de] text-[#c22219] border-0"
    default:
      return "bg-[#f6f6f6] text-[#757575] border-0"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "text-[#EF4D44] bg-[transparent] font-semibold"
    case "Medium":
      return "text-[#C29210] bg-[transparent] font-semibold"
    case "Low":
      return "text-[#1A8CFF] bg-[transparent] font-semibold"
    default:
      return "text-[#757575] bg-[transparent]"
  }
}

export default function Component() {
  const [activeTab, setActiveTab] = useState("All Orders")

  return (
    <div className="min-h-screen bg-[#faf4ee]">
      {/* Header */}
      <div className="bg-[#ffffff] border-b border-[#e2e2e2] px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-[#757575]">
            <img src="./layouting.png" alt="" height={18} width={20} style={{ margin: "0 14px 0 0" }} />
            <span>Workspace</span>
            <ChevronRight className="w-4 h-4" />
            <span>Folder 2</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#121212] font-medium">Spreadsheet 3</span>
            <img src="./more.png" alt="" height={18} width={20} style={{ margin: "0 0px 0 4px" }} />

          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 border-0 text-[#757575]" />
              <Input placeholder="Search within sheet" className="pl-10 w-64 bg-[#f8fafc] border-[#e2e2e2]" />
            </div>
            <div className="relative">
              <Bell className="w-5 h-5 text-[#757575]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#618666] rounded-full flex items-center justify-center">
                <span className="text-xs text-white">2</span>
              </div>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="./profile.png?height=32&width=32" />
              <AvatarFallback className="bg-[#618666] text-white text-xs">JD</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium text-[#121212]">John Doe</div>
              <div className="text-[#757575]">john.doe@...</div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
     <div className="bg-[#ffffff] border-b border-[#e2e2e2] px-4 py-3">
      <div className="flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="text-[#757575]">
            Tool bar
            <ChevronsRight className="w-4 h-4 ml-1" />
          </Button>

          <div className="w-px h-6 bg-[#e2e2e2]" />
          <Button variant="ghost" size="sm" className="text-[#757575]">
            <EyeOff className="w-4 h-4 mr-2" />
            Hide fields
          </Button>

          <Button variant="ghost" size="sm" className="text-[#757575]">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            Sort
          </Button>

          <Button variant="ghost" size="sm" className="text-[#757575]">
            <ListFilter className="w-4 h-4 mr-2" />
            Filter
          </Button>

          <Button variant="ghost" size="sm" className="text-[#757575]">
            <img src="./twoway_arrow.png" alt="" height={16} width={16} style={{ marginRight: "4px", backgroundColor: "white" }} />
            Cell view
          </Button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-2">
          

          <Button variant="ghost" size="sm" className="text-[#757575] border-2 border-[#e2e2e2]">
            <Download className="w-4 h-4 mr-2" />
            Import
          </Button>

          <Button variant="ghost" size="sm" className="text-[#757575] border-2 border-[#e2e2e2]">
            <Upload className="w-4 h-4 mr-2" />
            Export
          </Button>

          <Button variant="ghost" size="sm" className="text-[#757575] border-2 border-[#e2e2e2]" >
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>

          <Button className="bg-[#618666] hover:bg-[#4b6a4f] text-white">
            <img src="./arrow.png" alt="" height={16} width={16} style={{ marginRight: "4px", color: "white" }} />
            New Action
          </Button>
        </div>
      </div>
    </div>


      {/* Main Content */}
      <div className="p-0">
        <div className="bg-[#ffffff] rounded-lg border border-[#e2e2e2] overflow-hidden">
            <Table>
              <TableHeader>
                {/* First Row with Action Buttons */}
                <TableRow className="bg-[#f8fafc] border-b  border-[#e2e2e2] divide-x divide-[#e2e2e2]">
                  <TableHead className="col-span-1" />
                  <TableHead className="w-8 bg-[#E2E8F0] hover:bg-[#d5e0ec]"  colSpan={4} >
                    <div className="flex items-center p-1 mr-4">
                      <Link2 className="w-4 h-4 text-[#4a7bf9] mr-2" />
                      <span className="text-sm text-[#757575]">Q3 Financial Overview</span>
                      <RefreshCcw className="w-4 h-4 text-[#f18723] ml-2 cursor-pointer hover:text-[#121212]" />
                    </div>
                  </TableHead>
                 <TableHead className="col-span-1 " />
                  <TableHead colSpan={1} className="p-0 bg-[#d3f2e3] hover:bg-[#90f5c4]">
                    <div className="flex justify-center space-x-2 px-2 py-1">
                      <div className="text-[#0a6e3d]  flex items-center space-x-1">
                        <img src="./arrow.png" alt="" height={16} width={16} />
                        <span className="mx-3">ABC</span>
                        <Ellipsis />
                      </div> 
                    </div>
                  </TableHead>
                  <TableHead colSpan={2} className="p-0 bg-[#dccffc] hover:bg-[#c0a7f4]">
                    <div className="flex justify-center space-x-2 px-2 py-1">
                      <div  className="text-[#463e59] flex items-center space-x-1">
                        <img src="./arrow.png" alt="" height={16} width={16} />
                        <span className="mx-3">Answer a question</span>
                        <Ellipsis />
                      </div>
                    </div>
                  </TableHead>
                  <TableHead colSpan={1} className="p-0 bg-[#FAC2AF] hover:bg-[#fca18b]">
                    <div className="flex justify-center space-x-2 px-2 py-1">
                      <div className="text-[#695149] flex items-center space-x-1 w-auto">
                        <img src="./arrow.png" alt="" height={16} width={16} />
                        <span className="mx-3">Extract</span>
                        <Ellipsis />
                      </div>
                    </div>
                  </TableHead>
                  {/* Fill remaining columns with empty heads if needed */}
                  <TableHead colSpan={1} className="text-center" >+</TableHead>
                </TableRow>

                {/* Column Headers Row */}
                <TableRow className="bg-[#f8fafc] border-b border-[#e2e2e2] divide-x divide-[#e2e2e2] text-sm">
                  <TableHead className="w-[40px] text-center text-[#757575] font-medium">#</TableHead>

                 <TableHead className="w-[140px] text-[#757575] font-medium">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1">
                      <BriefcaseBusiness className="w-4 h-4" />
                      Job Request
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </TableHead>


                 <TableHead className="w-[120px] text-[#757575] font-medium">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        Submitted
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </TableHead>


                  <TableHead className="w-[100px] text-[#757575] font-medium">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Status
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </TableHead>


                  <TableHead className="w-[140px] text-[#757575] font-medium">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        <UserRound className="w-4 h-4" />
                        Submitter
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </TableHead>


                  <TableHead className="w-[180px] text-[#757575] font-medium">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        URL
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </TableHead>

                  <TableHead className="w-[160px] bg-[#E8F0E9] text-[#666C66] font-medium">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        {/* Your custom SVG */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00002 5.00017V1.16667C5.00002 0.890529 5.22388 0.666672 5.50002 0.666672C5.77616 0.666672 6.00002 0.890529 6.00002 1.16667V5.00017C6.00002 5.18426 6.14926 5.3335 6.33335 5.3335C6.51745 5.3335 6.66669 5.18426 6.66669 5.00017V1.66667C6.66669 1.39053 6.89054 1.16667 7.16669 1.16667C7.44283 1.16667 7.66669 1.39053 7.66669 1.66667V5.50001C7.66669 5.51415 7.6661 5.52815 7.66495 5.542C7.95311 5.43312 8.31394 5.3308 8.66669 5.3308C8.99991 5.3308 9.28491 5.41403 9.49617 5.52043C9.60046 5.57296 9.69747 5.63652 9.77672 5.7086C9.81567 5.74403 9.86063 5.79083 9.89973 5.84899C9.93045 5.8947 10 6.00874 10 6.16667C10 6.33907 9.91121 6.4993 9.76502 6.59067L8.49412 7.38498L7.3889 8.64564L6.47071 9.91038C6.1258 10.3855 5.57422 10.6666 4.98713 10.6666H4.22811C3.60746 10.6666 3.01235 10.3514 2.69151 9.79257C2.49008 9.44174 2.24072 8.98076 2.04023 8.52452C1.84951 8.09048 1.66669 7.58261 1.66669 7.16664V2.50001C1.66669 2.22386 1.89054 2.00001 2.16669 2.00001C2.44283 2.00001 2.66669 2.22386 2.66669 2.50001V5.33196C2.66669 5.51605 2.81593 5.66529 3.00002 5.66529C3.18412 5.66529 3.33335 5.51605 3.33335 5.33196V1.66667C3.33335 1.39053 3.55721 1.16667 3.83335 1.16667C4.1095 1.16667 4.33335 1.39053 4.33335 1.66667V5.00017C4.33335 5.18426 4.48259 5.3335 4.66669 5.3335C4.85078 5.3335 5.00002 5.18426 5.00002 5.00017ZM9.99996 14.6667C7.86575 14.6667 6.06615 13.234 5.51044 11.278C6.10765 11.1501 6.6442 10.8061 7.01014 10.3021L7.91033 9.06211L8.93064 7.8983L10.1183 7.15602C10.4594 6.94282 10.6666 6.56894 10.6666 6.16669C10.6666 5.81248 10.5114 5.56406 10.453 5.47709C10.4203 5.42851 10.3864 5.38501 10.3532 5.34652C12.7655 5.52706 14.6666 7.54152 14.6666 10C14.6666 12.5773 12.5773 14.6667 9.99996 14.6667ZM12 9.33335C12 8.96516 11.7015 8.66669 11.3333 8.66669C10.9651 8.66669 10.6666 8.96516 10.6666 9.33335C10.6666 9.70154 10.9651 10 11.3333 10C11.7015 10 12 9.70154 12 9.33335ZM8.0915 11.1415C7.89248 11.3329 7.88633 11.6494 8.07776 11.8484C8.56232 12.3522 9.24478 12.6667 9.99983 12.6667C10.7549 12.6667 11.4374 12.3522 11.9219 11.8484C12.1133 11.6494 12.1072 11.3329 11.9082 11.1415C11.7092 10.95 11.3926 10.9562 11.2012 11.1552C10.8974 11.4711 10.4719 11.6667 9.99983 11.6667C9.52781 11.6667 9.10231 11.4711 8.79847 11.1552C8.60704 10.9562 8.29051 10.95 8.0915 11.1415ZM9.3333 9.33335C9.3333 8.96516 9.03482 8.66669 8.66663 8.66669C8.29844 8.66669 7.99996 8.96516 7.99996 9.33335C7.99996 9.70154 8.29844 10 8.66663 10C9.03482 10 9.3333 9.70154 9.3333 9.33335Z" fill="#83A588"/>
                    <path d="M5.00002 5.00017V1.16667C5.00002 0.890529 5.22388 0.666672 5.50002 0.666672C5.77616 0.666672 6.00002 0.890529 6.00002 1.16667V5.00017C6.00002 5.18426 6.14926 5.3335 6.33335 5.3335C6.51745 5.3335 6.66669 5.18426 6.66669 5.00017V1.66667C6.66669 1.39053 6.89054 1.16667 7.16669 1.16667C7.44283 1.16667 7.66669 1.39053 7.66669 1.66667V5.50001C7.66669 5.51415 7.6661 5.52815 7.66495 5.542C7.95311 5.43312 8.31394 5.3308 8.66669 5.3308C8.99991 5.3308 9.28491 5.41403 9.49617 5.52043C9.60046 5.57296 9.69747 5.63652 9.77672 5.7086C9.81567 5.74403 9.86063 5.79083 9.89973 5.84899C9.93045 5.8947 10 6.00874 10 6.16667C10 6.33907 9.91121 6.4993 9.76502 6.59067L8.49412 7.38498L7.3889 8.64564L6.47071 9.91038C6.1258 10.3855 5.57422 10.6666 4.98713 10.6666H4.22811C3.60746 10.6666 3.01235 10.3514 2.69151 9.79257C2.49008 9.44174 2.24072 8.98076 2.04023 8.52452C1.84951 8.09048 1.66669 7.58261 1.66669 7.16664V2.50001C1.66669 2.22386 1.89054 2.00001 2.16669 2.00001C2.44283 2.00001 2.66669 2.22386 2.66669 2.50001V5.33196C2.66669 5.51605 2.81593 5.66529 3.00002 5.66529C3.18412 5.66529 3.33335 5.51605 3.33335 5.33196V1.66667C3.33335 1.39053 3.55721 1.16667 3.83335 1.16667C4.1095 1.16667 4.33335 1.39053 4.33335 1.66667V5.00017C4.33335 5.18426 4.48259 5.3335 4.66669 5.3335C4.85078 5.3335 5.00002 5.18426 5.00002 5.00017ZM9.99996 14.6667C7.86575 14.6667 6.06615 13.234 5.51044 11.278C6.10765 11.1501 6.6442 10.8061 7.01014 10.3021L7.91033 9.06211L8.93064 7.8983L10.1183 7.15602C10.4594 6.94282 10.6666 6.56894 10.6666 6.16669C10.6666 5.81248 10.5114 5.56406 10.453 5.47709C10.4203 5.42851 10.3864 5.38501 10.3532 5.34652C12.7655 5.52706 14.6666 7.54152 14.6666 10C14.6666 12.5773 12.5773 14.6667 9.99996 14.6667ZM12 9.33335C12 8.96516 11.7015 8.66669 11.3333 8.66669C10.9651 8.66669 10.6666 8.96516 10.6666 9.33335C10.6666 9.70154 10.9651 10 11.3333 10C11.7015 10 12 9.70154 12 9.33335ZM8.0915 11.1415C7.89248 11.3329 7.88633 11.6494 8.07776 11.8484C8.56232 12.3522 9.24478 12.6667 9.99983 12.6667C10.7549 12.6667 11.4374 12.3522 11.9219 11.8484C12.1133 11.6494 12.1072 11.3329 11.9082 11.1415C11.7092 10.95 11.3926 10.9562 11.2012 11.1552C10.8974 11.4711 10.4719 11.6667 9.99983 11.6667C9.52781 11.6667 9.10231 11.4711 8.79847 11.1552C8.60704 10.9562 8.29051 10.95 8.0915 11.1415ZM9.3333 9.33335C9.3333 8.96516 9.03482 8.66669 8.66663 8.66669C8.29844 8.66669 7.99996 8.96516 7.99996 9.33335C7.99996 9.70154 8.29844 10 8.66663 10C9.03482 10 9.3333 9.70154 9.3333 9.33335Z" fill="black" fill-opacity="0.7"/>
                    <path d="M5.00002 5.00017V1.16667C5.00002 0.890529 5.22388 0.666672 5.50002 0.666672C5.77616 0.666672 6.00002 0.890529 6.00002 1.16667V5.00017C6.00002 5.18426 6.14926 5.3335 6.33335 5.3335C6.51745 5.3335 6.66669 5.18426 6.66669 5.00017V1.66667C6.66669 1.39053 6.89054 1.16667 7.16669 1.16667C7.44283 1.16667 7.66669 1.39053 7.66669 1.66667V5.50001C7.66669 5.51415 7.6661 5.52815 7.66495 5.542C7.95311 5.43312 8.31394 5.3308 8.66669 5.3308C8.99991 5.3308 9.28491 5.41403 9.49617 5.52043C9.60046 5.57296 9.69747 5.63652 9.77672 5.7086C9.81567 5.74403 9.86063 5.79083 9.89973 5.84899C9.93045 5.8947 10 6.00874 10 6.16667C10 6.33907 9.91121 6.4993 9.76502 6.59067L8.49412 7.38498L7.3889 8.64564L6.47071 9.91038C6.1258 10.3855 5.57422 10.6666 4.98713 10.6666H4.22811C3.60746 10.6666 3.01235 10.3514 2.69151 9.79257C2.49008 9.44174 2.24072 8.98076 2.04023 8.52452C1.84951 8.09048 1.66669 7.58261 1.66669 7.16664V2.50001C1.66669 2.22386 1.89054 2.00001 2.16669 2.00001C2.44283 2.00001 2.66669 2.22386 2.66669 2.50001V5.33196C2.66669 5.51605 2.81593 5.66529 3.00002 5.66529C3.18412 5.66529 3.33335 5.51605 3.33335 5.33196V1.66667C3.33335 1.39053 3.55721 1.16667 3.83335 1.16667C4.1095 1.16667 4.33335 1.39053 4.33335 1.66667V5.00017C4.33335 5.18426 4.48259 5.3335 4.66669 5.3335C4.85078 5.3335 5.00002 5.18426 5.00002 5.00017ZM9.99996 14.6667C7.86575 14.6667 6.06615 13.234 5.51044 11.278C6.10765 11.1501 6.6442 10.8061 7.01014 10.3021L7.91033 9.06211L8.93064 7.8983L10.1183 7.15602C10.4594 6.94282 10.6666 6.56894 10.6666 6.16669C10.6666 5.81248 10.5114 5.56406 10.453 5.47709C10.4203 5.42851 10.3864 5.38501 10.3532 5.34652C12.7655 5.52706 14.6666 7.54152 14.6666 10C14.6666 12.5773 12.5773 14.6667 9.99996 14.6667ZM12 9.33335C12 8.96516 11.7015 8.66669 11.3333 8.66669C10.9651 8.66669 10.6666 8.96516 10.6666 9.33335C10.6666 9.70154 10.9651 10 11.3333 10C11.7015 10 12 9.70154 12 9.33335ZM8.0915 11.1415C7.89248 11.3329 7.88633 11.6494 8.07776 11.8484C8.56232 12.3522 9.24478 12.6667 9.99983 12.6667C10.7549 12.6667 11.4374 12.3522 11.9219 11.8484C12.1133 11.6494 12.1072 11.3329 11.9082 11.1415C11.7092 10.95 11.3926 10.9562 11.2012 11.1552C10.8974 11.4711 10.4719 11.6667 9.99983 11.6667C9.52781 11.6667 9.10231 11.4711 8.79847 11.1552C8.60704 10.9562 8.29051 10.95 8.0915 11.1415ZM9.3333 9.33335C9.3333 8.96516 9.03482 8.66669 8.66663 8.66669C8.29844 8.66669 7.99996 8.96516 7.99996 9.33335C7.99996 9.70154 8.29844 10 8.66663 10C9.03482 10 9.3333 9.70154 9.3333 9.33335Z" fill="white" fill-opacity="0.16"/>
                        </svg>
                        Assigned
                      </div>
                    </div>
                  </TableHead>


                  <TableHead className="w-[100px] bg-[#EAE3FC] text-[#655C80] font-medium">Priority</TableHead>
                  <TableHead className="w-[100px] bg-[#EAE3FC] text-[#655C80] font-medium">Due Date</TableHead>
                  <TableHead className="w-[140px] bg-[#FFE9E0] text-[#757575] font-medium">Est. Value</TableHead>
                  <TableHead className="w-[100px] text-[#757575] font-medium text-center"></TableHead>
                </TableRow>
              </TableHeader>

            <TableBody>
              {jobData.map((job) => (
                <TableRow key={job.id} className="border-b border-[#f6f6f6] hover:bg-[#f8fafc] divide-x divide-[#e2e2e2]">
                  <TableCell className="text-center text-[#757575] font-medium">{job.id}</TableCell>
                  <TableCell className="text-[#121212] max-w-xs">
                    <div className="truncate">{job.task}</div>
                  </TableCell>
                  <TableCell className="text-[#757575] text-end">{job.submitted}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={`${getStatusColor(job.status)} `}>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#121212]">{job.submitter}</TableCell>
                  <TableCell>
                    <a href={`https://${job.url}`} className="text-[#1a8cff] hover:underline text-sm">
                      {job.url}
                    </a>
                  </TableCell>
                  <TableCell className="text-[#121212]">{job.assigned}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className={getPriorityColor(job.priority)}>
                      {job.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#757575] text-end">{job.dueDate}</TableCell>
                  <TableCell className="text-[#757575] text-end">{job.estValue} ₹</TableCell>
                  <TableCell className="text-[#121212] font-medium"></TableCell>
                </TableRow>
              ))}
              {/* Empty rows */}
              {Array.from({ length: 20 }, (_, i) => (
                <TableRow key={`empty-${i}`} className="border-b border-[#f6f6f6] hover:bg-[#f8fafc] divide-x divide-[#e2e2e2]">
                  <TableCell className="text-center text-[#757575] font-medium">{jobData.length + i + 1}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#ffffff] border-t border-[#e2e2e2] px-4 py-0 m-0">
       <div className="flex h-auto w-1/3 border-b border-[#e2e2e2] ml-6 mt-0">
          {["All Orders", "Pending", "Reviewed", "Arrived"].map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab(tab)}
              className={`
                flex-1/2 
                rounded-none 
                justify-center 
                py-6
                border-t-2 
                ${activeTab === tab 
                  ? "border-[#4b6a4f] text-[#4b6a4f] bg-[#E8F0E9] font-medium" 
                  : "border-transparent text-[#757575] hover:bg-[#f8fafc]"}
              `}
            >
              {tab}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="rounded-none text-[#757575] hover:bg-[#f8fafc] px-3"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
