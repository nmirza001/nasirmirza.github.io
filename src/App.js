import React, { useState, useEffect } from 'react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  PhoneIcon, 
  TerminalIcon, 
  AwardIcon, 
  BookIcon, 
  BriefcaseIcon, 
  CodeIcon, 
  ChevronRightIcon 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = `> Hello! I'm Nasir Mirza
> Computer Science & Economics Student
> Full Stack Developer & Data Scientist
Type 'help' for available commands...`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const projects = [
    {
      title: "Algorithmic Trading System",
      description: "Full-stack trading system with ML optimization",
      stats: [
        { label: "Data Points", value: "1M+" },
        { label: "Accuracy", value: "92%" },
        { label: "Annual Return", value: "18%" }
      ],
      tech: ["Python", "pandas", "NumPy", "ML"]
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "NLP pipeline for financial tweet analysis",
      stats: [
        { label: "Tweets Analyzed", value: "100K+" },
        { label: "Accuracy", value: "94%" },
        { label: "Data Processed", value: "50GB+" }
      ],
      tech: ["Python", "NLTK", "scikit-learn", "Streamlit"]
    }
  ];

  const skills = {
    "Programming": ["Python", "Java"],
    "Data Science": ["Pandas", "NumPy", "Scikit-learn", "NLTK"],
    "Tools": ["Git", "Docker", "REST APIs"],
    "Economics": ["Econometrics", "Time Series", "R", "SAS"]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Nasir Mirza</h1>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="mailto:nmirza001@csbsju.edu" className="flex items-center gap-2 hover:text-blue-600">
            <MailIcon size={20} /> Email
          </a>
          <a href="https://github.com/nmirza001" className="flex items-center gap-2 hover:text-blue-600">
            <GithubIcon size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/nasir-mirzacs/" className="flex items-center gap-2 hover:text-blue-600">
            <LinkedinIcon size={20} /> LinkedIn
          </a>
          <a href="tel:320-271-6071" className="flex items-center gap-2 hover:text-blue-600">
            <PhoneIcon size={20} /> Phone
          </a>
        </div>
      </div>

      {/* Interactive Terminal */}
      <Card className="mb-12 bg-gray-900 text-green-400">
        <CardContent className="p-6 font-mono">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="whitespace-pre-line">
            {terminalText}
            {showCursor && <span className="animate-pulse">▋</span>}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-center space-x-6 mb-12">
        {['about', 'experience', 'projects', 'skills'].map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeSection === section 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CodeIcon size={20} />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <div className="space-y-8">
          {/* Teaching Assistant & Tutor Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BriefcaseIcon size={20} />
                Teaching Assistant & Tutor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Department of Economics, CSB/SJU</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRightIcon size={16} className="text-blue-600" />
                  Lead weekly recitation sessions for 3 courses with 120+ students
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRightIcon size={16} className="text-blue-600" />
                  Improved average class performance by 15%
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Financial Officer Intern Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BriefcaseIcon size={20} />
                Financial Officer Intern
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">[Company Name], [Location]</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRightIcon size={16} className="text-blue-600" />
                  Assisted in financial analysis and budget forecasting
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRightIcon size={16} className="text-blue-600" />
                  Supported the preparation of financial reports for senior management
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRightIcon size={16} className="text-blue-600" />
                  Analyzed market trends and financial statements for strategic decision-making
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookIcon size={20} />
              Education & Background
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">College of Saint Benedict and Saint John's University</h3>
              <p className="text-gray-600">Bachelor of Arts in Computer Science and Economics</p>
              <p className="text-gray-500">Expected Dec. 2026</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AwardIcon size={20} className="text-blue-600" />
                <span>Vice President of Computer Science Club</span>
              </div>
              <div className="flex items-center gap-2">
                <TerminalIcon size={20} className="text-blue-600" />
                <span>Led 15+ technical workshops</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default App;

