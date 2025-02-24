import React from 'react';

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Full Stack Developer
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Passionate about building scalable web applications and creating exceptional user experiences using modern technologies.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="mailto:devangm115@gmail.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}