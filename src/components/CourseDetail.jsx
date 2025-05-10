import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function CourseDetail() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('curriculum');
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [showEnrollPopup, setShowEnrollPopup] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  
  // Course data with videos and reading content
  const courses = {
    'web-development': {
      title: 'Web Development',
      instructor: 'John Smith',
      rating: 4.8,
      students: 3245,
      description: 'Master the art of building modern, responsive websites using the latest technologies in web development.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3',
      price: '$49.99',
      duration: '10 weeks',
      level: 'Beginner to Advanced',
      modules: [
        {
          title: 'Introduction to HTML',
          lessons: [
            {
              title: 'HTML Basics',
              videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
              content: `
                <h2>HTML Basics</h2>
                <p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages.</p>
                
                <h3>Key Concepts:</h3>
                <ul>
                  <li><strong>Elements:</strong> HTML documents are made up of HTML elements, which are represented by tags</li>
                  <li><strong>Tags:</strong> Most elements have an opening tag and a closing tag</li>
                  <li><strong>Attributes:</strong> Elements can have attributes that provide additional information</li>
                </ul>
                
                <h3>Basic Structure:</h3>
                <pre>
                &lt;!DOCTYPE html&gt;
                &lt;html&gt;
                  &lt;head&gt;
                    &lt;title&gt;Page Title&lt;/title&gt;
                  &lt;/head&gt;
                  &lt;body&gt;
                    &lt;h1&gt;My First Heading&lt;/h1&gt;
                    &lt;p&gt;My first paragraph.&lt;/p&gt;
                  &lt;/body&gt;
                &lt;/html&gt;
                </pre>
              `
            },
            {
              title: 'HTML5 Features',
              videoUrl: 'https://www.youtube.com/embed/mU6anWqZJcc',
              content: `
                <h2>HTML5 Features</h2>
                <p>HTML5 is the latest version of HTML with new elements, attributes, and behaviors that extend HTML to better support modern web applications.</p>
                
                <h3>Key Features:</h3>
                <ul>
                  <li><strong>Semantic Elements:</strong> &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, &lt;nav&gt;, etc.</li>
                  <li><strong>Form Enhancements:</strong> New input types and attributes</li>
                  <li><strong>Graphics:</strong> &lt;canvas&gt; and &lt;svg&gt; for drawing</li>
                  <li><strong>Multimedia:</strong> &lt;audio&gt; and &lt;video&gt; elements</li>
                  <li><strong>Storage:</strong> localStorage and sessionStorage</li>
                </ul>
              `
            },
            {
              title: 'Document Structure',
              videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE',
              content: `
                <h2>Document Structure</h2>
                <p>A well-structured HTML document follows a logical hierarchy that makes the content accessible and SEO-friendly.</p>
                
                <h3>Document Anatomy:</h3>
                <ul>
                  <li><strong>DOCTYPE:</strong> Declares the document type and version</li>
                  <li><strong>&lt;html&gt;:</strong> The root element that contains all other elements</li>
                  <li><strong>&lt;head&gt;:</strong> Contains meta information, CSS links, and JavaScript</li>
                  <li><strong>&lt;body&gt;:</strong> Contains the visible content of the page</li>
                </ul>
              `
            },
            {
              title: 'Semantic Elements',
              videoUrl: 'https://www.youtube.com/embed/kGW8Al_cga4',
              content: `
                <h2>Semantic Elements</h2>
                <p>Semantic elements clearly describe their meaning to both the browser and the developer, making code more readable and accessible.</p>
                
                <h3>Common Semantic Elements:</h3>
                <ul>
                  <li><strong>&lt;header&gt;:</strong> Defines a header for a document or section</li>
                  <li><strong>&lt;nav&gt;:</strong> Defines navigation links</li>
                  <li><strong>&lt;main&gt;:</strong> Specifies the main content of a document</li>
                  <li><strong>&lt;section&gt;:</strong> Defines a section in a document</li>
                  <li><strong>&lt;article&gt;:</strong> Defines an independent, self-contained content</li>
                  <li><strong>&lt;aside&gt;:</strong> Defines content aside from the main content</li>
                  <li><strong>&lt;footer&gt;:</strong> Defines a footer for a document or section</li>
                </ul>
              `
            }
          ],
          duration: '2 hours'
        },
        {
          title: 'CSS Fundamentals',
          lessons: [
            {
              title: 'CSS Selectors',
              videoUrl: 'https://www.youtube.com/embed/1PnVor36_40',
              content: `
                <h2>CSS Selectors</h2>
                <p>CSS selectors are patterns used to select and style HTML elements. They are the foundation of CSS.</p>
                
                <h3>Types of Selectors:</h3>
                <ul>
                  <li><strong>Element Selector:</strong> Selects elements based on tag name (e.g., h1, p, div)</li>
                  <li><strong>Class Selector:</strong> Selects elements with a specific class attribute (.classname)</li>
                  <li><strong>ID Selector:</strong> Selects an element with a specific ID (#idname)</li>
                  <li><strong>Attribute Selector:</strong> Selects elements with a specific attribute [attribute=value]</li>
                  <li><strong>Pseudo-class Selector:</strong> Selects elements in a specific state (:hover, :focus)</li>
                </ul>
              `
            },
            {
              title: 'Box Model',
              videoUrl: 'https://www.youtube.com/embed/rIO5326FgPE',
              content: `
                <h2>CSS Box Model</h2>
                <p>The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model.</p>
                
                <h3>Components of the Box Model:</h3>
                <ul>
                  <li><strong>Content:</strong> The actual content of the element</li>
                  <li><strong>Padding:</strong> The space between the content and the border</li>
                  <li><strong>Border:</strong> The line that surrounds the padding</li>
                  <li><strong>Margin:</strong> The space outside the border</li>
                </ul>
              `
            }
          ],
          duration: '3 hours'
        }
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express', 'Responsive Design']
    },
    'data-science': {
      title: 'Data Science',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 2876,
      description: 'Learn to analyze and interpret complex data sets using statistical methods and machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      price: '$59.99',
      duration: '12 weeks',
      level: 'Intermediate',
      modules: [
        {
          title: 'Introduction to Data Science',
          lessons: [
            {
              title: 'What is Data Science?',
              videoUrl: 'https://www.youtube.com/embed/X3paOmcrTjQ',
              content: `
                <h2>What is Data Science?</h2>
                <p>Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.</p>
                
                <h3>Key Components:</h3>
                <ul>
                  <li><strong>Statistics and Mathematics:</strong> The foundation for analyzing and interpreting data</li>
                  <li><strong>Computer Science:</strong> Programming, algorithms, and data structures</li>
                  <li><strong>Domain Expertise:</strong> Knowledge of the specific field where data science is applied</li>
                </ul>
              `
            },
            {
              title: 'Data Science Workflow',
              videoUrl: 'https://www.youtube.com/embed/CmorAWRsCAw',
              content: `
                <h2>Data Science Workflow</h2>
                <p>A typical data science workflow involves several stages from problem definition to solution implementation.</p>
                
                <h3>Stages of the Workflow:</h3>
                <ol>
                  <li><strong>Problem Definition:</strong> Clearly defining the business problem or research question</li>
                  <li><strong>Data Acquisition:</strong> Collecting data from relevant sources (databases, APIs, files, etc.)</li>
                  <li><strong>Data Preparation:</strong> Cleaning, transforming, and feature engineering</li>
                  <li><strong>Exploratory Data Analysis (EDA):</strong> Understanding the data through visualization and statistical analysis</li>
                  <li><strong>Modeling:</strong> Selecting and training appropriate algorithms</li>
                  <li><strong>Evaluation:</strong> Measuring model performance and comparing different approaches</li>
                  <li><strong>Deployment:</strong> Integrating the model into business processes</li>
                  <li><strong>Monitoring:</strong> Tracking model performance and updating as needed</li>
                </ol>
              `
            }
          ],
          duration: '2 hours'
        },
        {
          title: 'Data Analysis with Python',
          lessons: [
            {
              title: 'Python Basics',
              videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8',
              content: `
                <h2>Python Basics for Data Science</h2>
                <p>Python has become the de facto language for data science due to its simplicity, readability, and powerful libraries.</p>
                
                <h3>Core Python Concepts:</h3>
                <ul>
                  <li><strong>Data Types:</strong> int, float, str, bool, list, tuple, dict, set</li>
                  <li><strong>Control Flow:</strong> if-else statements, loops (for, while)</li>
                  <li><strong>Functions:</strong> Defining and calling functions, lambda functions</li>
                  <li><strong>Modules and Packages:</strong> Importing and using external functionality</li>
                </ul>
              `
            },
            {
              title: 'NumPy',
              videoUrl: 'https://www.youtube.com/embed/QUT1VHiLmmI',
              content: `
                <h2>NumPy: Numerical Python</h2>
                <p>NumPy is the fundamental package for scientific computing in Python, providing support for arrays, matrices, and many mathematical functions.</p>
                
                <h3>Key Features:</h3>
                <ul>
                  <li><strong>N-dimensional Arrays:</strong> Efficient storage and manipulation of large arrays</li>
                  <li><strong>Vectorization:</strong> Perform operations on entire arrays without explicit loops</li>
                  <li><strong>Broadcasting:</strong> Automatically handle arrays of different shapes</li>
                  <li><strong>Mathematical Functions:</strong> Linear algebra, Fourier transform, random number generation</li>
                </ul>
              `
            }
          ],
          duration: '4 hours'
        }
      ],
      skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Statistical Analysis', 'Machine Learning']
    },
    'mobile-app-development': {
      title: 'Mobile App Development',
      instructor: 'David Chen',
      rating: 4.7,
      students: 2105,
      description: 'Create beautiful, functional mobile applications for iOS and Android using React Native.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3',
      price: '$54.99',
      duration: '8 weeks',
      level: 'Intermediate',
      modules: [
        {
          title: 'Introduction to React Native',
          lessons: [
            {
              title: 'Getting Started',
              videoUrl: 'https://www.youtube.com/embed/0-S5a0eXPoc',
              content: `
                <h2>Getting Started with React Native</h2>
                <p>React Native is a framework for building native mobile applications using JavaScript and React. It allows you to create apps for both iOS and Android from a single codebase.</p>
                
                <h3>Setting Up Your Development Environment:</h3>
                <ol>
                  <li><strong>Install Node.js:</strong> Download and install from nodejs.org</li>
                  <li><strong>Install Expo CLI:</strong> <code>npm install -g expo-cli</code></li>
                  <li><strong>Create a new project:</strong> <code>expo init MyProject</code></li>
                  <li><strong>Start the development server:</strong> <code>cd MyProject && npm start</code></li>
                </ol>
              `
            },
            {
              title: 'React Fundamentals',
              videoUrl: 'https://www.youtube.com/embed/Tn6-PIqc4UM',
              content: `
                <h2>React Fundamentals for Mobile Development</h2>
                <p>Understanding core React concepts is essential for React Native development as they share the same principles.</p>
                
                <h3>Key React Concepts:</h3>
                <ul>
                  <li><strong>Components:</strong> The building blocks of React applications</li>
                  <li><strong>JSX:</strong> JavaScript syntax extension for writing UI components</li>
                  <li><strong>Props:</strong> Pass data from parent to child components</li>
                  <li><strong>State:</strong> Manage component data that changes over time</li>
                  <li><strong>Lifecycle Methods:</strong> Control component behavior at different stages</li>
                  <li><strong>Hooks:</strong> Use state and other React features in functional components</li>
                </ul>
              `
            }
          ],
          duration: '3 hours'
        },
        {
          title: 'UI Components & Styling',
          lessons: [
            {
              title: 'Core Components',
              videoUrl: 'https://www.youtube.com/embed/ur6I5m2nTvk',
              content: `
                <h2>React Native Core Components</h2>
                <p>React Native provides a set of core components that map directly to native UI elements on both iOS and Android.</p>
                
                <h3>Essential Components:</h3>
                <ul>
                  <li><strong>View:</strong> A container component similar to a div in web development</li>
                  <li><strong>Text:</strong> Displays text content and supports nesting</li>
                  <li><strong>Image:</strong> Displays images from local or remote sources</li>
                  <li><strong>TextInput:</strong> Allows users to enter text</li>
                  <li><strong>ScrollView:</strong> A scrollable container for multiple components</li>
                  <li><strong>FlatList:</strong> Efficiently renders scrollable lists</li>
                  <li><strong>TouchableOpacity:</strong> Creates touchable elements with opacity feedback</li>
                  <li><strong>Button:</strong> A simple button component</li>
                </ul>
              `
            },
            {
              title: 'Styling with Flexbox',
              videoUrl: 'https://www.youtube.com/embed/R2eqAgR_KlU',
              content: `
                <h2>Styling with Flexbox in React Native</h2>
                <p>React Native uses Flexbox for layout, allowing you to create responsive, flexible designs for different screen sizes.</p>
                
                <h3>Key Flexbox Properties:</h3>
                <ul>
                  <li><strong>flex:</strong> Specifies how much of the available space a component should take up</li>
                  <li><strong>flexDirection:</strong> Defines the primary axis ('row', 'column', 'row-reverse', 'column-reverse')</li>
                  <li><strong>justifyContent:</strong> Aligns children along the primary axis</li>
                  <li><strong>alignItems:</strong> Aligns children along the secondary axis</li>
                  <li><strong>flexWrap:</strong> Controls whether children wrap when they run out of space</li>
                </ul>
              `
            }
          ],
          duration: '4 hours'
        }
      ],
      skills: ['JavaScript', 'React', 'React Native', 'Redux', 'Mobile UI/UX', 'API Integration']
    }
  };
  
  // Get the current course
  const course = courses[courseId];
  
  useEffect(() => {
    // Check if user is logged in
    const un = localStorage.getItem('un');
    if (!un) {
      navigate('/login');
    } else {
      setUsername(un);
    }
    
    // If invalid course ID, redirect to home
    if (!course) {
      navigate('/home');
    }
    
    // Check if user is already enrolled in this course
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    if (enrolledCourses.includes(courseId)) {
      setEnrolled(true);
    }
  }, [navigate, course, courseId]);
  
  const handleLogout = () => {
    localStorage.removeItem('un');
    localStorage.removeItem('role');
    navigate('/');
  };

  const handleLessonClick = (moduleIndex, lessonIndex) => {
    if (activeModule === moduleIndex && activeLesson === lessonIndex) {
      // If clicking the currently active lesson, close it
      setActiveLesson(null);
    } else {
      // Otherwise, open the clicked lesson
      setActiveModule(moduleIndex);
      setActiveLesson(lessonIndex);
    }
  };
  
  const handleEnroll = () => {
    // Save enrollment to localStorage
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    if (!enrolledCourses.includes(courseId)) {
      enrolledCourses.push(courseId);
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }
    
    // Update state and show popup
    setEnrolled(true);
    setShowEnrollPopup(true);
    
    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowEnrollPopup(false);
    }, 3000);
  };

  if (!course) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation bar with username display */}
      <nav className="bg-gradient-to-r from-cyan-600 to-indigo-600 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/home" className="text-white text-xl font-bold">Learning Hub</Link>
        </div>
        
        <ul className="flex space-x-6">
          <li>
            <Link to="/home" className="text-white hover:text-cyan-200">Home</Link>
          </li>
          <li>
            <a href="#" className="text-white hover:text-cyan-200">Courses</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-cyan-200">Resources</a>
          </li>
        </ul>
        
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">Welcome, {username}</span>
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition duration-300"
          >
            Logout
          </button>
        </div>
      </nav>
      
      {/* Course Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row">
            {/* Course Image */}
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img 
                src={course.image} 
                alt={course.title} 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            
            {/* Course Info */}
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-semibold mr-2">{course.rating}</span>
                <span className="text-gray-500">({course.students} students)</span>
              </div>
              
              <div className="flex items-center mb-4">
                <span className="text-gray-700 font-medium mr-1">Instructor:</span>
                <span className="text-indigo-600">{course.instructor}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <span className="block text-gray-500 text-sm">Duration</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <span className="block text-gray-500 text-sm">Level</span>
                  <span className="font-semibold">{course.level}</span>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <span className="block text-gray-500 text-sm">Price</span>
                  <span className="font-semibold">{course.price}</span>
                </div>
              </div>
              
              {enrolled ? (
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold cursor-default">
                  Enrolled
                </button>
              ) : (
                <button 
                  onClick={handleEnroll}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
                >
                  Enroll Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content Tabs */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b">
            <button 
              className={`py-4 px-6 font-medium ${activeTab === 'overview' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`py-4 px-6 font-medium ${activeTab === 'curriculum' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
              onClick={() => setActiveTab('curriculum')}
            >
              Curriculum
            </button>
            <button 
              className={`py-4 px-6 font-medium ${activeTab === 'instructor' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
              onClick={() => setActiveTab('instructor')}
            >
              Instructor
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h2>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What You'll Learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {course.modules.map((module, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{module.title}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills You'll Gain</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Curriculum</h2>
                
                <div className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{module.title}</h3>
                        <span className="text-gray-500 text-sm">{module.duration}</span>
                      </div>
                      <ul className="divide-y">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex}>
                            <button 
                              className={`w-full p-4 flex items-center justify-between hover:bg-gray-50 ${activeModule === moduleIndex && activeLesson === lessonIndex ? 'bg-indigo-50' : ''}`}
                              onClick={() => handleLessonClick(moduleIndex, lessonIndex)}
                            >
                              <div className="flex items-center">
                                <svg className="h-5 w-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{lesson.title}</span>
                              </div>
                              <svg 
                                className={`h-5 w-5 transition-transform ${activeModule === moduleIndex && activeLesson === lessonIndex ? 'transform rotate-180' : ''}`} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            
                            {/* Expanded lesson content */}
                            {activeModule === moduleIndex && activeLesson === lessonIndex && (
                              <div className="p-4 bg-gray-50 border-t">
                                <div className="mb-4">
                                  <iframe
                                    width="100%"
                                    height="400"
                                    src={lesson.videoUrl}
                                    title={lesson.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-md shadow-md"
                                  ></iframe>
                                </div>
                                
                                <div 
                                  className="prose max-w-none mt-4 bg-white p-6 rounded-md shadow-sm"
                                  dangerouslySetInnerHTML={{ __html: lesson.content }}
                                />
                                
                                <div className="mt-6 flex justify-between">
                                  <button className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                    </svg>
                                    Previous Lesson
                                  </button>
                                  <button className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                    Next Lesson
                                    <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Instructor</h2>
                
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-indigo-600">{course.instructor.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{course.instructor}</h3>
                    <p className="text-gray-500">Expert {course.title} Instructor</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {course.instructor} is a passionate educator with over 10 years of industry experience. 
                  They have helped thousands of students master {course.title} skills and advance their careers. 
                  Their teaching style focuses on practical applications and real-world examples.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Enrollment Success Popup */}
      {showEnrollPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full z-10 transform transition-all ease-in-out duration-300 scale-100">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Successfully Enrolled!</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  You have successfully enrolled in <span className="font-semibold">{course.title}</span>. 
                  You can now access all course materials.
                </p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setShowEnrollPopup(false)}
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                  Continue to Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}