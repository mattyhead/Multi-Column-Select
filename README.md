<h1>Multi-Column-Select</h1>



![alt tag](http://www.djsmith.me/PLUGS/mcs/mcs.jpg)

<h4>Jquery CSS Multi Column Select Box</h4>
<p>A Simple plugin that will hide the Select control and then display a multicolumn dropdown (css)</p>
<p>Uses the original form control so will work if JS is not enabled and the form can be processed as normal</p>
<h4><a href="http://djsmithme.github.io/Multi-Column-Select/">demo</a></h4>

<h2>Installation</h2>

<pre>

Load the CSS:
"MultiColumnSelect/MultiColumnSelect.css"

Include js plugin:
"MultiColumnSelect/MultiColumnSelect.js"

</pre>

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
<div class="menucontainer">
	<a id="msc-1" data="Audi" class="menuitem active">Audi</a>
	<a id="msc-2" data="Bugatti" class="menuitem">Bugatti</a>
	<a id="msc-3" data="Chrysler" class="menuitem active">Chrysler</a>
	<a id="msc-4" data="Daihatsu" class="menuitem">Daihatsu</a>
	<a id="msc-5" data="Ford" class="menuitem">Ford</a>
	<a id="msc-6" data="GM" class="menuitem active">General Motors</a>
	<a id="msc-7" data="Honda" class="menuitem">Honda</a>
	<a id="msc-8" data="Infiniti" class="menuitem">Infiniti</a>
</div>

```
So feel free to style it however you like. 

The only styles to worry about are :

```
.openmenubutton{
}

.menucontainer{
        overflow:hidden;            
        display:none;                    
}

.menuitem{
}

.hidden  // to hide the original select box

```


<h2>Call the plugin</h2>

```javascript
$("#selectcontrol").MultiColumnSelect({

            menuclass : 'multicolumnselect',     // class given to control
            openmenu : 'openmenubutton',         // used to toggle menu open/closed
            openmenutext : 'Choose',   // Text for toggle menu button
            menucontainer : 'menucontainer',     // Container Class
            menuitem : 'menuitem',               // Item Class
            idprefix : 'msc-',                  //Id Prefix of items eg msc-1,msc-2....
			showitemtext : true                 //Hide/Show text from options (if using images)
            hideclass : 'hidden',                // hide Class
            openclass : 'open',                  // Open Class
            clearclass : 'clear',                // Clear Class
            duration : 200                       // Animation Duration
            
           
            
            
            
            //TODO
            
            onOpenMenu: function(){};
            onCloseMenu: function(){};
            on...
            
            $.MulticolumnSelect.additem('ID','Value');
            $.MulticolumnSelect.additem({{'ID','Value'},{'ID','Value'},{'ID','Value'}});
            $.MulticolumnSelect.removeitem('ID');
            $.MulticolumnSelect.destroy();
            $.MulticolumnSelect.create({options});

});
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
