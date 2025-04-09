
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkoutCalendar from "@/components/calendar/WorkoutCalendar";

const CalendarPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-medium text-wellness-800 mb-4">
              Your Workout Calendar
            </h1>
            <p className="text-wellness-600 max-w-xl mx-auto">
              Track your journey and view your completed workouts. 
              Each day you complete a workout will be marked with a green checkmark.
            </p>
          </div>
          <WorkoutCalendar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalendarPage;
