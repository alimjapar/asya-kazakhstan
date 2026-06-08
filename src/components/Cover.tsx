/**
 * Section: Cover / Hero
 *
 * Layout (per PDF design):
 *   - Full-width creamy background image (gradient sand tones).
 *   - Top row: eyebrow label on the left, ASIYA wordmark on the right.
 *     Both sit in normal flow (not absolutely positioned) on the same baseline.
 *   - Main row: large serif headline on the left, product hero image on the right.
 *   - CTA: outline button with brown border, transparent fill.
 *
 * Notes:
 *   - All colors come from design tokens — no hex values in JSX.
 *   - Animations use framer-motion (must be in package.json as "framer-motion").
 *   - Headline is non-italic; the design uses regular serif weight.
 *   - Height is content-driven, not viewport-locked (avoids mobile overflow).
 */

import { motion } from 'framer-motion';

const REPO_RAW =
  'https://cdn.jsdelivr.net/gh/alimjapar/asiya@main/';

export default function Cover() {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      {/* Background image — full-bleed, behind everything */}
      <img
        src={`${REPO_RAW}cover-bg.png`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Content layer */}
      <div className="container-page relative z-10 pt-8 md:pt-12 pb-16 md:pb-24">
        {/* Top row: eyebrow + wordmark */}
        <div className="flex flex-row justify-between items-center mb-12 md:mb-20">
          <p className="text-label uppercase text-ink-secondary font-sans font-medium">
            Уходовая косметика
          </p>

          <img
            src={`${REPO_RAW}Asiya-logo.png`}
            alt="ASIYÄ"
            className="h-6 md:h-10 w-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Main row: headline + product image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left — typography */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[56px] md:text-[56px] lg:text-[86px] leading-[1.02] tracking-[-0.02em] text-ink-primary mb-8 md:mb-10"
            >
              Создано
              <br />
              в&nbsp;сердце
              <br />
              Азии
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-body md:text-h4 text-ink-secondary leading-relaxed max-w-md mb-10 md:mb-14"
            >
              Натуральная косметика,
              <br className="hidden md:block" />
              созданная с заботой о вашей коже
            </motion.p>

            {/* Outline CTA — brown border, transparent fill */}
            <motion.a
              href="#products"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group inline-flex items-center gap-3 border border-ink-primary text-ink-primary px-7 py-4 rounded-full text-label uppercase font-medium hover:bg-ink-primary hover:text-ink-on_dark transition-colors duration-base ease-smooth"
            >
              <span>Продукция</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-base ease-smooth group-hover:translate-x-0.5"
              >
                →
              </span>
            </motion.a>
          </div>

          {/* Right — product hero image */}
          <div className="md:col-span-6 lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex items-center justify-center"
            >
              {/* Subtle floating loop after entry */}
              <motion.img
                src={`${REPO_RAW}cover-hero.png`}
                alt="Шампунь и кондиционер ASIYA Dala Badamy на каменном подиуме с полевыми цветами"
                className="w-full h-auto max-h-[80vh] object-contain select-none"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}