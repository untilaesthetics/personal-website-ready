import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function App() {
  const journeySteps = [
    {
      title:
        "Assistant Manager - High School Programmes (Full Time-Ashoka University)",
      desc: "Leveraged data analytics to track and optimize social media performance across Instagram, Facebook, and LinkedIn, resulting in improved engagement and expanded audience reach. Utilized LinkedIn Sales Navigator and CRM tools to automate lead generation, enhancing conversion rates through targeted outreach strategies. Designed and maintained web-based dashboards for performance tracking, integrating API data sources to deliver real-time insights and support data-driven decision-making.",
      date: "Sep 2024 – Present",
    },
    {
      title: "KCDH-Ashoka - Research Intern (On Site-Ashoka University)",
      desc: "Led a software development team in creating a health tracking app using React Native and React.js, designed to help university students monitor their diet and exercise while analyzing nutrient intake from campus meals. Developed a patient consent chatbot powered by large language models (LLMs), offering AI-driven, detailed explanations of surgery risks and benefits to support informed decision-making. Designed and deployed backend infrastructure on Amazon AWS, ensuring secure data storage, scalability, and real-time processing capabilities.",
      date: "Jan 2024 – Aug 2024",
    },
    {
      title: "ACPET - Web Designer & Data Analyst (Hybrid-Ashoka University)",
      desc: "Designed all graphics and developed engaging, user-friendly web pages for ACPET, applying modern design principles to improve both visual appeal and website functionality. Collected and analyzed data on energy transition projects, offering insights to support policy recommendations and strategic planning. Conducted thorough data validation and cleaning processes to ensure the accuracy and reliability of datasets used in research and reporting.",
      date: "Jul 2023 – Aug 2023",
    },
    {
      title: "Mphasis - Hackathon Organiser (On Site-Ashoka University)",
      desc: "A hackathon organized by Makerspace Ashoka and sponsored by Mphasis. Responsibilities included coordinating logistics such as venue booking, catering, transportation, scheduling, and managing sponsorships to ensure smooth execution of the event. Contributed to the design and development of the hackathon website using Figma, and effectively managed the event’s Discord server for seamless communication and coordination. This experience offered valuable exposure to project management, event planning, web development, and team leadership, serving as strong preparation for future opportunities in these domains.",
      date: "Jun 2023 – Jul 2023",
    },
    {
      title: "Microsoft India Pvt. Ltd. - Research Intern (Remote)",
      desc: "Conducted in-depth research and analysis on the reliability of machine learning and AI models, with a specific focus on biased outcomes and potential model failures. Collected and analyzed data from various sources to identify instances of underperformance and developed strategies to mitigate these issues. Gained a strong understanding of the importance of fairness, stability, and explainability in machine learning models, and how these factors impact overall reliability and performance.",
      date: "Mar 2022 – May 2022",
    },
    {
      title: "FindYourFit - Software Developer (Remote)",
      desc: "Developed and maintained the FindYourFit application using React.js to create a dynamic and responsive user interface, significantly enhancing site performance and usability. Built and optimized RESTful APIs using Node.js and Express.js to ensure smooth communication between the frontend and backend systems. Leveraged AWS services—utilizing AWS S3 for secure file storage and AWS DynamoDB for fast, scalable data retrieval. Implemented robust authentication and authorization features using Firebase Authentication to strengthen user security and access control.",
      date: "Oct 2021 – Mar 2022",
    },
  ];

  return (
    <div className="bg-white text-black font-serif">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#111111] to-[#1f1f1f] shadow-md sticky top-0 z-50">
        <div className="flex space-x-4 text-xl text-white">
          <a
            href="https://www.instagram.com/until.aesthetics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-[#c2122d] transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-antil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-[#02baac] transition" />
          </a>
        </div>
        <div className="space-x-6 text-sm md:text-base font-medium text-white">
          <a href="#about" className="hover:text-[#39ff14] transition">
            About
          </a>
          <a href="#education" className="hover:text-[#39ff14] transition">
            Education
          </a>
          <a href="#journey" className="hover:text-[#39ff14] transition">
            Journey
          </a>
          <a href="#projects" className="hover:text-[#39ff14] transition">
            Projects
          </a>
          <a href="#portfolio" className="hover:text-[#39ff14] transition">
            Fitness Model
          </a>
          <a href="#contact" className="hover:text-[#39ff14] transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#c2122d] via-[#02baac] to-[#1f1f1f] text-white relative overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-[#39ff14] rounded-full opacity-20 blur-3xl top-10 left-10"
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-[#00f7ff] rounded-full opacity-20 blur-3xl bottom-10 right-10"
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />

        <motion.img
          src="/image1.jpg"
          alt="Aman Antil"
          className="w-56 h-56 rounded-full mb-6 object-cover shadow-2xl border-4 border-white z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-5xl font-bold mb-4 drop-shadow-xl z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Aman Antil
        </motion.h1>
        <motion.p
          className="text-xl text-gray-100 z-10 whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Web Developer | Cybersecurity | Digital Marketing Strategist | Fitness
          Influencer | Footballer ⚽
        </motion.p>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm Aman Antil — a multi-skilled technologist with a background in
          Computer Science and Entrepreneurship from Ashoka University.
          Currently working as an Assistant Manager for the Office of High
          School Programmes at Ashoka University. I am interested in Software
          Development, cybersecurity, full-stack development, data analytics,
          and digital marketing. When I'm not building, I'm motivating or
          creating content as a social media influencer.
        </p>
      </section>

      {/* Education */}
      <section
        id="education"
        className="py-20 px-6 bg-gray-100 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">
                PG Diploma in Advanced Studies and Research
              </h3>
              <p className="text-gray-600 text-sm">Ashoka University</p>
            </div>
            <p className="text-sm text-gray-500">Aug 2023 – May 2024</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">
                B.Sc. (Hons) Computer Science & Entrepreneurship
              </h3>
              <p className="text-gray-600 text-sm">Ashoka University</p>
            </div>
            <p className="text-sm text-gray-500">Aug 2019 – May 2023</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">
                High School (Physics, Chemistry, Mathematics)
              </h3>
              <p className="text-gray-600 text-sm">
                Rishikul Vidyapeeth School
              </p>
            </div>
            <p className="text-sm text-gray-500">Apr 2017 – Mar 2019</p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">Journey</h2>
        <div className="relative border-l-4 border-black ml-6">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-10 pl-10 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="absolute -left-6 top-1 w-4 h-4 bg-black border-2 border-white rounded-full"></span>
              <div className="bg-gray-100 p-5 rounded-xl shadow-md whitespace-nowrap overflow-x-auto">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-black min-w-fit whitespace-nowrap mr-4">
                    {step.title}
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4 pt-1">
                    {step.date}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mt-2 whitespace-normal break-words">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#f0f0f0]">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Projects and Research Papers
        </h2>
        <p className="text-center text-gray-600 mb-10">
          A collection of my work in development and academic research.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">TSB-Cohort-App</h3>
            <p className="text-sm text-gray-600">
              React Native, react.js, Next.js, TypeScript, ESLint, Prettier
            </p>
            <p className="mt-2 text-base">
              Mobile app for health pattern tracking and wearable sync, alerts,
              and insights.
            </p>
            <a
              href="https://github.com/DhrumanGupta/TSB-Cohort-App"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              <img src="/github-icon.svg" alt="GitHub" className="w-5 h-5" />{" "}
              GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">
              Patient Consent Chatbot
            </h3>
            <p className="text-sm text-gray-600">Python3, GPT4</p>
            <p className="mt-2 text-base">
              AI chatbot for multilingual patient-doctor communication and
              backend automation.
            </p>
            <a
              href="https://github.com/RushilGupta4/Informed-Consent-LLM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              <img src="/github-icon.svg" alt="GitHub" className="w-5 h-5" />{" "}
              GitHub
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">
              FindYourFit Application
            </h3>
            <p className="text-sm text-gray-600">React.js, Node.js, AWS</p>
            <p className="mt-2 text-base">
              A wellness and fitness application focused on user tracking and
              goal-oriented training plans.
            </p>
            <a
              href="https://findyourfitapp.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white bg-[#c2122d] px-4 py-2 rounded hover:bg-red-700 transition"
            >
              🚀 Take Me
            </a>
          </div>
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
          {/* Paper 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">
              Data Science – Sports (Football)
            </h3>
            <p className="text-sm text-gray-600">Research Paper</p>
            <p className="mt-2 text-base">
              Statistical analysis and predictive modeling in football
              performance using real match data.
            </p>
            <a
              href="/papers/data-science-football.pdf"
              download
              className="mt-4 inline-block text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              📄 Download PDF
            </a>
          </div>

          {/* Paper 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">
              Human-Computer Interaction
            </h3>
            <p className="text-sm text-gray-600">Research Paper</p>
            <p className="mt-2 text-base">
              Exploratory study on intuitive design patterns and cognitive load
              in digital interfaces.
            </p>
            <a
              href="/papers/human-computer-interaction.pdf"
              download
              className="mt-4 inline-block text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              📄 Download PDF
            </a>
          </div>

          {/* Paper 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">
              Cybersecurity – Network Security
            </h3>
            <p className="text-sm text-gray-600">Research Paper</p>
            <p className="mt-2 text-base">
              Investigation into modern threats and defense mechanisms in
              corporate and IoT networks.
            </p>
            <a
              href="/papers/cybersecurity-network-security.pdf"
              download
              className="mt-4 inline-block text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              📄 Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Fitness Model Section */}
      <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Fitness Model</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["image6.jpg", "image2.jpg", "image3.jpg"].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={`/${src}`}
                alt={`Model ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-lg text-gray-600 mt-10">
          Please visit me on{" "}
          <a
            href="https://www.instagram.com/until.aesthetics"
            target="_blank"
            className="text-[#c2122d] underline"
          >
            Instagram
          </a>{" "}
          for complete portfolio.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-black hover:bg-gray-800 rounded-lg px-4 py-3 flex justify-center items-center gap-2"
          >
            ✉️ Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
