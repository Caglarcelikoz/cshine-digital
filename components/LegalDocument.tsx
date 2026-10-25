import { getTranslations } from "next-intl/server";

/**
 * A legal document (privacy policy, terms) rendered from messages under
 * Legal.<doc>. Each section is a list of blocks so the copy — including its
 * structure — can differ per locale without touching code.
 */
type Block =
  | { p: string }
  | { h3: string }
  | { ul: string[] }
  | { dl: { term: string; text: string }[] };

type Section = { title: string; blocks: Block[] };

const LegalBlock = ({ block }: { block: Block }) => {
  if ("p" in block) return <p>{block.p}</p>;
  if ("h3" in block)
    return (
      <h3 className="text-lg font-semibold text-midnight-900 mt-2">
        {block.h3}
      </h3>
    );
  if ("ul" in block)
    return (
      <ul className="list-disc ml-6 space-y-2">
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  return (
    <ul className="list-disc ml-6 space-y-2">
      {block.dl.map((item) => (
        <li key={item.term}>
          <strong>{item.term}:</strong> {item.text}
        </li>
      ))}
    </ul>
  );
};

const LegalDocument = async ({ doc }: { doc: "privacy" | "terms" }) => {
  const t = await getTranslations("Legal");
  const sections = t.raw(`${doc}.sections`) as Section[];
  const last = sections.length - 1;

  return (
    <div className="relative bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-midnight-900 mb-4">
              {t(`${doc}.title`)}
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-cshine-blue-500 to-cyan-500 mx-auto rounded-full" />
            <p className="text-neutral-600 mt-4">
              {t("lastUpdated", { date: t(`${doc}.lastUpdated`) })}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-xl font-semibold text-midnight-900 mb-4">
              {t("contents")}
            </h2>
            <ul className="space-y-2 text-neutral-600">
              {sections.map((section) => (
                <li key={section.title}>{section.title}</li>
              ))}
            </ul>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <h2 className="text-xl font-semibold text-midnight-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-neutral-600 leading-relaxed space-y-4">
                  {section.blocks.map((block, i) => (
                    <LegalBlock key={i} block={block} />
                  ))}
                  {index === last && (
                    <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                      <p className="text-neutral-600">
                        {t.rich(`${doc}.contact`, {
                          email: (chunks) => (
                            <a
                              href="mailto:info@cshinedigital.com"
                              className="text-cshine-blue-500 hover:underline"
                            >
                              {chunks}
                            </a>
                          ),
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocument;
