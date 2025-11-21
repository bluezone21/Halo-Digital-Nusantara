import { useState } from 'react';
import { User, Mail, Phone, Lock, Save, Camera } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { toast } from 'sonner@2.0.3';
import { useAuth } from '../contexts/AuthContext';

type PageType = 'home' | 'what-we-do' | 'who-we-are' | 'insights' | 'careers' | 'industries' | 'newsroom' | 'investor-relations' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'sitemap' | 'login' | 'register' | 'otp-verification' | 'profile';

interface ProfileProps {
  navigateTo: (page: PageType) => void;
}

export function Profile({ navigateTo }: ProfileProps) {
  const { user, login } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    phone: user?.phone || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPasswordSection, setShowPasswordSection] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error('Full name is required');
      return;
    }

    setIsLoading(true);

    // Mock profile update
    setTimeout(() => {
      setIsLoading(false);

      // Update user data in auth context
      login({
        fullName: formData.fullName,
        email: user?.email || '',
        phone: formData.phone,
      });

      toast.success('Profile updated successfully!');
      setIsEditing(false);
    }, 1000);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      toast.error('Please fill in all password fields');
      return;
    }

    if (formData.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    setIsLoading(true);

    // Mock password change
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Password changed successfully!');
      setFormData({
        ...formData,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setShowPasswordSection(false);
    }, 1000);
  };

  const handleCancel = () => {
    setFormData({
      fullName: user?.fullName || '',
      phone: user?.phone || '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setIsEditing(false);
    setShowPasswordSection(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <Card className="bg-zinc-950 border border-white/10 p-8 text-center">
          <p className="text-white mb-4">Please log in to view your profile</p>
          <Button
            onClick={() => navigateTo('login')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-white mb-2">My Profile</h1>
          <p className="text-white/60">Manage your account information and settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="bg-zinc-950 border border-white/10 p-6 lg:col-span-1">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <Avatar className="h-24 w-24 border-4 border-purple-400">
                  <AvatarFallback className="bg-purple-600 text-white text-2xl">
                    {getInitials(user.fullName)}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 transition-colors">
                  <Camera size={16} />
                </button>
              </div>
              <h2 className="text-xl text-white mb-1">{user.fullName}</h2>
              <p className="text-white/60 text-sm mb-4">{user.email}</p>
              <div className="w-full pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-white/60">Account Status</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Member Since</span>
                  <span className="text-white">2025</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Profile Information */}
          <Card className="bg-zinc-950 border border-white/10 p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-white">Personal Information</h3>
              {!isEditing && (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                >
                  Edit Profile
                </Button>
              )}
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white">
                  Full Name
                </Label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    size={20}
                  />
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    disabled={!isEditing}
                    className="pl-10 bg-black border-white/20 text-white disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email (Read-only) */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    size={20}
                  />
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    disabled
                    className="pl-10 bg-black/50 border-white/20 text-white/60 cursor-not-allowed"
                  />
                </div>
                <p className="text-xs text-white/40">
                  Email address cannot be changed for security reasons
                </p>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                    size={20}
                  />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    disabled={!isEditing}
                    className="pl-10 bg-black border-white/20 text-white disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    disabled={isLoading}
                  >
                    <Save className="mr-2" size={18} />
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCancel}
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </form>
          </Card>

          {/* Security Settings */}
          <Card className="bg-zinc-950 border border-white/10 p-6 lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl text-white mb-1">Security Settings</h3>
                <p className="text-white/60 text-sm">Manage your password and security preferences</p>
              </div>
              {!showPasswordSection && (
                <Button
                  onClick={() => setShowPasswordSection(true)}
                  variant="outline"
                  className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                >
                  <Lock className="mr-2" size={18} />
                  Change Password
                </Button>
              )}
            </div>

            {showPasswordSection && (
              <form onSubmit={handleChangePassword} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Current Password */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="currentPassword" className="text-white">
                      Current Password
                    </Label>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                        size={20}
                      />
                      <Input
                        id="currentPassword"
                        type="password"
                        value={formData.currentPassword}
                        onChange={(e) => handleChange('currentPassword', e.target.value)}
                        className="pl-10 bg-black border-white/20 text-white"
                        placeholder="Enter current password"
                      />
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-white">
                      New Password
                    </Label>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                        size={20}
                      />
                      <Input
                        id="newPassword"
                        type="password"
                        value={formData.newPassword}
                        onChange={(e) => handleChange('newPassword', e.target.value)}
                        className="pl-10 bg-black border-white/20 text-white"
                        placeholder="Enter new password"
                      />
                    </div>
                  </div>

                  {/* Confirm New Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">
                      Confirm New Password
                    </Label>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                        size={20}
                      />
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                        className="pl-10 bg-black border-white/20 text-white"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                </div>

                {/* Password Requirements */}
                <div className="bg-black/50 border border-white/10 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-2">Password requirements:</p>
                  <ul className="text-white/40 text-xs space-y-1 ml-4 list-disc">
                    <li>At least 6 characters long</li>
                    <li>Mix of uppercase and lowercase letters recommended</li>
                    <li>Include numbers and special characters for better security</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    disabled={isLoading}
                  >
                    <Lock className="mr-2" size={18} />
                    {isLoading ? 'Changing Password...' : 'Change Password'}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setShowPasswordSection(false);
                      setFormData({
                        ...formData,
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: '',
                      });
                    }}
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}

            {!showPasswordSection && (
              <div className="text-center py-8">
                <Lock className="mx-auto text-white/20 mb-3" size={48} />
                <p className="text-white/40 text-sm">
                  Your password is secure. Click "Change Password" to update it.
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Button
            onClick={() => navigateTo('home')}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
