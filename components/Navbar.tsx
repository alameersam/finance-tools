export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo (LEFT) */}
        <a href="/" className="text-xl font-bold text-slate-900">
          FinanceTools
        </a>

        {/* Navigation (RIGHT) */}
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="/" className="hover:text-slate-900">Home</a>
          <a href="/calculators" className="hover:text-slate-900">Calculators</a>
          <a href="/guides" className="hover:text-slate-900">Guides</a>
          <a href="/blog" className="hover:text-slate-900">Blog</a>
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}