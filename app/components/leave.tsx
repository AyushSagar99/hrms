import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function LeaveDetail() {
  return (
    <div className="flex-1 p-6 w-[65rem]">
      <Card className="h-full">
        <div className="flex flex-col h-full">
          <div className="p-6 pb-0">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12 bg-teal-100">
                <AvatarFallback className="text-teal-600">MM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="font-medium">Megha Mehrush</h2>
                <p className="text-sm text-gray-500">
                  Requested by Megha Mehrush on Dec 17, 2024, 12:02 pm
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-4 items-center">
                <div className="text-center">
                  <div className="text-xs font-medium text-gray-500">DEC</div>
                  <div className="text-2xl font-medium">23</div>
                  <div className="text-xs text-gray-500">MON</div>
                </div>
                <div className="text-xl text-gray-400 mt-2">-</div>
                <div className="text-center">
                  <div className="text-xs font-medium text-gray-500">DEC</div>
                  <div className="text-2xl font-medium">24</div>
                  <div className="text-xs text-gray-500">TUE</div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">2 days of Earned Leave</p>
                <p className="text-sm text-gray-500">Leave starting 6 days from now</p>
              </div>
            </div>
          </div>

          <div className="px-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm">No teammates are on leave on this day</p>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="h-6 w-6 bg-teal-100">
                <AvatarFallback className="text-teal-600 text-xs">MM</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Megha Mehrush</span>
              <span className="text-sm text-gray-500">Dec 17, 2024, 12:02 pm</span>
            </div>
            <p className="text-sm text-gray-500">Note: Visiting Hometown for a festival</p>
          </div>

          <div className="mt-auto border-t p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Textarea 
                  placeholder="Add comment or reject reason here"
                  className="min-h-[80px] resize-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">0 / 1024</span>
                <div className="flex gap-2">
                  <Button variant="destructive">
                    Reject
                  </Button>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

