'use client'

import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Gift, MessageSquarePlus, PlusCircle, ThumbsUp } from 'lucide-react';
import { useRouter } from 'next/navigation'



export default function Access() {
  const [currentTime, setCurrentTime] = useState(() => new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      }))
    }, 1000)

    return () => clearInterval(interval) 
  }, [])

  

  const router = useRouter();

  const handleClick = () => {
    router.push("/inbox"); 
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        
        <div className="flex flex-col flex-1 gap-6">
         
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                Quick Access
                <Button variant="ghost" size="icon" className="ml-auto">
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">11</h3>
                  <p className="text-sm text-muted-foreground">
                    Tasks waiting for your approval. Please click on take action for more details.
                  </p>
                </div>
                <Button onClick={handleClick} >Take Action</Button>
              </div>
            </CardContent>
          </Card>

          
          <Card className="bg-red-500 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-90">Holidays</p>
                  <h3 className="text-2xl font-bold mt-1">CHRISTMAS</h3>
                  <p className="text-sm mt-1">Wed, 25 December, 2024</p>
                </div>
                <Button variant="link" className="text-white">
                  View All
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-100">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                <div>Time Today - {new Date().toLocaleDateString('en-US')}</div>
                <Button variant="link">View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5" />
                <div className="text-2xl font-bold">{currentTime}</div>
                <Button size="sm" variant="secondary">Web Clock-In</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col flex-1 gap-6">
       
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4 mb-6">
                <Button variant="outline" className="flex-1">
                  <MessageSquarePlus className="h-4 w-4 mr-2" />
                  Post
                </Button>
                <Button variant="outline" className="flex-1">Poll</Button>
                <Button variant="outline" className="flex-1">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Praise
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Announcements</h3>
                  <Button variant="ghost" size="sm">View more</Button>
                </div>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                          <Gift className="h-8 w-8 text-muted-foreground" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">Celebrate Independence Day</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Dear Team, We are excited to celebrate Indias Independence Day with a special event at the office.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <ThumbsUp className="h-4 w-4 mr-1" /> 1
                          </Button>
                          <span className="text-sm text-muted-foreground">0 comments</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4 border-b pb-4">
                <Button variant="ghost" className="flex-1">
                  <Gift className="h-4 w-4 mr-2" />
                  0 Birthdays
                </Button>
                <Button variant="ghost" className="flex-1">
                  0 Work Anniversaries
                </Button>
                <Button variant="ghost" className="flex-1">
                  0 New Joinees
                </Button>
              </div>

              <div className="py-4">
                <h4 className="font-medium mb-4">Upcoming Birthdays</h4>
                <div className="flex gap-2">
                  {['MM', 'JK', 'JK', 'NN', 'AJ'].map((initials, i) => (
                    <Avatar key={i}>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
