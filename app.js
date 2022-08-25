$(document).ready(function () {
  $(".nav-1-button").click(function () {
    $(".navbar-1").hide(1);
    $(".navbar-1-search").fadeToggle(400);
    $(".search-content").slideDown(500);
  });
});

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".navbar-1-all").hide(1);
    $("#chat-3").show()
    $(".navbar-1-responsive").fadeToggle(500);
    $(".hamburger-content").fadeToggle(500);
    $(".all-navbar-1-bgcolor").fadeOut(1);
    $(".fiziki").toggle(10);
    $(".mainnn").fadeOut(10);
    $(".chat-icon-2").show()
    $(".all-navbar-2").fadeOut(1);
  });
  $(".responsive-close").click(function () {
    $(".navbar-1-all").fadeToggle(500);
    $(".navbar-1-responsive").hide(1);
    $(".hamburger-content").fadeToggle(1);
    $("#chat-3").hide()
    $(".fiziki").toggle(10);
    $(".all-navbar-2").fadeIn(1);
    $(".all-navbar-1-bgcolor").fadeIn(1);
    $(".mainnn").fadeIn(10);
  });
});

$(document).ready(function () {
  $(".nav-1-button-close").click(function () {
    $(".navbar-1").fadeToggle(510);
    $(".navbar-1-search").slideUp(100);
    $(".search-content").slideUp(10);
    $(".responsive-slider").show(1);
  });
});

$(document).ready(function () {
  $(".slider-menu").mouseover(function () {
    $(".smc-2 > img").css({ transform: "scale(1.1)" });
  });

  $(".mainnn").mouseover(function () {
    t = setTimeout(function () {
      $(".smc-2 > img").css({ transform: "scale(1)" });
    }, 1);

    $(".slider-menu")
      .on("mouseenter", function () {
        $(".smc-2 > img").css({ transform: "scale(1.1)" });
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".smc-2 > img").css({ transform: "scale(1)" });
      });
  });
});

$(document).ready(function () {
  $("#kartlar").mouseover(function () {
    $(".kartlar-dropdown").show();
  });

  $("#kartlar").mouseout(function () {
    t = setTimeout(function () {
      $(".kartlar-dropdown").hide();
    }, 1);

    $(".kartlar-dropdown")
      .on("mouseenter", function () {
        $(".kartlar-dropdown").show();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".kartlar-dropdown").hide();
      });
  });
});
$(document).ready(function () {
  $("#kredit").mouseover(function () {
    $(".kredit-dropdown").show();
  });

  $("#kredit").mouseout(function () {
    t = setTimeout(function () {
      $(".kredit-dropdown").hide();
    }, 1);

    $(".kredit-dropdown")
      .on("mouseenter", function () {
        $(".kredit-dropdown").show();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".kredit-dropdown").hide();
      });
  });
});
$(document).ready(function () {
  $("#depozit").mouseover(function () {
    $(".depozit-dropdown").show();
  });

  $("#depozit").mouseout(function () {
    t = setTimeout(function () {
      $(".depozit-dropdown").hide();
    }, 1);

    $(".depozit-dropdown")
      .on("mouseenter", function () {
        $(".depozit-dropdown").show();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".depozit-dropdown").hide();
      });
  });
});
$(document).ready(function () {
  $("#pul").mouseover(function () {
    $(".pul-dropdown").show();
  });

  $("#pul").mouseout(function () {
    t = setTimeout(function () {
      $(".pul-dropdown").hide();
    }, 1);

    $(".pul-dropdown")
      .on("mouseenter", function () {
        $(".pul-dropdown").show();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".pul-dropdown").hide();
      });
  });
});
$(document).ready(function () {
  $("#xidmetler").mouseover(function () {
    $(".xid-dropdown").show();
  });

  $("#xidmetler").mouseout(function () {
    t = setTimeout(function () {
      $(".xid-dropdown").hide();
    }, 1);

    $(".xid-dropdown")
      .on("mouseenter", function () {
        $(".xid-dropdown").show();
        clearTimeout(t);
      })
      .on("mouseleave", function () {
        $(".xid-dropdown").hide();
      });
  });
});

$(document).ready(function () {
  $(".kartlar").click(function () {
    $("#kartlar-open").toggle(1);
    $("#kartlar-close").toggle(1);
    $(".kartlar-content").slideToggle(300);
    $("#kredit-open").show(1);
    $(".kredit-content").hide(410);
    $("#kredit-close").hide(1);
    $(".depozit-content").hide(10);
    $("#depozit-open").show(1);
    $("#depozit-close").hide(1);
    $("#pul-open").show(10);
    $("#pul-close").hide(10);
    $(".pul-content").hide(410);
    $(".online-content").hide(410);
    $("#online-open").show(10);
    $("#online-close").hide(10);
  });
});

$(document).ready(function () {
  $(".kredit").click(function () {
    $("#kredit-open").toggle(1);
    $(".kredit-content").slideToggle(410);
    $("#kredit-close").toggle(1);
    $(".kartlar-content").hide(10);
    $("#kartlar-open").show(1);
    $("#kartlar-close").hide(1);
    $(".depozit-content").hide(10);
    $("#depozit-open").show(1);
    $("#depozit-close").hide(1);
    $("#pul-open").show(10);
    $("#pul-close").hide(10);
    $(".pul-content").hide(410);
    $(".online-content").hide(410);
    $("#online-open").show(10);
    $("#online-close").hide(10);
  });
});

$(document).ready(function () {
  $(".depozit").click(function () {
    $("#kredit-open").show(1);
    $("#kartlar-close").hide(1);
    $(".kartlar-content").hide(10);
    $(".kredit-content").hide(410);
    $("#kredit-open").show(1);
    $("#kredit-close").hide(1);
    $("#depozit-open").toggle(1);
    $("#depozit-close").toggle(2);
    $(".depozit-content").slideToggle(410);
    $("#pul-open").show(10);
    $("#pul-close").hide(10);
    $(".pul-content").hide(410);
    $(".online-content").hide(410);
    $("#online-open").show(10);
    $("#online-close").hide(10);
  });
});

$(document).ready(function () {
  $(".pul").click(function () {
    $("#kredit-open").show(1);
    $("#kartlar-close").hide(1);
    $(".kartlar-content").hide(10);
    $(".kredit-content").hide(410);
    $("#kredit-open").show(1);
    $("#kredit-close").hide(1);
    $("#depozit-open").show(1);
    $("#depozit-close").hide(2);
    $(".depozit-content").hide(410);
    $("#pul-open").toggle(10);
    $("#pul-close").toggle(10);
    $(".pul-content").slideToggle(410);
    $(".online-content").hide(410);
    $("#online-open").show(10);
    $("#online-close").hide(10);
  });
});

$(document).ready(function () {
  $(".online").click(function () {
    $("#kredit-open").show(1);
    $("#kartlar-close").hide(1);
    $(".kartlar-content").hide(10);
    $(".kredit-content").hide(410);
    $("#kredit-open").show(1);
    $("#kredit-close").hide(1);
    $("#depozit-open").show(1);
    $("#depozit-close").hide(2);
    $(".depozit-content").hide(10);
    $("#pul-open").show(10);
    $("#pul-close").hide(10);
    $(".pul-content").hide(10);
    $(".online-content").slideToggle(410);
    $("#online-open").toggle(10);
    $("#online-close").toggle(10);
  });
});

$(document).ready(function () {
  $(".responsive-search").click(function () {
    $(".navbar-1-responsive").hide(1);
    $(".navbar-1-responsive-src").fadeToggle(1);
    $(".n1s-res-src-content").slideDown(200);
    $(".fiziki").fadeOut(1);
    $(".navbar-2-responsive").fadeOut(1);
    $(".navbar-3-responsive").fadeOut(1);
    $(".responsive-slider").fadeOut(1);
  });
  $(".navbar-1-responsive-src-close").click(function () {
    $(".navbar-1-responsive-src").hide(1);
    $(".navbar-1-responsive").fadeToggle(500);
    $(".n1s-res-src-content").fadeOut(1);
    $(".fiziki").fadeToggle(700);
    $(".navbar-2-responsive").fadeToggle(800);
    $(".navbar-3-responsive").fadeToggle(900);
    $(".responsive-slider").show(1);
  });
});

$(document).ready(function () {
  $("#help-toggle-res").click(function () {
    $(".help-sec-res-all").fadeIn(100);
    $(".mainnn").hide()
    $(".all-head").hide()
  });
  $("#close-help").click(function () {
    $(".help-sec-res-all").hide(100);
    $(".mainnn").show()
    $(".all-head").show()
  });
});

$(document).ready(function () {
  $("#prev-1").click(function () {
    $(".slider-2-1-all").fadeOut(270);
    $(".slider-2-4-all").fadeIn(270);
  });
  $("#next-1").click(function () {
    $(".slider-2-2-all").fadeIn(270);
    $(".slider-2-1-all").fadeOut(270);
  });
  $("#prev-2").click(function () {
    $(".slider-2-2-all").fadeOut(270);
    $(".slider-2-1-all").fadeIn(270);
  });
  $("#next-2").click(function () {
    $(".slider-2-2-all").fadeOut(270);
    $(".slider-2-3-all").fadeIn(270);
  });
  $("#prev-3").click(function () {
    $(".slider-2-3-all").fadeOut(270);
    $(".slider-2-2-all").fadeIn(270);
  });
  $("#next-3").click(function () {
    $(".slider-2-3-all").fadeOut(270);
    $(".slider-2-4-all").fadeIn(270);
  });
  $("#prev-4").click(function () {
    $(".slider-2-4-all").fadeOut(270);
    $(".slider-2-3-all").fadeIn(270);
  });
  $("#next-4").click(function () {
    $(".slider-2-4-all").fadeOut(270);
    $(".slider-2-1-all").fadeIn(270);
  });
});

$(document).ready(function () {
  $("#help-toggle").click(function () {
    $(".section-3-help-all").show();
    $(".mainnn-2").fadeIn();
  });
  $(".mainnn-2").click(function () {
    $(".section-3-help-all").hide();
    $(".mainnn-2").fadeOut();
  });
});

$(document).ready(function () {
  let open = false;
  $("#select-3").on("click", () => {
    if (!open) {
      $("#down-3").fadeOut(1);
      $("#up-3").fadeIn(2);
      // $("#down-3").css({"transform":"rotate(180deg)"})
    } else {
      $("#up-3").fadeOut(1);
      $("#down-3").fadeIn(2);
      // $("#down-3").css({"transform":"rotate(360deg)"})
    }

    open = !open;
  });
});
$(".input-fin > input").click(function () {
  $(".input-fin > input").css("placeholder", { color: "red" });
});

$(document).ready(function () {
  $(".main-number").click(function () {
    $("#all-number").slideToggle(50);
    $("#number-icon-down").fadeToggle(1);
    $("#number-icon-up").fadeToggle(1);
  });
  $("#all-number").click(function () {
    $("#all-number").slideToggle(50);
    $("#number-icon-down").fadeToggle(1);
    $("#number-icon-up").fadeToggle(1);
  });
});
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let mainnumber = document.getElementById("main-number");

num1.onclick = function () {
  mainnumber.innerHTML = "051";
};
num2.onclick = function () {
  mainnumber.innerHTML = "055";
};
num3.onclick = function () {
  mainnumber.innerHTML = "060";
};
num4.onclick = function () {
  mainnumber.innerHTML = "070";
};
num5.onclick = function () {
  mainnumber.innerHTML = "077";
};
num6.onclick = function () {
  mainnumber.innerHTML = "099";
};
num7.onclick = function () {
  mainnumber.innerHTML = "010";
};
let mebleg = document.getElementById("mebleg");
$(document).ready(function () {
  
  $("#kreditcalc").click(function () {
    $(".calc-1").fadeIn(100);
    $(".calc-2-all").fadeOut(1);
    $(".calculator-3").fadeOut(1);
    $(".calc-4").fadeOut(1);
    $("#kreditcalc").css({
      background: "#f45369",
      color: "#fff",
      transition: ".4s",
    });
    $("#birbankcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $("#ipotekacalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $("#depozitcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
  });
  $("#birbankcalc").click(function () {
    $(".calc-1").fadeOut(1);
    $("#kreditcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $(".calc-2-all").fadeIn(100);
    $(".calc-2-all").css({ display: "flex", "justify-content": "space-between" });
    $(".calculator-3").fadeOut(1);
    $(".calc-4").fadeOut(1);
    $("#birbankcalc").css({
      background: "#f45369",
      color: "#fff",
      transition: ".4s",
    });
    $("#ipotekacalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $("#kreditcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $("#depozitcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
  });
  $("#ipotekacalc").click(function () {
    $(".calculator-3").show();
    $(".calc-2-all").hide();
    $(".calc-1").hide();
    $(".calc-4").hide();
    $("#kreditcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $("#birbankcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $("#ipotekacalc").css({
      background: "#f45369",
      color: "#fff",
      transition: ".4s",
    });
    $("#depozitcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $("#kreditcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
  });
  $("#depozitcalc").click(function () {
    $(".calculator-3").hide();
    $(".calc-2-all").hide();
    $(".calc-1").hide();
    $(".calc-4").show();
    $("#kreditcalc").css({
      background:  "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $("#birbankcalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
    $("#depozitcalc").css({
      background: "#f45369",
      color: "#fff",
      transition: ".4s",
    });
    $("#ipotekacalc").css({
      background: "#e8ecf1",
      color: "#000",
      transition: ".4s",
    });
  });
});
// calculator 1
document.getElementById("allrange").innerHTML = ((document.getElementById("valuekredit").value /  document.getElementById("valuemonth").value +(((document.getElementById("valuekredit").value /  document.getElementById("valuemonth").value))*0.0338374))).toFixed(2)
document.getElementById("allrangebirbank").innerHTML = ((document.getElementById("valuekredit").value /  document.getElementById("valuemonth").value +(((document.getElementById("valuekredit").value /  document.getElementById("valuemonth").value))*0.0338374))).toFixed(2)

function show_value1(x) {
  document.getElementById("mebleg").value = x;
  let k = 0;
  if (+document.getElementById("valuemonth").value === 3) {
    k = 0.0338374;
  } else if (+document.getElementById("valuemonth").value === 4) {
    k = 0.042413;
  } else if (+document.getElementById("valuemonth").value === 5) {
    k = 0.051036;
  } else if (+document.getElementById("valuemonth").value === 6) {
    k = 0.059706;
  } else if (+document.getElementById("valuemonth").value === 7) {
    k = 0.068422;
  } else if (+document.getElementById("valuemonth").value === 8) {
    k = 0.0771859;
  } else if (+document.getElementById("valuemonth").value === 9) {
    k = 0.085995;
  } else if (+document.getElementById("valuemonth").value === 10) {
    k = 0.094852;
  } else if (+document.getElementById("valuemonth").value === 11) {
    k = 0.10375649;
  } else if (+document.getElementById("valuemonth").value === 12) {
    k = 0.1127044;
  } else if (+document.getElementById("valuemonth").value === 13) {
    k = 0.1531047;
  } else if (+document.getElementById("valuemonth").value === 14) {
    k = 0.16458;
  } else if (+document.getElementById("valuemonth").value === 15) {
    k = 0.174978;
  } else if (+document.getElementById("valuemonth").value === 16) {
    k = 0.187757;
  } else if (+document.getElementById("valuemonth").value === 17) {
    k = 0.199455;
  } else if (+document.getElementById("valuemonth").value === 18) {
    k = 0.211217;
  } else if (+document.getElementById("valuemonth").value === 19) {
    k = 0.223059;
  } else if (+document.getElementById("valuemonth").value === 20) {
    k = 0.234966;
  } else if (+document.getElementById("valuemonth").value === 21) {
    k = 0.246953;
  } else if (+document.getElementById("valuemonth").value === 22) {
    k = 0.259007;
  } else if (+document.getElementById("valuemonth").value === 23) {
    k = 0.271127;
  } else if (+document.getElementById("valuemonth").value === 24) {
    k = 0.283328;
  } else if (+document.getElementById("valuemonth").value === 25) {
    k = 0.317126;
  } else if (+document.getElementById("valuemonth").value === 26) {
    k = 0.330423;
  } else if (+document.getElementById("valuemonth").value === 27) {
    k = 0.343804;
  } else if (+document.getElementById("valuemonth").value === 28) {
    k = 0.357258;
  } else if (+document.getElementById("valuemonth").value === 29) {
    k = 0.370801;
  } else if (+document.getElementById("valuemonth").value === 30) {
    k = 0.384421;
  } else if (+document.getElementById("valuemonth").value === 31) {
    k = 0.398111;
  } else if (+document.getElementById("valuemonth").value === 32) {
    k = 0.411892;
  } else if (+document.getElementById("valuemonth").value === 33) {
    k = 0.425747;
  } else if (+document.getElementById("valuemonth").value === 34) {
    k = 0.439671;
  } else if (+document.getElementById("valuemonth").value === 35) {
    k = 0.453688;
  } else if (+document.getElementById("valuemonth").value === 36) {
    k = 0.467779;
  } else if (+document.getElementById("valuemonth").value === 37) {
    k = 0.0500736;
  } else if (+document.getElementById("valuemonth").value === 38) {
    k = 0.51559;
  } else if (+document.getElementById("valuemonth").value === 39) {
    k = 0.530517;
  } else if (+document.getElementById("valuemonth").value === 40) {
    k = 0.545522;
  } else if (+document.getElementById("valuemonth").value === 41) {
    k = 0.560616;
  } else if (+document.getElementById("valuemonth").value === 42) {
    k = 0.575783;
  } else if (+document.getElementById("valuemonth").value === 43) {
    k = 0.591048;
  } else if (+document.getElementById("valuemonth").value === 44) {
    k = 0.606377;
  } else if (+document.getElementById("valuemonth").value === 45) {
    k = 0.621796;
  } else if (+document.getElementById("valuemonth").value === 46) {
    k = 0.637291;
  } else if (+document.getElementById("valuemonth").value === 47) {
    k = 0.652856;
  } else if (+document.getElementById("valuemonth").value === 48) {
    k = 0.668519;
  } else if (+document.getElementById("valuemonth").value === 49) {
    k = 0.684247;
  } else if (+document.getElementById("valuemonth").value === 50) {
    k = 0.700055;
  } else if (+document.getElementById("valuemonth").value === 51) {
    k = 0.71594;
  } else if (+document.getElementById("valuemonth").value === 52) {
    k = 0.73191;
  } else if (+document.getElementById("valuemonth").value === 53) {
    k = 0.747951;
  } else if (+document.getElementById("valuemonth").value === 54) {
    k = 0.764067;
  } else if (+document.getElementById("valuemonth").value === 55) {
    k = 0.780255;
  } else if (+document.getElementById("valuemonth").value === 56) {
    k = 0.796534;
  } else if (+document.getElementById("valuemonth").value === 57) {
    k = 0.812876;
  } else if (+document.getElementById("valuemonth").value === 58) {
    k = 0.829294;
  } else if (+document.getElementById("valuemonth").value === 59) {
    k = 0.845797;
  } else if (+document.getElementById("valuemonth").value === 60) {
    k = 0.862373;
  }
  let z = (
    x / document.getElementById("valuemonth").value +
    (x / document.getElementById("valuemonth").value) * k
  ).toFixed(2);
  console.log(z);
  document.getElementById("allrange").innerHTML = z;
}
function show_value2(y) {
  document.getElementById("muddet").value = y;
  let k = 0;
  if (+y === 3) {
    k = 0.0338374;
  } else if (+y === 4) {
    k = 0.042413;
  } else if (+y === 5) {
    k = 0.051036;
  } else if (+y === 6) {
    k = 0.059706;
  } else if (+y === 7) {
    k = 0.068422;
  } else if (+y === 8) {
    k = 0.0771859;
  } else if (+y === 9) {
    k = 0.085995;
  } else if (+y === 10) {
    k = 0.094852;
  } else if (+y === 11) {
    k = 0.10375649;
  } else if (+y === 12) {
    k = 0.1127044;
  } else if (+y === 13) {
    k = 0.1531047;
  } else if (+y === 14) {
    k = 0.16458;
  } else if (+y === 15) {
    k = 0.174978;
  } else if (+y === 16) {
    k = 0.187757;
  } else if (+y === 17) {
    k = 0.199455;
  } else if (+y === 18) {
    k = 0.211217;
  } else if (+y === 19) {
    k = 0.223059;
  } else if (+y === 20) {
    k = 0.234966;
  } else if (+y === 21) {
    k = 0.246953;
  } else if (+y === 22) {
    k = 0.259007;
  } else if (+y === 23) {
    k = 0.271127;
  } else if (+y === 24) {
    k = 0.283328;
  } else if (+y === 25) {
    k = 0.317126;
  } else if (+y === 26) {
    k = 0.330423;
  } else if (+y === 27) {
    k = 0.343804;
  } else if (+y === 28) {
    k = 0.357258;
  } else if (+y === 29) {
    k = 0.370801;
  } else if (+y === 30) {
    k = 0.384421;
  } else if (+y === 31) {
    k = 0.398111;
  } else if (+y === 32) {
    k = 0.411892;
  } else if (+y === 33) {
    k = 0.425747;
  } else if (+y === 34) {
    k = 0.439671;
  } else if (+y === 35) {
    k = 0.453688;
  } else if (+y === 36) {
    k = 0.467779;
  } else if (+y === 37) {
    k = 0.0500736;
  } else if (+y === 38) {
    k = 0.51559;
  } else if (+y === 39) {
    k = 0.530517;
  } else if (+y === 40) {
    k = 0.545522;
  } else if (+y === 41) {
    k = 0.560616;
  } else if (+y === 42) {
    k = 0.575783;
  } else if (+y === 43) {
    k = 0.591048;
  } else if (+y === 44) {
    k = 0.606377;
  } else if (+y === 45) {
    k = 0.621796;
  } else if (+y === 46) {
    k = 0.637291;
  } else if (+y === 47) {
    k = 0.652856;
  } else if (+y === 48) {
    k = 0.668519;
  } else if (+y === 49) {
    k = 0.684247;
  } else if (+y === 50) {
    k = 0.700055;
  } else if (+y === 51) {
    k = 0.71594;
  } else if (+y === 52) {
    k = 0.73191;
  } else if (+y === 53) {
    k = 0.747951;
  } else if (+y === 54) {
    k = 0.764067;
  } else if (+y === 55) {
    k = 0.780255;
  } else if (+y === 56) {
    k = 0.796534;
  } else if (+y === 57) {
    k = 0.812876;
  } else if (+y === 58) {
    k = 0.829294;
  } else if (+y === 59) {
    k = 0.845797;
  } else if (+y === 60) {
    k = 0.862373;
  }

  let b = (
    +document.getElementById("valuekredit").value / y +
    (+document.getElementById("valuekredit").value / +y) * k
  ).toFixed(2);

  document.getElementById("allrange").innerHTML = b;
}
// calculator 2

$(document).ready(function () {
  let open = false;
  $(".switchh-2").click(function () {
    if (!open) {
      $(".switchh-3").css({ left: "25px", transition: ".4s" });
      // $("#calc-4-usd").css({"visibility":"visible"})
    } else {
      $(".switchh-3").css({ left: "5px", transition: ".4s" });
      // $("#calc-4-usd").css({"visibility":"hidden"})
    }
    open = !open;
    $("#allrangebirbank").toggle();
    $("#allrangebirbankswitch").toggle();
    $(".plus-content").toggle();
  });
});

function birbank_1(h) {
  document.getElementById("meblegbribank").value = h;
  let k = "";
  if (+document.getElementById("birbankmonth").value === 3) {
    k = 0.05758;
  } else if (+document.getElementById("birbankmonth").value === 4) {
    k = 0.6909;
  } else if (+document.getElementById("birbankmonth").value === 5) {
    k = 0.08;
  } else if (+document.getElementById("birbankmonth").value === 6) {
    k = 0.0905;
  } else if (+document.getElementById("birbankmonth").value === 7) {
    k = 0.102181;
  } else if (+document.getElementById("birbankmonth").value === 8) {
    k = 0.112727;
  } else if (+document.getElementById("birbankmonth").value === 9) {
    k = 0.124181;
  } else if (+document.getElementById("birbankmonth").value === 10) {
    k = 0.136363;
  } else if (+document.getElementById("birbankmonth").value === 11) {
    k = 0.148;
  } else if (+document.getElementById("birbankmonth").value === 12) {
    k = 0.1531047;
  } else if (+document.getElementById("birbankmonth").value === 13) {
    k = 0.17;
  } else if (+document.getElementById("birbankmonth").value === 14) {
    k = 0.18109;
  } else if (+document.getElementById("birbankmonth").value === 15) {
    k = 0.194545;
  } else if (+document.getElementById("birbankmonth").value === 16) {
    k = 0.204363;
  } else if (+document.getElementById("birbankmonth").value === 17) {
    k = 0.217818;
  } else if (+document.getElementById("birbankmonth").value === 18) {
    k = 0.230545;
  } else if (+document.getElementById("birbankmonth").value === 19) {
    k = 0.240181;
  } else if (+document.getElementById("birbankmonth").value === 20) {
    k = 0.253;
  } else if (+document.getElementById("birbankmonth").value === 21) {
    k = 0.263818;
  } else if (+document.getElementById("birbankmonth").value === 22) {
    k = 0.276;
  } else if (+document.getElementById("birbankmonth").value === 23) {
    k = 0.288;
  } else if (+document.getElementById("birbankmonth").value === 24) {
    k = 0.300363;
  }
  let q = Math.ceil(
    h / document.getElementById("birbankmonth").value +
      (h / document.getElementById("birbankmonth").value) * k
  ).toFixed(0);
  console.log(q);
  document.getElementById("allrangebirbank").innerHTML = q;
  document.getElementById("allrangebirbank-2").innerHTML = q;
  document.getElementById("allrangebirbankswitch").innerHTML = (
    h / document.getElementById("birbankmonth").value
  ).toFixed(2);
  document.getElementById("ayliq").innerHTML = (
    +document.getElementById("birbankkredit").value / 13.91
  ).toFixed(0);
}

function birbank_2(y) {
  document.getElementById("muddetbirbank").value = y;
  let k = 0;
  if (+y === 3) {
    k = 0.05758;
  } else if (+y === 4) {
    k = 0.6909;
  } else if (+y === 5) {
    k = 0.08;
  } else if (+y === 6) {
    k = 0.0905;
  } else if (+y === 7) {
    k = 0.102181;
  } else if (+y === 8) {
    k = 0.112727;
  } else if (+y === 9) {
    k = 0.124181;
  } else if (+y === 10) {
    k = 0.136363;
  } else if (+y === 11) {
    k = 0.1489;
  } else if (+y === 12) {
    k = 0.1531047;
  } else if (+y === 13) {
    k = 0.17;
  } else if (+y === 14) {
    k = 0.18109;
  } else if (+y === 15) {
    k = 0.194545;
  } else if (+y === 16) {
    k = 0.204363;
  } else if (+y === 17) {
    k = 0.2177;
  } else if (+y === 18) {
    k = 0.230545;
  } else if (+y === 19) {
    k = 0.240181;
  } else if (+y === 20) {
    k = 0.253;
  } else if (+y === 21) {
    k = 0.263818;
  } else if (+y === 22) {
    k = 0.276;
  } else if (+y === 23) {
    k = 0.288;
  } else if (+y === 24) {
    k = 0.300363;
  }
  if (+y >= 18) {
    document.getElementById("calc-2-content-plus").style.display = "block";
    document.getElementById("calc-2-content-2-button").style.bottom = "35%"
  } else {
    document.getElementById("calc-2-content-plus").style.display = "none";
    document.getElementById("calc-2-content-2-button").style.bottom = "10%"
  }
  let b = Math.ceil(
    +document.getElementById("birbankkredit").value / y +
      (+document.getElementById("birbankkredit").value / +y) * k
  ).toFixed(0);
  document.getElementById("allrangebirbank").innerHTML = b;
  document.getElementById("allrangebirbank-2").innerHTML = b;
  document.getElementById("allrangebirbankswitch").innerHTML = (
    +document.getElementById("birbankkredit").value / y
  ).toFixed(2);
}
// calculator 3
$(document).ready(function () {
  let open = false;
  $(".menzil-all").click(function () {
    $(".menzil").toggle(10);
    $(".gelir").hide(10);
    if (!open) {
      $(".menzil-all").css({ border: "1px solid #c5cace", "z-index": "5" });
      $(".menzil-head").css({
        "border-bottom-left-radius": "0",
        "border-bottom-right-radius": "0",
      });
      $("#up-4").show();
      $("#down-4").hide();
    } else {
      $("#up-4").hide();
      $("#down-4").show();
      $(".menzil-all").css({ border: "none" });
      $(".menzil-head").css({
        "border-bottom-left-radius": "12px",
        "border-bottom-right-radius": "12px",
      });
    }
    open = !open;
  });
  let open2 = false;
  let open3 = false;
  let open4 = false;
  $("#cixarisli").click(function () {
    $("#cixarisli").toggle();
    $("#cixarissiz").show();
    $("#menzil-senedi").show();
    $("#selected-menzil").html("Çıxarışlı");
    $("#selected-menzil").css({ color: "#000" });
  });
  $("#cixarissiz").click(function () {
    $("#cixarisli").show();
    $("#cixarissiz").toggle();
    $("#menzil-senedi").show();
    $("#selected-menzil").html("Çıxarışsız");
    $("#selected-menzil").css({ color: "#000" });
  });
  open3 = !open3;
  open4 = !open4;
  $(".gelir-all").click(function () {
    $(".gelir").slideToggle(10);
    $(".menzil").hide();
    if (!open2) {
      $(".gelir-all").css({ border: "1px solid #c5cace", "z-index": "4" });
      $(".gelir-head").css({
        "border-bottom-left-radius": "0",
        "border-bottom-right-radius": "0",
      });
      $("#up-4").show();
      $("#down-4").hide();
    } else {
      $("#up-4").hide();
      $("#down-4").show();
      $(".gelir-all").css({ border: "none" });
      $(".gelir-head").css({
        "border-bottom-left-radius": "12px",
        "border-bottom-right-radius": "12px",
      });
    }
    open2 = !open2;
  });
  $("#stabil").click(function () {
    $("#stabil").toggle();
    $("#diger-gelir").show();
    $("#Gəlir-məlumati").show();
    $("#selected-gelir").html("Rəsmi gəlir");
    $("#selected-gelir").css({ color: "#000" });
    $("#ipoteka-min-ilkin-odenis").show();
    $("#ipoteka-min-ilkin-odenis-2").hide();
    $("#ayliq-odenis-1").show()
    $("#ayliq-odenis-2").hide()

  });
  $("#diger-gelir").click(function () {
    $("#stabil").show();
    $("#diger-gelir").toggle();
    $("#Gəlir-məlumati").show();
    $("#selected-gelir").html("Digər gəlir mənbələri");
    $("#selected-gelir").css({ color: "#000" });
    $("#ipoteka-min-ilkin-odenis").hide();
    $("#ipoteka-min-ilkin-odenis-2").show();
    $(".ipo-reqem-2").show()
    $(".ipo-reqem-1").hide()
    $("#ayliq-odenis-1").hide()
    $("#ayliq-odenis-2").show()
    
  });
  $(".scroll-2-ipoteka-head").click(function () {
    $("#ipo-mud").css({ "font-size": "14px", top: "10px","transition":".04s" });
    $("#muddetbirbank-ipo").show(40);
  });
  // $(".ipoteka-qiymet").click(function(){
  //   $("#input-menzil-deyeri").hide()
  // })
  // $(".ipoteka-ilkin-odenis").click(function(){

  //   $("#input-menzil-deyeri").show()
  // })
});

let inputt = document.getElementById("menzil-deyeri");
inputt.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {

    if(+document.getElementById("menzil-deyeri").value <= 250000 && +document.getElementById("menzil-deyeri").value >= 0){

      if (
        +document.getElementById("ilkin-odenis").value >
          +document.getElementById("menzil-deyeri").value * +0.3 &&
        document.getElementById("ilkin-odenis").value <
          document.getElementById("menzil-deyeri").value - 30000
      ) {
        document.getElementById("ilkin-ones-p-1").innerHTML =
          "Min - " + +document.getElementById("menzil-deyeri").value * + 0.3;
      } else if (
        document.getElementById("ilkin-odenis").value >
        document.getElementById("menzil-deyeri").value - +30000
      ) {
        document.getElementById("ilkin-ones-p-1").innerHTML =
          "Max - " + ((+document.getElementById("menzil-deyeri").value) - (+30000));
        console.log("123");
      }
      else if( +document.getElementById("ilkin-odenis").value <
      +document.getElementById("menzil-deyeri").value * +0.3 ){
        document.getElementById("ilkin-ones-p-1").innerHTML =
          "Min - " + +document.getElementById("menzil-deyeri").value * + 0.3;
      }
    
      }
      // 2 ci min ve max qiymet ucun


      if(+document.getElementById("menzil-deyeri").value <= 250000 && +document.getElementById("menzil-deyeri").value >= 0){
 if (
        +document.getElementById("ilkin-odenis").value >
          +document.getElementById("menzil-deyeri").value * +0.5 &&
        document.getElementById("ilkin-odenis").value <
          document.getElementById("menzil-deyeri").value - 30000
      ) {
        document.getElementById("ilkin-ones-p-2").innerHTML =
          "Min - " + +document.getElementById("menzil-deyeri").value * + 0.5;
      }
      else if (
        document.getElementById("ilkin-odenis").value >
        document.getElementById("menzil-deyeri").value - +30000
      ) {
        document.getElementById("ilkin-ones-p-2").innerHTML =
          "Max - " + ((+document.getElementById("menzil-deyeri").value) - (+30000));
        console.log("123");
      }
      else if( +document.getElementById("ilkin-odenis").value <
      +document.getElementById("menzil-deyeri").value * (+0.5) ){
        document.getElementById("ilkin-ones-p-2").innerHTML =
          "Min - " + +document.getElementById("menzil-deyeri").value * (+0.5);
      }
        }
    
  }
});
let inputt2 = document.getElementById("ilkin-odenis");
inputt2.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if(+document.getElementById("menzil-deyeri").value <= 250000 && +document.getElementById("menzil-deyeri").value >= 0){

      if (
        +document.getElementById("ilkin-odenis").value >
          +document.getElementById("menzil-deyeri").value * +0.3 &&
        document.getElementById("ilkin-odenis").value <
          document.getElementById("menzil-deyeri").value - 30000
      ) {
        document.getElementById("ilkin-ones-p-1").innerHTML =
          "Min - " + +document.getElementById("menzil-deyeri").value * + 0.3;
      } else if (
        document.getElementById("ilkin-odenis").value >
        document.getElementById("menzil-deyeri").value - +30000
      ) {
        document.getElementById("ilkin-ones-p-1").innerHTML =
          "Max - " + ((+document.getElementById("menzil-deyeri").value) - (+30000));
        console.log("123");
      }
      else if( +document.getElementById("ilkin-odenis").value <
      +document.getElementById("menzil-deyeri").value * +0.3 ){

        document.getElementById("ilkin-ones-p-1").innerHTML =
          "Min - " + +document.getElementById("menzil-deyeri").value * + 0.3;
     
      }
  
    }
       // 2 ci min ve max qiymet ucun


       if(+document.getElementById("menzil-deyeri").value <= 250000 && +document.getElementById("menzil-deyeri").value >= 0){
        if (
               +document.getElementById("ilkin-odenis").value >
                 +document.getElementById("menzil-deyeri").value * +0.5 &&
               document.getElementById("ilkin-odenis").value <
                 document.getElementById("menzil-deyeri").value - 30000
             ) {
               document.getElementById("ilkin-ones-p-2").innerHTML =
                 "Min - " + +document.getElementById("menzil-deyeri").value * + 0.5;
             }
             else if (
               document.getElementById("ilkin-odenis").value >
               document.getElementById("menzil-deyeri").value - +30000
             ) {
               document.getElementById("ilkin-ones-p-2").innerHTML =
                 "Max - " + ((+document.getElementById("menzil-deyeri").value) - (+30000));
               console.log("123");
             }
             else if( +document.getElementById("ilkin-odenis").value <
             +document.getElementById("menzil-deyeri").value * (+0.5) ){
               document.getElementById("ilkin-ones-p-2").innerHTML =
                 "Min - " + +document.getElementById("menzil-deyeri").value * (+0.5);
             }
               }
  
}
});

//  document.getElementById("ipoteka-calc").onclick = () => {
//  if(((+document.getElementById("ilkin-odenis").value) >= +document.getElementById("menzil-deyeri").value * +0.3)&&(+document.getElementById("ilkin-odenis").value) <= +document.getElementById("menzil-deyeri").value - 030000){
//   u = ( +document.getElementById("menzil-deyeri").value ) - (+document.getElementById("ilkin-odenis").value);
//   document.getElementById("ferq-ipo").innerHTML = u
//   console.log(u);
//  }
//  }

function birbank_ipoteka(x) {
    document.getElementById("muddetbirbank-ipo").value = +x;
    document.getElementById("ipo-reqem-1").innerHTML = 10
    document.getElementById("ipo-reqem-2").innerHTML = 11.5
    if (
      +document.getElementById("ilkin-odenis").value >=
        +document.getElementById("menzil-deyeri").value * +0.3 &&
      +document.getElementById("ilkin-odenis").value <=
        +document.getElementById("menzil-deyeri").value - 030000
    ) {
      let c =
        +document.getElementById("menzil-deyeri").value -
        +document.getElementById("ilkin-odenis").value;
      console.log(c);
      document.getElementById("ferq-ipo").innerHTML = c;
      x = +x;
      if (+x === 3) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.16161914
        ).toFixed(2);
        console.log("mihiugyufyu");
      } else if (x === 4) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.217412
        ).toFixed(2);
        console.log("5658");
      } else if (x === 5) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          ((c / (x * 12)) * 0.27482)
        ).toFixed(2);
      } else if (x === 6) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.3338576
        ).toFixed(2);
      } else if (x === 7) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.3945008
        ).toFixed(2);
      } else if (x === 8) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.4567232
        ).toFixed(2);
      } else if (x === 9) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.5204996
        ).toFixed(2);
      } else if (x === 10) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.58581
        ).toFixed(2);
      } else if (x === 11) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.6526268
        ).toFixed(2);
      } else if (x === 12) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.7209152
        ).toFixed(2);
      } else if (x === 13) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.790646
        ).toFixed(2);
      } else if (x === 14) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.861776
        ).toFixed(2);
      } else if (x === 15) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.934292
        ).toFixed(2);
      } else if (x === 16) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.008128
        ).toFixed(2);
      } else if (x === 17) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.0832684
        ).toFixed(2);
      } else if (x === 18) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.1596634
        ).toFixed(2);
      } else if (x === 19) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.2372728
        ).toFixed(2);
      } else if (x === 20) {
        document.getElementById("ayliq-odenis-1").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.316048
        ).toFixed(2);
      }
    }
    if (
      +document.getElementById("ilkin-odenis").value >=
        +document.getElementById("menzil-deyeri").value * +0.3 &&
      +document.getElementById("ilkin-odenis").value <=
        +document.getElementById("menzil-deyeri").value - 030000
    ) {
      let c =
        +document.getElementById("menzil-deyeri").value -
        +document.getElementById("ilkin-odenis").value;
      console.log(c);
      document.getElementById("ferq-ipo").innerHTML = c;
      x = +x;
      if (+x === 3) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.187136
        ).toFixed(2);
        console.log("mihiugyufyu");
      } else if (x === 4) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.252272
        ).toFixed(2);
        console.log("5658");
      } else if (x === 5) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          ((c / (x * 12)) * 0.3195533)
        ).toFixed(2);
      } else if (x === 6) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.38896
        ).toFixed(2);
      } else if (x === 7) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.46046133
        ).toFixed(2);
      } else if (x === 8) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.534016
        ).toFixed(2);
      } else if (x === 9) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.609596
        ).toFixed(2);
      } else if (x === 10) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.687146
        ).toFixed(2);
      } else if (x === 11) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.766629
        ).toFixed(2);
      } else if (x === 12) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.847968
        ).toFixed(2);
      } else if (x === 13) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 0.9311586
        ).toFixed(2);
      } else if (x === 14) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.016093
        ).toFixed(2);
      } else if (x === 15) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.10274
        ).toFixed(2);
      } else if (x === 16) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.19104
        ).toFixed(2);
      } else if (x === 17) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.280924
        ).toFixed(2);
      } else if (x === 18) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.372328
        ).toFixed(2);
      } else if (x === 19) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.465186
        ).toFixed(2);
      } else if (x === 20) {
        document.getElementById("ayliq-odenis-2").innerHTML = (
          c / (x * 12) +
          (c / (x * 12)) * 1.55944
        ).toFixed(2);
      }
    }
  };
$(document).ready(function(){
  let usdodenis = document.getElementById("calc-4-mebleg").value
  let openValyuta = false
  $(".valyuta-dropdown").click(function(){
    if(!openValyuta){
      $(".valyuta-dropdown").css({"height":"52px"})
      $("#calc4-down").hide()
      $("#calc-4-azn").css({"margin":"0 0 0 0"})
      $("#calc-4-usd").css({"margin":"15px 0 0 0"})
      $("#calc4-up").show()
    }
    else{
      $(".valyuta-dropdown").css({"height":"40px"})
      $("#calc-4-azn").css({"margin":"5px 0 0 0"})
      $("#calc4-down").show()
      $("#calc4-up").hide()
    }
    openValyuta = !openValyuta
  })
  let openvalswitch = false 
  $(".switchh-1").click(function(){
    if(!openvalswitch){
      $(".calc4-ayliq-faiz").hide()
      $("#ayliq-faiz-geliri").hide()
      $("#qiymet-calc4").hide()
      $("#calc-2-content-head").html("Aylıq ödəniş")
    }
    else{
      $(".calc4-ayliq-faiz").show()
      $("#ayliq-faiz-geliri").show()
      $("#qiymet-calc4").show()
      $("#calc-2-content-head").html("Təqribi aylıq ödəniş ")

      
    }
    openvalswitch = !openvalswitch
  })
  let openswitch = false 
  $(".switchh-1").click(function(){
    if(!openswitch){
      let op = false
      $("#qiymet-calc4").hide()
      $("#qiymet-calc4-2").show()
      $("#calc4-faiz").hide()
      $("#calc-faiz-2").show()
      $(".valyuta-dropdown").click(function(){
        console.log(openswitch);
        if(!op){
          $(".valyuta-dropdown").css({"height":"85px"})
          $("#calc4-down").hide()
          $("#calc-4-azn").css({"margin":"0 0 0 0"})
          $("#calc-4-usd").css({"margin":"15px 0 0 0"})
          $("#calc4-up").show()
          $("#calc-4-usd").show()
         
        }
        else{
          $(".valyuta-dropdown").css({"height":"40px"})
          $("#calc-4-azn").css({"margin":"5px 0 0 0"})
          $("#calc4-down").show()
          $("#calc4-up").hide()
          $("#calc-4-usd").hide()
          
        }
        op = !op
      })
   let openusd = false
   $("#calc-4-usd").click(function(){
    if(!openusd){
    $("#calc-4-usd").html("AZN")
    $("#calc-4-azn").html("USD")
    console.log(usdodenis);
    $("#calc-faiz-2").html("0.1")
    $("#qiymet-calc4-2").html((usdodenis/1000).toFixed(2))
    $("#qiymet-calc4-2").show()
    console.log(op);
    }
    else{
      $("#calc-4-usd").html("USD")
      $("#calc-4-azn").html("AZN")
      $("#qiymet-calc4-2").show()
      console.log("azn");
    }
    openusd = !openusd
  })
    }
    else{
      $("#calc4-faiz").hide()
      $("#calc-faiz-2").show()
      $("#qiymet-calc4").show()
      $("#qiymet-calc4-2").hide()
    }
    openswitch = !openswitch
  })
})

  let inputt5 = document.getElementById("calc-4-mebleg");
inputt5.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
  if(+document.getElementById("calc-4-mebleg").value < 501){
    document.getElementById("calc-4-mebleg").value = "500"
  }
}
})
document.getElementById("qiymet-calc4-2").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 6.5)/100).toFixed(2)
document.getElementById("qiymet-calc4").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 6)/100).toFixed(2)
  function birbank_depozit(x){
    if(+x === 12){
      document.getElementById("muddetbirbank-dep").innerHTML = "12" 
      document.getElementById("calc4-faiz").innerHTML = "6"
      document.getElementById("calc-faiz-2").innerHTML = "6.5"
      document.getElementById("qiymet-calc4").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 6)/100).toFixed(2)
      document.getElementById("qiymet-calc4-2").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 6.5)/100).toFixed(2)
      document.getElementById("ayliq-faiz-calc-4").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 6)/(100*12)).toFixed(2)

    }
    else if(+x === 20){
      document.getElementById("muddetbirbank-dep").innerHTML = "18" 
      document.getElementById("calc4-faiz").innerHTML = "6.5"
      document.getElementById("calc-faiz-2").innerHTML = "7"
      document.getElementById("qiymet-calc4").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 9.75)/100).toFixed(2)
      document.getElementById("qiymet-calc4-2").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 10.5)/100).toFixed(2)
      document.getElementById("ayliq-faiz-calc-4").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 0.0975)/18).toFixed(2)

    } 
  
    
    else if(+x === 28){
      document.getElementById("muddetbirbank-dep").innerHTML = "24" 
      document.getElementById("calc4-faiz").innerHTML = "7"
      document.getElementById("calc-faiz-2").innerHTML = "7.5"
      document.getElementById("qiymet-calc4").innerHTML = (+document.getElementById("calc-4-mebleg").value * 0.14).toFixed(2)
      document.getElementById("qiymet-calc4-2").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 15)/100).toFixed(2)
      document.getElementById("ayliq-faiz-calc-4").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 0.14)/24).toFixed(2)
   
    }
    else if(+x === 36){
      document.getElementById("muddetbirbank-dep").innerHTML= "36"
      document.getElementById("calc4-faiz").innerHTML = "7.5" 
      document.getElementById("calc-faiz-2").innerHTML = "8" 
      document.getElementById("qiymet-calc4").innerHTML = (+document.getElementById("calc-4-mebleg").value * 0.225 ).toFixed(2)
      document.getElementById("qiymet-calc4-2").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 24 )/100).toFixed(2)
      document.getElementById("ayliq-faiz-calc-4").innerHTML = ((+document.getElementById("calc-4-mebleg").value * 0.225 )/36).toFixed(2)
    
    }

    
  }
  $(document).ready(function(){
    $("#mebleg").change(function(){
      $("#valuekredit").val($("#mebleg").val())
    })
    $("#muddet").change(function(){
      $("#valuemonth").val($("#muddet").val())
    })
    $("#meblegbribank").change(function(){
      $("#birbankkredit").val($("#meblegbribank").val())
    })
    $("#muddetbirbank").change(function(){
      $("#birbankmonth").val($("#muddetbirbank").val())
    })

    let inputfinbg = false
    $(".dropup").click(function(){
      if(!inputfinbg){
      $(".input-fin").css({"background-color":"rgb(252, 252, 252)","width":"100%"})
      }
      else{
        $(".input-fin").css({"background-color":"#fff","width":"100%"})
        }
    })
    let openvalyuta7 = false
    $("#valuyta-7-input").change(function(){
      $("#valyuta-1-sec-7").html((($("#valuyta-7-input").val())* 0.58757).toFixed(2))
      $("#valyuta-1-sec-7-2").html((($("#valuyta-7-input").val())* 0.5607 ).toFixed(2))
    })
    $("#valyuta-1-sec-7").html((($("#valuyta-7-input").val())* 0.58757).toFixed(2))
    $("#valyuta-1-sec-7-2").html((($("#valuyta-7-input").val())* 0.5607 ).toFixed(2))
    $(".azn-7").click(function(){
      $("#valuyta-7-input").change(function(){
        $("#valyuta-1-sec-7").html((($("#valuyta-7-input").val())* 0.58757).toFixed(2))
        $("#valyuta-1-sec-7-2").html((($("#valuyta-7-input").val())* 0.5607 ).toFixed(2))
      })
      if(!openvalyuta7){
        $(".sec-7-2-valyuta").css({"height":"117px","background":"#fff"})
        $(".usd-7").show()
        $(".eur-7").show()
        $(".azn-7").show()
        $(".azn-7").css({"top":"0px"})
        $(".usd-7").css({"top":"35px","left":"0"})
        $(".eur-7").css({"top":"67px","left":"0"})
        $("#valuyta-7-input").change(function(){
          $("#valyuta-1-sec-7").html((($("#valuyta-7-input").val())* 0.58757).toFixed(2))
          $("#valyuta-1-sec-7-2").html((($("#valuyta-7-input").val())* 0.5607 ).toFixed(2))
        })
      }
      else{
        $(".sec-7-2-valyuta").css({"height":"40px","background":"#fff"})
        $(".usd-7").hide()
        $(".eur-7").hide()
        $(".azn-7").css({"top":"0px"})
      }
      openvalyuta7 = !openvalyuta7
    })
   
   $(".usd-7").click(function(){
    console.log("afefa");
    $("#valyuta-change-1").html("AZN")
    $("#valyuta-change-2").html("EUR")
    console.log("afefa");
    $("#valuyta-7-input").change(function(){
      $("#valyuta-1-sec-7").html((($("#valuyta-7-input").val())* 1.7020).toFixed(2))
      $("#valyuta-1-sec-7-2").html((($("#valuyta-7-input").val())* 0.9543 ).toFixed(2))
    })
    $("#valyuta-1-sec-7").html((($("#valuyta-7-input").val())* 1.7020).toFixed(2))
    $("#valyuta-1-sec-7-2").html((($("#valuyta-7-input").val())* 0.9543 ).toFixed(2))
    if(!openvalyuta7){
      $(".sec-7-2-valyuta").css({"height":"117px","background":"#fff"})
      $(".usd-7").show()
      $(".eur-7").show()
      $(".azn-7").show()
      $(".azn-7").css({"top":"35px","left":"0"})
      $(".usd-7").css({"top":"0px"})
      $(".eur-7").css({"top":"67px","left":"0"})
      $("#valyuta-change-1").html("AZN")
      $("#valyuta-change-2").html("EUR")
      console.log("afefa");
      $("#valuyta-7-input").change(function(){
        $("#valyuta-1-sec-7").html((($("#valuyta-7-input").val())* 170.20).toFixed(2))
        $("#valyuta-1-sec-7-2").html((($("#valuyta-7-input").val())* 0.9543 ).toFixed(2))
      })
    }
    else{
      $(".sec-7-2-valyuta").css({"height":"40px","background":"#fff"})
      $(".usd-7").show()
      $(".azn-7").hide()
      $(".usd-7").css({"top":"0px"})
      $(".eur-7").hide()
    }
    openvalyuta7 = !openvalyuta7
  })
     
  $(".eur-7").click(function(){
    $("#valyuta-change-1").html("AZN")
    $("#valyuta-change-2").html("USD")
    $("#valuyta-7-input").change(function(){
      $("#valyuta-1-sec-7").html((($("#valuyta-7-input").val())* 1.7835).toFixed(2))
      $("#valyuta-1-sec-7-2").html((($("#valuyta-7-input").val())* 1.0479 ).toFixed(2))
    })
    $("#valyuta-1-sec-7").html((($("#valuyta-7-input").val())* 1.7835).toFixed(2))
    $("#valyuta-1-sec-7-2").html((($("#valuyta-7-input").val())* 1.0479 ).toFixed(2))
    if(!openvalyuta7){
      $(".sec-7-2-valyuta").css({"height":"117px","background":"#fff"})
      $(".usd-7").show()
      $(".eur-7").show()
      $(".azn-7").show()
      $(".azn-7").css({"top":"35px","left":"0"})
      $(".usd-7").css({"top":"67px","left":"0"})
      $(".eur-7").css({"top":"0px"})
      $("#valyuta-change-1").html("AZN")
      $("#valyuta-change-2").html("USD")
    }
    else{
      $(".sec-7-2-valyuta").css({"height":"40px","background":"#fff"})
      $(".usd-7").hide()
      $(".azn-7").hide()
      $(".eur-7").css({"top":"0px"})
      $(".eur-7").show()
    }
    openvalyuta7 = !openvalyuta7
  })
    $("#slide-6-1").mouseover(function(){
      $("#slide-6-1").css({"color":"#F45369"})
      $("#slide-6-1-bg").css({"background":"#F45369","color":"#fff","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-1").mouseout(function(){
      $("#slide-6-1").css({"color":"#000"})
      $("#slide-6-1-bg").css({"background":"#E8ECF1","color":"#000","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-2").mouseover(function(){
      $("#slide-6-2").css({"color":"#F45369"})
      $("#slide-6-2-bg").css({"background":"#F45369","color":"#fff","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-2").mouseout(function(){
      $("#slide-6-2").css({"color":"#000"})
      $("#slide-6-2-bg").css({"background":"#E8ECF1","color":"#000","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-3").mouseover(function(){
      $("#slide-6-3").css({"color":"#F45369"})
      $("#slide-6-3-bg").css({"background":"#F45369","color":"#fff","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-3").mouseout(function(){
      $("#slide-6-3").css({"color":"#000"})
      $("#slide-6-3-bg").css({"background":"#E8ECF1","color":"#000","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-4").mouseover(function(){
      $("#slide-6-4").css({"color":"#F45369"})
      $("#slide-6-4-bg").css({"background":"#F45369","color":"#fff","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-4").mouseout(function(){
      $("#slide-6-4").css({"color":"#000"})
      $("#slide-6-4-bg").css({"background":"#E8ECF1","color":"#000","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-5").mouseover(function(){
      $("#slide-6-5").css({"color":"#F45369"})
      $("#slide-6-5-bg").css({"background":"#F45369","color":"#fff","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-5").mouseout(function(){
      $("#slide-6-5").css({"color":"#000"})
      $("#slide-6-5-bg").css({"background":"#E8ECF1","color":"#000","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-6").mouseover(function(){
      $("#slide-6-6").css({"color":"#F45369"})
      $("#slide-6-6-bg").css({"background":"#F45369","color":"#fff","border":"1px solid #ef8e9e"})
    })
    $("#slide-6-6").mouseout(function(){
      $("#slide-6-6").css({"color":"#000"})
      $("#slide-6-6-bg").css({"background":"#E8ECF1","color":"#000","border":"1px solid #ef8e9e"})
    })
    $("#mebleg").on("change input", function () {
      $("#valuekredit").attr("value", $("#mebleg").val());
      let deyer = $("#mebleg").val()
      $("#valuekredit").css({
       "--value": deyer
      });
    });
    $("#muddet").on("change input", function () {
      $("#valuemonth").attr("value", $("#muddet").val());
      let deyer = $("#muddet").val()
      $("#valuemonth").css({
       "--value": deyer
      });
    });
     $("#meblegbribank").on("change input", function () {
      $("#birbankkredit").attr("value", $("#meblegbribank").val());
      let deyer = $("#meblegbribank").val()
      $("#birbankkredit").css({
       "--value": deyer
      });
    });
    $("#muddetbirbank").on("change input", function () {
      $("#birbankmonth").attr("value", $("#muddetbirbank").val());
      let deyer = $("#muddetbirbank").val()
      $("#birbankmonth").css({
       "--value": deyer
      });
    });
    $("#muddetbirbank-ipo").on("change input", function () {
      $("#ipoteka-calc").attr("value", $("#muddetbirbank-ipo").val());
      let deyer = $("#muddetbirbank-ipo").val()
      $("#ipoteka-calc").css({
       "--value": deyer
      });
    });
    $("#muddetbirbank-dep").on("change input", function () {
      $("#depozit-calc").attr("value", $("#muddetbirbank-dep").val());
      let deyer = $("#muddetbirbank-dep").val()
      $("#depozit-calc").css({
       "--value": deyer
      });
    });
    $(".chat-icon-2").click(function(){
     $(".chat-3-all").fadeIn(100)
    })
    $("#close-chat").click(function(){
      $(".chat-3-all").hide()
    })
    $(document).scroll(function() {
      let y = $(this).scrollTop();
      if (y > 3200) {
        $('.chat-icon-2').fadeIn(10);
      }
    });
  })
  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }
 


 