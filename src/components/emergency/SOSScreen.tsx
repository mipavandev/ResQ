
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertTriangle, 
  MapPin, 
  Phone, 
  Users, 
  Camera, 
  Check,
  X,
  Shield,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const SOSScreen = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [alertsSent, setAlertsSent] = useState({
    location: false,
    contacts: false,
    authorities: false,
    volunteers: false,
    recording: false
  });

  useEffect(() => {
    if (countdown > 0 && !isActive) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !isActive) {
      activateSOS();
    }
  }, [countdown, isActive]);

  const activateSOS = () => {
    setIsActive(true);
    // Simulate progressive alert sending
    setTimeout(() => setAlertsSent(prev => ({ ...prev, location: true })), 300);
    setTimeout(() => setAlertsSent(prev => ({ ...prev, contacts: true })), 800);
    setTimeout(() => setAlertsSent(prev => ({ ...prev, authorities: true })), 1300);
    setTimeout(() => setAlertsSent(prev => ({ ...prev, volunteers: true })), 1800);
    setTimeout(() => setAlertsSent(prev => ({ ...prev, recording: true })), 2300);
  };

  const cancelSOS = () => {
    navigate('/dashboard');
  };

  const alertSteps = [
    { key: 'location', icon: MapPin, label: 'Location shared with trusted contacts', status: alertsSent.location },
    { key: 'contacts', icon: Users, label: 'Emergency contacts notified', status: alertsSent.contacts },
    { key: 'authorities', icon: Phone, label: 'Emergency services alerted', status: alertsSent.authorities },
    { key: 'volunteers', icon: Shield, label: 'Community volunteers notified', status: alertsSent.volunteers },
    { key: 'recording', icon: Camera, label: 'Evidence recording started', status: alertsSent.recording }
  ];

  return (
    <div className="mobile-app">
      <div className="mobile-screen page-transition bg-gradient-to-br from-red-50 via-orange-50/50 to-yellow-50/30 overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-red-500/25">
          <AlertTriangle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {isActive ? 'SOS Alert Active' : 'SOS Activating'}
        </h1>
        <p className="text-sm text-muted-foreground">
          {isActive 
            ? 'Your emergency alert has been sent successfully' 
            : `Sending emergency alert in ${countdown} seconds`
          }
        </p>
      </div>

      <div className="px-6">
        {/* Countdown or Status */}
        {!isActive ? (
          <Card className="glass-card p-8 mb-6 text-center border-2 border-red-200/60">
            <div className="mb-6">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-pulse shadow-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{countdown}</span>
                </div>
                <div className="absolute inset-0 border-4 border-red-300 rounded-full animate-ping"></div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Press <strong>Cancel</strong> to stop the emergency alert
              </p>
            </div>
            
            <Button 
              onClick={cancelSOS}
              variant="outline"
              className="w-full h-12 rounded-xl text-base font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all touch-target focus-ring"
            >
              <X className="w-5 h-5 mr-2" />
              Cancel Alert
            </Button>
          </Card>
        ) : (
          <Card className="glass-card p-6 mb-6 border border-green-200/60">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-foreground">Alert Status</h2>
                <p className="text-sm text-muted-foreground">All systems activated</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {alertSteps.map((step, index) => (
                <div key={step.key} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    step.status 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step.status ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Clock className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      step.status ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.label}
                    </p>
                  </div>
                  {step.status && (
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Emergency Actions */}
        {isActive && (
          <Card className="safe-card p-4 mb-6">
            <h3 className="font-bold text-foreground mb-4">Emergency Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => window.location.href = 'tel:100'}
                className="h-16 flex-col space-y-1 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl touch-target"
              >
                <Phone className="w-5 h-5" />
                <span className="text-xs font-medium">Call Police</span>
              </Button>
              
              <Button
                onClick={() => navigate('/location')}
                className="h-16 flex-col space-y-1 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl touch-target"
              >
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-medium">Share Location</span>
              </Button>
            </div>
          </Card>
        )}

        {/* Safety Message */}
        <Card className="glass-card p-6 text-center border border-blue-200/60">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-foreground mb-2">Stay Calm & Safe</h3>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Help is on the way. Stay in a safe location and keep your phone with you. 
            Your trusted contacts and emergency services have been notified.
          </p>
          
          <Button 
            onClick={() => navigate('/dashboard')}
            className="w-full primary-button h-12 rounded-xl text-base font-semibold touch-target focus-ring"
          >
            I'm Safe Now
          </Button>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default SOSScreen;
