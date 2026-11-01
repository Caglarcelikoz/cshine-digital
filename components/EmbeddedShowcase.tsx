import { getTranslations } from "next-intl/server";
import TeamBoard from "./TeamBoard";

/**
 * The embedded-developer page's team board section. The heading copy is
 * localized (server-only `EmbeddedDeveloper` namespace); the board itself
 * stays English on purpose, see TeamBoard.
 *
 * Headings follow the detail page's scale (h2 = text-2xl).
 */
const EmbeddedShowcase = async () => {
  const t = await getTranslations("EmbeddedDeveloper.teamBoard");

  return (
    <section className="mt-12 md:mt-16 border-t border-neutral-200 pt-10 md:pt-14">
      <h2 className="text-2xl font-bold text-midnight-900 mb-3">
        {t("title")}
      </h2>
      <p className="max-w-2xl leading-relaxed text-neutral-700 mb-8">
        {t("intro")}
      </p>
      <TeamBoard label={t("boardLabel")} />
      <p className="mt-4 text-center text-sm text-neutral-500">{t("note")}</p>
    </section>
  );
};

export default EmbeddedShowcase;
