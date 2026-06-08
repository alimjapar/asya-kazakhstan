import { ReactNode } from 'react';

/**
 * Section: Сделано в Казахстане / С гордостью за своё наследие
 */

export default function MadeInKZ() {
  return (
    <section className="section-py bg-bg-primary">
      <div className="container-page">
        {/* Eyebrow */}
        <p className="section-eyebrow mb-4 md:mb-6">СДЕЛАНО В КАЗАХСТАНЕ</p>

        {/* Section title */}
        <div className="mb-10 md:mb-16">
          <h2 className="section-title">
            Собственный завод в Алматы
          </h2>
        </div>

        {/*
          Grid:
          - Mobile: 1 column, cards stacked in source order.
          - Desktop: 2 columns. Left card spans 2 rows.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* LEFT — tall card: "Из степи — в каждый флакон" */}
          <PhilosophyCard
            tone="light"
            textWidth="100"
            className="md:row-span-2 md:min-h-[640px]"
            title="Из степи — в каждый флакон"
            body="Мы собираем растения в экологически чистых регионах Казахстана и превращаем их в формулы в собственной лаборатории."
          />

          {/* RIGHT TOP — "Для климата Центральной Азии" */}
          <PhilosophyCard
            tone="light"
            textWidth="100"
            className="md:min-h-[300px]"
            title="Для Центральной Азии"
            body="Наши продукты созданы с учётом климатических особенностей региона"
          />

          {/* RIGHT BOTTOM — "Сила родной природы" */}
          <PhilosophyCard
            tone="light"
            textWidth="100"
            className="md:min-h-[300px]"
            title="Сила родной природы"
            body="Экологически чистые ингредиенты и натуральные экстракты локальных растений."
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Card component ----------------------------- */
/* Shared logic with PhilosophyCard from Philosophy.tsx */

type PhilosophyCardProps = {
  title: string | ReactNode;
  body?: string;
  bulletList?: string[];
  imageUrl?: string;
  imageAlt?: string;
  tone?: 'light' | 'dark' | 'accent' | 'bg-image' | 'transparent';
  textWidth?: '60' | '100';
  className?: string;
};

function PhilosophyCard({
  title,
  body,
  bulletList,
  imageUrl,
  imageAlt,
  tone = 'light',
  textWidth = '100',
  className = '',
}: PhilosophyCardProps) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-bg-dark text-ink-on_dark border-bg-dark'
      : tone === 'accent'
      ? 'bg-bg-accent text-ink-on_dark border-bg-accent'
      : tone === 'bg-image'
      ? 'text-ink-on_dark border-bg-dark'
      : tone === 'transparent'
      ? 'bg-transparent text-ink-primary border-line-default'
      : 'bg-bg-secondary text-ink-primary border-line-default';

  return (
    <article
      className={`card-bordered ${toneClasses} relative flex flex-col overflow-hidden ${className}`}
    >
      {/* Background Image Mode */}
      {tone === 'bg-image' && imageUrl && (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={imageUrl}
            alt={imageAlt ?? ''}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Top Image Mode (for tall card) */}
      {tone !== 'bg-image' && imageUrl && (
        <div className="absolute inset-0 w-full h-[60%] overflow-hidden bg-bg-secondary">
          <img
            src={imageUrl}
            alt={imageAlt ?? ''}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Content wrapper */}
      <div className={`mt-auto relative z-10 ${textWidth === '60' ? 'md:max-w-[60%]' : 'md:max-w-full'} ${imageUrl && tone !== 'bg-image' ? 'p-card-m md:p-card -mx-card-m md:-mx-card -mb-card-m md:-mb-card' : ''}`}>
        <h3 className={`font-serif italic text-h3-m md:text-h3 mb-3 md:mb-4 ${tone === 'dark' || tone === 'accent' || tone === 'bg-image' ? 'text-ink-on_dark' : 'text-ink-primary'}`}>
          {title}
        </h3>

        {body && (
          <p className={`text-body ${tone === 'dark' || tone === 'accent' || tone === 'bg-image' ? 'text-ink-on_dark' : 'text-ink-secondary'}`}>
            {body}
          </p>
        )}

        {bulletList && (
          <ul className="space-y-2 text-body">
            {bulletList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-[0.6em] inline-block w-1 h-1 rounded-full bg-current shrink-0" />
                <span className={tone === 'dark' || tone === 'accent' || tone === 'bg-image' ? 'text-ink-on_dark' : 'text-ink-secondary'}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
