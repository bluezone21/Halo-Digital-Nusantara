import { useState, useRef, useEffect } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';
import { useAuth } from '../contexts/AuthContext';

type PageType = 'home' | 'what-we-do' | 'who-we-are' | 'insights' | 'careers' | 'industries' | 'newsroom' | 'investor-relations' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'sitemap' | 'login' | 'register' | 'otp-verification';

interface OTPVerificationProps {
  navigateTo: (page: PageType) => void;
  email: string;
  registrationData: { fullName: string; email: string; phone: string };
}

export function OTPVerification({ navigateTo, email, registrationData }: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { login } = useAuth();

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();

    // Countdown timer for resend
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take the last character
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) {
      toast.error('Please paste only numbers');
      return;
    }

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    // Focus the next empty input or last input
    const nextEmptyIndex = newOtp.findIndex((digit) => !digit);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      toast.error('Please enter the complete 6-digit OTP');
      return;
    }

    setIsLoading(true);

    // Mock OTP verification
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Account verified successfully!', {
        description: 'Welcome to Halo Digital Nusantara',
      });
      login({
        fullName: registrationData.fullName,
        email: registrationData.email,
        phone: registrationData.phone,
      });
      navigateTo('home');
    }, 1500);
  };

  const handleResend = () => {
    if (resendTimer > 0) return;

    setResendTimer(60);
    toast.success(`New OTP sent to ${email}`);

    // Restart timer
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/20 mb-4">
            <Mail className="text-purple-400" size={32} />
          </div>
          <h1 className="text-4xl text-white mb-3">Verify Your Email</h1>
          <p className="text-white/60">
            We've sent a 6-digit verification code to
          </p>
          <p className="text-purple-400 mt-1">{email}</p>
        </div>

        <Card className="bg-zinc-950 border border-white/10 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Input */}
            <div>
              <label className="block text-white mb-3 text-center text-sm">
                Enter verification code
              </label>
              <div className="flex gap-2 justify-center" onPaste={handlePaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-14 text-center text-2xl bg-black border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors"
                    disabled={isLoading}
                  />
                ))}
              </div>
            </div>

            {/* Resend Timer */}
            <div className="text-center text-sm">
              {resendTimer > 0 ? (
                <p className="text-white/60">
                  Resend code in <span className="text-purple-400">{resendTimer}s</span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Resend verification code
                </button>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isLoading || otp.some((digit) => !digit)}
            >
              {isLoading ? (
                'Verifying...'
              ) : (
                <>
                  <CheckCircle2 className="mr-2" size={20} />
                  Verify Account
                </>
              )}
            </Button>
          </form>

          {/* Change Email */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Wrong email?{' '}
              <button
                onClick={() => navigateTo('register')}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Change email
              </button>
            </p>
          </div>
        </Card>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-white/40 text-sm">
            Didn't receive the code? Check your spam folder or try resending.
          </p>
        </div>
      </div>
    </div>
  );
}