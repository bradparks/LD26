package com.jah2488.ld48.enough.levels;

import com.jah2488.ld48.enough.PlatformState;
import com.jah2488.ld48.enough.levels.LevelOneState;

import org.flixel.FlxG;
import org.flixel.FlxGroup;

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
