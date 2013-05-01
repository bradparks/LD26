package com.jah2488.ld48.enough.levels;

import com.jah2488.ld48.enough.PlatformState;
import com.jah2488.ld48.enough.Tiles;

import org.flixel.FlxG;
import org.flixel.FlxGroup;
import org.flixel.FlxText;

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