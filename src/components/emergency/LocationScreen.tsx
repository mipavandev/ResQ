
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Navigation, 
  Users, 
  Shield, 
  Phone,
  Share,
  Eye,
  EyeOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';


const LocationScreen = () => {
  const navigate = useNavigate();
  const [isSharing, setIsSharing] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearbyContacts, setNearbyContacts] = useState([
    { name: 'Sarah M.', distance: '0.3 km', status: 'online', type: 'trusted' },
    { name: 'Police Station', distance: '0.8 km', status: 'available', type: 'authority' },
    { name: 'Volunteer Mike', distance: '1.2 km', status: 'responding', type: 'volunteer' }
  ]);

  useEffect(() => {
    // Simulate getting location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied');
        }
      );
    }
  }, []);

  const toggleLocationSharing = () => {
    setIsSharing(!isSharing);
  };

  const shareLocation = () => {
    // Simulate sharing location
    const locationText = `I'm sharing my location with you via ResQ: https://maps.google.com/maps?q=${location?.lat},${location?.lng}`;
    if (navigator.share) {
      navigator.share({
        title: 'My Location - ResQ',
        text: locationText,
        url: `https://maps.google.com/maps?q=${location?.lat},${location?.lng}`
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(locationText);
    }
  };

  return (
    <div className="mobile-app">
      <div className="mobile-screen page-transition bg-gradient-to-br from-safe-teal to-safe-blue overflow-y-auto">
        {/* Header */}
        <div className="mobile-header">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/dashboard')}
            className="p-2 smooth-transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground">Location</h1>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={shareLocation}
            className="p-2 smooth-transition"
          >
            <Share className="w-5 h-5" />
          </Button>
        </div>

        <div className="mobile-content">
        {/* Map Placeholder */}
        <Card className="mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-blue-100 to-teal-100 relative flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Interactive Map</p>
              <p className="text-xs text-gray-500">Your location and nearby helpers</p>
            </div>
            
            {/* Simulated location markers */}
            <div className="absolute top-4 left-4 bg-red-500 w-3 h-3 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 right-6 bg-blue-500 w-2 h-2 rounded-full"></div>
            <div className="absolute top-12 right-8 bg-green-500 w-2 h-2 rounded-full"></div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Current Location</p>
                <p className="text-xs text-gray-600">
                  {location 
                    ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` 
                    : 'Getting location...'
                  }
                </p>
              </div>
              <Button
                onClick={toggleLocationSharing}
                variant={isSharing ? "default" : "outline"}
                className={`text-sm ${
                  isSharing 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'border-gray-200'
                }`}
              >
                {isSharing ? (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Sharing
                  </>
                ) : (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Share Location
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-4 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-red-200 hover:bg-red-50"
              onClick={() => navigate('/sos')}
            >
              <Shield className="w-5 h-5 text-red-600" />
              <span className="text-xs font-medium">Send SOS</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-blue-200 hover:bg-blue-50"
              onClick={() => window.location.href = 'tel:100'}
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-medium">Call Police</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-green-200 hover:bg-green-50"
              onClick={() => navigate('/contacts')}
            >
              <Users className="w-5 h-5 text-green-600" />
              <span className="text-xs font-medium">Alert Contacts</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-purple-200 hover:bg-purple-50"
            >
              <Navigation className="w-5 h-5 text-purple-600" />
              <span className="text-xs font-medium">Navigate Safe</span>
            </Button>
          </div>
        </Card>

        {/* Nearby Contacts */}
        <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Nearby Helpers</h3>
          <div className="space-y-3">
            {nearbyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    contact.type === 'trusted' 
                      ? 'bg-green-500' 
                      : contact.type === 'authority' 
                      ? 'bg-blue-500' 
                      : 'bg-purple-500'
                  }`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                    <p className="text-xs text-gray-600">{contact.distance} • {contact.status}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-teal-600 text-xs">
                  Contact
                </Button>
              </div>
            ))}
          </div>
        </Card>
        </div>

        
      </div>
    </div>
  );
};

export default LocationScreen;
