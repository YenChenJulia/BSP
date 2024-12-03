const projects = document.querySelector(".projects");
const carousel_container = document.querySelector(".carousel_container");
const projectList = document.querySelectorAll(".project");
const moving_dot = carousel_container.firstElementChild;
console.log(moving_dot);

projectList.forEach((project) =>
  project.addEventListener("mouseenter", () => {
    // console.log("hover");
    moving_dot.classList.add("moving_dot");
    console.log(moving_dot);
  })
);

projectList.forEach((project) => {
  project.addEventListener("mouseout", () => {
    moving_dot.classList.remove("moving_dot");
  });
});
