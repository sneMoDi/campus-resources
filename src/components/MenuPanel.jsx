export default function MenuPanel() {
  return (
    <div className="w-[320px] h-screen bg-white shadow-xl text-sm p-4 overflow-y-auto fixed right-0 top-0 z-50">
      {/* Top Buttons */}
      <div className="flex justify-between gap-2 mb-4">
        <button className="border border-gray-300 rounded-md py-1 px-2 flex items-center gap-1 hover:bg-gray-100 font-semibold text-xs w-1/2">
          <span className="text-northeasternRed text-base"></span>
          MY ABC PORTAL
        </button>
        <button className="border border-gray-300 rounded-md py-1 px-2 flex items-center gap-1 hover:bg-gray-100 font-semibold text-xs w-1/2">
          <span className="text-northeasternRed text-base"></span>
          FIND FACULTY
        </button>
      </div>

      {/* Main Menu Items */}
      <ul className="space-y-2 text-sm">
        {[
          "Our Story",
          "Schools & Departments",
          "Admissions & Aid",
          "Innovation & Research",
          "Global Engagement",
          "Real-World Learning",
          "Campuses & Locations",
          "Alumni & Advancement",
          "Student Life"
        ].map((item, index) => (
          <li
            key={index}
            className="cursor-pointer text-gray-800 hover:text-northeasternRed hover:font-semibold transition duration-150 ease-in-out px-1"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* External Links */}
      <ul className="space-y-2 text-sm">
        {[
          "VISIT ABC UNIVERSITY WEBSITE",
          "ABC UNIVERSITY EVENTS",
          "STRATEGIC PLAN 2030",
          "MESSAGE FROM THE PRESIDENT",
          "UNIVERSITY NEWS",
          "BY THE NUMBERS"
        ].map((link, index) => (
          <li
            key={index}
            className="cursor-pointer text-gray-800 hover:text-northeasternRed hover:font-semibold flex justify-between items-center border-b border-gray-200 py-2 px-1 transition duration-150 ease-in-out"
          >
            {link}
            <span className="text-northeasternRed text-base">→</span>
          </li>
        ))}
      </ul>

      {/* Back Button */}
      <div className="mt-6">
        <button
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 text-sm text-northeasternRed hover:underline font-semibold transition duration-150 ease-in-out"
        >
          <span className="text-lg"></span> Back to Home
        </button>
      </div>
    </div>
  );
}