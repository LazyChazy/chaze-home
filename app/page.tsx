import Profile from './components/Profile.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'

export default function Home() {
  return (
    <div className="space-y-32 max-w-6xl mx-auto">
      <Profile />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}