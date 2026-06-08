import { ReactNode, useState } from 'react';
import { motion } from 'motion/react';

/**
 * Section: Наша философия / Уход, рождённый природой
 *
 * Layout:
 *   Desktop: 2×2 grid. Left column is one tall card (col-span 1, row-span 2).
 *            Right column has two stacked cards.
 *   Mobile:  Single column, all 4 cards stacked.
 *
 * Card content alignment: text bottom (per design spec).
 * Title and decorative image (when added later) align top.
 */

const REPO_RAW = 'https://cdn.jsdelivr.net/gh/alimjapar/asiya@main';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'all' | 'body-face' | 'hair'>('all');

  const matchAll = activeTab === 'all';
  const matchBodyFace = activeTab === 'body-face';
  const matchHair = activeTab === 'hair';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      id="products"
      className="section-py bg-bg-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container-page">
        {/* Eyebrow */}
        <motion.p className="section-eyebrow mb-4 md:mb-6" variants={itemVariants}>
          продукция
        </motion.p>

        {/* Section title + secondary CTA */}
        <motion.div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4" variants={itemVariants}>
          <h2 className="section-title">
            Натуральная косметика
          </h2>
        </motion.div>

        {/* Tabs Category Selector */}
        <motion.div 
          className="flex items-center justify-start gap-4 md:gap-6 mb-10 select-none flex-wrap"
          variants={itemVariants}
        >
          <button
            onClick={() => setActiveTab('all')}
            className={`border-b pb-1 transition-all duration-200 cursor-pointer text-label font-sans font-medium uppercase tracking-[0.15em] ${
              matchAll
                ? 'text-ink-primary border-ink-primary'
                : 'text-ink-muted border-transparent hover:text-ink-primary'
            }`}
          >
            Все
          </button>
          <button
            onClick={() => setActiveTab('body-face')}
            className={`border-b pb-1 transition-all duration-200 cursor-pointer text-label font-sans font-medium uppercase tracking-[0.15em] ${
              matchBodyFace
                ? 'text-ink-primary border-ink-primary'
                : 'text-ink-muted border-transparent hover:text-ink-primary'
            }`}
          >
            Тело & лицо
          </button>
          <button
            onClick={() => setActiveTab('hair')}
            className={`border-b pb-1 transition-all duration-200 cursor-pointer text-label font-sans font-medium uppercase tracking-[0.15em] ${
              matchHair
                ? 'text-ink-primary border-ink-primary'
                : 'text-ink-muted border-transparent hover:text-ink-primary'
            }`}
          >
            Волосы
          </button>
        </motion.div>

        {/*
          Grid: 3 in a row layout
        */}
        <motion.div 
          className="flex flex-row overflow-x-auto gap-6 md:grid md:grid-cols-3 md:gap-8 snap-x snap-mandatory pb-4 scrollbar-none"
          variants={containerVariants}
        >
          {/* Card 1: "мыло Alma Gulu" */}
          {(matchAll || matchBodyFace) && (
            <ProductsCard
              layout="product"
              category="мыло"
              tone="transparent"
              className="w-[85%] md:w-auto shrink-0 snap-center md:min-h-[480px]"
              title="Alma Gulu"
              body="Мыло c приятным ароматом яблоневого цвета"
              imageUrl={`${REPO_RAW}/goods_1.png`}
              imageAlt="Мыло Alma Gulu"
              variants={itemVariants}
            />
          )}

          {/* Card 2: "шампунь Dala Badamy" */}
          {(matchAll || matchHair) && (
            <ProductsCard
              layout="product"
              category="шампунь"
              tone="transparent"
              className="w-[85%] md:w-auto shrink-0 snap-center md:min-h-[480px]"
              title="Dala Badamy"
              body="Укрепляющий шампунь с силой диких трав"
              imageUrl={`${REPO_RAW}/goods_2.png`}
              imageAlt="Шампунь Dala Badamy"
              variants={itemVariants}
            />
          )}

          {/* Card 3: "шампунь Jantaq & Vanil" */}
          {(matchAll || matchHair) && (
            <ProductsCard
              layout="product"
              category="шампунь"
              tone="transparent"
              className="w-[85%] md:w-auto shrink-0 snap-center md:min-h-[480px]"
              title="Jantaq & Vanil"
              body="Востанавливающий шампунь с ароматом верблюжьей колючки и ванили"
              imageUrl={`${REPO_RAW}/goods_3.png`}
              imageAlt="Шампунь Jantaq & Vanil"
              variants={itemVariants}
            />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ----------------------------- Card component ----------------------------- */

type ProductsCardProps = {
  title: string | ReactNode;
  body?: string;
  bulletList?: string[];
  imageUrl?: string;
  imageAlt?: string;
  tone?: 'light' | 'dark' | 'accent' | 'bg-image' | 'transparent';
  textWidth?: '60' | '100';
  className?: string;
  layout?: 'default' | 'product';
  category?: string;
  variants?: any;
};

function ProductsCard({
  title,
  body,
  bulletList,
  imageUrl,
  imageAlt,
  tone = 'light',
  textWidth = '100',
  className = '',
  layout = 'default',
  category,
  variants,
}: ProductsCardProps) {
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

  if (layout === 'product') {
    return (
      <motion.article
        variants={variants}
        className={`group bg-bg-secondary hover:bg-transparent border border-[#E5D8C5] rounded-[16px] pb-[30px] overflow-hidden flex flex-col items-center gap-[30px] text-center transition-all duration-300 ease-smooth ${className}`}
      >
        {imageUrl && (
          <div className="w-full aspect-[387/352] overflow-hidden select-none">
            <img
              src={imageUrl}
              alt={imageAlt ?? ''}
              className="w-full h-full object-cover rounded-t-[16px] transition-transform duration-500 ease-smooth group-hover:scale-[1.15]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="flex flex-col items-center gap-1 px-6 select-none">
          {category && (
            <p className="section-eyebrow text-ink-muted">
              {category}
            </p>
          )}
          <h3 className="font-serif text-[32px] md:text-[36px] leading-[1.1] text-ink-primary font-medium">
            {title}
          </h3>
        </div>

        {body && (
          <p className="font-sans text-sm text-ink-muted font-normal leading-relaxed px-6 max-w-[300px]">
            {body}
          </p>
        )}
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={variants}
      className={`card-bordered ${toneClasses} relative flex flex-col items-start text-left justify-end p-card-m md:p-card overflow-hidden ${className}`}
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

      {/* Top Image Mode */}
      {tone !== 'bg-image' && imageUrl && (
        <div className="absolute inset-x-0 top-0 w-full h-[45%] overflow-hidden bg-bg-secondary">
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
      <div className={`mt-auto relative z-10 w-full ${textWidth === '60' ? 'md:max-w-[80%]' : 'md:max-w-full'}`}>
        <h3 className={`font-serif italic text-h3-m md:text-h3 mb-3 md:mb-5 ${tone === 'dark' || tone === 'accent' || tone === 'bg-image' ? 'text-ink-on_dark' : 'text-ink-primary'}`}>
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
    </motion.article>
  );
}
