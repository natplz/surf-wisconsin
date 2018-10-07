    var imgs = ["Resized/1_sunset_small.jpg", "Resized/1_man_surfing_darkgreen_small.jpg", "Resized/1_man_surfing_teal_small.jpg", "Resized/1_man_swimming_small.jpg", "Resized/1_man_surfing_sideways_small.jpg"];
    var current = 2;
    var transTime = 500; //Transition time = 500ms
    var rotating = false;
    
    //Set default images in image carousel
    $("#imgBig").attr("src",imgs[current]);
    $("#sideImgLeft").attr("src",imgs[current-1]);
    $("#sideImgRight").attr("src",imgs[current+1]);
    
    
    
    //Rotate left
    $("#rhomb1").click( function() {
      
      //Wait for animation to finish before rotating again
      if (rotating) return;
      
      //Don't rotate if we're at the end of the carousel
      if (current < (imgs.length-1)) {
        rotating = true;
        
        //Set carriers to contain the img behind them
        $("#imgBigCarrier").attr("src", imgs[current]);
        $("#sideImgRightCarrier").attr("src", imgs[current+1]);
        //Don't set left side if we're at the end of the carousel
        if (current != 0) {
          $("#sideImgLeftCarrier").attr("src", imgs[current-1]);
        } else {
          $("#sideImgLeftCarrier").attr("src", "transparent.png");
        }
        
        //Hide original imgs and reveal img carriers
        $("#imgBig").css("display","none");
        $("#imgBigCarrier").css("display","block");
        $("#sideImgLeft").css("display","none");
        $("#sideImgLeftCarrier").css("display","block");
        $("#sideImgRight").css("display","none");
        $("#sideImgRightCarrier").css("display","block");
        
        //Send middle image to left side
        $( "#imgBigCarrier" )
          .animate({
            left: "-=300",
            height: "200px",
            width: "300px",
            marginBottom:"+100px"
          }, transTime);
        
        //Send right image to middle
        $( "#sideImgRightCarrier" )
          .animate({
            left: "-=450",
            top: "-=100",
            height: "400px",
            width: "600px",
          }, transTime);
        
        //If there's another image in the array, send it to right side
        if (current < (imgs.length-2)) {
          $("#imgBack").attr("src", imgs[current+2] );
        } else {
          $("#imgBack").attr("src", "transparent.png");
        }
        $( "#imgBack" )
        .animate({
          left: "+=300",
          top: "-=50",
          height: "200px",
          width: "300px",
        }, transTime);
        
        //Right picture should go "on top" of middle picture halfway thru transition
        setTimeout(function() {
          $( "#imgBigCarrier" )
            .css("z-index", 5)
            .css("box-shadow", "none");
          $( "#sideImgRightCarrier" )
            .css("z-index", 7)
            .css("box-shadow", "1px 1px 3px 2px #322D24");
          
          //Middle picture should go "on top" of left picture halfway thru transition
          $( "#sideImgLeftCarrier" )
            .css("z-index", 2);
        }, (transTime/2));
        
        //Swap out original images (while they're hidden)
        $("#sideImgLeft").attr("src", imgs[current] );
        $("#imgBig").attr("src", imgs[current+1] );
        current++;
        //If we're at the end of the carousel, don't populate right image
        if (current < (imgs.length-1)) {
            $("#sideImgRight").attr("src", imgs[current+1]);
        } else {
            $("#sideImgRight").attr("src", "transparent.png");
        }
        
        //At end of animation, hide carriers and reveal original imgs
        //Set brief delay to reduce flickering
        setTimeout(function() {
          $("#imgBig").css("display","block");
          $("#imgBigCarrier").css("display","none");
          $("#sideImgLeft").css("display","block");
          $("#sideImgLeftCarrier").css("display","none");
          $("#sideImgRight").css("display","block");
          $("#sideImgRightCarrier").css("display","none");
        
          //Reset image carriers
          $( "#imgBigCarrier" ).removeAttr("style");
          $( "#imgBack" ).removeAttr("style");
          $( "#sideImgRightCarrier" ).removeAttr("style");
          rotating = false;
        },transTime + 100);
      
        
      }
    });
      



    //Rotate right
    $("#rhomb2").click( function() {
      
      //Wait for animation to finish before rotating again
      if (rotating) return;
      
      //Don't rotate if we're at the end of the carousel
      if (current > 0) {
        rotating = true;
        
        //Set carriers to contain the img behind them
        $("#imgBigCarrier").attr("src", imgs[current]);
        $("#sideImgLeftCarrier").attr("src", imgs[current-1]);
        //Don't set right side if we're at the end of the carousel
        if (current != (imgs.length-1)) {
          $("#sideImgRightCarrier").attr("src", imgs[current+1]);
        } else {
          $("#sideImgRightCarrier").attr("src", "transparent.png");
        }
        
        //Hide original imgs and reveal img carriers
        $("#imgBig").css("display","none");
        $("#imgBigCarrier").css("display","block");
        $("#sideImgLeft").css("display","none");
        $("#sideImgLeftCarrier").css("display","block");
        $("#sideImgRight").css("display","none");
        $("#sideImgRightCarrier").css("display","block");
        
        //Send middle image to right side
        $( "#imgBigCarrier" )
          .animate({
            left: "+=300",
            height: "200px",
            width: "300px",
            marginBottom:"+100px"
          }, transTime);
        
        //Send left image to middle
        $( "#sideImgLeftCarrier" )
          .animate({
            left: "+=150",
            top: "-=100",
            height: "400px",
            width: "600px",
          }, transTime);
        
        //If there's another image in the array, send it to left side
        if (current > 1) {
          $("#imgBack").attr("src", imgs[current-2] );
        } else {
          $("#imgBack").attr("src", "transparent.png");
        }
        $( "#imgBack" )
        .animate({
          left: "-=300",
          top: "-=50",
          height: "200px",
          width: "300px",
        }, transTime);
        
        //Left picture should go "on top" of middle picture halfway thru transition
        setTimeout(function() {
          $( "#imgBigCarrier" )
            .css("z-index", 5)
            .css("box-shadow", "none");
          $( "#sideImgLeftCarrier" )
            .css("z-index", 7)
            .css("box-shadow", "1px 1px 3px 2px #322D24");
          
          //Middle picture should go "on top" of right picture halfway thru transition
          $( "#sideImgRightCarrier" )
            .css("z-index", 2);
        }, (transTime/2));
        
        //Swap out original images (while they're hidden)
        $("#sideImgRight").attr("src", imgs[current] );
        $("#imgBig").attr("src", imgs[current-1] );
        current--;
        //If we're at the end of the carousel, don't populate left image
        if (current > 0) {
            $("#sideImgLeft").attr("src", imgs[current-1]);
        } else {
            $("#sideImgLeft").attr("src", "transparent.png");
        }
        
        //At end of animation, hide carriers and reveal original imgs
        //Set brief delay to reduce flickering
        setTimeout(function() {
          $("#imgBig").css("display","block");
          $("#imgBigCarrier").css("display","none");
          $("#sideImgLeft").css("display","block");
          $("#sideImgLeftCarrier").css("display","none");
          $("#sideImgRight").css("display","block");
          $("#sideImgRightCarrier").css("display","none");

          //At end of animation, reset image carriers
          $( "#imgBigCarrier" ).removeAttr("style");
          $( "#imgBack" ).removeAttr("style");
          $( "#sideImgLeftCarrier" ).removeAttr("style");
          rotating = false;
        },transTime + 100);
        
        
      }
    });