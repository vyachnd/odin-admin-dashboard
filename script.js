import helpers from './libraries/helpers.js';
import Announcement from './modules/announcement.js';
import CreateElement from './modules/createElement.js';
import Header from './modules/header.js';
import Project from './modules/project.js';
import Sidebar from './modules/sidebar.js';
import Trending from './modules/tranding.js';

// START AI generated data
const projects = [
  {
    "title": "EcoSmart Home System",
    "description": "An innovative home automation system that optimizes energy usage and enhances comfort."
  },
  {
    "title": "HealthTracker App",
    "description": "A mobile application for tracking personal health metrics and providing insights for better wellness."
  },
  {
    "title": "TravelBuddy Platform",
    "description": "An online platform connecting travelers with local guides for authentic travel experiences."
  },
  {
    "title": "GreenThumb Gardening Kit",
    "description": "A complete kit for beginners to start their own organic vegetable garden at home."
  },
  {
    "title": "Mindful Meditation App",
    "description": "A meditation app with guided sessions, breathing exercises, and mindfulness reminders."
  },
  {
    "title": "FitFusion Fitness Program",
    "description": "A comprehensive fitness program combining various workout styles for overall health and wellness."
  },
  {
    "title": "EduQuest Learning Platform",
    "description": "An online platform offering interactive courses and tutorials for lifelong learners."
  },
  {
    "title": "FoodieFlix Cooking Show",
    "description": "A cooking show featuring renowned chefs sharing their recipes and culinary tips."
  },
  {
    "title": "PetPals Pet Adoption App",
    "description": "An app connecting shelters with potential pet adopters for finding forever homes."
  },
  {
    "title": "ArtisanCraft Marketplace",
    "description": "An online marketplace for handmade crafts, supporting artisans and small businesses."
  },
  {
    "title": "CodeCamp Coding Bootcamp",
    "description": "An intensive coding bootcamp offering training in web development, data science, and more."
  },
  {
    "title": "CleanSweep Recycling Initiative",
    "description": "A community-driven initiative promoting recycling and waste reduction for a cleaner environment."
  },
  {
    "title": "BizConnect Networking Events",
    "description": "Networking events for entrepreneurs and professionals to connect, collaborate, and grow."
  },
  {
    "title": "MusicMood Playlist App",
    "description": "An app that curates personalized playlists based on users' moods and music preferences."
  },
  {
    "title": "BookWorm Book Club",
    "description": "A virtual book club bringing together book lovers to discuss and discover new reads."
  },
  {
    "title": "TechTrends Podcast",
    "description": "A podcast covering the latest trends and developments in the tech industry."
  },
  {
    "title": "GreenGenius Sustainability Consultancy",
    "description": "A consultancy firm offering sustainable solutions for businesses and organizations."
  },
  {
    "title": "MindMaps Mental Health Platform",
    "description": "An online platform providing resources and support for mental health and well-being."
  },
  {
    "title": "FitFur Pets Exercise Program",
    "description": "An exercise program designed to keep pets healthy and active through fun activities."
  },
  {
    "title": "ArtisanEats Gourmet Food Delivery",
    "description": "Gourmet food delivery service bringing chef-prepared meals straight to your doorstep."
  },
  {
    "title": "CodeCraft Coding Academy",
    "description": "An academy offering coding courses for kids and teens to learn programming skills."
  },
  {
    "title": "EarthGuard Environmental Organization",
    "description": "An organization dedicated to protecting the planet through advocacy and action."
  },
  {
    "title": "MindfulMoments Meditation App",
    "description": "A meditation app for busy moms to find calm and balance in their daily lives."
  },
  {
    "title": "UrbanGrow Community Garden Project",
    "description": "A community garden project transforming urban spaces into green oases for all to enjoy."
  },
  {
    "title": "HealthyBites Meal Prep Service",
    "description": "A meal prep service offering nutritious and delicious meals for busy individuals."
  },
  {
    "title": "GreenTech Innovations Expo",
    "description": "An expo showcasing the latest innovations in green technology and sustainability."
  },
  {
    "title": "MindMeld Mental Wellness App",
    "description": "An app providing tools and resources for managing stress, anxiety, and improving mental well-being."
  },
  {
    "title": "FitFam Fitness Community",
    "description": "A supportive online community for fitness enthusiasts to share tips, workouts, and motivation."
  },
  {
    "title": "ExploreMore Adventure Travel Club",
    "description": "An adventure travel club organizing group trips to explore exciting destinations around the world."
  },
  {
    "title": "TechTonic Tech Blog",
    "description": "A tech blog featuring articles, reviews, and insights on the latest technology trends."
  },
  {
    "title": "EcoSolutions Sustainable Living App",
    "description": "An app providing eco-friendly tips, products, and resources for sustainable living."
  }
];

const announcements = [
  {
    "title": "New Message",
    "description": "You have received a new message from a user.",
    "variant": "base"
  },
  {
    "title": "Payment Received",
    "description": "Your payment has been successfully processed.",
    "variant": "base"
  },
  {
    "title": "Account Update",
    "description": "Your account information has been updated.",
    "variant": "base"
  },
  {
    "title": "Reminder",
    "description": "Don't forget about your upcoming appointment tomorrow.",
    "variant": "base"
  },
  {
    "title": "Network Error",
    "description": "Failed to connect to the server. Please check your internet connection.",
    "variant": "error"
  },
  {
    "title": "Invalid Input",
    "description": "Please enter valid information in all required fields.",
    "variant": "error"
  },
  {
    "title": "Access Denied",
    "description": "You do not have permission to access this resource.",
    "variant": "error"
  },
  {
    "title": "Success",
    "description": "Operation completed successfully.",
    "variant": "base"
  },
  {
    "title": "Low Battery",
    "description": "Your device battery is running low. Please recharge soon.",
    "variant": "warning"
  },
  {
    "title": "Deadline Approaching",
    "description": "The deadline for your project is approaching. Complete your tasks on time.",
    "variant": "warning"
  },
  {
    "title": "Unexpected Behavior",
    "description": "The application encountered unexpected behavior. Please try again later.",
    "variant": "warning"
  },
  {
    "title": "Action Required",
    "description": "You need to take action on your account settings to proceed.",
    "variant": "secondary"
  },
  {
    "title": "File Upload Error",
    "description": "Failed to upload the file. Please try again.",
    "variant": "error"
  },
  {
    "title": "Confirmation Required",
    "description": "Please confirm your email address to proceed.",
    "variant": "secondary"
  },
  {
    "title": "Update Available",
    "description": "A new update is available. Please install it to access new features.",
    "variant": "secondary"
  },
  {
    "title": "Subscription Expired",
    "description": "Your subscription has expired. Renew now to continue using our services.",
    "variant": "error"
  },
  {
    "title": "Scheduled Maintenance",
    "description": "Our website will be undergoing scheduled maintenance tonight. Sorry for the inconvenience.",
    "variant": "warning"
  },
  {
    "title": "System Overload",
    "description": "Our servers are experiencing high traffic. Expect slower response times.",
    "variant": "warning"
  },
  {
    "title": "Welcome",
    "description": "Welcome to our platform! Start exploring now.",
    "variant": "base"
  },
  {
    "title": "Password Reset",
    "description": "A password reset link has been sent to your email address.",
    "variant": "base"
  },
  {
    "title": "Feedback Received",
    "description": "Thank you for your feedback. We appreciate your input.",
    "variant": "base"
  },
  {
    "title": "Out of Stock",
    "description": "The item you are looking for is currently out of stock.",
    "variant": "warning"
  },
  {
    "title": "Session Expired",
    "description": "Your session has expired. Please log in again to continue.",
    "variant": "error"
  },
  {
    "title": "New Feature",
    "description": "Explore our new feature introduced in the latest update.",
    "variant": "base"
  },
  {
    "title": "Account Locked",
    "description": "Your account has been temporarily locked due to multiple failed login attempts.",
    "variant": "error"
  },
  {
    "title": "Privacy Policy Update",
    "description": "Our privacy policy has been updated. Please review the changes.",
    "variant": "secondary"
  },
  {
    "title": "Survey Invitation",
    "description": "We invite you to participate in our survey to help us improve our services.",
    "variant": "base"
  },
  {
    "title": "Connection Lost",
    "description": "Connection to the server has been lost. Reconnecting...",
    "variant": "warning"
  },
  {
    "title": "Invalid Credentials",
    "description": "The username or password you entered is incorrect. Please try again.",
    "variant": "error"
  },
  {
    "title": "Terms of Service Update",
    "description": "Our terms of service have been updated. Please review the changes.",
    "variant": "secondary"
  }
];

const trendings = [
  {
    "tag": "@user123",
    "lastProject": "Cosmic Explorer"
  },
  {
    "tag": "@eventorganizer",
    "lastProject": "DreamScape Network"
  },
  {
    "tag": "@developer456",
    "lastProject": "Eternal Echo"
  },
  {
    "tag": "@designer789",
    "lastProject": "Infinite Horizon"
  },
  {
    "tag": "@userxyz",
    "lastProject": "Lunar Dreamscape"
  },
  {
    "tag": "@tester321",
    "lastProject": "Quantum Quest"
  },
  {
    "tag": "@manager007",
    "lastProject": "Starlight Symphony"
  },
  {
    "tag": "@analyst999",
    "lastProject": "Timeless Trails"
  },
  {
    "tag": "@user456",
    "lastProject": "Galactic Guardian"
  },
  {
    "tag": "@writer123",
    "lastProject": "Celestial Cascade"
  },
  {
    "tag": "@photographer456",
    "lastProject": "Nebula Nexus"
  },
  {
    "tag": "@user789",
    "lastProject": "Stellar Symphony"
  },
  {
    "tag": "@userabc",
    "lastProject": "Solar Serenade"
  },
  {
    "tag": "@userxyz",
    "lastProject": "Interstellar Odyssey"
  },
  {
    "tag": "@user123",
    "lastProject": "Aurora Alliance"
  },
  {
    "tag": "@eventorganizer",
    "lastProject": "Infinity Inception"
  },
  {
    "tag": "@developer456",
    "lastProject": "Beyond Boundaries"
  },
  {
    "tag": "@designer789",
    "lastProject": "Eclipse Empyrean"
  },
  {
    "tag": "@userxyz",
    "lastProject": "Galaxy Genesis"
  },
  {
    "tag": "@tester321",
    "lastProject": "Nova Nomad"
  },
  {
    "tag": "@manager007",
    "lastProject": "Cosmic Citadel"
  },
  {
    "tag": "@analyst999",
    "lastProject": "Supernova Symphony"
  },
  {
    "tag": "@user456",
    "lastProject": "Orbital Overture"
  },
  {
    "tag": "@writer123",
    "lastProject": "Infinity Illumination"
  },
  {
    "tag": "@photographer456",
    "lastProject": "Celestial Conquest"
  },
  {
    "tag": "@user789",
    "lastProject": "Cosmic Chronicles"
  },
  {
    "tag": "@userabc",
    "lastProject": "Astral Adventure"
  },
  {
    "tag": "@userxyz",
    "lastProject": "Interstellar Insight"
  },
  {
    "tag": "@user123",
    "lastProject": "Stellar Serenity"
  },
  {
    "tag": "@eventorganizer",
    "lastProject": "Eternal Embrace"
  }
];
// END AI generated data

const sidebar = new Sidebar({ class: ['app__sidebar'] });
sidebar.emitter.subscribe('toggleMenu', (closed) => {
  const htmlElement = document.documentElement;

  if (!closed) {
    htmlElement.dataset.menuClosed = '';
  } else {
    delete htmlElement.dataset.menuClosed;
  }
});

const app = new CreateElement('div', [
  sidebar,
  new CreateElement('main', [
    new Header({ class: ['main__block', 'main__block_header'] }),

    new CreateElement('div', [
      // Projects
      new CreateElement('div', [
        new CreateElement('h3', ['Projects'], { class: ['block__title'] }),

        new CreateElement('ul', [
          ...(() => {
            const from = helpers.fromTo(0, projects.length - 12);
            const to = from + 12;

            return projects.slice(from, to).map((data) => new CreateElement('li', [
              new Project({ ...data, actions: [Math.random() < 0.5, Math.random() < 0.2, Math.random() > 0.8] }),
            ], { class: ['list__item'] }));
          })(),
        ], { class: ['block__list'] }),
      ], { class: ['main__block', 'main__block_projects'] }),

      // Announcements
      new CreateElement('div', [
        new CreateElement('h3', ['Announcements'], { class: ['block__title'] }),

        new CreateElement('ul', [
          ...(() => {
            const from = helpers.fromTo(0, announcements.length - 4);
            const to = from + 4;

            return announcements.slice(from, to).map((data) => new CreateElement('li', [
              new Announcement(data),
            ], { class: ['list__item'] }));
          })(),
        ], { class: ['block__list'] }),
      ], { class: ['main__block', 'main__block_announcements'] }),

      // Trendings
      new CreateElement('div', [
        new CreateElement('h3', ['Trendings'], { class: ['block__title'] }),

        new CreateElement('ul', [
          ...(() => {
            const from = helpers.fromTo(0, trendings.length - 5);
            const to = from + 5;

            return trendings.slice(from, to).map((data) => new CreateElement('li', [
              new Trending({ image: `https://avatars.githubusercontent.com/u/${Math.floor(helpers.fromTo(0, 9999999))}?v=4`, ...data }),
            ], { class: ['list__item'] }));
          })(),
        ], { class: ['block__list'] }),
      ], { class: ['main__block', 'main__block_trendings'] }),
    ], { class: ['main__block', 'main__block-container'] }),
  ], { class: ['app__main'] }),
], { id: 'app' });

app.mount(document.body, true);
