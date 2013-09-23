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
	var _ribbonImagesMax = 12;

	var _ribbonClones = {};
	var that = this;

	/**
	 *
	 */
	this.init = function()
	{
		_initImages();
		_initRibbons();

		// register event handler
		$('#machine_play').click(function(){
			that.play();
		});
	};

	/**
	 *
	 * @private
	 */
	function _initImages()
	{
		_ribbonImagesPath = 'images/items/';

		for(var i = 0;i < _ribbonImagesMax;i++) {
			_ribbonImages.push(i + '.jpg');
		}
	}

	/**
	 *
	 * @private
	 */
	function _initRibbons()
	{
		for(var i = 1;i <= 3;i++) {

			_shuffle(_ribbonImages);
			$('#slot' + i + ' div.ribbon').html = '';

			for(var j = 0;j < _ribbonImages.length; j++) {
				var imageElement = $('<img src="' + _ribbonImagesPath + _ribbonImages[j] + '" alt="' + j + '">');

 				$('#slot' + i + ' div.ribbon' ).append(imageElement);
			}

			_ribbonClones[i] = $('#slot' + i + ' .ribbon').clone();
		}
	}

	/**
	 *
	 * @param arr
	 * @return {*}
	 * @private
	 */
	function _shuffle(arr)
	{
		for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);

		return arr;
	}

	/**
	 * Only as prototype/test ... needs
	 * better (real) implementation
	 */
	this.play = function()
	{
		var height = $('#slot1 .ribbon').height() - 400;

		_animateSlot(1, 1800, height);
		_animateSlot(2, 2200, height);
		_animateSlot(3, 2800, height);
	};

	/**
	 *
	 * @param slotNr
	 * @param duration
	 * @param height
	 * @private
	 */
	function _animateSlot(slotNr, duration, height)
	{
		$('#slot' + slotNr + ' .ribbon').animate({ "top": "-=" + height + "px" }, duration, 'swing', function(){
			$('#slot' + slotNr + ' .ribbon').append(_ribbonClones[slotNr]);
		} );
	}
};

var slotmachine = new Slotmachine();

$(document).ready(function(){
	slotmachine.init();
});