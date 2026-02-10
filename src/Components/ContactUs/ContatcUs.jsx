// "use client"
// import React, { useState } from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const ContactUs = () => {
//   // 1. State keys must match your Backend Model keys exactly
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     message: ''
//   });

//   const [status, setStatus] = useState({ loading: false, error: null, success: false });

//   // 2. Dynamic handler to update state based on input "name"
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, error: null, success: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/contact/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setStatus({ loading: false, error: null, success: true });
//         // Reset form after successful submission
//         setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
//         alert("Message sent to Job Junction successfully!");
//       } else {
//         throw new Error(result.message || "Failed to save data");
//       }
//     } catch (err) {
//       setStatus({ loading: false, error: err.message, success: false });
//       alert("Error: " + err.message);
//     }
//   };

//   return (
//    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#0f172a] to-[#0f172a] text-white flex flex-col items-center py-16 px-4">

   
//       {/* Header Section */}
//       <div className="max-w-4xl w-full text-center mb-12">
//         <h1 className="text-4xl font-bold mb-4 mt-12">Contact Us</h1>
//         <p className="text-gray-400 max-w-2xl mx-auto">
//           Reach out to the Job Junction team for any inquiries regarding job postings, 
//           company partnerships, or technical support.
//         </p>
//       </div>

//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        
//         {/* Left Side: Contact Info */}
//         <div className="flex flex-col justify-center space-y-10">
//           <div className="flex items-center gap-6 group">
//             <div className="bg-white p-4 rounded-full text-black group-hover:bg-cyan-400 transition-colors">
//               <MapPin size={24} />
//             </div>
//             <div>
//               <h3 className="text-cyan-500 font-bold text-lg">Address</h3>
//               <p className="text-gray-300">4671 Sugar Camp Road, Owatonna, MN 55060</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-6 group">
//             <div className="bg-white p-4 rounded-full text-black group-hover:bg-cyan-400 transition-colors">
//               <Phone size={24} />
//             </div>
//             <div>
//               <h3 className="text-cyan-500 font-bold text-lg">Phone</h3>
//               <p className="text-gray-300">561-456-2321</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-6 group">
//             <div className="bg-white p-4 rounded-full text-black group-hover:bg-cyan-400 transition-colors">
//               <Mail size={24} />
//             </div>
//             <div>
//               <h3 className="text-cyan-500 font-bold text-lg">Email</h3>
//               <p className="text-gray-300">support@jobjunction.com</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Form Card */}
//         <div className="bg-white rounded-md p-8 md:p-12 shadow-2xl">
//           <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Message</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
            
//             <input 
//               required
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-900 focus:outline-none focus:border-cyan-500 transition-colors"
//             />

//             <input 
//               required
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-900 focus:outline-none focus:border-cyan-500 transition-colors"
//             />

//             <input 
//               required
//               type="text"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-900 focus:outline-none focus:border-cyan-500 transition-colors"
//             />

//             <textarea 
//               required
//               name="message"
//               placeholder="Type your Message..."
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-900 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
//             ></textarea>

//             <button 
//               type="submit"
//               disabled={status.loading}
//               className={`w-32 py-3 font-bold text-white transition-all rounded-sm
//                 ${status.loading ? 'bg-gray-400' : 'bg-cyan-500 hover:bg-cyan-600 shadow-lg'}`}
//             >
//               {status.loading ? 'Sending...' : 'Send'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
        alert("Message sent to Job Junction successfully!");
      } else {
        throw new Error(result.message || "Failed to save data");
      }
    } catch (err) {
      setStatus({ loading: false, error: err.message, success: false });
      alert("Error: " + err.message);
    }
  };

  return (
    // 1. Added background image, fixed attachment, and center positioning
    <div className="relative min-h-screen flex flex-col items-center py-16 px-4 bg-cover bg-center bg-fixed" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}>
      
      {/* 2. Dark Overlay to make content pop */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 mt-12 text-white">Contact Us</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Reach out to the Job Junction team for any inquiries regarding job postings, 
          company partnerships, or technical support.
        </p>
      </div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="flex items-center gap-6 group">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white group-hover:bg-cyan-400 group-hover:text-black transition-all border border-white/20">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold text-lg">Address</h3>
              <p className="text-gray-100">9210 serenity enclave panvel...</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white group-hover:bg-cyan-400 group-hover:text-black transition-all border border-white/20">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold text-lg">Phone</h3>
              <p className="text-gray-100">561-456-2321</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white group-hover:bg-cyan-400 group-hover:text-black transition-all border border-white/20">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-cyan-400 font-bold text-lg">Email</h3>
              <p className="text-gray-100">support@jobjunction.com</p>
            </div>
          </div>
        </div>

        {/* 3. Glassy Form Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-8">Send Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <input 
              required
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white/30 py-2 px-1 text-white placeholder:text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
            />

            <input 
              required
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white/30 py-2 px-1 text-white placeholder:text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
            />

            <input 
              required
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white/30 py-2 px-1 text-white placeholder:text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors"
            />

            <textarea 
              required
              name="message"
              placeholder="Type your Message..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white/30 py-2 px-1 text-white placeholder:text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            ></textarea>

            <button 
              type="submit"
              disabled={status.loading}
              className={`w-full py-4 font-bold text-white transition-all rounded-xl
                ${status.loading ? 'bg-gray-500' : 'bg-cyan-500 hover:bg-cyan-600 shadow-lg hover:shadow-cyan-500/50'}`}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;