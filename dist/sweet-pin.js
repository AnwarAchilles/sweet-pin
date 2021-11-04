/**
 * @description
 * Sweet js constructor
 * 
 * @param {obeject} option
 */
function SweetPin(option={}) {
	this._opt = {
		target: option.target || ".sweet-pin",
		range: option.range || 6,
		disable: false,
		disableOnSuccess: option.disableOnSuccess || false,
		ready: option.ready || null,
		success: option.success || null
	};
	this._data = [];
	this._input = document.querySelector(this._opt.target+" .pin-head input");
	this._button = document.querySelectorAll(this._opt.target+" .pin-body *");
	this.success = this._opt.success || this._opt.ready || function(){ alert("SweetPin : Success"); }
	this.init();
}

/**
 * @description
 * to do callback function if success
 */
SweetPin.prototype.__success = function(){
	this.response = this._data.join("");
	this.respone = this._data.join("");
	this.result = this._data.join("");
	
	this.success();
};

/**
 * @description
 * to do add disable button
 * 
 * @param {boolean} state
 */
SweetPin.prototype.__disable = function(state){
	if (state==true){
		this._button.forEach( function(button){
			if (button.value!="delete" && button.value!=""){
				button.setAttribute("disabled","disabled");
			}
		});
	}else {
		this._button.forEach( function(button){
			if (button.value!="" && button.value!=null){
				button.removeAttribute("disabled");
			}
		});
	}
};

/**
 * @description
 * to do control value if click
 * 
 * @param {element} e
 */
SweetPin.prototype.__control = function(e){
	this.pin = e.getAttribute("pin");
	
	if (this.pin!="delete" && this.pin!="clear" && this.pin!="submit"){
		if (this._data.length != this._opt.range){
			this._data.push( this.pin );
		}
	}
	if (this.pin=="delete"){
		this._data.pop();
	}
	if (this.pin=="clear"){
		this._data = [];
	}
	if (this.pin=="submit"){
		if (this._opt.disableOnSuccess==true){
			this.__disable(true);
		}
		this.__success().bind(this);
	}
	this._input.value = "*".repeat(this._data.length);
};

/**
 * @description
 * to do initialize
 */
SweetPin.prototype.init = function(){
	this._input.setAttribute("disabled","disabled");
	for (i=0; i<this._button.length; i++) {
		this._button[i].addEventListener("click", function(e){
			this.__control( e.srcElement );
			if (this._data.length == this._opt.range){
				this.__disable(true);
				this.__success().bind(this);
			}else {
				this.__disable(false);
			}
		}.bind(this));
	}
};