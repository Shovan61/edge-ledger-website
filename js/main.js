
function initMap() {
    // Your Location
    const loc = {lat: 23.810331, lng: 90.412521};
    // centered map on location
  const map = new google.maps.Map(document.querySelector(".map"),
   {
    center: loc,
    zoom: 14,
  });
  // The Marker, Positioned a location
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}

// 23.8103° N, 90.4125° E

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});