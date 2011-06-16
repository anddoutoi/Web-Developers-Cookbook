/* semicolon to save us from other ignorant developers */
;(function ( $, undefined ) {
	/*
	 * private members
	 */
	var PLUGIN_NAME = 'nameOfPlugin',
		defaultSettings = {},// settings set by the plugin developer, not modifiable in userland
		topicalSettings = $.extend( {}, defaultSettings ),// make sure we can reset the default plugin settings
		methods = {
			init : function( runtimeSettings ) {
				// no need to do $( this ) because 'this' is already a jQuery object
				// maintain chainability
				return this.each( function () {
					// 'this' is now the DOM element
					var $this = $( this ),
						settings = $.extend( {}, topicalSettings, runtimeSettings );
				} );
			}
		};

	/*
	 * static members
	 */
	$[PLUGIN_NAME] = {
		overrideSettings : function ( settings ) {
			$.extend( topicalSettings, settings );
		},
		resetSettings : function ( ) {
			$.extend( topicalSettings, defaultSettings );
		}
	};

	/*
	 * method calling logic
	 */
	$.fn[PLUGIN_NAME] = function ( method ) {
		if ( methods[ method ] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( 'object' == typeof method || !method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}
	};

}( window.jQuery ));
