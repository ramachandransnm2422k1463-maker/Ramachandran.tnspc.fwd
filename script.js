// script.js

// ---------- Greeting in title ----------

(function(){

  const hours = new Date().getHours();

  let greet;

  if(hours < 12){

    greet = "Good Morning";

  } else if(hours < 18){

    greet = "Good Afternoon";

  } else {

    greet = "Good Evening";

  }

  document.title = `${greet} - S Ramchandran Resume`;

})();

// ---------- Dark Mode Toggle ----------

const toggleBtn = document.getElementById("darkToggle");

if(toggleBtn){

  toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

      toggleBtn.textContent = "☀ Light Mode";

    } else {

      toggleBtn.textContent = "🌙 Dark Mode";

    }

  });

}

// ---------- Download Resume ----------

const downloadBtn = document.getElementById("downloadBtn");

if(downloadBtn){

  downloadBtn.addEventListener("click", () => {

    window.print(); // Opens print dialog, user can save as PDF

  });

}