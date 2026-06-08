export default function Footer() {
  const logoUrl = 'https://cdn.jsdelivr.net/gh/alimjapar/asiya@main/Asiya-logo.png';

  return (
    <footer className="bg-[#6B3A1F] text-[#EEE5D7] py-8 md:py-12 border-t border-[#E5D8C5]/20 font-sans">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src={logoUrl}
            alt="ASIYÄ Logo"
            className="h-6 md:h-8 w-auto object-contain select-none brightness-0 invert"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Middle: Text "Проект сайта" */}
        <div className="text-[14px] font-normal opacity-90 select-none">
          Проект сайта
        </div>

        {/* Right: Text with link */}
        <div className="text-[14px] font-normal">
          Разработано{' '}
          <a
            href="https://japar.kz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80 transition-opacity font-medium"
          >
            Japar Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
