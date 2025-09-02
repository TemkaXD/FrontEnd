import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-screen-lg mx-auto p-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 mb-12">
          <div className="flex flex-col items-center text-center md:text-left space-y-4">
            
            <div className="w-32 h-32  border-4 border-white object-cover shadow-xl">
              <Image 
                src="/zurag.png"
                alt="Temuujin Enkhdul"
                width={128}
                height={128}
              />
            </div>
            <h1 className="text-5xl font-extrabold leading-tight">Temuujin Enkhdul</h1>
            
            <div className="space-y-2 text-lg text-indigo-100">
              <p>Email: <span className="font-medium">hlotmka@email.com</span></p>
              <p>LinkedIn: <span className="font-medium">linkedin.com/in/temka</span></p>
            </div>
            <a href="#contact" className="mt-6 px-8 py-3 bg-white text-indigo-900 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
              Contact Me
            </a>
          </div>

          <div className="text-center md:text-left space-y-4 max-w-md mx-auto md:max-w-full">
            <h2 className="text-3xl font-semibold text-indigo-100 pl-64">About Me</h2>
            <p className="text-lg text-indigo-200">
              Anh Nestd orj ireel IT giin talaar surj ehelsn. Python Programming helnuudig ehnees ni 4 jil garui uzj bn. Buh l python turliin helnuudig anhnaas ni surj bui intermediate baagi bnaa ez
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-indigo-100">Experience</h2>
            <div className="bg-white text-indigo-900 shadow-2xl rounded-xl p-8 hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-indigo-500 text-4xl">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
              </div>
              <p className="text-sm text-indigo-500">Turshlaguud</p>
              <ul className="list-disc list-inside text-indigo-900 mt-2 space-y-2">
                <li>2014-2015 Ulsiin surguuli</li>
                <li>2015-2020 Tusgal school</li>
                <li>2020-2024 Nest IT School</li>
              </ul>
            </div>

            <div className="bg-white text-indigo-900 shadow-2xl rounded-xl p-8 hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-indigo-500 text-4xl">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <p className="text-sm text-indigo-500">Amjiltuud</p>
              <ul className="list-disc list-inside text-indigo-900 mt-2 space-y-2">
                <li>Plat3 in Valorant</li>
                <li>Tuuhiin olympiad top 10</li>
                <li>Chess 1000 elo</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-indigo-100">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10">
              <div className="bg-white text-indigo-900 shadow-2xl rounded-xl p-6 text-center hover:scale-105 transition duration-300 ease-in-out">
                <p className="font-semibold text-lg">Java</p>
                <p className="text-sm text-indigo-500">Advanced</p>
              </div>
              <div className="bg-white text-indigo-900 shadow-2xl rounded-xl p-6 text-center hover:scale-105 transition duration-300 ease-in-out">
                <p className="font-semibold text-lg">C++</p>
                <p className="text-sm text-indigo-500">Advanced</p>
              </div>
              <div className="bg-white text-indigo-900 shadow-2xl rounded-xl p-6 text-center hover:scale-105 transition duration-300 ease-in-out">
                <p className="font-semibold text-lg">Javascript</p>
                <p className="text-sm text-indigo-500">Intermediate</p>
              </div>
              <div className="bg-white text-indigo-900 shadow-2xl rounded-xl p-6 text-center hover:scale-105 transition duration-300 ease-in-out">
                <p className="font-semibold text-lg">Python</p>
                <p className="text-sm text-indigo-500">Intermediate</p>
              </div>
              <div className="bg-white text-indigo-900 shadow-2xl rounded-xl p-6 text-center hover:scale-105 transition duration-300 ease-in-out">
                <p className="font-semibold text-lg">Git</p>
                <p className="text-sm text-indigo-500">Advanced</p>
              </div>
              <div className="bg-white text-indigo-900 shadow-2xl rounded-xl p-6 text-center hover:scale-105 transition duration-300 ease-in-out">
                
                <p className="font-semibold text-lg">SQL</p>
                <p className="text-sm text-indigo-500">Advanced</p>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-indigo-100">Let's Connect!</h2>
          <p className="text-lg text-indigo-200 mt-2">Feel free to reach out for any inquiries or collaboration opportunities</p>
          </div>
      </div>
    </div>
  );
}