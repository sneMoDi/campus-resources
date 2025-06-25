import heroImage from '../assets/hero.jpg';
import bgImage from '../assets/background.jpg'; 

export default function Hero() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background Image - make it more visible with opacity 20-30 */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Slight white veil to keep contrast but not wash out image */}
      <div className="absolute inset-0 bg-white bg-opacity-10 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">University Resources</h1>
          <p className="text-lg text-gray-700"> At ABC University, we empower students and families by connecting you to the tools, services, and communities that support your academic, personal, and professional journey through campus life and beyond.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Campus Hero"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
