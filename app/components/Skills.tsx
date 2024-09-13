const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  </div>
)

export default function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto">
      <div className="glassmorphic rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillBar skill="React & Next.js" level={90} />
          <SkillBar skill="Tailwind CSS" level={85} />
          <SkillBar skill="Node.js" level={80} />
          <SkillBar skill="UI/UX Design" level={75} />
        </div>
      </div>
    </section>
  )
}