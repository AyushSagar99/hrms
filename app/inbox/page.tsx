"use client"
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaPlaneDeparture, FaRegNewspaper } from "react-icons/fa";
import { RiFeedbackLine } from "react-icons/ri";

import LeaveRequests from "@/app/components/leave";
import Onboarding from "../components/onboard";
import ProbationFeedback from "../components/feedback";

export default function Inbox() {
  const [activeTask, setActiveTask] = useState<string | null>(null);

  const handleTaskClick = (task: string) => {
    setActiveTask(task);
  };

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <Tabs defaultValue="action" className="max-w-[90rem] mx-auto bg-white shadow-lg rounded-lg">
          
          <TabsList className="flex justify-start space-x-4 border-b border-gray-200">
            <TabsTrigger
              value="action"
              className="font-medium text-sm text-gray-700 py-3 px-4 hover:bg-gray-100 rounded-t-lg focus:bg-white focus:text-purple-600 focus:shadow-md"
            >
              Take Action (11)
            </TabsTrigger>
            <TabsTrigger
              value="notification"
              className="font-medium text-sm text-gray-700 py-3 px-4 hover:bg-gray-100 rounded-t-lg focus:bg-white focus:text-purple-600 focus:shadow-md"
            >
              Notification
            </TabsTrigger>
            <TabsTrigger
              value="archive"
              className="font-medium text-sm text-gray-700 py-3 px-4 hover:bg-gray-100 rounded-t-lg focus:bg-white focus:text-purple-600 focus:shadow-md"
            >
              Archive
            </TabsTrigger>
          </TabsList>

          <TabsContent value="action">
            <div className="flex gap-6">
             
              <div className="shadow-md w-[15rem] bg-gray-50 rounded-lg">
                <p className="bg-gray-200 w-full text-sm p-4 font-semibold text-gray-600 rounded-t-lg">
                  PENDING TASKS
                </p>
                <div className="space-y-2 p-4">
                  <p
                    onClick={() => handleTaskClick("leave")}
                    className={`text-sm p-3 flex gap-2 items-center font-medium text-gray-700 hover:bg-purple-100 cursor-pointer rounded-md transition ${
                      activeTask === "leave" ? "bg-purple-200 text-purple-800" : ""
                    }`}
                  >
                    <FaPlaneDeparture className="text-purple-500" /> Leave Requests (1)
                  </p>
                  <p
                    onClick={() => handleTaskClick("onboarding")}
                    className={`text-sm p-3 flex gap-2 items-center font-medium text-gray-700 hover:bg-purple-100 cursor-pointer rounded-md transition ${
                      activeTask === "onboarding" ? "bg-purple-200 text-purple-800" : ""
                    }`}
                  >
                    <FaRegNewspaper className="text-purple-500" /> Onboarding (9)
                  </p>
                  <p
                    onClick={() => handleTaskClick("feedback")}
                    className={`text-sm p-3 flex gap-2 items-center font-medium text-gray-700 hover:bg-purple-100 cursor-pointer rounded-md transition ${
                      activeTask === "feedback" ? "bg-purple-200 text-purple-800" : ""
                    }`}
                  >
                    <RiFeedbackLine className="text-purple-500" /> Probation Feedbacks (1)
                  </p>
                </div>
              </div>

              <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
                {activeTask === "leave" && <LeaveRequests />}
                {activeTask === "onboarding" && <Onboarding />}
                {activeTask === "feedback" && <ProbationFeedback />}
                {!activeTask && (
                  <div className="text-center text-gray-600">
                    <p className="text-lg font-semibold">Select a task to view details</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notification">
            <div className="p-6 bg-gray-50 rounded-b-lg shadow-md text-gray-600">
              <p>No new notifications</p>
            </div>
          </TabsContent>

          <TabsContent value="archive">
            <div className="p-6 bg-gray-50 rounded-b-lg shadow-md text-gray-600">
              <p>Your archived tasks will appear here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
