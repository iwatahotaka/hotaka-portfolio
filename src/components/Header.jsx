import { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 👇 アイコン追加（左側） */}
        <div className="flex items-center gap-2 text-2xl font-bold text-slate-800">
          <FaCode className="text-blue-600" />
          <span className="hidden sm:inline">Portfolio</span>
        </div>

        {/* 👇 ハンバーガーメニュー（モバイル） */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* 👇 ナビゲーション（PC表示） */}
        <nav className="hidden sm:flex gap-6 text-slate-700 font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </nav>
      </div>

      {/* 👇 モバイル用メニュー（トグル表示） */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 text-slate-700 font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}