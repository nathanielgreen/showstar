const HomeVideo = Vue.component('home-video', {
  template:`
    <iframe
      class="home-video"
      src="https://www.youtube.com/embed/VXc2djB-fC8?autoplay=1&mute=1"
      frameborder="0"
      allowfullscreen
    ></iframe>
  `,
});

export default HomeVideo;
