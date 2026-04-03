export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          This Privacy Policy explains how information is handled when you use
          this website.
        </p>

        <section className="mt-10 space-y-6 text-slate-600 leading-7">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Information We Collect
            </h2>
            <p className="mt-2">
              This website does not require users to create accounts. Any
              information entered into calculators is processed locally in your
              browser and is not stored on our servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Contact Information
            </h2>
            <p className="mt-2">
              If you choose to contact us, you may provide personal information
              such as your name and email address. This information is used only
              to respond to your inquiry.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Cookies and Analytics
            </h2>
            <p className="mt-2">
              This website may use cookies or analytics tools in the future to
              improve user experience and understand website usage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Third-Party Services
            </h2>
            <p className="mt-2">
              Third-party services such as advertising providers may use cookies
              or similar technologies to display relevant advertisements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Changes to This Policy
            </h2>
            <p className="mt-2">
              This Privacy Policy may be updated from time to time. Any changes
              will be reflected on this page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}