"use client";

import { useRef } from "react";

export default function Home() {
  const sliderRef = useRef(null);

  const features = [
    {
      title: "Project & Task Management",
      description: "Easily create, assign, and track tasks with priorities and deadlines.",
    },
    {
      title: "Kanban Board",
      description: "Drag-and-drop task updates for intuitive progress tracking.",
    },
    {
      title: "Real-Time Chat",
      description: "Collaborate instantly with your team using real-time messaging.",
    },
    {
      title: "AI-Powered Insights",
      description: "Automated summaries, reminders, and task risk predictions.",
    },
    {
      title: "File & Document Uploads",
      description: "Attach files to tasks for reporting and accountability.",
    },
    {
      title: "Audit Trail",
      description: "Keep track of all project updates and changes.",
    },
  ];

   const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    const { left, width } = slider.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const percentage = mouseX / width;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    slider.scrollLeft = maxScroll * percentage * 1; // <- Increase speed by multiplying
  };

  return (
    <div className="min-h-screen bg-white font-sans relative">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-[#1E40AF]">ProSynk</h1>
        <a
          href="/login"
          className="px-4 py-2 rounded-md font-semibold bg-[#1E40AF] text-white hover:bg-[#3B82F6] transition duration-300"
        >
          Login
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center min-h-[600px] py-50 bg-[#E0F2FE]">
        <h2 className="text-9xl font-bold italic text-[#1E40AF] mb-6">ProSynk</h2>
        <p className="text-lg text-[#1E3A8A] max-w-xl mx-auto">
          A smart, user-friendly project management system with AI-powered insights and real-time collaboration.
        </p>
      </section>

      {/* FEATURES SECTION - CENTERED SLIDER */}
      <section className="py-24 bg-[#f0f8ff] flex flex-col items-center">
        <h3 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">Key Features</h3>
        <div
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto scroll-smooth px-4 md:px-0 w-full max-w-5xl scrollbar-hide"
        >
          {/* Duplicate the features array twice for circular effect */}
          {[...features, ...features].map((feature, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-[#1E3A8A]">{feature.title}</h4>
              <p className="text-[#1E40AF]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1E40AF] text-white py-6 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} ProSynk. All rights reserved.</p>
      </footer>
    </div>
  );
}
