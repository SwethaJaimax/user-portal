import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Simulate loading saved email and rememberMe from localStorage
    const savedEmail = 'user@example.com'; // In real app: localStorage.getItem('email');
    const savedRememberMe = true; // In real app: localStorage.getItem('rememberMe') === 'true';
    
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
    }
    setRememberMe(savedRememberMe);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Login attempted with:', {
        email: formData.email.trim(),
        password: formData.password,
        rememberMe
      });
      
      // Success feedback
      alert('Login successful! (This is a demo)');
      
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#084e53] from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: '#094e54' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: '#094e54', animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-60 h-60 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: '#0a5c64', animationDelay: '4s' }}></div>
      </div>

      <div className={`w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-8 p-8">
          <div className="space-y-4">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #094e54, #0a5c64)' }}
            >
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #094e54, #4ecdc4)' }}
              >
                JAIMAX
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-md">
              Your gateway to secure and innovative financial solutions. Experience the future of digital transactions.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-2 rounded-full opacity-60 animate-pulse"
                style={{ background: 'linear-gradient(135deg, #094e54, #4ecdc4)', animationDelay: `${i * 0.5}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-purple-500/20 transition-all duration-300">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-gray-300">Sign in to your account to continue</p>
            </div>

            {/* Login Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                  <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                    style={{ '--tw-ring-color': '#094e54' }}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                  <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 pr-12 bg-white/10 border ${errors.password ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 bg-white/10 border-white/20 rounded focus:ring-2 cursor-pointer"
                    style={{ accentColor: '#094e54' }}
                  />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm hover:text-white transition-colors cursor-pointer"
                  style={{ color: '#4ecdc4' }}
                  onClick={() => alert('Forgot password functionality would go here')}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white py-3 px-6 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                style={{ 
                  background: loading ? '#666' : 'linear-gradient(135deg, #094e54, #4ecdc4)',
                  '--tw-ring-color': '#094e54'
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.target.style.background = 'linear-gradient(135deg, #0a5c64, #5dd5cd)';
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.target.style.background = 'linear-gradient(135deg, #094e54, #4ecdc4)';
                }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>

              {/* Register Link */}
              <div className="text-center pt-4 border-t border-white/10">
                <p className="text-gray-300">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="font-semibold transition-colors cursor-pointer"
                    style={{ color: '#4ecdc4' }}
                    onClick={() => alert('Register functionality would go here')}
                    onMouseEnter={(e) => e.target.style.color = '#5dd5cd'}
                    onMouseLeave={(e) => e.target.style.color = '#4ecdc4'}
                  >
                    Register Now
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Mobile Branding */}
          <div className="lg:hidden text-center mt-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-12 cursor-pointer hover:rotate-0 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #094e54, #0a5c64)' }}
            >
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Welcome to{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #094e54, #4ecdc4)' }}
              >
                JAIMAX
              </span>
            </h1>
            <p className="text-gray-300 text-sm">Your gateway to secure financial solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
