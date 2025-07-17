
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const SignupScreen = () => {
  const navigate = useNavigate();
  const [signupMethod, setSignupMethod] = useState<'phone' | 'email'>('phone');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    countryCode: '+91'
  });

  const handleContinue = () => {
    // Store signup data in localStorage for OTP verification
    localStorage.setItem('signupData', JSON.stringify(formData));
    localStorage.setItem('verificationType', signupMethod);
    navigate('/otp');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/')}
          className="p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold text-gray-900">Create Account</h1>
        <div className="w-9" />
      </div>

      <div className="flex-1 px-6">
        <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="h-12 rounded-xl border-gray-200"
              />
            </div>

            {/* Signup Method Tabs */}
            <div className="space-y-4">
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setSignupMethod('phone')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors ${
                    signupMethod === 'phone' 
                      ? 'bg-white text-teal-600 shadow-sm' 
                      : 'text-gray-600'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Phone</span>
                </button>
                <button
                  onClick={() => setSignupMethod('email')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors ${
                    signupMethod === 'email' 
                      ? 'bg-white text-teal-600 shadow-sm' 
                      : 'text-gray-600'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Email</span>
                </button>
              </div>

              {/* Phone Input */}
              {signupMethod === 'phone' && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <div className="flex space-x-2">
                    <select 
                      value={formData.countryCode}
                      onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                      className="h-12 px-3 rounded-xl border border-gray-200 bg-white text-sm"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </select>
                    <Input
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="flex-1 h-12 rounded-xl border-gray-200"
                    />
                  </div>
                </div>
              )}

              {/* Email Input */}
              {signupMethod === 'email' && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12 rounded-xl border-gray-200"
                  />
                </div>
              )}
            </div>

            <Button 
              onClick={handleContinue}
              disabled={!formData.name || (signupMethod === 'phone' && !formData.phone) || (signupMethod === 'email' && !formData.email)}
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-4 rounded-xl text-base font-medium"
            >
              Continue
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button 
                  onClick={() => navigate('/login')}
                  className="text-teal-600 font-medium hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </Card>

        <p className="text-center text-xs text-gray-500 mt-6 px-4 leading-relaxed">
          We'll send you a verification code to confirm your {signupMethod === 'phone' ? 'phone number' : 'email address'}
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
