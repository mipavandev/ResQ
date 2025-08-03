
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Camera, 
  FileText, 
  MapPin, 
  Clock,
  AlertTriangle,
  User,
  Send,
  Save
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const ReportingScreen = () => {
  const navigate = useNavigate();
  const [reportData, setReportData] = useState({
    type: '',
    description: '',
    location: '',
    anonymous: true,
    urgency: '',
    evidence: [] as string[]
  });

  const incidentTypes = [
    { value: 'harassment', label: 'Harassment' },
    { value: 'assault', label: 'Physical Assault' },
    { value: 'threat', label: 'Verbal Threats' },
    { value: 'stalking', label: 'Stalking' },
    { value: 'unsafe_area', label: 'Unsafe Area' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmitReport = () => {
    // Simulate report submission
    console.log('Submitting report:', reportData);
    // Show success message and navigate
    navigate('/dashboard');
  };

  const handleSaveDraft = () => {
    // Save as draft
    localStorage.setItem('reportDraft', JSON.stringify(reportData));
  };

  const addEvidence = () => {
    // Simulate adding evidence
    const newEvidence = [...reportData.evidence, `evidence_${Date.now()}`];
    setReportData({ ...reportData, evidence: newEvidence });
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
          <h1 className="text-lg font-semibold text-foreground">Report Incident</h1>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleSaveDraft}
            className="p-2 smooth-transition"
          >
            <Save className="w-5 h-5" />
          </Button>
        </div>

        <div className="mobile-content">
        <Card className="p-6 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="space-y-6">
            {/* Anonymous Toggle */}
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Anonymous Report</p>
                  <p className="text-xs text-gray-600">Your identity will be protected</p>
                </div>
              </div>
              <Button
                variant={reportData.anonymous ? "default" : "outline"}
                size="sm"
                onClick={() => setReportData({...reportData, anonymous: !reportData.anonymous})}
                className={reportData.anonymous ? 'bg-blue-500 hover:bg-blue-600' : ''}
              >
                {reportData.anonymous ? 'Anonymous' : 'Identified'}
              </Button>
            </div>

            {/* Incident Type */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Type of Incident *
              </Label>
              <Select 
                value={reportData.type} 
                onValueChange={(value) => setReportData({...reportData, type: value})}
              >
                <SelectTrigger className="h-12 rounded-xl border-gray-200">
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent>
                  {incidentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Urgency Level */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Urgency Level *
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {['Low', 'Medium', 'High'].map((level) => (
                  <Button
                    key={level}
                    variant={reportData.urgency === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => setReportData({...reportData, urgency: level})}
                    className={`h-10 ${
                      reportData.urgency === level 
                        ? level === 'High' 
                          ? 'bg-red-500 hover:bg-red-600' 
                          : level === 'Medium'
                          ? 'bg-yellow-500 hover:bg-yellow-600'
                          : 'bg-green-500 hover:bg-green-600'
                        : 'border-gray-200'
                    }`}
                  >
                    {level === 'High' && <AlertTriangle className="w-4 h-4 mr-1" />}
                    {level}
                  </Button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Description *
              </Label>
              <Textarea
                placeholder="Describe what happened in detail..."
                value={reportData.description}
                onChange={(e) => setReportData({...reportData, description: e.target.value})}
                className="min-h-24 rounded-xl border-gray-200 resize-none"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Location
              </Label>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter location or address"
                  value={reportData.location}
                  onChange={(e) => setReportData({...reportData, location: e.target.value})}
                  className="flex-1 h-12 rounded-xl border-gray-200"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="h-12 px-4 rounded-xl border-gray-200"
                >
                  <MapPin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Evidence Section */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">
                Evidence (Optional)
              </Label>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={addEvidence}
                  className="h-16 flex-col space-y-1 border-gray-200 hover:bg-gray-50"
                >
                  <Camera className="w-5 h-5 text-gray-600" />
                  <span className="text-xs font-medium">Add Photo</span>
                </Button>
                
                <Button
                  variant="outline"
                  onClick={addEvidence}
                  className="h-16 flex-col space-y-1 border-gray-200 hover:bg-gray-50"
                >
                  <FileText className="w-5 h-5 text-gray-600" />
                  <span className="text-xs font-medium">Add Document</span>
                </Button>
              </div>

              {reportData.evidence.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">{reportData.evidence.length} file(s) attached</p>
                  {reportData.evidence.map((evidence, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-xs text-gray-700">Evidence {index + 1}</span>
                      <Button variant="ghost" size="sm" className="text-red-500 text-xs">
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Submit Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleSubmitReport}
            disabled={!reportData.type || !reportData.description || !reportData.urgency}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-4 rounded-xl text-base font-medium"
          >
            <Send className="w-5 h-5 mr-2" />
            Submit Report
          </Button>
          
          <Button 
            onClick={handleSaveDraft}
            variant="outline"
            className="w-full py-4 rounded-xl text-base font-medium border-gray-200"
          >
            <Save className="w-5 h-5 mr-2" />
            Save as Draft
          </Button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4 px-4 leading-relaxed">
          All reports are encrypted and handled with complete confidentiality. 
          You can track the status of your report in your profile.
        </p>
        </div>

        
      </div>
    </div>
  );
};

export default ReportingScreen;
