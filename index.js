gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSRulePlugin);

const navMenus = document.body.querySelectorAll('.nav-item');

//music button functionality

document.getElementById('nav-toggle').addEventListener('change', function () {
  var isChecked = document.getElementById('nav-toggle').checked;
  var audio = document.getElementById('music');

  if (isChecked) {
    audio.play();
    document.getElementById('music-off').style.display = 'none';
    document.getElementById('music-on').style.display = 'block';
  } else {
    audio.pause();
    document.getElementById('music-on').style.display = 'none';
    document.getElementById('music-off').style.display = 'block';
  }
});

//adding active class to menu items
// Get all li with class="nav-item" inside the container
var btns = document.getElementsByClassName('nav-item');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

//smooth scrolling
document.querySelectorAll('.nav-item').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: '#section' + (index + 1) },
      ease: 'power2.out',
    });
  });
});

//scroll event
gsap.to('.nav__gotop-button', {
  scrollTrigger: {
    trigger: '#section1',
    toggleActions: 'play none none reverse',
  },
  opacity: 1,
  x: 0,
  duration: 0.8,
  rotate: -360,
});
//click functionality
document.querySelector('.nav__gotop-button').addEventListener('click', () => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: { y: '#header' },
    ease: 'power2.out',
  });
});

//down arrow button
document.getElementById('explore').addEventListener('click', () => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: { y: '#section1' },
    ease: 'power2.out',
  });
});

//PROJECT section us cta
document.getElementById('nav__cta').addEventListener('click', () => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: { y: '#projects-cards' },
    ease: 'power2.out',
  });
});

//landing page animation
gsap.to('.anime1', { opacity: 1, duration: 1, y: 0, stagger: 0.6 });
gsap.from('.header__image', { opacity: 0, scale: 0.8, duration: 1 });
gsap.to('.image-border', { opacity: 1, duration: 1 });

//projects animation
var tlp = gsap.timeline({
  scrollTrigger: {
    trigger: '#section4',
    start: 'top center',
    end: 'center 115%',
    toggleActions: 'play none none reverse',
    scrub: 1,
  },
  defaults: {
    duration: 1,
    opacity: 0,
    ease: 'power1.out',
  },
});

tlp
  .from('#right', { x: 100 })
  .from('#left', { x: -100 }, '-=1')
  .from('#up', { y: -100 }, '-=1')
  .from('#bottom', { y: 400 }, '-=1');

//logo svg animation
var tll = gsap.timeline({
  scrollTrigger: {
    trigger: '#section1',
    toggleActions: 'play reverse play reverse',
    end: '70% bottom',
  },
  defaults: {
    duration: 0.8,
  },
});

tll
  .to('#lineh', { attr: { x2: 0 }, ease: 'power1.out' })
  .to('#linev', { attr: { y2: 0, ease: 'power1.out' } }, '-=0.7')
  .to('.cls-1', { opacity: '1', ease: 'power2.out' }, '-=1.2');

//project cards

//footer logo animation
TweenMax.to('#squares', 2.5, {
  rotation: '+=450',
  repeat: -1,
  ease: Power3.easeOut,
  transformOrigin: '50% 50%',
});

function submitform() {
  var inputs = document.getElementsByClassName('contactform__input');
  console.log(inputs);
  var formdata = new FormData();
  for (var i = 0; i < inputs.length; i++) {
    formdata.append(inputs[i].name, inputs[i].value);
  }
  console.log(formdata);
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    }
  };
  xmlhttp.open('POST', 'insert.php');
  xmlhttp.send(formdata);
}

// Functions to get scrolled %

var winheight, docheight, trackLength, throttlescroll;

function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight,
  );
}

function getmeasurements() {
  winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  docheight = getDocHeight();
  trackLength = docheight - winheight;
}
function setActiveMenu(activeSection) {
  for (let i = 0; i < navMenus.length; i++) {
    navMenus[i].className = 'nav-item';
  }

  navMenus[activeSection - 1].className = 'nav-item active';

}

function searchActiveMenu(percentageScrolled) {
  switch (true) {
    case percentageScrolled < 0:
      // I'm guessing this is an error
      break;
    case percentageScrolled >= 0 && percentageScrolled < 23:
      setActiveMenu(1);
      break;
    case percentageScrolled >= 23 && percentageScrolled < 35:
      setActiveMenu(2);
      break;
    case percentageScrolled >= 35 && percentageScrolled < 49:
      setActiveMenu(3);
      break;
    case percentageScrolled >= 49 && percentageScrolled < 78:
      setActiveMenu(4);
      break;
    case percentageScrolled >= 78 && percentageScrolled < 95:
      setActiveMenu(5);
      break;
    case percentageScrolled >= 95:
      setActiveMenu(6);
      break;
    default:
      setActiveMenu(1);
  }
}

function amountscrolled() {
  var scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

  searchActiveMenu(pctScrolled);
}

getmeasurements();

window.addEventListener(
  'resize',
  function () {
    getmeasurements();
  },
  false,
);

window.addEventListener(
  'scroll',
  function () {
    clearTimeout(throttlescroll);
    throttlescroll = setTimeout(function () {
      // throttle code inside scroll to once every 50 milliseconds
      amountscrolled();
    }, 50);
  },
  false,
);

amountscrolled();