/*
* jQuery Multi-Column-Select v0.1
*
* Copyright (c) 2014 DanSmith
*
* Licensed under MIT
*
*/
(function ( $ ) {
        
        $.fn.MultiColumnSelect = function( options ) {
        
        var settings = $.extend({
            menuclass : 'columnselect', 
            openmenu : 'openmenubutton',
            openmenutext : 'Choose An Option',
            menucontainer : 'menucontainer',
            menuitem : 'menuitem',
	    idprefix : 'msc-',
            showitemtext : true,
            hideclass : 'hidden',
            openclass : 'open',
            clearclass : 'clear',
            multiple: false,
            duration : 200
        }, options );

        $selector = this.selector;
        
		var args = [];
		
		    
        //Plugin Vars
        $control = $($selector+' select');
        $selectoptions = $($selector+' select option');
        $optioncount = 0;   $optionvals = [];   $optionids = [];
            
        //Hide the original select box
        $control.addClass(settings.menuclass)
		//.addClass(settings.hideclass);
        
         //generate menu button and the container below the orginal select box.
        //Adds a clear class so content is pushed down when animated.
        $($selector).append("<a class='"+settings.openmenu+"'>"+settings.openmenutext+"</a><div class='"+settings.clearclass+"'></div><div class='"+settings.menucontainer+"'></div>");

        //get elements in dropdown
        $selectoptions.each(function(e)
        {
          //Push count, value and text
          $optioncount += 1;
          
		  var settext = '';
		  if (settings.showitemtext == true) settext = $(this).text();
		  $('.'+settings.menucontainer).append("<a class='"+ settings.menuitem+"' data='"+ $(this).attr('value') +"' id='"+settings.idprefix+$optioncount+"'>" + settext + "</a>");
        });

        // check for click event
        // on option click
        $($selector).delegate('a.'+ settings.menuitem, 'click', function(e){ 
        $itemdata = $(this).attr('data');
                        
	   //single selection
	   if (settings.multiple == false) {
	   
                    $($selector).find('select').val($itemdata); //bind form value
                    $('a.'+ settings.menuitem).removeClass('active'); //remove all active states
                    $(this).addClass('active'); //add new active state to clicked item
            
            }
            
            if (settings.multiple == true) {
                 
                if ( $(this).hasClass('active')){		
			//already selected, unselect it
			$(this).removeClass('active');
                        var removeItem = $itemdata; //ID to be removed
                        args.splice( $.inArray(removeItem,args) ,1 ); //Look up at the ID and remove it	                       
		}else{                    
			$(this).addClass('active');
			args.push($itemdata); 		
            	};
		
		//Update the values on the selectbox
                $($selector).find('select').val(args);
		
            };
            e.preventDefault(); 
    });
		
		

        //open close the menu
        $($selector).delegate('a.'+settings.openmenu, 'click', function(e){
                if ($(this).hasClass(settings.openclass)){         
                    $(this).removeClass(settings.openclass);
                    $('.'+settings.menucontainer).animate({height:0},settings.duration, function(){
                        $('.'+settings.menucontainer).hide();
                    }); 
                }else{                
                    $(this).addClass(settings.openclass);
                    $('.'+settings.menucontainer).height(0).show();                  
                    $total = Math.round($optioncount / numberofcolumns('.'+settings.menuitem,'.'+settings.menucontainer));
                    $blockheight = trueheight('.'+settings.menuitem); //add the padding
                    
                    var paddingtop = $('.'+settings.menucontainer).css('padding-top');
                    var paddingbottom = $('.'+settings.menucontainer).css('padding-top');
                    paddingtop = parseInt(paddingtop.match(/[0-9]+/g));
                    paddingbottom = parseInt(paddingbottom.match(/[0-9]+/g));
                    padding = paddingtop + paddingbottom;
                    
                    $newheight = $total * $blockheight + padding;
             
                    //Set the height of the container
                    $('.'+settings.menucontainer).animate({height:$newheight},settings.duration);

                };
                e.preventDefault();            
            });     
            return this;
        };
        
        
        function trueheight(ele){
            //Padding/Margin and Borders
            var addheight = $(ele).outerHeight(true) - $(ele).innerHeight();
            var height = $(ele).height();              
            return height + addheight;            
        }
              
        function numberofcolumns(ele,parent){
            return Math.round(100 / getwidthaspercent(ele,parent));
        };            
        
        function getwidthaspercent(ele,parent){                        
                     var width = $(ele).width();
                     var parentWidth = $(parent).width();
                     var percent = 100*width/parentWidth;
                   return Math.round(percent);   
        };
        
        
}( jQuery ));
