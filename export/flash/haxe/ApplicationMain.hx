#if nme

import Main;
import nme.Assets;
import nme.events.Event;


class ApplicationMain {
	
	static var mPreloader:NMEPreloader;

	public static function main () {
		
		var call_real = true;
		
		
		var loaded:Int = nme.Lib.current.loaderInfo.bytesLoaded;
		var total:Int = nme.Lib.current.loaderInfo.bytesTotal;
		
		nme.Lib.current.stage.align = nme.display.StageAlign.TOP_LEFT;
		nme.Lib.current.stage.scaleMode = nme.display.StageScaleMode.NO_SCALE;
		
		if (loaded < total || true) /* Always wait for event */ {
			
			call_real = false;
			mPreloader = new org.flixel.system.FlxPreloader();
			nme.Lib.current.addChild(mPreloader);
			mPreloader.onInit();
			mPreloader.onUpdate(loaded,total);
			nme.Lib.current.addEventListener (nme.events.Event.ENTER_FRAME, onEnter);
			
		}
		
		
		#if !fdb
		haxe.Log.trace = flashTrace;
		#end
		
		if (call_real)
			begin ();
	}

	#if !fdb
	private static function flashTrace( v : Dynamic, ?pos : haxe.PosInfos ) {
		var className = pos.className.substr(pos.className.lastIndexOf('.') + 1);
		var message = className+"::"+pos.methodName+":"+pos.lineNumber+": " + v;
		
        if (flash.external.ExternalInterface.available)
			flash.external.ExternalInterface.call("console.log", message);
		else untyped flash.Boot.__trace(v, pos);
    }
	#end
	
	private static function begin () {
		
		var hasMain = false;
		
		for (methodName in Type.getClassFields(Main))
		{
			if (methodName == "main")
			{
				hasMain = true;
				break;
			}
		}
		
		if (hasMain)
		{
			Reflect.callMethod (Main, Reflect.field (Main, "main"), []);
		}
		else
		{
			var instance = Type.createInstance(Main, []);
			if (Std.is (instance, nme.display.DisplayObject)) {
				nme.Lib.current.addChild(cast instance);
			}	
		}
		
	}

	static function onEnter (_) {
		
		var loaded = nme.Lib.current.loaderInfo.bytesLoaded;
		var total = nme.Lib.current.loaderInfo.bytesTotal;
		mPreloader.onUpdate(loaded,total);
		
		if (loaded >= total) {
			
			nme.Lib.current.removeEventListener(nme.events.Event.ENTER_FRAME, onEnter);
			mPreloader.addEventListener (Event.COMPLETE, preloader_onComplete);
			mPreloader.onLoaded();
			
		}
		
	}

	public static function getAsset (inName:String):Dynamic {
		
		
		if (inName=="Beep")
			 
            return Assets.getSound ("Beep");
         
		
		if (inName=="Pickup")
			 
            return Assets.getSound ("Pickup");
         
		
		if (inName=="Click")
			 
            return Assets.getSound ("Click");
         
		
		if (inName=="Jump")
			 
            return Assets.getSound ("Jump");
         
		
		if (inName=="Hurt")
			 
            return Assets.getSound ("Hurt");
         
		
		if (inName=="Ambient")
			 
            return Assets.getSound ("Ambient");
		 
		
		if (inName=="Upbeat")
			 
            return Assets.getSound ("Upbeat");
		 
		
		if (inName=="Beat")
			 
            return Assets.getSound ("Beat");
		 
		
		if (inName=="assets/beebTiles.pxi")
			 
            return Assets.getBytes ("assets/beebTiles.pxi");
         
		
		if (inName=="assets/cPower.png")
			 
            return Assets.getBitmapData ("assets/cPower.png");
         
		
		if (inName=="assets/data/autotiles.png")
			 
            return Assets.getBitmapData ("assets/data/autotiles.png");
         
		
		if (inName=="assets/data/autotiles_alt.png")
			 
            return Assets.getBitmapData ("assets/data/autotiles_alt.png");
         
		
		if (inName=="assets/data/base.png")
			 
            return Assets.getBitmapData ("assets/data/base.png");
         
		
		if (inName=="assets/data/beep.mp3")
			 
            return Assets.getSound ("assets/data/beep.mp3");
		 
		
		if (inName=="assets/data/button.png")
			 
            return Assets.getBitmapData ("assets/data/button.png");
         
		
		if (inName=="assets/data/button_a.png")
			 
            return Assets.getBitmapData ("assets/data/button_a.png");
         
		
		if (inName=="assets/data/button_b.png")
			 
            return Assets.getBitmapData ("assets/data/button_b.png");
         
		
		if (inName=="assets/data/button_c.png")
			 
            return Assets.getBitmapData ("assets/data/button_c.png");
         
		
		if (inName=="assets/data/button_down.png")
			 
            return Assets.getBitmapData ("assets/data/button_down.png");
         
		
		if (inName=="assets/data/button_left.png")
			 
            return Assets.getBitmapData ("assets/data/button_left.png");
         
		
		if (inName=="assets/data/button_right.png")
			 
            return Assets.getBitmapData ("assets/data/button_right.png");
         
		
		if (inName=="assets/data/button_up.png")
			 
            return Assets.getBitmapData ("assets/data/button_up.png");
         
		
		if (inName=="assets/data/button_x.png")
			 
            return Assets.getBitmapData ("assets/data/button_x.png");
         
		
		if (inName=="assets/data/button_y.png")
			 
            return Assets.getBitmapData ("assets/data/button_y.png");
         
		
		if (inName=="assets/data/courier.ttf")
			 
			 return Assets.getFont ("assets/data/courier.ttf");
		 
		
		if (inName=="assets/data/cursor.png")
			 
            return Assets.getBitmapData ("assets/data/cursor.png");
         
		
		if (inName=="assets/data/default.png")
			 
            return Assets.getBitmapData ("assets/data/default.png");
         
		
		if (inName=="assets/data/etherial_hibpm.mp3")
			 
            return Assets.getSound ("assets/data/etherial_hibpm.mp3");
		 
		
		if (inName=="assets/data/fontData10pt.png")
			 
            return Assets.getBitmapData ("assets/data/fontData10pt.png");
         
		
		if (inName=="assets/data/fontData11pt.png")
			 
            return Assets.getBitmapData ("assets/data/fontData11pt.png");
         
		
		if (inName=="assets/data/handle.png")
			 
            return Assets.getBitmapData ("assets/data/handle.png");
         
		
		if (inName=="assets/data/logo.png")
			 
            return Assets.getBitmapData ("assets/data/logo.png");
         
		
		if (inName=="assets/data/logo_corners.png")
			 
            return Assets.getBitmapData ("assets/data/logo_corners.png");
         
		
		if (inName=="assets/data/logo_light.png")
			 
            return Assets.getBitmapData ("assets/data/logo_light.png");
         
		
		if (inName=="assets/data/nokiafc22.ttf")
			 
			 return Assets.getFont ("assets/data/nokiafc22.ttf");
		 
		
		if (inName=="assets/data/standard_beat.mp3")
			 
            return Assets.getSound ("assets/data/standard_beat.mp3");
		 
		
		if (inName=="assets/data/stick.png")
			 
            return Assets.getBitmapData ("assets/data/stick.png");
         
		
		if (inName=="assets/data/surreal_ambient.mp3")
			 
            return Assets.getSound ("assets/data/surreal_ambient.mp3");
		 
		
		if (inName=="assets/data/vcr/flixel.png")
			 
            return Assets.getBitmapData ("assets/data/vcr/flixel.png");
         
		
		if (inName=="assets/data/vcr/open.png")
			 
            return Assets.getBitmapData ("assets/data/vcr/open.png");
         
		
		if (inName=="assets/data/vcr/pause.png")
			 
            return Assets.getBitmapData ("assets/data/vcr/pause.png");
         
		
		if (inName=="assets/data/vcr/play.png")
			 
            return Assets.getBitmapData ("assets/data/vcr/play.png");
         
		
		if (inName=="assets/data/vcr/record_off.png")
			 
            return Assets.getBitmapData ("assets/data/vcr/record_off.png");
         
		
		if (inName=="assets/data/vcr/record_on.png")
			 
            return Assets.getBitmapData ("assets/data/vcr/record_on.png");
         
		
		if (inName=="assets/data/vcr/restart.png")
			 
            return Assets.getBitmapData ("assets/data/vcr/restart.png");
         
		
		if (inName=="assets/data/vcr/step.png")
			 
            return Assets.getBitmapData ("assets/data/vcr/step.png");
         
		
		if (inName=="assets/data/vcr/stop.png")
			 
            return Assets.getBitmapData ("assets/data/vcr/stop.png");
         
		
		if (inName=="assets/data/vis/bounds.png")
			 
            return Assets.getBitmapData ("assets/data/vis/bounds.png");
         
		
		if (inName=="assets/door.png")
			 
            return Assets.getBitmapData ("assets/door.png");
         
		
		if (inName=="assets/goal")
			 
            return Assets.getBytes ("assets/goal");
         
		
		if (inName=="assets/goal.png")
			 
            return Assets.getBitmapData ("assets/goal.png");
         
		
		if (inName=="assets/HaxeFlixel.svg")
			 
			 return Assets.getText ("assets/HaxeFlixel.svg");
         
		
		if (inName=="assets/health.png")
			 
            return Assets.getBitmapData ("assets/health.png");
         
		
		if (inName=="assets/lava.png")
			 
            return Assets.getBitmapData ("assets/lava.png");
         
		
		if (inName=="assets/LevelFour.dam")
			 
			 return Assets.getText ("assets/LevelFour.dam");
         
		
		if (inName=="assets/LevelFour.dam.bak")
			 
			 return Assets.getText ("assets/LevelFour.dam.bak");
         
		
		if (inName=="assets/levelOne.dam")
			 
			 return Assets.getText ("assets/levelOne.dam");
         
		
		if (inName=="assets/levelOne.dam.bak")
			 
			 return Assets.getText ("assets/levelOne.dam.bak");
         
		
		if (inName=="assets/levels/mapCSV_Group1_Map1.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_Group1_Map1.csv");
         
		
		if (inName=="assets/levels/mapCSV_Group1_Map2.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_Group1_Map2.csv");
         
		
		if (inName=="assets/levels/mapCSV_LevelFour_Map1.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_LevelFour_Map1.csv");
         
		
		if (inName=="assets/levels/mapCSV_LevelFour_Map2.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_LevelFour_Map2.csv");
         
		
		if (inName=="assets/levels/mapCSV_levelOne_Map1.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_levelOne_Map1.csv");
         
		
		if (inName=="assets/levels/mapCSV_levelOne_Map2.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_levelOne_Map2.csv");
         
		
		if (inName=="assets/levels/mapCSV_LevelThree_Map1.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_LevelThree_Map1.csv");
         
		
		if (inName=="assets/levels/mapCSV_LevelThree_Map2.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_LevelThree_Map2.csv");
         
		
		if (inName=="assets/levels/mapCSV_LevelTwo_Map1.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_LevelTwo_Map1.csv");
         
		
		if (inName=="assets/levels/mapCSV_LevelTwo_Map2.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_LevelTwo_Map2.csv");
         
		
		if (inName=="assets/levels/mapCSV_Menu_Map1.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_Menu_Map1.csv");
         
		
		if (inName=="assets/levels/mapCSV_Tutorial_Map2.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_Tutorial_Map2.csv");
         
		
		if (inName=="assets/levels/mapCSV_Tutorial_Map3.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_Tutorial_Map3.csv");
         
		
		if (inName=="assets/levels/mapCSV_Win_Map1.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_Win_Map1.csv");
         
		
		if (inName=="assets/levels/mapCSV_WorldMap_Map1.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_WorldMap_Map1.csv");
         
		
		if (inName=="assets/levels/mapCSV_WorldSelect_Map1.csv")
			 
			 return Assets.getText ("assets/levels/mapCSV_WorldSelect_Map1.csv");
         
		
		if (inName=="assets/levels/tutorial.dam")
			 
			 return Assets.getText ("assets/levels/tutorial.dam");
         
		
		if (inName=="assets/levels/tutorial.dam.bak")
			 
			 return Assets.getText ("assets/levels/tutorial.dam.bak");
         
		
		if (inName=="assets/levels/WorldMap.dam")
			 
			 return Assets.getText ("assets/levels/WorldMap.dam");
         
		
		if (inName=="assets/LevelThree.dam")
			 
			 return Assets.getText ("assets/LevelThree.dam");
         
		
		if (inName=="assets/LevelThree.dam.bak")
			 
			 return Assets.getText ("assets/LevelThree.dam.bak");
         
		
		if (inName=="assets/LevelTwo.dam")
			 
			 return Assets.getText ("assets/LevelTwo.dam");
         
		
		if (inName=="assets/LevelTwo.dam.bak")
			 
			 return Assets.getText ("assets/LevelTwo.dam.bak");
         
		
		if (inName=="assets/Menu.dam")
			 
			 return Assets.getText ("assets/Menu.dam");
         
		
		if (inName=="assets/Platformer.dam")
			 
			 return Assets.getText ("assets/Platformer.dam");
         
		
		if (inName=="assets/platformTiles.png")
			 
            return Assets.getBitmapData ("assets/platformTiles.png");
         
		
		if (inName=="assets/player.png")
			 
            return Assets.getBitmapData ("assets/player.png");
         
		
		if (inName=="assets/power.png")
			 
            return Assets.getBitmapData ("assets/power.png");
         
		
		if (inName=="assets/spriteTiles")
			 
            return Assets.getBytes ("assets/spriteTiles");
         
		
		if (inName=="assets/spriteTiles.png")
			 
            return Assets.getBitmapData ("assets/spriteTiles.png");
         
		
		if (inName=="assets/Win.dam")
			 
			 return Assets.getText ("assets/Win.dam");
         
		
		if (inName=="assets/Win.dam.bak")
			 
			 return Assets.getText ("assets/Win.dam.bak");
         
		
		if (inName=="assets/world.png")
			 
            return Assets.getBitmapData ("assets/world.png");
         
		
		
		return null;
		
	}
	
	
	private static function preloader_onComplete (event:Event):Void {
		
		mPreloader.removeEventListener (Event.COMPLETE, preloader_onComplete);
		
		nme.Lib.current.removeChild(mPreloader);
		mPreloader = null;
		
		begin ();
		
	}
	
}

class NME_assets_data_beep_wav extends nme.media.Sound { }
class NME_assets_data_pickup_wav extends nme.media.Sound { }
class NME_assets_data_click_wav extends nme.media.Sound { }
class NME_assets_data_jump_wav extends nme.media.Sound { }
class NME_assets_data_hurt_wav extends nme.media.Sound { }
class NME_assets_data_surreal_ambient_mp3 extends nme.media.Sound { }
class NME_assets_data_etherial_hibpm_mp3 extends nme.media.Sound { }
class NME_assets_data_standard_beat_mp3 extends nme.media.Sound { }
class NME_assets_beebtiles_pxi extends nme.utils.ByteArray { }
class NME_assets_cpower_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_autotiles_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_autotiles_alt_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_base_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_beep_mp3 extends nme.media.Sound { }
class NME_assets_data_button_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_button_a_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_button_b_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_button_c_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_button_down_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_button_left_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_button_right_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_button_up_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_button_x_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_button_y_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_courier_ttf extends nme.text.Font { }
class NME_assets_data_cursor_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_default_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_etherial_hibpm_mp4 extends nme.media.Sound { }
class NME_assets_data_fontdata10pt_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_fontdata11pt_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_handle_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_logo_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_logo_corners_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_logo_light_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_nokiafc22_ttf extends nme.text.Font { }
class NME_assets_data_standard_beat_mp4 extends nme.media.Sound { }
class NME_assets_data_stick_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_surreal_ambient_mp4 extends nme.media.Sound { }
class NME_assets_data_vcr_flixel_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_vcr_open_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_vcr_pause_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_vcr_play_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_vcr_record_off_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_vcr_record_on_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_vcr_restart_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_vcr_step_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_vcr_stop_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_data_vis_bounds_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_door_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_goal extends nme.utils.ByteArray { }
class NME_assets_goal_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_haxeflixel_svg extends nme.utils.ByteArray { }
class NME_assets_health_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_lava_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_levelfour_dam extends nme.utils.ByteArray { }
class NME_assets_levelfour_dam_bak extends nme.utils.ByteArray { }
class NME_assets_levelone_dam extends nme.utils.ByteArray { }
class NME_assets_levelone_dam_bak extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_group1_map1_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_group1_map2_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_levelfour_map1_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_levelfour_map2_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_levelone_map1_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_levelone_map2_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_levelthree_map1_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_levelthree_map2_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_leveltwo_map1_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_leveltwo_map2_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_menu_map1_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_tutorial_map2_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_tutorial_map3_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_win_map1_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_worldmap_map1_csv extends nme.utils.ByteArray { }
class NME_assets_levels_mapcsv_worldselect_map1_csv extends nme.utils.ByteArray { }
class NME_assets_levels_tutorial_dam extends nme.utils.ByteArray { }
class NME_assets_levels_tutorial_dam_bak extends nme.utils.ByteArray { }
class NME_assets_levels_worldmap_dam extends nme.utils.ByteArray { }
class NME_assets_levelthree_dam extends nme.utils.ByteArray { }
class NME_assets_levelthree_dam_bak extends nme.utils.ByteArray { }
class NME_assets_leveltwo_dam extends nme.utils.ByteArray { }
class NME_assets_leveltwo_dam_bak extends nme.utils.ByteArray { }
class NME_assets_menu_dam extends nme.utils.ByteArray { }
class NME_assets_platformer_dam extends nme.utils.ByteArray { }
class NME_assets_platformtiles_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_player_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_power_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_spritetiles extends nme.utils.ByteArray { }
class NME_assets_spritetiles_png extends nme.display.BitmapData { public function new () { super (0, 0); } }
class NME_assets_win_dam extends nme.utils.ByteArray { }
class NME_assets_win_dam_bak extends nme.utils.ByteArray { }
class NME_assets_world_png extends nme.display.BitmapData { public function new () { super (0, 0); } }


#else

import Main;

class ApplicationMain {
	
	public static function main () {
		
		var hasMain = false;
		
		for (methodName in Type.getClassFields(Main))
		{
			if (methodName == "main")
			{
				hasMain = true;
				break;
			}
		}
		
		if (hasMain)
		{
			Reflect.callMethod (Main, Reflect.field (Main, "main"), []);
		}
		else
		{
			var instance = Type.createInstance(Main, []);
			if (Std.is (instance, flash.display.DisplayObject)) {
				flash.Lib.current.addChild(cast instance);
			}
		}
		
	}

}

#end
