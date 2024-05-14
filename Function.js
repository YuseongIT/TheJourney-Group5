function toggleLocation(clickedLocation) {
    
    var allLocations = document.querySelectorAll('.location');
  
   
    allLocations.forEach(function(location) {
        if (location !== clickedLocation) {
            location.classList.toggle('hidden');
        }
    });
   
    clickedLocation.querySelector('.location-info').classList.toggle('hidden');
    clickedLocation.querySelector('.google-map').classList.toggle('hidden');

    clickedLocation.querySelector('.location-text').classList.toggle('moved');
    clickedLocation.querySelector('.location-info').classList.toggle('moved');
    clickedLocation.querySelector('.location-image').classList.toggle('moved'); // Add this line
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('fullscreen');
  
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  });