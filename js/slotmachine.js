/**
 * Slotmachine
 *
 * @author XSilent
 * @constructor
 */
var Slotmachine = function()
{
	var _ribbonImagesPath;
	var _ribbonImages = [];

	this.init = function()
	{
		//var element = jQuery('#slot1 .ribbon');

		var mydiv = $("div:last");
		var offset = mydiv.offset();

		_initImages();
		_initRibbons();
	};

	function _initImages()
	{
		_ribbonImagesPath = 'images/items/';

		_ribbonImages.push('0.jpg');
		_ribbonImages.push('1.jpg');
		_ribbonImages.push('2.jpg');
		_ribbonImages.push('3.jpg');
		_ribbonImages.push('4.jpg');
		_ribbonImages.push('5.jpg');
		_ribbonImages.push('6.jpg');
		_ribbonImages.push('7.jpg');
		_ribbonImages.push('8.jpg');
		_ribbonImages.push('9.jpg');
		_ribbonImages.push('10.jpg');
		_ribbonImages.push('11.jpg');
		_ribbonImages.push('12.jpg');
	}

	function _initRibbons()
	{
		for(var i = 1;i <= 3;i++) {

			_shuffle(_ribbonImages);

			for(var j = 0;j < _ribbonImages.length; j++) {
				var imageElement = $('<img src="' + _ribbonImagesPath + _ribbonImages[j] + '" alt="dingsda">');

 				$('#slot' + i + ' div.ribbon' ).append(imageElement);
			}
		}
	}

	function _shuffle(arr)
	{
		for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);

		return arr;
	}

	this.play = function()
	{

	};

};
var slotmachine = new Slotmachine();

$(document).ready(function(){
	slotmachine.init();
});