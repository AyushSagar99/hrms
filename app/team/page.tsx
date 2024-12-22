'use client'

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfoIcon } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { date: 'Dec 10', sickLeave: 1, earnedLeave: 0, unpaidLeave: 0 },
  { date: 'Dec 13', sickLeave: 0, earnedLeave: 1, unpaidLeave: 0.5 },
  { date: 'Dec 16', sickLeave: 0, earnedLeave: 1.2, unpaidLeave: 0 },
]

const leaveTypes = [
  { title: "TOTAL SICK LEAVE", value: "0.5 Leave" },
  { title: "TOTAL EARNED LEAVE", value: "2 Leave" },
  { title: "TOTAL UNPAID LEAVE", value: "1 Leave" },
  { title: "TOTAL FLOATER LEAVE", value: "0 Leave" },
  { title: "TOTAL SPECIAL LEAVE", value: "0 Leave" },
  { title: "TOTAL CASUAL LEAVE", value: "0 Leave" },
  { title: "TOTAL COMP OFFS", value: "0 Leave" },
  { title: "TOTAL SHORT LEAVE", value: "0 Leave" },
]

const employeeData = [
  {
    section: "Unplanned Leave",
    employees: [
      { name: "Dimpy Kumari", role: "Business Development Executive", status: "1 Instance", timeAgo: "8 days ago", initials: "DK" },
      { name: "Megha Mehrush", role: "Inside Sales Executive", status: "1 Instance", timeAgo: "5 days ago", initials: "MM" },
    ],
  },
  {
    section: "No Leave Taken",
    employees: [
      { name: "Chetan Sharma", role: "Inside Sales Executive", status: "Last Leave Taken", timeAgo: "23 days ago", initials: "CS" },
      { name: "Jatin Kumar", role: "Executive- Digital Marketing", status: "Last Leave Taken", timeAgo: "a month ago", initials: "JK" },
    ],
  },
  {
    section: "Most Leave Taken",
    employees: [
      { name: "Megha Mehrush", role: "Inside Sales Executive", status: "2 Instances", timeAgo: "15 Days", initials: "MM" },
      { name: "Priyanka Duggal", role: "Inside Sales Executive", status: "1 Instance", timeAgo: "1 Day", initials: "PD" },
    ],
  },
]

export default function LeaveOverview() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">

        <Tabs defaultValue="leave" className="w-full">
          <TabsList className="border-b border-gray-200">
            <TabsTrigger value="summary" className="hover:text-purple-600">SUMMARY</TabsTrigger>
            <TabsTrigger value="leave" className="hover:text-purple-600">LEAVE</TabsTrigger>
            <TabsTrigger value="attendance" className="hover:text-purple-600">ATTENDANCE</TabsTrigger>
            <TabsTrigger value="expenses" className="hover:text-purple-600">EXPENSES & TRAVEL</TabsTrigger>
            <TabsTrigger value="profile" className="hover:text-purple-600">PROFILE CHANGES</TabsTrigger>
            <TabsTrigger value="performance" className="hover:text-purple-600">PERFORMANCE</TabsTrigger>
          </TabsList>
        </Tabs>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-white shadow-sm rounded-lg">
            <TabsTrigger value="overview" className="hover:bg-gray-100">Leave Overview</TabsTrigger>
            <TabsTrigger value="approvals" className="hover:bg-gray-100">Leave Approvals</TabsTrigger>
            <TabsTrigger value="penalized" className="hover:bg-gray-100">Penalized Leave</TabsTrigger>
            <TabsTrigger value="past" className="hover:bg-gray-100">Past Leave Requests</TabsTrigger>
            <TabsTrigger value="encashment" className="hover:bg-gray-100">Encashment Requests</TabsTrigger>
            <TabsTrigger value="reports" className="hover:bg-gray-100">Reports</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-6">
            
          <Card className="bg-white shadow-sm rounded-lg">
            <CardHeader className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between ">
                <CardTitle className="text-base font-medium">Leave Consumption Trend</CardTitle>
                <p className="text-sm text-gray-500 flex gap-2 items-center">10 Dec 2024 - 16 Dec 2024 <InfoIcon className="h-4 w-4 text-gray-500" /></p>
              </div>
              
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
                {leaveTypes.map((type) => (
                  <div key={type.title} className="">
                    <p className="text-xs text-gray-400">{type.title}</p>
                    <p className="font-medium ml-1">{type.value}</p>
                  </div>
                ))}
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sickLeave" stroke="#8884d8" />
                    <Line type="monotone" dataKey="earnedLeave" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="unpaidLeave" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            {employeeData.map((section) => (
              <Card key={section.section} className="bg-white shadow-sm rounded-lg">
                <CardHeader className="p-4 border-b border-gray-200">
                  <CardTitle className="text-base font-medium">{section.section}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {section.employees.map((employee) => (
                    <div key={employee.name} className="flex items-center gap-3 py-3 border-b last:border-b-0">
                      <Avatar className="h-10 w-10 bg-purple-100 text-purple-600 font-bold">
                        <AvatarFallback>{employee.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-sm text-gray-500">{employee.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-800">{employee.timeAgo}</p>
                        <p className="text-xs text-gray-400">{employee.status}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
