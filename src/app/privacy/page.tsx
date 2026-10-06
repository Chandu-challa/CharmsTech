import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Calendar,
  FileText,
  Target,
  Globe,
  Award,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CHARMS Tech Labs",
  description:
    "Learn how CHARMS Tech Labs collects, protects, and uses your personal and academic project information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-24 pb-28 text-center">
        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Radial Glow */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-12 w-[600px] h-[400px] md:w-[800px] md:h-[500px] opacity-25 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-violet-600 to-transparent blur-3xl mix-blend-screen" />

        <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400">
            <Shield className="h-4 w-4" /> Legal & Transparency
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-400 md:text-base">
            <Calendar className="h-4 w-4 text-blue-400" />
            <span>Last Updated: March 15, 2026</span>
          </div>

          <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-slate-300 md:text-lg">
            At CHARMS Tech Labs, we prioritize your privacy and data security.
            This policy outlines how we handle your personal and academic information across our
            training programs and project development services.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="relative z-20 py-16 -mt-10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Introduction Overview Banner */}
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/70 to-violet-50/70 p-6 md:p-8 text-slate-700 shadow-md">
            <p className="leading-relaxed text-slate-700 font-medium">
              CHARMS Tech Labs (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides technology training and project development services for B.Tech and M.Tech students in Tirupati, India. We are committed to safeguarding your privacy in compliance with applicable data protection laws. By accessing our platform, enrolling in courses, or submitting project requirements, you acknowledge and agree to the practices described below.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                1. Information We Collect
              </h2>
            </div>
            
            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              We collect information that you directly provide when registering for courses, requesting project assistance, or communicating with our team:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">Personal & Academic Details</h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    Full name, email address, mobile number, college/university name, degree program (B.Tech, M.Tech, MCA), specialization branch, and graduation year.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">Project Development Data</h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    Project topic requirements, technical specifications, repository links, source code submissions, and feedback provided during mentoring sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">Transaction & Billing Records</h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    Payment reference identifiers, invoice details, course fee receipts, and payment status. We never store credit or debit card numbers on our servers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">Usage & Technical Telemetry</h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    Browser type, operating system, IP address, pages viewed, device identifiers, and session timestamps to maintain application performance and security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                2. How We Use Your Information
              </h2>
            </div>

            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              The information we collect is utilized strictly to provide, optimize, and deliver world-class training and engineering experiences:
            </p>

            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong className="text-slate-800">Course & Mentorship Delivery:</strong> Administering interactive sessions, hands-on lab access, code reviews, and project guidance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong className="text-slate-800">Certification & Verification:</strong> Issuing and verifying verifiable course completion and internship certificates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong className="text-slate-800">Academic & Technical Support:</strong> Responding to student inquiries, resolving development blockers, and providing viva preparation guidance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong className="text-slate-800">Important Updates & Notices:</strong> Sharing batch timing adjustments, workshop alerts, and security notifications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span><strong className="text-slate-800">Platform Analytics:</strong> Evaluating curriculum efficacy and website responsiveness to refine instructional material.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Data Security */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                3. Data Security
              </h2>
            </div>

            <p className="mb-4 font-medium leading-relaxed text-slate-600">
              We take the safety of your educational and personal records seriously. We deploy industry-standard technical and organizational security protocols:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70">
                <h4 className="font-extrabold text-slate-800 text-base mb-2">Transport & Rest Encryption</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  All communication between your browser and our servers is encrypted using modern TLS protocols. Stored data is safeguarded in isolated environments.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70">
                <h4 className="font-extrabold text-slate-800 text-base mb-2">Restricted Access Controls</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Only verified CHARMS Tech Labs mentors and administrative staff who require access for educational supervision are granted data permissions.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70">
                <h4 className="font-extrabold text-slate-800 text-base mb-2">Source Code Confidentiality</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Student project files and architecture documentation are treated as strictly confidential and will never be shared without explicit consent.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70">
                <h4 className="font-extrabold text-slate-800 text-base mb-2">Routine Backups & Monitoring</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Automated backups and continuous vulnerability checks ensure data integrity, business continuity, and defense against unauthorized access.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Third-Party Services */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                4. Third-Party Services
              </h2>
            </div>

            <p className="mb-4 font-medium leading-relaxed text-slate-600">
              To provide seamless digital operations, we partner with reputable third-party technology providers. These parties process data only on our instructions:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4 py-1">
                <h4 className="font-bold text-slate-900">Payment Gateways</h4>
                <p className="text-sm text-slate-600 font-medium mt-0.5">
                  Payments are processed via secure, PCI-DSS-compliant gateways. We do not retain card credentials, bank PINs, or CVV numbers.
                </p>
              </div>

              <div className="border-l-4 border-violet-600 pl-4 py-1">
                <h4 className="font-bold text-slate-900">Cloud Infrastructure & Database Hosting</h4>
                <p className="text-sm text-slate-600 font-medium mt-0.5">
                  Our servers and databases are hosted on enterprise cloud providers with multi-tier firewall protections and disaster recovery facilities.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 py-1">
                <h4 className="font-bold text-slate-900">Communication & Notification Providers</h4>
                <p className="text-sm text-slate-600 font-medium mt-0.5">
                  Transactional emails, enrollment confirmations, and SMS notifications are dispatched via authorized messaging delivery vendors.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200/70">
              <p className="text-sm font-semibold text-slate-700">
                🛡️ <span className="font-bold">No Sale of Personal Information:</span> CHARMS Tech Labs will never sell, rent, monetize, or trade your student information with any third-party marketing companies or brokers.
              </p>
            </div>
          </div>

          {/* Section 5: Your Rights */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                5. Your Rights
              </h2>
            </div>

            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              You retain full control over your personal data. At any time during or after your training engagement, you have the right to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Access Your Data</h4>
                <p className="text-xs text-slate-600 font-medium">Request a structured summary of all personal and academic records maintained in our systems.</p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Rectify Inaccuracies</h4>
                <p className="text-xs text-slate-600 font-medium">Request immediate correction of erroneous profile, contact, or university enrollment details.</p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Request Data Deletion</h4>
                <p className="text-xs text-slate-600 font-medium">Request erasure of personal records, subject to certificate verification and legal audit requirements.</p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Opt-Out of Alerts</h4>
                <p className="text-xs text-slate-600 font-medium">Unsubscribe from non-essential promotional newsletters and workshop announcements at any time.</p>
              </div>
            </div>
          </div>

          {/* Section 6: Contact Us */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                6. Contact Us
              </h2>
            </div>

            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              If you have any questions, clarifications, or requests regarding this Privacy Policy or how your data is handled, please get in touch with our data protection team:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="flex flex-col items-start p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</span>
                <a href="mailto:hello@charmstechlabs.com" className="text-sm font-bold text-slate-900 hover:text-blue-600 mt-1 transition-colors">
                  hello@charmstechlabs.com
                </a>
              </div>

              <div className="flex flex-col items-start p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</span>
                <a href="tel:+919876543210" className="text-sm font-bold text-slate-900 hover:text-blue-600 mt-1 transition-colors">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex flex-col items-start p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Visit Us</span>
                <p className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                  Charms Tech Labs HQ<br />Tech Park, Sector 4<br />Tirupati, AP
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-medium text-slate-500">
                Need to read our terms of engagement as well?
              </p>
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-violet-600 transition-colors"
              >
                Review Terms of Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
