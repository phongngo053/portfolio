/* Ngô Tiến Phong — Personal Portfolio
   Vanilla JS: nav drawer, sticky nav state, scroll reveal,
   project filtering, mailto contact form, footer year. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------- Nav --- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  function closeNav() {
    if (!links) return;
    links.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });

    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeNav();
  });

  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------- Active link --- */
  var sectionIds = ["home", "about", "stack", "projects", "experience", "contact"];
  var navAnchors = Array.prototype.slice.call(
    document.querySelectorAll('.nav-links a[href^="#"]')
  );

  if (navAnchors.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          navAnchors.forEach(function (anchor) {
            anchor.classList.toggle(
              "is-active",
              anchor.getAttribute("href") === "#" + id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sectionIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  /* ----------------------------------------------------- Scroll reveal --- */
  var revealables = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    revealables.forEach(function (el, index) {
      el.style.transitionDelay = Math.min(index % 4, 3) * 70 + "ms";
      revealObserver.observe(el);
    });
  }

  /* --------------------------------------------------- Project filter --- */
  var filterRow = document.querySelector(".filter-row");

  if (filterRow) {
    var chips = Array.prototype.slice.call(filterRow.querySelectorAll(".chip"));
    var cards = Array.prototype.slice.call(
      document.querySelectorAll("[data-tags]")
    );

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var filter = chip.dataset.filter;

        chips.forEach(function (c) {
          c.classList.toggle("is-active", c === chip);
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });

        cards.forEach(function (card) {
          var tags = (card.dataset.tags || "").split(",");
          var visible = filter === "all" || tags.indexOf(filter) !== -1;
          card.hidden = !visible;
        });
      });
    });
  }

  /* --------------------------------------------------- Contact (mailto) --- */
  var form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();

      if (!name || !email || !message) {
        var note = form.querySelector(".form-note");
        if (note) {
          note.textContent = "Please fill in your name, email and message.";
          note.style.color = "var(--system--orange-300)";
        }
        return;
      }

      var subject = "Portfolio enquiry from " + name;
      var body =
        "Hi Phong,\n\n" + message + "\n\n— " + name + "\n" + email;
      var href =
        "mailto:ngoti.phong.dev@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = href;

      var note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Opening your mail app…";
        note.style.color = "var(--system--green-300)";
      }
    });
  }

  /* ------------------------------------------------------ Copy to clip --- */
  var copyButtons = document.querySelectorAll("[data-copy]");

  copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.dataset.copy;
      var done = function () {
        var original = button.textContent;
        button.textContent = "Copied!";
        setTimeout(function () {
          button.textContent = original;
        }, 1800);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done).catch(function () {});
      }
    });
  });

  /* -------------------------------------------------------- Footer year --- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
