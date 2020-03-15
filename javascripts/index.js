$(function () {
  var isIE = window.ActiveXObject || "ActiveXObject" in window;
  if (isIE) {
    $('.modal').removeClass('fade');
    alert("Some elements of this site will not work on Internet Explorer.")
  }
  var dateTime = new Date().toLocaleString();
  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the modal elements
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var lastCaption = "";
  // Get image with jquery on click then insert it intothe modal (use its "alt" text as a caption)
  $(".myImg").click(function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    switch (this.id) {
      case "0":
        captionText.innerHTML = "• Windows Forms (C#) Application used to enable communication between Wii remote and car; Wiimote uses bluetooth human interface device profile, so it won’t work with HC-05 module since it uses the serial port profile<br>• Can be manually control using Wii remote motion sensors, so you can tilt the remote forward to accelerate, backwards to reverse, left and right for turning, or use A for accelerate, B for reverse, 1 switch to manual, & 2 switch to auto <br>• Added servo motor for precision control of front wheels and changed photoresistors from last version to tilt switch with barrier in front to detect obstacles lower than sensor view<br>• <a class='link' href='rccar2vid.html' target='_blank'>Video of car using manual control, switching to autocontrol, then back to manual</a><br>• <a class='link' href='https://github.com/luvaihassanali/wiimote_car' target='_blank'>GitHub</a><br>";
        lastCaption = captionText.innerHTML;
        break;
      case "1":
        modalImg.src = "./images/cnc_b.jpg";
        captionText.innerHTML = "• Constructed using Arduino Uno, 2 old DVD drives, stepper motor, and associated motor drivers (<a class='link' href='./images/cncfull.jpg' target='_blank'>high resolution</a>) <br>• Can draw images or text within a 4cm square area<br>• Uses <a class='link' href='https://en.wikipedia.org/wiki/G-code' target='_blank'>g-code</a>, which is code telling the motors what type of action to perform, produced from <a class='link' href='https://inkscape.org/' target='_blank'>Inkscape</a> and feeds input to Arduino through serial port using <a class='link' href='https://processing.org/' target='_blank'>Processing</a><br>• Video examples of plotting: <a class='link' href='may.html' target='_blank'>May 2019</a>, <a class='link' href='squidward.html' target='_blank'>Squidward</a>, and the <a class='link' href='globe.html' target='_blank'>Earth</a><br>• <a class='link' href='https://github.com/luvaihassanali/arduino_cnc' target='_blank'>GitHub</a><br>";
        lastCaption = captionText.innerHTML;
        break;
      case "2":
        modalImg.src = "./images/bus_pic.jpg";
        captionText.innerHTML = "• Constructed using an old laptop running <a class='link' href='https://lubuntu.net/' target='_blank'>lubuntu</a> and <a class='link' href='https://electronjs.org/' target='_blank'>Electron</a> application: open-source framework <br>• Uses JavaScript to query <a class='link' href='http://www.octranspo.com/en/plan-your-trip/travel-tools/developers/' target='_blank'>OC Transpo</a> and <a class='link' href='https://openweathermap.org/api' target='_blank'>OpenWeatherMap</a> API every twenty seconds to update information<br>• Option of adding real-time radar built using Arduino which communicates distance of objects detected within 150cm through serial port<br>• Video of display without the radar running in the <a class='link' href='busday.html' target='_blank'> daytime</a> and <a class='link' href='busnight.html' target='_blank'> nighttime</a><br>• Video of display with <a class='link' href='busradar.html' target='_blank'> radar</a> ";
        lastCaption = captionText.innerHTML;
        break;
      case "3":
        captionText.innerHTML = "Windows - <a class='link' href='https://github.com/luvaihassanali/c_sharp_passman' target='_blank'>GitHub</a><br>• Utilizes .NET Framework data protection API <a class='link' href='https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.protecteddata?view=netframework-4.8' target='_blank'>(System.Security.Cryptography)</a> to secure passwords using information from the current user account<br>• Copies password to clipboard after decryption then application minimizes automatically to system tray and clipboard is cleared after 5 seconds<br>Linux - <a class='link' href='https://github.com/luvaihassanali/wxpassman' target='_blank'>GitHub</a><br>• Similar design to Windows version but created in C++ with <a class='link' href='https://www.wxwidgets.org/' target='_blank'>wxWidgets GUI library</a><br>• Uses <a class='link' href='https://www.cryptopp.com/' target='_blank'>Crypto++ library</a> to implement AES encryption with PBKDF2-derived master key and <a class='link' href='https://www.sqlite.org/index.html' target='_blank'>SQLite</a> for storage of passwords<br>";
        lastCaption = captionText.innerHTML;
        break;
      case "4":
        captionText.innerHTML = "• Semester long team project for Object-Oriented Software Eng. course taken at Carleton including weekly progress reports and team meetings<br>• Recreation of <a class='link' href='https://boardgamegeek.com/boardgame/360/quests-round-tableboard' target='_blank'>Quests of the Round Table</a> using <a class='link' href='https://spring.io/' target='_blank'>Spring framework</a> with two main iterations: developing the game and then implementing networking functionality<br>• Follows MVC pattern and uses WebSockets for communication<br>• <a class='link' href='https://github.com/luvaihassanali/springmvc/tree/master/GUIShots' target='_blank'>More screenshots</a><br>• <a class='link' href='https://github.com/luvaihassanali/springmvc' target='_blank'>GitHub</a><br>";
        lastCaption = captionText.innerHTML;
        break;
      case "5":
        captionText.innerHTML = "• Final project for Neural Networks course taken at Carleton<br>• Implemented using <a class='link' href='https://www.tensorflow.org/' target='_blank'>TensorFlow</a> and <a class='link' href='https://scikit-learn.org/stable/' target='_blank'>Scikit-learn library</a><br>• Uses images from <a class='link' href='http://vis-www.cs.umass.edu/lfw/' target='_blank'>Labeled Faces in the Wild dataset</a>, a collection of face photographs designed for facial recognition, where subject has at least 70 distinct photos<br>• <a class='link' href='https://github.com/luvaihassanali/tf_sklearn_facialrecog' target='_blank'>GitHub</a><br>";
        lastCaption = captionText.innerHTML;
        break;
      case "6":
        captionText.innerHTML = "• For Windows and Linux dual-boot setup: a note taking app for each system which lives in system tray and derives notes from a shared partition, so edits are synced<br>• Windows Forms App and C++ app which uses <a class='link' href='https://www.wxwidgets.org/' target='_blank'>wxWidgets GUI library</a> for Linux<br>• Reduced memory consumption in comparison to previously used appilcations<br>• Both versions save each time application loses focus to prevent loss of data<br>• <a class='link' href='https://github.com/luvaihassanali/listApp_windows' target='_blank'>Windows: GitHub</a>, <a class='link' href='https://github.com/luvaihassanali/listApp_linux' target='_blank'>Linux: GitHub</a><br>";
        lastCaption = captionText.innerHTML;
        break;
      case "7":
        modalImg.src = "./images/kettle.jpg"
        captionText.innerHTML = "• Arduino Nano, HC-05 Bluetooth module, and servo motor<br>• Can connect using <a class='link' href='https://play.google.com/store/apps/details?id=Qwerty.BluetoothTerminal&hl=en_CA' target='_blank'>Bluetooth Terminal</a> App from Google Play on Android device or using <a class='link' href='https://linux.die.net/man/1/minicom' target='_blank'>minicom</a> on Linux<br>• Only caveat is that kettle must be placed in a certain position after use<br>• <a class='link' href='https://github.com/luvaihassanali/arduino_code/blob/master/bluetooth_kettle_switch.ino' target='_blank'>GitHub</a><br>";
        lastCaption = captionText.innerHTML;
        break;
      case "8":
        captionText.innerHTML = "• Arduino Uno, 2 DC motors, L239d motor driver, 2 photoresistors, servo motor, ultrasonic sensor to avoid obstacles and shaded regions<br>• Photoresistors tell car to back out of areas where regions are dimly lit to certain threshold (shaded regions under furniture mostly)<br>• Ultrasonic sensor attatched to servo motor detects objects in front of car by 20 cm then swivels to check surrounding area for next action<br>•<a class='link' href='rccar1vid.html' target='_blank'>Car in motion</a><br>•<a class='link' href='https://github.com/luvaihassanali/arduino_code/blob/master/rc_car.ino' target='_blank'>GitHub</a><br>";
        lastCaption = captionText.innerHTML;//   
        break;
      case "9":
        captionText.innerHTML = "• Application which provides user with recipes based on ingredients entered<br>• Uses <a class='link' href='https://expressjs.com/' target='_blank'>Express framework</a> and client-side JavaScript to manipulate page elements<br>• <a class='link' href='https://www.food2fork.com/about/api' target='_blank'>Food2Fork public API</a> provides functionality to query for recipes based on ingredients<br>• <a class='link' href='https://github.com/luvaihassanali/food2fork' target='_blank'>GitHub</a><br>";
        lastCaption = captionText.innerHTML;
        break;
      case "10":
        captionText.innerHTML = "• Google Chrome extension which replaces all &lt;img&gt; tags on HTML pages with a different image of <a class='link' href='https://en.wikipedia.org/wiki/Hugo_%22Hurley%22_Reyes' target='_blank'>Hugo Reyes</a> from LOST<br>• Written in JavaScript<br>• <a class='link' href='https://github.com/luvaihassanali/hugo_chrome_extension' target='_blank'>GitHub</a><br>"
        lastCaption = captionText.innerHTML;
        break;
      case "11":
        captionText.innerHTML = "• <a class='link' href='https://apps.apple.com/ca/app/filter-fun/id1478511423' target='_blank'>App Store Preview</a><br>• <a class='link' href='https://filterfun.fun/' target='_blank'>App Homepage</a><br>• Started this project because I wanted to take videos with my camera while music was playing on the iPhone but the stock app stops music from playing on the speaker when you get into the video camera and then it evolved into a camera which can apply filters to video being taken<br>";
        lastCaption = captionText.innerHTML;
        break;
      case "12":
        captionText.innerHTML = "• ASP.NET application to act as live dashbooard for system statistics and includes a search page to query computers<br>• Pulls information from System Center Service Manager (SCSM), System Center Configuration Manager (SCCM), McAfee ePolicy Orchestrator (EPO) SQL databases, and Active Directory (AD)<br>• <a class='link' href='https://github.com/luvaihassanali/Security-Dashboard' target='_blank'>GitHub</a><br>"
        lastCaption = captionText.innerHTML;
        break;
      case "13":
        captionText.innerHTML = "• Arduino Uno, 2 DC motors, L239d motor driver, tank chasis, ESP8266 WiFi module, ESP32 Wifi Camera (<a class='link' href='./images/tank.JPG' target='_blank'>high resolution</a>) <br>• Uses Electron application to control tank/display video stream - colored buttons adjust RBG light on front of tank<br>• <a class='link' href='https://github.com/luvaihassanali/arduino_code/tree/master/remote-control' target='_blank'>GitHub</a><br>";
        lastCaption = captionText.innerHTML;
        break;
      case "14":
        captionText.innerHTML = "• Arduino Uno + various components - uses blueooth for connection<br> • Joystick controlled 2 front wheels with speed setting (x/255) using potentiometer<br> • Yellow button spins butterfly + black button for reset";
        lastCaption = captionText.innerHTML;
        break;
      case "img01":
        captionText.innerHTML = lastCaption;
      case "img02":
        captionText.innerHTML = lastCaption;
        modal.style.display = "none";
      default:
      //https://stackoverflow.com/questions/4649423/should-switch-statements-always-contain-a-default-clause
    }
  });
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  // Close window when user presses outside of modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  //Drop down 
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
