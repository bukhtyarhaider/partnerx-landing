import './Legal.css';

export default function Legal() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content glass animate-fade-in">
          <h1>Privacy Policy & Terms</h1>
          <p className="last-updated">Last Updated: November 2025</p>

          <section>
            <h2>1. Privacy First</h2>
            <p>
              PartnerX is designed as a local-first application. Your financial data is stored directly on your device 
              and is not transmitted to our servers unless you explicitly enable cloud sync features (coming soon).
            </p>
          </section>

          <section>
            <h2>2. Data Collection</h2>
            <p>
              We do not collect personal financial information. We may collect anonymous usage statistics to help 
              improve the application performance and user experience.
            </p>
          </section>

          <section>
            <h2>3. Terms of Service</h2>
            <p>
              By using PartnerX, you agree to these terms. The application is provided "as is" without warranties 
              of any kind. We are not responsible for any financial decisions made based on the data presented 
              in the application.
            </p>
          </section>

          <section>
            <h2>4. Security</h2>
            <p>
              We implement industry-standard security measures to protect your local data, including PIN protection 
              and encryption support. However, you are responsible for maintaining the security of your device.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
