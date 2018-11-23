const HomeNav = Vue.component('home-nav', {
  template: `
    <div class="home-nav grid">
      <div class="unit whole"> 
        <router-link class="home-nav__link" to="/loughborough">Loughborough</router-link>
        <a class="home-nav__link" href="/leeds">Leeds</a>
        <a class="home-nav__link" href="/tickets">Tickets</a>
        <a class="home-nav__link" id="a-gallery" href="/gallery">Gallery</a>
        <a class="home-nav__link" id="a-jobs" href="/jobs">Jobs</a>
        <a class="home-nav__link" id="a-contact" href="/contact">Contact</a>
        <a class="home-nav__link" id="a-music" href="/music">Music</a>
        <a class="home-nav__link" id="a-home" href="/">Home</a>
      </div>
    </div>
  `,
});

export default HomeNav;
