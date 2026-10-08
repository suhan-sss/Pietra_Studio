import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Cookie Policy · Pietra",
  description: "How this website uses cookies (almost none).",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Cookies · Pietra"
      title="The cookie policy is short, because the cookies are short."
      meta={[
        { label: "Version", value: "1.0" },
        { label: "Effective", value: "Oct 2026" },
      ]}
      intro={[
        "We do not use any non-essential cookies. This page exists to be transparent about what we do and do not set when you visit pietra.com.",
      ]}
      sections={[
        {
          n: "01",
          heading: "What is a cookie",
          body: [
            "A cookie is a small text file stored by your browser when you visit a website. Cookies are usually used to remember things between pages or visits.",
          ],
        },
        {
          n: "02",
          heading: "What we set",
          body: [
            "Nothing. The website does not set any analytics, advertising, or tracking cookies. We have deliberately not included any third-party services that require a cookie banner.",
          ],
        },
        {
          n: "03",
          heading: "What your browser may set",
          body: [
            "Your browser may set a session cookie to remember your language preference. That cookie is deleted when you close the browser. You can disable all cookies in your browser settings without affecting the use of the site.",
          ],
        },
        {
          n: "04",
          heading: "Third parties",
          body: [
            "Embedded maps on the Contact page set cookies through Google Maps. Vimeo or YouTube embeds, if added later, would set cookies through those providers. We avoid embedding either on this site.",
          ],
        },
        {
          n: "05",
          heading: "Changes",
          body: [
            "If we ever add a feature that requires cookies, we will update this page first. We will also add a consent banner before any non-essential cookie is set.",
          ],
        },
      ]}
    />
  );
}
