<template>
  <div class="navbar li_nav">
    <div id="small_bar">
      <svg
        id="baiame_logo"
        width="100%"
        height="100%"
        viewBox="0 0 1402 604"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        xmlns:serif="http://www.serif.com/"
        style="
          fill-rule: evenodd;
          clip-rule: evenodd;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 60;
        "
      >
        <g>
          <g>
            <path
              d="M711.25,59.136c0,0 -121.283,254.695 -121.283,363.849c0,66.938 54.345,121.283 121.283,121.283c66.938,0 121.283,-54.345 121.283,-121.283c0,-109.154 -121.283,-363.849 -121.283,-363.849Z"
              style="fill: none; stroke: #685d4e; stroke-width: 29.17px"
            />
            <path
              d="M573.836,301.702l274.828,0"
              style="fill: none; stroke: #685d4e; stroke-width: 29.17px"
            />
            <path
              d="M545.414,180.419c0,-91.527 74.309,-165.836 165.836,-165.836c91.527,0 165.836,74.309 165.836,165.836"
              style="fill: none; stroke: #685d4e; stroke-width: 29.17px"
            />
            <path
              d="M877.086,422.985c0,91.528 -74.309,165.836 -165.836,165.836c-91.527,0 -165.836,-74.308 -165.836,-165.836"
              style="fill: none; stroke: #685d4e; stroke-width: 29.17px"
            />
          </g>
          <text
            x="-30.364px"
            y="436.372px"
            style="
              font-family: 'Futura-Medium', 'Futura', sans-serif;
              font-weight: 500;
              font-size: 336.142px;
              fill: #717171;
            "
          >
            B
            <tspan x="175.381px 435.125px " y="436.372px 436.372px ">AI</tspan>
          </text>
          <text
            x="897.249px"
            y="432.105px"
            style="
              font-family: 'Futura-Medium', 'Futura', sans-serif;
              font-weight: 500;
              font-size: 336.142px;
              fill: #717171;
            "
          >
            M
            <tspan x="1231.18px " y="432.105px ">E</tspan>
          </text>
          <text
            x="982.427px"
            y="529.808px"
            style="
              font-family: 'Lato-Regular', 'Lato', sans-serif;
              font-size: 78.288px;
              fill: #353535;
            "
          >
            M
            <tspan
              x="1056.96px 1112.7px 1156.7px 1200.69px 1254.79px 1314.76px 1362.75px "
              y="529.808px 529.808px 529.808px 529.808px 529.808px 529.808px 529.808px "
            >
              ASSAGES
            </tspan>
          </text>
        </g>
      </svg>
      <div class="flex">
        <img src="../assets/img/Logo.svg" alt="logo" />
        <nav class="desktop_nav">
          <ul>
            <!-- :to="`/${i18n.locale}/{name: item.name }`" -->
            <router-link
              class="li_nav"
              v-for="item in items"
              :key="item.name"
              :to="{ name: item.name }"
              :id="item.id"
              >{{$t(item.tab)}}</router-link
            >

            <LanguageSwitcher />
          </ul>

          <div id="nav_wrap" class="flex">
            <div id="infos">
              <h3>Horaires</h3>
              <p>9-18h</p>
              <h3>Contact</h3>
              <ul>
                <li>Tel: 06 98 33 99 05</li>
                <li>Mail: baiamemassages@gmail.com</li>
                <li>Adresse: Les Girards, 05230 Chorges</li>
              </ul>
            </div>
            <div id="link_infos">
              <div>
                <router-link class="li_nav" to="/infos_pratiques"
                  >Tarifs</router-link
                >
                <router-link class="li_nav" to="/infos_pratiques"
                  >Bons cadeaux</router-link
                >
                <router-link class="li_nav" to="/infos_pratiques"
                  >Programme de fidélite</router-link
                >
              </div>
            </div>
          </div>
        </nav>
        <div id="burger">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 105 105"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve"
            xmlns:serif="http://www.serif.com/"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 1.5;
            "
          >
            <rect
              id="Plan-de-travail2"
              serif:id="Plan de travail2"
              x="0"
              y="0"
              width="104.167"
              height="104.167"
              style="fill: none"
            />
            <path
              id="top"
              d="M14.583,20.833l75,0"
              style="fill: none; stroke: #000; stroke-width: 4.17px"
            />
            <path
              id="center"
              d="M14.583,52.083l75,0"
              style="fill: none; stroke: #000; stroke-width: 4.17px"
            />
            <path
              id="bottom"
              d="M14.583,83.333l75,0"
              style="fill: none; stroke: #000; stroke-width: 4.17px"
            />
          </svg>
        </div>

        <div id="burger_nav">
          <nav>
            <ul>
              <LanguageSwitcher />
              <router-link
                class="li_nav"
                v-for="item in items"
                :key="item.name"
                :to="{ name: item.name }"
                :id="item.id"
                >{{$t(item.tab)}}</router-link
              >
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!-- <router-view @authenticated="setAuthenticated" /> -->
  </div>
</template>

<script>
import i18n from "../i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
export default {
  name: "Navbar",
  components: {
    LanguageSwitcher,
  },
  mounted() {
    /* ------------ Burger animation ------------ */
    let count = 0;

    $("#burger, #burger_nav .li_nav").on("click", () => {
      count++;
      if (count % 2 == 1) {
        $("#burger_nav").css({ width: "39vw" });
        $("#burger svg #center").fadeOut(50);
        $("#burger svg #top").css({
          transform: "rotate(45deg) translate(-15px, -5px)",
        });
        $("#burger svg #bottom").css({
          transform: "rotate(-45deg) translate(-15px, 5px)",
        });
      } else {
        $("#burger_nav").css({ width: "0" });
        $("#burger svg #bottom").css({ transform: "rotate(0)" });
        $("#burger svg #center").fadeIn(1000);
        $("#burger svg #top").css({ transform: "rotate(0)" });
      }
    });

    /* ------------ Scroll animation ------------ */

    $(window).on("scroll", () => {
      if (window.scrollY > 50) {
        $(".navbar").css({ height: "90px" });
        $("#baiame_logo").css({ display: "none" });
        $(".desktop_nav").css({ width: "80%" });
        $(".navbar img").css({ display: "inline" });
      }
      if (window.scrollY < 50) {
        $(".navbar").css({ height: "135px" });
        $(".desktop_nav").css({ width: "100%" });
        $(".navbar img").css({ display: "none" });
        $("#baiame_logo").css({ display: "block" });
      }
    });

    /* ------------ Infos animation ------------ */

    $("nav ul .li_nav:last-child, #nav_wrap").on("mouseover", () => {
      $("#nav_wrap").css({ height: "240px", padding: "20px" });
    });
    $("nav ul .li_nav:last-child, #nav_wrap").on("mouseout", () => {
      $("#nav_wrap").css({ height: "0px", padding: "0px" });
    });
  },
  data: () => {
    return {
      i18n,
      langs: ["fr", "en"],
      items: [
        { name: "Accueil", tab: "Accueil", id: "acceuil" },
        { name: "Masseuse", tab: "Votre Masseuse", id: "votre_masseuse" },
        { name: "Massages", tab: "Massages", id: "massages" },
        { name: "Stages", tab: "Stages", id: "stages" },
        { name: "Entreprises", tab: "Entreprises", id: "entreprises" },
        { name: "RandoMassages", tab: "Rando Massages", id: "rando_massages" },
        {
          name: "InfosPratiques",
          tab: "Infos Pratiques",
          id: "infos_pratiques",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/styles.scss";

.li_nav {
  font-family: "Averia Sans Libre", cursive;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  font-size: 11px;
}

.navbar {
  height: 135px;
  width: 100vw;
  z-index: 500;
  transition: height 0.8s cubic-bezier(0, 0.93, 0.86, 1.05);
  background: url(../assets/img/navbar_background.svg) center center / 1200px
      repeat,
    white;
  position: fixed;
  top: 0;
  left: 0;
  @extend %flexbox;
  @include justify-content(space-evenly);
  @include align-items(center);

  #small_bar {
    position: relative;
    width: 100vw;
    #baiame_logo {
      height: 65px;
    }
    .flex {
      @extend %flexbox;
      @include justify-content(space-evenly);
      @include align-items(center);
      img {
        display: none;
        height: 65px;
      }
      .desktop_nav {
        display: none;
        ul:first-child {
          @extend %flexbox;
          @include justify-content(space-evenly);
        }
        #nav_wrap {
          #link_infos {
            div {
              @extend %flexbox;
              @include flex-direction(column);
              @include justify-content(space-evenly);
            }
          }
        }
      }
      #burger {
        z-index: 600;
        position: absolute;
        top: calc(50% - 15px);
        right: 25px;
        background: rgba(255, 255, 255, 0.501);
        border: 1px solid black;
        border-radius: 5px;
        height: 30px;
        width: 30px;
        padding: 1.5px;
        svg {
          height: 25px;
          width: 25px;
          /* position: relative;
          top: calc(50% - 12.5px); */
          > * {
            transition: transform 0.7s ease-in-out;
            transform-origin: left center;
          }
        }
      }
      #burger_nav {
        background: white;
        transition: width 0.7s ease-in-out;
        position: fixed;
        right: 0;
        bottom: 0;
        height: 100vh;
        width: 0;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        @extend %flexbox;
        @include align-items(center);
        nav {
          height: 100%;
          padding: 100px 0 50px;
          ul {
            height: 100%;
            width: 39vw;
            @extend %flexbox;
            @include flex-direction(column);
            @include justify-content(space-evenly);
          }
        }
      }
    }
  }
}

@media (min-width: 780px) {
  .navbar {
    height: 150px;
    @include flex-wrap(wrap);

    #small_bar {
      #baiame_logo {
        display: block;
        margin: 20px 0;
        height: 80px;
      }
      .flex {
        img {
          display: none;
          height: 80px;
        }
        .desktop_nav {
          display: block;
          transition: all 0.8s cubic-bezier(0, 0.93, 0.86, 1.05);
          width: 100%;
          position: relative;
          #nav_wrap {
            overflow: hidden;
            background: whitesmoke;
            position: absolute;
            transition: all 0.5s ease-in 0.2s;
            width: 35vw;
            height: 0px;
            top: 25px;
            right: 15px;
            border-radius: 10px;
            #infos {
              width: 50%;
              text-align: center;
              li {
                list-style: none;
              }
            }
            #link_infos {
              width: 50%;
              height: 100%;
              div {
                height: 100%;
                .li_nav {
                  display: block;
                }
              }
            }
          }
        }
        #burger {
          display: none;
        }
      }
    }
  }
}
</style>