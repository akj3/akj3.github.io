function uwClick() {
    window.open('https://www.wisc.edu/', '_blank');
}

function learnmoreClick() {
    window.open('https://en.wikivoyage.org/wiki/Prespa_(North_Macedonia)', '_blank');
}

// showing text to fade in
const sectionToAnimate = document.querySelector('.uwfont');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the fade-in class when the section is visible
      sectionToAnimate.classList.add('fade-in');
    } else {
      // Remove the fade-in class when the section is not visible
      sectionToAnimate.classList.remove('fade-in');
    }
  });
});

// Start observing the section
observer.observe(sectionToAnimate);


