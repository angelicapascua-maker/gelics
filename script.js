// Project data for modals
const projectsData = [
  {
    title: "Excel Accounting Automation System",
    icon: "📊",
    description: "A comprehensive automation system that streamlines accounting processes, eliminates manual errors, and significantly reduces time spent on repetitive calculations and reporting.",
    features: [
      "Automated financial calculations and reconciliation",
      "Dynamic dashboard with real-time data updates",
      "Custom reporting with filtered views",
      "VBA macro integration for seamless workflow",
      "Multi-sheet data consolidation"
    ],
    tags: ["Excel", "VBA", "Automation"],
    github: "#",
    demo: "#"
  },
  {
    title: "Financial Analysis Dashboard",
    icon: "💰",
    description: "An interactive financial dashboard designed for real-time analysis of business performance metrics, budget tracking, and comprehensive financial reporting.",
    features: [
      "Real-time financial data visualization",
      "Interactive charts and graphs",
      "Budget vs Actual analysis",
      "Variance analysis with drill-down capability",
      "Automated monthly reporting"
    ],
    tags: ["Excel", "Data Analysis", "Pivot Tables"],
    github: "#",
    demo: "#"
  },
  {
    title: "Inventory Management System",
    icon: "📈",
    description: "A robust inventory tracking system with automated alerts, stock forecasting, and comprehensive reporting to optimize supply chain management and reduce carrying costs.",
    features: [
      "Real-time inventory tracking",
      "Automated low-stock alerts",
      "Demand forecasting using historical data",
      "Supplier management integration",
      "Comprehensive audit trails and reports"
    ],
    tags: ["VBA", "Database", "Macros"],
    github: "#",
    demo: "#"
  }
];

function openProjectModal(index) {
  const project = projectsData[index];
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  
  const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  const featuresHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
  
  modalBody.innerHTML = `
    <div class="modal-header">
      <div class="project-icon">${project.icon}</div>
      <h2>${project.title}</h2>
      <div class="modal-tags">${tagsHTML}</div>
    </div>
    
    <div class="modal-description">
      ${project.description}
    </div>
    
    <div class="modal-features">
      <h3>Key Features</h3>
      <ul>
        ${featuresHTML}
      </ul>
    </div>
    
    <div class="modal-buttons">
      <a href="${project.demo}" target="_blank" class="modal-btn-primary">View Live Demo</a>
      <a href="${project.github}" target="_blank" class="modal-btn-secondary">GitHub Repository</a>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeProjectModal();
  }
});

function showDemo() {
  alert("Demo coming soon! You can link your Excel file here.");
}
// Scroll Animation Functionality
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      entry.target.classList.remove('scroll-hidden');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and elements
const sections = document.querySelectorAll('.hero, .about, .skills, .projects, .contact-modern, .project-card, .skill, .contact-card');
sections.forEach(section => {
  section.classList.add('scroll-hidden');
  observer.observe(section);
});

// Add floating effect to images
const images = document.querySelectorAll('.hero-image img, .about img');
images.forEach(img => {
  // Floating removed - images no longer have animation
});

// Stagger animation for multiple elements
const skills = document.querySelectorAll('.skill');
skills.forEach((skill, index) => {
  skill.style.animationDelay = (index * 0.1) + 's';
});

const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach((card, index) => {
  card.style.animationDelay = (index * 0.15) + 's';
});