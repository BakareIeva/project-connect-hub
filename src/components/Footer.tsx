
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();
  const currentYear = new Date().getFullYear();

  const cols = [
    {
      title: locale === "lt" ? "Naršyti" : "Explore",
      links: [
        { label: locale === "lt" ? "Apie mane" : "About Me", href: "/about" },
        { label: locale === "lt" ? "Bylos" : "Cases", href: "/cases" },
        { label: locale === "lt" ? "Tinklaraštis" : "Blog", href: "/blog" },
        { label: locale === "lt" ? "Susisiekite" : "Contact", href: "/#contact" },
      ],
    },
  ];

  return (
    <footer style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="font-serif text-xl font-light tracking-widest text-white uppercase" style={{ letterSpacing: "0.15em" }}>
                Ieva Bakare
              </div>
              <div className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase mt-1" style={{ color: "#C9A84C" }}>
                Immigration & Administrative Law · Vilnius
              </div>
            </div>
            <p className="text-white/40 text-xs font-light leading-relaxed max-w-sm">{t.footer.tagline}</p>
            <div className="w-8 h-px mt-8" style={{ background: "#C9A84C" }} />
          </div>

          {/* Nav links */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest uppercase text-white/30 font-medium mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm font-light hover:text-white/80 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/25 text-xs font-light">
            © {currentYear} Ieva Bakare. {locale === "lt" ? "Visos teisės saugomos." : "All rights reserved."}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs tracking-widest uppercase text-white/25 hover:text-white/50 transition-colors duration-200"
          >
            {t.footer.backTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
