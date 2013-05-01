package;

import com.jah2488.ld48.enough.Registry;
import com.jah2488.ld48.enough.levels.TutorialState;
import com.jah2488.ld48.Level;
import nme.Assets;
import nme.geom.Rectangle;
import nme.net.SharedObject;
import org.flixel.FlxButton;
import org.flixel.FlxG;
import org.flixel.FlxPath;
import org.flixel.FlxSave;
import org.flixel.FlxSprite;
import org.flixel.FlxState;
import org.flixel.FlxText;
import org.flixel.FlxU;
import org.flixel.FlxTilemap;

import com.jah2488.ld48.enough.Tiles.World;
import com.jah2488.ld48.enough.levels.WinState;



class MenuState extends FlxState
{
	var level:Level;

	override public function create():Void
	{
		FlxG.playMusic("Ambient");
		FlxG.bgColor = 0xff000000;
        FlxG.flash(0xff000000, 1, flashWhite);
	}

	private function flashWhite():Void {
        FlxG.flash(0xffffffff, 2, addMap);
	}

	private function addMap():Void {

		var map = new FlxTilemap();
		var level = map.loadMap(Assets.getText("assets/levels/mapCSV_Menu_Map1.csv"), "assets/world.png", 16, 16, FlxTilemap.OFF, 0, 0, 1);

        for(tile in [1, 2]) {
        	var c = level.getTileCoords(tile, false);
        	if(c != null) {
		    	for(point in c) {
		    		var sprite = Type.createInstance(World, [point.x, point.y]);
		    		add(sprite);
	        	}
			}
        }

	}
	
	override public function destroy():Void
	{
		super.destroy();
	}

	override public function update():Void
	{
		super.update();
		if(FlxG.keys.any()){
		  FlxG.switchState(new TutorialState());
		}
	}	
}