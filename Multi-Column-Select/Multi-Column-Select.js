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
            hideclass : 'hidden',
            openclass : 'open',
            clearclass : 'clear',
            duration : 200
        }, options );

            
            
        $selector = this.selector.replace( ".", "" );
            
        //Plugin Vars
        $control = $('.'+$selector+' select');
        $selectoptions = $('.'+$selector+' select option');
        $optioncount = 0;   $optionvals = [];   $optionids = [];
            
            
        //Hide the original select box
        $control.addClass(settings.menuclass).addClass(settings.hideclass);
        //get elements in dropdown
            $selectoptions.each(function(e)
            {
              //Push count, value and text
              $optioncount += 1;
              $optionvals.push($(this).text());
              $optionids.push($(this).attr('value'));
            });

        //generate menu button and the container below the orginal select box.
        //Adds a clear class so content is pushed down when animated.
        $('.'+$selector)
                    .append("<a class='"+settings.openmenu+"'>"+settings.openmenutext+"</a>\n\
                                <div class='"+settings.clearclass+"'></div><div class='"+settings.menucontainer+"'></div>");


        //Generate the columns of buttons from the supplied class and populate the menu container
        $.each( $optionvals, function( index, value ) {
        $('.'+settings.menucontainer).append("<a class='"+ settings.menuitem+"' data='"+ $optionids[index] +"'>" + value + "</a>");
        });



        //check for click event
        $('.'+$selector).delegate('a.'+ settings.menuitem, 'click', function(e){ 
            $('.Menu').val($(this).attr('data')); //bind form value
            $('a.'+ settings.menuitem).removeClass('active');
            $(this).addClass('active');
            e.preventDefault();        
        });


        $('.'+$selector).delegate('a.'+settings.openmenu+'', 'click', function(e){
                if ($(this).hasClass(settings.openclass)){         
                    $(this).removeClass(settings.openclass);
                    $('.'+settings.menucontainer).animate({height:0},settings.duration);                
                }else{                
                    $(this).addClass(settings.openclass);
             
                    // Totat / 3 * Height of Block
                    $total = Math.round($optioncount / numberofcolumns('.'+settings.menuitem));
                    $blockheight = trueheight('.'+settings.menuitem); //add the padding
                    $newheight = $total * $blockheight;
             
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
              
        function numberofcolumns(ele){
            return Math.round(100 / getwidthaspercent(ele));
        };            
        
        function getwidthaspercent(ele){                        
                     var width = $(ele).width();
                     var parentWidth = $(ele).offsetParent().width();
                     var percent = 100*width/parentWidth;
                   return Math.round(percent);   
        };
        
        
}( jQuery ));