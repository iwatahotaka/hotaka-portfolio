export default function Projects() {
    return (
      <section id="projects" className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Projects</h2>
  
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow" data-aos="zoom-in">
            <img src="/project1.png" alt="Flat Rental App" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Angular Flat Rental App</h3>
            <p className="text-gray-600 mb-4">
              An app to list rental flats with features like login, favorites, and chat. Built with Angular and Firebase.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/iwatahotaka/flat-rental-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
  
          {/* Project Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow" data-aos="zoom-in">
            <img src="/project2.png" alt="Mini JS App" className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Mini JS App</h3>
            <p className="text-gray-600 mb-4">
              A small portfolio-friendly app built with HTML, CSS, and JavaScript to demonstrate core frontend skills.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }