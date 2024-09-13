import Image from 'next/image'

export default function Profile() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="glassmorphic rounded-2xl p-12 mb-12 w-full max-w-4xl">
        <Image
          src="/profile-pic.jpg"
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-full border-4 border-gray-700 shadow-lg mb-12"
        />
        <h1 className="text-6xl font-bold mb-6">Jane Doe</h1>
        <p className="text-2xl text-gray-400 mb-12">Web Developer | UI/UX Designer | Creative Thinker</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-xl">
          Get in touch
        </button>
      </div>
    </section>
  )
}