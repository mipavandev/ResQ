
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    countryCode: '+91'
  });

  const handleContinue = () => {
    localStorage.setItem('loginData', JSON.stringify(formData));
    localStorage.setItem('verificationType', loginMethod);
    navigate('/otp');
  };

  const handleBiometricLogin = () => {
    // Simulate biometric login
    navigate('/dashboard');
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
        <h1 className="text-lg font-semibold text-gray-900">Sign In</h1>
        <div className="w-9" />
      </div>

      <div className="flex-1 px-6">
        <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="space-y-6">
            {/* Login Method Tabs */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors ${
                  loginMethod === 'phone' 
                    ? 'bg-white text-teal-600 shadow-sm' 
                    : 'text-gray-600'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Phone</span>
              </button>
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-colors ${
                  loginMethod === 'email' 
                    ? 'bg-white text-teal-600 shadow-sm' 
                    : 'text-gray-600'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email</span>
              </button>
            </div>

            {/* Phone Input */}
            {loginMethod === 'phone' && (
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
            {loginMethod === 'email' && (
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

            <Button 
              onClick={handleContinue}
              disabled={(loginMethod === 'phone' && !formData.phone) || (loginMethod === 'email' && !formData.email)}
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-4 rounded-xl text-base font-medium"
            >
              Continue
            </Button>

            <div className="flex items-center">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <Button 
              onClick={handleBiometricLogin}
              variant="outline"
              className="w-full py-4 rounded-xl text-base font-medium border-gray-200"
            >
              <Fingerprint className="w-5 h-5 mr-2" />
              Use Biometric Login
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button 
                  onClick={() => navigate('/signup')}
                  className="text-teal-600 font-medium hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </Card>

        <p className="text-center text-xs text-gray-500 mt-6 px-4 leading-relaxed">
          We'll send you a verification code to sign in securely
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
