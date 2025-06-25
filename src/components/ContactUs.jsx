export default function ContactUs() {
  return (
    <section id="contact" className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-northeasternRed mb-6">Contact Us</h2>
        <div className="text-sm space-y-3 leading-relaxed">
          <p>📍 ABC Huntington Ave, Waffle Hall 101, Boston, MA 02115</p>
          <p>📧 <a href="#" className="underline text-white hover:text-gray-300">orientation.boston@abc.edu</a></p>
          <p>📧 <a href="#" className="underline text-white hover:text-gray-300">familyprograms.boston@abc.edu</a></p>
          <p>📞 000.000.0000 / 123.123.1234</p>
        </div>
      </div>
    </section>
  );
}
