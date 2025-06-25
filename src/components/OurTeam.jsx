// src/components/OurTeam.jsx
export default function OurTeam() {
  const team = [
    {
      name: "Alex Morgan",
      title: "Program Coordinator",
      pronouns: "(they/them)",
      image: "src/assets/1.jpg",
    },
    {
      name: "Jordan Lee",
      title: "Team Lead",
      pronouns: "(she/her)",
      image: "src/assets/3.jpg",
    },
    {
      name: "Taylor Brooks",
      title: "Event Manager",
      pronouns: "(he/him)",
      image: "src/assets/2.jpg",
    },
    {
      name: "Casey Nguyen",
      title: "Logistics Officer",
      pronouns: "(she/they)",
      image: "src/assets/4.jpg",
    },
  ];

  return (
    <section id="our-team" className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">2025 Orientation Team</h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 mx-auto rounded-xl object-cover mb-4"
            />
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600 italic">
              {member.title} <span className="not-italic">{member.pronouns}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
