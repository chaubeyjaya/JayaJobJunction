'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";



const UserRegister = () => {
  const [step, setStep] = useState(1);
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    tenthMarks: '',
    tenthYear: '',
    tenthSchool: '',
    twelfthMarks: '',
    twelfthYear: '',
    twelfthSchool: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // 🔄 Step 1: Send verification code & save user
  const handleSendCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/createUser', formData);
      toast.success('📧 Verification code sent to your email!');
      setCodeSent(true);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send code');
    }
  };

  // 🔄 Step 2: Verify entered OTP
  const handleVerifyCode = async () => {
    try {
      const { email } = formData;
      const response = await axios.post('http://localhost:5000/api/users/verify-code', { email, code });
      toast.success('✅ Email verified successfully!');
      setEmailVerified(true);
      nextStep(); // Go to Step 2
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid or expired code');
    }
  };

  // 🔄 Step 3: Final step submit (no API call needed here if already created)
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success('✅ Registration completed!');
    
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-blue-300 clip-slant" />
          <div className="w-full h-full bg-white clip-reverse" />
        </div>

        <div className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">User Registration</h2>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block font-medium mb-1">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded" />
                  </div>
                  <div className="col-span-2">
                    <label className="block font-medium mb-1">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded" />
                  </div>
                </div>

                {!codeSent && (
                  <button type="button" onClick={handleSendCode} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mt-6">
                    Send Verification Code
                  </button>
                )}

                {codeSent && !emailVerified && (
                  <div className="mt-4">
                    <label className="block font-medium mb-1">Enter 6-digit Code</label>
                    <input type="text" maxLength={6} value={code} onChange={(e) => setCode(e.target.value)} className="w-full border border-blue-300 px-3 py-2 rounded" />
                    <button type="button" onClick={handleVerifyCode} className="mt-3 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                      Verify Code
                    </button>
                  </div>
                )}
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-lg font-semibold mb-4 text-blue-600">10th Class Details</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="relative">
                    <label className="block font-medium mb-1">Marks (%)</label>
                    <input type="number" name="tenthMarks" value={formData.tenthMarks} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded pr-10" />
                    <span className="absolute right-3 top-[38px] text-gray-500">%</span>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Passing Year</label>
                    <input type="text" name="tenthYear" value={formData.tenthYear} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded" />
                  </div>
                  <div className="col-span-2">
                    <label className="block font-medium mb-1">School Name</label>
                    <input type="text" name="tenthSchool" value={formData.tenthSchool} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4 text-blue-600">12th Class Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block font-medium mb-1">Marks (%)</label>
                    <input type="number" name="twelfthMarks" value={formData.twelfthMarks} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded pr-10" />
                    <span className="absolute right-3 top-[38px] text-gray-500">%</span>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Passing Year</label>
                    <input type="text" name="twelfthYear" value={formData.twelfthYear} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded" />
                  </div>
                  <div className="col-span-2">
                    <label className="block font-medium mb-1">College Name</label>
                    <input type="text" name="twelfthSchool" value={formData.twelfthSchool} onChange={handleChange} required className="w-full border border-blue-300 px-3 py-2 rounded" />
                  </div>
                </div>

                <div className="mt-6">
                  <button type="button" onClick={nextStep} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="text-lg font-semibold mb-4 text-blue-700">Review Your Info</h3>
                <div className="text-sm leading-6 space-y-2">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>10th:</strong> {formData.tenthMarks}% in {formData.tenthYear} from {formData.tenthSchool}</p>
                  <p><strong>12th:</strong> {formData.twelfthMarks}% in {formData.twelfthYear} from {formData.twelfthSchool}</p>
                </div>
                <Link href="/login/userlogin">
                <button type="submit" className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                  Submit
                </button>
                </Link>
              </>
            )}
          </form>
        </div>

        <style jsx>{`
          .clip-slant {
            clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
            position: absolute;
            top: 0;
            left: 0;
          }
          .clip-reverse {
            clip-path: polygon(0 50%, 100% 100%, 0 100%);
            position: absolute;
            bottom: 0;
            left: 0;
          }
        `}</style>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default UserRegister;