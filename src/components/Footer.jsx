export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; 2025 ABC University</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-northeasternRed text-decoration-none">Privacy</a>
          <a href="#" className="hover:text-northeasternRed text-decoration-none">Accessibility</a>
          <a href="#" className="hover:text-northeasternRed text-decoration-none">Emergency Info</a>
        </div>
      </div>
    </footer>
  );
}
