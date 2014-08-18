<h1>Multi-Column-Select</h1>



![alt tag](http://www.djsmith.me/PLUGS/mcs/mcs.jpg)

<h4>Jquery CSS Multi Column Select Box</h4>
<p>A Simple plugin (3Kb) that will hide the Select control and then display a multicolumn dropdown (css)</p>
<p>Uses the original form control so will work if JS is not enabled and the form can be processed as normal</p>
<h4><a href="http://djsmithme.github.io/Multi-Column-Select/">demo</a></h4>

<h2>Installation</h2>

<pre>

Load the CSS:
"MultiColumnSelect/MultiColumnSelect.css"

Include js plugin:
"MultiColumnSelect/MultiColumnSelect.js"

</pre>

<p>Updated 0.3 - Will not work with older versions</p>
<ul>
<li> Fixed issue with multiple selects </li>
<li> Added Destroy method </li>
<li> Remove clear class </li>
<li> Removed/renamed some plugin settings</li>
</ul>

<h2>Set up your HTML</h2>

```
    <form action="test.php" method="GET">

    <div id="selectcontrol">
        <select name="car">
                <option value="Audi">Audi</option>
                <option value="Bugatti">Bugatti</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Daihatsu">Daihatsu</option>
                <option value="Ford">Ford</option>
                <option value="GM">General Motors</option>
                <option value="Honda">Honda</option>
                <option value="Infiniti">Infiniti</option>
                <option value="Jeep">Jeep</option>
                <option value="Kia">Kia</option>
     </select>
    </div>
    
        <input type="submit" value="Submit" />
    
    </form>

```
Wrap the select control with a div and give that container an ID

<h2>CSS</h2>

This is the HTML that the plugin produces (classed/ID's can be changed in the options):

```
<div class="mcs-container">
	<a id="mcs-1" data="Audi" class="mcs-item active">Audi</a>
	<a id="mcs-2" data="Bugatti" class="mcs-item">Bugatti</a>
	<a id="mcs-3" data="Chrysler" class="mcs-item active">Chrysler</a>
	<a id="mcs-4" data="Daihatsu" class="mcs-item">Daihatsu</a>
	<a id="mcs-5" data="Ford" class="mcs-item">Ford</a>
	<a id="mcs-6" data="GM" class="mcs-item active">General Motors</a>
	<a id="mcs-7" data="Honda" class="mcs-item">Honda</a>
	<a id="mcs-8" data="Infiniti" class="mcs-item">Infiniti</a>
</div>

```
So feel free to style it however you like. 

The only styles to worry about are :

```
//toggle open /close button
.mcs-open {
}

//container wrap for menu
.mcs-container {
        overflow:hidden;            
        display:none;                    
}

//menu items / option replacements
.mcs-item {
}


```


<h2>Call the plugin</h2>

```javascript
$("#selectcontrol").MultiColumnSelect({

            multiple:           false,              // Single or Multiple Select- Default Single
            useOptionText :     true,               // Use text from option. Use false if you plan to use images
            hideselect :        true,               // Hide Original Select Control
            openmenuClass :     'mcs-open',         // Toggle Open Button Class
            openmenuText :      'Choose An Option', // Text for button
            openclass :         'open',             // Class added to Toggle button on open
            containerClass :    'mcs-container',    // Class of parent container
            itemClass :         'mcs-item',         // Class of menu items
            idprefix : null,                        // Assign as ID to items eg 'item-' = #item-1, #item-2, #item-3...
            duration : 200,                         //Toggle Height duration
            onOpen : function(){},
            onClose : function(){},
            onItemSelect : function(){}

});

//Add item to selectbox
$('#selectcontrol').MultiColumnSelectAdditem(OptionID,OptionValue,IDPrefix);


//Destroy plugin
$("#selectcontrol").MultiColumnSelectDestroy();




```


<h2>Tested on</h2>
<ul>
<li>IE7+</li>
<li>Safari</li>
<li>Firefox </li>
<li>Chrome</li>
</ul>


<h2>License</h2>

<p>The MIT License (MIT)</p>
