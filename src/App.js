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
  ChevronRightIcon,
  CommandIcon,
  SearchIcon,
  CalendarIcon,
  BarChartIcon,
  GraduationCapIcon,
  UserIcon,
  FolderIcon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CommandPalette = ({ isOpen, setIsOpen, setActiveSection }) => {
  const [search, setSearch] = useState('');
  const commands = [
    { id: 'about', label: 'View About Section', action: () => setActiveSection('about') },
    { id: 'projects', label: 'View Projects', action: () => setActiveSection('projects') },
    { id: 'skills', label: 'View Skills', action: () => setActiveSection('skills') },
    { id: 'experience', label: 'View Experience', action: () => setActiveSection('experience') },
    { id: 'contact', label: 'Contact Me', action: () => window.location.href = 'mailto:nmirza001@csbsju.edu' },
    { id: 'github', label: 'Visit GitHub', action: () => window.open('https://github.com/nmirza001', '_blank') },
    { id: 'linkedin', label: 'Visit LinkedIn', action: () => window.open('https://www.linkedin.com/in/nasir-mirzacs/', '_blank') }
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-32 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xl">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <SearchIcon size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Type a command or search..."
              className="w-full outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {filteredCommands.map(cmd => (
            <button
              key={cmd.id}
              className="w-full p-4 text-left hover:bg-gray-100 flex items-center gap-2"
              onClick={() => {
                cmd.action();
                setIsOpen(false);
              }}
            >
              <CommandIcon size={16} className="text-gray-400" />
              {cmd.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const fullText = `> Hello! I'm Nasir Mirza
> Computer Science & Economics Student at CSB/SJU
> Full Stack Developer & Data Scientist
> Expected Graduation: Dec 2026
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

    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      } else if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const projects = [
    {
      title: "Algorithmic Trading System",
      description: "Engineered a full-stack trading system processing 1M+ historical data points",
      stats: [
        { label: "Accuracy", value: "92%" },
        { label: "Return", value: "18%" },
        { label: "Uptime", value: "99.9%" }
      ],
      tech: ["Python", "pandas", "NumPy", "Machine Learning", "REST APIs"],
      details: [
        "Implemented 5 technical indicators with 92% accuracy",
        "Achieved 18% annual return in backtesting",
        "Integrated real-time market data handling 100+ requests/minute"
      ]
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Built NLP pipeline analyzing 100K+ financial tweets daily",
      stats: [
        { label: "Accuracy", value: "94%" },
        { label: "Data", value: "50GB+" },
        { label: "Speed", value: "75%" }
      ],
      tech: ["Python", "NLTK", "scikit-learn", "Streamlit"],
      details: [
        "94% sentiment classification accuracy",
        "Interactive dashboard reducing analysis time by 75%",
        "Automated report generation system"
      ]
    }
  ];

  const experience = [
    {
      title: "Teaching Assistant & Tutor",
      organization: "Department of Economics, CSB/SJU",
      period: "Aug 2024 – Present",
      points: [
        "Lead weekly recitation sessions for 3 courses with 120+ students",
        "Developed study guides improving class performance by 15%",
        "Provided 200+ hours of one-on-one tutoring"
      ]
    },
    {
      title: "Vice President",
      organization: "Computer Science Club",
      period: "Sep 2024 - Present",
      points: [
        "Led 15+ technical workshops with 40+ average attendance",
        "Organized 3 hackathons with 150+ participants",
        "Secured $5,000 in sponsorships"
      ]
    },
    {
      title: "Admissions Ambassador",
      organization: "CSB/SJU",
      period: "May 2024 – Present",
      points: [
        "Conduct 5+ weekly campus tours for groups up to 25",
        "Achieved 95% positive feedback rating",
        "Created digital tour guide handbook"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java"],
    "Data Science & ML": ["Pandas", "NumPy", "Scikit-learn", "NLTK", "Matplotlib", "Jupyter"],
    "Developer Tools": ["Git", "GitHub", "VS Code", "PyCharm", "Linux/Unix", "RESTful APIs", "Docker"],
    "Economics": ["Econometrics", "Time Series Analysis", "Financial Modeling", "R", "SAS"],
    "Soft Skills": ["Technical Writing", "Problem Solving", "Team Leadership", "Public Speaking", "Project Management"]
  };

  const codingActivity = [
    { month: 'Jun', commits: 45 },
    { month: 'Jul', commits: 62 },
    { month: 'Aug', commits: 78 },
    { month: 'Sep', commits: 56 },
    { month: 'Oct', commits: 89 },
    { month: 'Nov', commits: 94 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Command Palette */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        setIsOpen={setIsCommandPaletteOpen}
        setActiveSection={setActiveSection}
      />

      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Nasir Mirza</h1>
        <p className="text-xl text-gray-600 mb-6">Computer Science & Economics Student</p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="mailto:nmirza001@csbsju.edu" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <MailIcon size={20} /> Email
          </a>
          <a href="https://github.com/nmirza001" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <GithubIcon size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/nasir-mirzacs/" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <LinkedinIcon size={20} /> LinkedIn
          </a>
          <a href="tel:320-271-6071" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <PhoneIcon size={20} /> Phone
          </a>
        </div>
        <button 
          onClick={() => setIsCommandPaletteOpen(true)}
          className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors"
        >
          Press ⌘K to open command palette
        </button>
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

      {/* About Section */}
      {activeSection === 'about' && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCapIcon size={20} />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">College of Saint Benedict and Saint John's University</h3>
                <p className="text-gray-600">Bachelor of Arts in Computer Science and Economics</p>
                <p className="text-gray-500">Expected Dec. 2026</p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                  <p className="text-gray-600">
                    Data Structures & Algorithms, Database Systems, Computer Organization, Software Development, 
                    Advanced Macroeconomics, Econometrics, Object-Oriented Programming
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserIcon size={20} />
                Leadership & Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Vice President, Computer Science Club</h3>
                  <p className="text-gray-600 mb-2">Saint John's University | Sep. 2024 - Present</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Led 15+ technical workshops with 40+ average attendance</li>
                    <li>Organized 3 hackathons with 150+ participants</li>
                    <li>Secured $5,000 in sponsorships from tech companies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Photographer Editor, The Record</h3>
                  <p className="text-gray-600 mb-2">CSB/SJU | Aug. 2024 - Present</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Manage team of 5 photographers, coordinating 30+ events coverage</li>
                    <li>Implemented digital asset management system</li>
                    <li>Increased social media engagement by 45%</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BriefcaseIcon size={20} />
                  {exp.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{exp.organization} | {exp.period}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ChevronRightIcon size={16} className="text-blue-600 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChartIcon size={20} />
                Activity Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={codingActivity}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="commits" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <div className="space-y-8">
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
                  <div className="space-y-2 mb-4">
                    {project.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ChevronRightIcon size={16} className="text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderIcon size={20} />
                Project Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={codingActivity}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="commits" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
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
                      className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer"
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
    </div>
  );
};

export default App;