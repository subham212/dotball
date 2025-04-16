document.addEventListener("DOMContentLoaded", function () {
    const platformCards = document.querySelectorAll(".platform-card");
    const notification = document.getElementById("notification");
    const playButton = document.getElementById("playButton");
    const videoContainer = document.getElementById("videoContainer");
    const youtubePlayer = document.getElementById("youtubePlayer");
    const videoThumbnail = document.getElementById("videoThumbnail");
  
    // YouTube video IDs for different platforms
    const platformContent = {
      "Hotstar": {
        logo: "ri-tv-fill",
        bgImage: "https://readdy.ai/api/search-image?query=hotstar%20streaming%20interface",
        youtubeId: "lWnffc0GZF4" // Sample cricket stream
      },
      "Star Sports": {
        logo: "ri-broadcast-fill",
        bgImage: "https://readdy.ai/api/search-image?query=star%20sports%20broadcast",
        youtubeId: "1540042592" // Sample cricket stream
      },
      "Sony LIV": {
        logo: "ri-vidicon-fill",
        bgImage: "https://readdy.ai/api/search-image?query=sony%20liv%20streaming",
        youtubeId: "9bZkp7q19f0" // Sample cricket stream
      },
      "Willow TV": {
        logo: "ri-live-fill",
        bgImage: "https://readdy.ai/api/search-image?query=willow%20tv%20cricket",
        youtubeId: "uzmy2M-t20Y" // Sample cricket stream
      },
      "ESPN": {
        logo: "ri-football-fill",
        bgImage: "https://readdy.ai/api/search-image?query=espn%20cricket",
        youtubeId: "kJQP7kiw5Fk" // Sample cricket stream
      },
      "Sky Sports": {
        logo: "ri-cloud-fill",
        bgImage: "https://readdy.ai/api/search-image?query=sky%20sports%20cricket",
        youtubeId: "nfs8NYg7yQM" // Sample cricket stream
      },
      "Fox Cricket": {
        logo: "ri-movie-fill",
        bgImage: "https://readdy.ai/api/search-image?query=fox%20cricket",
        youtubeId: "OPf0YbXqDm0" // Sample cricket stream
      },
      "BT Sport": {
        logo: "ri-gamepad-fill",
        bgImage: "https://readdy.ai/api/search-image?query=bt%20sport%20cricket",
        youtubeId: "RgKAFK5djSk" // Sample cricket stream
      }
    };
  
    // Platform selection
    platformCards.forEach((card) => {
      card.addEventListener("click", function () {
        // Remove selected class from all cards
        platformCards.forEach((c) => c.classList.remove("selected"));
        // Add selected class to clicked card
        this.classList.add("selected");
  
        const platformName = this.getAttribute("data-platform");
        const platformData = platformContent[platformName];
  
        if (platformData) {
          // Show notification
          notification.querySelector("p").textContent = `Switching to ${platformName}...`;
          notification.classList.add("show");
  
          // Hide notification after 2 seconds
          setTimeout(() => {
            notification.classList.remove("show");
          }, 2000);
  
          // If platform has YouTube video
          if (platformData.youtubeId) {
            // Hide thumbnail and show YouTube player
            videoThumbnail.classList.add("hidden");
            youtubePlayer.classList.remove("hidden");
            
            // Load YouTube player
            loadYouTubePlayer(platformData.youtubeId);
            
            // Hide play button since video will autoplay
            playButton.style.display = "none";
          } else {
            // For platforms without YouTube, show their thumbnail
            videoThumbnail.src = platformData.bgImage;
            videoThumbnail.alt = `${platformName} Stream`;
            videoThumbnail.classList.remove("hidden");
            youtubePlayer.classList.add("hidden");
            
            // Show play button
            playButton.style.display = "flex";
          }
        }
      });
    });
  
    // Play button click
    playButton.addEventListener("click", function () {
      const selectedPlatform = document.querySelector(".platform-card.selected");
      const platformName = selectedPlatform.getAttribute("data-platform");
      
      notification.querySelector("p").textContent = `Redirecting to ${platformName}...`;
      notification.classList.add("show");
      
      setTimeout(() => {
        notification.classList.remove("show");
        // In a real app, you would redirect to the platform's streaming page
        alert(`Redirecting to ${platformName}... (simulated action)`);
      }, 2000);
    });
  
    // Function to load YouTube player
    function loadYouTubePlayer(videoId) {
      youtubePlayer.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
    }
  });