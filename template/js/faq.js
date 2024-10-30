// let selectedId;

document.querySelectorAll(".faq_btn").forEach((element) => {
  element.addEventListener("click", (e) => {
    document.querySelectorAll(".faq_btn").forEach((element) => {
      element.classList.remove("active");
    });
    selectedId = e.target.id.slice(4);
    e.target.classList.add("active");
    console.log(selectedId);
    //在特定id的element加class, 使其display block
    const targetFaqDetail = document.querySelector(`#detail_${selectedId}`);
    console.log(targetFaqDetail);
    hideAllFaqDetail();
    targetFaqDetail.classList.remove("d-none");
    targetFaqDetail.classList.add("d-block");
  });
});

function hideAllFaqDetail() {
  const allDetail = document.querySelectorAll(".faq_detail");
  allDetail.forEach((element) => {
    element.classList.add("d-none");
  });
}
