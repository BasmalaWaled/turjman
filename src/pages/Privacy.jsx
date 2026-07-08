import { motion } from 'framer-motion';
import PageShell from '../components/PageShell';

const Privacy = () => {
  return (
    <PageShell contentClassName="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold text-text dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-mutedText dark:text-gray-400 mb-12">
            Last updated: July {new Date().getDate()}, {new Date().getFullYear()}
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Introduction
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                Welcome to Turjman. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our app and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4 text-mutedText dark:text-gray-400 leading-relaxed">
                <p>We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Personal Information:</strong> Name, email address, and other contact details you provide.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our app and website.</li>
                  <li><strong>Device Information:</strong> Information about your device, including IP address, browser type, and operating system.</li>
                  <li><strong>Translation Data:</strong> Texts you translate are processed locally on your device whenever possible.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-mutedText dark:text-gray-400 leading-relaxed">
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and maintain our service</li>
                  <li>To improve and personalize your experience</li>
                  <li>To communicate with you about updates and support</li>
                  <li>To detect and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Data Security
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is encrypted both in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Data Retention
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                Your translation history is stored locally on your device only, unless you choose to back it up to your personal cloud storage. We do not store your translation data on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-mutedText dark:text-gray-400 leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Children's Privacy
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                If you have any questions about this privacy policy, please contact us at privacy@turjman.com.
              </p>
            </section>
          </div>
        </motion.div>
      </PageShell>
  );
};

export default Privacy;
