const projects = [
  {
  title: "Phoenix Industrial Buildings Trend Smaller as Big-Box Pipeline Winds Down",
  description: "Phoenix industrial buildings are trending smaller as the market shifts away from mega big-box development. Over the past five years, the typical new industrial project has become noticeably smaller, reflecting changes in tenant demand and development economics.",
  image: "images/size.jpg",
  link: "IndSizeShift.pdf",
  date: "December 8, 2025"
},
  {
  title: "Q3 MSCI Update: Phoenix Investment Activity Stabilizes in Q3",
  description: "Nationally, Phoenix ranked 9th in total investment sales volume in Q3, supported by strong sector performance, including the 5th-highest industrial sales volume and the 6th-highest office sales volume across U.S. markets.",
  image: "images/sales.png",
  link: "https://colliersaz.github.io/Q3SalesActivity/",
  date: "October 10, 2025"
},
{
  title: "Who’s Buying Phoenix CRE?",
  description: "Phoenix’s buyer mix is shifting: private investors now dominate office as institutions pull back, while industrial remains institutionally anchored with rising private activity.",
  image: "images/buyer.png",
  link: "BuyerProfile.pdf",
  date: "October 3, 2025"
},
{
  title: "Loop 101 Corridor Powers North Phoenix Growth",
  description: "An interactive story map highlighting how the Loop 101 corridor, stretching from 51st Street to Pima Road, is powering growth across North Phoenix. This corridor has become a hub for large-scale office, industrial, multifamily, and retail development, with new projects reshaping the region’s economic and real estate landscape.",
  image: "images/loop101.gif",
  link: "https://colliersaz.github.io/Loop101/",
  date: "September 15, 2025"
},
    
    {
  title: "Repurposing Phoenix Offices to Industrial and Apartments",
  description: "An interactive story map highlighting how office properties across Phoenix are being transformed into industrial, multifamily, retail, and other uses. Nearly 70% of these conversions have shifted toward industrial uses, including data centers and self-storage facilities.",
  image: "images/conversion.gif",
  link: "https://atlas.colliers.com/portal/apps/storymaps/stories/fa47e7901b4a42acbe40919e36fec81c",
  date: "April 18, 2025"
}


    // Add more projects as needed
  ];
  
  const projectsContainer = document.querySelector('.projects');
  
  // Pagination Variables
const projectsPerPage = 9;
let currentPage = 1;

// Function to display projects
function displayProjects() {
  // Step 1: fade out the container
  projectsContainer.classList.remove('fade-in'); // reset first
  projectsContainer.classList.add('fade-out');

  setTimeout(() => {
    // Step 2: Clear and refill the container
    projectsContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const projectsToShow = projects.slice(startIndex, endIndex);

    projectsToShow.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');

      card.innerHTML = `
  <div class="thumbnail-wrapper">
    <img src="${project.image}" alt="${project.title}">
    <div class="overlay"></div>
  </div>
  <div class="content">
    <h3>${project.title}</h3>
    <p class="date">${project.date}</p>   <!-- DATE RIGHT HERE -->
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank"><b>Read More</b></a>
  </div>
`;


      projectsContainer.appendChild(card);
    });

    updatePaginationButtons();

    // Step 3: fade in the container
    projectsContainer.classList.remove('fade-out');
    projectsContainer.classList.add('fade-in');
  }, 300); // Duration matches your CSS transition
}



// Create Pagination Buttons
function updatePaginationButtons() {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.classList.add('page-button');

    if (i === currentPage) {
      pageButton.classList.add('active');
    }

  pageButton.onclick = () => {
  if (i !== currentPage) {
    currentPage = i;
    displayProjects();

    setTimeout(() => {
      const offset = 80; // adjust if needed
      const targetPosition = document.getElementById('projects-section').offsetTop;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth'
      });
    }, 300); // wait until fade-in finishes
  }
};



    paginationContainer.appendChild(pageButton);
  }
}


// Initial load
displayProjects();



