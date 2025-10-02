import { BlogPost } from '../components/Blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'week-2-mobile-app-designs',
    title: 'Mobile App Designs and Team Collaboration',
    date: 'September 30, 2025',
    readTime: '5 min read',
    week: 2,
    excerpt: 'Diving deep into mobile app design for the local shops platform. Creating user flows, wireframes, and collaborating with the team on this exciting project.',
    tags: ['Mobile Design', 'UI/UX', 'Team Collaboration', 'Local Commerce', 'App Development'],
    content: `This week has been incredibly exciting as I've been focusing primarily on the mobile app design for Yina Solutions' new local commerce platform. The concept is fascinating - creating a unified app where users can select local bakeries, butchers, and other shops as their preferred stores and shop from all of them through one convenient interface.

I started the week by researching similar apps and analyzing user behavior patterns in local commerce. Understanding how people typically interact with local businesses helped me create more intuitive user flows. The challenge was designing an experience that feels familiar yet innovative.

The design process involved creating detailed wireframes for the main user journeys: onboarding, shop selection, browsing products, adding items to cart, and checkout. I focused heavily on the shop discovery feature, ensuring users can easily find and connect with local businesses in their area.

Team collaboration has been fantastic. Our Friday team meetings have become invaluable - everyone shares their progress, challenges, and gets feedback. This week, I presented my initial designs and received great input on improving the navigation flow and making the shop selection process more visual and engaging.

I'm learning a lot about balancing user needs with business requirements. The app needs to be appealing to end users while also providing value to local business owners who will be our partners.`
  },
  {
    id: 'week-1-onboarding-and-multilingual-features',
    title: 'First Week: Team Briefing and Multilingual E-commerce',
    date: 'September 23, 2025',
    readTime: '4 min read',
    week: 1,
    excerpt: 'Starting my journey at Yina Solutions! From office briefings to implementing multilingual features on their webshop, here\'s how my first week went.',
    tags: ['Onboarding', 'Multilingual', 'E-commerce', 'Team Structure', 'Web Development'],
    content: `What an incredible first week at Yina Solutions! Starting a new internship is always exciting, but this experience has exceeded my expectations in every way.

The week began with a comprehensive briefing about the company's new office building and team structure. It's impressive to see how thoughtfully everything is organized - from the collaborative workspaces to the technology setup. Understanding the team dynamics and each department's role gave me great insight into how my work as a full-stack developer will contribute to the bigger picture.

The company culture immediately stood out to me. Everyone is approachable, knowledgeable, and genuinely invested in helping new team members succeed. The office environment strikes the perfect balance between being professional and maintaining a startup-like energy where innovation thrives.

My first technical task was helping implement multilingual options for their existing webshop. This was a perfect introduction to their codebase and development practices. I worked on both frontend and backend components - updating the user interface to support language switching and ensuring the backend could serve content in multiple languages efficiently.

The multilingual feature involved several interesting challenges: handling text direction for different languages, managing translations in the json files, and ensuring the shopping experience remains smooth regardless of the selected language. I learned about internationalization best practices and how to implement them in a production environment.

What struck me most was how this feature aligns with Yina Solutions' vision of making local commerce accessible to diverse communities. Supporting multiple languages isn't just a technical feature - it's about inclusivity and ensuring everyone can connect with local businesses.

The Friday team meeting format is brilliant. Everyone gets to share what they've accomplished, what they're working on, and any blockers they're facing. It creates transparency and ensures no one gets stuck on problems for too long. The collaborative spirit is genuine, and you can tell that knowledge sharing is deeply valued here.

I'm excited about what's coming next, especially the mobile app project that I'll be diving into. The combination of technical challenges, user experience design, and real-world impact makes this internship incredibly rewarding.`
  }
];

export default blogPosts;