
package com.jah2488.ld48.enough;

import com.jah2488.ld48.Level;
import com.jah2488.ld48.enough.Tiles;
import com.jah2488.ld48.enough.Player;

import nme.Assets;
import nme.geom.Rectangle;
import nme.net.SharedObject;
import org.flixel.FlxButton;
import org.flixel.FlxG;
import org.flixel.FlxPath;
import org.flixel.FlxSave;
import org.flixel.FlxSprite;
import org.flixel.FlxGroup;
import org.flixel.FlxState;
import org.flixel.FlxText;
import org.flixel.FlxU;
import org.flixel.FlxObject;
import org.flixel.FlxPoint;


class Registry {

	public static var player  : Player;

	public static function init() {
		player  = new Player();
	}
}

class TutorialState extends PlatformState
{

    override public function create():Void
    {
    	super.create();

		add(level   = new Level("mapCSV_Tutorial_Map2.csv"));
        spriteLayer = new Level("mapCSV_Tutorial_Map3.csv");
        sprites = new FlxGroup();
        hazards = new FlxGroup();

		add(player);

		assignSpritesToMap();

        add(sprites);
        add(hazards);

		FlxG.camera.setBounds(0,0,level.width,level.height,true);
		FlxG.camera.follow(player);
    }

    override private function nextLevel():Void {
    	FlxG.switchState(new LevelOneState());
    }
}

class LevelOneState extends PlatformState
{
	override public function create():Void
	{
    	super.create();

    	player.y = LEVEL_START.y = 100;
    	player.x = LEVEL_START.x = 40;

		add(level   = new Level("mapCSV_levelOne_Map1.csv"));
        spriteLayer = new Level("mapCSV_levelOne_Map2.csv");
        sprites = new FlxGroup();
        hazards = new FlxGroup();

		add(player);

		assignSpritesToMap();

        add(sprites);
        add(hazards);

		FlxG.camera.setBounds(0,0,level.width,level.height,true);
		FlxG.camera.follow(player);
	}

    override private function nextLevel():Void {
    	FlxG.switchState(new LevelTwoState());
    }

}

class LevelTwoState extends PlatformState
{
	override public function create():Void
	{
		super.create();

    	player.y = LEVEL_START.y = 100;
    	player.x = LEVEL_START.x = 40;

		add(level   = new Level("mapCSV_LevelTwo_Map1.csv"));
        spriteLayer = new Level("mapCSV_LevelTwo_Map2.csv");
        sprites = new FlxGroup();
        hazards = new FlxGroup();

		add(player);

		assignSpritesToMap();

        add(sprites);
        add(hazards);

		FlxG.camera.setBounds(0,0,level.width,level.height,true);
		FlxG.camera.follow(player);
	}

    override private function nextLevel():Void {
    	FlxG.switchState(new LevelThreeState());
    }

}

class LevelThreeState extends PlatformState
{
	override public function create():Void
	{
		super.create();

    	player.y = LEVEL_START.y = 100;
    	player.x = LEVEL_START.x = 40;

		add(level   = new Level("mapCSV_LevelThree_Map1.csv"));
        spriteLayer = new Level("mapCSV_LevelThree_Map2.csv");
        sprites = new FlxGroup();
        hazards = new FlxGroup();

		add(player);

		assignSpritesToMap();

        add(sprites);
        add(hazards);

		FlxG.camera.setBounds(0,0,level.width,level.height,true);
		FlxG.camera.follow(player);
	}
	
    override private function nextLevel():Void {
    	FlxG.switchState(new LevelFourState());
    }
}

class LevelFourState extends PlatformState
{
	override public function create():Void
	{
		super.create();

    	player.y = LEVEL_START.y = 100;
    	player.x = LEVEL_START.x = 40;

		add(level   = new Level("mapCSV_LevelFour_Map1.csv"));
        spriteLayer = new Level("mapCSV_LevelFour_Map2.csv");
        sprites = new FlxGroup();
        hazards = new FlxGroup();

		add(player);

		assignSpritesToMap();

        add(sprites);
        add(hazards);

		FlxG.camera.setBounds(0,0,level.width,level.height,true);
		FlxG.camera.follow(player);
	}
	
    override private function nextLevel():Void {
    	FlxG.switchState(new WinState());
    }

}

class WinState extends PlatformState
{
	var credits:FlxText;

	override public function create():Void
	{
		super.create();
		credits = new FlxText((FlxG.width / 2) - 75, FlxG.height * 0.95, 75, "@JAH2488");
		credits.color  = 0xff000000;

		level = new Level("mapCSV_Win_Map1.csv");
        sprites = new FlxGroup();

        for(tile in [1,2,3]) {
        	var c = level.getTileCoords(tile, false);
        	if(c != null) {
		    	for(point in c) {
		    		var sprite = Type.createInstance(World, [point.x, point.y]);
		    		sprite.frame = 3;
		    		sprites.add(sprite);
	        	}
			}
        }

        add(sprites);
     	add(credits);

		FlxG.camera.setBounds(0,0,level.width,level.height,true);
	}
	
}


class PlatformState extends FlxState
{
	var LEVEL_START:FlxPoint;
	var player:Player;
	var level:Level;
	var spriteLayer:Level;
	var sprites:FlxGroup;
	var hazards:FlxGroup;

	override public function create():Void
	{
		Registry.init();

		FlxG.bgColor = 0xffffffff;
		FlxG.mouse.hide();

        LEVEL_START = new FlxPoint(20.0, 20.0);
		player = Registry.player;
		player.x = LEVEL_START.x;
		player.y = LEVEL_START.y;
        
        FlxG.playMusic("Upbeat");
	}

	public function assignSpritesToMap():Void
	{
        for(tileNum in [14, 15]) {
	        var c = level.getTileCoords(tileNum, false);
	        if(c !=null) {
	        	for(point in c) {
	        		var sprite = Type.createInstance(Spike, [point.x + 1, point.y - 1]);
	        		hazards.add(sprite);
	        	}
	        }
        }

        for(tile in [Power, Door, Lava, Health, Goal]) {
        	var c = spriteLayer.getTileCoords(Type.createInstance(tile, [0,0]).tile, false);
        	if(c != null) {
		    	for(point in c) {
		    		var sprite = Type.createInstance(tile, [point.x, point.y]);
		    		sprites.add(sprite);
	        	}
			}
        }

	}
	
	override public function destroy():Void
	{
		super.destroy();
	}

    private function pickUp(player:FlxObject, sprite:FlxObject):Void
    {
    	if(cast(sprite,Tile).tile == 5) {
    		FlxG.flash(0xffffffff, 1, nextLevel);
		} else {
	    	FlxG.play("Pickup");
	    	LEVEL_START.x = sprite.x;
	    	LEVEL_START.y = sprite.y;
	    	player.flicker(1);
	    	cast(player, Player).setColor(cast(sprite, Tile).playerColor);
	    	sprite.kill();
		}
    }

    private function nextLevel():Void {
    	FlxG.switchState(new MenuState());
    }

    private function touchLevel(player:FlxObject, tile:FlxObject):Void {
    	var player = cast(player, Player);
    	if(player.isTouching(FlxObject.CEILING) && player.connected == false) {
    		player.connected = true;
	    	FlxG.play("Click");
    	}
    }

    private function hazardCollide(player:FlxObject, tile:FlxObject):Void {
    	cast(player, Player).die(LEVEL_START.x, LEVEL_START.y);
    }

	override public function update():Void
	{
		FlxG.collide(player, level);
		FlxG.collide(sprites, level);
		FlxG.overlap(player, level, touchLevel);
		FlxG.collide(player, sprites, pickUp);
		FlxG.overlap(player, hazards, hazardCollide);

		super.update();

		if(player.y > (level.height + player.height * 4)) {
			if(player.state() != player.NORMAL) {
				player.y = 0 - player.height;
			} else {
		    	player.die(LEVEL_START.x, LEVEL_START.y);
			}
		}
		if(player.y < (0 - player.height * 4)) {
			if(player.state() != player.NORMAL) {
				player.y = level.height;
			} else {
		    	player.die(LEVEL_START.x, LEVEL_START.y);
			}
		}
	}	
}