import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Terms & Conditions · Pietra",
  description: "Plain-language terms for working with Pietra Studio.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms · Pietra"
      title="How we agree to work together, in plain language."
      meta={[
        { label: "Version", value: "2.1" },
        { label: "Effective", value: "Oct 2026" },
        { label: "Updated", value: "Jul 2026" },
      ]}
      intro={[
        "These are the terms that apply to work carried out by Pietra Studio, Lda. Most of what is written here is what we would say to you in person, before either of us signs anything.",
        "If anything is unclear or feels unfair, please tell us. We would rather rewrite a contract than defend one.",
      ]}
      sections={[
        {
          n: "01",
          heading: "Engagement",
          body: [
            "Every project begins with a written proposal from the studio, signed by both parties. The proposal names the scope, the fee, the timeline, and the people who will work on the room.",
          ],
        },
        {
          n: "02",
          heading: "Fees and stages",
          body: [
            "Fees are quoted in euros and are exclusive of VAT at the prevailing rate. Invoices are issued at the start of each agreed stage and are payable within thirty days.",
          ],
        },
        {
          n: "03",
          heading: "Site visits",
          body: [
            "The first two site visits are charged at a fixed fee stated in the proposal. Subsequent visits are charged at our standard hourly rate, billed in half-day increments.",
          ],
        },
        {
          n: "04",
          heading: "Procurement",
          body: [
            "Items purchased on your behalf are bought at trade rates, with a disclosed procurement margin of twelve per cent. Invoices from suppliers are passed through at cost.",
          ],
        },
        {
          n: "05",
          heading: "Warranty",
          body: [
            "Joinery and stonework carry a five-year warranty against failure of materials or workmanship. Plaster, paint, and brass finishes are warranted for twelve months and are expected to develop a patina over the life of the room.",
          ],
        },
        {
          n: "06",
          heading: "Photography",
          body: [
            "We retain the right to photograph completed work for the studio's archive and publication, unless a written embargo is requested at handover and granted by the studio.",
          ],
        },
        {
          n: "07",
          heading: "Confidentiality",
          body: [
            "We treat everything we learn about you, your home, and your project as confidential. We will not name you or your project publicly without your written permission.",
          ],
        },
        {
          n: "08",
          heading: "Termination",
          body: [
            "Either party may terminate the engagement on fourteen days' written notice. Fees are payable for work completed to the date of termination. We will hand over all drawings, specifications, and ongoing orders on receipt of the final invoice.",
          ],
        },
        {
          n: "09",
          heading: "Governing law",
          body: [
            "These terms are governed by Portuguese law. Any dispute will be settled in the courts of Lisbon unless both parties agree in writing to an alternative.",
          ],
        },
        {
          n: "10",
          heading: "Contact",
          body: [
            "Write to us at studio@pietra.com with any question on these terms. Marta Ruiz and Tomás Neves are the named partners of the studio.",
          ],
        },
      ]}
    />
  );
}
