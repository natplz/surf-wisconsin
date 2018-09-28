var imgs = ["Resized/1_sunset_small.jpg", "Resized/1_man_surfing_darkgreen_small.jpg", "Resized/1_man_surfing_teal_small.jpg", "Resized/1_man_swimming_small.jpg", "Resized/1_man_surfing_sideways_small.jpg"];
    var current = 2;
    var transTime = 500; //Transition time = 500ms
    
    //Set default images in image carousel
    $("#imgBig").attr("src",imgs[current]);
    $("#sideImgLeft").attr("src",imgs[current-1]);
    $("#sideImgRight").attr("src",imgs[current+1]);
    
    
    
    //Rotate left
    $("#rhomb1").click( function() {
      
      //Don't rotate if we're at the end of the carousel
      if (current < (imgs.length-1)) {
        
        
        //Set carriers to contain the img behind them
        $("#imgBigCarrier").attr("src", imgs[current]);
        if (current != 0) {
          $("#sideImgLeftCarrier").attr("src", imgs[current-1]);
        } else {
          $("#sideImgLeftCarrier").attr("src", "transparent.png");
        }
        $("#sideImgRightCarrier").attr("src", imgs[current+1]);

        
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
            top: "+=100",
            height: "200px",
            width: "300px",
            marginBottom:"+200px"
          }, transTime, function() { 
            //At end of animation, remove all added style values
            $(this).removeAttr("style"); 
        });
        
        //Send right image to middle
        $( "#sideImgRightCarrier" )
          .animate({
            left: "-=450",
            top: "-=100",
            height: "400px",
            width: "600px",
          }, transTime, function() { 
            //At end of animation, remove all added style values
            $(this).removeAttr("style"); 
        });
        
        //If there's another image in the array, send it to right side
        if (current < (imgs.length-2)) {
          $("#imgBack").attr("src", imgs[current+2] );
          $( "#imgBack" )
          .animate({
            left: "+=600",
            top: "-=5",
            height: "200px",
            width: "300px",
          }, transTime, function() { 
            //At end of animation, remove all added style values
            $(this).removeAttr("style"); 
        });
        }
        
        //Right picture should go "on top" of middle picture halfway thru transition
        setTimeout(function() {
          $( "#imgBigCarrier" )
          .css("z-index", 5)
          .css("box-shadow", "none");
        $( "#sideImgRightCarrier" )
          .css("z-index", 7)
          .css("box-shadow", "1px 1px 3px 2px #322D24");
        }, (transTime/2));
          
        //Middle picture should go "on top" of left picture halfway thru transition
        setTimeout(function() {
        $( "#sideImgLeftCarrier" )
          .css("z-index", 2);
        /*$( "#overlay1" )
          .css("z-index", 3)*/
        }, (transTime/2));
        
        /*
        //Make right overlay invisible during transition so it doesn't show up on top of things
        $("#overlay2").css("display", "none");
        setTimeout(function() {
          $("#overlay2").css("display", "block");
        },transTime);
        */
        
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
        setTimeout(function() {
          $("#imgBig").css("display","block");
          $("#imgBigCarrier").css("display","none");
          $("#sideImgLeft").css("display","block");
          $("#sideImgLeftCarrier").css("display","none");
          $("#sideImgRight").css("display","block");
          $("#sideImgRightCarrier").css("display","none");
        },transTime);
        
          
        
        
      }
    });
      
    //Rotate right
    $("#rhomb2").click( function() {
      
      //Don't rotate if we're at the end of the carousel
      if (current > 0) {
        
        //Set carriers to contain the img behind them
        $("#imgBigCarrier").attr("src", imgs[current]);
        $("#sideImgLeftCarrier").attr("src", imgs[current-1]);
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
            top: "+=100",
            height: "200px",
            width: "300px",
            marginBottom:"+200px"
          }, transTime).promise().done( function() { 
            //At end of animation, remove all added style values
            $(this).removeAttr("style");
        });
        
        //Send left image to middle
        $( "#sideImgLeftCarrier" )
          .animate({
            left: "+=150",
            top: "-=100",
            height: "400px",
            width: "600px",
          }, transTime, function() { 
            //At end of animation, remove all added style values
            $(this).removeAttr("style"); 
        });
        
        //If there's another image in the array, send it to left side
        if (current > 1) {
          $("#imgBack").attr("src", imgs[current-2] );
          $( "#imgBack" )
          .animate({
            left: "-=600",
            top: "-=5",
            height: "200px",
            width: "300px",
          }, transTime, function() { 
            //At end of animation, remove all added style values
            $(this).removeAttr("style"); 
        });
        }
        
        //Left picture should go "on top" of middle picture halfway thru transition
        setTimeout(function() {
          $( "#imgBigCarrier" )
          .css("z-index", 5)
          .css("box-shadow", "none");
        $( "#sideImgLeftCarrier" )
          .css("z-index", 7)
          .css("box-shadow", "1px 1px 3px 2px #322D24");
        }, (transTime/2));
          
        //Middle picture should go "on top" of right picture halfway thru transition
        setTimeout(function() {
        $( "#sideImgRightCarrier" )
          .css("z-index", 2);
        /*$( "#overlay2" )
          .css("z-index", 3)*/
        }, (transTime/2));
        
        //Make left overlay invisible during transition so it doesn't show up on top of things
        /*$("#overlay1").css("display", "none");
        setTimeout(function() {
          $("#overlay1").css("display", "block");
        },transTime);*/
        
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
        setTimeout(function() {
          $("#imgBig").css("display","block");
          $("#imgBigCarrier").css("display","none");
          $("#sideImgLeft").css("display","block");
          $("#sideImgLeftCarrier").css("display","none");
          $("#sideImgRight").css("display","block");
          $("#sideImgRightCarrier").css("display","none");
        },transTime);
        
          
        
        
      }
    });