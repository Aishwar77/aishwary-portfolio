import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-6 font-sans">
      <div className="text-center py-10">
        <h1 className="text-5xl font-extrabold mb-2">Aishwary Kumar</h1>
        <p className="text-xl text-purple-200"> Intern @ Vensure | Full Stack Developer</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="mailto:aishwaryk83@gmail.com" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">Contact Me</a>
          <a href="/resume.pdf" download className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Download Resume</a>
        </div>
      </div>

      <section className="my-10">
        <h2 className="text-3xl font-semibold mb-4 text-purple-300">About Me</h2>
        <p className="text-gray-300">
  I'm Aishwary Kumar — a freshly minted B.Tech CSE graduate with a specialization in Cyber Security and a passion for breaking barriers (and sometimes systems, ethically 😉). Armed with code, caffeine, and curiosity, I live at the intersection of full-stack development and digital defense. From hacking solutions to building sleek apps, I’ve always believed that good code is like good armor — light, strong, and smart. Whether it's building automated Excel workflows, Angular dashboards, or decoding vulnerabilities, I don't just follow the tech trend — I write it.
</p>

      </section>

      <section className="my-10">
        <h2 className="text-3xl font-semibold mb-6 text-purple-300">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <a href="https://github.com/Aishwar77/handgestureapplication" target="_blank" className="bg-gray-800 p-5 rounded shadow hover:shadow-purple-500/50 transition cursor-pointer">
            <h3 className="text-xl font-bold">Sign Detection App</h3>
            <p className="text-gray-300">Built with TensorFlow to detect Indian Sign Language using transfer learning.</p>
          </a>
          <a href="https://github.com/Aishwar77/fyle-interview-intern-backend" target="_blank" className="bg-gray-800 p-5 rounded shadow hover:shadow-purple-500/50 transition cursor-pointer">
            <h3 className="text-xl font-bold">Angular GitHub Repo Viewer</h3>
            <p className="text-gray-300">A sleek Angular app to dynamically list and filter GitHub repositories.</p>
          </a>
          <a href="https://github.com/Aishwar77/HACKTOOLS" target="_blank" className="bg-gray-800 p-5 rounded shadow hover:shadow-purple-500/50 transition cursor-pointer">
            <h3 className="text-xl font-bold">HackTools Extension</h3>
            <p className="text-gray-300">A JavaScript browser extension to analyze site authenticity and metadata.</p>
          </a>
          <a href="https://github.com/Aishwar77/my-project" target="_blank" className="bg-gray-800 p-5 rounded shadow hover:shadow-purple-500/50 transition cursor-pointer">
            <h3 className="text-xl font-bold">Excel VBA Automation</h3>
            <p className="text-gray-300">VBA-powered Excel automation tools to streamline QA operations at Vensure.</p>
          </a>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-semibold mb-4 text-purple-300">Experience</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li><strong>Vensure Employer Solutions</strong> – Excel automation for QA team. (Sep 2024 – Present)</li>
          <li><strong>Fyle</strong> – Full-stack development and bug fixes. (Jul 2024 – Sep 2024)</li>
        </ul>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-semibold mb-4 text-purple-300">Skills</h2>
        <p className="text-gray-300">HTML, CSS, JavaScript, React, Angular, SQL, Python, Excel (Advanced + VBA)</p>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-semibold mb-6 text-purple-300">Get in Touch</h2>
        <div className="space-y-4 text-gray-300">
          <p>Email: <a className="text-purple-400 underline" href="mailto:aishwaryk83@gmail.com">aishwaryk83@gmail.com</a></p>
          <p>Phone: <span className="text-purple-400">+91 7291933881</span></p>
          <p>GitHub: <a href="https://github.com/Aishwar77" target="_blank" className="underline text-purple-400">github.com/Aishwar77</a></p>
          <p>Medium Blog: <a href="https://medium.com/@aishwary_k_official12" target="_blank" className="underline text-purple-400">medium.com/@aishwary_k_official12</a></p>
        </div>
      </section>

      <footer className="text-center mt-16 text-sm text-purple-400">
        © 2025 Aishwary Kumar. Designed with 💜 using React & Tailwind CSS.
      </footer>
    </div>
  );
}
