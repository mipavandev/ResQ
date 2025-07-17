
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertCircle, 
  MapPin, 
  Phone, 
  Users, 
  Camera, 
  Mic,
  X,
  Check,
  Timer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const SOSScreen = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [alertsSent, setAlertsSent] = useState({
    contacts: false,
    police: false,
    volunteers: false,
    location: false,
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
    // Simulate sending alerts
    setTimeout(() => setAlertsSent(prev => ({ ...prev, location: true })), 500);
    setTimeout(() => setAlertsSent(prev => ({ ...prev, contacts: true })), 1000);
    setTimeout(() => setAlertsSent(prev => ({ ...prev, police: true })), 1500);
    setTimeout(() => setAlertsSent(prev => ({ ...prev, volunteers: true })), 2000);
    setTimeout(() => setAlertsSent(prev => ({ ...prev, recording: true })), 2500);
  };

  const cancelSOS = () => {
    navigate('/dashboard');
  };

  const StatusItem = ({ icon: Icon, label, status }: { icon: any, label: string, status: boolean }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <Icon className="w-5 h-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-900">{label}</span>
      </div>
      {status ? (
        <Check className="w-5 h-5 text-green-600" />
      ) : (
        <div className="w-5 h-5 border-2 border-gray-300 rounded-full animate-pulse"></div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <div className="text-center p-6 pt-12">
        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {isActive ? 'SOS Active' : 'SOS Activating'}
        </h1>
        <p className="text-gray-600 text-sm">
          {isActive 
            ? 'Your emergency alert has been sent' 
            : `Sending alert in ${countdown} seconds`
          }
        </p>
      </div>

      <div className="px-6">
        {/* Countdown/Status */}
        {!isActive ? (
          <Card className="p-8 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm text-center">
            <div className="mb-6">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{countdown}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Press Cancel to stop the alert
              </p>
            </div>
            
            <Button 
              onClick={cancelSOS}
              variant="outline"
              className="w-full py-4 rounded-xl text-base font-medium border-gray-300 hover:bg-gray-50"
            >
              <X className="w-5 h-5 mr-2" />
              Cancel Alert
            </Button>
          </Card>
        ) : (
          <Card className="p-6 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-4">Alert Status</h2>
            <div className="space-y-3">
              <StatusItem icon={MapPin} label="Location shared" status={alertsSent.location} />
              <StatusItem icon={Users} label="Trusted contacts notified" status={alertsSent.contacts} />
              <StatusItem icon={Phone} label="Police alerted" status={alertsSent.police} />
              <StatusItem icon={AlertCircle} label="Volunteers notified" status={alertsSent.volunteers} />
              <StatusItem icon={Camera} label="Recording started" status={alertsSent.recording} />
            </div>
          </Card>
        )}

        {/* Emergency Actions */}
        <Card className="p-4 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Emergency Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-red-200 hover:bg-red-50"
              onClick={() => window.location.href = 'tel:100'}
            >
              <Phone className="w-5 h-5 text-red-600" />
              <span className="text-xs font-medium">Call Police</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-orange-200 hover:bg-orange-50"
              onClick={() => navigate('/location')}
            >
              <MapPin className="w-5 h-5 text-orange-600" />
              <span className="text-xs font-medium">Show Location</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-purple-200 hover:bg-purple-50"
            >
              <Camera className="w-5 h-5 text-purple-600" />
              <span className="text-xs font-medium">Take Photo</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-blue-200 hover:bg-blue-50"
            >
              <Mic className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-medium">Voice Record</span>
            </Button>
          </div>
        </Card>

        {/* Safety Message */}
        <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Stay Calm & Safe</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Help is on the way. Try to stay in a safe location and keep your phone with you. 
              Your trusted contacts and nearby volunteers have been notified.
            </p>
            
            <Button 
              onClick={() => navigate('/dashboard')}
              className="w-full mt-4 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 rounded-xl text-base font-medium"
            >
              I'm Safe Now
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SOSScreen;
