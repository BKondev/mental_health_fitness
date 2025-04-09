
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-semibold text-sand-800">Mental Health Fitness</h1>
          </Link>
        </div>
        
        <Card className="border-sand-200">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center font-bold text-sand-800">Create an account</CardTitle>
            <p className="text-center text-sand-600">
              Enter your details to get started
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-sand-400" />
                    <Input 
                      id="first-name" 
                      placeholder="John" 
                      className="pl-10 border-sand-200" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input 
                    id="last-name" 
                    placeholder="Doe" 
                    className="border-sand-200" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-sand-400" />
                  <Input 
                    id="email" 
                    placeholder="name@example.com" 
                    type="email" 
                    className="pl-10 border-sand-200" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-sand-400" />
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="pl-10 pr-10 border-sand-200" 
                    required 
                  />
                  <button 
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-2.5 text-sand-400 hover:text-sand-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-sand-500">
                  Must be at least 8 characters with uppercase, lowercase, and special characters
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-sand-400" />
                  <Input 
                    id="confirm-password" 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="pl-10 pr-10 border-sand-200" 
                    required 
                  />
                  <button 
                    type="button"
                    onClick={toggleShowConfirmPassword}
                    className="absolute right-3 top-2.5 text-sand-400 hover:text-sand-600"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="rounded border-sand-300 mt-0.5"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-sand-600">
                    By creating an account, I agree to the{" "}
                    <Link to="/terms" className="text-sand-700 hover:text-sand-800 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-sand-700 hover:text-sand-800 underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-sand-500 hover:bg-sand-600">
                Create Account
              </Button>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-sand-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-sand-500">Or sign up with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-sand-200">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" aria-hidden="true">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="border-sand-200">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" aria-hidden="true">
                    <path
                      d="M16.6725 2.75s-3.1425 0-3.1425 3.145v3.1575h-3.13v4.2075h3.13v8.54H17.5v-8.54h3.1425l.78-4.2075H17.5V6.4475c0-1.155.87-2.1 1.9575-2.1H21.5V1.05C21.5 1.05 19.3175.7875 18.24.7875c-2.1175 0-5.27 1.26-5.27 6.1425v2.155H9.5v4.2075h3.47V21.75h3.7025v-8.54h3.13l.7775-4.2075h-3.9075V5.895c0-1.155.8725-2.1 1.9575-2.1H21.5"
                      fill="currentColor"
                    />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-center text-sm text-sand-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-sand-700 hover:text-sand-800">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
