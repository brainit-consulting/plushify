import Link from "next/link";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              Plushify (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              service.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name and email address when you create an account</li>
              <li>Payment information when you purchase credits</li>
              <li>Photos you upload for processing</li>
              <li>Generated plushie images</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you use our service, we may automatically collect:</p>
            <ul>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To process your uploaded photos and generate plushie images</li>
              <li>To process payments and manage your account</li>
              <li>To communicate with you about service updates</li>
              <li>To improve our service and develop new features</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>

            <h2>Photo Processing and Storage</h2>
            <p>
              When you upload a photo to Plushify, we process it through our AI
              system to generate your plushie image. Your original photos and
              generated images are stored securely in your personal gallery.
            </p>
            <ul>
              <li>We do not share your photos with third parties</li>
              <li>We do not use your photos to train our AI models</li>
              <li>You can delete your photos at any time</li>
              <li>Deleted photos are permanently removed from our servers</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure server infrastructure</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is
              active or as needed to provide you services. You can request
              deletion of your account and associated data at any time.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for payment processing, analytics,
              and infrastructure. These services have their own privacy policies
              and we encourage you to review them.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our service is not intended for users under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you believe we have collected such information, please contact
              us immediately.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
              <a href="mailto:privacy@plushify.com" className="text-primary hover:underline">
                privacy@plushify.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
              {" | "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
