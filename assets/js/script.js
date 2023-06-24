let scrollTop;
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

const moyCursor = document.getElementById('cursor');

var ver = "&beta;.4.4";



function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
  }

  const btn = document.querySelector('.form form button[name="send"]');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_17qo3nt';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send it!';
      alert('Sent!');
      this.querySelector("[name='from_name']").value = "";
      this.querySelector("[name='email']").value = "";
      this.querySelector("[name='message").value = "";
    }, (err) => {
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send it!';
      alert(JSON.stringify(err));
    });
});


// Get all sections that have an ID defined
const sections = document.querySelectorAll("main > div[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
    // Original:
    // const sectionTop = current.offsetTop - 50;
    //  
    // Alex Turnwall's update:
    // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
    // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
    // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
    //
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("nav .innerNav .links .droped a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("nav .innerNav .links .droped a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}


document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    setTimeout(waitformin, 200);
  }
};
function waitformin() {
  document.querySelector("section.container").classList.add("remove");
}

function getCurrentPOST() {
  var url = window.location.href;
  var lastId = url.split("#")[1];

  if(lastId.includes("POST")) {
    document.getElementById(lastId).classList.add("activeCard");
  }else if(lastId.includes("Modal")) {
    document.getElementById(lastId).classList.add("show");
  } 
}

document.addEventListener("readystatechange",()=>{
  getCurrentPOST();
});


const lightBtn = document.querySelector('.lightBtn');
const darkBtn = document.querySelector('.darkBtn');
const systemBtn = document.querySelector('.systemBtn');

const currentTheme = localStorage.getItem("theme");

if(currentTheme == "dark") {
  darkBtn.classList.add('active');
  lightBtn.classList.remove('active');
  systemBtn.classList.remove('active');

  var themeColorCSS = document.querySelector("head link#themeColorCSS");
  themeColorCSS.setAttribute('href','assets/css/dark.css');
}else if(currentTheme == "light") {
  darkBtn.classList.remove('active');
  lightBtn.classList.add('active');
  systemBtn.classList.remove('active');

  var themeColorCSS = document.querySelector("head link#themeColorCSS");
  themeColorCSS.setAttribute('href','assets/css/light.css');
}else if(currentTheme == "system") {
  darkBtn.classList.remove('active');
  lightBtn.classList.remove('active');
  systemBtn.classList.add('active');

  var themeColorCSS = document.querySelector("head link#themeColorCSS");
  themeColorCSS.setAttribute('href','assets/css/system.css');
}else {
  darkBtn.classList.remove('active');
  lightBtn.classList.remove('active');
  systemBtn.classList.add('active');

  var themeColorCSS = document.querySelector("head link#themeColorCSS");
  themeColorCSS.setAttribute('href','assets/css/system.css');
  localStorage.setItem("theme", "system");
}

lightBtn.addEventListener("click",function () {
  var themeColorCSS = document.querySelector("head link#themeColorCSS");
  themeColorCSS.setAttribute('href','assets/css/light.css');

  darkBtn.classList.remove('active');
  lightBtn.classList.add('active');
  systemBtn.classList.remove('active');

  localStorage.setItem("theme", "light");
});

darkBtn.addEventListener("click",function () {
  var themeColorCSS = document.querySelector("head link#themeColorCSS");
  themeColorCSS.setAttribute('href','assets/css/dark.css');

  darkBtn.classList.add('active');
  lightBtn.classList.remove('active');
  systemBtn.classList.remove('active');

  localStorage.setItem("theme", "dark");
});

systemBtn.addEventListener("click",function () {
  var themeColorCSS = document.querySelector("head link#themeColorCSS");
  themeColorCSS.setAttribute('href','assets/css/system.css');

  darkBtn.classList.remove('active');
  lightBtn.classList.remove('active');
  systemBtn.classList.add('active');

  localStorage.setItem("theme", "system");
});

//? Cursor Position
function getCursor(event) {
  let x = event.clientX;
  let y = event.clientY;


  moyCursor.style.top = y + "px";
  moyCursor.style.left = x + "px";
}

function debugMode() {
  var x = document.querySelectorAll("*");
  for (var i = 0; i < x.length; i++) {

    x[i].style.border = "1px solid red";
    x[i].style.background = "yellow";
    x[i].style.color = "black";
    x[i].style.filter = "none";
    x[i].style.backdropFilter = "none";
    x[i].style.boxShadow = "none";
  }
}

document.addEventListener('scroll',getScrolled);

function getScrolled() {
  scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );

    moyCursor.style.background = `radial-gradient(closest-side, var(--background) 79%, transparent 80% 100%),
    conic-gradient(var(--primary) `+((scrollTop / height) * 135)+`%, var(--white4) 0)`;
}

for (let i = 0; i < document.querySelectorAll("#latestVer").length; i++) {
  document.querySelectorAll("#latestVer")[i].innerHTML = ver;
}