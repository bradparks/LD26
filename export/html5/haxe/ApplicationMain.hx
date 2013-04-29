#if (nme && !flambe)


import Main;
import nme.display.Bitmap;
import nme.display.Loader;
import nme.events.Event;
import nme.media.Sound;
import nme.net.URLLoader;
import nme.net.URLRequest;
import nme.net.URLLoaderDataFormat;
import nme.Assets;
import nme.Lib;


class ApplicationMain {
	
	
	private static var completed:Int;
	private static var preloader:NMEPreloader;
	private static var total:Int;
	
	public static var loaders:Hash <Loader>;
	public static var urlLoaders:Hash <URLLoader>;
	
	
	public static function main () {
		
		completed = 0;
		loaders = new Hash <Loader> ();
		urlLoaders = new Hash <URLLoader> ();
		total = 0;
		
		
		
		
		preloader = new NMEPreloader ();
		
		Lib.current.addChild (preloader);
		preloader.onInit ();
		
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = BINARY;
		urlLoaders.set ("assets/beebTiles.pxi", urlLoader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/cPower.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/autotiles.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/autotiles_alt.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/base.png", loader);
		total ++;
		
		
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button_a.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button_b.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button_c.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button_down.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button_left.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button_right.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button_up.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button_x.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/button_y.png", loader);
		total ++;
		
		
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/cursor.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/default.png", loader);
		total ++;
		
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/fontData10pt.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/fontData11pt.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/handle.png", loader);
		total ++;
		
		
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/logo.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/logo_corners.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/logo_light.png", loader);
		total ++;
		
		
		
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/stick.png", loader);
		total ++;
		
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vcr/flixel.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vcr/open.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vcr/pause.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vcr/play.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vcr/record_off.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vcr/record_on.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vcr/restart.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vcr/step.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vcr/stop.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/data/vis/bounds.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/door.png", loader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = BINARY;
		urlLoaders.set ("assets/goal", urlLoader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/goal.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/health.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/lava.png", loader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/LevelFour.dam", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/LevelFour.dam.bak", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levelOne.dam", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levelOne.dam.bak", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_Group1_Map1.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_Group1_Map2.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_LevelFour_Map1.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_LevelFour_Map2.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_levelOne_Map1.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_levelOne_Map2.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_LevelThree_Map1.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_LevelThree_Map2.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_LevelTwo_Map1.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_LevelTwo_Map2.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_Menu_Map1.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_Tutorial_Map2.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_Tutorial_Map3.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_Win_Map1.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_WorldMap_Map1.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/mapCSV_WorldSelect_Map1.csv", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/tutorial.dam", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/tutorial.dam.bak", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/levels/WorldMap.dam", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/LevelThree.dam", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/LevelThree.dam.bak", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/LevelTwo.dam", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/LevelTwo.dam.bak", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/Menu.dam", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/Platformer.dam", urlLoader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/platformTiles.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/player.png", loader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/power.png", loader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = BINARY;
		urlLoaders.set ("assets/spriteTiles", urlLoader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/spriteTiles.png", loader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/Win.dam", urlLoader);
		total ++;
		
		
		var urlLoader:URLLoader = new URLLoader ();
		urlLoader.dataFormat = TEXT;
		urlLoaders.set ("assets/Win.dam.bak", urlLoader);
		total ++;
		
		
		var loader:Loader = new Loader ();
		loaders.set ("assets/world.png", loader);
		total ++;
		
		
		if (total == 0) {
			
			begin ();
			
		} else {
			
			for (path in loaders.keys ()) {
				
				var loader:Loader = loaders.get (path);
				loader.contentLoaderInfo.addEventListener ("complete", loader_onComplete);
				loader.load (new URLRequest (path));
				
			}
			
			for (path in urlLoaders.keys ()) {
				
				var urlLoader:URLLoader = urlLoaders.get (path);
				urlLoader.addEventListener ("complete", loader_onComplete);
				urlLoader.load (new URLRequest (path));
				
			}
			
		}
		
	}
	
	
	private static function begin ():Void {
		
		preloader.addEventListener (Event.COMPLETE, preloader_onComplete);
		preloader.onLoaded ();
		
	}
	

   public static function getAsset(inName:String):Dynamic {
	   
		
		if (inName=="assets/beebTiles.pxi") {
			
			return Assets.getBytes ("assets/beebTiles.pxi");
			
		}
		
		if (inName=="assets/cPower.png") {
			
			return Assets.getBitmapData ("assets/cPower.png");
			
		}
		
		if (inName=="assets/data/autotiles.png") {
			
			return Assets.getBitmapData ("assets/data/autotiles.png");
			
		}
		
		if (inName=="assets/data/autotiles_alt.png") {
			
			return Assets.getBitmapData ("assets/data/autotiles_alt.png");
			
		}
		
		if (inName=="assets/data/base.png") {
			
			return Assets.getBitmapData ("assets/data/base.png");
			
		}
		
		if (inName=="assets/data/beep.mp3") {
			
			return Assets.getSound ("assets/data/beep.mp3");
			
		}
		
		if (inName=="assets/data/beep.wav") {
			
			return Assets.getSound ("assets/data/beep.wav");
			
		}
		
		if (inName=="assets/data/button.png") {
			
			return Assets.getBitmapData ("assets/data/button.png");
			
		}
		
		if (inName=="assets/data/button_a.png") {
			
			return Assets.getBitmapData ("assets/data/button_a.png");
			
		}
		
		if (inName=="assets/data/button_b.png") {
			
			return Assets.getBitmapData ("assets/data/button_b.png");
			
		}
		
		if (inName=="assets/data/button_c.png") {
			
			return Assets.getBitmapData ("assets/data/button_c.png");
			
		}
		
		if (inName=="assets/data/button_down.png") {
			
			return Assets.getBitmapData ("assets/data/button_down.png");
			
		}
		
		if (inName=="assets/data/button_left.png") {
			
			return Assets.getBitmapData ("assets/data/button_left.png");
			
		}
		
		if (inName=="assets/data/button_right.png") {
			
			return Assets.getBitmapData ("assets/data/button_right.png");
			
		}
		
		if (inName=="assets/data/button_up.png") {
			
			return Assets.getBitmapData ("assets/data/button_up.png");
			
		}
		
		if (inName=="assets/data/button_x.png") {
			
			return Assets.getBitmapData ("assets/data/button_x.png");
			
		}
		
		if (inName=="assets/data/button_y.png") {
			
			return Assets.getBitmapData ("assets/data/button_y.png");
			
		}
		
		if (inName=="assets/data/click.wav") {
			
			return Assets.getSound ("assets/data/click.wav");
			
		}
		
		if (inName=="assets/data/courier.ttf") {
			
			return Assets.getFont ("assets/data/courier.ttf");
			
		}
		
		if (inName=="assets/data/cursor.png") {
			
			return Assets.getBitmapData ("assets/data/cursor.png");
			
		}
		
		if (inName=="assets/data/default.png") {
			
			return Assets.getBitmapData ("assets/data/default.png");
			
		}
		
		if (inName=="assets/data/etherial_hibpm.mp3") {
			
			return Assets.getSound ("assets/data/etherial_hibpm.mp3");
			
		}
		
		if (inName=="assets/data/fontData10pt.png") {
			
			return Assets.getBitmapData ("assets/data/fontData10pt.png");
			
		}
		
		if (inName=="assets/data/fontData11pt.png") {
			
			return Assets.getBitmapData ("assets/data/fontData11pt.png");
			
		}
		
		if (inName=="assets/data/handle.png") {
			
			return Assets.getBitmapData ("assets/data/handle.png");
			
		}
		
		if (inName=="assets/data/hurt.wav") {
			
			return Assets.getSound ("assets/data/hurt.wav");
			
		}
		
		if (inName=="assets/data/jump.wav") {
			
			return Assets.getSound ("assets/data/jump.wav");
			
		}
		
		if (inName=="assets/data/logo.png") {
			
			return Assets.getBitmapData ("assets/data/logo.png");
			
		}
		
		if (inName=="assets/data/logo_corners.png") {
			
			return Assets.getBitmapData ("assets/data/logo_corners.png");
			
		}
		
		if (inName=="assets/data/logo_light.png") {
			
			return Assets.getBitmapData ("assets/data/logo_light.png");
			
		}
		
		if (inName=="assets/data/nokiafc22.ttf") {
			
			return Assets.getFont ("assets/data/nokiafc22.ttf");
			
		}
		
		if (inName=="assets/data/pickup.wav") {
			
			return Assets.getSound ("assets/data/pickup.wav");
			
		}
		
		if (inName=="assets/data/standard_beat.mp3") {
			
			return Assets.getSound ("assets/data/standard_beat.mp3");
			
		}
		
		if (inName=="assets/data/stick.png") {
			
			return Assets.getBitmapData ("assets/data/stick.png");
			
		}
		
		if (inName=="assets/data/surreal_ambient.mp3") {
			
			return Assets.getSound ("assets/data/surreal_ambient.mp3");
			
		}
		
		if (inName=="assets/data/vcr/flixel.png") {
			
			return Assets.getBitmapData ("assets/data/vcr/flixel.png");
			
		}
		
		if (inName=="assets/data/vcr/open.png") {
			
			return Assets.getBitmapData ("assets/data/vcr/open.png");
			
		}
		
		if (inName=="assets/data/vcr/pause.png") {
			
			return Assets.getBitmapData ("assets/data/vcr/pause.png");
			
		}
		
		if (inName=="assets/data/vcr/play.png") {
			
			return Assets.getBitmapData ("assets/data/vcr/play.png");
			
		}
		
		if (inName=="assets/data/vcr/record_off.png") {
			
			return Assets.getBitmapData ("assets/data/vcr/record_off.png");
			
		}
		
		if (inName=="assets/data/vcr/record_on.png") {
			
			return Assets.getBitmapData ("assets/data/vcr/record_on.png");
			
		}
		
		if (inName=="assets/data/vcr/restart.png") {
			
			return Assets.getBitmapData ("assets/data/vcr/restart.png");
			
		}
		
		if (inName=="assets/data/vcr/step.png") {
			
			return Assets.getBitmapData ("assets/data/vcr/step.png");
			
		}
		
		if (inName=="assets/data/vcr/stop.png") {
			
			return Assets.getBitmapData ("assets/data/vcr/stop.png");
			
		}
		
		if (inName=="assets/data/vis/bounds.png") {
			
			return Assets.getBitmapData ("assets/data/vis/bounds.png");
			
		}
		
		if (inName=="assets/door.png") {
			
			return Assets.getBitmapData ("assets/door.png");
			
		}
		
		if (inName=="assets/goal") {
			
			return Assets.getBytes ("assets/goal");
			
		}
		
		if (inName=="assets/goal.png") {
			
			return Assets.getBitmapData ("assets/goal.png");
			
		}
		
		if (inName=="assets/health.png") {
			
			return Assets.getBitmapData ("assets/health.png");
			
		}
		
		if (inName=="assets/lava.png") {
			
			return Assets.getBitmapData ("assets/lava.png");
			
		}
		
		if (inName=="assets/LevelFour.dam") {
			
			return Assets.getText ("assets/LevelFour.dam");
			
		}
		
		if (inName=="assets/LevelFour.dam.bak") {
			
			return Assets.getText ("assets/LevelFour.dam.bak");
			
		}
		
		if (inName=="assets/levelOne.dam") {
			
			return Assets.getText ("assets/levelOne.dam");
			
		}
		
		if (inName=="assets/levelOne.dam.bak") {
			
			return Assets.getText ("assets/levelOne.dam.bak");
			
		}
		
		if (inName=="assets/levels/mapCSV_Group1_Map1.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_Group1_Map1.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_Group1_Map2.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_Group1_Map2.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_LevelFour_Map1.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_LevelFour_Map1.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_LevelFour_Map2.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_LevelFour_Map2.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_levelOne_Map1.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_levelOne_Map1.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_levelOne_Map2.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_levelOne_Map2.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_LevelThree_Map1.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_LevelThree_Map1.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_LevelThree_Map2.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_LevelThree_Map2.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_LevelTwo_Map1.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_LevelTwo_Map1.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_LevelTwo_Map2.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_LevelTwo_Map2.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_Menu_Map1.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_Menu_Map1.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_Tutorial_Map2.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_Tutorial_Map2.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_Tutorial_Map3.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_Tutorial_Map3.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_Win_Map1.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_Win_Map1.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_WorldMap_Map1.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_WorldMap_Map1.csv");
			
		}
		
		if (inName=="assets/levels/mapCSV_WorldSelect_Map1.csv") {
			
			return Assets.getText ("assets/levels/mapCSV_WorldSelect_Map1.csv");
			
		}
		
		if (inName=="assets/levels/tutorial.dam") {
			
			return Assets.getText ("assets/levels/tutorial.dam");
			
		}
		
		if (inName=="assets/levels/tutorial.dam.bak") {
			
			return Assets.getText ("assets/levels/tutorial.dam.bak");
			
		}
		
		if (inName=="assets/levels/WorldMap.dam") {
			
			return Assets.getText ("assets/levels/WorldMap.dam");
			
		}
		
		if (inName=="assets/LevelThree.dam") {
			
			return Assets.getText ("assets/LevelThree.dam");
			
		}
		
		if (inName=="assets/LevelThree.dam.bak") {
			
			return Assets.getText ("assets/LevelThree.dam.bak");
			
		}
		
		if (inName=="assets/LevelTwo.dam") {
			
			return Assets.getText ("assets/LevelTwo.dam");
			
		}
		
		if (inName=="assets/LevelTwo.dam.bak") {
			
			return Assets.getText ("assets/LevelTwo.dam.bak");
			
		}
		
		if (inName=="assets/Menu.dam") {
			
			return Assets.getText ("assets/Menu.dam");
			
		}
		
		if (inName=="assets/Platformer.dam") {
			
			return Assets.getText ("assets/Platformer.dam");
			
		}
		
		if (inName=="assets/platformTiles.png") {
			
			return Assets.getBitmapData ("assets/platformTiles.png");
			
		}
		
		if (inName=="assets/player.png") {
			
			return Assets.getBitmapData ("assets/player.png");
			
		}
		
		if (inName=="assets/power.png") {
			
			return Assets.getBitmapData ("assets/power.png");
			
		}
		
		if (inName=="assets/spriteTiles") {
			
			return Assets.getBytes ("assets/spriteTiles");
			
		}
		
		if (inName=="assets/spriteTiles.png") {
			
			return Assets.getBitmapData ("assets/spriteTiles.png");
			
		}
		
		if (inName=="assets/Win.dam") {
			
			return Assets.getText ("assets/Win.dam");
			
		}
		
		if (inName=="assets/Win.dam.bak") {
			
			return Assets.getText ("assets/Win.dam.bak");
			
		}
		
		if (inName=="assets/world.png") {
			
			return Assets.getBitmapData ("assets/world.png");
			
		}
		
		return null;
		
   }
   
   
   
   
   // Event Handlers
   
   
   
   
	private static function loader_onComplete (event:Event):Void {
		
		completed ++;
		
		preloader.onUpdate (completed, total);
		
		if (completed == total) {
			
			begin ();
			
		}
	   
	}
	
	
	private static function preloader_onComplete (event:Event):Void {
		
		preloader.removeEventListener (Event.COMPLETE, preloader_onComplete);
		
		Lib.current.removeChild(preloader);
		preloader = null;
		
		if (Reflect.field(Main, "main") == null)
		{
			var mainDisplayObj = new Main();
			if (Std.is(mainDisplayObj, browser.display.DisplayObject))
				nme.Lib.current.addChild(cast mainDisplayObj);
		}
		else
		{
			Reflect.callMethod (Main, Reflect.field (Main, "main"), []);
		}
		
	}
   
   
}



	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	
		class NME_assets_data_courier_ttf extends nme.text.Font { }
	

	

	

	

	

	

	

	

	

	

	

	

	
		class NME_assets_data_nokiafc22_ttf extends nme.text.Font { }
	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	



#else


import Main;


class ApplicationMain {
	
	
	public static function main () {
		
		if (Reflect.field(Main, "main") == null) {
			
			Type.createInstance (Main, []);
			
		} else {
			
			Reflect.callMethod (Main, Reflect.field (Main, "main"), []);
			
		}
		
	}
	
	
}


#end