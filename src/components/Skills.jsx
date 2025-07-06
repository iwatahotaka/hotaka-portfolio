import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaFigma, FaGithub 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiFirebase, SiCanva 
} from 'react-icons/si';

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-white text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="max-w-5xl mx-auto grid gap-12 sm:grid-cols-3">
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <ul className="space-y-3 text-left mx-auto w-max">
            <li className="flex items-center gap-3">
              <FaHtml5 className="text-orange-500" /> HTML
            </li>
            <li className="flex items-center gap-3">
              <FaCss3Alt className="text-blue-500" /> CSS
            </li>
            <li className="flex items-center gap-3">
              <FaJs className="text-yellow-400" /> JavaScript
            </li>
            <li className="flex items-center gap-3">
              <FaReact className="text-cyan-500" /> React
            </li>
            <li className="flex items-center gap-3">
              <FaAngular className="text-red-500" /> Angular
            </li>
            <li className="flex items-center gap-3">
              <SiTailwindcss className="text-sky-400" /> Tailwind CSS
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Backend</h3>
          <ul className="space-y-3 text-left mx-auto w-max">
            <li className="flex items-center gap-3">
              <SiFirebase className="text-yellow-500" /> Firebase
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <ul className="space-y-3 text-left mx-auto w-max">
            <li className="flex items-center gap-3">
              <FaFigma className="text-pink-500" /> Figma
            </li>
            <li className="flex items-center gap-3">
              <SiCanva className="text-blue-400" /> Canva
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 font-bold text-xl">Ps</span> Photoshop
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-gray-800" /> GitHub
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}