const topNav = Vue.component('topnav', {
  template: `
    <div class="topnav grid">
      <div class="unit whole"> 
        <router-link class="topnav__link" to="/loughborough">Loughborough</router-link>
        <a class="topnav__link" href="/leeds">Leeds</a>
        <a class="topnav__link" href="/tickets">Tickets</a>
        <a class="topnav__link" id="a-gallery" href="/gallery">Gallery</a>
        <a class="topnav__link" id="a-jobs" href="/jobs">Jobs</a>
        <a class="topnav__link" id="a-contact" href="/contact">Contact</a>
        <a class="topnav__link" id="a-music" href="/music">Music</a>
        <a class="topnav__link" id="a-home" href="/">Home</a>
      </div>
    </div>
  `,
});

export default topNav;
