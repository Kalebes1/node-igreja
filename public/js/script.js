/**
 * SLIDERS
 */
$(document).ready(function() {
    $('#adaptive').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


  /**
   * MENU
   */

   function menuToggle(){
    let menuArea = document.getElementById("menu-area");

    if(menuArea.style.width == '70vw'){
        menuArea.style.width = '0px';
    }else{
        menuArea.style.width = '70vw';
        menuArea.style.display = 'flex';
    }
}



