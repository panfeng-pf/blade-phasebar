/*!
 * Blade Phase Bar - v1.0.0 - 2013-07-12
 * jQuery Plug-in
 * http://github.com/panfeng-pf/blade-phasebar
 * Copyright (c) 2013 Blade Pan; Licensed BSD
 * Dependency: jQuery (test with jQuery v1.9.1)
 */
(function($) {
	$.fn.bladePhaseBar = function(options) {
		var opts = $.extend({}, $.fn.bladePhaseBar.defaults, options);
		return this.each(function() {
			var $phaseBar = $(this);
			if($phaseBar.hasClass('phasebar')) {
				var $line = $phaseBar.children('hr.line');
				var $lineUndo = $phaseBar.children('hr.line.line-undo:first');
				var $lineDone = $phaseBar.children('hr.line.line-done:first');
				var $phases = $phaseBar.children('div.phase');
				
				$line.css({
					'left': '' + opts.phaseSpacing / 2 + 'px'
					,'top': '' + (opts.spotHeight / 2 - opts.lineHeight / 2) + 'px'
					,'height': '' + opts.lineHeight + 'px'
				});
				
				var lineUndoLen = ($phases.length - 1) * opts.phaseSpacing;
				$lineUndo.css({
					'width': '' + lineUndoLen + 'px'
					,'background': opts.colorUndo
					,'color': opts.colorUndo
				});
				
				var lineDoneLen = $lineDone.attr('rate') * opts.phaseSpacing;
				$lineDone.css({
					'width': '' + lineDoneLen + 'px'
					,'background': opts.colorDone
					,'color': opts.colorDone
				});
				
				var maxPhaseHeight = 0;
				$phases.each(function(index, element) {
					var $phase = $(this);
					var $spot = $phase.children('div.spot');
					
					$phase.css({
						'width': '' + opts.phaseSpacing + 'px'
						,'left': '' + (index * opts.phaseSpacing) + 'px'
					});
					
					$spot.css({
						'width': '' + opts.spotWitdth + 'px'
						,'height': '' + opts.spotHeight + 'px'
						,'line-height': '' + opts.spotHeight + 'px'
					});
					
					if($spot.hasClass('spot-undo')) $spot.css({'background': opts.colorUndo});
					else if($spot.hasClass('spot-doing')) $spot.css({'background': opts.colorDoing});
					else if($spot.hasClass('spot-fail')) $spot.css({'background': opts.colorFail});
					else if($spot.hasClass('spot-done')) $spot.css({'background': opts.colorDone});
					
					var minSize = min(opts.spotWitdth, opts.spotHeight);
					if($spot.hasClass('spot-capsule')) $spot.css({'border-radius': '' + (minSize / 2) + 'px'});
					if($spot.hasClass('spot-rounded')) $spot.css({'border-radius': '' + (minSize / 4) + 'px'});
					if($spot.hasClass('spot-ellipse')) $spot.css({'border-radius': '' + (opts.spotWitdth / 2) + 'px / ' + (opts.spotHeight / 2) + 'px'});
					
					maxPhaseHeight = max(maxPhaseHeight, $phase.height());
				});
				$phaseBar.height(maxPhaseHeight);
			}
		});
	};
	
	function max(n1, n2) {
		return n1 > n2 ? n1 : n2;
	}
	
	function min(n1, n2) {
		return n1 > n2 ? n2 : n1;
	}
	
	$.fn.bladePhaseBar.defaults = {
		phaseSpacing: 100,
		lineHeight: 2,
		spotWitdth: 20,
		spotHeight: 20,
		colorUndo: 'lightgrey',
		colorDone: 'orange',
		colorDoing: 'lightgreen',
		colorFail: 'red'
	};
})(jQuery);
