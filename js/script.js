/* Main JS file for the website */

const toggleBtn = document.getElementById('toggle-btn');
const { body } = document;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
};

if (darkMode === 'enabled') {
   enableDarkMode();
}

toggleBtn.onclick = (e) => {
   darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'disabled') {
      enableDarkMode();
   } else {
      disableDarkMode();
   }
};

const sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
};

document.querySelector('#close-btn').onclick = () => {
   sideBar.classList.remove('active');
   body.classList.remove('active');
};

// Function 1
document.addEventListener("DOMContentLoaded", function () {
   const dayTitles = document.querySelectorAll('.day .title');

   dayTitles.forEach(function (title) {
      title.addEventListener('click', function () {
         const flexContainer = this.nextElementSibling;

         // Close all other open flex containers
         const allFlexContainers = document.querySelectorAll('.flex');
         allFlexContainers.forEach(function (container) {
            if (container !== flexContainer && container.classList.contains('active')) {
               container.classList.remove('active');
            }
         });

         // Toggle the active class for the clicked flex container
         flexContainer.classList.toggle('active');
      });
   });
});


// Function 2
const centersByDay = {
   saturday: ['GHT الشروق', 'Oxford City 1'],
   sunday: ['بروفيشنال شبرا', 'حزب العمل', 'نيو ستار 1', 'ناسا المعادي'],
   monday: ['سمارت الدقي', 'سمارت هرم (المجموعة الأساسية)', 'سمارت هرم (كورس الإنقاذ)', 'سمارت أكتوبر'],
   tuesday: ['مودرن', 'ماراثون', 'نيو ستار 2', 'سمارت حدايق حلوان', 'ناسا المقطم'],
   wednesday: ['Oxford City 2', 'تاسك', 'الياسمين', 'الخليفة'],
   thursday: ['ليرن الدقي', 'A-One', 'الفا هرم (المجموعة الأساسية)', 'الفا هرم (كورس الإنقاذ)'],
   friday: ['سيدات مصر', 'K'],
};

// قائمة للأيام
window.addEventListener('DOMContentLoaded', () => {
   const daySelect = document.getElementById('day-select');
   if (daySelect) {
      daySelect.addEventListener('change', updateCenters);
   }
});

// تحديث قائمة السناتر عند تغيير اليوم
function updateCenters() {
   const selectedDay = document.getElementById('day-select').value;
   const centers = centersByDay[selectedDay];
   const centersContainer = document.getElementById('centers-container');

   // تفريغ قائمة السناتر لتحديثها
   centersContainer.innerHTML = '';

   // إنشاء روابط صفحات السناتر الجديدة وإضافتها إلى الصفحة
   centers.forEach((center) => {
      const centerLink = document.createElement('a');
      centerLink.href = `centers/${center}/index.html`;
      centerLink.textContent = center;
      centerLink.classList.add('center-link');
      centersContainer.appendChild(centerLink);
   });
}


// Function 3
function showBox() {
   const selectedBoxName = document.getElementById("box-number").value;

   const boxes = document.querySelectorAll(".box");
   boxes.forEach(box => {
      const boxName = getBoxName(box);
      const isVisible = !selectedBoxName || boxName === selectedBoxName;

      box.style.display = isVisible ? "block" : "none";

      if (isVisible) {
         box.scrollIntoView({ behavior: 'smooth' });
      }
   });
}

// Function to initialize the select options with available box names
function initializeSelectOptions() {
   const boxes = document.querySelectorAll(".box");
   const select = document.getElementById("box-number");

   boxes.forEach(box => {
      const boxName = getBoxName(box);
      const option = document.createElement("option");

      option.value = boxName;
      option.textContent = boxName;
      select.appendChild(option);
   });

   // Show all boxes when the page loads
   boxes.forEach(box => box.style.display = "block");
}

// Helper function to extract box name
function getBoxName(box) {
   return box.dataset.name;
}

// Call the function to initialize select options when the page loads
window.onload = initializeSelectOptions;

