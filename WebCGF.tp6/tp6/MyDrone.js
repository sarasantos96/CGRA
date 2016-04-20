/**
 * MyDrone
 * @constructor
 */
 function MyDrone(scene) {
 	CGFobject.call(this,scene);

 	this.initBuffers();

    this.speed= Math.PI/10;
 	this.angle;
 	this.rightRot=0;
 	this.leftRot=0;

 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;

 MyDrone.prototype.initBuffers = function() {
 	this.vertices = [
 	0.5,0.3,0,
 	-0.5,0.3,0,
 	0,0.3,2
 	];

 	this.indices = [
 	0, 1, 2, 
 	];

 /*	this.normals = [
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1
 	];

   this.texCoords = [
    this.minS, this.maxT,
    this.maxS, this.maxT,
    this.minS, this.minT,
    this.maxS, this.minT
    ]*/

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

 MyDrone.prototype.rotation = function(angle, speed){
     /*this.speed= speed /30;

     if(angle < 0){
         this.rightRot -= this.speed;

     }else{
        this.leftRot+=this.speed;
     }*/
     this.angle = angle;
 }

MyDrone.prototype.update = function(currTime){
    if(this.temp_angulo){
        this.angulo += this.temp_angulo;
        this.temp_angulo=0;
    }
}