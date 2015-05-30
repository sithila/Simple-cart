
$(document).ready(function() {
    CART.Init.Document()
	
});
$(window).load(function() {
    CART.Init.Window()
});
var timeOut;
CART = {
    Init: {
		
        Document: function() {
		
			CART.cartDropdown.init();
			//CART.carousel.init();
			CART.modelPopupFunctions.init();
			CART.mobileFuctions.init();
			CART.shopingFunctions.init();
            
        },
        Window: function() {
            //CART.TimerIntervals.Init()
        }
    },

    Properties: {
        IsLteIE7: false,
        IsLteIE8: false,
        IsLteIE9: false,
        IsMobile: false,
        IsFullMobile: false,
        IsPhone: false,
        Check: function() {
            this.IsLteIE7 = typeof ie7 != "undefined";
            this.IsLteIE8 = typeof ie8 != "undefined";
            
        }
    },
    UI: {
		document: $(document),
		docwidth: $(document).width(),
		cartDropdownLink:".dropdown-link",
		cartDropdown:".dropdown",
		windowwidth: $(window).width()
    },
	mobileFuctions: {
		
		 init:function() {
			 $(".header-expand-icon").click(function(event) {
	$(event.target).parent().find('.inner-wrapper').toggleClass('show');
			 });
	
		 }
	},
	carousel: {
		init:function() {
			
			var carousel = $('.carousel ul');
    var carouselChild = carousel.find('li');
    var clickCount = 0;
    var canClick = true;
    
    itemWidth = carousel.find('li:first').width()+1;
	carousel.width(itemWidth*carouselChild.length);
	refreshChildPosition();
	
	$('.carosel-right').click(function(e){
		//alert('next');      
        if($(".carousel").find("li:eq(6)").text()!='14' ) {
             $('.carosel-left').show();
            if(canClick) {
                canClick = false;
                clickCount++;
                //Animate the slider to left as item width 
                carousel.stop(false, true).animate({
                    left : '-='+itemWidth
                },300, function(){
                    //Find the first item and append it as the last item.
                    lastItem = carousel.find('li:first');
                    lastItem.remove().appendTo(carousel);
                    lastItem.css('left', ((carouselChild.length-1)*(itemWidth))+(clickCount*itemWidth));
                    canClick = true;
                });
                if ($(".carousel").find("li:eq(7)").text()=='14'){
                  $('.carosel-right').hide();  
                }
            }
        } 
    });

$('.carosel-left').click(function(){
         
        if($(".carousel").find("li:eq(0)").text()!=1) {
            $('.carosel-right').show();
            if(canClick){
                canClick = false;
                clickCount--;
                //Find the first item and append it as the last item.
                lastItem = carousel.find('li:last');
                lastItem.remove().prependTo(carousel);
                
                lastItem.css('left', itemWidth*clickCount);				
                //Animate the slider to right as item width 
                carousel.finish(true).animate({
                    left: '+='+itemWidth
                },300, function(){
                    canClick = true;
                });
                if ($(".carousel").find("li:eq(0)").text()=='1'){
                  $('.carosel-left').hide();
                }
            }
        } 
    });
	
	 function refreshChildPosition(){
        carouselChild.each(function(){
            $(this).css('left', itemWidth*carouselChild.index($(this)));
        });
    }
			
		}
		
	},
	cartDropdown: {
		
		 init:function() {
			 
			$(".dropdown-link").click(function(event) {
				var width = $(event.target).width();
				var x = $(event.target).offset();
        //alert("Top: " + x.top + " Left: " + x.left);
				
				//var left = $(event.target).position().left;
				//alert(left);
				

//Get
var getpos = $(event.target);
var offset = getpos.offset();
var height = getpos.height();

var pageWidth = $(".inner-wrapper").width();
var elementWidth = $(event.target).parent().find('.dropdown').width();

//set
//$("#secondElementId").offset({ top: offset.top, left: offset.left})


       $(event.target).parent().find('.dropdown').toggleClass('show').offset({ top: offset.top + height + 5 , left: offset.left});
	   var elementLeft = $(event.target).parent().find('.dropdown').position().left;

//alert(elementLeft);
	   
	   if (pageWidth - (elementWidth + elementLeft) < 0) {
		   
    $('.dropdown').offset({ top: offset.top + height + 5 , left: offset.left - elementWidth });
	$('.dropdown .arrow').offset({ left: offset.left});
	
} else {
    $('.dropdown').offset({ left: offset.left});
	$('.dropdown .arrow').offset({ left: offset.left});
}
	   
                if (timeOut) {
                    clearTimeout(timeOut);
                }
    });
			 
	
		 
		 $(CART.UI.cartDropdownLink).hover(function() {
                if (timeOut) {
                    clearTimeout(timeOut);
                }
            }, function() {
			
					timeOut = setTimeout("CART.cartDropdown.hideDropdown()", 500);
			
            });
			$(CART.UI.cartDropdown).hover(function() {
                   if (timeOut) {
                    clearTimeout(timeOut);
                }
				}, function() {
					timeOut = setTimeout("CART.cartDropdown.hideDropdown()", 500);
				});	
		 
		 },
		 hideDropdown:function() {
         
		 $('.dropdown').each(function(){
    if($(this).hasClass('show')) {
        $(this).removeClass('show');
    } 
});
		 
		 //thisdropdown.parent().removeClass('show');
               
		 }
	//alert('sfsfsfff');
   },
   
   shopingFunctions:{
	   
	 init:function() {
		 
		
		$( ".cart-box").click(function(e) { //when user clicks on cart box
		e.preventDefault(); 
		$(".shopping-cart-box").fadeIn(); //display cart box
		$("#shopping-cart-results").html('<img src="images/ajax-loader.gif">'); //show loading image
		$("#shopping-cart-results" ).load( "cart_process.php", {"load_cart":"1"}); //Make ajax request using jQuery Load() & update results
	}); 
		 
		// $(".addtocart").click(function(e){ //user click "add to cart" button
//    e.preventDefault();
//    var button_content = $(this); //this triggered button
//    var iqty = 2; //get quantity
//    var icode = 'TSH2'; //get product code
//    button_content.html('Adding...'); //Loading button text
//    //button_content.attr('disabled','disabled'); //disable button before Ajax request
//    $.ajax({ //make ajax request to cart_process.php
//        url: "cart_process.php",
//        type: "POST",
//        dataType:"json", //expect json value from server
//        data: { quantity: iqty, product_code: icode}
//    }).done(function(data){ //on Ajax success
//	alert("Item added to Cart!"); //alert user
//        $("#cart-info").html(data.items); //total items in cart-info element
//        button_content.html('Add to Cart'); //reset button text to original text
//        alert("Item added to Cart!"); //alert user
//    })
//});

$("#shopping-cart-results").on('click', 'a.remove-item', function(e) {
	
		e.preventDefault(); 
		//$('#shop-min').toggleClass('show');
		var pcode = $(this).attr("data-code"); //get product code
		$(this).parent().fadeOut(); //remove item element from box
		$.getJSON( "cart_process.php", {"remove_code":pcode} , function(data){ //get Item count from Server
			$("#cart-info").html(data.items); //update Item count in cart-info
			$(".cart-box").trigger( "click" ); //trigger click on cart-box to update the items list
		});
		
		$('#shop-min').toggleClass('show');
		
	});
		 
	 }
	   
   },
   
   modelPopupFunctions:{
		
		ShowDialog:function(modal, att1) {	
        //alert(modal);
		
		var windowwidth = $(window).width();
        var scrollval = $(window).scrollTop();
        $(".model_dialog .dialog").css("position", "relative").css("top", scrollval);
        if (windowwidth == 320 || windowwidth == 480 || windowwidth == 360 || windowwidth == 640) {
            $(".model_dialog").css("left", 0);
            $(".model_dialog").css("width", 320);
            $(".dialog").css("width", 300);
            $(".dialog .dialog_body .sign-up-content").css("padding", 0);
            $(".dialog .dialog_body .model-form-content").css("padding", 0);
            $(".form-row input[type='text']").css("width", 240);
        } else {
            //$(".model_dialog").css("left", $(document).width() / 2 - 400);
           // $(".model_dialog").css("left", 180);
        }
        //$("body").css("overflow", "hidden");
		alert(att1);
        $("#overlay").show();
        $("." + att1).fadeIn(300);	
		},
		
		HideDialog: function(modal, att1)
   {
      $("#overlay").hide();
      $(".model_dialog").each(function() {
         $(this).fadeOut(300);
      });
	  $("body").css("overflow", "auto");
      //$("#dialog").fadeOut(300);
   },
	
		init:function() {
			$("#category-model").click(function(event) {
                var att1 = $(this).attr('rel');
                CART.modelPopupFunctions.ShowDialog(true, att1);
				$("#overlay").hide();
                event.preventDefault();
            });
			$("#sign-up").click(function(event) {
                var att1 = $(this).attr('rel');
                CART.modelPopupFunctions.ShowDialog(true, att1);
				$("#overlay").hide();
                event.preventDefault();
            });
			
			$(".product-view").click(function(event) {
                var att1 = $(this).attr('rel');
                CART.modelPopupFunctions.ShowDialog(true, att1);
				//$("#overlay").hide();
                event.preventDefault();
            });
            $(".close").click(function(event) {
                CART.modelPopupFunctions.HideDialog();
                event.preventDefault();
            });
            $(".cancel-model").click(function(event) {
                CART.modelPopupFunctions.HideDialog();
                event.preventDefault();
            });
            //this is to load news_right_menu news items
            
		}
	},
   

  
};

