'use client'
import { css } from '@emotion/react'
import { memo } from 'react'

import { Job, Newsletter } from '@/components/Layout/type'
import JobCard from '@/app/cv/JobCard'
import { flex } from '@/modules/styling/flex'

const JobCardList = memo<ReactProps>(function JobCardList(props) {
  return (
    <div
      css={css`
        ${flex.v.default};
        width: 100%;
        max-width: 60%;
        @media (max-width: 600px) {
          max-width: 100%;
        }
        margin: 0 auto;
        height: min-content;
      `}
    >
      {JOB_LIST.map(j => {
        const news = (j.company, News[News.findIndex(n => n.company === j.company)])
        return news ? (
          // <JobNewsletter
          //   key={j.company}
          //   datum={j}
          //   datumNews={News[News.findIndex(n => n.company === j.company)]}
          // />
          <JobCard
            key={j.company}
            datum={j}
          />
        ) : null
      })}
    </div>
  )
})

const JOB_LIST: Job[] = [
  {
    company: 'Confetti',
    position: 'Sr. Front-end Developer',
    timeline: '2022.12 - NOW',
    project: [
      {
        projectIsLink: true,
        name: 'confetti.studio',
        stuff: 'Y2K Landing page',
        techStack: ['Next.js', 'Tailwind CSS', 'Typescript'],
      },
      {
        name: 'Cashing Platform',
        stuff:
          'Routine maintenance. To enable users to interact with the payment interface seamlessly and intuitively.',
        techStack: ['React', 'Next.js', 'Node.js', 'Typescript'],
      },
      {
        name: 'Gaming BO',
        stuff:
          'In the middleware layer, the image access requirements for both frontend and backend must be effectively handled, ensuring robust handling on both sides.',
        techStack: ['aws-sdk', 'React', 'remix', 'Node.js', 'Typescript'],
      },
    ],
  },
  {
    company: 'SCMP',
    position: 'Sr. Front-end Developer',
    timeline: '2021.10 - 2022.11',
    project: [
      {
        projectIsLink: true,
        name: 'scmp.com',
        stuff: [
          'Optimizing SEO performance, with a specific focus on addressing LCP (Largest Contentful Paint) issues',
          'Enhancing the business logic to stay current with the latest content updates',
        ],
        techStack: ['Vue', 'Typescript'],
      },

      {
        name: 'scmp.com/infographic',
        projectIsLink: true,
        stuff: [
          'Routine maintenance',
          'Optimized SEO for components handling multiple image files, implementing lazy loading to optimize requests.',
        ],
        techStack: ['React', 'Next.js', 'Vue', 'Node.js', 'GraphQL'],
      },
      {
        name: 'scmp.com/*',
        stuff: ['Routine maintenance'],
        techStack: ['React', 'Next.js', 'Vue', 'Node.js', 'GraphQL'],
      },
      {
        name: 'scmp.com/yp',
        projectIsLink: true,
        stuff: [
          'Routine maintenance',
          'For newspapers targeting different age groups, adopting a vibrant and dynamic UI to enhance user engagement and satisfaction.',
        ],
        techStack: ['React', 'Next.js', 'Vue', 'Node.js', 'GraphQL'],
      },
    ],
  },
  {
    company: 'Futuresai',
    position: 'Sr. Front-end Developer',
    timeline: '2020.11 - 2021.10',
    project: [
      {
        name: 'futures-ai.com',
        projectIsLink: true,
        stuff: [
          {
            title: 'Segmentation of membership system: ',
            details:
              "Utilizing Next.js with a monorepo management system to categorize users' subscriptions. This framework allows for the creation of multiple customized products within a single project, facilitating easy adjustment of subscription content by clients.",
          },
          {
            title: 'Real-time market insights: ',
            details:
              'Providing trading strategy articles based on live market data for various commodities. Each article features concise graphical and textual explanations, along with instructional scenarios for continuous learning.',
          },
          {
            title: 'Data analytics and AI: ',
            details:
              'Our algorithms, rooted in foundational science, are seamlessly integrated into user-friendly platforms, bridging science and finance. We present scientific principles and financial insights to our clients with sophistication.',
          },
        ],
        techStack: ['React', 'Typescript', 'Next.js', 'emotion', 'SignalR'],
      },
      {
        name: 'Trading dashboard',
        stuff: [
          'Building financial product expecially futures and options for customers who need direction and filtered noise information.',
          'Rewrite our product by using React, nexjs & Typescript. Base on mono repo, spliting as more as possible little components for reusablility and pure data handling as we also use hooks anywhere.',
          'With websocket and restful API backend microservices, help connect SignalR and our application context smoothly and properly manage different types of data soucre with react hook lifecycle.',
          'Cooperating with the Banking side building the investing sheet for customers getting more easy-looking result.',
        ],
        techStack: ['Typescript', 'React', 'Next.js', 'firebase', 'emotion', 'SignalR'],
      },
      {
        name: 'Admin management system',
        stuff: [
          'Provides an easy-to-use interface. Simplifies management of client subscriptions and customer products.',
          'Enables clients to send real-time messages to their subscribers via SMS.',
          'Facilitates Line push notifications with visually engaging content, ensuring both text and images are effectively delivered for communication.',
        ],
        techStack: ['firebase auth', 'Redux', 'React'],
      },
      {
        name: 'Auth member serivice',
        stuff: [
          {
            title: 'Middleware Backend Role: ',
            details:
              'Act as an intermediary layer for our membership system, interfacing with Firebase for user management. Utilize Firebase for user authentication and data management, ensuring seamless integration with our system.',
          },
          {
            title: 'Customized Data Handling:',
            details:
              'Implement custom data processing to address specific membership requirements, enhancing user experience and system functionality. Enable smooth communication between the frontend and backend systems, ensuring seamless data transfer and operation.',
          },
        ],
        techStack: ['Node.js', 'expressjs'],
      },
    ],
  },
  {
    company: 'Dentalltw',
    position: 'Front-end Developer',
    timeline: '2018.7 - 2020.11',
    project: [
      // [
      //   "Integrates with Taiwan's NHI (National Health Insurance) system, allowing patient treatment information to be seamlessly integrated with self-pay systems. This enables dental clinics to comprehensively view patients' oral health status.",
      //   'Prescription Form Generation: Generates prescription forms relevant to dental treatments.',
      //   'Visual Records of Dental Procedures: Captures and stores visual records of dental procedures for reference.',
      //   'Appointment Scheduling: To easily and clearly manage their schedules.',
      // ]
      {
        name: 'Dentall Clinic App, Mobile Web App',
        stuff: [
          {
            title: "Integrates with Taiwan's NHI system: ",
            details:
              "allowing patient treatment information to be seamlessly integrated with self-pay systems. This enables dental clinics to comprehensively view patients' oral health status.",
          },
          {
            title: 'Prescription Form Generation: ',
            details: 'Generates prescription forms relevant to dental treatments.',
          },
          {
            title: 'Visual Records of Dental Procedures: ',
            details: 'Captures and stores visual records of dental procedures for reference.',
          },
          {
            title: 'Appointment Scheduling: ',
            details: 'To easily and clearly manage their schedules.',
          },
        ],
        techStack: ['.Net', 'UWP', 'C#'],
      },
      {
        name: 'Vietnam Dentall Clinic SAAS',
        stuff:
          'Also include a Vietnamese version, catering to the Vietnam market. Additionally, I have implemented SMS service integration into the website. These enhancements were achieved primarily through the use of Redux and Saga for seamless data management and internationalization (i18n) support.',
        techStack: ['React', 'Redux', 'Redux-Saga'],
      },
      {
        name: 'AI Teeth-Catorizing',
        stuff:
          'I collaborated with AI colleagues to develop a Python server for dental image classification. We built a web application using Flask and configured it with uWSGI and Nginx. Subsequently, I managed the deployment process on Google Cloud Platform (GCP), making the dental image classification service accessible online for sorting dental images based on different regions.',
        techStack: ['GCP', 'python', 'flask', 'uwsgi', 'nginx'],
      },
      {
        name: 'Tech Sharing - CICD',
        stuff: [
          {
            title: 'Tech Sharing Session: ',
            details:
              'Organized a session to simplify complex technical concepts for the team. Aimed to ensure that both engineers and designers could understand and benefit from the insights shared.',
          },
          {
            title: 'Tool Orchestration: ',
            details:
              'Integrating a basic Golang program into a CI/CD ecosystem. Covered the orchestration of various tools including Google Cloud Platform (GCP), Docker, GitLab CI, and Kubernetes (K8s).',
          },
        ],
        techStack: ['GCP', 'docker', 'gitlab-ci', 'k8s'],
      },
    ],
  },
  {
    company: 'SAVY',
    position: 'Front-end Intern',
    timeline: '2018.4 - 2018.7',
    project: [
      {
        name: 'volunteer website',
        stuff:
          'Create a volunteer website where users can post about volunteer opportunities, similar to how posts work on Facebook, allowing people to seek participation or donate resources.',
        techStack: ['React'],
      },
    ],
  },
]

const News: Newsletter[] = [
  {
    industry: 'Dental',
    company: 'Dentalltw',
    title: 'Developing Dental Clinic Software and AI Integration',
    subtitle: [
      'Developing Dental Clinic Software and Integrating with Health Insurance',
      'Creating an AI Service for X-ray Image Analysis',
    ],
    content: [
      'I developed dental clinic software in a Windows desktop format, which integrated with the Taiwan National Health Insurance system. Some parts of the software were web-based.',
      'Collaborated with a colleague to create an AI service for X-ray image analysis using Python Flask and uWSGI, hosted on Google Cloud Platform, to detect the position of teeth in oral X-ray photos.',
    ],
  },
  {
    industry: 'Finance',
    company: 'Futuresai',
    title: 'Revamp to New React with Complex Strategy Development and Collaborative Roles',
    subtitle: [
      'Transitioning to New React: Collaborative Approach and Tools',
      'Developing Complex Strategies with TradingView and Next.js',
    ],
    content: [
      'Working with financial products at a company that focuses on futures and options. During that time, we were in the midst of transitioning from the old to the new version of React. My role involved collaborating with a partner to revamp the entire old React project.',
      'We used tools like TradingView, Next.js, and SignalR to develop complex strategies and trends that might be a bit hard for the average person to grasp. In our company, different team members played different roles – some acted like professors, always testing and experimenting with theories, while others were more like gamers, relying on their instincts to trade commodities.',
      "To visualize their ideas and make them more accessible. I aimed to help users of our company's trading software understand trends more intuitively and make rational decisions.",
    ],
  },
  {
    industry: 'Media',
    company: 'SCMP',
    title: 'SEO Optimization, Complex Ad Analysis, and User Behavior',
    subtitle: [
      'Focusing on SEO Performance Metrics and LCP/FCP',
      'In-Depth Ad Analysis for User Behavior Insights',
    ],
    content: [
      "I'm blessed to work at one of the largest media companies in Hong Kong, and they had been impressively focused on their digital transformation for the past 20-30 years. My primary role there was to enhance the SEO performance of their website, particularly focusing on key metrics like LCP (Largest Contentful Paint) and FCP (First Contentful Paint).",
      "I also worked on optimizing the logic for Google Analytics analysis. Their ad analysis tools were the most comprehensive I've ever come across, providing multiple perspectives on user behavior.",
    ],
  },
  {
    industry: 'Gaming',
    company: 'Confetti',
    title: 'Building a Modern Gaming Platform',
    subtitle: [
      'Developing a Gaming Platform with Modern Interfaces',
      'Enhancing User Experience with Streamlined Databases',
    ],
    content: [
      "Now, I work at a gaming company where we are in the process of developing a gaming platform. Similarly, I've been involved in handling long-standing customer projects and their iterations. Apart from designing more modern layouts, we've also taken the initiative to streamline the existing old database. This has allowed us to create a more intuitive middleware server for interaction with the frontend.",
    ],
  },
]

const labelCss = css`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
  margin-top: 12px;
`
const projectCss = css`
  font-size: 30px;
  font-weight: 700;
  &:visited,
  & {
    color: inherit;
  }
  @media (max-width: 900px) {
    font-size: 22px;
  }
`

const positionCss = css`
  font-size: 24px;
  font-weight: 700;
  margin-left: 16px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const barTextCss = css`
  font-size: 32px;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

export default JobCardList
