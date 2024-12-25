function checkLogin() {
  if (StudentID.value === "" || Password.value === "") {
    ErrorSpace.style.display = "flex";
  }
}
loginbtn.addEventListener("click", () => {
  checkLogin();
});
