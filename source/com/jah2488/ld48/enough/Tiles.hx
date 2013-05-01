
package com.jah2488.ld48.enough;

import org.flixel.FlxG;
import org.flixel.FlxSprite;
import org.flixel.FlxTimer;

class Tile extends FlxSprite
{
	public var tile = 0;
	public var playerColor = 0;
	var deathTimer:FlxTimer;

	public function new() {
		super();
		deathTimer = new FlxTimer();
	}

	override public function kill() {
		super.kill();
		deathTimer.start(3, 1, reviveTile);
		FlxG.log(deathTimer.timeLeft);
	}

	private function reviveTile(timer:FlxTimer) {
		revive();
		reset(x,y);
	}

	override public function update() {
		super.update();
	}
}


class World extends Tile
{
	public function new(x:Float, y:Float) {
		super();
		tile = 1;
		playerColor = 4;
		this.x = x;
		this.y = y;
		this.loadGraphic('assets/world.png', false, false, 16, 16);
		this.frame = 1;
	}
}

class Goal extends Tile
{
	public function new(x:Float, y:Float) {
		super();
		tile = 5;
		this.x = x;
		this.y = y;
		this.loadGraphic('assets/goal.png', true, false, 16, 16);
		this.addAnimation('flow', [0,1,2,3,4], 5);
		this.play('flow');
	}
}

class Spike extends Tile
{
	public function new(x:Float, y:Float) {
		super();
		tile = 14;//15;
		this.x = x;
		this.y = y;
		this.width  = 14;
		this.height = 18;
		this.visible = false;
	}
}
class Power extends Tile
{
	public function new(x:Float, y:Float) {
		super();
		tile = 1;
		playerColor = 4;
		this.x = x;
		this.y = y;
		this.loadGraphic('assets/power.png', true, false, 16, 16);
		this.addAnimation('flow', [0,1,2,3,4,5,6,7,8,9,10,11,12,13], 15);
		this.play('flow');
	}
}

class Door extends Tile
{
	public function new(x:Float, y:Float) {
		super();
		tile = 3;
		playerColor = 2;
		this.x = x;
		this.y = y;
		this.loadGraphic('assets/door.png', true, false, 16, 16);
		this.addAnimation('flow', [0,1,2,3,4,5,6,7,8,9,10,11], 15);
		this.play('flow');
	}
}

class Lava extends Tile
{
	public function new(x:Float, y:Float) {
		super();
		tile = 2;
		playerColor = 3;
		this.x = x;
		this.y = y;
		this.loadGraphic('assets/lava.png', true, false, 16, 16);
		this.addAnimation('flow', [0,1,2,3,4,5,6,7,8,9,10,11,12], 15);
		this.play('flow');
	}
}

class Health extends Tile
{
	public function new(x:Float, y:Float) {
		super();
		tile = 4;
		playerColor = 1;
		this.x = x;
		this.y = y;
		this.loadGraphic('assets/health.png', true, false, 16, 16);
		this.addAnimation('flow', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 15);
		this.play('flow');
	}
}
