import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Full Stack Development</h3>
              <p className="text-gray-600">Red & White Multimedia</p>
            </div>
            <p className="text-gray-600">2022 - 2024</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Computer Application</h3>
              <p className="text-gray-600">LJ University</p>
            </div>
            <p className="text-gray-600">2019 - 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}