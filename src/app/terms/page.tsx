import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Calendar,
  CheckCircle2,
  Code2,
  User,
  Award,
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | CHARMS Tech Labs",
  description:
    "Read the terms, conditions, and user guidelines for training programs and project development services at CHARMS Tech Labs.",
};

export default function TermsOfServicePage() {
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
            <FileText className="h-4 w-4" /> Legal & Terms of Use
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Terms of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-400 md:text-base">
            <Calendar className="h-4 w-4 text-blue-400" />
            <span>Last Updated: March 15, 2026</span>
          </div>

          <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-slate-300 md:text-lg">
            Please read these terms and conditions carefully before enrolling in our training
            programs, utilizing our project development platforms, or accessing CHARMS Tech Labs facilities.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="relative z-20 py-16 -mt-10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Introduction Overview Banner */}
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/70 to-violet-50/70 p-6 md:p-8 text-slate-700 shadow-md">
            <p className="leading-relaxed text-slate-700 font-medium">
              These Terms of Service (&ldquo;Terms&rdquo;) govern the relationship between CHARMS Tech Labs (&ldquo;CHARMS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and students, trainees, or visitors (&ldquo;you&rdquo;, &ldquo;User&rdquo;) who access our website, enroll in training courses, or commission academic project mentoring in Tirupati, India, and online.
            </p>
          </div>

          {/* Section 1: Acceptance of Terms */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                1. Acceptance of Terms
              </h2>
            </div>

            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              By visiting our platform, registering an account, making a payment, or attending any in-person or remote session at CHARMS Tech Labs, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1">Binding Agreement</h4>
                <p className="text-sm text-slate-600 font-medium">
                  If you do not agree to all terms and conditions set forth herein, you must immediately refrain from accessing our website or utilizing any educational services provided by CHARMS Tech Labs.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1">Eligibility & Consent</h4>
                <p className="text-sm text-slate-600 font-medium">
                  Our services are intended primarily for university engineering and technical students (B.Tech, M.Tech, MCA, B.Sc, BCA). Trainees under 18 years of age confirm that they possess parental or institutional guardian permission to enroll.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1">Modifications to Terms</h4>
                <p className="text-sm text-slate-600 font-medium">
                  We reserve the right to amend these Terms at any time. Material revisions will be posted with an updated &ldquo;Last Updated&rdquo; date. Continued participation in our programs after changes denotes full acceptance.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Services Description */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <Code2 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                2. Services Description
              </h2>
            </div>

            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              CHARMS Tech Labs operates a comprehensive technical training and project development platform designed to bridge the gap between academic theory and industry engineering standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70">
                <h4 className="font-extrabold text-slate-800 text-base mb-2">Professional Training Programs</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Instructor-led and hands-on modules in Python Full Stack, Next.js, React, Django, REST APIs, Artificial Intelligence, Machine Learning, and Database Architecture.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70">
                <h4 className="font-extrabold text-slate-800 text-base mb-2">B.Tech & M.Tech Project Support</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  End-to-end guidance for major and minor engineering projects, including system architecture diagrams, source code development, database schemas, and viva demonstration preparation.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70">
                <h4 className="font-extrabold text-slate-800 text-base mb-2">Hands-on Lab Infrastructure</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Access to physical workstation laboratories in Tirupati and cloud-based developmental environments for practical coding sessions.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/70">
                <h4 className="font-extrabold text-slate-800 text-base mb-2">Internships & Certifications</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Verifiable internship certificates and credentials awarded upon successful execution of course milestones, assessments, and capstone demonstrations.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: User Responsibilities */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <User className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                3. User Responsibilities
              </h2>
            </div>

            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              As an enrolled trainee or user of CHARMS Tech Labs, you are expected to maintain the highest standards of professional ethics and academic integrity:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">Academic Integrity & Project Defense</h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    All source code and architectural blueprints delivered are designed as educational tools for understanding, skill building, and academic presentation. Students are responsible for studying the system workflow and defending their own project work before university examiners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">Account Confidentiality</h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    You are solely responsible for maintaining the confidentiality of your student credentials, LMS portal accounts, and repository keys. You agree not to transfer or share access credentials with third parties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800">Respectful Laboratory Conduct</h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    Harassment, abusive conduct toward trainers or peers, intentional disruption of lab equipment, or introduction of malicious scripts into our local networks will result in immediate termination of enrollment without refund.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Intellectual Property */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                4. Intellectual Property
              </h2>
            </div>

            <p className="mb-4 font-medium leading-relaxed text-slate-600">
              The balance of proprietary rights between CHARMS Tech Labs and enrolled students is strictly governed as follows:
            </p>

            <ul className="space-y-4 text-slate-600 font-medium">
              <li className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-900 block mb-1">Proprietary Training Material:</strong>
                  All curriculum materials, course syllabus documents, lecture recordings, code challenge repositories, and proprietary starter templates are the sole intellectual property of CHARMS Tech Labs. Unauthorized duplication or commercial distribution is prohibited.
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-900 block mb-1">Student Ownership & Demonstration Rights:</strong>
                  Students retain ownership of custom application logic and enhancements created during their projects. Enrolled students are granted a non-exclusive license to present, demonstrate, and submit their project implementation for university evaluation and job portfolios.
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-900 block mb-1">Trademarks & Branding:</strong>
                  The CHARMS Tech Labs name, logos, and badges may only be used by students on resumes or LinkedIn profiles to accurately indicate course completion or internship credentials.
                </div>
              </li>
            </ul>
          </div>

          {/* Section 5: Payment Terms */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                5. Payment Terms
              </h2>
            </div>

            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              Clear financial agreements ensure smooth execution of all training batches and mentoring engagements:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4 py-1">
                <h4 className="font-bold text-slate-900">Program Fees & Invoicing</h4>
                <p className="text-sm text-slate-600 font-medium mt-0.5">
                  All fees for training courses and project packages are quoted in Indian Rupees (INR) and are inclusive of relevant taxes unless otherwise specified. Official receipts are issued upon verified payment receipt.
                </p>
              </div>

              <div className="border-l-4 border-violet-600 pl-4 py-1">
                <h4 className="font-bold text-slate-900">Installment Schedules</h4>
                <p className="text-sm text-slate-600 font-medium mt-0.5">
                  Where installment arrangements are approved, milestone payments must be settled before subsequent modules, project phase deliveries, or certificate issuance.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 py-1">
                <h4 className="font-bold text-slate-900">Refund & Cancellation Policy</h4>
                <p className="text-sm text-slate-600 font-medium mt-0.5">
                  Course cancellations requested at least 48 hours before official batch commencement are eligible for refund minus administrative processing fees. Once personalized project architecture, source code handoff, or batch training has commenced, fees become strictly non-refundable.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Limitation of Liability */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                6. Limitation of Liability
              </h2>
            </div>

            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              To the maximum extent permitted by applicable Indian law, CHARMS Tech Labs and its instructors provide educational services under the following limitations:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1">Academic & Employment Disclaimer</h4>
                <p className="text-sm text-slate-600 font-medium">
                  While our training programs and project consultations follow industry best practices, CHARMS Tech Labs does not warrant or guarantee specific university marks, viva outcomes, job placements, or salary figures. Academic outcomes remain the sole responsibility of student effort and university criteria.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1">Service & Technical Continuity</h4>
                <p className="text-sm text-slate-600 font-medium">
                  We strive for 99.9% platform and lab uptime, but are not liable for incidental downtime arising from scheduled maintenance, internet provider failures, cloud service outages, or acts of force majeure.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-1">Liability Cap</h4>
                <p className="text-sm text-slate-600 font-medium">
                  In no event shall the aggregate liability of CHARMS Tech Labs exceed the total amount actually paid by the student for the specific training course or project service in dispute.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7: Contact Information */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-600 border border-blue-200/50 shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                7. Contact Information
              </h2>
            </div>

            <p className="mb-6 font-medium leading-relaxed text-slate-600">
              For legal inquiries, dispute resolutions, or clarifications concerning these Terms of Service, please reach out to our administrative office:
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
                Looking for information on how we protect your personal data?
              </p>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-violet-600 transition-colors"
              >
                Review Privacy Policy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
