import { getMessages } from "next-intl/server";
import RequestsBoard from "./RequestsBoard";

/**
 * The digital-partner page's requests section. Copy lives under
 * `DigitalPartner.requests`, a server-only namespace, read as plain messages
 * because the board needs the request list as objects and none of these
 * strings use ICU formatting.
 *
 * Headings follow the detail page's scale (h2 = text-2xl).
 */
const PartnerShowcase = async () => {
  const { title, intro, note, boardLabel, ...board } = (await getMessages())
    .DigitalPartner.requests;

  return (
    <section className="mt-12 md:mt-16 border-t border-neutral-200 pt-10 md:pt-14">
      <h2 className="text-2xl font-bold text-midnight-900 mb-3">{title}</h2>
      <p className="max-w-2xl leading-relaxed text-neutral-700 mb-8">{intro}</p>
      <RequestsBoard copy={board} label={boardLabel} />
      <p className="mt-4 text-center text-sm text-neutral-500">{note}</p>
    </section>
  );
};

export default PartnerShowcase;
