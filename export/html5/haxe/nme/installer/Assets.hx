package nme.installer;


import format.display.MovieClip;
import haxe.Unserializer;
import nme.display.Bitmap;
import nme.display.BitmapData;
import nme.media.Sound;
import nme.net.URLRequest;
import nme.text.Font;
import nme.utils.ByteArray;
import ApplicationMain;

#if swfdev
import format.swf.lite.SWFLite;
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
	#if swfdev private static var cachedSWFLibraries:Hash <SWFLite> = new Hash <SWFLite> (); #end
	#if xfl private static var cachedXFLLibraries:Hash <XFL> = new Hash <XFL> (); #end
	
	private static var initialized:Bool = false;
	private static var libraryTypes:Hash <String> = new Hash <String> ();
	private static var resourceClasses:Hash <Dynamic> = new Hash <Dynamic> ();
	private static var resourceNames:Hash <String> = new Hash <String> ();
	private static var resourceTypes:Hash <String> = new Hash <String> ();
	
	
	private static function initialize ():Void {
		
		if (!initialized) {
			
			
			
			resourceNames.set ("assets/beebTiles.pxi", "assets/beebTiles.pxi");
			resourceTypes.set ("assets/beebTiles.pxi", "binary");
			
			
			resourceNames.set ("assets/cPower.png", "assets/cPower.png");
			resourceTypes.set ("assets/cPower.png", "image");
			
			
			resourceNames.set ("assets/data/autotiles.png", "assets/data/autotiles.png");
			resourceTypes.set ("assets/data/autotiles.png", "image");
			
			
			resourceNames.set ("assets/data/autotiles_alt.png", "assets/data/autotiles_alt.png");
			resourceTypes.set ("assets/data/autotiles_alt.png", "image");
			
			
			resourceNames.set ("assets/data/base.png", "assets/data/base.png");
			resourceTypes.set ("assets/data/base.png", "image");
			
			
			resourceNames.set ("assets/data/beep.mp3", "assets/data/beep.mp3");
			resourceTypes.set ("assets/data/beep.mp3", "music");
			
			
			resourceNames.set ("assets/data/beep.wav", "assets/data/beep.wav");
			resourceTypes.set ("assets/data/beep.wav", "sound");
			
			
			resourceNames.set ("assets/data/button.png", "assets/data/button.png");
			resourceTypes.set ("assets/data/button.png", "image");
			
			
			resourceNames.set ("assets/data/button_a.png", "assets/data/button_a.png");
			resourceTypes.set ("assets/data/button_a.png", "image");
			
			
			resourceNames.set ("assets/data/button_b.png", "assets/data/button_b.png");
			resourceTypes.set ("assets/data/button_b.png", "image");
			
			
			resourceNames.set ("assets/data/button_c.png", "assets/data/button_c.png");
			resourceTypes.set ("assets/data/button_c.png", "image");
			
			
			resourceNames.set ("assets/data/button_down.png", "assets/data/button_down.png");
			resourceTypes.set ("assets/data/button_down.png", "image");
			
			
			resourceNames.set ("assets/data/button_left.png", "assets/data/button_left.png");
			resourceTypes.set ("assets/data/button_left.png", "image");
			
			
			resourceNames.set ("assets/data/button_right.png", "assets/data/button_right.png");
			resourceTypes.set ("assets/data/button_right.png", "image");
			
			
			resourceNames.set ("assets/data/button_up.png", "assets/data/button_up.png");
			resourceTypes.set ("assets/data/button_up.png", "image");
			
			
			resourceNames.set ("assets/data/button_x.png", "assets/data/button_x.png");
			resourceTypes.set ("assets/data/button_x.png", "image");
			
			
			resourceNames.set ("assets/data/button_y.png", "assets/data/button_y.png");
			resourceTypes.set ("assets/data/button_y.png", "image");
			
			
			resourceNames.set ("assets/data/click.wav", "assets/data/click.wav");
			resourceTypes.set ("assets/data/click.wav", "sound");
			
			resourceClasses.set ("assets/data/courier.ttf", NME_assets_data_courier_ttf);
			resourceNames.set ("assets/data/courier.ttf", "assets/data/courier.ttf");
			resourceTypes.set ("assets/data/courier.ttf", "font");
			
			
			resourceNames.set ("assets/data/cursor.png", "assets/data/cursor.png");
			resourceTypes.set ("assets/data/cursor.png", "image");
			
			
			resourceNames.set ("assets/data/default.png", "assets/data/default.png");
			resourceTypes.set ("assets/data/default.png", "image");
			
			
			resourceNames.set ("assets/data/etherial_hibpm.mp3", "assets/data/etherial_hibpm.mp3");
			resourceTypes.set ("assets/data/etherial_hibpm.mp3", "music");
			
			
			resourceNames.set ("assets/data/fontData10pt.png", "assets/data/fontData10pt.png");
			resourceTypes.set ("assets/data/fontData10pt.png", "image");
			
			
			resourceNames.set ("assets/data/fontData11pt.png", "assets/data/fontData11pt.png");
			resourceTypes.set ("assets/data/fontData11pt.png", "image");
			
			
			resourceNames.set ("assets/data/handle.png", "assets/data/handle.png");
			resourceTypes.set ("assets/data/handle.png", "image");
			
			
			resourceNames.set ("assets/data/hurt.wav", "assets/data/hurt.wav");
			resourceTypes.set ("assets/data/hurt.wav", "sound");
			
			
			resourceNames.set ("assets/data/jump.wav", "assets/data/jump.wav");
			resourceTypes.set ("assets/data/jump.wav", "sound");
			
			
			resourceNames.set ("assets/data/logo.png", "assets/data/logo.png");
			resourceTypes.set ("assets/data/logo.png", "image");
			
			
			resourceNames.set ("assets/data/logo_corners.png", "assets/data/logo_corners.png");
			resourceTypes.set ("assets/data/logo_corners.png", "image");
			
			
			resourceNames.set ("assets/data/logo_light.png", "assets/data/logo_light.png");
			resourceTypes.set ("assets/data/logo_light.png", "image");
			
			resourceClasses.set ("assets/data/nokiafc22.ttf", NME_assets_data_nokiafc22_ttf);
			resourceNames.set ("assets/data/nokiafc22.ttf", "assets/data/nokiafc22.ttf");
			resourceTypes.set ("assets/data/nokiafc22.ttf", "font");
			
			
			resourceNames.set ("assets/data/pickup.wav", "assets/data/pickup.wav");
			resourceTypes.set ("assets/data/pickup.wav", "sound");
			
			
			resourceNames.set ("assets/data/standard_beat.mp3", "assets/data/standard_beat.mp3");
			resourceTypes.set ("assets/data/standard_beat.mp3", "music");
			
			
			resourceNames.set ("assets/data/stick.png", "assets/data/stick.png");
			resourceTypes.set ("assets/data/stick.png", "image");
			
			
			resourceNames.set ("assets/data/surreal_ambient.mp3", "assets/data/surreal_ambient.mp3");
			resourceTypes.set ("assets/data/surreal_ambient.mp3", "music");
			
			
			resourceNames.set ("assets/data/vcr/flixel.png", "assets/data/vcr/flixel.png");
			resourceTypes.set ("assets/data/vcr/flixel.png", "image");
			
			
			resourceNames.set ("assets/data/vcr/open.png", "assets/data/vcr/open.png");
			resourceTypes.set ("assets/data/vcr/open.png", "image");
			
			
			resourceNames.set ("assets/data/vcr/pause.png", "assets/data/vcr/pause.png");
			resourceTypes.set ("assets/data/vcr/pause.png", "image");
			
			
			resourceNames.set ("assets/data/vcr/play.png", "assets/data/vcr/play.png");
			resourceTypes.set ("assets/data/vcr/play.png", "image");
			
			
			resourceNames.set ("assets/data/vcr/record_off.png", "assets/data/vcr/record_off.png");
			resourceTypes.set ("assets/data/vcr/record_off.png", "image");
			
			
			resourceNames.set ("assets/data/vcr/record_on.png", "assets/data/vcr/record_on.png");
			resourceTypes.set ("assets/data/vcr/record_on.png", "image");
			
			
			resourceNames.set ("assets/data/vcr/restart.png", "assets/data/vcr/restart.png");
			resourceTypes.set ("assets/data/vcr/restart.png", "image");
			
			
			resourceNames.set ("assets/data/vcr/step.png", "assets/data/vcr/step.png");
			resourceTypes.set ("assets/data/vcr/step.png", "image");
			
			
			resourceNames.set ("assets/data/vcr/stop.png", "assets/data/vcr/stop.png");
			resourceTypes.set ("assets/data/vcr/stop.png", "image");
			
			
			resourceNames.set ("assets/data/vis/bounds.png", "assets/data/vis/bounds.png");
			resourceTypes.set ("assets/data/vis/bounds.png", "image");
			
			
			resourceNames.set ("assets/door.png", "assets/door.png");
			resourceTypes.set ("assets/door.png", "image");
			
			
			resourceNames.set ("assets/goal", "assets/goal");
			resourceTypes.set ("assets/goal", "binary");
			
			
			resourceNames.set ("assets/goal.png", "assets/goal.png");
			resourceTypes.set ("assets/goal.png", "image");
			
			
			resourceNames.set ("assets/health.png", "assets/health.png");
			resourceTypes.set ("assets/health.png", "image");
			
			
			resourceNames.set ("assets/lava.png", "assets/lava.png");
			resourceTypes.set ("assets/lava.png", "image");
			
			
			resourceNames.set ("assets/LevelFour.dam", "assets/LevelFour.dam");
			resourceTypes.set ("assets/LevelFour.dam", "text");
			
			
			resourceNames.set ("assets/LevelFour.dam.bak", "assets/LevelFour.dam.bak");
			resourceTypes.set ("assets/LevelFour.dam.bak", "text");
			
			
			resourceNames.set ("assets/levelOne.dam", "assets/levelOne.dam");
			resourceTypes.set ("assets/levelOne.dam", "text");
			
			
			resourceNames.set ("assets/levelOne.dam.bak", "assets/levelOne.dam.bak");
			resourceTypes.set ("assets/levelOne.dam.bak", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_Group1_Map1.csv", "assets/levels/mapCSV_Group1_Map1.csv");
			resourceTypes.set ("assets/levels/mapCSV_Group1_Map1.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_Group1_Map2.csv", "assets/levels/mapCSV_Group1_Map2.csv");
			resourceTypes.set ("assets/levels/mapCSV_Group1_Map2.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_LevelFour_Map1.csv", "assets/levels/mapCSV_LevelFour_Map1.csv");
			resourceTypes.set ("assets/levels/mapCSV_LevelFour_Map1.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_LevelFour_Map2.csv", "assets/levels/mapCSV_LevelFour_Map2.csv");
			resourceTypes.set ("assets/levels/mapCSV_LevelFour_Map2.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_levelOne_Map1.csv", "assets/levels/mapCSV_levelOne_Map1.csv");
			resourceTypes.set ("assets/levels/mapCSV_levelOne_Map1.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_levelOne_Map2.csv", "assets/levels/mapCSV_levelOne_Map2.csv");
			resourceTypes.set ("assets/levels/mapCSV_levelOne_Map2.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_LevelThree_Map1.csv", "assets/levels/mapCSV_LevelThree_Map1.csv");
			resourceTypes.set ("assets/levels/mapCSV_LevelThree_Map1.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_LevelThree_Map2.csv", "assets/levels/mapCSV_LevelThree_Map2.csv");
			resourceTypes.set ("assets/levels/mapCSV_LevelThree_Map2.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_LevelTwo_Map1.csv", "assets/levels/mapCSV_LevelTwo_Map1.csv");
			resourceTypes.set ("assets/levels/mapCSV_LevelTwo_Map1.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_LevelTwo_Map2.csv", "assets/levels/mapCSV_LevelTwo_Map2.csv");
			resourceTypes.set ("assets/levels/mapCSV_LevelTwo_Map2.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_Menu_Map1.csv", "assets/levels/mapCSV_Menu_Map1.csv");
			resourceTypes.set ("assets/levels/mapCSV_Menu_Map1.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_Tutorial_Map2.csv", "assets/levels/mapCSV_Tutorial_Map2.csv");
			resourceTypes.set ("assets/levels/mapCSV_Tutorial_Map2.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_Tutorial_Map3.csv", "assets/levels/mapCSV_Tutorial_Map3.csv");
			resourceTypes.set ("assets/levels/mapCSV_Tutorial_Map3.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_Win_Map1.csv", "assets/levels/mapCSV_Win_Map1.csv");
			resourceTypes.set ("assets/levels/mapCSV_Win_Map1.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_WorldMap_Map1.csv", "assets/levels/mapCSV_WorldMap_Map1.csv");
			resourceTypes.set ("assets/levels/mapCSV_WorldMap_Map1.csv", "text");
			
			
			resourceNames.set ("assets/levels/mapCSV_WorldSelect_Map1.csv", "assets/levels/mapCSV_WorldSelect_Map1.csv");
			resourceTypes.set ("assets/levels/mapCSV_WorldSelect_Map1.csv", "text");
			
			
			resourceNames.set ("assets/levels/tutorial.dam", "assets/levels/tutorial.dam");
			resourceTypes.set ("assets/levels/tutorial.dam", "text");
			
			
			resourceNames.set ("assets/levels/tutorial.dam.bak", "assets/levels/tutorial.dam.bak");
			resourceTypes.set ("assets/levels/tutorial.dam.bak", "text");
			
			
			resourceNames.set ("assets/levels/WorldMap.dam", "assets/levels/WorldMap.dam");
			resourceTypes.set ("assets/levels/WorldMap.dam", "text");
			
			
			resourceNames.set ("assets/LevelThree.dam", "assets/LevelThree.dam");
			resourceTypes.set ("assets/LevelThree.dam", "text");
			
			
			resourceNames.set ("assets/LevelThree.dam.bak", "assets/LevelThree.dam.bak");
			resourceTypes.set ("assets/LevelThree.dam.bak", "text");
			
			
			resourceNames.set ("assets/LevelTwo.dam", "assets/LevelTwo.dam");
			resourceTypes.set ("assets/LevelTwo.dam", "text");
			
			
			resourceNames.set ("assets/LevelTwo.dam.bak", "assets/LevelTwo.dam.bak");
			resourceTypes.set ("assets/LevelTwo.dam.bak", "text");
			
			
			resourceNames.set ("assets/Menu.dam", "assets/Menu.dam");
			resourceTypes.set ("assets/Menu.dam", "text");
			
			
			resourceNames.set ("assets/Platformer.dam", "assets/Platformer.dam");
			resourceTypes.set ("assets/Platformer.dam", "text");
			
			
			resourceNames.set ("assets/platformTiles.png", "assets/platformTiles.png");
			resourceTypes.set ("assets/platformTiles.png", "image");
			
			
			resourceNames.set ("assets/player.png", "assets/player.png");
			resourceTypes.set ("assets/player.png", "image");
			
			
			resourceNames.set ("assets/power.png", "assets/power.png");
			resourceTypes.set ("assets/power.png", "image");
			
			
			resourceNames.set ("assets/spriteTiles", "assets/spriteTiles");
			resourceTypes.set ("assets/spriteTiles", "binary");
			
			
			resourceNames.set ("assets/spriteTiles.png", "assets/spriteTiles.png");
			resourceTypes.set ("assets/spriteTiles.png", "image");
			
			
			resourceNames.set ("assets/Win.dam", "assets/Win.dam");
			resourceTypes.set ("assets/Win.dam", "text");
			
			
			resourceNames.set ("assets/Win.dam.bak", "assets/Win.dam.bak");
			resourceTypes.set ("assets/Win.dam.bak", "text");
			
			
			resourceNames.set ("assets/world.png", "assets/world.png");
			resourceTypes.set ("assets/world.png", "image");
			
			
			initialized = true;
			
		}
		
	}
	
	
	public static function getBitmapData (id:String, useCache:Bool = true):BitmapData {
		
		initialize ();
		
		if (resourceNames.exists(id) && resourceTypes.exists (id) && resourceTypes.get (id).toLowerCase () == "image") {
			
			if (useCache && cachedBitmapData.exists (id)) {
				
				return cachedBitmapData.get (id);
				
			} else {
				
				// Should be bitmapData.clone (), but stopped working in recent Jeash builds
				// Without clone, BitmapData is already cached, so ignoring the hash table for now
				
				var data = cast (ApplicationMain.loaders.get (resourceNames.get(id)).contentLoaderInfo.content, Bitmap).bitmapData;
				
				if (useCache) {
					
					cachedBitmapData.set (id, data);
					
				}
				
				return data;
				
			}
			
		}  else if (id.indexOf (":") > -1) {
			
			var libraryName = id.substr (0, id.indexOf (":"));
			var symbolName = id.substr (id.indexOf (":") + 1);
			
			if (libraryTypes.exists (libraryName)) {
				
				#if swfdev
				
				if (libraryTypes.get (libraryName) == "swf") {
					
					if (!cachedSWFLibraries.exists (libraryName)) {
						
						var unserializer = new Unserializer (getText ("libraries/" + libraryName + ".dat"));
						unserializer.setResolver (cast { resolveEnum: resolveEnum, resolveClass: resolveClass });
						cachedSWFLibraries.set (libraryName, unserializer.unserialize());
						
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
		
		if (resourceNames.exists (id)) {
			
			return cast ApplicationMain.urlLoaders.get (getResourceName(id)).data;
			
		}
		
		trace ("[nme.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
		
		return null;
		
	}
	
	
	public static function getFont (id:String):Font {
		
		initialize ();
		
		if (resourceNames.exists(id) && resourceTypes.exists (id)) {
			
			if (resourceTypes.get (id).toLowerCase () == "font") {
				
				return cast (Type.createInstance (resourceClasses.get (id), []), Font);
				
			}
			
		}
		
		trace ("[nme.Assets] There is no Font asset with an ID of \"" + id + "\"");
		
		return null;
		
	}
	
	
	public static function getMovieClip (id:String):MovieClip {
		
		initialize ();
		
		var libraryName = id.substr (0, id.indexOf (":"));
		var symbolName = id.substr (id.indexOf (":") + 1);
		
		if (libraryTypes.exists (libraryName)) {
			
			#if swfdev
			
			if (libraryTypes.get (libraryName) == "swf") {
				
				if (!cachedSWFLibraries.exists (libraryName)) {
					
					var unserializer = new Unserializer (getText ("libraries/" + libraryName + ".dat"));
					unserializer.setResolver (cast { resolveEnum: resolveEnum, resolveClass: resolveClass });
					cachedSWFLibraries.set (libraryName, unserializer.unserialize());
					
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
	
	
	public static function getResourceName (id:String):String {
		
		initialize ();
		
		return resourceNames.get (id);
		
	}
	
	
	public static function getSound (id:String):Sound {
		
		initialize ();
		
		if (resourceNames.exists(id) && resourceTypes.exists (id)) {
			
			if (resourceTypes.get (id).toLowerCase () == "sound") {
				
				return new Sound (new URLRequest (resourceNames.get(id)));
				
			} else if (resourceTypes.get (id).toLowerCase () == "music") {
				
				return new Sound (new URLRequest (resourceNames.get(id)));
				
			}
			
		}
		
		trace ("[nme.Assets] There is no Sound asset with an ID of \"" + id + "\"");
		
		return null;
		
	}
	
	
	public static function getText (id:String):String {
		
		initialize ();
		
		if (resourceNames.exists(id) && resourceTypes.exists (id)) {
			
			if (resourceTypes.get (id).toLowerCase () == "text") {
				
				return ApplicationMain.urlLoaders.get (resourceNames.get(id)).data;
				
			}
			
		}
		
		var bytes = getBytes (id);
		return null;
		
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
	
	
	private static function resolveClass (name:String):Class <Dynamic> {
		
		name = StringTools.replace (name, "native.", "browser.");
		return Type.resolveClass (name);
		
	}
	
	
	private static function resolveEnum (name:String):Enum <Dynamic> {
		
		name = StringTools.replace (name, "native.", "browser.");
		return Type.resolveEnum (name);
		
	}
	
	
}