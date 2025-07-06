import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900 text-white">
      {/* 粒子アニメーション */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0f172a" },
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
          },
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Heroセクション */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
          {/* 👈 左側：テキスト */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">IWATA HOTAKA</h1>
            <p className="text-lg mb-6">Front-end Developer Portfolio</p>
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-6 py-2 rounded font-semibold shadow-md hover:bg-gray-200 transition"
            >
              View Resume
            </a>
          </div>

          {/* 👉 右側：コード画像（パソコン風） */}
          <div className="md:w-1/2">
            <div className="bg-gray-800 rounded-lg border-[12px] border-gray-700 shadow-lg p-1">
              {/* ウィンドウ上部の3色ボタン */}
              <div className="flex items-center gap-1 px-4 py-1 bg-gray-700 rounded-t-md">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <img
                src="./images/code.png" // ✅ ここを修正（/images → ./images）
                alt="Code Example"
                className="rounded-b-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}