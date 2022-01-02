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
        markers: true,
      },
    });
  };
  sectionResultAnimation();
});
