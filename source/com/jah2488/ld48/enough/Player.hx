package com.jah2488.ld48.enough;

import org.flixel.FlxSprite;
import org.flixel.FlxObject;
import org.flixel.FlxG;
import org.flixel.FlxU;

class Player extends FlxSprite
{

   var PLAYER_SPEED:Float;
   public var GRAVITY = 375;
   public var connected = false;
   var upsidedown = 1;

   public var NORMAL = 0;
   public var POWER  = 4;
   public var LAVA   = 3;
   public var DOOR   = 2;
   public var HEALTH = 1;

    public function new() {
    	super();
        this.loadGraphic('assets/player.png', true, true, 16, 16);
		maxVelocity.x = 175;
		maxVelocity.y = 250;
		acceleration.y = GRAVITY;
        drag.x = maxVelocity.x*4;
        PLAYER_SPEED = maxVelocity.x*3;
    }

    public function setColor(color:Int):Void {
    	frame = color;
    }

    public function state():Int {
    	return	 Std.int(frame);
    }

    public function die(x:Float, y:Float) {
    	FlxG.play("Hurt");
    	acceleration.y = GRAVITY;
    	acceleration.x = 0;
    	frame = NORMAL;
    	reset(x, y);
    }

	override public function update() {

		super.update();

		if(isTouching(FlxObject.CEILING)) {
			connected = true;
		} else {
			connected = false;
		}

		if(state() == LAVA) {
			acceleration.y = 25;
			acceleration.x = 0;
		} else if(state() == DOOR) {
			acceleration.x = 0;
			acceleration.y = -GRAVITY;
		} else {
			acceleration.x = 0;
		    acceleration.y = GRAVITY * upsidedown;
		}

		if(acceleration.y < 0) {
			if(angle < 180) {
				angle += 20;
			} else {
				angle = 180;
			}
		} else {
			if(angle > 0 ){
				angle -= 10;
			} else {
				angle = 0;
			}
		}

		if(FlxG.keys.DOWN || FlxG.keys.S){
			if(state() == LAVA) {
				acceleration.y = 150;
			}
		}

		if(FlxG.keys.LEFT || FlxG.keys.A){
			if(state()!= DOOR){
			    facing = FlxObject.LEFT;
			} else {
			    facing = FlxObject.RIGHT;
			}
			acceleration.x = -PLAYER_SPEED;
		}

		if(FlxG.keys.RIGHT || FlxG.keys.D){
			if(state()!= DOOR){
			    facing = FlxObject.RIGHT;
			} else {
			    facing = FlxObject.LEFT;
			}
			acceleration.x = PLAYER_SPEED;
		}

		if(isTouching(FlxObject.FLOOR) || isTouching(FlxObject.CEILING)) {
		  if((FlxG.keys.SPACE || FlxG.keys.UP || FlxG.keys.W)) {
		  	if(connected == false) {
		  		FlxG.play("Jump");
		  	}
		  	if(state() != DOOR){
				velocity.y = -(upsidedown * (maxVelocity.y * 0.60) + FlxU.abs(velocity.x / 4));
	  		} else {
			    velocity.y = (maxVelocity.y * 0.60) + FlxU.abs(velocity.x / 4);
	  		}
		  }
		}

	}
}