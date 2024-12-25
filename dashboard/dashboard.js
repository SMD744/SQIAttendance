// script.js
profilebtn.addEventListener("click", () => {
  profile.html.style.display = "block";
  dashboard.html.style.display = "none";
});
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const monthYearLabel = document.querySelector(".month-year");
const calendarBody = document.querySelector(".calendar-body");

let currentDate = new Date();

// List of months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Initialize Calendar
function renderCalendar() {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Update the month and year display
  monthYearLabel.textContent = `${months[month]} ${year}`;

  // Get the first day of the month
  const firstDay = new Date(year, month, 1).getDay();

  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Clear the calendar body
  calendarBody.innerHTML = "";

  // Generate the days of the calendar
  let dayCount = 1;

  // Create rows for the calendar (6 rows maximum)
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < firstDay) {
        cell.classList.add("empty");
      } else if (dayCount <= daysInMonth) {
        cell.textContent = dayCount;
        if (
          dayCount === currentDate.getDate() &&
          month === currentDate.getMonth() &&
          year === currentDate.getFullYear()
        ) {
          cell.classList.add("today");
        }
        dayCount++;
      } else {
        cell.classList.add("empty");
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

// Previous Month
prevButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

// Next Month
nextButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Initial Calendar Render
renderCalendar();

if (localStorage.getItem("modalOpen") === "true") {
  document.querySelector("dialog").showModal();
}
openMe.addEventListener("click", () => {
  localStorage.setItem("modalOpen", "true");
  document.querySelector("dialog").showModal();
});
closeMe.addEventListener("click", () => {
  localStorage.setItem("modalOpen", "false");
  document.querySelector("dialog").close();
});

openNotification.addEventListener("click", () => {
  blurry.style.display = "flex";
});
closeNotification.addEventListener("click", () => {
  blurry.style.display = "none";
});

leaveicon.addEventListener("click", () => {
  leftside.style.display = "none";
  leave.style.display = "block";
});

leavebtn.addEventListener("click", () => {
  leftside.style.display = "none";
  leave.style.display = "none";
  sentdetails.style.display = "block";
});

attendanceicon.addEventListener("click", () => {
  leftside.style.display = "none";
  attendance.style.display = "block";
});

let qrCodeContainer = document.getElementById("qrCode");
qrCodeContainer.innerHTML = "";
QRCode.toCanvas(qrCodeContainer, value, { width: 256 }, (error) => {
  if (error) console.error(error);
});
