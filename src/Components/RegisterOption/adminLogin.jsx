// "use client";
// import React, { useState } from "react";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/admin/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();

//       if (data.token) {
//         // Redirect to AdminFrontend with token as query param
//         window.location.href = `http://localhost:3001`;//yaha se port change ho rha hai 
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       console.error("Login failed:", err);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="mt-40">
//       <h2>Admin Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }



"use client";
import React, { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        window.location.href = "http://localhost:3001";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center  bg-center"
      style={{
        backgroundImage: "url('/images/adminloginbg.png')",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="w-[360px] backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 shadow-2xl text-white"
      >
        <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 bg-transparent border-b border-white/60 outline-none py-2 placeholder-white/70"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 bg-transparent border-b border-white/60 outline-none py-2 placeholder-white/70"
          required
        />

       

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-semibold"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
