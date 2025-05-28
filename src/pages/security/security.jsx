import React from 'react';

const Security = () => {
  return (
   <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 sm:max-w-xl md:max-w-3xl lg:max-w-5xl text-white leading-relaxed break-words transition-all duration-300">

      <h1 className="text-3xl font-bold mb-8 text-center">Legal Details</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
        <p className="mb-4">
          Welcome to JAIMAX. Please read these Terms and Conditions ("Terms") carefully before using our services. By accessing or using our services, you agree to comply with these Terms. If you do not agree with any part of these Terms, you may not use our services.
        </p>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Account Security:</strong> You are responsible for maintaining the security of your account credentials. While we provide tools such as two-factor authentication to enhance security, you are ultimately responsible for safeguarding your account. You are liable for all activities conducted under your account, including but not limited to deposits, withdrawals, and trading activities. JAIMAX shall not be liable for any loss or damage arising from your failure to maintain the security of your account or password. Promptly notify JAIMAX of any unauthorized access or use of your account.
          </li>
          <li>
            <strong>Suspicious Activity:</strong> JAIMAX reserves the right to suspend or restrict your account in the event of suspicious activity.
          </li>
          <li>
            <strong>Compliance and Conduct:</strong> You agree not to disrupt or attempt to tamper with JAIMAX's services or servers in any manner that could harm our platform. Respect the privacy of others and refrain from disclosing personal information without consent. Do not impersonate JAIMAX employees or any other individuals.
          </li>
          <li>
            <strong>Financial Obligations:</strong> Any excess deposits or withdrawals mistakenly made to your account must be promptly returned. Failure to do so may result in legal action. Profits gained from exploiting platform inconsistencies must be returned to JAIMAX.
          </li>
          <li>
            <strong>Fraud and Security:</strong> Accounts involved in fraudulent or suspicious activities will be temporarily suspended pending investigation by JAIMAX.
          </li>
          <li>
            <strong>Prohibited Uses:</strong> Misuse of our services, including unauthorized access or interference, may result in the suspension or termination of your account.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> JAIMAX and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
          </li>
          <li>
            <strong>Disclaimer:</strong> Use of our services is at your own risk. JAIMAX provides the service on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
          </li>
          <li>
            <strong>Governing Law:</strong> These Terms are governed by the laws of Your Jurisdiction, without regard to its conflict of law provisions.
          </li>
          <li>
            <strong>Changes to Terms:</strong> JAIMAX reserves the right to modify these Terms at any time. Revised Terms will be effective upon posting on our website.
          </li>
          <li>
            <strong>Contact Us:</strong> If you have any questions, contact us at support@jaimax.com.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Introduction:</strong> JAIMAX respects your privacy and is committed to protecting it through compliance with this Policy. This Policy applies when we are acting as a data controller with respect to the personal data of our users.
          </li>
          <li>
            <strong>Personal Data We Collect:</strong> We collect only the data necessary. This includes:
            <ul className="list-disc pl-6 mt-2">
              <li>Account Data (e.g. name, address, ID)</li>
              <li>Payment Information (e.g. card, PayPal)</li>
              <li>Automatically collected device and usage info</li>
              <li>Third-party verification data</li>
            </ul>
          </li>
          <li>
            <strong>Retention and Deletion:</strong> We keep personal data only as long as needed to fulfill obligations or legal requirements.
          </li>
          <li>
            <strong>International Transfers:</strong> We may store your data outside the EEA with proper safeguards.
          </li>
          <li>
            <strong>Third-Party Data Sharing:</strong> Shared with processors only for operational needs.
          </li>
          <li>
            <strong>Data Security:</strong> Protected via encryption, access controls, and AWS infrastructure.
          </li>
          <li>
            <strong>Managing Preferences:</strong> You can adjust your preferences or opt-out anytime.
          </li>
          <li>
            <strong>Automated Decision-Making:</strong> We ensure transparency and allow opt-out of automated profiling.
          </li>
          <li>
            <strong>Policy Review:</strong> This policy is reviewed annually and updated when necessary.
          </li>
          <li>
            <strong>Contact:</strong> Reach us at <a className="text-blue-400 underline" href="https://jaimax.com/support-page" target="_blank" rel="noopener noreferrer">jaimax.com/support-page</a>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Security;
