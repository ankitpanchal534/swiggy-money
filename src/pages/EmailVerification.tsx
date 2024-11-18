import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, ArrowRight, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const otpSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits'),
});

type EmailFormData = z.infer<typeof emailSchema>;
type OTPFormData = z.infer<typeof otpSchema>;

const EmailVerification = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const { register: registerEmail, handleSubmit: handleEmailSubmit, formState: { errors: emailErrors } } = 
    useForm<EmailFormData>({
      resolver: zodResolver(emailSchema),
    });

  const { register: registerOTP, handleSubmit: handleOTPSubmit, formState: { errors: otpErrors } } = 
    useForm<OTPFormData>({
      resolver: zodResolver(otpSchema),
    });

  const onEmailSubmit = async (data: EmailFormData) => {
    try {
      // Simulate API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEmail(data.email);
      setShowOTP(true);
      toast.success('OTP sent to your email!');
    } catch (error) {
      toast.error('Failed to send OTP. Please try again.');
    }
  };

  const onOTPSubmit = async (data: OTPFormData) => {
    try {
      // Simulate API call to verify OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/checkout');
      toast.success('Email verified successfully!');
    } catch (error) {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
            {showOTP ? (
              <Lock className="h-6 w-6 text-orange-600" />
            ) : (
              <Mail className="h-6 w-6 text-orange-600" />
            )}
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {showOTP ? 'Enter OTP' : 'Verify Your Email'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {showOTP 
              ? `We've sent a code to ${email}`
              : 'Please enter your email to receive a verification code'}
          </p>
        </div>

        {!showOTP ? (
          <form onSubmit={handleEmailSubmit(onEmailSubmit)} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  {...registerEmail('email')}
                  type="email"
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email address"
                />
                {emailErrors.email && (
                  <p className="mt-2 text-sm text-red-600">{emailErrors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Send Verification Code
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleOTPSubmit(onOTPSubmit)} className="mt-8 space-y-6">
            <div>
              <label htmlFor="otp" className="sr-only">Enter OTP</label>
              <input
                {...registerOTP('otp')}
                type="text"
                maxLength={6}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm text-center tracking-widest"
                placeholder="Enter 6-digit OTP"
              />
              {otpErrors.otp && (
                <p className="mt-2 text-sm text-red-600">{otpErrors.otp.message}</p>
              )}
            </div>

            <div className="flex flex-col space-y-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Verify OTP
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button
                type="button"
                onClick={() => setShowOTP(false)}
                className="text-sm text-orange-600 hover:text-orange-500"
              >
                Change Email Address
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;