import { useState } from "react";
import { Mail, Lock, Chrome } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { toast } from "sonner@2.0.3";
import { useAuth } from "../contexts/AuthContext";

type PageType =
  | "home"
  | "what-we-do"
  | "who-we-are"
  | "insights"
  | "careers"
  | "industries"
  | "newsroom"
  | "investor-relations"
  | "contact"
  | "privacy"
  | "terms"
  | "cookies"
  | "sitemap"
  | "login"
  | "register"
  | "otp-verification";

interface LoginProps {
  navigateTo: (page: PageType) => void;
}

export function Login({ navigateTo }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    // Mock login process
    setTimeout(() => {
      setIsLoading(false);
      // Extract name from email (before @)
      const name = email.split("@")[0].replace(".", " ");
      const capitalizedName = name
        .split(" ")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() + word.slice(1),
        )
        .join(" ");

      login({
        fullName: capitalizedName,
        email: email,
      });

      toast.success("Login successful! Welcome back.");
      navigateTo("home");
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Mock Google OAuth process
    setTimeout(() => {
      setIsLoading(false);

      login({
        fullName: "Google User",
        email: "user@gmail.com",
      });

      toast.success("Google login successful!");
      navigateTo("home");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-white mb-3">
            Welcome Back
          </h1>
          <p className="text-white/60">
            Sign in to your account to continue
          </p>
        </div>

        <Card className="bg-zinc-950 border border-white/10 p-8">
          {/* Form Login */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-black border-white/20 text-white placeholder:text-white/40"
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                  size={20}
                />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-black border-white/20 text-white placeholder:text-white/40"
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-zinc-950 text-white/60">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Login */}
          <Button
            type="button"
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full border-white/20 hover:bg-white/10 transition-all duration-300"
            disabled={isLoading}
          >
            <Chrome className="mr-2" size={20} />
            Continue with Google
          </Button>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigateTo("register")}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Sign up now
              </button>
            </p>
          </div>
        </Card>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => navigateTo("home")}
            className="text-white/60 hover:text-white text-sm transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}