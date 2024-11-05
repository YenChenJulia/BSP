let selectedId;

document.querySelectorAll(".single-client").forEach((element) => {
  element.addEventListener("click", (e) => {
    selectedId = e.target.id.slice(8);
    // console.log(selectedId);
    //在特定id的element加class, 使其display block
    const targetProject = document.querySelector(`#detail_${selectedId}`);
    console.log(targetProject);
    hideAllDetail();
    targetProject.classList.remove("d-none");
    // targetProject.classList.add("d-block");
  });
});

function hideAllDetail() {
  const allDetail = document.querySelectorAll(".detail");
  allDetail.forEach((element) => {
    element.classList.add("d-none");
  });
}