const projects = document.querySelector(".projects");
const projectList = document.querySelectorAll(".project");

const carouselContainer = document.querySelector(".carousel_container");
const movingDot = carouselContainer.firstElementChild;

document.addEventListener("DOMContentLoaded", () => {
  const observerProjects = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log("projects");

        movingDot.classList.add("moving_dot_mobile");
      } else {
        movingDot.classList.remove("moving_dot_mobile");
      }
    });
  });

  const observerProject = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".blink_dot").forEach((dot, index) => {
            dot.classList.add(`blink_dot_${index + 1}`);
            entry.target.querySelector("img").classList.add("blink_img");
          });
        } else {
          entry.target.querySelectorAll(".blink_dot").forEach((dot, index) => {
            dot.classList.remove(`blink_dot_${index + 1}`);
          });
          entry.target.querySelector("img").classList.remove("blink_img");
        }
      });
    },
    { threshold: 0.8 }
  );

  if (window.innerWidth < 576) {
    //moving dot
    observerProjects.observe(projects);
    //blink dot
    projectList.forEach((project) => {
      observerProject.observe(project);
    });
  } else {
    projectList.forEach((project) => {
      project.addEventListener("mouseenter", () => {
        //moving dot
        movingDot.classList.add("moving_dot_desktop");
        // blink dot
        // addBlinkDotAnimation(project);

        project.querySelectorAll(".blink_dot").forEach((dot, index) => {
          dot.classList.add(`blink_dot_${index + 1}`);
        });
        // blink img
        const img = project.querySelector("img");
        img.classList.add("blink_img");
      });

      project.addEventListener("mouseout", () => {
        movingDot.classList.remove("moving_dot_desktop");
        project.querySelectorAll(".blink_dot").forEach((dot, index) => {
          dot.classList.remove(`blink_dot_${index + 1}`);
        });
        const img = project.querySelector("img");
        img.classList.remove("blink_img");
      });
    });
  }
});

function addBlinkDotAnimation(ancestor) {
  // console.log(ancestor);

  ancestor.querySelectorAll(".blink_dot").forEach((dot, index) => {
    dot.classList.remove(`blink_dot_${index + 1}`);
  });
}
function removeBlinkDotAnimation(ancestor) {
  ancestor.querySelectorAll(".blink_dot").forEach((dot, index) => {
    dot.classList.remove(`blink_dot_${index + 1}`);
  });
}
