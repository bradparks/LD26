package com.jah2488.ld48.enough.levels;

import com.jah2488.ld48.enough.PlatformState;
import com.jah2488.ld48.enough.levels.LevelTwoState;

import org.flixel.FlxG;
import org.flixel.FlxGroup;

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