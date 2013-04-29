
package com.jah2488.ld48;

import org.flixel.FlxTilemap;
import org.flixel.FlxObject;
import org.flixel.FlxSprite;
import nme.Assets;

class Level extends FlxTilemap {

    static public inline var TILE_WIDTH    = 16;
    static public inline var TILE_HEIGHT   = 16;
    static public inline var START_INDEX   = 0;
    static public inline var DRAW_INDEX    = 1;
    static public inline var COLLIDE_INDEX = 1;

    static public inline var MAP_DIR       = "assets/levels/";
    static public inline var TILE_LOCATION = "assets/platformTiles.png";

    public function new(location:String) {
    	super();
		loadMap(Assets.getText(MAP_DIR + location), TILE_LOCATION, TILE_WIDTH, TILE_HEIGHT, FlxTilemap.OFF, START_INDEX, DRAW_INDEX, COLLIDE_INDEX);
    }
}