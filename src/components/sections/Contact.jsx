import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from 'emailjs-com';

const Contact = () => {

    const [formdata,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })


    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
            alert("Message Sent")
            setFormData({
                name:"",
                email:"",
                message:""
            })
        }).catch(()=>alert("Oops ! Something went wrong. Please try again later."))
    }
    
  return (
    <section
      id="contact"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent items-center justify-center flex">
            Get In Touch
          </h2>
          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formdata.name}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 focus:border-blue-500"
                placeholder="Your Name"
                onChange={(e)=>setFormData({...formdata,name:e.target.value})}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formdata.email}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 focus:border-blue-500"
                placeholder="example@gmail.com"
                onChange={(e)=>setFormData({...formdata,email:e.target.value})}
              />
            </div>
            <div className="relative">
              <textarea
                type="text"
                id="message"
                name="message"
                value={formdata.message}
                rows={5}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:bg-blue-500/5 focus:border-blue-500"
                placeholder="Your Message"
                onChange={(e)=>setFormData({...formdata,message:e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-500/10 hover:border-blue-500 hover:border text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
