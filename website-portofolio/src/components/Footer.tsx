import { FaInstagram, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  // ambil tahun sekarang
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2b2d3b] text-gray-300 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        {/* Copyright */}
        <p className="text-sm">
          {t("footer.copyright", { year })}
        </p>

        {/* Sosial Media */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/rrrzqii_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.socialMedia.instagramAlt")}
            className="hover:text-orange-400 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://github.com/mankzz-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.socialMedia.githubAlt")}
            className="hover:text-orange-400 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}