const toggleBtn = document.querySelector(".toggle-btn");

const inactiveBtns = document.getElementsByClassName("inactive");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector("#close");

toggleBtn.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show-nav");
});

[...inactiveBtns].forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});


const navLinks = document.querySelectorAll('.menu li a');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    

    const targetId = this.getAttribute('href').substring(1); // Get the ID
    const targetElement = document.getElementById(targetId);
    console.log(targetId)
    console.log(targetElement)
    let offset = 80; // Adjust for 80px offset
    
    if (targetElement) {
      event.preventDefault()
      const targetPosition = targetElement.offsetTop; // Get the element's position
      window.scrollTo({
        top: targetPosition - offset
      });
      console.log(offset)
    }
  })
});


const projects = [
  {
    id: "1",
    name: "DayCareDash",
    description: "Web application to monitor your child's daycare hours.",
    tech: ["HTML", "CSS", "Javascript", "React", "Bootstrap", "Supabase"],
    code_url: "https://github.com/daquantt/daycare-supabase",
    demo_url: "https://daycaredash.netlify.app/",
    image_url: "img/daycare.webp"
  },
  {
    id: "2",
    name: "Price Logging Website with Leaderboard",
    description: "A Bootstrap website built for inputting and searching product prices. Some features include authentication, search functionality, ranking system and fully responsive.",
    tech: ["HTML", "Javascript", "Bootstrap"],
    code_url: "https://github.com/daquantt/pricecheck-demo",
    demo_url: "https://tourmaline-haupia-a4ca86.netlify.app/",
    image_url: "img/pricecheck.webp"
  },
  {
    id: "3",
    name: "Informational Website",
    description: "A fully responsive website built for a small business to showcase their products. Some features include toggle navigation, contact and subscribe forms and accordions.",
    tech: ["HTML", "CSS", "Javascript"],
    code_url: "https://github.com/daquantt/treehouse-demo",
    demo_url: "https://fascinating-daffodil-84fc9c.netlify.app/",
    image_url: "img/treehouse.webp"
  },
  {
    id: "4",
    name: "Dashboard",
    description: "A dashboard for a Residents Association",
    tech: ["HTML", "Tailwind", "Javascript"],
    code_url: "",
    demo_url: "https://spontaneous-melomakarona-623f74.netlify.app/",
    image_url: "img/dashboard.webp"
  },
  {
    id: "5",
    name: "Clothing Store",
    description: "",
    tech: ["HTML", "CSS", "Javascript"],
    code_url: "",
    demo_url: "https://heroic-mooncake-960697.netlify.app/",
    image_url: "img/clothing-store.webp"
  },
  {
    id: "6",
    name: "Fabric Store",
    description: "",
    tech: ["HTML", "CSS", "Javascript"],
    code_url: "",
    demo_url: "https://enchanting-shortbread-3d1ba0.netlify.app/",
    image_url: "img/fabric-store.webp"
  },
  {
    id: "",
    name: "Photography Website",
    description: "",
    tech: ["Figma"],
    code_url: "",
    demo_url: "img/photography.webp",
    image_url: "img/photography-thumb.webp"
  },
]

const projectList = document.querySelector(".project-list");

projects.forEach(project => {
  projectList.innerHTML += `
  <div class="project">
    <div class="image-container">
      <img src=${project.image_url} alt="">
    </div>
    <section>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="tech-tabs">
        ${project.tech.map(tech => `<span class="tech-tab ${tech.toLowerCase()}">${tech}</span>`).join('')}
      </div>
      <div class="links">
        ${project.code_url != "" ? `
          <a href=${project.code_url} target="_blank">View Code <img src="img/github.svg" width="32" height="32" alt="GitHub logo"></a>`
          :
          ""
        }        
        <a href=${project.demo_url} target="_blank">Live Demo <img src="img/ext-link.svg" width="32" height="32" alt="external link arrow icon"></a>
      </div>
    </section>
  </div>`
});


const searchForm = document.querySelector('#search-form')

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()

  let filterValue = event.target.elements["search"].value;
  filterItems(filterValue);
})

const filterItems = (filterValue) => {
  let lowerCaseFilterValue = filterValue.toLowerCase();

  projectList.innerHTML = "";

  projects.forEach((project) => {
    let projectName = project.name.toLowerCase();
    let projectDescription = project.description.toLowerCase();
    let projectTech = project.tech.join().toLocaleLowerCase();

    if (projectName.includes(lowerCaseFilterValue) || projectDescription.includes(lowerCaseFilterValue) || projectTech.includes(lowerCaseFilterValue)) {

      projectList.innerHTML += `
        <div class="project">
          <div class="image-container">
            <img src=${project.image_url} alt="">
          </div>
          <section>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="tech-tabs">
              ${project.tech.map(tech => `<span class="tech-tab ${tech.toLowerCase()}">${tech}</span>`).join('')}
            </div>
            <div class="links">
              ${project.code_url != "" ? `
                <a href=${project.code_url} target="_blank">View Code <img src="img/github.svg" width="32" height="32" alt="GitHub logo"></a>`
                :
                ""
              }
              <a href=${project.demo_url} target="_blank">Live Demo <img src="img/ext-link.svg"
                  width="32" height="32" alt="external link arrow icon"></a>
            </div>
          </section>
        </div>
      `;
    }
  });
};

