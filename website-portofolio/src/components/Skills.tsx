export default function Skills() {
    const codingSkills = [
      { name: 'JavaScript', value: 25 },
      { name: 'PHP', value: 30 },
      { name: 'HTML', value: 90 },
      { name: 'CSS', value: 80 },
    ];
  
    const designSkills = [
      { name: 'UI / UX Design', value: 70 },
      { name: 'Web Design', value: 70 },
      { name: 'Logo Design', value: 20 },
    ];
  
    return (
      <div className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          My Skills
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
          {/* Coding Skills */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              Coding Skills
            </h3>
            {codingSkills.map((skill) => (
              <div key={skill.name} className="mb-5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.value}%</span>
                </div>
                <div className="w-full bg-white rounded-full h-4 shadow-inner">
                  <div
                    className="h-4 bg-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
  
          {/* Design Skills */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              Design Skills
            </h3>
            {designSkills.map((skill) => (
              <div key={skill.name} className="mb-5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.value}%</span>
                </div>
                <div className="w-full bg-white rounded-full h-4 shadow-inner">
                  <div
                    className="h-4 bg-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }  