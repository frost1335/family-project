window.addEventListener("load", function (e) {
  gsap.registerPlugin(ScrollTrigger);

  setTimeout(() => {
    $(".elephant-header").animate(
      {
        opacity: 1,
      },
      500
    );
  }, 2500);

  // copied from other page !
  const navMenuToggle = () => {
    $(".dropdown-clicked").click(function (e) {
      e.preventDefault();
      $("header .dropdown-item").fadeIn();
    });
    $(".dropdown-item-a-first").click(function (e) {
      e.preventDefault();
      $("header .dropdown-item").fadeOut();
    });
    $(".hover-ul-a")
      .mouseover(function (e) {
        $("header .dropdown-item-ul").css({
          display: "block",
          opacity: 1,
        });
      })
      .mouseout(function (e) {
        $("header .dropdown-item-ul").css({
          display: "none",
          opacity: 0,
        });
      });
    $(".header-right-bars").click(function (e) {
      $("header .header-top").css({
        top: "0",
      });
    });
    $(".header-top .exit").click(function (e) {
      $("header .header-top").css({
        top: "-130vh",
      });
    });
  };
  navMenuToggle();
  //

  const headerAnimation = () => {
    $(".elephant-header").animate(
      {
        right: "110px",
        top: "120px",
        transform: "scale(65%)",
        opacity: 0,
      },
      1
    );

    const tlAn = ScrollTrigger.create({
      trigger: ".header-title",
    });
    let tl = gsap.timeline({
      animation: tlAn,
      defaults: { duration: 0.3 },
    });

    tl.from(".headerNav", {
      top: "+=30",
      opacity: 0,
    });

    document.querySelectorAll(".headerTitle").forEach((title) => {
      tl.from(title, {
        marginTop: 20,
        opacity: 0,
        ease: "ease-in",
      });
    });

    tl.to(".elephant-header", {
      transform: "scale(100%)",
      opacity: 1,
      top: 250,
      right: 0,
      duration: 0.7,
    }).to(
      ".elephant-img",
      {
        marginTop: 0,
        duration: 0.7,
      },
      "-=0.5"
    );
  };
  headerAnimation();

  const mainAnimation = () => {
    const mainContent = document.querySelector(".main-underline");
    let tlMain = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainTitle",
        start: "0% 100%",
        toggleActions: "restart pause reverse pause",
        end: () => mainContent.offsetHeight,
        scrub: 1,
      },
    });

    tlMain
      .from(".elephant-header", {
        right: 0,
        top: 250,
        transform: "scale(100%)",
        duration: 1,
      })
      .to(
        ".elephant-face",
        {
          top: "+=30",
          duration: 1,
        },
        "-=1"
      )
      .to(
        ".elephant-ears",
        {
          top: "-=10",
          duration: 1,
        },
        "-=1"
      );

    const underlineAnimation = () => {
      const mainText = document.querySelector(".main-text");
      const underlines = mainText.querySelectorAll("span");
      let tlUnderline = gsap.timeline({
        scrollTrigger: {
          trigger: ".main-underline",
          start: "100% 100%",
          end: "+=2300",
          scrub: 2,
          pin: ".main-underline",
          toggleActions: "restart pause reverse pause",
        },
      });

      document.querySelectorAll(".line-block").forEach((block, index) => {
        tlUnderline
          .to(block, {
            marginLeft: 0,
            opacity: 1,
            duration: 0.5,
          })
          .to(underlines[index], {
            width: "95%",
            duration: 0.5,
          });
      });

      let elephantOpacity = gsap.timeline({
        scrollTrigger: {
          trigger: ".results",
          start: "top 90%",
          end: "+=1300",
          scrub: 1,
        },
      });

      elephantOpacity
        .to(".elephant-header", {
          zIndex: 3,
          transform: "scale(150%)",
          opacity: 0,
          duration: 1,
        })
        .to(
          ".elephant-face",
          {
            top: "-=15",
            duration: 1,
          },
          "-=1"
        );
    };
    underlineAnimation();
  };
  mainAnimation();

  const resultsAnimation = () => {
    const resSlide = document.querySelectorAll(".result-slide");
    const imgBox = document.querySelectorAll(".img-box");

    const resTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".result-slide",
        scrub: true,
        pin: ".right-img",
        start: "top top",
        end: () => "+=" + (resSlide[0].offsetHeight + 20) * 3,
        snap: 1 / (imgBox.length + 0.02),
      },
    });

    resTl.to(imgBox[0], {
      height: 0,
      duration: 1,
      ease: "ease-in",
    });
    resTl.to(imgBox[1], {
      height: 0,
      duration: 1,
      ease: "ease-in",
    });
    resTl.to(imgBox[2], {
      height: 0,
      duration: 1,
      ease: "ease-in",
    });
  };
  resultsAnimation();

  const feedbackAnimation = () => {
    gsap.to(".feedback", {
      paddingTop: 260,
      paddingBottom: 60,
      scrollTrigger: {
        trigger: ".feedback",
        start: "top 80%",
        scrub: true,
        end: () =>
          "+=" + document.querySelector(".feedback").offsetHeight * 2.6,
      },
    });
    gsap.to(".elephant-img-bo", {
      y: "+=150",
      scrollTrigger: {
        trigger: ".feedback",
        start: "top 35%",
        scrub: true,
        end: () =>
          "+=" + document.querySelector(".feedback").offsetHeight * 1.5,
      },
    });
    const elephImg = gsap.timeline({
      scrollTrigger: {
        trigger: ".form-footer",
        start: "30px 100%",
        scrub: true,
        end: "+=300",
      },
    });

    elephImg.to(".elephant-img-bo", {
      scale: 1,
      right: -40,
      top: 30,
    });

    elephImg.to(
      ".elephant-img",
      {
        opacity: 1,
      },
      "-=0.5"
    );
  };
  feedbackAnimation();

  const sectionResultAnimation = () => {
    const tl_3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_result_1",
        start: "top -50%",
        end: "+=3000",
        scrub: 1,
        pin: true,
      },
    });
    tl_3.to(".section_result", {
      x: 350,
      y: -90,
      duration: 1,
    });
    tl_3.to(".section_result", {
      x: 550,
      y: -90,
      duration: 1,
      delay: 1,
    });
    tl_3.from(
      [".info .ResultP1"],
      2,
      {
        opacity: 0,
        x: -50,
        delay: 2,
        duration: 1,
      },
      0
    );
    tl_3.from(
      [".rubl_div111"],
      2,
      {
        opacity: 0,
        x: -50,
        delay: 3,
        duration: 1,
      },
      0
    );
    tl_3.to(
      [".info .ResultP1"],
      2,
      {
        opacity: 0,
        x: 50,
        delay: 4,
        duration: 1,
      },
      0
    );
    tl_3.from(
      [".info .ResultP2"],
      2,
      {
        opacity: 0,
        x: -50,
        delay: 5,
        duration: 1,
      },
      0
    );
    tl_3.from(
      [".Diograms"],
      2,
      {
        opacity: 0,
        x: -50,
        delay: 5,
        duration: 1,
      },
      0
    );
    tl_3.to(
      [".section_result"],
      4,
      {
        opacity: 1,
        x: 0,
        delay: 7,
        duration: 2,
      },
      0
    );
    tl_3.to(
      [".info .ResultP2"],
      2,
      {
        opacity: 0,
        x: 50,
        delay: 7,
        duration: 1,
      },
      0
    );

    gsap.from(".bottom_bottom", {
      opacity: 0,
      y: -150,
      duration: 1,
      scrollTrigger: {
        trigger: ".section_result_1",
        start: "60% 30%",
        scrub: 1,
        end: "+=100",
      },
    });
  };
  sectionResultAnimation();

  const digitalAnimation = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".digital_title",
        start: "0% 90%",
        scrub: 2,
        end: () =>
          "+=" + document.querySelector(".digital_title").offsetHeight * 1.3,
        markers: true,
      },
    });

    tl.from(".dital-title", {
      opacity: 0,
      duration: 1,
    }).to(
      ".dig-cen-title",
      {
        marginLeft: 390,
        duration: 1,
      },
      "-=0.9"
    );

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".digital-body",
        start: "0% 53%",
        scrub: 1,
        pin: ".digital",
        end: () => "+=" + 600,
      },
    });

    tl2
      .from(".progress-box", {
        opacity: 0,
      })
      .from(
        ".progress",
        {
          width: 0,
        },
        "-=0.5"
      );

    gsap.from([".bottom-box"], {
      y: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: ".digital-progress",
        start: "0% 10%",
        scrub: 1,
        markers: true,
      },
    });

    $(".footer-button").on("click", function (e) {
      gsap.to(".nps-modal", {
        display: "flex",
        opacity: 1,
        duration: 0.5,
      });
      document.addEventListener("click", function (e) {
        if (
          e.target.className === "nps-modal" ||
          e.target.className === "modal-close"
        ) {
          gsap.to(".nps-modal", {
            opacity: 0,
            display: "none",
            duration: 0.5,
          });
        }
      });
    });
  };
  digitalAnimation();

  // ============================ strategy animation start

  const strategyAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".strategy-title",
        scrub: 2,
        start: "0% 90%",
        markers: true,
        end: "+=400",
      },
    });
    tl.from([".title-top", ".title-center", ".title-bottom"], {
      opacity: 0,
    }).from(
      ".title-center",
      {
        marginLeft: 0,
      },
      "-=0.4"
    );

    gsap.to([".card-left", ".card-right", ".card-bottom"], {
      top: 0,
      left: "50%",
      x: "-50%",
      scrollTrigger: {
        trigger: ".strategy-card",
        start: "0% 100%",
        scrub: 1,
        markers: true,
        end: () =>
          "+=" + document.querySelector(".strategy-card").offsetHeight / 2,
      },
    });
  };
  strategyAnimation();
});
