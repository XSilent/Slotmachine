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

	this.init = function()
	{
		_initImages();
		_initRibbons();

		// register event handler
		$('#machine_play').click(function(){
			that.play();
		});
	};

	function _initImages()
	{
		_ribbonImagesPath = 'images/items/';

		for(var i = 0;i < _ribbonImagesMax;i++) {
			_ribbonImages.push(i + '.jpg');
		}
	}

	function _initRibbons()
	{
		for(var i = 1;i <= 3;i++) {

			_shuffle(_ribbonImages);
			$('#slot' + i + ' div.ribbon').html = '';

			for(var j = 0;j < _ribbonImages.length; j++) {
				var imageElement = $('<img src="' + _ribbonImagesPath + _ribbonImages[j] + '" alt="dingsda">');

 				$('#slot' + i + ' div.ribbon' ).append(imageElement);
			}

			_ribbonClones[i] = $('#slot' + i + ' .ribbon').clone();
		}
	}

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
		//this.init();
		var height = $('#slot1 .ribbon').height() - 400;


		$('#slot1 .ribbon').animate({ "top": "-=" + height + "px" }, 1800, 'swing', function(){
			$('#slot1 .ribbon').append(_ribbonClones[1]);
		} );

		$('#slot2 .ribbon').animate({ "top": "-=" + height + "px" }, 2200, 'swing', function(){
			$('#slot2 .ribbon').append(_ribbonClones[2]);
		} );

		$('#slot3 .ribbon').animate({ "top": "-=" + height + "px" }, 2800, 'swing', function(){
			$('#slot3 .ribbon').append(_ribbonClones[3]);
		});

	};
};
var slotmachine = new Slotmachine();

$(document).ready(function(){
	slotmachine.init();
});