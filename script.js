document.addEventListener("DOMContentLoaded", function () {
    const platformCards = document.querySelectorAll(".platform-card");
    const notification = document.getElementById("notification");
    const playButton = document.getElementById("playButton");
    const videoContainer = document.getElementById("videoContainer");
  
    const platformContent = {
      Hotstar: {
        logo: "ri-tv-fill",
        bgImage:
          "https://readdy.ai/api/search-image?query=hotstar%20streaming%20interface%20showing%20cricket%20match%2C%20modern%20UI%20design%2C%20professional%20sports%20broadcast&width=375&height=211&seq=2&orientation=landscape",
      },
      "Star Sports": {
        logo: "ri-broadcast-fill",
        bgImage:
          "https://readdy.ai/api/search-image?query=star%20sports%20broadcast%20interface%2C%20cricket%20match%20streaming%2C%20professional%20sports%20channel%20layout&width=375&height=211&seq=3&orientation=landscape",
      },
      "Sony LIV": {
        logo: "ri-vidicon-fill",
        bgImage:
          "https://readdy.ai/api/search-image?query=sony%20liv%20streaming%20platform%20interface%2C%20cricket%20match%20broadcast%2C%20modern%20streaming%20UI&width=375&height=211&seq=4&orientation=landscape",
      },
      "Willow TV": {
        logo: "ri-live-fill",
        bgImage:
          "https://readdy.ai/api/search-image?query=willow%20tv%20cricket%20streaming%20interface%2C%20professional%20sports%20broadcast%20layout&width=375&height=211&seq=5&orientation=landscape",
      },
      ESPN: {
        logo: "ri-football-fill",
        bgImage:
          "https://readdy.ai/api/search-image?query=espn%20cricket%20broadcast%20interface%2C%20sports%20streaming%20platform%20layout&width=375&height=211&seq=6&orientation=landscape",
      },
      "Sky Sports": {
        logo: "ri-cloud-fill",
        bgImage:
          "https://readdy.ai/api/search-image?query=sky%20sports%20cricket%20streaming%20interface%2C%20professional%20broadcast%20layout&width=375&height=211&seq=7&orientation=landscape",
      },
      "Fox Cricket": {
        logo: "ri-movie-fill",
        bgImage:
          "https://readdy.ai/api/search-image?query=fox%20cricket%20streaming%20platform%20interface%2C%20sports%20broadcast%20layout&width=375&height=211&seq=8&orientation=landscape",
      },
      "BT Sport": {
        logo: "ri-gamepad-fill",
        bgImage:
          "https://readdy.ai/api/search-image?query=bt%20sport%20cricket%20streaming%20interface%2C%20professional%20broadcast%20layout&width=375&height=211&seq=9&orientation=landscape",
      },
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
          // Update the video container background
          const imgElement = videoContainer.querySelector("img");
          imgElement.src = platformData.bgImage;
          imgElement.alt = `${platformName} Stream`;
  
          // Show notification
          notification.querySelector("p").textContent =
            `Switching to ${platformName}...`;
          notification.classList.add("show");
  
          // Hide notification after 2 seconds
          setTimeout(() => {
            notification.classList.remove("show");
          }, 2000);
        }
      });
    });
  
    // Play button click
    playButton.addEventListener("click", function () {
      const selectedPlatform = document.querySelector(".platform-card.selected");
      const platformName = selectedPlatform.getAttribute("data-platform");
      notification.querySelector("p").textContent =
        `Redirecting to ${platformName}...`;
      notification.classList.add("show");
      
      setTimeout(() => {
        notification.classList.remove("show");
        // In a real app, you would redirect to the platform's streaming page
        if (selectedPlatform.tagName === 'A') {
          window.location.href = selectedPlatform.href;
        }
      }, 2000);
    });
  });