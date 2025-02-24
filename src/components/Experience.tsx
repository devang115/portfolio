import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
              <p className="text-gray-600">VHM Infotech</p>
            </div>
            <p className="text-gray-600">Nov 2023 - Jan 2025</p>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Working with the wider development team</li>
            <li>Created frontend/backend solutions</li>
            <li>Implemented API integrations</li>
            <li>Worked on two crucial projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}