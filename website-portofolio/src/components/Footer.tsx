import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2b2d3b] text-gray-300 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Qii Portofolio. All rights reserved.
        </p>

        {/* Sosial Media */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}