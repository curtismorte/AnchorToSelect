AnchorToSelect v1.0
==============
<p>AnchorToSelect is a jQuery plugin that will get all anchor elements inside of a one or more container(s) and add them as options to an HTML select element which will be added to a specified place in the document.<p>
<p>AnchorToSelect comes with a development (3KB) and minified version (2KB).</p>

<h2>Dependecies</h2>
<ul>
<li>jQuery 1.6+</li>
</ul>

<h2>Default Options</h2>
<p>AnchorToSelect has four default options:</p>

```
{
  container: [],
  idName: 'anchortoselect',
  debugFlag: 0,
  placeholder: 'Select a page to visit'
}
```

<h4>Option Definitions</h4>
<ul>
<li><strong>container:</strong> takes an array object. It requires that the user pass an array of selectors to container so it knows where to look for anchor elements.</li>
<li><strong>idName:</strong> takes a string value. It's the ID attribute that will be added to the generated select element.</li>
<li><strong>debugFlag:</strong> takes a boolean value. If set to 1, you will see an output of all links that were iterated over and their respective containers inside of the console.</li>
<li><strong>placeholder:</strong> takes a string value. It's will be added as the text for the first option element of the generated select element.</li>
</ul>

<h2>Usage</h2>
<p>To use the plugin, fill the container array and create an empty division so AnchorToSelect knows where to place the select element in the document.</p>

```html
<body>

  <!-- Get all the anchor elements inside of <nav> -->
  <nav class="containerClass">
    <ul>
      <li>
        <a href="#something_1">Something 1</a>
      </li>
      <li>
        <a href="#something_2">Something 2</a>
      </li>
      <li>
        <a href="#something_3">Something 3</a>
      </li>
    </ul>
  </nav>
  
  <!-- Get all the anchor elements inside of parent <div> -->
  <div id="containerId">
    <a href="#something_4">Something 4</a>
    <div>
      <a href="#something_5">Something 5</a>
      <a href="#something_6">Something 6</a>
      <a href="#something_7">Something 7</a>
    </div>
  </div>

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
  			 container: ['.containerClass', '#containerId']
  		});
  		    	
  });
</script>
```





