export default function Contact() {
    return (
      <section id="contact" className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>
        <p className="text-gray-700 mb-8">Feel free to reach out via any of the links below.</p>
  
        <div className="flex justify-center gap-6 flex-wrap text-blue-600 text-lg">
          <a href="mailto:hotaka.dev@gmail.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
            📧 Email
          </a>
          <a href="https://github.com/iwatahotaka" className="hover:underline" target="_blank" rel="noopener noreferrer">
            🐱 GitHub
          </a>
          <a href="https://www.tiktok.com/@tak8481" className="hover:underline" target="_blank" rel="noopener noreferrer">
            🎵 TikTok
          </a>
        </div>
      </section>
    );
  }