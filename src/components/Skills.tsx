import Image from 'next/image'; // Import the Image component for optimized images

export default function Skills() {
  const skills = {
    languages: [
      { name: "C/C++", icon: "/icons8-c++.png" },
      { name: "Python", icon: "/icons8-python-48.png" },
      { name: "Java", icon: "/icons8-java-48.png" },
      { name: "JavaScript", icon: "/icons8-javascript-48.png" },
      { name: "SQL", icon: "/icons8-my-sql-48.png" },
    ],
    frameworksAndTools: [
      { name: "React", icon: "/icons8-react-16.png" },
      { name: "Node.js", icon: "/icons8-nodejs-48.png" },
      { name: "Express", icon: "/icons8-express-js-16.png" },
      { name: "MongoDB", icon: "/icons8-mongo-db-48.png" },
      { name: "Next.js", icon: "/icons8-nextjs-48.png" },
      { name: "MUI", icon: "/icons8-material-ui-48.png" },
      { name: "Oracle", icon: "/icons8-oracle-logo-48.png" },
      { name: "Git", icon: "/icons8-git-48.png" },
      { name: "AWS", icon: "/icons8-aws-logo-48.png" },
    ],
    softSkills: [
      { name: "Leadership", icon: "/icons8-leadership-48.png" },
      { name: "Management", icon: "/icons8-management-50.png" },
      { name: "Problem-solving", icon: "/icons8-problem-solving-48.png" },
      { name: "Critical Thinking", icon: "/icons8-critical-thinking-48.png" },
      { name: "Communication", icon: "/icons8-communication-48.png" },
      { name: "Teamwork", icon: "/icons8-teamwork-48.png" },
      { name: "Agility", icon: "/icons8-agile.png" },
      { name: "Adaptability", icon: "/icons8-employee-turnover-78.png" },
    ],
  };

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="lg:text-center mb-12">
          <h2 className="text-lg font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl sm:text-4xl md:text-5xl leading-8 font-extrabold tracking-tight text-accent">
            My Expertise
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-primary-foreground p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-primary mb-4">Languages</h3>
              <div className="space-y-2">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <Image src={skill.icon} alt={`${skill.name} Icon`} width={20} height={20} className="mr-2" />
                    <span className="text-primary text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-foreground p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-primary mb-4">Frameworks & Tools</h3>
              <div className="space-y-2">
                {skills.frameworksAndTools.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <Image src={skill.icon} alt={`${skill.name} Icon`} width={20} height={20} className="mr-2" />
                    <span className="text-primary text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-foreground p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-primary mb-4">Soft Skills</h3>
              <div className="space-y-2">
                {skills.softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <Image src={skill.icon} alt={`${skill.name} Icon`} width={20} height={20} className="mr-2" />
                    <span className="text-primary text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
