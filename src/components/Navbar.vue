<template>
  <div class="navbar li_nav">
    <svg
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
    <div id="small_bar">
      <div class="flex">
        <img src="../assets/img/Logo.svg" alt="logo" />
        <nav>
          <ul>
            <router-link
              class="li_nav"
              v-for="item in items"
              :key="item.name"
              :to="{ name: item.name }"
              >{{ item.name }}</router-link
            >

          </ul>
          <div id="nav_wrap">
            <div id="infos">
              <h3>Horaires</h3>
              <p>9-18h</p>
              <h3>Contact</h3>
              <ul>
                <li>Tel</li>
                <li>Mail</li>
                <li>Adresse</li>
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
      </div>
    </div>
    <!-- <router-view @authenticated="setAuthenticated" /> -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    $(window).on("scroll", () => {
      if (window.scrollY > 120) {
        $(".navbar").css({ height: "150px" });
        $("svg").css({ display: "none" });
        $("nav").css({ width: "80%" });
        $(".navbar img").css({ display: "inline" });
      }
      if (window.scrollY < 120) {
        $(".navbar").css({ height: "200px" });
        $("nav").css({ width: "100%" });
        $(".navbar img").css({ display: "none" });
        $("svg").css({ display: "inline" });
      }
    });

    // console.log($("nav ul .li_nav:last-child"));

    $("nav ul .li_nav:last-child, #nav_wrap").on("mouseover", () => {
      $("#nav_wrap").css({ height: "240px", padding: "20px" });
    });
    $("nav ul .li_nav:last-child, #nav_wrap").on("mouseout", () => {
      $("#nav_wrap").css({ height: "0px", padding: "0px" });
    });
  },
  data: () => {
    return {
      items: [
        { name: "Accueil" },
        { name: "Votre Masseuse" },
        { name: "Massages" },
        { name: "Stages" },
        { name: "Entreprises" },
        { name: "Rando Massages" },
        { name: "Infos Pratiques" },
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
  font-size: 13px;
}

.navbar {
  height: 200px;
  width: 100vw;
  z-index: 900;
  transition: height 0.8s cubic-bezier(0, 0.93, 0.86, 1.05);
  background: url(../assets/img/navbar_background.svg) center / cover no-repeat,
    white;
  position: fixed;
  top: 0;
  left: 0;
  @extend %flexbox;
  @include flex-wrap(wrap);
  @include justify-content(space-around);
  @include align-items(center);
  svg {
    margin-top: 20px;
    height: 100px;
  }

  #small_bar {
    width: 100vw;
    .flex {
      @extend %flexbox;
      @include justify-content(space-evenly);
      @include align-items(center);
      img {
        display: none;
        height: 100px;
      }
      nav {
        transition: all 0.8s cubic-bezier(0, 0.93, 0.86, 1.05);
        width: 100%;
        position: relative;
        ul:first-child {
          @extend %flexbox;
          @include justify-content(space-around);
        }
        #nav_wrap {
          overflow: hidden;
          background: white;
          position: absolute;
          transition: all 0.5s ease-in 0.2s;
          width: 500px;
          height: 0px;
          top: 52px;
          right: 15px;
          border-radius: 10px;
          @extend %flexbox;
          @include align-items(center);
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
              @extend %flexbox;
              @include flex-direction(column);
              @include justify-content(space-evenly);
              @include align-items(right);
              .li_nav {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
</style>