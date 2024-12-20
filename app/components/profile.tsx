import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { UploadIcon as FileUpload, Inbox, LeafyGreen, PieChart, Timer } from "lucide-react"

export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl space-y-10 rounded-xl bg-white p-8 shadow-lg">
        
        <div className="relative">
          <div className="absolute right-0 top-0 flex items-center gap-2">
            <Progress value={90} className="w-[100px]" />
            <div className="flex flex-col">
            <span className="text-sm text-gray-500">90%</span>
            </div>
          </div>

          <div className="flex items-start gap-8">
            <div className="text-center">
              <Avatar className="h-24 w-24 border-2 border-gray-200 shadow-sm">
                <AvatarFallback className="bg-gray-300 text-2xl">SP</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" className="mt-4">
                <FileUpload className="mr-2 h-4 w-4" />
                Upload a picture
              </Button>
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Sahil Popli</h1>
              <p className="text-gray-500">Business Unit: Web · Gurugram</p>
            </div>
          </div>
        </div>

        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Introduce Yourself</h2>
            <span className="text-sm text-gray-500">0/3</span>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">About</label>
              <Textarea placeholder="Tell us about yourself" className="min-h-[100px] border-gray-300" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">What I love about my job?</label>
              <Textarea placeholder="Share what excites you about your work" className="min-h-[100px] border-gray-300" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">My interests and hobbies</label>
              <Textarea placeholder="What do you enjoy doing outside of work?" className="min-h-[100px] border-gray-300" />
            </div>
          </div>
        </div>

        
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Explore Keka</h2>
          <p className="text-sm text-gray-500">Explore all things you can do in Keka</p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <PieChart className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2 text-gray-900">Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Find your salary, payslips and tax settings all in one place
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <LeafyGreen className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2 text-gray-900">Leaves</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Check your time-off policy, balances and apply for time off
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Timer className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2 text-gray-900">Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Log your attendance, view stats and attendance policy
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Inbox className="h-8 w-8 text-primary" />
                <CardTitle className="mt-2 text-gray-900">Inbox</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Take an action on tasks assigned to you
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
