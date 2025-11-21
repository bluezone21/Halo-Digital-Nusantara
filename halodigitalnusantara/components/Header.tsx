import { useState } from "react";
import { Menu, X, LogIn, User, LogOut, Settings } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useAuth } from "../contexts/AuthContext";
import logo from "figma:asset/b3f7df4655dfe89f0ceb527c39188b4b968cbaeb.png";

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
  | "otp-verification"
  | "profile"
  | "cms-dashboard";

interface HeaderProps {
  navigateTo: (page: PageType) => void;
}

export function Header({ navigateTo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const navLinks = [
    { name: "What We Do", page: "what-we-do" as const },
    { name: "Who We Are", page: "who-we-are" as const },
    { name: "Insights", page: "insights" as const },
    { name: "Careers", page: "careers" as const },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo Admin, Saya ingin menggunakan jasa dari Halo Digital Nusantara"
    );
    const phoneNumber = "6282123699807";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleLogout = () => {
    logout();
    navigateTo("home");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigateTo("home")}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="Halo Digital Nusantara"
                className="h-10 w-10"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.page ? (
                <button
                  key={link.name}
                  onClick={() => navigateTo(link.page)}
                  className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ),
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 cursor-pointer"
                >
                  Let There Be Change
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                      <Avatar className="h-9 w-9 border-2 border-purple-400">
                        <AvatarFallback className="bg-purple-600 text-white">
                          {user ? getInitials(user.fullName) : "U"}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 bg-zinc-950 border border-white/10"
                  >
                    <div className="px-3 py-2 border-b border-white/10">
                      <p className="text-sm text-white">{user?.fullName}</p>
                      <p className="text-xs text-white/60">{user?.email}</p>
                    </div>
                    <DropdownMenuItem
                      onClick={() => navigateTo("profile")}
                      className="cursor-pointer text-white hover:bg-white/10 focus:bg-white/10"
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => navigateTo("cms-dashboard")}
                      className="cursor-pointer text-white hover:bg-white/10 focus:bg-white/10"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span>CMS Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="cursor-pointer text-red-400 hover:bg-white/10 focus:bg-white/10"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigateTo("login")}
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <LogIn className="mr-2" size={18} />
                  Login
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 cursor-pointer"
                >
                  Let There Be Change
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.page ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      navigateTo(link.page);
                      setMobileMenuOpen(false);
                    }}
                    className="text-white/90 hover:text-white transition-colors duration-200 py-2 text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ),
              )}

              {isAuthenticated ? (
                <>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center gap-3 mb-4 px-2">
                      <Avatar className="h-10 w-10 border-2 border-purple-400">
                        <AvatarFallback className="bg-purple-600 text-white">
                          {user ? getInitials(user.fullName) : "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-white">{user?.fullName}</p>
                        <p className="text-xs text-white/60">{user?.email}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        navigateTo("profile");
                        setMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 w-full transition-all duration-300 mb-2"
                    >
                      <User className="mr-2" size={18} />
                      Profile
                    </Button>
                    <Button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="border-red-400/20 text-red-400 hover:bg-red-400/10 w-full transition-all duration-300"
                    >
                      <LogOut className="mr-2" size={18} />
                      Logout
                    </Button>
                  </div>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-purple-600 hover:bg-purple-700 text-white w-full transition-all duration-300"
                  >
                    Let There Be Change
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-purple-600 hover:bg-purple-700 text-white w-full transition-all duration-300"
                  >
                    Let There Be Change
                  </Button>
                  <Button
                    onClick={() => {
                      navigateTo("login");
                      setMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 w-full transition-all duration-300"
                  >
                    <LogIn className="mr-2" size={18} />
                    Login
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}