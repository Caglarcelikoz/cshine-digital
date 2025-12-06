import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - C-Shine Digital | Data Protection & GDPR Compliance",
  description:
    "Our privacy policy explains how C-Shine Digital collects, uses, and protects your personal data. GDPR compliant data protection practices for our software development services.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "personal data",
    "cookie policy",
    "data security",
    "Belgium privacy law",
    "software company privacy",
  ],
  openGraph: {
    title: "Privacy Policy - C-Shine Digital",
    description:
      "Our privacy policy explains how we collect, use, and protect your personal data. GDPR compliant data protection practices.",
    type: "website",
    url: "https://www.cshinedigital.com/privacy",
    siteName: "C-Shine Digital",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - C-Shine Digital",
    description:
      "GDPR compliant privacy policy for our software development services.",
  },
  alternates: {
    canonical: "https://www.cshinedigital.com/privacy",
  },
};

const Privacy = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-midnight-900 mb-4">
              Privacy Policy
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-cshine-blue-500 to-cyan-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4">Last Updated: December 2024</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-xl font-semibold text-midnight-900 mb-4">
              Contents
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>1. Introduction and Overview</li>
              <li>2. Information Collection</li>
              <li>3. Use of Cookies and Analytics</li>
              <li>4. How We Use Your Information</li>
              <li>5. Third-Party Service Providers</li>
              <li>6. Data Protection and Security</li>
              <li>7. Your Privacy Rights</li>
              <li>8. Contact Forms and Communications</li>
              <li>9. Updates to This Policy</li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <Section title="1. Introduction and Overview">
              <p>
                Welcome to the website of C-Shine Digital, located in Zutendaal,
                Limburg (BE), with company registration number BE0802.504.061.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or engage
                with our services. Please read this privacy policy carefully. If
                you do not agree with the terms of this privacy policy, please
                do not access the site.
              </p>
              <p className="mt-4">
                We reserve the right to make changes to this Privacy Policy at
                any time and for any reason. We will alert you about any changes
                by updating the &quot;Last Updated&quot; date of this Privacy
                Policy. You are encouraged to periodically review this Privacy
                Policy to stay informed of updates.
              </p>
            </Section>

            <Section title="2. Information Collection">
              <p>We collect information in the following ways:</p>
              <h3 className="text-lg font-semibold text-midnight-900 mt-4 mb-2">
                Information You Provide:
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Business details for project collaboration</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-midnight-900 mt-6 mb-2">
                Automatically Collected Information:
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and location data</li>
                <li>Website usage data</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </Section>

            <Section title="3. Use of Cookies and Analytics">
              <p>
                We use Google Analytics to understand how visitors interact with
                our website. This service may collect:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Pages visited and time spent</li>
                <li>Traffic sources and navigation paths</li>
                <li>Device and browser information</li>
                <li>Geographic location (country/city level)</li>
              </ul>
              <p className="mt-4">
                You can opt-out of Google Analytics by installing the Google
                Analytics Opt-out Browser Add-on or by managing your cookie
                preferences through our cookie consent banner.
              </p>
            </Section>

            <Section title="4. How We Use Your Information">
              <p>We use collected information for:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Providing and improving our services</li>
                <li>Communicating about projects and services</li>
                <li>Website optimization and security</li>
                <li>Legal compliance and business operations</li>
              </ul>
              <p className="mt-4">
                All processing is based on legitimate interests, contractual
                necessity, legal obligations, or your explicit consent.
              </p>
            </Section>

            <Section title="5. Third-Party Service Providers">
              <p>We work with trusted service providers for:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Website hosting and maintenance</li>
                <li>Analytics services</li>
                <li>Project management tools</li>
                <li>Communication platforms</li>
              </ul>
              <p className="mt-4">
                All service providers are carefully selected and required to
                maintain appropriate security measures. We only share
                information necessary for service provision.
              </p>
            </Section>

            <Section title="6. Data Protection and Security">
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data, including:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Secure data transmission (SSL/TLS encryption)</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Data backup and recovery procedures</li>
              </ul>
            </Section>

            <Section title="7. Your Privacy Rights">
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at info@cshinedigital.com.
                We will respond to your request within 30 days.
              </p>
            </Section>

            <Section title="8. Contact Forms and Communications">
              <p>
                When you use our contact forms, we collect necessary information
                to respond to your inquiry. This data is stored securely and
                used only for communication purposes.
              </p>
              <p className="mt-4">
                If you opt-in to marketing communications, you can unsubscribe
                at any time using the link in our emails or by contacting us
                directly.
              </p>
            </Section>

            <Section title="9. Updates to This Policy">
              <p>
                This privacy policy may be updated periodically. Significant
                changes will be communicated through our website or direct
                communication.
              </p>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-gray-600">
                  For questions about our privacy practices, contact us at{" "}
                  <a
                    href="mailto:info@cshinedigital.com"
                    className="text-cshine-blue-500 hover:underline"
                  >
                    info@cshinedigital.com
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-xl shadow-sm p-8">
    <h2 className="text-xl font-semibold text-midnight-900 mb-4">{title}</h2>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

export default Privacy;
