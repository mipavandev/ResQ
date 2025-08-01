
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const OTPScreen = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const verificationType = localStorage.getItem('verificationType');
  const isSignup = localStorage.getItem('signupData');

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (isSignup) {
      navigate('/role-selection');
    } else {
      navigate('/dashboard');
    }
    setIsLoading(false);
  };

  const handleResendOTP = () => {
    setTimer(60);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <div className="mobile-app">
      <div className="mobile-screen page-transition bg-gradient-to-br from-safe-teal to-safe-blue overflow-y-auto">
        {/* Header */}
        <div className="mobile-header">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)}
            className="p-2 smooth-transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground">Verify {verificationType === 'phone' ? 'Phone' : 'Email'}</h1>
          <div className="w-9" />
        </div>

        <div className="mobile-content">
        <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="text-center space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Enter Verification Code
              </h2>
              <p className="text-gray-600 text-sm">
                We've sent a 6-digit code to your {verificationType === 'phone' ? 'phone number' : 'email address'}
              </p>
            </div>

            {/* OTP Input */}
            <div className="flex justify-center space-x-3">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-lg font-semibold rounded-xl border-gray-200 focus:border-teal-500"
                />
              ))}
            </div>

            <Button 
              onClick={handleVerifyOTP}
              disabled={!isOtpComplete || isLoading}
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-4 rounded-xl text-base font-medium"
            >
              {isLoading ? 'Verifying...' : 'Verify & Continue'}
            </Button>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-gray-600">Didn't receive the code?</span>
              </div>
              
              {canResend ? (
                <Button 
                  onClick={handleResendOTP}
                  variant="outline" 
                  className="w-full py-3 rounded-xl border-gray-200"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Resend Code
                </Button>
              ) : (
                <p className="text-sm text-gray-500">
                  Resend code in {timer}s
                </p>
              )}
            </div>
          </div>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6 px-4 leading-relaxed">
          Make sure to check your spam folder if you don't see the verification code
        </p>
        </div>
      </div>
    </div>
  );
};

export default OTPScreen;
