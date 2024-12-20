import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Calendar, Clock, CreditCard } from 'lucide-react'
import Access from "./components/acess"
import Profile from "./components/profile"

export default function SetupDashboard() {
  return (
    <div className="p-6">
      <Tabs defaultValue="setup" className="space-y-6">
        <TabsList>
          <TabsTrigger value="setup">KEKA SETUP</TabsTrigger>
          <TabsTrigger value="dashboard">DASHBOARD</TabsTrigger>
          <TabsTrigger value="welcome">WELCOME</TabsTrigger>
          <TabsTrigger value="support">SUPPORT INFO</TabsTrigger>
        </TabsList>

        <TabsContent value="setup" className="space-y-6">
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Core Setup</h2>
            <Progress value={100} className="h-2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Org Setup",
                  icon: <Building2 className="h-6 w-6" />,
                  date: "STARTED 05 JAN, 2024",
                  completed: "Completed on 05 Jan, 2024"
                },
                {
                  title: "Leave",
                  icon: <Calendar className="h-6 w-6" />,
                  date: "STARTED 05 JAN, 2024",
                  completed: "Completed on 04 Jul, 2024"
                },
                {
                  title: "Attendance",
                  icon: <Clock className="h-6 w-6" />,
                  date: "STARTED 05 JAN, 2024",
                  completed: "Completed on 05 Jan, 2024"
                },
                {
                  title: "Payroll",
                  icon: <CreditCard className="h-6 w-6" />,
                  date: "STARTED 05 JAN, 2024",
                  completed: "Completed on 05 Jan, 2024"
                }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <h3 className="font-medium">{item.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                      <p className="text-xs text-green-600">{item.completed}</p>
                      <Progress value={100} className="h-1.5" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Imports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Employee Personal Details",
                "Employee Job Details",
                "Carryover Leave Balance",
                "Consumed Leave Balance",
                "Current Salaries Import",
                "Previous Salaries Import"
              ].map((title, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Not Started</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="dashboard">
          <Access/>
        </TabsContent>
        <TabsContent value="welcome">
          <Profile/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

