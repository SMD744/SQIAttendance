signup.addEventListener("click", () => {
  submitCon();
});

let nameReg = /^[A-Za-z0-9]{1,20}$/;
let lastnameReg = /^[A-Za-z0-9]{1,20}$/;
let emailReg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
let StudentReg = /^[0-9]+$/;
// Update DptReg to allow multiple letters
let DptReg = /^[a-zA-Z]+$/;

let PassReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

regName.addEventListener("input", () => {
  if (regName.value === "") {
    regNameError.style.display = "flex";
    firstname2.style.borderColor = "red";
    firstname2.style.color = "red";
  } else if (!nameReg.test(regName.value)) {
    regNameError.style.display = "flex";
    firstname2.style.borderColor = "red";
    firstname2.style.color = "red";
  } else if (nameReg.test(regName.value)) {
    firstname2.style.borderColor = "#4b4949";
    firstname2.style.color = "#4b4949";
    regNameError.style.display = "none";
  } else {
    firstname2.style.borderColor = "#4b4949";
    firstname2.style.color = "#4b4949";
    regStudentError.style.display = "none";
    regMailError.style.display = "none";
    regNameError.style.display = "none";
    regLastnameError.style.display = "none";
    regPasswordError.style.display = "none";
    regDptError.style.display = "none";
  }
});

regLastname.addEventListener("input", () => {
  if (regLastname.value === "") {
    regLastnameError.style.display = "flex";
    LastName2.style.borderColor = "red";
    LastName2.style.color = "red";
  } else if (!lastnameReg.test(regLastname.value)) {
    regLastnameError.style.display = "flex";
    LastName2.style.borderColor = "red";
    LastName2.style.color = "red";
  } else if (lastnameReg.test(regLastname.value)) {
    regLastnameError.style.display = "none";
    LastName2.style.borderColor = "#4b4949";
    LastName2.style.color = "#4b4949";
  } else {
    LastName2.style.borderColor = "#4b4949";
    LastName2.style.color = "#4b4949";
    regStudentError.style.display = "none";
    regMailError.style.display = "none";
    regNameError.style.display = "none";
    regLastnameError.style.display = "none";
    regPasswordError.style.display = "none";
    regDptError.style.display = "none";
  }
});
regMail.addEventListener("input", () => {
  if (regMail.value === "") {
    regMailError.style.display = "flex";
    email2.style.borderColor = "red";
    email2.style.color = "red";
  } else if (!emailReg.test(regMail.value)) {
    regMailError.style.display = "flex";
    email2.style.borderColor = "red";
    email2.style.color = "red";
  } else if (emailReg.test(regMail.value)) {
    regMailError.style.display = "none";
    email2.style.borderColor = "grey";
    email2.style.color = "grey";
  } else {
    email2.style.borderColor = "#4b4949";
    email2.style.color = "#4b4949";
    regStudentError.style.display = "none";
    regMailError.style.display = "none";
    regNameError.style.display = "none";
    regLastnameError.style.display = "none";
    regPasswordError.style.display = "none";
    regDptError.style.display = "none";
  }
});
regStudent.addEventListener("input", () => {
  if (regStudent.value === "") {
    regStudentError.style.display = "flex";
    studentid2.style.borderColor = "red";
    studentid2.style.color = "red";
  } else if (!StudentReg.test(regStudent.value)) {
    regStudentError.style.display = "flex";
    studentid2.style.borderColor = "red";
    studentid2.style.color = "red";
  } else if (regStudent.value.length > 6) {
    regStudentError2.style.display = "flex";
    regStudentError.style.display = "none";
    studentid2.style.borderColor = "red";
    studentid2.style.color = "red";
  } else if (regStudent.value.length === 6) {
    regStudentError2.style.display = "none";
    regStudentError.style.display = "none";
    studentid2.style.borderColor = "#4b4949";
    studentid2.style.color = "#4b4949";
  } else if (StudentReg.test(regStudent.value)) {
    regStudentError.style.display = "none";
    studentid2.style.borderColor = "#4b4949";
    studentid2.style.color = "#4b4949";
  } else {
    studentid2.style.borderColor = "#4b4949";
    studentid2.style.color = "#4b4949";
    regStudentError.style.display = "flex";
    regMailError.style.display = "none";
    regNameError.style.display = "none";
    regLastnameError.style.display = "none";
    regPasswordError.style.display = "none";
    regDptError.style.display = "none";
    regStudentError2.style.display = "flex";
  }
});
regDpt.addEventListener("input", () => {
  if (regDpt.value === "") {
    regDptError.style.display = "flex";
    department2.style.borderColor = "red";
    department2.style.color = "red";
  } else if (!DptReg.test(regDpt.value)) {
    regDptError.style.display = "flex";
    department2.style.borderColor = "red";
    department2.style.color = "red";
  } else if (DptReg.test(regDpt.value)) {
    regDptError.style.display = "none";
    department2.style.borderColor = "#4b4949";
    department2.style.color = "#4b4949";
  } else {
    department2.style.borderColor = "#4b4949";
    department2.style.color = "#4b4949";
    regStudentError.style.display = "none";
    regMailError.style.display = "none";
    regNameError.style.display = "none";
    regLastnameError.style.display = "none";
    regDptError.style.display = "flex";
    regPasswordError.style.display = "none";
  }
});

regPassword.addEventListener("input", () => {
  if (regPassword.value === "") {
    regPasswordError.style.display = "flex";
    password2.style.borderColor = "red";
    password2.style.color = "red";
  } else if (!PassReg.test(regPassword.value)) {
    regPasswordError.style.display = "flex";
    password2.style.borderColor = "red";
    password2.style.color = "red";
  } else if (PassReg.test(regPassword.value)) {
    regPasswordError.style.display = "none";
    password2.style.borderColor = "#4b4949";
    password2.style.color = "#4b4949";
  } else {
    password2.style.borderColor = "#4b4949";
    password2.style.color = "#4b4949";
    regStudentError.style.display = "none";
    regMailError.style.display = "none";
    regNameError.style.display = "none";
    regLastnameError.style.display = "none";
    regDptError.style.display = "none";
    regPasswordError.style.display = "none";
  }
});

// regPassword.addEventListener("input", () => {
//   if (regPassword === "") {
//     regPasswordError.style.display = "flex";
//     password2.style.borderColor = "red";
//     password2.style.color = "red";
//   } else if (!PassReg.test(regPassword.value)) {
//     regPasswordError.style.display = "flex";
//     password2.style.borderColor = "red";
//     password2.style.color = "red";
//   } else {
//     password2.style.borderColor = "#4b4949";
//     password2.style.color = "#4b4949";
//     regStudentError.style.display = "none";
//     regMailError.style.display = "none";
//     regNameError.style.display = "none";
//     regLastnameError.style.display = "none";
//     regPasswordError.style.display = "none";
//     regDptError.style.display = "none";
//   }
// });

function submitCon() {
  if (regName.value === "") {
    regNameError.style.display = "flex";
    firstname2.style.borderColor = "red";
    firstname2.style.color = "red";
  } else if (!nameReg.test(regName.value)) {
    regNameError.style.display = "flex";
  }
  if (regLastname.value === "") {
    regLastnameError.style.display = "flex";
    LastName2.style.borderColor = "red";
    LastName2.style.color = "red";
  } else if (!lastnameReg.test(regLastname.value)) {
    regLastnameError.style.display = "flex";
  }
  if (regMail.value === "") {
    regMailError.style.display = "flex";
    email2.style.borderColor = "red";
    email2.style.color = "red";
  } else if (!emailReg.test(regMail.value)) {
    regMailError.style.display = "flex";
  }
  if (regStudent.value === "") {
    regStudentError.style.display = "flex";
    studentid2.style.borderColor = "red";
    studentid2.style.color = "red";
  } else if (!StudentReg.test(regStudent.value)) {
    regStudentError.style.display = "flex";
  }
  if (regDpt.value === "") {
    regDptError.style.display = "flex";
    department2.style.borderColor = "red";
    department2.style.color = "red";
  } else if (!DptReg.test(regDpt.value)) {
    regDptError.style.display = "flex";
  }

  if (regPassword.value === "") {
    regPasswordError.style.display = "flex";
    password2.style.borderColor = "red";
    password2.style.color = "red";
  } else if (!PassReg.test(regPassword.value)) {
    regPasswordError.style.display = "flex";
  } else if (
    regName.value !== "" &&
    regLastname.value !== "" &&
    regMail.value !== "" &&
    regStudent.value !== "" &&
    regDpt.value !== "" &&
    regPassword.value !== ""
  ) {
    window.location.href = "signup.html";
  }
}
