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

    <div class="selectcontrol">
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
Wrap the select control with a div and give that container an ID or class

<h2>CSS</h2>


```
.openmenubutton{
}

.menucontainer{
        overflow:hidden;            
        display:none;                    
}

.menuitem{
}
```


<h2>Call the plugin</h2>

```javascript
$(".selectcontrol").MultiColumnSelect({

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
