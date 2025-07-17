
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plus, 
  Phone, 
  MessageSquare, 
  MapPin,
  Shield,
  Edit,
  Trash2,
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import BottomNavigation from '../shared/BottomNavigation';

const TrustedContactsScreen = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      phone: '+91 98765 43210',
      relation: 'Sister',
      status: 'online',
      location: '2.3 km away'
    },
    {
      id: 2,
      name: 'Dr. Amit Kumar',
      phone: '+91 87654 32109',
      relation: 'Family Doctor',
      status: 'available',
      location: '5.1 km away'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      phone: '+91 76543 21098',
      relation: 'Best Friend',
      status: 'busy',
      location: '0.8 km away'
    },
    {
      id: 4,
      name: 'Mom',
      phone: '+91 65432 10987',
      relation: 'Mother',
      status: 'online',
      location: '12.4 km away'
    }
  ]);

  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    relation: ''
  });

  const [isAddingContact, setIsAddingContact] = useState(false);

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      const contact = {
        id: contacts.length + 1,
        ...newContact,
        status: 'offline',
        location: 'Unknown'
      };
      setContacts([...contacts, contact]);
      setNewContact({ name: '', phone: '', relation: '' });
      setIsAddingContact(false);
    }
  };

  const sendSOSToContact = (contact: any) => {
    console.log(`Sending SOS to ${contact.name}`);
    // Simulate sending SOS
  };

  const callContact = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'available': return 'bg-blue-500';
      case 'busy': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/dashboard')}
          className="p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold text-gray-900">Trusted Contacts</h1>
        <Dialog open={isAddingContact} onOpenChange={setIsAddingContact}>
          <DialogTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className="p-2"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="mx-4 rounded-xl">
            <DialogHeader>
              <DialogTitle>Add Trusted Contact</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Name *</Label>
                <Input
                  placeholder="Enter contact name"
                  value={newContact.name}
                  onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label>Phone Number *</Label>
                <Input
                  placeholder="Enter phone number"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label>Relationship</Label>
                <Input
                  placeholder="e.g., Sister, Friend, Doctor"
                  value={newContact.relation}
                  onChange={(e) => setNewContact({...newContact, relation: e.target.value})}
                  className="h-12 rounded-xl"
                />
              </div>
              <Button 
                onClick={handleAddContact}
                disabled={!newContact.name || !newContact.phone}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 rounded-xl"
              >
                Add Contact
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="px-6 pb-24">
        {/* Quick Actions */}
        <Card className="p-4 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Emergency Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button
              className="h-16 flex-col space-y-1 bg-red-500 hover:bg-red-600 text-white"
              onClick={() => navigate('/sos')}
            >
              <Shield className="w-5 h-5" />
              <span className="text-xs font-medium">Send SOS to All</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-blue-200 hover:bg-blue-50"
              onClick={() => navigate('/location')}
            >
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-medium">Share Location</span>
            </Button>
          </div>
        </Card>

        {/* Contacts List */}
        <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">My Contacts ({contacts.length})</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAddingContact(true)}
              className="text-teal-600"
            >
              <UserPlus className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>
          
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          {contact.name.charAt(0)}
                        </span>
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(contact.status)} rounded-full border-2 border-white`}></div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{contact.name}</p>
                      <p className="text-sm text-gray-600">{contact.relation}</p>
                      <p className="text-xs text-gray-500">{contact.location}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Edit className="w-4 h-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => callContact(contact.phone)}
                    className="h-10 border-green-200 hover:bg-green-50"
                  >
                    <Phone className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-xs">Call</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 border-blue-200 hover:bg-blue-50"
                  >
                    <MessageSquare className="w-4 h-4 text-blue-600 mr-1" />
                    <span className="text-xs">Message</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => sendSOSToContact(contact)}
                    className="h-10 border-red-200 hover:bg-red-50"
                  >
                    <Shield className="w-4 h-4 text-red-600 mr-1" />
                    <span className="text-xs">SOS</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {contacts.length === 0 && (
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-sm text-center">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Trusted Contacts</h3>
            <p className="text-gray-600 text-sm mb-4">
              Add people you trust to receive your emergency alerts
            </p>
            <Button
              onClick={() => setIsAddingContact(true)}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Contact
            </Button>
          </Card>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default TrustedContactsScreen;
