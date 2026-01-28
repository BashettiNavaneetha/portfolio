
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active"); // animate again on scroll up
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  reveals.forEach(reveal => observer.observe(reveal));

