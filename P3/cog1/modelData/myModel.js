/**
 * 3D Data Store for custom model.
 * 
 * @namespace cog1.data
 * @module empty
 */
define(["exports", "data"], function(exports, data) {
	"use strict";

	/**
	 * Create an instance of the model defined in this module.
	 * 
	 * @parameter object with fields:
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {
		
		if(parameter) {
			var scale = parameter.scale;
			
		}
		
		if(scale == undefined){
			scale = 200;
			
		}
		
		// Instance of the model to be returned.
		var instance = {};

        // Vertex indices:							
		//   7----6
		//	/|   /|
		// 3----2 |
		// | 4--|-5
		// |/   |/
		// 0----1
		instance.vertices = [
		    //VORNE
			[ 0.1, 0, 0],
			[ 0.9, 0, 0],
			[ 1, 0.1, 0],
			
			[ 1, 0.3, 0],
			[ 1.2, 0.25, 0],
			[ 1.35, 0.25, 0],
			[ 1.35, 0.4, 0],
			[ 1.4, 0.4, 0],
			[ 1.45, 0.38, 0],
			[ 1.6, 0.47, 0],
			[ 1.75, 0.42, 0],
			[ 1.83, 0.43, 0],
			[ 1.9, 0.41, 0],
			[ 2.2, 0.46, 0],
			[ 2.4, 0.32, 0],
			[ 2.5, 0.4, 0],
			[ 2.55, 0.35, 0],
			[ 2.75, 0.5, 0],
			[ 2.65, 0.65, 0],
			[ 1, 0.65, 0],
			
			[ 1, 0.9, 0],
			[ 0.9, 1, 0],
			[ 0.1, 1, 0],
			[ 0, 0.9, 0],
			[ 0, 0.1, 0],
			[ 0.1, 0, 0],
			
			//HINTEN
			
			[ 0.1, 0, 0.15],
			[ 0.9, 0, 0.15],
			[ 1, 0.1, 0.15],
			
			[ 1, 0.3, 0.15],
			[ 1.2, 0.25, 0.15],
			[ 1.35, 0.25, 0.15],
			[ 1.35, 0.4, 0.15],
			[ 1.4, 0.4, 0.15],
			[ 1.45, 0.38, 0.15],
			[ 1.6, 0.47, 0.15],
			[ 1.75, 0.42, 0.15],
			[ 1.83, 0.43, 0.15],
			[ 1.9, 0.41, 0.15],
			[ 2.2, 0.46, 0.15],
			[ 2.4, 0.32, 0.15],
			[ 2.5, 0.4, 0.15],
			[ 2.55, 0.35, 0.15],
			[ 2.75, 0.5, 0.15],
			[ 2.65, 0.65, 0.15],
			[ 1, 0.65, 0.15],
			
			[ 1, 0.9, 0.15],
			[ 0.9, 1, 0.15],
			[ 0.1, 1, 0.15],
			[ 0, 0.9, 0.15],
			[ 0, 0.1, 0.15],
			[ 0.1, 0, 0.15],
			
		];
		instance.polygonVertices = [
		
		    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
			[26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],
			[0,1,27,26],
			[1,2,28,27],
			[2,3,29,28],
			[3,4,30,29],
			[4,5,31,30],
			[5,6,32,31],
			[6,7,33,32],
			[7,8,34,33],
			[8,9,35,34],
			[9,10,36,35],
			[10,11,37,36],
			[11,12,38,37],
			[12,13,39,38],
			[13,14,40,39],
			[14,15,41,40],
			[15,16,42,41],
			[16,17,43,42],
			[17,18,44,43],
			[18,19,45,44],
			[19,20,46,45],
			[20,21,47,46],
			[21,22,48,47],
			[22,23,49,48],
			[23,24,50,49],
			[24,25,51,50]
		];	
		instance.polygonColors = [0,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4];
		
		data.applyScale.call(instance, scale);
		
		return instance;		
	};
});