import { useState } from "react";

const resourceData = {
  Relationships: {
    description:
      "Building and maintaining healthy relationships is crucial during your college journey. Whether you're navigating friendships, romantic connections, or roommate dynamics, our relationship resources offer guidance, counseling, and workshops to help you improve communication and emotional well-being.",
    image: "src/assets/relationships.jpg",
    items: [
      {
        name: "Peer Counseling",
        description: "Trained peer support for relationship challenges.",
        link: "#",
      },
      {
        name: "Healthy Relationships Workshop",
        description: "Learn communication and boundary skills.",
        link: "#",
      },
    ],
  },
  Career: {
    description:
      "Get ready for life after college with expert career services. From resume writing to mock interviews, career fairs, and internship prep — these services are designed to help you find and grow into the professional path that’s right for you.",
    image: "src/assets/career.jpg",
    items: [
      {
        name: "Career Center",
        description: "1:1 coaching, resume review, and job search tools.",
        link: "#",
      },
      {
        name: "LinkedIn Profile Lab",
        description: "Get help building a standout professional profile.",
        link: "#",
      },
    ],
  },
  "Financial Aid": {
    description:
      "Managing your finances in college is easier with the right tools and support. Explore scholarships, emergency grants, financial literacy workshops, and tips on budgeting and tuition planning to make smart decisions.",
    image: "src/assets/financial-aid.jpg",
    items: [
      {
        name: "Scholarship Finder",
        description: "Browse awards and grants that fit your profile.",
        link: "#",
      },
      {
        name: "Budgeting 101 Workshop",
        description: "Learn how to manage expenses and save smartly.",
        link: "#",
      },
    ],
  },
  Health: {
    description:
      "Your physical and mental health are essential to your academic success. Access on-campus health services, mental health counseling, nutrition support, and more to stay well and thrive throughout your studies.",
    image: "src/assets/health.jpg",
    items: [
      {
        name: "Student Health Services",
        description: "Book appointments with doctors and nurses.",
        link: "#",
      },
      {
        name: "Mental Health & Counseling",
        description: "Talk to a counselor or join group therapy.",
        link: "#",
      },
    ],
  },
  Identity: {
    description:
      "Find support and community in spaces that celebrate your unique identity. Whether through cultural centers, affinity groups, or LGBTQIA+ support programs, you’ll discover empowering resources that help you feel seen and supported.",
    image: "src/assets/identity.jpg",
    items: [
      {
        name: "Cultural Resource Center",
        description: "Events and groups for diverse cultural backgrounds.",
        link: "#",
      },
      {
        name: "LGBTQIA+ Pride Center",
        description: "Safe space and programs for LGBTQIA+ students.",
        link: "#",
      },
    ],
  },
  "Time Management": {
    description:
      "Balancing classes, work, and social life requires strong time management. These resources offer coaching, planning tools, and strategies to help you stay organized, meet deadlines, and avoid burnout.",
    image: "src/assets/time-management.jpg",
    items: [
      {
        name: "Productivity Coaching",
        description: "1:1 sessions to create a realistic schedule.",
        link: "#",
      },
      {
        name: "Study Planner Toolkit",
        description: "Templates to organize assignments and exams.",
        link: "#",
      },
    ],
  },
};

export default function AccordionGroup() {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-4">
      {Object.entries(resourceData).map(([category, data]) => (
        <div key={category} className="border rounded-md bg-gray-50">
          <button
            onClick={() => toggleCategory(category)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg bg-white hover:bg-gray-100"
          >
            {category}
            <span className="text-xl">
              {openCategories[category] ? "−" : "+"}
            </span>
          </button>

          {openCategories[category] && (
            <div className="bg-gray-50 px-5 py-4 space-y-4 text-sm text-gray-800">
              {data.image && (
                <img
                  src={data.image}
                  alt={category}
                  className="w-full h-auto max-h-72 object-cover rounded-md mb-4"
                />
              )}
              <p className="text-gray-700">{data.description}</p>

              <div className="space-y-3">
                {data.items.map((res, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-northeasternRed pl-3"
                  >
                    <h4 className="font-medium text-black">{res.name}</h4>
                    <p>{res.description}</p>
                    <a
                      href={res.link}
                      className="text-blue-600 underline text-sm"
                    >
                      Visit Resource
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
