import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Privacy Policy · Pietra",
  description: "Pietra Studio's privacy policy — written in plain language.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy · Pietra"
      title="What we collect, why, and how we look after it."
      meta={[
        { label: "Version", value: "1.4" },
        { label: "Effective", value: "Oct 2026" },
        { label: "Updated", value: "Aug 2026" },
      ]}
      intro={[
        "We are a small studio. We collect a small amount of data, and we keep it for a short time. This page explains everything we keep on you and why.",
        "The policy is written in plain language because the language of compliance is rarely useful to the people reading it. If something here is unclear, write to us at the address below and we will rewrite it.",
      ]}
      sections={[
        {
          n: "01",
          heading: "Who we are",
          body: [
            "We are Pietra Studio, Lda., a limited company registered in Lisbon. Our studio is at Rua das Flores 24, 1200-195 Lisbon, Portugal. We are the data controller for anything described in this policy.",
          ],
        },
        {
          n: "02",
          heading: "What this policy covers",
          body: [
            "This policy covers information you give us through the contact form, by email, or by post. It also covers technical data we receive automatically when you visit the website.",
          ],
        },
        {
          n: "03",
          heading: "What we collect",
          body: [
            "When you write to us through the contact form, we collect your name, email, telephone (if provided), your role, your city, the scope of the project, and the body of your message. We also collect the timestamp of when you sent it.",
            "When you visit the website, we receive a small amount of technical data: which pages you looked at, what referred you here, your IP address, and your browser type. We do not link this to your name unless you also write to us.",
          ],
        },
        {
          n: "04",
          heading: "Why we collect it",
          body: [
            "We collect the information you send to reply to you, to consider working with you, and to keep a record of the conversation. We collect technical data to understand how the site is used and to fix problems.",
          ],
        },
        {
          n: "05",
          heading: "Who we share it with",
          body: [
            "We share nothing with advertising networks, data brokers, or analytics vendors. We share nothing with anyone outside the studio unless you ask us to in writing.",
            "Our email provider, our hosting provider, and our calendar provider may process data on our behalf. All of them are bound by a written data processing agreement and are based in the European Union.",
          ],
        },
        {
          n: "06",
          heading: "Where it is stored",
          body: [
            "Most of what we hold is stored in the European Union. Anything held outside the EU is covered by the European Commission's standard contractual clauses.",
          ],
        },
        {
          n: "07",
          heading: "How long we keep it",
          body: [
            "Enquiries are kept for two years from the date of your last message, after which they are deleted. Technical data is kept for fourteen months. Anything you ask to be deleted is deleted within thirty days.",
          ],
        },
        {
          n: "08",
          heading: "Your rights",
          body: [
            "You can ask us for a copy of everything we hold on you, ask us to correct it, or ask us to delete it. We will reply within thirty days and we will not charge you for the request. Write to privacy@pietra.com with any enquiry.",
          ],
        },
        {
          n: "09",
          heading: "Cookies",
          body: [
            "We do not set any non-essential cookies. We do not run any third-party tracking. We do not use analytics that require consent.",
          ],
        },
        {
          n: "10",
          heading: "Changes to this policy",
          body: [
            "If we change this policy in a way that affects you, we will write to you before the change takes effect. Material updates are announced on the studio's Journal.",
          ],
        },
      ]}
    />
  );
}
