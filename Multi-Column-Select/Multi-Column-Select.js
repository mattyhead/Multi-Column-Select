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
        $selector = this.selector;
        var args = [];
	$optioncount = 0;
        
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
            duration : 200,
            onClose: null,
            onOpen: null
            
        }, options );

	$(this).find('select').hide();
        this.append("<a class='"+settings.openmenu+"'>"+settings.openmenutext+"</a><div class='"+settings.menucontainer+"'></div> ");
            
        //get elements in dropdown
        this.find('select option').each(function(e,v)
        {
          //Push count, value and text
          $optioncount += 1;
                 var settext = '';
        	 if (settings.showitemtext == true) settext = $(this).text();
		 $(this).parent().siblings('.'+settings.menucontainer).append("<a class='"+ settings.menuitem+"' data='"+ $(this).attr('value') +"' id='"+settings.idprefix+$optioncount+"'>" + settext + "</a>");
        });
    
        // check for click event
        // on option click
        
        this.find('.'+settings.menuitem).on('click',function(e){
            
            $itemdata = $(this).attr('data');
            
            //single selection
	    if (settings.multiple == false) {
	            $(this).parent().siblings('select').val($itemdata); //bind form value
                    $(this).siblings('a.'+ settings.menuitem).removeClass('active'); //remove all active states
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
                $($selector).find('select').val(args);		
            };
            e.preventDefault();                        
        });
        
        getfullwidth($(this).find('.'+settings.menucontainer));
        
        //  .width($(this).next().width())
        
        this.find('.'+settings.openmenu).on('click',function(e){
        
                if ($(this).hasClass(settings.openclass)){         
                    $(this).removeClass(settings.openclass);                    
                    $(this).next().slideToggle( "slow", function() {
                            // Animation complete. :: add callback close
                           $.isFunction( settings.onClose ) && settings.onClose.call( this );
                            
                    });
                }else{                
                    $(this).addClass(settings.openclass);
                    
                    //Set the height of the container
                    $(this).next().slideToggle( "slow", function() {
                           $.isFunction( settings.onOpen ) && settings.onOpen.call( this );
                    })
                };
                e.preventDefault();                    
        });
        return this;
        };
        
        function getfullwidth(ele){
            
            basewidth = ele.width();
            padleft = ele.css('padding-left');
            padright = ele.css('padding-right');
            marleft = ele.css('margin-left');
            marright = ele.css('margin-right');
            
            
                        
            padleft = parseInt(padleft.match(/[0-9]+/g));
            padright = parseInt(padright.match(/[0-9]+/g));
            
         
            
            
        }
    
        function numberofcolumns(ele,parent){
            return Math.round(100 / getwidthaspercent(ele,parent));
        };            
        
        function getwidthaspercent(ele,parent){                        
                     var width = ele.width();
                     var parentWidth = parent.width();
                     var percent = 100*width/parentWidth;
                     return Math.round(percent);   
        };
        
}( jQuery ));
