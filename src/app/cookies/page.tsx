import Link from "next/link";
import { Cookie } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cookieTypes = [
  {
    name: "Essential Cookies",
    description:
      "These cookies are necessary for the website to function properly. They enable core functionality such as security, account authentication, and session management.",
    examples: ["Session cookies", "Authentication tokens", "Security cookies"],
    canDisable: false,
  },
  {
    name: "Functional Cookies",
    description:
      "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
    examples: ["Theme preference", "Language settings", "User preferences"],
    canDisable: true,
  },
  {
    name: "Analytics Cookies",
    description:
      "These cookies help us understand how visitors interact with our website by collecting anonymous information.",
    examples: ["Page views", "User journey tracking", "Performance metrics"],
    canDisable: true,
  },
];

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Cookie className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Cookie Policy
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
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert mb-12">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when
                you visit a website. They are widely used to make websites work
                more efficiently and to provide information to website owners.
              </p>
              <p>
                Plushify uses cookies and similar technologies to provide,
                protect, and improve our service. This policy explains what
                cookies we use and how you can manage them.
              </p>
            </div>

            {/* Cookie Types */}
            <h2 className="text-2xl font-bold mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6 mb-12">
              {cookieTypes.map((cookie, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{cookie.name}</CardTitle>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          cookie.canDisable
                            ? "bg-muted text-muted-foreground"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {cookie.canDisable ? "Optional" : "Required"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      {cookie.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cookie.examples.map((example, j) => (
                        <span
                          key={j}
                          className="text-xs bg-muted px-2 py-1 rounded"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-neutral dark:prose-invert">
              <h2>How to Manage Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their
                settings. You can typically find these settings in the
                &quot;Options&quot; or &quot;Preferences&quot; menu of your browser.
              </p>
              <p>
                Please note that disabling certain cookies may affect the
                functionality of our website. Essential cookies cannot be
                disabled as they are necessary for the website to function
                properly.
              </p>

              <h3>Browser Settings</h3>
              <p>
                Here are links to cookie management instructions for popular
                browsers:
              </p>
              <ul>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h2>Third-Party Cookies</h2>
              <p>
                Some cookies on our site are set by third-party services we use,
                such as analytics providers. These third parties may use cookies
                to collect information about your online activities across
                different websites.
              </p>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We encourage you to review this policy
                periodically.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please
                contact us at{" "}
                <a
                  href="mailto:privacy@plushify.com"
                  className="text-primary hover:underline"
                >
                  privacy@plushify.com
                </a>
                .
              </p>
            </div>
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
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
