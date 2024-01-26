/* ========== MENU SHOW Y HIDDEN ========== */
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");
/* ========== MENU SHOW ========== */
/* validate if constant exists */
navToggle &&
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});

/* ========== MENU HIDDEN ========== */
/* validate if constant exists */
navClose &&
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/* ========== ACCORDION SKILLS ========== */
const skillsContent = document.getElementsByClassName("skills__content"),
	skillsHeader = document.querySelectorAll(".skills__header");
const toggleSkills = (e) => {
	let item = e.currentTarget.parentNode.className;
	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = "skills__content skills__close";
	}
	if (item === "skills__content skills__close") {
		e.currentTarget.parentNode.className = "skills__content skills__open";
	}
};

skillsHeader.forEach((element) => {
	element.addEventListener("click", (e) => toggleSkills(e));
});
/* ========== QUALIFICATION TABS ========== */
const tabs = document.querySelectorAll("[data-target]"),
	tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("qualification__active");
		});
		target.classList.add("qualification__active");
		tabs.forEach((tab) => {
			tab.classList.remove("qualification__active");
		});
		tab.classList.add("qualification__active");
	});
});
/* ========== SERVICES MODAL ========== */
/* ========== PORTFOLIO SWIPER ========== */
let swiper = new Swiper(".portfolio__container", {
	cssMode: true,
	loop: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
/* ========== SCROLL SECTION ACTION LINK ========== */
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
	const scrollY = window.pageYOffset;
	sections.forEach((current) => {
		const sectionHeight = current.offSetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
};
window.addEventListener("scroll", scrollActive);
/* ========== CHANGE BACKGROUND HEADER ========== */
const scrollHeader = (e) => {
	const nav = document.getElementById("header");
	if (e.currentTarget.scrollY >= 80) {
		nav.classList.add("scroll-header");
	} else {
		nav.classList.remove("scroll-header");
	}
};
window.addEventListener("scroll", (e) => scrollHeader(e));
/* ========== SHOW SCROLL UP ========== */
const scrollUp = (e) => {
	const scrollUp = document.getElementById("scroll-up");
	if (e.currentTarget.scrollY >= 560) {
		scrollUp.classList.add("show-scroll");
	} else {
		scrollUp.classList.remove("show-scroll");
	}
};
window.addEventListener("click", (e) => scrollUp(e));
/* ========== DARK LIGHT THEME ========== */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		darkTheme
	);
	themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});
/* ========== Email.js ========== */
const contactForm = document.getElementById("contact-form").querySelector("a");
// public key: 2_OmSN8_UfAkgiqh4
// 서비스id: service_cqwlhzw
// 템플릿id: template_2hn18zq
const sendEmail = (e) => {
	e.preventDefault();
	const name = document.getElementById("contact-name").value;
	const email = document.getElementById("contact-email").value;
	const message = document.getElementById("contact-message").value;
	const params = {
		name: name,
		email: email,
		message: message,
	};

	emailjs.send("service_cqwlhzw", "template_2hn18zq", params).then(
		function (response) {
			console.log(e, response);

			document.getElementById("contact-name").value = "";
			document.getElementById("contact-email").value = "";
			document.getElementById("contact-message").value = "";
			console.log("SUCCESS!", response.status, response.text);
		},
		function (error) {
			console.log("FAILED...", error);
		}
	);
};
// Step 2: Add an event listener to the form's submit event
contactForm.addEventListener("click", sendEmail);

/* ========== ========== */
/* ========== ========== */
