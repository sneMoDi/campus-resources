export default function ResourceSection({ id, title, resources }) {
  return (
    <section
      id={id}
      className="py-16 px-4 bg-white scroll-mt-20 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-northeasternRed mb-10 border-b border-gray-300 pb-2">
          {title}
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {resources.map((res, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Image */}
              {res.image && (
                <img
                  src={res.image}
                  alt={res.name}
                  className="w-full h-48 object-cover"
                />
              )}

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {res.name}
                </h3>
                <p className="text-sm text-gray-700 mb-3">{res.description}</p>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Visit Resource →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
