
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, CreditCard, Package, UserRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProfilePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="profile" className="text-sand-800">
                <UserRound className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="subscriptions" className="text-sand-800">
                <CreditCard className="h-4 w-4 mr-2" />
                Subscriptions
              </TabsTrigger>
              <TabsTrigger value="orders" className="text-sand-800">
                <Package className="h-4 w-4 mr-2" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="schedule" className="text-sand-800">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Workouts
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-sand-600">First Name</label>
                      <p className="font-medium">Jane</p>
                    </div>
                    <div>
                      <label className="text-sm text-sand-600">Last Name</label>
                      <p className="font-medium">Doe</p>
                    </div>
                    <div>
                      <label className="text-sm text-sand-600">Email</label>
                      <p className="font-medium">jane.doe@example.com</p>
                    </div>
                    <div>
                      <label className="text-sm text-sand-600">Phone</label>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-4">Account Settings</h3>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full sm:w-auto">
                        Update Profile
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto">
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto" disabled>
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="subscriptions">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">Monthly Membership</h3>
                          <p className="text-sm text-sand-600">Active</p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Current</span>
                      </div>
                      <p className="text-sm text-sand-600 mb-4">Access to all workouts, programs, and recipes</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">$19.99/month</span>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-sand-500 hover:bg-sand-600">View All Plans</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border border-sand-200 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">Order #MHF-1001</h3>
                          <p className="text-sm text-sand-600">March 15, 2025</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Delivered</span>
                      </div>
                      <p className="text-sm mb-2">2 items • $75.98</p>
                      <Button variant="outline" size="sm">View Order</Button>
                    </div>
                    
                    <div className="border border-sand-200 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">Order #MHF-982</h3>
                          <p className="text-sm text-sand-600">February 28, 2025</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Delivered</span>
                      </div>
                      <p className="text-sm mb-2">1 item • $29.99</p>
                      <Button variant="outline" size="sm">View Order</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>My Workouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Morning Flow</h3>
                        <span className="text-sm text-sand-600">Completed on Apr 8, 2025</span>
                      </div>
                      <p className="text-sm text-sand-600 mb-2">30 min • Low Impact</p>
                      <Button variant="outline" size="sm">View Workout</Button>
                    </div>
                    
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">Core Strength</h3>
                        <span className="text-sm text-sand-600">Completed on Apr 7, 2025</span>
                      </div>
                      <p className="text-sm text-sand-600 mb-2">20 min • Medium Impact</p>
                      <Button variant="outline" size="sm">View Workout</Button>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="bg-sand-500 hover:bg-sand-600">View All Workouts</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
