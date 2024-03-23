import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to MySpark! These terms and conditions outline the rules and regulations for the use of our website and app. By accessing this website or using our app, we assume you accept these terms and conditions. Do not continue to use MySpark if you do not agree to take all of the terms and conditions stated on this page.
      </p>
      <h2 className="text-2xl font-bold mb-2">1. Intellectual Property Rights</h2>
      <p className="mb-4">
        Unless otherwise stated, MySpark and/or its licensors own the intellectual property rights for all material on MySpark. All intellectual property rights are reserved. You may access this from MySpark for your own personal use subjected to restrictions set in these terms and conditions.
      </p>
      <h2 className="text-2xl font-bold mb-2">2. User Content</h2>
      <p className="mb-4">
        By posting, uploading, or otherwise making available any User Content on or through the Service, you hereby grant to MySpark a worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license, with the right to sublicense, to use, copy, adapt, modify, distribute, license, sell, transfer, publicly display, publicly perform, transmit, stream, broadcast, access, view, and otherwise exploit such User Content only on, through or by means of the Service.
      </p>
      <h2 className="text-2xl font-bold mb-2">3. User Conduct</h2>
      <p className="mb-4">
        You agree not to use MySpark to post, upload, or otherwise make available any User Content that:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Infringes any patent, trademark, trade secret, copyright, or other intellectual property rights of any other person.</li>
        <li>Is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, or contains explicit or graphic descriptions or accounts of sexual acts.</li>
        <li>Victimizes, harasses, degrades, or intimidates an individual or group of individuals on the basis of religion, gender, sexual orientation, race, ethnicity, age, or disability.</li>
        <li>Impersonates any person, business, or entity, including MySpark and its employees and agents.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">4. Termination</h2>
      <p className="mb-4">
        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
      </p>
      <h2 className="text-2xl font-bold mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        In no event shall MySpark, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
      </p>
      <p>
        These Terms shall be governed and construed in accordance with the laws of the jurisdiction where MySpark is headquartered, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
      </p>
      <p className="mt-8">
        If you have any questions about these Terms, please <Link href="/contact" className="text-blue-500 hover:underline">contact us</Link>.
      </p>
    </div>
  );
}