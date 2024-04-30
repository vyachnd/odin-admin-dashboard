import CreateElement from './modules/createElement.js';
import Header from './modules/header.js';
import Project from './modules/project.js';
import Sidebar from './modules/sidebar.js';

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

const app = new CreateElement('div', [
  new Sidebar({ class: ['app__sidebar'] }),
  new CreateElement('main', [
    new Header({ class: ['main__block'] }),

    // Projects
    new CreateElement('div', [
      new CreateElement('h3', ['Projects'], { class: ['block__title'] }),

      ...(projects).map(({ title, description }) => new Project({ title, description, actions: [Math.random() < 0.5, Math.random() < 0.2, Math.random() > 0.8] })),
    ], { class: ['main__block'] }),

    // Announcements
    new CreateElement('div', [
      new CreateElement('h3', ['Announcements'], { class: ['block__title'] }),
    ], { class: ['main__block'] }),

    // Trending
    new CreateElement('div', [
      new CreateElement('h3', ['Trending'], { class: ['block__title'] }),
    ], { class: ['main__block'] }),
  ], { class: ['app__main'] }),
], { id: 'app' });

app.mount(document.body, true);
