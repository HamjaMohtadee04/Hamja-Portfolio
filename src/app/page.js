import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight, FaCode, FaBug, FaDatabase, FaServer, FaGraduationCap, FaTrophy } from "react-icons/fa";
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#FFB800] selection:text-black">
      
      {/* --- NAV / HEADER --- */}
      <nav className="flex justify-between items-center px-8 py-8 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter">
          Hamja Mohtadee<span className="text-[#FFB800]"></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#education" className="hover:text-white transition">Education</a>
        </div>
        <a href="#contact" className="px-6 py-2 border border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-black transition text-sm font-bold uppercase tracking-widest">
          Hire Me
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="px-8 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2 mb-6">
             <div className="h-[2px] w-10 bg-[#FFB800]"></div>
             <span className="text-[#FFB800] font-medium tracking-wide uppercase text-sm">SQA Engineer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hi I'm, <br>
          </br> Hamja Mohtadee <br/> Ebne Mamun<span className="text-[#FFB800]"></span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg mb-8 leading-relaxed">
            Detail-oriented QA Engineer ensuring reliability in <strong>AI-driven products, Fintech, & Healthcare</strong>. 
            Expert in manual testing and automation with Selenium & WebdriverIO.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="/resume.pdf" target="_blank" className="px-8 py-4 bg-[#FFB800] hover:bg-[#e5a600] text-black font-bold text-lg transition flex items-center gap-3">
              Download CV <FaArrowRight />
            </a>
            <div className="flex gap-4 items-center px-6">
              <SocialIcon href="https://github.com/HamjaMohtadee" icon={<FaGithub />} />
              <SocialIcon href="https://linkedin.com/in/hamjamohtadee" icon={<FaLinkedin />} />
              <SocialIcon href="mailto:hamzamohtadi225@gmail.com" icon={<FaEnvelope />} />
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-gray-500 font-mono text-sm">
             <FaPhone className="text-[#FFB800]" /> +880 1307905567
          </div>
        </div>

        {/* PROFILE PICTURE CARD */}
        <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-[#FFB800] opacity-20 blur-2xl rounded-full"></div>
            <div className="relative bg-[#25252D] p-4 rounded-xl border-2 border-[#FFB800]/20">
                {/* IMPORTANT: Ensure you have a file named 'profile.jpg' in your 'public' folder.
                   If you don't have one yet, this will show a gray placeholder box.
                */}
                <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-800 grayscale hover:grayscale-0 transition duration-500">
                    <Image 
                      src="/profile.jpg" 
                      alt="Hamja Mohtadee"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                </div>
            </div>
        </div>
      </section>

  {/* --- SKILLS GRID --- */}
      <section className="px-8 py-16 bg-[#25252D]/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
             
             {/* NEW TITLE ADDED HERE */}
             <div className="mb-10">
                <h2 className="text-sm text-[#FFB800] font-bold uppercase tracking-widest mb-2">- Expertise</h2>
                <h3 className="text-3xl md:text-4xl font-bold">My Skills</h3>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <SkillItem title="Languages" items="Java, JavaScript, TypeScript, C" />
                <SkillItem title="Automation" items="Selenium, WebdriverIO, Playwright" />
                <SkillItem title="Databases" items="PostgreSQL, MongoDB, MySQL" />
                <SkillItem title="Tools" items="Jira, Postman, Linux, Git" />
             </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="px-8 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <h2 className="text-sm text-[#FFB800] font-bold uppercase tracking-widest mb-2">- Career History</h2>
                <h3 className="text-4xl font-bold">Work Experience</h3>
            </div>
        </div>

        <div className="relative border-l border-gray-800 ml-3 md:ml-0 space-y-12">
            <div className="md:pl-12 relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] md:-left-[5px] top-2 w-3 h-3 bg-[#FFB800] rounded-full shadow-[0_0_10px_#FFB800]"></div>
                
                <div className="bg-[#25252D] p-8 rounded-xl border border-gray-800 hover:border-[#FFB800]/50 transition duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                            <h4 className="text-2xl font-bold text-white">SQA Engineer</h4>
                            <p className="text-[#FFB800] font-medium text-lg">DeepMind Labs Ltd.</p>
                        </div>
                        <span className="text-gray-400 font-mono bg-black/30 px-3 py-1 rounded mt-2 md:mt-0 inline-block">
                            Aug 2025 - Present
                        </span>
                    </div>
                    
                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        <p>Executed functional, UI, and regression testing on AI-based products including Healthcare, Fintech, and Computer Vision systems.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <li className="bg-black/20 p-3 rounded border border-gray-800">
                                <strong className="text-white block mb-1">Healthcare:</strong>
                                Tested patient assessments, report generation, and role-based access control (RBAC).
                            </li>
                            <li className="bg-black/20 p-3 rounded border border-gray-800">
                                <strong className="text-white block mb-1">BankQR (Fintech):</strong>
                                Verified QR generation, transaction flows, validation logic, and cross-device compatibility.
                            </li>
                            <li className="bg-black/20 p-3 rounded border border-gray-800 col-span-1 md:col-span-2">
                                <strong className="text-white block mb-1">AI Models (UGP & Egg Detection):</strong>
                                Validated AI response accuracy, data processing, and image detection outputs.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="bg-[#25252D] py-24 px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-sm text-[#FFB800] font-bold uppercase tracking-widest mb-2">- Portfolio</h2>
            <h3 className="text-4xl font-bold mb-12">Quality Assurance Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Project 1 */}
                <ProjectCard 
                    title="Automated API Testing"
                    tech="Postman, Newman"
                    date="Apr 2025"
                    desc="Automated REST API validation using Newman with chained requests and dynamic assertions. Generated HTML reports for defect tracking."
                    github="https://github.com/HamjaMohtadee04/Automated_API_TESTING.git"
                />
                
                {/* Project 2 */}
                <ProjectCard 
                    title="Selenium UI Automation"
                    tech="Selenium, JavaScript"
                    date="May 2025"
                    desc="Automated login, search, and product verification on demo.evershop.io. Integrated Allure Reports for visualization."
                    github="https://github.com/HamjaMohtadee04/Selenium_Testing.git"
                />

                {/* Project 3 */}
                <ProjectCard 
                    title="WebdriverIO Suite"
                    tech="WebdriverIO, JS"
                    date="Jun 2025"
                    desc="Validation scripts for saucedemo.com login, sorting, and checkout. Covered edge cases like 'locked_out_user'."
                    github="https://github.com/HamjaMohtadee04/saucedemo_website_automation_testing.git"
                />
            </div>

            {/* DSA Stats Block */}
            <div className="mt-12 p-8 border border-dashed border-gray-700 rounded-xl flex flex-col md:flex-row items-center justify-between bg-[#1C1C22]">
                <div className="mb-6 md:mb-0">
                    <h4 className="text-xl font-bold text-white mb-2">Problem Solving & Coding</h4>
                    <p className="text-gray-400">Continuously improving logical thinking across LeetCode, HackerRank, and UVA.</p>
                </div>
                <div className="flex gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-[#FFB800]">100+</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500">Problems Solved</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- EDUCATION & AWARDS --- */}
      <section id="education" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Education Column */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <FaGraduationCap className="text-[#FFB800] text-3xl" />
                    <h3 className="text-3xl font-bold">Education</h3>
                </div>
                <div className="bg-[#25252D] p-8 rounded-xl border-l-4 border-[#FFB800]">
                    <h4 className="text-xl font-bold text-white">B.Sc. in Computer Science & Engineering</h4>
                    <p className="text-[#FFB800] mt-2 font-medium">University of Chittagong</p>
                    <p className="text-gray-500 mt-1 text-sm">Jan 2019 - Dec 2024</p>
                    <p className="text-gray-400 mt-4 text-sm">Chittagong, Bangladesh</p>
                </div>
            </div>

            {/* Awards Column */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <FaTrophy className="text-[#FFB800] text-3xl" />
                    <h3 className="text-3xl font-bold">Certifications</h3>
                </div>
                <div className="bg-[#25252D] p-8 rounded-xl border-l-4 border-gray-700 hover:border-[#FFB800] transition">
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <span className="text-[#FFB800] font-bold">01</span>
                            <div>
                                <strong className="block text-white">SQA: Manual & Automated Testing</strong>
                                <span className="text-gray-500 text-sm">Professional Certification</span>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-[#FFB800] font-bold">02</span>
                            <div>
                                <strong className="block text-white">Runners-up in Robo Soccer</strong>
                                <span className="text-gray-500 text-sm">Engineering Day 2022, University of Chittagong</span>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-[#FFB800] font-bold">03</span>
                            <div>
                                <strong className="block text-white">Complete Web Development</strong>
                                <span className="text-gray-500 text-sm">Course with Jhankar Mahbub</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Ready to ensure quality?</h2>
        <div className="bg-[#25252D] p-10 text-left rounded-xl shadow-2xl shadow-black/50">
            <ContactForm />
        </div>
        <div className="mt-12 text-gray-500 text-sm">
            © 2026 Hamja Mohtadee. Built with Next.js & Tailwind.
        </div>
      </section>

    </main>
  );
}

/* --- HELPER COMPONENTS --- */

function SocialIcon({ href, icon }) {
  return (
    <a href={href} target="_blank" className="text-2xl text-white hover:text-[#FFB800] hover:-translate-y-1 transition duration-300">
      {icon}
    </a>
  );
}

function SkillItem({ title, items }) {
    return (
        <div className="border-l-2 border-[#FFB800]/30 pl-4">
            <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-1">{title}</h4>
            <p className="text-white font-medium">{items}</p>
        </div>
    )
}

function ProjectCard({ title, tech, date, desc, github }) {
    return (
        <div className="group bg-[#1C1C22] border border-gray-800 p-8 hover:border-[#FFB800] transition duration-500 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="bg-[#FFB800]/10 text-[#FFB800] px-3 py-1 text-xs font-bold uppercase tracking-widest rounded">
                    {date}
                </div>
                <div className="text-gray-600 group-hover:text-white transition">
                    <FaCode size={20} />
                </div>
            </div>
            
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFB800] transition">{title}</h4>
            <p className="text-sm text-gray-500 mb-4 font-mono">{tech}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {desc}
            </p>

            <a href={github} target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-[#FFB800] pb-1 w-max hover:text-[#FFB800] transition">
                <FaGithub /> View Code
            </a>
        </div>
    )
}