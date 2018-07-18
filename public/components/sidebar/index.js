const sidebar = Vue.component('sidebar', {
  template: `
    <div id="leftContent">
      <div id="logoDiv">
        <img id="aboutLogo" src="images/showstarlogo.png">
      </div>

      <div id="social">
        <h5 id="socialTitle">SOCIAL MEDIA</h5>
        <a href="https://twitter.com/showstarents">
          <img id="twitterLink" class="socialLink" src="images/twitterlogo.png">
        </a>
        <a href="https://www.facebook.com/ShowStarEntertainments/?fref=photo">
          <img id="facebookLink" class="socialLink" src="images/facebooklogo.png">
        </a>
        <a href="https://www.instagram.com/showstarents/">
          <img id="instagramLink" class="socialLink" src="images/instagramlogo.png">
        </a>
      </div>

      <div id="about">
        <h5 id="aboutTitle"> ABOUT US </h5>
        <p> Show Star Entertainments hosts the hottest original events!
        We pride ourselves on class, innovation and always pushing the
        boundaries to provide top quality events that cater for everyone. </p>
        <p> We believe we have the formula for success by combining
        innovative ideas with forward planning, hard work and solid networking.
        With events ranging from 300- 3000 people, each event is promoted
        as if it were a launch night and the hard work and skill that goes
        into filling each event is replicated by the delivery of the top
        class events which are associated with us. </p>
        <p> Show Star Entertainments has grown each year; hosting a wide range
        of unique one off events as well as hosting two very popular weekly 
        nights. Using Loughborough as a base, Show Star Entertainments has 
        also organised events in Lincoln, Nottingham and London in addition to 
        organising formal balls, talent shows, sample sales and concerts. </p>
      </div>
    
      <div class="flyer-div">
        <img class="playflyer" src="images/frontflyer.jpg">
        <img class="playflyer" src="images/badmannersflyer.jpg">
        <h3 style="text-align: center;">WE ARE LAUNCHING IN LEEDS</h3>
        <img class="playflyer" src="images/xo-leeds-flyer.jpg" />
        <img class="playflyer" src="images/xo-nottingham-flyer.jpg" />
      </div>

    </div>
  `,
});

export default sidebar;
