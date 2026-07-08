import { motion } from 'framer-motion';
import PageShell from '../components/PageShell';

const Terms = () => {
  return (
    <PageShell contentClassName="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold text-text dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-mutedText dark:text-gray-400 mb-12">
            Last updated: July {new Date().getDate()}, {new Date().getFullYear()}
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                By accessing or using Turjman, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Use of Service
              </h2>
              <div className="space-y-4 text-mutedText dark:text-gray-400 leading-relaxed">
                <p>You agree to use Turjman only for lawful purposes and in accordance with these terms. You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the service in any way that violates any applicable law or regulation</li>
                  <li>Attempt to interfere with or disrupt the service</li>
                  <li>Reverse engineer or attempt to extract the source code</li>
                  <li>Use the service for any commercial purpose without our prior written consent</li>
                  <li>Upload or transmit any malicious software</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Intellectual Property
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                Turjman and its original content, features, and functionality are and will remain the exclusive property of Turjman and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                User Content
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                You retain all rights to any content you translate or submit through Turjman. We do not claim ownership of your content and only process it as necessary to provide the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                Turjman is provided on an "as is" and "as available" basis without any warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                In no event shall Turjman be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Termination
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Governing Law
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws applicable in your jurisdiction, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by updating the "Last updated" date at the top of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-mutedText dark:text-gray-400 leading-relaxed">
                If you have any questions about these Terms, please contact us at legal@turjman.com.
              </p>
            </section>
          </div>
        </motion.div>
      </PageShell>
  );
};

export default Terms;
