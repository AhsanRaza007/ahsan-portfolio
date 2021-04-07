const about = {
    'firstname': 'Ahsan',
    'summary': 'A passionate Full Stack Software Developer 🌏  having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.',
    'resumeLink': 'https://docs.google.com/document/d/17AlOB0W2IrpS9BpssI6LvJyQG3g-E8HMk2KpaMqRahk/edit?usp=sharing',
    'email': 'ahsan007raza@gmail.com',
    'educationItems': [
        {
            title: "JUNE 2013 - MAY  2014",
            cardTitle: "National English School, Kolkata- X",
            cardDetailedText: [
                "Stream-Science",
                "Percentage-83.5%",
                "Board – ICSE"
            ]
        },
        {
            title: "JUNE 2015 - MAY  2016",
            cardTitle: "National English School, Kolkata- XII",
            cardDetailedText: [
                "Stream-Science",
                "Percentage-81.4%",
                "Board – ISC"
            ]
        },
        {
            title: "AUG 2016 - JULY 2020",
            cardTitle: "Guru Nanak Institute of Technology, Kolkata — B.Tech",
            cardDetailedText: [
                "Stream-Computer Science and Engineering",
                "CGPA- 8.24",
                "University- MAKAUT"
            ]
        }
    ]
}



const skills = {
    'skillIcons': [
        {
            'icon': 'si si-html5',
            'name': 'html'
        },
        {
            'icon': 'si si-css3',
            'name': 'CSS'
        },
        {
            'icon': 'si si-javascript',
            'name': 'javascript'
        },
        {
            'icon': 'si si-bootstrap',
            'name': 'bootstrap'
        },
        {
            'icon': 'si si-node-dot-js',
            'name': 'node.js'
        },
        {
            'icon': 'si si-react',
            'name': 'react.js'
        },
        {
            'icon': 'si si-styled-components',
            'name': 'styled components'
        },
        {
            'icon': 'si si-java',
            'name': 'java'
        },
        {
            'icon': 'si si-python',
            'name': 'python'
        },
        {
            'icon': 'si si-npm',
            'name': 'npm'
        },
        {
            'icon': 'si si-git',
            'name': 'git'
        },
        {
            'icon': 'si si-mongodb',
            'name': 'mongodb'
        },
        {
            'icon': 'si si-express',
            'name': 'express'
        },
        {
            'icon': 'si si-amazonaws',
            'name': 'aws'
        },
        {
            'icon': 'fas fa-database',
            'name': 'sql-database'
        },
        {
            'icon': 'si si-docker',
            'name': 'docker'
        }
    ],
    'whatIDoText': [
        '🔹 Develop resonsive websites which look great irrespective of the divice!!',
        '🔹 Hosting websites on highly available web servers using cloud!!',
        '🔹 Integrate thrid party web services such as google autentication or AWS storage.',
        '🔹 Develop backend that solve myriad of problems!'
    ],
}


const projects = {
    'summary': 'Here are some of the projects by me! 😄 ',
    'projectsList': [
        {
            'title': 'Mynterest!',
            'description': 'Clone of the popular web-app pinterest. You can sign up, create your pins and even save pins created by others. It uses Amazon S3 sdk to store the images. MongoDb is used as database. Express for the backend. React as the front-end. Styled components for styling react app.',
            'imageurl': '/images/mynterest.png',
            'githubLink': 'https://github.com/AhsanRaza007/pinterest-clone-backend.git',
            'liveLink': 'https://mynterest.netlify.app/',
            'techStack': [
                'si si-html5',
                'si si-css3',
                'si si-styled-components',
                'si si-javascript',
                'si si-node-dot-js',
                'si si-express',
                'si si-mongodb',
                'si si-amazonaws',
                'si si-react',
                'si si-amazons3'
            ]
        },
        {
            'title': 'Md-Url',
            'description': 'This simulates a url shortener used to reduce the size of the url by generating an 11 character long id shich is mapped onto the url in the backend.',
            'imageurl': '/images/mdurl.png',
            'githubLink': 'https://github.com/AhsanRaza007/url-shortener-backend.git',
            'liveLink': 'https://md-url.netlify.app/',
            'techStack': [
                'si si-html5',
                'si si-css3',
                'si si-bootstrap',
                'si si-javascript',
                'si si-node-dot-js',
                'si si-express',
                'si si-mongodb'
            ]
        },
        {
            'title': 'Github Repo Find',
            'description': 'This is a github repository finder It uses github APIs to get the information about the Repository and show it to the user.',
            'imageurl': '/images/github-repo-find.png',
            'githubLink': 'https://github.com/AhsanRaza007/github-clone.git',
            'liveLink': 'https://github-repo-find.netlify.app/',
            'techStack': [
                'si si-html5',
                'si si-css3',
                'si si-bootstrap',
                'si si-javascript'
            ]
        },
        {
            'title': 'BbEngineering.in',
            'description': 'This is a static website for a manufacturing shop. Hosted on AWS using S3, CloudFront, and Route 53.',
            'imageurl': '/images/bbengineering.png',
            'githubLink': null,
            'liveLink': 'https://www.bbengineering.in',
            'techStack': [
                'si si-html5',
                'si si-css3',
                'si si-javascript',
                'si si-bootstrap',
                'si si-amazonaws'
            ]
        },
        {
            'title': 'Covid-19 Tracker',
            'description': 'This uses publicly available data about the coronavirus cases and shows it in charts using charts.js. It splits the data countrywise and shows the data.',
            'imageurl': '/images/corona-tracker.png',
            'githubLink': 'https://github.com/AhsanRaza007/corona-tracker.git',
            'liveLink': 'https://ahsanraza007.github.io/corona-tracker/',
            'techStack': [
                'si si-html5',
                'si si-css3',
                'si si-javascript',
                'si si-react',
                'si si-material-ui'
            ]
        },
        {
            'title': 'Quiz App',
            'description': 'Get questions and answers from opentdb database and made a quiz app having 10 questions. High scores are stored in the local-storage.',
            'imageurl': '/images/quiz.png',
            'githubLink': 'https://github.com/AhsanRaza007/quiz-app.git',
            'liveLink': 'https://heuristic-ramanujan-e1039b.netlify.app/',
            'techStack': [
                'si si-html5',
                'si si-css3',
                'si si-bootstrap',
                'si si-javascript'
            ]
        },
        {
            'title': 'Hangman',
            'description': 'The classic game implemented using the js-dom. user guesses the characters untill correct word comes up if the stickman is complete user loses.',
            'imageurl': '/images/hangman.png',
            'githubLink': 'https://github.com/AhsanRaza007/Hangman.git',
            'liveLink': 'https://hopeful-wing-12f5d4.netlify.app',
            'techStack': [
                'si si-html5',
                'si si-css3',
                'si si-bootstrap',
                'si si-javascript'
            ]
        },
        {
            'title': 'calculator',
            'description': 'Implementing calculator using js and css.',
            'imageurl': '/images/calculator.png',
            'githubLink': 'https://github.com/AhsanRaza007/calculator.git',
            'liveLink': 'https://admiring-rosalind-5a1409.netlify.app',
            'techStack': [
                'si si-html5',
                'si si-css3',
                'si si-bootstrap',
                'si si-javascript'
            ]
        }
    ]
}



const work = {
    items: [
        {
            title: "JULY 2020 - Current",
            cardTitle: "DXC Technology",
            cardSubtitle: 'Associate Software Engineering',
            cardDetailedText: [
                "Robotic Process Automation Support",
                "My work involves looking at any exceptions that might occur while processes are running and fix those to rerun again.",
                "Ensure meeting of all SLAs of running processes.",
                "Participate regulary in beta testing dxc propreitory APA platform.",
                "Successfully Created a POC for web Scraping using python."
            ]
        }
    ]
}
export { about, skills, projects, work};