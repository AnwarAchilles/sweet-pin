# Sweet Pin JS
#### created by Anwar Achilles

Simple JS pin gadget, develop with vanilla JS 
can control length/disabe/button and secure input 
data in JS with callback function for action.

![sweet-pin](/asset/sweet-pin-1.jpg "sweet-pin")
![sweet-pin](/asset/sweet-pin-2.jpg "sweet-pin")
![sweet-pin](/asset/sweet-pin-3.jpg "sweet-pin")



### Install Via NPM
````shell
$ npm install --save-dev sweet-pin
````



### Get Started

JS instance object
````js
new SweetJs({
	// target: ".sweet-pin",
	// range: 6,
	// disable: true,
	// disableOnSuccess: true,
	success: function() {
		// do something here
		// this.response | this.result
	}
});
````


HTML structure
````html
<!-- Sweet Pin Parent -->
<div class="sweet-pin">
	<!-- child for input pin -->
	<div class="pin-head">
		<input type="text" name="pin" id="pin" placeholder="SERIAL"/>
	</div>
	<!-- child for button pin -->
	<div class="pin-body">
		<!-- number 1-9 -->
		<button value="1">1</button>
		<button value="2">2</button>
		<button value="3">3</button>
		<button value="4">4</button>
		<button value="5">5</button>
		<button value="6">6</button>
		<button value="7">7</button>
		<button value="8">8</button>
		<button value="9">9</button>
		<!-- delete/clear -->
		<button value="delete">×</button>
		<!-- number 0 -->
		<button value="0">0</button>
		<!-- null/submit -->
		<button value="submit" type="submit">✓</button>
	</div>
</div>
````
**note** important .pin-head & .pin-body






### Option

**target** (element)
````
	Parent element's Query selector
````
**range** (integer)
````
	Max length of Pin inputed
````
**disable** (boolean)
````
	Disable/Enable input if pin ready
````
**disableOnSuccess** (integer)
````
	Disable/Enable if submit clicked
````
**success** (function)
````
	Callback function triggered if pin already filled
````
**ready** (function)
````
	Alias of success option
````