import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Terms and Conditions - C-Shine Digital | Legal Terms & Service Agreement",
  description:
    "Read our terms and conditions for software development services. Clear legal framework covering project execution, payment terms, intellectual property, and liability.",
  keywords: [
    "terms and conditions",
    "software development terms",
    "service agreement",
    "legal terms",
    "project terms",
    "intellectual property",
    "payment terms",
    "Belgium software company terms",
  ],
  openGraph: {
    title: "Terms and Conditions - C-Shine Digital",
    description:
      "Clear legal framework covering project execution, payment terms, intellectual property, and liability for our software development services.",
    type: "website",
    url: "https://www.cshinedigital.com/terms",
    siteName: "C-Shine Digital",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions - C-Shine Digital",
    description:
      "Legal terms and service agreement for our software development services.",
  },
  alternates: {
    canonical: "https://www.cshinedigital.com/terms",
  },
};

const Terms = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-midnight-900 mb-4">
              Terms and Conditions
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-cshine-blue-500 to-cyan-500 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4">Last Updated: March 2024</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-xl font-semibold text-midnight-900 mb-4">
              Contents
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>1. Definitions</li>
              <li>2. Applicability</li>
              <li>3. Offers and Quotations</li>
              <li>4. Acceptance</li>
              <li>5. Execution of an Assignment</li>
              <li>6. Intellectual Property</li>
              <li>7. Payment</li>
              <li>8. Cancellation and Termination</li>
              <li>9. Liability</li>
              <li>10. Complaints</li>
              <li>11. Applicable Law and Disputes</li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <Section title="1. Definitions">
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>C-Shine Digital:</strong> Located in Zutendaal,
                  Belgium, with VAT number BE0802.504.061.
                </li>
                <li>
                  <strong>Customer:</strong> The person or entity with whom
                  C-Shine Digital has entered into an agreement.
                </li>
                <li>
                  <strong>Parties:</strong> C-Shine Digital and the customer
                  collectively.
                </li>
                <li>
                  <strong>Consumer:</strong> A customer who is also an
                  individual and who acts as a private person.
                </li>
                <li>
                  <strong>Quote:</strong> All offers from C-Shine Digital to
                  (legal) persons with the intention of entering into an
                  agreement.
                </li>
                <li>
                  <strong>Agreement:</strong> The agreement between C-Shine
                  Digital and the customer.
                </li>
                <li>
                  <strong>Assignment:</strong> The service or product to be
                  provided by C-Shine Digital.
                </li>
                <li>
                  <strong>Cancellation:</strong> Termination or dissolution of
                  the agreement.
                </li>
                <li>
                  <strong>Written:</strong> Electronic communication such as
                  email, provided the identity of the sender and the
                  authenticity of the communication is sufficiently established.
                  The burden of proof regarding the receipt of electronic
                  communication lies with the customer.
                </li>
                <li>
                  <strong>Use:</strong> Reproduction and/or publication within
                  the meaning of the applicable laws.
                </li>
              </ul>
            </Section>

            <Section title="2. Applicability">
              <p>
                These terms and conditions apply to all quotations, offers,
                activities, orders, agreements, and deliveries of services or
                products by or on behalf of C-Shine Digital. Deviations from
                these conditions are only valid if expressly agreed in writing.
                Additional and/or deviating terms and conditions of the customer
                or third parties are expressly excluded.
              </p>
            </Section>

            <Section title="3. Offers and Quotations">
              <p>
                Offers and quotations from C-Shine Digital are without
                obligation unless expressly stated otherwise. An offer or
                quotation is valid for 14 days from the date of issue, unless
                otherwise stated in the offer or quotation. If the customer does
                not accept an offer or quotation within the applicable period,
                the offer or quotation expires unless otherwise agreed in
                writing.
              </p>
            </Section>

            <Section title="4. Acceptance">
              <p>
                The customer must explicitly and in writing accept the offer. If
                the customer fails to do so but still agrees or gives the
                impression that C-Shine Digital is carrying out work as part of
                the agreement, the offer is considered accepted. C-Shine Digital
                reserves the right to refuse an assignment if new information
                becomes available after acceptance that makes execution by
                C-Shine Digital unacceptable. After acceptance, the agreement
                can only be changed with mutual consent. In this case, C-Shine
                Digital is entitled to adjust the price for the agreement.
              </p>
            </Section>

            <Section title="5. Execution of an Assignment">
              <p>
                C-Shine Digital will execute the assignment to the best of its
                knowledge and ability and in accordance with the requirements of
                good craftsmanship, in the style in which C-Shine Digital
                typically works. C-Shine Digital will make every effort and act
                to the best of its ability in the given circumstances during the
                execution of the assignment. The execution of the assignment is
                done in consultation and upon written agreement and payment of
                any agreed-upon advance by the customer. The customer is obliged
                to do and refrain from all that is reasonably necessary and
                desirable to enable timely and correct execution of the
                assignment. If the customer has not ensured that C-Shine Digital
                can start the execution of the agreement in a timely manner, any
                additional costs and/or additional hours resulting from this are
                at the expense of the customer.
              </p>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                C-Shine Digital reserves all intellectual property rights with
                regard to products of the mind that it uses or has used and/or
                develops or has developed in the context of the execution of the
                agreement and with respect to which it has or can claim
                copyright or other intellectual property rights.
              </p>
            </Section>

            <Section title="7. Payment">
              <p>
                The customer must pay C-Shine Digital&apos;s invoices within 30
                days of the invoice date, unless otherwise agreed in writing. If
                the customer does not pay on time, they are automatically in
                default and liable for statutory interest. All judicial and
                extrajudicial costs incurred by C-Shine Digital as a result of
                the customer&apos;s non-compliance are fully borne by the
                customer.
              </p>
            </Section>

            <Section title="8. Cancellation and Termination">
              <p>
                C-Shine Digital reserves the right to cancel or suspend the
                agreement with immediate effect in the event of bankruptcy,
                suspension of payments, debt restructuring, attachment, or other
                circumstances that deprive the customer of free disposal of
                their assets. Cancellation or termination does not release the
                customer from their payment obligations. In the event of
                cancellation by the customer, the customer is obligated to
                reimburse C-Shine Digital for all reasonably incurred costs
                related to the execution of the agreement.
              </p>
            </Section>

            <Section title="9. Liability">
              <p>
                C-Shine Digital is only liable for direct damage suffered by the
                customer as a result of an attributable shortcoming of C-Shine
                Digital in the performance of the agreement. C-Shine Digital is
                never liable for indirect damages, such as consequential
                damages, loss of profit, savings, or damage to third parties.
              </p>
            </Section>

            <Section title="10. Complaints">
              <p>
                Complaints about the work performed or the invoice must be
                reported in writing within 3 days after discovering the defect,
                but no later than 14 days after completion of the relevant work,
                to C-Shine Digital. The customer must provide C-Shine Digital
                the opportunity to investigate a complaint.
              </p>
            </Section>

            <Section title="11. Applicable Law and Disputes">
              <p>
                All agreements between C-Shine Digital and the customer are
                subject to the laws of Belgium. Disputes arising from an
                agreement between C-Shine Digital and the customer that cannot
                be resolved by mutual agreement will be submitted to the
                competent court in the district of Limburg, Belgium.
              </p>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-gray-600">
                  For questions about our terms and conditions, contact us at{" "}
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

export default Terms;
