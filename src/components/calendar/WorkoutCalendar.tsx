
import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight, CheckCircle, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkoutDay {
  date: Date;
  completed: boolean;
  workoutName?: string;
  duration?: string;
}

const WorkoutCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Mock data for workout history
  const workoutHistory: WorkoutDay[] = [
    {
      date: new Date(2025, 3, 1), // April 1, 2025
      completed: true,
      workoutName: "Morning Flow Yoga",
      duration: "20 min"
    },
    {
      date: new Date(2025, 3, 2), // April 2, 2025
      completed: true,
      workoutName: "Full Body Strength",
      duration: "30 min"
    },
    {
      date: new Date(2025, 3, 4), // April 4, 2025
      completed: true,
      workoutName: "Stress Relief Meditation",
      duration: "15 min"
    },
    {
      date: new Date(2025, 3, 5), // April 5, 2025
      completed: true,
      workoutName: "Core Power Yoga",
      duration: "25 min"
    },
    {
      date: new Date(2025, 3, 7), // April 7, 2025
      completed: true,
      workoutName: "Full Body Stretch",
      duration: "20 min"
    },
    {
      date: new Date(2025, 3, 8), // April 8, 2025
      completed: true,
      workoutName: "Morning Flow Yoga",
      duration: "20 min"
    },
  ];

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const dateRange = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const isWorkoutDay = (day: Date) => {
    return workoutHistory.some(workout => isSameDay(workout.date, day));
  };

  const getWorkoutDetails = (day: Date) => {
    return workoutHistory.find(workout => isSameDay(workout.date, day));
  };

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle>Your Workout Calendar</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="font-medium">
                {format(currentMonth, "MMMM yyyy")}
              </div>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
              <div 
                key={day} 
                className="text-center py-2 text-sm font-medium text-sand-700"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {dateRange.map((day, i) => (
              <Button
                key={i}
                variant="ghost"
                className={`h-12 p-0 relative ${
                  isSameMonth(day, currentMonth) 
                    ? "text-sand-800" 
                    : "text-sand-400"
                } ${
                  selectedDate && isSameDay(day, selectedDate)
                    ? "bg-sand-100 hover:bg-sand-200"
                    : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                <div className="flex flex-col items-center justify-center w-full h-full">
                  {format(day, "d")}
                  {isWorkoutDay(day) && (
                    <div className="absolute bottom-1">
                      <CheckCircle size={12} className="text-sand-500 fill-sand-500" />
                    </div>
                  )}
                </div>
              </Button>
            ))}
          </div>
          
          {selectedDate && (
            <div className="mt-6 p-4 bg-sand-50 rounded-lg">
              <h3 className="font-medium text-lg mb-2">
                {format(selectedDate, "MMMM d, yyyy")}
              </h3>
              
              {isWorkoutDay(selectedDate) ? (
                <div>
                  <div className="flex items-center text-sand-800">
                    <CheckCircle size={16} className="text-sand-500 fill-sand-500 mr-2" />
                    <span className="font-medium">Workout Completed</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sand-700">
                      <span className="font-medium">Workout:</span> {getWorkoutDetails(selectedDate)?.workoutName}
                    </p>
                    <p className="text-sand-700">
                      <span className="font-medium">Duration:</span> {getWorkoutDetails(selectedDate)?.duration}
                    </p>
                  </div>
                  <Button className="mt-4 bg-sand-500 hover:bg-sand-600">
                    View Workout Details
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center py-6 text-center">
                  <CalendarIcon size={40} className="text-sand-400 mb-2" />
                  <p className="text-sand-600 mb-4">No workout completed on this day.</p>
                  <Button className="bg-sand-500 hover:bg-sand-600">
                    Find a Workout
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutCalendar;
