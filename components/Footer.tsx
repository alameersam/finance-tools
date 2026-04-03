export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              FinanceTools
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Simple financial calculators to help you make smarter decisions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/" className="hover:text-slate-900">Home</a></li>
              <li><a href="/calculators" className="hover:text-slate-900">Calculators</a></li>
              <li><a href="/about" className="hover:text-slate-900">About</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              Legal
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} FinanceTools. All rights reserved.
        </div>

      </div>
    </footer>
  );
}