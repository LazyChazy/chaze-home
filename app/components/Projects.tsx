const ProjectCard = ({ title, description }) => (
    <div className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
  
  export default function Projects() {
    return (
      <section id="projects" className="max-w-4xl mx-auto">
        <div className="glassmorphic rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="E-commerce Platform" 
              description="A fully responsive online store built with Next.js and Stripe integration."
            />
            <ProjectCard 
              title="Social Media Dashboard" 
              description="A real-time dashboard for social media analytics using React and Firebase."
            />
            <ProjectCard 
              title="Portfolio Website" 
              description="A sleek and modern portfolio showcasing my skills and projects."
            />
            <ProjectCard 
              title="Mobile App UI" 
              description="A user-friendly mobile app interface designed with Figma and implemented in React Native."
            />
          </div>
        </div>
      </section>
    )
  }