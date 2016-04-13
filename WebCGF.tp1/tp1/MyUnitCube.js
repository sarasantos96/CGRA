/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
             0.5, 0.5, -0.5,    //A
            -0.5, 0.5, -0.5,    //B
            -0.5, -0.5, -0.5,   //C
             0.5, -0.5, -0.5,   //D
             0.5, 0.5, 0.5,     //E
            -0.5, 0.5, 0.5,     //F
            -0.5, -0.5, 0.5,    //G
             0.5, -0.5, 0.5     //H
			];

	this.indices = [
            0, 4, 7, //AEHD
            7, 3, 0,
            1, 2, 6, //BCGF
            6, 5, 1,
            1, 5, 4, //BFEA
            4, 0, 1,
            2, 1, 0, //ADCB
            0, 3, 2,
            4, 7, 3, //EHDA
            3, 0, 4,
            3, 7, 6, //HGCD
            6, 2, 3,
            4, 5, 6, //EFGH
            6, 7, 4      
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
