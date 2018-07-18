const HomeVideo = Vue.component('home-video', {
  template:`
    <iframe
      class="home-video"
      src="https://www.youtube.com/embed/s-pW1fdszdI?autoplay=1&mute=1"
      frameborder="0"
      allowfullscreen
    ></iframe>
  `,
});

export default HomeVideo;
