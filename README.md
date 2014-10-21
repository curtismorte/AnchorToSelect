AnchorToSelect
==============
<p>AnchorToSelect is a jQuery plugin that will get all anchor elements inside of a multiple containers and add them to an HTML select element<p>

<h2>Dependecies</h2>
<ul>
<li>jQuery 1.6+</li>
</ul>

<h2>Default Options</h2>
<p>AnchorToSelect has three default options:</p>
```
{
  container: [],
  idName: 'anchortoselect',
	debugFlag: 0,
	placeholder: 'Select a page to visit'
}
```

<h4>Option Definitions</h4>
<p><strong>container:</strong> is an array object. It requires that the user pass an array of selectors to container so it knows where to look for anchor elements.
<p><strong>idName:</strong> is a string value. It's the ID attribute that will be added to the generated select element.</p>
<p><strong>debugFlag:</strong> is a boolean value. If set to 1, you will see an output of all links that were iterated over and their respective containers inside of the console.</p>
<p><strong>placeholder:</strong> is a string value. It's will be added to the text for the first option element of the generated <select> element.</p>

<h2>Usage</h2>
<p>To use the plugin, define your container and create an empty div so AnchorToSelect knows where to place the select element.</p>
```
<body>

  ...
  <div id="generatedSelect">
    <!-- Generated <select> will go here -->
  </div>
  ...

</body>

<script>
  $(document).ready(function(){   
  		//Generate our anchorToSelect Plugin
  		$("#generatedSelect").anchorToSelect({
  			 container: ['.containerClass', '#containerId'],
  			 placeholder: 'Select Your Profession'
  		});
  		    	
  });
</script>
```





