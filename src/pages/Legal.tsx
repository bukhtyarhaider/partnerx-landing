export default function Legal() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto p-12 glass animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 text-white">Privacy Policy & Terms</h1>
          <p className="text-slate-300 italic mb-12">Last Updated: November 2025</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">1. Privacy First</h2>
            <p className="text-slate-300 leading-relaxed">
              PartnerX is designed as a local-first application. Your financial data is stored directly on your device 
              and is not transmitted to our servers unless you explicitly enable cloud sync features (coming soon).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">2. Data Collection</h2>
            <p className="text-slate-300 leading-relaxed">
              We do not collect personal financial information. We may collect anonymous usage statistics to help 
              improve the application performance and user experience.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">3. Terms of Service</h2>
            <p className="text-slate-300 leading-relaxed">
              By using PartnerX, you agree to these terms. The application is provided "as is" without warranties 
              of any kind. We are not responsible for any financial decisions made based on the data presented 
              in the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">4. Security</h2>
            <p className="text-slate-300 leading-relaxed">
              We implement industry-standard security measures to protect your local data, including PIN protection 
              and encryption support. However, you are responsible for maintaining the security of your device.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
