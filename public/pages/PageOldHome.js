const PageOldHome = Vue.component('page-old-home', {
  template: `
  <div class="wrapper">

    <div id="rightContent">

      <div id="eventsStrip">
        Events
      </div>

      <div id="eventsBox">
        <div class="events-box__top">
          <div id="badmannersBox" class="eventBox">
            <a href="/badmanners">
              <img class="eventsImg" src="images/badmannerslogo.jpg">
              Bad Manners
            </a>
          </div>

          <div id="xothursdaysBox" class="eventBox">
            <a href="/xothursdays">
              <img class="eventsImg" src="images/indexxothursdayslogo2.png">
              XO Thursdays
            </a>
          </div>

          <div id="mayhemBox" class="eventBox">
            <a href="/mayhem">
              <img class="eventsImg" src="images/indexmayhemlogo2.png">
              Mayhem
            </a>
          </div>
        </div>

        <div class="events-box__bottom">
          <div id="backwhenBox" class="eventBox">
            <a href="/backwhen">
              <img class="eventsImg" src="images/indexbackwhenlogo2.png">
              Back When
            </a>
          </div>

          <div id="selectedsoundsBox" class="eventBox">
            <a href="/selectedsounds">
              <img class="eventsImg" src="images/indexselectedsoundslogo.png">
              Selected Sounds
            </a>
          </div>

          <div id="xothursdaysleeds" class="eventBox">
            <a href="https://www.facebook.com/xoleeds/">
              <img class="eventsImg" src="images/xologoleeds.jpg">
              XO Leeds
            </a>
          </div>

          <div id="xothursdaysnottingham" class="eventBox">
            <a href="https://www.facebook.com/xonottingham/">
              <img class="eventsImg" src="images/indexothursdayslogo3.jpg">
              XO Nottingham
            </a>
          </div>
        </div>
      </div>

      <div id="upcomingStrip">
        News
      </div>
        
        <div id="showstar-selectedsounds-div" class="fb-div">
          <!-- Showstar Start -->
            <div id="showstar-div" class="fb-page" 
              data-href="https://www.facebook.com/ShowStarEntertainments" 
              data-tabs="timeline" 
              data-small-header="true" 
              data-adapt-container-width="true" 
              data-hide-cover="true" 
              data-show-facepile="false">
              <div class="fb-xfbml-parse-ignore">
                <blockquote cite="https://www.facebook.com/ShowStarEntertainments">
                  <a href="https://www.facebook.com/ShowStarEntertainments">Show Star Entertainments</a>
                </blockquote>
              </div>
          </div>
          <!-- Showstar End -->
          <!-- SelectedSounds Start -->
          <div id="soundsFB" class="fb-page" 
            data-href="https://www.facebook.com/selectedsoundsuk" 
            data-tabs="timeline" 
            data-small-header="true" 
            data-adapt-container-width="true" 
            data-hide-cover="true" 
            data-show-facepile="false">
            <div class="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/selectedsoundsuk">
                <a href="https://www.facebook.com/selectedsoundsuk">Selected Sounds</a>
              </blockquote>
            </div>
          </div>
          <!-- SelectedSounds End -->
        </div>

        
        <div id="xo-backwhen-div" class="fb-div">
          <!-- XO Start -->
          <div id="xoFB" class="fb-page" 
            data-href="https://www.facebook.com/xoloughborough" 
            data-tabs="timeline" 
            data-small-header="true" 
            data-adapt-container-width="true" 
            data-hide-cover="true" 
            data-show-facepile="false">
            <div class="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/xoloughborough">
                <a href="https://www.facebook.com/xoloughborough">XO Thursdays</a>
              </blockquote>
            </div>
          </div>
          <!-- XO End -->
          <!-- Back When Start -->
          <div id="backwhenFB" class="fb-page" 
            data-href="https://www.facebook.com/BackWhen1" 
            data-tabs="timeline" 
            data-small-header="true" 
            data-adapt-container-width="true" 
            data-hide-cover="true" 
            data-show-facepile="false">
            <div class="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/BackWhen1">
                <a href="https://www.facebook.com/BackWhen1">Back When</a>
              </blockquote>
            </div>
          </div>
          <!-- Back When End -->
        </div>


        <div id="badmanners-mayhem-div" class="fb-div">
          <!-- Bad Manners Start -->
          <div class="fb-page" 
            data-href="https://www.facebook.com/badmannerslboro" 
            data-tabs="timeline" 
            data-small-header="true" 
            data-adapt-container-width="true" 
            data-hide-cover="true" 
            data-show-facepile="false">
            <div class="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/badmannerslboro">
                <a href="https://www.facebook.com/badmannerslboro">Bad Manners</a>
              </blockquote>
            </div>
          </div>
          <!-- Bad Manners End -->
          <!-- Mayhem Start -->
          <div class="fb-page" 
            data-href="https://www.facebook.com/mayhemlboro" 
            data-tabs="timeline" 
            data-small-header="true" 
            data-adapt-container-width="true" 
            data-hide-cover="true" 
            data-show-facepile="false">
            <div class="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/mayhemlboro">
                <a href="https://www.facebook.com/mayhemlboro">Mayhem</a>
              </blockquote>
            </div>
          </div>
          <!-- Mayhem End -->
        </div>

        <div class="fb-div">
          <div class="fb-page" 
            data-href="https://www.facebook.com/xoleeds/" 
            data-tabs="timeline" 
            data-small-header="true" 
            data-adapt-container-width="true" 
            data-hide-cover="true" 
            data-show-facepile="false">
            <div class="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/xoleeds/">
                <a href="https://www.facebook.com/xoleeds/">XO Leeds</a>
              </blockquote>
            </div>
          </div>
          <div class="fb-page" 
            data-href="https://www.facebook.com/xonottingham/" 
            data-tabs="timeline" 
            data-small-header="true" 
            data-adapt-container-width="true" 
            data-hide-cover="true" 
            data-show-facepile="false">
            <div class="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/xonottingham/">
                <a href="https://www.facebook.com/xonottingham/">XO Nottingham</a>
              </blockquote>
            </div>
          </div>
        </div>




      </div>

    </div>

  </div>
  
  `,
});

export default PageOldHome;
