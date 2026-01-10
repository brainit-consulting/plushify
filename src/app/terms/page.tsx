import Link from "next/link";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Terms of Service
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Plushify (&quot;Service&quot;), you agree to be bound
              by these Terms of Service. If you do not agree to these terms,
              please do not use our Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Plushify is an AI-powered service that transforms photos into
              plushie-style images. Users can upload photos and receive
              AI-generated plushie versions of their images.
            </p>

            <h2>3. Account Registration</h2>
            <p>To use our Service, you must:</p>
            <ul>
              <li>Be at least 13 years of age</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
            <p>
              You are responsible for all activities that occur under your
              account.
            </p>

            <h2>4. Credits and Payments</h2>
            <ul>
              <li>Credits are used to generate plushie images</li>
              <li>Credits are non-transferable between accounts</li>
              <li>Credits do not expire</li>
              <li>All purchases are final unless otherwise stated</li>
              <li>
                Refunds for unused credits may be requested within 14 days of
                purchase
              </li>
            </ul>

            <h2>5. User Content</h2>
            <h3>Ownership</h3>
            <p>
              You retain ownership of all photos you upload to Plushify. By
              uploading content, you grant us a limited license to process your
              photos for the purpose of generating plushie images.
            </p>

            <h3>Content Guidelines</h3>
            <p>You agree not to upload content that:</p>
            <ul>
              <li>Infringes on any intellectual property rights</li>
              <li>Contains explicit, violent, or offensive material</li>
              <li>Depicts minors in inappropriate contexts</li>
              <li>Violates any applicable laws or regulations</li>
              <li>Contains malware or harmful code</li>
            </ul>

            <h3>Generated Images</h3>
            <p>
              You own the plushie images generated from your photos. You may use
              these images for personal or commercial purposes, subject to any
              third-party rights in the original photos.
            </p>

            <h2>6. Prohibited Uses</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any illegal purpose</li>
              <li>Attempt to reverse engineer or hack our systems</li>
              <li>Create accounts under false pretenses</li>
              <li>Share your account with others</li>
              <li>Use automated systems to access the Service</li>
              <li>Resell or redistribute the Service</li>
            </ul>

            <h2>7. Intellectual Property</h2>
            <p>
              The Plushify service, including its AI technology, website design,
              logos, and content, is owned by Plushify and protected by
              intellectual property laws. You may not copy, modify, or
              distribute our proprietary technology.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND,
              EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR MEET YOUR SPECIFIC REQUIREMENTS.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PLUSHIFY SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Plushify and its
              affiliates from any claims, damages, or expenses arising from your
              use of the Service or violation of these Terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              We may suspend or terminate your account at any time for violation
              of these Terms. You may also delete your account at any time.
              Upon termination, your right to use the Service will cease
              immediately.
            </p>

            <h2>12. Modifications to Service</h2>
            <p>
              We reserve the right to modify or discontinue the Service at any
              time. We will provide reasonable notice of any significant changes.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Service after changes constitutes acceptance of the new Terms.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Plushify operates, without
              regard to conflict of law principles.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@plushify.com" className="text-primary hover:underline">
                legal@plushify.com
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
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
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
