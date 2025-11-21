import { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';

type PageType = 'home' | 'what-we-do' | 'who-we-are' | 'insights' | 'careers' | 'industries' | 'newsroom' | 'investor-relations' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'sitemap' | 'login' | 'register' | 'otp-verification';

interface RegisterProps {
  navigateTo: (page: PageType) => void;
  setRegistrationEmail: (email: string) => void;
  setRegistrationData: (data: { fullName: string; email: string; phone: string }) => void;
}

export function Register({ navigateTo, setRegistrationEmail, setRegistrationData }: RegisterProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    repeatPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.password || !formData.repeatPassword) {
      toast.error('Please fill in all fields');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!/^[\d\s\+\-\(\)]+$/.test(formData.phoneNumber)) {
      toast.error('Please enter a valid phone number');
      return false;
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return false;
    }

    if (formData.password !== formData.repeatPassword) {
      toast.error('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Mock registration and OTP sending
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`OTP has been sent to ${formData.email}`);
      setRegistrationEmail(formData.email);
      setRegistrationData({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
      });
      navigateTo('otp-verification');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-white mb-3">Create Account</h1>
          <p className="text-white/60">Join us to get started with your journey</p>
        </div>

        <Card className="bg-zinc-950 border border-white/10 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className="pl-10 bg-black border-white/20 text-white placeholder:text-white/40 focus:border-purple-400"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="pl-10 bg-black border-white/20 text-white placeholder:text-white/40 focus:border-purple-400"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-white">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+62 812 3456 7890"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  className="pl-10 bg-black border-white/20 text-white placeholder:text-white/40 focus:border-purple-400"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Minimum 8 characters"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  className="pl-10 pr-10 bg-black border-white/20 text-white placeholder:text-white/40 focus:border-purple-400"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Repeat Password */}
            <div className="space-y-2">
              <Label htmlFor="repeatPassword" className="text-white">
                Repeat Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <Input
                  id="repeatPassword"
                  type={showRepeatPassword ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  value={formData.repeatPassword}
                  onChange={(e) => handleChange('repeatPassword', e.target.value)}
                  className="pl-10 pr-10 bg-black border-white/20 text-white placeholder:text-white/40 focus:border-purple-400"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                >
                  {showRepeatPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 rounded border-white/20"
                required
              />
              <label htmlFor="terms" className="text-sm text-white/60">
                I agree to the{' '}
                <button
                  type="button"
                  onClick={() => navigateTo('terms')}
                  className="text-purple-400 hover:text-purple-300"
                >
                  Terms of Use
                </button>{' '}
                and{' '}
                <button
                  type="button"
                  onClick={() => navigateTo('privacy')}
                  className="text-purple-400 hover:text-purple-300"
                >
                  Privacy Policy
                </button>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-white/60 text-sm">
            Already have an account?{' '}
            <button
              onClick={() => navigateTo('login')}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Sign in
            </button>
          </p>
        </Card>
      </div>
    </div>
  );
}