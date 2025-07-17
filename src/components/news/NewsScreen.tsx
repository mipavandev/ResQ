import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Share,
  Bookmark,
  ExternalLink,
  AlertTriangle,
  Shield,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BottomNavigation from '../shared/BottomNavigation';

const NewsScreen = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const newsCategories = [
    { id: 'all', label: 'All News', count: 24 },
    { id: 'alerts', label: 'Safety Alerts', count: 8 },
    { id: 'updates', label: 'Policy Updates', count: 6 },
    { id: 'community', label: 'Community', count: 10 }
  ];

  const newsItems = [
    {
      id: 1,
      category: 'alerts',
      type: 'Safety Alert',
      title: 'New Safety Zones Established in Central Delhi',
      summary: '5 new verified safe spaces have been added in response to community requests.',
      location: 'Central Delhi',
      time: '2 hours ago',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      category: 'updates',
      type: 'Policy Update',
      title: 'Enhanced Women Safety Laws Come into Effect',
      summary: 'New legislation strengthens protection measures and increases penalties for offenders.',
      location: 'National',
      time: '4 hours ago',
      priority: 'medium',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      category: 'community',
      type: 'Community Update',
      title: 'Self-Defense Workshop Series Starting Next Week',
      summary: 'Free workshops conducted by certified trainers. Registration now open.',
      location: 'Mumbai',
      time: '6 hours ago',
      priority: 'low',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      category: 'alerts',
      type: 'Safety Alert',
      title: 'Increased Patrol Presence in University Areas',
      summary: 'Additional security measures implemented following recent incidents.',
      location: 'Bangalore',
      time: '8 hours ago',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=200&fit=crop'
    },
    {
      id: 5,
      category: 'community',
      type: 'Success Story',
      title: 'ResQ App Helps Prevent Assault in Pune',
      summary: 'Quick response from community volunteers leads to successful intervention.',
      location: 'Pune',
      time: '12 hours ago',
      priority: 'medium',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=200&fit=crop'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('Alert')) return AlertTriangle;
    if (type.includes('Policy')) return Shield;
    return Users;
  };

  const shareNews = (news: any) => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.summary,
        url: window.location.href
      });
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
        <h1 className="text-lg font-semibold text-gray-900">Safety News</h1>
        <Button 
          variant="ghost" 
          size="sm"
          className="p-2"
        >
          <Filter className="w-5 h-5" />
        </Button>
      </div>

      <div className="px-6 pb-24">
        {/* Search */}
        <Card className="p-4 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search safety news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-12 rounded-xl border-gray-200"
            />
          </div>
        </Card>

        {/* Categories */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            {newsCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-xs data-[state=active]:bg-teal-500 data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {newsItems.map((news) => (
              <Card key={news.id} className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-sm">
                <div className="flex">
                  <div className="w-24 h-24 bg-gray-200 flex-shrink-0">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(news.priority)}`}>
                          {news.type}
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm" className="p-1">
                          <Bookmark className="w-4 h-4 text-gray-500" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="p-1"
                          onClick={() => shareNews(news)}
                        >
                          <Share className="w-4 h-4 text-gray-500" />
                        </Button>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                      {news.summary}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {news.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {news.time}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="p-1 text-teal-600">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Other tab contents would filter the same data */}
          <TabsContent value="alerts" className="space-y-4">
            {newsItems.filter(item => item.category === 'alerts').map((news) => (
              <Card key={news.id} className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-sm">
                {/* Same card structure as above */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm">{news.summary}</p>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="updates" className="space-y-4">
            {newsItems.filter(item => item.category === 'updates').map((news) => (
              <Card key={news.id} className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-sm">
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm">{news.summary}</p>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="community" className="space-y-4">
            {newsItems.filter(item => item.category === 'community').map((news) => (
              <Card key={news.id} className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-sm">
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm">{news.summary}</p>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Emergency News Banner */}
        <Card className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Emergency Update</h3>
              <p className="text-red-800 text-sm mb-2">
                If you're in immediate danger, use the SOS button on your home screen or call emergency services.
              </p>
              <Button 
                size="sm" 
                onClick={() => navigate('/sos')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Emergency SOS
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default NewsScreen;
