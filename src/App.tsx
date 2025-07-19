
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WelcomeScreen from "./components/onboarding/WelcomeScreen";
import OnboardingSlider from "./components/onboarding/OnboardingSlider";
import LoginScreen from "./components/auth/LoginScreen";
import SignupScreen from "./components/auth/SignupScreen";
import OTPScreen from "./components/auth/OTPScreen";
import RoleSelectionScreen from "./components/auth/RoleSelectionScreen";
import HomeDashboard from "./components/dashboard/HomeDashboard";
import SOSScreen from "./components/emergency/SOSScreen";
import LocationScreen from "./components/emergency/LocationScreen";
import ReportingScreen from "./components/reporting/ReportingScreen";
import TrustedContactsScreen from "./components/contacts/TrustedContactsScreen";
import NewsScreen from "./components/news/NewsScreen";
import LearnScreen from "./components/learn/LearnScreen";
import ProfileScreen from "./components/profile/ProfileScreen";
import SettingsScreen from "./components/profile/SettingsScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/onboarding" element={<OnboardingSlider />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/otp" element={<OTPScreen />} />
          <Route path="/role-selection" element={<RoleSelectionScreen />} />
          <Route path="/dashboard" element={<HomeDashboard />} />
          <Route path="/sos" element={<SOSScreen />} />
          <Route path="/location" element={<LocationScreen />} />
          <Route path="/report" element={<ReportingScreen />} />
          <Route path="/contacts" element={<TrustedContactsScreen />} />
          <Route path="/news" element={<NewsScreen />} />
          <Route path="/learn" element={<LearnScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
