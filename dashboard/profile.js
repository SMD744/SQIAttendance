editbtn.addEventListener("click", () => {
  leftside.style.display = "none";
  editpage.style.display = "block";
});
savebtn.addEventListener("click", () => {
  leftside.style.display = "block";
  editpage.style.display = "none";
});
openMe.addEventListener("click", () => {
  document.querySelector("dialog").showModal();
});
closeMe.addEventListener("click", () => {
  document.querySelector("dialog").close();
});
openNotification.addEventListener("click", () => {
  blurry.style.display = "flex";
});
closeNotification.addEventListener("click", () => {
  blurry.style.display = "none";
});
