import { ReactNode } from 'react';
import { motion } from 'motion/react';

/**
 * Section: Наша философия / Уход, рождённый природой
 *
 * Two card layouts:
 *   - "stacked" (default): image on top, text on bottom. Used for the tall left card.
 *   - "side": text on the left, fixed 240×268px image flush to the right edge.
 *            Card height locks to image height (268px) and does not shrink/grow.
 *
 * Grid:
 *   Desktop: 2 columns × 2 rows. Left card spans 2 rows (full height).
 *            Right column has two stacked cards.
 *   Mobile:  Single column, all cards stacked in source order. The "side" cards
 *            keep image on the right at native size; text column shrinks.
 */

const REPO_RAW =
  'https://cdn.jsdelivr.net/gh/alimjapar/asiya@main';

export default function Philosophy2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section 
      className="section-py bg-bg-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container-page">
        {/* Eyebrow */}
        <motion.p className="section-eyebrow mb-4 md:mb-6" variants={itemVariants}>
          философия
        </motion.p>

        {/* Section title + secondary CTA */}
        <motion.div className="mb-10 md:mb-16" variants={itemVariants}>
          <h2 className="section-title">
            Уход, рождённый природой
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {/* LEFT — background image card */}
          <PhilosophyCard
            tone="linen"
            layout="background"
            className="md:row-span-2 h-[380px] md:h-[568px]"
            title="Традиция красоты"
            body="ASIYA – это ежедневный ритуал и традиции, которые передаются с любовью и заботой."
            imageUrl={`${REPO_RAW}/ladies.png`}
            imageAlt="Натуральная косметика — ритуал ухода"
            variants={itemVariants}
          />

          {/* RIGHT TOP — side card */}
          <PhilosophyCard
            tone="sand"
            layout="side"
            title="С заботой о&nbsp;природе"
            body="Мы создаём косметику с минимальным воздействием на природу и с осознанным подходом к упаковке."
            imageUrl={`${REPO_RAW}/nature-v2.png`}
            imageAlt="Цветы миндаля"
            variants={itemVariants}
          />

          {/* RIGHT BOTTOM — side card with bullet list */}
          <PhilosophyCard
            tone="dark"
            layout="side"
            title="100% натурально"
            bulletList={[
              'Без парабенов и SLS',
              'pH 5.5 — безопасно для кожи',
              'Сертифицировано Халяль',
            ]}
            imageUrl={`${REPO_RAW}/product-v2.png`}
            imageAlt="Натуральные ингредиенты"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ----------------------------- Card component ----------------------------- */

type Layout = 'stacked' | 'side' | 'background';

type PhilosophyCardProps = {
  title: string | ReactNode;
  body?: string;
  bulletList?: string[];
  imageUrl?: string;
  imageAlt?: string;
  tone?: 'light' | 'dark' | 'transparent' | 'sand' | 'linen';
  layout?: Layout;
  className?: string;
  variants?: any;
};

function PhilosophyCard({
  title,
  body,
  bulletList,
  imageUrl,
  imageAlt,
  tone = 'light',
  layout = 'stacked',
  className = '',
  variants,
}: PhilosophyCardProps) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-bg-dark text-ink-on_dark border-bg-dark'
      : tone === 'transparent'
      ? 'bg-transparent text-ink-primary border-line-default'
      : tone === 'sand'
      ? 'bg-bg-secondary text-ink-primary border-bg-secondary'
      : tone === 'linen'
      ? 'bg-bg-primary text-ink-primary border-bg-primary'
      : 'bg-bg-soft text-ink-primary border-line-default';

  const titleTextClass = tone === 'dark' ? 'text-ink-on_dark' : 'text-ink-primary';
  const secondaryTextClass = tone === 'dark' ? 'text-ink-on_dark/80' : 'text-ink-secondary';
  const bulletDotClass = tone === 'dark' ? 'bg-ink-on_dark' : 'bg-ink-secondary';

  /* -------------------------- BACKGROUND LAYOUT ------------------------- */
  /* Full-width background image with text block overlaid in bottom-left. */
  if (layout === 'background') {
    return (
      <motion.article
        variants={variants}
        className={`rounded-card border overflow-hidden relative ${toneClasses} ${className}`}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={imageAlt ?? ''}
            className="absolute inset-0 w-full h-full object-cover z-0"
            loading="lazy"
          />
        )}

        {/* Text block: absolute, bottom-6, responsive width, slightly transparent bg */}
        <div 
          className={`absolute bottom-6 left-6 right-6 md:right-auto md:w-[368px] z-10 ${tone === 'linen' ? 'bg-bg-primary/90' : 'bg-bg-soft/90'} backdrop-blur-sm p-6 rounded-card border border-line-default shadow-lg`}
        >
          <h3 className={`font-serif text-h3-m md:text-h3 mb-3 leading-tight ${titleTextClass}`}>
            {title}
          </h3>

          {body && (
            <p className={`text-body ${secondaryTextClass}`}>
              {body}
            </p>
          )}

          {bulletList && (
            <ul className={`space-y-2 text-body ${secondaryTextClass}`}>
              {bulletList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className={`mt-[0.6em] inline-block w-1 h-1 rounded-full ${bulletDotClass} shrink-0`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.article>
    );
  }

  /* ---------------------------- SIDE LAYOUT ---------------------------- */
  /* Text left (padding on desktop / standard padding on mobile), image right/bottom.
     Card height = image height (268px) on desktop, auto on mobile. */
  if (layout === 'side') {
    return (
      <motion.article
        variants={variants}
        className={`rounded-card border overflow-hidden flex flex-col md:flex-row md:h-[268px] ${toneClasses} ${className}`}
      >
        {/* Left/Top — text column */}
        <div
          className="flex-1 min-w-0 flex flex-col justify-center p-6 md:p-0 md:pl-10 md:pr-4"
        >
          <h3 className={`font-serif text-h3-m md:text-h3 mb-3 md:mb-4 leading-tight ${titleTextClass}`}>
            {title}
          </h3>

          {body && (
            <p className={`text-body ${secondaryTextClass} max-w-md mb-4 md:mb-0`}>{body}</p>
          )}

          {bulletList && (
            <ul className={`space-y-2 text-body ${secondaryTextClass} mb-4 md:mb-0`}>
              {bulletList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className={`mt-[0.6em] inline-block w-1 h-1 rounded-full ${bulletDotClass} shrink-0`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right/Bottom — image */}
        {imageUrl && (
          <div
            className="w-full h-[200px] md:w-[240px] md:h-[268px] shrink-0"
          >
            <img
              src={imageUrl}
              alt={imageAlt ?? ''}
              className="block w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
      </motion.article>
    );
  }

  /* -------------------------- STACKED LAYOUT --------------------------- */
  /* Image on top, text bottom-aligned. Used for the tall left card. */
  return (
    <motion.article
      variants={variants}
      className={`card-bordered ${toneClasses} flex flex-col overflow-hidden ${className}`}
    >
      {imageUrl && (
        <div className="-mx-card-m md:-mx-card -mt-card-m md:-mt-card mb-6 aspect-[4/3] md:aspect-[4/5] overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt ?? ''}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="mt-auto">
        <h3 className={`font-serif text-h3-m md:text-h3 mb-3 md:mb-4 ${titleTextClass}`}>
          {title}
        </h3>

        {body && (
          <p className={`text-body ${secondaryTextClass} max-w-md`}>{body}</p>
        )}

        {bulletList && (
          <ul className={`space-y-2 text-body ${secondaryTextClass}`}>
            {bulletList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className={`mt-[0.6em] inline-block w-1 h-1 rounded-full ${bulletDotClass} shrink-0`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
