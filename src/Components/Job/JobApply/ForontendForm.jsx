// "use client";

// import React, { useState } from "react";
// import axios from "axios";

// const JobApplyForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//     file: null,
//   });

//   // handle input changes
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   // handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("message", formData.message);
//     formDataToSend.append("phone", formData.phone);
//     formDataToSend.append("file", formData.file);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/jobapply",
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (res.status === 201) {
//         alert("✅ Your application has been submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//           phone: "",
//           file: null,
//         });
//       }
//     } catch (error) {
//       console.error("❌ Error submitting form:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
//         <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
//           Apply for Job
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Name */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Message <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               name="message"
//               placeholder="Your cover letter or message to the employer"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows="4"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             ></textarea>
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Phone Number <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Upload CV */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Upload CV <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="file"
//               name="file"
//               accept=".pdf,.doc,.docx"
//               onChange={handleChange}
//               required
//               className="w-full border rounded-lg px-3 py-2"
//             />
//             <p className="text-gray-500 text-sm mt-1">
//               Maximum upload size: <strong>1 GB</strong>
//               <br />
//               Allowed file types: <strong>.pdf, .doc, .docx</strong>
//             </p>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 rounded-lg transition duration-300"
//           >
//             Send Application
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default JobApplyForm;

"use client";

import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const JobApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("file", formData.file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/jobapply",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        toast.success("Application submitted successfully 🚀");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          file: null,
        });
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
  
    <div
  className="min-h-[calc(100vh-80px)] pt-[80px] flex items-center justify-center py-10 bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/images/jobapply.png')", backgroundSize: "cover" }}
>
      {/* Toaster */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/40"></div>

      {/* Form Wrapper */}
      <div className="relative z-10 w-full flex justify-center px-4">
        <div className="w-full max-w-lg rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl p-8 border border-white/40">
          <h2 className="text-2xl font-semibold text-center mb-6 text-blue-800">
            Apply for Job
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-blue-900 font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-blue-900 font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-blue-900 font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Your cover letter or message to the employer"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-white border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-blue-900 font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-white border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Upload CV */}
            <div>
              <label className="block text-blue-900 font-medium mb-1">
                Upload CV <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full bg-white border border-blue-200 rounded-lg px-3 py-2"
              />
              <p className="text-blue-700 text-sm mt-1">
                Maximum upload size: <strong>1 GB</strong>
                <br />
                Allowed file types: <strong>.pdf, .doc, .docx</strong>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplyForm;
