'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, InfoIcon, MoreVertical } from "lucide-react"
import { FaPlaneDeparture } from "react-icons/fa"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: " #e9d5ff",
  },
} satisfies ChartConfig

const chartData = [
  { month: "January", desktop: 10 },
  { month: "February", desktop: 10 },
  { month: "March", desktop: 10 },
  { month: "April", desktop: 10 },
  { month: "May", desktop: 10 },
  { month: "June", desktop: 10 },
  { month: "July", desktop: 10 },
  { month: "August", desktop: 10 },
  { month: "September", desktop: 20 },
  { month: "October", desktop: 10 },
  { month: "November", desktop: 30 },
  { month: "December", desktop: 50 },
]

export default function LeavePage() {
  const [randomHeights, setRandomHeights] = useState<number[]>([])

  useEffect(() => {
    const heights = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
      () => Math.floor(Math.random() * 100) + 20
    )
    setRandomHeights(heights)
  }, [])

  return (
    <main className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <Tabs defaultValue="leave" className="w-full">
          <TabsList>
            <TabsTrigger value="attendance">ATTENDANCE</TabsTrigger>
            <TabsTrigger value="leave">LEAVE</TabsTrigger>
            <TabsTrigger value="performance">PERFORMANCE</TabsTrigger>
            <TabsTrigger value="expenses">EXPENSES & TRAVEL</TabsTrigger>
            <TabsTrigger value="apps">APPS</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-8">
          <h2 className="text-lg font-semibold text-gray-800">Pending Leave Requests</h2>
          <div className="bg-gray-50 flex flex-row-reverse rounded-lg shadow p-6 space-y-6">
            <div className="flex flex-col mb-44 ml-4 justify-between items-center">
              <Button variant="outline" className="text-gray-700">
                Jan 2024 - Dec 2024
                <CalendarIcon className="ml-2 h-4 w-4 text-gray-600" />
              </Button>
              <div className="bg-white p-3 w-[15rem] border border-">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Request Leave
                </Button>
                <p className="text-purple-600  p-2 text-xs hover:text-purple-800">
                  Leave Policy Explanation
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  date: "Nov 14 - Nov 15, 2024",
                  days: "2 days",
                  type: "Earned Leave",
                  requestedOn: "Nov 06, 2024",
                  note: "Hi, I need to visit Varanasi on Dev Deepawali this year. Requesting you to please approve the leaves at the earliest."
                },
                {
                  date: "Nov 12, 2024 (First half)",
                  days: "0.5 day",
                  type: "Unpaid Leave",
                  requestedOn: "Nov 12, 2024",
                  note: "Due to the late-night meeting with a prospect, I got late, so applying for half day."
                }
              ].map((request, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-semibold">
                      <FaPlaneDeparture />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium text-gray-800">
                            {request.date}{" "}
                            <span className="text-gray-500">({request.days})</span>
                          </p>
                          <p className="text-sm text-gray-500">{request.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            Requested on {request.requestedOn}
                          </p>
                          <Button
                            variant="link"
                            className="text-purple-600 hover:text-purple-800 text-sm p-0"
                          >
                            View Approvers
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        <span className="font-medium">Leave Note:</span> {request.note}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">My Leave Stats</h2>
            <div className="flex gap-6 md:grid-cols-3">
              <Card className="h-[20rem]">
                <CardHeader>
                  <CardTitle className="flex items-center text-sm font-medium">
                    Weekly Pattern
                    <InfoIcon className="ml-2 h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex h-[200px] items-end justify-between gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                      <div key={day} className="flex flex-col items-center gap-2">
                        <div
                          className="w-8 bg-purple-200"
                          style={{ height: `${randomHeights[i] || 0}px` }}
                        />
                        <span className="text-sm text-gray-500">{day}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="h-[20rem] w-[15rem]">
                <CardHeader>
                  <CardTitle className="flex items-center text-sm font-medium">
                    Consumed Leave Types
                    <InfoIcon className="ml-2 h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-square">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-medium">Leave Types</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-[44rem]">
                <CardHeader>
                  <CardTitle className="flex items-center text-sm font-medium">
                    Monthly Stats
                    <InfoIcon className="ml-2 h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={3} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Leave Balances</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { title: "Casual Leave", value: 0, total: 6 },
                { title: "Earned Leave", value: 0.25, total: 1 },
                { title: "Short Leave", value: 2, total: 4, unit: "Hours" },
                { title: "Sick Leave", value: 0.5, total: 6 }
              ].map((balance, index) => (
                <Card key={index}>
                  <CardHeader className="flex justify-between">
                    <CardTitle className="flex items-center text-sm font-medium">
                      {balance.title}
                      <InfoIcon className="ml-2 h-4 w-4" />
                    </CardTitle>
                    <div>
                      <p className="text-xs text-gray-400">Total</p>
                      <p className="text-xs text-gray-800">
                        {balance.total} {balance.unit || "Days"}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-center text-xs text-gray-400">
                        {balance.value}/{balance.total}
                      </p>
                      <Progress
                        value={(balance.value / balance.total) * 100}
                        className="h-[10px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
