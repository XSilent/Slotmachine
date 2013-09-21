/**
 * Slotmachine
 *
 * @author XSilent
 * @constructor
 */
var Slotmachine = function()
{

	this.init = function()
	{
		//var element = jQuery('#slot1 .ribbon');

		var mydiv = $("div:last");
		var offset = mydiv.offset();

		console.log(offset.top);
	};


};
var slotmachine = new Slotmachine();

slotmachine.init();