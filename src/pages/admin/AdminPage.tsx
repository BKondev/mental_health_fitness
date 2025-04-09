
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  Users, 
  ShoppingCart, 
  Settings, 
  LogOut,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const closeSidebarOnMobile = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white border-sand-200"
        >
          {sidebarOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-20 h-full w-64 bg-white border-r border-sand-200 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-sand-200">
            <Link to="/" className="text-lg font-semibold text-sand-800">
              MHF Admin
            </Link>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-1">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center px-3 py-2 text-sand-700 hover:bg-sand-100 rounded-md"
                  onClick={closeSidebarOnMobile}
                >
                  <LayoutDashboard className="mr-3 h-5 w-5" />
                  Dashboard
                </Link>
              </li>

              <li>
                <button
                  onClick={() => toggleDropdown('products')}
                  className="w-full flex items-center justify-between px-3 py-2 text-sand-700 hover:bg-sand-100 rounded-md"
                >
                  <div className="flex items-center">
                    <Package className="mr-3 h-5 w-5" />
                    Products
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'products' && (
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>
                      <Link
                        to="/admin/products"
                        className="block px-3 py-2 text-sand-600 hover:text-sand-800 hover:bg-sand-100 rounded-md"
                        onClick={closeSidebarOnMobile}
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/products/add"
                        className="block px-3 py-2 text-sand-600 hover:text-sand-800 hover:bg-sand-100 rounded-md"
                        onClick={closeSidebarOnMobile}
                      >
                        Add Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/products/categories"
                        className="block px-3 py-2 text-sand-600 hover:text-sand-800 hover:bg-sand-100 rounded-md"
                        onClick={closeSidebarOnMobile}
                      >
                        Categories
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  onClick={() => toggleDropdown('programs')}
                  className="w-full flex items-center justify-between px-3 py-2 text-sand-700 hover:bg-sand-100 rounded-md"
                >
                  <div className="flex items-center">
                    <FileText className="mr-3 h-5 w-5" />
                    Programs
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'programs' && (
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>
                      <Link
                        to="/admin/programs"
                        className="block px-3 py-2 text-sand-600 hover:text-sand-800 hover:bg-sand-100 rounded-md"
                        onClick={closeSidebarOnMobile}
                      >
                        All Programs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/programs/add"
                        className="block px-3 py-2 text-sand-600 hover:text-sand-800 hover:bg-sand-100 rounded-md"
                        onClick={closeSidebarOnMobile}
                      >
                        Add Program
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/admin/users"
                  className="flex items-center px-3 py-2 text-sand-700 hover:bg-sand-100 rounded-md"
                  onClick={closeSidebarOnMobile}
                >
                  <Users className="mr-3 h-5 w-5" />
                  Users
                </Link>
              </li>

              <li>
                <Link
                  to="/admin/orders"
                  className="flex items-center px-3 py-2 text-sand-700 hover:bg-sand-100 rounded-md"
                  onClick={closeSidebarOnMobile}
                >
                  <ShoppingCart className="mr-3 h-5 w-5" />
                  Orders
                </Link>
              </li>

              <li className="pt-4 mt-4 border-t border-sand-200">
                <Link
                  to="/admin/settings"
                  className="flex items-center px-3 py-2 text-sand-700 hover:bg-sand-100 rounded-md"
                  onClick={closeSidebarOnMobile}
                >
                  <Settings className="mr-3 h-5 w-5" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t border-sand-200">
            <Button
              variant="ghost"
              className="w-full justify-start text-sand-700 hover:text-sand-900 hover:bg-sand-100"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Log out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        <header className="bg-white border-b border-sand-200 h-16 fixed right-0 left-0 top-0 lg:left-64 z-10">
          <div className="flex items-center justify-end h-full px-6">
            <div className="flex items-center">
              <span className="text-sm text-sand-600 mr-2">Admin User</span>
              <div className="h-8 w-8 rounded-full bg-sand-200 flex items-center justify-center text-sand-700 font-medium">
                AU
              </div>
            </div>
          </div>
        </header>

        <main className="pt-16 min-h-screen">
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-sand-800">Admin Dashboard</h1>
              <p className="text-sand-600">Welcome to the Mental Health Fitness admin panel.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white border border-sand-200 rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="bg-sand-100 p-3 rounded-full">
                    <Package className="h-6 w-6 text-sand-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-sand-600">Total Products</h3>
                    <p className="text-2xl font-semibold text-sand-800">24</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-sand-200 rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="bg-sand-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-sand-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-sand-600">Total Users</h3>
                    <p className="text-2xl font-semibold text-sand-800">621</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-sand-200 rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="bg-sand-100 p-3 rounded-full">
                    <ShoppingCart className="h-6 w-6 text-sand-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-sand-600">Total Orders</h3>
                    <p className="text-2xl font-semibold text-sand-800">156</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-sand-200 rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="bg-sand-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-sand-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-sand-600">Total Programs</h3>
                    <p className="text-2xl font-semibold text-sand-800">12</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white border border-sand-200 rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-sand-800 mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-sand-200">
                    <thead>
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-sand-500 uppercase tracking-wider">Order ID</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-sand-500 uppercase tracking-wider">Customer</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-sand-500 uppercase tracking-wider">Status</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-sand-500 uppercase tracking-wider">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sand-200">
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-800">#1234</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">John Doe</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">$49.99</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-800">#1235</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">Sarah Johnson</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">$149.99</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-800">#1236</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">Mike Smith</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Processing</span>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">$29.99</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-800">#1237</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">Lisa Brown</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">$79.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white border border-sand-200 rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-sand-800 mb-4">Recent Users</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-sand-200">
                    <thead>
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-sand-500 uppercase tracking-wider">Name</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-sand-500 uppercase tracking-wider">Email</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-sand-500 uppercase tracking-wider">Status</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-sand-500 uppercase tracking-wider">Joined</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sand-200">
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-800">Emily Wilson</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">emily@example.com</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">Today</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-800">Robert Clark</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">robert@example.com</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">Yesterday</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-800">Amanda Lee</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">amanda@example.com</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Inactive</span>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">2 days ago</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-800">David Miller</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">david@example.com</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-sand-700">3 days ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminPage;
