import type { Metadata } from "next";
import PageShell from "@/components/events/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service | Teng Chan Leong",
  description: "Terms of service for tengchanleong.com and Personal Claude, a private automation tool used only by its owner.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell eyebrow="Last updated 18 November 2026" title={<>Terms of Service</>}>
      <section className="bg-catalyst-navy py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-8 text-white/75 leading-relaxed">
          <p>
            These terms cover this website, tengchanleong.com, and &ldquo;Personal Claude&rdquo;, a private tool built
            and used only by Teng Chan Leong. By using this website you agree to these terms.
          </p>
          <div>
            <h2 className="font-display font-extrabold uppercase text-2xl text-white mb-3">This website</h2>
            <p>
              The content on this site is for general information only. It is not professional, legal or financial
              advice. Text, images and logos on this site belong to Teng Chan Leong or their respective owners and may
              not be copied for commercial use without permission. Links to other websites are provided for
              convenience; we are not responsible for their content.
            </p>
          </div>
          <div>
            <h2 className="font-display font-extrabold uppercase text-2xl text-white mb-3">Personal Claude</h2>
            <p>
              Personal Claude is not offered to the public, and no one other than its owner signs in to it. How it
              handles data is described in the{" "}
              <a href="/privacy" className="text-blueprint-cyan hover:underline">Privacy Policy</a>.
            </p>
          </div>
          <div>
            <h2 className="font-display font-extrabold uppercase text-2xl text-white mb-3">No warranty</h2>
            <p>
              This website and its content are provided &ldquo;as is&rdquo;, without warranties of any kind. To the
              extent allowed by law, Teng Chan Leong is not liable for any loss arising from use of this website.
            </p>
          </div>
          <div>
            <h2 className="font-display font-extrabold uppercase text-2xl text-white mb-3">Changes and governing law</h2>
            <p>
              These terms may be updated from time to time; the date above shows the latest version. These terms are
              governed by the laws of Malaysia.
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
