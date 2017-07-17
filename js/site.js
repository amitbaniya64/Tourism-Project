 

/************************
        Home page
 ************************/

/*Show images on modal popup*/
     $(function() {
         $('.pop').on('click', function(e) {
             e.preventDefault();
             $('.imagepreview').attr('src', $(this).find('img').attr('src'));
             $('#imagemodal').modal('show');   
         });     
     });

/************************
       End Home page
 ************************/ 





/************************
       Photos page
 ************************/ 

/**image gallery**/
   document.getElementById('links').onclick = function (event) {
         event = event || window.event;
         var target = event.target || event.srcElement,
             link = target.src ? target.parentNode : target,
             options = {index: link, event: event},
             links = this.getElementsByTagName('a');
         blueimp.Gallery(links, options);
     };
/************************
       End Photos page
 ************************/ 






/************************
       Contact page
 ************************/ 

  //Integrating google map on contact page

    function initMap() {// script for map
      var uluru = {lat: 27.490952, lng: 83.2958898};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
      });

      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });

    google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center); 
        });
    }
/************************
       End Contct page
 ************************/ 
