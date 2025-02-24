import React from 'react';

const skills = {
  "Languages": ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js", "Python"],
  "Frameworks & Libraries": ["React.js", "Express.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"],
  "Databases": ["MongoDB", "Firebase"],
  "Tools": ["VS Code", "Git", "Postman", "Docker"],
  "Other": ["MERN Stack", "MVC", "Authentication", "Payment Gateway Integration"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}