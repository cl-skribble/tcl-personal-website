import type { Metadata } from "next";
import PageShell from "@/components/events/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Teng Chan Leong",
  description: "Privacy policy for Personal Claude, a private automation tool used only by its owner.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Last updated 5 November 2026" title={<>Privacy Policy</>}>
      <section className="bg-catalyst-navy py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-8 text-white/75 leading-relaxed">
          <p>
            &ldquo;Personal Claude&rdquo; is a private tool built and used only by Teng Chan Leong. It is not offered to
            the public, and no one other than its owner signs in to it.
          </p>
          <div>
            <h2 className="font-display font-extrabold uppercase text-2xl text-white mb-3">What it accesses</h2>
            <p>
              With the owner&apos;s own permission, the tool reads and organises the owner&apos;s own Google account
              (Gmail, Google Drive, Contacts and Google Sheets) from the owner&apos;s own computer.
            </p>
          </div>
          <div>
            <h2 className="font-display font-extrabold uppercase text-2xl text-white mb-3">What it collects and shares</h2>
            <p>
              The tool does not collect data from any other person. It does not sell, share or transfer Google user
              data to anyone. Data is processed on the owner&apos;s computer and is not stored on any server run for
              this tool.
            </p>
          </div>
          <div>
            <h2 className="font-display font-extrabold uppercase text-2xl text-white mb-3">Contact</h2>
            <p>
              Questions can be sent to{" "}
              <a href="mailto:tengchanleong@gmail.com" className="text-blueprint-cyan hover:underline">tengchanleong@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
