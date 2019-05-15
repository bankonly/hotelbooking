<template>
  <div>
    <!-- Start Top Navbar -->
    <div class="top-navbar">
      <div class="menu-top-header">
        <div class="menu-header">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand txt-color" href="#">Vansana Hotel</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link txt-color" href="#" style="color:#fff">
                    EN
                    <i class="fa fa-caret-down"></i>
                  </a>
                </li>
              </ul>
              <span class="navbar-text">
                <a href class="txt-color" style="color:#fff">Login</a>
              </span>
            </div>
          </nav>
        </div>
      </div>
      <div class="under-top-header">
        <div class="menu-under-header">
          <div class="under-header">
            <nav class="navbar navbar-expand-lg navbar-light ">
              
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active"><a class="nav-link txt-color-nav2" href="#">Home</a></li>
                  <li class="nav-item active"><a class="nav-link txt-color-nav2" href="#">Room</a></li>
                  <li class="nav-item active"><a class="nav-link txt-color-nav2" href="#">About</a></li>
                  <li class="nav-item active"><a class="nav-link txt-color-nav2" href="#">Contact Us</a></li>
                </ul>
                <span class="navbar-text">
                  <a href>Hotel Status : 2 Rooms Left</a>
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- End Top Navbar -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      hello: "THIS IS NAVBAR",
      url: [
        {
          link: "#"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.txt-color{
  color:#fff;
}
.menu-top-header {
  width: 100%;
  height: 36px;
  background:#2a4267;
}
.under-top-header {
  width: 100%;
    height: 37px;
    border-bottom: 1px solid #e0e6f1;
    background: #f5f5f5;
}
.menu-header {
  width: 1200px;
  height: 36px;
  /* background: #f5d419; */
  margin: 0 auto;
}
.menu-under-header {
  width: 1200px;
  height: 36px;
  /* background: #f5d419; */
  margin: 0 auto;
}
.navbar {
  padding: 0rem 4rem;
  /* background: #f5d419; */
}
</style>



