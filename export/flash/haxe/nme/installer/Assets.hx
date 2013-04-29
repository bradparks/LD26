package nme.installer;


import format.display.MovieClip;
import haxe.Unserializer;
import nme.display.BitmapData;
import nme.media.Sound;
import nme.net.URLRequest;
import nme.text.Font;
import nme.utils.ByteArray;
import ApplicationMain;

#if swf
import format.SWF;
#end

#if xfl
import format.XFL;
#end


/**
 * ...
 * @author Joshua Granick
 */

class Assets {

	
	public static var cachedBitmapData:Hash<BitmapData> = new Hash<BitmapData>();
	#if swf private static var cachedSWFLibraries:Hash <SWF> = new Hash <SWF> (); #end
	#if xfl private static var cachedXFLLibraries:Hash <XFL> = new Hash <XFL> (); #end
	
	private static var initialized:Bool = false;
	private static var libraryTypes:Hash <String> = new Hash <String> ();
	private static var resourceClasses:Hash <Dynamic> = new Hash <Dynamic> ();
	private static var resourceTypes:Hash <String> = new Hash <String> ();
	
	
	private static function initialize ():Void {
		
		if (!initialized) {
			
			resourceClasses.set ("Beep", NME_assets_data_beep_wav);
			resourceTypes.set ("Beep", "sound");
			resourceClasses.set ("Pickup", NME_assets_data_pickup_wav);
			resourceTypes.set ("Pickup", "sound");
			resourceClasses.set ("Click", NME_assets_data_click_wav);
			resourceTypes.set ("Click", "sound");
			resourceClasses.set ("Jump", NME_assets_data_jump_wav);
			resourceTypes.set ("Jump", "sound");
			resourceClasses.set ("Hurt", NME_assets_data_hurt_wav);
			resourceTypes.set ("Hurt", "sound");
			resourceClasses.set ("Ambient", NME_assets_data_surreal_ambient_mp3);
			resourceTypes.set ("Ambient", "music");
			resourceClasses.set ("Upbeat", NME_assets_data_etherial_hibpm_mp3);
			resourceTypes.set ("Upbeat", "music");
			resourceClasses.set ("Beat", NME_assets_data_standard_beat_mp3);
			resourceTypes.set ("Beat", "music");
			resourceClasses.set ("assets/beebTiles.pxi", NME_assets_beebtiles_pxi);
			resourceTypes.set ("assets/beebTiles.pxi", "binary");
			resourceClasses.set ("assets/cPower.png", NME_assets_cpower_png);
			resourceTypes.set ("assets/cPower.png", "image");
			resourceClasses.set ("assets/data/autotiles.png", NME_assets_data_autotiles_png);
			resourceTypes.set ("assets/data/autotiles.png", "image");
			resourceClasses.set ("assets/data/autotiles_alt.png", NME_assets_data_autotiles_alt_png);
			resourceTypes.set ("assets/data/autotiles_alt.png", "image");
			resourceClasses.set ("assets/data/base.png", NME_assets_data_base_png);
			resourceTypes.set ("assets/data/base.png", "image");
			resourceClasses.set ("assets/data/beep.mp3", NME_assets_data_beep_mp3);
			resourceTypes.set ("assets/data/beep.mp3", "music");
			resourceClasses.set ("assets/data/button.png", NME_assets_data_button_png);
			resourceTypes.set ("assets/data/button.png", "image");
			resourceClasses.set ("assets/data/button_a.png", NME_assets_data_button_a_png);
			resourceTypes.set ("assets/data/button_a.png", "image");
			resourceClasses.set ("assets/data/button_b.png", NME_assets_data_button_b_png);
			resourceTypes.set ("assets/data/button_b.png", "image");
			resourceClasses.set ("assets/data/button_c.png", NME_assets_data_button_c_png);
			resourceTypes.set ("assets/data/button_c.png", "image");
			resourceClasses.set ("assets/data/button_down.png", NME_assets_data_button_down_png);
			resourceTypes.set ("assets/data/button_down.png", "image");
			resourceClasses.set ("assets/data/button_left.png", NME_assets_data_button_left_png);
			resourceTypes.set ("assets/data/button_left.png", "image");
			resourceClasses.set ("assets/data/button_right.png", NME_assets_data_button_right_png);
			resourceTypes.set ("assets/data/button_right.png", "image");
			resourceClasses.set ("assets/data/button_up.png", NME_assets_data_button_up_png);
			resourceTypes.set ("assets/data/button_up.png", "image");
			resourceClasses.set ("assets/data/button_x.png", NME_assets_data_button_x_png);
			resourceTypes.set ("assets/data/button_x.png", "image");
			resourceClasses.set ("assets/data/button_y.png", NME_assets_data_button_y_png);
			resourceTypes.set ("assets/data/button_y.png", "image");
			resourceClasses.set ("assets/data/courier.ttf", NME_assets_data_courier_ttf);
			resourceTypes.set ("assets/data/courier.ttf", "font");
			resourceClasses.set ("assets/data/cursor.png", NME_assets_data_cursor_png);
			resourceTypes.set ("assets/data/cursor.png", "image");
			resourceClasses.set ("assets/data/default.png", NME_assets_data_default_png);
			resourceTypes.set ("assets/data/default.png", "image");
			resourceClasses.set ("assets/data/etherial_hibpm.mp3", NME_assets_data_etherial_hibpm_mp4);
			resourceTypes.set ("assets/data/etherial_hibpm.mp3", "music");
			resourceClasses.set ("assets/data/fontData10pt.png", NME_assets_data_fontdata10pt_png);
			resourceTypes.set ("assets/data/fontData10pt.png", "image");
			resourceClasses.set ("assets/data/fontData11pt.png", NME_assets_data_fontdata11pt_png);
			resourceTypes.set ("assets/data/fontData11pt.png", "image");
			resourceClasses.set ("assets/data/handle.png", NME_assets_data_handle_png);
			resourceTypes.set ("assets/data/handle.png", "image");
			resourceClasses.set ("assets/data/logo.png", NME_assets_data_logo_png);
			resourceTypes.set ("assets/data/logo.png", "image");
			resourceClasses.set ("assets/data/logo_corners.png", NME_assets_data_logo_corners_png);
			resourceTypes.set ("assets/data/logo_corners.png", "image");
			resourceClasses.set ("assets/data/logo_light.png", NME_assets_data_logo_light_png);
			resourceTypes.set ("assets/data/logo_light.png", "image");
			resourceClasses.set ("assets/data/nokiafc22.ttf", NME_assets_data_nokiafc22_ttf);
			resourceTypes.set ("assets/data/nokiafc22.ttf", "font");
			resourceClasses.set ("assets/data/standard_beat.mp3", NME_assets_data_standard_beat_mp4);
			resourceTypes.set ("assets/data/standard_beat.mp3", "music");
			resourceClasses.set ("assets/data/stick.png", NME_assets_data_stick_png);
			resourceTypes.set ("assets/data/stick.png", "image");
			resourceClasses.set ("assets/data/surreal_ambient.mp3", NME_assets_data_surreal_ambient_mp4);
			resourceTypes.set ("assets/data/surreal_ambient.mp3", "music");
			resourceClasses.set ("assets/data/vcr/flixel.png", NME_assets_data_vcr_flixel_png);
			resourceTypes.set ("assets/data/vcr/flixel.png", "image");
			resourceClasses.set ("assets/data/vcr/open.png", NME_assets_data_vcr_open_png);
			resourceTypes.set ("assets/data/vcr/open.png", "image");
			resourceClasses.set ("assets/data/vcr/pause.png", NME_assets_data_vcr_pause_png);
			resourceTypes.set ("assets/data/vcr/pause.png", "image");
			resourceClasses.set ("assets/data/vcr/play.png", NME_assets_data_vcr_play_png);
			resourceTypes.set ("assets/data/vcr/play.png", "image");
			resourceClasses.set ("assets/data/vcr/record_off.png", NME_assets_data_vcr_record_off_png);
			resourceTypes.set ("assets/data/vcr/record_off.png", "image");
			resourceClasses.set ("assets/data/vcr/record_on.png", NME_assets_data_vcr_record_on_png);
			resourceTypes.set ("assets/data/vcr/record_on.png", "image");
			resourceClasses.set ("assets/data/vcr/restart.png", NME_assets_data_vcr_restart_png);
			resourceTypes.set ("assets/data/vcr/restart.png", "image");
			resourceClasses.set ("assets/data/vcr/step.png", NME_assets_data_vcr_step_png);
			resourceTypes.set ("assets/data/vcr/step.png", "image");
			resourceClasses.set ("assets/data/vcr/stop.png", NME_assets_data_vcr_stop_png);
			resourceTypes.set ("assets/data/vcr/stop.png", "image");
			resourceClasses.set ("assets/data/vis/bounds.png", NME_assets_data_vis_bounds_png);
			resourceTypes.set ("assets/data/vis/bounds.png", "image");
			resourceClasses.set ("assets/door.png", NME_assets_door_png);
			resourceTypes.set ("assets/door.png", "image");
			resourceClasses.set ("assets/goal", NME_assets_goal);
			resourceTypes.set ("assets/goal", "binary");
			resourceClasses.set ("assets/goal.png", NME_assets_goal_png);
			resourceTypes.set ("assets/goal.png", "image");
			resourceClasses.set ("assets/HaxeFlixel.svg", NME_assets_haxeflixel_svg);
			resourceTypes.set ("assets/HaxeFlixel.svg", "text");
			resourceClasses.set ("assets/health.png", NME_assets_health_png);
			resourceTypes.set ("assets/health.png", "image");
			resourceClasses.set ("assets/lava.png", NME_assets_lava_png);
			resourceTypes.set ("assets/lava.png", "image");
			resourceClasses.set ("assets/LevelFour.dam", NME_assets_levelfour_dam);
			resourceTypes.set ("assets/LevelFour.dam", "text");
			resourceClasses.set ("assets/LevelFour.dam.bak", NME_assets_levelfour_dam_bak);
			resourceTypes.set ("assets/LevelFour.dam.bak", "text");
			resourceClasses.set ("assets/levelOne.dam", NME_assets_levelone_dam);
			resourceTypes.set ("assets/levelOne.dam", "text");
			resourceClasses.set ("assets/levelOne.dam.bak", NME_assets_levelone_dam_bak);
			resourceTypes.set ("assets/levelOne.dam.bak", "text");
			resourceClasses.set ("assets/levels/mapCSV_Group1_Map1.csv", NME_assets_levels_mapcsv_group1_map1_csv);
			resourceTypes.set ("assets/levels/mapCSV_Group1_Map1.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_Group1_Map2.csv", NME_assets_levels_mapcsv_group1_map2_csv);
			resourceTypes.set ("assets/levels/mapCSV_Group1_Map2.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_LevelFour_Map1.csv", NME_assets_levels_mapcsv_levelfour_map1_csv);
			resourceTypes.set ("assets/levels/mapCSV_LevelFour_Map1.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_LevelFour_Map2.csv", NME_assets_levels_mapcsv_levelfour_map2_csv);
			resourceTypes.set ("assets/levels/mapCSV_LevelFour_Map2.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_levelOne_Map1.csv", NME_assets_levels_mapcsv_levelone_map1_csv);
			resourceTypes.set ("assets/levels/mapCSV_levelOne_Map1.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_levelOne_Map2.csv", NME_assets_levels_mapcsv_levelone_map2_csv);
			resourceTypes.set ("assets/levels/mapCSV_levelOne_Map2.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_LevelThree_Map1.csv", NME_assets_levels_mapcsv_levelthree_map1_csv);
			resourceTypes.set ("assets/levels/mapCSV_LevelThree_Map1.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_LevelThree_Map2.csv", NME_assets_levels_mapcsv_levelthree_map2_csv);
			resourceTypes.set ("assets/levels/mapCSV_LevelThree_Map2.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_LevelTwo_Map1.csv", NME_assets_levels_mapcsv_leveltwo_map1_csv);
			resourceTypes.set ("assets/levels/mapCSV_LevelTwo_Map1.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_LevelTwo_Map2.csv", NME_assets_levels_mapcsv_leveltwo_map2_csv);
			resourceTypes.set ("assets/levels/mapCSV_LevelTwo_Map2.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_Menu_Map1.csv", NME_assets_levels_mapcsv_menu_map1_csv);
			resourceTypes.set ("assets/levels/mapCSV_Menu_Map1.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_Tutorial_Map2.csv", NME_assets_levels_mapcsv_tutorial_map2_csv);
			resourceTypes.set ("assets/levels/mapCSV_Tutorial_Map2.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_Tutorial_Map3.csv", NME_assets_levels_mapcsv_tutorial_map3_csv);
			resourceTypes.set ("assets/levels/mapCSV_Tutorial_Map3.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_Win_Map1.csv", NME_assets_levels_mapcsv_win_map1_csv);
			resourceTypes.set ("assets/levels/mapCSV_Win_Map1.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_WorldMap_Map1.csv", NME_assets_levels_mapcsv_worldmap_map1_csv);
			resourceTypes.set ("assets/levels/mapCSV_WorldMap_Map1.csv", "text");
			resourceClasses.set ("assets/levels/mapCSV_WorldSelect_Map1.csv", NME_assets_levels_mapcsv_worldselect_map1_csv);
			resourceTypes.set ("assets/levels/mapCSV_WorldSelect_Map1.csv", "text");
			resourceClasses.set ("assets/levels/tutorial.dam", NME_assets_levels_tutorial_dam);
			resourceTypes.set ("assets/levels/tutorial.dam", "text");
			resourceClasses.set ("assets/levels/tutorial.dam.bak", NME_assets_levels_tutorial_dam_bak);
			resourceTypes.set ("assets/levels/tutorial.dam.bak", "text");
			resourceClasses.set ("assets/levels/WorldMap.dam", NME_assets_levels_worldmap_dam);
			resourceTypes.set ("assets/levels/WorldMap.dam", "text");
			resourceClasses.set ("assets/LevelThree.dam", NME_assets_levelthree_dam);
			resourceTypes.set ("assets/LevelThree.dam", "text");
			resourceClasses.set ("assets/LevelThree.dam.bak", NME_assets_levelthree_dam_bak);
			resourceTypes.set ("assets/LevelThree.dam.bak", "text");
			resourceClasses.set ("assets/LevelTwo.dam", NME_assets_leveltwo_dam);
			resourceTypes.set ("assets/LevelTwo.dam", "text");
			resourceClasses.set ("assets/LevelTwo.dam.bak", NME_assets_leveltwo_dam_bak);
			resourceTypes.set ("assets/LevelTwo.dam.bak", "text");
			resourceClasses.set ("assets/Menu.dam", NME_assets_menu_dam);
			resourceTypes.set ("assets/Menu.dam", "text");
			resourceClasses.set ("assets/Platformer.dam", NME_assets_platformer_dam);
			resourceTypes.set ("assets/Platformer.dam", "text");
			resourceClasses.set ("assets/platformTiles.png", NME_assets_platformtiles_png);
			resourceTypes.set ("assets/platformTiles.png", "image");
			resourceClasses.set ("assets/player.png", NME_assets_player_png);
			resourceTypes.set ("assets/player.png", "image");
			resourceClasses.set ("assets/power.png", NME_assets_power_png);
			resourceTypes.set ("assets/power.png", "image");
			resourceClasses.set ("assets/spriteTiles", NME_assets_spritetiles);
			resourceTypes.set ("assets/spriteTiles", "binary");
			resourceClasses.set ("assets/spriteTiles.png", NME_assets_spritetiles_png);
			resourceTypes.set ("assets/spriteTiles.png", "image");
			resourceClasses.set ("assets/Win.dam", NME_assets_win_dam);
			resourceTypes.set ("assets/Win.dam", "text");
			resourceClasses.set ("assets/Win.dam.bak", NME_assets_win_dam_bak);
			resourceTypes.set ("assets/Win.dam.bak", "text");
			resourceClasses.set ("assets/world.png", NME_assets_world_png);
			resourceTypes.set ("assets/world.png", "image");
			
			
			initialized = true;
			
		}
		
	}
	
	
	public static function getBitmapData (id:String, useCache:Bool = true):BitmapData {
		
		initialize ();
		
		if (resourceTypes.exists (id) && resourceTypes.get (id).toLowerCase () == "image") {
			
			if (useCache && cachedBitmapData.exists (id)) {
				
				return cachedBitmapData.get (id);
				
			} else {
				
				var data = cast (Type.createInstance (resourceClasses.get (id), []), BitmapData);
				
				if (useCache) {
					
					cachedBitmapData.set (id, data);
					
				}
				
				return data;
				
			}
			
		} else if (id.indexOf (":") > -1) {
			
			var libraryName = id.substr (0, id.indexOf (":"));
			var symbolName = id.substr (id.indexOf (":") + 1);
			
			if (libraryTypes.exists (libraryName)) {
				
				#if swf
				
				if (libraryTypes.get (libraryName) == "swf") {
					
					if (!cachedSWFLibraries.exists (libraryName)) {
						
						cachedSWFLibraries.set (libraryName, new SWF (getBytes ("libraries/" + libraryName + ".swf")));
						
					}
					
					return cachedSWFLibraries.get (libraryName).getBitmapData (symbolName);
					
				}
				
				#end
				
				#if xfl
				
				if (libraryTypes.get (libraryName) == "xfl") {
					
					if (!cachedXFLLibraries.exists (libraryName)) {
						
						cachedXFLLibraries.set (libraryName, Unserializer.run (getText ("libraries/" + libraryName + "/" + libraryName + ".dat")));
						
					}
					
					return cachedXFLLibraries.get (libraryName).getBitmapData (symbolName);
					
				}
				
				#end
				
			} else {
				
				trace ("[nme.Assets] There is no asset library named \"" + libraryName + "\"");
				
			}
			
		} else {
			
			trace ("[nme.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
			
		}
		
		return null;
		
	}
	
	
	public static function getBytes (id:String):ByteArray {
		
		initialize ();
		
		if (resourceClasses.exists (id)) {
			
			return Type.createInstance (resourceClasses.get (id), []);
			
		} else {
			
			trace ("[nme.Assets] There is no ByteArray asset with an ID of \"" + id + "\"");
			
			return null;
			
		}
		
	}
	
	
	public static function getFont (id:String):Font {
		
		initialize ();
		
		if (resourceTypes.exists (id) && resourceTypes.get (id).toLowerCase () == "font") {
			
			return cast (Type.createInstance (resourceClasses.get (id), []), Font);
			
		} else {
			
			trace ("[nme.Assets] There is no Font asset with an ID of \"" + id + "\"");
			
			return null;
			
		}
		
	}
	
	
	public static function getMovieClip (id:String):MovieClip {
		
		initialize ();
		
		var libraryName = id.substr (0, id.indexOf (":"));
		var symbolName = id.substr (id.indexOf (":") + 1);
		
		if (libraryTypes.exists (libraryName)) {
			
			#if swf
			
			if (libraryTypes.get (libraryName) == "swf") {
				
				if (!cachedSWFLibraries.exists (libraryName)) {
					
					cachedSWFLibraries.set (libraryName, new SWF (getBytes ("libraries/" + libraryName + ".swf")));
					
				}
				
				return cachedSWFLibraries.get (libraryName).createMovieClip (symbolName);
				
			}
			
			#end
			
			#if xfl
			
			if (libraryTypes.get (libraryName) == "xfl") {
				
				if (!cachedXFLLibraries.exists (libraryName)) {
					
					cachedXFLLibraries.set (libraryName, Unserializer.run (getText ("libraries/" + libraryName + "/" + libraryName + ".dat")));
					
				}
				
				return cachedXFLLibraries.get (libraryName).createMovieClip (symbolName);
				
			}
			
			#end
			
		} else {
			
			trace ("[nme.Assets] There is no asset library named \"" + libraryName + "\"");
			
		}
		
		return null;
		
	}
	
	
	public static function getSound (id:String):Sound {
		
		initialize ();
		
		if (resourceTypes.exists (id)) {
			
			if (resourceTypes.get (id).toLowerCase () == "sound" || resourceTypes.get (id).toLowerCase () == "music") {
				
				return cast (Type.createInstance (resourceClasses.get (id), []), Sound);
				
			}
			
		}
		
		trace ("[nme.Assets] There is no Sound asset with an ID of \"" + id + "\"");
		
		return null;
		
	}
	
	
	public static function getText (id:String):String {
		
		var bytes = getBytes (id);
		
		if (bytes == null) {
			
			return null;
			
		} else {
			
			return bytes.readUTFBytes (bytes.length);
			
		}
		
	}
	
	
	//public static function loadBitmapData(id:String, handler:BitmapData -> Void, useCache:Bool = true):BitmapData
	//{
		//return null;
	//}
	//
	//
	//public static function loadBytes(id:String, handler:ByteArray -> Void):ByteArray
	//{	
		//return null;
	//}
	//
	//
	//public static function loadText(id:String, handler:String -> Void):String
	//{
		//return null;
	//}
	
	
}