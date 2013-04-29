(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var ApplicationMain = function() { }
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.completed = null;
ApplicationMain.preloader = null;
ApplicationMain.total = null;
ApplicationMain.loaders = null;
ApplicationMain.urlLoaders = null;
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new Hash();
	ApplicationMain.urlLoaders = new Hash();
	ApplicationMain.total = 0;
	ApplicationMain.preloader = new NMEPreloader();
	nme.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var urlLoader = new browser.net.URLLoader();
	urlLoader.dataFormat = browser.net.URLLoaderDataFormat.BINARY;
	ApplicationMain.urlLoaders.set("assets/beebTiles.pxi",urlLoader);
	ApplicationMain.total++;
	var loader = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/cPower.png",loader);
	ApplicationMain.total++;
	var loader1 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/autotiles.png",loader1);
	ApplicationMain.total++;
	var loader2 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/autotiles_alt.png",loader2);
	ApplicationMain.total++;
	var loader3 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/base.png",loader3);
	ApplicationMain.total++;
	var loader4 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button.png",loader4);
	ApplicationMain.total++;
	var loader5 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_a.png",loader5);
	ApplicationMain.total++;
	var loader6 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_b.png",loader6);
	ApplicationMain.total++;
	var loader7 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_c.png",loader7);
	ApplicationMain.total++;
	var loader8 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_down.png",loader8);
	ApplicationMain.total++;
	var loader9 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_left.png",loader9);
	ApplicationMain.total++;
	var loader10 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_right.png",loader10);
	ApplicationMain.total++;
	var loader11 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_up.png",loader11);
	ApplicationMain.total++;
	var loader12 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_x.png",loader12);
	ApplicationMain.total++;
	var loader13 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_y.png",loader13);
	ApplicationMain.total++;
	var loader14 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/cursor.png",loader14);
	ApplicationMain.total++;
	var loader15 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/default.png",loader15);
	ApplicationMain.total++;
	var loader16 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/fontData10pt.png",loader16);
	ApplicationMain.total++;
	var loader17 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/fontData11pt.png",loader17);
	ApplicationMain.total++;
	var loader18 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/handle.png",loader18);
	ApplicationMain.total++;
	var loader19 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/logo.png",loader19);
	ApplicationMain.total++;
	var loader20 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/logo_corners.png",loader20);
	ApplicationMain.total++;
	var loader21 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/logo_light.png",loader21);
	ApplicationMain.total++;
	var loader22 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/stick.png",loader22);
	ApplicationMain.total++;
	var loader23 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/flixel.png",loader23);
	ApplicationMain.total++;
	var loader24 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/open.png",loader24);
	ApplicationMain.total++;
	var loader25 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/pause.png",loader25);
	ApplicationMain.total++;
	var loader26 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/play.png",loader26);
	ApplicationMain.total++;
	var loader27 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/record_off.png",loader27);
	ApplicationMain.total++;
	var loader28 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/record_on.png",loader28);
	ApplicationMain.total++;
	var loader29 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/restart.png",loader29);
	ApplicationMain.total++;
	var loader30 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/step.png",loader30);
	ApplicationMain.total++;
	var loader31 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/stop.png",loader31);
	ApplicationMain.total++;
	var loader32 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/data/vis/bounds.png",loader32);
	ApplicationMain.total++;
	var loader33 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/door.png",loader33);
	ApplicationMain.total++;
	var urlLoader1 = new browser.net.URLLoader();
	urlLoader1.dataFormat = browser.net.URLLoaderDataFormat.BINARY;
	ApplicationMain.urlLoaders.set("assets/goal",urlLoader1);
	ApplicationMain.total++;
	var loader34 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/goal.png",loader34);
	ApplicationMain.total++;
	var loader35 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/health.png",loader35);
	ApplicationMain.total++;
	var loader36 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/lava.png",loader36);
	ApplicationMain.total++;
	var urlLoader2 = new browser.net.URLLoader();
	urlLoader2.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/LevelFour.dam",urlLoader2);
	ApplicationMain.total++;
	var urlLoader3 = new browser.net.URLLoader();
	urlLoader3.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/LevelFour.dam.bak",urlLoader3);
	ApplicationMain.total++;
	var urlLoader4 = new browser.net.URLLoader();
	urlLoader4.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levelOne.dam",urlLoader4);
	ApplicationMain.total++;
	var urlLoader5 = new browser.net.URLLoader();
	urlLoader5.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levelOne.dam.bak",urlLoader5);
	ApplicationMain.total++;
	var urlLoader6 = new browser.net.URLLoader();
	urlLoader6.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_Group1_Map1.csv",urlLoader6);
	ApplicationMain.total++;
	var urlLoader7 = new browser.net.URLLoader();
	urlLoader7.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_Group1_Map2.csv",urlLoader7);
	ApplicationMain.total++;
	var urlLoader8 = new browser.net.URLLoader();
	urlLoader8.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_LevelFour_Map1.csv",urlLoader8);
	ApplicationMain.total++;
	var urlLoader9 = new browser.net.URLLoader();
	urlLoader9.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_LevelFour_Map2.csv",urlLoader9);
	ApplicationMain.total++;
	var urlLoader10 = new browser.net.URLLoader();
	urlLoader10.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_levelOne_Map1.csv",urlLoader10);
	ApplicationMain.total++;
	var urlLoader11 = new browser.net.URLLoader();
	urlLoader11.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_levelOne_Map2.csv",urlLoader11);
	ApplicationMain.total++;
	var urlLoader12 = new browser.net.URLLoader();
	urlLoader12.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_LevelThree_Map1.csv",urlLoader12);
	ApplicationMain.total++;
	var urlLoader13 = new browser.net.URLLoader();
	urlLoader13.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_LevelThree_Map2.csv",urlLoader13);
	ApplicationMain.total++;
	var urlLoader14 = new browser.net.URLLoader();
	urlLoader14.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_LevelTwo_Map1.csv",urlLoader14);
	ApplicationMain.total++;
	var urlLoader15 = new browser.net.URLLoader();
	urlLoader15.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_LevelTwo_Map2.csv",urlLoader15);
	ApplicationMain.total++;
	var urlLoader16 = new browser.net.URLLoader();
	urlLoader16.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_Menu_Map1.csv",urlLoader16);
	ApplicationMain.total++;
	var urlLoader17 = new browser.net.URLLoader();
	urlLoader17.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_Tutorial_Map2.csv",urlLoader17);
	ApplicationMain.total++;
	var urlLoader18 = new browser.net.URLLoader();
	urlLoader18.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_Tutorial_Map3.csv",urlLoader18);
	ApplicationMain.total++;
	var urlLoader19 = new browser.net.URLLoader();
	urlLoader19.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_Win_Map1.csv",urlLoader19);
	ApplicationMain.total++;
	var urlLoader20 = new browser.net.URLLoader();
	urlLoader20.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_WorldMap_Map1.csv",urlLoader20);
	ApplicationMain.total++;
	var urlLoader21 = new browser.net.URLLoader();
	urlLoader21.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/mapCSV_WorldSelect_Map1.csv",urlLoader21);
	ApplicationMain.total++;
	var urlLoader22 = new browser.net.URLLoader();
	urlLoader22.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/tutorial.dam",urlLoader22);
	ApplicationMain.total++;
	var urlLoader23 = new browser.net.URLLoader();
	urlLoader23.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/tutorial.dam.bak",urlLoader23);
	ApplicationMain.total++;
	var urlLoader24 = new browser.net.URLLoader();
	urlLoader24.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/levels/WorldMap.dam",urlLoader24);
	ApplicationMain.total++;
	var urlLoader25 = new browser.net.URLLoader();
	urlLoader25.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/LevelThree.dam",urlLoader25);
	ApplicationMain.total++;
	var urlLoader26 = new browser.net.URLLoader();
	urlLoader26.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/LevelThree.dam.bak",urlLoader26);
	ApplicationMain.total++;
	var urlLoader27 = new browser.net.URLLoader();
	urlLoader27.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/LevelTwo.dam",urlLoader27);
	ApplicationMain.total++;
	var urlLoader28 = new browser.net.URLLoader();
	urlLoader28.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/LevelTwo.dam.bak",urlLoader28);
	ApplicationMain.total++;
	var urlLoader29 = new browser.net.URLLoader();
	urlLoader29.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/Menu.dam",urlLoader29);
	ApplicationMain.total++;
	var urlLoader30 = new browser.net.URLLoader();
	urlLoader30.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/Platformer.dam",urlLoader30);
	ApplicationMain.total++;
	var loader37 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/platformTiles.png",loader37);
	ApplicationMain.total++;
	var loader38 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/player.png",loader38);
	ApplicationMain.total++;
	var loader39 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/power.png",loader39);
	ApplicationMain.total++;
	var urlLoader31 = new browser.net.URLLoader();
	urlLoader31.dataFormat = browser.net.URLLoaderDataFormat.BINARY;
	ApplicationMain.urlLoaders.set("assets/spriteTiles",urlLoader31);
	ApplicationMain.total++;
	var loader40 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/spriteTiles.png",loader40);
	ApplicationMain.total++;
	var urlLoader32 = new browser.net.URLLoader();
	urlLoader32.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/Win.dam",urlLoader32);
	ApplicationMain.total++;
	var urlLoader33 = new browser.net.URLLoader();
	urlLoader33.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	ApplicationMain.urlLoaders.set("assets/Win.dam.bak",urlLoader33);
	ApplicationMain.total++;
	var loader41 = new browser.display.Loader();
	ApplicationMain.loaders.set("assets/world.png",loader41);
	ApplicationMain.total++;
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader42 = ApplicationMain.loaders.get(path);
			loader42.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader42.load(new browser.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader34 = ApplicationMain.urlLoaders.get(path);
			urlLoader34.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader34.load(new browser.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(browser.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.getAsset = function(inName) {
	if(inName == "assets/beebTiles.pxi") return nme.installer.Assets.getBytes("assets/beebTiles.pxi");
	if(inName == "assets/cPower.png") return nme.installer.Assets.getBitmapData("assets/cPower.png");
	if(inName == "assets/data/autotiles.png") return nme.installer.Assets.getBitmapData("assets/data/autotiles.png");
	if(inName == "assets/data/autotiles_alt.png") return nme.installer.Assets.getBitmapData("assets/data/autotiles_alt.png");
	if(inName == "assets/data/base.png") return nme.installer.Assets.getBitmapData("assets/data/base.png");
	if(inName == "assets/data/beep.mp3") return nme.installer.Assets.getSound("assets/data/beep.mp3");
	if(inName == "assets/data/beep.wav") return nme.installer.Assets.getSound("assets/data/beep.wav");
	if(inName == "assets/data/button.png") return nme.installer.Assets.getBitmapData("assets/data/button.png");
	if(inName == "assets/data/button_a.png") return nme.installer.Assets.getBitmapData("assets/data/button_a.png");
	if(inName == "assets/data/button_b.png") return nme.installer.Assets.getBitmapData("assets/data/button_b.png");
	if(inName == "assets/data/button_c.png") return nme.installer.Assets.getBitmapData("assets/data/button_c.png");
	if(inName == "assets/data/button_down.png") return nme.installer.Assets.getBitmapData("assets/data/button_down.png");
	if(inName == "assets/data/button_left.png") return nme.installer.Assets.getBitmapData("assets/data/button_left.png");
	if(inName == "assets/data/button_right.png") return nme.installer.Assets.getBitmapData("assets/data/button_right.png");
	if(inName == "assets/data/button_up.png") return nme.installer.Assets.getBitmapData("assets/data/button_up.png");
	if(inName == "assets/data/button_x.png") return nme.installer.Assets.getBitmapData("assets/data/button_x.png");
	if(inName == "assets/data/button_y.png") return nme.installer.Assets.getBitmapData("assets/data/button_y.png");
	if(inName == "assets/data/click.wav") return nme.installer.Assets.getSound("assets/data/click.wav");
	if(inName == "assets/data/courier.ttf") return nme.installer.Assets.getFont("assets/data/courier.ttf");
	if(inName == "assets/data/cursor.png") return nme.installer.Assets.getBitmapData("assets/data/cursor.png");
	if(inName == "assets/data/default.png") return nme.installer.Assets.getBitmapData("assets/data/default.png");
	if(inName == "assets/data/etherial_hibpm.mp3") return nme.installer.Assets.getSound("assets/data/etherial_hibpm.mp3");
	if(inName == "assets/data/fontData10pt.png") return nme.installer.Assets.getBitmapData("assets/data/fontData10pt.png");
	if(inName == "assets/data/fontData11pt.png") return nme.installer.Assets.getBitmapData("assets/data/fontData11pt.png");
	if(inName == "assets/data/handle.png") return nme.installer.Assets.getBitmapData("assets/data/handle.png");
	if(inName == "assets/data/hurt.wav") return nme.installer.Assets.getSound("assets/data/hurt.wav");
	if(inName == "assets/data/jump.wav") return nme.installer.Assets.getSound("assets/data/jump.wav");
	if(inName == "assets/data/logo.png") return nme.installer.Assets.getBitmapData("assets/data/logo.png");
	if(inName == "assets/data/logo_corners.png") return nme.installer.Assets.getBitmapData("assets/data/logo_corners.png");
	if(inName == "assets/data/logo_light.png") return nme.installer.Assets.getBitmapData("assets/data/logo_light.png");
	if(inName == "assets/data/nokiafc22.ttf") return nme.installer.Assets.getFont("assets/data/nokiafc22.ttf");
	if(inName == "assets/data/pickup.wav") return nme.installer.Assets.getSound("assets/data/pickup.wav");
	if(inName == "assets/data/standard_beat.mp3") return nme.installer.Assets.getSound("assets/data/standard_beat.mp3");
	if(inName == "assets/data/stick.png") return nme.installer.Assets.getBitmapData("assets/data/stick.png");
	if(inName == "assets/data/surreal_ambient.mp3") return nme.installer.Assets.getSound("assets/data/surreal_ambient.mp3");
	if(inName == "assets/data/vcr/flixel.png") return nme.installer.Assets.getBitmapData("assets/data/vcr/flixel.png");
	if(inName == "assets/data/vcr/open.png") return nme.installer.Assets.getBitmapData("assets/data/vcr/open.png");
	if(inName == "assets/data/vcr/pause.png") return nme.installer.Assets.getBitmapData("assets/data/vcr/pause.png");
	if(inName == "assets/data/vcr/play.png") return nme.installer.Assets.getBitmapData("assets/data/vcr/play.png");
	if(inName == "assets/data/vcr/record_off.png") return nme.installer.Assets.getBitmapData("assets/data/vcr/record_off.png");
	if(inName == "assets/data/vcr/record_on.png") return nme.installer.Assets.getBitmapData("assets/data/vcr/record_on.png");
	if(inName == "assets/data/vcr/restart.png") return nme.installer.Assets.getBitmapData("assets/data/vcr/restart.png");
	if(inName == "assets/data/vcr/step.png") return nme.installer.Assets.getBitmapData("assets/data/vcr/step.png");
	if(inName == "assets/data/vcr/stop.png") return nme.installer.Assets.getBitmapData("assets/data/vcr/stop.png");
	if(inName == "assets/data/vis/bounds.png") return nme.installer.Assets.getBitmapData("assets/data/vis/bounds.png");
	if(inName == "assets/door.png") return nme.installer.Assets.getBitmapData("assets/door.png");
	if(inName == "assets/goal") return nme.installer.Assets.getBytes("assets/goal");
	if(inName == "assets/goal.png") return nme.installer.Assets.getBitmapData("assets/goal.png");
	if(inName == "assets/health.png") return nme.installer.Assets.getBitmapData("assets/health.png");
	if(inName == "assets/lava.png") return nme.installer.Assets.getBitmapData("assets/lava.png");
	if(inName == "assets/LevelFour.dam") return nme.installer.Assets.getText("assets/LevelFour.dam");
	if(inName == "assets/LevelFour.dam.bak") return nme.installer.Assets.getText("assets/LevelFour.dam.bak");
	if(inName == "assets/levelOne.dam") return nme.installer.Assets.getText("assets/levelOne.dam");
	if(inName == "assets/levelOne.dam.bak") return nme.installer.Assets.getText("assets/levelOne.dam.bak");
	if(inName == "assets/levels/mapCSV_Group1_Map1.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_Group1_Map1.csv");
	if(inName == "assets/levels/mapCSV_Group1_Map2.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_Group1_Map2.csv");
	if(inName == "assets/levels/mapCSV_LevelFour_Map1.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_LevelFour_Map1.csv");
	if(inName == "assets/levels/mapCSV_LevelFour_Map2.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_LevelFour_Map2.csv");
	if(inName == "assets/levels/mapCSV_levelOne_Map1.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_levelOne_Map1.csv");
	if(inName == "assets/levels/mapCSV_levelOne_Map2.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_levelOne_Map2.csv");
	if(inName == "assets/levels/mapCSV_LevelThree_Map1.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_LevelThree_Map1.csv");
	if(inName == "assets/levels/mapCSV_LevelThree_Map2.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_LevelThree_Map2.csv");
	if(inName == "assets/levels/mapCSV_LevelTwo_Map1.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_LevelTwo_Map1.csv");
	if(inName == "assets/levels/mapCSV_LevelTwo_Map2.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_LevelTwo_Map2.csv");
	if(inName == "assets/levels/mapCSV_Menu_Map1.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_Menu_Map1.csv");
	if(inName == "assets/levels/mapCSV_Tutorial_Map2.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_Tutorial_Map2.csv");
	if(inName == "assets/levels/mapCSV_Tutorial_Map3.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_Tutorial_Map3.csv");
	if(inName == "assets/levels/mapCSV_Win_Map1.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_Win_Map1.csv");
	if(inName == "assets/levels/mapCSV_WorldMap_Map1.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_WorldMap_Map1.csv");
	if(inName == "assets/levels/mapCSV_WorldSelect_Map1.csv") return nme.installer.Assets.getText("assets/levels/mapCSV_WorldSelect_Map1.csv");
	if(inName == "assets/levels/tutorial.dam") return nme.installer.Assets.getText("assets/levels/tutorial.dam");
	if(inName == "assets/levels/tutorial.dam.bak") return nme.installer.Assets.getText("assets/levels/tutorial.dam.bak");
	if(inName == "assets/levels/WorldMap.dam") return nme.installer.Assets.getText("assets/levels/WorldMap.dam");
	if(inName == "assets/LevelThree.dam") return nme.installer.Assets.getText("assets/LevelThree.dam");
	if(inName == "assets/LevelThree.dam.bak") return nme.installer.Assets.getText("assets/LevelThree.dam.bak");
	if(inName == "assets/LevelTwo.dam") return nme.installer.Assets.getText("assets/LevelTwo.dam");
	if(inName == "assets/LevelTwo.dam.bak") return nme.installer.Assets.getText("assets/LevelTwo.dam.bak");
	if(inName == "assets/Menu.dam") return nme.installer.Assets.getText("assets/Menu.dam");
	if(inName == "assets/Platformer.dam") return nme.installer.Assets.getText("assets/Platformer.dam");
	if(inName == "assets/platformTiles.png") return nme.installer.Assets.getBitmapData("assets/platformTiles.png");
	if(inName == "assets/player.png") return nme.installer.Assets.getBitmapData("assets/player.png");
	if(inName == "assets/power.png") return nme.installer.Assets.getBitmapData("assets/power.png");
	if(inName == "assets/spriteTiles") return nme.installer.Assets.getBytes("assets/spriteTiles");
	if(inName == "assets/spriteTiles.png") return nme.installer.Assets.getBitmapData("assets/spriteTiles.png");
	if(inName == "assets/Win.dam") return nme.installer.Assets.getText("assets/Win.dam");
	if(inName == "assets/Win.dam.bak") return nme.installer.Assets.getText("assets/Win.dam.bak");
	if(inName == "assets/world.png") return nme.installer.Assets.getBitmapData("assets/world.png");
	return null;
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(browser.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	nme.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = new Main();
		if(js.Boot.__instanceof(mainDisplayObj,browser.display.DisplayObject)) nme.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(Main,"main").apply(Main,[]);
}
var browser = {}
browser.text = {}
browser.text.Font = function() {
	this.nmeMetrics = [];
	this.nmeFontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(browser.text.Font.nmeFontData == null) {
		browser.text.Font.nmeFontData = [];
		browser.text.Font.nmeFontData["Bitstream_Vera_Sans"] = browser.text.Font.DEFAULT_FONT_DATA;
	}
	if(className == "browser.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["browser.text.Font"] = browser.text.Font;
browser.text.Font.__name__ = ["browser","text","Font"];
browser.text.Font.nmeFontData = null;
browser.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	var sans = new browser.text.Font();
	sans.set_fontName("Bitstream_Vera_Sans");
	sans.fontStyle = browser.text.FontStyle.REGULAR;
	sans.fontType = browser.text.FontType.DEVICE;
	return [sans];
}
browser.text.Font.nmeOfResource = function(name) {
	var data = haxe.Resource.getString(name);
	if(data == null) haxe.Log.trace("Resource data for string '" + name + "' not found.",{ fileName : "Font.hx", lineNumber : 107, className : "browser.text.Font", methodName : "nmeOfResource"}); else browser.text.Font.nmeFontData[name] = data;
}
browser.text.Font.registerFont = function(font) {
}
browser.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(browser.text.Font.nmeFontData[this.fontName] == null) try {
			browser.text.Font.nmeOfResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(browser.text.Font.nmeFontData[this.fontName] != null) try {
			this.nmeGlyphData = haxe.Unserializer.run(browser.text.Font.nmeFontData[this.fontName]);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,nmeSetScale: function(scale) {
		this.nmeFontScale = scale / 1024;
	}
	,nmeRender: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.nmeGlyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale,inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			}
		}
	}
	,nmeGetAdvance: function(inGlyph,height) {
		var m = this.nmeMetrics[inGlyph];
		if(m == null) {
			var glyph = this.nmeGlyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.nmeMetrics[inGlyph] = m = glyph._width * this.nmeFontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,hasGlyph: function(str) {
		return this.nmeGlyphData.exists(HxOverrides.cca(str,0));
	}
	,nmeMetrics: null
	,nmeGlyphData: null
	,nmeFontScale: null
	,fontType: null
	,fontStyle: null
	,fontName: null
	,__class__: browser.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
var NME_assets_data_courier_ttf = function() {
	browser.text.Font.call(this);
};
$hxClasses["NME_assets_data_courier_ttf"] = NME_assets_data_courier_ttf;
NME_assets_data_courier_ttf.__name__ = ["NME_assets_data_courier_ttf"];
NME_assets_data_courier_ttf.__super__ = browser.text.Font;
NME_assets_data_courier_ttf.prototype = $extend(browser.text.Font.prototype,{
	__class__: NME_assets_data_courier_ttf
});
var NME_assets_data_nokiafc22_ttf = function() {
	browser.text.Font.call(this);
};
$hxClasses["NME_assets_data_nokiafc22_ttf"] = NME_assets_data_nokiafc22_ttf;
NME_assets_data_nokiafc22_ttf.__name__ = ["NME_assets_data_nokiafc22_ttf"];
NME_assets_data_nokiafc22_ttf.__super__ = browser.text.Font;
NME_assets_data_nokiafc22_ttf.prototype = $extend(browser.text.Font.prototype,{
	__class__: NME_assets_data_nokiafc22_ttf
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	customReplace: function(s,f) {
		var buf = new StringBuf();
		while(true) {
			if(!this.match(s)) break;
			buf.b += Std.string(this.matchedLeft());
			buf.b += Std.string(f(this));
			s = this.matchedRight();
		}
		buf.b += Std.string(s);
		return buf.b;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matchedLeft: function() {
		if(this.r.m == null) throw "No string matched";
		return this.r.s.substr(0,this.r.m.index);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,r: null
	,__class__: EReg
}
var Hash = function() {
	this.h = { };
};
$hxClasses["Hash"] = Hash;
Hash.__name__ = ["Hash"];
Hash.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if(it.hasNext()) s.b += Std.string(", ");
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,h: null
	,__class__: Hash
}
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
}
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var IntHash = function() {
	this.h = { };
};
$hxClasses["IntHash"] = IntHash;
IntHash.__name__ = ["IntHash"];
IntHash.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if(it.hasNext()) s.b += Std.string(", ");
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,h: null
	,__class__: IntHash
}
var IntIter = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIter"] = IntIter;
IntIter.__name__ = ["IntIter"];
IntIter.prototype = {
	next: function() {
		return this.min++;
	}
	,hasNext: function() {
		return this.min < this.max;
	}
	,max: null
	,min: null
	,__class__: IntIter
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
	,join: function(sep) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while(l != null) {
			if(first) first = false; else s.b += Std.string(sep);
			s.b += Std.string(l[0]);
			l = l[1];
		}
		return s.b;
	}
	,toString: function() {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		s.b += Std.string("{");
		while(l != null) {
			if(first) first = false; else s.b += Std.string(", ");
			s.b += Std.string(Std.string(l[0]));
			l = l[1];
		}
		s.b += Std.string("}");
		return s.b;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,last: function() {
		return this.q == null?null:this.q[0];
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,length: null
	,q: null
	,h: null
	,__class__: List
}
browser.events = {}
browser.events.IEventDispatcher = function() { }
$hxClasses["browser.events.IEventDispatcher"] = browser.events.IEventDispatcher;
browser.events.IEventDispatcher.__name__ = ["browser","events","IEventDispatcher"];
browser.events.IEventDispatcher.prototype = {
	willTrigger: null
	,removeEventListener: null
	,hasEventListener: null
	,dispatchEvent: null
	,addEventListener: null
	,__class__: browser.events.IEventDispatcher
}
browser.events.EventDispatcher = function(target) {
	if(target != null) this.nmeTarget = target; else this.nmeTarget = this;
	this.nmeEventMap = [];
};
$hxClasses["browser.events.EventDispatcher"] = browser.events.EventDispatcher;
browser.events.EventDispatcher.__name__ = ["browser","events","EventDispatcher"];
browser.events.EventDispatcher.__interfaces__ = [browser.events.IEventDispatcher];
browser.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
browser.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,setList: function(type,list) {
		this.nmeEventMap[type] = list;
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,getList: function(type) {
		return this.nmeEventMap[type];
	}
	,existList: function(type) {
		return this.nmeEventMap != null && this.nmeEventMap[type] != undefined;
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.nmeTarget;
		var capture = event.eventPhase == browser.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.nmeGetIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new browser.events.Listener(inListener,capture,priority));
		list.sort(browser.events.EventDispatcher.compareListeners);
	}
	,nmeEventMap: null
	,nmeTarget: null
	,__class__: browser.events.EventDispatcher
}
browser.display = {}
browser.display.IBitmapDrawable = function() { }
$hxClasses["browser.display.IBitmapDrawable"] = browser.display.IBitmapDrawable;
browser.display.IBitmapDrawable.__name__ = ["browser","display","IBitmapDrawable"];
browser.display.IBitmapDrawable.prototype = {
	drawToSurface: null
	,__class__: browser.display.IBitmapDrawable
}
browser.display.DisplayObject = function() {
	browser.events.EventDispatcher.call(this,null);
	this._nmeId = browser.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new browser.geom.Transform(this));
	this.nmeX = 0.0;
	this.nmeY = 0.0;
	this.nmeScaleX = 1.0;
	this.nmeScaleY = 1.0;
	this.nmeRotation = 0.0;
	this.nmeWidth = 0.0;
	this.nmeHeight = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.nmeFilters = new Array();
	this.nmeBoundsRect = new browser.geom.Rectangle();
	this.nmeScrollRect = null;
	this.nmeMask = null;
	this.nmeMaskingObj = null;
	this.set_nmeCombinedVisible(this.get_visible());
};
$hxClasses["browser.display.DisplayObject"] = browser.display.DisplayObject;
browser.display.DisplayObject.__name__ = ["browser","display","DisplayObject"];
browser.display.DisplayObject.__interfaces__ = [browser.display.IBitmapDrawable];
browser.display.DisplayObject.__super__ = browser.events.EventDispatcher;
browser.display.DisplayObject.prototype = $extend(browser.events.EventDispatcher.prototype,{
	set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.nmeBoundsRect.width;
		if(this.nmeScaleX * w != inValue) {
			if(w <= 0) return 0;
			this.nmeScaleX = inValue / w;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeWidth;
	}
	,set_y: function(inValue) {
		if(this.nmeY != inValue) {
			this.nmeY = inValue;
			this.nmeInvalidateMatrix(true);
			if(this.parent != null) this.parent.nmeInvalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.nmeY;
	}
	,set_x: function(inValue) {
		if(this.nmeX != inValue) {
			this.nmeX = inValue;
			this.nmeInvalidateMatrix(true);
			if(this.parent != null) this.parent.nmeInvalidateBounds();
		}
		return inValue;
	}
	,get_x: function() {
		return this.nmeX;
	}
	,set_visible: function(inValue) {
		if(this.nmeVisible != inValue) {
			this.nmeVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.nmeVisible;
	}
	,get_visible: function() {
		return this.nmeVisible;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.nmeInvalidateMatrix(true);
		return inValue;
	}
	,get__topmostSurface: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return gfx.nmeSurface;
		return null;
	}
	,get_stage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return browser.Lib.nmeGetStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.nmeScrollRect = inValue;
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.nmeScrollRect == null) return null;
		return this.nmeScrollRect.clone();
	}
	,set_scaleY: function(inValue) {
		if(this.nmeScaleY != inValue) {
			this.nmeScaleY = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.nmeScaleY;
	}
	,set_scaleX: function(inValue) {
		if(this.nmeScaleX != inValue) {
			this.nmeScaleX = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.nmeScaleX;
	}
	,set_rotation: function(inValue) {
		if(this.nmeRotation != inValue) {
			this.nmeRotation = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_rotation: function() {
		return this.nmeRotation;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.nmeInvalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.nmeChildren,this);
			this.parent.nmeInvalidateBounds();
		}
		if(inValue != null) {
			inValue._nmeRenderFlags |= 64;
			if(inValue.parent != null) inValue.parent._nmeRenderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new browser.events.Event(browser.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new browser.events.Event(browser.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,set_nmeCombinedVisible: function(inValue) {
		if(this.nmeCombinedVisible != inValue) {
			this.nmeCombinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.nmeCombinedVisible;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new browser.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new browser.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get__matrixInvalid: function() {
		return (this._nmeRenderFlags & 4) != 0;
	}
	,get__matrixChainInvalid: function() {
		return (this._nmeRenderFlags & 8) != 0;
	}
	,set_mask: function(inValue) {
		if(this.nmeMask != null) this.nmeMask.nmeMaskingObj = null;
		this.nmeMask = inValue;
		if(this.nmeMask != null) this.nmeMask.nmeMaskingObj = this;
		return this.nmeMask;
	}
	,get_mask: function() {
		return this.nmeMask;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.nmeBoundsRect.height;
		if(this.nmeScaleY * h != inValue) {
			if(h <= 0) return 0;
			this.nmeScaleY = inValue / h;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeHeight;
	}
	,set_filters: function(filters) {
		var oldFilterCount = this.nmeFilters == null?0:this.nmeFilters.length;
		if(filters == null) {
			this.nmeFilters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.nmeFilters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.nmeFilters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get__boundsInvalid: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return (this._nmeRenderFlags & 64) != 0; else return (this._nmeRenderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,get_filters: function() {
		if(this.nmeFilters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.nmeFilters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__bottommostSurface: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return gfx.nmeSurface;
		return null;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.nmeGetGraphics();
			if(gfx == null) {
				this.nmeBoundsRect.x = this.get_x();
				this.nmeBoundsRect.y = this.get_y();
				this.nmeBoundsRect.width = 0;
				this.nmeBoundsRect.height = 0;
			} else {
				this.nmeBoundsRect = gfx.nmeExtent.clone();
				if(this.scale9Grid != null) {
					this.nmeBoundsRect.width *= this.nmeScaleX;
					this.nmeBoundsRect.height *= this.nmeScaleY;
					this.nmeWidth = this.nmeBoundsRect.width;
					this.nmeHeight = this.nmeBoundsRect.height;
				} else {
					this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
					this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
				}
				gfx.boundsDirty = false;
			}
			this._nmeRenderFlags &= -65;
		}
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this._nmeId + "]";
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && gfx.nmeSurface != null) browser.Lib.nmeSetSurfaceVisible(gfx.nmeSurface,inValue);
	}
	,nmeValidateMatrix: function() {
		var parentMatrixInvalid = (this._nmeRenderFlags & 8) != 0 && this.parent != null;
		if((this._nmeRenderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.nmeValidateMatrix();
			var m = this.transform.get_matrix();
			if((this._nmeRenderFlags & 16) != 0) this._nmeRenderFlags &= -5;
			if((this._nmeRenderFlags & 4) != 0) {
				m.identity();
				m.scale(this.nmeScaleX,this.nmeScaleY);
				var rad = this.nmeRotation * browser.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.nmeX,this.nmeY);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.nmeGetFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.nmeGetFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.nmeSetFullMatrix(fm);
				this._nmeRenderFlags |= 32;
			}
			this._nmeRenderFlags &= -29;
		}
	}
	,nmeUnifyChildrenWithDOM: function(lastMoveGfx) {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && lastMoveGfx != null && gfx != lastMoveGfx) browser.Lib.nmeSetSurfaceZIndexAfter(gfx.nmeSurface,lastMoveGfx.nmeSurface);
		if(gfx == null) gfx = lastMoveGfx;
		return gfx;
	}
	,nmeTestFlag: function(mask) {
		return (this._nmeRenderFlags & mask) != 0;
	}
	,nmeSetMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,nmeSetFullMatrix: function(inValue) {
		return this.transform.nmeSetFullMatrix(inValue);
	}
	,nmeSetFlagToValue: function(mask,value) {
		if(value) this._nmeRenderFlags |= mask; else this._nmeRenderFlags &= ~mask;
	}
	,nmeSetFlag: function(mask) {
		this._nmeRenderFlags |= mask;
	}
	,nmeSetDimensions: function() {
		if(this.scale9Grid != null) {
			this.nmeBoundsRect.width *= this.nmeScaleX;
			this.nmeBoundsRect.height *= this.nmeScaleY;
			this.nmeWidth = this.nmeBoundsRect.width;
			this.nmeHeight = this.nmeBoundsRect.height;
		} else {
			this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
			this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(gfx.nmeRender(inMask,this.nmeFilters,1,1)) {
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(gfx.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		var fullAlpha = (this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			browser.Lib.nmeDrawToSurface(gfx.nmeSurface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				browser.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			browser.Lib.nmeSetSurfaceOpacity(gfx.nmeSurface,fullAlpha);
		}
	}
	,nmeRemoveFromStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && browser.Lib.nmeIsOnStage(gfx.nmeSurface)) {
			browser.Lib.nmeRemoveSurface(gfx.nmeSurface);
			var evt = new browser.events.Event(browser.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,nmeMatrixOverridden: function() {
		this._nmeRenderFlags |= 16;
		this._nmeRenderFlags |= 4;
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
	}
	,nmeIsOnStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && browser.Lib.nmeIsOnStage(gfx.nmeSurface)) return true;
		return false;
	}
	,nmeInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this._nmeRenderFlags |= 4; else this._nmeRenderFlags |= 8;
	}
	,nmeInvalidateBounds: function() {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
	}
	,nmeGetSurface: function() {
		var gfx = this.nmeGetGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.nmeSurface;
		return surface;
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.nmeGetGraphics();
		if(gfx != null) {
			var extX = gfx.nmeExtent.x;
			var extY = gfx.nmeExtent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.nmeHitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,nmeGetMatrix: function() {
		return this.transform.get_matrix();
	}
	,nmeGetInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.nmeGetInteractiveObjectStack(outStack);
	}
	,nmeGetGraphics: function() {
		return null;
	}
	,nmeGetFullMatrix: function(localMatrix) {
		return this.transform.nmeGetFullMatrix(localMatrix);
	}
	,nmeFireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.nmeGetInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.nmeSetPhase(browser.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.nmeDispatchEvent(event);
				if(event.nmeGetIsCancelled()) return;
			}
		}
		event.nmeSetPhase(browser.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.nmeDispatchEvent(event);
		if(event.nmeGetIsCancelled()) return;
		if(event.bubbles) {
			event.nmeSetPhase(browser.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.nmeDispatchEvent(event);
				if(event.nmeGetIsCancelled()) return;
			}
		}
	}
	,nmeDispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return browser.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,nmeClearFlag: function(mask) {
		this._nmeRenderFlags &= ~mask;
	}
	,nmeBroadcast: function(event) {
		this.nmeDispatchEvent(event);
	}
	,nmeApplyFilters: function(surface) {
		if(this.nmeFilters != null) {
			var _g = 0, _g1 = this.nmeFilters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.nmeApplyFilter(surface);
			}
		}
	}
	,nmeAddToStage: function(newParent,beforeSibling) {
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return;
		if(newParent.nmeGetGraphics() != null) {
			browser.Lib.nmeSetSurfaceId(gfx.nmeSurface,this._nmeId);
			if(beforeSibling != null && beforeSibling.nmeGetGraphics() != null) browser.Lib.nmeAppendSurface(gfx.nmeSurface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.nmeChildren;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) browser.Lib.nmeAppendSurface(gfx.nmeSurface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,browser.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , browser.display.DisplayObjectContainer);
						if(container.nmeChildren.length > 0) nextSibling = container.nmeChildren[container.nmeChildren.length - 1]; else break;
					}
					if(nextSibling.nmeGetGraphics() != gfx) browser.Lib.nmeAppendSurface(gfx.nmeSurface,null,nextSibling.get__topmostSurface()); else browser.Lib.nmeAppendSurface(gfx.nmeSurface);
				}
			}
			browser.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") browser.Lib.nmeAppendSurface(gfx.nmeSurface);
		if(this.nmeIsOnStage()) {
			var evt = new browser.events.Event(browser.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,localToGlobal: function(point) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		return this.transform.nmeGetFullMatrix(null).transformPoint(point);
	}
	,invalidateGraphics: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) {
			gfx.nmeChanged = true;
			gfx.nmeClearNextCycle = true;
		}
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox = shapeFlag == null?true:!shapeFlag;
		if(!boundingBox) return this.nmeGetObjectUnderPoint(new browser.geom.Point(x,y)) != null; else {
			var gfx = this.nmeGetGraphics();
			if(gfx != null) {
				var extX = gfx.nmeExtent.x;
				var extY = gfx.nmeExtent.y;
				var local = this.globalToLocal(new browser.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,handleGraphicsUpdated: function(gfx) {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		this.nmeApplyFilters(gfx.nmeSurface);
		this._nmeRenderFlags |= 32;
	}
	,globalToLocal: function(inPos) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		return this.transform.nmeGetFullMatrix(null).invert().transformPoint(inPos);
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.nmeExtentWithFilters;
		var fm = this.transform.nmeGetFullMatrix(null);
		fm.nmeTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeBoundsRect.clone();
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.nmeGetFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.nmeGetFullMatrix(null).invert());
		var rect = this.nmeBoundsRect.transform(m);
		return rect;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.nmeRender(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,dispatchEvent: function(event) {
		var result = this.nmeDispatchEvent(event);
		if(event.nmeGetIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,_topmostSurface: null
	,_nmeRenderFlags: null
	,_nmeId: null
	,_matrixInvalid: null
	,_matrixChainInvalid: null
	,_fullScaleY: null
	,_fullScaleX: null
	,_boundsInvalid: null
	,_bottommostSurface: null
	,nmeY: null
	,nmeX: null
	,nmeWidth: null
	,nmeVisible: null
	,nmeScrollRect: null
	,nmeScaleY: null
	,nmeScaleX: null
	,nmeRotation: null
	,nmeMaskingObj: null
	,nmeMask: null
	,nmeHeight: null
	,nmeFilters: null
	,nmeBoundsRect: null
	,y: null
	,x: null
	,width: null
	,visible: null
	,transform: null
	,stage: null
	,scrollRect: null
	,scaleY: null
	,scaleX: null
	,scale9Grid: null
	,rotation: null
	,parent: null
	,nmeCombinedVisible: null
	,name: null
	,mouseY: null
	,mouseX: null
	,mask: null
	,height: null
	,filters: null
	,cacheAsBitmap: null
	,blendMode: null
	,alpha: null
	,accessibilityProperties: null
	,__class__: browser.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_nmeCombinedVisible:"set_nmeCombinedVisible",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
browser.display.InteractiveObject = function() {
	browser.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["browser.display.InteractiveObject"] = browser.display.InteractiveObject;
browser.display.InteractiveObject.__name__ = ["browser","display","InteractiveObject"];
browser.display.InteractiveObject.__super__ = browser.display.DisplayObject;
browser.display.InteractiveObject.prototype = $extend(browser.display.DisplayObject.prototype,{
	set_tabIndex: function(inIndex) {
		return this.nmeTabIndex = inIndex;
	}
	,get_tabIndex: function() {
		return this.nmeTabIndex;
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return browser.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeTabIndex: null
	,nmeDoubleClickEnabled: null
	,tabIndex: null
	,tabEnabled: null
	,mouseEnabled: null
	,focusRect: null
	,doubleClickEnabled: null
	,__class__: browser.display.InteractiveObject
	,__properties__: $extend(browser.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
browser.display.DisplayObjectContainer = function() {
	this.nmeChildren = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	browser.display.InteractiveObject.call(this);
	this.nmeCombinedAlpha = this.alpha;
};
$hxClasses["browser.display.DisplayObjectContainer"] = browser.display.DisplayObjectContainer;
browser.display.DisplayObjectContainer.__name__ = ["browser","display","DisplayObjectContainer"];
browser.display.DisplayObjectContainer.__super__ = browser.display.InteractiveObject;
browser.display.DisplayObjectContainer.prototype = $extend(browser.display.InteractiveObject.prototype,{
	set_visible: function(inVal) {
		this.set_nmeCombinedVisible(inVal);
		return browser.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.nmeChildren.length;
	}
	,set_nmeCombinedVisible: function(inVal) {
		if(inVal != this.nmeCombinedVisible) {
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set_nmeCombinedVisible(child.get_visible() && inVal);
			}
		}
		return browser.display.InteractiveObject.prototype.set_nmeCombinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		browser.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			browser.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this._nmeId + "]";
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.nmeChildren[child1];
		this.nmeChildren[child1] = this.nmeChildren[child2];
		this.nmeChildren[child2] = swap;
		swap = null;
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeChildren[i] == child1) c1 = i; else if(this.nmeChildren[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.nmeChildren[c1];
			this.nmeChildren[c1] = this.nmeChildren[c2];
			this.nmeChildren[c2] = swap;
			swap = null;
			this.nmeSwapSurface(c1,c2);
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.nmeChildren.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.nmeChildren.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.nmeChildren[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in nmeChildren array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.nmeChildren[i],this.nmeChildren[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.nmeChildren[i],this.nmeChildren[i + 1]);
				i++;
			}
		}
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.nmeChildren.length) return this.nmeRemoveChild(this.nmeChildren[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChild: function(inChild) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) return (function($this) {
				var $r;
				child.nmeRemoveFromStage();
				child.set_parent(null);
				if($this.getChildIndex(child) >= 0) throw "Not removed properly";
				$r = child;
				return $r;
			}(this));
		}
		throw "removeChild : none found?";
	}
	,nmeUnifyChildrenWithDOM: function(lastMoveGfx) {
		var gfx = browser.display.InteractiveObject.prototype.nmeUnifyChildrenWithDOM.call(this,lastMoveGfx);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			gfx = child.nmeUnifyChildrenWithDOM(gfx);
		}
		return gfx;
	}
	,nmeSwapSurface: function(c1,c2) {
		if(this.nmeChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.nmeChildren.length;
		if(this.nmeChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.nmeChildren.length;
		var gfx1 = this.nmeChildren[c1].nmeGetGraphics();
		var gfx2 = this.nmeChildren[c2].nmeGetGraphics();
		if(gfx1 != null && gfx2 != null) browser.Lib.nmeSwapSurface(gfx1.nmeSurface,gfx2.nmeSurface);
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeVisible) return;
		if(clipRect == null && this.nmeScrollRect != null) clipRect = this.nmeScrollRect;
		browser.display.InteractiveObject.prototype.nmeRender.call(this,inMask,clipRect);
		this.nmeCombinedAlpha = this.parent != null?this.parent.nmeCombinedAlpha * this.alpha:this.alpha;
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.nmeVisible) {
				if(clipRect != null) {
					if((child._nmeRenderFlags & 4) != 0 || (child._nmeRenderFlags & 8) != 0) child.nmeValidateMatrix();
				}
				child.nmeRender(inMask,clipRect);
			}
		}
		if(this.nmeAddedChildren) {
			this.nmeUnifyChildrenWithDOM();
			this.nmeAddedChildren = false;
		}
	}
	,nmeRemoveFromStage: function() {
		browser.display.InteractiveObject.prototype.nmeRemoveFromStage.call(this);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.nmeRemoveFromStage();
		}
	}
	,nmeRemoveChild: function(child) {
		child.nmeRemoveFromStage();
		child.set_parent(null);
		if(this.getChildIndex(child) >= 0) throw "Not removed properly";
		return child;
	}
	,nmeInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this._nmeRenderFlags & 8) != 0) && !((this._nmeRenderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.nmeInvalidateMatrix();
			}
		}
		browser.display.InteractiveObject.prototype.nmeInvalidateMatrix.call(this,local);
	}
	,nmeGetObjectsUnderPoint: function(point,stack) {
		var l = this.nmeChildren.length - 1;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.nmeChildren[l - i].nmeGetObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.nmeChildren.length - 1;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.nmeChildren[l - i].nmeGetObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return browser.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeBroadcast: function(event) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.nmeBroadcast(event);
		}
		this.dispatchEvent(event);
	}
	,nmeAddToStage: function(newParent,beforeSibling) {
		browser.display.InteractiveObject.prototype.nmeAddToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.nmeGetGraphics() == null || !child.nmeIsOnStage()) child.nmeAddToStage(this);
		}
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.nmeGetObjectsUnderPoint(point,result);
		return result;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeChildren[i] == inChild) return i;
		}
		return -1;
	}
	,getChildByName: function(inName) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.nmeChildren.length) return this.nmeChildren[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.nmeChildren.length;
		return null;
	}
	,contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child) return true;
		}
		return false;
	}
	,addChildAt: function(object,index) {
		if(index > this.nmeChildren.length || index < 0) throw "Invalid index position " + index;
		this.nmeAddedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.nmeChildren.length) return this.addChild(object); else {
			if(this.nmeIsOnStage()) object.nmeAddToStage(this,this.nmeChildren[index]);
			this.nmeChildren.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.nmeAddedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.nmeChildren.length - 1);
			return object;
		}
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == object) throw "Internal error: child already existed at index " + this.getChildIndex(object);
		}
		object.set_parent(this);
		if(this.nmeIsOnStage()) object.nmeAddToStage(this);
		if(this.nmeChildren == null) this.nmeChildren = new Array();
		this.nmeChildren.push(object);
		return object;
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.nmeChildren,child);
	}
	,nmeAddedChildren: null
	,tabChildren: null
	,numChildren: null
	,nmeCombinedAlpha: null
	,nmeChildren: null
	,mouseChildren: null
	,__class__: browser.display.DisplayObjectContainer
	,__properties__: $extend(browser.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
browser.display.Sprite = function() {
	browser.display.DisplayObjectContainer.call(this);
	this.nmeGraphics = new browser.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["browser.display.Sprite"] = browser.display.Sprite;
browser.display.Sprite.__name__ = ["browser","display","Sprite"];
browser.display.Sprite.__super__ = browser.display.DisplayObjectContainer;
browser.display.Sprite.prototype = $extend(browser.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.nmeCursorCallbackOver != null) this.removeEventListener(browser.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
		if(this.nmeCursorCallbackOut != null) this.removeEventListener(browser.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
		if(!cursor) browser.Lib.nmeSetCursor(browser._Lib.CursorType.Default); else {
			this.nmeCursorCallbackOver = function(_) {
				browser.Lib.nmeSetCursor(browser._Lib.CursorType.Pointer);
			};
			this.nmeCursorCallbackOut = function(_) {
				browser.Lib.nmeSetCursor(browser._Lib.CursorType.Default);
			};
			this.addEventListener(browser.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
			this.addEventListener(browser.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,get_graphics: function() {
		return this.nmeGraphics;
	}
	,get_dropTarget: function() {
		return this.nmeDropTarget;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this._nmeId + "]";
	}
	,stopDrag: function() {
		if(this.nmeIsOnStage()) {
			this.get_stage().nmeStopDrag(this);
			var l = this.parent.nmeChildren.length - 1;
			var obj = this.get_stage();
			var _g1 = 0, _g = this.parent.nmeChildren.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.nmeChildren[l - i].nmeGetObjectUnderPoint(new browser.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.nmeDropTarget = obj; else this.nmeDropTarget = this.get_stage();
		}
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.nmeIsOnStage()) this.get_stage().nmeStartDrag(this,lockCenter,bounds);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,nmeGraphics: null
	,nmeDropTarget: null
	,nmeCursorCallbackOver: null
	,nmeCursorCallbackOut: null
	,useHandCursor: null
	,graphics: null
	,dropTarget: null
	,buttonMode: null
	,__class__: browser.display.Sprite
	,__properties__: $extend(browser.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
var Main = function() {
	browser.display.Sprite.call(this);
	if(this.get_stage() != null) this.init(); else this.addEventListener(browser.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	nme.Lib.get_current().addChild(new Main());
}
Main.__super__ = browser.display.Sprite;
Main.prototype = $extend(browser.display.Sprite.prototype,{
	initialize: function() {
		nme.Lib.get_current().get_stage().align = browser.display.StageAlign.TOP_LEFT;
		nme.Lib.get_current().get_stage().scaleMode = browser.display.StageScaleMode.NO_SCALE;
	}
	,init: function(e) {
		if(this.hasEventListener(browser.events.Event.ADDED_TO_STAGE)) this.removeEventListener(browser.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
		this.initialize();
		var demo = new ProjectClass();
		this.addChild(demo);
	}
	,__class__: Main
});
var org = {}
org.flixel = {}
org.flixel.FlxBasic = function() {
	this.ID = -1;
	this.exists = true;
	this.active = true;
	this.visible = true;
	this.alive = true;
	this.autoClear = true;
	this.ignoreDrawDebug = false;
};
$hxClasses["org.flixel.FlxBasic"] = org.flixel.FlxBasic;
org.flixel.FlxBasic.__name__ = ["org","flixel","FlxBasic"];
org.flixel.FlxBasic._ACTIVECOUNT = null;
org.flixel.FlxBasic._VISIBLECOUNT = null;
org.flixel.FlxBasic.prototype = {
	updateFrameData: function() {
	}
	,getAtlas: function() {
		return org.flixel.FlxG.get_state().getAtlasFor(this._bitmapDataKey);
	}
	,updateAtlasInfo: function(updateAtlas) {
		if(updateAtlas == null) updateAtlas = false;
		if(this._bitmapDataKey == null) throw "Something went wrong: _bitmapDataKey var isn't initialized";
		if(this._atlas == null) {
			this._atlas = this.getAtlas();
			this._node = this._atlas.getNodeByKey(this._bitmapDataKey);
		} else if(this._atlas.hasNodeWithName(this._bitmapDataKey)) {
			if(updateAtlas) this._atlas.redrawNode(this._node);
		} else {
			var bm = org.flixel.FlxG._cache.get(this._bitmapDataKey);
			this._node = this._atlas.addNode(bm,this._bitmapDataKey);
			if(this._node == null) {
				this._atlas = this.getAtlas();
				this._node = this._atlas.getNodeByKey(this._bitmapDataKey);
			}
		}
		this.updateFrameData();
	}
	,get_bitmapDataKey: function() {
		return this._bitmapDataKey;
	}
	,bitmapDataKey: null
	,set_atlas: function(value) {
		if(this._atlas != value) {
			if(value == null) {
				this._atlas = value;
				this._node = null;
				this._framesData = null;
			} else {
				if(this._bitmapDataKey != null) {
					if(!value.hasNodeWithName(this._bitmapDataKey)) {
						var bm = org.flixel.FlxG._cache.get(this._bitmapDataKey);
						if(bm == null) {
							throw "There isn't bitmapData with key: " + this._bitmapDataKey + " in FlxG._cache";
							return null;
						} else if(value.addNode(bm,this._bitmapDataKey) == null) {
							throw "Can't add object's graphic to atlas: " + value.name + ". There isn't enough space";
							return null;
						}
					}
					this._atlas = value;
					this._node = value.getNodeByKey(this._bitmapDataKey);
				}
				this.updateFrameData();
			}
		}
		return value;
	}
	,get_atlas: function() {
		return this._atlas;
	}
	,atlas: null
	,_node: null
	,_atlas: null
	,_framesData: null
	,_bitmapDataKey: null
	,_tween: null
	,get_hasTween: function() {
		return this._tween != null;
	}
	,hasTween: null
	,updateTweens: function() {
		var t;
		var ft = this._tween;
		while(ft != null) {
			t = js.Boot.__cast(ft , org.flixel.tweens.FlxTween);
			if(t.active) {
				t.update();
				if(ft._finish) ft.finish();
			}
			ft = ft._next;
		}
	}
	,clearTweens: function(destroy) {
		if(destroy == null) destroy = false;
		var t;
		var ft = this._tween;
		var fn;
		while(ft != null) {
			fn = ft._next;
			this.removeTween(js.Boot.__cast(ft , org.flixel.tweens.FlxTween),destroy);
			ft = fn;
		}
	}
	,removeTween: function(t,destroy) {
		if(destroy == null) destroy = false;
		var ft = t;
		if(ft._parent != this) throw "Core object does not contain FlxTween.";
		if(ft._next != null) ft._next._prev = ft._prev;
		if(ft._prev != null) ft._prev._next = ft._next; else this._tween = ft._next == null?null:js.Boot.__cast(ft._next , org.flixel.tweens.FlxTween);
		ft._next = ft._prev = null;
		ft._parent = null;
		if(destroy) t.destroy();
		t.active = false;
		return t;
	}
	,addTween: function(t,start) {
		if(start == null) start = false;
		var ft = t;
		if(ft._parent != null) throw "Cannot add a FlxTween object more than once.";
		ft._parent = this;
		ft._next = this._tween;
		var friendTween = this._tween;
		if(this._tween != null) friendTween._prev = t;
		this._tween = t;
		if(start) this._tween.start();
		return t;
	}
	,toString: function() {
		return (function($this) {
			var $r;
			var s = Type.getClassName(Type.getClass($this));
			if(s != null) {
				s = StringTools.replace(s,"::",".");
				s = HxOverrides.substr(s,s.lastIndexOf(".") + 1,null);
			}
			$r = s;
			return $r;
		}(this));
	}
	,revive: function() {
		this.alive = true;
		this.exists = true;
	}
	,kill: function() {
		this.alive = false;
		this.exists = false;
	}
	,drawDebug: function(Camera) {
	}
	,draw: function() {
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) {
			camera = this.cameras[i++];
			org.flixel.FlxBasic._VISIBLECOUNT++;
			if(org.flixel.FlxG.visualDebug && !this.ignoreDrawDebug) this.drawDebug(camera);
		}
	}
	,postUpdate: function() {
	}
	,update: function() {
	}
	,preUpdate: function() {
		org.flixel.FlxBasic._ACTIVECOUNT++;
	}
	,destroy: function() {
		if(this.autoClear && this.get_hasTween()) {
			this.clearTweens(true);
			this._tween = null;
		}
		this._framesData = null;
		this._bitmapDataKey = null;
		this._atlas = null;
		this._node = null;
	}
	,autoClear: null
	,ignoreDrawDebug: null
	,cameras: null
	,alive: null
	,visible: null
	,active: null
	,exists: null
	,ID: null
	,__class__: org.flixel.FlxBasic
	,__properties__: {get_hasTween:"get_hasTween",set_atlas:"set_atlas",get_atlas:"get_atlas",get_bitmapDataKey:"get_bitmapDataKey"}
}
org.flixel.FlxTypedGroup = function(MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	org.flixel.FlxBasic.call(this);
	this.members = new Array();
	this.length = 0;
	this.set_maxSize(Math.abs(MaxSize) | 0);
	this._marker = 0;
	this._sortIndex = null;
	this.autoReviveMembers = false;
};
$hxClasses["org.flixel.FlxTypedGroup"] = org.flixel.FlxTypedGroup;
org.flixel.FlxTypedGroup.__name__ = ["org","flixel","FlxTypedGroup"];
org.flixel.FlxTypedGroup.__super__ = org.flixel.FlxBasic;
org.flixel.FlxTypedGroup.prototype = $extend(org.flixel.FlxBasic.prototype,{
	sortHandler: function(Obj1,Obj2) {
		var prop1 = Reflect.getProperty(Obj1,this._sortIndex);
		var prop2 = Reflect.getProperty(Obj2,this._sortIndex);
		if(prop1 < prop2) return this._sortOrder; else if(prop1 > prop2) return -this._sortOrder;
		return 0;
	}
	,revive: function() {
		org.flixel.FlxBasic.prototype.revive.call(this);
		if(this.autoReviveMembers) {
			var basic;
			var i = 0;
			while(i < this.length) {
				basic = this.members[i++];
				if(basic != null && !basic.exists) basic.revive();
			}
		}
	}
	,kill: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) basic.kill();
		}
		org.flixel.FlxBasic.prototype.kill.call(this);
	}
	,clear: function() {
		this.length = 0;
		this.members.splice(0,this.members.length);
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) Length = 0;
		if(StartIndex == null) StartIndex = 0;
		if(StartIndex < 0) StartIndex = 0;
		if(Length <= 0) Length = this.length;
		return org.flixel.FlxG.getRandom(this.members,StartIndex,Length);
	}
	,countDead: function() {
		var count = -1;
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(!basic.alive) count++;
			}
		}
		return count;
	}
	,countLiving: function() {
		var count = -1;
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(basic.exists && basic.alive) count++;
			}
		}
		return count;
	}
	,getFirstDead: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.alive) return basic;
		}
		return null;
	}
	,getFirstAlive: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.alive) return basic;
		}
		return null;
	}
	,getFirstExtant: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) return basic;
		}
		return null;
	}
	,getFirstNull: function() {
		var basic;
		var i = 0;
		var l = this.members.length;
		while(i < l) if(this.members[i] == null) return i; else i++;
		return -1;
	}
	,getFirstAvailable: function(ObjectClass) {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.exists && (ObjectClass == null || js.Boot.__instanceof(basic,ObjectClass))) return basic;
		}
		return null;
	}
	,callAll: function(FunctionName,Recurse) {
		if(Recurse == null) Recurse = true;
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse && js.Boot.__instanceof(basic,org.flixel.FlxTypedGroup)) basic.callAll(FunctionName,Recurse); else Reflect.getProperty(basic,FunctionName).apply(basic,[]);
			}
		}
	}
	,setAll: function(VariableName,Value,Recurse) {
		if(Recurse == null) Recurse = true;
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse && js.Boot.__instanceof(basic,org.flixel.FlxTypedGroup)) basic.setAll(VariableName,Value,Recurse); else Reflect.setProperty(basic,VariableName,Value);
			}
		}
	}
	,sort: function(Index,Order) {
		if(Order == null) Order = -1;
		if(Index == null) Index = "y";
		this._sortIndex = Index;
		this._sortOrder = Order;
		this.members.sort($bind(this,this.sortHandler));
	}
	,replace: function(OldObject,NewObject) {
		var index = org.flixel.FlxU.ArrayIndexOf(this.members,OldObject,null);
		if(index < 0 || index >= this.members.length) return null;
		this.members[index] = NewObject;
		return NewObject;
	}
	,remove: function(Object,Splice) {
		if(Splice == null) Splice = false;
		if(this.members == null) return null;
		var index = org.flixel.FlxU.ArrayIndexOf(this.members,Object,null);
		if(index < 0 || index >= this.members.length) return null;
		if(Splice) this.members.splice(index,1); else this.members[index] = null;
		return Object;
	}
	,recycle: function(ObjectClass) {
		var basic;
		if(this.maxSize > 0) {
			if(this.length < this.maxSize) {
				if(ObjectClass == null) return null;
				return this.add(Type.createInstance(ObjectClass,[]));
			} else {
				basic = this.members[this._marker++];
				if(this._marker >= this.maxSize) this._marker = 0;
				return basic;
			}
		} else {
			basic = this.getFirstAvailable(ObjectClass);
			if(basic != null) return basic;
			if(ObjectClass == null) return null;
			return this.add(Type.createInstance(ObjectClass,[]));
		}
	}
	,set_atlas: function(value) {
		if(this._atlas != value) {
			if(value == null) {
				this._node = null;
				this._framesData = null;
			}
			this._atlas = value;
		}
		if(this._atlas != null) {
			var _g = 0, _g1 = this.members;
			while(_g < _g1.length) {
				var basic = _g1[_g];
				++_g;
				if(basic != null) this.setGroupAtlas(basic);
			}
		}
		return value;
	}
	,setGroupAtlas: function(Object) {
		if(this._atlas != null) Object.set_atlas(this._atlas);
	}
	,add: function(Object) {
		if(Object == null) {
			if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("WARNING: Cannot add a `null` object to a FlxGroup.",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("WARNING: Cannot add a `null` object to a FlxGroup." , Array)):Std.string("WARNING: Cannot add a `null` object to a FlxGroup."));
			return null;
		}
		if(org.flixel.FlxU.ArrayIndexOf(this.members,Object,null) >= 0) return Object;
		var i = 0;
		var l = this.members.length;
		while(i < l) {
			if(this.members[i] == null) {
				this.members[i] = Object;
				if(i >= this.length) this.length = i + 1;
				this.setGroupAtlas(Object);
				return Object;
			}
			i++;
		}
		if(this.maxSize > 0) {
			if(this.members.length >= this.maxSize) return Object; else if(this.members.length * 2 <= this.maxSize) org.flixel.FlxU.SetArrayLength(this.members,this.members.length * 2); else org.flixel.FlxU.SetArrayLength(this.members,this.maxSize);
		} else org.flixel.FlxU.SetArrayLength(this.members,this.members.length * 2);
		this.setGroupAtlas(Object);
		this.members[i] = Object;
		this.length = i + 1;
		return Object;
	}
	,set_maxSize: function(Size) {
		this.maxSize = Math.abs(Size) | 0;
		if(this._marker >= this.maxSize) this._marker = 0;
		if(this.maxSize == 0 || this.members == null || this.maxSize >= this.members.length) return this.maxSize;
		var basic;
		var i = this.maxSize;
		var l = this.members.length;
		while(i < l) {
			basic = this.members[i++];
			if(basic != null) basic.destroy();
		}
		this.length = this.maxSize;
		org.flixel.FlxU.SetArrayLength(this.members,this.maxSize);
		return this.maxSize;
	}
	,draw: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.visible) basic.draw();
		}
	}
	,update: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.active) {
				basic.preUpdate();
				basic.update();
				if(basic.get_hasTween()) basic.updateTweens();
				basic.postUpdate();
			}
		}
		if(this.get_hasTween()) this.updateTweens();
	}
	,preUpdate: function() {
	}
	,destroy: function() {
		if(this.members != null) {
			var basic;
			var i = 0;
			while(i < this.length) {
				basic = this.members[i++];
				if(basic != null) basic.destroy();
			}
			this.members = null;
		}
		this._sortIndex = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,autoReviveMembers: null
	,_sortOrder: null
	,_sortIndex: null
	,_marker: null
	,length: null
	,members: null
	,maxSize: null
	,__class__: org.flixel.FlxTypedGroup
	,__properties__: $extend(org.flixel.FlxBasic.prototype.__properties__,{set_maxSize:"set_maxSize"})
});
org.flixel.FlxGroup = function(MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	org.flixel.FlxTypedGroup.call(this,MaxSize);
};
$hxClasses["org.flixel.FlxGroup"] = org.flixel.FlxGroup;
org.flixel.FlxGroup.__name__ = ["org","flixel","FlxGroup"];
org.flixel.FlxGroup.__super__ = org.flixel.FlxTypedGroup;
org.flixel.FlxGroup.prototype = $extend(org.flixel.FlxTypedGroup.prototype,{
	__class__: org.flixel.FlxGroup
});
org.flixel.FlxState = function() {
	org.flixel.FlxGroup.call(this);
	this.persistantUpdate = false;
	this.persistantDraw = true;
	this._bgColor = org.flixel.FlxG.get_bgColor();
};
$hxClasses["org.flixel.FlxState"] = org.flixel.FlxState;
org.flixel.FlxState.__name__ = ["org","flixel","FlxState"];
org.flixel.FlxState.__super__ = org.flixel.FlxGroup;
org.flixel.FlxState.prototype = $extend(org.flixel.FlxGroup.prototype,{
	postUpdate: function() {
	}
	,preUpdate: function() {
	}
	,onFocus: function() {
	}
	,onFocusLost: function() {
	}
	,removeAtlas: function(atlas,destroy) {
		if(destroy == null) destroy = false;
		org.flixel.system.layer.Atlas.removeAtlas(atlas,destroy);
	}
	,createAtlas: function(atlasName,atlasWidth,atlasHeight) {
		var key = org.flixel.system.layer.Atlas.getUniqueKey(atlasName);
		return new org.flixel.system.layer.Atlas(key,atlasWidth,atlasHeight);
	}
	,getAtlasFor: function(KeyInBitmapCache) {
		var bm = org.flixel.FlxG._cache.get(KeyInBitmapCache);
		if(bm != null) {
			var tempAtlas = org.flixel.system.layer.Atlas.getAtlas(KeyInBitmapCache,bm);
			return tempAtlas;
		} else throw "There isn't bitmapdata in cache with key: " + KeyInBitmapCache;
		return null;
	}
	,destroy: function() {
		if(this._subState != null) this.closeSubState();
		org.flixel.FlxGroup.prototype.destroy.call(this);
	}
	,subStateCloseHandler: function() {
		if(this._subState.closeCallback != null) this._subState.closeCallback();
		this._subState.destroy();
		this._subState = null;
	}
	,setSubState: function(requestedState,closeCallback) {
		if(this._subState == requestedState) return;
		if(this._subState != null) this._subState.close();
		this._subState = requestedState;
		if(this._subState != null) {
			this._subState._parentState = this;
			this._subState.closeCallback = closeCallback;
			if(!this.persistantUpdate) org.flixel.FlxG.resetInput();
			this._subState.create();
		}
	}
	,closeSubState: function() {
		this.setSubState(null);
	}
	,tryUpdate: function() {
		if(this.persistantUpdate || this._subState == null) this.update();
		if(this._subState != null) this._subState.tryUpdate();
	}
	,draw: function() {
		if(this.persistantDraw || this._subState == null) org.flixel.FlxGroup.prototype.draw.call(this);
		if(this._subState != null) this._subState.draw();
	}
	,create: function() {
	}
	,set_bgColor: function(value) {
		return org.flixel.FlxG.set_bgColor(value);
	}
	,get_bgColor: function() {
		return org.flixel.FlxG.get_bgColor();
	}
	,bgColor: null
	,_bgColor: null
	,get_subState: function() {
		return this._subState;
	}
	,subState: null
	,_subState: null
	,persistantDraw: null
	,persistantUpdate: null
	,__class__: org.flixel.FlxState
	,__properties__: $extend(org.flixel.FlxGroup.prototype.__properties__,{get_subState:"get_subState",set_bgColor:"set_bgColor",get_bgColor:"get_bgColor"})
});
var MenuState = function() {
	org.flixel.FlxState.call(this);
};
$hxClasses["MenuState"] = MenuState;
MenuState.__name__ = ["MenuState"];
MenuState.__super__ = org.flixel.FlxState;
MenuState.prototype = $extend(org.flixel.FlxState.prototype,{
	update: function() {
		org.flixel.FlxState.prototype.update.call(this);
		if(org.flixel.FlxG.keys.any()) org.flixel.FlxG.switchState(new com.jah2488.ld48.enough.TutorialState());
	}
	,destroy: function() {
		org.flixel.FlxState.prototype.destroy.call(this);
	}
	,addMap: function() {
		var map = new org.flixel.FlxTilemap();
		var level = map.loadMap(nme.installer.Assets.getText("assets/levels/mapCSV_Menu_Map1.csv"),"assets/world.png",16,16,0,0,0,1);
		var _g = 0, _g1 = [1,2];
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			var c = level.getTileCoords(tile,false);
			if(c != null) {
				var _g2 = 0;
				while(_g2 < c.length) {
					var point = c[_g2];
					++_g2;
					var sprite = Type.createInstance(com.jah2488.ld48.enough.World,[point.x,point.y]);
					this.add(sprite);
				}
			}
		}
	}
	,flashWhite: function() {
		org.flixel.FlxG.flash(-1,2,$bind(this,this.addMap));
	}
	,create: function() {
		org.flixel.FlxG.playMusic("Ambient");
		org.flixel.FlxG.set_bgColor(-16777216);
		org.flixel.FlxG.flash(-16777216,1,$bind(this,this.flashWhite));
	}
	,level: null
	,__class__: MenuState
});
var NMEPreloader = function() {
	browser.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new browser.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new browser.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = browser.display.Sprite;
NMEPreloader.prototype = $extend(browser.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new browser.events.Event(browser.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 640;
		if(width > 0) return width; else return nme.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 480;
		if(height > 0) return height; else return nme.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 16777215;
	}
	,progress: null
	,outline: null
	,__class__: NMEPreloader
});
org.flixel.FlxGame = function(GameSizeX,GameSizeY,InitialState,Zoom,GameFramerate,FlashFramerate) {
	if(FlashFramerate == null) FlashFramerate = 30;
	if(GameFramerate == null) GameFramerate = 60;
	if(Zoom == null) Zoom = 1;
	browser.display.Sprite.call(this);
	this._lostFocus = false;
	this._focus = new browser.display.Sprite();
	this._focus.set_visible(false);
	this._soundTray = new browser.display.Sprite();
	this._inputContainer = new browser.display.Sprite();
	org.flixel.FlxG.init(this,GameSizeX,GameSizeY,Zoom);
	org.flixel.FlxG.set_framerate(GameFramerate);
	org.flixel.FlxG.set_flashFramerate(FlashFramerate);
	this._accumulator = this._step;
	this._total = 0;
	org.flixel.FlxGame._mark = 0;
	this._state = null;
	this.useSoundHotKeys = true;
	org.flixel.FlxG.debug = true;
	this._debuggerUp = false;
	this._replay = new org.flixel.system.FlxReplay();
	this._replayRequested = false;
	this._recordingRequested = false;
	this._replaying = false;
	this._recording = false;
	this._iState = InitialState;
	this._requestedState = null;
	this._requestedReset = true;
	this.addEventListener(browser.events.Event.ADDED_TO_STAGE,$bind(this,this.create));
};
$hxClasses["org.flixel.FlxGame"] = org.flixel.FlxGame;
org.flixel.FlxGame.__name__ = ["org","flixel","FlxGame"];
org.flixel.FlxGame._mark = null;
org.flixel.FlxGame.__super__ = browser.display.Sprite;
org.flixel.FlxGame.prototype = $extend(browser.display.Sprite.prototype,{
	getDebugger: function() {
		return this._debugger;
	}
	,'debugger': null
	,createFocusScreen: function() {
		var gfx = this._focus.get_graphics();
		var screenWidth = org.flixel.FlxG.width * org.flixel.FlxCamera.defaultZoom | 0;
		var screenHeight = org.flixel.FlxG.height * org.flixel.FlxCamera.defaultZoom | 0;
		gfx.moveTo(0,0);
		gfx.beginFill(0,0.5);
		gfx.lineTo(screenWidth,0);
		gfx.lineTo(screenWidth,screenHeight);
		gfx.lineTo(0,screenHeight);
		gfx.lineTo(0,0);
		gfx.endFill();
		var halfWidth = screenWidth / 2 | 0;
		var halfHeight = screenHeight / 2 | 0;
		var helper = (halfWidth <= halfHeight?halfWidth:halfHeight) / 3 | 0;
		gfx.moveTo(halfWidth - helper,halfHeight - helper);
		gfx.beginFill(16777215,0.65);
		gfx.lineTo(halfWidth + helper,halfHeight);
		gfx.lineTo(halfWidth - helper,halfHeight + helper);
		gfx.lineTo(halfWidth - helper,halfHeight - helper);
		gfx.endFill();
		var logo = new browser.display.Sprite();
		org.flixel.FlxAssets.drawLogo(logo.get_graphics());
		logo.set_scaleX(helper / 1000);
		if(logo.get_scaleX() < 0.2) logo.set_scaleX(0.2);
		logo.set_scaleY(logo.get_scaleX());
		logo.set_x(logo.set_y(5));
		logo.alpha = 0.35;
		this._focus.addChild(logo);
		this.addChild(this._focus);
	}
	,createSoundTray: function() {
		this._soundTray.set_visible(false);
		this._soundTray.set_scaleX(2);
		this._soundTray.set_scaleY(2);
		var tmp = new browser.display.Bitmap(new browser.display.BitmapData(80,30,true,2130706432));
		this._soundTray.set_x(org.flixel.FlxG.width / 2 * org.flixel.FlxCamera.defaultZoom - tmp.get_width() / 2 * this._soundTray.get_scaleX());
		this._soundTray.addChild(tmp);
		var text = new browser.text.TextField();
		text.set_width(tmp.get_width());
		text.set_height(tmp.get_height());
		text.multiline = true;
		text.set_wordWrap(true);
		text.selectable = false;
		var dtf = new browser.text.TextFormat(nme.installer.Assets.getFont(org.flixel.FlxAssets.defaultFont).fontName,8,16777215);
		dtf.align = browser.text.TextFormatAlign.CENTER;
		text.set_defaultTextFormat(dtf);
		this._soundTray.addChild(text);
		text.set_text("VOLUME");
		text.set_y(16);
		var bx = 10;
		var by = 14;
		this._soundTrayBars = new Array();
		var i = 0;
		while(i < 10) {
			tmp = new browser.display.Bitmap(new browser.display.BitmapData(4,++i,false,-1));
			tmp.set_x(bx);
			tmp.set_y(by);
			this._soundTray.addChild(tmp);
			this._soundTrayBars.push(tmp);
			bx += 6;
			by--;
		}
		this._soundTray.set_y(-this._soundTray.get_height());
		this._soundTray.set_visible(false);
		this.addChild(this._soundTray);
		var soundPrefs = new org.flixel.FlxSave();
		if(soundPrefs.bind("flixel") && soundPrefs.data.sound != null) {
			if(soundPrefs.data.sound.volume != null) org.flixel.FlxG.setVolume(soundPrefs.data.sound.volume);
			if(soundPrefs.data.sound.mute != null) org.flixel.FlxG.mute = soundPrefs.data.sound.mute;
			soundPrefs.destroy();
		}
	}
	,create: function(FlashEvent) {
		if(this.get_stage() == null) return;
		this.removeEventListener(browser.events.Event.ADDED_TO_STAGE,$bind(this,this.create));
		this._total = browser.Lib.getTimer();
		this.get_stage().scaleMode = browser.display.StageScaleMode.NO_SCALE;
		this.get_stage().align = browser.display.StageAlign.TOP_LEFT;
		this.get_stage().set_frameRate(this._flashFramerate);
		this.addChild(this._inputContainer);
		org.flixel.system.input.FlxInputs.init();
		if(!org.flixel.FlxG.mobile) {
			if(org.flixel.FlxG.debug) {
				this._debugger = new org.flixel.system.FlxDebugger(org.flixel.FlxG.width * org.flixel.FlxCamera.defaultZoom,org.flixel.FlxG.height * org.flixel.FlxCamera.defaultZoom);
				nme.Lib.get_current().get_stage().addChild(this._debugger);
			}
			this.createSoundTray();
			this.get_stage().addEventListener(browser.events.Event.DEACTIVATE,$bind(this,this.onFocusLost));
			this.get_stage().addEventListener(browser.events.Event.ACTIVATE,$bind(this,this.onFocus));
			this.createFocusScreen();
		}
		if(this._requestedReset) {
			this._requestedState = Type.createInstance(this._iState,[]);
			if(js.Boot.__instanceof(this._requestedState,org.flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
			this._replayTimer = 0;
			this._replayCancelKeys = null;
			org.flixel.FlxG.reset();
			this.switchState();
			this._requestedReset = false;
		}
		nme.Lib.get_current().get_stage().addEventListener(browser.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
	}
	,draw: function() {
		if(this._debuggerUp) org.flixel.FlxGame._mark = browser.Lib.getTimer();
		org.flixel.system.layer.TileSheetData._DRAWCALLS = 0;
		org.flixel.FlxG.lockCameras();
		this._state.draw();
		org.flixel.FlxG.renderCameras();
		if(this._debuggerUp) this._debugger.perf.drawCalls(org.flixel.system.layer.TileSheetData._DRAWCALLS);
		org.flixel.FlxG.drawPlugins();
		org.flixel.FlxG.unlockCameras();
		if(this._debuggerUp) this._debugger.perf.flixelDraw(browser.Lib.getTimer() - org.flixel.FlxGame._mark);
	}
	,update: function() {
		if(this._debuggerUp) org.flixel.FlxGame._mark = browser.Lib.getTimer();
		org.flixel.FlxG.elapsed = org.flixel.FlxG.timeScale * this._stepSeconds;
		org.flixel.FlxG.updateSounds();
		org.flixel.FlxG.updatePlugins();
		this._state.tryUpdate();
		if(org.flixel.FlxG.tweener.active && org.flixel.FlxG.tweener.get_hasTween()) org.flixel.FlxG.tweener.updateTweens();
		org.flixel.FlxG.updateCameras();
		if(this._debuggerUp) this._debugger.perf.flixelUpdate(browser.Lib.getTimer() - org.flixel.FlxGame._mark);
	}
	,updateSoundTray: function(MS) {
		if(this._soundTrayTimer > 0) this._soundTrayTimer -= MS / 1000; else if(this._soundTray.get_y() > -this._soundTray.get_height()) {
			var _g = this._soundTray;
			_g.set_y(_g.get_y() - MS / 1000 * org.flixel.FlxG.height * 2);
			if(this._soundTray.get_y() <= -this._soundTray.get_height()) {
				this._soundTray.set_visible(false);
				this._updateSoundTray = false;
				var soundPrefs = new org.flixel.FlxSave();
				if(soundPrefs.bind("flixel")) {
					if(soundPrefs.data.sound == null) soundPrefs.data.sound = { };
					soundPrefs.data.sound.mute = org.flixel.FlxG.mute;
					soundPrefs.data.sound.volume = org.flixel.FlxG.volume;
					soundPrefs.close();
				}
			}
		}
	}
	,step: function() {
		if(this._requestedReset) {
			this._requestedState = Type.createInstance(this._iState,[]);
			if(js.Boot.__instanceof(this._requestedState,org.flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
			this._replayTimer = 0;
			this._replayCancelKeys = null;
			org.flixel.FlxG.reset();
			this._requestedReset = false;
		}
		if(this._recordingRequested) {
			this._recordingRequested = false;
			this._replay.create(org.flixel.FlxG.globalSeed);
			this._recording = true;
			this._debugger.vcr.recording();
			if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("FLIXEL: starting new flixel gameplay record.",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("FLIXEL: starting new flixel gameplay record." , Array)):Std.string("FLIXEL: starting new flixel gameplay record."));
		} else if(this._replayRequested) {
			this._replayRequested = false;
			this._replay.rewind();
			org.flixel.FlxG.globalSeed = this._replay.seed;
			this._debugger.vcr.playing();
			this._replaying = true;
		}
		if(this._state != this._requestedState) this.switchState();
		org.flixel.FlxBasic._ACTIVECOUNT = 0;
		if(this._replaying) {
			this._replay.playNextFrame();
			if(this._replayTimer > 0) {
				this._replayTimer -= this._step;
				if(this._replayTimer <= 0) {
					if(this._replayCallback != null) {
						this._replayCallback();
						this._replayCallback = null;
					} else org.flixel.FlxG.stopReplay();
				}
			}
			if(this._replaying && this._replay.finished) {
				org.flixel.FlxG.stopReplay();
				if(this._replayCallback != null) {
					this._replayCallback();
					this._replayCallback = null;
				}
			}
			this._debugger.vcr.updateRuntime(this._step);
		} else org.flixel.system.input.FlxInputs.updateInputs();
		if(this._recording) {
			this._replay.recordFrame();
			this._debugger.vcr.updateRuntime(this._step);
		}
		this.update();
		org.flixel.FlxG.mouse.wheel = 0;
		if(this._debuggerUp) this._debugger.perf.activeObjects(org.flixel.FlxBasic._ACTIVECOUNT);
	}
	,switchState: function() {
		org.flixel.plugin.pxText.PxBitmapFont.clearStorage();
		org.flixel.system.layer.Atlas.clearAtlasCache();
		org.flixel.system.layer.TileSheetData.clear();
		org.flixel.FlxG.clearBitmapCache();
		org.flixel.FlxG.resetCameras();
		org.flixel.FlxG.resetInput();
		org.flixel.FlxG.destroySounds();
		if(this._debugger != null) this._debugger.watch.removeAll();
		var timerManager = org.flixel.FlxTimer.get_manager();
		if(timerManager != null) timerManager.clear();
		if(this._state != null) this._state.destroy();
		this._state = this._requestedState;
		this._state.create();
	}
	,resetGame: function() {
		this._requestedState = Type.createInstance(this._iState,[]);
		if(js.Boot.__instanceof(this._requestedState,org.flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
		this._replayTimer = 0;
		this._replayCancelKeys = null;
		org.flixel.FlxG.reset();
	}
	,onEnterFrame: function(FlashEvent) {
		org.flixel.FlxGame._mark = browser.Lib.getTimer();
		this._elapsedMS = org.flixel.FlxGame._mark - this._total;
		this._total = org.flixel.FlxGame._mark;
		if(this._updateSoundTray) this.updateSoundTray(this._elapsedMS);
		if(!this._lostFocus) {
			if(this._debugger != null && this._debugger.vcr.paused) {
				if(this._debugger.vcr.stepRequested) {
					this._debugger.vcr.stepRequested = false;
					this.step();
				}
			} else {
				this._accumulator += this._elapsedMS;
				if(this._accumulator > this._maxAccumulation) this._accumulator = this._maxAccumulation;
				while(this._accumulator >= this._step) {
					this.step();
					this._accumulator = this._accumulator - this._step;
				}
			}
			org.flixel.FlxBasic._VISIBLECOUNT = 0;
			this.draw();
			if(this._debuggerUp) {
				this._debugger.perf.flash(this._elapsedMS);
				this._debugger.perf.visibleObjects(org.flixel.FlxBasic._VISIBLECOUNT);
				this._debugger.perf.update();
				this._debugger.watch.update();
			}
		}
	}
	,onFocusLost: function(FlashEvent) {
		this._lostFocus = this._focus.set_visible(true);
		this.get_stage().set_frameRate(10);
		org.flixel.FlxG.pauseSounds();
		org.flixel.system.input.FlxInputs.onFocusLost();
		this._state.onFocusLost();
	}
	,onFocus: function(FlashEvent) {
		this._lostFocus = this._focus.set_visible(false);
		this.get_stage().set_frameRate(this._flashFramerate);
		org.flixel.FlxG.resumeSounds();
		org.flixel.system.input.FlxInputs.onFocus();
		this._state.onFocus();
	}
	,showSoundTray: function(Silent) {
		if(Silent == null) Silent = false;
		if(!Silent) org.flixel.FlxG.play(org.flixel.FlxAssets.sndBeep);
		this._soundTrayTimer = 1;
		this._soundTray.set_y(0);
		this._soundTray.set_visible(true);
		this._updateSoundTray = true;
		var globalVolume = Math.round(org.flixel.FlxG.volume * 10);
		if(org.flixel.FlxG.mute) globalVolume = 0;
		var _g1 = 0, _g = this._soundTrayBars.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(i < globalVolume) this._soundTrayBars[i].alpha = 1; else this._soundTrayBars[i].alpha = 0.5;
		}
	}
	,_replayCallback: null
	,_replayTimer: null
	,_replayCancelKeys: null
	,_recording: null
	,_replaying: null
	,_recordingRequested: null
	,_replayRequested: null
	,_replay: null
	,_debuggerUp: null
	,_debugger: null
	,_soundTrayBars: null
	,_updateSoundTray: null
	,_soundTrayTimer: null
	,_soundTray: null
	,_focus: null
	,_requestedReset: null
	,_requestedState: null
	,_maxAccumulation: null
	,_flashFramerate: null
	,_stepSeconds: null
	,_step: null
	,_elapsedMS: null
	,_lostFocus: null
	,_accumulator: null
	,_total: null
	,_iState: null
	,_inputContainer: null
	,_state: null
	,useSoundHotKeys: null
	,junk: null
	,__class__: org.flixel.FlxGame
	,__properties__: $extend(browser.display.Sprite.prototype.__properties__,{get_debugger:"getDebugger"})
});
var ProjectClass = function() {
	var stageWidth = nme.Lib.get_current().get_stage().get_stageWidth();
	var stageHeight = nme.Lib.get_current().get_stage().get_stageHeight();
	var ratioX = stageWidth / 320;
	var ratioY = stageHeight / 240;
	var ratio = Math.min(ratioX,ratioY);
	org.flixel.FlxGame.call(this,Math.ceil(stageWidth / ratio),Math.ceil(stageHeight / ratio),MenuState,ratio,30,30);
};
$hxClasses["ProjectClass"] = ProjectClass;
ProjectClass.__name__ = ["ProjectClass"];
ProjectClass.__super__ = org.flixel.FlxGame;
ProjectClass.prototype = $extend(org.flixel.FlxGame.prototype,{
	__class__: ProjectClass
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && (v.__name__ || v.__ename__);
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	return x | 0;
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	toString: function() {
		return this.b;
	}
	,addSub: function(s,pos,len) {
		this.b += HxOverrides.substr(s,pos,len);
	}
	,addChar: function(c) {
		this.b += String.fromCharCode(c);
	}
	,add: function(x) {
		this.b += Std.string(x);
	}
	,b: null
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += HxOverrides.substr(c,0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += HxOverrides.substr(c,0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.allEnums = function(e) {
	var all = [];
	var cst = e.__constructs__;
	var _g = 0;
	while(_g < cst.length) {
		var c = cst[_g];
		++_g;
		var v = Reflect.field(e,c);
		if(!Reflect.isFunction(v)) all.push(v);
	}
	return all;
}
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
}
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	return r;
}
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	return r;
}
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	return r;
}
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	return r;
}
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	return r;
}
Xml.createProlog = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	return r;
}
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
}
Xml.prototype = {
	toString: function() {
		if(this.nodeType == Xml.PCData) return this._nodeValue;
		if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
		if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
		if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
		if(this.nodeType == Xml.Prolog) return "<?" + this._nodeValue + "?>";
		var s = new StringBuf();
		if(this.nodeType == Xml.Element) {
			s.b += Std.string("<");
			s.b += Std.string(this._nodeName);
			var $it0 = this._attributes.keys();
			while( $it0.hasNext() ) {
				var k = $it0.next();
				s.b += Std.string(" ");
				s.b += Std.string(k);
				s.b += Std.string("=\"");
				s.b += Std.string(this._attributes.get(k));
				s.b += Std.string("\"");
			}
			if(this._children.length == 0) {
				s.b += Std.string("/>");
				return s.b;
			}
			s.b += Std.string(">");
		}
		var $it1 = this.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			s.b += Std.string(x.toString());
		}
		if(this.nodeType == Xml.Element) {
			s.b += Std.string("</");
			s.b += Std.string(this._nodeName);
			s.b += Std.string(">");
		}
		return s.b;
	}
	,insertChild: function(x,pos) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.splice(pos,0,x);
	}
	,removeChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		var b = HxOverrides.remove(this._children,x);
		if(b) x._parent = null;
		return b;
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,firstElement: function() {
		if(this._children == null) throw "bad nodetype";
		var cur = 0;
		var l = this._children.length;
		while(cur < l) {
			var n = this._children[cur];
			if(n.nodeType == Xml.Element) return n;
			cur++;
		}
		return null;
	}
	,firstChild: function() {
		if(this._children == null) throw "bad nodetype";
		return this._children[0];
	}
	,elementsNamed: function(name) {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k++;
				if(n.nodeType == Xml.Element && n._nodeName == name) {
					this.cur = k;
					return n;
				}
			}
			return null;
		}};
	}
	,elements: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k;
					return n;
				}
			}
			return null;
		}};
	}
	,iterator: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			return this.cur < this.x.length;
		}, next : function() {
			return this.x[this.cur++];
		}};
	}
	,attributes: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.keys();
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,remove: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.remove(att);
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,getParent: function() {
		return this._parent;
	}
	,setNodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,getNodeValue: function() {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue;
	}
	,setNodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,getNodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,_parent: null
	,_children: null
	,_attributes: null
	,_nodeValue: null
	,_nodeName: null
	,parent: null
	,nodeValue: null
	,nodeName: null
	,nodeType: null
	,__class__: Xml
	,__properties__: {set_nodeName:"setNodeName",get_nodeName:"getNodeName",set_nodeValue:"setNodeValue",get_nodeValue:"getNodeValue",get_parent:"getParent"}
}
browser.Selection = function() { }
$hxClasses["browser.Selection"] = browser.Selection;
browser.Selection.__name__ = ["browser","Selection"];
browser.Selection.prototype = {
	stringifier: null
	,removeAllRanges: null
	,removeRange: null
	,addRange: null
	,getRangeAt: null
	,deleteFromDocument: null
	,selectAllChildren: null
	,collapseToEnd: null
	,collapseToStart: null
	,collapse: null
	,rangeCount: null
	,isCollapsed: null
	,focusOffset: null
	,focusNode: null
	,anchorOffset: null
	,anchorNode: null
	,__class__: browser.Selection
}
browser.MessagePortArray = function() { }
$hxClasses["browser.MessagePortArray"] = browser.MessagePortArray;
browser.MessagePortArray.__name__ = ["browser","MessagePortArray"];
browser.MessagePort = function() { }
$hxClasses["browser.MessagePort"] = browser.MessagePort;
browser.MessagePort.__name__ = ["browser","MessagePort"];
browser.MessagePort.prototype = {
	onmessage: null
	,close: null
	,start: null
	,postMessage: null
	,__class__: browser.MessagePort
}
var haxe = {}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = window.setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
haxe.Timer.prototype = {
	run: function() {
	}
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	}
	,id: null
	,__class__: haxe.Timer
}
browser.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["browser.Lib"] = browser.Lib;
browser.Lib.__name__ = ["browser","Lib"];
browser.Lib.__properties__ = {get_window:"get_window",get_document:"get_document",get_current:"get_current"}
browser.Lib.current = null;
browser.Lib.document = null;
browser.Lib.window = null;
browser.Lib.mCurrent = null;
browser.Lib.mForce2DTransform = null;
browser.Lib.mMainClassRoot = null;
browser.Lib.mMe = null;
browser.Lib.mStage = null;
browser.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
browser.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - browser.Lib.starttime) * 1000 | 0;
}
browser.Lib.getURL = function(request,target) {
	if(target == null || target == "_self") js.Lib.document.open(request.url); else switch(target) {
	case "_blank":
		js.Lib.window.open(request.url);
		break;
	case "_parent":
		js.Lib.window.parent.open(request.url);
		break;
	case "_top":
		js.Lib.window.top.open(request.url);
		break;
	}
}
browser.Lib.nmeAppendSurface = function(surface,before,after) {
	if(browser.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		var rootNode = browser.Lib.mMe.__scr;
		if(before != null) rootNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) rootNode.insertBefore(surface,after.nextSibling); else rootNode.appendChild(surface);
	}
}
browser.Lib.nmeAppendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Lib.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
browser.Lib.nmeBootstrap = function() {
	if(browser.Lib.mMe == null) {
		var target = js.Lib.document.getElementById("haxe:jeash");
		if(target == null) {
			haxe.Log.trace("Error: Cannot find element ID \"" + "haxe:jeash" + "\"",{ fileName : "Lib.hx", lineNumber : 201, className : "browser.Lib", methodName : "nmeBootstrap"});
			target.id; // throw error;
		}
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) browser.Lib.mForce2DTransform = true;
		}
		browser.Lib.Run(target,browser.Lib.nmeGetWidth(),browser.Lib.nmeGetHeight());
	}
}
browser.Lib.nmeCopyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
browser.Lib.nmeCreateSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		browser.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-nme-anim") != null) style = js.Lib.document.getElementById(surface.getAttribute("data-nme-anim")); else {
		style = browser.Lib.mMe.__scr.appendChild(js.Lib.document.createElement("style"));
		style.sheet.id = "__nme_anim_" + surface.id + "__";
		surface.setAttribute("data-nme-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule = discrete?"steps(::steps::, end)":"";
	var animationInfiniteRule = infinite?"infinite":"";
	var animationTpl = "";
	var _g = 0, _g1 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g < _g1.length) {
		var prefix = _g1[_g];
		++_g;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules = style.sheet.rules != null?style.sheet.rules:style.sheet.cssRules;
	var _g = 0, _g1 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
}
browser.Lib.nmeDesignMode = function(mode) {
	js.Lib.document.designMode = mode?"on":"off";
}
browser.Lib.nmeDisableFullScreen = function() {
}
browser.Lib.nmeDisableRightClick = function() {
	if(browser.Lib.mMe != null) try {
		browser.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		browser.Lib.trace("Disable right click not supported in this browser.");
	}
}
browser.Lib.nmeDrawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
browser.Lib.nmeDrawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
browser.Lib.nmeDrawToSurface = function(surface,tgt,matrix,alpha,clipRect) {
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	if(alpha != 1.0) tgtCtx.globalAlpha = alpha;
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			browser.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else browser.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
	}
}
browser.Lib.nmeEnableFullScreen = function() {
	if(browser.Lib.mMe != null) {
		var origWidth = browser.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = browser.Lib.mMe.__scr.style.getPropertyValue("height");
		browser.Lib.mMe.__scr.style.setProperty("width","100%","");
		browser.Lib.mMe.__scr.style.setProperty("height","100%","");
		browser.Lib.nmeDisableFullScreen = function() {
			browser.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			browser.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
browser.Lib.nmeEnableRightClick = function() {
	if(browser.Lib.mMe != null) try {
		browser.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		browser.Lib.trace("Enable right click not supported in this browser.");
	}
}
browser.Lib.nmeFullScreenHeight = function() {
	return js.Lib.window.innerHeight;
}
browser.Lib.nmeFullScreenWidth = function() {
	return js.Lib.window.innerWidth;
}
browser.Lib.nmeGetHeight = function() {
	var tgt = browser.Lib.mMe != null?browser.Lib.mMe.__scr:js.Lib.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
browser.Lib.nmeGetStage = function() {
	if(browser.Lib.mStage == null) {
		var width = browser.Lib.nmeGetWidth();
		var height = browser.Lib.nmeGetHeight();
		browser.Lib.mStage = new browser.display.Stage(width,height);
	}
	return browser.Lib.mStage;
}
browser.Lib.nmeGetWidth = function() {
	var tgt = browser.Lib.mMe != null?browser.Lib.mMe.__scr:js.Lib.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
browser.Lib.nmeIsOnStage = function(surface) {
	var success = false;
	var nodes = browser.Lib.mMe.__scr.childNodes;
	var _g1 = 0, _g = nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(nodes[i] == surface) {
			success = true;
			break;
		}
	}
	return success;
}
browser.Lib.nmeParseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
browser.Lib.nmeRemoveSurface = function(surface) {
	if(browser.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-nme-anim");
		if(anim != null) {
			var style = js.Lib.document.getElementById(anim);
			if(style != null) browser.Lib.mMe.__scr.removeChild(style);
		}
		browser.Lib.mMe.__scr.removeChild(surface);
	}
	return surface;
}
browser.Lib.nmeSetSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
browser.Lib.nmeSetSurfaceClipping = function(surface,rect) {
}
browser.Lib.nmeSetSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
browser.Lib.nmeSetSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
browser.Lib.nmeSetSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
browser.Lib.nmeSetSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-nme-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!browser.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
browser.Lib.nmeSetSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1.parentNode == browser.Lib.mMe.__scr && surface2.parentNode == browser.Lib.mMe.__scr) {
		var nextSibling = surface2.nextSibling;
		if(surface1.previousSibling != surface2) {
			var swap = browser.Lib.nmeRemoveSurface(surface1);
			if(nextSibling == null) browser.Lib.mMe.__scr.appendChild(swap); else browser.Lib.mMe.__scr.insertBefore(swap,nextSibling);
		}
	}
}
browser.Lib.nmeSwapSurface = function(surface1,surface2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = browser.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(browser.Lib.mMe.__scr.childNodes[i] == surface1) c1 = i; else if(browser.Lib.mMe.__scr.childNodes[i] == surface2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = browser.Lib.nmeRemoveSurface(browser.Lib.mMe.__scr.childNodes[c1]);
		if(c2 > c1) c2--;
		if(c2 < browser.Lib.mMe.__scr.childNodes.length - 1) browser.Lib.mMe.__scr.insertBefore(swap,browser.Lib.mMe.__scr.childNodes[c2++]); else browser.Lib.mMe.__scr.appendChild(swap);
		swap = browser.Lib.nmeRemoveSurface(browser.Lib.mMe.__scr.childNodes[c2]);
		if(c1 > c2) c1--;
		if(c1 < browser.Lib.mMe.__scr.childNodes.length - 1) browser.Lib.mMe.__scr.insertBefore(swap,browser.Lib.mMe.__scr.childNodes[c1++]); else browser.Lib.mMe.__scr.appendChild(swap);
	}
}
browser.Lib.nmeSetContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
browser.Lib.nmeSetCursor = function(type) {
	if(browser.Lib.mMe != null) browser.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
browser.Lib.nmeSetSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
browser.Lib.nmeSetSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
browser.Lib.nmeSetSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
browser.Lib.nmeSetSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
browser.Lib.nmeSetSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Lib.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png",{ }) + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	browser.Lib.nmeCreateSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(browser.Lib.nmeIsOnStage(surface)) {
		browser.Lib.nmeAppendSurface(div);
		browser.Lib.nmeCopyStyle(surface,div);
		browser.Lib.nmeSwapSurface(surface,div);
		browser.Lib.nmeRemoveSurface(surface);
	} else browser.Lib.nmeCopyStyle(surface,div);
	return div;
}
browser.Lib.nmeSetSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
browser.Lib.nmeSetTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
browser.Lib.nmeSurfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
browser.Lib.preventDefaultTouchMove = function() {
	js.Lib.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
browser.Lib.Run = function(tgt,width,height) {
	browser.Lib.mMe = new browser.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") browser.Lib.nmeGetStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	if(Reflect.hasField(tgt,"on" + browser.Lib.HTML_TOUCH_EVENT_TYPES[0])) {
		var _g = 0, _g1 = browser.Lib.HTML_TOUCH_EVENT_TYPES;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
		}
	} else {
		var _g = 0, _g1 = browser.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
		}
	}
	var _g = 0, _g1 = browser.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	}
	if(Reflect.hasField(js.Lib.window,"on" + "devicemotion")) js.Lib.window.addEventListener("devicemotion",($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	if(Reflect.hasField(js.Lib.window,"on" + "orientationchange")) js.Lib.window.addEventListener("orientationchange",($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	var _g = 0, _g1 = browser.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Lib.window.addEventListener(type,($_=browser.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") browser.Lib.nmeGetStage().set_backgroundColor(browser.Lib.nmeParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else browser.Lib.nmeGetStage().set_backgroundColor(16777215);
	browser.Lib.get_current().get_graphics().beginFill(browser.Lib.nmeGetStage().get_backgroundColor());
	browser.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	browser.Lib.nmeSetSurfaceId(browser.Lib.get_current().get_graphics().nmeSurface,"Root MovieClip");
	browser.Lib.nmeGetStage().nmeUpdateNextWake();
	try {
		var winParameters = js.Lib.window.winParameters();
		var _g = 0, _g1 = Reflect.fields(winParameters);
		while(_g < _g1.length) {
			var prop = _g1[_g];
			++_g;
			browser.Lib.get_current().loaderInfo.parameters[prop] = Reflect.field(winParameters,prop);
		}
	} catch( e ) {
	}
	return browser.Lib.mMe;
}
browser.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Lib.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
browser.Lib.trace = function(arg) {
	if(js.Lib.window.console != null) js.Lib.window.console.log(arg);
}
browser.Lib.get_current = function() {
	if(browser.Lib.mMainClassRoot == null) {
		browser.Lib.mMainClassRoot = new browser.display.MovieClip();
		browser.Lib.mCurrent = browser.Lib.mMainClassRoot;
		browser.Lib.nmeGetStage().addChild(browser.Lib.mCurrent);
	}
	return browser.Lib.mMainClassRoot;
}
browser.Lib.get_document = function() {
	return js.Lib.document;
}
browser.Lib.get_window = function() {
	return js.Lib.window;
}
browser.Lib.prototype = {
	__scr: null
	,mKilled: null
	,mArgs: null
	,__class__: browser.Lib
}
browser._Lib = {}
browser._Lib.CursorType = $hxClasses["browser._Lib.CursorType"] = { __ename__ : ["browser","_Lib","CursorType"], __constructs__ : ["Pointer","Text","Default"] }
browser._Lib.CursorType.Pointer = ["Pointer",0];
browser._Lib.CursorType.Pointer.toString = $estr;
browser._Lib.CursorType.Pointer.__enum__ = browser._Lib.CursorType;
browser._Lib.CursorType.Text = ["Text",1];
browser._Lib.CursorType.Text.toString = $estr;
browser._Lib.CursorType.Text.__enum__ = browser._Lib.CursorType;
browser._Lib.CursorType.Default = ["Default",2];
browser._Lib.CursorType.Default.toString = $estr;
browser._Lib.CursorType.Default.__enum__ = browser._Lib.CursorType;
browser.accessibility = {}
browser.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["browser.accessibility.AccessibilityProperties"] = browser.accessibility.AccessibilityProperties;
browser.accessibility.AccessibilityProperties.__name__ = ["browser","accessibility","AccessibilityProperties"];
browser.accessibility.AccessibilityProperties.prototype = {
	silent: null
	,shortcut: null
	,noAutoLabeling: null
	,name: null
	,forceSimple: null
	,description: null
	,__class__: browser.accessibility.AccessibilityProperties
}
browser.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	browser.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	this.nmeGraphics = new browser.display.Graphics();
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		this.nmeRender();
	}
};
$hxClasses["browser.display.Bitmap"] = browser.display.Bitmap;
browser.display.Bitmap.__name__ = ["browser","display","Bitmap"];
browser.display.Bitmap.__super__ = browser.display.DisplayObject;
browser.display.Bitmap.prototype = $extend(browser.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			browser.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new browser.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		if(this.bitmapData == null) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		var imageDataLease = this.bitmapData.nmeLease;
		if(imageDataLease != null && (this.nmeCurrentLease == null || imageDataLease.seed != this.nmeCurrentLease.seed || imageDataLease.time != this.nmeCurrentLease.time)) {
			var srcCanvas = this.bitmapData._nmeTextureBuffer;
			this.nmeGraphics.nmeSurface.width = srcCanvas.width;
			this.nmeGraphics.nmeSurface.height = srcCanvas.height;
			this.nmeGraphics.clear();
			browser.Lib.nmeDrawToSurface(srcCanvas,this.nmeGraphics.nmeSurface);
			this.nmeCurrentLease = imageDataLease.clone();
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		if(inMask != null) {
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
			browser.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
				browser.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			if(!this.nmeInit) {
				browser.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,0);
				this.nmeInit = true;
			} else browser.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() || local.y > this.get_height()) return null; else return this;
		} else return browser.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.nmeExtentWithFilters;
		var fm = this.transform.nmeGetFullMatrix(null);
		fm.nmeTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,nmeInit: null
	,nmeCurrentLease: null
	,nmeGraphics: null
	,smoothing: null
	,pixelSnapping: null
	,bitmapData: null
	,__class__: browser.display.Bitmap
	,__properties__: $extend(browser.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
browser.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.nmeLocked = false;
	this.nmeLeaseNum = 0;
	this.nmeLease = new browser.display.ImageDataLease();
	this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	this._nmeTextureBuffer = js.Lib.document.createElement("canvas");
	this._nmeTextureBuffer.width = width;
	this._nmeTextureBuffer.height = height;
	this._nmeId = browser.utils.Uuid.uuid();
	browser.Lib.nmeSetSurfaceId(this._nmeTextureBuffer,this._nmeId);
	this.nmeTransparent = transparent;
	this.rect = new browser.geom.Rectangle(0,0,width,height);
	if(this.nmeTransparent) {
		this.nmeTransparentFiller = js.Lib.document.createElement("canvas");
		this.nmeTransparentFiller.width = width;
		this.nmeTransparentFiller.height = height;
		var ctx = this.nmeTransparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.nmeTransparent) inFillColor |= -16777216;
		this.nmeInitColor = inFillColor;
		this.nmeFillRect(this.rect,inFillColor);
	}
};
$hxClasses["browser.display.BitmapData"] = browser.display.BitmapData;
browser.display.BitmapData.__name__ = ["browser","display","BitmapData"];
browser.display.BitmapData.__interfaces__ = [browser.display.IBitmapDrawable];
browser.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new browser.geom.Rectangle(0,0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0));
	var num = (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0) * (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.data.getUint8(p.position++);
		var red = p.data.getUint8(p.position++);
		var green = p.data.getUint8(p.position++);
		var blue = p.data.getUint8(p.position++);
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
browser.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var type = "";
	if(browser.display.BitmapData.nmeIsPNG(bytes)) type = "image/png"; else if(browser.display.BitmapData.nmeIsJPG(bytes)) type = "image/jpeg"; else throw new browser.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
	var img = js.Lib.document.createElement("img");
	var bitmapData = new browser.display.BitmapData(0,0);
	var canvas = bitmapData._nmeTextureBuffer;
	var drawImage = function(_) {
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img,0,0);
		if(inRawAlpha != null) {
			var pixels = ctx.getImageData(0,0,img.width,img.height);
			var _g1 = 0, _g = inRawAlpha.length;
			while(_g1 < _g) {
				var i = _g1++;
				pixels.data[i * 4 + 3] = inRawAlpha.data.getUint8(inRawAlpha.position++);
			}
			ctx.putImageData(pixels,0,0);
		}
		onload(bitmapData);
	};
	img.addEventListener("load",drawImage,false);
	img.src = "data:" + type + ";base64," + browser.display.BitmapData.nmeBase64Encode(bytes);
}
browser.display.BitmapData.nmeBase64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.data.getUint8(bytes.position++);
		if(bytes.position < bytes.length) by2 = bytes.data.getUint8(bytes.position++);
		if(bytes.position < bytes.length) by3 = bytes.data.getUint8(bytes.position++);
		var by4 = 0, by5 = 0, by6 = 0, by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
}
browser.display.BitmapData.nmeCreateFromHandle = function(inHandle) {
	var result = new browser.display.BitmapData(0,0);
	result._nmeTextureBuffer = inHandle;
	return result;
}
browser.display.BitmapData.nmeIsJPG = function(bytes) {
	bytes.position = 0;
	if(bytes.data.getUint8(bytes.position++) == 255 && bytes.data.getUint8(bytes.position++) == 216 && bytes.data.getUint8(bytes.position++) == 255 && bytes.data.getUint8(bytes.position++) == 224) {
		bytes.data.getUint8(bytes.position++);
		bytes.data.getUint8(bytes.position++);
		if(bytes.data.getUint8(bytes.position++) == 74 && bytes.data.getUint8(bytes.position++) == 70 && bytes.data.getUint8(bytes.position++) == 73 && bytes.data.getUint8(bytes.position++) == 70 && bytes.data.getUint8(bytes.position++) == 0) return true;
	}
	return false;
}
browser.display.BitmapData.nmeIsPNG = function(bytes) {
	bytes.position = 0;
	return bytes.data.getUint8(bytes.position++) == 137 && bytes.data.getUint8(bytes.position++) == 80 && bytes.data.getUint8(bytes.position++) == 78 && bytes.data.getUint8(bytes.position++) == 71 && bytes.data.getUint8(bytes.position++) == 13 && bytes.data.getUint8(bytes.position++) == 10 && bytes.data.getUint8(bytes.position++) == 26 && bytes.data.getUint8(bytes.position++) == 10;
}
browser.display.BitmapData.prototype = {
	get_width: function() {
		if(this._nmeTextureBuffer != null) return this._nmeTextureBuffer.width; else return 0;
	}
	,get_transparent: function() {
		return this.nmeTransparent;
	}
	,get_height: function() {
		if(this._nmeTextureBuffer != null) return this._nmeTextureBuffer.height; else return 0;
	}
	,nmeOnLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new browser.geom.Rectangle(0,0,width,height);
		data.bitmapData.nmeBuildLease();
		if(data.inLoader != null) {
			var e1 = new browser.events.Event(browser.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,unlock: function(changeRect) {
		this.nmeLocked = false;
		var ctx = this._nmeTextureBuffer.getContext("2d");
		if(this.nmeImageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.nmeImageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.nmeImageData,0,0);
		}
		var _g = 0, _g1 = this.nmeCopyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.nmeTransparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		haxe.Log.trace("BitmapData.threshold not implemented",{ fileName : "BitmapData.hx", lineNumber : 1254, className : "browser.display.BitmapData", methodName : "threshold"});
		return 0;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.data.getUint8(byteArray.position++);
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.nmeImageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.nmeImageData.width * 4) > boundR - 1) pos += this.nmeImageData.width * 4 - boundR;
				this.nmeImageData.data[pos] = byteArray.data.getUint8(byteArray.position++);
				pos++;
			}
			this.nmeImageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.nmeTransparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.nmeImageData.width + x * 4;
			this.nmeImageData.data[offset] = (color & 16711680) >>> 16;
			this.nmeImageData.data[offset + 1] = (color & 65280) >>> 8;
			this.nmeImageData.data[offset + 2] = color & 255;
			if(this.nmeTransparent) this.nmeImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.nmeImageData.data[offset + 3] = 255;
			this.nmeImageDataChanged = true;
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.nmeTransparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.nmeImageData.width + x * 4;
			this.nmeImageData.data[offset] = (color & 16711680) >>> 16;
			this.nmeImageData.data[offset + 1] = (color & 65280) >>> 8;
			this.nmeImageData.data[offset + 2] = color & 255;
			if(this.nmeTransparent) this.nmeImageData.data[offset + 3] = 255;
			this.nmeImageDataChanged = true;
		}
	}
	,scroll: function(x,y) {
		throw "bitmapData.scroll is currently not supported for HTML5";
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new browser.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this._nmeTextureBuffer.getContext("2d");
		var imageData = null;
		if(this.nmeLocked) imageData = this.nmeImageData; else imageData = ctx.createImageData(this._nmeTextureBuffer.width,this._nmeTextureBuffer.height);
		var _g1 = 0, _g = this._nmeTextureBuffer.width * this._nmeTextureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				imageData.data[i * 4] = (channelOptions & 1) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 1] = (channelOptions & 2) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 2] = (channelOptions & 4) == 0?0:low + generator.nextValue() % (high - low + 1);
			}
			imageData.data[i * 4 + 3] = (channelOptions & 8) == 0?255:low + generator.nextValue() % (high - low + 1);
		}
		if(this.nmeLocked) this.nmeImageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,nmeLoadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = js.Lib.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this._nmeTextureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.nmeOnLoad),data),false);
			image.addEventListener("error",function(e) {
				if(!image.complete) _g.nmeOnLoad(data,e);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,nmeIncrNumRefBitmaps: function() {
		this.nmeAssignedBitmaps++;
	}
	,nmeGetNumRefBitmaps: function() {
		return this.nmeAssignedBitmaps;
	}
	,nmeGetLease: function() {
		return this.nmeLease;
	}
	,nmeFillRect: function(rect,color) {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		var ctx = this._nmeTextureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a = this.nmeTransparent?color >>> 24:255;
		if(!this.nmeLocked) {
			if(this.nmeTransparent) {
				var trpCtx = this.nmeTransparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(rect.x,rect.y,rect.width,rect.height);
				ctx.putImageData(trpData,rect.x,rect.y);
			}
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.nmeImageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.nmeImageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.nmeImageData.data[s + offsetX] = r;
					this.nmeImageData.data[s + offsetX + 1] = g;
					this.nmeImageData.data[s + offsetX + 2] = b;
					this.nmeImageData.data[s + offsetX + 3] = a;
				}
			}
			this.nmeImageDataChanged = true;
			ctx.putImageData(this.nmeImageData,0,0,rect.x,rect.y,rect.width,rect.height);
		}
	}
	,nmeDecrNumRefBitmaps: function() {
		this.nmeAssignedBitmaps--;
	}
	,nmeClearCanvas: function() {
		var ctx = this._nmeTextureBuffer.getContext("2d");
		ctx.clearRect(0,0,this._nmeTextureBuffer.width,this._nmeTextureBuffer.height);
	}
	,nmeBuildLease: function() {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	}
	,lock: function() {
		this.nmeLocked = true;
		var ctx = this._nmeTextureBuffer.getContext("2d");
		this.nmeImageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
		this.nmeImageDataChanged = false;
		this.nmeCopyPixelList = [];
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			switch(secondObject.__proto__.__class__.__name__[2]) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new browser.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) || y >= (me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			return doHitTest(imageData);
		} else return doHitTest(this.nmeImageData);
	}
	,handle: function() {
		return this._nmeTextureBuffer;
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new browser.utils.ByteArray();
		if(byteArray.allocated < len) byteArray._nmeResizeBuffer(byteArray.allocated = Math.max(len,byteArray.allocated * 2) | 0); else if(byteArray.allocated > len) byteArray._nmeResizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.nmeImageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.nmeImageData.width * 4) > boundR - 1) pos += this.nmeImageData.width * 4 - boundR;
				byteArray.writeByte(this.nmeImageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return 0;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this._nmeTextureBuffer.width + x * 4,this.nmeImageData.data);
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return 0;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset = 4 * y * (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) + x * 4;
			return this.nmeImageData.data[offset] << 16 | this.nmeImageData.data[offset + 1] << 8 | this.nmeImageData.data[offset + 2];
		}
	}
	,getInt32: function(offset,data) {
		var b5, b6, b7, b8, pow = Math.pow;
		b5 = !this.nmeTransparent?255:data[offset + 3] & 255;
		b6 = data[offset] & 255;
		b7 = data[offset + 1] & 255;
		b8 = data[offset + 2] & 255;
		return parseInt(((b5 >> 7) * pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX = me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0, maxX = 0, minY = me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0, maxY = 0, i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x = Math.round(i % ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new browser.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new browser.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
		};
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.nmeImageData.data);
	}
	,floodFill: function(x,y,color) {
		haxe.Log.trace("BitmapData.floodFill not implemented",{ fileName : "BitmapData.hx", lineNumber : 471, className : "browser.display.BitmapData", methodName : "floodFill"});
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this._nmeTextureBuffer.width && rect.height == this._nmeTextureBuffer.height) {
			if(this.nmeTransparent) {
				if(color >>> 24 == 0 || color == this.nmeInitColor) return this.nmeClearCanvas();
			} else if((color | -16777216) == (this.nmeInitColor | -16777216)) return this.nmeClearCanvas();
		}
		return this.nmeFillRect(rect,color);
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smothing) {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			ctx.drawImage(this._nmeTextureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this._nmeTextureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new browser.geom.Rectangle(0,0,this._nmeTextureBuffer.width,this._nmeTextureBuffer.height),inColorTransform);
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		source.drawToSurface(this._nmeTextureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new browser.geom.Rectangle();
			var object = source;
			rect.x = matrix != null?matrix.tx:0;
			rect.y = matrix != null?matrix.ty:0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this._nmeTextureBuffer.width;
				rect.height = this._nmeTextureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,dispose: function() {
		this.nmeClearCanvas();
		this._nmeTextureBuffer = null;
		this.nmeLeaseNum = 0;
		this.nmeLease = null;
		this.nmeImageData = null;
	}
	,destroy: function() {
		this._nmeTextureBuffer = null;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData._nmeTextureBuffer == null || this._nmeTextureBuffer == null || sourceBitmapData._nmeTextureBuffer.width == 0 || sourceBitmapData._nmeTextureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData._nmeTextureBuffer.width) sourceRect.width = sourceBitmapData._nmeTextureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData._nmeTextureBuffer.height) sourceRect.height = sourceBitmapData._nmeTextureBuffer.height - sourceRect.y;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			if(this.nmeTransparent && sourceBitmapData.nmeTransparent) {
				var trpCtx = sourceBitmapData.nmeTransparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
				ctx.putImageData(trpData,destPoint.x,destPoint.y);
			}
			ctx.drawImage(sourceBitmapData._nmeTextureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.nmeCopyPixelList[this.nmeCopyPixelList.length] = { handle : sourceBitmapData._nmeTextureBuffer, transparentFiller : sourceBitmapData.nmeTransparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(sourceBitmapData._nmeTextureBuffer == null || this._nmeTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData._nmeTextureBuffer.width) sourceRect.width = sourceBitmapData._nmeTextureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData._nmeTextureBuffer.height) sourceRect.height = sourceBitmapData._nmeTextureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData._nmeTextureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			doChannelCopy(imageData);
			ctx.putImageData(imageData,0,0);
		} else {
			doChannelCopy(this.nmeImageData);
			this.nmeImageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.nmeImageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.nmeImageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.nmeImageData.data[s + offsetX] = this.nmeImageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.nmeImageData.data[s + offsetX + 1] = this.nmeImageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.nmeImageData.data[s + offsetX + 2] = this.nmeImageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.nmeImageData.data[s + offsetX + 3] = this.nmeImageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.nmeImageDataChanged = true;
		}
	}
	,clone: function() {
		var bitmapData = new browser.display.BitmapData(this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0,this.nmeTransparent);
		var rect = new browser.geom.Rectangle(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.nmeLease.set(bitmapData.nmeLeaseNum++,new Date().getTime());
		return bitmapData;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0)) {
			r.width -= r.x + r.width - (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) {
			r.height -= r.y + r.height - (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		haxe.Log.trace("BitmapData.applyFilter not implemented",{ fileName : "BitmapData.hx", lineNumber : 91, className : "browser.display.BitmapData", methodName : "applyFilter"});
	}
	,_nmeTextureBuffer: null
	,_nmeId: null
	,nmeTransparentFiller: null
	,nmeTransparent: null
	,nmeLocked: null
	,nmeLeaseNum: null
	,nmeLease: null
	,nmeInitColor: null
	,nmeImageDataChanged: null
	,nmeGLTexture: null
	,nmeImageData: null
	,nmeCopyPixelList: null
	,nmeAssignedBitmaps: null
	,width: null
	,transparent: null
	,rect: null
	,height: null
	,__class__: browser.display.BitmapData
	,__properties__: {get_height:"get_height",get_transparent:"get_transparent",get_width:"get_width"}
}
browser.display.ImageDataLease = function() {
};
$hxClasses["browser.display.ImageDataLease"] = browser.display.ImageDataLease;
browser.display.ImageDataLease.__name__ = ["browser","display","ImageDataLease"];
browser.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new browser.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,time: null
	,seed: null
	,__class__: browser.display.ImageDataLease
}
browser.display._BitmapData = {}
browser.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["browser.display._BitmapData.MinstdGenerator"] = browser.display._BitmapData.MinstdGenerator;
browser.display._BitmapData.MinstdGenerator.__name__ = ["browser","display","_BitmapData","MinstdGenerator"];
browser.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,value: null
	,__class__: browser.display._BitmapData.MinstdGenerator
}
browser.display.BitmapDataChannel = function() { }
$hxClasses["browser.display.BitmapDataChannel"] = browser.display.BitmapDataChannel;
browser.display.BitmapDataChannel.__name__ = ["browser","display","BitmapDataChannel"];
browser.display.BlendMode = $hxClasses["browser.display.BlendMode"] = { __ename__ : ["browser","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
browser.display.BlendMode.ADD = ["ADD",0];
browser.display.BlendMode.ADD.toString = $estr;
browser.display.BlendMode.ADD.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.ALPHA = ["ALPHA",1];
browser.display.BlendMode.ALPHA.toString = $estr;
browser.display.BlendMode.ALPHA.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.DARKEN = ["DARKEN",2];
browser.display.BlendMode.DARKEN.toString = $estr;
browser.display.BlendMode.DARKEN.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
browser.display.BlendMode.DIFFERENCE.toString = $estr;
browser.display.BlendMode.DIFFERENCE.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.ERASE = ["ERASE",4];
browser.display.BlendMode.ERASE.toString = $estr;
browser.display.BlendMode.ERASE.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
browser.display.BlendMode.HARDLIGHT.toString = $estr;
browser.display.BlendMode.HARDLIGHT.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.INVERT = ["INVERT",6];
browser.display.BlendMode.INVERT.toString = $estr;
browser.display.BlendMode.INVERT.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.LAYER = ["LAYER",7];
browser.display.BlendMode.LAYER.toString = $estr;
browser.display.BlendMode.LAYER.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
browser.display.BlendMode.LIGHTEN.toString = $estr;
browser.display.BlendMode.LIGHTEN.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
browser.display.BlendMode.MULTIPLY.toString = $estr;
browser.display.BlendMode.MULTIPLY.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.NORMAL = ["NORMAL",10];
browser.display.BlendMode.NORMAL.toString = $estr;
browser.display.BlendMode.NORMAL.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.OVERLAY = ["OVERLAY",11];
browser.display.BlendMode.OVERLAY.toString = $estr;
browser.display.BlendMode.OVERLAY.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.SCREEN = ["SCREEN",12];
browser.display.BlendMode.SCREEN.toString = $estr;
browser.display.BlendMode.SCREEN.__enum__ = browser.display.BlendMode;
browser.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
browser.display.BlendMode.SUBTRACT.toString = $estr;
browser.display.BlendMode.SUBTRACT.__enum__ = browser.display.BlendMode;
browser.display.CapsStyle = $hxClasses["browser.display.CapsStyle"] = { __ename__ : ["browser","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
browser.display.CapsStyle.NONE = ["NONE",0];
browser.display.CapsStyle.NONE.toString = $estr;
browser.display.CapsStyle.NONE.__enum__ = browser.display.CapsStyle;
browser.display.CapsStyle.ROUND = ["ROUND",1];
browser.display.CapsStyle.ROUND.toString = $estr;
browser.display.CapsStyle.ROUND.__enum__ = browser.display.CapsStyle;
browser.display.CapsStyle.SQUARE = ["SQUARE",2];
browser.display.CapsStyle.SQUARE.toString = $estr;
browser.display.CapsStyle.SQUARE.__enum__ = browser.display.CapsStyle;
browser.display.GradientType = $hxClasses["browser.display.GradientType"] = { __ename__ : ["browser","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
browser.display.GradientType.RADIAL = ["RADIAL",0];
browser.display.GradientType.RADIAL.toString = $estr;
browser.display.GradientType.RADIAL.__enum__ = browser.display.GradientType;
browser.display.GradientType.LINEAR = ["LINEAR",1];
browser.display.GradientType.LINEAR.toString = $estr;
browser.display.GradientType.LINEAR.__enum__ = browser.display.GradientType;
browser.display.Graphics = function(inSurface) {
	browser.Lib.nmeBootstrap();
	if(inSurface == null) {
		this.nmeSurface = js.Lib.document.createElement("canvas");
		this.nmeSurface.width = 0;
		this.nmeSurface.height = 0;
	} else this.nmeSurface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.nmeClearLine();
	this.mLineJobs = [];
	this.nmeChanged = true;
	this.nextDrawIndex = 0;
	this.nmeExtent = new browser.geom.Rectangle();
	this.nmeExtentWithFilters = new browser.geom.Rectangle();
	this._padding = 0.0;
	this.nmeClearNextCycle = true;
};
$hxClasses["browser.display.Graphics"] = browser.display.Graphics;
browser.display.Graphics.__name__ = ["browser","display","Graphics"];
browser.display.Graphics.nmeDetectIsPointInPathMode = function() {
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return browser.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?browser.display.PointInPathMode.USER_SPACE:browser.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
browser.display.Graphics.prototype = {
	nmeRender: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.nmeChanged) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.nmeExpandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.nmeClearNextCycle) {
			this.nextDrawIndex = 0;
			this.nmeClearCanvas();
			this.nmeClearNextCycle = false;
		}
		if(this.nmeExtentWithFilters.width - this.nmeExtentWithFilters.x > this.nmeSurface.width || this.nmeExtentWithFilters.height - this.nmeExtentWithFilters.y > this.nmeSurface.height) this.nmeAdjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,browser.filters.DropShadowFilter)) filter.nmeApplyFilter(this.nmeSurface,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.nmeExtentWithFilters.x != 0 || this.nmeExtentWithFilters.y != 0) ctx.translate(-this.nmeExtentWithFilters.x * sx,-this.nmeExtentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.nmeDrawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						switch(lj.caps) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
						while(_g4 < _g3) {
							var i1 = _g4++;
							var p = d.points[i1];
							switch(p.type) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					var img = bitmap.texture_buffer;
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.nmeChanged = false;
		this.nextDrawIndex = len;
		this.mDrawList = [];
		return true;
	}
	,nmeMediaSurface: function(surface) {
		this.nmeSurface = surface;
	}
	,nmeInvalidate: function() {
		this.nmeChanged = true;
		this.nmeClearNextCycle = true;
	}
	,nmeHitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.nmeExtent.width > 0 && this.nmeExtent.height > 0) return true;
		return false;
	}
	,nmeExpandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.nmeExtent.width -= this._padding;
			this.nmeExtent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.nmeExtent.x;
		minY = this.nmeExtent.y;
		maxX = this.nmeExtent.width + minX;
		maxY = this.nmeExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.nmeExtent.x = minX;
		this.nmeExtent.y = minY;
		this.nmeExtent.width = maxX - minX + this._padding;
		this.nmeExtent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,nmeExpandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.nmeExtent.x;
		minY = this.nmeExtent.y;
		maxX = this.nmeExtent.width + minX;
		maxY = this.nmeExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.nmeExtentWithFilters.x = minX;
		this.nmeExtentWithFilters.y = minY;
		this.nmeExtentWithFilters.width = maxX - minX;
		this.nmeExtentWithFilters.height = maxY - minY;
	}
	,nmeDrawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.nmeBitmap._nmeTextureBuffer;
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.nmeTileRects[tileID];
				center = sheet.nmeCenterPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(-tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,nmeDrawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,nmeClearLine: function() {
		this.mCurrentLine = new browser.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,nmeClearCanvas: function() {
		if(this.nmeSurface != null) {
			var ctx = (function($this) {
				var $r;
				try {
					$r = $this.nmeSurface.getContext("2d");
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(ctx != null) ctx.clearRect(0,0,this.nmeSurface.width,this.nmeSurface.height);
		}
	}
	,nmeAdjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.nmeSurface,"getContext") != null) {
			var width = Math.ceil((this.nmeExtentWithFilters.width - this.nmeExtentWithFilters.x) * sx);
			var height = Math.ceil((this.nmeExtentWithFilters.height - this.nmeExtentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Lib.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				browser.Lib.nmeDrawToSurface(this.nmeSurface,dstCanvas);
				if(browser.Lib.nmeIsOnStage(this.nmeSurface)) {
					browser.Lib.nmeAppendSurface(dstCanvas);
					browser.Lib.nmeCopyStyle(this.nmeSurface,dstCanvas);
					browser.Lib.nmeSwapSurface(this.nmeSurface,dstCanvas);
					browser.Lib.nmeRemoveSurface(this.nmeSurface);
					if(this.nmeSurface.id != null) browser.Lib.nmeSetSurfaceId(dstCanvas,this.nmeSurface.id);
				}
				this.nmeSurface = dstCanvas;
			}
		}
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.nmeClearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			this.mCurrentLine.colour = color == null?0:color;
			this.mCurrentLine.alpha = alpha == null?1.0:alpha;
			this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
			this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:16384;
		}
		if(caps != null) {
			switch( (caps)[1] ) {
			case 1:
				this.mCurrentLine.caps = 256;
				break;
			case 2:
				this.mCurrentLine.caps = 512;
				break;
			case 0:
				this.mCurrentLine.caps = 0;
				break;
			}
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) {
			switch( (scaleMode)[1] ) {
			case 2:
				this.mCurrentLine.scale_mode = 3;
				break;
			case 3:
				this.mCurrentLine.scale_mode = 1;
				break;
			case 0:
				this.mCurrentLine.scale_mode = 2;
				break;
			case 1:
				this.mCurrentLine.scale_mode = 0;
				break;
			}
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) {
			switch( (joints)[1] ) {
			case 1:
				this.mCurrentLine.joints = 0;
				break;
			case 0:
				this.mCurrentLine.joints = 4096;
				break;
			case 2:
				this.mCurrentLine.joints = 8192;
				break;
			}
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,getContext: function() {
		try {
			return this.nmeSurface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.nmeExpandStandardExtent(browser.Lib.get_current().get_stage().get_stageWidth(),browser.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new browser.display.Drawable(null,null,null,null,null,null,new browser.display.TileJob(sheet,tileData,flags)));
		this.nmeChanged = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var _g = 0;
		while(_g < points.length) {
			var data = points[_g];
			++_g;
			if(data == null) this.mFilling = true; else switch(data.nmeGraphicsDataType) {
			case browser.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.nmeGraphicsFillType) {
				case browser.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case browser.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case browser.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g2 = 0, _g1 = path.commands.length;
				while(_g2 < _g1) {
					var i = _g2++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case browser.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case browser.display.GraphicsDataType.GRADIENT:
				var fill = data;
				this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
		}
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.nmeDrawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.nmeDrawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new browser.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new browser.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new browser.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == browser.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == browser.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == browser.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new browser.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new browser.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new browser.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new browser.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new browser.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new browser.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new browser.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.nmeChanged = true;
	}
	,clear: function() {
		this.nmeClearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.nmeClearNextCycle = true;
		this.boundsDirty = true;
		this.nmeExtent.x = 0.0;
		this.nmeExtent.y = 0.0;
		this.nmeExtent.width = 0.0;
		this.nmeExtent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) ctx.drawImage(inTexture._nmeTextureBuffer,this.mPenX,this.mPenY);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat = in_repeat == null?true:in_repeat;
		var smooth = in_smooth == null?false:in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.nmeExpandStandardExtent(bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.width:0,bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap._nmeTextureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new browser.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,_padding: null
	,nmeClearNextCycle: null
	,nmeChanged: null
	,nextDrawIndex: null
	,mSolidGradient: null
	,mPoints: null
	,mPenY: null
	,mPenX: null
	,mLineJobs: null
	,mLineDraws: null
	,mLastMoveID: null
	,mFilling: null
	,mFillAlpha: null
	,mFillColour: null
	,mDrawList: null
	,mCurrentLine: null
	,mBitmap: null
	,nmeSurface: null
	,nmeExtentWithFilters: null
	,nmeExtent: null
	,boundsDirty: null
	,__class__: browser.display.Graphics
}
browser.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["browser.display.Drawable"] = browser.display.Drawable;
browser.display.Drawable.__name__ = ["browser","display","Drawable"];
browser.display.Drawable.prototype = {
	tileJob: null
	,solidGradient: null
	,points: null
	,lineJobs: null
	,fillColour: null
	,fillAlpha: null
	,bitmap: null
	,__class__: browser.display.Drawable
}
browser.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["browser.display.GfxPoint"] = browser.display.GfxPoint;
browser.display.GfxPoint.__name__ = ["browser","display","GfxPoint"];
browser.display.GfxPoint.prototype = {
	y: null
	,x: null
	,type: null
	,cy: null
	,cx: null
	,__class__: browser.display.GfxPoint
}
browser.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["browser.display.Grad"] = browser.display.Grad;
browser.display.Grad.__name__ = ["browser","display","Grad"];
browser.display.Grad.prototype = {
	points: null
	,matrix: null
	,focal: null
	,flags: null
	,__class__: browser.display.Grad
}
browser.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["browser.display.GradPoint"] = browser.display.GradPoint;
browser.display.GradPoint.__name__ = ["browser","display","GradPoint"];
browser.display.GradPoint.prototype = {
	ratio: null
	,col: null
	,alpha: null
	,__class__: browser.display.GradPoint
}
browser.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["browser.display.LineJob"] = browser.display.LineJob;
browser.display.LineJob.__name__ = ["browser","display","LineJob"];
browser.display.LineJob.prototype = {
	thickness: null
	,scale_mode: null
	,point_idx1: null
	,point_idx0: null
	,pixel_hinting: null
	,miter_limit: null
	,joints: null
	,grad: null
	,colour: null
	,caps: null
	,alpha: null
	,__class__: browser.display.LineJob
}
browser.display.PointInPathMode = $hxClasses["browser.display.PointInPathMode"] = { __ename__ : ["browser","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
browser.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
browser.display.PointInPathMode.USER_SPACE.toString = $estr;
browser.display.PointInPathMode.USER_SPACE.__enum__ = browser.display.PointInPathMode;
browser.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
browser.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
browser.display.PointInPathMode.DEVICE_SPACE.__enum__ = browser.display.PointInPathMode;
browser.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["browser.display.TileJob"] = browser.display.TileJob;
browser.display.TileJob.__name__ = ["browser","display","TileJob"];
browser.display.TileJob.prototype = {
	sheet: null
	,flags: null
	,drawList: null
	,__class__: browser.display.TileJob
}
browser.display.IGraphicsFill = function() { }
$hxClasses["browser.display.IGraphicsFill"] = browser.display.IGraphicsFill;
browser.display.IGraphicsFill.__name__ = ["browser","display","IGraphicsFill"];
browser.display.IGraphicsFill.prototype = {
	nmeGraphicsFillType: null
	,__class__: browser.display.IGraphicsFill
}
browser.display.IGraphicsData = function() { }
$hxClasses["browser.display.IGraphicsData"] = browser.display.IGraphicsData;
browser.display.IGraphicsData.__name__ = ["browser","display","IGraphicsData"];
browser.display.IGraphicsData.prototype = {
	nmeGraphicsDataType: null
	,__class__: browser.display.IGraphicsData
}
browser.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.GRADIENT;
	this.nmeGraphicsFillType = browser.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["browser.display.GraphicsGradientFill"] = browser.display.GraphicsGradientFill;
browser.display.GraphicsGradientFill.__name__ = ["browser","display","GraphicsGradientFill"];
browser.display.GraphicsGradientFill.__interfaces__ = [browser.display.IGraphicsFill,browser.display.IGraphicsData];
browser.display.GraphicsGradientFill.prototype = {
	type: null
	,spreadMethod: null
	,ratios: null
	,nmeGraphicsFillType: null
	,nmeGraphicsDataType: null
	,matrix: null
	,interpolationMethod: null
	,focalPointRatio: null
	,colors: null
	,alphas: null
	,__class__: browser.display.GraphicsGradientFill
}
browser.display.IGraphicsPath = function() { }
$hxClasses["browser.display.IGraphicsPath"] = browser.display.IGraphicsPath;
browser.display.IGraphicsPath.__name__ = ["browser","display","IGraphicsPath"];
browser.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.PATH;
};
$hxClasses["browser.display.GraphicsPath"] = browser.display.GraphicsPath;
browser.display.GraphicsPath.__name__ = ["browser","display","GraphicsPath"];
browser.display.GraphicsPath.__interfaces__ = [browser.display.IGraphicsPath,browser.display.IGraphicsData];
browser.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			this.commands.push(1);
			this.data.push(x);
			this.data.push(y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			this.commands.push(2);
			this.data.push(x);
			this.data.push(y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			this.commands.push(3);
			this.data.push(anchorX);
			this.data.push(anchorY);
			this.data.push(controlX);
			this.data.push(controlY);
		}
	}
	,winding: null
	,nmeGraphicsDataType: null
	,data: null
	,commands: null
	,__class__: browser.display.GraphicsPath
}
browser.display.GraphicsPathCommand = function() { }
$hxClasses["browser.display.GraphicsPathCommand"] = browser.display.GraphicsPathCommand;
browser.display.GraphicsPathCommand.__name__ = ["browser","display","GraphicsPathCommand"];
browser.display.GraphicsPathWinding = $hxClasses["browser.display.GraphicsPathWinding"] = { __ename__ : ["browser","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] }
browser.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
browser.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
browser.display.GraphicsPathWinding.EVEN_ODD.__enum__ = browser.display.GraphicsPathWinding;
browser.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
browser.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
browser.display.GraphicsPathWinding.NON_ZERO.__enum__ = browser.display.GraphicsPathWinding;
browser.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.SOLID;
	this.nmeGraphicsFillType = browser.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["browser.display.GraphicsSolidFill"] = browser.display.GraphicsSolidFill;
browser.display.GraphicsSolidFill.__name__ = ["browser","display","GraphicsSolidFill"];
browser.display.GraphicsSolidFill.__interfaces__ = [browser.display.IGraphicsFill,browser.display.IGraphicsData];
browser.display.GraphicsSolidFill.prototype = {
	nmeGraphicsFillType: null
	,nmeGraphicsDataType: null
	,color: null
	,alpha: null
	,__class__: browser.display.GraphicsSolidFill
}
browser.display.IGraphicsStroke = function() { }
$hxClasses["browser.display.IGraphicsStroke"] = browser.display.IGraphicsStroke;
browser.display.IGraphicsStroke.__name__ = ["browser","display","IGraphicsStroke"];
browser.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.nmeGraphicsDataType = browser.display.GraphicsDataType.STROKE;
};
$hxClasses["browser.display.GraphicsStroke"] = browser.display.GraphicsStroke;
browser.display.GraphicsStroke.__name__ = ["browser","display","GraphicsStroke"];
browser.display.GraphicsStroke.__interfaces__ = [browser.display.IGraphicsStroke,browser.display.IGraphicsData];
browser.display.GraphicsStroke.prototype = {
	thickness: null
	,scaleMode: null
	,pixelHinting: null
	,nmeGraphicsDataType: null
	,miterLimit: null
	,joints: null
	,fill: null
	,caps: null
	,__class__: browser.display.GraphicsStroke
}
browser.display.GraphicsDataType = $hxClasses["browser.display.GraphicsDataType"] = { __ename__ : ["browser","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
browser.display.GraphicsDataType.STROKE = ["STROKE",0];
browser.display.GraphicsDataType.STROKE.toString = $estr;
browser.display.GraphicsDataType.STROKE.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsDataType.SOLID = ["SOLID",1];
browser.display.GraphicsDataType.SOLID.toString = $estr;
browser.display.GraphicsDataType.SOLID.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
browser.display.GraphicsDataType.GRADIENT.toString = $estr;
browser.display.GraphicsDataType.GRADIENT.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsDataType.PATH = ["PATH",3];
browser.display.GraphicsDataType.PATH.toString = $estr;
browser.display.GraphicsDataType.PATH.__enum__ = browser.display.GraphicsDataType;
browser.display.GraphicsFillType = $hxClasses["browser.display.GraphicsFillType"] = { __ename__ : ["browser","display","GraphicsFillType"], __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
browser.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
browser.display.GraphicsFillType.SOLID_FILL.toString = $estr;
browser.display.GraphicsFillType.SOLID_FILL.__enum__ = browser.display.GraphicsFillType;
browser.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
browser.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
browser.display.GraphicsFillType.GRADIENT_FILL.__enum__ = browser.display.GraphicsFillType;
browser.display.InterpolationMethod = $hxClasses["browser.display.InterpolationMethod"] = { __ename__ : ["browser","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
browser.display.InterpolationMethod.RGB = ["RGB",0];
browser.display.InterpolationMethod.RGB.toString = $estr;
browser.display.InterpolationMethod.RGB.__enum__ = browser.display.InterpolationMethod;
browser.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
browser.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
browser.display.InterpolationMethod.LINEAR_RGB.__enum__ = browser.display.InterpolationMethod;
browser.display.JointStyle = $hxClasses["browser.display.JointStyle"] = { __ename__ : ["browser","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
browser.display.JointStyle.MITER = ["MITER",0];
browser.display.JointStyle.MITER.toString = $estr;
browser.display.JointStyle.MITER.__enum__ = browser.display.JointStyle;
browser.display.JointStyle.ROUND = ["ROUND",1];
browser.display.JointStyle.ROUND.toString = $estr;
browser.display.JointStyle.ROUND.__enum__ = browser.display.JointStyle;
browser.display.JointStyle.BEVEL = ["BEVEL",2];
browser.display.JointStyle.BEVEL.toString = $estr;
browser.display.JointStyle.BEVEL.__enum__ = browser.display.JointStyle;
browser.display.LineScaleMode = $hxClasses["browser.display.LineScaleMode"] = { __ename__ : ["browser","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
browser.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
browser.display.LineScaleMode.HORIZONTAL.toString = $estr;
browser.display.LineScaleMode.HORIZONTAL.__enum__ = browser.display.LineScaleMode;
browser.display.LineScaleMode.NONE = ["NONE",1];
browser.display.LineScaleMode.NONE.toString = $estr;
browser.display.LineScaleMode.NONE.__enum__ = browser.display.LineScaleMode;
browser.display.LineScaleMode.NORMAL = ["NORMAL",2];
browser.display.LineScaleMode.NORMAL.toString = $estr;
browser.display.LineScaleMode.NORMAL.__enum__ = browser.display.LineScaleMode;
browser.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
browser.display.LineScaleMode.VERTICAL.toString = $estr;
browser.display.LineScaleMode.VERTICAL.__enum__ = browser.display.LineScaleMode;
browser.display.Loader = function() {
	browser.display.DisplayObjectContainer.call(this);
	this.contentLoaderInfo = browser.display.LoaderInfo.create(this);
};
$hxClasses["browser.display.Loader"] = browser.display.Loader;
browser.display.Loader.__name__ = ["browser","display","Loader"];
browser.display.Loader.__super__ = browser.display.DisplayObjectContainer;
browser.display.Loader.prototype = $extend(browser.display.DisplayObjectContainer.prototype,{
	handleLoad: function(e) {
		this.content.nmeInvalidateBounds();
		this.content.nmeRender(null,null);
		this.contentLoaderInfo.removeEventListener(browser.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			browser.display.DisplayObjectContainer.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new browser.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this._nmeId + "]";
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(browser.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			browser.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new browser.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				_g.contentLoaderInfo.dispatchEvent(new browser.events.Event(browser.events.Event.COMPLETE));
			});
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 112, className : "browser.display.Loader", methodName : "loadBytes"});
			var evt = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":
				$r = "application/x-shockwave-flash";
				break;
			case "jpg":case "jpeg":
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
				break;
			case "png":
				$r = "image/png";
				break;
			case "gif":
				$r = "image/gif";
				break;
			default:
				$r = (function($this) {
					var $r;
					throw "Unrecognized file " + request.url;
					return $r;
				}($this));
			}
			return $r;
		}(this));
		this.mImage = new browser.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(browser.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.nmeLoadFromFile(request.url,this.contentLoaderInfo);
			this.content = new browser.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 78, className : "browser.display.Loader", methodName : "load"});
			var evt = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new browser.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,mShape: null
	,mImage: null
	,contentLoaderInfo: null
	,content: null
	,__class__: browser.display.Loader
});
browser.display.LoaderInfo = function() {
	browser.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["browser.display.LoaderInfo"] = browser.display.LoaderInfo;
browser.display.LoaderInfo.__name__ = ["browser","display","LoaderInfo"];
browser.display.LoaderInfo.create = function(ldr) {
	var li = new browser.display.LoaderInfo();
	if(ldr != null) li.loader = ldr;
	return li;
}
browser.display.LoaderInfo.__super__ = browser.events.EventDispatcher;
browser.display.LoaderInfo.prototype = $extend(browser.events.EventDispatcher.prototype,{
	width: null
	,url: null
	,sharedEvents: null
	,sameDomain: null
	,parentAllowsChild: null
	,parameters: null
	,loaderURL: null
	,loader: null
	,height: null
	,frameRate: null
	,contentType: null
	,content: null
	,childAllowsParent: null
	,bytesTotal: null
	,bytesLoaded: null
	,bytes: null
	,__class__: browser.display.LoaderInfo
});
browser.display.MovieClip = function() {
	browser.display.Sprite.call(this);
	this.enabled = true;
	this.mCurrentFrame = 0;
	this.mTotalFrames = 0;
	this.loaderInfo = browser.display.LoaderInfo.create(null);
};
$hxClasses["browser.display.MovieClip"] = browser.display.MovieClip;
browser.display.MovieClip.__name__ = ["browser","display","MovieClip"];
browser.display.MovieClip.__super__ = browser.display.Sprite;
browser.display.MovieClip.prototype = $extend(browser.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.mTotalFrames;
	}
	,get_framesLoaded: function() {
		return this.mTotalFrames;
	}
	,get_currentFrame: function() {
		return this.mCurrentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this._nmeId + "]";
	}
	,stop: function() {
	}
	,play: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,mTotalFrames: null
	,mCurrentFrame: null
	,totalFrames: null
	,loaderInfo: null
	,framesLoaded: null
	,enabled: null
	,currentFrame: null
	,__class__: browser.display.MovieClip
	,__properties__: $extend(browser.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
browser.display.PixelSnapping = $hxClasses["browser.display.PixelSnapping"] = { __ename__ : ["browser","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
browser.display.PixelSnapping.NEVER = ["NEVER",0];
browser.display.PixelSnapping.NEVER.toString = $estr;
browser.display.PixelSnapping.NEVER.__enum__ = browser.display.PixelSnapping;
browser.display.PixelSnapping.AUTO = ["AUTO",1];
browser.display.PixelSnapping.AUTO.toString = $estr;
browser.display.PixelSnapping.AUTO.__enum__ = browser.display.PixelSnapping;
browser.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
browser.display.PixelSnapping.ALWAYS.toString = $estr;
browser.display.PixelSnapping.ALWAYS.__enum__ = browser.display.PixelSnapping;
browser.display.Shape = function() {
	browser.display.DisplayObject.call(this);
	this.nmeGraphics = new browser.display.Graphics();
};
$hxClasses["browser.display.Shape"] = browser.display.Shape;
browser.display.Shape.__name__ = ["browser","display","Shape"];
browser.display.Shape.__super__ = browser.display.DisplayObject;
browser.display.Shape.prototype = $extend(browser.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.nmeGraphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && browser.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,nmeGraphics: null
	,graphics: null
	,__class__: browser.display.Shape
	,__properties__: $extend(browser.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
browser.display.SpreadMethod = $hxClasses["browser.display.SpreadMethod"] = { __ename__ : ["browser","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
browser.display.SpreadMethod.REPEAT = ["REPEAT",0];
browser.display.SpreadMethod.REPEAT.toString = $estr;
browser.display.SpreadMethod.REPEAT.__enum__ = browser.display.SpreadMethod;
browser.display.SpreadMethod.REFLECT = ["REFLECT",1];
browser.display.SpreadMethod.REFLECT.toString = $estr;
browser.display.SpreadMethod.REFLECT.__enum__ = browser.display.SpreadMethod;
browser.display.SpreadMethod.PAD = ["PAD",2];
browser.display.SpreadMethod.PAD.toString = $estr;
browser.display.SpreadMethod.PAD.__enum__ = browser.display.SpreadMethod;
browser.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.nmeIsCancelled = false;
	this.nmeIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = browser.events.EventPhase.AT_TARGET;
};
$hxClasses["browser.events.Event"] = browser.events.Event;
browser.events.Event.__name__ = ["browser","events","Event"];
browser.events.Event.prototype = {
	toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,stopPropagation: function() {
		this.nmeIsCancelled = true;
	}
	,stopImmediatePropagation: function() {
		this.nmeIsCancelled = true;
		this.nmeIsCancelledNow = true;
	}
	,nmeSetPhase: function(phase) {
		this.eventPhase = phase;
	}
	,nmeGetIsCancelledNow: function() {
		return this.nmeIsCancelledNow;
	}
	,nmeGetIsCancelled: function() {
		return this.nmeIsCancelled;
	}
	,nmeCreateSimilar: function(type,related,targ) {
		var result = new browser.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,clone: function() {
		return new browser.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,nmeIsCancelledNow: null
	,nmeIsCancelled: null
	,type: null
	,target: null
	,eventPhase: null
	,currentTarget: null
	,cancelable: null
	,bubbles: null
	,__class__: browser.events.Event
}
browser.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["browser.events.MouseEvent"] = browser.events.MouseEvent;
browser.events.MouseEvent.__name__ = ["browser","events","MouseEvent"];
browser.events.MouseEvent.nmeCreate = function(type,event,local,target) {
	var nmeMouseDown = false;
	var delta = 2;
	if(type == browser.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == browser.events.MouseEvent.MOUSE_DOWN) nmeMouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == browser.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) nmeMouseDown = false; else if(event.button != null) {
				if(event.button == 0) nmeMouseDown = false; else nmeMouseDown = false;
			}
		}
	}
	var pseudoEvent = new browser.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,nmeMouseDown,delta);
	pseudoEvent.stageX = browser.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = browser.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
browser.events.MouseEvent.__super__ = browser.events.Event;
browser.events.MouseEvent.prototype = $extend(browser.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,nmeCreateSimilar: function(type,related,targ) {
		var result = new browser.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,delta: null
	,ctrlKey: null
	,clickCount: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: browser.events.MouseEvent
});
browser.display.Stage = function(width,height) {
	browser.display.DisplayObjectContainer.call(this);
	this.nmeFocusObject = null;
	this.nmeWindowWidth = width;
	this.nmeWindowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = browser.display.StageScaleMode.SHOW_ALL;
	this.nmeStageMatrix = new browser.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = browser.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.nmeWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.nmeWindowHeight);
	this.nmePointInPathMode = browser.display.Graphics.nmeDetectIsPointInPathMode();
	this.nmeMouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.nmeTouchInfo = [];
	this.nmeFocusOverObjects = [];
	this.nmeUIEventsQueue = new Array(1000);
	this.nmeUIEventsQueueIndex = 0;
};
$hxClasses["browser.display.Stage"] = browser.display.Stage;
browser.display.Stage.__name__ = ["browser","display","Stage"];
browser.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = browser.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = browser.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = browser.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = browser.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = browser.display.Stage.OrientationPortrait;
	}
	return orientation;
}
browser.display.Stage.__super__ = browser.display.DisplayObjectContainer;
browser.display.Stage.prototype = $extend(browser.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.nmeWindowWidth;
	}
	,get_stageHeight: function() {
		return this.nmeWindowHeight;
	}
	,get_stage: function() {
		return browser.Lib.nmeGetStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.nmeShowDefaultContextMenu && this.nmeShowDefaultContextMenu != null) {
			if(!showDefaultContextMenu) browser.Lib.nmeDisableRightClick(); else browser.Lib.nmeEnableRightClick();
		}
		this.nmeShowDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_showDefaultContextMenu: function() {
		return this.nmeShowDefaultContextMenu;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_quality: function() {
		return this.quality != null?this.quality:browser.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Lib.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Lib.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Lib.window;
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(nmeRequestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) {
			var window = js.Lib.window;
			this.nmeInterval = 1000.0 / speed | 0;
		}
		this.nmeFrameRate = speed;
		this.nmeUpdateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.nmeFrameRate;
	}
	,set_focus: function(inObj) {
		return this.nmeFocusObject = inObj;
	}
	,get_focus: function() {
		return this.nmeFocusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 1:
				browser.Lib.nmeDisableFullScreen();
				break;
			case 0:
				browser.Lib.nmeEnableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_backgroundColor: function(col) {
		return this.nmeBackgroundColour = col;
	}
	,get_backgroundColor: function() {
		return this.nmeBackgroundColour;
	}
	,nmeOnTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var point = new browser.geom.Point(touch.pageX - browser.Lib.mMe.__scr.offsetLeft + window.pageXOffset,touch.pageY - browser.Lib.mMe.__scr.offsetTop + window.pageYOffset);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = browser.events.TouchEvent.nmeCreate(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
			obj.nmeFireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = browser.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = browser.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.nmeDragObject != null) $this.nmeDrag(point);
						$r = browser.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.nmeFireEvent(browser.events.MouseEvent.nmeCreate(mouseType,evt,local,obj));
		} else {
			var evt = browser.events.TouchEvent.nmeCreate(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
		}
	}
	,nmeOnResize: function(inW,inH) {
		this.nmeWindowWidth = inW;
		this.nmeWindowHeight = inH;
		var event = new browser.events.Event(browser.events.Event.RESIZE);
		event.target = this;
		this.nmeBroadcast(event);
	}
	,nmeOnMouse: function(event,type) {
		var point = new browser.geom.Point(event.clientX - browser.Lib.mMe.__scr.offsetLeft + window.pageXOffset,event.clientY - browser.Lib.mMe.__scr.offsetTop + window.pageYOffset);
		if(this.nmeDragObject != null) this.nmeDrag(point);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = browser.events.MouseEvent.nmeCreate(type,event,local,obj);
			this.nmeCheckInOuts(evt,stack);
			if(type == browser.events.MouseEvent.MOUSE_DOWN) this.nmeCheckFocusInOuts(evt,stack);
			obj.nmeFireEvent(evt);
		} else {
			var evt = browser.events.MouseEvent.nmeCreate(type,event,point,null);
			this.nmeCheckInOuts(evt,stack);
			if(type == browser.events.MouseEvent.MOUSE_DOWN) this.nmeCheckFocusInOuts(evt,stack);
		}
	}
	,nmeOnFocus: function(event,hasFocus) {
		if(hasFocus) {
			this.dispatchEvent(new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_IN));
			this.nmeBroadcast(new browser.events.Event(browser.events.Event.ACTIVATE));
		} else {
			this.dispatchEvent(new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_OUT));
			this.nmeBroadcast(new browser.events.Event(browser.events.Event.DEACTIVATE));
		}
	}
	,nmeOnKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var event = new browser.events.KeyboardEvent(pressed?browser.events.KeyboardEvent.KEY_DOWN:browser.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
		this.dispatchEvent(event);
	}
	,nmeHandleOrientationChange: function() {
	}
	,nmeHandleAccelerometer: function(evt) {
		browser.display.Stage.nmeAcceleration.x = evt.accelerationIncludingGravity.x;
		browser.display.Stage.nmeAcceleration.y = evt.accelerationIncludingGravity.y;
		browser.display.Stage.nmeAcceleration.z = evt.accelerationIncludingGravity.z;
	}
	,toString: function() {
		return "[Stage id=" + this._nmeId + "]";
	}
	,nmeUpdateNextWake: function() {
		if(this.nmeFrameRate == 0) {
			var window = js.Lib.window;
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			nmeRequestAnimationFrame($bind(this,this.nmeUpdateNextWake));
			this.nmeStageRender();
		} else {
			var window = js.Lib.window;
			window.clearInterval(this.nmeTimer);
			this.nmeTimer = window.setInterval($bind(this,this.nmeStageRender),this.nmeInterval,[]);
		}
	}
	,nmeStopDrag: function(sprite) {
		this.nmeDragBounds = null;
		this.nmeDragObject = null;
	}
	,nmeStartDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		this.nmeDragBounds = bounds == null?null:bounds.clone();
		this.nmeDragObject = sprite;
		if(this.nmeDragObject != null) {
			var mouse = new browser.geom.Point(this._mouseX,this._mouseY);
			var p = this.nmeDragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.nmeDragOffsetX = this.nmeDragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.nmeDragOffsetY = this.nmeDragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.nmeDragOffsetX = this.nmeDragObject.get_x() - mouse.x;
				this.nmeDragOffsetY = this.nmeDragObject.get_y() - mouse.y;
			}
		}
	}
	,nmeStageRender: function(_) {
		if(!this.nmeStageActive) {
			this.nmeOnResize(this.nmeWindowWidth,this.nmeWindowHeight);
			var event = new browser.events.Event(browser.events.Event.ACTIVATE);
			event.target = this;
			this.nmeBroadcast(event);
			this.nmeStageActive = true;
		}
		var _g1 = 0, _g = this.nmeUIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeUIEventsQueue[i] != null) this.nmeProcessStageEvent(this.nmeUIEventsQueue[i]);
		}
		this.nmeUIEventsQueueIndex = 0;
		var event = new browser.events.Event(browser.events.Event.ENTER_FRAME);
		this.nmeBroadcast(event);
		if(this.nmeInvalid) {
			var event1 = new browser.events.Event(browser.events.Event.RENDER);
			this.nmeBroadcast(event1);
		}
		this.nmeRenderAll();
	}
	,nmeRenderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.nmeRender(canvas);
	}
	,nmeRenderAll: function() {
		this.nmeRender(null,null);
	}
	,nmeQueueStageEvent: function(evt) {
		this.nmeUIEventsQueue[this.nmeUIEventsQueueIndex++] = evt;
	}
	,nmeProcessStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.nmeOnResize(browser.Lib.nmeGetWidth(),browser.Lib.nmeGetHeight());
			break;
		case "focus":
			this.nmeOnFocus(evt,true);
			break;
		case "blur":
			this.nmeOnFocus(evt,false);
			break;
		case "mousemove":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.nmeOnMouse(evt,browser.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.nmeOnMouse(evt,browser.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.nmeOnMouse(evt,browser.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = browser.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = browser.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new browser.display._Stage.TouchInfo();
			this.nmeTouchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			var touchInfo = this.nmeTouchInfo[evt1.changedTouches[0].identifier];
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			var touchInfo = this.nmeTouchInfo[evt1.changedTouches[0].identifier];
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchEnd",touchInfo,true);
			this.nmeTouchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.nmeHandleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.nmeHandleOrientationChange();
			break;
		default:
		}
	}
	,nmeIsOnStage: function() {
		return true;
	}
	,nmeDrag: function(point) {
		var p = this.nmeDragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.nmeDragOffsetX;
		var y = point.y + this.nmeDragOffsetY;
		if(this.nmeDragBounds != null) {
			if(x < this.nmeDragBounds.x) x = this.nmeDragBounds.x; else if(x > this.nmeDragBounds.get_right()) x = this.nmeDragBounds.get_right();
			if(y < this.nmeDragBounds.y) y = this.nmeDragBounds.y; else if(y > this.nmeDragBounds.get_bottom()) y = this.nmeDragBounds.get_bottom();
		}
		this.nmeDragObject.set_x(x);
		this.nmeDragObject.set_y(y);
	}
	,nmeCheckInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.nmeMouseOverObjects:touchInfo.touchOverObjects;
		var changeEvents = touchInfo == null?browser.display.Stage.nmeMouseChanges:browser.display.Stage.nmeTouchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.nmeFireEvent(event.nmeCreateSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.nmeFireEvent(event.nmeCreateSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.nmeCreateSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.nmeCreateSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.nmeMouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,nmeCheckFocusInOuts: function(event,inStack) {
		var new_n = inStack.length;
		var new_obj = new_n > 0?inStack[new_n - 1]:null;
		var old_n = this.nmeFocusOverObjects.length;
		var old_obj = old_n > 0?this.nmeFocusOverObjects[old_n - 1]:null;
		if(new_obj != old_obj) {
			var common = 0;
			while(common < new_n && common < old_n && inStack[common] == this.nmeFocusOverObjects[common]) common++;
			var focusOut = new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_OUT,false,false,new_obj,false,0);
			var i = old_n - 1;
			while(i >= common) {
				this.nmeFocusOverObjects[i].dispatchEvent(focusOut);
				i--;
			}
			var focusIn = new browser.events.FocusEvent(browser.events.FocusEvent.FOCUS_IN,false,false,old_obj,false,0);
			var i1 = new_n - 1;
			while(i1 >= common) {
				inStack[i1].dispatchEvent(focusIn);
				i1--;
			}
			this.nmeFocusOverObjects = inStack;
			this.set_focus(new_obj);
		}
	}
	,invalidate: function() {
		this.nmeInvalid = true;
	}
	,_mouseY: null
	,_mouseX: null
	,nmeWindowHeight: null
	,nmeWindowWidth: null
	,nmeUIEventsQueueIndex: null
	,nmeUIEventsQueue: null
	,nmeTouchInfo: null
	,nmeTimer: null
	,nmeStageMatrix: null
	,nmeStageActive: null
	,nmeShowDefaultContextMenu: null
	,nmeMouseOverObjects: null
	,nmeInvalid: null
	,nmeInterval: null
	,nmeFrameRate: null
	,nmeFocusOverObjects: null
	,nmeFocusObject: null
	,nmeDragOffsetY: null
	,nmeDragOffsetX: null
	,nmeDragObject: null
	,nmeDragBounds: null
	,nmeBackgroundColour: null
	,stageWidth: null
	,stageHeight: null
	,stageFocusRect: null
	,showDefaultContextMenu: null
	,scaleMode: null
	,quality: null
	,nmePointInPathMode: null
	,loaderInfo: null
	,fullScreenWidth: null
	,fullScreenHeight: null
	,frameRate: null
	,focus: null
	,displayState: null
	,backgroundColor: null
	,align: null
	,__class__: browser.display.Stage
	,__properties__: $extend(browser.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
browser.display._Stage = {}
browser.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["browser.display._Stage.TouchInfo"] = browser.display._Stage.TouchInfo;
browser.display._Stage.TouchInfo.__name__ = ["browser","display","_Stage","TouchInfo"];
browser.display._Stage.TouchInfo.prototype = {
	touchOverObjects: null
	,__class__: browser.display._Stage.TouchInfo
}
browser.display.StageAlign = $hxClasses["browser.display.StageAlign"] = { __ename__ : ["browser","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
browser.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
browser.display.StageAlign.TOP_RIGHT.toString = $estr;
browser.display.StageAlign.TOP_RIGHT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
browser.display.StageAlign.TOP_LEFT.toString = $estr;
browser.display.StageAlign.TOP_LEFT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.TOP = ["TOP",2];
browser.display.StageAlign.TOP.toString = $estr;
browser.display.StageAlign.TOP.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.RIGHT = ["RIGHT",3];
browser.display.StageAlign.RIGHT.toString = $estr;
browser.display.StageAlign.RIGHT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.LEFT = ["LEFT",4];
browser.display.StageAlign.LEFT.toString = $estr;
browser.display.StageAlign.LEFT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
browser.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
browser.display.StageAlign.BOTTOM_RIGHT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
browser.display.StageAlign.BOTTOM_LEFT.toString = $estr;
browser.display.StageAlign.BOTTOM_LEFT.__enum__ = browser.display.StageAlign;
browser.display.StageAlign.BOTTOM = ["BOTTOM",7];
browser.display.StageAlign.BOTTOM.toString = $estr;
browser.display.StageAlign.BOTTOM.__enum__ = browser.display.StageAlign;
browser.display.StageDisplayState = $hxClasses["browser.display.StageDisplayState"] = { __ename__ : ["browser","display","StageDisplayState"], __constructs__ : ["FULL_SCREEN","NORMAL"] }
browser.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",0];
browser.display.StageDisplayState.FULL_SCREEN.toString = $estr;
browser.display.StageDisplayState.FULL_SCREEN.__enum__ = browser.display.StageDisplayState;
browser.display.StageDisplayState.NORMAL = ["NORMAL",1];
browser.display.StageDisplayState.NORMAL.toString = $estr;
browser.display.StageDisplayState.NORMAL.__enum__ = browser.display.StageDisplayState;
browser.display.StageQuality = function() { }
$hxClasses["browser.display.StageQuality"] = browser.display.StageQuality;
browser.display.StageQuality.__name__ = ["browser","display","StageQuality"];
browser.display.StageScaleMode = $hxClasses["browser.display.StageScaleMode"] = { __ename__ : ["browser","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
browser.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
browser.display.StageScaleMode.SHOW_ALL.toString = $estr;
browser.display.StageScaleMode.SHOW_ALL.__enum__ = browser.display.StageScaleMode;
browser.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
browser.display.StageScaleMode.NO_SCALE.toString = $estr;
browser.display.StageScaleMode.NO_SCALE.__enum__ = browser.display.StageScaleMode;
browser.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
browser.display.StageScaleMode.NO_BORDER.toString = $estr;
browser.display.StageScaleMode.NO_BORDER.__enum__ = browser.display.StageScaleMode;
browser.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
browser.display.StageScaleMode.EXACT_FIT.toString = $estr;
browser.display.StageScaleMode.EXACT_FIT.__enum__ = browser.display.StageScaleMode;
browser.display.Tilesheet = function(image) {
	this.nmeBitmap = image;
	this.nmeCenterPoints = new Array();
	this.nmeTileRects = new Array();
};
$hxClasses["browser.display.Tilesheet"] = browser.display.Tilesheet;
browser.display.Tilesheet.__name__ = ["browser","display","Tilesheet"];
browser.display.Tilesheet.prototype = {
	drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.nmeTileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new browser.geom.Point();
		this.nmeCenterPoints.push(centerPoint);
	}
	,nmeTileRects: null
	,nmeCenterPoints: null
	,nmeBitmap: null
	,__class__: browser.display.Tilesheet
}
browser.errors = {}
browser.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["browser.errors.Error"] = browser.errors.Error;
browser.errors.Error.__name__ = ["browser","errors","Error"];
browser.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.Stack.toString(haxe.Stack.exceptionStack());
	}
	,name: null
	,message: null
	,errorID: null
	,__class__: browser.errors.Error
}
browser.errors.IOError = function(message) {
	if(message == null) message = "";
	browser.errors.Error.call(this,message);
};
$hxClasses["browser.errors.IOError"] = browser.errors.IOError;
browser.errors.IOError.__name__ = ["browser","errors","IOError"];
browser.errors.IOError.__super__ = browser.errors.Error;
browser.errors.IOError.prototype = $extend(browser.errors.Error.prototype,{
	__class__: browser.errors.IOError
});
browser.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = browser.events.Listener.sIDs++;
};
$hxClasses["browser.events.Listener"] = browser.events.Listener;
browser.events.Listener.__name__ = ["browser","events","Listener"];
browser.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,mUseCapture: null
	,mPriority: null
	,mListner: null
	,mID: null
	,__class__: browser.events.Listener
}
browser.events.EventPhase = function() { }
$hxClasses["browser.events.EventPhase"] = browser.events.EventPhase;
browser.events.EventPhase.__name__ = ["browser","events","EventPhase"];
browser.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["browser.events.FocusEvent"] = browser.events.FocusEvent;
browser.events.FocusEvent.__name__ = ["browser","events","FocusEvent"];
browser.events.FocusEvent.__super__ = browser.events.Event;
browser.events.FocusEvent.prototype = $extend(browser.events.Event.prototype,{
	shiftKey: null
	,relatedObject: null
	,keyCode: null
	,__class__: browser.events.FocusEvent
});
browser.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	browser.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["browser.events.HTTPStatusEvent"] = browser.events.HTTPStatusEvent;
browser.events.HTTPStatusEvent.__name__ = ["browser","events","HTTPStatusEvent"];
browser.events.HTTPStatusEvent.__super__ = browser.events.Event;
browser.events.HTTPStatusEvent.prototype = $extend(browser.events.Event.prototype,{
	status: null
	,responseURL: null
	,responseHeaders: null
	,__class__: browser.events.HTTPStatusEvent
});
browser.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["browser.events.IOErrorEvent"] = browser.events.IOErrorEvent;
browser.events.IOErrorEvent.__name__ = ["browser","events","IOErrorEvent"];
browser.events.IOErrorEvent.__super__ = browser.events.Event;
browser.events.IOErrorEvent.prototype = $extend(browser.events.Event.prototype,{
	text: null
	,__class__: browser.events.IOErrorEvent
});
browser.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey) {
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.charCode = inCharCode == null?0:inCharCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.altKey = inAltKey == null?false:inAltKey;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
};
$hxClasses["browser.events.KeyboardEvent"] = browser.events.KeyboardEvent;
browser.events.KeyboardEvent.__name__ = ["browser","events","KeyboardEvent"];
browser.events.KeyboardEvent.__super__ = browser.events.Event;
browser.events.KeyboardEvent.prototype = $extend(browser.events.Event.prototype,{
	keyLocation: null
	,shiftKey: null
	,ctrlKey: null
	,charCode: null
	,keyCode: null
	,altKey: null
	,__class__: browser.events.KeyboardEvent
});
browser.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["browser.events.ProgressEvent"] = browser.events.ProgressEvent;
browser.events.ProgressEvent.__name__ = ["browser","events","ProgressEvent"];
browser.events.ProgressEvent.__super__ = browser.events.Event;
browser.events.ProgressEvent.prototype = $extend(browser.events.Event.prototype,{
	bytesTotal: null
	,bytesLoaded: null
	,__class__: browser.events.ProgressEvent
});
browser.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	browser.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["browser.events.TouchEvent"] = browser.events.TouchEvent;
browser.events.TouchEvent.__name__ = ["browser","events","TouchEvent"];
browser.events.TouchEvent.nmeCreate = function(type,event,touch,local,target) {
	var evt = new browser.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = browser.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = browser.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
browser.events.TouchEvent.__super__ = browser.events.Event;
browser.events.TouchEvent.prototype = $extend(browser.events.Event.prototype,{
	nmeCreateSimilar: function(type,related,targ) {
		var result = new browser.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,touchPointID: null
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,isPrimaryTouchPoint: null
	,delta: null
	,ctrlKey: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: browser.events.TouchEvent
});
browser.filters = {}
browser.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["browser.filters.BitmapFilter"] = browser.filters.BitmapFilter;
browser.filters.BitmapFilter.__name__ = ["browser","filters","BitmapFilter"];
browser.filters.BitmapFilter.prototype = {
	nmeApplyFilter: function(surface,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,nmePreFilter: function(surface) {
	}
	,clone: function() {
		throw "Implement in subclass. BitmapFilter::clone";
		return null;
	}
	,_nmeCached: null
	,_mType: null
	,__class__: browser.filters.BitmapFilter
}
browser.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	browser.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this._nmeCached = false;
};
$hxClasses["browser.filters.DropShadowFilter"] = browser.filters.DropShadowFilter;
browser.filters.DropShadowFilter.__name__ = ["browser","filters","DropShadowFilter"];
browser.filters.DropShadowFilter.__super__ = browser.filters.BitmapFilter;
browser.filters.DropShadowFilter.prototype = $extend(browser.filters.BitmapFilter.prototype,{
	nmeApplyFilter: function(surface,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this._nmeCached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "#" + StringTools.hex(this.color,6);
			this._nmeCached = true;
		}
	}
	,clone: function() {
		return new browser.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,strength: null
	,quality: null
	,knockout: null
	,inner: null
	,hideObject: null
	,distance: null
	,color: null
	,blurY: null
	,blurX: null
	,angle: null
	,alpha: null
	,__class__: browser.filters.DropShadowFilter
});
browser.filters.GlowFilter = function(in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout) {
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 6.0;
	if(in_blurX == null) in_blurX = 6.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	browser.filters.DropShadowFilter.call(this,0,0,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,false);
};
$hxClasses["browser.filters.GlowFilter"] = browser.filters.GlowFilter;
browser.filters.GlowFilter.__name__ = ["browser","filters","GlowFilter"];
browser.filters.GlowFilter.__super__ = browser.filters.DropShadowFilter;
browser.filters.GlowFilter.prototype = $extend(browser.filters.DropShadowFilter.prototype,{
	__class__: browser.filters.GlowFilter
});
browser.geom = {}
browser.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
$hxClasses["browser.geom.ColorTransform"] = browser.geom.ColorTransform;
browser.geom.ColorTransform.__name__ = ["browser","geom","ColorTransform"];
browser.geom.ColorTransform.prototype = {
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,redOffset: null
	,redMultiplier: null
	,greenOffset: null
	,greenMultiplier: null
	,color: null
	,blueOffset: null
	,blueMultiplier: null
	,alphaOffset: null
	,alphaMultiplier: null
	,__class__: browser.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
browser.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["browser.geom.Matrix"] = browser.geom.Matrix;
browser.geom.Matrix.__name__ = ["browser","geom","Matrix"];
browser.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new browser.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new browser.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g = this;
		_g.set_ty(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,nmeTranslateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,nmeTransformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,nmeTransformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new browser.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,_sy: null
	,_sx: null
	,ty: null
	,tx: null
	,d: null
	,c: null
	,b: null
	,a: null
	,__class__: browser.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
browser.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["browser.geom.Point"] = browser.geom.Point;
browser.geom.Point.__name__ = ["browser","geom","Point"];
browser.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
browser.geom.Point.interpolate = function(pt1,pt2,f) {
	return new browser.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
browser.geom.Point.polar = function(len,angle) {
	return new browser.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
browser.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new browser.geom.Point(this.x - v.x,this.y - v.y);
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) this.x = thickness; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new browser.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new browser.geom.Point(v.x + this.x,v.y + this.y);
	}
	,y: null
	,x: null
	,length: null
	,__class__: browser.geom.Point
	,__properties__: {get_length:"get_length"}
}
browser.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["browser.geom.Rectangle"] = browser.geom.Rectangle;
browser.geom.Rectangle.__name__ = ["browser","geom","Rectangle"];
browser.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new browser.geom.Point(this.x,this.y);
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new browser.geom.Point(this.width,this.height);
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new browser.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x?toUnion.x:this.x;
		var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
		var y0 = this.y > toUnion.y?toUnion.y:this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
		return new browser.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new browser.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,isEmpty: function() {
		return this.width == 0 && this.height == 0;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return false;
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		return y1 > y0;
	}
	,intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return new browser.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new browser.geom.Rectangle();
		return new browser.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,containsRect: function(rect) {
		return this.contains(rect.x,rect.y) && this.containsPoint(rect.get_bottomRight());
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new browser.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,y: null
	,x: null
	,width: null
	,topLeft: null
	,top: null
	,size: null
	,right: null
	,left: null
	,height: null
	,bottomRight: null
	,bottom: null
	,__class__: browser.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
browser.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new browser.geom.Matrix();
	this._fullMatrix = new browser.geom.Matrix();
	this.set_colorTransform(new browser.geom.ColorTransform());
};
$hxClasses["browser.geom.Transform"] = browser.geom.Transform;
browser.geom.Transform.__name__ = ["browser","geom","Transform"];
browser.geom.Transform.prototype = {
	get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.nmeMatrixOverridden();
		return this._matrix;
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,nmeSetMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,nmeSetFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,nmeGetFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,_matrix: null
	,_fullMatrix: null
	,_displayObject: null
	,pixelBounds: null
	,matrix: null
	,colorTransform: null
	,__class__: browser.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
browser.media = {}
browser.media.Sound = function(stream,context) {
	browser.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.nmeSoundChannels = new IntHash();
	this.nmeSoundIdx = 0;
	if(stream != null) this.load(stream,context);
};
$hxClasses["browser.media.Sound"] = browser.media.Sound;
browser.media.Sound.__name__ = ["browser","media","Sound"];
browser.media.Sound.nmeCanPlayMime = function(mime) {
	var audio = js.Lib.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	return playable(audio.canPlayType(mime));
}
browser.media.Sound.nmeCanPlayType = function(extension) {
	var mime = browser.media.Sound.nmeMimeForExtension(extension);
	if(mime == null) return false;
	return browser.media.Sound.nmeCanPlayMime(mime);
}
browser.media.Sound.nmeMimeForExtension = function(extension) {
	var mime = null;
	switch(extension) {
	case "mp3":
		mime = "audio/mpeg";
		break;
	case "ogg":
		mime = "audio/ogg; codecs=\"vorbis\"";
		break;
	case "wav":
		mime = "audio/wav; codecs=\"1\"";
		break;
	case "aac":
		mime = "audio/mp4; codecs=\"mp4a.40.2\"";
		break;
	default:
		mime = null;
	}
	return mime;
}
browser.media.Sound.__super__ = browser.events.EventDispatcher;
browser.media.Sound.prototype = $extend(browser.events.EventDispatcher.prototype,{
	nmeOnSoundLoaded: function(evt) {
		this.nmeRemoveEventListeners();
		var evt1 = new browser.events.Event(browser.events.Event.COMPLETE);
		this.dispatchEvent(evt1);
	}
	,nmeOnSoundLoadError: function(evt) {
		this.nmeRemoveEventListeners();
		haxe.Log.trace("Error loading sound '" + this.nmeStreamUrl + "'",{ fileName : "Sound.hx", lineNumber : 204, className : "browser.media.Sound", methodName : "nmeOnSoundLoadError"});
		var evt1 = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
		this.dispatchEvent(evt1);
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(this.nmeStreamUrl == null) return null;
		var self = this;
		var curIdx = this.nmeSoundIdx;
		var removeRef = function() {
			self.nmeSoundChannels.remove(curIdx);
		};
		var channel = browser.media.SoundChannel.nmeCreate(this.nmeStreamUrl,startTime,loops,sndTransform,removeRef);
		this.nmeSoundChannels.set(curIdx,channel);
		this.nmeSoundIdx++;
		var audio = channel.nmeAudio;
		return channel;
	}
	,nmeRemoveEventListeners: function() {
		this.nmeSoundCache.removeEventListener(browser.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded),false);
		this.nmeSoundCache.removeEventListener(browser.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError),false);
	}
	,nmeLoad: function(stream,context,mime) {
		if(mime == null) mime = "";
		if(mime == null) {
			var url = stream.url.split("?");
			var extension = HxOverrides.substr(url[0],url[0].lastIndexOf(".") + 1,null);
			mime = browser.media.Sound.nmeMimeForExtension(extension);
		}
		if(mime == null || !browser.media.Sound.nmeCanPlayMime(mime)) haxe.Log.trace("Warning: '" + stream.url + "' with type '" + mime + "' may not play on this browser.",{ fileName : "Sound.hx", lineNumber : 118, className : "browser.media.Sound", methodName : "nmeLoad"});
		this.nmeStreamUrl = stream.url;
		try {
			this.nmeSoundCache = new browser.net.URLLoader();
			this.nmeAddEventListeners();
			this.nmeSoundCache.load(stream);
		} catch( e ) {
			haxe.Log.trace("Warning: Could not preload '" + stream.url + "'",{ fileName : "Sound.hx", lineNumber : 133, className : "browser.media.Sound", methodName : "nmeLoad"});
		}
	}
	,nmeAddEventListeners: function() {
		this.nmeSoundCache.addEventListener(browser.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded));
		this.nmeSoundCache.addEventListener(browser.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError));
	}
	,load: function(stream,context) {
		this.nmeLoad(stream,context);
	}
	,close: function() {
	}
	,nmeStreamUrl: null
	,nmeSoundIdx: null
	,nmeSoundChannels: null
	,nmeSoundCache: null
	,url: null
	,length: null
	,isBuffering: null
	,id3: null
	,bytesTotal: null
	,bytesLoaded: null
	,__class__: browser.media.Sound
});
browser.media.SoundChannel = function() {
	browser.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.nmeAudioCurrentLoop = 1;
	this.nmeAudioTotalLoops = 1;
};
$hxClasses["browser.media.SoundChannel"] = browser.media.SoundChannel;
browser.media.SoundChannel.__name__ = ["browser","media","SoundChannel"];
browser.media.SoundChannel.nmeCreate = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new browser.media.SoundChannel();
	channel.nmeAudio = js.Lib.document.createElement("audio");
	channel.nmeRemoveRef = removeRef;
	channel.nmeAudio.addEventListener("ended",$bind(channel,channel.__onSoundChannelFinished),false);
	channel.nmeAudio.addEventListener("seeked",$bind(channel,channel.__onSoundSeeked),false);
	channel.nmeAudio.addEventListener("stalled",$bind(channel,channel.__onStalled),false);
	channel.nmeAudio.addEventListener("progress",$bind(channel,channel.__onProgress),false);
	if(loops > 0) {
		channel.nmeAudioTotalLoops = loops;
		channel.nmeAudio.loop = true;
	}
	channel.nmeStartTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.nmeAudio.currentTime = channel.nmeStartTime;
			channel.nmeAudio.play();
			channel.nmeAudio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.nmeAudio.addEventListener("canplaythrough",onLoad,false);
	} else channel.nmeAudio.autoplay = true;
	channel.nmeAudio.src = src;
	return channel;
}
browser.media.SoundChannel.__super__ = browser.events.EventDispatcher;
browser.media.SoundChannel.prototype = $extend(browser.events.EventDispatcher.prototype,{
	set_soundTransform: function(v) {
		this.nmeAudio.volume = v.volume;
		return this.soundTransform = v;
	}
	,__onStalled: function(evt) {
		haxe.Log.trace("sound stalled",{ fileName : "SoundChannel.hx", lineNumber : 170, className : "browser.media.SoundChannel", methodName : "__onStalled"});
		if(this.nmeAudio != null) this.nmeAudio.load();
	}
	,__onSoundSeeked: function(evt) {
		if(this.nmeAudioCurrentLoop >= this.nmeAudioTotalLoops) {
			this.nmeAudio.loop = false;
			this.stop();
		} else this.nmeAudioCurrentLoop++;
	}
	,__onSoundChannelFinished: function(evt) {
		if(this.nmeAudioCurrentLoop >= this.nmeAudioTotalLoops) {
			this.nmeAudio.removeEventListener("ended",$bind(this,this.__onSoundChannelFinished),false);
			this.nmeAudio.removeEventListener("seeked",$bind(this,this.__onSoundSeeked),false);
			this.nmeAudio.removeEventListener("stalled",$bind(this,this.__onStalled),false);
			this.nmeAudio.removeEventListener("progress",$bind(this,this.__onProgress),false);
			this.nmeAudio = null;
			var evt1 = new browser.events.Event(browser.events.Event.COMPLETE);
			evt1.target = this;
			this.dispatchEvent(evt1);
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		} else {
			this.nmeAudio.currentTime = this.nmeStartTime;
			this.nmeAudio.play();
		}
	}
	,__onProgress: function(evt) {
		haxe.Log.trace("sound progress: " + Std.string(evt),{ fileName : "SoundChannel.hx", lineNumber : 116, className : "browser.media.SoundChannel", methodName : "__onProgress"});
	}
	,stop: function() {
		if(this.nmeAudio != null) {
			this.nmeAudio.pause();
			this.nmeAudio = null;
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		}
	}
	,nmeStartTime: null
	,nmeRemoveRef: null
	,nmeAudioTotalLoops: null
	,nmeAudioCurrentLoop: null
	,soundTransform: null
	,rightPeak: null
	,position: null
	,nmeAudio: null
	,leftPeak: null
	,ChannelId: null
	,__class__: browser.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform"}
});
browser.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["browser.media.SoundLoaderContext"] = browser.media.SoundLoaderContext;
browser.media.SoundLoaderContext.__name__ = ["browser","media","SoundLoaderContext"];
browser.media.SoundLoaderContext.prototype = {
	checkPolicyFile: null
	,bufferTime: null
	,__class__: browser.media.SoundLoaderContext
}
browser.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
};
$hxClasses["browser.media.SoundTransform"] = browser.media.SoundTransform;
browser.media.SoundTransform.__name__ = ["browser","media","SoundTransform"];
browser.media.SoundTransform.prototype = {
	volume: null
	,rightToRight: null
	,rightToLeft: null
	,pan: null
	,leftToRight: null
	,leftToLeft: null
	,__class__: browser.media.SoundTransform
}
browser.net = {}
browser.net.SharedObject = function() {
	browser.events.EventDispatcher.call(this);
};
$hxClasses["browser.net.SharedObject"] = browser.net.SharedObject;
browser.net.SharedObject.__name__ = ["browser","net","SharedObject"];
browser.net.SharedObject.getLocal = function(name,localPath,secure) {
	if(secure == null) secure = false;
	if(localPath == null) localPath = js.Lib.window.location.href;
	var so = new browser.net.SharedObject();
	so.nmeKey = localPath + ":" + name;
	var rawData = null;
	try {
		var rawData1 = browser.net.SharedObject.nmeGetLocalStorage().getItem(so.nmeKey);
	} catch( e ) {
	}
	so.data = { };
	if(rawData != null && rawData != "") {
		var unserializer = new haxe.Unserializer(rawData);
		unserializer.setResolver({ resolveEnum : Type.resolveEnum, resolveClass : browser.net.SharedObject.resolveClass});
		so.data = unserializer.unserialize();
	}
	if(so.data == null) so.data = { };
	return so;
}
browser.net.SharedObject.nmeGetLocalStorage = function() {
	var res = (function($this) {
		var $r;
		var s;
		try {
			s = window.localStorage;
			s.getItem("");
		} catch( e ) {
			s = null;
		}
		$r = s;
		return $r;
	}(this));
	if(res == null) throw new browser.errors.Error("SharedObject not supported");
	return res;
}
browser.net.SharedObject.resolveClass = function(name) {
	if(name != null) return Type.resolveClass(StringTools.replace(name,"jeash.","browser."));
	return null;
}
browser.net.SharedObject.__super__ = browser.events.EventDispatcher;
browser.net.SharedObject.prototype = $extend(browser.events.EventDispatcher.prototype,{
	get_size: function() {
		var d = haxe.Serializer.run(this.data);
		return haxe.io.Bytes.ofString(d).length;
	}
	,flush: function() {
		var data = haxe.Serializer.run(this.data);
		try {
			browser.net.SharedObject.nmeGetLocalStorage().removeItem(this.nmeKey);
			browser.net.SharedObject.nmeGetLocalStorage().setItem(this.nmeKey,data);
		} catch( e ) {
			return browser.net.SharedObjectFlushStatus.PENDING;
		}
		return browser.net.SharedObjectFlushStatus.FLUSHED;
	}
	,clear: function() {
		this.data = { };
		try {
			browser.net.SharedObject.nmeGetLocalStorage().removeItem(this.nmeKey);
		} catch( e ) {
		}
		this.flush();
	}
	,nmeKey: null
	,size: null
	,data: null
	,__class__: browser.net.SharedObject
	,__properties__: {get_size:"get_size"}
});
browser.net.SharedObjectFlushStatus = $hxClasses["browser.net.SharedObjectFlushStatus"] = { __ename__ : ["browser","net","SharedObjectFlushStatus"], __constructs__ : ["FLUSHED","PENDING"] }
browser.net.SharedObjectFlushStatus.FLUSHED = ["FLUSHED",0];
browser.net.SharedObjectFlushStatus.FLUSHED.toString = $estr;
browser.net.SharedObjectFlushStatus.FLUSHED.__enum__ = browser.net.SharedObjectFlushStatus;
browser.net.SharedObjectFlushStatus.PENDING = ["PENDING",1];
browser.net.SharedObjectFlushStatus.PENDING.toString = $estr;
browser.net.SharedObjectFlushStatus.PENDING.__enum__ = browser.net.SharedObjectFlushStatus;
browser.net.URLLoader = function(request) {
	browser.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.dataFormat = browser.net.URLLoaderDataFormat.TEXT;
	if(request != null) this.load(request);
};
$hxClasses["browser.net.URLLoader"] = browser.net.URLLoader;
browser.net.URLLoader.__name__ = ["browser","net","URLLoader"];
browser.net.URLLoader.__super__ = browser.events.EventDispatcher;
browser.net.URLLoader.prototype = $extend(browser.events.EventDispatcher.prototype,{
	onStatus: function(status) {
		var evt = new browser.events.HTTPStatusEvent(browser.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new browser.events.ProgressEvent(browser.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new browser.events.Event(browser.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new browser.events.IOErrorEvent(browser.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		switch( (this.dataFormat)[1] ) {
		case 0:
			this.data = browser.utils.ByteArray.nmeOfBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new browser.events.Event(browser.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,browser.utils.ByteArray)) {
			var data1 = data;
			switch( (this.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,browser.net.URLVariables)) {
			var data1 = data;
			var _g = 0, _g1 = Reflect.fields(data1);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(Reflect.field(data1,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		switch( (this.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g = 0;
		while(_g < requestHeaders.length) {
			var header = requestHeaders[_g];
			++_g;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = subject.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		switch( (this.dataFormat)[1] ) {
		case 0:
			request.requestHeaders.push(new browser.net.URLRequestHeader("Content-Type","application/octet-stream"));
			break;
		default:
			if(request.method != "GET") request.requestHeaders.push(new browser.net.URLRequestHeader("Content-Type","application/x-www-form-urlencoded"));
		}
		this.requestUrl(request.url,request.method,request.data,request.requestHeaders);
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,dataFormat: null
	,data: null
	,bytesTotal: null
	,bytesLoaded: null
	,__class__: browser.net.URLLoader
});
browser.net.URLLoaderDataFormat = $hxClasses["browser.net.URLLoaderDataFormat"] = { __ename__ : ["browser","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] }
browser.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
browser.net.URLLoaderDataFormat.BINARY.toString = $estr;
browser.net.URLLoaderDataFormat.BINARY.__enum__ = browser.net.URLLoaderDataFormat;
browser.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
browser.net.URLLoaderDataFormat.TEXT.toString = $estr;
browser.net.URLLoaderDataFormat.TEXT.__enum__ = browser.net.URLLoaderDataFormat;
browser.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
browser.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
browser.net.URLLoaderDataFormat.VARIABLES.__enum__ = browser.net.URLLoaderDataFormat;
browser.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = browser.net.URLRequestMethod.GET;
	this.contentType = "application/x-www-form-urlencoded";
};
$hxClasses["browser.net.URLRequest"] = browser.net.URLRequest;
browser.net.URLRequest.__name__ = ["browser","net","URLRequest"];
browser.net.URLRequest.prototype = {
	url: null
	,requestHeaders: null
	,method: null
	,data: null
	,contentType: null
	,__class__: browser.net.URLRequest
}
browser.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["browser.net.URLRequestHeader"] = browser.net.URLRequestHeader;
browser.net.URLRequestHeader.__name__ = ["browser","net","URLRequestHeader"];
browser.net.URLRequestHeader.prototype = {
	value: null
	,name: null
	,__class__: browser.net.URLRequestHeader
}
browser.net.URLRequestMethod = function() { }
$hxClasses["browser.net.URLRequestMethod"] = browser.net.URLRequestMethod;
browser.net.URLRequestMethod.__name__ = ["browser","net","URLRequestMethod"];
browser.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["browser.net.URLVariables"] = browser.net.URLVariables;
browser.net.URLVariables.__name__ = ["browser","net","URLVariables"];
browser.net.URLVariables.prototype = {
	toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(StringTools.urlEncode(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g = 0;
		while(_g < fields1.length) {
			var f = fields1[_g];
			++_g;
			var eq = f.indexOf("=");
			if(eq > 0) this[StringTools.urlDecode(HxOverrides.substr(f,0,eq))] = StringTools.urlDecode(HxOverrides.substr(f,eq + 1,null)); else if(eq != 0) this[StringTools.urlDecode(f)] = "";
		}
	}
	,__class__: browser.net.URLVariables
}
browser.system = {}
browser.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["browser.system.LoaderContext"] = browser.system.LoaderContext;
browser.system.LoaderContext.__name__ = ["browser","system","LoaderContext"];
browser.system.LoaderContext.prototype = {
	securityDomain: null
	,applicationDomain: null
	,checkPolicyFile: null
	,__class__: browser.system.LoaderContext
}
browser.system.System = function() { }
$hxClasses["browser.system.System"] = browser.system.System;
browser.system.System.__name__ = ["browser","system","System"];
browser.system.System.__properties__ = {get_vmVersion:"get_vmVersion",get_totalMemory:"get_totalMemory"}
browser.system.System.totalMemory = null;
browser.system.System.vmVersion = null;
browser.system.System.exit = function(code) {
	throw "System.exit is currently not supported for HTML5";
}
browser.system.System.gc = function() {
}
browser.system.System.pause = function() {
	throw "System.pause is currently not supported for HTML5";
}
browser.system.System.resume = function() {
	throw "System.resume is currently not supported for HTML5";
}
browser.system.System.setClipboard = function(string) {
	throw "System.setClipboard is currently not supported for HTML5";
}
browser.system.System.get_totalMemory = function() {
	return 0;
}
browser.system.System.get_vmVersion = function() {
	return "nme - tip";
}
browser.text.FontStyle = $hxClasses["browser.text.FontStyle"] = { __ename__ : ["browser","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
browser.text.FontStyle.REGULAR = ["REGULAR",0];
browser.text.FontStyle.REGULAR.toString = $estr;
browser.text.FontStyle.REGULAR.__enum__ = browser.text.FontStyle;
browser.text.FontStyle.ITALIC = ["ITALIC",1];
browser.text.FontStyle.ITALIC.toString = $estr;
browser.text.FontStyle.ITALIC.__enum__ = browser.text.FontStyle;
browser.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
browser.text.FontStyle.BOLD_ITALIC.toString = $estr;
browser.text.FontStyle.BOLD_ITALIC.__enum__ = browser.text.FontStyle;
browser.text.FontStyle.BOLD = ["BOLD",3];
browser.text.FontStyle.BOLD.toString = $estr;
browser.text.FontStyle.BOLD.__enum__ = browser.text.FontStyle;
browser.text.FontType = $hxClasses["browser.text.FontType"] = { __ename__ : ["browser","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] }
browser.text.FontType.EMBEDDED = ["EMBEDDED",0];
browser.text.FontType.EMBEDDED.toString = $estr;
browser.text.FontType.EMBEDDED.__enum__ = browser.text.FontType;
browser.text.FontType.DEVICE = ["DEVICE",1];
browser.text.FontType.DEVICE.toString = $estr;
browser.text.FontType.DEVICE.__enum__ = browser.text.FontType;
browser.text.TextField = function() {
	browser.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.nmeGraphics = new browser.display.Graphics();
	this.mFace = browser.text.TextField.mDefaultFont;
	this.mAlign = browser.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.mScrollH = 0;
	this.mScrollV = 1;
	this.mType = browser.text.TextFieldType.DYNAMIC;
	this.set_autoSize("NONE");
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.nmeInputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new browser.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
};
$hxClasses["browser.text.TextField"] = browser.text.TextField;
browser.text.TextField.__name__ = ["browser","text","TextField"];
browser.text.TextField.__super__ = browser.display.InteractiveObject;
browser.text.TextField.prototype = $extend(browser.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.wordWrap;
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.nmeInvalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.nmeInputEnabled = this.mType == browser.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.nmeInputEnabled) browser.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true); else browser.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,false);
		} else if(this.nmeInputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			browser.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true);
		}
		this.tabEnabled = this.get_type() == browser.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_type: function() {
		return this.mType;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_text: function(inText) {
		this.mText = Std.string(inText);
		this.mHTMLMode = false;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.mText;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Lib.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new browser.display.Graphics(wrapper);
			var nmeSurface = this.nmeGraphics.nmeSurface;
			if(browser.Lib.nmeIsOnStage(nmeSurface)) {
				browser.Lib.nmeAppendSurface(wrapper);
				browser.Lib.nmeCopyStyle(nmeSurface,wrapper);
				browser.Lib.nmeSwapSurface(nmeSurface,wrapper);
				browser.Lib.nmeRemoveSurface(nmeSurface);
			}
			this.nmeGraphics = destination;
			this.nmeGraphics.nmeExtent.width = wrapper.width;
			this.nmeGraphics.nmeExtent.height = wrapper.height;
		} else this.nmeGraphics.nmeSurface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.mHTMLText;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.nmeInvalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this._nmeId + "]";
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.getTextFormat();
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != "NONE") {
				this.mScrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.mScrollH;
				if(insert_x < 0) this.mScrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.mScrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.mScrollH < 0) this.mScrollH = 0;
			}
		}
		if(this.autoSize == "NONE" && w <= this.mLimitRenderX) {
			if(inAlign == browser.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == browser.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.mScrollH;
		var x0 = x;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			var adv = chr.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr.font;
				if(chr.sel) {
					this.nmeGraphics.lineStyle();
					this.nmeGraphics.beginFill(2105440);
					this.nmeGraphics.drawRect(x,inY,adv,full_height);
					this.nmeGraphics.endFill();
					if(cache_normal_font == chr.font) font = cache_sel_font; else {
						font = browser.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.nmeGraphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.mScrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = browser.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,Rebuild: function() {
		if(this.mHTMLMode) return;
		this.mLineInfo = [];
		this.nmeGraphics.clear();
		if(this.background) {
			this.nmeGraphics.beginFill(this.backgroundColor);
			this.nmeGraphics.drawRect(0,0,this.get_width(),this.get_height());
			this.nmeGraphics.endFill();
		}
		this.nmeGraphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap = this.mLimitRenderX = this.wordWrap && !this.nmeInputEnabled?this.mWidth | 0:999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0, _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.nmeGetAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		switch(this.autoSize) {
		case "LEFT":
			break;
		case "RIGHT":
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case "CENTER":
			var x0 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x0);
			break;
		default:
			if(this.wordWrap) this.set_height(h);
		}
		if(this.border) {
			this.nmeGraphics.endFill();
			this.nmeGraphics.lineStyle(1,this.borderColor,1,true);
			this.nmeGraphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.nmeGraphics.nmeRender(inMask,this.nmeFilters,1,1)) {
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.nmeGraphics);
			browser.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.nmeGraphics);
				browser.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			browser.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return browser.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new browser.text.TextFormat();
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0, _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0, _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,_defaultTextFormat: null
	,nmeInputEnabled: null
	,nmeGraphics: null
	,mWidth: null
	,mType: null
	,mTextColour: null
	,mText: null
	,mSelectDrag: null
	,mSelStart: null
	,mSelEnd: null
	,mSelectionAnchored: null
	,mSelectionAnchor: null
	,mScrollV: null
	,mScrollH: null
	,mMaxWidth: null
	,mMaxHeight: null
	,mLineInfo: null
	,mLimitRenderX: null
	,mInsertPos: null
	,mHTMLMode: null
	,mHTMLText: null
	,mHeight: null
	,mAlign: null
	,wordWrap: null
	,type: null
	,textWidth: null
	,textHeight: null
	,textColor: null
	,text: null
	,sharpness: null
	,selectionEndIndex: null
	,selectionBeginIndex: null
	,selectable: null
	,restrict: null
	,multiline: null
	,mTryFreeType: null
	,mTextHeight: null
	,mParagraphs: null
	,mFace: null
	,mDownChar: null
	,maxChars: null
	,length: null
	,htmlText: null
	,gridFitType: null
	,embedFonts: null
	,displayAsPassword: null
	,defaultTextFormat: null
	,caretPos: null
	,caretIndex: null
	,borderColor: null
	,border: null
	,backgroundColor: null
	,background: null
	,autoSize: null
	,antiAliasType: null
	,__class__: browser.text.TextField
	,__properties__: $extend(browser.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap"})
});
browser.text.FontInstanceMode = $hxClasses["browser.text.FontInstanceMode"] = { __ename__ : ["browser","text","FontInstanceMode"], __constructs__ : ["fimSolid"] }
browser.text.FontInstanceMode.fimSolid = ["fimSolid",0];
browser.text.FontInstanceMode.fimSolid.toString = $estr;
browser.text.FontInstanceMode.fimSolid.__enum__ = browser.text.FontInstanceMode;
browser.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["browser.text.FontInstance"] = browser.text.FontInstance;
browser.text.FontInstance.__name__ = ["browser","text","FontInstance"];
browser.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = browser.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new browser.text.Font();
	font.nmeSetScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new browser.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	browser.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
browser.text.FontInstance.prototype = {
	get_height: function() {
		return this.mHeight;
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.nmeClearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.nmeRender(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = browser.text.FontInstanceMode.fimSolid;
	}
	,nmeGetAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.nmeGetAdvance(inChar,this.mHeight);
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,mCacheAsBitmap: null
	,mGlyphs: null
	,mHeight: null
	,mFont: null
	,mAlpha: null
	,mColour: null
	,mMode: null
	,mTryFreeType: null
	,height: null
	,__class__: browser.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
browser.text.TextFieldAutoSize = function() {
};
$hxClasses["browser.text.TextFieldAutoSize"] = browser.text.TextFieldAutoSize;
browser.text.TextFieldAutoSize.__name__ = ["browser","text","TextFieldAutoSize"];
browser.text.TextFieldAutoSize.prototype = {
	__class__: browser.text.TextFieldAutoSize
}
browser.text.TextFieldType = function() {
};
$hxClasses["browser.text.TextFieldType"] = browser.text.TextFieldType;
browser.text.TextFieldType.__name__ = ["browser","text","TextFieldType"];
browser.text.TextFieldType.prototype = {
	__class__: browser.text.TextFieldType
}
browser.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["browser.text.TextFormat"] = browser.text.TextFormat;
browser.text.TextFormat.__name__ = ["browser","text","TextFormat"];
browser.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new browser.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,url: null
	,underline: null
	,target: null
	,tabStops: null
	,size: null
	,rightMargin: null
	,letterSpacing: null
	,leftMargin: null
	,leading: null
	,kerning: null
	,italic: null
	,indent: null
	,font: null
	,display: null
	,color: null
	,bullet: null
	,bold: null
	,blockIndent: null
	,align: null
	,__class__: browser.text.TextFormat
}
browser.text.TextFormatAlign = $hxClasses["browser.text.TextFormatAlign"] = { __ename__ : ["browser","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
browser.text.TextFormatAlign.LEFT = ["LEFT",0];
browser.text.TextFormatAlign.LEFT.toString = $estr;
browser.text.TextFormatAlign.LEFT.__enum__ = browser.text.TextFormatAlign;
browser.text.TextFormatAlign.RIGHT = ["RIGHT",1];
browser.text.TextFormatAlign.RIGHT.toString = $estr;
browser.text.TextFormatAlign.RIGHT.__enum__ = browser.text.TextFormatAlign;
browser.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
browser.text.TextFormatAlign.JUSTIFY.toString = $estr;
browser.text.TextFormatAlign.JUSTIFY.__enum__ = browser.text.TextFormatAlign;
browser.text.TextFormatAlign.CENTER = ["CENTER",3];
browser.text.TextFormatAlign.CENTER.toString = $estr;
browser.text.TextFormatAlign.CENTER.__enum__ = browser.text.TextFormatAlign;
browser.ui = {}
browser.ui.Keyboard = function() { }
$hxClasses["browser.ui.Keyboard"] = browser.ui.Keyboard;
browser.ui.Keyboard.__name__ = ["browser","ui","Keyboard"];
browser.ui.Keyboard.capsLock = null;
browser.ui.Keyboard.numLock = null;
browser.ui.Keyboard.isAccessible = function() {
	return false;
}
browser.ui.Keyboard.nmeConvertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
}
browser.ui.Keyboard.nmeConvertWebkitCode = function(code) {
	switch(code.toLowerCase()) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
}
browser.ui.Mouse = function() {
};
$hxClasses["browser.ui.Mouse"] = browser.ui.Mouse;
browser.ui.Mouse.__name__ = ["browser","ui","Mouse"];
browser.ui.Mouse.hide = function() {
}
browser.ui.Mouse.show = function() {
}
browser.ui.Mouse.prototype = {
	__class__: browser.ui.Mouse
}
browser.ui.Multitouch = function() { }
$hxClasses["browser.ui.Multitouch"] = browser.ui.Multitouch;
browser.ui.Multitouch.__name__ = ["browser","ui","Multitouch"];
browser.ui.Multitouch.__properties__ = {get_supportsTouchEvents:"get_supportsTouchEvents",set_inputMode:"set_inputMode",get_inputMode:"get_inputMode"}
browser.ui.Multitouch.inputMode = null;
browser.ui.Multitouch.maxTouchPoints = null;
browser.ui.Multitouch.supportedGestures = null;
browser.ui.Multitouch.supportsGestureEvents = null;
browser.ui.Multitouch.supportsTouchEvents = null;
browser.ui.Multitouch.get_inputMode = function() {
	return browser.ui.MultitouchInputMode.TOUCH_POINT;
}
browser.ui.Multitouch.set_inputMode = function(inMode) {
	if(inMode == browser.ui.MultitouchInputMode.GESTURE) return browser.ui.Multitouch.get_inputMode();
	return inMode;
}
browser.ui.Multitouch.get_supportsTouchEvents = function() {
	var supported = Reflect.hasField(js.Lib.window,"ontouchstart");
	return supported;
}
browser.ui.MultitouchInputMode = $hxClasses["browser.ui.MultitouchInputMode"] = { __ename__ : ["browser","ui","MultitouchInputMode"], __constructs__ : ["NONE","TOUCH_POINT","GESTURE"] }
browser.ui.MultitouchInputMode.NONE = ["NONE",0];
browser.ui.MultitouchInputMode.NONE.toString = $estr;
browser.ui.MultitouchInputMode.NONE.__enum__ = browser.ui.MultitouchInputMode;
browser.ui.MultitouchInputMode.TOUCH_POINT = ["TOUCH_POINT",1];
browser.ui.MultitouchInputMode.TOUCH_POINT.toString = $estr;
browser.ui.MultitouchInputMode.TOUCH_POINT.__enum__ = browser.ui.MultitouchInputMode;
browser.ui.MultitouchInputMode.GESTURE = ["GESTURE",2];
browser.ui.MultitouchInputMode.GESTURE.toString = $estr;
browser.ui.MultitouchInputMode.GESTURE.__enum__ = browser.ui.MultitouchInputMode;
browser.utils = {}
browser.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this._nmeResizeBuffer(this.allocated);
};
$hxClasses["browser.utils.ByteArray"] = browser.utils.ByteArray;
browser.utils.ByteArray.__name__ = ["browser","utils","ByteArray"];
browser.utils.ByteArray.nmeOfBuffer = function(buffer) {
	var bytes = new browser.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
browser.utils.ByteArray.prototype = {
	set_length: function(value) {
		if(this.allocated < value) this._nmeResizeBuffer(this.allocated = Math.max(value,this.allocated * 2) | 0); else if(this.allocated > value) this._nmeResizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,get_endian: function() {
		return this.littleEndian?"littleEndian":"bigEndian";
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new browser.errors.IOError("Write error - Out of bounds");
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var c = this.data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | this.data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = this.data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | this.data.getUint8(this.position++) & 127);
			} else {
				var c2 = this.data.getUint8(this.position++);
				var c3 = this.data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | this.data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedByte: function() {
		return this.data.getUint8(this.position++);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this._nmeResizeBuffer(this.allocated = Math.max(len,this.allocated * 2) | 0); else if(this.allocated > len) this._nmeResizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new browser.errors.IOError("Read error - Out of bounds");
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes._nmeResizeBuffer(bytes.allocated = Math.max(lengthToEnsure,bytes.allocated * 2) | 0); else if(bytes.allocated > lengthToEnsure) bytes._nmeResizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readByte: function() {
		return this.data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.data.getUint8(this.position++) != 0;
	}
	,nmeSet: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,nmeGetBuffer: function() {
		return this.data.buffer;
	}
	,nmeGet: function(pos) {
		return this.data.getUint8(pos);
	}
	,_nmeResizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,littleEndian: null
	,data: null
	,byteView: null
	,allocated: null
	,position: null
	,objectEncoding: null
	,length: null
	,endian: null
	,bytesAvailable: null
	,__class__: browser.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
browser.utils.Endian = function() { }
$hxClasses["browser.utils.Endian"] = browser.utils.Endian;
browser.utils.Endian.__name__ = ["browser","utils","Endian"];
browser.utils.Uuid = function() { }
$hxClasses["browser.utils.Uuid"] = browser.utils.Uuid;
browser.utils.Uuid.__name__ = ["browser","utils","Uuid"];
browser.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
browser.utils.Uuid.uuid = function() {
	return browser.utils.Uuid.random(8) + "-" + browser.utils.Uuid.random(4) + "-" + browser.utils.Uuid.random(4) + "-" + browser.utils.Uuid.random(4) + "-" + browser.utils.Uuid.random(12);
}
org.flixel.FlxRect = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
};
$hxClasses["org.flixel.FlxRect"] = org.flixel.FlxRect;
org.flixel.FlxRect.__name__ = ["org","flixel","FlxRect"];
org.flixel.FlxRect.prototype = {
	overlaps: function(Rect) {
		return Rect.x + Rect.width > this.x && Rect.x < this.x + this.width && Rect.y + Rect.height > this.y && Rect.y < this.y + this.height;
	}
	,copyToFlash: function(FlashRect) {
		FlashRect.x = this.x;
		FlashRect.y = this.y;
		FlashRect.width = this.width;
		FlashRect.height = this.height;
		return FlashRect;
	}
	,copyFromFlash: function(FlashRect) {
		this.x = FlashRect.x;
		this.y = FlashRect.y;
		this.width = FlashRect.width;
		this.height = FlashRect.height;
		return this;
	}
	,copyTo: function(Rect) {
		Rect.x = this.x;
		Rect.y = this.y;
		Rect.width = this.width;
		Rect.height = this.height;
		return Rect;
	}
	,copyFrom: function(Rect) {
		this.x = Rect.x;
		this.y = Rect.y;
		this.width = Rect.width;
		this.height = Rect.height;
		return this;
	}
	,make: function(X,Y,Width,Height) {
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		return this;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,bottom: null
	,get_top: function() {
		return this.y;
	}
	,top: null
	,get_right: function() {
		return this.x + this.width;
	}
	,right: null
	,get_left: function() {
		return this.x;
	}
	,left: null
	,height: null
	,width: null
	,y: null
	,x: null
	,__class__: org.flixel.FlxRect
	,__properties__: {get_left:"get_left",get_right:"get_right",get_top:"get_top",get_bottom:"get_bottom"}
}
org.flixel.FlxPoint = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.x = X;
	this.y = Y;
};
$hxClasses["org.flixel.FlxPoint"] = org.flixel.FlxPoint;
org.flixel.FlxPoint.__name__ = ["org","flixel","FlxPoint"];
org.flixel.FlxPoint.prototype = {
	toString: function() {
		return (function($this) {
			var $r;
			var s = Type.getClassName(Type.getClass($this));
			if(s != null) {
				s = StringTools.replace(s,"::",".");
				s = HxOverrides.substr(s,s.lastIndexOf(".") + 1,null);
			}
			$r = s;
			return $r;
		}(this));
	}
	,copyToFlash: function(FlashPoint) {
		FlashPoint.x = this.x;
		FlashPoint.y = this.y;
		return FlashPoint;
	}
	,copyFromFlash: function(FlashPoint) {
		this.x = FlashPoint.x;
		this.y = FlashPoint.y;
		return this;
	}
	,copyTo: function(point) {
		point.x = this.x;
		point.y = this.y;
		return point;
	}
	,copyFrom: function(point) {
		this.x = point.x;
		this.y = point.y;
		return this;
	}
	,make: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
		return this;
	}
	,y: null
	,x: null
	,__class__: org.flixel.FlxPoint
}
org.flixel.FlxObject = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._boundingBoxColorOverritten = false;
	org.flixel.FlxBasic.call(this);
	this.x = X;
	this.y = Y;
	this.last = new org.flixel.FlxPoint(this.x,this.y);
	this.width = Width;
	this.height = Height;
	this.mass = 1.0;
	this.elasticity = 0.0;
	this.health = 1;
	this.immovable = false;
	this.moves = true;
	this.touching = 0;
	this.wasTouching = 0;
	this.allowCollisions = 4369;
	this.velocity = new org.flixel.FlxPoint();
	this.acceleration = new org.flixel.FlxPoint();
	this.drag = new org.flixel.FlxPoint();
	this.maxVelocity = new org.flixel.FlxPoint(10000,10000);
	this.angle = 0;
	this.angularVelocity = 0;
	this.angularAcceleration = 0;
	this.angularDrag = 0;
	this.maxAngular = 10000;
	this.scrollFactor = new org.flixel.FlxPoint(1.0,1.0);
	this._flicker = false;
	this._flickerTimer = 0;
	this._point = new org.flixel.FlxPoint();
	this._rect = new org.flixel.FlxRect();
	this.path = null;
	this.pathSpeed = 0;
	this.pathAngle = 0;
};
$hxClasses["org.flixel.FlxObject"] = org.flixel.FlxObject;
org.flixel.FlxObject.__name__ = ["org","flixel","FlxObject"];
org.flixel.FlxObject.separate = function(Object1,Object2) {
	var separatedX = org.flixel.FlxObject.separateX(Object1,Object2);
	var separatedY = org.flixel.FlxObject.separateY(Object1,Object2);
	return separatedX || separatedY;
}
org.flixel.FlxObject.separateX = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(js.Boot.__instanceof(Object1,org.flixel.FlxTilemap)) return (js.Boot.__cast(Object1 , org.flixel.FlxTilemap)).overlapsWithCallback(Object2,org.flixel.FlxObject.separateX);
	if(js.Boot.__instanceof(Object2,org.flixel.FlxTilemap)) return (js.Boot.__cast(Object2 , org.flixel.FlxTilemap)).overlapsWithCallback(Object1,org.flixel.FlxObject.separateX,true);
	var overlap = 0;
	var obj1delta = Object1.x - Object1.last.x;
	var obj2delta = Object2.x - Object2.last.x;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs = obj1delta > 0?obj1delta:-obj1delta;
		var obj2deltaAbs = obj2delta > 0?obj2delta:-obj2delta;
		var obj1rect = org.flixel.FlxObject._firstSeparateFlxRect.make(Object1.x - (obj1delta > 0?obj1delta:0),Object1.last.y,Object1.width + (obj1delta > 0?obj1delta:-obj1delta),Object1.height);
		var obj2rect = org.flixel.FlxObject._secondSeparateFlxRect.make(Object2.x - (obj2delta > 0?obj2delta:0),Object2.last.y,Object2.width + (obj2delta > 0?obj2delta:-obj2delta),Object2.height);
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + org.flixel.FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.x + Object1.width - Object2.x;
				if(overlap > maxOverlap || (Object1.allowCollisions & 16) == 0 || (Object2.allowCollisions & 1) == 0) overlap = 0; else {
					Object1.touching |= 16;
					Object2.touching |= 1;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.x - Object2.width - Object2.x;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 1) == 0 || (Object2.allowCollisions & 16) == 0) overlap = 0; else {
					Object1.touching |= 1;
					Object2.touching |= 16;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1.velocity.x;
		var obj2v = Object2.velocity.x;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.x = Object1.x - overlap;
			Object2.x += overlap;
			var obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.x = average + obj1velocity * Object1.elasticity;
			Object2.velocity.x = average + obj2velocity * Object2.elasticity;
		} else if(!obj1immovable) {
			Object1.x = Object1.x - overlap;
			Object1.velocity.x = obj2v - obj1v * Object1.elasticity;
		} else if(!obj2immovable) {
			Object2.x += overlap;
			Object2.velocity.x = obj1v - obj2v * Object2.elasticity;
		}
		return true;
	} else return false;
}
org.flixel.FlxObject.separateY = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(js.Boot.__instanceof(Object1,org.flixel.FlxTilemap)) return (js.Boot.__cast(Object1 , org.flixel.FlxTilemap)).overlapsWithCallback(Object2,org.flixel.FlxObject.separateY);
	if(js.Boot.__instanceof(Object2,org.flixel.FlxTilemap)) return (js.Boot.__cast(Object2 , org.flixel.FlxTilemap)).overlapsWithCallback(Object1,org.flixel.FlxObject.separateY,true);
	var overlap = 0;
	var obj1delta = Object1.y - Object1.last.y;
	var obj2delta = Object2.y - Object2.last.y;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs = obj1delta > 0?obj1delta:-obj1delta;
		var obj2deltaAbs = obj2delta > 0?obj2delta:-obj2delta;
		var obj1rect = org.flixel.FlxObject._firstSeparateFlxRect.make(Object1.x,Object1.y - (obj1delta > 0?obj1delta:0),Object1.width,Object1.height + obj1deltaAbs);
		var obj2rect = org.flixel.FlxObject._secondSeparateFlxRect.make(Object2.x,Object2.y - (obj2delta > 0?obj2delta:0),Object2.width,Object2.height + obj2deltaAbs);
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + org.flixel.FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.y + Object1.height - Object2.y;
				if(overlap > maxOverlap || (Object1.allowCollisions & 4096) == 0 || (Object2.allowCollisions & 256) == 0) overlap = 0; else {
					Object1.touching |= 4096;
					Object2.touching |= 256;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.y - Object2.height - Object2.y;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 256) == 0 || (Object2.allowCollisions & 4096) == 0) overlap = 0; else {
					Object1.touching |= 256;
					Object2.touching |= 4096;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1.velocity.y;
		var obj2v = Object2.velocity.y;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.y = Object1.y - overlap;
			Object2.y += overlap;
			var obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.y = average + obj1velocity * Object1.elasticity;
			Object2.velocity.y = average + obj2velocity * Object2.elasticity;
		} else if(!obj1immovable) {
			Object1.y = Object1.y - overlap;
			Object1.velocity.y = obj2v - obj1v * Object1.elasticity;
			if(Object2.active && Object2.moves && obj1delta > obj2delta) Object1.x += Object2.x - Object2.last.x;
		} else if(!obj2immovable) {
			Object2.y += overlap;
			Object2.velocity.y = obj1v - obj2v * Object2.elasticity;
			if(Object1.active && Object1.moves && obj1delta < obj2delta) Object2.x += Object1.x - Object1.last.x;
		}
		return true;
	} else return false;
}
org.flixel.FlxObject.__super__ = org.flixel.FlxBasic;
org.flixel.FlxObject.prototype = $extend(org.flixel.FlxBasic.prototype,{
	hurt: function(Damage) {
		this.health = this.health - Damage;
		if(this.health <= 0) this.kill();
	}
	,justTouched: function(Direction) {
		return (this.touching & Direction) > 0 && (this.wasTouching & Direction) <= 0;
	}
	,isTouching: function(Direction) {
		return (this.touching & Direction) > 0;
	}
	,reset: function(X,Y) {
		this.revive();
		this.touching = 0;
		this.wasTouching = 0;
		this.x = X;
		this.y = Y;
		this.last.x = this.x;
		this.last.y = this.y;
		this.velocity.x = 0;
		this.velocity.y = 0;
	}
	,getMidpoint: function(point) {
		if(point == null) point = new org.flixel.FlxPoint();
		point.x = this.x + this.width * 0.5;
		point.y = this.y + this.height * 0.5;
		return point;
	}
	,set_solid: function(Solid) {
		if(Solid) this.allowCollisions = 4369; else this.allowCollisions = 0;
		return Solid;
	}
	,get_solid: function() {
		return (this.allowCollisions & 4369) > 0;
	}
	,solid: null
	,get_flickering: function() {
		return this._flickerTimer != 0;
	}
	,flickering: null
	,flicker: function(Duration) {
		if(Duration == null) Duration = 1;
		this._flickerTimer = Duration;
		if(this._flickerTimer == 0) this._flicker = false;
	}
	,getScreenXY: function(point,Camera) {
		if(point == null) point = new org.flixel.FlxPoint();
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		point.x = this.x - Camera.scroll.x * this.scrollFactor.x;
		point.y = this.y - Camera.scroll.y * this.scrollFactor.y;
		return point;
	}
	,onScreenObject: function(Camera) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		return this._point.x + this.width > 0 && this._point.x < Camera.width && this._point.y + this.height > 0 && this._point.y < Camera.height;
	}
	,onScreen: function(Camera) {
		return this.onScreenObject(Camera);
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return point.x > this.x && point.x < this.x + this.width && point.y > this.y && point.y < this.y + this.height;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var X = point.x - Camera.scroll.x;
		var Y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		return X > this._point.x && X < this._point.x + this.width && Y > this._point.y && Y < this._point.y + this.height;
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var results = false;
			var basic;
			var i = 0;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < (grp.length | 0)) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlapsAt(X,Y,basic,InScreenSpace,Camera)) results = true;
			}
			return results;
		}
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTilemap)) {
			var tilemap = js.Boot.__cast(ObjectOrGroup , org.flixel.FlxTilemap);
			return tilemap.overlapsAt(tilemap.x - (X - this.x),tilemap.y - (Y - this.y),this,InScreenSpace,Camera);
		}
		var object = js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject);
		if(!InScreenSpace) return object.x + object.width > X && object.x < X + this.width && object.y + object.height > Y && object.y < Y + this.height;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this._point.x = X - Camera.scroll.x * this.scrollFactor.x;
		this._point.y = Y - Camera.scroll.y * this.scrollFactor.y;
		return objectScreenPos.x + object.width > this._point.x && objectScreenPos.x < this._point.x + this.width && objectScreenPos.y + object.height > this._point.y && objectScreenPos.y < this._point.y + this.height;
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var results = false;
			var i = 0;
			var basic;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlaps(basic,InScreenSpace,Camera)) results = true;
			}
			return results;
		}
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTilemap)) return (js.Boot.__cast(ObjectOrGroup , org.flixel.FlxTilemap)).overlaps(this,InScreenSpace,Camera);
		var object = js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject);
		if(!InScreenSpace) return object.x + object.width > this.x && object.x < this.x + this.width && object.y + object.height > this.y && object.y < this.y + this.height;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this.getScreenXY(this._point,Camera);
		return objectScreenPos.x + object.width > this._point.x && objectScreenPos.x < this._point.x + this.width && objectScreenPos.y + object.height > this._point.y && objectScreenPos.y < this._point.y + this.height;
	}
	,updatePathMotion: function() {
		this._point.x = this.x + this.width * 0.5;
		this._point.y = this.y + this.height * 0.5;
		var node = this.path.nodes[this._pathNodeIndex];
		var deltaX = node.x - this._point.x;
		var deltaY = node.y - this._point.y;
		var horizontalOnly = (this._pathMode & 65536) > 0;
		var verticalOnly = (this._pathMode & 1048576) > 0;
		if(horizontalOnly) {
			if((deltaX > 0?deltaX:-deltaX) < this.pathSpeed * org.flixel.FlxG.elapsed) node = this.advancePath();
		} else if(verticalOnly) {
			if((deltaY > 0?deltaY:-deltaY) < this.pathSpeed * org.flixel.FlxG.elapsed) node = this.advancePath();
		} else if(Math.sqrt(deltaX * deltaX + deltaY * deltaY) < this.pathSpeed * org.flixel.FlxG.elapsed) node = this.advancePath();
		if(this.pathSpeed != 0) {
			this._point.x = this.x + this.width * 0.5;
			this._point.y = this.y + this.height * 0.5;
			if(horizontalOnly || this._point.y == node.y) {
				this.velocity.x = this._point.x < node.x?this.pathSpeed:-this.pathSpeed;
				if(this.velocity.x < 0) this.pathAngle = -90; else this.pathAngle = 90;
				if(!horizontalOnly) this.velocity.y = 0;
			} else if(verticalOnly || this._point.x == node.x) {
				this.velocity.y = this._point.y < node.y?this.pathSpeed:-this.pathSpeed;
				if(this.velocity.y < 0) this.pathAngle = 0; else this.pathAngle = 180;
				if(!verticalOnly) this.velocity.x = 0;
			} else {
				this.pathAngle = org.flixel.FlxU.getAngle(this._point,node);
				org.flixel.FlxU.rotatePoint(0,this.pathSpeed,0,0,this.pathAngle,this.velocity);
			}
			if(this._pathRotate) {
				this.angularVelocity = 0;
				this.angularAcceleration = 0;
				this.angle = this.pathAngle;
			}
		}
	}
	,advancePath: function(Snap) {
		if(Snap == null) Snap = true;
		if(Snap) {
			var oldNode = this.path.nodes[this._pathNodeIndex];
			if(oldNode != null) {
				if((this._pathMode & 1048576) == 0) this.x = oldNode.x - this.width * 0.5;
				if((this._pathMode & 65536) == 0) this.y = oldNode.y - this.height * 0.5;
			}
		}
		this._pathNodeIndex += this._pathInc;
		if((this._pathMode & 1) > 0) {
			if(this._pathNodeIndex < 0) {
				this._pathNodeIndex = 0;
				this.stopFollowingPath(false);
			}
		} else if((this._pathMode & 16) > 0) {
			if(this._pathNodeIndex >= this.path.nodes.length) this._pathNodeIndex = 0;
		} else if((this._pathMode & 256) > 0) {
			if(this._pathNodeIndex < 0) {
				this._pathNodeIndex = this.path.nodes.length - 1;
				if(this._pathNodeIndex < 0) this._pathNodeIndex = 0;
			}
		} else if((this._pathMode & 4096) > 0) {
			if(this._pathInc > 0) {
				if(this._pathNodeIndex >= this.path.nodes.length) {
					this._pathNodeIndex = this.path.nodes.length - 2;
					if(this._pathNodeIndex < 0) this._pathNodeIndex = 0;
					this._pathInc = -this._pathInc;
				}
			} else if(this._pathNodeIndex < 0) {
				this._pathNodeIndex = 1;
				if(this._pathNodeIndex >= this.path.nodes.length) this._pathNodeIndex = this.path.nodes.length - 1;
				if(this._pathNodeIndex < 0) this._pathNodeIndex = 0;
				this._pathInc = -this._pathInc;
			}
		} else if(this._pathNodeIndex >= this.path.nodes.length) {
			this._pathNodeIndex = this.path.nodes.length - 1;
			this.stopFollowingPath(false);
		}
		return this.path.nodes[this._pathNodeIndex];
	}
	,stopFollowingPath: function(DestroyPath) {
		if(DestroyPath == null) DestroyPath = false;
		this.pathSpeed = 0;
		this.velocity.x = 0;
		this.velocity.y = 0;
		if(DestroyPath && this.path != null) {
			this.path.destroy();
			this.path = null;
		}
	}
	,followPath: function(Path,Speed,Mode,AutoRotate) {
		if(AutoRotate == null) AutoRotate = false;
		if(Mode == null) Mode = 0;
		if(Speed == null) Speed = 100;
		if(Path.nodes.length <= 0) {
			if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("WARNING: Paths need at least one node in them to be followed.",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("WARNING: Paths need at least one node in them to be followed." , Array)):Std.string("WARNING: Paths need at least one node in them to be followed."));
			return;
		}
		this.path = Path;
		this.pathSpeed = Speed > 0?Speed:-Speed;
		this._pathMode = Mode;
		this._pathRotate = AutoRotate;
		if(this._pathMode == 1 || this._pathMode == 256) {
			this._pathNodeIndex = this.path.nodes.length - 1;
			this._pathInc = -1;
		} else {
			this._pathNodeIndex = 0;
			this._pathInc = 1;
		}
	}
	,drawDebug: function(Camera) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var boundingBoxX = this.x - Camera.scroll.x * this.scrollFactor.x;
		var boundingBoxY = this.y - Camera.scroll.y * this.scrollFactor.y;
		if(this.allowCollisions != 0 && !this._boundingBoxColorOverritten) {
			if(this.allowCollisions != 4369) this.onBoundingBoxColorSet(-1040641);
			if(this.immovable) this.onBoundingBoxColorSet(-16715227); else this.onBoundingBoxColorSet(-65518);
		} else if(!this._boundingBoxColorOverritten) this.onBoundingBoxColorSet(-16740119);
		var gfx = Camera._effectsLayer.get_graphics();
		gfx.lineStyle(1,this.debugBoundingBoxColor,0.5);
		gfx.drawRect(boundingBoxX,boundingBoxY,this.width,this.height);
	}
	,draw: function() {
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) {
			camera = this.cameras[i++];
			if(!this.onScreenObject(camera) || !camera.visible || !camera.exists) continue;
			org.flixel.FlxBasic._VISIBLECOUNT++;
			if(org.flixel.FlxG.visualDebug && !this.ignoreDrawDebug) this.drawDebug(camera);
		}
	}
	,updateMotion: function() {
		var delta;
		var velocityDelta;
		var dt = org.flixel.FlxG.elapsed;
		velocityDelta = 0.5 * (org.flixel.FlxU.computeVelocity(this.angularVelocity,this.angularAcceleration,this.angularDrag,this.maxAngular) - this.angularVelocity);
		this.angularVelocity += velocityDelta;
		this.angle += this.angularVelocity * dt;
		this.angularVelocity += velocityDelta;
		velocityDelta = 0.5 * (org.flixel.FlxU.computeVelocity(this.velocity.x,this.acceleration.x,this.drag.x,this.maxVelocity.x) - this.velocity.x);
		this.velocity.x += velocityDelta;
		delta = this.velocity.x * dt;
		this.velocity.x += velocityDelta;
		this.x += delta;
		velocityDelta = 0.5 * (org.flixel.FlxU.computeVelocity(this.velocity.y,this.acceleration.y,this.drag.y,this.maxVelocity.y) - this.velocity.y);
		this.velocity.y += velocityDelta;
		delta = this.velocity.y * dt;
		this.velocity.y += velocityDelta;
		this.y += delta;
	}
	,postUpdate: function() {
		if(this.moves) this.updateMotion();
		this.wasTouching = this.touching;
		this.touching = 0;
	}
	,preUpdate: function() {
		org.flixel.FlxBasic._ACTIVECOUNT++;
		if(this._flickerTimer > 0) {
			this._flickerTimer -= org.flixel.FlxG.elapsed;
			if(this._flickerTimer <= 0) {
				this._flickerTimer = 0;
				this._flicker = false;
			}
		}
		this.last.x = this.x;
		this.last.y = this.y;
		if(this.path != null && this.pathSpeed != 0 && this.path.nodes[this._pathNodeIndex] != null) this.updatePathMotion();
	}
	,destroy: function() {
		this.velocity = null;
		this.acceleration = null;
		this.drag = null;
		this.maxVelocity = null;
		this.scrollFactor = null;
		this._point = null;
		this._rect = null;
		this.last = null;
		this.cameras = null;
		if(this.path != null) this.path.destroy();
		this.path = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,onBoundingBoxColorSet: function(val) {
		this._boundingBoxColorOverritten = true;
		this.debugBoundingBoxColor = val;
		return val;
	}
	,_boundingBoxColorOverritten: null
	,debugBoundingBoxColor: null
	,_pathRotate: null
	,_pathInc: null
	,_pathMode: null
	,_pathNodeIndex: null
	,pathAngle: null
	,pathSpeed: null
	,path: null
	,last: null
	,allowCollisions: null
	,wasTouching: null
	,touching: null
	,moves: null
	,_rect: null
	,_point: null
	,health: null
	,_flickerTimer: null
	,_flicker: null
	,scrollFactor: null
	,maxAngular: null
	,angularDrag: null
	,angularAcceleration: null
	,angularVelocity: null
	,angle: null
	,maxVelocity: null
	,drag: null
	,acceleration: null
	,elasticity: null
	,mass: null
	,velocity: null
	,immovable: null
	,height: null
	,width: null
	,y: null
	,x: null
	,__class__: org.flixel.FlxObject
	,__properties__: $extend(org.flixel.FlxBasic.prototype.__properties__,{set_debugBoundingBoxColor:"onBoundingBoxColorSet",get_flickering:"get_flickering",set_solid:"set_solid",get_solid:"get_solid"})
});
org.flixel.FlxAssets = function() { }
$hxClasses["org.flixel.FlxAssets"] = org.flixel.FlxAssets;
org.flixel.FlxAssets.__name__ = ["org","flixel","FlxAssets"];
org.flixel.FlxAssets.drawLogo = function(graph) {
	graph.beginFill(47394);
	graph.moveTo(50,13);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(87,51);
	graph.lineTo(51,87);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(13,50);
	graph.lineTo(50,13);
	graph.endFill();
	graph.beginFill(16761138);
	graph.moveTo(0,0);
	graph.lineTo(25,0);
	graph.lineTo(50,13);
	graph.lineTo(13,50);
	graph.lineTo(0,25);
	graph.lineTo(0,0);
	graph.endFill();
	graph.beginFill(16066382);
	graph.moveTo(100,0);
	graph.lineTo(75,0);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(100,25);
	graph.lineTo(100,0);
	graph.endFill();
	graph.beginFill(3555839);
	graph.moveTo(0,100);
	graph.lineTo(25,100);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(0,75);
	graph.lineTo(0,100);
	graph.endFill();
	graph.beginFill(314875);
	graph.moveTo(100,100);
	graph.lineTo(75,100);
	graph.lineTo(51,87);
	graph.lineTo(87,51);
	graph.lineTo(100,75);
	graph.lineTo(100,100);
	graph.endFill();
}
org.flixel.FlxAssets.getBitmapData = function(id) {
	return nme.installer.Assets.getBitmapData(id);
}
org.flixel.FlxAssets.cacheSounds = function() {
}
org.flixel.FlxTilemap = function() {
	org.flixel.FlxObject.call(this);
	this.auto = 0;
	this.widthInTiles = 0;
	this.heightInTiles = 0;
	this.totalTiles = 0;
	this._buffers = new Array();
	this._flashPoint = new browser.geom.Point();
	this._flashRect = null;
	this._data = null;
	this._tileWidth = 0;
	this._tileHeight = 0;
	this._rectIDs = null;
	this._tiles = null;
	this._tileObjects = null;
	this.immovable = true;
	this.moves = false;
	this.cameras = null;
	this._lastVisualDebug = org.flixel.FlxG.visualDebug;
	this._startingIndex = 0;
	this._helperPoint = new browser.geom.Point();
};
$hxClasses["org.flixel.FlxTilemap"] = org.flixel.FlxTilemap;
org.flixel.FlxTilemap.__name__ = ["org","flixel","FlxTilemap"];
org.flixel.FlxTilemap.arrayToCSV = function(Data,Width,Invert) {
	if(Invert == null) Invert = false;
	var row = 0;
	var column;
	var csv = "";
	var Height = Data.length / Width | 0;
	var index;
	while(row < Height) {
		column = 0;
		while(column < Width) {
			index = Data[row * Width + column];
			if(Invert) {
				if(index == 0) index = 1; else if(index == 1) index = 0;
			}
			if(column == 0) {
				if(row == 0) csv += index; else csv += "\n" + index;
			} else csv += ", " + index;
			column++;
		}
		row++;
	}
	return csv;
}
org.flixel.FlxTilemap.bitmapToCSV = function(bitmapData,Invert,Scale,ColorMap) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	if(Scale < 1) Scale = 1;
	if(Scale > 1) {
		var bd = bitmapData;
		bitmapData = new browser.display.BitmapData((bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0) * Scale,(bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0) * Scale);
		var bdW = bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0;
		var bdH = bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0;
		var pCol = 0;
		var _g = 0;
		while(_g < bdW) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < bdH) {
				var j = _g1++;
				pCol = bd.getPixel(i,j);
				var _g2 = 0;
				while(_g2 < Scale) {
					var k = _g2++;
					var _g3 = 0;
					while(_g3 < Scale) {
						var m = _g3++;
						bitmapData.setPixel(i * Scale + k,j * Scale + m,pCol);
					}
				}
			}
		}
	}
	var row = 0;
	var column;
	var pixel;
	var csv = "";
	var bitmapWidth = bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0;
	var bitmapHeight = bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0;
	while(row < bitmapHeight) {
		column = 0;
		while(column < bitmapWidth) {
			pixel = bitmapData.getPixel(column,row);
			if(ColorMap != null) pixel = org.flixel.FlxU.ArrayIndexOf(ColorMap,pixel,null); else if(Invert && pixel > 0 || !Invert && pixel == 0) pixel = 1; else pixel = 0;
			if(column == 0) {
				if(row == 0) csv += pixel; else csv += "\n" + pixel;
			} else csv += ", " + pixel;
			column++;
		}
		row++;
	}
	return csv;
}
org.flixel.FlxTilemap.imageToCSV = function(ImageFile,Invert,Scale) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	var tempBitmapData;
	if(js.Boot.__instanceof(ImageFile,String)) tempBitmapData = org.flixel.FlxAssets.getBitmapData(ImageFile); else tempBitmapData = Type.createInstance(ImageFile,[]).bitmapData;
	return org.flixel.FlxTilemap.bitmapToCSV(tempBitmapData,Invert,Scale);
}
org.flixel.FlxTilemap.__super__ = org.flixel.FlxObject;
org.flixel.FlxTilemap.prototype = $extend(org.flixel.FlxObject.prototype,{
	tileToFlxSprite: function(X,Y,NewTile) {
		if(NewTile == null) NewTile = 0;
		var rowIndex = X + Y * this.widthInTiles;
		var rect = null;
		var tile = this._tileObjects[this._data[rowIndex]];
		if(tile == null || !tile.visible) {
		} else {
			var rx = (this._data[rowIndex] - this._startingIndex) * this._tileWidth;
			var ry = 0;
			if((rx | 0) >= this._tiles.get_width()) {
				ry = (rx / this._tiles.get_width() | 0) * this._tileHeight;
				rx %= this._tiles.get_width();
			}
			rect = new browser.geom.Rectangle(rx,ry,this._tileWidth,this._tileHeight);
		}
		var pt = new browser.geom.Point(0,0);
		var tileSprite = new org.flixel.FlxSprite();
		tileSprite.makeGraphic(this._tileWidth,this._tileHeight,0,true);
		tileSprite.x = X * this._tileWidth + this.x;
		tileSprite.y = Y * this._tileHeight + this.y;
		if(rect != null) tileSprite.get_pixels().copyPixels(this._tiles,rect,pt);
		tileSprite.dirty = true;
		tileSprite.updateFrameData();
		if(NewTile >= 0) this.setTile(X,Y,NewTile);
		return tileSprite;
	}
	,updateFrameData: function() {
		if(this._node != null && this._tileWidth >= 1 && this._tileHeight >= 1) {
			this._framesData = this._node.addSpriteFramesData(this._tileWidth,this._tileHeight,new browser.geom.Point(0,0),0,0,0,0,1,1);
			this._rectIDs = new Array();
			org.flixel.FlxU.SetArrayLength(this._rectIDs,this.totalTiles);
			var i = 0;
			while(i < this.totalTiles) this.updateTile(i++);
		}
	}
	,updateTile: function(Index) {
		var tile = this._tileObjects[this._data[Index]];
		if(tile == null || !tile.visible) {
			this._rectIDs[Index] = -1;
			return;
		}
		this._rectIDs[Index] = this._framesData.frameIDs[this._data[Index] - this._startingIndex];
	}
	,autoTile: function(Index) {
		if(this._data[Index] == 0) return;
		this._data[Index] = 0;
		if(Index - this.widthInTiles < 0 || this._data[Index - this.widthInTiles] > 0) this._data[Index] += 1;
		if(Index % this.widthInTiles >= this.widthInTiles - 1 || this._data[Index + 1] > 0) this._data[Index] += 2;
		if((Index + this.widthInTiles | 0) >= this.totalTiles || this._data[Index + this.widthInTiles] > 0) this._data[Index] += 4;
		if(Index % this.widthInTiles <= 0 || this._data[Index - 1] > 0) this._data[Index] += 8;
		if(this.auto == 2 && this._data[Index] == 15) {
			if(Index % this.widthInTiles > 0 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles - 1] <= 0) this._data[Index] = 1;
			if(Index % this.widthInTiles > 0 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles - 1] <= 0) this._data[Index] = 2;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles + 1] <= 0) this._data[Index] = 4;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles + 1] <= 0) this._data[Index] = 8;
		}
		this._data[Index] += 1;
	}
	,rayHit: function(Start,End,Resolution) {
		if(Resolution == null) Resolution = 1;
		var Result = null;
		var step = this._tileWidth;
		if(this._tileHeight < this._tileWidth) step = this._tileHeight;
		step /= Resolution;
		var deltaX = End.x - Start.x;
		var deltaY = End.y - Start.y;
		var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		var steps = Math.ceil(distance / step);
		var stepX = deltaX / steps;
		var stepY = deltaY / steps;
		var curX = Start.x - stepX - this.x;
		var curY = Start.y - stepY - this.y;
		var tileX;
		var tileY;
		var i = 0;
		while(i < steps) {
			curX += stepX;
			curY += stepY;
			if(curX < 0 || curX > this.width || curY < 0 || curY > this.height) {
				i++;
				continue;
			}
			tileX = Math.floor(curX / this._tileWidth);
			tileY = Math.floor(curY / this._tileHeight);
			if(this._tileObjects[this._data[tileY * this.widthInTiles + tileX]].allowCollisions != 0) {
				tileX *= this._tileWidth;
				tileY *= this._tileHeight;
				var rx = 0;
				var ry = 0;
				var q;
				var lx = curX - stepX;
				var ly = curY - stepY;
				q = tileX;
				if(deltaX < 0) q += this._tileWidth;
				rx = q;
				ry = ly + stepY * ((q - lx) / stepX);
				if(ry > tileY && ry < tileY + this._tileHeight) {
					if(Result == null) Result = new org.flixel.FlxPoint();
					Result.x = rx;
					Result.y = ry;
					return Result;
				}
				q = tileY;
				if(deltaY < 0) q += this._tileHeight;
				rx = lx + stepX * ((q - ly) / stepY);
				ry = q;
				if(rx > tileX && rx < tileX + this._tileWidth) {
					if(Result == null) Result = new org.flixel.FlxPoint();
					Result.x = rx;
					Result.y = ry;
					return Result;
				}
				return null;
			}
			i++;
		}
		return null;
	}
	,ray: function(Start,End,Result,Resolution) {
		if(Resolution == null) Resolution = 1;
		var step = this._tileWidth;
		if(this._tileHeight < this._tileWidth) step = this._tileHeight;
		step /= Resolution;
		var deltaX = End.x - Start.x;
		var deltaY = End.y - Start.y;
		var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		var steps = Math.ceil(distance / step);
		var stepX = deltaX / steps;
		var stepY = deltaY / steps;
		var curX = Start.x - stepX - this.x;
		var curY = Start.y - stepY - this.y;
		var tileX;
		var tileY;
		var i = 0;
		while(i < steps) {
			curX += stepX;
			curY += stepY;
			if(curX < 0 || curX > this.width || curY < 0 || curY > this.height) {
				i++;
				continue;
			}
			tileX = Math.floor(curX / this._tileWidth);
			tileY = Math.floor(curY / this._tileHeight);
			if(this._tileObjects[this._data[tileY * this.widthInTiles + tileX]].allowCollisions != 0) {
				tileX *= this._tileWidth;
				tileY *= this._tileHeight;
				var rx = 0;
				var ry = 0;
				var q;
				var lx = curX - stepX;
				var ly = curY - stepY;
				q = tileX;
				if(deltaX < 0) q += this._tileWidth;
				rx = q;
				ry = ly + stepY * ((q - lx) / stepX);
				if(ry > tileY && ry < tileY + this._tileHeight) {
					if(Result != null) {
						Result.x = rx;
						Result.y = ry;
					}
					return false;
				}
				q = tileY;
				if(deltaY < 0) q += this._tileHeight;
				rx = lx + stepX * ((q - ly) / stepY);
				ry = q;
				if(rx > tileX && rx < tileX + this._tileWidth) {
					if(Result != null) {
						Result.x = rx;
						Result.y = ry;
					}
					return false;
				}
				return true;
			}
			i++;
		}
		return true;
	}
	,getBounds: function(Bounds) {
		if(Bounds == null) Bounds = new org.flixel.FlxRect();
		return (function($this) {
			var $r;
			Bounds.x = $this.x;
			Bounds.y = $this.y;
			Bounds.width = $this.width;
			Bounds.height = $this.height;
			$r = Bounds;
			return $r;
		}(this));
	}
	,follow: function(Camera,Border,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = true;
		if(Border == null) Border = 0;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		Camera.setBounds(this.x + Border * this._tileWidth,this.y + Border * this._tileHeight,this.width - Border * this._tileWidth * 2,this.height - Border * this._tileHeight * 2,UpdateWorld);
	}
	,setTileProperties: function(Tile,AllowCollisions,Callback,CallbackFilter,Range) {
		if(Range == null) Range = 1;
		if(AllowCollisions == null) AllowCollisions = 4369;
		if(Range <= 0) Range = 1;
		var tile;
		var i = Tile;
		var l = Tile + Range;
		while(i < l) {
			tile = this._tileObjects[i++];
			tile.allowCollisions = AllowCollisions;
			tile.callbackFunction = Callback;
			tile.filter = CallbackFilter;
		}
	}
	,setTileByIndex: function(Index,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(Index >= this._data.length) return false;
		var ok = true;
		this._data[Index] = Tile;
		if(!UpdateGraphics) return ok;
		this.setDirty();
		if(this.auto == 0) {
			this.updateTile(Index);
			return ok;
		}
		var i;
		var row = (Index / this.widthInTiles | 0) - 1;
		var rowLength = row + 3;
		var column = Index % this.widthInTiles - 1;
		var columnHeight = column + 3;
		while(row < rowLength) {
			column = columnHeight - 3;
			while(column < columnHeight) {
				if(row >= 0 && row < this.heightInTiles && column >= 0 && column < this.widthInTiles) {
					i = row * this.widthInTiles + column;
					this.autoTile(i);
					this.updateTile(i);
				}
				column++;
			}
			row++;
		}
		return ok;
	}
	,setTile: function(X,Y,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(X >= this.widthInTiles || Y >= this.heightInTiles) return false;
		return this.setTileByIndex(Y * this.widthInTiles + X,Tile,UpdateGraphics);
	}
	,getTileCoords: function(Index,Midpoint) {
		if(Midpoint == null) Midpoint = true;
		var array = null;
		var point;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				point = new org.flixel.FlxPoint(this.x + (i % this.widthInTiles | 0) * this._tileWidth,this.y + (i / this.widthInTiles | 0) * this._tileHeight);
				if(Midpoint) {
					point.x += this._tileWidth * 0.5;
					point.y += this._tileHeight * 0.5;
				}
				if(array == null) array = new Array();
				array.push(point);
			}
			i++;
		}
		return array;
	}
	,getTileInstances: function(Index) {
		var array = null;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				if(array == null) array = [];
				array.push(i);
			}
			i++;
		}
		return array;
	}
	,getTileByIndex: function(Index) {
		return this._data[Index];
	}
	,getTile: function(X,Y) {
		return this._data[Y * this.widthInTiles + X];
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return this._tileObjects[this._data[Math.floor(Math.floor((point.y - this.y) / this._tileHeight) * this.widthInTiles + (point.x - this.x) / this._tileWidth)]].allowCollisions > 0;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		point.x = point.x - Camera.scroll.x;
		point.y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		return this._tileObjects[this._data[((point.y - this._point.y) / this._tileHeight | 0) * this.widthInTiles + (point.x - this._point.x) / this._tileWidth | 0]].allowCollisions > 0;
	}
	,overlapsWithCallback: function(Object,Callback,FlipCallbackParams,Position) {
		if(FlipCallbackParams == null) FlipCallbackParams = false;
		var results = false;
		var X = this.x;
		var Y = this.y;
		if(Position != null) {
			X = Position.x;
			Y = Position.y;
		}
		var selectionX = org.flixel.FlxU.floor((Object.x - X) / this._tileWidth);
		var selectionY = org.flixel.FlxU.floor((Object.y - Y) / this._tileHeight);
		var selectionWidth = selectionX + org.flixel.FlxU.ceil(Object.width / this._tileWidth) + 1;
		var selectionHeight = selectionY + org.flixel.FlxU.ceil(Object.height / this._tileHeight) + 1;
		if(selectionX < 0) selectionX = 0;
		if(selectionY < 0) selectionY = 0;
		if(selectionWidth > this.widthInTiles) selectionWidth = this.widthInTiles;
		if(selectionHeight > this.heightInTiles) selectionHeight = this.heightInTiles;
		var rowStart = selectionY * this.widthInTiles;
		var row = selectionY;
		var column;
		var tile;
		var overlapFound;
		var deltaX = X - this.last.x;
		var deltaY = Y - this.last.y;
		while(row < selectionHeight) {
			column = selectionX;
			while(column < selectionWidth) {
				overlapFound = false;
				var dataIndex = this._data[rowStart + column];
				if(dataIndex < 0) {
					column++;
					continue;
				}
				tile = this._tileObjects[dataIndex];
				if(tile.allowCollisions != 0) {
					tile.x = X + column * this._tileWidth;
					tile.y = Y + row * this._tileHeight;
					tile.last.x = tile.x - deltaX;
					tile.last.y = tile.y - deltaY;
					if(Callback != null) {
						if(FlipCallbackParams) overlapFound = Callback(Object,tile); else overlapFound = Callback(tile,Object);
					} else overlapFound = Object.x + Object.width > tile.x && Object.x < tile.x + tile.width && Object.y + Object.height > tile.y && Object.y < tile.y + tile.height;
					if(overlapFound) {
						if(tile.callbackFunction != null && (tile.filter == null || js.Boot.__instanceof(Object,tile.filter))) {
							tile.mapIndex = rowStart + column;
							tile.callbackFunction(tile,Object);
						}
						results = true;
					}
				} else if(tile.callbackFunction != null && (tile.filter == null || js.Boot.__instanceof(Object,tile.filter))) {
					tile.mapIndex = rowStart + column;
					tile.callbackFunction(tile,Object);
				}
				column++;
			}
			rowStart += this.widthInTiles;
			row++;
		}
		return results;
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var results = false;
			var basic;
			var i = 0;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					if(js.Boot.__instanceof(basic,org.flixel.FlxObject)) {
						this._point.x = X;
						this._point.y = Y;
						if(this.overlapsWithCallback(js.Boot.__cast(basic , org.flixel.FlxObject),null,false,this._point)) results = true;
					} else if(this.overlapsAt(X,Y,basic,InScreenSpace,Camera)) results = true;
				}
			}
			return results;
		} else if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxObject)) {
			this._point.x = X;
			this._point.y = Y;
			return this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject),null,false,this._point);
		}
		return false;
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var results = false;
			var basic;
			var i = 0;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					if(js.Boot.__instanceof(basic,org.flixel.FlxObject)) {
						if(this.overlapsWithCallback(js.Boot.__cast(basic , org.flixel.FlxObject))) results = true;
					} else if(this.overlaps(basic,InScreenSpace,Camera)) results = true;
				}
			}
			return results;
		} else if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxObject)) return this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject));
		return false;
	}
	,walkPath: function(Data,Start,Points) {
		Points.push(new org.flixel.FlxPoint(this.x + Math.floor(Start % this.widthInTiles) * this._tileWidth + this._tileWidth * 0.5,this.y + Math.floor(Start / this.widthInTiles) * this._tileHeight + this._tileHeight * 0.5));
		if(Data[Start] == 0) return;
		var left = Start % this.widthInTiles > 0;
		var right = Start % this.widthInTiles < this.widthInTiles - 1;
		var up = Start / this.widthInTiles > 0;
		var down = Start / this.widthInTiles < this.heightInTiles - 1;
		var current = Data[Start];
		var i;
		if(up) {
			i = Start - this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right) {
			i = Start + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(down) {
			i = Start + this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left) {
			i = Start - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && right) {
			i = Start - this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right && down) {
			i = Start + this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left && down) {
			i = Start + this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && left) {
			i = Start - this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		return;
	}
	,computePathDistance: function(StartIndex,EndIndex,WideDiagonal) {
		var mapSize = this.widthInTiles * this.heightInTiles;
		var distances = new Array();
		org.flixel.FlxU.SetArrayLength(distances,mapSize);
		var i = 0;
		while(i < mapSize) {
			if(this._tileObjects[this._data[i]].allowCollisions != 0) distances[i] = -2; else distances[i] = -1;
			i++;
		}
		distances[StartIndex] = 0;
		var distance = 1;
		var neighbors = [StartIndex];
		var current;
		var currentIndex;
		var left;
		var right;
		var up;
		var down;
		var currentLength;
		var foundEnd = false;
		while(neighbors.length > 0) {
			current = neighbors;
			neighbors = new Array();
			i = 0;
			currentLength = current.length;
			while(i < currentLength) {
				currentIndex = current[i++];
				if(currentIndex == (EndIndex | 0)) {
					foundEnd = true;
					neighbors = [];
					break;
				}
				left = currentIndex % this.widthInTiles > 0;
				right = currentIndex % this.widthInTiles < this.widthInTiles - 1;
				up = currentIndex / this.widthInTiles > 0;
				down = currentIndex / this.widthInTiles < this.heightInTiles - 1;
				var index;
				if(up) {
					index = currentIndex - this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right) {
					index = currentIndex + 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(down) {
					index = currentIndex + this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left) {
					index = currentIndex - 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && right) {
					index = currentIndex - this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right && down) {
					index = currentIndex + this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left && down) {
					index = currentIndex + this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && left) {
					index = currentIndex - this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
			}
			distance++;
		}
		if(!foundEnd) distances = null;
		return distances;
	}
	,raySimplifyPath: function(Points) {
		var source = Points[0];
		var lastIndex = -1;
		var node;
		var i = 1;
		var l = Points.length;
		while(i < l) {
			node = Points[i++];
			if(node == null) continue;
			if(this.ray(source,node,this._point)) {
				if(lastIndex >= 0) Points[lastIndex] = null;
			} else source = Points[lastIndex];
			lastIndex = i - 1;
		}
	}
	,simplifyPath: function(Points) {
		var deltaPrevious;
		var deltaNext;
		var last = Points[0];
		var node;
		var i = 1;
		var l = Points.length - 1;
		while(i < l) {
			node = Points[i];
			deltaPrevious = (node.x - last.x) / (node.y - last.y);
			deltaNext = (node.x - Points[i + 1].x) / (node.y - Points[i + 1].y);
			if(last.x == Points[i + 1].x || last.y == Points[i + 1].y || deltaPrevious == deltaNext) Points[i] = null; else last = node;
			i++;
		}
	}
	,findPath: function(Start,End,Simplify,RaySimplify,WideDiagonal) {
		if(WideDiagonal == null) WideDiagonal = true;
		if(RaySimplify == null) RaySimplify = false;
		if(Simplify == null) Simplify = true;
		var startIndex = ((Start.y - this.y) / this._tileHeight | 0) * this.widthInTiles + ((Start.x - this.x) / this._tileWidth | 0);
		var endIndex = ((End.y - this.y) / this._tileHeight | 0) * this.widthInTiles + ((End.x - this.x) / this._tileWidth | 0);
		if(this._tileObjects[this._data[startIndex]].allowCollisions > 0 || this._tileObjects[this._data[endIndex]].allowCollisions > 0) return null;
		var distances = this.computePathDistance(startIndex,endIndex,WideDiagonal);
		if(distances == null) return null;
		var points = new Array();
		this.walkPath(distances,endIndex,points);
		var node;
		node = points[points.length - 1];
		node.x = Start.x;
		node.y = Start.y;
		node = points[0];
		node.x = End.x;
		node.y = End.y;
		if(Simplify) this.simplifyPath(points);
		if(RaySimplify) this.raySimplifyPath(points);
		var path = new org.flixel.FlxPath();
		var i = points.length - 1;
		while(i >= 0) {
			node = points[i--];
			if(node != null) path.addPoint(node,true);
		}
		return path;
	}
	,setDirty: function(Dirty) {
		if(Dirty == null) Dirty = true;
		var i = 0;
		var l = this._buffers.length;
		while(i < l) this._buffers[i++].dirty = Dirty;
	}
	,getData: function(Simple) {
		if(Simple == null) Simple = false;
		if(!Simple) return this._data;
		var i = 0;
		var l = this._data.length;
		var data = new Array();
		org.flixel.FlxU.SetArrayLength(data,l);
		while(i < l) {
			data[i] = this._tileObjects[this._data[i]].allowCollisions > 0?1:0;
			i++;
		}
		return data;
	}
	,draw: function() {
		if(this._flickerTimer != 0) {
			this._flicker = !this._flicker;
			if(this._flicker) return;
		}
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var buffer;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) {
			camera = this.cameras[i];
			if(!camera.visible || !camera.exists) continue;
			if(this._buffers[i] == null) this._buffers[i] = new org.flixel.system.FlxTilemapBuffer(this._tileWidth,this._tileHeight,this.widthInTiles,this.heightInTiles,camera);
			buffer = this._buffers[i++];
			this.drawTilemap(buffer,camera);
			org.flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,drawTilemap: function(Buffer,Camera) {
		this._helperPoint.x = this.x - Camera.scroll.x * this.scrollFactor.x;
		this._helperPoint.y = this.y - Camera.scroll.y * this.scrollFactor.y;
		var tileID;
		var debugColor;
		var drawX;
		var drawY;
		var drawItem = Camera.getDrawStackItem(this._atlas,false);
		var currDrawData = drawItem.drawData;
		var currIndex = drawItem.position;
		this._point.x = Camera.scroll.x * this.scrollFactor.x - this.x;
		this._point.y = Camera.scroll.y * this.scrollFactor.y - this.y;
		var screenXInTiles = Math.floor(this._point.x / this._tileWidth);
		var screenYInTiles = Math.floor(this._point.y / this._tileHeight);
		var screenRows = Buffer.rows;
		var screenColumns = Buffer.columns;
		if(screenXInTiles < 0) screenXInTiles = 0;
		if(screenXInTiles > this.widthInTiles - screenColumns) screenXInTiles = this.widthInTiles - screenColumns;
		if(screenYInTiles < 0) screenYInTiles = 0;
		if(screenYInTiles > this.heightInTiles - screenRows) screenYInTiles = this.heightInTiles - screenRows;
		var rowIndex = screenYInTiles * this.widthInTiles + screenXInTiles;
		this._flashPoint.y = 0;
		var row = 0;
		var column;
		var columnIndex;
		var tile;
		var debugTile;
		while(row < screenRows) {
			columnIndex = rowIndex;
			column = 0;
			this._flashPoint.x = 0;
			while(column < screenColumns) {
				tileID = this._rectIDs[columnIndex];
				if(tileID != -1) {
					drawX = this._helperPoint.x + columnIndex % this.widthInTiles * this._tileWidth;
					drawY = this._helperPoint.y + Math.floor(columnIndex / this.widthInTiles) * this._tileHeight;
					currDrawData[currIndex++] = Math.floor(drawX);
					currDrawData[currIndex++] = Math.floor(drawY);
					currDrawData[currIndex++] = tileID;
					currDrawData[currIndex++] = 1;
					currDrawData[currIndex++] = 0;
					currDrawData[currIndex++] = 0;
					currDrawData[currIndex++] = 1;
					if(org.flixel.FlxG.visualDebug && !this.ignoreDrawDebug) {
						tile = this._tileObjects[this._data[columnIndex]];
						if(tile != null) {
							if(tile.allowCollisions <= 0) debugColor = -16740119; else if(tile.allowCollisions != 4369) debugColor = -1040641; else debugColor = -16715227;
							var gfx = Camera._effectsLayer.get_graphics();
							gfx.lineStyle(1,debugColor,0.5);
							gfx.drawRect(drawX,drawY,this._tileWidth,this._tileHeight);
						}
					}
				}
				this._flashPoint.x += this._tileWidth;
				column++;
				columnIndex++;
			}
			rowIndex += this.widthInTiles;
			this._flashPoint.y += this._tileHeight;
			row++;
		}
		drawItem.position = currIndex;
		Buffer.x = screenXInTiles * this._tileWidth;
		Buffer.y = screenYInTiles * this._tileHeight;
	}
	,update: function() {
		if(this._lastVisualDebug != org.flixel.FlxG.visualDebug) {
			this._lastVisualDebug = org.flixel.FlxG.visualDebug;
			this.setDirty();
		}
	}
	,loadMap: function(MapData,TileGraphic,TileWidth,TileHeight,AutoTile,StartingIndex,DrawIndex,CollideIndex) {
		if(CollideIndex == null) CollideIndex = 1;
		if(DrawIndex == null) DrawIndex = 1;
		if(StartingIndex == null) StartingIndex = 0;
		if(AutoTile == null) AutoTile = 0;
		if(TileHeight == null) TileHeight = 0;
		if(TileWidth == null) TileWidth = 0;
		this.auto = AutoTile;
		this._startingIndex = StartingIndex <= 0?0:StartingIndex;
		if(js.Boot.__instanceof(MapData,String)) {
			this._data = new Array();
			var columns;
			var rows = MapData.split("\n");
			this.heightInTiles = rows.length;
			var row = 0;
			var column;
			while(row < this.heightInTiles) {
				columns = rows[row++].split(",");
				if(columns.length <= 1) {
					this.heightInTiles = this.heightInTiles - 1;
					continue;
				}
				if(this.widthInTiles == 0) this.widthInTiles = columns.length;
				column = 0;
				while(column < this.widthInTiles) this._data.push(Std.parseInt(columns[column++]));
			}
		} else if(js.Boot.__instanceof(MapData,Array)) this._data = MapData; else throw "Unexpected MapData format '" + Std.string(Type["typeof"](MapData)) + "' passed into loadMap. Map data must be CSV string or Array<Int>.";
		var i;
		this.totalTiles = this._data.length;
		if(this.auto > 0) {
			this._startingIndex = 1;
			DrawIndex = 1;
			CollideIndex = 1;
			i = 0;
			while(i < this.totalTiles) this.autoTile(i++);
		}
		this._tiles = org.flixel.FlxG.addBitmap(TileGraphic);
		this._tileWidth = TileWidth;
		if(this._tileWidth <= 0) this._tileWidth = this._tiles.get_height();
		this._tileHeight = TileHeight;
		if(this._tileHeight <= 0) this._tileHeight = this._tileWidth;
		this._tiles = org.flixel.FlxG.addBitmap(TileGraphic,false,false,null,this._tileWidth,this._tileHeight);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		this._tileObjects = new Array();
		var length = this._tiles.get_width() / this._tileWidth * this._tiles.get_height() / this._tileHeight | 0;
		length += this._startingIndex;
		var _g = 0;
		while(_g < length) {
			var i1 = _g++;
			this._tileObjects[i1] = new org.flixel.system.FlxTile(this,i1,this._tileWidth,this._tileHeight,i1 >= DrawIndex,i1 >= CollideIndex?this.allowCollisions:0);
		}
		this.updateAtlasInfo();
		this.width = this.widthInTiles * this._tileWidth;
		this.height = this.heightInTiles * this._tileHeight;
		return this;
	}
	,destroy: function() {
		this._flashPoint = null;
		this._flashRect = null;
		this._tiles = null;
		var i = 0;
		var l;
		if(this._tileObjects != null) {
			l = this._tileObjects.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._tileObjects[i1].destroy();
			}
			this._tileObjects = null;
		}
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._buffers[i1].destroy();
			}
			this._buffers = null;
		}
		this._data = null;
		this._helperPoint = null;
		this._rectIDs = null;
		org.flixel.FlxObject.prototype.destroy.call(this);
	}
	,_rectIDs: null
	,_helperPoint: null
	,_startingIndex: null
	,_lastVisualDebug: null
	,_tileObjects: null
	,_tileHeight: null
	,_tileWidth: null
	,_data: null
	,_buffers: null
	,_tiles: null
	,_flashRect: null
	,_flashPoint: null
	,totalTiles: null
	,heightInTiles: null
	,widthInTiles: null
	,auto: null
	,__class__: org.flixel.FlxTilemap
});
var com = {}
com.jah2488 = {}
com.jah2488.ld48 = {}
com.jah2488.ld48.Level = function(location) {
	org.flixel.FlxTilemap.call(this);
	this.loadMap(nme.installer.Assets.getText("assets/levels/" + location),"assets/platformTiles.png",16,16,0,0,1,1);
};
$hxClasses["com.jah2488.ld48.Level"] = com.jah2488.ld48.Level;
com.jah2488.ld48.Level.__name__ = ["com","jah2488","ld48","Level"];
com.jah2488.ld48.Level.__super__ = org.flixel.FlxTilemap;
com.jah2488.ld48.Level.prototype = $extend(org.flixel.FlxTilemap.prototype,{
	__class__: com.jah2488.ld48.Level
});
com.jah2488.ld48.enough = {}
com.jah2488.ld48.enough.Registry = function() { }
$hxClasses["com.jah2488.ld48.enough.Registry"] = com.jah2488.ld48.enough.Registry;
com.jah2488.ld48.enough.Registry.__name__ = ["com","jah2488","ld48","enough","Registry"];
com.jah2488.ld48.enough.Registry.player = null;
com.jah2488.ld48.enough.Registry.init = function() {
	com.jah2488.ld48.enough.Registry.player = new com.jah2488.ld48.enough.Player();
}
com.jah2488.ld48.enough.PlatformState = function() {
	org.flixel.FlxState.call(this);
};
$hxClasses["com.jah2488.ld48.enough.PlatformState"] = com.jah2488.ld48.enough.PlatformState;
com.jah2488.ld48.enough.PlatformState.__name__ = ["com","jah2488","ld48","enough","PlatformState"];
com.jah2488.ld48.enough.PlatformState.__super__ = org.flixel.FlxState;
com.jah2488.ld48.enough.PlatformState.prototype = $extend(org.flixel.FlxState.prototype,{
	update: function() {
		org.flixel.FlxG.overlap(this.player,this.level,null,org.flixel.FlxObject.separate);
		org.flixel.FlxG.overlap(this.sprites,this.level,null,org.flixel.FlxObject.separate);
		org.flixel.FlxG.overlap(this.player,this.level,$bind(this,this.touchLevel),null);
		org.flixel.FlxG.overlap(this.player,this.sprites,$bind(this,this.pickUp),org.flixel.FlxObject.separate);
		org.flixel.FlxG.overlap(this.player,this.hazards,$bind(this,this.hazardCollide),null);
		org.flixel.FlxState.prototype.update.call(this);
		if(this.player.y > this.level.height + this.player.height * 4) {
			if(this.player.state() != this.player.NORMAL) this.player.y = 0 - this.player.height; else this.player.die(this.LEVEL_START.x,this.LEVEL_START.y);
		}
		if(this.player.y < 0 - this.player.height * 4) {
			if(this.player.state() != this.player.NORMAL) this.player.y = this.level.height; else this.player.die(this.LEVEL_START.x,this.LEVEL_START.y);
		}
	}
	,hazardCollide: function(player,tile) {
		(js.Boot.__cast(player , com.jah2488.ld48.enough.Player)).die(this.LEVEL_START.x,this.LEVEL_START.y);
	}
	,touchLevel: function(player,tile) {
		var player1 = js.Boot.__cast(player , com.jah2488.ld48.enough.Player);
		if((player1.touching & 256) > 0 && player1.connected == false) {
			player1.connected = true;
			org.flixel.FlxG.play("Click");
		}
	}
	,nextLevel: function() {
		org.flixel.FlxG.switchState(new MenuState());
	}
	,pickUp: function(player,sprite) {
		if((js.Boot.__cast(sprite , com.jah2488.ld48.enough.Tile)).tile == 5) org.flixel.FlxG.flash(-1,1,$bind(this,this.nextLevel)); else {
			org.flixel.FlxG.play("Pickup");
			player.flicker(1);
			(js.Boot.__cast(player , com.jah2488.ld48.enough.Player)).setColor((js.Boot.__cast(sprite , com.jah2488.ld48.enough.Tile)).playerColor);
			sprite.kill();
		}
	}
	,destroy: function() {
		org.flixel.FlxState.prototype.destroy.call(this);
	}
	,assignSpritesToMap: function() {
		var _g = 0, _g1 = [14,15];
		while(_g < _g1.length) {
			var tileNum = _g1[_g];
			++_g;
			var c = this.level.getTileCoords(tileNum,false);
			if(c != null) {
				var _g2 = 0;
				while(_g2 < c.length) {
					var point = c[_g2];
					++_g2;
					var sprite = Type.createInstance(com.jah2488.ld48.enough.Spike,[point.x + 1,point.y - 1]);
					this.hazards.add(sprite);
				}
			}
		}
		var _g = 0, _g1 = [com.jah2488.ld48.enough.Power,com.jah2488.ld48.enough.Door,com.jah2488.ld48.enough.Lava,com.jah2488.ld48.enough.Health,com.jah2488.ld48.enough.Goal];
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			var c = this.spriteLayer.getTileCoords(Type.createInstance(tile,[0,0]).tile,false);
			if(c != null) {
				var _g2 = 0;
				while(_g2 < c.length) {
					var point = c[_g2];
					++_g2;
					var sprite = Type.createInstance(tile,[point.x,point.y]);
					this.sprites.add(sprite);
				}
			}
		}
	}
	,create: function() {
		com.jah2488.ld48.enough.Registry.init();
		org.flixel.FlxG.set_bgColor(-1);
		org.flixel.FlxG.mouse.hide();
		this.LEVEL_START = new org.flixel.FlxPoint(20.0,20.0);
		this.player = com.jah2488.ld48.enough.Registry.player;
		this.player.x = this.LEVEL_START.x;
		this.player.y = this.LEVEL_START.y;
		org.flixel.FlxG.playMusic("Upbeat");
	}
	,hazards: null
	,sprites: null
	,spriteLayer: null
	,level: null
	,player: null
	,LEVEL_START: null
	,__class__: com.jah2488.ld48.enough.PlatformState
});
com.jah2488.ld48.enough.TutorialState = function() {
	com.jah2488.ld48.enough.PlatformState.call(this);
};
$hxClasses["com.jah2488.ld48.enough.TutorialState"] = com.jah2488.ld48.enough.TutorialState;
com.jah2488.ld48.enough.TutorialState.__name__ = ["com","jah2488","ld48","enough","TutorialState"];
com.jah2488.ld48.enough.TutorialState.__super__ = com.jah2488.ld48.enough.PlatformState;
com.jah2488.ld48.enough.TutorialState.prototype = $extend(com.jah2488.ld48.enough.PlatformState.prototype,{
	nextLevel: function() {
		org.flixel.FlxG.switchState(new com.jah2488.ld48.enough.LevelOneState());
	}
	,create: function() {
		com.jah2488.ld48.enough.PlatformState.prototype.create.call(this);
		this.add(this.level = new com.jah2488.ld48.Level("mapCSV_Tutorial_Map2.csv"));
		this.spriteLayer = new com.jah2488.ld48.Level("mapCSV_Tutorial_Map3.csv");
		this.sprites = new org.flixel.FlxGroup();
		this.hazards = new org.flixel.FlxGroup();
		this.add(this.player);
		this.assignSpritesToMap();
		this.add(this.sprites);
		this.add(this.hazards);
		org.flixel.FlxG.camera.setBounds(0,0,this.level.width,this.level.height,true);
		org.flixel.FlxG.camera.follow(this.player);
	}
	,__class__: com.jah2488.ld48.enough.TutorialState
});
com.jah2488.ld48.enough.LevelOneState = function() {
	com.jah2488.ld48.enough.PlatformState.call(this);
};
$hxClasses["com.jah2488.ld48.enough.LevelOneState"] = com.jah2488.ld48.enough.LevelOneState;
com.jah2488.ld48.enough.LevelOneState.__name__ = ["com","jah2488","ld48","enough","LevelOneState"];
com.jah2488.ld48.enough.LevelOneState.__super__ = com.jah2488.ld48.enough.PlatformState;
com.jah2488.ld48.enough.LevelOneState.prototype = $extend(com.jah2488.ld48.enough.PlatformState.prototype,{
	nextLevel: function() {
		org.flixel.FlxG.switchState(new com.jah2488.ld48.enough.LevelTwoState());
	}
	,create: function() {
		com.jah2488.ld48.enough.PlatformState.prototype.create.call(this);
		this.player.y = this.LEVEL_START.y = 100;
		this.player.x = this.LEVEL_START.x = 40;
		this.add(this.level = new com.jah2488.ld48.Level("mapCSV_levelOne_Map1.csv"));
		this.spriteLayer = new com.jah2488.ld48.Level("mapCSV_levelOne_Map2.csv");
		this.sprites = new org.flixel.FlxGroup();
		this.hazards = new org.flixel.FlxGroup();
		this.add(this.player);
		this.assignSpritesToMap();
		this.add(this.sprites);
		this.add(this.hazards);
		org.flixel.FlxG.camera.setBounds(0,0,this.level.width,this.level.height,true);
		org.flixel.FlxG.camera.follow(this.player);
	}
	,__class__: com.jah2488.ld48.enough.LevelOneState
});
com.jah2488.ld48.enough.LevelTwoState = function() {
	com.jah2488.ld48.enough.PlatformState.call(this);
};
$hxClasses["com.jah2488.ld48.enough.LevelTwoState"] = com.jah2488.ld48.enough.LevelTwoState;
com.jah2488.ld48.enough.LevelTwoState.__name__ = ["com","jah2488","ld48","enough","LevelTwoState"];
com.jah2488.ld48.enough.LevelTwoState.__super__ = com.jah2488.ld48.enough.PlatformState;
com.jah2488.ld48.enough.LevelTwoState.prototype = $extend(com.jah2488.ld48.enough.PlatformState.prototype,{
	nextLevel: function() {
		org.flixel.FlxG.switchState(new com.jah2488.ld48.enough.LevelThreeState());
	}
	,create: function() {
		com.jah2488.ld48.enough.PlatformState.prototype.create.call(this);
		this.player.y = this.LEVEL_START.y = 100;
		this.player.x = this.LEVEL_START.x = 40;
		this.add(this.level = new com.jah2488.ld48.Level("mapCSV_LevelTwo_Map1.csv"));
		this.spriteLayer = new com.jah2488.ld48.Level("mapCSV_LevelTwo_Map2.csv");
		this.sprites = new org.flixel.FlxGroup();
		this.hazards = new org.flixel.FlxGroup();
		this.add(this.player);
		this.assignSpritesToMap();
		this.add(this.sprites);
		this.add(this.hazards);
		org.flixel.FlxG.camera.setBounds(0,0,this.level.width,this.level.height,true);
		org.flixel.FlxG.camera.follow(this.player);
	}
	,__class__: com.jah2488.ld48.enough.LevelTwoState
});
com.jah2488.ld48.enough.LevelThreeState = function() {
	com.jah2488.ld48.enough.PlatformState.call(this);
};
$hxClasses["com.jah2488.ld48.enough.LevelThreeState"] = com.jah2488.ld48.enough.LevelThreeState;
com.jah2488.ld48.enough.LevelThreeState.__name__ = ["com","jah2488","ld48","enough","LevelThreeState"];
com.jah2488.ld48.enough.LevelThreeState.__super__ = com.jah2488.ld48.enough.PlatformState;
com.jah2488.ld48.enough.LevelThreeState.prototype = $extend(com.jah2488.ld48.enough.PlatformState.prototype,{
	nextLevel: function() {
		org.flixel.FlxG.switchState(new com.jah2488.ld48.enough.LevelFourState());
	}
	,create: function() {
		com.jah2488.ld48.enough.PlatformState.prototype.create.call(this);
		this.player.y = this.LEVEL_START.y = 100;
		this.player.x = this.LEVEL_START.x = 40;
		this.add(this.level = new com.jah2488.ld48.Level("mapCSV_LevelThree_Map1.csv"));
		this.spriteLayer = new com.jah2488.ld48.Level("mapCSV_LevelThree_Map2.csv");
		this.sprites = new org.flixel.FlxGroup();
		this.hazards = new org.flixel.FlxGroup();
		this.add(this.player);
		this.assignSpritesToMap();
		this.add(this.sprites);
		this.add(this.hazards);
		org.flixel.FlxG.camera.setBounds(0,0,this.level.width,this.level.height,true);
		org.flixel.FlxG.camera.follow(this.player);
	}
	,__class__: com.jah2488.ld48.enough.LevelThreeState
});
com.jah2488.ld48.enough.LevelFourState = function() {
	com.jah2488.ld48.enough.PlatformState.call(this);
};
$hxClasses["com.jah2488.ld48.enough.LevelFourState"] = com.jah2488.ld48.enough.LevelFourState;
com.jah2488.ld48.enough.LevelFourState.__name__ = ["com","jah2488","ld48","enough","LevelFourState"];
com.jah2488.ld48.enough.LevelFourState.__super__ = com.jah2488.ld48.enough.PlatformState;
com.jah2488.ld48.enough.LevelFourState.prototype = $extend(com.jah2488.ld48.enough.PlatformState.prototype,{
	nextLevel: function() {
		org.flixel.FlxG.switchState(new com.jah2488.ld48.enough.WinState());
	}
	,create: function() {
		com.jah2488.ld48.enough.PlatformState.prototype.create.call(this);
		this.player.y = this.LEVEL_START.y = 100;
		this.player.x = this.LEVEL_START.x = 40;
		this.add(this.level = new com.jah2488.ld48.Level("mapCSV_LevelFour_Map1.csv"));
		this.spriteLayer = new com.jah2488.ld48.Level("mapCSV_LevelFour_Map2.csv");
		this.sprites = new org.flixel.FlxGroup();
		this.hazards = new org.flixel.FlxGroup();
		this.add(this.player);
		this.assignSpritesToMap();
		this.add(this.sprites);
		this.add(this.hazards);
		org.flixel.FlxG.camera.setBounds(0,0,this.level.width,this.level.height,true);
		org.flixel.FlxG.camera.follow(this.player);
	}
	,__class__: com.jah2488.ld48.enough.LevelFourState
});
com.jah2488.ld48.enough.WinState = function() {
	com.jah2488.ld48.enough.PlatformState.call(this);
};
$hxClasses["com.jah2488.ld48.enough.WinState"] = com.jah2488.ld48.enough.WinState;
com.jah2488.ld48.enough.WinState.__name__ = ["com","jah2488","ld48","enough","WinState"];
com.jah2488.ld48.enough.WinState.__super__ = com.jah2488.ld48.enough.PlatformState;
com.jah2488.ld48.enough.WinState.prototype = $extend(com.jah2488.ld48.enough.PlatformState.prototype,{
	create: function() {
		com.jah2488.ld48.enough.PlatformState.prototype.create.call(this);
		this.credits = new org.flixel.FlxText(org.flixel.FlxG.width / 2 - 75,org.flixel.FlxG.height * 0.95,75,"@JAH2488");
		this.credits.set_color(-16777216);
		this.level = new com.jah2488.ld48.Level("mapCSV_Win_Map1.csv");
		this.sprites = new org.flixel.FlxGroup();
		var _g = 0, _g1 = [1,2,3];
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			var c = this.level.getTileCoords(tile,false);
			if(c != null) {
				var _g2 = 0;
				while(_g2 < c.length) {
					var point = c[_g2];
					++_g2;
					var sprite = Type.createInstance(com.jah2488.ld48.enough.World,[point.x,point.y]);
					sprite.set_frame(3);
					this.sprites.add(sprite);
				}
			}
		}
		this.add(this.sprites);
		this.add(this.credits);
		org.flixel.FlxG.camera.setBounds(0,0,this.level.width,this.level.height,true);
	}
	,credits: null
	,__class__: com.jah2488.ld48.enough.WinState
});
org.flixel.FlxSprite = function(X,Y,SimpleGraphic) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._calculatedPixelsFacing = 16;
	this._calculatedPixelsIndex = -1;
	this._blendInt = 0;
	org.flixel.FlxObject.call(this,X,Y);
	this._flashPoint = new browser.geom.Point();
	this._flashRect = new browser.geom.Rectangle();
	this._flashRect2 = new browser.geom.Rectangle();
	this._flashPointZero = new browser.geom.Point();
	this.offset = new org.flixel.FlxPoint();
	this.origin = new org.flixel.FlxPoint();
	this.scale = new org.flixel.FlxPoint(1.0,1.0);
	this._color = 16777215;
	this.set_alpha(1.0);
	this._blend = null;
	this.set_antialiasing(false);
	this.cameras = null;
	this.finished = false;
	this.paused = true;
	this.set_facing(16);
	this._animations = new Hash();
	this._flipped = 0;
	this._curAnim = null;
	this._curFrame = 0;
	this._curIndex = 0;
	this._frameTimer = 0;
	this._matrix = new browser.geom.Matrix();
	this._callback = null;
	this._red = 1.0;
	this._green = 1.0;
	this._blue = 1.0;
	this._frameID = 0;
	this._additionalAngle = 0.0;
	if(SimpleGraphic == null) SimpleGraphic = org.flixel.FlxAssets.imgDefault;
	this.loadGraphic(SimpleGraphic);
};
$hxClasses["org.flixel.FlxSprite"] = org.flixel.FlxSprite;
org.flixel.FlxSprite.__name__ = ["org","flixel","FlxSprite"];
org.flixel.FlxSprite.__super__ = org.flixel.FlxObject;
org.flixel.FlxSprite.prototype = $extend(org.flixel.FlxObject.prototype,{
	overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(this.scale.x == 1 && this.scale.y == 1) return org.flixel.FlxObject.prototype.overlapsPoint.call(this,point,InScreenSpace,Camera);
		if(!InScreenSpace) return point.x > this.x - 0.5 * this.width * (this.scale.x - 1) && point.x < this.x + this.width + 0.5 * this.width * (this.scale.x - 1) && point.y > this.y - 0.5 * this.height * (this.scale.y - 1) && point.y < this.y + this.height + 0.5 * this.height * (this.scale.y - 1);
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var X = point.x - Camera.scroll.x;
		var Y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		return X > this._point.x - 0.5 * this.width * (this.scale.x - 1) && X < this._point.x + this.width + 0.5 * this.width * (this.scale.x - 1) && Y > this._point.y - 0.5 * this.height * (this.scale.y - 1) && Y < this._point.y + this.height + 0.5 * this.height * (this.scale.y - 1);
	}
	,updateFrameData: function() {
		if(this._node != null && this.frameWidth >= 1 && this.frameHeight >= 1) {
			if(this.frames > 1) this._framesData = this._node.addSpriteFramesData(this.frameWidth | 0,this.frameHeight | 0,null,0,0,0,0,1,1); else this._framesData = this._node.addSpriteFramesData(this.frameWidth | 0,this.frameHeight | 0);
			this._frameID = this._framesData.frameIDs[this._curIndex];
		}
	}
	,set_blend: function(value) {
		switch( (value)[1] ) {
		case 0:
			this._blendInt = 65536;
			break;
		default:
			this._blendInt = 0;
		}
		this._blend = value;
		return value;
	}
	,get_blend: function() {
		return this._blend;
	}
	,blend: null
	,simpleRenderSprite: function() {
		return (this.angle == 0 && this._additionalAngle == 0 || this.bakedRotation > 0) && this.scale.x == 1 && this.scale.y == 1;
	}
	,get_simpleRender: function() {
		return (this.angle == 0 && this._additionalAngle == 0 || this.bakedRotation > 0) && this.scale.x == 1 && this.scale.y == 1;
	}
	,simpleRender: null
	,bakedRotation: null
	,set_antialiasing: function(val) {
		this.antialiasing = val;
		return val;
	}
	,antialiasing: null
	,removeAllFilters: function() {
		if(this.filters == null) return;
		while(this.filters.length != 0) this.filters.pop();
		this.drawFrame(true);
		this._calculatedPixelsIndex = -1;
		this.updateAtlasInfo(true);
		this.filters = null;
	}
	,removeFilter: function(filter) {
		if(this.filters == null || filter == null) return;
		HxOverrides.remove(this.filters,filter);
		this.drawFrame(true);
		if(this.filters.length == 0) this.filters = null;
	}
	,setClipping: function(width,height) {
		var tempSpr = new org.flixel.FlxSprite(0,0,this._pixels);
		var diffSize = new org.flixel.FlxPoint(width - this.frameWidth,height - this.frameHeight);
		this.makeGraphic(width,height,0);
		this.stamp(tempSpr,diffSize.x / 2 | 0,diffSize.y / 2 | 0);
		this.x -= diffSize.x * 0.5;
		this.y -= diffSize.y * 0.5;
		tempSpr.destroy();
	}
	,addFilter: function(filter,updateSize,permanent) {
		if(permanent == null) permanent = false;
		if(updateSize != null && permanent == false) this.setClipping(this.frameWidth + (updateSize.x | 0),this.frameHeight + (updateSize.y | 0));
		if(!permanent) {
			if(this.filters == null) this.filters = new Array();
			this.filters.push(filter);
		} else this._pixels.applyFilter(this._pixels,this._flashRect,this._flashPointZero,filter);
		this._calculatedPixelsIndex = -1;
		this.updateAtlasInfo(true);
		this.drawFrame(true);
	}
	,calcFrame: function(AreYouSure) {
		if(AreYouSure == null) AreYouSure = false;
		if(AreYouSure) {
			if(this._calculatedPixelsIndex == this._curIndex && this._calculatedPixelsFacing == this.facing) return;
			if(this.framePixels == null || this.framePixels.get_width() != this.width || this.framePixels.get_height() != this.height) this.framePixels = new browser.display.BitmapData(this.frameWidth | 0,this.frameHeight | 0);
			var indexX = this._curIndex * (this.frameWidth + 1);
			this._calculatedPixelsIndex = this._curIndex;
			this._calculatedPixelsFacing = this.facing;
			var indexY = 0;
			var widthHelper = this._pixels.get_width();
			if(indexX >= widthHelper) {
				indexY = (indexX / widthHelper | 0) * (this.frameHeight + 1);
				indexX %= widthHelper;
			}
			this._flashRect.x = indexX;
			this._flashRect.y = indexY;
			this.framePixels.copyPixels(this._pixels,this._flashRect,this._flashPointZero);
			if(this._flipped != 0 && this.facing == 1) {
				var temp = this.framePixels.clone();
				this._matrix.identity();
				this._matrix.scale(-1,1);
				this._matrix.translate(temp._nmeTextureBuffer != null?temp._nmeTextureBuffer.width:0,0);
				this.framePixels.fillRect(this.framePixels.rect,0);
				this.framePixels.draw(temp,this._matrix);
			}
			this._flashRect.x = this._flashRect.y = 0;
			if(this._useColorTransform) this.framePixels.colorTransform(this._flashRect,this._colorTransform);
		}
		if(this._callback != null) this._callback(this._curAnim != null?this._curAnim.name:null,this._curFrame,this._curIndex);
		this.dirty = false;
		if(this.filters != null) {
			var _g = 0, _g1 = this.filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				this.framePixels.applyFilter(this.framePixels,this._flashRect,this._flashPointZero,filter);
			}
		}
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) Mask = 255;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		this._point.x = this._point.x - this.offset.x;
		this._point.y = this._point.y - this.offset.y;
		this._flashPoint.x = point.x - Camera.scroll.x - this._point.x;
		this._flashPoint.y = point.y - Camera.scroll.y - this._point.y;
		if(this._flashPoint.x < 0 || this._flashPoint.x > this.frameWidth || this._flashPoint.y < 0 || this._flashPoint.y > this.frameHeight) return false; else {
			var indexX = this._curIndex * (this.frameWidth + 1);
			var indexY = 0;
			var widthHelper = this._flipped != 0?this._flipped:this._pixels.get_width();
			if(indexX >= widthHelper) {
				indexY = (indexX / widthHelper | 0) * (this.frameHeight + 1);
				indexX %= widthHelper;
			}
			var pixelColor = 0;
			if(this._flipped != 0 && this.facing == 1) pixelColor = this._pixels.getPixel32(indexX + this.frameWidth - this._flashPoint.x | 0,indexY + this._flashPoint.y | 0); else pixelColor = this._pixels.getPixel32(indexX + this._flashPoint.x | 0,indexY + this._flashPoint.y | 0);
			var pixelAlpha = pixelColor >> 24 & 255;
			return pixelAlpha >= Mask;
		}
	}
	,onScreenSprite: function(Camera) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		this._point.x = this._point.x - this.offset.x;
		this._point.y = this._point.y - this.offset.y;
		var result = false;
		var notRotated = this.angle == 0.0;
		notRotated = notRotated && this._additionalAngle != 0.0;
		if((notRotated || this.bakedRotation > 0) && this.scale.x == 1 && this.scale.y == 1) result = this._point.x + this.frameWidth > 0 && this._point.x < Camera.width && this._point.y + this.frameHeight > 0 && this._point.y < Camera.height; else {
			var halfWidth = 0.5 * this.frameWidth;
			var halfHeight = 0.5 * this.frameHeight;
			var absScaleX = this.scale.x > 0?this.scale.x:-this.scale.x;
			var absScaleY = this.scale.y > 0?this.scale.y:-this.scale.y;
			var radius = (this.frameWidth >= this.frameHeight?this.frameWidth:this.frameHeight) * (absScaleX >= absScaleY?absScaleX:absScaleY);
			this._point.x += halfWidth;
			this._point.y += halfHeight;
			result = this._point.x + radius > 0 && this._point.x - radius < Camera.width && this._point.y + radius > 0 && this._point.y - radius < Camera.height;
		}
		return result;
	}
	,onScreen: function(Camera) {
		return this.onScreenSprite(Camera);
	}
	,set_curAnim: function(AnimName) {
		this.play(AnimName);
		return AnimName;
	}
	,get_curAnim: function() {
		if(this._curAnim != null && !this.finished) return this._curAnim.name;
		return null;
	}
	,set_frame: function(Frame) {
		this._curAnim = null;
		this._curIndex = Frame % this.frames;
		if(this._framesData != null) this._frameID = this._framesData.frameIDs[this._curIndex];
		this.dirty = true;
		return Frame;
	}
	,get_frame: function() {
		return this._curIndex;
	}
	,set_color: function(Color) {
		Color &= 16777215;
		if(this._color == Color) return this._color;
		this._color = Color;
		if(this.alpha != 1 || this._color != 16777215) {
			if(this._colorTransform == null) this._colorTransform = new browser.geom.ColorTransform((this._color >> 16) / 255,(this._color >> 8 & 255) / 255,(this._color & 255) / 255,this.alpha); else {
				this._colorTransform.redMultiplier = (this._color >> 16) / 255;
				this._colorTransform.greenMultiplier = (this._color >> 8 & 255) / 255;
				this._colorTransform.blueMultiplier = (this._color & 255) / 255;
				this._colorTransform.alphaMultiplier = this.alpha;
			}
			this._useColorTransform = true;
		} else {
			if(this._colorTransform != null) {
				this._colorTransform.redMultiplier = 1;
				this._colorTransform.greenMultiplier = 1;
				this._colorTransform.blueMultiplier = 1;
				this._colorTransform.alphaMultiplier = 1;
			}
			this._useColorTransform = false;
		}
		this.dirty = true;
		this._red = (this._color >> 16) / 255;
		this._green = (this._color >> 8 & 255) / 255;
		this._blue = (this._color & 255) / 255;
		return this._color;
	}
	,get_color: function() {
		return this._color;
	}
	,set_alpha: function(Alpha) {
		if(Alpha > 1) Alpha = 1;
		if(Alpha < 0) Alpha = 0;
		if(Alpha == this.alpha) return this.alpha;
		this.alpha = Alpha;
		return this.alpha;
	}
	,alpha: null
	,set_facing: function(Direction) {
		if(this.facing != Direction) this.dirty = true;
		this.facing = Direction;
		return Direction;
	}
	,set_pixels: function(Pixels) {
		this._pixels = Pixels;
		this.width = this.frameWidth = this._pixels.get_width();
		this.height = this.frameHeight = this._pixels.get_height();
		this.resetHelpers();
		this._bitmapDataKey = org.flixel.FlxG.getCacheKeyFor(this._pixels);
		if(this._bitmapDataKey == null) {
			this._bitmapDataKey = org.flixel.FlxG.getUniqueBitmapKey();
			org.flixel.FlxG.addBitmap(Pixels,false,false,this._bitmapDataKey);
		}
		this._calculatedPixelsIndex = -1;
		this.updateAtlasInfo(true);
		return this._pixels;
	}
	,get_pixels: function() {
		return this._pixels;
	}
	,pixels: null
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) FetchPositions = false;
		var positions = null;
		if(FetchPositions) positions = new Array();
		var row = 0;
		var column;
		var rows = this._pixels.get_height();
		var columns = this._pixels.get_width();
		while(row < rows) {
			column = 0;
			while(column < columns) {
				if(this._pixels.getPixel32(column,row) == Color) {
					this._pixels.setPixel32(column,row,NewColor);
					if(FetchPositions) positions.push(new org.flixel.FlxPoint(column,row));
					this.dirty = true;
				}
				column++;
			}
			row++;
		}
		this.updateAtlasInfo(true);
		return positions;
	}
	,centerOffsets: function(AdjustPosition) {
		if(AdjustPosition == null) AdjustPosition = false;
		this.offset.x = (this.frameWidth - this.width) * 0.5;
		this.offset.y = (this.frameHeight - this.height) * 0.5;
		if(AdjustPosition) {
			this.x += this.offset.x;
			this.y += this.offset.y;
		}
	}
	,setOriginToCorner: function() {
		this.origin.x = this.origin.y = 0;
	}
	,randomFrame: function() {
		this._curAnim = null;
		this._curIndex = (function($this) {
			var $r;
			org.flixel.FlxG.globalSeed = 69621 * (org.flixel.FlxG.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.FlxG.globalSeed <= 0) org.flixel.FlxG.globalSeed += 1;
			$r = org.flixel.FlxG.globalSeed;
			return $r;
		}(this)) * (this._pixels.get_width() / this.frameWidth) | 0;
		if(this._framesData != null) this._frameID = this._framesData.frameIDs[this._curIndex];
		this.dirty = true;
	}
	,getAnimation: function(name) {
		return this._animations.get(name);
	}
	,play: function(AnimName,Force) {
		if(Force == null) Force = false;
		if(!Force && this._curAnim != null && AnimName == this._curAnim.name && (this._curAnim.looped || !this.finished)) {
			this.paused = false;
			return;
		}
		this._curFrame = 0;
		this._curIndex = 0;
		if(this._framesData != null) this._frameID = this._framesData.frameIDs[this._curIndex];
		this._frameTimer = 0;
		if(this._animations.exists(AnimName)) {
			this._curAnim = this._animations.get(AnimName);
			if(this._curAnim.delay <= 0) this.finished = true; else this.finished = false;
			this._curIndex = this._curAnim.frames[this._curFrame];
			if(this._framesData != null) this._frameID = this._framesData.frameIDs[this._curIndex];
			this.dirty = true;
			this.paused = false;
			return;
		}
		org.flixel.FlxG.log("WARNING: No animation called \"" + AnimName + "\"");
	}
	,addAnimationCallback: function(AnimationCallback) {
		this._callback = AnimationCallback;
	}
	,addAnimation: function(Name,Frames,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		this._animations.set(Name,new org.flixel.system.FlxAnim(Name,Frames,FrameRate,Looped));
	}
	,drawFrame: function(Force) {
		if(Force == null) Force = false;
		this.calcFrame(true);
	}
	,updateAnimation: function() {
		if(this.bakedRotation > 0) {
			var oldIndex = this._curIndex;
			var angleHelper = Math.floor((this.angle + this._additionalAngle) % 360);
			while(angleHelper < 0) angleHelper += 360;
			this._curIndex = Math.floor(angleHelper / this.bakedRotation + 0.5);
			if(this._framesData != null) this._frameID = this._framesData.frameIDs[this._curIndex];
			if(oldIndex != this._curIndex) this.dirty = true;
		} else if(this._curAnim != null && this._curAnim.delay > 0 && (this._curAnim.looped || !this.finished) && !this.paused) {
			this._frameTimer += org.flixel.FlxG.elapsed;
			while(this._frameTimer > this._curAnim.delay) {
				this._frameTimer = this._frameTimer - this._curAnim.delay;
				if(this._curFrame == this._curAnim.frames.length - 1) {
					if(this._curAnim.looped) this._curFrame = 0;
					this.finished = true;
				} else this._curFrame++;
				this._curIndex = this._curAnim.frames[this._curFrame];
				if(this._framesData != null) this._frameID = this._framesData.frameIDs[this._curIndex];
				this.dirty = true;
			}
		}
		if(this.dirty) this.calcFrame();
	}
	,fill: function(Color) {
		this._pixels.fillRect(this._flashRect2,Color);
		if(this._pixels != this.framePixels) this.dirty = true;
		this._calculatedPixelsIndex = -1;
		this.updateAtlasInfo(true);
	}
	,drawLine: function(StartX,StartY,EndX,EndY,Color,Thickness) {
		if(Thickness == null) Thickness = 1;
		var gfx = org.flixel.FlxG.flashGfx;
		gfx.clear();
		gfx.moveTo(StartX,StartY);
		var alphaComponent = (Color >> 24 & 255) / 255;
		if(alphaComponent <= 0) alphaComponent = 1;
		gfx.lineStyle(Thickness,Color,alphaComponent);
		gfx.lineTo(EndX,EndY);
		this._pixels.draw(org.flixel.FlxG.flashGfxSprite);
		this.dirty = true;
		this._calculatedPixelsIndex = -1;
		this.updateAtlasInfo(true);
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		Brush.drawFrame();
		var bitmapData = Brush.framePixels;
		if((Brush.angle == 0 || Brush.bakedRotation > 0) && Brush.scale.x == 1 && Brush.scale.y == 1 && Brush.get_blend() == null) {
			this._flashPoint.x = X;
			this._flashPoint.y = Y;
			this._flashRect2.width = bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0;
			this._flashRect2.height = bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0;
			this._pixels.copyPixels(bitmapData,this._flashRect2,this._flashPoint,null,null,true);
			this._flashRect2.width = this._pixels.get_width();
			this._flashRect2.height = this._pixels.get_height();
			return;
		}
		this._matrix.identity();
		this._matrix.translate(-Brush.origin.x,-Brush.origin.y);
		this._matrix.scale(Brush.scale.x,Brush.scale.y);
		if(Brush.angle != 0) this._matrix.rotate(Brush.angle * (Math.PI / 180));
		this._matrix.translate(X + Brush.origin.x,Y + Brush.origin.y);
		var brushBlend = Brush.get_blend();
		this._calculatedPixelsIndex = -1;
		this._pixels.draw(bitmapData,this._matrix,null,brushBlend,null,Brush.antialiasing);
		this.updateAtlasInfo(true);
	}
	,draw: function() {
		if(this._atlas == null) return;
		if(this._flickerTimer != 0) {
			this._flicker = !this._flicker;
			if(this._flicker) return;
		}
		if(this.dirty) this.calcFrame();
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		var drawItem;
		var currDrawData;
		var currIndex;
		var useAlpha = this.alpha < 1;
		var radians;
		var cos;
		var sin;
		while(i < l) {
			camera = this.cameras[i++];
			if(!this.onScreenSprite(camera) || !camera.visible || !camera.exists) continue;
			drawItem = camera.getDrawStackItem(this._atlas,useAlpha);
			currDrawData = drawItem.drawData;
			currIndex = drawItem.position;
			this._point.x = this.x - camera.scroll.x * this.scrollFactor.x - this.offset.x;
			this._point.y = this.y - camera.scroll.y * this.scrollFactor.y - this.offset.y;
			this._point.x = this._point.x + this.origin.x;
			this._point.y = this._point.y + this.origin.y;
			this._point.x = Math.floor(this._point.x);
			this._point.y = Math.floor(this._point.y);
			var csx = 1;
			var ssy = 0;
			var ssx = 0;
			var csy = 1;
			var x2 = 0.0;
			var y2 = 0.0;
			if(!((this.angle == 0 && this._additionalAngle == 0 || this.bakedRotation > 0) && this.scale.x == 1 && this.scale.y == 1)) {
				radians = -(this.angle + this._additionalAngle) * (Math.PI / 180);
				cos = Math.cos(radians);
				sin = Math.sin(radians);
				csx = cos * this.scale.x;
				ssy = sin * this.scale.y;
				ssx = sin * this.scale.x;
				csy = cos * this.scale.y;
				var x1 = this.origin.x - this._halfWidth;
				var y1 = this.origin.y - this._halfHeight;
				x2 = x1 * csx + y1 * ssy;
				y2 = -x1 * ssx + y1 * csy;
			}
			currDrawData[currIndex++] = this._point.x - x2;
			currDrawData[currIndex++] = this._point.y - y2;
			currDrawData[currIndex++] = this._frameID;
			if(this._flipped != 0 && this.facing == 1) {
				currDrawData[currIndex++] = -csx;
				currDrawData[currIndex++] = ssy;
				currDrawData[currIndex++] = ssx;
				currDrawData[currIndex++] = csy;
			} else {
				currDrawData[currIndex++] = csx;
				currDrawData[currIndex++] = ssy;
				currDrawData[currIndex++] = -ssx;
				currDrawData[currIndex++] = csy;
			}
			if(useAlpha) currDrawData[currIndex++] = this.alpha;
			drawItem.position = currIndex;
			org.flixel.FlxBasic._VISIBLECOUNT++;
			if(org.flixel.FlxG.visualDebug && !this.ignoreDrawDebug) this.drawDebug(camera);
		}
	}
	,isColored: function() {
		return this._color < 16777215;
	}
	,postUpdate: function() {
		org.flixel.FlxObject.prototype.postUpdate.call(this);
		this.updateAnimation();
	}
	,resetHelpers: function() {
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
		this._flashRect2.x = 0;
		this._flashRect2.y = 0;
		this._flashRect2.width = this._pixels.get_width();
		this._flashRect2.height = this._pixels.get_height();
		this.origin.make(this.frameWidth * 0.5,this.frameHeight * 0.5);
		this.frames = this._flashRect2.width / (this._flashRect.width + 1) * this._flashRect2.height / (this._flashRect.height + 1) | 0;
		if(this.frames == 0) this.frames = 1;
		if(this._flipped > 0) this.frames *= 2;
		this._curIndex = 0;
		if(this._framesData != null) this._frameID = this._framesData.frameIDs[this._curIndex];
		this._halfWidth = this.frameWidth * 0.5;
		this._halfHeight = this.frameHeight * 0.5;
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Color == null) Color = -1;
		this.bakedRotation = 0;
		this._pixels = org.flixel.FlxG.createBitmap(Width,Height,Color,Unique,Key);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		this._calculatedPixelsIndex = -1;
		this.width = this.frameWidth = this._pixels.get_width();
		this.height = this.frameHeight = this._pixels.get_height();
		this.resetHelpers();
		this.updateAtlasInfo();
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Frame == null) Frame = -1;
		if(Rotations == null) Rotations = 16;
		var rows = Math.sqrt(Rotations) | 0;
		var brush = org.flixel.FlxG.addBitmap(Graphic,false,false,Key);
		if(Frame >= 0) {
			var full = brush;
			brush = new browser.display.BitmapData(full._nmeTextureBuffer != null?full._nmeTextureBuffer.height:0,full._nmeTextureBuffer != null?full._nmeTextureBuffer.height:0);
			var rx = Frame * (brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0);
			var ry = 0;
			var fw = full._nmeTextureBuffer != null?full._nmeTextureBuffer.width:0;
			if(rx >= fw) {
				ry = (rx / fw | 0) * (brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0);
				rx %= fw;
			}
			this._flashRect.x = rx;
			this._flashRect.y = ry;
			this._flashRect.width = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0;
			this._flashRect.height = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0;
			brush.copyPixels(full,this._flashRect,this._flashPointZero);
		}
		var max = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0;
		if((brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0) > max) max = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0;
		if(AutoBuffer) max = max * 1.5 | 0;
		var columns = org.flixel.FlxU.ceil(Rotations / rows);
		this.width = max * columns;
		this.height = max * rows;
		var key = "";
		if(js.Boot.__instanceof(Graphic,String)) key = Graphic; else if(js.Boot.__instanceof(Graphic,Class)) key = Type.getClassName(Graphic); else if(js.Boot.__instanceof(Graphic,browser.display.BitmapData) && Key != null) key = Key; else return null;
		key += ":" + Frame + ":" + this.width + "x" + this.height + ":" + Rotations;
		var skipGen = org.flixel.FlxG.checkBitmapCache(key);
		this._pixels = org.flixel.FlxG.createBitmap((this.width | 0) + columns,(this.height | 0) + rows,0,true,key);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		this._calculatedPixelsIndex = -1;
		this.width = this.frameWidth = this._pixels.get_width();
		this.height = this.frameHeight = this._pixels.get_height();
		this.bakedRotation = 360 / Rotations;
		if(!skipGen) {
			var row = 0;
			var column;
			var bakedAngle = 0;
			var halfBrushWidth = (brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0) * 0.5 | 0;
			var halfBrushHeight = (brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0) * 0.5 | 0;
			var midpointX = max * 0.5 | 0;
			var midpointY = max * 0.5 | 0;
			while(row < rows) {
				column = 0;
				while(column < columns) {
					this._matrix.identity();
					this._matrix.translate(-halfBrushWidth,-halfBrushHeight);
					this._matrix.rotate(bakedAngle * (Math.PI / 180));
					this._matrix.translate(max * column + midpointX + column,midpointY + row);
					bakedAngle += this.bakedRotation;
					this._pixels.draw(brush,this._matrix,null,null,null,AntiAliasing);
					column++;
				}
				midpointY += max;
				row++;
			}
		}
		this.frameWidth = this.frameHeight = max;
		this.width = this.height = max;
		this.resetHelpers();
		if(AutoBuffer) {
			this.width = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0;
			this.height = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0;
			this.centerOffsets();
		}
		this.set_antialiasing(AntiAliasing);
		this.updateAtlasInfo();
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Reverse,Width,Height,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Reverse == null) Reverse = false;
		if(Animated == null) Animated = false;
		this.bakedRotation = 0;
		this._pixels = org.flixel.FlxG.addBitmap(Graphic,false,Unique,Key);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		this._calculatedPixelsIndex = -1;
		if(Reverse) this._flipped = this._pixels.get_width() >> 1; else this._flipped = 0;
		if(Width == 0) {
			if(Animated) Width = this._pixels.get_height(); else if(this._flipped > 0) Width = this._pixels.get_width(); else Width = this._pixels.get_width();
		}
		this.width = this.frameWidth = Width;
		if(Height == 0) {
			if(Animated) Height = this.width | 0; else Height = this._pixels.get_height();
		}
		if(Key != null && (Width != 0 || Height != 0)) Key += "FrameSize:" + Width + "_" + Height;
		this._pixels = org.flixel.FlxG.addBitmap(Graphic,false,Unique,Key,Width,Height);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		this.height = this.frameHeight = Height;
		this.resetHelpers();
		this.updateAtlasInfo();
		return this;
	}
	,destroy: function() {
		if(this._animations != null) {
			var $it0 = this._animations.iterator();
			while( $it0.hasNext() ) {
				var anim = $it0.next();
				if(anim != null) anim.destroy();
			}
			this._animations = null;
		}
		this._flashPoint = null;
		this._flashRect = null;
		this._flashRect2 = null;
		this._flashPointZero = null;
		this.offset = null;
		this.origin = null;
		this.scale = null;
		this._curAnim = null;
		this._matrix = null;
		this._callback = null;
		this._colorTransform = null;
		if(this.framePixels != null) this.framePixels.dispose();
		this.framePixels = null;
		this._blend = null;
		org.flixel.FlxObject.prototype.destroy.call(this);
	}
	,_additionalAngle: null
	,_halfHeight: null
	,_halfWidth: null
	,_blue: null
	,_green: null
	,_red: null
	,_frameID: null
	,filters: null
	,_matrix: null
	,_useColorTransform: null
	,_colorTransform: null
	,_flashPointZero: null
	,_flashRect2: null
	,_flashRect: null
	,_flashPoint: null
	,_pixels: null
	,_color: null
	,_callback: null
	,_frameTimer: null
	,_curIndex: null
	,_curFrame: null
	,_curAnim: null
	,_animations: null
	,dirty: null
	,framePixels: null
	,frames: null
	,frameHeight: null
	,frameWidth: null
	,paused: null
	,finished: null
	,_calculatedPixelsFacing: null
	,_calculatedPixelsIndex: null
	,_blendInt: null
	,_blend: null
	,scale: null
	,offset: null
	,origin: null
	,curAnim: null
	,get_flipped: function() {
		return this._flipped;
	}
	,_flipped: null
	,flipped: null
	,frame: null
	,color: null
	,facing: null
	,__class__: org.flixel.FlxSprite
	,__properties__: $extend(org.flixel.FlxObject.prototype.__properties__,{set_facing:"set_facing",set_color:"set_color",get_color:"get_color",set_frame:"set_frame",get_frame:"get_frame",get_flipped:"get_flipped",set_curAnim:"set_curAnim",get_curAnim:"get_curAnim",set_pixels:"set_pixels",get_pixels:"get_pixels",set_alpha:"set_alpha",set_antialiasing:"set_antialiasing",get_simpleRender:"get_simpleRender",set_blend:"set_blend",get_blend:"get_blend"})
});
com.jah2488.ld48.enough.Player = function() {
	this.HEALTH = 1;
	this.DOOR = 2;
	this.LAVA = 3;
	this.POWER = 4;
	this.NORMAL = 0;
	this.upsidedown = 1;
	this.connected = false;
	this.GRAVITY = 375;
	org.flixel.FlxSprite.call(this);
	this.loadGraphic("assets/player.png",true,true,16,16);
	this.maxVelocity.x = 175;
	this.maxVelocity.y = 250;
	this.acceleration.y = this.GRAVITY;
	this.drag.x = this.maxVelocity.x * 4;
	this.PLAYER_SPEED = this.maxVelocity.x * 3;
};
$hxClasses["com.jah2488.ld48.enough.Player"] = com.jah2488.ld48.enough.Player;
com.jah2488.ld48.enough.Player.__name__ = ["com","jah2488","ld48","enough","Player"];
com.jah2488.ld48.enough.Player.__super__ = org.flixel.FlxSprite;
com.jah2488.ld48.enough.Player.prototype = $extend(org.flixel.FlxSprite.prototype,{
	update: function() {
		org.flixel.FlxSprite.prototype.update.call(this);
		if((this.touching & 256) > 0) this.connected = true; else this.connected = false;
		if(this.state() == this.LAVA) {
			this.acceleration.y = 25;
			this.acceleration.x = 0;
		} else if(this.state() == this.DOOR) {
			this.acceleration.x = 0;
			this.acceleration.y = -this.GRAVITY;
		} else {
			this.acceleration.x = 0;
			this.acceleration.y = this.GRAVITY * this.upsidedown;
		}
		if(this.acceleration.y < 0) {
			if(this.angle < 180) this.angle += 20; else this.angle = 180;
		} else if(this.angle > 0) this.angle -= 10; else this.angle = 0;
		if(org.flixel.FlxG.keys.LEFT || org.flixel.FlxG.keys.A) {
			if(this.state() != this.DOOR) this.set_facing(1); else this.set_facing(16);
			this.acceleration.x = -this.PLAYER_SPEED;
		}
		if(org.flixel.FlxG.keys.RIGHT || org.flixel.FlxG.keys.D) {
			if(this.state() != this.DOOR) this.set_facing(16); else this.set_facing(1);
			this.acceleration.x = this.PLAYER_SPEED;
		}
		if((this.touching & 4096) > 0 || (this.touching & 256) > 0) {
			if(org.flixel.FlxG.keys.SPACE || org.flixel.FlxG.keys.UP || org.flixel.FlxG.keys.W) {
				if(this.connected == false) org.flixel.FlxG.play("Jump");
				if(this.state() != this.DOOR) this.velocity.y = -(this.upsidedown * (this.maxVelocity.y * 0.60) + org.flixel.FlxU.abs(this.velocity.x / 4)); else this.velocity.y = this.maxVelocity.y * 0.60 + org.flixel.FlxU.abs(this.velocity.x / 4);
			}
		}
		if(org.flixel.FlxG.keys.justReleased("SHIFT")) this.upsidedown *= -1;
	}
	,die: function(x,y) {
		org.flixel.FlxG.play("Hurt");
		this.acceleration.y = this.GRAVITY;
		this.acceleration.x = 0;
		this.set_frame(this.NORMAL);
		this.reset(x,y);
	}
	,state: function() {
		return this.get_frame() | 0;
	}
	,setColor: function(color) {
		this.set_frame(color);
	}
	,HEALTH: null
	,DOOR: null
	,LAVA: null
	,POWER: null
	,NORMAL: null
	,upsidedown: null
	,connected: null
	,GRAVITY: null
	,PLAYER_SPEED: null
	,__class__: com.jah2488.ld48.enough.Player
});
com.jah2488.ld48.enough.Tile = function() {
	this.playerColor = 0;
	this.tile = 0;
	org.flixel.FlxSprite.call(this);
	this.deathTimer = new org.flixel.FlxTimer();
};
$hxClasses["com.jah2488.ld48.enough.Tile"] = com.jah2488.ld48.enough.Tile;
com.jah2488.ld48.enough.Tile.__name__ = ["com","jah2488","ld48","enough","Tile"];
com.jah2488.ld48.enough.Tile.__super__ = org.flixel.FlxSprite;
com.jah2488.ld48.enough.Tile.prototype = $extend(org.flixel.FlxSprite.prototype,{
	update: function() {
		org.flixel.FlxSprite.prototype.update.call(this);
	}
	,reviveTile: function(timer) {
		this.revive();
		this.reset(this.x,this.y);
	}
	,kill: function() {
		org.flixel.FlxSprite.prototype.kill.call(this);
		this.deathTimer.start(3,1,$bind(this,this.reviveTile));
		org.flixel.FlxG.log(this.deathTimer.get_timeLeft());
	}
	,deathTimer: null
	,playerColor: null
	,tile: null
	,__class__: com.jah2488.ld48.enough.Tile
});
com.jah2488.ld48.enough.World = function(x,y) {
	com.jah2488.ld48.enough.Tile.call(this);
	this.tile = 1;
	this.playerColor = 4;
	this.x = x;
	this.y = y;
	this.loadGraphic("assets/world.png",false,false,16,16);
	this.set_frame(1);
};
$hxClasses["com.jah2488.ld48.enough.World"] = com.jah2488.ld48.enough.World;
com.jah2488.ld48.enough.World.__name__ = ["com","jah2488","ld48","enough","World"];
com.jah2488.ld48.enough.World.__super__ = com.jah2488.ld48.enough.Tile;
com.jah2488.ld48.enough.World.prototype = $extend(com.jah2488.ld48.enough.Tile.prototype,{
	__class__: com.jah2488.ld48.enough.World
});
com.jah2488.ld48.enough.Goal = function(x,y) {
	com.jah2488.ld48.enough.Tile.call(this);
	this.tile = 5;
	this.x = x;
	this.y = y;
	this.loadGraphic("assets/goal.png",true,false,16,16);
	this.addAnimation("flow",[0,1,2,3,4],5);
	this.play("flow");
};
$hxClasses["com.jah2488.ld48.enough.Goal"] = com.jah2488.ld48.enough.Goal;
com.jah2488.ld48.enough.Goal.__name__ = ["com","jah2488","ld48","enough","Goal"];
com.jah2488.ld48.enough.Goal.__super__ = com.jah2488.ld48.enough.Tile;
com.jah2488.ld48.enough.Goal.prototype = $extend(com.jah2488.ld48.enough.Tile.prototype,{
	__class__: com.jah2488.ld48.enough.Goal
});
com.jah2488.ld48.enough.Spike = function(x,y) {
	com.jah2488.ld48.enough.Tile.call(this);
	this.tile = 14;
	this.x = x;
	this.y = y;
	this.width = 14;
	this.height = 18;
	this.visible = false;
};
$hxClasses["com.jah2488.ld48.enough.Spike"] = com.jah2488.ld48.enough.Spike;
com.jah2488.ld48.enough.Spike.__name__ = ["com","jah2488","ld48","enough","Spike"];
com.jah2488.ld48.enough.Spike.__super__ = com.jah2488.ld48.enough.Tile;
com.jah2488.ld48.enough.Spike.prototype = $extend(com.jah2488.ld48.enough.Tile.prototype,{
	__class__: com.jah2488.ld48.enough.Spike
});
com.jah2488.ld48.enough.Power = function(x,y) {
	com.jah2488.ld48.enough.Tile.call(this);
	this.tile = 1;
	this.playerColor = 4;
	this.x = x;
	this.y = y;
	this.loadGraphic("assets/cPower.png",true,false,16,16);
	this.addAnimation("flow",[0,1,2,3,4,5,6,7,8,9,10,11,12,13],15);
	this.play("flow");
};
$hxClasses["com.jah2488.ld48.enough.Power"] = com.jah2488.ld48.enough.Power;
com.jah2488.ld48.enough.Power.__name__ = ["com","jah2488","ld48","enough","Power"];
com.jah2488.ld48.enough.Power.__super__ = com.jah2488.ld48.enough.Tile;
com.jah2488.ld48.enough.Power.prototype = $extend(com.jah2488.ld48.enough.Tile.prototype,{
	__class__: com.jah2488.ld48.enough.Power
});
com.jah2488.ld48.enough.Door = function(x,y) {
	com.jah2488.ld48.enough.Tile.call(this);
	this.tile = 3;
	this.playerColor = 2;
	this.x = x;
	this.y = y;
	this.loadGraphic("assets/door.png",true,false,16,16);
	this.addAnimation("flow",[0,1,2,3,4,5,6,7,8,9,10,11],15);
	this.play("flow");
};
$hxClasses["com.jah2488.ld48.enough.Door"] = com.jah2488.ld48.enough.Door;
com.jah2488.ld48.enough.Door.__name__ = ["com","jah2488","ld48","enough","Door"];
com.jah2488.ld48.enough.Door.__super__ = com.jah2488.ld48.enough.Tile;
com.jah2488.ld48.enough.Door.prototype = $extend(com.jah2488.ld48.enough.Tile.prototype,{
	__class__: com.jah2488.ld48.enough.Door
});
com.jah2488.ld48.enough.Lava = function(x,y) {
	com.jah2488.ld48.enough.Tile.call(this);
	this.tile = 2;
	this.playerColor = 3;
	this.x = x;
	this.y = y;
	this.loadGraphic("assets/lava.png",true,false,16,16);
	this.addAnimation("flow",[0,1,2,3,4,5,6,7,8,9,10,11,12],15);
	this.play("flow");
};
$hxClasses["com.jah2488.ld48.enough.Lava"] = com.jah2488.ld48.enough.Lava;
com.jah2488.ld48.enough.Lava.__name__ = ["com","jah2488","ld48","enough","Lava"];
com.jah2488.ld48.enough.Lava.__super__ = com.jah2488.ld48.enough.Tile;
com.jah2488.ld48.enough.Lava.prototype = $extend(com.jah2488.ld48.enough.Tile.prototype,{
	__class__: com.jah2488.ld48.enough.Lava
});
com.jah2488.ld48.enough.Health = function(x,y) {
	com.jah2488.ld48.enough.Tile.call(this);
	this.tile = 4;
	this.playerColor = 1;
	this.x = x;
	this.y = y;
	this.loadGraphic("assets/health.png",true,false,16,16);
	this.addAnimation("flow",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],15);
	this.play("flow");
};
$hxClasses["com.jah2488.ld48.enough.Health"] = com.jah2488.ld48.enough.Health;
com.jah2488.ld48.enough.Health.__name__ = ["com","jah2488","ld48","enough","Health"];
com.jah2488.ld48.enough.Health.__super__ = com.jah2488.ld48.enough.Tile;
com.jah2488.ld48.enough.Health.prototype = $extend(com.jah2488.ld48.enough.Tile.prototype,{
	__class__: com.jah2488.ld48.enough.Health
});
var format = {}
format.display = {}
format.display.FrameLabel = function(frame,name) {
	this.frame = frame;
	this.name = name;
};
$hxClasses["format.display.FrameLabel"] = format.display.FrameLabel;
format.display.FrameLabel.__name__ = ["format","display","FrameLabel"];
format.display.FrameLabel.prototype = {
	name: null
	,frame: null
	,__class__: format.display.FrameLabel
}
format.display.MovieClip = function() {
	browser.display.Sprite.call(this);
};
$hxClasses["format.display.MovieClip"] = format.display.MovieClip;
format.display.MovieClip.__name__ = ["format","display","MovieClip"];
format.display.MovieClip.__super__ = browser.display.Sprite;
format.display.MovieClip.prototype = $extend(browser.display.Sprite.prototype,{
	unflatten: function() {
	}
	,stop: function() {
	}
	,prevFrame: function() {
	}
	,play: function() {
	}
	,nextFrame: function() {
	}
	,gotoAndStop: function(frame,scene) {
	}
	,gotoAndPlay: function(frame,scene) {
	}
	,flatten: function() {
	}
	,trackAsMenu: null
	,totalFrames: null
	,framesLoaded: null
	,enabled: null
	,currentLabels: null
	,currentLabel: null
	,currentFrameLabel: null
	,currentFrame: null
	,__class__: format.display.MovieClip
});
haxe.FastCell = function(elt,next) {
	this.elt = elt;
	this.next = next;
};
$hxClasses["haxe.FastCell"] = haxe.FastCell;
haxe.FastCell.__name__ = ["haxe","FastCell"];
haxe.FastCell.prototype = {
	next: null
	,elt: null
	,__class__: haxe.FastCell
}
haxe.FastList = function() {
};
$hxClasses["haxe.FastList"] = haxe.FastList;
haxe.FastList.__name__ = ["haxe","FastList"];
haxe.FastList.prototype = {
	toString: function() {
		var a = new Array();
		var l = this.head;
		while(l != null) {
			a.push(l.elt);
			l = l.next;
		}
		return "{" + a.join(",") + "}";
	}
	,iterator: function() {
		var l = this.head;
		return { hasNext : function() {
			return l != null;
		}, next : function() {
			var k = l;
			l = k.next;
			return k.elt;
		}};
	}
	,remove: function(v) {
		var prev = null;
		var l = this.head;
		while(l != null) {
			if(l.elt == v) {
				if(prev == null) this.head = l.next; else prev.next = l.next;
				break;
			}
			prev = l;
			l = l.next;
		}
		return l != null;
	}
	,isEmpty: function() {
		return this.head == null;
	}
	,pop: function() {
		var k = this.head;
		if(k == null) return null; else {
			this.head = k.next;
			return k.elt;
		}
	}
	,first: function() {
		return this.head == null?null:this.head.elt;
	}
	,add: function(item) {
		this.head = new haxe.FastCell(item,this.head);
	}
	,head: null
	,__class__: haxe.FastList
}
haxe.Int32 = function() { }
$hxClasses["haxe.Int32"] = haxe.Int32;
haxe.Int32.__name__ = ["haxe","Int32"];
haxe.Int32.make = function(a,b) {
	return a << 16 | b;
}
haxe.Int32.ofInt = function(x) {
	return x | 0;
}
haxe.Int32.clamp = function(x) {
	return x | 0;
}
haxe.Int32.toInt = function(x) {
	if((x >> 30 & 1) != x >>> 31) throw "Overflow " + Std.string(x);
	return x;
}
haxe.Int32.toNativeInt = function(x) {
	return x;
}
haxe.Int32.add = function(a,b) {
	return a + b | 0;
}
haxe.Int32.sub = function(a,b) {
	return a - b | 0;
}
haxe.Int32.mul = function(a,b) {
	return a * (b & 65535) + (a * (b >>> 16) << 16 | 0) | 0;
}
haxe.Int32.div = function(a,b) {
	return a / b | 0;
}
haxe.Int32.mod = function(a,b) {
	return a % b;
}
haxe.Int32.shl = function(a,b) {
	return a << b;
}
haxe.Int32.shr = function(a,b) {
	return a >> b;
}
haxe.Int32.ushr = function(a,b) {
	return a >>> b;
}
haxe.Int32.and = function(a,b) {
	return a & b;
}
haxe.Int32.or = function(a,b) {
	return a | b;
}
haxe.Int32.xor = function(a,b) {
	return a ^ b;
}
haxe.Int32.neg = function(a) {
	return -a;
}
haxe.Int32.isNeg = function(a) {
	return a < 0;
}
haxe.Int32.isZero = function(a) {
	return a == 0;
}
haxe.Int32.complement = function(a) {
	return ~a;
}
haxe.Int32.compare = function(a,b) {
	return a - b;
}
haxe.Int32.ucompare = function(a,b) {
	if(a < 0) return b < 0?~b - ~a:1;
	return b < 0?-1:a - b;
}
haxe.Log = function() { }
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe.Resource.getBytes = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.Unserializer.run(x.data);
		}
	}
	return null;
}
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new Hash();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
}
haxe.Serializer.prototype = {
	serializeException: function(e) {
		this.buf.b += Std.string("x");
		this.serialize(e);
	}
	,serialize: function(v) {
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
			this.buf.b += Std.string("n");
			break;
		case 1:
			if(v == 0) {
				this.buf.b += Std.string("z");
				return;
			}
			this.buf.b += Std.string("i");
			this.buf.b += Std.string(v);
			break;
		case 2:
			if(Math.isNaN(v)) this.buf.b += Std.string("k"); else if(!Math.isFinite(v)) this.buf.b += Std.string(v < 0?"m":"p"); else {
				this.buf.b += Std.string("d");
				this.buf.b += Std.string(v);
			}
			break;
		case 3:
			this.buf.b += Std.string(v?"t":"f");
			break;
		case 6:
			var c = $e[2];
			if(c == String) {
				this.serializeString(v);
				return;
			}
			if(this.useCache && this.serializeRef(v)) return;
			switch(c) {
			case Array:
				var ucount = 0;
				this.buf.b += Std.string("a");
				var l = v.length;
				var _g = 0;
				while(_g < l) {
					var i = _g++;
					if(v[i] == null) ucount++; else {
						if(ucount > 0) {
							if(ucount == 1) this.buf.b += Std.string("n"); else {
								this.buf.b += Std.string("u");
								this.buf.b += Std.string(ucount);
							}
							ucount = 0;
						}
						this.serialize(v[i]);
					}
				}
				if(ucount > 0) {
					if(ucount == 1) this.buf.b += Std.string("n"); else {
						this.buf.b += Std.string("u");
						this.buf.b += Std.string(ucount);
					}
				}
				this.buf.b += Std.string("h");
				break;
			case List:
				this.buf.b += Std.string("l");
				var v1 = v;
				var $it0 = v1.iterator();
				while( $it0.hasNext() ) {
					var i = $it0.next();
					this.serialize(i);
				}
				this.buf.b += Std.string("h");
				break;
			case Date:
				var d = v;
				this.buf.b += Std.string("v");
				this.buf.b += Std.string(HxOverrides.dateStr(d));
				break;
			case Hash:
				this.buf.b += Std.string("b");
				var v1 = v;
				var $it1 = v1.keys();
				while( $it1.hasNext() ) {
					var k = $it1.next();
					this.serializeString(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += Std.string("h");
				break;
			case IntHash:
				this.buf.b += Std.string("q");
				var v1 = v;
				var $it2 = v1.keys();
				while( $it2.hasNext() ) {
					var k = $it2.next();
					this.buf.b += Std.string(":");
					this.buf.b += Std.string(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += Std.string("h");
				break;
			case haxe.io.Bytes:
				var v1 = v;
				var i = 0;
				var max = v1.length - 2;
				var charsBuf = new StringBuf();
				var b64 = haxe.Serializer.BASE64;
				while(i < max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					var b3 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt((b2 << 2 | b3 >> 6) & 63));
					charsBuf.b += Std.string(b64.charAt(b3 & 63));
				}
				if(i == max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt(b2 << 2 & 63));
				} else if(i == max + 1) {
					var b1 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt(b1 << 4 & 63));
				}
				var chars = charsBuf.b;
				this.buf.b += Std.string("s");
				this.buf.b += Std.string(chars.length);
				this.buf.b += Std.string(":");
				this.buf.b += Std.string(chars);
				break;
			default:
				this.cache.pop();
				if(v.hxSerialize != null) {
					this.buf.b += Std.string("C");
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					v.hxSerialize(this);
					this.buf.b += Std.string("g");
				} else {
					this.buf.b += Std.string("c");
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					this.serializeFields(v);
				}
			}
			break;
		case 4:
			if(this.useCache && this.serializeRef(v)) return;
			this.buf.b += Std.string("o");
			this.serializeFields(v);
			break;
		case 7:
			var e = $e[2];
			if(this.useCache && this.serializeRef(v)) return;
			this.cache.pop();
			this.buf.b += Std.string(this.useEnumIndex?"j":"w");
			this.serializeString(Type.getEnumName(e));
			if(this.useEnumIndex) {
				this.buf.b += Std.string(":");
				this.buf.b += Std.string(v[1]);
			} else this.serializeString(v[0]);
			this.buf.b += Std.string(":");
			var l = v.length;
			this.buf.b += Std.string(l - 2);
			var _g = 2;
			while(_g < l) {
				var i = _g++;
				this.serialize(v[i]);
			}
			this.cache.push(v);
			break;
		case 5:
			throw "Cannot serialize function";
			break;
		default:
			throw "Cannot serialize " + Std.string(v);
		}
	}
	,serializeFields: function(v) {
		var _g = 0, _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += Std.string("g");
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0, _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += Std.string("r");
				this.buf.b += Std.string(i);
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += Std.string("R");
			this.buf.b += Std.string(x);
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += Std.string("y");
		s = StringTools.urlEncode(s);
		this.buf.b += Std.string(s.length);
		this.buf.b += Std.string(":");
		this.buf.b += Std.string(s);
	}
	,toString: function() {
		return this.buf.b;
	}
	,useEnumIndex: null
	,useCache: null
	,scount: null
	,shash: null
	,cache: null
	,buf: null
	,__class__: haxe.Serializer
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
$hxClasses["haxe.Stack"] = haxe.Stack;
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe.StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe.StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe.Stack.makeStack(new Error().stack);
	a.shift();
	Error.prepareStackTrace = oldValue;
	return a;
}
haxe.Stack.exceptionStack = function() {
	return [];
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += Std.string("\nCalled from ");
		haxe.Stack.itemToString(b,s);
	}
	return b.b;
}
haxe.Stack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += Std.string("a C function");
		break;
	case 1:
		var m = $e[2];
		b.b += Std.string("module ");
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b += Std.string(" (");
		}
		b.b += Std.string(file);
		b.b += Std.string(" line ");
		b.b += Std.string(line);
		if(s1 != null) b.b += Std.string(")");
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += Std.string(".");
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += Std.string("local function #");
		b.b += Std.string(n);
		break;
	}
}
haxe.Stack.makeStack = function(s) {
	if(typeof(s) == "string") {
		var stack = s.split("\n");
		var m = [];
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			m.push(haxe.StackItem.Module(line));
		}
		return m;
	} else return s;
}
haxe._Template = {}
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : ["haxe","_Template","TemplateExpr"], __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] }
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	run: function(e) {
		var $e = (e);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			this.buf.b += Std.string(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = $e[2];
			this.buf.b += Std.string(Std.string(e1()));
			break;
		case 2:
			var eelse = $e[4], eif = $e[3], e1 = $e[2];
			var v = e1();
			if(v == null || v == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = $e[2];
			this.buf.b += Std.string(str);
			break;
		case 4:
			var l = $e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				this.run(e1);
			}
			break;
		case 5:
			var loop = $e[3], e1 = $e[2];
			var v = e1();
			try {
				var x = $iterator(v)();
				if(x.hasNext == null) throw null;
				v = x;
			} catch( e2 ) {
				try {
					if(v.hasNext == null) throw null;
				} catch( e3 ) {
					throw "Cannot iter on " + Std.string(v);
				}
			}
			this.stack.push(this.context);
			var v1 = v;
			while( v1.hasNext() ) {
				var ctx = v1.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = $e[3], m = $e[2];
			var v = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				var $e = (p);
				switch( $e[1] ) {
				case 0:
					var v1 = $e[2];
					pl.push(this.resolve(v1));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.b += Std.string(Std.string(v.apply(this.macros,pl)));
			} catch( e1 ) {
				var plstr = (function($this) {
					var $r;
					try {
						$r = pl.join(",");
					} catch( e2 ) {
						$r = "???";
					}
					return $r;
				}(this));
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e1) + ")";
				throw msg;
			}
			break;
		}
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		switch(p.p) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			return (function($this) {
				var $r;
				switch(p1.p) {
				case "+":
					$r = function() {
						return e1() + e2();
					};
					break;
				case "-":
					$r = function() {
						return e1() - e2();
					};
					break;
				case "*":
					$r = function() {
						return e1() * e2();
					};
					break;
				case "/":
					$r = function() {
						return e1() / e2();
					};
					break;
				case ">":
					$r = function() {
						return e1() > e2();
					};
					break;
				case "<":
					$r = function() {
						return e1() < e2();
					};
					break;
				case ">=":
					$r = function() {
						return e1() >= e2();
					};
					break;
				case "<=":
					$r = function() {
						return e1() <= e2();
					};
					break;
				case "==":
					$r = function() {
						return e1() == e2();
					};
					break;
				case "!=":
					$r = function() {
						return e1() != e2();
					};
					break;
				case "&&":
					$r = function() {
						return e1() && e2();
					};
					break;
				case "||":
					$r = function() {
						return e1() || e2();
					};
					break;
				default:
					$r = (function($this) {
						var $r;
						throw "Unknown operation " + p1.p;
						return $r;
					}($this));
				}
				return $r;
			}(this));
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e = this.makeExpr(l);
			return function() {
				return -e();
			};
		}
		throw p.p;
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0, _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t1 = tokens.pop();
			if(t1 == null || t1.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			while(npar > 0) {
				var c = HxOverrides.cca(data,parp);
				if(c == 40) npar++; else if(c == 41) npar--; else if(c == null) throw "Unclosed macro parenthesis";
				parp++;
			}
			var params = HxOverrides.substr(data,p.pos + p.len,parp - (p.pos + p.len) - 1).split(",");
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,resolve: function(v) {
		if(Reflect.hasField(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Reflect.hasField(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,execute: function(context,macros) {
		this.macros = macros == null?{ }:macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,buf: null
	,stack: null
	,macros: null
	,context: null
	,expr: null
	,__class__: haxe.Template
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		switch(this.buf.charCodeAt(this.pos++)) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new Hash();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new IntHash();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntHash format";
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,getResolver: function() {
		return this.resolver;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,resolver: null
	,scache: null
	,cache: null
	,length: null
	,pos: null
	,buf: null
	,__class__: haxe.Unserializer
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
}
haxe.io.Bytes.prototype = {
	getData: function() {
		return this.b;
	}
	,toHex: function() {
		var s = new StringBuf();
		var chars = [];
		var str = "0123456789abcdef";
		var _g1 = 0, _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			chars.push(HxOverrides.cca(str,i));
		}
		var _g1 = 0, _g = this.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = this.b[i];
			s.b += String.fromCharCode(chars[c >> 4]);
			s.b += String.fromCharCode(chars[c & 15]);
		}
		return s.b;
	}
	,toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,compare: function(other) {
		var b1 = this.b;
		var b2 = other.b;
		var len = this.length < other.length?this.length:other.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
		return this.length - other.length;
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		return new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
	}
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		if(b1 == b2 && pos > srcpos) {
			var i = len;
			while(i > 0) {
				i--;
				b1[i + pos] = b2[i + srcpos];
			}
			return;
		}
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,get: function(pos) {
		return this.b[pos];
	}
	,b: null
	,length: null
	,__class__: haxe.io.Bytes
}
haxe.io.BytesBuffer = function() {
	this.b = new Array();
};
$hxClasses["haxe.io.BytesBuffer"] = haxe.io.BytesBuffer;
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype = {
	getBytes: function() {
		var bytes = new haxe.io.Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,add: function(src) {
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = 0, _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,addByte: function($byte) {
		this.b.push($byte);
	}
	,b: null
	,__class__: haxe.io.BytesBuffer
}
haxe.io.Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
haxe.io.Input = function() { }
$hxClasses["haxe.io.Input"] = haxe.io.Input;
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype = {
	getDoubleSig: function(bytes) {
		return Std.parseInt((((bytes[1] & 15) << 16 | bytes[2] << 8 | bytes[3]) * Math.pow(2,32)).toString()) + Std.parseInt(((bytes[4] >> 7) * Math.pow(2,31)).toString()) + Std.parseInt(((bytes[4] & 127) << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7]).toString());
	}
	,readString: function(len) {
		var b = haxe.io.Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		return this.bigEndian?(ch1 << 8 | ch2) << 16 | (ch3 << 8 | ch4):(ch4 << 8 | ch3) << 16 | (ch2 << 8 | ch1);
	}
	,readUInt30: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if((this.bigEndian?ch1:ch4) >= 64) throw haxe.io.Error.Overflow;
		return this.bigEndian?ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24:ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readInt31: function() {
		var ch1, ch2, ch3, ch4;
		if(this.bigEndian) {
			ch4 = this.readByte();
			ch3 = this.readByte();
			ch2 = this.readByte();
			ch1 = this.readByte();
		} else {
			ch1 = this.readByte();
			ch2 = this.readByte();
			ch3 = this.readByte();
			ch4 = this.readByte();
		}
		if((ch4 & 128) == 0 != ((ch4 & 64) == 0)) throw haxe.io.Error.Overflow;
		return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readUInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		return this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
	}
	,readInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var n = this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
		if((n & 8388608) != 0) return n - 16777216;
		return n;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		return this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	}
	,readInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
		if((n & 32768) != 0) return n - 65536;
		return n;
	}
	,readInt8: function() {
		var n = this.readByte();
		if(n >= 128) return n - 256;
		return n;
	}
	,readDouble: function() {
		var bytes = [];
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		if(this.bigEndian) bytes.reverse();
		var sign = 1 - (bytes[0] >> 7 << 1);
		var exp = (bytes[0] << 4 & 2047 | bytes[1] >> 4) - 1023;
		var sig = this.getDoubleSig(bytes);
		if(sig == 0 && exp == -1023) return 0.0;
		return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
	}
	,readFloat: function() {
		var bytes = [];
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		if(this.bigEndian) bytes.reverse();
		var sign = 1 - (bytes[0] >> 7 << 1);
		var exp = (bytes[0] << 1 & 255 | bytes[1] >> 7) - 127;
		var sig = (bytes[1] & 127) << 16 | bytes[2] << 8 | bytes[3];
		if(sig == 0 && exp == -127) return 0.0;
		return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp);
	}
	,readLine: function() {
		var buf = new StringBuf();
		var last;
		var s;
		try {
			while((last = this.readByte()) != 10) buf.b += String.fromCharCode(last);
			s = buf.b;
			if(HxOverrides.cca(s,s.length - 1) == 13) s = HxOverrides.substr(s,0,-1);
		} catch( e ) {
			if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
				s = buf.b;
				if(s.length == 0) throw e;
			} else throw(e);
		}
		return s;
	}
	,readUntil: function(end) {
		var buf = new StringBuf();
		var last;
		while((last = this.readByte()) != end) buf.b += String.fromCharCode(last);
		return buf.b;
	}
	,read: function(nbytes) {
		var s = haxe.io.Bytes.alloc(nbytes);
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) throw haxe.io.Error.Blocked;
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,readAll: function(bufsize) {
		if(bufsize == null) bufsize = 16384;
		var buf = haxe.io.Bytes.alloc(bufsize);
		var total = new haxe.io.BytesBuffer();
		try {
			while(true) {
				var len = this.readBytes(buf,0,bufsize);
				if(len == 0) throw haxe.io.Error.Blocked;
				total.addBytes(buf,0,len);
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
			} else throw(e);
		}
		return total.getBytes();
	}
	,setEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,close: function() {
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,readByte: function() {
		return (function($this) {
			var $r;
			throw "Not implemented";
			return $r;
		}(this));
	}
	,bigEndian: null
	,__class__: haxe.io.Input
	,__properties__: {set_bigEndian:"setEndian"}
}
haxe.xml = {}
haxe.xml.Filter = $hxClasses["haxe.xml.Filter"] = { __ename__ : ["haxe","xml","Filter"], __constructs__ : ["FInt","FBool","FEnum","FReg"] }
haxe.xml.Filter.FInt = ["FInt",0];
haxe.xml.Filter.FInt.toString = $estr;
haxe.xml.Filter.FInt.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FBool = ["FBool",1];
haxe.xml.Filter.FBool.toString = $estr;
haxe.xml.Filter.FBool.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FEnum = function(values) { var $x = ["FEnum",2,values]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Filter.FReg = function(matcher) { var $x = ["FReg",3,matcher]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Attrib = $hxClasses["haxe.xml.Attrib"] = { __ename__ : ["haxe","xml","Attrib"], __constructs__ : ["Att"] }
haxe.xml.Attrib.Att = function(name,filter,defvalue) { var $x = ["Att",0,name,filter,defvalue]; $x.__enum__ = haxe.xml.Attrib; $x.toString = $estr; return $x; }
haxe.xml.Rule = $hxClasses["haxe.xml.Rule"] = { __ename__ : ["haxe","xml","Rule"], __constructs__ : ["RNode","RData","RMulti","RList","RChoice","ROptional"] }
haxe.xml.Rule.RNode = function(name,attribs,childs) { var $x = ["RNode",0,name,attribs,childs]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RData = function(filter) { var $x = ["RData",1,filter]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RMulti = function(rule,atLeastOne) { var $x = ["RMulti",2,rule,atLeastOne]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RList = function(rules,ordered) { var $x = ["RList",3,rules,ordered]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RChoice = function(choices) { var $x = ["RChoice",4,choices]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.ROptional = function(rule) { var $x = ["ROptional",5,rule]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml._Check = {}
haxe.xml._Check.CheckResult = $hxClasses["haxe.xml._Check.CheckResult"] = { __ename__ : ["haxe","xml","_Check","CheckResult"], __constructs__ : ["CMatch","CMissing","CExtra","CElementExpected","CDataExpected","CExtraAttrib","CMissingAttrib","CInvalidAttrib","CInvalidData","CInElement"] }
haxe.xml._Check.CheckResult.CMatch = ["CMatch",0];
haxe.xml._Check.CheckResult.CMatch.toString = $estr;
haxe.xml._Check.CheckResult.CMatch.__enum__ = haxe.xml._Check.CheckResult;
haxe.xml._Check.CheckResult.CMissing = function(r) { var $x = ["CMissing",1,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtra = function(x) { var $x = ["CExtra",2,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CElementExpected = function(name,x) { var $x = ["CElementExpected",3,name,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CDataExpected = function(x) { var $x = ["CDataExpected",4,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtraAttrib = function(att,x) { var $x = ["CExtraAttrib",5,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CMissingAttrib = function(att,x) { var $x = ["CMissingAttrib",6,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidAttrib = function(att,x,f) { var $x = ["CInvalidAttrib",7,att,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidData = function(x,f) { var $x = ["CInvalidData",8,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInElement = function(x,r) { var $x = ["CInElement",9,x,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml.Check = function() { }
$hxClasses["haxe.xml.Check"] = haxe.xml.Check;
haxe.xml.Check.__name__ = ["haxe","xml","Check"];
haxe.xml.Check.isBlank = function(x) {
	return x.nodeType == Xml.PCData && haxe.xml.Check.blanks.match(x.getNodeValue()) || x.nodeType == Xml.Comment;
}
haxe.xml.Check.filterMatch = function(s,f) {
	var $e = (f);
	switch( $e[1] ) {
	case 0:
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FReg(new EReg("[0-9]+","")));
	case 1:
		return haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FEnum(["true","false","0","1"]));
	case 2:
		var values = $e[2];
		var _g = 0;
		while(_g < values.length) {
			var v = values[_g];
			++_g;
			if(s == v) return true;
		}
		return false;
	case 3:
		var r = $e[2];
		return r.match(s);
	}
}
haxe.xml.Check.isNullable = function(r) {
	var $e = (r);
	switch( $e[1] ) {
	case 2:
		var one = $e[3], r1 = $e[2];
		return one != true || haxe.xml.Check.isNullable(r1);
	case 3:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) return false;
		}
		return true;
	case 4:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(haxe.xml.Check.isNullable(r1)) return true;
		}
		return false;
	case 1:
		return false;
	case 0:
		return false;
	case 5:
		return true;
	}
}
haxe.xml.Check.check = function(x,r) {
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var childs = $e[4], attribs = $e[3], name = $e[2];
		if(x.nodeType != Xml.Element || x.getNodeName() != name) return haxe.xml._Check.CheckResult.CElementExpected(name,x);
		var attribs1 = attribs == null?new Array():attribs.slice();
		var $it0 = x.attributes();
		while( $it0.hasNext() ) {
			var xatt = $it0.next();
			var found = false;
			var _g = 0;
			while(_g < attribs1.length) {
				var att = attribs1[_g];
				++_g;
				var $e = (att);
				switch( $e[1] ) {
				case 0:
					var defvalue = $e[4], filter = $e[3], name1 = $e[2];
					if(xatt != name1) continue;
					if(filter != null && !haxe.xml.Check.filterMatch(x.get(xatt),filter)) return haxe.xml._Check.CheckResult.CInvalidAttrib(name1,x,filter);
					HxOverrides.remove(attribs1,att);
					found = true;
					break;
				}
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtraAttrib(xatt,x);
		}
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				if(defvalue == null) return haxe.xml._Check.CheckResult.CMissingAttrib(name1,x);
				break;
			}
		}
		if(childs == null) childs = haxe.xml.Rule.RList([]);
		var m = haxe.xml.Check.checkList(x.iterator(),childs);
		if(m != haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CInElement(x,m);
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				x.set(name1,defvalue);
				break;
			}
		}
		return haxe.xml._Check.CheckResult.CMatch;
	case 1:
		var filter = $e[2];
		if(x.nodeType != Xml.PCData && x.nodeType != Xml.CData) return haxe.xml._Check.CheckResult.CDataExpected(x);
		if(filter != null && !haxe.xml.Check.filterMatch(x.getNodeValue(),filter)) return haxe.xml._Check.CheckResult.CInvalidData(x,filter);
		return haxe.xml._Check.CheckResult.CMatch;
	case 4:
		var choices = $e[2];
		if(choices.length == 0) throw "No choice possible";
		var _g = 0;
		while(_g < choices.length) {
			var c = choices[_g];
			++_g;
			if(haxe.xml.Check.check(x,c) == haxe.xml._Check.CheckResult.CMatch) return haxe.xml._Check.CheckResult.CMatch;
		}
		return haxe.xml.Check.check(x,choices[0]);
	case 5:
		var r1 = $e[2];
		return haxe.xml.Check.check(x,r1);
	default:
		throw "Unexpected " + Std.string(r);
	}
}
haxe.xml.Check.checkList = function(it,r) {
	var $e = (r);
	switch( $e[1] ) {
	case 3:
		var ordered = $e[3], rules = $e[2];
		var rules1 = rules.slice();
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var found = false;
			var _g = 0;
			while(_g < rules1.length) {
				var r1 = rules1[_g];
				++_g;
				var m = haxe.xml.Check.checkList(HxOverrides.iter([x]),r1);
				if(m == haxe.xml._Check.CheckResult.CMatch) {
					found = true;
					var $e = (r1);
					switch( $e[1] ) {
					case 2:
						var one = $e[3], rsub = $e[2];
						if(one) {
							var i;
							var _g2 = 0, _g1 = rules1.length;
							while(_g2 < _g1) {
								var i1 = _g2++;
								if(rules1[i1] == r1) rules1[i1] = haxe.xml.Rule.RMulti(rsub);
							}
						}
						break;
					default:
						HxOverrides.remove(rules1,r1);
					}
					break;
				} else if(ordered && !haxe.xml.Check.isNullable(r1)) return m;
			}
			if(!found) return haxe.xml._Check.CheckResult.CExtra(x);
		}
		var _g = 0;
		while(_g < rules1.length) {
			var r1 = rules1[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) return haxe.xml._Check.CheckResult.CMissing(r1);
		}
		return haxe.xml._Check.CheckResult.CMatch;
	case 2:
		var one = $e[3], r1 = $e[2];
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.checkList(HxOverrides.iter([x]),r1);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
		}
		if(one && !found) return haxe.xml._Check.CheckResult.CMissing(r1);
		return haxe.xml._Check.CheckResult.CMatch;
	default:
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.check(x,r);
			if(m != haxe.xml._Check.CheckResult.CMatch) return m;
			found = true;
			break;
		}
		if(!found) {
			switch( (r)[1] ) {
			case 5:
				break;
			default:
				return haxe.xml._Check.CheckResult.CMissing(r);
			}
		}
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			return haxe.xml._Check.CheckResult.CExtra(x);
		}
		return haxe.xml._Check.CheckResult.CMatch;
	}
}
haxe.xml.Check.makeWhere = function(path) {
	if(path.length == 0) return "";
	var s = "In ";
	var first = true;
	var _g = 0;
	while(_g < path.length) {
		var x = path[_g];
		++_g;
		if(first) first = false; else s += ".";
		s += x.getNodeName();
	}
	return s + ": ";
}
haxe.xml.Check.makeString = function(x) {
	if(x.nodeType == Xml.Element) return "element " + x.getNodeName();
	var s = x.getNodeValue().split("\r").join("\\r").split("\n").join("\\n").split("\t").join("\\t");
	if(s.length > 20) return HxOverrides.substr(s,0,17) + "...";
	return s;
}
haxe.xml.Check.makeRule = function(r) {
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var name = $e[2];
		return "element " + name;
	case 1:
		return "data";
	case 2:
		var r1 = $e[2];
		return haxe.xml.Check.makeRule(r1);
	case 3:
		var rules = $e[2];
		return haxe.xml.Check.makeRule(rules[0]);
	case 4:
		var choices = $e[2];
		return haxe.xml.Check.makeRule(choices[0]);
	case 5:
		var r1 = $e[2];
		return haxe.xml.Check.makeRule(r1);
	}
}
haxe.xml.Check.makeError = function(m,path) {
	if(path == null) path = new Array();
	var $e = (m);
	switch( $e[1] ) {
	case 0:
		throw "assert";
		break;
	case 1:
		var r = $e[2];
		return haxe.xml.Check.makeWhere(path) + "Missing " + haxe.xml.Check.makeRule(r);
	case 2:
		var x = $e[2];
		return haxe.xml.Check.makeWhere(path) + "Unexpected " + haxe.xml.Check.makeString(x);
	case 3:
		var x = $e[3], name = $e[2];
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while expected element " + name;
	case 4:
		var x = $e[2];
		return haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while data expected";
	case 5:
		var x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "unexpected attribute " + att;
	case 6:
		var x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "missing required attribute " + att;
	case 7:
		var f = $e[4], x = $e[3], att = $e[2];
		path.push(x);
		return haxe.xml.Check.makeWhere(path) + "invalid attribute value for " + att;
	case 8:
		var f = $e[3], x = $e[2];
		return haxe.xml.Check.makeWhere(path) + "invalid data format for " + haxe.xml.Check.makeString(x);
	case 9:
		var m1 = $e[3], x = $e[2];
		path.push(x);
		return haxe.xml.Check.makeError(m1,path);
	}
}
haxe.xml.Check.checkNode = function(x,r) {
	var m = haxe.xml.Check.checkList(HxOverrides.iter([x]),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Check.checkDocument = function(x,r) {
	if(x.nodeType != Xml.Document) throw "Document expected";
	var m = haxe.xml.Check.checkList(x.iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) return;
	throw haxe.xml.Check.makeError(m);
}
haxe.xml.Parser = function() { }
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
haxe.xml.Parser.__name__ = ["haxe","xml","Parser"];
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
}
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = HxOverrides.substr(str,start + 1,p - start - 1);
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.getNodeName()) throw "Expected </" + parent.getNodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProlog(str1));
				state = 1;
			}
			break;
		}
		c = str.charCodeAt(++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
}
haxe.xml.Parser.isValidChar = function(c) {
	return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45;
}
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.isClass = function(o) {
	return o.__name__;
}
js.Boot.isEnum = function(e) {
	return e.__ename__;
}
js.Boot.getClass = function(o) {
	return o.__class__;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		if(cl == Class && o.__name__ != null) return true; else null;
		if(cl == Enum && o.__ename__ != null) return true; else null;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Lib = function() { }
$hxClasses["js.Lib"] = js.Lib;
js.Lib.__name__ = ["js","Lib"];
js.Lib.document = null;
js.Lib.window = null;
js.Lib.debug = function() {
	debugger;
}
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib["eval"] = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
var nme = {}
nme.Lib = function() { }
$hxClasses["nme.Lib"] = nme.Lib;
nme.Lib.__name__ = ["nme","Lib"];
nme.Lib.__properties__ = {get_version:"get_version",get_stage:"get_stage",get_packageName:"get_packageName",get_initWidth:"get_initWidth",get_initHeight:"get_initHeight",get_file:"get_file",get_current:"get_current",get_company:"get_company"}
nme.Lib.company = null;
nme.Lib.current = null;
nme.Lib.file = null;
nme.Lib.initHeight = null;
nme.Lib.initWidth = null;
nme.Lib.packageName = null;
nme.Lib.stage = null;
nme.Lib.version = null;
nme.Lib.close = function() {
}
nme.Lib.create = function(onLoaded,width,height,frameRate,color,flags,title,icon) {
	if(title == null) title = "NME";
	if(flags == null) flags = 15;
	if(color == null) color = 16777215;
	if(frameRate == null) frameRate = 60.0;
}
nme.Lib.createManagedStage = function(width,height) {
	return null;
}
nme.Lib.exit = function() {
}
nme.Lib.forceClose = function() {
}
nme.Lib.getTimer = function() {
	return browser.Lib.getTimer();
}
nme.Lib.getURL = function(url,target) {
	browser.Lib.getURL(url,target);
}
nme.Lib.pause = function() {
}
nme.Lib.postUICallback = function(handler) {
	handler();
}
nme.Lib.resume = function() {
}
nme.Lib.setPackage = function(company,file,packageName,version) {
}
nme.Lib.trace = function(arg) {
	browser.Lib.trace(arg);
}
nme.Lib.get_company = function() {
	return "";
}
nme.Lib.get_current = function() {
	return browser.Lib.get_current();
}
nme.Lib.get_file = function() {
	return "";
}
nme.Lib.get_initHeight = function() {
	return 0;
}
nme.Lib.get_initWidth = function() {
	return 0;
}
nme.Lib.get_packageName = function() {
	return "";
}
nme.Lib.get_stage = function() {
	return nme.Lib.get_current().get_stage();
}
nme.Lib.get_version = function() {
	return "";
}
nme.installer = {}
nme.installer.Assets = function() { }
$hxClasses["nme.installer.Assets"] = nme.installer.Assets;
nme.installer.Assets.__name__ = ["nme","installer","Assets"];
nme.installer.Assets.initialize = function() {
	if(!nme.installer.Assets.initialized) {
		nme.installer.Assets.resourceNames.set("assets/beebTiles.pxi","assets/beebTiles.pxi");
		nme.installer.Assets.resourceTypes.set("assets/beebTiles.pxi","binary");
		nme.installer.Assets.resourceNames.set("assets/cPower.png","assets/cPower.png");
		nme.installer.Assets.resourceTypes.set("assets/cPower.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/autotiles.png","assets/data/autotiles.png");
		nme.installer.Assets.resourceTypes.set("assets/data/autotiles.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/autotiles_alt.png","assets/data/autotiles_alt.png");
		nme.installer.Assets.resourceTypes.set("assets/data/autotiles_alt.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/base.png","assets/data/base.png");
		nme.installer.Assets.resourceTypes.set("assets/data/base.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/beep.mp3","assets/data/beep.mp3");
		nme.installer.Assets.resourceTypes.set("assets/data/beep.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/data/beep.wav","assets/data/beep.wav");
		nme.installer.Assets.resourceTypes.set("assets/data/beep.wav","sound");
		nme.installer.Assets.resourceNames.set("assets/data/button.png","assets/data/button.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/button_a.png","assets/data/button_a.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button_a.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/button_b.png","assets/data/button_b.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button_b.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/button_c.png","assets/data/button_c.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button_c.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/button_down.png","assets/data/button_down.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button_down.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/button_left.png","assets/data/button_left.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button_left.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/button_right.png","assets/data/button_right.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button_right.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/button_up.png","assets/data/button_up.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button_up.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/button_x.png","assets/data/button_x.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button_x.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/button_y.png","assets/data/button_y.png");
		nme.installer.Assets.resourceTypes.set("assets/data/button_y.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/click.wav","assets/data/click.wav");
		nme.installer.Assets.resourceTypes.set("assets/data/click.wav","sound");
		nme.installer.Assets.resourceClasses.set("assets/data/courier.ttf",NME_assets_data_courier_ttf);
		nme.installer.Assets.resourceNames.set("assets/data/courier.ttf","assets/data/courier.ttf");
		nme.installer.Assets.resourceTypes.set("assets/data/courier.ttf","font");
		nme.installer.Assets.resourceNames.set("assets/data/cursor.png","assets/data/cursor.png");
		nme.installer.Assets.resourceTypes.set("assets/data/cursor.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/default.png","assets/data/default.png");
		nme.installer.Assets.resourceTypes.set("assets/data/default.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/etherial_hibpm.mp3","assets/data/etherial_hibpm.mp3");
		nme.installer.Assets.resourceTypes.set("assets/data/etherial_hibpm.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/data/fontData10pt.png","assets/data/fontData10pt.png");
		nme.installer.Assets.resourceTypes.set("assets/data/fontData10pt.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/fontData11pt.png","assets/data/fontData11pt.png");
		nme.installer.Assets.resourceTypes.set("assets/data/fontData11pt.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/handle.png","assets/data/handle.png");
		nme.installer.Assets.resourceTypes.set("assets/data/handle.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/hurt.wav","assets/data/hurt.wav");
		nme.installer.Assets.resourceTypes.set("assets/data/hurt.wav","sound");
		nme.installer.Assets.resourceNames.set("assets/data/jump.wav","assets/data/jump.wav");
		nme.installer.Assets.resourceTypes.set("assets/data/jump.wav","sound");
		nme.installer.Assets.resourceNames.set("assets/data/logo.png","assets/data/logo.png");
		nme.installer.Assets.resourceTypes.set("assets/data/logo.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/logo_corners.png","assets/data/logo_corners.png");
		nme.installer.Assets.resourceTypes.set("assets/data/logo_corners.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/logo_light.png","assets/data/logo_light.png");
		nme.installer.Assets.resourceTypes.set("assets/data/logo_light.png","image");
		nme.installer.Assets.resourceClasses.set("assets/data/nokiafc22.ttf",NME_assets_data_nokiafc22_ttf);
		nme.installer.Assets.resourceNames.set("assets/data/nokiafc22.ttf","assets/data/nokiafc22.ttf");
		nme.installer.Assets.resourceTypes.set("assets/data/nokiafc22.ttf","font");
		nme.installer.Assets.resourceNames.set("assets/data/pickup.wav","assets/data/pickup.wav");
		nme.installer.Assets.resourceTypes.set("assets/data/pickup.wav","sound");
		nme.installer.Assets.resourceNames.set("assets/data/standard_beat.mp3","assets/data/standard_beat.mp3");
		nme.installer.Assets.resourceTypes.set("assets/data/standard_beat.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/data/stick.png","assets/data/stick.png");
		nme.installer.Assets.resourceTypes.set("assets/data/stick.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/surreal_ambient.mp3","assets/data/surreal_ambient.mp3");
		nme.installer.Assets.resourceTypes.set("assets/data/surreal_ambient.mp3","music");
		nme.installer.Assets.resourceNames.set("assets/data/vcr/flixel.png","assets/data/vcr/flixel.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vcr/flixel.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/vcr/open.png","assets/data/vcr/open.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vcr/open.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/vcr/pause.png","assets/data/vcr/pause.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vcr/pause.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/vcr/play.png","assets/data/vcr/play.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vcr/play.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/vcr/record_off.png","assets/data/vcr/record_off.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vcr/record_off.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/vcr/record_on.png","assets/data/vcr/record_on.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vcr/record_on.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/vcr/restart.png","assets/data/vcr/restart.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vcr/restart.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/vcr/step.png","assets/data/vcr/step.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vcr/step.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/vcr/stop.png","assets/data/vcr/stop.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vcr/stop.png","image");
		nme.installer.Assets.resourceNames.set("assets/data/vis/bounds.png","assets/data/vis/bounds.png");
		nme.installer.Assets.resourceTypes.set("assets/data/vis/bounds.png","image");
		nme.installer.Assets.resourceNames.set("assets/door.png","assets/door.png");
		nme.installer.Assets.resourceTypes.set("assets/door.png","image");
		nme.installer.Assets.resourceNames.set("assets/goal","assets/goal");
		nme.installer.Assets.resourceTypes.set("assets/goal","binary");
		nme.installer.Assets.resourceNames.set("assets/goal.png","assets/goal.png");
		nme.installer.Assets.resourceTypes.set("assets/goal.png","image");
		nme.installer.Assets.resourceNames.set("assets/health.png","assets/health.png");
		nme.installer.Assets.resourceTypes.set("assets/health.png","image");
		nme.installer.Assets.resourceNames.set("assets/lava.png","assets/lava.png");
		nme.installer.Assets.resourceTypes.set("assets/lava.png","image");
		nme.installer.Assets.resourceNames.set("assets/LevelFour.dam","assets/LevelFour.dam");
		nme.installer.Assets.resourceTypes.set("assets/LevelFour.dam","text");
		nme.installer.Assets.resourceNames.set("assets/LevelFour.dam.bak","assets/LevelFour.dam.bak");
		nme.installer.Assets.resourceTypes.set("assets/LevelFour.dam.bak","text");
		nme.installer.Assets.resourceNames.set("assets/levelOne.dam","assets/levelOne.dam");
		nme.installer.Assets.resourceTypes.set("assets/levelOne.dam","text");
		nme.installer.Assets.resourceNames.set("assets/levelOne.dam.bak","assets/levelOne.dam.bak");
		nme.installer.Assets.resourceTypes.set("assets/levelOne.dam.bak","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_Group1_Map1.csv","assets/levels/mapCSV_Group1_Map1.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_Group1_Map1.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_Group1_Map2.csv","assets/levels/mapCSV_Group1_Map2.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_Group1_Map2.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_LevelFour_Map1.csv","assets/levels/mapCSV_LevelFour_Map1.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_LevelFour_Map1.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_LevelFour_Map2.csv","assets/levels/mapCSV_LevelFour_Map2.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_LevelFour_Map2.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_levelOne_Map1.csv","assets/levels/mapCSV_levelOne_Map1.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_levelOne_Map1.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_levelOne_Map2.csv","assets/levels/mapCSV_levelOne_Map2.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_levelOne_Map2.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_LevelThree_Map1.csv","assets/levels/mapCSV_LevelThree_Map1.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_LevelThree_Map1.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_LevelThree_Map2.csv","assets/levels/mapCSV_LevelThree_Map2.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_LevelThree_Map2.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_LevelTwo_Map1.csv","assets/levels/mapCSV_LevelTwo_Map1.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_LevelTwo_Map1.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_LevelTwo_Map2.csv","assets/levels/mapCSV_LevelTwo_Map2.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_LevelTwo_Map2.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_Menu_Map1.csv","assets/levels/mapCSV_Menu_Map1.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_Menu_Map1.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_Tutorial_Map2.csv","assets/levels/mapCSV_Tutorial_Map2.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_Tutorial_Map2.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_Tutorial_Map3.csv","assets/levels/mapCSV_Tutorial_Map3.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_Tutorial_Map3.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_Win_Map1.csv","assets/levels/mapCSV_Win_Map1.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_Win_Map1.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_WorldMap_Map1.csv","assets/levels/mapCSV_WorldMap_Map1.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_WorldMap_Map1.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/mapCSV_WorldSelect_Map1.csv","assets/levels/mapCSV_WorldSelect_Map1.csv");
		nme.installer.Assets.resourceTypes.set("assets/levels/mapCSV_WorldSelect_Map1.csv","text");
		nme.installer.Assets.resourceNames.set("assets/levels/tutorial.dam","assets/levels/tutorial.dam");
		nme.installer.Assets.resourceTypes.set("assets/levels/tutorial.dam","text");
		nme.installer.Assets.resourceNames.set("assets/levels/tutorial.dam.bak","assets/levels/tutorial.dam.bak");
		nme.installer.Assets.resourceTypes.set("assets/levels/tutorial.dam.bak","text");
		nme.installer.Assets.resourceNames.set("assets/levels/WorldMap.dam","assets/levels/WorldMap.dam");
		nme.installer.Assets.resourceTypes.set("assets/levels/WorldMap.dam","text");
		nme.installer.Assets.resourceNames.set("assets/LevelThree.dam","assets/LevelThree.dam");
		nme.installer.Assets.resourceTypes.set("assets/LevelThree.dam","text");
		nme.installer.Assets.resourceNames.set("assets/LevelThree.dam.bak","assets/LevelThree.dam.bak");
		nme.installer.Assets.resourceTypes.set("assets/LevelThree.dam.bak","text");
		nme.installer.Assets.resourceNames.set("assets/LevelTwo.dam","assets/LevelTwo.dam");
		nme.installer.Assets.resourceTypes.set("assets/LevelTwo.dam","text");
		nme.installer.Assets.resourceNames.set("assets/LevelTwo.dam.bak","assets/LevelTwo.dam.bak");
		nme.installer.Assets.resourceTypes.set("assets/LevelTwo.dam.bak","text");
		nme.installer.Assets.resourceNames.set("assets/Menu.dam","assets/Menu.dam");
		nme.installer.Assets.resourceTypes.set("assets/Menu.dam","text");
		nme.installer.Assets.resourceNames.set("assets/Platformer.dam","assets/Platformer.dam");
		nme.installer.Assets.resourceTypes.set("assets/Platformer.dam","text");
		nme.installer.Assets.resourceNames.set("assets/platformTiles.png","assets/platformTiles.png");
		nme.installer.Assets.resourceTypes.set("assets/platformTiles.png","image");
		nme.installer.Assets.resourceNames.set("assets/player.png","assets/player.png");
		nme.installer.Assets.resourceTypes.set("assets/player.png","image");
		nme.installer.Assets.resourceNames.set("assets/power.png","assets/power.png");
		nme.installer.Assets.resourceTypes.set("assets/power.png","image");
		nme.installer.Assets.resourceNames.set("assets/spriteTiles","assets/spriteTiles");
		nme.installer.Assets.resourceTypes.set("assets/spriteTiles","binary");
		nme.installer.Assets.resourceNames.set("assets/spriteTiles.png","assets/spriteTiles.png");
		nme.installer.Assets.resourceTypes.set("assets/spriteTiles.png","image");
		nme.installer.Assets.resourceNames.set("assets/Win.dam","assets/Win.dam");
		nme.installer.Assets.resourceTypes.set("assets/Win.dam","text");
		nme.installer.Assets.resourceNames.set("assets/Win.dam.bak","assets/Win.dam.bak");
		nme.installer.Assets.resourceTypes.set("assets/Win.dam.bak","text");
		nme.installer.Assets.resourceNames.set("assets/world.png","assets/world.png");
		nme.installer.Assets.resourceTypes.set("assets/world.png","image");
		nme.installer.Assets.initialized = true;
	}
}
nme.installer.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id) && nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "image") {
		if(useCache && nme.installer.Assets.cachedBitmapData.exists(id)) return nme.installer.Assets.cachedBitmapData.get(id); else {
			var data = (js.Boot.__cast(ApplicationMain.loaders.get(nme.installer.Assets.resourceNames.get(id)).contentLoaderInfo.content , browser.display.Bitmap)).bitmapData;
			if(useCache) nme.installer.Assets.cachedBitmapData.set(id,data);
			return data;
		}
	} else if(id.indexOf(":") > -1) {
		var libraryName = HxOverrides.substr(id,0,id.indexOf(":"));
		var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
		if(nme.installer.Assets.libraryTypes.exists(libraryName)) {
		} else haxe.Log.trace("[nme.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 473, className : "nme.installer.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[nme.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 479, className : "nme.installer.Assets", methodName : "getBitmapData"});
	return null;
}
nme.installer.Assets.getBytes = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id)) return ApplicationMain.urlLoaders.get(nme.installer.Assets.getResourceName(id)).data;
	haxe.Log.trace("[nme.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 498, className : "nme.installer.Assets", methodName : "getBytes"});
	return null;
}
nme.installer.Assets.getFont = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id)) {
		if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "font") return js.Boot.__cast(Type.createInstance(nme.installer.Assets.resourceClasses.get(id),[]) , browser.text.Font);
	}
	haxe.Log.trace("[nme.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 519, className : "nme.installer.Assets", methodName : "getFont"});
	return null;
}
nme.installer.Assets.getMovieClip = function(id) {
	nme.installer.Assets.initialize();
	var libraryName = HxOverrides.substr(id,0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	if(nme.installer.Assets.libraryTypes.exists(libraryName)) {
	} else haxe.Log.trace("[nme.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 571, className : "nme.installer.Assets", methodName : "getMovieClip"});
	return null;
}
nme.installer.Assets.getResourceName = function(id) {
	nme.installer.Assets.initialize();
	return nme.installer.Assets.resourceNames.get(id);
}
nme.installer.Assets.getSound = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id)) {
		if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "sound") return new browser.media.Sound(new browser.net.URLRequest(nme.installer.Assets.resourceNames.get(id))); else if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "music") return new browser.media.Sound(new browser.net.URLRequest(nme.installer.Assets.resourceNames.get(id)));
	}
	haxe.Log.trace("[nme.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 607, className : "nme.installer.Assets", methodName : "getSound"});
	return null;
}
nme.installer.Assets.getText = function(id) {
	nme.installer.Assets.initialize();
	if(nme.installer.Assets.resourceNames.exists(id) && nme.installer.Assets.resourceTypes.exists(id)) {
		if(nme.installer.Assets.resourceTypes.get(id).toLowerCase() == "text") return ApplicationMain.urlLoaders.get(nme.installer.Assets.resourceNames.get(id)).data;
	}
	var bytes = nme.installer.Assets.getBytes(id);
	return null;
}
nme.installer.Assets.resolveClass = function(name) {
	name = StringTools.replace(name,"native.","browser.");
	return Type.resolveClass(name);
}
nme.installer.Assets.resolveEnum = function(name) {
	name = StringTools.replace(name,"native.","browser.");
	return Type.resolveEnum(name);
}
org.flixel.FlxTypedButton = function(X,Y,Label,OnClick) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	org.flixel.FlxSprite.call(this,X,Y);
	this.loadGraphic(org.flixel.FlxAssets.imgDefaultButton,true,false,80,20);
	this.onUp = OnClick;
	this.onDown = null;
	this.onOut = null;
	this.onOver = null;
	this.soundOver = null;
	this.soundOut = null;
	this.soundDown = null;
	this.soundUp = null;
	this.status = 0;
	this.on = false;
	this._pressed = false;
	this._initialized = false;
};
$hxClasses["org.flixel.FlxTypedButton"] = org.flixel.FlxTypedButton;
org.flixel.FlxTypedButton.__name__ = ["org","flixel","FlxTypedButton"];
org.flixel.FlxTypedButton.__super__ = org.flixel.FlxSprite;
org.flixel.FlxTypedButton.prototype = $extend(org.flixel.FlxSprite.prototype,{
	set_atlas: function(value) {
		var atl = org.flixel.FlxSprite.prototype.set_atlas.call(this,value);
		if(atl == value && this.label != null) this.label.set_atlas(value);
		return value;
	}
	,onMouseUp: function(event) {
		if(!this.exists || !this.visible || !this.active || this.status != 2) return;
		if(this.onUp != null) this.onUp();
		if(this.soundUp != null) this.soundUp.play(true);
		this.status = 0;
	}
	,setSounds: function(SoundOver,SoundOverVolume,SoundOut,SoundOutVolume,SoundDown,SoundDownVolume,SoundUp,SoundUpVolume) {
		if(SoundUpVolume == null) SoundUpVolume = 1.0;
		if(SoundDownVolume == null) SoundDownVolume = 1.0;
		if(SoundOutVolume == null) SoundOutVolume = 1.0;
		if(SoundOverVolume == null) SoundOverVolume = 1.0;
		if(SoundOver != null) this.soundOver = org.flixel.FlxG.loadSound(SoundOver,SoundOverVolume);
		if(SoundOut != null) this.soundOut = org.flixel.FlxG.loadSound(SoundOut,SoundOutVolume);
		if(SoundDown != null) this.soundDown = org.flixel.FlxG.loadSound(SoundDown,SoundDownVolume);
		if(SoundUp != null) this.soundUp = org.flixel.FlxG.loadSound(SoundUp,SoundUpVolume);
	}
	,draw: function() {
		org.flixel.FlxSprite.prototype.draw.call(this);
		if(this.label != null) {
			this.label.cameras = this.cameras;
			this.label.draw();
		}
	}
	,updateButtonStatus: function(Point,Camera,JustPressed) {
		var offAll = true;
		if(this.overlapsPoint(Point,true,Camera)) {
			offAll = false;
			if(JustPressed) {
				this.status = 2;
				if(this.onDown != null) this.onDown();
				if(this.soundDown != null) this.soundDown.play(true);
			}
			if(this.status == 0) {
				this.status = 1;
				if(this.onOver != null) this.onOver();
				if(this.soundOver != null) this.soundOver.play(true);
			}
		}
		return offAll;
	}
	,updateButton: function() {
		var continueUpdate = false;
		continueUpdate = org.flixel.FlxG.mouse._updateCursorContainer;
		continueUpdate = true;
		if(continueUpdate) {
			if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
			var camera;
			var i = 0;
			var l = this.cameras.length;
			var offAll = true;
			while(i < l) {
				camera = this.cameras[i++];
				org.flixel.FlxG.mouse.getWorldPosition(camera,this._point);
				offAll = this.updateButtonStatus(this._point,camera,org.flixel.FlxG.mouse.justPressed()) == false?false:offAll;
				var _g1 = 0, _g = org.flixel.FlxG.touchManager.touches.length;
				while(_g1 < _g) {
					var j = _g1++;
					var touch = org.flixel.FlxG.touchManager.touches[j];
					touch.getWorldPosition(camera,this._point);
					offAll = this.updateButtonStatus(this._point,camera,touch.justPressed()) == false?false:offAll;
				}
			}
			if(offAll) {
				if(this.status != 0) {
					if(this.onOut != null) this.onOut();
					if(this.soundOut != null) this.soundOut.play(true);
				}
				this.status = 0;
			}
		}
		if(this.label != null) {
			this.label.x = this.x;
			this.label.y = this.y;
			if(this.labelOffset != null) {
				this.label.x += this.labelOffset.x;
				this.label.y += this.labelOffset.y;
			}
			this.label.scrollFactor = this.scrollFactor;
		}
		if(this.status == 1 && this.on) this.set_frame(0); else this.set_frame(this.status);
	}
	,update: function() {
		this.updateButton();
		if(this.label == null) return;
		switch(this.get_frame()) {
		case 1:
			this.label.set_alpha(1.0);
			break;
		case 2:
			this.label.set_alpha(0.5);
			this.label.y++;
			break;
		default:
			this.label.set_alpha(0.8);
		}
	}
	,preUpdate: function() {
		org.flixel.FlxSprite.prototype.preUpdate.call(this);
		if(!this._initialized) {
			if(org.flixel.FlxG.get_stage() != null) {
				nme.Lib.get_current().get_stage().addEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
				nme.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.onMouseUp));
				this._initialized = true;
			}
		}
	}
	,destroy: function() {
		if(org.flixel.FlxG.get_stage() != null) {
			nme.Lib.get_current().get_stage().removeEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
			nme.Lib.get_current().get_stage().removeEventListener("touchEnd",$bind(this,this.onMouseUp));
		}
		if(this.label != null) {
			this.label.destroy();
			this.label = null;
		}
		this.onUp = null;
		this.onDown = null;
		this.onOut = null;
		this.onOver = null;
		if(this.soundOver != null) this.soundOver.destroy();
		if(this.soundOut != null) this.soundOut.destroy();
		if(this.soundDown != null) this.soundDown.destroy();
		if(this.soundUp != null) this.soundUp.destroy();
		org.flixel.FlxSprite.prototype.destroy.call(this);
	}
	,_initialized: null
	,_pressed: null
	,soundUp: null
	,soundDown: null
	,soundOut: null
	,soundOver: null
	,status: null
	,onOut: null
	,onOver: null
	,onDown: null
	,onUp: null
	,labelOffset: null
	,label: null
	,on: null
	,__class__: org.flixel.FlxTypedButton
});
org.flixel.FlxButton = function(X,Y,Label,OnClick) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	org.flixel.FlxTypedButton.call(this,X,Y,Label,OnClick);
	if(Label != null) {
		this.label = new org.flixel.FlxText(0,0,80,Label);
		this.label.setFormat(null,8,3355443,"center");
		this.labelOffset = new org.flixel.FlxPoint(-1,3);
	}
};
$hxClasses["org.flixel.FlxButton"] = org.flixel.FlxButton;
org.flixel.FlxButton.__name__ = ["org","flixel","FlxButton"];
org.flixel.FlxButton.__super__ = org.flixel.FlxTypedButton;
org.flixel.FlxButton.prototype = $extend(org.flixel.FlxTypedButton.prototype,{
	resetHelpers: function() {
		org.flixel.FlxTypedButton.prototype.resetHelpers.call(this);
		if(this.label != null) {
			this.label.width = this.label.frameWidth = this.width | 0;
			this.label.set_size(this.label.get_size());
		}
	}
	,__class__: org.flixel.FlxButton
});
org.flixel.FlxCamera = function(X,Y,Width,Height,Zoom) {
	if(Zoom == null) Zoom = 0;
	org.flixel.FlxBasic.call(this);
	this._scrollTarget = new org.flixel.FlxPoint();
	this.x = X;
	this.y = Y;
	this.set_width(Width);
	this.set_height(Height);
	this.target = null;
	this.deadzone = null;
	this.scroll = new org.flixel.FlxPoint();
	this._point = new org.flixel.FlxPoint();
	this.bounds = null;
	this.bgColor = org.flixel.FlxG.get_bgColor();
	this._canvas = new browser.display.Sprite();
	this._canvas.set_x(-this.width * 0.5);
	this._canvas.set_y(-this.height * 0.5);
	this.set_color(-1);
	this._flashSprite = new browser.display.Sprite();
	this.set_zoom(Zoom);
	this._flashOffsetX = this.width * 0.5 * this.zoom;
	this._flashOffsetY = this.height * 0.5 * this.zoom;
	this._flashSprite.set_x(this.x + this._flashOffsetX);
	this._flashSprite.set_y(this.y + this._flashOffsetY);
	this._flashSprite.addChild(this._canvas);
	this._flashRect = new browser.geom.Rectangle(0,0,this.width,this.height);
	this._flashPoint = new browser.geom.Point();
	this._fxFlashColor = 0;
	this._fxFlashDuration = 0.0;
	this._fxFlashComplete = null;
	this._fxFlashAlpha = 0.0;
	this._fxFadeColor = 0;
	this._fxFadeDuration = 0.0;
	this._fxFadeComplete = null;
	this._fxFadeAlpha = 0.0;
	this._fxShakeIntensity = 0.0;
	this._fxShakeDuration = 0.0;
	this._fxShakeComplete = null;
	this._fxShakeOffset = new org.flixel.FlxPoint();
	this._fxShakeDirection = 0;
	this._canvas.set_scrollRect(new browser.geom.Rectangle(0,0,this.width,this.height));
	this._effectsLayer = new browser.display.Sprite();
	this._effectsLayer.set_x(-this.width * 0.5);
	this._effectsLayer.set_y(-this.height * 0.5);
	this._flashSprite.addChild(this._effectsLayer);
	this.red = 1.0;
	this.green = 1.0;
	this.blue = 1.0;
	this.fog = 0.0;
	this._currentStackItem = new org.flixel.system.layer.DrawStackItem();
	this._headOfDrawStack = this._currentStackItem;
	this._fxFadeIn = false;
	this.set_alpha(1.0);
	this.set_angle(0.0);
	this.set_antialiasing(false);
};
$hxClasses["org.flixel.FlxCamera"] = org.flixel.FlxCamera;
org.flixel.FlxCamera.__name__ = ["org","flixel","FlxCamera"];
org.flixel.FlxCamera.defaultZoom = null;
org.flixel.FlxCamera._storageHead = null;
org.flixel.FlxCamera.__super__ = org.flixel.FlxBasic;
org.flixel.FlxCamera.prototype = $extend(org.flixel.FlxBasic.prototype,{
	set_height: function(val) {
		if(val > 0) {
			this.height = val;
			if(this._canvas != null) {
				var rect = this._canvas.get_scrollRect();
				rect.height = val;
				this._canvas.set_scrollRect(rect);
				this._flashOffsetY = this.height * 0.5 * this.zoom;
				this._effectsLayer.set_y(this._canvas.set_y(-this.height * 0.5));
			}
		}
		return val;
	}
	,set_width: function(val) {
		if(val > 0) {
			this.width = val;
			if(this._canvas != null) {
				var rect = this._canvas.get_scrollRect();
				rect.width = val;
				this._canvas.set_scrollRect(rect);
				this._flashOffsetX = this.width * 0.5 * this.zoom;
				this._effectsLayer.set_x(this._canvas.set_x(-this.width * 0.5));
			}
		}
		return val;
	}
	,fog: null
	,drawFX: function() {
		var alphaComponent;
		if(this._fxFlashAlpha > 0.0) {
			alphaComponent = this._fxFlashColor >> 24 & 255;
			this.fill(this._fxFlashColor & 16777215,true,(alphaComponent <= 0?255:alphaComponent) * this._fxFlashAlpha / 255,this._effectsLayer.get_graphics());
		}
		if(this._fxFadeAlpha > 0.0) {
			alphaComponent = this._fxFadeColor >> 24 & 255;
			this.fill(this._fxFadeColor & 16777215,true,(alphaComponent <= 0?255:alphaComponent) * this._fxFadeAlpha / 255,this._effectsLayer.get_graphics());
		}
		if(this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0) {
			var _g = this._flashSprite;
			_g.set_x(_g.get_x() + this._fxShakeOffset.x);
			var _g = this._flashSprite;
			_g.set_y(_g.get_y() + this._fxShakeOffset.y);
		}
		if(this.fog > 0) {
			this._effectsLayer.get_graphics().beginFill(16777215,this.fog);
			this._effectsLayer.get_graphics().drawRect(0,0,this.width,this.height);
			this._effectsLayer.get_graphics().endFill();
		}
	}
	,fill: function(Color,BlendAlpha,FxAlpha,graphics) {
		if(FxAlpha == null) FxAlpha = 1.0;
		if(BlendAlpha == null) BlendAlpha = true;
		var targetGraphics = graphics == null?this._canvas.get_graphics():graphics;
		Color = Color & 16777215;
		if(this.red != 1.0 || this.green != 1.0 || this.blue != 1.0) {
			var redComponent = (Color >> 16) * this.red | 0;
			var greenComponent = (Color >> 8 & 255) * this.green | 0;
			var blueComponent = (Color & 255) * this.blue | 0;
			Color = redComponent << 16 | greenComponent << 8 | blueComponent;
		}
		targetGraphics.beginFill(Color,FxAlpha);
		targetGraphics.drawRect(0,0,this.width,this.height);
		targetGraphics.endFill();
	}
	,getContainerSprite: function() {
		return this._flashSprite;
	}
	,setScale: function(X,Y) {
		this._flashSprite.set_scaleX(X);
		this._flashSprite.set_scaleY(Y);
		this._flashOffsetX = this.width * 0.5 * X;
		this._flashOffsetY = this.height * 0.5 * Y;
	}
	,getScale: function() {
		return this._point.make(this._flashSprite.get_scaleX(),this._flashSprite.get_scaleY());
	}
	,set_antialiasing: function(Antialiasing) {
		this.antialiasing = Antialiasing;
		return Antialiasing;
	}
	,antialiasing: null
	,set_color: function(Color) {
		this.color = Color;
		this.red = (this.color >> 16) / 255;
		this.green = (this.color >> 8 & 255) / 255;
		this.blue = (this.color & 255) / 255;
		return Color;
	}
	,color: null
	,set_angle: function(Angle) {
		this.angle = Angle;
		this._flashSprite.set_rotation(Angle);
		return Angle;
	}
	,angle: null
	,set_alpha: function(Alpha) {
		this.alpha = org.flixel.FlxU.bound(Alpha,0,1);
		this._canvas.alpha = Alpha;
		return Alpha;
	}
	,alpha: null
	,set_zoom: function(Zoom) {
		if(Zoom == 0) this.zoom = org.flixel.FlxCamera.defaultZoom; else this.zoom = Zoom;
		this.setScale(this.zoom,this.zoom);
		return this.zoom;
	}
	,zoom: null
	,copyFrom: function(Camera) {
		if(Camera.bounds == null) this.bounds = null; else {
			if(this.bounds == null) this.bounds = new org.flixel.FlxRect();
			this.bounds.copyFrom(Camera.bounds);
		}
		this.target = Camera.target;
		if(this.target != null) {
			if(Camera.deadzone == null) this.deadzone = null; else {
				if(this.deadzone == null) this.deadzone = new org.flixel.FlxRect();
				this.deadzone.copyFrom(Camera.deadzone);
			}
		}
		return this;
	}
	,stopFX: function() {
		this._fxFlashAlpha = 0.0;
		this._fxFadeAlpha = 0.0;
		this._fxShakeDuration = 0;
		this._flashSprite.set_x(this.x + this._flashOffsetX);
		this._flashSprite.set_y(this.y + this._flashOffsetY);
	}
	,shake: function(Intensity,Duration,OnComplete,Force,Direction) {
		if(Direction == null) Direction = 0;
		if(Force == null) Force = true;
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		if(!Force && (this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0)) return;
		this._fxShakeIntensity = Intensity;
		this._fxShakeDuration = Duration;
		this._fxShakeComplete = OnComplete;
		this._fxShakeDirection = Direction;
		this._fxShakeOffset.make(null,null);
	}
	,fade: function(Color,Duration,FadeIn,OnComplete,Force) {
		if(Force == null) Force = false;
		if(FadeIn == null) FadeIn = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -16777216;
		if(!Force && this._fxFadeAlpha > 0.0) return;
		this._fxFadeColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFadeIn = FadeIn;
		this._fxFadeDuration = Duration;
		this._fxFadeComplete = OnComplete;
		if(this._fxFadeIn) this._fxFadeAlpha = 0.999999; else this._fxFadeAlpha = 0.0000000000000001;
	}
	,flash: function(Color,Duration,OnComplete,Force) {
		if(Force == null) Force = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -1;
		if(!Force && this._fxFlashAlpha > 0.0) return;
		this._fxFlashColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFlashDuration = Duration;
		this._fxFlashComplete = OnComplete;
		this._fxFlashAlpha = 1.0;
	}
	,setBounds: function(X,Y,Width,Height,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		if(this.bounds == null) this.bounds = new org.flixel.FlxRect();
		this.bounds.make(X,Y,Width,Height);
		if(UpdateWorld) org.flixel.FlxG.worldBounds.copyFrom(this.bounds);
		this.update();
	}
	,focusOn: function(point) {
		this.scroll.make(point.x - this.width * 0.5,point.y - this.height * 0.5);
	}
	,followAdjust: function(LeadX,LeadY) {
		if(LeadY == null) LeadY = 0;
		if(LeadX == null) LeadX = 0;
		this.followLead = new browser.geom.Point(LeadX,LeadY);
	}
	,follow: function(Target,Style,Offset,Lerp) {
		if(Lerp == null) Lerp = 0;
		if(Style == null) Style = 0;
		this.style = Style;
		this.target = Target;
		this.followLerp = Lerp;
		var helper;
		var w = 0;
		var h = 0;
		this._lastTargetPosition = null;
		switch(Style) {
		case 1:
			var w1 = this.width / 8 + (Offset != null?Offset.x:0);
			var h1 = this.height / 3 + (Offset != null?Offset.y:0);
			this.deadzone = new org.flixel.FlxRect((this.width - w1) / 2,(this.height - h1) / 2 - h1 * 0.25,w1,h1);
			break;
		case 2:
			helper = org.flixel.FlxU.max(this.width,this.height) / 4;
			this.deadzone = new org.flixel.FlxRect((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 3:
			helper = org.flixel.FlxU.max(this.width,this.height) / 8;
			this.deadzone = new org.flixel.FlxRect((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 0:
			if(this.target != null) {
				w = this.target.width + (Offset != null?Offset.x:0);
				h = this.target.height + (Offset != null?Offset.y:0);
			}
			this.deadzone = new org.flixel.FlxRect((this.width - w) / 2,(this.height - h) / 2 - h * 0.25,w,h);
			break;
		case 4:
			this.deadzone = new org.flixel.FlxRect(0,0,this.width,this.height);
			break;
		default:
			this.deadzone = null;
		}
	}
	,update: function() {
		if(org.flixel.FlxG.paused) return;
		if(this.target != null) {
			if(this.deadzone == null) this.focusOn(this.target.getMidpoint(this._point)); else {
				var edge;
				var targetX = this.target.x;
				var targetY = this.target.y;
				if(this.style == 4) {
					if(targetX > this.scroll.x + this.width) this._scrollTarget.x += this.width; else if(targetX < this.scroll.x) this._scrollTarget.x -= this.width;
					if(targetY > this.scroll.y + this.height) this._scrollTarget.y += this.height; else if(targetY < this.scroll.y) this._scrollTarget.y -= this.height;
				} else {
					edge = targetX - this.deadzone.x;
					if(this._scrollTarget.x > edge) this._scrollTarget.x = edge;
					edge = targetX + this.target.width - this.deadzone.x - this.deadzone.width;
					if(this._scrollTarget.x < edge) this._scrollTarget.x = edge;
					edge = targetY - this.deadzone.y;
					if(this._scrollTarget.y > edge) this._scrollTarget.y = edge;
					edge = targetY + this.target.height - this.deadzone.y - this.deadzone.height;
					if(this._scrollTarget.y < edge) this._scrollTarget.y = edge;
				}
				if(this.followLead != null && js.Boot.__instanceof(this.target,org.flixel.FlxSprite)) {
					if(this._lastTargetPosition == null) this._lastTargetPosition = new org.flixel.FlxPoint(this.target.x,this.target.y);
					this._scrollTarget.x += (this.target.x - this._lastTargetPosition.x) * this.followLead.x;
					this._scrollTarget.y += (this.target.y - this._lastTargetPosition.y) * this.followLead.y;
					this._lastTargetPosition.x = this.target.x;
					this._lastTargetPosition.y = this.target.y;
				}
				if(this.followLerp == 0) {
					this.scroll.x = this._scrollTarget.x;
					this.scroll.y = this._scrollTarget.y;
				} else {
					this.scroll.x += (this._scrollTarget.x - this.scroll.x) * org.flixel.FlxG.elapsed / (org.flixel.FlxG.elapsed + this.followLerp * org.flixel.FlxG.elapsed);
					this.scroll.y += (this._scrollTarget.y - this.scroll.y) * org.flixel.FlxG.elapsed / (org.flixel.FlxG.elapsed + this.followLerp * org.flixel.FlxG.elapsed);
				}
			}
		}
		if(this.bounds != null) {
			if(this.scroll.x < this.bounds.get_left()) this.scroll.x = this.bounds.get_left();
			if(this.scroll.x > this.bounds.get_right() - this.width) this.scroll.x = this.bounds.get_right() - this.width;
			if(this.scroll.y < this.bounds.get_top()) this.scroll.y = this.bounds.get_top();
			if(this.scroll.y > this.bounds.get_bottom() - this.height) this.scroll.y = this.bounds.get_bottom() - this.height;
		}
		if(this._fxFlashAlpha > 0.0) {
			this._fxFlashAlpha -= org.flixel.FlxG.elapsed / this._fxFlashDuration;
			if(this._fxFlashAlpha <= 0 && this._fxFlashComplete != null) this._fxFlashComplete();
		}
		if(this._fxFadeAlpha > 0.0 && this._fxFadeAlpha < 1.0) {
			if(this._fxFadeIn) {
				this._fxFadeAlpha -= org.flixel.FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha <= 0.0) {
					this._fxFadeAlpha = 0.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			} else {
				this._fxFadeAlpha += org.flixel.FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha >= 1.0) {
					this._fxFadeAlpha = 1.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			}
		}
		if(this._fxShakeDuration > 0) {
			this._fxShakeDuration -= org.flixel.FlxG.elapsed;
			if(this._fxShakeDuration <= 0) {
				this._fxShakeOffset.make(null,null);
				if(this._fxShakeComplete != null) this._fxShakeComplete();
			} else {
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 1) this._fxShakeOffset.x = ((function($this) {
					var $r;
					org.flixel.FlxG.globalSeed = 69621 * (org.flixel.FlxG.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
					if(org.flixel.FlxG.globalSeed <= 0) org.flixel.FlxG.globalSeed += 1;
					$r = org.flixel.FlxG.globalSeed;
					return $r;
				}(this)) * this._fxShakeIntensity * this.width * 2 - this._fxShakeIntensity * this.width) * this.zoom;
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 2) this._fxShakeOffset.y = ((function($this) {
					var $r;
					org.flixel.FlxG.globalSeed = 69621 * (org.flixel.FlxG.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
					if(org.flixel.FlxG.globalSeed <= 0) org.flixel.FlxG.globalSeed += 1;
					$r = org.flixel.FlxG.globalSeed;
					return $r;
				}(this)) * this._fxShakeIntensity * this.height * 2 - this._fxShakeIntensity * this.height) * this.zoom;
			}
			if(this.target != null) {
				this._flashSprite.set_x(this.x + this._flashOffsetX);
				this._flashSprite.set_y(this.y + this._flashOffsetY);
			}
		}
	}
	,destroy: function() {
		this.target = null;
		this.scroll = null;
		this.deadzone = null;
		this.bounds = null;
		this._flashRect = null;
		this._flashPoint = null;
		this._fxFlashComplete = null;
		this._fxFadeComplete = null;
		this._fxShakeComplete = null;
		this._fxShakeOffset = null;
		this._flashSprite.removeChild(this._effectsLayer);
		this._flashSprite.removeChild(this._canvas);
		var canvasNumChildren = this._canvas.nmeChildren.length;
		var _g1 = 0, _g = canvasNumChildren;
		while(_g1 < _g) {
			var i = _g1++;
			this._canvas.removeChildAt(0);
		}
		this._effectsLayer = null;
		this._canvas = null;
		this.clearDrawStack();
		this._headOfDrawStack.dispose();
		this._headOfDrawStack = null;
		this._currentStackItem = null;
		this._flashSprite = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,_fxFadeIn: null
	,render: function() {
		var currItem = this._headOfDrawStack;
		while(currItem != null) {
			var data = currItem.drawData;
			var dataLen = data.length;
			var position = currItem.position;
			if(position > 0) {
				if(dataLen != position) data.splice(position,dataLen - position);
				var tempFlags = 16;
				if(currItem.useAlpha) tempFlags |= 8;
				currItem.atlas._tileSheetData.tileSheet.drawTiles(this._canvas.get_graphics(),data,this.antialiasing,tempFlags);
				org.flixel.system.layer.TileSheetData._DRAWCALLS++;
			}
			currItem = currItem.next;
		}
	}
	,clearDrawStack: function() {
		var currItem = this._headOfDrawStack.next;
		while(currItem != null) {
			currItem.atlas = null;
			currItem.initialized = false;
			currItem.position = 0;
			var newStorageHead = currItem;
			currItem = currItem.next;
			if(org.flixel.FlxCamera._storageHead == null) {
				org.flixel.FlxCamera._storageHead = newStorageHead;
				newStorageHead.next = null;
			} else {
				newStorageHead.next = org.flixel.FlxCamera._storageHead;
				org.flixel.FlxCamera._storageHead = newStorageHead;
			}
		}
		this._headOfDrawStack.reset();
		this._headOfDrawStack.next = null;
		this._currentStackItem = this._headOfDrawStack;
	}
	,getDrawStackItem: function(ObjAtlas,UseAlpha) {
		var itemToReturn = null;
		if(this._currentStackItem.initialized == false) {
			this._headOfDrawStack = this._currentStackItem;
			this._currentStackItem.atlas = ObjAtlas;
			this._currentStackItem.useAlpha = UseAlpha;
			itemToReturn = this._currentStackItem;
		} else if(this._currentStackItem.atlas == ObjAtlas && this._currentStackItem.useAlpha == UseAlpha) itemToReturn = this._currentStackItem;
		if(itemToReturn == null) {
			var newItem = null;
			if(org.flixel.FlxCamera._storageHead != null) {
				newItem = org.flixel.FlxCamera._storageHead;
				var newHead = org.flixel.FlxCamera._storageHead.next;
				newItem.next = null;
				org.flixel.FlxCamera._storageHead = newHead;
			} else newItem = new org.flixel.system.layer.DrawStackItem();
			newItem.atlas = ObjAtlas;
			newItem.useAlpha = UseAlpha;
			this._currentStackItem.next = newItem;
			this._currentStackItem = newItem;
			itemToReturn = this._currentStackItem;
		}
		itemToReturn.initialized = true;
		return itemToReturn;
	}
	,_headOfDrawStack: null
	,_currentStackItem: null
	,blue: null
	,green: null
	,red: null
	,_effectsLayer: null
	,_canvas: null
	,_fxShakeDirection: null
	,_fxShakeOffset: null
	,_fxShakeComplete: null
	,_fxShakeDuration: null
	,_fxShakeIntensity: null
	,_fxFadeAlpha: null
	,_fxFadeComplete: null
	,_fxFadeDuration: null
	,_scrollTarget: null
	,_lastTargetPosition: null
	,_fxFadeColor: null
	,_fxFlashAlpha: null
	,_fxFlashComplete: null
	,_fxFlashDuration: null
	,_fxFlashColor: null
	,_flashPoint: null
	,_flashRect: null
	,_flashOffsetY: null
	,_flashOffsetX: null
	,_flashSprite: null
	,_point: null
	,bgColor: null
	,scroll: null
	,bounds: null
	,deadzone: null
	,followLerp: null
	,followLead: null
	,target: null
	,style: null
	,height: null
	,width: null
	,y: null
	,x: null
	,__class__: org.flixel.FlxCamera
	,__properties__: $extend(org.flixel.FlxBasic.prototype.__properties__,{set_width:"set_width",set_height:"set_height",set_zoom:"set_zoom",set_alpha:"set_alpha",set_angle:"set_angle",set_color:"set_color",set_antialiasing:"set_antialiasing"})
});
org.flixel.FlxG = function() {
};
$hxClasses["org.flixel.FlxG"] = org.flixel.FlxG;
org.flixel.FlxG.__name__ = ["org","flixel","FlxG"];
org.flixel.FlxG.__properties__ = {get_state:"get_state",get_stage:"get_stage",set_volume:"setVolume",set_framerate:"set_framerate",get_framerate:"get_framerate",set_flashFramerate:"set_flashFramerate",get_flashFramerate:"get_flashFramerate",set_bgColor:"set_bgColor",get_bgColor:"get_bgColor"}
org.flixel.FlxG.bgColor = null;
org.flixel.FlxG.flashFramerate = null;
org.flixel.FlxG._game = null;
org.flixel.FlxG.paused = null;
org.flixel.FlxG.debug = null;
org.flixel.FlxG.elapsed = null;
org.flixel.FlxG.timeScale = null;
org.flixel.FlxG.width = null;
org.flixel.FlxG.height = null;
org.flixel.FlxG.worldBounds = null;
org.flixel.FlxG.worldDivisions = null;
org.flixel.FlxG.visualDebug = null;
org.flixel.FlxG.mobile = null;
org.flixel.FlxG.globalSeed = null;
org.flixel.FlxG.levels = null;
org.flixel.FlxG.level = null;
org.flixel.FlxG.scores = null;
org.flixel.FlxG.score = null;
org.flixel.FlxG.saves = null;
org.flixel.FlxG.save = null;
org.flixel.FlxG.music = null;
org.flixel.FlxG.sounds = null;
org.flixel.FlxG.mute = null;
org.flixel.FlxG.cameras = null;
org.flixel.FlxG.camera = null;
org.flixel.FlxG.useBufferLocking = null;
org.flixel.FlxG._cameraRect = null;
org.flixel.FlxG.plugins = null;
org.flixel.FlxG.volumeHandler = null;
org.flixel.FlxG.flashGfxSprite = null;
org.flixel.FlxG.flashGfx = null;
org.flixel.FlxG._cache = null;
org.flixel.FlxG._lastBitmapDataKey = null;
org.flixel.FlxG.mouse = null;
org.flixel.FlxG.keys = null;
org.flixel.FlxG.touchManager = null;
org.flixel.FlxG.getLibraryName = function() {
	return "HaxeFlixel" + " v" + "1" + "." + "09";
}
org.flixel.FlxG.log = function(Data) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(Data == null?"ERROR: null object":js.Boot.__instanceof(Data,Array)?org.flixel.FlxU.formatArray(js.Boot.__cast(Data , Array)):Std.string(Data));
}
org.flixel.FlxG.clearLog = function() {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.clear();
}
org.flixel.FlxG.watch = function(AnyObject,VariableName,DisplayName) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game._debugger.watch.add(AnyObject,VariableName,DisplayName);
}
org.flixel.FlxG.unwatch = function(AnyObject,VariableName) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game._debugger.watch.remove(AnyObject,VariableName);
}
org.flixel.FlxG.framerate = null;
org.flixel.FlxG.get_framerate = function() {
	return 1000 / org.flixel.FlxG._game._step | 0;
}
org.flixel.FlxG.set_framerate = function(Framerate) {
	org.flixel.FlxG._game._step = Math.abs(1000 / Framerate) | 0;
	org.flixel.FlxG._game._stepSeconds = org.flixel.FlxG._game._step / 1000;
	if(org.flixel.FlxG._game._maxAccumulation < org.flixel.FlxG._game._step) org.flixel.FlxG._game._maxAccumulation = org.flixel.FlxG._game._step;
	return Framerate;
}
org.flixel.FlxG.get_flashFramerate = function() {
	if(org.flixel.FlxG._game.get_stage() != null) return org.flixel.FlxG._game.get_stage().get_frameRate() | 0;
	return 0;
}
org.flixel.FlxG.set_flashFramerate = function(Framerate) {
	org.flixel.FlxG._game._flashFramerate = Math.abs(Framerate) | 0;
	if(org.flixel.FlxG._game.get_stage() != null) org.flixel.FlxG._game.get_stage().set_frameRate(org.flixel.FlxG._game._flashFramerate);
	org.flixel.FlxG._game._maxAccumulation = (2000 / org.flixel.FlxG._game._flashFramerate | 0) - 1;
	if(org.flixel.FlxG._game._maxAccumulation < org.flixel.FlxG._game._step) org.flixel.FlxG._game._maxAccumulation = org.flixel.FlxG._game._step;
	return Framerate;
}
org.flixel.FlxG.random = function() {
	org.flixel.FlxG.globalSeed = 69621 * (org.flixel.FlxG.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
	if(org.flixel.FlxG.globalSeed <= 0) org.flixel.FlxG.globalSeed += 1;
	return org.flixel.FlxG.globalSeed;
}
org.flixel.FlxG.shuffle = function(Objects,HowManyTimes) {
	HowManyTimes = Math.max(HowManyTimes,0) | 0;
	var i = 0;
	var index1;
	var index2;
	var object;
	while(i < HowManyTimes) {
		index1 = (function($this) {
			var $r;
			org.flixel.FlxG.globalSeed = 69621 * (org.flixel.FlxG.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.FlxG.globalSeed <= 0) org.flixel.FlxG.globalSeed += 1;
			$r = org.flixel.FlxG.globalSeed;
			return $r;
		}(this)) * Objects.length | 0;
		index2 = (function($this) {
			var $r;
			org.flixel.FlxG.globalSeed = 69621 * (org.flixel.FlxG.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.FlxG.globalSeed <= 0) org.flixel.FlxG.globalSeed += 1;
			$r = org.flixel.FlxG.globalSeed;
			return $r;
		}(this)) * Objects.length | 0;
		object = Objects[index2];
		Objects[index2] = Objects[index1];
		Objects[index1] = object;
		i++;
	}
	return Objects;
}
org.flixel.FlxG.getRandom = function(Objects,StartIndex,Length) {
	if(Length == null) Length = 0;
	if(StartIndex == null) StartIndex = 0;
	if(Objects != null) {
		if(StartIndex < 0) StartIndex = 0;
		if(Length < 0) Length = 0;
		var l = Length;
		if(l == 0 || l > Objects.length - StartIndex) l = Objects.length - StartIndex;
		if(l > 0) return Objects[StartIndex + ((function($this) {
			var $r;
			org.flixel.FlxG.globalSeed = 69621 * (org.flixel.FlxG.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.FlxG.globalSeed <= 0) org.flixel.FlxG.globalSeed += 1;
			$r = org.flixel.FlxG.globalSeed;
			return $r;
		}(this)) * l | 0)];
	}
	return null;
}
org.flixel.FlxG.loadReplay = function(Data,State,CancelKeys,Timeout,Callback) {
	if(Timeout == null) Timeout = 0;
	org.flixel.FlxG._game._replay.load(Data);
	if(State == null) org.flixel.FlxG.resetGame(); else org.flixel.FlxG.switchState(State);
	org.flixel.FlxG._game._replayCancelKeys = CancelKeys;
	org.flixel.FlxG._game._replayTimer = Timeout * 1000 | 0;
	org.flixel.FlxG._game._replayCallback = Callback;
	org.flixel.FlxG._game._replayRequested = true;
}
org.flixel.FlxG.reloadReplay = function(StandardMode) {
	if(StandardMode == null) StandardMode = true;
	if(StandardMode) org.flixel.FlxG.resetGame(); else org.flixel.FlxG.resetState();
	if(org.flixel.FlxG._game._replay.frameCount > 0) org.flixel.FlxG._game._replayRequested = true;
}
org.flixel.FlxG.stopReplay = function() {
	org.flixel.FlxG._game._replaying = false;
	if(org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game._debugger.vcr.stopped();
	org.flixel.FlxG.resetInput();
}
org.flixel.FlxG.recordReplay = function(StandardMode) {
	if(StandardMode == null) StandardMode = true;
	if(StandardMode) org.flixel.FlxG.resetGame(); else org.flixel.FlxG.resetState();
	org.flixel.FlxG._game._recordingRequested = true;
}
org.flixel.FlxG.stopRecording = function() {
	org.flixel.FlxG._game._recording = false;
	if(org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game._debugger.vcr.stopped();
	return org.flixel.FlxG._game._replay.save();
}
org.flixel.FlxG.resetState = function() {
	org.flixel.FlxG._game._requestedState = Type.createInstance(Type.resolveClass((function($this) {
		var $r;
		var s = Type.getClassName(Type.getClass(org.flixel.FlxG._game._state));
		if(s != null) {
			s = StringTools.replace(s,"::",".");
		}
		$r = s;
		return $r;
	}(this))),[]);
	if(js.Boot.__instanceof(org.flixel.FlxG._game._requestedState,org.flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
}
org.flixel.FlxG.resetGame = function() {
	org.flixel.FlxG._game._requestedReset = true;
}
org.flixel.FlxG.resetInput = function() {
	org.flixel.system.input.FlxInputs.resetInputs();
}
org.flixel.FlxG.playMusic = function(Music,Volume) {
	if(Volume == null) Volume = 1.0;
	if(org.flixel.FlxG.music == null) org.flixel.FlxG.music = new org.flixel.FlxSound(); else if(org.flixel.FlxG.music.active) org.flixel.FlxG.music.stop();
	org.flixel.FlxG.music.loadEmbedded(Music,true);
	org.flixel.FlxG.music.set_volume(Volume);
	org.flixel.FlxG.music.survive = true;
	org.flixel.FlxG.music.play();
}
org.flixel.FlxG.loadSound = function(EmbeddedSound,Volume,Looped,AutoDestroy,AutoPlay,URL) {
	if(AutoPlay == null) AutoPlay = false;
	if(AutoDestroy == null) AutoDestroy = false;
	if(Looped == null) Looped = false;
	if(Volume == null) Volume = 1.0;
	if(EmbeddedSound == null && URL == null) {
		if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("WARNING: FlxG.loadSound() requires either\nan embedded sound or a URL to work.",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("WARNING: FlxG.loadSound() requires either\nan embedded sound or a URL to work." , Array)):Std.string("WARNING: FlxG.loadSound() requires either\nan embedded sound or a URL to work."));
		return null;
	}
	var sound = org.flixel.FlxG.sounds.recycle(org.flixel.FlxSound);
	if(EmbeddedSound != null) sound.loadEmbedded(EmbeddedSound,Looped,AutoDestroy); else sound.loadStream(URL,Looped,AutoDestroy);
	sound.set_volume(Volume);
	if(AutoPlay) sound.play();
	return sound;
}
org.flixel.FlxG.play = function(EmbeddedSound,Volume,Looped,AutoDestroy) {
	if(AutoDestroy == null) AutoDestroy = true;
	if(Looped == null) Looped = false;
	if(Volume == null) Volume = 1.0;
	return org.flixel.FlxG.loadSound(EmbeddedSound,Volume,Looped,AutoDestroy,true);
}
org.flixel.FlxG.stream = function(URL,Volume,Looped,AutoDestroy) {
	if(AutoDestroy == null) AutoDestroy = true;
	if(Looped == null) Looped = false;
	if(Volume == null) Volume = 1.0;
	return org.flixel.FlxG.loadSound(null,Volume,Looped,AutoDestroy,true,URL);
}
org.flixel.FlxG.volume = null;
org.flixel.FlxG.setVolume = function(Volume) {
	org.flixel.FlxG.volume = Volume;
	if(org.flixel.FlxG.volume < 0) org.flixel.FlxG.volume = 0; else if(org.flixel.FlxG.volume > 1) org.flixel.FlxG.volume = 1;
	if(org.flixel.FlxG.volumeHandler != null) {
		var param = org.flixel.FlxG.mute?0:org.flixel.FlxG.volume;
		org.flixel.FlxG.volumeHandler(param);
	}
	return Volume;
}
org.flixel.FlxG.destroySounds = function(ForceDestroy) {
	if(ForceDestroy == null) ForceDestroy = false;
	if(org.flixel.FlxG.music != null && (ForceDestroy || !org.flixel.FlxG.music.survive)) {
		org.flixel.FlxG.music.destroy();
		org.flixel.FlxG.music = null;
	}
	var i = 0;
	var sound;
	var l = org.flixel.FlxG.sounds.members.length;
	while(i < l) {
		sound = org.flixel.FlxG.sounds.members[i++];
		if(sound != null && (ForceDestroy || !sound.survive)) sound.destroy();
	}
}
org.flixel.FlxG.updateSounds = function() {
	if(org.flixel.FlxG.music != null && org.flixel.FlxG.music.active) org.flixel.FlxG.music.update();
	if(org.flixel.FlxG.sounds != null && org.flixel.FlxG.sounds.active) org.flixel.FlxG.sounds.update();
}
org.flixel.FlxG.pauseSounds = function() {
	if(org.flixel.FlxG.music != null && org.flixel.FlxG.music.exists && org.flixel.FlxG.music.active) org.flixel.FlxG.music.pause();
	var i = 0;
	var sound;
	var l = org.flixel.FlxG.sounds.length;
	while(i < l) {
		sound = org.flixel.FlxG.sounds.members[i++];
		if(sound != null && sound.exists && sound.active) sound.pause();
	}
}
org.flixel.FlxG.resumeSounds = function() {
	if(org.flixel.FlxG.music != null && org.flixel.FlxG.music.exists) org.flixel.FlxG.music.play();
	var i = 0;
	var sound;
	var l = org.flixel.FlxG.sounds.length;
	while(i < l) {
		sound = org.flixel.FlxG.sounds.members[i++];
		if(sound != null && sound.exists) sound.resume();
	}
}
org.flixel.FlxG.checkBitmapCache = function(Key) {
	return org.flixel.FlxG._cache.exists(Key) && org.flixel.FlxG._cache.get(Key) != null;
}
org.flixel.FlxG.createBitmap = function(Width,Height,Color,Unique,Key) {
	if(Unique == null) Unique = false;
	var key = Key;
	if(key == null) {
		key = Width + "x" + Height + ":" + Color;
		if(Unique && org.flixel.FlxG.checkBitmapCache(key)) key = org.flixel.FlxG.getUniqueBitmapKey(key);
	}
	if(!org.flixel.FlxG.checkBitmapCache(key)) org.flixel.FlxG._cache.set(key,new browser.display.BitmapData(Width,Height,true,Color));
	org.flixel.FlxG._lastBitmapDataKey = key;
	return org.flixel.FlxG._cache.get(key);
}
org.flixel.FlxG.addBitmap = function(Graphic,Reverse,Unique,Key,FrameWidth,FrameHeight) {
	if(FrameHeight == null) FrameHeight = 0;
	if(FrameWidth == null) FrameWidth = 0;
	if(Unique == null) Unique = false;
	if(Reverse == null) Reverse = false;
	if(Graphic == null) return null;
	var isClass = true;
	var isBitmap = true;
	if(js.Boot.__instanceof(Graphic,Class)) {
		isClass = true;
		isBitmap = false;
	} else if(js.Boot.__instanceof(Graphic,browser.display.BitmapData)) {
		isClass = false;
		isBitmap = true;
	} else if(js.Boot.__instanceof(Graphic,String)) {
		isClass = false;
		isBitmap = false;
	} else return null;
	var additionalKey = "";
	if(FrameWidth != 0 || FrameHeight != 0) additionalKey = "FrameSize:" + FrameWidth + "_" + FrameHeight;
	var key = Key;
	if(key == null) {
		if(isClass) key = Type.getClassName(js.Boot.__cast(Graphic , Class)); else if(isBitmap) {
			if(!Unique) {
				key = org.flixel.FlxG.getCacheKeyFor(Graphic);
				if(key == null) key = org.flixel.FlxG.getUniqueBitmapKey();
			}
		} else key = Graphic;
		key += Reverse?"_REVERSE_":"";
		key += additionalKey;
		if(Unique) key = org.flixel.FlxG.getUniqueBitmapKey(key == null?"pixels":key);
	}
	var tempBitmap;
	if(!org.flixel.FlxG.checkBitmapCache(key)) {
		var bd = null;
		if(isClass) bd = Type.createInstance(js.Boot.__cast(Graphic , Class),[]).bitmapData; else if(isBitmap) bd = Graphic; else bd = org.flixel.FlxAssets.getBitmapData(Graphic);
		if(additionalKey != "") {
			var numHorizontalFrames = FrameWidth == 0?1:(bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0) / FrameWidth | 0;
			var numVerticalFrames = FrameHeight == 0?1:(bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0) / FrameHeight | 0;
			FrameWidth = FrameWidth == 0?bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0:FrameWidth;
			FrameHeight = FrameHeight == 0?bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0:FrameHeight;
			var tempBitmap1 = new browser.display.BitmapData((bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0) + numHorizontalFrames,(bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0) + numVerticalFrames,true,0);
			var tempRect = new browser.geom.Rectangle(0,0,FrameWidth,FrameHeight);
			var tempPoint = new browser.geom.Point();
			var _g1 = 0, _g = numHorizontalFrames;
			while(_g1 < _g) {
				var i = _g1++;
				tempPoint.x = i * (FrameWidth + 1);
				tempRect.x = i * FrameWidth;
				var _g3 = 0, _g2 = numVerticalFrames;
				while(_g3 < _g2) {
					var j = _g3++;
					tempPoint.y = j * (FrameHeight + 1);
					tempRect.y = j * FrameHeight;
					tempBitmap1.copyPixels(bd,tempRect,tempPoint);
				}
			}
			bd = tempBitmap1;
		} else if(Unique) bd = bd.clone();
		org.flixel.FlxG._cache.set(key,bd);
	}
	org.flixel.FlxG._lastBitmapDataKey = key;
	return org.flixel.FlxG._cache.get(key);
}
org.flixel.FlxG.getCacheKeyFor = function(bmd) {
	var $it0 = org.flixel.FlxG._cache.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var data = org.flixel.FlxG._cache.get(key);
		if(data == bmd) return key;
	}
	return null;
}
org.flixel.FlxG.getUniqueBitmapKey = function(baseKey) {
	if(baseKey == null) baseKey = "pixels";
	if(org.flixel.FlxG.checkBitmapCache(baseKey)) {
		var inc = 0;
		var ukey;
		do ukey = baseKey + inc++; while(org.flixel.FlxG.checkBitmapCache(ukey));
		baseKey = ukey;
	}
	return baseKey;
}
org.flixel.FlxG.fromAssetsCache = function(bmd) {
	var cachedBitmapData = nme.installer.Assets.cachedBitmapData;
	if(cachedBitmapData != null) {
		var $it0 = cachedBitmapData.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			var cacheBmd = cachedBitmapData.get(key);
			if(cacheBmd == bmd) return true;
		}
	}
	return false;
}
org.flixel.FlxG.removeBitmap = function(Graphic) {
	if(org.flixel.FlxG._cache.exists(Graphic)) {
		var bmd = org.flixel.FlxG._cache.get(Graphic);
		org.flixel.FlxG._cache.remove(Graphic);
		if(org.flixel.FlxG.fromAssetsCache(bmd) == false) {
			bmd.dispose();
			bmd = null;
		}
	}
}
org.flixel.FlxG.clearBitmapCache = function() {
	var bmd;
	if(org.flixel.FlxG._cache != null) {
		var $it0 = org.flixel.FlxG._cache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			bmd = org.flixel.FlxG._cache.get(key);
			org.flixel.FlxG._cache.remove(key);
			if(bmd != null && org.flixel.FlxG.fromAssetsCache(bmd) == false) {
				bmd.dispose();
				bmd = null;
			}
		}
	}
	org.flixel.FlxG._cache = new Hash();
}
org.flixel.FlxG.clearAssetsCache = function() {
	var $it0 = nme.installer.Assets.cachedBitmapData.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var bmd = nme.installer.Assets.cachedBitmapData.get(key);
		bmd.dispose();
		nme.installer.Assets.cachedBitmapData.remove(key);
	}
}
org.flixel.FlxG.stage = null;
org.flixel.FlxG.get_stage = function() {
	if(org.flixel.FlxG._game.get_stage() != null) return org.flixel.FlxG._game.get_stage();
	return null;
}
org.flixel.FlxG.state = null;
org.flixel.FlxG.get_state = function() {
	return org.flixel.FlxG._game._state;
}
org.flixel.FlxG.switchState = function(State) {
	org.flixel.FlxG._game._requestedState = State;
}
org.flixel.FlxG.setDebuggerLayout = function(Layout) {
	org.flixel.FlxG._game._debugger.setLayout(Layout);
}
org.flixel.FlxG.resetDebuggerLayout = function() {
	org.flixel.FlxG._game._debugger.resetLayout();
}
org.flixel.FlxG.addCamera = function(NewCamera) {
	org.flixel.FlxG._game.addChildAt(NewCamera._flashSprite,org.flixel.FlxG._game.getChildIndex(org.flixel.FlxG._game._inputContainer));
	org.flixel.FlxG.cameras.push(NewCamera);
	NewCamera.ID = org.flixel.FlxG.cameras.length - 1;
	return NewCamera;
}
org.flixel.FlxG.removeCamera = function(Camera,Destroy) {
	if(Destroy == null) Destroy = true;
	if(Camera != null && org.flixel.FlxG._game.contains(Camera._flashSprite)) {
		org.flixel.FlxG._game.removeChild(Camera._flashSprite);
		var index = org.flixel.FlxU.ArrayIndexOf(org.flixel.FlxG.cameras,Camera,null);
		if(index >= 0) org.flixel.FlxG.cameras.splice(index,1);
	} else if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("Error removing camera, not part of game.",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("Error removing camera, not part of game." , Array)):Std.string("Error removing camera, not part of game."));
	var _g1 = 0, _g = org.flixel.FlxG.cameras.length;
	while(_g1 < _g) {
		var i = _g1++;
		org.flixel.FlxG.cameras[i].ID = i;
	}
	if(Destroy) Camera.destroy();
}
org.flixel.FlxG.resetCameras = function(NewCamera) {
	var cam;
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) {
		cam = org.flixel.FlxG.cameras[i++];
		org.flixel.FlxG._game.removeChild(cam._flashSprite);
		cam.destroy();
	}
	org.flixel.FlxG.cameras.splice(0,org.flixel.FlxG.cameras.length);
	if(NewCamera == null) NewCamera = new org.flixel.FlxCamera(0,0,org.flixel.FlxG.width,org.flixel.FlxG.height);
	org.flixel.FlxG.camera = org.flixel.FlxG.addCamera(NewCamera);
	NewCamera.ID = 0;
}
org.flixel.FlxG.flash = function(Color,Duration,OnComplete,Force) {
	if(Force == null) Force = false;
	if(Duration == null) Duration = 1;
	if(Color == null) Color = -1;
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) org.flixel.FlxG.cameras[i++].flash(Color,Duration,OnComplete,Force);
}
org.flixel.FlxG.fade = function(Color,Duration,FadeIn,OnComplete,Force) {
	if(Force == null) Force = false;
	if(FadeIn == null) FadeIn = false;
	if(Duration == null) Duration = 1;
	if(Color == null) Color = -16777216;
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) org.flixel.FlxG.cameras[i++].fade(Color,Duration,FadeIn,OnComplete,Force);
}
org.flixel.FlxG.shake = function(Intensity,Duration,OnComplete,Force,Direction) {
	if(Direction == null) Direction = 0;
	if(Force == null) Force = true;
	if(Duration == null) Duration = 0.5;
	if(Intensity == null) Intensity = 0.05;
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) org.flixel.FlxG.cameras[i++].shake(Intensity,Duration,OnComplete,Force,Direction);
}
org.flixel.FlxG.get_bgColor = function() {
	if(org.flixel.FlxG.camera == null) return -16777216; else return org.flixel.FlxG.camera.bgColor;
}
org.flixel.FlxG.set_bgColor = function(Color) {
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) org.flixel.FlxG.cameras[i++].bgColor = Color;
	return Color;
}
org.flixel.FlxG.overlap = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
	if(ObjectOrGroup1 == null) ObjectOrGroup1 = org.flixel.FlxG.get_state();
	if(ObjectOrGroup2 == ObjectOrGroup1) ObjectOrGroup2 = null;
	org.flixel.system.FlxQuadTree.divisions = org.flixel.FlxG.worldDivisions;
	var quadTree = org.flixel.system.FlxQuadTree.recycle(org.flixel.FlxG.worldBounds.x,org.flixel.FlxG.worldBounds.y,org.flixel.FlxG.worldBounds.width,org.flixel.FlxG.worldBounds.height);
	quadTree.load(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback);
	var result = quadTree.execute();
	quadTree.destroy();
	return result;
}
org.flixel.FlxG.collide = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback) {
	return org.flixel.FlxG.overlap(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,org.flixel.FlxObject.separate);
}
org.flixel.FlxG.addPlugin = function(Plugin) {
	var pluginList = org.flixel.FlxG.plugins;
	var l = pluginList.length;
	var _g = 0;
	while(_g < l) {
		var i = _g++;
		if(pluginList[i].toString() == Plugin.toString()) return Plugin;
	}
	pluginList.push(Plugin);
	return Plugin;
}
org.flixel.FlxG.getPlugin = function(ClassType) {
	var pluginList = org.flixel.FlxG.plugins;
	var i = 0;
	var l = pluginList.length;
	while(i < l) {
		if(js.Boot.__instanceof(pluginList[i],ClassType)) return org.flixel.FlxG.plugins[i];
		i++;
	}
	return null;
}
org.flixel.FlxG.removePlugin = function(Plugin) {
	var pluginList = org.flixel.FlxG.plugins;
	var i = pluginList.length - 1;
	while(i >= 0) {
		if(pluginList[i] == Plugin) {
			pluginList.splice(i,1);
			return Plugin;
		}
		i--;
	}
	return Plugin;
}
org.flixel.FlxG.removePluginType = function(ClassType) {
	var results = false;
	var pluginList = org.flixel.FlxG.plugins;
	var i = pluginList.length - 1;
	while(i >= 0) {
		if(js.Boot.__instanceof(pluginList[i],ClassType)) {
			pluginList.splice(i,1);
			results = true;
		}
		i--;
	}
	return results;
}
org.flixel.FlxG.init = function(Game,Width,Height,Zoom) {
	org.flixel.FlxG.clearBitmapCache();
	org.flixel.FlxG._game = Game;
	org.flixel.FlxG.width = Math.abs(Width) | 0;
	org.flixel.FlxG.height = Math.abs(Height) | 0;
	org.flixel.FlxG.mute = false;
	org.flixel.FlxG.setVolume(0.5);
	org.flixel.FlxG.sounds = new org.flixel.FlxTypedGroup();
	org.flixel.FlxG.volumeHandler = null;
	if(org.flixel.FlxG.flashGfxSprite == null) {
		org.flixel.FlxG.flashGfxSprite = new browser.display.Sprite();
		org.flixel.FlxG.flashGfx = org.flixel.FlxG.flashGfxSprite.get_graphics();
	}
	org.flixel.FlxCamera.defaultZoom = Zoom;
	org.flixel.FlxG._cameraRect = new browser.geom.Rectangle();
	org.flixel.FlxG.cameras = new Array();
	org.flixel.FlxG.useBufferLocking = false;
	org.flixel.FlxG.plugins = new Array();
	org.flixel.FlxG.addPlugin(new org.flixel.plugin.DebugPathDisplay());
	org.flixel.FlxG.addPlugin(new org.flixel.plugin.TimerManager());
	org.flixel.FlxG.mobile = true;
	org.flixel.FlxG.levels = new Array();
	org.flixel.FlxG.scores = new Array();
	org.flixel.FlxG.visualDebug = false;
}
org.flixel.FlxG.reset = function() {
	org.flixel.plugin.pxText.PxBitmapFont.clearStorage();
	org.flixel.system.layer.Atlas.clearAtlasCache();
	org.flixel.system.layer.TileSheetData.clear();
	org.flixel.FlxG.clearBitmapCache();
	org.flixel.FlxG.resetInput();
	org.flixel.FlxG.destroySounds(true);
	org.flixel.FlxG.levels = [];
	org.flixel.FlxG.scores = [];
	org.flixel.FlxG.level = 0;
	org.flixel.FlxG.score = 0;
	org.flixel.FlxG.paused = false;
	org.flixel.FlxG.timeScale = 1.0;
	org.flixel.FlxG.elapsed = 0;
	org.flixel.FlxG.globalSeed = Math.random();
	org.flixel.FlxG.worldBounds = new org.flixel.FlxRect(-10,-10,org.flixel.FlxG.width + 20,org.flixel.FlxG.height + 20);
	org.flixel.FlxG.worldDivisions = 6;
	var debugPathDisplay = js.Boot.__cast(org.flixel.FlxG.getPlugin(org.flixel.plugin.DebugPathDisplay) , org.flixel.plugin.DebugPathDisplay);
	if(debugPathDisplay != null) debugPathDisplay.clear();
}
org.flixel.FlxG.updateInputs = function() {
	org.flixel.system.input.FlxInputs.updateInputs();
}
org.flixel.FlxG.lockCameras = function() {
	var cam;
	var cams = org.flixel.FlxG.cameras;
	var i = 0;
	var l = cams.length;
	while(i < l) {
		cam = cams[i++];
		if(cam == null || !cam.exists || !cam.visible) continue;
		cam.clearDrawStack();
		cam._canvas.get_graphics().clear();
		cam._effectsLayer.get_graphics().clear();
		cam.fill(cam.bgColor & 16777215,true,(cam.bgColor >> 24 & 255) / 255);
	}
}
org.flixel.FlxG.renderCameras = function() {
	var cam;
	var cams = org.flixel.FlxG.cameras;
	var i = 0;
	var l = cams.length;
	while(i < l) {
		cam = cams[i++];
		if(cam == null || !cam.exists || !cam.visible) continue;
		cam.render();
	}
}
org.flixel.FlxG.unlockCameras = function() {
	var cam;
	var cams = org.flixel.FlxG.cameras;
	var i = 0;
	var l = cams.length;
	while(i < l) {
		cam = cams[i++];
		if(cam == null || !cam.exists || !cam.visible) continue;
		cam.drawFX();
	}
}
org.flixel.FlxG.updateCameras = function() {
	var cam;
	var cams = org.flixel.FlxG.cameras;
	var i = 0;
	var l = cams.length;
	while(i < l) {
		cam = cams[i++];
		if(cam != null && cam.exists) {
			if(cam.active) cam.update();
			if(cam.target == null) {
				cam._flashSprite.set_x(cam.x + cam._flashOffsetX);
				cam._flashSprite.set_y(cam.y + cam._flashOffsetY);
			}
			cam._flashSprite.set_visible(cam.visible);
		}
	}
}
org.flixel.FlxG.updatePlugins = function() {
	var plugin;
	var pluginList = org.flixel.FlxG.plugins;
	var i = 0;
	var l = pluginList.length;
	while(i < l) {
		plugin = pluginList[i++];
		if(plugin.exists && plugin.active) plugin.update();
	}
}
org.flixel.FlxG.drawPlugins = function() {
	var plugin;
	var pluginList = org.flixel.FlxG.plugins;
	var i = 0;
	var l = pluginList.length;
	while(i < l) {
		plugin = pluginList[i++];
		if(plugin.exists && plugin.visible) plugin.draw();
	}
}
org.flixel.FlxG.tween = function(object,values,duration,options) {
	var type = 8, complete = null, ease = null, tweener = org.flixel.FlxG.tweener;
	if(js.Boot.__instanceof(object,org.flixel.FlxBasic)) tweener = js.Boot.__cast(object , org.flixel.FlxBasic);
	if(options != null) {
		if(Reflect.hasField(options,"type")) type = options.type;
		if(Reflect.hasField(options,"complete")) complete = options.complete;
		if(Reflect.hasField(options,"ease")) ease = options.ease;
		if(Reflect.hasField(options,"tweener")) tweener = options.tweener;
	}
	var tween = new org.flixel.tweens.misc.MultiVarTween(complete,type);
	tween.tween(object,values,duration,ease);
	tweener.addTween(tween);
	return tween;
}
org.flixel.FlxG.prototype = {
	__class__: org.flixel.FlxG
}
org.flixel.FlxPath = function(Nodes) {
	if(Nodes == null) this.nodes = new Array(); else this.nodes = Nodes;
	this._point = new org.flixel.FlxPoint();
	this.debugScrollFactor = new org.flixel.FlxPoint(1.0,1.0);
	this.debugColor = 16777215;
	this.ignoreDrawDebug = false;
	var debugPathDisplay = org.flixel.FlxPath.get_manager();
	if(debugPathDisplay != null) debugPathDisplay.add(this);
};
$hxClasses["org.flixel.FlxPath"] = org.flixel.FlxPath;
org.flixel.FlxPath.__name__ = ["org","flixel","FlxPath"];
org.flixel.FlxPath.__properties__ = {get_manager:"get_manager"}
org.flixel.FlxPath.manager = null;
org.flixel.FlxPath.get_manager = function() {
	return js.Boot.__cast(org.flixel.FlxG.getPlugin(org.flixel.plugin.DebugPathDisplay) , org.flixel.plugin.DebugPathDisplay);
}
org.flixel.FlxPath.prototype = {
	drawDebug: function(Camera) {
		if(this.nodes.length <= 0) return;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var gfx = Camera._effectsLayer.get_graphics();
		var node;
		var nextNode;
		var i = 0;
		var l = this.nodes.length;
		while(i < l) {
			node = this.nodes[i];
			this._point.x = node.x - Camera.scroll.x * this.debugScrollFactor.x;
			this._point.y = node.y - Camera.scroll.y * this.debugScrollFactor.y;
			var nodeSize = 2;
			if(i == 0 || i == l - 1) nodeSize *= 2;
			var nodeColor = this.debugColor;
			if(l > 1) {
				if(i == 0) nodeColor = -16715227; else if(i == l - 1) nodeColor = -65518;
			}
			gfx.beginFill(nodeColor,0.5);
			gfx.lineStyle();
			gfx.drawRect(this._point.x - nodeSize * 0.5,this._point.y - nodeSize * 0.5,nodeSize,nodeSize);
			gfx.endFill();
			var linealpha = 0.3;
			if(i < l - 1) nextNode = this.nodes[i + 1]; else {
				nextNode = this.nodes[0];
				linealpha = 0.15;
			}
			gfx.moveTo(this._point.x,this._point.y);
			gfx.lineStyle(1,this.debugColor,linealpha);
			this._point.x = nextNode.x - Camera.scroll.x * this.debugScrollFactor.x;
			this._point.y = nextNode.y - Camera.scroll.y * this.debugScrollFactor.y;
			gfx.lineTo(this._point.x,this._point.y);
			i++;
		}
	}
	,tail: function() {
		if(this.nodes.length > 0) return this.nodes[this.nodes.length - 1];
		return null;
	}
	,head: function() {
		if(this.nodes.length > 0) return this.nodes[0];
		return null;
	}
	,removeAt: function(Index) {
		if(this.nodes.length <= 0) return null;
		if(Index >= this.nodes.length) Index = this.nodes.length - 1;
		return this.nodes.splice(Index,1)[0];
	}
	,remove: function(Node) {
		var index = org.flixel.FlxU.ArrayIndexOf(this.nodes,Node,null);
		if(index >= 0) return this.nodes.splice(index,1)[0]; else return null;
	}
	,addPointAt: function(Node,Index,AsReference) {
		if(AsReference == null) AsReference = false;
		if(Index < 0) return;
		if(Index > this.nodes.length) Index = this.nodes.length;
		if(AsReference) this.nodes.splice(Index,0,Node); else this.nodes.splice(Index,0,new org.flixel.FlxPoint(Node.x,Node.y));
	}
	,addPoint: function(Node,AsReference) {
		if(AsReference == null) AsReference = false;
		if(AsReference) this.nodes.push(Node); else this.nodes.push(new org.flixel.FlxPoint(Node.x,Node.y));
	}
	,addAt: function(X,Y,Index) {
		if(Index < 0) return;
		if(Index > this.nodes.length) Index = this.nodes.length;
		this.nodes.splice(Index,0,new org.flixel.FlxPoint(X,Y));
	}
	,add: function(X,Y) {
		this.nodes.push(new org.flixel.FlxPoint(X,Y));
	}
	,destroy: function() {
		var debugPathDisplay = org.flixel.FlxPath.get_manager();
		if(debugPathDisplay != null) debugPathDisplay.remove(this);
		this.debugScrollFactor = null;
		this._point = null;
		this.nodes = null;
	}
	,_point: null
	,ignoreDrawDebug: null
	,debugScrollFactor: null
	,debugColor: null
	,nodes: null
	,__class__: org.flixel.FlxPath
}
org.flixel.FlxSave = function() {
	this.destroy();
};
$hxClasses["org.flixel.FlxSave"] = org.flixel.FlxSave;
org.flixel.FlxSave.__name__ = ["org","flixel","FlxSave"];
org.flixel.FlxSave.prototype = {
	checkBinding: function() {
		if(this._sharedObject == null) {
			if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("FLIXEL: You must call FlxSave.bind()\nbefore you can read or write data.",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("FLIXEL: You must call FlxSave.bind()\nbefore you can read or write data." , Array)):Std.string("FLIXEL: You must call FlxSave.bind()\nbefore you can read or write data."));
			return false;
		}
		return true;
	}
	,onDone: function(Result) {
		switch(Result) {
		case org.flixel.FlxSave.PENDING:
			if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("FLIXEL: FlxSave is requesting extra storage space.",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("FLIXEL: FlxSave is requesting extra storage space." , Array)):Std.string("FLIXEL: FlxSave is requesting extra storage space."));
			break;
		case org.flixel.FlxSave.ERROR:
			if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("ERROR: There was a problem flushing\nthe shared object data from FlxSave.",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("ERROR: There was a problem flushing\nthe shared object data from FlxSave." , Array)):Std.string("ERROR: There was a problem flushing\nthe shared object data from FlxSave."));
			break;
		}
		if(this._onComplete != null) this._onComplete(Result == org.flixel.FlxSave.SUCCESS);
		if(this._closeRequested) this.destroy();
		return Result == org.flixel.FlxSave.SUCCESS;
	}
	,erase: function() {
		if(!this.checkBinding()) return false;
		this._sharedObject.clear();
		return true;
	}
	,flush: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		if(!this.checkBinding()) return false;
		this._onComplete = OnComplete;
		var result;
		try {
			result = this._sharedObject.flush();
		} catch( e ) {
			if( js.Boot.__instanceof(e,browser.errors.Error) ) {
				return this.onDone(org.flixel.FlxSave.ERROR);
			} else throw(e);
		}
		if(result == browser.net.SharedObjectFlushStatus.PENDING) {
		}
		return this.onDone(result == browser.net.SharedObjectFlushStatus.FLUSHED?org.flixel.FlxSave.SUCCESS:org.flixel.FlxSave.PENDING);
	}
	,close: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		this._closeRequested = true;
		return this.flush(MinFileSize,OnComplete);
	}
	,bind: function(Name) {
		this.destroy();
		this.name = Name;
		try {
			this._sharedObject = browser.net.SharedObject.getLocal(this.name);
		} catch( e ) {
			if( js.Boot.__instanceof(e,browser.errors.Error) ) {
				if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("ERROR: There was a problem binding to\nthe shared object data from FlxSave.",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("ERROR: There was a problem binding to\nthe shared object data from FlxSave." , Array)):Std.string("ERROR: There was a problem binding to\nthe shared object data from FlxSave."));
				this.destroy();
				return false;
			} else throw(e);
		}
		this.data = this._sharedObject.data;
		return true;
	}
	,destroy: function() {
		this._sharedObject = null;
		this.name = null;
		this.data = null;
		this._onComplete = null;
		this._closeRequested = false;
	}
	,_closeRequested: null
	,_onComplete: null
	,_sharedObject: null
	,name: null
	,data: null
	,__class__: org.flixel.FlxSave
}
org.flixel.FlxSound = function() {
	this._volumeAdjust = 1.0;
	org.flixel.FlxBasic.call(this);
	this.reset();
};
$hxClasses["org.flixel.FlxSound"] = org.flixel.FlxSound;
org.flixel.FlxSound.__name__ = ["org","flixel","FlxSound"];
org.flixel.FlxSound.__super__ = org.flixel.FlxBasic;
org.flixel.FlxSound.prototype = $extend(org.flixel.FlxBasic.prototype,{
	gotID3: function(event) {
		if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.getDebugger() != null) org.flixel.FlxG._game.getDebugger().log.add(js.Boot.__instanceof("got ID3 info!",Array)?org.flixel.FlxU.formatArray(js.Boot.__cast("got ID3 info!" , Array)):Std.string("got ID3 info!"));
		this.name = this._sound.id3.songName;
		this.artist = this._sound.id3.artist;
		this._sound.removeEventListener(browser.events.Event.ID3,$bind(this,this.gotID3));
	}
	,cleanup: function(destroySound,resetPosition,resetFading) {
		if(resetFading == null) resetFading = true;
		if(resetPosition == null) resetPosition = true;
		if(destroySound) {
			this.reset();
			return;
		}
		if(this._channel != null) {
			this._channel.removeEventListener(browser.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		this.active = false;
		if(resetPosition) {
			this._position = 0;
			this._paused = false;
		}
		if(resetFading) {
			if(this._fade != null) this._fade.destroy();
			this._fade = null;
			this._onFadeComplete = null;
		}
	}
	,stopped: function(event) {
		if(this._looped) {
			this.cleanup(false);
			this.play();
		} else this.cleanup(this.autoDestroy);
	}
	,startSound: function(Position) {
		var numLoops = this._looped && Position == 0?9999:0;
		this._position = Position;
		this._paused = false;
		this._channel = this._sound.play(this._position,numLoops,this._transform);
		if(this._channel != null) {
			this._channel.addEventListener(browser.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this.active = true;
		} else {
			this.exists = false;
			this.active = false;
		}
	}
	,updateTransform: function() {
		this._transform.volume = (org.flixel.FlxG.mute?0:1) * org.flixel.FlxG.volume * this._volume * this._volumeAdjust;
		if(this._channel != null) this._channel.set_soundTransform(this._transform);
	}
	,getActualVolume: function() {
		return this._volume * this._volumeAdjust;
	}
	,set_volume: function(Volume) {
		this._volume = Volume;
		if(this._volume < 0) this._volume = 0; else if(this._volume > 1) this._volume = 1;
		this.updateTransform();
		return Volume;
	}
	,get_volume: function() {
		return this._volume;
	}
	,volume: null
	,get_playing: function() {
		return this._channel != null;
	}
	,playing: null
	,fadeIn: function(Seconds) {
		if(this.get_playing() && this._fade == null) return;
		var fadeStartVolume = this._fade != null?this._fade.get_value():0;
		this._fade = new org.flixel.FadeTween(fadeStartVolume,1,Seconds);
		this._onFadeComplete = null;
		this.play();
	}
	,fadeOut: function(Seconds,PauseInstead) {
		if(PauseInstead == null) PauseInstead = false;
		if(!this.get_playing()) return;
		var fadeStartVolume = this._fade != null?this._fade.get_value():1;
		this._fade = new org.flixel.FadeTween(fadeStartVolume,0,Seconds);
		this._onFadeComplete = PauseInstead?$bind(this,this.pause):$bind(this,this.stop);
	}
	,stop: function() {
		this.cleanup(this.autoDestroy,true,true);
	}
	,pause: function() {
		if(!this.get_playing()) return;
		this._position = this._channel.position;
		this._paused = true;
		this.cleanup(false,false,false);
	}
	,resume: function() {
		if(this._paused) this.startSound(this._position);
	}
	,play: function(ForceRestart) {
		if(ForceRestart == null) ForceRestart = false;
		if(!this.exists) return;
		if(ForceRestart) this.cleanup(false,true,true); else if(this.get_playing()) return;
		if(this._paused) this.resume(); else this.startSound(0);
	}
	,proximity: function(X,Y,TargetObject,Radius,Pan) {
		if(Pan == null) Pan = true;
		this.x = X;
		this.y = Y;
		this._target = TargetObject;
		this._radius = Radius;
		this._pan = Pan;
		return this;
	}
	,loadStream: function(SoundURL,Looped,AutoDestroy) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		this._sound = new browser.media.Sound();
		this._sound.addEventListener(browser.events.Event.ID3,$bind(this,this.gotID3));
		this._sound.load(new browser.net.URLRequest(SoundURL));
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.exists = true;
		return this;
	}
	,loadEmbedded: function(EmbeddedSound,Looped,AutoDestroy) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		if(js.Boot.__instanceof(EmbeddedSound,browser.media.Sound)) this._sound = EmbeddedSound; else if(js.Boot.__instanceof(EmbeddedSound,Class)) this._sound = Type.createInstance(EmbeddedSound,[]); else if(js.Boot.__instanceof(EmbeddedSound,String)) this._sound = nme.installer.Assets.getSound(EmbeddedSound);
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.exists = true;
		return this;
	}
	,kill: function() {
		org.flixel.FlxBasic.prototype.kill.call(this);
		this.cleanup(false);
	}
	,update: function() {
		if(!this.get_playing()) return;
		this._position = this._channel.position;
		var radialMultiplier = 1.0;
		var fadeMultiplier = 1.0;
		if(this._target != null) {
			radialMultiplier = org.flixel.FlxU.getDistance(new org.flixel.FlxPoint(this._target.x,this._target.y),new org.flixel.FlxPoint(this.x,this.y)) / this._radius;
			if(radialMultiplier < 0) radialMultiplier = 0;
			if(radialMultiplier > 1) radialMultiplier = 1;
			radialMultiplier = 1 - radialMultiplier;
			if(this._pan) {
				var d = (this.x - this._target.x) / this._radius;
				if(d < -1) d = -1; else if(d > 1) d = 1;
				this._transform.pan = d;
			}
		}
		if(this._fade != null) {
			var _g = this._fade;
			_g.set_progress(_g.get_progress() + org.flixel.FlxG.elapsed);
			fadeMultiplier = this._fade.get_value();
			if(this._fade.get_finished()) {
				this._fade = null;
				if(this._onFadeComplete != null) this._onFadeComplete();
			}
		}
		this._volumeAdjust = radialMultiplier * fadeMultiplier;
		this.updateTransform();
		if(this._transform.volume > 0) {
			this.amplitudeLeft = this._channel.leftPeak / this._transform.volume;
			this.amplitudeRight = this._channel.rightPeak / this._transform.volume;
			this.amplitude = (this.amplitudeLeft + this.amplitudeRight) * 0.5;
		} else {
			this.amplitudeLeft = 0;
			this.amplitudeRight = 0;
			this.amplitude = 0;
		}
	}
	,destroy: function() {
		this._transform = null;
		this.exists = false;
		this.active = false;
		this._target = null;
		this.name = null;
		this.artist = null;
		if(this._channel != null) {
			this._channel.removeEventListener(browser.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		if(this._sound != null) {
			this._sound.removeEventListener(browser.events.Event.ID3,$bind(this,this.gotID3));
			this._sound = null;
		}
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,reset: function() {
		this.destroy();
		this.x = 0;
		this.y = 0;
		this._position = 0;
		this._paused = false;
		this._volume = 1.0;
		this._volumeAdjust = 1.0;
		this._looped = false;
		this._target = null;
		this._radius = 0;
		this._pan = false;
		if(this._fade != null) this._fade.destroy();
		this._fade = null;
		this._onFadeComplete = null;
		this.visible = false;
		this.amplitude = 0;
		this.amplitudeLeft = 0;
		this.amplitudeRight = 0;
		this.autoDestroy = false;
		if(this._transform == null) this._transform = new browser.media.SoundTransform();
		this._transform.pan = 0;
	}
	,_onFadeComplete: null
	,_fade: null
	,_pan: null
	,_radius: null
	,_target: null
	,_looped: null
	,_volumeAdjust: null
	,_volume: null
	,_position: null
	,_paused: null
	,_transform: null
	,_channel: null
	,_sound: null
	,autoDestroy: null
	,amplitudeRight: null
	,amplitudeLeft: null
	,amplitude: null
	,artist: null
	,name: null
	,survive: null
	,y: null
	,x: null
	,__class__: org.flixel.FlxSound
	,__properties__: $extend(org.flixel.FlxBasic.prototype.__properties__,{get_playing:"get_playing",set_volume:"set_volume",get_volume:"get_volume"})
});
org.flixel.FadeTween = function(StartValue,EndValue,Duration,Ease) {
	this.easingFunction = Ease != null?Ease:org.flixel.FadeTween.linear;
	this.startValue = StartValue;
	this.totalChange = EndValue - StartValue;
	this.duration = Duration;
	this._progress = 0;
};
$hxClasses["org.flixel.FadeTween"] = org.flixel.FadeTween;
org.flixel.FadeTween.__name__ = ["org","flixel","FadeTween"];
org.flixel.FadeTween.linear = function(t,b,c,d) {
	return b + c * t / d;
}
org.flixel.FadeTween.prototype = {
	get_value: function() {
		return this.easingFunction(this._progress,this.startValue,this.totalChange,this.duration);
	}
	,value: null
	,get_finished: function() {
		return this._progress >= this.duration;
	}
	,finished: null
	,set_progress: function(value) {
		if(value >= this.duration) value = this.duration; else if(value < 0) value = 0;
		this._progress = value;
		return this._progress;
	}
	,get_progress: function() {
		return this._progress;
	}
	,progress: null
	,_progress: null
	,duration: null
	,totalChange: null
	,startValue: null
	,easingFunction: null
	,destroy: function() {
		this.easingFunction = null;
	}
	,__class__: org.flixel.FadeTween
	,__properties__: {set_progress:"set_progress",get_progress:"get_progress",get_finished:"get_finished",get_value:"get_value"}
}
org.flixel.FlxSubState = function() {
	org.flixel.FlxState.call(this);
	this._bgColor = 0;
	this.closeCallback = null;
	this._bgSprite = new org.flixel.system.BGSprite();
};
$hxClasses["org.flixel.FlxSubState"] = org.flixel.FlxSubState;
org.flixel.FlxSubState.__name__ = ["org","flixel","FlxSubState"];
org.flixel.FlxSubState.__super__ = org.flixel.FlxState;
org.flixel.FlxSubState.prototype = $extend(org.flixel.FlxState.prototype,{
	destroy: function() {
		org.flixel.FlxState.prototype.destroy.call(this);
		this._parentState = null;
		this.closeCallback = null;
	}
	,close: function() {
		if(this._parentState != null) this._parentState.subStateCloseHandler(); else {
		}
	}
	,draw: function() {
		this._bgSprite.draw();
		org.flixel.FlxState.prototype.draw.call(this);
	}
	,set_bgColor: function(value) {
		this._bgColor = value;
		this._bgSprite.get_pixels().setPixel32(0,0,this._bgColor);
		return value;
	}
	,get_bgColor: function() {
		return this._bgColor;
	}
	,_bgSprite: null
	,closeCallback: null
	,_parentState: null
	,__class__: org.flixel.FlxSubState
});
org.flixel.FlxText = function(X,Y,Width,Text,size,EmbeddedFont,IsStatic) {
	if(IsStatic == null) IsStatic = false;
	if(EmbeddedFont == null) EmbeddedFont = true;
	if(size == null) size = 8;
	org.flixel.FlxSprite.call(this,X,Y);
	this._isStatic = false;
	var key = org.flixel.FlxG.getUniqueBitmapKey("text");
	this.makeGraphic(Width,1,0,false,key);
	if(Text == null) Text = "";
	this._textField = new browser.text.TextField();
	this._textField.set_width(Width);
	this._textField.selectable = false;
	this._textField.multiline = true;
	this._textField.set_wordWrap(true);
	this._format = new browser.text.TextFormat(nme.installer.Assets.getFont(org.flixel.FlxAssets.defaultFont).fontName,size,16777215);
	this._formatAdjusted = new browser.text.TextFormat();
	this._textField.set_defaultTextFormat(this._format);
	this._textField.set_text(Text);
	this._textField.embedFonts = EmbeddedFont;
	if(Text.length <= 0) this._textField.set_height(1); else this._textField.set_height(10);
	this._regen = true;
	this._shadow = 0;
	this._useShadow = false;
	this.allowCollisions = 0;
	this.moves = false;
	if(Text != "") this.calcFrame(true);
	this._isStatic = IsStatic;
};
$hxClasses["org.flixel.FlxText"] = org.flixel.FlxText;
org.flixel.FlxText.__name__ = ["org","flixel","FlxText"];
org.flixel.FlxText.__super__ = org.flixel.FlxSprite;
org.flixel.FlxText.prototype = $extend(org.flixel.FlxSprite.prototype,{
	updateFrameData: function() {
		if(this._node != null && this.frameWidth >= 1 && this.frameHeight >= 1) {
			this._framesData = this._node.addSpriteFramesData(this.width | 0,this.height | 0);
			this._frameID = this._framesData.frameIDs[0];
		}
	}
	,updateAtlasInfo: function(updateAtlas) {
		if(updateAtlas == null) updateAtlas = false;
		this._atlas = org.flixel.FlxG.get_state().getAtlasFor(this._bitmapDataKey);
		var cachedBmd = org.flixel.FlxG._cache.get(this._bitmapDataKey);
		if(cachedBmd != this._pixels) {
			cachedBmd.dispose();
			org.flixel.FlxG._cache.set(this._bitmapDataKey,this._pixels);
			this._atlas.clearAndFillWith(this._pixels);
		}
		this._node = this._atlas.getNodeByKey(this._bitmapDataKey);
		this.updateFrameData();
	}
	,set_atlas: function(value) {
		if(!this._isStatic) return value;
		return org.flixel.FlxSprite.prototype.set_atlas.call(this,value);
	}
	,convertTextAlignmentFromString: function(strAlign) {
		if(strAlign == "right") return browser.text.TextFormatAlign.RIGHT; else if(strAlign == "center") return browser.text.TextFormatAlign.CENTER; else if(strAlign == "justify") return browser.text.TextFormatAlign.JUSTIFY; else return browser.text.TextFormatAlign.LEFT;
	}
	,dtfCopy: function() {
		var defaultTextFormat = this._textField.get_defaultTextFormat();
		return new browser.text.TextFormat(defaultTextFormat.font,defaultTextFormat.size,defaultTextFormat.color,defaultTextFormat.bold,defaultTextFormat.italic,defaultTextFormat.underline,defaultTextFormat.url,defaultTextFormat.target,defaultTextFormat.align);
	}
	,setClipping: function(width,height) {
	}
	,addFilter: function(filter,updateSize,permanent) {
		if(permanent == null) permanent = false;
		org.flixel.FlxSprite.prototype.addFilter.call(this,filter,null,false);
	}
	,calcFrame: function(AreYouSure) {
		if(AreYouSure == null) AreYouSure = false;
		if(AreYouSure) {
			this._regen = true;
			if(this._regen) {
				this.height = this._textField.get_textHeight();
				this.height += 4;
				this._pixels = new browser.display.BitmapData(this.width | 0,this.height | 0,true,0);
				this.frameHeight = this.height | 0;
				this._textField.set_height(this.height * 1.2);
				this._flashRect.x = 0;
				this._flashRect.y = 0;
				this._flashRect.width = this.width;
				this._flashRect.height = this.height;
				this._regen = false;
			} else this._pixels.fillRect(this._flashRect,0);
			if(this._textField != null && this._textField.get_text() != null && this._textField.get_text().length > 0) {
				this._formatAdjusted.font = this._format.font;
				this._formatAdjusted.size = this._format.size;
				this._formatAdjusted.color = this._format.color;
				this._formatAdjusted.align = this._format.align;
				this._matrix.identity();
				if(this._format.align == browser.text.TextFormatAlign.CENTER) {
					this._formatAdjusted.align = browser.text.TextFormatAlign.LEFT;
					this._textField.setTextFormat(this._formatAdjusted);
					this._matrix.translate(Math.floor((this.width - this._textField.get_textWidth()) / 2),0);
				}
				if(this._useShadow) {
					this._formatAdjusted.color = this._shadow;
					this._textField.setTextFormat(this._formatAdjusted);
					this._matrix.translate(1,1);
					this._pixels.draw(this._textField,this._matrix,this._colorTransform);
					this._matrix.translate(-1,-1);
					this._formatAdjusted.color = this._format.color;
					this._textField.setTextFormat(this._formatAdjusted);
				}
				this._pixels.draw(this._textField,this._matrix,this._colorTransform);
				this._textField.setTextFormat(this._format);
			}
			this.updateAtlasInfo();
			this.origin.make(this.frameWidth * 0.5,this.frameHeight * 0.5);
			this._halfWidth = this.origin.x;
			this._halfHeight = this.origin.y;
		}
		this.dirty = false;
		if(this.filters != null) {
			var _g = 0, _g1 = this.filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				this.framePixels.applyFilter(this.framePixels,this._flashRect,this._flashPointZero,filter);
			}
		}
	}
	,set_isStatic: function(value) {
		if(this._isStatic) return value;
		return this._isStatic = value;
	}
	,get_isStatic: function() {
		return this._isStatic;
	}
	,isStatic: null
	,set_useShadow: function(value) {
		if(this._isStatic) return value;
		if(value != this._useShadow) {
			this._useShadow = value;
			this.calcFrame(true);
		}
		return this._useShadow;
	}
	,get_useShadow: function() {
		return this._useShadow;
	}
	,set_shadow: function(Color) {
		if(this._isStatic) return Color;
		this._shadow = Color;
		this.calcFrame(true);
		return Color;
	}
	,get_shadow: function() {
		return this._shadow;
	}
	,set_alignment: function(Alignment) {
		if(this._isStatic) return Alignment;
		this._format.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format);
		this.calcFrame(true);
		return Alignment;
	}
	,get_alignment: function() {
		return js.Boot.__cast(this._format.align , String);
	}
	,alignment: null
	,set_font: function(Font) {
		if(this._isStatic) return Font;
		this._format.font = nme.installer.Assets.getFont(Font).fontName;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format);
		this._regen = true;
		this.calcFrame(true);
		return Font;
	}
	,get_font: function() {
		return this._format.font;
	}
	,font: null
	,set_color: function(Color) {
		if(this._isStatic) return Color;
		this._format.color = Color;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format);
		this._regen = true;
		this.calcFrame(true);
		return Color;
	}
	,get_color: function() {
		return this._format.color;
	}
	,set_size: function(Size) {
		if(this._isStatic) return Size;
		this._format.size = Size;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format);
		this._regen = true;
		this.calcFrame(true);
		return Size;
	}
	,get_size: function() {
		return this._format.size;
	}
	,size: null
	,set_text: function(Text) {
		if(this._isStatic) return Text;
		var ot = this._textField.get_text();
		this._textField.set_text(Text);
		if(this._textField.get_text() != ot) {
			this._regen = true;
			this.calcFrame(true);
		}
		return this._textField.get_text();
	}
	,get_text: function() {
		return this._textField.get_text();
	}
	,text: null
	,setFormat: function(Font,Size,Color,Alignment,ShadowColor,UseShadow) {
		if(UseShadow == null) UseShadow = false;
		if(ShadowColor == null) ShadowColor = 0;
		if(Color == null) Color = 16777215;
		if(Size == null) Size = 8;
		if(this._isStatic) return this;
		if(Font == null) Font = org.flixel.FlxAssets.defaultFont;
		this._format.font = nme.installer.Assets.getFont(Font).fontName;
		this._format.size = Size;
		this._format.color = Color;
		this._format.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format);
		this._shadow = ShadowColor;
		this._useShadow = UseShadow;
		this._regen = true;
		this.calcFrame(true);
		return this;
	}
	,destroy: function() {
		this._textField = null;
		this._format = null;
		this._formatAdjusted = null;
		org.flixel.FlxSprite.prototype.destroy.call(this);
	}
	,_isStatic: null
	,_useShadow: null
	,_shadow: null
	,_regen: null
	,_formatAdjusted: null
	,_format: null
	,_textField: null
	,useShadow: null
	,shadow: null
	,__class__: org.flixel.FlxText
	,__properties__: $extend(org.flixel.FlxSprite.prototype.__properties__,{set_shadow:"set_shadow",get_shadow:"get_shadow",set_useShadow:"set_useShadow",get_useShadow:"get_useShadow",set_text:"set_text",get_text:"get_text",set_size:"set_size",get_size:"get_size",set_font:"set_font",get_font:"get_font",set_alignment:"set_alignment",get_alignment:"get_alignment",set_isStatic:"set_isStatic",get_isStatic:"get_isStatic"})
});
org.flixel.FlxTimer = function() {
	this.time = 0;
	this.loops = 0;
	this._callback = null;
	this._timeCounter = 0;
	this._loopsCounter = 0;
	this.paused = false;
	this.finished = false;
};
$hxClasses["org.flixel.FlxTimer"] = org.flixel.FlxTimer;
org.flixel.FlxTimer.__name__ = ["org","flixel","FlxTimer"];
org.flixel.FlxTimer.__properties__ = {get_manager:"get_manager"}
org.flixel.FlxTimer.manager = null;
org.flixel.FlxTimer.get_manager = function() {
	return js.Boot.__cast(org.flixel.FlxG.getPlugin(org.flixel.plugin.TimerManager) , org.flixel.plugin.TimerManager);
}
org.flixel.FlxTimer.prototype = {
	get_progress: function() {
		if(this.time > 0) return this._timeCounter / this.time; else return 0;
	}
	,progress: null
	,get_loopsLeft: function() {
		return this.loops - this._loopsCounter;
	}
	,loopsLeft: null
	,get_timeLeft: function() {
		return this.time - this._timeCounter;
	}
	,timeLeft: null
	,stop: function() {
		this.finished = true;
		var timerManager = org.flixel.FlxTimer.get_manager();
		if(timerManager != null) timerManager.remove(this);
	}
	,start: function(Time,Loops,Callback) {
		if(Loops == null) Loops = 1;
		if(Time == null) Time = 1;
		var timerManager = org.flixel.FlxTimer.get_manager();
		if(timerManager != null) timerManager.add(this);
		if(this.paused) {
			this.paused = false;
			return this;
		}
		this.paused = false;
		this.finished = false;
		this.time = Time;
		if(Loops < 1) Loops = 1;
		this.loops = Loops;
		this._callback = Callback;
		this._timeCounter = 0;
		this._loopsCounter = 0;
		return this;
	}
	,update: function() {
		this._timeCounter += org.flixel.FlxG.elapsed;
		while(this._timeCounter >= this.time && !this.paused && !this.finished) {
			this._timeCounter -= this.time;
			this._loopsCounter++;
			if(this.loops > 0 && this._loopsCounter >= this.loops) this.stop();
			if(this._callback != null) this._callback(this);
		}
	}
	,destroy: function() {
		this.stop();
		this._callback = null;
	}
	,_loopsCounter: null
	,_timeCounter: null
	,_callback: null
	,finished: null
	,paused: null
	,loops: null
	,time: null
	,__class__: org.flixel.FlxTimer
	,__properties__: {get_timeLeft:"get_timeLeft",get_loopsLeft:"get_loopsLeft",get_progress:"get_progress"}
}
org.flixel.FlxU = function() {
};
$hxClasses["org.flixel.FlxU"] = org.flixel.FlxU;
org.flixel.FlxU.__name__ = ["org","flixel","FlxU"];
org.flixel.FlxU.openURL = function(URL) {
	nme.Lib.getURL(new browser.net.URLRequest(URL),"_blank");
}
org.flixel.FlxU.abs = function(Value) {
	return Value > 0?Value:-Value;
}
org.flixel.FlxU.floor = function(Value) {
	var number = Value | 0;
	return Value > 0?number:number != Value?number - 1:number;
}
org.flixel.FlxU.ceil = function(Value) {
	var number = Value | 0;
	return Value > 0?number != Value?number + 1:number:number;
}
org.flixel.FlxU.round = function(Value) {
	return Value + (Value > 0?0.5:-0.5) | 0;
}
org.flixel.FlxU.roundDecimal = function(Value,Precision) {
	var num = Value * Math.pow(10,Precision);
	return Math.round(num) / Math.pow(10,Precision);
}
org.flixel.FlxU.min = function(Number1,Number2) {
	return Number1 <= Number2?Number1:Number2;
}
org.flixel.FlxU.max = function(Number1,Number2) {
	return Number1 >= Number2?Number1:Number2;
}
org.flixel.FlxU.bound = function(Value,Min,Max) {
	var lowerBound = Value < Min?Min:Value;
	return lowerBound > Max?Max:lowerBound;
}
org.flixel.FlxU.srand = function(Seed) {
	return 69621 * (Seed * 2147483647 | 0) % 2147483647 / 2147483647;
}
org.flixel.FlxU.shuffle = function(Objects,HowManyTimes) {
	var i = 0;
	var index1;
	var index2;
	var object;
	while(i < HowManyTimes) {
		index1 = Math.random() * Objects.length | 0;
		index2 = Math.random() * Objects.length | 0;
		object = Objects[index2];
		Objects[index2] = Objects[index1];
		Objects[index1] = object;
		i++;
	}
	return Objects;
}
org.flixel.FlxU.getRandom = function(Objects,StartIndex,Length) {
	if(Length == null) Length = 0;
	if(StartIndex == null) StartIndex = 0;
	var res = null;
	if(Objects != null) {
		if(StartIndex < 0) StartIndex = 0;
		if(Length < 0) Length = 0;
		var l = Length;
		if(l == 0 || l > Objects.length - StartIndex) l = Objects.length - StartIndex;
		if(l > 0) res = Objects[StartIndex + (Math.random() * l | 0)];
	}
	return res;
}
org.flixel.FlxU.getTicks = function() {
	return org.flixel.FlxGame._mark;
}
org.flixel.FlxU.formatTicks = function(StartTicks,EndTicks) {
	return Math.abs(EndTicks - StartTicks) / 1000 + "s";
}
org.flixel.FlxU.makeColor = function(Red,Green,Blue,Alpha) {
	if(Alpha == null) Alpha = 1.0;
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (Red & 255) << 16 | (Green & 255) << 8 | Blue & 255;
}
org.flixel.FlxU.makeColorFromHSB = function(Hue,Saturation,Brightness,Alpha) {
	if(Alpha == null) Alpha = 1.0;
	var red;
	var green;
	var blue;
	if(Saturation == 0.0) {
		red = Brightness;
		green = Brightness;
		blue = Brightness;
	} else {
		if(Hue == 360) Hue = 0;
		var slice = Hue / 60 | 0;
		var hf = Hue / 60 - slice;
		var aa = Brightness * (1 - Saturation);
		var bb = Brightness * (1 - Saturation * hf);
		var cc = Brightness * (1 - Saturation * (1.0 - hf));
		switch(slice) {
		case 0:
			red = Brightness;
			green = cc;
			blue = aa;
			break;
		case 1:
			red = bb;
			green = Brightness;
			blue = aa;
			break;
		case 2:
			red = aa;
			green = Brightness;
			blue = cc;
			break;
		case 3:
			red = aa;
			green = bb;
			blue = Brightness;
			break;
		case 4:
			red = cc;
			green = aa;
			blue = Brightness;
			break;
		case 5:
			red = Brightness;
			green = aa;
			blue = bb;
			break;
		default:
			red = 0;
			green = 0;
			blue = 0;
		}
	}
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (red * 255 | 0) << 16 | (green * 255 | 0) << 8 | (blue * 255 | 0);
}
org.flixel.FlxU.getRGBA = function(Color,Results) {
	if(Results == null) Results = new Array();
	Results[0] = Color >> 16 & 255;
	Results[1] = Color >> 8 & 255;
	Results[2] = Color & 255;
	Results[3] = (Color >> 24 & 255) / 255;
	return Results;
}
org.flixel.FlxU.getHSB = function(Color,Results) {
	if(Results == null) Results = new Array();
	var red = (Color >> 16 & 255) / 255;
	var green = (Color >> 8 & 255) / 255;
	var blue = (Color & 255) / 255;
	var m = red > green?red:green;
	var dmax = m > blue?m:blue;
	m = red > green?green:red;
	var dmin = m > blue?blue:m;
	var range = dmax - dmin;
	Results[2] = dmax;
	Results[1] = 0;
	Results[0] = 0;
	if(dmax != 0) Results[1] = range / dmax;
	if(Results[1] != 0) {
		if(red == dmax) Results[0] = (green - blue) / range; else if(green == dmax) Results[0] = 2 + (blue - red) / range; else if(blue == dmax) Results[0] = 4 + (red - green) / range;
		Results[0] *= 60;
		if(Results[0] < 0) Results[0] += 360;
	}
	Results[3] = (Color >> 24 & 255) / 255;
	return Results;
}
org.flixel.FlxU.formatTime = function(Seconds,ShowMS) {
	if(ShowMS == null) ShowMS = false;
	var timeString = (Seconds / 60 | 0) + ":";
	var timeStringHelper = (Seconds | 0) % 60;
	if(timeStringHelper < 10) timeString += "0";
	timeString += timeStringHelper;
	if(ShowMS) {
		timeString += ".";
		timeStringHelper = (Seconds - (Seconds | 0)) * 100;
		if(timeStringHelper < 10) timeString += "0";
		timeString += timeStringHelper;
	}
	return timeString;
}
org.flixel.FlxU.formatArray = function(AnyArray) {
	var string = "";
	if(AnyArray != null && AnyArray.length > 0) {
		string = Std.string(AnyArray[0]);
		var i = 1;
		var l = AnyArray.length;
		while(i < l) string += ", " + Std.string(AnyArray[i++]);
	}
	return string;
}
org.flixel.FlxU.formatMoney = function(Amount,ShowDecimal,EnglishStyle) {
	if(EnglishStyle == null) EnglishStyle = true;
	if(ShowDecimal == null) ShowDecimal = true;
	var helper;
	var amount = Math.floor(Amount);
	var string = "";
	var comma = "";
	var zeroes = "";
	while(amount > 0) {
		if(string.length > 0 && comma.length <= 0) {
			if(EnglishStyle) comma = ","; else comma = ".";
		}
		zeroes = "";
		helper = amount - Math.floor(amount / 1000) * 1000;
		amount = Math.floor(amount / 1000);
		if(amount > 0) {
			if(helper < 100) zeroes += "0";
			if(helper < 10) zeroes += "0";
		}
		string = zeroes + helper + comma + string;
	}
	if(ShowDecimal) {
		amount = (Amount * 100 | 0) - (Amount | 0) * 100;
		string += (EnglishStyle?".":",") + amount;
		if(amount < 10) string += "0";
	}
	return string;
}
org.flixel.FlxU.computeVelocity = function(Velocity,Acceleration,Drag,Max) {
	if(Acceleration != 0) Velocity += Acceleration * org.flixel.FlxG.elapsed; else if(Drag != 0) {
		var drag = Drag * org.flixel.FlxG.elapsed;
		if(Velocity - drag > 0) Velocity = Velocity - drag; else if(Velocity + drag < 0) Velocity += drag; else Velocity = 0;
	}
	if(Velocity != 0 && Max != 0) {
		if(Velocity > Max) Velocity = Max; else if(Velocity < -Max) Velocity = -Max;
	}
	return Velocity;
}
org.flixel.FlxU.rotatePoint = function(X,Y,PivotX,PivotY,Angle,point) {
	var sin = 0;
	var cos = 0;
	var radians = Angle * -0.017453293;
	while(radians < -3.14159265) radians += 6.28318531;
	while(radians > 3.14159265) radians = radians - 6.28318531;
	if(radians < 0) {
		sin = 1.27323954 * radians + .405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	} else {
		sin = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	}
	radians += 1.57079632;
	if(radians > 3.14159265) radians = radians - 6.28318531;
	if(radians < 0) {
		cos = 1.27323954 * radians + 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	} else {
		cos = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	}
	var dx = X - PivotX;
	var dy = Y - PivotY;
	if(point == null) point = new org.flixel.FlxPoint();
	point.x = PivotX + cos * dx - sin * dy;
	point.y = PivotY - sin * dx - cos * dy;
	return point;
}
org.flixel.FlxU.getAngle = function(Point1,Point2) {
	var x = Point2.x - Point1.x;
	var y = Point2.y - Point1.y;
	var angle = 0;
	if(x != 0 || y != 0) {
		var c1 = 0.7853981625;
		var c2 = 3 * c1;
		var ay = y < 0?-y:y;
		if(x >= 0) angle = c1 - c1 * ((x - ay) / (x + ay)); else angle = c2 - c1 * ((x + ay) / (ay - x));
		angle = (y < 0?-angle:angle) * 57.2957796;
		if(angle > 90) angle = angle - 270; else angle += 90;
	}
	return angle;
}
org.flixel.FlxU.degreesToRadians = function(degrees) {
	return degrees * (Math.PI / 180);
}
org.flixel.FlxU.getDistance = function(Point1,Point2) {
	var dx = Point1.x - Point2.x;
	var dy = Point1.y - Point2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
org.flixel.FlxU.ArrayIndexOf = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var len = array.length;
	var index = -1;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
org.flixel.FlxU.SetArrayLength = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff > 0) {
	} else if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
}
org.flixel.FlxU.prototype = {
	__class__: org.flixel.FlxU
}
org.flixel.plugin = {}
org.flixel.plugin.DebugPathDisplay = function() {
	org.flixel.FlxBasic.call(this);
	this._paths = new Array();
	this.active = false;
};
$hxClasses["org.flixel.plugin.DebugPathDisplay"] = org.flixel.plugin.DebugPathDisplay;
org.flixel.plugin.DebugPathDisplay.__name__ = ["org","flixel","plugin","DebugPathDisplay"];
org.flixel.plugin.DebugPathDisplay.__super__ = org.flixel.FlxBasic;
org.flixel.plugin.DebugPathDisplay.prototype = $extend(org.flixel.FlxBasic.prototype,{
	clear: function() {
		if(this._paths != null) {
			var i = this._paths.length - 1;
			var path;
			while(i >= 0) {
				path = this._paths[i--];
				if(path != null) path.destroy();
			}
		}
		this._paths = [];
	}
	,remove: function(Path) {
		var index = org.flixel.FlxU.ArrayIndexOf(this._paths,Path,null);
		if(index >= 0) this._paths.splice(index,1);
	}
	,add: function(Path) {
		this._paths.push(Path);
	}
	,drawDebug: function(Camera) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var i = this._paths.length - 1;
		var path;
		while(i >= 0) {
			path = this._paths[i--];
			if(path != null && !path.ignoreDrawDebug) path.drawDebug(Camera);
		}
	}
	,draw: function() {
		if(!org.flixel.FlxG.visualDebug || this.ignoreDrawDebug) return;
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) this.drawDebug(this.cameras[i++]);
	}
	,destroy: function() {
		this.clear();
		this._paths = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,_paths: null
	,__class__: org.flixel.plugin.DebugPathDisplay
});
org.flixel.plugin.TimerManager = function() {
	org.flixel.FlxBasic.call(this);
	this._timers = new Array();
	this.visible = false;
};
$hxClasses["org.flixel.plugin.TimerManager"] = org.flixel.plugin.TimerManager;
org.flixel.plugin.TimerManager.__name__ = ["org","flixel","plugin","TimerManager"];
org.flixel.plugin.TimerManager.__super__ = org.flixel.FlxBasic;
org.flixel.plugin.TimerManager.prototype = $extend(org.flixel.FlxBasic.prototype,{
	clear: function() {
		if(this._timers != null) {
			var i = this._timers.length - 1;
			var timer;
			while(i >= 0) {
				timer = this._timers[i--];
				if(timer != null) timer.destroy();
			}
		}
		this._timers = [];
	}
	,remove: function(Timer) {
		var index = org.flixel.FlxU.ArrayIndexOf(this._timers,Timer,null);
		if(index >= 0) {
			this._timers[index] = this._timers[this._timers.length - 1];
			this._timers.pop();
		}
	}
	,add: function(Timer) {
		this._timers.push(Timer);
	}
	,update: function() {
		var i = this._timers.length - 1;
		var timer;
		while(i >= 0) {
			timer = this._timers[i--];
			if(timer != null && !timer.paused && !timer.finished && timer.time > 0) timer.update();
		}
	}
	,destroy: function() {
		this.clear();
		this._timers = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,_timers: null
	,__class__: org.flixel.plugin.TimerManager
});
org.flixel.plugin.pxText = {}
org.flixel.plugin.pxText.PxBitmapFont = function() {
	this._maxHeight = 0;
	this._point = new browser.geom.Point();
	this._bgTileID = -1;
	this._glyphs = new IntHash();
	this._num_letters = 0;
	this._atlasGlyphs = new Hash();
	this._bgTiles = new Hash();
};
$hxClasses["org.flixel.plugin.pxText.PxBitmapFont"] = org.flixel.plugin.pxText.PxBitmapFont;
org.flixel.plugin.pxText.PxBitmapFont.__name__ = ["org","flixel","plugin","pxText","PxBitmapFont"];
org.flixel.plugin.pxText.PxBitmapFont.store = function(pHandle,pFont) {
	org.flixel.plugin.pxText.PxBitmapFont._storedFonts.set(pHandle,pFont);
}
org.flixel.plugin.pxText.PxBitmapFont.fetch = function(pHandle) {
	var f = org.flixel.plugin.pxText.PxBitmapFont._storedFonts.get(pHandle);
	return f;
}
org.flixel.plugin.pxText.PxBitmapFont.clearStorage = function() {
	var $it0 = org.flixel.plugin.pxText.PxBitmapFont._storedFonts.iterator();
	while( $it0.hasNext() ) {
		var font = $it0.next();
		font.dispose();
	}
	org.flixel.plugin.pxText.PxBitmapFont._storedFonts = new Hash();
}
org.flixel.plugin.pxText.PxBitmapFont.prototype = {
	get_numLetters: function() {
		return this._num_letters;
	}
	,get_bitmapDataKey: function() {
		return this._bitmapDataKey;
	}
	,bitmapDataKey: null
	,get_pixels: function() {
		return this._pixels;
	}
	,pixels: null
	,bgTileID: function(AtlasName) {
		return this._bgTiles.get(AtlasName);
	}
	,numLetters: null
	,getFontHeight: function() {
		return this._maxHeight;
	}
	,getTextWidth: function(pText,pLetterSpacing,pFontScale) {
		if(pFontScale == null) pFontScale = 1.0;
		if(pLetterSpacing == null) pLetterSpacing = 0;
		var w = 0;
		var textLength = pText.length;
		var _g1 = 0, _g = textLength;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(pText,i);
			if(this._glyphs.exists(charCode)) w += this._glyphs.get(charCode).xadvance;
		}
		w = Math.round(w * pFontScale);
		if(textLength > 1) w += (textLength - 1) * pLetterSpacing;
		return w;
	}
	,render: function(atlasName,drawData,pText,pColor,pSecondColor,pAlpha,pOffsetX,pOffsetY,pLetterSpacing,pScale,pUseColor) {
		if(pUseColor == null) pUseColor = true;
		var colorMultiplier = 1 / 255;
		var red = colorMultiplier;
		var green = colorMultiplier;
		var blue = colorMultiplier;
		if(pUseColor) {
			red = (pColor >> 16) * colorMultiplier;
			green = (pColor >> 8 & 255) * colorMultiplier;
			blue = (pColor & 255) * colorMultiplier;
		}
		pSecondColor &= 16777215;
		red *= pSecondColor >> 16;
		green *= pSecondColor >> 8 & 255;
		blue *= pSecondColor & 255;
		this._point.x = pOffsetX;
		this._point.y = pOffsetY;
		var glyph;
		var glyphWidth;
		this._glyphs = this._atlasGlyphs.get(atlasName);
		if(this._glyphs == null) return;
		var _g1 = 0, _g = pText.length;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(pText,i);
			glyph = this._glyphs.get(charCode);
			if(this._glyphs.exists(charCode)) {
				glyphWidth = glyph.xadvance;
				drawData.push(glyph.tileID);
				drawData.push(this._point.x + glyph.xoffset * pScale);
				drawData.push(this._point.y + glyph.yoffset * pScale);
				drawData.push(red);
				drawData.push(green);
				drawData.push(blue);
				this._point.x += glyphWidth * pScale + pLetterSpacing;
			}
		}
	}
	,setGlyph: function(node,pCharID,pRect,pOffsetX,pOffsetY,pAdvanceX) {
		if(pAdvanceX == null) pAdvanceX = 0;
		if(pOffsetY == null) pOffsetY = 0;
		if(pOffsetX == null) pOffsetX = 0;
		var tileID = node.addTileRect(pRect,org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
		var symbol = new org.flixel.plugin.pxText.PxFontSymbol();
		symbol.tileID = tileID;
		symbol.xoffset = pOffsetX;
		symbol.yoffset = pOffsetY;
		symbol.xadvance = pAdvanceX;
		this._glyphs.set(pCharID,symbol);
		this._num_letters++;
		if(Math.floor(pRect.height) + pOffsetY > this._maxHeight) this._maxHeight = Math.floor(pRect.height) + pOffsetY;
	}
	,dispose: function(total) {
		if(total == null) total = true;
		this._symbols = null;
		this._tileRects = null;
		this._pixels = null;
		this._bitmapDataKey = null;
		this._glyphs = null;
		if(total) {
			this._atlasGlyphs = null;
			this._bgTiles = null;
		}
	}
	,prepareAngelCodeBitmapData: function(pBitmapData,pXMLData,pSymbols) {
		var chars = null;
		var $it0 = pXMLData.elements();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(node.getNodeName() == "font") {
				var $it1 = node.elements();
				while( $it1.hasNext() ) {
					var nodeChild = $it1.next();
					if(nodeChild.getNodeName() == "chars") {
						chars = nodeChild;
						break;
					}
				}
			}
		}
		var symbol;
		var maxX = 0;
		var maxY = 0;
		if(chars != null) {
			var $it2 = chars.elements();
			while( $it2.hasNext() ) {
				var node = $it2.next();
				if(node.getNodeName() == "char") {
					symbol = new org.flixel.plugin.pxText.HelperSymbol();
					symbol.x = Std.parseInt(node.get("x"));
					symbol.y = Std.parseInt(node.get("y"));
					symbol.width = Std.parseInt(node.get("width"));
					symbol.height = Std.parseInt(node.get("height"));
					symbol.xoffset = Std.parseInt(node.get("xoffset"));
					symbol.yoffset = Std.parseInt(node.get("yoffset"));
					symbol.xadvance = Std.parseInt(node.get("xadvance"));
					symbol.charCode = Std.parseInt(node.get("id"));
					pSymbols.push(symbol);
					maxX = symbol.x + symbol.width;
					maxY = symbol.y + symbol.height;
				}
			}
		}
		var newWidth = pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0;
		var newHeight = pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0;
		if((pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0) - 2 < maxX) newWidth += 2; else if((pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0) - 2 < maxY) newHeight += 2;
		var resultBitmapData = new browser.display.BitmapData(newWidth,newHeight,true,0);
		resultBitmapData.copyPixels(pBitmapData,pBitmapData.rect,org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
		resultBitmapData.setPixel32((resultBitmapData._nmeTextureBuffer != null?resultBitmapData._nmeTextureBuffer.width:0) - 1,(resultBitmapData._nmeTextureBuffer != null?resultBitmapData._nmeTextureBuffer.height:0) - 1,-1);
		return resultBitmapData;
	}
	,preparePixelizerBitmapData: function(pBitmapData,pRects) {
		var bgColor = pBitmapData.getPixel(0,0);
		var cy = 0;
		var cx;
		while(cy < (pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0)) {
			var rowHeight = 0;
			cx = 0;
			while(cx < (pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0)) {
				if((pBitmapData.getPixel(cx,cy) | 0) != bgColor) {
					var gx = cx;
					var gy = cy;
					while((pBitmapData.getPixel(gx,cy) | 0) != bgColor) gx++;
					while((pBitmapData.getPixel(cx,gy) | 0) != bgColor) gy++;
					var gw = gx - cx;
					var gh = gy - cy;
					pRects.push(new browser.geom.Rectangle(cx,cy,gw,gh));
					if(gh > rowHeight) rowHeight = gh;
					if(gh > this._maxHeight) this._maxHeight = gh;
					cx += gw;
				}
				cx++;
			}
			cy += rowHeight + 1;
		}
		var resultBitmapData = new browser.display.BitmapData((pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0) + 2,pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0,true,0);
		resultBitmapData.copyPixels(pBitmapData,pBitmapData.rect,org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
		var pixelColor;
		var bgColor32 = pBitmapData.getPixel(0,0);
		cy = 0;
		while(cy < (pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0)) {
			cx = 0;
			while(cx < (pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0)) {
				pixelColor = pBitmapData.getPixel32(cx,cy);
				if(pixelColor == bgColor32) resultBitmapData.setPixel32(cx,cy,0);
				cx++;
			}
			cy++;
		}
		resultBitmapData.setPixel32((resultBitmapData._nmeTextureBuffer != null?resultBitmapData._nmeTextureBuffer.width:0) - 1,(resultBitmapData._nmeTextureBuffer != null?resultBitmapData._nmeTextureBuffer.height:0) - 1,-1);
		return resultBitmapData;
	}
	,reset: function() {
		this.dispose(false);
		this._maxHeight = 0;
		this._glyphs = new IntHash();
		this._bgTileID = -1;
		this._symbols = null;
		this._tileRects = null;
		this._glyphString = "";
	}
	,updateAtlasGlyphs: function(AtlasName) {
		this._atlasGlyphs.set(AtlasName,this._glyphs);
		this._bgTiles.set(AtlasName,this._bgTileID);
	}
	,updateGlyphData: function(node) {
		this._glyphs = new IntHash();
		var rect;
		if(this._symbols != null) {
			this._glyphString = "";
			var point = new browser.geom.Point();
			var bd;
			var charString;
			var _g = 0, _g1 = this._symbols;
			while(_g < _g1.length) {
				var symbol = _g1[_g];
				++_g;
				rect = new browser.geom.Rectangle();
				rect.x = symbol.x;
				rect.y = symbol.y;
				rect.width = symbol.width;
				rect.height = symbol.height;
				point.x = symbol.xoffset;
				point.y = symbol.yoffset;
				charString = String.fromCharCode(symbol.charCode);
				this._glyphString += charString;
				var xadvance = symbol.xadvance;
				var charWidth = xadvance;
				if(rect.width > xadvance) {
					charWidth = symbol.width;
					point.x = 0;
				}
				if(charString != " " && charString != "") this.setGlyph(node,symbol.charCode,rect,Math.floor(point.x),Math.floor(point.y),charWidth); else this.setGlyph(node,symbol.charCode,rect,Math.floor(point.x),1,charWidth);
			}
			this._bgTileID = node.addTileRect(new browser.geom.Rectangle(this._pixels.get_width() - 1,this._pixels.get_height() - 1,1,1),org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
			this.updateAtlasGlyphs(node.atlas.name);
		} else if(this._tileRects != null) {
			var _g1 = 0, _g = this._tileRects.length;
			while(_g1 < _g) {
				var letterID = _g1++;
				rect = this._tileRects[letterID];
				this.setGlyph(node,HxOverrides.cca(this._glyphString,letterID),rect,0,0,rect.width | 0);
			}
			this._bgTileID = node.addTileRect(new browser.geom.Rectangle(this._pixels.get_width() - 1,this._pixels.get_height() - 1,1,1),org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
			this.updateAtlasGlyphs(node.atlas.name);
		}
	}
	,loadAngelCode: function(pBitmapData,pXMLData) {
		this.reset();
		if(pBitmapData != null && pXMLData != null) {
			this._symbols = new Array();
			var result = this.prepareAngelCodeBitmapData(pBitmapData,pXMLData,this._symbols);
			this._bitmapDataKey = org.flixel.FlxG.getUniqueBitmapKey("font");
			this._pixels = org.flixel.FlxG.addBitmap(result,false,false,this._bitmapDataKey);
		}
		return this;
	}
	,loadPixelizer: function(pBitmapData,pLetters) {
		this.reset();
		this._glyphString = pLetters;
		if(pBitmapData != null) {
			this._tileRects = [];
			var result = this.preparePixelizerBitmapData(pBitmapData,this._tileRects);
			this._bitmapDataKey = org.flixel.FlxG.getUniqueBitmapKey("font");
			this._pixels = org.flixel.FlxG.addBitmap(result,false,false,this._bitmapDataKey);
			var currRect;
		}
		return this;
	}
	,_bitmapDataKey: null
	,_pixels: null
	,_symbols: null
	,_tileRects: null
	,_point: null
	,_maxHeight: null
	,_glyphString: null
	,_bgTiles: null
	,_atlasGlyphs: null
	,_bgTileID: null
	,_num_letters: null
	,_glyphs: null
	,__class__: org.flixel.plugin.pxText.PxBitmapFont
	,__properties__: {get_numLetters:"get_numLetters",get_pixels:"get_pixels",get_bitmapDataKey:"get_bitmapDataKey"}
}
org.flixel.plugin.pxText.HelperSymbol = function() {
};
$hxClasses["org.flixel.plugin.pxText.HelperSymbol"] = org.flixel.plugin.pxText.HelperSymbol;
org.flixel.plugin.pxText.HelperSymbol.__name__ = ["org","flixel","plugin","pxText","HelperSymbol"];
org.flixel.plugin.pxText.HelperSymbol.prototype = {
	charCode: null
	,xadvance: null
	,yoffset: null
	,xoffset: null
	,height: null
	,width: null
	,y: null
	,x: null
	,__class__: org.flixel.plugin.pxText.HelperSymbol
}
org.flixel.plugin.pxText.PxFontSymbol = function() {
};
$hxClasses["org.flixel.plugin.pxText.PxFontSymbol"] = org.flixel.plugin.pxText.PxFontSymbol;
org.flixel.plugin.pxText.PxFontSymbol.__name__ = ["org","flixel","plugin","pxText","PxFontSymbol"];
org.flixel.plugin.pxText.PxFontSymbol.prototype = {
	tileID: null
	,xadvance: null
	,yoffset: null
	,xoffset: null
	,__class__: org.flixel.plugin.pxText.PxFontSymbol
}
org.flixel.system = {}
org.flixel.system.BGSprite = function() {
	org.flixel.FlxSprite.call(this);
	this.makeGraphic(1,1,0,true,org.flixel.FlxG.getUniqueBitmapKey("bg_graphic_"));
	this.scrollFactor.make(null,null);
};
$hxClasses["org.flixel.system.BGSprite"] = org.flixel.system.BGSprite;
org.flixel.system.BGSprite.__name__ = ["org","flixel","system","BGSprite"];
org.flixel.system.BGSprite.__super__ = org.flixel.FlxSprite;
org.flixel.system.BGSprite.prototype = $extend(org.flixel.FlxSprite.prototype,{
	draw: function() {
		if(this._atlas == null) return;
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		var drawItem;
		var currDrawData;
		var currIndex;
		var useAlpha = this.alpha < 1;
		while(i < l) {
			camera = this.cameras[i++];
			if(!camera.visible || !camera.exists) continue;
			drawItem = camera.getDrawStackItem(this._atlas,useAlpha);
			currDrawData = drawItem.drawData;
			currIndex = drawItem.position;
			this._point.x = camera.width * 0.5;
			this._point.y = camera.height * 0.5;
			var csx = camera.width;
			var ssy = 0;
			var ssx = 0;
			var csy = camera.height;
			var x1 = this.origin.x - this._halfWidth;
			var y1 = this.origin.y - this._halfHeight;
			var x2 = x1 * csx + y1 * ssy;
			var y2 = -x1 * ssx + y1 * csy;
			currDrawData[currIndex++] = this._point.x - x2;
			currDrawData[currIndex++] = this._point.y - y2;
			currDrawData[currIndex++] = this._frameID;
			currDrawData[currIndex++] = csx;
			currDrawData[currIndex++] = ssy;
			currDrawData[currIndex++] = -ssx;
			currDrawData[currIndex++] = csy;
			if(useAlpha) currDrawData[currIndex++] = this.alpha;
			drawItem.position = currIndex;
			org.flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,__class__: org.flixel.system.BGSprite
});
org.flixel.system.FlxAnim = function(Name,Frames,FrameRate,Looped) {
	if(Looped == null) Looped = true;
	if(FrameRate == null) FrameRate = 0;
	this.name = Name;
	this.delay = 0;
	if(FrameRate > 0) this.delay = 1.0 / FrameRate;
	this.frames = Frames;
	this.looped = Looped;
};
$hxClasses["org.flixel.system.FlxAnim"] = org.flixel.system.FlxAnim;
org.flixel.system.FlxAnim.__name__ = ["org","flixel","system","FlxAnim"];
org.flixel.system.FlxAnim.prototype = {
	destroy: function() {
		this.frames = null;
	}
	,looped: null
	,frames: null
	,delay: null
	,name: null
	,__class__: org.flixel.system.FlxAnim
}
org.flixel.system.FlxDebugger = function(Width,Height) {
	browser.display.Sprite.call(this);
	this.set_visible(false);
	this.hasMouse = false;
	this._screen = new browser.geom.Point(Width,Height);
	this.addChild(new browser.display.Bitmap(new browser.display.BitmapData(Width | 0,15,true,2130706432)));
	var txt = new browser.text.TextField();
	txt.set_x(2);
	txt.set_width(160);
	txt.set_height(16);
	txt.selectable = false;
	txt.multiline = false;
	txt.set_defaultTextFormat(new browser.text.TextFormat(nme.installer.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215));
	var str = org.flixel.FlxG.getLibraryName();
	if(org.flixel.FlxG.debug) str += " [debug]"; else str += " [release]";
	txt.set_text(str);
	this.addChild(txt);
	this._gutter = 8;
	var screenBounds = new browser.geom.Rectangle(this._gutter,15 + this._gutter / 2,this._screen.x - this._gutter * 2,this._screen.y - this._gutter * 1.5 - 15);
	this.log = new org.flixel.system.debug.Log("log",0,0,true,screenBounds);
	this.addChild(this.log);
	this.watch = new org.flixel.system.debug.Watch("watch",0,0,true,screenBounds);
	this.addChild(this.watch);
	this.perf = new org.flixel.system.debug.Perf("stats",0,0,false,screenBounds);
	this.addChild(this.perf);
	this.vcr = new org.flixel.system.debug.VCR();
	this.vcr.set_x((Width - this.vcr.get_width() / 2) / 2);
	this.vcr.set_y(2);
	this.addChild(this.vcr);
	this.vis = new org.flixel.system.debug.Vis();
	this.vis.set_x(Width - this.vis.get_width() - 4);
	this.vis.set_y(2);
	this.addChild(this.vis);
	this.setLayout(0);
	this.addEventListener(browser.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
	this.addEventListener(browser.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
};
$hxClasses["org.flixel.system.FlxDebugger"] = org.flixel.system.FlxDebugger;
org.flixel.system.FlxDebugger.__name__ = ["org","flixel","system","FlxDebugger"];
org.flixel.system.FlxDebugger.__super__ = browser.display.Sprite;
org.flixel.system.FlxDebugger.prototype = $extend(browser.display.Sprite.prototype,{
	resetLayout: function() {
		switch(this._layout) {
		case 1:
			this.log.resize(this._screen.x / 4,68);
			this.log.reposition(0,this._screen.y);
			this.watch.resize(this._screen.x / 4,68);
			this.watch.reposition(this._screen.x,this._screen.y);
			this.perf.reposition(this._screen.x,0);
			break;
		case 2:
			this.log.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 2);
			this.log.reposition(0,this._screen.y);
			this.watch.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 2);
			this.watch.reposition(this._screen.x,this._screen.y);
			this.perf.reposition(this._screen.x,0);
			break;
		case 3:
			this.log.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.log.reposition(0,0);
			this.watch.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.watch.reposition(this._screen.x,0);
			this.perf.reposition(this._screen.x,this._screen.y);
			break;
		case 4:
			this.log.resize(this._screen.x / 3,(this._screen.y - 15 - this._gutter * 2.5) / 2);
			this.log.reposition(0,0);
			this.watch.resize(this._screen.x / 3,(this._screen.y - 15 - this._gutter * 2.5) / 2);
			this.watch.reposition(0,this._screen.y);
			this.perf.reposition(this._screen.x,0);
			break;
		case 5:
			this.log.resize(this._screen.x / 3,(this._screen.y - 15 - this._gutter * 2.5) / 2);
			this.log.reposition(this._screen.x,0);
			this.watch.resize(this._screen.x / 3,(this._screen.y - 15 - this._gutter * 2.5) / 2);
			this.watch.reposition(this._screen.x,this._screen.y);
			this.perf.reposition(0,0);
			break;
		case 0:
			this.log.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.log.reposition(0,this._screen.y);
			this.watch.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.watch.reposition(this._screen.x,this._screen.y);
			this.perf.reposition(this._screen.x,0);
			break;
		default:
			this.log.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.log.reposition(0,this._screen.y);
			this.watch.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.watch.reposition(this._screen.x,this._screen.y);
			this.perf.reposition(this._screen.x,0);
		}
	}
	,setLayout: function(Layout) {
		this._layout = Layout;
		this.resetLayout();
	}
	,onMouseOut: function(E) {
		this.hasMouse = false;
		if(!org.flixel.FlxG.mouse.useSystemCursor && !org.flixel.FlxG._game._debugger.vcr.paused) browser.ui.Mouse.hide();
	}
	,onMouseOver: function(E) {
		this.hasMouse = true;
		browser.ui.Mouse.show();
	}
	,destroy: function() {
		this._screen = null;
		if(this.log != null) {
			this.removeChild(this.log);
			this.log.destroy();
			this.log = null;
		}
		if(this.watch != null) {
			this.removeChild(this.watch);
			this.watch.destroy();
			this.watch = null;
		}
		if(this.perf != null) {
			this.removeChild(this.perf);
			this.perf.destroy();
			this.perf = null;
		}
		if(this.vcr != null) {
			this.removeChild(this.vcr);
			this.vcr.destroy();
			this.vcr = null;
		}
		if(this.vis != null) {
			this.removeChild(this.vis);
			this.vis.destroy();
			this.vis = null;
		}
		this.removeEventListener(browser.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
		this.removeEventListener(browser.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
	}
	,_gutter: null
	,_screen: null
	,_layout: null
	,hasMouse: null
	,vis: null
	,vcr: null
	,watch: null
	,log: null
	,perf: null
	,__class__: org.flixel.system.FlxDebugger
});
org.flixel.system.FlxList = function() {
	this.object = null;
	this.next = null;
	this.exists = true;
};
$hxClasses["org.flixel.system.FlxList"] = org.flixel.system.FlxList;
org.flixel.system.FlxList.__name__ = ["org","flixel","system","FlxList"];
org.flixel.system.FlxList._cachedListsHead = null;
org.flixel.system.FlxList.recycle = function() {
	if(org.flixel.system.FlxList._cachedListsHead != null) {
		var cachedList = org.flixel.system.FlxList._cachedListsHead;
		org.flixel.system.FlxList._cachedListsHead = org.flixel.system.FlxList._cachedListsHead.next;
		org.flixel.system.FlxList._NUM_CACHED_FLX_LIST--;
		cachedList.exists = true;
		cachedList.next = null;
		return cachedList;
	} else return new org.flixel.system.FlxList();
}
org.flixel.system.FlxList.clearCache = function() {
	while(org.flixel.system.FlxList._cachedListsHead != null) {
		var node = org.flixel.system.FlxList._cachedListsHead;
		org.flixel.system.FlxList._cachedListsHead = org.flixel.system.FlxList._cachedListsHead.next;
		node.object = null;
		node.next = null;
	}
	org.flixel.system.FlxList._NUM_CACHED_FLX_LIST = 0;
}
org.flixel.system.FlxList.prototype = {
	destroy: function() {
		if(!this.exists) return;
		this.object = null;
		if(this.next != null) this.next.destroy();
		this.exists = false;
		this.next = org.flixel.system.FlxList._cachedListsHead;
		org.flixel.system.FlxList._cachedListsHead = this;
		org.flixel.system.FlxList._NUM_CACHED_FLX_LIST++;
	}
	,exists: null
	,next: null
	,object: null
	,__class__: org.flixel.system.FlxList
}
org.flixel.system.FlxQuadTree = function(X,Y,Width,Height,Parent) {
	org.flixel.FlxRect.call(this,X,Y,Width,Height);
	this.reset(X,Y,Width,Height,Parent);
};
$hxClasses["org.flixel.system.FlxQuadTree"] = org.flixel.system.FlxQuadTree;
org.flixel.system.FlxQuadTree.__name__ = ["org","flixel","system","FlxQuadTree"];
org.flixel.system.FlxQuadTree.divisions = null;
org.flixel.system.FlxQuadTree._min = null;
org.flixel.system.FlxQuadTree._object = null;
org.flixel.system.FlxQuadTree._objectLeftEdge = null;
org.flixel.system.FlxQuadTree._objectTopEdge = null;
org.flixel.system.FlxQuadTree._objectRightEdge = null;
org.flixel.system.FlxQuadTree._objectBottomEdge = null;
org.flixel.system.FlxQuadTree._list = null;
org.flixel.system.FlxQuadTree._useBothLists = null;
org.flixel.system.FlxQuadTree._processingCallback = null;
org.flixel.system.FlxQuadTree._notifyCallback = null;
org.flixel.system.FlxQuadTree._iterator = null;
org.flixel.system.FlxQuadTree._objectHullX = null;
org.flixel.system.FlxQuadTree._objectHullY = null;
org.flixel.system.FlxQuadTree._objectHullWidth = null;
org.flixel.system.FlxQuadTree._objectHullHeight = null;
org.flixel.system.FlxQuadTree._checkObjectHullX = null;
org.flixel.system.FlxQuadTree._checkObjectHullY = null;
org.flixel.system.FlxQuadTree._checkObjectHullWidth = null;
org.flixel.system.FlxQuadTree._checkObjectHullHeight = null;
org.flixel.system.FlxQuadTree._cachedTreesHead = null;
org.flixel.system.FlxQuadTree.recycle = function(X,Y,Width,Height,Parent) {
	if(org.flixel.system.FlxQuadTree._cachedTreesHead != null) {
		var cachedTree = org.flixel.system.FlxQuadTree._cachedTreesHead;
		org.flixel.system.FlxQuadTree._cachedTreesHead = org.flixel.system.FlxQuadTree._cachedTreesHead.next;
		org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES--;
		cachedTree.reset(X,Y,Width,Height,Parent);
		return cachedTree;
	} else return new org.flixel.system.FlxQuadTree(X,Y,Width,Height,Parent);
}
org.flixel.system.FlxQuadTree.clearCache = function() {
	while(org.flixel.system.FlxQuadTree._cachedTreesHead != null) {
		var node = org.flixel.system.FlxQuadTree._cachedTreesHead;
		org.flixel.system.FlxQuadTree._cachedTreesHead = org.flixel.system.FlxQuadTree._cachedTreesHead.next;
		node.next = null;
	}
	org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
}
org.flixel.system.FlxQuadTree.__super__ = org.flixel.FlxRect;
org.flixel.system.FlxQuadTree.prototype = $extend(org.flixel.FlxRect.prototype,{
	overlapNode: function() {
		var overlapProcessed = false;
		var checkObject;
		while(org.flixel.system.FlxQuadTree._iterator != null) {
			if(!org.flixel.system.FlxQuadTree._object.exists || org.flixel.system.FlxQuadTree._object.allowCollisions <= 0) break;
			checkObject = org.flixel.system.FlxQuadTree._iterator.object;
			if(org.flixel.system.FlxQuadTree._object == checkObject || !checkObject.exists || checkObject.allowCollisions <= 0) {
				org.flixel.system.FlxQuadTree._iterator = org.flixel.system.FlxQuadTree._iterator.next;
				continue;
			}
			org.flixel.system.FlxQuadTree._objectHullX = org.flixel.system.FlxQuadTree._object.x < org.flixel.system.FlxQuadTree._object.last.x?org.flixel.system.FlxQuadTree._object.x:org.flixel.system.FlxQuadTree._object.last.x;
			org.flixel.system.FlxQuadTree._objectHullY = org.flixel.system.FlxQuadTree._object.y < org.flixel.system.FlxQuadTree._object.last.y?org.flixel.system.FlxQuadTree._object.y:org.flixel.system.FlxQuadTree._object.last.y;
			org.flixel.system.FlxQuadTree._objectHullWidth = org.flixel.system.FlxQuadTree._object.x - org.flixel.system.FlxQuadTree._object.last.x;
			org.flixel.system.FlxQuadTree._objectHullWidth = org.flixel.system.FlxQuadTree._object.width + (org.flixel.system.FlxQuadTree._objectHullWidth > 0?org.flixel.system.FlxQuadTree._objectHullWidth:-org.flixel.system.FlxQuadTree._objectHullWidth);
			org.flixel.system.FlxQuadTree._objectHullHeight = org.flixel.system.FlxQuadTree._object.y - org.flixel.system.FlxQuadTree._object.last.y;
			org.flixel.system.FlxQuadTree._objectHullHeight = org.flixel.system.FlxQuadTree._object.height + (org.flixel.system.FlxQuadTree._objectHullHeight > 0?org.flixel.system.FlxQuadTree._objectHullHeight:-org.flixel.system.FlxQuadTree._objectHullHeight);
			org.flixel.system.FlxQuadTree._checkObjectHullX = checkObject.x < checkObject.last.x?checkObject.x:checkObject.last.x;
			org.flixel.system.FlxQuadTree._checkObjectHullY = checkObject.y < checkObject.last.y?checkObject.y:checkObject.last.y;
			org.flixel.system.FlxQuadTree._checkObjectHullWidth = checkObject.x - checkObject.last.x;
			org.flixel.system.FlxQuadTree._checkObjectHullWidth = checkObject.width + (org.flixel.system.FlxQuadTree._checkObjectHullWidth > 0?org.flixel.system.FlxQuadTree._checkObjectHullWidth:-org.flixel.system.FlxQuadTree._checkObjectHullWidth);
			org.flixel.system.FlxQuadTree._checkObjectHullHeight = checkObject.y - checkObject.last.y;
			org.flixel.system.FlxQuadTree._checkObjectHullHeight = checkObject.height + (org.flixel.system.FlxQuadTree._checkObjectHullHeight > 0?org.flixel.system.FlxQuadTree._checkObjectHullHeight:-org.flixel.system.FlxQuadTree._checkObjectHullHeight);
			if(org.flixel.system.FlxQuadTree._objectHullX + org.flixel.system.FlxQuadTree._objectHullWidth > org.flixel.system.FlxQuadTree._checkObjectHullX && org.flixel.system.FlxQuadTree._objectHullX < org.flixel.system.FlxQuadTree._checkObjectHullX + org.flixel.system.FlxQuadTree._checkObjectHullWidth && org.flixel.system.FlxQuadTree._objectHullY + org.flixel.system.FlxQuadTree._objectHullHeight > org.flixel.system.FlxQuadTree._checkObjectHullY && org.flixel.system.FlxQuadTree._objectHullY < org.flixel.system.FlxQuadTree._checkObjectHullY + org.flixel.system.FlxQuadTree._checkObjectHullHeight) {
				overlapProcessed = false;
				if(org.flixel.system.FlxQuadTree._processingCallback == null || org.flixel.system.FlxQuadTree._processingCallback(org.flixel.system.FlxQuadTree._object,checkObject)) overlapProcessed = true;
				if(overlapProcessed && org.flixel.system.FlxQuadTree._notifyCallback != null) org.flixel.system.FlxQuadTree._notifyCallback(org.flixel.system.FlxQuadTree._object,checkObject);
			}
			if(org.flixel.system.FlxQuadTree._iterator != null) org.flixel.system.FlxQuadTree._iterator = org.flixel.system.FlxQuadTree._iterator.next;
		}
		return overlapProcessed;
	}
	,execute: function() {
		var overlapProcessed = false;
		var iterator;
		if(this._headA.object != null) {
			iterator = this._headA;
			while(iterator != null) {
				org.flixel.system.FlxQuadTree._object = iterator.object;
				if(org.flixel.system.FlxQuadTree._useBothLists) org.flixel.system.FlxQuadTree._iterator = this._headB; else org.flixel.system.FlxQuadTree._iterator = iterator.next;
				if(org.flixel.system.FlxQuadTree._object.exists && org.flixel.system.FlxQuadTree._object.allowCollisions > 0 && org.flixel.system.FlxQuadTree._iterator != null && org.flixel.system.FlxQuadTree._iterator.object != null && org.flixel.system.FlxQuadTree._iterator.object.exists && this.overlapNode()) overlapProcessed = true;
				iterator = iterator.next;
			}
		}
		if(this._northWestTree != null && this._northWestTree.execute()) overlapProcessed = true;
		if(this._northEastTree != null && this._northEastTree.execute()) overlapProcessed = true;
		if(this._southEastTree != null && this._southEastTree.execute()) overlapProcessed = true;
		if(this._southWestTree != null && this._southWestTree.execute()) overlapProcessed = true;
		return overlapProcessed;
	}
	,addToList: function() {
		var ot;
		if(org.flixel.system.FlxQuadTree._list == 0) {
			if(this._tailA.object != null) {
				ot = this._tailA;
				this._tailA = org.flixel.system.FlxList.recycle();
				ot.next = this._tailA;
			}
			this._tailA.object = org.flixel.system.FlxQuadTree._object;
		} else {
			if(this._tailB.object != null) {
				ot = this._tailB;
				this._tailB = org.flixel.system.FlxList.recycle();
				ot.next = this._tailB;
			}
			this._tailB.object = org.flixel.system.FlxQuadTree._object;
		}
		if(!this._canSubdivide) return;
		if(this._northWestTree != null) this._northWestTree.addToList();
		if(this._northEastTree != null) this._northEastTree.addToList();
		if(this._southEastTree != null) this._southEastTree.addToList();
		if(this._southWestTree != null) this._southWestTree.addToList();
	}
	,addObject: function() {
		if(!this._canSubdivide || this._leftEdge >= org.flixel.system.FlxQuadTree._objectLeftEdge && this._rightEdge <= org.flixel.system.FlxQuadTree._objectRightEdge && this._topEdge >= org.flixel.system.FlxQuadTree._objectTopEdge && this._bottomEdge <= org.flixel.system.FlxQuadTree._objectBottomEdge) {
			this.addToList();
			return;
		}
		if(org.flixel.system.FlxQuadTree._objectLeftEdge > this._leftEdge && org.flixel.system.FlxQuadTree._objectRightEdge < this._midpointX) {
			if(org.flixel.system.FlxQuadTree._objectTopEdge > this._topEdge && org.flixel.system.FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northWestTree == null) this._northWestTree = org.flixel.system.FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northWestTree.addObject();
				return;
			}
			if(org.flixel.system.FlxQuadTree._objectTopEdge > this._midpointY && org.flixel.system.FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southWestTree == null) this._southWestTree = org.flixel.system.FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southWestTree.addObject();
				return;
			}
		}
		if(org.flixel.system.FlxQuadTree._objectLeftEdge > this._midpointX && org.flixel.system.FlxQuadTree._objectRightEdge < this._rightEdge) {
			if(org.flixel.system.FlxQuadTree._objectTopEdge > this._topEdge && org.flixel.system.FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northEastTree == null) this._northEastTree = org.flixel.system.FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northEastTree.addObject();
				return;
			}
			if(org.flixel.system.FlxQuadTree._objectTopEdge > this._midpointY && org.flixel.system.FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southEastTree == null) this._southEastTree = org.flixel.system.FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southEastTree.addObject();
				return;
			}
		}
		if(org.flixel.system.FlxQuadTree._objectRightEdge > this._leftEdge && org.flixel.system.FlxQuadTree._objectLeftEdge < this._midpointX && org.flixel.system.FlxQuadTree._objectBottomEdge > this._topEdge && org.flixel.system.FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northWestTree == null) this._northWestTree = org.flixel.system.FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northWestTree.addObject();
		}
		if(org.flixel.system.FlxQuadTree._objectRightEdge > this._midpointX && org.flixel.system.FlxQuadTree._objectLeftEdge < this._rightEdge && org.flixel.system.FlxQuadTree._objectBottomEdge > this._topEdge && org.flixel.system.FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northEastTree == null) this._northEastTree = org.flixel.system.FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northEastTree.addObject();
		}
		if(org.flixel.system.FlxQuadTree._objectRightEdge > this._midpointX && org.flixel.system.FlxQuadTree._objectLeftEdge < this._rightEdge && org.flixel.system.FlxQuadTree._objectBottomEdge > this._midpointY && org.flixel.system.FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southEastTree == null) this._southEastTree = org.flixel.system.FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southEastTree.addObject();
		}
		if(org.flixel.system.FlxQuadTree._objectRightEdge > this._leftEdge && org.flixel.system.FlxQuadTree._objectLeftEdge < this._midpointX && org.flixel.system.FlxQuadTree._objectBottomEdge > this._midpointY && org.flixel.system.FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southWestTree == null) this._southWestTree = org.flixel.system.FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southWestTree.addObject();
		}
	}
	,add: function(ObjectOrGroup,list) {
		org.flixel.system.FlxQuadTree._list = list;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var i = 0;
			var basic;
			var group = ObjectOrGroup;
			var members = group.members;
			var l = group.length;
			while(i < l) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					if(js.Boot.__instanceof(basic,org.flixel.FlxTypedGroup)) this.add(basic,list); else if(js.Boot.__instanceof(basic,org.flixel.FlxObject)) {
						org.flixel.system.FlxQuadTree._object = js.Boot.__cast(basic , org.flixel.FlxObject);
						if(org.flixel.system.FlxQuadTree._object.exists && org.flixel.system.FlxQuadTree._object.allowCollisions != 0) {
							org.flixel.system.FlxQuadTree._objectLeftEdge = org.flixel.system.FlxQuadTree._object.x;
							org.flixel.system.FlxQuadTree._objectTopEdge = org.flixel.system.FlxQuadTree._object.y;
							org.flixel.system.FlxQuadTree._objectRightEdge = org.flixel.system.FlxQuadTree._object.x + org.flixel.system.FlxQuadTree._object.width;
							org.flixel.system.FlxQuadTree._objectBottomEdge = org.flixel.system.FlxQuadTree._object.y + org.flixel.system.FlxQuadTree._object.height;
							this.addObject();
						}
					}
				}
			}
		} else {
			org.flixel.system.FlxQuadTree._object = js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject);
			if(org.flixel.system.FlxQuadTree._object.exists && org.flixel.system.FlxQuadTree._object.allowCollisions != 0) {
				org.flixel.system.FlxQuadTree._objectLeftEdge = org.flixel.system.FlxQuadTree._object.x;
				org.flixel.system.FlxQuadTree._objectTopEdge = org.flixel.system.FlxQuadTree._object.y;
				org.flixel.system.FlxQuadTree._objectRightEdge = org.flixel.system.FlxQuadTree._object.x + org.flixel.system.FlxQuadTree._object.width;
				org.flixel.system.FlxQuadTree._objectBottomEdge = org.flixel.system.FlxQuadTree._object.y + org.flixel.system.FlxQuadTree._object.height;
				this.addObject();
			}
		}
	}
	,load: function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
		this.add(ObjectOrGroup1,0);
		if(ObjectOrGroup2 != null) {
			this.add(ObjectOrGroup2,1);
			org.flixel.system.FlxQuadTree._useBothLists = true;
		} else org.flixel.system.FlxQuadTree._useBothLists = false;
		org.flixel.system.FlxQuadTree._notifyCallback = NotifyCallback;
		org.flixel.system.FlxQuadTree._processingCallback = ProcessCallback;
	}
	,destroy: function() {
		if(this._headA != null) this._headA.destroy();
		this._headA = null;
		if(this._tailA != null) this._tailA.destroy();
		this._tailA = null;
		if(this._headB != null) this._headB.destroy();
		this._headB = null;
		if(this._tailB != null) this._tailB.destroy();
		this._tailB = null;
		if(this._northWestTree != null) this._northWestTree.destroy();
		this._northWestTree = null;
		if(this._northEastTree != null) this._northEastTree.destroy();
		this._northEastTree = null;
		if(this._southEastTree != null) this._southEastTree.destroy();
		this._southEastTree = null;
		if(this._southWestTree != null) this._southWestTree.destroy();
		this._southWestTree = null;
		org.flixel.system.FlxQuadTree._object = null;
		org.flixel.system.FlxQuadTree._processingCallback = null;
		org.flixel.system.FlxQuadTree._notifyCallback = null;
		this.exists = false;
		this.next = org.flixel.system.FlxQuadTree._cachedTreesHead;
		org.flixel.system.FlxQuadTree._cachedTreesHead = this;
		org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES++;
	}
	,reset: function(X,Y,Width,Height,Parent) {
		this.exists = true;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		this;
		this._headA = this._tailA = org.flixel.system.FlxList.recycle();
		this._headB = this._tailB = org.flixel.system.FlxList.recycle();
		if(Parent != null) {
			var iterator;
			var ot;
			if(Parent._headA.object != null) {
				iterator = Parent._headA;
				while(iterator != null) {
					if(this._tailA.object != null) {
						ot = this._tailA;
						this._tailA = org.flixel.system.FlxList.recycle();
						ot.next = this._tailA;
					}
					this._tailA.object = iterator.object;
					iterator = iterator.next;
				}
			}
			if(Parent._headB.object != null) {
				iterator = Parent._headB;
				while(iterator != null) {
					if(this._tailB.object != null) {
						ot = this._tailB;
						this._tailB = org.flixel.system.FlxList.recycle();
						ot.next = this._tailB;
					}
					this._tailB.object = iterator.object;
					iterator = iterator.next;
				}
			}
		} else org.flixel.system.FlxQuadTree._min = Math.floor((this.width + this.height) / (2 * org.flixel.system.FlxQuadTree.divisions));
		this._canSubdivide = this.width > org.flixel.system.FlxQuadTree._min || this.height > org.flixel.system.FlxQuadTree._min;
		this._northWestTree = null;
		this._northEastTree = null;
		this._southEastTree = null;
		this._southWestTree = null;
		this._leftEdge = this.x;
		this._rightEdge = this.x + this.width;
		this._halfWidth = this.width / 2;
		this._midpointX = this._leftEdge + this._halfWidth;
		this._topEdge = this.y;
		this._bottomEdge = this.y + this.height;
		this._halfHeight = this.height / 2;
		this._midpointY = this._topEdge + this._halfHeight;
	}
	,next: null
	,_midpointY: null
	,_midpointX: null
	,_halfHeight: null
	,_halfWidth: null
	,_bottomEdge: null
	,_topEdge: null
	,_rightEdge: null
	,_leftEdge: null
	,_southWestTree: null
	,_southEastTree: null
	,_northEastTree: null
	,_northWestTree: null
	,_tailB: null
	,_headB: null
	,_tailA: null
	,_headA: null
	,_canSubdivide: null
	,exists: null
	,__class__: org.flixel.system.FlxQuadTree
});
org.flixel.system.FlxReplay = function() {
	this.seed = 0;
	this.frame = 0;
	this.frameCount = 0;
	this.finished = false;
	this._frames = null;
	this._capacity = 0;
	this._marker = 0;
};
$hxClasses["org.flixel.system.FlxReplay"] = org.flixel.system.FlxReplay;
org.flixel.system.FlxReplay.__name__ = ["org","flixel","system","FlxReplay"];
org.flixel.system.FlxReplay.prototype = {
	rewind: function() {
		this._marker = 0;
		this.frame = 0;
		this.finished = false;
	}
	,playNextFrame: function() {
		org.flixel.FlxG.resetInput();
		if(this._marker >= this.frameCount) {
			this.finished = true;
			return;
		}
		if(this._frames[this._marker].frame != this.frame++) return;
		var fr = this._frames[this._marker++];
		if(fr.keys != null) org.flixel.FlxG.keys.playback(fr.keys);
		if(fr.mouse != null) org.flixel.FlxG.mouse.playback(fr.mouse);
	}
	,recordFrame: function() {
		var continueFrame = true;
		var keysRecord = org.flixel.FlxG.keys.record();
		if(keysRecord == null) continueFrame = false;
		var mouseRecord = org.flixel.FlxG.mouse.record();
		if(mouseRecord == null) continueFrame = false;
		if(continueFrame) {
			this.frame++;
			return;
		}
		var frameRecorded = new org.flixel.system.replay.FrameRecord().create(this.frame++);
		frameRecorded.mouse = mouseRecord;
		frameRecorded.keys = keysRecord;
		this._frames[this.frameCount++] = frameRecorded;
		if(this.frameCount >= this._capacity) {
			this._capacity *= 2;
			org.flixel.FlxU.SetArrayLength(this._frames,this._capacity);
		}
	}
	,save: function() {
		if(this.frameCount <= 0) return null;
		var output = this.seed + "\n";
		var i = 0;
		while(i < this.frameCount) output += this._frames[i++].save() + "\n";
		return output;
	}
	,init: function() {
		this._capacity = 100;
		this._frames = new Array();
		org.flixel.FlxU.SetArrayLength(this._frames,this._capacity);
		this.frameCount = 0;
	}
	,load: function(FileContents) {
		this.init();
		var lines = FileContents.split("\n");
		this.seed = Std.parseFloat(lines[0]);
		var line;
		var i = 1;
		var l = lines.length;
		while(i < l) {
			line = lines[i++];
			if(line.length > 3) {
				this._frames[this.frameCount++] = new org.flixel.system.replay.FrameRecord().load(line);
				if(this.frameCount >= this._capacity) {
					this._capacity *= 2;
					org.flixel.FlxU.SetArrayLength(this._frames,this._capacity);
				}
			}
		}
		this.rewind();
	}
	,create: function(Seed) {
		this.destroy();
		this.init();
		this.seed = Seed;
		this.rewind();
	}
	,destroy: function() {
		if(this._frames == null) return;
		var i = this.frameCount - 1;
		while(i >= 0) this._frames[i--].destroy();
		this._frames = null;
	}
	,_marker: null
	,_capacity: null
	,_frames: null
	,finished: null
	,frameCount: null
	,frame: null
	,seed: null
	,__class__: org.flixel.system.FlxReplay
}
org.flixel.system.FlxTile = function(Tilemap,Index,Width,Height,Visible,AllowCollisions) {
	org.flixel.FlxObject.call(this,0,0,Width,Height);
	this.immovable = true;
	this.moves = false;
	this.callbackFunction = null;
	this.filter = null;
	this.tilemap = Tilemap;
	this.index = Index;
	this.visible = Visible;
	this.allowCollisions = AllowCollisions;
	this.mapIndex = 0;
};
$hxClasses["org.flixel.system.FlxTile"] = org.flixel.system.FlxTile;
org.flixel.system.FlxTile.__name__ = ["org","flixel","system","FlxTile"];
org.flixel.system.FlxTile.__super__ = org.flixel.FlxObject;
org.flixel.system.FlxTile.prototype = $extend(org.flixel.FlxObject.prototype,{
	destroy: function() {
		this.callbackFunction = null;
		this.tilemap = null;
		org.flixel.FlxObject.prototype.destroy.call(this);
	}
	,mapIndex: null
	,index: null
	,tilemap: null
	,filter: null
	,callbackFunction: null
	,__class__: org.flixel.system.FlxTile
});
org.flixel.system.FlxTilemapBuffer = function(TileWidth,TileHeight,WidthInTiles,HeightInTiles,Camera) {
	if(WidthInTiles < 0) WidthInTiles = 0;
	if(HeightInTiles < 0) HeightInTiles = 0;
	if(Camera == null) Camera = org.flixel.FlxG.camera;
	this.columns = org.flixel.FlxU.ceil(Camera.width / TileWidth) + 1;
	if(this.columns > WidthInTiles) this.columns = WidthInTiles;
	this.rows = org.flixel.FlxU.ceil(Camera.height / TileHeight) + 1;
	if(this.rows > HeightInTiles) this.rows = HeightInTiles;
	this.width = this.columns * TileWidth | 0;
	this.height = this.rows * TileHeight | 0;
	this.dirty = true;
};
$hxClasses["org.flixel.system.FlxTilemapBuffer"] = org.flixel.system.FlxTilemapBuffer;
org.flixel.system.FlxTilemapBuffer.__name__ = ["org","flixel","system","FlxTilemapBuffer"];
org.flixel.system.FlxTilemapBuffer.prototype = {
	destroy: function() {
	}
	,columns: null
	,rows: null
	,dirty: null
	,height: null
	,width: null
	,y: null
	,x: null
	,__class__: org.flixel.system.FlxTilemapBuffer
}
org.flixel.system.FlxWindow = function(Title,Width,Height,Resizable,Bounds,BGColor,TopColor) {
	if(Resizable == null) Resizable = true;
	browser.display.Sprite.call(this);
	if(BGColor == null) BGColor = 2139062143;
	if(TopColor == null) TopColor = 2130706432;
	this._width = Math.abs(Width) | 0;
	this._height = Math.abs(Height) | 0;
	this._bounds = Bounds;
	this.minSize = new browser.geom.Point(50,30);
	if(this._bounds != null) this.maxSize = new browser.geom.Point(this._bounds.width,this._bounds.height); else this.maxSize = new browser.geom.Point(1.79e+308,1.79e+308);
	this._drag = new browser.geom.Point();
	this._resizable = Resizable;
	this._shadow = new browser.display.Bitmap(new browser.display.BitmapData(1,2,true,-16777216));
	this.addChild(this._shadow);
	this._background = new browser.display.Bitmap(new browser.display.BitmapData(1,1,true,BGColor));
	this._background.set_y(15);
	this.addChild(this._background);
	this._header = new browser.display.Bitmap(new browser.display.BitmapData(1,15,true,TopColor));
	this.addChild(this._header);
	this._title = new browser.text.TextField();
	this._title.set_x(2);
	this._title.set_height(16);
	this._title.selectable = false;
	this._title.multiline = false;
	this._title.set_defaultTextFormat(new browser.text.TextFormat(nme.installer.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215));
	this._title.set_text(Title);
	this.addChild(this._title);
	if(this._resizable) {
		this._handle = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgHandle));
		this.addChild(this._handle);
	}
	if(this._width != 0 || this._height != 0) this.updateSize();
	this.bound();
	this.addEventListener(browser.events.Event.ENTER_FRAME,$bind(this,this.init));
};
$hxClasses["org.flixel.system.FlxWindow"] = org.flixel.system.FlxWindow;
org.flixel.system.FlxWindow.__name__ = ["org","flixel","system","FlxWindow"];
org.flixel.system.FlxWindow.__super__ = browser.display.Sprite;
org.flixel.system.FlxWindow.prototype = $extend(browser.display.Sprite.prototype,{
	updateGUI: function() {
		if(this._overHeader || this._overHandle) {
			if(this._title.alpha != 1.0) this._title.alpha = 1.0;
		} else if(this._title.alpha != 0.65) this._title.alpha = 0.65;
	}
	,updateSize: function() {
		this._width = org.flixel.FlxU.bound(this._width,this.minSize.x,this.maxSize.x) | 0;
		this._height = org.flixel.FlxU.bound(this._height,this.minSize.y,this.maxSize.y) | 0;
		this._header.set_scaleX(this._width);
		this._background.set_scaleX(this._width);
		this._background.set_scaleY(this._height - 15);
		this._shadow.set_scaleX(this._width);
		this._shadow.set_y(this._height);
		this._title.set_width(this._width - 4);
		if(this._resizable) {
			this._handle.set_x(this._width - this._handle.get_width());
			this._handle.set_y(this._height - this._handle.get_height());
		}
	}
	,bound: function() {
		if(this._bounds != null) {
			this.set_x(org.flixel.FlxU.bound(this.get_x(),this._bounds.get_left(),this._bounds.get_right() - this._width));
			this.set_y(org.flixel.FlxU.bound(this.get_y(),this._bounds.get_top(),this._bounds.get_bottom() - this._height));
		}
	}
	,onMouseUp: function(E) {
		this._dragging = false;
		this._resizing = false;
	}
	,onMouseDown: function(E) {
		if(this._overHeader) {
			this._dragging = true;
			this._drag.x = this.get_mouseX();
			this._drag.y = this.get_mouseY();
		} else if(this._overHandle) {
			this._resizing = true;
			this._drag.x = this._width - this.get_mouseX();
			this._drag.y = this._height - this.get_mouseY();
		}
	}
	,onMouseMove: function(E) {
		if(this._dragging) {
			this._overHeader = true;
			this.reposition(this.parent.get_mouseX() - this._drag.x,this.parent.get_mouseY() - this._drag.y);
		} else if(this._resizing) {
			this._overHandle = true;
			this.resize(this.get_mouseX() - this._drag.x,this.get_mouseY() - this._drag.y);
		} else if(this.get_mouseX() >= 0 && this.get_mouseX() <= this._width && this.get_mouseY() >= 0 && this.get_mouseY() <= this._height) {
			this._overHeader = this.get_mouseX() <= this._header.get_width() && this.get_mouseY() <= this._header.get_height();
			if(this._resizable) this._overHandle = this.get_mouseX() >= this._width - this._handle.get_width() && this.get_mouseY() >= this._height - this._handle.get_height();
		} else this._overHandle = this._overHeader = false;
		this.updateGUI();
	}
	,init: function(E) {
		if(this.get_stage() == null) return;
		this.removeEventListener(browser.events.Event.ENTER_FRAME,$bind(this,this.init));
		this.get_stage().addEventListener(browser.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
		this.get_stage().addEventListener(browser.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.get_stage().addEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	,reposition: function(X,Y) {
		this.set_x(X);
		this.set_y(Y);
		this.bound();
	}
	,resize: function(Width,Height) {
		this._width = Math.abs(Width) | 0;
		this._height = Math.abs(Height) | 0;
		this.updateSize();
	}
	,destroy: function() {
		this.minSize = null;
		this.maxSize = null;
		this._bounds = null;
		if(this._shadow != null) this.removeChild(this._shadow);
		this._shadow = null;
		if(this._background != null) this.removeChild(this._background);
		this._background = null;
		if(this._header != null) this.removeChild(this._header);
		this._header = null;
		if(this._title != null) this.removeChild(this._title);
		this._title = null;
		if(this._handle != null) this.removeChild(this._handle);
		this._handle = null;
		this._drag = null;
	}
	,_resizable: null
	,_resizing: null
	,_dragging: null
	,_drag: null
	,_overHandle: null
	,_overHeader: null
	,_handle: null
	,_title: null
	,_shadow: null
	,_header: null
	,_background: null
	,_bounds: null
	,_height: null
	,_width: null
	,maxSize: null
	,minSize: null
	,__class__: org.flixel.system.FlxWindow
});
org.flixel.system.debug = {}
org.flixel.system.debug.Log = function(Title,Width,Height,Resizable,Bounds,BGColor,TopColor) {
	if(Resizable == null) Resizable = true;
	if(BGColor == null) BGColor = 2139062143;
	if(TopColor == null) TopColor = 2130706432;
	org.flixel.system.FlxWindow.call(this,Title,Width,Height,Resizable,Bounds,BGColor,TopColor);
	this._text = new browser.text.TextField();
	this._text.set_x(2);
	this._text.set_y(15);
	this._text.multiline = true;
	this._text.set_wordWrap(true);
	this._text.selectable = true;
	this._text.set_defaultTextFormat(new browser.text.TextFormat(nme.installer.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215));
	this.addChild(this._text);
	this._lines = new Array();
};
$hxClasses["org.flixel.system.debug.Log"] = org.flixel.system.debug.Log;
org.flixel.system.debug.Log.__name__ = ["org","flixel","system","debug","Log"];
org.flixel.system.debug.Log.__super__ = org.flixel.system.FlxWindow;
org.flixel.system.debug.Log.prototype = $extend(org.flixel.system.FlxWindow.prototype,{
	updateSize: function() {
		org.flixel.system.FlxWindow.prototype.updateSize.call(this);
		this._text.set_width(this._width - 10);
		this._text.set_height(this._height - 15);
	}
	,clear: function() {
		this._text.set_text("");
		this._lines.splice(0,this._lines.length);
	}
	,add: function(Text) {
		if(this._lines.length <= 0) this._text.set_text("");
		this._lines.push(Text);
		if(this._lines.length > org.flixel.system.debug.Log.MAX_LOG_LINES) {
			this._lines.shift();
			var newText = "";
			var _g1 = 0, _g = this._lines.length;
			while(_g1 < _g) {
				var i = _g1++;
				newText += this._lines[i] + "\n";
			}
			this._text.set_text(newText);
		} else this._text.appendText(Text + "\n");
	}
	,destroy: function() {
		if(this._text != null) this.removeChild(this._text);
		this._text = null;
		this._lines = null;
		org.flixel.system.FlxWindow.prototype.destroy.call(this);
	}
	,_lines: null
	,_text: null
	,__class__: org.flixel.system.debug.Log
});
org.flixel.system.debug.Perf = function(Title,Width,Height,Resizable,Bounds,BGColor,TopColor) {
	if(Resizable == null) Resizable = true;
	if(BGColor == null) BGColor = 2139062143;
	if(TopColor == null) TopColor = 2130706432;
	org.flixel.system.FlxWindow.call(this,Title,Width,Height,Resizable,Bounds,BGColor,TopColor);
	this.resize(90,110);
	this._lastTime = 0;
	this._updateTimer = 0;
	this._text = new browser.text.TextField();
	this._text.set_width(this._width);
	this._text.set_x(2);
	this._text.set_y(15);
	this._text.multiline = true;
	this._text.set_wordWrap(true);
	this._text.selectable = true;
	this._text.set_defaultTextFormat(new browser.text.TextFormat(nme.installer.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215));
	this.addChild(this._text);
	this._flixelUpdate = new Array();
	org.flixel.FlxU.SetArrayLength(this._flixelUpdate,32);
	this._flixelUpdateMarker = 0;
	this._flixelDraw = new Array();
	org.flixel.FlxU.SetArrayLength(this._flixelDraw,32);
	this._flixelDrawMarker = 0;
	this._flash = new Array();
	org.flixel.FlxU.SetArrayLength(this._flash,32);
	this._flashMarker = 0;
	this._activeObject = new Array();
	org.flixel.FlxU.SetArrayLength(this._activeObject,32);
	this._objectMarker = 0;
	this._visibleObject = new Array();
	org.flixel.FlxU.SetArrayLength(this._visibleObject,32);
	this._visibleObjectMarker = 0;
	this._drawCalls = [];
	this._drawCallsMarker = 0;
};
$hxClasses["org.flixel.system.debug.Perf"] = org.flixel.system.debug.Perf;
org.flixel.system.debug.Perf.__name__ = ["org","flixel","system","debug","Perf"];
org.flixel.system.debug.Perf.__super__ = org.flixel.system.FlxWindow;
org.flixel.system.debug.Perf.prototype = $extend(org.flixel.system.FlxWindow.prototype,{
	drawCalls: function(Drawcalls) {
		this._drawCalls[this._drawCallsMarker++] = Drawcalls;
	}
	,visibleObjects: function(Count) {
		this._visibleObject[this._visibleObjectMarker++] = Count;
	}
	,activeObjects: function(Count) {
		this._activeObject[this._objectMarker++] = Count;
	}
	,flash: function(Time) {
		this._flash[this._flashMarker++] = Time;
	}
	,flixelDraw: function(Time) {
		this._flixelDraw[this._flixelDrawMarker++] = Time;
	}
	,flixelUpdate: function(Time) {
		this._flixelUpdate[this._flixelUpdateMarker++] = Time;
	}
	,update: function() {
		var time = browser.Lib.getTimer();
		var elapsed = time - this._lastTime;
		var updateEvery = 500;
		if(elapsed > updateEvery) elapsed = updateEvery;
		this._lastTime = time;
		this._updateTimer += elapsed;
		if(this._updateTimer > updateEvery) {
			var i;
			var output = "";
			var flashPlayerFramerate = 0;
			i = 0;
			while(i < this._flashMarker) flashPlayerFramerate += this._flash[i++];
			flashPlayerFramerate /= this._flashMarker;
			output += (1 / (flashPlayerFramerate / 1000) | 0) + "/" + org.flixel.FlxG.get_flashFramerate() + "fps\n";
			output += Math.round(browser.system.System.get_totalMemory() * 0.000000954 * 100) / 100 + "MB\n";
			var updateTime = 0;
			i = 0;
			while(i < this._flixelUpdateMarker) updateTime += this._flixelUpdate[i++];
			var activeCount = 0;
			i = 0;
			while(i < this._objectMarker) activeCount += this._activeObject[i++];
			activeCount = activeCount / this._objectMarker | 0;
			output += "U:" + activeCount + " " + (updateTime / this._flixelDrawMarker | 0) + "ms\n";
			var drawTime = 0;
			i = 0;
			while(i < this._flixelDrawMarker) drawTime += this._flixelDraw[i++];
			var visibleCount = 0;
			i = 0;
			while(i < this._visibleObjectMarker) visibleCount += this._visibleObject[i++];
			visibleCount = visibleCount / this._visibleObjectMarker | 0;
			output += "D:" + visibleCount + " " + (drawTime / this._flixelDrawMarker | 0) + "ms";
			var drawCallsCount = 0;
			i = 0;
			while(i < this._drawCallsMarker) drawCallsCount += this._drawCalls[i++];
			drawCallsCount = drawCallsCount / this._drawCallsMarker | 0;
			output += "\nDrwTls:" + drawCallsCount;
			this._drawCallsMarker = 0;
			output += "\nQuadTrees:" + org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES;
			output += "\nLists:" + org.flixel.system.FlxList._NUM_CACHED_FLX_LIST;
			this._text.set_text(output);
			this._flixelUpdateMarker = 0;
			this._flixelDrawMarker = 0;
			this._flashMarker = 0;
			this._objectMarker = 0;
			this._visibleObjectMarker = 0;
			this._updateTimer -= updateEvery;
		}
	}
	,destroy: function() {
		if(this._text != null) this.removeChild(this._text);
		this._text = null;
		this._flixelUpdate = null;
		this._flixelDraw = null;
		this._flash = null;
		this._activeObject = null;
		this._visibleObject = null;
		this._drawCalls = null;
		org.flixel.system.FlxWindow.prototype.destroy.call(this);
	}
	,_drawCallsMarker: null
	,_drawCalls: null
	,_visibleObject: null
	,_flash: null
	,_activeObject: null
	,_flashMarker: null
	,_objectMarker: null
	,_visibleObjectMarker: null
	,_flixelDrawMarker: null
	,_flixelDraw: null
	,_flixelUpdateMarker: null
	,_flixelUpdate: null
	,_updateTimer: null
	,_lastTime: null
	,_text: null
	,__class__: org.flixel.system.debug.Perf
});
org.flixel.system.debug.VCR = function() {
	browser.display.Sprite.call(this);
	var spacing = 7;
	this._open = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgOpen));
	this.addChild(this._open);
	this._recordOff = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgRecordOff));
	this._recordOff.set_x(this._open.get_x() + this._open.get_width() + spacing);
	this.addChild(this._recordOff);
	this._recordOn = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgRecordOn));
	this._recordOn.set_x(this._recordOff.get_x());
	this._recordOn.set_visible(false);
	this.addChild(this._recordOn);
	this._stop = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgStop));
	this._stop.set_x(this._recordOff.get_x());
	this._stop.set_visible(false);
	this.addChild(this._stop);
	this._flixel = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgFlixel));
	this._flixel.set_x(this._recordOff.get_x() + this._recordOff.get_width() + spacing);
	this.addChild(this._flixel);
	this._restart = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgRestart));
	this._restart.set_x(this._flixel.get_x() + this._flixel.get_width() + spacing);
	this.addChild(this._restart);
	this._pause = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgPause));
	this._pause.set_x(this._restart.get_x() + this._restart.get_width() + spacing);
	this.addChild(this._pause);
	this._play = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgPlay));
	this._play.set_x(this._pause.get_x());
	this._play.set_visible(false);
	this.addChild(this._play);
	this._step = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgStep));
	this._step.set_x(this._pause.get_x() + this._pause.get_width() + spacing);
	this.addChild(this._step);
	this._runtimeDisplay = new browser.text.TextField();
	this._runtimeDisplay.set_width(this.get_width());
	this._runtimeDisplay.set_x(this.get_width());
	this._runtimeDisplay.set_y(-2);
	this._runtimeDisplay.multiline = false;
	this._runtimeDisplay.set_wordWrap(false);
	this._runtimeDisplay.selectable = false;
	var dtf = new browser.text.TextFormat(nme.installer.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215);
	dtf.align = browser.text.TextFormatAlign.CENTER;
	this._runtimeDisplay.set_defaultTextFormat(dtf);
	this._runtimeDisplay.set_visible(false);
	this.addChild(this._runtimeDisplay);
	this._runtime = 0;
	this.stepRequested = false;
	this.unpress();
	this.checkOver();
	this.updateGUI();
	this.addEventListener(browser.events.Event.ENTER_FRAME,$bind(this,this.init));
};
$hxClasses["org.flixel.system.debug.VCR"] = org.flixel.system.debug.VCR;
org.flixel.system.debug.VCR.__name__ = ["org","flixel","system","debug","VCR"];
org.flixel.system.debug.VCR.__super__ = browser.display.Sprite;
org.flixel.system.debug.VCR.prototype = $extend(browser.display.Sprite.prototype,{
	updateGUI: function() {
		if(this._recordOn.get_visible()) {
			this._open.alpha = this._restart.alpha = this._pause.alpha = this._step.alpha = 0.35;
			this._recordOn.alpha = 1.0;
			return;
		}
		if(this._overOpen && this._open.alpha != 1.0) this._open.alpha = 1.0; else if(!this._overOpen && this._open.alpha != 0.8) this._open.alpha = 0.8;
		if(this._overRecord && this._recordOff.alpha != 1.0) this._recordOff.alpha = this._recordOn.alpha = this._stop.alpha = 1.0; else if(!this._overRecord && this._recordOff.alpha != 0.8) this._recordOff.alpha = this._recordOn.alpha = this._stop.alpha = 0.8;
		if(this._overRestart && this._restart.alpha != 1.0) this._restart.alpha = 1.0; else if(!this._overRestart && this._restart.alpha != 0.8) this._restart.alpha = 0.8;
		if(this._overPause && this._pause.alpha != 1.0) this._pause.alpha = this._play.alpha = 1.0; else if(!this._overPause && this._pause.alpha != 0.8) this._pause.alpha = this._play.alpha = 0.8;
		if(this._overStep && this._step.alpha != 1.0) this._step.alpha = 1.0; else if(!this._overStep && this._step.alpha != 0.8) this._step.alpha = 0.8;
	}
	,unpress: function() {
		this._pressingOpen = false;
		this._pressingRecord = false;
		this._pressingRestart = false;
		this._pressingPause = false;
		this._pressingStep = false;
	}
	,checkOver: function() {
		this._overOpen = this._overRecord = this._overRestart = this._overPause = this._overStep = false;
		if(this.get_mouseX() < 0 || this.get_mouseX() > this.get_width() || this.get_mouseY() < 0 || this.get_mouseY() > 15) return false;
		if(this.get_mouseX() >= this._recordOff.get_x() && this.get_mouseX() <= this._recordOff.get_x() + this._recordOff.get_width()) this._overRecord = true;
		if(!this._recordOn.get_visible() && !this._overRecord) {
			if(this.get_mouseX() >= this._open.get_x() && this.get_mouseX() <= this._open.get_x() + this._open.get_width()) this._overOpen = true; else if(this.get_mouseX() >= this._restart.get_x() && this.get_mouseX() <= this._restart.get_x() + this._restart.get_width()) this._overRestart = true; else if(this.get_mouseX() >= this._pause.get_x() && this.get_mouseX() <= this._pause.get_x() + this._pause.get_width()) this._overPause = true; else if(this.get_mouseX() >= this._step.get_x() && this.get_mouseX() <= this._step.get_x() + this._step.get_width()) this._overStep = true;
		}
		return true;
	}
	,onMouseUp: function(E) {
		if(this._overOpen && this._pressingOpen) this.onOpen(); else if(this._overRecord && this._pressingRecord) {
			if(this._stop.get_visible()) this.onStop(); else if(this._recordOn.get_visible()) this.stopRecording(); else this.onRecord(!E.altKey);
		} else if(this._overRestart && this._pressingRestart) this.onRestart(!E.altKey); else if(this._overPause && this._pressingPause) {
			if(this._play.get_visible()) this.onPlay(); else this.onPause();
		} else if(this._overStep && this._pressingStep) this.onStep();
		this.unpress();
		this.checkOver();
		this.updateGUI();
	}
	,onMouseDown: function(E) {
		this.unpress();
		if(this._overOpen) this._pressingOpen = true;
		if(this._overRecord) this._pressingRecord = true;
		if(this._overRestart) this._pressingRestart = true;
		if(this._overPause) this._pressingPause = true;
		if(this._overStep) this._pressingStep = true;
	}
	,onMouseMove: function(E) {
		if(!this.checkOver()) this.unpress();
		this.updateGUI();
	}
	,init: function(E) {
		if(this.get_stage() == null) return;
		this.removeEventListener(browser.events.Event.ENTER_FRAME,$bind(this,this.init));
		this.parent.addEventListener(browser.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
		this.parent.addEventListener(browser.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.parent.addEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	,onStep: function() {
		if(!this.paused) this.onPause();
		this.stepRequested = true;
	}
	,onPlay: function() {
		if(!org.flixel.FlxG.mouse.useSystemCursor) browser.ui.Mouse.hide();
		this.paused = false;
		this._play.set_visible(false);
		this._pause.set_visible(true);
	}
	,onPause: function() {
		if(!org.flixel.FlxG.mouse.useSystemCursor) browser.ui.Mouse.show();
		this.paused = true;
		this._pause.set_visible(false);
		this._play.set_visible(true);
	}
	,onRestart: function(StandardMode) {
		if(StandardMode == null) StandardMode = false;
		org.flixel.FlxG.reloadReplay(StandardMode);
	}
	,onStop: function() {
		org.flixel.FlxG.stopReplay();
	}
	,onSaveError: function(E) {
	}
	,onSaveCancel: function(E) {
	}
	,onSaveComplete: function(E) {
	}
	,stopRecording: function() {
		var data = org.flixel.FlxG.stopRecording();
		if(data != null && data.length > 0) {
		}
	}
	,onRecord: function(StandardMode) {
		if(StandardMode == null) StandardMode = false;
		if(this._play.get_visible()) this.onPlay();
		org.flixel.FlxG.recordReplay(StandardMode);
	}
	,onOpenError: function(E) {
	}
	,onOpenCancel: function(E) {
	}
	,onOpenComplete: function(E) {
	}
	,onOpenSelect: function(E) {
	}
	,onOpen: function() {
	}
	,updateRuntime: function(Time) {
		this._runtime += Time;
		this._runtimeDisplay.set_text(org.flixel.FlxU.formatTime(this._runtime / 1000 | 0,true));
		if(!this._runtimeDisplay.get_visible()) this._runtimeDisplay.set_visible(true);
	}
	,playing: function() {
		this._recordOff.set_visible(false);
		this._recordOn.set_visible(false);
		this._stop.set_visible(true);
	}
	,stopped: function() {
		this._stop.set_visible(false);
		this._recordOn.set_visible(false);
		this._recordOff.set_visible(true);
	}
	,recording: function() {
		this._stop.set_visible(false);
		this._recordOff.set_visible(false);
		this._recordOn.set_visible(true);
	}
	,destroy: function() {
		if(this._open != null) this.removeChild(this._open);
		this._open = null;
		if(this._recordOff != null) this.removeChild(this._recordOff);
		this._recordOff = null;
		if(this._recordOn != null) this.removeChild(this._recordOn);
		this._recordOn = null;
		if(this._stop != null) this.removeChild(this._stop);
		this._stop = null;
		if(this._flixel != null) this.removeChild(this._flixel);
		this._flixel = null;
		if(this._restart != null) this.removeChild(this._restart);
		this._restart = null;
		if(this._pause != null) this.removeChild(this._pause);
		this._pause = null;
		if(this._play != null) this.removeChild(this._play);
		this._play = null;
		if(this._step != null) this.removeChild(this._step);
		this._step = null;
		if(this.parent != null) {
			this.parent.removeEventListener(browser.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
			this.parent.removeEventListener(browser.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
			this.parent.removeEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
		}
	}
	,_runtime: null
	,_runtimeDisplay: null
	,_pressingStep: null
	,_pressingPause: null
	,_pressingRestart: null
	,_pressingRecord: null
	,_pressingOpen: null
	,_overStep: null
	,_overPause: null
	,_overRestart: null
	,_overRecord: null
	,_overOpen: null
	,_step: null
	,_play: null
	,_pause: null
	,_restart: null
	,_flixel: null
	,_stop: null
	,_recordOn: null
	,_recordOff: null
	,_open: null
	,stepRequested: null
	,paused: null
	,__class__: org.flixel.system.debug.VCR
});
org.flixel.system.debug.Vis = function() {
	browser.display.Sprite.call(this);
	var spacing = 7;
	this._bounds = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgBounds));
	this.addChild(this._bounds);
	this.unpress();
	this.checkOver();
	this.updateGUI();
	this.addEventListener(browser.events.Event.ENTER_FRAME,$bind(this,this.init));
};
$hxClasses["org.flixel.system.debug.Vis"] = org.flixel.system.debug.Vis;
org.flixel.system.debug.Vis.__name__ = ["org","flixel","system","debug","Vis"];
org.flixel.system.debug.Vis.__super__ = browser.display.Sprite;
org.flixel.system.debug.Vis.prototype = $extend(browser.display.Sprite.prototype,{
	updateGUI: function() {
		if(org.flixel.FlxG.visualDebug) {
			if(this._overBounds && this._bounds.alpha != 1.0) this._bounds.alpha = 1.0; else if(!this._overBounds && this._bounds.alpha != 0.9) this._bounds.alpha = 0.9;
		} else if(this._overBounds && this._bounds.alpha != 0.6) this._bounds.alpha = 0.6; else if(!this._overBounds && this._bounds.alpha != 0.5) this._bounds.alpha = 0.5;
	}
	,unpress: function() {
		this._pressingBounds = false;
	}
	,checkOver: function() {
		this._overBounds = false;
		if(this.get_mouseX() < 0 || this.get_mouseX() > this.get_width() || this.get_mouseY() < 0 || this.get_mouseY() > this.get_height()) return false;
		if(this.get_mouseX() > this._bounds.get_x() || this.get_mouseX() < this._bounds.get_x() + this._bounds.get_width()) this._overBounds = true;
		return true;
	}
	,onMouseUp: function(E) {
		if(this._overBounds && this._pressingBounds) this.onBounds();
		this.unpress();
		this.checkOver();
		this.updateGUI();
	}
	,onMouseDown: function(E) {
		this.unpress();
		if(this._overBounds) this._pressingBounds = true;
	}
	,onMouseMove: function(E) {
		if(!this.checkOver()) this.unpress();
		this.updateGUI();
	}
	,init: function(E) {
		if(this.get_stage() == null) return;
		this.removeEventListener(browser.events.Event.ENTER_FRAME,$bind(this,this.init));
		this.parent.addEventListener(browser.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
		this.parent.addEventListener(browser.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.parent.addEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	,onBounds: function() {
		org.flixel.FlxG.visualDebug = !org.flixel.FlxG.visualDebug;
	}
	,destroy: function() {
		if(this._bounds != null) this.removeChild(this._bounds);
		this._bounds = null;
		if(this.parent != null) {
			this.parent.removeEventListener(browser.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
			this.parent.removeEventListener(browser.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
			this.parent.removeEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
		}
	}
	,_pressingBounds: null
	,_overBounds: null
	,_bounds: null
	,__class__: org.flixel.system.debug.Vis
});
org.flixel.system.debug.Watch = function(Title,Width,Height,Resizable,Bounds,BGColor,TopColor) {
	if(Resizable == null) Resizable = true;
	if(BGColor == null) BGColor = 2139062143;
	if(TopColor == null) TopColor = 2130706432;
	org.flixel.system.FlxWindow.call(this,Title,Width,Height,Resizable,Bounds,BGColor,TopColor);
	this._names = new browser.display.Sprite();
	this._names.set_x(2);
	this._names.set_y(15);
	this.addChild(this._names);
	this._values = new browser.display.Sprite();
	this._values.set_x(2);
	this._values.set_y(15);
	this.addChild(this._values);
	this._watching = new Array();
	this.editing = false;
	this.removeAll();
};
$hxClasses["org.flixel.system.debug.Watch"] = org.flixel.system.debug.Watch;
org.flixel.system.debug.Watch.__name__ = ["org","flixel","system","debug","Watch"];
org.flixel.system.debug.Watch.__super__ = org.flixel.system.FlxWindow;
org.flixel.system.debug.Watch.prototype = $extend(org.flixel.system.FlxWindow.prototype,{
	updateSize: function() {
		if((this._height | 0) < this._watching.length * 15 + 17) this._height = this._watching.length * 15 + 17;
		org.flixel.system.FlxWindow.prototype.updateSize.call(this);
		this._values.set_x(this._width / 2 + 2);
		var i = 0;
		var l = this._watching.length;
		while(i < l) this._watching[i++].updateWidth(this._width / 2,this._width / 2 - 10);
	}
	,submit: function() {
		var i = 0;
		var l = this._watching.length;
		var watchEntry;
		while(i < l) {
			watchEntry = this._watching[i++];
			if(watchEntry.editing) watchEntry.submit();
		}
		this.editing = false;
	}
	,update: function() {
		this.editing = false;
		var i = 0;
		var l = this._watching.length;
		while(i < l) if(!this._watching[i++].updateValue()) this.editing = true;
	}
	,removeAll: function() {
		var watchEntry;
		var i = 0;
		var l = this._watching.length;
		while(i < l) {
			watchEntry = this._watching.pop();
			this._names.removeChild(watchEntry.nameDisplay);
			this._values.removeChild(watchEntry.valueDisplay);
			watchEntry.destroy();
			i++;
		}
		this._watching = [];
	}
	,remove: function(AnyObject,VariableName) {
		var watchEntry;
		var i = this._watching.length - 1;
		while(i >= 0) {
			watchEntry = this._watching[i];
			if(watchEntry.object == AnyObject && (VariableName == null || watchEntry.field == VariableName)) {
				this._watching[i] = this._watching[this._watching.length - 1];
				this._watching.pop();
				this._names.removeChild(watchEntry.nameDisplay);
				this._values.removeChild(watchEntry.valueDisplay);
				watchEntry.destroy();
			}
			i--;
		}
		watchEntry = null;
		i = 0;
		var l = this._watching.length;
		while(i < l) {
			this._watching[i].setY(i * 15);
			i++;
		}
	}
	,add: function(AnyObject,VariableName,DisplayName) {
		var watchEntry;
		var i = 0;
		var l = this._watching.length;
		while(i < l) {
			watchEntry = this._watching[i++];
			if(watchEntry.object == AnyObject && watchEntry.field == VariableName) return;
		}
		watchEntry = new org.flixel.system.debug.WatchEntry(this._watching.length * 15,this._width / 2,this._width / 2 - 10,AnyObject,VariableName,DisplayName);
		this._names.addChild(watchEntry.nameDisplay);
		this._values.addChild(watchEntry.valueDisplay);
		this._watching.push(watchEntry);
	}
	,destroy: function() {
		if(this._names != null) this.removeChild(this._names);
		this._names = null;
		if(this._values != null) this.removeChild(this._values);
		this._values = null;
		if(this._watching != null) {
			var i = 0;
			var l = this._watching.length;
			while(i < l) this._watching[i++].destroy();
			this._watching = null;
		}
		org.flixel.system.FlxWindow.prototype.destroy.call(this);
	}
	,_watching: null
	,_values: null
	,_names: null
	,editing: null
	,__class__: org.flixel.system.debug.Watch
});
org.flixel.system.debug.WatchEntry = function(Y,NameWidth,ValueWidth,Obj,Field,Custom) {
	this.editing = false;
	this.object = Obj;
	this.field = Field;
	this.custom = Custom;
	var fontName = nme.installer.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName;
	this._whiteText = new browser.text.TextFormat(fontName,12,16777215);
	this._blackText = new browser.text.TextFormat(fontName,12,0);
	this.nameDisplay = new browser.text.TextField();
	this.nameDisplay.set_y(Y);
	this.nameDisplay.multiline = false;
	this.nameDisplay.selectable = true;
	this.nameDisplay.set_defaultTextFormat(this._whiteText);
	this.valueDisplay = new browser.text.TextField();
	this.valueDisplay.set_y(Y);
	this.valueDisplay.set_height(15);
	this.valueDisplay.multiline = false;
	this.valueDisplay.selectable = true;
	this.valueDisplay.doubleClickEnabled = true;
	this.valueDisplay.addEventListener(browser.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
	this.valueDisplay.addEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	this.valueDisplay.set_background(false);
	this.valueDisplay.set_backgroundColor(16777215);
	this.valueDisplay.set_defaultTextFormat(this._whiteText);
	this.updateWidth(NameWidth,ValueWidth);
};
$hxClasses["org.flixel.system.debug.WatchEntry"] = org.flixel.system.debug.WatchEntry;
org.flixel.system.debug.WatchEntry.__name__ = ["org","flixel","system","debug","WatchEntry"];
org.flixel.system.debug.WatchEntry.prototype = {
	doneEditing: function() {
		this.valueDisplay.set_type(browser.text.TextFieldType.DYNAMIC);
		this.valueDisplay.setTextFormat(this._whiteText);
		this.valueDisplay.set_defaultTextFormat(this._whiteText);
		this.valueDisplay.set_background(false);
		this.editing = false;
	}
	,submit: function() {
		Reflect.setProperty(this.object,this.field,this.valueDisplay.get_text());
		this.doneEditing();
	}
	,cancel: function() {
		this.valueDisplay.set_text(this.oldValue.toString());
		this.doneEditing();
	}
	,onKeyUp: function(FlashEvent) {
		if(FlashEvent.keyCode == 13 || FlashEvent.keyCode == 9 || FlashEvent.keyCode == 27) {
			if(FlashEvent.keyCode == 27) this.cancel(); else this.submit();
		}
	}
	,onMouseUp: function(FlashEvent) {
		this.editing = true;
		this.oldValue = Reflect.getProperty(this.object,this.field);
		this.valueDisplay.set_type(browser.text.TextFieldType.INPUT);
		this.valueDisplay.setTextFormat(this._blackText);
		this.valueDisplay.set_background(true);
	}
	,updateValue: function() {
		if(this.editing) return false;
		this.valueDisplay.set_text(Std.string(Reflect.getProperty(this.object,this.field)));
		return true;
	}
	,updateWidth: function(NameWidth,ValueWidth) {
		this.nameDisplay.set_width(NameWidth);
		this.valueDisplay.set_width(ValueWidth);
		if(this.custom != null) this.nameDisplay.set_text(this.custom); else {
			this.nameDisplay.set_text("");
			if(NameWidth > 120) this.nameDisplay.appendText((function($this) {
				var $r;
				var s = Type.getClassName(Type.getClass($this.object));
				if(s != null) {
					s = StringTools.replace(s,"::",".");
					if(NameWidth < 240) s = HxOverrides.substr(s,s.lastIndexOf(".") + 1,null);
				}
				$r = s;
				return $r;
			}(this)) + ".");
			this.nameDisplay.appendText(this.field);
		}
	}
	,setY: function(Y) {
		this.nameDisplay.set_y(Y);
		this.valueDisplay.set_y(Y);
	}
	,destroy: function() {
		this.object = null;
		this.oldValue = null;
		this.nameDisplay = null;
		this.field = null;
		this.custom = null;
		if(this.valueDisplay != null) {
			this.valueDisplay.removeEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
			this.valueDisplay.removeEventListener(browser.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
			this.valueDisplay = null;
		}
	}
	,_blackText: null
	,_whiteText: null
	,oldValue: null
	,editing: null
	,valueDisplay: null
	,nameDisplay: null
	,custom: null
	,field: null
	,object: null
	,__class__: org.flixel.system.debug.WatchEntry
}
org.flixel.system.input = {}
org.flixel.system.input.FlxInputStates = function() {
	this._total = 256;
	this._lookup = new Hash();
	this._map = new Array();
	org.flixel.FlxU.SetArrayLength(this._map,this._total);
};
$hxClasses["org.flixel.system.input.FlxInputStates"] = org.flixel.system.input.FlxInputStates;
org.flixel.system.input.FlxInputStates.__name__ = ["org","flixel","system","input","FlxInputStates"];
org.flixel.system.input.FlxInputStates.prototype = {
	destroy: function() {
		this._lookup = null;
		this._map = null;
	}
	,addKey: function(KeyName,KeyCode) {
		this._lookup.set(KeyName,KeyCode);
		this._map[KeyCode] = new org.flixel.system.input.FlxMapObject(KeyName,0,0);
	}
	,getIsDown: function() {
		var keysdown = new Array();
		var i = 0;
		while(i < this._total) {
			var o = this._map[i++];
			if(o != null && o.current > 0) keysdown.push(o);
		}
		return keysdown;
	}
	,any: function() {
		var i = 0;
		while(i < this._total) {
			var o = this._map[i++];
			if(o != null && o.current > 0) return true;
		}
		return false;
	}
	,getKeyCode: function(KeyName) {
		return this._lookup.get(KeyName);
	}
	,playback: function(Record) {
		var i = 0;
		var l = Record.length;
		var o;
		var o2;
		while(i < l) {
			o = Record[i++];
			o2 = this._map[o.code];
			o2.current = o.value;
			if(o.value > 0) Reflect.setProperty(this,o2.name,true);
		}
	}
	,record: function() {
		var data = null;
		var i = 0;
		while(i < this._total) {
			var o = this._map[i++];
			if(o == null || o.current == 0) continue;
			if(data == null) data = new Array();
			data.push(new org.flixel.system.replay.CodeValuePair(i - 1,o.current));
		}
		return data;
	}
	,justReleased: function(Key) {
		return this._map[this._lookup.get(Key)].current == -1;
	}
	,justPressed: function(Key) {
		return this._map[this._lookup.get(Key)].current == 2;
	}
	,pressed: function(Key) {
		return Reflect.getProperty(this,Key);
	}
	,reset: function() {
		var _g1 = 0, _g = this._total;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._map[i] == null) continue;
			var o = this._map[i];
			Reflect.setProperty(this,o.name,false);
			o.current = 0;
			o.last = 0;
		}
	}
	,update: function() {
		var i = 0;
		while(i < this._total) {
			var o = this._map[i++];
			if(o == null) continue;
			if(o.last == -1 && o.current == -1) o.current = 0; else if(o.last == 2 && o.current == 2) o.current = 1;
			o.last = o.current;
		}
	}
	,_total: null
	,_map: null
	,_lookup: null
	,__class__: org.flixel.system.input.FlxInputStates
}
org.flixel.system.input.FlxInputs = function() {
};
$hxClasses["org.flixel.system.input.FlxInputs"] = org.flixel.system.input.FlxInputs;
org.flixel.system.input.FlxInputs.__name__ = ["org","flixel","system","input","FlxInputs"];
org.flixel.system.input.FlxInputs.inputs = null;
org.flixel.system.input.FlxInputs.init = function() {
	org.flixel.system.input.FlxInputs.inputs = null;
	org.flixel.system.input.FlxInputs.inputs = new Array();
	org.flixel.system.input.FlxInputs.initKeyboard();
	org.flixel.system.input.FlxInputs.initMouse();
	org.flixel.system.input.FlxInputs.initTouch();
}
org.flixel.system.input.FlxInputs.addInput = function(input) {
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	var _g = 0;
	while(_g < l) {
		var i = _g++;
		if(org.flixel.system.input.FlxInputs.inputs[i].toString() == org.flixel.system.input.FlxInputs.inputs.toString()) return input;
	}
	org.flixel.system.input.FlxInputs.inputs.push(input);
	return input;
}
org.flixel.system.input.FlxInputs.updateInputs = function() {
	var i = 0;
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	while(i < l) {
		var input = org.flixel.system.input.FlxInputs.inputs[i++];
		input.update();
	}
}
org.flixel.system.input.FlxInputs.onFocusLost = function() {
	var i = 0;
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	while(i < l) {
		var input = org.flixel.system.input.FlxInputs.inputs[i++];
		input.onFocusLost();
	}
}
org.flixel.system.input.FlxInputs.onFocus = function() {
	var i = 0;
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	while(i < l) {
		var input = org.flixel.system.input.FlxInputs.inputs[i++];
		input.onFocus();
	}
}
org.flixel.system.input.FlxInputs.resetInputs = function() {
	var i = 0;
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	while(i < l) {
		var input = org.flixel.system.input.FlxInputs.inputs[i++];
		input.reset();
	}
}
org.flixel.system.input.FlxInputs.initKeyboard = function() {
	var key = new org.flixel.system.input.FlxKeyboard();
	org.flixel.FlxG.keys = key;
	org.flixel.system.input.FlxInputs.inputs.push(key);
}
org.flixel.system.input.FlxInputs.initMouse = function() {
	var mouse = new org.flixel.system.input.FlxMouse(org.flixel.FlxG._game._inputContainer);
	org.flixel.FlxG.mouse = mouse;
	org.flixel.system.input.FlxInputs.inputs.push(mouse);
}
org.flixel.system.input.FlxInputs.initTouch = function() {
	var touch = new org.flixel.system.input.FlxTouchManager();
	org.flixel.FlxG.touchManager = touch;
	org.flixel.system.input.FlxInputs.inputs.push(touch);
}
org.flixel.system.input.FlxInputs.prototype = {
	destroy: function() {
		var i = 0;
		var l = org.flixel.system.input.FlxInputs.inputs.length;
		while(i < l) {
			var input = org.flixel.system.input.FlxInputs.inputs[i++];
			input.destroy();
			input = null;
		}
	}
	,__class__: org.flixel.system.input.FlxInputs
}
org.flixel.system.input.IFlxInput = function() { }
$hxClasses["org.flixel.system.input.IFlxInput"] = org.flixel.system.input.IFlxInput;
org.flixel.system.input.IFlxInput.__name__ = ["org","flixel","system","input","IFlxInput"];
org.flixel.system.input.IFlxInput.prototype = {
	destroy: null
	,toString: null
	,onFocusLost: null
	,onFocus: null
	,update: null
	,reset: null
	,__class__: org.flixel.system.input.IFlxInput
}
org.flixel.system.input.FlxKeyboard = function() {
	org.flixel.system.input.FlxInputStates.call(this);
	var i;
	i = 65;
	while(i <= 90) this.addKey(String.fromCharCode(i),i++);
	i = 48;
	this.addKey("ZERO",i++);
	this.addKey("ONE",i++);
	this.addKey("TWO",i++);
	this.addKey("THREE",i++);
	this.addKey("FOUR",i++);
	this.addKey("FIVE",i++);
	this.addKey("SIX",i++);
	this.addKey("SEVEN",i++);
	this.addKey("EIGHT",i++);
	this.addKey("NINE",i++);
	i = 96;
	this.addKey("NUMPADZERO",i++);
	this.addKey("NUMPADONE",i++);
	this.addKey("NUMPADTWO",i++);
	this.addKey("NUMPADTHREE",i++);
	this.addKey("NUMPADFOUR",i++);
	this.addKey("NUMPADFIVE",i++);
	this.addKey("NUMPADSIX",i++);
	this.addKey("NUMPADSEVEN",i++);
	this.addKey("NUMPADEIGHT",i++);
	this.addKey("NUMPADNINE",i++);
	this.addKey("PAGEUP",33);
	this.addKey("PAGEDOWN",34);
	this.addKey("HOME",36);
	this.addKey("END",35);
	this.addKey("INSERT",45);
	i = 1;
	while(i <= 12) this.addKey("F" + i,111 + i++);
	this.addKey("ESCAPE",27);
	this.addKey("MINUS",189);
	this.addKey("PLUS",187);
	this.addKey("DELETE",46);
	this.addKey("BACKSPACE",8);
	this.addKey("LBRACKET",219);
	this.addKey("RBRACKET",221);
	this.addKey("BACKSLASH",220);
	this.addKey("CAPSLOCK",20);
	this.addKey("SEMICOLON",186);
	this.addKey("QUOTE",222);
	this.addKey("ENTER",13);
	this.addKey("SHIFT",16);
	this.addKey("COMMA",188);
	this.addKey("PERIOD",190);
	this.addKey("SLASH",191);
	this.addKey("NUMPADSLASH",191);
	this.addKey("CONTROL",17);
	this.addKey("ALT",18);
	this.addKey("SPACE",32);
	this.addKey("UP",38);
	this.addKey("DOWN",40);
	this.addKey("LEFT",37);
	this.addKey("RIGHT",39);
	this.addKey("TAB",9);
	this.addKey("NUMPADMINUS",109);
	this.addKey("NUMPADPLUS",107);
	this.addKey("NUMPADPERIOD",110);
	nme.Lib.get_current().get_stage().addEventListener(browser.events.KeyboardEvent.KEY_DOWN,$bind(this,this.onKeyDown));
	nme.Lib.get_current().get_stage().addEventListener(browser.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
};
$hxClasses["org.flixel.system.input.FlxKeyboard"] = org.flixel.system.input.FlxKeyboard;
org.flixel.system.input.FlxKeyboard.__name__ = ["org","flixel","system","input","FlxKeyboard"];
org.flixel.system.input.FlxKeyboard.__interfaces__ = [org.flixel.system.input.IFlxInput];
org.flixel.system.input.FlxKeyboard.__super__ = org.flixel.system.input.FlxInputStates;
org.flixel.system.input.FlxKeyboard.prototype = $extend(org.flixel.system.input.FlxInputStates.prototype,{
	toString: function() {
		return "Keyboard";
	}
	,onFocusLost: function() {
		this.reset();
	}
	,onFocus: function() {
	}
	,handleKeyDown: function(FlashEvent) {
		var o = this._map[FlashEvent.keyCode];
		if(o == null) return;
		if(o.current > 0) o.current = 1; else o.current = 2;
		Reflect.setProperty(this,o.name,true);
	}
	,onKeyDown: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp && org.flixel.FlxG._game._debugger.watch.editing) return;
		if(org.flixel.FlxG._game._replaying && org.flixel.FlxG._game._replayCancelKeys != null && org.flixel.FlxG._game._debugger == null && FlashEvent.keyCode != 192 && FlashEvent.keyCode != 220) {
			var cancel = false;
			var replayCancelKey;
			var i = 0;
			var l = org.flixel.FlxG._game._replayCancelKeys.length;
			while(i < l) {
				replayCancelKey = org.flixel.FlxG._game._replayCancelKeys[i++];
				if(replayCancelKey == "ANY" || this.getKeyCode(replayCancelKey) == (FlashEvent.keyCode | 0)) {
					if(org.flixel.FlxG._game._replayCallback != null) {
						org.flixel.FlxG._game._replayCallback();
						org.flixel.FlxG._game._replayCallback = null;
					} else org.flixel.FlxG.stopReplay();
					break;
				}
			}
			return;
		}
		this.handleKeyDown(FlashEvent);
	}
	,onKeyUp: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp && org.flixel.FlxG._game._debugger.watch.editing) return;
		if(!org.flixel.FlxG.mobile) {
			if(org.flixel.FlxG._game._debugger != null && (FlashEvent.keyCode == 192 || FlashEvent.keyCode == 220)) {
				org.flixel.FlxG._game._debugger.set_visible(!org.flixel.FlxG._game._debugger.get_visible());
				org.flixel.FlxG._game._debuggerUp = org.flixel.FlxG._game._debugger.get_visible();
				return;
			}
			if(org.flixel.FlxG._game.useSoundHotKeys) {
				var c = FlashEvent.keyCode;
				var code = String.fromCharCode(FlashEvent.charCode);
				if(c == 48 || c == 96) {
					org.flixel.FlxG.mute = !org.flixel.FlxG.mute;
					if(org.flixel.FlxG.volumeHandler != null) org.flixel.FlxG.volumeHandler(org.flixel.FlxG.mute?0:org.flixel.FlxG.volume);
					org.flixel.FlxG._game.showSoundTray();
					return;
				} else if(c == 109 || c == 189) {
					org.flixel.FlxG.mute = false;
					org.flixel.FlxG.setVolume(org.flixel.FlxG.volume - 0.1);
					org.flixel.FlxG._game.showSoundTray();
					return;
				} else if(c == 107 || c == 187) {
					org.flixel.FlxG.mute = false;
					org.flixel.FlxG.setVolume(org.flixel.FlxG.volume + 0.1);
					org.flixel.FlxG._game.showSoundTray();
					return;
				} else {
				}
			}
		}
		if(org.flixel.FlxG._game._replaying) return;
		var object = this._map[FlashEvent.keyCode];
		if(object == null) return;
		if(object.current > 0) object.current = -1; else object.current = 0;
		Reflect.setProperty(this,object.name,false);
	}
	,RIGHT: null
	,LEFT: null
	,DOWN: null
	,UP: null
	,SPACE: null
	,ALT: null
	,CONTROL: null
	,NUMPADSLASH: null
	,SLASH: null
	,NUMPADPERIOD: null
	,PERIOD: null
	,COMMA: null
	,M: null
	,N: null
	,B: null
	,V: null
	,C: null
	,X: null
	,Z: null
	,SHIFT: null
	,ENTER: null
	,QUOTE: null
	,SEMICOLON: null
	,L: null
	,K: null
	,J: null
	,H: null
	,G: null
	,F: null
	,D: null
	,S: null
	,A: null
	,CAPSLOCK: null
	,BACKSLASH: null
	,RBRACKET: null
	,LBRACKET: null
	,P: null
	,O: null
	,I: null
	,U: null
	,Y: null
	,T: null
	,R: null
	,E: null
	,W: null
	,Q: null
	,TAB: null
	,BACKSPACE: null
	,DELETE: null
	,NUMPADPLUS: null
	,PLUS: null
	,NUMPADMINUS: null
	,MINUS: null
	,INSERT: null
	,END: null
	,HOME: null
	,PAGEDOWN: null
	,PAGEUP: null
	,NUMPADZERO: null
	,NUMPADNINE: null
	,NUMPADEIGHT: null
	,NUMPADSEVEN: null
	,NUMPADSIX: null
	,NUMPADFIVE: null
	,NUMPADFOUR: null
	,NUMPADTHREE: null
	,NUMPADTWO: null
	,NUMPADONE: null
	,ZERO: null
	,NINE: null
	,EIGHT: null
	,SEVEN: null
	,SIX: null
	,FIVE: null
	,FOUR: null
	,THREE: null
	,TWO: null
	,ONE: null
	,F12: null
	,F11: null
	,F10: null
	,F9: null
	,F8: null
	,F7: null
	,F6: null
	,F5: null
	,F4: null
	,F3: null
	,F2: null
	,F1: null
	,ESCAPE: null
	,__class__: org.flixel.system.input.FlxKeyboard
});
org.flixel.system.input.FlxMapObject = function(name,current,last) {
	this.name = name;
	this.current = current;
	this.last = last;
};
$hxClasses["org.flixel.system.input.FlxMapObject"] = org.flixel.system.input.FlxMapObject;
org.flixel.system.input.FlxMapObject.__name__ = ["org","flixel","system","input","FlxMapObject"];
org.flixel.system.input.FlxMapObject.prototype = {
	last: null
	,current: null
	,name: null
	,__class__: org.flixel.system.input.FlxMapObject
}
org.flixel.system.input.FlxMouse = function(CursorContainer) {
	org.flixel.FlxPoint.call(this);
	this._cursorContainer = CursorContainer;
	this._cursorContainer.mouseChildren = false;
	this._cursorContainer.mouseEnabled = false;
	this._lastX = this.screenX = 0;
	this._lastY = this.screenY = 0;
	this._lastWheel = this.wheel = 0;
	this._current = 0;
	this._last = 0;
	this._cursor = null;
	this._point = new org.flixel.FlxPoint();
	this._globalScreenPosition = new org.flixel.FlxPoint();
	this.set_systemCursor(false);
	nme.Lib.get_current().get_stage().addEventListener(browser.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
	nme.Lib.get_current().get_stage().addEventListener(browser.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	nme.Lib.get_current().get_stage().addEventListener(browser.events.MouseEvent.MOUSE_WHEEL,$bind(this,this.onMouseWheel));
};
$hxClasses["org.flixel.system.input.FlxMouse"] = org.flixel.system.input.FlxMouse;
org.flixel.system.input.FlxMouse.__name__ = ["org","flixel","system","input","FlxMouse"];
org.flixel.system.input.FlxMouse.__interfaces__ = [org.flixel.system.input.IFlxInput];
org.flixel.system.input.FlxMouse.__super__ = org.flixel.FlxPoint;
org.flixel.system.input.FlxMouse.prototype = $extend(org.flixel.FlxPoint.prototype,{
	set_systemCursor: function(value) {
		this.useSystemCursor = value;
		if(!this.useSystemCursor) browser.ui.Mouse.hide(); else browser.ui.Mouse.show();
		return value;
	}
	,onFocusLost: function() {
		browser.ui.Mouse.show();
	}
	,onFocus: function() {
		if(!org.flixel.FlxG._game._debuggerUp && !this.useSystemCursor) browser.ui.Mouse.hide();
		this.reset();
	}
	,playback: function(Record) {
		this._current = Record.button;
		this.wheel = Record.wheel;
		this._globalScreenPosition.x = Record.x;
		this._globalScreenPosition.y = Record.y;
		this.updateCursor();
	}
	,record: function() {
		if(this._lastX == this._globalScreenPosition.x && this._lastY == this._globalScreenPosition.y && this._current == 0 && this._lastWheel == this.wheel) return null;
		this._lastX = Math.floor(this._globalScreenPosition.x);
		this._lastY = Math.floor(this._globalScreenPosition.y);
		this._lastWheel = this.wheel;
		return new org.flixel.system.replay.MouseRecord(this._lastX,this._lastY,this._current,this._lastWheel);
	}
	,justReleased: function() {
		return this._current == -1 || this._current == -2;
	}
	,justPressed: function() {
		return this._current == 2 || this._current == -2;
	}
	,pressed: function() {
		return this._current > 0;
	}
	,reset: function() {
		this._current = 0;
		this._last = 0;
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		if(point == null) point = new org.flixel.FlxPoint();
		point.x = (this._globalScreenPosition.x - Camera.x) / Camera.zoom;
		point.y = (this._globalScreenPosition.y - Camera.y) / Camera.zoom;
		return point;
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		if(point == null) point = new org.flixel.FlxPoint();
		this.getScreenPosition(Camera,this._point);
		point.x = this._point.x + Camera.scroll.x;
		point.y = this._point.y + Camera.scroll.y;
		return point;
	}
	,updateCursor: function() {
		if(this._updateCursorContainer) {
			this._cursorContainer.set_x(this._globalScreenPosition.x);
			this._cursorContainer.set_y(this._globalScreenPosition.y);
		}
		var camera = org.flixel.FlxG.camera;
		this.screenX = Math.floor((this._globalScreenPosition.x - camera.x) / camera.zoom);
		this.screenY = Math.floor((this._globalScreenPosition.y - camera.y) / camera.zoom);
		this.x = this.screenX + camera.scroll.x;
		this.y = this.screenY + camera.scroll.y;
	}
	,update: function() {
		if(this._updateCursorContainer) {
			var X = Math.floor(org.flixel.FlxG._game.get_mouseX());
			var Y = Math.floor(org.flixel.FlxG._game.get_mouseY());
			this._globalScreenPosition.x = X;
			this._globalScreenPosition.y = Y;
			this.updateCursor();
			if(this._last == -1 && this._current == -1) this._current = 0; else if(this._last == 2 && this._current == 2) this._current = 1; else if(this._last == -2 && this._current == -2) this._current = 0;
			this._last = this._current;
		}
	}
	,unload: function() {
		if(this._cursor != null) {
			if(this._cursorContainer.get_visible()) this.load(); else {
				this._cursorContainer.removeChild(this._cursor);
				this._cursor = null;
			}
		}
	}
	,load: function(Graphic,Scale,XOffset,YOffset) {
		if(YOffset == null) YOffset = 0;
		if(XOffset == null) XOffset = 0;
		if(Scale == null) Scale = 1;
		if(this._cursor != null) this._cursorContainer.removeChild(this._cursor);
		if(Graphic == null) Graphic = org.flixel.FlxAssets.imgDefaultCursor;
		if(js.Boot.__instanceof(Graphic,Class)) this._cursor = Type.createInstance(Graphic,[]); else if(js.Boot.__instanceof(Graphic,browser.display.BitmapData)) this._cursor = new browser.display.Bitmap(js.Boot.__cast(Graphic , browser.display.BitmapData)); else if(js.Boot.__instanceof(Graphic,String)) this._cursor = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(Graphic)); else this._cursor = new browser.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgDefaultCursor));
		this._cursor.set_x(XOffset);
		this._cursor.set_y(YOffset);
		this._cursor.set_scaleX(Scale);
		this._cursor.set_scaleY(Scale);
		this._cursorContainer.addChild(this._cursor);
	}
	,get_visible: function() {
		return this._updateCursorContainer;
	}
	,hide: function() {
		this._updateCursorContainer = false;
		this._cursorContainer.set_visible(false);
	}
	,show: function(Graphic,Scale,XOffset,YOffset) {
		if(YOffset == null) YOffset = 0;
		if(XOffset == null) XOffset = 0;
		if(Scale == null) Scale = 1;
		this._updateCursorContainer = true;
		this._cursorContainer.set_visible(true);
		if(Graphic != null) this.load(Graphic,Scale,XOffset,YOffset); else if(this._cursor == null) this.load();
		if(this.useSystemCursor) browser.ui.Mouse.show();
	}
	,destroy: function() {
		this._cursorContainer = null;
		this._cursor = null;
		this._point = null;
		this._globalScreenPosition = null;
	}
	,onMouseWheel: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp && org.flixel.FlxG._game._debugger.hasMouse || org.flixel.FlxG._game._replaying) return;
		this.wheel = FlashEvent.delta;
	}
	,onMouseUp: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp && org.flixel.FlxG._game._debugger.hasMouse || org.flixel.FlxG._game._replaying) return;
		if(this._current > 0) this._current = -1; else if(this._current == -2) this._current == -2; else this._current = 0;
	}
	,onMouseDown: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp) {
			if(org.flixel.FlxG._game._debugger.hasMouse) return;
			if(org.flixel.FlxG._game._debugger.watch.editing) org.flixel.FlxG._game._debugger.watch.submit();
		}
		if(org.flixel.FlxG._game._replaying && org.flixel.FlxG._game._replayCancelKeys != null) {
			var replayCancelKey;
			var i = 0;
			var l = org.flixel.FlxG._game._replayCancelKeys.length;
			while(i < l) {
				replayCancelKey = org.flixel.FlxG._game._replayCancelKeys[i++];
				if(replayCancelKey == "MOUSE" || replayCancelKey == "ANY") {
					if(org.flixel.FlxG._game._replayCallback != null) {
						org.flixel.FlxG._game._replayCallback();
						org.flixel.FlxG._game._replayCallback = null;
					} else org.flixel.FlxG.stopReplay();
					break;
				}
			}
			return;
		}
		if(this._current > 0) this._current = 1; else this._current = 2;
	}
	,useSystemCursor: null
	,_globalScreenPosition: null
	,_point: null
	,_lastWheel: null
	,_lastY: null
	,_lastX: null
	,_cursor: null
	,_updateCursorContainer: null
	,_cursorContainer: null
	,_last: null
	,_current: null
	,visible: null
	,screenY: null
	,screenX: null
	,wheel: null
	,__class__: org.flixel.system.input.FlxMouse
	,__properties__: {get_visible:"get_visible",set_useSystemCursor:"set_systemCursor"}
});
org.flixel.system.input.FlxTouch = function(X,Y,PointID) {
	if(PointID == null) PointID = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	org.flixel.FlxPoint.call(this);
	this.screenX = 0;
	this.screenY = 0;
	this._current = 0;
	this._last = 0;
	this._point = new org.flixel.FlxPoint();
	this._globalScreenPosition = new org.flixel.FlxPoint();
	this._flashPoint = new browser.geom.Point();
	this.updateTouchPosition(X,Y);
	this._touchPointID = PointID;
};
$hxClasses["org.flixel.system.input.FlxTouch"] = org.flixel.system.input.FlxTouch;
org.flixel.system.input.FlxTouch.__name__ = ["org","flixel","system","input","FlxTouch"];
org.flixel.system.input.FlxTouch.__super__ = org.flixel.FlxPoint;
org.flixel.system.input.FlxTouch.prototype = $extend(org.flixel.FlxPoint.prototype,{
	isActive: function() {
		return this._current != 0;
	}
	,justReleased: function() {
		return this._current == -1;
	}
	,justPressed: function() {
		return this._current == 2;
	}
	,pressed: function() {
		return this._current > 0;
	}
	,deactivate: function() {
		this._current = 0;
		this._last = 0;
	}
	,reset: function(X,Y,PointID) {
		this.updateTouchPosition(X,Y);
		this._touchPointID = PointID;
		this._current = 0;
		this._last = 0;
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		if(point == null) point = new org.flixel.FlxPoint();
		point.x = (this._globalScreenPosition.x - Camera.x) / Camera.zoom;
		point.y = (this._globalScreenPosition.y - Camera.y) / Camera.zoom;
		return point;
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		if(point == null) point = new org.flixel.FlxPoint();
		this.getScreenPosition(Camera,this._point);
		point.x = this._point.x + Camera.scroll.x;
		point.y = this._point.y + Camera.scroll.y;
		return point;
	}
	,updateCursor: function() {
		var camera = org.flixel.FlxG.camera;
		this.screenX = Math.floor((this._globalScreenPosition.x - camera.x) / camera.zoom);
		this.screenY = Math.floor((this._globalScreenPosition.y - camera.y) / camera.zoom);
		this.x = this.screenX + camera.scroll.x;
		this.y = this.screenY + camera.scroll.y;
	}
	,updateTouchPosition: function(X,Y) {
		this._flashPoint.x = X;
		this._flashPoint.y = Y;
		this._flashPoint = org.flixel.FlxG._game.globalToLocal(this._flashPoint);
		this._globalScreenPosition.x = this._flashPoint.x;
		this._globalScreenPosition.y = this._flashPoint.y;
		this.updateCursor();
	}
	,update: function() {
		if(this._last == -1 && this._current == -1) this._current = 0; else if(this._last == 2 && this._current == 2) this._current = 1;
		this._last = this._current;
	}
	,get_touchPointID: function() {
		return this._touchPointID;
	}
	,touchPointID: null
	,destroy: function() {
		this._point = null;
		this._globalScreenPosition = null;
		this._flashPoint = null;
	}
	,_flashPoint: null
	,_globalScreenPosition: null
	,_point: null
	,_last: null
	,_current: null
	,screenY: null
	,screenX: null
	,_touchPointID: null
	,__class__: org.flixel.system.input.FlxTouch
	,__properties__: {get_touchPointID:"get_touchPointID"}
});
org.flixel.system.input.FlxTouchManager = function() {
	this.touches = new Array();
	this._inactiveTouches = new Array();
	this._touchesCache = new IntHash();
	org.flixel.system.input.FlxTouchManager.maxTouchPoints = browser.ui.Multitouch.maxTouchPoints;
	browser.ui.Multitouch.set_inputMode(browser.ui.MultitouchInputMode.TOUCH_POINT);
	org.flixel.FlxG.supportsTouchEvents = true;
	nme.Lib.get_current().get_stage().addEventListener("touchBegin",$bind(this,this.handleTouchBegin));
	nme.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.handleTouchEnd));
	nme.Lib.get_current().get_stage().addEventListener("touchMove",$bind(this,this.handleTouchMove));
};
$hxClasses["org.flixel.system.input.FlxTouchManager"] = org.flixel.system.input.FlxTouchManager;
org.flixel.system.input.FlxTouchManager.__name__ = ["org","flixel","system","input","FlxTouchManager"];
org.flixel.system.input.FlxTouchManager.__interfaces__ = [org.flixel.system.input.IFlxInput];
org.flixel.system.input.FlxTouchManager.prototype = {
	toString: function() {
		return "FlxTouchManager";
	}
	,onFocusLost: function() {
		this.reset();
	}
	,onFocus: function() {
	}
	,recycle: function(X,Y,PointID) {
		if(this._inactiveTouches.length > 0) {
			var touch = this._inactiveTouches.pop();
			touch.reset(X,Y,PointID);
			return this.add(touch);
		}
		return this.add(new org.flixel.system.input.FlxTouch(X,Y,PointID));
	}
	,add: function(touch) {
		this.touches.push(touch);
		this._touchesCache.set(touch.get_touchPointID(),touch);
		return touch;
	}
	,justReleasedTouches: function(TouchArray) {
		if(TouchArray == null) TouchArray = new Array();
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0, _g1 = this.touches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == -1) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,justStartedTouches: function(TouchArray) {
		if(TouchArray == null) TouchArray = new Array();
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0, _g1 = this.touches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == 2) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,handleTouchMove: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) touch.updateTouchPosition(FlashEvent.stageX,FlashEvent.stageY);
	}
	,handleTouchEnd: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) {
			if(touch._current > 0) touch._current = -1; else touch._current = 0;
		}
	}
	,handleTouchBegin: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) {
			if(touch._current > 0) touch._current = 1; else touch._current = 2;
		} else {
			touch = this.recycle(FlashEvent.stageX,FlashEvent.stageY,FlashEvent.touchPointID);
			touch._current = 2;
		}
	}
	,reset: function() {
		var $it0 = this._touchesCache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this._touchesCache.remove(key);
		}
		var _g = 0, _g1 = this.touches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.deactivate();
			this._inactiveTouches.push(touch);
		}
		this.touches.splice(0,this.touches.length);
	}
	,update: function() {
		var i = this.touches.length - 1;
		var touch;
		while(i >= 0) {
			touch = this.touches[i];
			if(touch._current == 0) {
				touch.deactivate();
				this._touchesCache.remove(touch.get_touchPointID());
				this.touches.splice(i,1);
				this._inactiveTouches.push(touch);
			} else touch.update();
			i--;
		}
	}
	,destroy: function() {
		var _g = 0, _g1 = this.touches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.destroy();
		}
		this.touches = null;
		var _g = 0, _g1 = this._inactiveTouches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.destroy();
		}
		this._inactiveTouches = null;
		this._touchesCache = null;
	}
	,getFirstTouch: function() {
		if(this.touches[0] != null) return this.touches[0]; else return null;
	}
	,_touchesCache: null
	,_inactiveTouches: null
	,touches: null
	,__class__: org.flixel.system.input.FlxTouchManager
}
org.flixel.system.layer = {}
org.flixel.system.layer.Atlas = function(name,width,height,borderX,borderY,bitmapData) {
	if(borderY == null) borderY = 1;
	if(borderX == null) borderX = 1;
	this.nodes = new Hash();
	this.name = name;
	if(bitmapData == null) {
		this.root = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(0,0,width,height));
		this.atlasBitmapData = new browser.display.BitmapData(width,height,true,0);
		this._fromBitmapData = false;
	} else {
		this.root = new org.flixel.system.layer.Node(this,bitmapData.rect,bitmapData,name);
		this.atlasBitmapData = bitmapData;
		this.nodes.set(name,this.root);
		this._fromBitmapData = true;
	}
	this.borderX = borderX;
	this.borderY = borderY;
	this._tileSheetData = this.createTileSheetData(this.atlasBitmapData);
	org.flixel.system.layer.Atlas._atlasCache.set(name,this);
};
$hxClasses["org.flixel.system.layer.Atlas"] = org.flixel.system.layer.Atlas;
org.flixel.system.layer.Atlas.__name__ = ["org","flixel","system","layer","Atlas"];
org.flixel.system.layer.Atlas.isExists = function(key) {
	return org.flixel.system.layer.Atlas._atlasCache.exists(key);
}
org.flixel.system.layer.Atlas.getAtlas = function(Key,BmData,Unique) {
	if(Unique == null) Unique = false;
	var alreadyExist = org.flixel.system.layer.Atlas.isExists(Key);
	if(!Unique && alreadyExist) return org.flixel.system.layer.Atlas._atlasCache.get(Key);
	var AtlasKey = Key;
	if(Unique && alreadyExist) AtlasKey = org.flixel.system.layer.Atlas.getUniqueKey(Key);
	var atlas = new org.flixel.system.layer.Atlas(AtlasKey,BmData._nmeTextureBuffer != null?BmData._nmeTextureBuffer.width:0,BmData._nmeTextureBuffer != null?BmData._nmeTextureBuffer.height:0,1,1,BmData);
	return atlas;
}
org.flixel.system.layer.Atlas.getUniqueKey = function(Key) {
	if(!org.flixel.system.layer.Atlas._atlasCache.exists(Key)) return Key;
	var AtlasKey = Key;
	var i = 1;
	while(org.flixel.system.layer.Atlas._atlasCache.exists(Key + i)) i++;
	AtlasKey = Key + i;
	return AtlasKey;
}
org.flixel.system.layer.Atlas.removeAtlas = function(atlas,destroy) {
	if(destroy == null) destroy = false;
	var currAtlas;
	var $it0 = org.flixel.system.layer.Atlas._atlasCache.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		currAtlas = org.flixel.system.layer.Atlas._atlasCache.get(key);
		if(currAtlas == atlas) {
			org.flixel.system.layer.Atlas._atlasCache.remove(key);
			if(destroy) atlas.destroy();
			return;
		}
	}
}
org.flixel.system.layer.Atlas.clearAtlasCache = function() {
	var atlas;
	var $it0 = org.flixel.system.layer.Atlas._atlasCache.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		atlas = org.flixel.system.layer.Atlas._atlasCache.get(key);
		org.flixel.system.layer.Atlas._atlasCache.remove(key);
		atlas.destroy();
	}
}
org.flixel.system.layer.Atlas.prototype = {
	findNodeToInsert: function(insertWidth,insertHeight) {
		var stack = new Array();
		var current = this.root;
		while(true) {
			if(current.get_isEmpty() && current.canPlace(insertWidth,insertHeight)) return current;
			if(current.right != null && current.right.canPlace(insertWidth,insertHeight) && current.left != null && current.left.canPlace(insertWidth,insertHeight)) {
				stack.push(current.right);
				current = current.left;
			} else if(current.left != null && current.left.canPlace(insertWidth,insertHeight)) current = current.left; else if(current.right != null && current.right.canPlace(insertWidth,insertHeight)) current = current.right; else if(stack.length > 0) current = stack.pop(); else return null;
		}
		return null;
	}
	,deleteSubtree: function(node) {
		if(node != null) {
			if(node.left != null) this.deleteSubtree(node.left);
			if(node.right != null) this.deleteSubtree(node.right);
			node.destroy();
		}
	}
	,clone: function(cloneName) {
		if(this._fromBitmapData) return null;
		var atlasKey = org.flixel.system.layer.Atlas.getUniqueKey(cloneName);
		var cloneAtlas = new org.flixel.system.layer.Atlas(cloneName,this.get_width(),this.get_height(),this.borderX,this.borderY);
		cloneAtlas.createQueue();
		var $it0 = this.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			cloneAtlas.addToQueue(node.item,node.key);
		}
		cloneAtlas.generateAtlasFromQueue();
		return cloneAtlas;
	}
	,clearAndFillWith: function(bmd) {
		this.deleteSubtree(this.root);
		this.nodes = new Hash();
		org.flixel.system.layer.TileSheetData.removeTileSheet(this._tileSheetData);
		if(!this._fromBitmapData) this.atlasBitmapData.dispose();
		this.root = new org.flixel.system.layer.Node(this,bmd.rect,bmd,this.name);
		this.atlasBitmapData = bmd;
		this.nodes.set(this.name,this.root);
		this._fromBitmapData = true;
		this._tileSheetData = org.flixel.system.layer.TileSheetData.addTileSheet(this.atlasBitmapData);
		return this.root;
	}
	,clear: function() {
		var rootWidth = this.root.get_width();
		var rootHeight = this.root.get_height();
		this.deleteSubtree(this.root);
		this.root = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(0,0,rootWidth,rootHeight));
		this.atlasBitmapData.fillRect(this.root.rect,0);
		this.nodes = new Hash();
	}
	,destroy: function() {
		this.tempStorage = null;
		this.deleteSubtree(this.root);
		this.root = null;
		if(!this._fromBitmapData && this.atlasBitmapData != null) this.atlasBitmapData.dispose();
		this.atlasBitmapData = null;
		this._tileSheetData = null;
		this.nodes = null;
	}
	,generateAtlasFromQueue: function() {
		if(this.tempStorage != null) {
			var bitmaps = new Array();
			var keys = new Array();
			var _g = 0, _g1 = this.tempStorage;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				bitmaps.push(obj.bmd);
				keys.push(obj.keyStr);
			}
			this.addNodes(bitmaps,keys);
			this.tempStorage = null;
		}
	}
	,addToQueue: function(data,key) {
		if(this.tempStorage == null) this.tempStorage = new Array();
		this.tempStorage.push({ bmd : data, keyStr : key});
	}
	,createQueue: function() {
		this.tempStorage = new Array();
	}
	,bitmapSorter: function(bmd1,bmd2) {
		if((bmd2._nmeTextureBuffer != null?bmd2._nmeTextureBuffer.width:0) == (bmd1._nmeTextureBuffer != null?bmd1._nmeTextureBuffer.width:0)) {
			if((bmd2._nmeTextureBuffer != null?bmd2._nmeTextureBuffer.height:0) == (bmd1._nmeTextureBuffer != null?bmd1._nmeTextureBuffer.height:0)) return 0; else if((bmd2._nmeTextureBuffer != null?bmd2._nmeTextureBuffer.height:0) > (bmd1._nmeTextureBuffer != null?bmd1._nmeTextureBuffer.height:0)) return 1; else return -1;
		}
		if((bmd2._nmeTextureBuffer != null?bmd2._nmeTextureBuffer.width:0) > (bmd1._nmeTextureBuffer != null?bmd1._nmeTextureBuffer.width:0)) return 1;
		return -1;
	}
	,indexOf: function(bitmaps,bmd) {
		var _g1 = 0, _g = bitmaps.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(bitmaps[i] == bmd) return i;
		}
		return -1;
	}
	,addNodes: function(bitmaps,keys) {
		var numKeys = keys.length;
		var numBitmaps = bitmaps.length;
		if(numBitmaps != numKeys) return false;
		var sortedBitmaps = bitmaps.slice(0,bitmaps.length);
		sortedBitmaps.sort($bind(this,this.bitmapSorter));
		var node;
		var result = true;
		var index;
		var _g1 = 0, _g = numBitmaps;
		while(_g1 < _g) {
			var i = _g1++;
			index = this.indexOf(bitmaps,sortedBitmaps[i]);
			node = this.addNode(sortedBitmaps[i],keys[index]);
			if(node == null) result = false;
		}
		return result;
	}
	,getNodeByBitmap: function(bitmap) {
		var $it0 = this.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(node.item == bitmap) return node;
		}
		return null;
	}
	,getNodeByKey: function(key) {
		if(this.hasNodeWithName(key) == true) return this.nodes.get(key);
		return null;
	}
	,hasNodeWithName: function(nodeName) {
		return this.nodes.exists(nodeName);
	}
	,get_height: function() {
		return this.root.get_height();
	}
	,height: null
	,get_width: function() {
		return this.root.get_width();
	}
	,width: null
	,addNode: function(data,key) {
		if(this.hasNodeWithName(key) == true) return this.nodes.get(key);
		if(this.root.canPlace(data._nmeTextureBuffer != null?data._nmeTextureBuffer.width:0,data._nmeTextureBuffer != null?data._nmeTextureBuffer.height:0) == false) return null;
		var insertWidth = (data._nmeTextureBuffer != null?data._nmeTextureBuffer.width:0) == this.get_width()?data._nmeTextureBuffer != null?data._nmeTextureBuffer.width:0:(data._nmeTextureBuffer != null?data._nmeTextureBuffer.width:0) + this.borderX;
		var insertHeight = (data._nmeTextureBuffer != null?data._nmeTextureBuffer.height:0) == this.get_height()?data._nmeTextureBuffer != null?data._nmeTextureBuffer.height:0:(data._nmeTextureBuffer != null?data._nmeTextureBuffer.height:0) + this.borderY;
		var nodeToInsert = this.findNodeToInsert(insertWidth,insertHeight);
		if(nodeToInsert != null) {
			var firstChild;
			var secondChild;
			var firstGrandChild;
			var secondGrandChild;
			var dw = nodeToInsert.get_width() - insertWidth;
			var dh = nodeToInsert.get_height() - insertHeight;
			if(dw > dh) {
				firstChild = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(nodeToInsert.get_x(),nodeToInsert.get_y(),insertWidth,nodeToInsert.get_height()));
				secondChild = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(nodeToInsert.get_x() + insertWidth,nodeToInsert.get_y(),nodeToInsert.get_width() - insertWidth,nodeToInsert.get_height()));
				firstGrandChild = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(firstChild.get_x(),firstChild.get_y(),insertWidth,insertHeight),data,key);
				secondGrandChild = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(firstChild.get_x(),firstChild.get_y() + insertHeight,insertWidth,firstChild.get_height() - insertHeight));
			} else {
				firstChild = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(nodeToInsert.get_x(),nodeToInsert.get_y(),nodeToInsert.get_width(),insertHeight));
				secondChild = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(nodeToInsert.get_x(),nodeToInsert.get_y() + insertHeight,nodeToInsert.get_width(),nodeToInsert.get_height() - insertHeight));
				firstGrandChild = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(firstChild.get_x(),firstChild.get_y(),insertWidth,insertHeight),data,key);
				secondGrandChild = new org.flixel.system.layer.Node(this,new browser.geom.Rectangle(firstChild.get_x() + insertWidth,firstChild.get_y(),firstChild.get_width() - insertWidth,insertHeight));
			}
			firstChild.left = firstGrandChild;
			firstChild.right = secondGrandChild;
			nodeToInsert.left = firstChild;
			nodeToInsert.right = secondChild;
			this.atlasBitmapData.copyPixels(data,data.rect,firstGrandChild.point);
			this.nodes.set(key,firstGrandChild);
			return firstGrandChild;
		}
		return null;
	}
	,resize: function(newWidth,newHeight) {
		this.root.rect.width = newWidth;
		this.root.rect.height = newHeight;
		this.atlasBitmapData.dispose();
		this.atlasBitmapData = new browser.display.BitmapData(newWidth,newHeight,true,0);
		this.rebuildAtlas();
	}
	,redrawAll: function() {
		this.atlasBitmapData.fillRect(this.atlasBitmapData.rect,0);
		var $it0 = this.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			this.atlasBitmapData.copyPixels(node.item,node.rect,node.point);
		}
	}
	,redrawNode: function(node) {
		if(this.hasNodeWithName(node.key) && this.atlasBitmapData != node.item) {
			this.atlasBitmapData.fillRect(node.rect,0);
			this.atlasBitmapData.copyPixels(node.item,node.rect,node.point);
		}
	}
	,rebuildAtlas: function() {
		this.createQueue();
		var $it0 = this.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			this.addToQueue(node.item,node.key);
		}
		this.clear();
		this.generateAtlasFromQueue();
	}
	,createTileSheetData: function(bitmapData) {
		return org.flixel.system.layer.TileSheetData.addTileSheet(bitmapData);
	}
	,_fromBitmapData: null
	,_tileSheetData: null
	,borderY: null
	,borderX: null
	,atlasBitmapData: null
	,nodes: null
	,name: null
	,root: null
	,tempStorage: null
	,__class__: org.flixel.system.layer.Atlas
	,__properties__: {get_width:"get_width",get_height:"get_height"}
}
org.flixel.system.layer.DrawStackItem = function() {
	this.initialized = false;
	this.useAlpha = false;
	this.position = 0;
	this.drawData = new Array();
};
$hxClasses["org.flixel.system.layer.DrawStackItem"] = org.flixel.system.layer.DrawStackItem;
org.flixel.system.layer.DrawStackItem.__name__ = ["org","flixel","system","layer","DrawStackItem"];
org.flixel.system.layer.DrawStackItem.prototype = {
	dispose: function() {
		this.atlas = null;
		this.drawData = null;
		this.next = null;
	}
	,reset: function() {
		this.atlas = null;
		this.initialized = false;
		this.position = 0;
	}
	,initialized: null
	,useAlpha: null
	,next: null
	,position: null
	,drawData: null
	,atlas: null
	,__class__: org.flixel.system.layer.DrawStackItem
}
org.flixel.system.layer.Node = function(atlas,rect,item,key) {
	if(key == null) key = "";
	this.atlas = atlas;
	this.item = item;
	this.left = null;
	this.right = null;
	this.rect = rect;
	this.point = new browser.geom.Point(rect.x,rect.y);
	this.key = key;
};
$hxClasses["org.flixel.system.layer.Node"] = org.flixel.system.layer.Node;
org.flixel.system.layer.Node.__name__ = ["org","flixel","system","layer","Node"];
org.flixel.system.layer.Node.prototype = {
	destroy: function() {
		this.atlas = null;
		this.item = null;
		this.left = null;
		this.right = null;
		this.rect = null;
		this.point = null;
	}
	,addTileRect: function(tileRect,point) {
		tileRect.x += this.get_x();
		tileRect.y += this.get_y();
		return this.atlas._tileSheetData.addTileRect(tileRect,point);
	}
	,addSpriteFramesData: function(frameWidth,frameHeight,origin,startX,startY,endX,endY,xSpacing,ySpacing) {
		if(ySpacing == null) ySpacing = 0;
		if(xSpacing == null) xSpacing = 0;
		if(endY == null) endY = 0;
		if(endX == null) endX = 0;
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		if(endX == 0) endX += this.item.get_width();
		if(endY == 0) endY += this.item.get_height();
		return this.atlas._tileSheetData.addSpriteFramesData(frameWidth,frameHeight,origin,startX + this.get_x(),startY + this.get_y(),endX + this.get_x(),endY + this.get_y(),xSpacing,ySpacing);
	}
	,get_height: function() {
		return this.rect.height | 0;
	}
	,get_width: function() {
		return this.rect.width | 0;
	}
	,get_y: function() {
		return this.rect.y | 0;
	}
	,get_x: function() {
		return this.rect.x | 0;
	}
	,height: null
	,width: null
	,y: null
	,x: null
	,canPlace: function(width,height) {
		return this.rect.width >= width && this.rect.height >= height;
	}
	,get_isEmpty: function() {
		return this.item == null && this.left == null && this.right == null;
	}
	,isEmpty: null
	,key: null
	,point: null
	,rect: null
	,right: null
	,left: null
	,item: null
	,atlas: null
	,__class__: org.flixel.system.layer.Node
	,__properties__: {get_isEmpty:"get_isEmpty",get_x:"get_x",get_y:"get_y",get_width:"get_width",get_height:"get_height"}
}
org.flixel.system.layer.TileSheetData = function(tileSheet) {
	this.tileSheet = tileSheet;
	this.pairsData = new Array();
	this.flxSpriteFrames = new Hash();
};
$hxClasses["org.flixel.system.layer.TileSheetData"] = org.flixel.system.layer.TileSheetData;
org.flixel.system.layer.TileSheetData.__name__ = ["org","flixel","system","layer","TileSheetData"];
org.flixel.system.layer.TileSheetData.addTileSheet = function(bitmapData) {
	var tempTileSheetData;
	if(org.flixel.system.layer.TileSheetData.containsTileSheet(bitmapData)) {
		tempTileSheetData = org.flixel.system.layer.TileSheetData.getTileSheet(bitmapData);
		return org.flixel.system.layer.TileSheetData.getTileSheet(bitmapData);
	}
	tempTileSheetData = new org.flixel.system.layer.TileSheetData(new browser.display.Tilesheet(bitmapData));
	org.flixel.system.layer.TileSheetData.tileSheetData.push(tempTileSheetData);
	return tempTileSheetData;
}
org.flixel.system.layer.TileSheetData.containsTileSheet = function(bitmapData) {
	var _g = 0, _g1 = org.flixel.system.layer.TileSheetData.tileSheetData;
	while(_g < _g1.length) {
		var tsd = _g1[_g];
		++_g;
		if(tsd.tileSheet.nmeBitmap == bitmapData) return true;
	}
	return false;
}
org.flixel.system.layer.TileSheetData.getTileSheet = function(bitmapData) {
	var _g = 0, _g1 = org.flixel.system.layer.TileSheetData.tileSheetData;
	while(_g < _g1.length) {
		var tsd = _g1[_g];
		++_g;
		if(tsd.tileSheet.nmeBitmap == bitmapData) return tsd;
	}
	return null;
}
org.flixel.system.layer.TileSheetData.removeTileSheet = function(tileSheetObj) {
	var _g1 = 0, _g = org.flixel.system.layer.TileSheetData.tileSheetData.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(org.flixel.system.layer.TileSheetData.tileSheetData[i] == tileSheetObj) {
			org.flixel.system.layer.TileSheetData.tileSheetData[i] = org.flixel.system.layer.TileSheetData.tileSheetData[org.flixel.system.layer.TileSheetData.tileSheetData.length - 1];
			org.flixel.system.layer.TileSheetData.tileSheetData.pop();
			tileSheetObj.destroy();
			return;
		}
	}
}
org.flixel.system.layer.TileSheetData.clear = function() {
	var _g = 0, _g1 = org.flixel.system.layer.TileSheetData.tileSheetData;
	while(_g < _g1.length) {
		var dataObject = _g1[_g];
		++_g;
		dataObject.destroy();
	}
	org.flixel.system.layer.TileSheetData.tileSheetData = new Array();
}
org.flixel.system.layer.TileSheetData.prototype = {
	destroy: function() {
		this.tileSheet.nmeBitmap = null;
		this.tileSheet = null;
		var _g = 0, _g1 = this.pairsData;
		while(_g < _g1.length) {
			var pair = _g1[_g];
			++_g;
			pair.destroy();
		}
		this.pairsData = null;
		var $it0 = this.flxSpriteFrames.iterator();
		while( $it0.hasNext() ) {
			var spriteData = $it0.next();
			spriteData.destroy();
		}
		this.flxSpriteFrames = null;
	}
	,getTileRectID: function(rect,point) {
		var pair;
		var _g1 = 0, _g = this.pairsData.length;
		while(_g1 < _g) {
			var i = _g1++;
			pair = this.pairsData[i];
			if(pair.rect.equals(rect)) {
				if(pair.point != null && point != null && pair.point.equals(point)) return i; else if(pair.point == null && point == null) return i;
			}
		}
		return -1;
	}
	,containsTileRect: function(rect,point) {
		var _g = 0, _g1 = this.pairsData;
		while(_g < _g1.length) {
			var pair = _g1[_g];
			++_g;
			if(pair.rect.equals(rect)) {
				if(pair.point != null && point != null && pair.point.equals(point)) return true; else if(pair.point == null && point == null) return true;
			}
		}
		return false;
	}
	,addTileRect: function(rect,point) {
		if(this.containsTileRect(rect,point)) return this.getTileRectID(rect,point);
		this.tileSheet.addTileRect(rect,point);
		this.pairsData.push(new org.flixel.system.layer.RectanglePointPair(rect,point));
		return this.pairsData.length - 1;
	}
	,getKeyforSpriteFrameData: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		return width + "_" + height + "_" + startX + "_" + startY + "_" + endX + "_" + endY + "_" + xSpacing + "_" + ySpacing + "_" + pointX + "_" + pointY;
	}
	,containsSpriteFrameData: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		var key = this.getKeyforSpriteFrameData(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY);
		return this.flxSpriteFrames.exists(key);
	}
	,addSpriteFramesData: function(width,height,origin,startX,startY,endX,endY,xSpacing,ySpacing) {
		if(ySpacing == null) ySpacing = 0;
		if(xSpacing == null) xSpacing = 0;
		if(endY == null) endY = 0;
		if(endX == null) endX = 0;
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		var bitmapWidth = this.tileSheet.nmeBitmap.get_width();
		var bitmapHeight = this.tileSheet.nmeBitmap.get_height();
		if(endX == 0) endX = bitmapWidth;
		if(endY == 0) endY = bitmapHeight;
		var pointX = 0.5 * width;
		var pointY = 0.5 * height;
		if(origin != null) {
			pointX = origin.x;
			pointY = origin.y;
		}
		var key = this.getKeyforSpriteFrameData(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY);
		if(this.flxSpriteFrames.exists(key)) return this.flxSpriteFrames.get(key);
		var numRows = (endY - startY) / (height + ySpacing) | 0;
		var numCols = (endX - startX) / (width + xSpacing) | 0;
		var tempPoint = origin;
		if(origin == null) tempPoint = new browser.geom.Point(pointX,pointY);
		var spriteData = new org.flixel.system.layer.FlxSpriteFrames(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY);
		var tempRect;
		var tileID;
		var spacedWidth = width + xSpacing;
		var spacedHeight = height + ySpacing;
		var _g1 = 0, _g = numRows;
		while(_g1 < _g) {
			var j = _g1++;
			var _g3 = 0, _g2 = numCols;
			while(_g3 < _g2) {
				var i = _g3++;
				tempRect = new browser.geom.Rectangle(startX + i * spacedWidth,startY + j * spacedHeight,width,height);
				tileID = this.addTileRect(tempRect,tempPoint);
				spriteData.frameIDs.push(tileID);
			}
		}
		spriteData.halfFrameNumber = 0.5 * spriteData.frameIDs.length | 0;
		this.flxSpriteFrames.set(key,spriteData);
		return spriteData;
	}
	,flxSpriteFrames: null
	,pairsData: null
	,tileSheet: null
	,__class__: org.flixel.system.layer.TileSheetData
}
org.flixel.system.layer.FlxSpriteFrames = function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
	this.width = width;
	this.height = height;
	this.startX = startX;
	this.startY = startY;
	this.endX = endX;
	this.endY = endY;
	this.xSpacing = xSpacing;
	this.ySpacing = ySpacing;
	this.pointX = pointX;
	this.pointY = pointY;
	this.frameIDs = [];
	this.halfFrameNumber = 0;
};
$hxClasses["org.flixel.system.layer.FlxSpriteFrames"] = org.flixel.system.layer.FlxSpriteFrames;
org.flixel.system.layer.FlxSpriteFrames.__name__ = ["org","flixel","system","layer","FlxSpriteFrames"];
org.flixel.system.layer.FlxSpriteFrames.prototype = {
	destroy: function() {
		this.frameIDs = null;
	}
	,pointY: null
	,pointX: null
	,ySpacing: null
	,xSpacing: null
	,endY: null
	,endX: null
	,startY: null
	,startX: null
	,halfFrameNumber: null
	,frameIDs: null
	,height: null
	,width: null
	,__class__: org.flixel.system.layer.FlxSpriteFrames
}
org.flixel.system.layer.RectanglePointPair = function(rect,point) {
	this.rect = rect;
	this.point = point;
};
$hxClasses["org.flixel.system.layer.RectanglePointPair"] = org.flixel.system.layer.RectanglePointPair;
org.flixel.system.layer.RectanglePointPair.__name__ = ["org","flixel","system","layer","RectanglePointPair"];
org.flixel.system.layer.RectanglePointPair.prototype = {
	destroy: function() {
		this.rect = null;
		this.point = null;
	}
	,point: null
	,rect: null
	,__class__: org.flixel.system.layer.RectanglePointPair
}
org.flixel.system.replay = {}
org.flixel.system.replay.CodeValuePair = function(code,value) {
	if(value == null) value = 0;
	if(code == null) code = 0;
	this.code = code;
	this.value = value;
};
$hxClasses["org.flixel.system.replay.CodeValuePair"] = org.flixel.system.replay.CodeValuePair;
org.flixel.system.replay.CodeValuePair.__name__ = ["org","flixel","system","replay","CodeValuePair"];
org.flixel.system.replay.CodeValuePair.prototype = {
	value: null
	,code: null
	,__class__: org.flixel.system.replay.CodeValuePair
}
org.flixel.system.replay.FrameRecord = function() {
	this.frame = 0;
	this.keys = null;
	this.mouse = null;
};
$hxClasses["org.flixel.system.replay.FrameRecord"] = org.flixel.system.replay.FrameRecord;
org.flixel.system.replay.FrameRecord.__name__ = ["org","flixel","system","replay","FrameRecord"];
org.flixel.system.replay.FrameRecord.prototype = {
	load: function(Data) {
		var i;
		var l;
		var array = Data.split("k");
		this.frame = Std.parseInt(array[0]);
		array = array[1].split("m");
		var keyData = array[0];
		var mouseData = array[1];
		if(keyData.length > 0) {
			array = keyData.split(",");
			var keyPair;
			i = 0;
			l = array.length;
			while(i < l) {
				keyPair = array[i++].split(":");
				if(keyPair.length == 2) {
					if(this.keys == null) this.keys = new Array();
					this.keys.push(new org.flixel.system.replay.CodeValuePair(Std.parseInt(keyPair[0]),Std.parseInt(keyPair[1])));
				}
			}
		}
		if(mouseData.length > 0) {
			array = mouseData.split(",");
			if(array.length >= 4) this.mouse = new org.flixel.system.replay.MouseRecord(Std.parseInt(array[0]),Std.parseInt(array[1]),Std.parseInt(array[2]),Std.parseInt(array[3]));
		}
		return this;
	}
	,save: function() {
		var output = this.frame + "k";
		if(this.keys != null) {
			var object;
			var i = 0;
			var l = this.keys.length;
			while(i < l) {
				if(i > 0) output += ",";
				object = this.keys[i++];
				output += object.code + ":" + object.value;
			}
		}
		output += "m";
		if(this.mouse != null) output += this.mouse.x + "," + this.mouse.y + "," + this.mouse.button + "," + this.mouse.wheel;
		return output;
	}
	,destroy: function() {
		this.keys = null;
		this.mouse = null;
	}
	,create: function(Frame,Keys,Mouse) {
		this.frame = Math.floor(Frame);
		this.keys = Keys;
		this.mouse = Mouse;
		return this;
	}
	,mouse: null
	,keys: null
	,frame: null
	,__class__: org.flixel.system.replay.FrameRecord
}
org.flixel.system.replay.MouseRecord = function(X,Y,Button,Wheel) {
	this.x = X;
	this.y = Y;
	this.button = Button;
	this.wheel = Wheel;
};
$hxClasses["org.flixel.system.replay.MouseRecord"] = org.flixel.system.replay.MouseRecord;
org.flixel.system.replay.MouseRecord.__name__ = ["org","flixel","system","replay","MouseRecord"];
org.flixel.system.replay.MouseRecord.prototype = {
	wheel: null
	,button: null
	,y: null
	,x: null
	,__class__: org.flixel.system.replay.MouseRecord
}
org.flixel.tweens = {}
org.flixel.tweens.FlxTween = function(duration,type,complete,ease) {
	if(type == null) type = 0;
	this._target = duration;
	if(type == 0) type = 1; else if(type == 16) type = 17;
	this._type = type;
	this.complete = complete;
	this._ease = ease;
	this._t = 0;
	this._backward = (this._type & 16) > 0;
};
$hxClasses["org.flixel.tweens.FlxTween"] = org.flixel.tweens.FlxTween;
org.flixel.tweens.FlxTween.__name__ = ["org","flixel","tweens","FlxTween"];
org.flixel.tweens.FlxTween.prototype = {
	_backward: null
	,_next: null
	,_prev: null
	,_parent: null
	,_finish: null
	,_target: null
	,_time: null
	,_t: null
	,_ease: null
	,_type: null
	,get_scale: function() {
		return this._t;
	}
	,scale: null
	,set_percent: function(value) {
		this._time = this._target * value;
		return this._time;
	}
	,get_percent: function() {
		return this._time / this._target;
	}
	,percent: null
	,finish: function() {
		if(this.complete != null) this.complete();
		switch(this._type & -17) {
		case 1:
			this._time = this._target;
			this.active = false;
			break;
		case 2:
			this._time %= this._target;
			this._t = this._time / this._target;
			if(this._ease != null && this._t > 0 && this._t < 1) this._t = this._ease(this._t);
			this.start();
			break;
		case 4:
			this._time %= this._target;
			this._t = this._time / this._target;
			if(this._ease != null && this._t > 0 && this._t < 1) this._t = this._ease(this._t);
			if(this._backward) this._t = 1 - this._t;
			this._backward = !this._backward;
			this.start();
			break;
		case 8:
			this._time = this._target;
			this.active = false;
			this._parent.removeTween(this,true);
			break;
		}
		this._finish = false;
	}
	,cancel: function() {
		this.active = false;
		if(this._parent != null) this._parent.removeTween(this);
	}
	,start: function() {
		this._time = 0;
		if(this._target == 0) {
			this.active = false;
			return;
		}
		this.active = true;
	}
	,update: function() {
		this._time += org.flixel.FlxG.elapsed;
		this._t = this._time / this._target;
		if(this._ease != null) this._t = this._ease(this._t);
		if(this._backward) this._t = 1 - this._t;
		if(this._time >= this._target) {
			if(!this._backward) this._t = 1; else this._t = 0;
			this._finish = true;
		}
	}
	,destroy: function() {
		this.complete = null;
		this._parent = null;
		this._ease = null;
	}
	,complete: null
	,active: null
	,__class__: org.flixel.tweens.FlxTween
	,__properties__: {set_percent:"set_percent",get_percent:"get_percent",get_scale:"get_scale"}
}
org.flixel.tweens.misc = {}
org.flixel.tweens.misc.MultiVarTween = function(complete,type) {
	if(type == null) type = 0;
	this._vars = new Array();
	this._start = new Array();
	this._range = new Array();
	org.flixel.tweens.FlxTween.call(this,0,type,complete);
};
$hxClasses["org.flixel.tweens.misc.MultiVarTween"] = org.flixel.tweens.misc.MultiVarTween;
org.flixel.tweens.misc.MultiVarTween.__name__ = ["org","flixel","tweens","misc","MultiVarTween"];
org.flixel.tweens.misc.MultiVarTween.__super__ = org.flixel.tweens.FlxTween;
org.flixel.tweens.misc.MultiVarTween.prototype = $extend(org.flixel.tweens.FlxTween.prototype,{
	_range: null
	,_start: null
	,_vars: null
	,_object: null
	,update: function() {
		org.flixel.tweens.FlxTween.prototype.update.call(this);
		var i = this._vars.length;
		while(i-- > 0) Reflect.setProperty(this._object,this._vars[i],this._start[i] + this._range[i] * this._t);
	}
	,tween: function(object,properties,duration,ease) {
		this._object = object;
		org.flixel.FlxU.SetArrayLength(this._vars,0);
		org.flixel.FlxU.SetArrayLength(this._start,0);
		org.flixel.FlxU.SetArrayLength(this._range,0);
		this._target = duration;
		this._ease = ease;
		var p;
		var fields = null;
		if(Reflect.isObject(properties)) fields = Reflect.fields(properties); else throw "Unsupported MultiVar properties container - use Object containing key/value pairs.";
		var _g = 0;
		while(_g < fields.length) {
			var p1 = fields[_g];
			++_g;
			if(!Reflect.hasField(object,p1)) throw "The Object does not have the property \"" + p1 + "\", or it is not accessible.";
			var a = Reflect.getProperty(object,p1);
			if(Math.isNaN(a)) throw "The property \"" + p1 + "\" is not numeric.";
			this._vars.push(p1);
			this._start.push(a);
			this._range.push(Reflect.getProperty(properties,p1) - a);
		}
		this.start();
	}
	,destroy: function() {
		org.flixel.tweens.FlxTween.prototype.destroy.call(this);
		this._object = null;
	}
	,__class__: org.flixel.tweens.misc.MultiVarTween
});
org.flixel.tweens.util = {}
org.flixel.tweens.util.Ease = function() { }
$hxClasses["org.flixel.tweens.util.Ease"] = org.flixel.tweens.util.Ease;
org.flixel.tweens.util.Ease.__name__ = ["org","flixel","tweens","util","Ease"];
org.flixel.tweens.util.Ease.quadIn = function(t) {
	return t * t;
}
org.flixel.tweens.util.Ease.quadOut = function(t) {
	return -t * (t - 2);
}
org.flixel.tweens.util.Ease.quadInOut = function(t) {
	return t <= .5?t * t * 2:1 - --t * t * 2;
}
org.flixel.tweens.util.Ease.cubeIn = function(t) {
	return t * t * t;
}
org.flixel.tweens.util.Ease.cubeOut = function(t) {
	return 1 + --t * t * t;
}
org.flixel.tweens.util.Ease.cubeInOut = function(t) {
	return t <= .5?t * t * t * 4:1 + --t * t * t * 4;
}
org.flixel.tweens.util.Ease.quartIn = function(t) {
	return t * t * t * t;
}
org.flixel.tweens.util.Ease.quartOut = function(t) {
	return 1 - (t -= 1) * t * t * t;
}
org.flixel.tweens.util.Ease.quartInOut = function(t) {
	return t <= .5?t * t * t * t * 8:(1 - (t = t * 2 - 2) * t * t * t) / 2 + .5;
}
org.flixel.tweens.util.Ease.quintIn = function(t) {
	return t * t * t * t * t;
}
org.flixel.tweens.util.Ease.quintOut = function(t) {
	return (t = t - 1) * t * t * t * t + 1;
}
org.flixel.tweens.util.Ease.quintInOut = function(t) {
	return (t *= 2) < 1?t * t * t * t * t / 2:((t -= 2) * t * t * t * t + 2) / 2;
}
org.flixel.tweens.util.Ease.sineIn = function(t) {
	return -Math.cos(Math.PI / 2 * t) + 1;
}
org.flixel.tweens.util.Ease.sineOut = function(t) {
	return Math.sin(Math.PI / 2 * t);
}
org.flixel.tweens.util.Ease.sineInOut = function(t) {
	return -Math.cos(Math.PI * t) / 2 + .5;
}
org.flixel.tweens.util.Ease.bounceIn = function(t) {
	t = 1 - t;
	if(t < 1 / 2.75) return 1 - 7.5625 * t * t;
	if(t < 2 / 2.75) return 1 - (7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75);
	if(t < 2.5 / 2.75) return 1 - (7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375);
	return 1 - (7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375);
}
org.flixel.tweens.util.Ease.bounceOut = function(t) {
	if(t < 1 / 2.75) return 7.5625 * t * t;
	if(t < 2 / 2.75) return 7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75;
	if(t < 2.5 / 2.75) return 7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375;
	return 7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375;
}
org.flixel.tweens.util.Ease.bounceInOut = function(t) {
	if(t < .5) {
		t = 1 - t * 2;
		if(t < 1 / 2.75) return (1 - 7.5625 * t * t) / 2;
		if(t < 2 / 2.75) return (1 - (7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75)) / 2;
		if(t < 2.5 / 2.75) return (1 - (7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375)) / 2;
		return (1 - (7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375)) / 2;
	}
	t = t * 2 - 1;
	if(t < 1 / 2.75) return 7.5625 * t * t / 2 + .5;
	if(t < 2 / 2.75) return (7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75) / 2 + .5;
	if(t < 2.5 / 2.75) return (7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375) / 2 + .5;
	return (7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375) / 2 + .5;
}
org.flixel.tweens.util.Ease.circIn = function(t) {
	return -(Math.sqrt(1 - t * t) - 1);
}
org.flixel.tweens.util.Ease.circOut = function(t) {
	return Math.sqrt(1 - (t - 1) * (t - 1));
}
org.flixel.tweens.util.Ease.circInOut = function(t) {
	return t <= .5?(Math.sqrt(1 - t * t * 4) - 1) / -2:(Math.sqrt(1 - (t * 2 - 2) * (t * 2 - 2)) + 1) / 2;
}
org.flixel.tweens.util.Ease.expoIn = function(t) {
	return Math.pow(2,10 * (t - 1));
}
org.flixel.tweens.util.Ease.expoOut = function(t) {
	return -Math.pow(2,-10 * t) + 1;
}
org.flixel.tweens.util.Ease.expoInOut = function(t) {
	return t < .5?Math.pow(2,10 * (t * 2 - 1)) / 2:(-Math.pow(2,-10 * (t * 2 - 1)) + 2) / 2;
}
org.flixel.tweens.util.Ease.backIn = function(t) {
	return t * t * (2.70158 * t - 1.70158);
}
org.flixel.tweens.util.Ease.backOut = function(t) {
	return 1 - --t * t * (-2.70158 * t - 1.70158);
}
org.flixel.tweens.util.Ease.backInOut = function(t) {
	t *= 2;
	if(t < 1) return t * t * (2.70158 * t - 1.70158) / 2;
	t--;
	return (1 - --t * t * (-2.70158 * t - 1.70158)) / 2 + .5;
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_;
function $bind(o,m) { var f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
}; else null;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var Void = $hxClasses.Void = { __ename__ : ["Void"]};
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.Prolog = "prolog";
Xml.Document = "document";
browser.ui.Multitouch.maxTouchPoints = 2;
browser.ui.Multitouch.supportedGestures = [];
browser.ui.Multitouch.supportsGestureEvents = false;
if(typeof document != "undefined") js.Lib.document = document;
if(typeof window != "undefined") {
	js.Lib.window = window;
	js.Lib.window.onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if(f == null) return false;
		return f(msg,[url + ":" + line]);
	};
}
browser.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
browser.text.Font.DEFAULT_FONT_SCALE = 9.0;
browser.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
browser.text.Font.DEFAULT_CLASS_NAME = "browser.text.Font";
browser.display.DisplayObject.GRAPHICS_INVALID = 2;
browser.display.DisplayObject.MATRIX_INVALID = 4;
browser.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
browser.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
browser.display.DisplayObject.TRANSFORM_INVALID = 32;
browser.display.DisplayObject.BOUNDS_INVALID = 64;
browser.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
browser.display.DisplayObject.ALL_RENDER_FLAGS = 98;
org.flixel.FlxTypedGroup.ASCENDING = -1;
org.flixel.FlxTypedGroup.DESCENDING = 1;
browser.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
browser.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
browser.Lib.DEFAULT_HEIGHT = 500;
browser.Lib.DEFAULT_WIDTH = 500;
browser.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
browser.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
browser.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
browser.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
browser.Lib.NME_IDENTIFIER = "haxe:jeash";
browser.Lib.VENDOR_HTML_TAG = "data-";
browser.Lib.starttime = haxe.Timer.stamp();
browser.display._BitmapData.MinstdGenerator.a = 16807;
browser.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
browser.display.BitmapDataChannel.ALPHA = 8;
browser.display.BitmapDataChannel.BLUE = 4;
browser.display.BitmapDataChannel.GREEN = 2;
browser.display.BitmapDataChannel.RED = 1;
browser.display.Graphics.TILE_SCALE = 1;
browser.display.Graphics.TILE_ROTATION = 2;
browser.display.Graphics.TILE_RGB = 4;
browser.display.Graphics.TILE_ALPHA = 8;
browser.display.Graphics.TILE_TRANS_2x2 = 16;
browser.display.Graphics.TILE_BLEND_NORMAL = 0;
browser.display.Graphics.TILE_BLEND_ADD = 65536;
browser.display.Graphics.BMP_REPEAT = 16;
browser.display.Graphics.BMP_SMOOTH = 65536;
browser.display.Graphics.CORNER_ROUND = 0;
browser.display.Graphics.CORNER_MITER = 4096;
browser.display.Graphics.CORNER_BEVEL = 8192;
browser.display.Graphics.CURVE = 2;
browser.display.Graphics.END_NONE = 0;
browser.display.Graphics.END_ROUND = 256;
browser.display.Graphics.END_SQUARE = 512;
browser.display.Graphics.LINE = 1;
browser.display.Graphics.MOVE = 0;
browser.display.Graphics.NME_MAX_DIM = 5000;
browser.display.Graphics.PIXEL_HINTING = 16384;
browser.display.Graphics.RADIAL = 1;
browser.display.Graphics.SCALE_HORIZONTAL = 2;
browser.display.Graphics.SCALE_NONE = 0;
browser.display.Graphics.SCALE_NORMAL = 3;
browser.display.Graphics.SCALE_VERTICAL = 1;
browser.display.Graphics.SPREAD_REPEAT = 2;
browser.display.Graphics.SPREAD_REFLECT = 4;
browser.display.GraphicsPathCommand.LINE_TO = 2;
browser.display.GraphicsPathCommand.MOVE_TO = 1;
browser.display.GraphicsPathCommand.CURVE_TO = 3;
browser.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
browser.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
browser.display.GraphicsPathCommand.NO_OP = 0;
browser.events.Event.ACTIVATE = "activate";
browser.events.Event.ADDED = "added";
browser.events.Event.ADDED_TO_STAGE = "addedToStage";
browser.events.Event.CANCEL = "cancel";
browser.events.Event.CHANGE = "change";
browser.events.Event.CLOSE = "close";
browser.events.Event.COMPLETE = "complete";
browser.events.Event.CONNECT = "connect";
browser.events.Event.CONTEXT3D_CREATE = "context3DCreate";
browser.events.Event.DEACTIVATE = "deactivate";
browser.events.Event.ENTER_FRAME = "enterFrame";
browser.events.Event.ID3 = "id3";
browser.events.Event.INIT = "init";
browser.events.Event.MOUSE_LEAVE = "mouseLeave";
browser.events.Event.OPEN = "open";
browser.events.Event.REMOVED = "removed";
browser.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
browser.events.Event.RENDER = "render";
browser.events.Event.RESIZE = "resize";
browser.events.Event.SCROLL = "scroll";
browser.events.Event.SELECT = "select";
browser.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
browser.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
browser.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
browser.events.Event.UNLOAD = "unload";
browser.events.Event.SOUND_COMPLETE = "soundComplete";
browser.events.MouseEvent.CLICK = "click";
browser.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
browser.events.MouseEvent.MOUSE_DOWN = "mouseDown";
browser.events.MouseEvent.MOUSE_MOVE = "mouseMove";
browser.events.MouseEvent.MOUSE_OUT = "mouseOut";
browser.events.MouseEvent.MOUSE_OVER = "mouseOver";
browser.events.MouseEvent.MOUSE_UP = "mouseUp";
browser.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
browser.events.MouseEvent.RIGHT_CLICK = "rightClick";
browser.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
browser.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
browser.events.MouseEvent.ROLL_OUT = "rollOut";
browser.events.MouseEvent.ROLL_OVER = "rollOver";
browser.display.Stage.NAME = "Stage";
browser.display.Stage.nmeAcceleration = { x : 0.0, y : 1.0, z : 0.0};
browser.display.Stage.OrientationPortrait = 1;
browser.display.Stage.OrientationPortraitUpsideDown = 2;
browser.display.Stage.OrientationLandscapeRight = 3;
browser.display.Stage.OrientationLandscapeLeft = 4;
browser.display.Stage.DEFAULT_FRAMERATE = 0.0;
browser.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
browser.display.Stage.nmeMouseChanges = [browser.events.MouseEvent.MOUSE_OUT,browser.events.MouseEvent.MOUSE_OVER,browser.events.MouseEvent.ROLL_OUT,browser.events.MouseEvent.ROLL_OVER];
browser.display.Stage.nmeTouchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
browser.display.StageQuality.BEST = "best";
browser.display.StageQuality.HIGH = "high";
browser.display.StageQuality.MEDIUM = "medium";
browser.display.StageQuality.LOW = "low";
browser.display.Tilesheet.TILE_SCALE = 1;
browser.display.Tilesheet.TILE_ROTATION = 2;
browser.display.Tilesheet.TILE_RGB = 4;
browser.display.Tilesheet.TILE_ALPHA = 8;
browser.display.Tilesheet.TILE_TRANS_2x2 = 16;
browser.display.Tilesheet.TILE_BLEND_NORMAL = 0;
browser.display.Tilesheet.TILE_BLEND_ADD = 65536;
browser.errors.Error.DEFAULT_TO_STRING = "Error";
browser.events.Listener.sIDs = 1;
browser.events.EventPhase.CAPTURING_PHASE = 0;
browser.events.EventPhase.AT_TARGET = 1;
browser.events.EventPhase.BUBBLING_PHASE = 2;
browser.events.FocusEvent.FOCUS_IN = "focusIn";
browser.events.FocusEvent.FOCUS_OUT = "focusOut";
browser.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
browser.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
browser.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
browser.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
browser.events.IOErrorEvent.IO_ERROR = "ioError";
browser.events.KeyboardEvent.KEY_DOWN = "keyDown";
browser.events.KeyboardEvent.KEY_UP = "keyUp";
browser.events.ProgressEvent.PROGRESS = "progress";
browser.events.ProgressEvent.SOCKET_DATA = "socketData";
browser.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
browser.events.TouchEvent.TOUCH_END = "touchEnd";
browser.events.TouchEvent.TOUCH_MOVE = "touchMove";
browser.events.TouchEvent.TOUCH_OUT = "touchOut";
browser.events.TouchEvent.TOUCH_OVER = "touchOver";
browser.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
browser.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
browser.events.TouchEvent.TOUCH_TAP = "touchTap";
browser.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
browser.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
browser.media.Sound.EXTENSION_MP3 = "mp3";
browser.media.Sound.EXTENSION_OGG = "ogg";
browser.media.Sound.EXTENSION_WAV = "wav";
browser.media.Sound.EXTENSION_AAC = "aac";
browser.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
browser.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
browser.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
browser.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
browser.net.URLRequestMethod.DELETE = "DELETE";
browser.net.URLRequestMethod.GET = "GET";
browser.net.URLRequestMethod.HEAD = "HEAD";
browser.net.URLRequestMethod.OPTIONS = "OPTIONS";
browser.net.URLRequestMethod.POST = "POST";
browser.net.URLRequestMethod.PUT = "PUT";
browser.system.System.useCodePage = false;
browser.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
browser.text.TextField.sSelectionOwner = null;
browser.text.FontInstance.mSolidFonts = new Hash();
browser.text.TextFieldAutoSize.CENTER = "CENTER";
browser.text.TextFieldAutoSize.LEFT = "LEFT";
browser.text.TextFieldAutoSize.NONE = "NONE";
browser.text.TextFieldAutoSize.RIGHT = "RIGHT";
browser.text.TextFieldType.DYNAMIC = "DYNAMIC";
browser.text.TextFieldType.INPUT = "INPUT";
browser.ui.Keyboard.KEY_0 = 48;
browser.ui.Keyboard.KEY_1 = 49;
browser.ui.Keyboard.KEY_2 = 50;
browser.ui.Keyboard.KEY_3 = 51;
browser.ui.Keyboard.KEY_4 = 52;
browser.ui.Keyboard.KEY_5 = 53;
browser.ui.Keyboard.KEY_6 = 54;
browser.ui.Keyboard.KEY_7 = 55;
browser.ui.Keyboard.KEY_8 = 56;
browser.ui.Keyboard.KEY_9 = 57;
browser.ui.Keyboard.A = 65;
browser.ui.Keyboard.B = 66;
browser.ui.Keyboard.C = 67;
browser.ui.Keyboard.D = 68;
browser.ui.Keyboard.E = 69;
browser.ui.Keyboard.F = 70;
browser.ui.Keyboard.G = 71;
browser.ui.Keyboard.H = 72;
browser.ui.Keyboard.I = 73;
browser.ui.Keyboard.J = 74;
browser.ui.Keyboard.K = 75;
browser.ui.Keyboard.L = 76;
browser.ui.Keyboard.M = 77;
browser.ui.Keyboard.N = 78;
browser.ui.Keyboard.O = 79;
browser.ui.Keyboard.P = 80;
browser.ui.Keyboard.Q = 81;
browser.ui.Keyboard.R = 82;
browser.ui.Keyboard.S = 83;
browser.ui.Keyboard.T = 84;
browser.ui.Keyboard.U = 85;
browser.ui.Keyboard.V = 86;
browser.ui.Keyboard.W = 87;
browser.ui.Keyboard.X = 88;
browser.ui.Keyboard.Y = 89;
browser.ui.Keyboard.Z = 90;
browser.ui.Keyboard.NUMPAD_0 = 96;
browser.ui.Keyboard.NUMPAD_1 = 97;
browser.ui.Keyboard.NUMPAD_2 = 98;
browser.ui.Keyboard.NUMPAD_3 = 99;
browser.ui.Keyboard.NUMPAD_4 = 100;
browser.ui.Keyboard.NUMPAD_5 = 101;
browser.ui.Keyboard.NUMPAD_6 = 102;
browser.ui.Keyboard.NUMPAD_7 = 103;
browser.ui.Keyboard.NUMPAD_8 = 104;
browser.ui.Keyboard.NUMPAD_9 = 105;
browser.ui.Keyboard.NUMPAD_MULTIPLY = 106;
browser.ui.Keyboard.NUMPAD_ADD = 107;
browser.ui.Keyboard.NUMPAD_ENTER = 108;
browser.ui.Keyboard.NUMPAD_SUBTRACT = 109;
browser.ui.Keyboard.NUMPAD_DECIMAL = 110;
browser.ui.Keyboard.NUMPAD_DIVIDE = 111;
browser.ui.Keyboard.F1 = 112;
browser.ui.Keyboard.F2 = 113;
browser.ui.Keyboard.F3 = 114;
browser.ui.Keyboard.F4 = 115;
browser.ui.Keyboard.F5 = 116;
browser.ui.Keyboard.F6 = 117;
browser.ui.Keyboard.F7 = 118;
browser.ui.Keyboard.F8 = 119;
browser.ui.Keyboard.F9 = 120;
browser.ui.Keyboard.F10 = 121;
browser.ui.Keyboard.F11 = 122;
browser.ui.Keyboard.F12 = 123;
browser.ui.Keyboard.F13 = 124;
browser.ui.Keyboard.F14 = 125;
browser.ui.Keyboard.F15 = 126;
browser.ui.Keyboard.BACKSPACE = 8;
browser.ui.Keyboard.TAB = 9;
browser.ui.Keyboard.ENTER = 13;
browser.ui.Keyboard.SHIFT = 16;
browser.ui.Keyboard.CONTROL = 17;
browser.ui.Keyboard.CAPS_LOCK = 18;
browser.ui.Keyboard.ESCAPE = 27;
browser.ui.Keyboard.SPACE = 32;
browser.ui.Keyboard.PAGE_UP = 33;
browser.ui.Keyboard.PAGE_DOWN = 34;
browser.ui.Keyboard.END = 35;
browser.ui.Keyboard.HOME = 36;
browser.ui.Keyboard.LEFT = 37;
browser.ui.Keyboard.RIGHT = 39;
browser.ui.Keyboard.UP = 38;
browser.ui.Keyboard.DOWN = 40;
browser.ui.Keyboard.INSERT = 45;
browser.ui.Keyboard.DELETE = 46;
browser.ui.Keyboard.NUMLOCK = 144;
browser.ui.Keyboard.BREAK = 19;
browser.ui.Keyboard.DOM_VK_CANCEL = 3;
browser.ui.Keyboard.DOM_VK_HELP = 6;
browser.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
browser.ui.Keyboard.DOM_VK_TAB = 9;
browser.ui.Keyboard.DOM_VK_CLEAR = 12;
browser.ui.Keyboard.DOM_VK_RETURN = 13;
browser.ui.Keyboard.DOM_VK_ENTER = 14;
browser.ui.Keyboard.DOM_VK_SHIFT = 16;
browser.ui.Keyboard.DOM_VK_CONTROL = 17;
browser.ui.Keyboard.DOM_VK_ALT = 18;
browser.ui.Keyboard.DOM_VK_PAUSE = 19;
browser.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
browser.ui.Keyboard.DOM_VK_ESCAPE = 27;
browser.ui.Keyboard.DOM_VK_SPACE = 32;
browser.ui.Keyboard.DOM_VK_PAGE_UP = 33;
browser.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
browser.ui.Keyboard.DOM_VK_END = 35;
browser.ui.Keyboard.DOM_VK_HOME = 36;
browser.ui.Keyboard.DOM_VK_LEFT = 37;
browser.ui.Keyboard.DOM_VK_UP = 38;
browser.ui.Keyboard.DOM_VK_RIGHT = 39;
browser.ui.Keyboard.DOM_VK_DOWN = 40;
browser.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
browser.ui.Keyboard.DOM_VK_INSERT = 45;
browser.ui.Keyboard.DOM_VK_DELETE = 46;
browser.ui.Keyboard.DOM_VK_0 = 48;
browser.ui.Keyboard.DOM_VK_1 = 49;
browser.ui.Keyboard.DOM_VK_2 = 50;
browser.ui.Keyboard.DOM_VK_3 = 51;
browser.ui.Keyboard.DOM_VK_4 = 52;
browser.ui.Keyboard.DOM_VK_5 = 53;
browser.ui.Keyboard.DOM_VK_6 = 54;
browser.ui.Keyboard.DOM_VK_7 = 55;
browser.ui.Keyboard.DOM_VK_8 = 56;
browser.ui.Keyboard.DOM_VK_9 = 57;
browser.ui.Keyboard.DOM_VK_SEMICOLON = 59;
browser.ui.Keyboard.DOM_VK_EQUALS = 61;
browser.ui.Keyboard.DOM_VK_A = 65;
browser.ui.Keyboard.DOM_VK_B = 66;
browser.ui.Keyboard.DOM_VK_C = 67;
browser.ui.Keyboard.DOM_VK_D = 68;
browser.ui.Keyboard.DOM_VK_E = 69;
browser.ui.Keyboard.DOM_VK_F = 70;
browser.ui.Keyboard.DOM_VK_G = 71;
browser.ui.Keyboard.DOM_VK_H = 72;
browser.ui.Keyboard.DOM_VK_I = 73;
browser.ui.Keyboard.DOM_VK_J = 74;
browser.ui.Keyboard.DOM_VK_K = 75;
browser.ui.Keyboard.DOM_VK_L = 76;
browser.ui.Keyboard.DOM_VK_M = 77;
browser.ui.Keyboard.DOM_VK_N = 78;
browser.ui.Keyboard.DOM_VK_O = 79;
browser.ui.Keyboard.DOM_VK_P = 80;
browser.ui.Keyboard.DOM_VK_Q = 81;
browser.ui.Keyboard.DOM_VK_R = 82;
browser.ui.Keyboard.DOM_VK_S = 83;
browser.ui.Keyboard.DOM_VK_T = 84;
browser.ui.Keyboard.DOM_VK_U = 85;
browser.ui.Keyboard.DOM_VK_V = 86;
browser.ui.Keyboard.DOM_VK_W = 87;
browser.ui.Keyboard.DOM_VK_X = 88;
browser.ui.Keyboard.DOM_VK_Y = 89;
browser.ui.Keyboard.DOM_VK_Z = 90;
browser.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
browser.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
browser.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
browser.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
browser.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
browser.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
browser.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
browser.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
browser.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
browser.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
browser.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
browser.ui.Keyboard.DOM_VK_MULTIPLY = 106;
browser.ui.Keyboard.DOM_VK_ADD = 107;
browser.ui.Keyboard.DOM_VK_SEPARATOR = 108;
browser.ui.Keyboard.DOM_VK_SUBTRACT = 109;
browser.ui.Keyboard.DOM_VK_DECIMAL = 110;
browser.ui.Keyboard.DOM_VK_DIVIDE = 111;
browser.ui.Keyboard.DOM_VK_F1 = 112;
browser.ui.Keyboard.DOM_VK_F2 = 113;
browser.ui.Keyboard.DOM_VK_F3 = 114;
browser.ui.Keyboard.DOM_VK_F4 = 115;
browser.ui.Keyboard.DOM_VK_F5 = 116;
browser.ui.Keyboard.DOM_VK_F6 = 117;
browser.ui.Keyboard.DOM_VK_F7 = 118;
browser.ui.Keyboard.DOM_VK_F8 = 119;
browser.ui.Keyboard.DOM_VK_F9 = 120;
browser.ui.Keyboard.DOM_VK_F10 = 121;
browser.ui.Keyboard.DOM_VK_F11 = 122;
browser.ui.Keyboard.DOM_VK_F12 = 123;
browser.ui.Keyboard.DOM_VK_F13 = 124;
browser.ui.Keyboard.DOM_VK_F14 = 125;
browser.ui.Keyboard.DOM_VK_F15 = 126;
browser.ui.Keyboard.DOM_VK_F16 = 127;
browser.ui.Keyboard.DOM_VK_F17 = 128;
browser.ui.Keyboard.DOM_VK_F18 = 129;
browser.ui.Keyboard.DOM_VK_F19 = 130;
browser.ui.Keyboard.DOM_VK_F20 = 131;
browser.ui.Keyboard.DOM_VK_F21 = 132;
browser.ui.Keyboard.DOM_VK_F22 = 133;
browser.ui.Keyboard.DOM_VK_F23 = 134;
browser.ui.Keyboard.DOM_VK_F24 = 135;
browser.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
browser.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
browser.ui.Keyboard.DOM_VK_COMMA = 188;
browser.ui.Keyboard.DOM_VK_PERIOD = 190;
browser.ui.Keyboard.DOM_VK_SLASH = 191;
browser.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
browser.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
browser.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
browser.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
browser.ui.Keyboard.DOM_VK_QUOTE = 222;
browser.ui.Keyboard.DOM_VK_META = 224;
browser.ui.Keyboard.DOM_VK_KANA = 21;
browser.ui.Keyboard.DOM_VK_HANGUL = 21;
browser.ui.Keyboard.DOM_VK_JUNJA = 23;
browser.ui.Keyboard.DOM_VK_FINAL = 24;
browser.ui.Keyboard.DOM_VK_HANJA = 25;
browser.ui.Keyboard.DOM_VK_KANJI = 25;
browser.ui.Keyboard.DOM_VK_CONVERT = 28;
browser.ui.Keyboard.DOM_VK_NONCONVERT = 29;
browser.ui.Keyboard.DOM_VK_ACEPT = 30;
browser.ui.Keyboard.DOM_VK_MODECHANGE = 31;
browser.ui.Keyboard.DOM_VK_SELECT = 41;
browser.ui.Keyboard.DOM_VK_PRINT = 42;
browser.ui.Keyboard.DOM_VK_EXECUTE = 43;
browser.ui.Keyboard.DOM_VK_SLEEP = 95;
browser.utils.Endian.BIG_ENDIAN = "bigEndian";
browser.utils.Endian.LITTLE_ENDIAN = "littleEndian";
browser.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
org.flixel.FlxObject.SEPARATE_BIAS = 4;
org.flixel.FlxObject.LEFT = 1;
org.flixel.FlxObject.RIGHT = 16;
org.flixel.FlxObject.UP = 256;
org.flixel.FlxObject.DOWN = 4096;
org.flixel.FlxObject.NONE = 0;
org.flixel.FlxObject.CEILING = 256;
org.flixel.FlxObject.FLOOR = 4096;
org.flixel.FlxObject.WALL = 17;
org.flixel.FlxObject.ANY = 4369;
org.flixel.FlxObject.PATH_FORWARD = 0;
org.flixel.FlxObject.PATH_BACKWARD = 1;
org.flixel.FlxObject.PATH_LOOP_FORWARD = 16;
org.flixel.FlxObject.PATH_LOOP_BACKWARD = 256;
org.flixel.FlxObject.PATH_YOYO = 4096;
org.flixel.FlxObject.PATH_HORIZONTAL_ONLY = 65536;
org.flixel.FlxObject.PATH_VERTICAL_ONLY = 1048576;
org.flixel.FlxObject._firstSeparateFlxRect = new org.flixel.FlxRect();
org.flixel.FlxObject._secondSeparateFlxRect = new org.flixel.FlxRect();
org.flixel.FlxObject._pZero = new org.flixel.FlxPoint();
org.flixel.FlxAssets.imgDefaultButton = "assets/data/button.png";
org.flixel.FlxAssets.imgLogo = "assets/data/logo.png";
org.flixel.FlxAssets.imgDefault = "assets/data/default.png";
org.flixel.FlxAssets.imgAuto = "assets/data/autotiles.png";
org.flixel.FlxAssets.imgAutoAlt = "assets/data/autotiles_alt.png";
org.flixel.FlxAssets.imgLogoCorners = "assets/data/logo_corners.png";
org.flixel.FlxAssets.imgLogoLight = "assets/data/logo_light.png";
org.flixel.FlxAssets.imgHandle = "assets/data/handle.png";
org.flixel.FlxAssets.imgDefaultCursor = "assets/data/cursor.png";
org.flixel.FlxAssets.imgBounds = "assets/data/vis/bounds.png";
org.flixel.FlxAssets.imgOpen = "assets/data/vcr/open.png";
org.flixel.FlxAssets.imgRecordOff = "assets/data/vcr/record_off.png";
org.flixel.FlxAssets.imgRecordOn = "assets/data/vcr/record_on.png";
org.flixel.FlxAssets.imgStop = "assets/data/vcr/stop.png";
org.flixel.FlxAssets.imgFlixel = "assets/data/vcr/flixel.png";
org.flixel.FlxAssets.imgRestart = "assets/data/vcr/restart.png";
org.flixel.FlxAssets.imgPause = "assets/data/vcr/pause.png";
org.flixel.FlxAssets.imgPlay = "assets/data/vcr/play.png";
org.flixel.FlxAssets.imgStep = "assets/data/vcr/step.png";
org.flixel.FlxAssets.imgBase = "assets/data/base.png";
org.flixel.FlxAssets.imgStick = "assets/data/stick.png";
org.flixel.FlxAssets.imgButtonA = "assets/data/button_a.png";
org.flixel.FlxAssets.imgButtonB = "assets/data/button_b.png";
org.flixel.FlxAssets.imgButtonC = "assets/data/button_c.png";
org.flixel.FlxAssets.imgButtonX = "assets/data/button_x.png";
org.flixel.FlxAssets.imgButtonY = "assets/data/button_y.png";
org.flixel.FlxAssets.imgButtonUp = "assets/data/button_up.png";
org.flixel.FlxAssets.imgButtonDown = "assets/data/button_down.png";
org.flixel.FlxAssets.imgButtonLeft = "assets/data/button_left.png";
org.flixel.FlxAssets.imgButtonRight = "assets/data/button_right.png";
org.flixel.FlxAssets.debuggerFont = "assets/data/courier.ttf";
org.flixel.FlxAssets.defaultFont = "assets/data/nokiafc22.ttf";
org.flixel.FlxAssets.sndBeep = "Beep";
org.flixel.FlxTilemap.imgAuto = org.flixel.FlxAssets.imgAuto;
org.flixel.FlxTilemap.imgAutoAlt = org.flixel.FlxAssets.imgAutoAlt;
org.flixel.FlxTilemap.OFF = 0;
org.flixel.FlxTilemap.AUTO = 1;
org.flixel.FlxTilemap.ALT = 2;
com.jah2488.ld48.Level.TILE_WIDTH = 16;
com.jah2488.ld48.Level.TILE_HEIGHT = 16;
com.jah2488.ld48.Level.START_INDEX = 0;
com.jah2488.ld48.Level.DRAW_INDEX = 1;
com.jah2488.ld48.Level.COLLIDE_INDEX = 1;
com.jah2488.ld48.Level.MAP_DIR = "assets/levels/";
com.jah2488.ld48.Level.TILE_LOCATION = "assets/platformTiles.png";
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.xml.Check.blanks = new EReg("^[ \r\n\t]*$","");
js.Lib.onerror = null;
nme.Lib.FULLSCREEN = 1;
nme.Lib.BORDERLESS = 2;
nme.Lib.RESIZABLE = 4;
nme.Lib.HARDWARE = 8;
nme.Lib.VSYNC = 16;
nme.Lib.HW_AA = 32;
nme.Lib.HW_AA_HIRES = 96;
nme.Lib.ALLOW_SHADERS = 128;
nme.Lib.REQUIRE_SHADERS = 256;
nme.Lib.DEPTH_BUFFER = 512;
nme.Lib.STENCIL_BUFFER = 1024;
nme.Lib.MIN_FLOAT_VALUE = Number.MIN_VALUE;
nme.Lib.MAX_FLOAT_VALUE = Number.MAX_VALUE;
nme.installer.Assets.cachedBitmapData = new Hash();
nme.installer.Assets.initialized = false;
nme.installer.Assets.libraryTypes = new Hash();
nme.installer.Assets.resourceClasses = new Hash();
nme.installer.Assets.resourceNames = new Hash();
nme.installer.Assets.resourceTypes = new Hash();
org.flixel.FlxButton.NORMAL = 0;
org.flixel.FlxButton.HIGHLIGHT = 1;
org.flixel.FlxButton.PRESSED = 2;
org.flixel.FlxCamera.STYLE_LOCKON = 0;
org.flixel.FlxCamera.STYLE_PLATFORMER = 1;
org.flixel.FlxCamera.STYLE_TOPDOWN = 2;
org.flixel.FlxCamera.STYLE_TOPDOWN_TIGHT = 3;
org.flixel.FlxCamera.STYLE_SCREEN_BY_SCREEN = 4;
org.flixel.FlxCamera.STYLE_NO_DEAD_ZONE = 5;
org.flixel.FlxCamera.SHAKE_BOTH_AXES = 0;
org.flixel.FlxCamera.SHAKE_HORIZONTAL_ONLY = 1;
org.flixel.FlxCamera.SHAKE_VERTICAL_ONLY = 2;
org.flixel.FlxG.supportsTouchEvents = false;
org.flixel.FlxG.tweener = new org.flixel.FlxBasic();
org.flixel.FlxG.LIBRARY_NAME = "HaxeFlixel";
org.flixel.FlxG.LIBRARY_MAJOR_VERSION = "1";
org.flixel.FlxG.LIBRARY_MINOR_VERSION = "09";
org.flixel.FlxG.DEBUGGER_STANDARD = 0;
org.flixel.FlxG.DEBUGGER_MICRO = 1;
org.flixel.FlxG.DEBUGGER_BIG = 2;
org.flixel.FlxG.DEBUGGER_TOP = 3;
org.flixel.FlxG.DEBUGGER_LEFT = 4;
org.flixel.FlxG.DEBUGGER_RIGHT = 5;
org.flixel.FlxG.RED = -65518;
org.flixel.FlxG.GREEN = -16715227;
org.flixel.FlxG.BLUE = -16740119;
org.flixel.FlxG.PINK = -1040641;
org.flixel.FlxG.WHITE = -1;
org.flixel.FlxG.BLACK = -16777216;
org.flixel.FlxG.TRANSPARENT = 0;
org.flixel.FlxG.DEG = 180 / Math.PI;
org.flixel.FlxG.RAD = Math.PI / 180;
org.flixel.FlxSave.SUCCESS = 0;
org.flixel.FlxSave.PENDING = 1;
org.flixel.FlxSave.ERROR = 2;
org.flixel.FlxU.MIN_VALUE = 0.0000000000000001;
org.flixel.FlxU.MAX_VALUE = 1.79e+308;
org.flixel.plugin.pxText.PxBitmapFont._storedFonts = new Hash();
org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT = new browser.geom.Point();
org.flixel.system.FlxList._NUM_CACHED_FLX_LIST = 0;
org.flixel.system.FlxQuadTree.A_LIST = 0;
org.flixel.system.FlxQuadTree.B_LIST = 1;
org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
org.flixel.system.FlxWindow.BG_COLOR = 2139062143;
org.flixel.system.FlxWindow.TOP_COLOR = 2130706432;
org.flixel.system.debug.Log.MAX_LOG_LINES = 200;
org.flixel.system.debug.VCR.DEFAULT_FILE_NAME = "replay.fgr";
org.flixel.system.debug.Watch.MAX_LOG_LINES = 1024;
org.flixel.system.debug.Watch.LINE_HEIGHT = 15;
org.flixel.system.input.FlxTouchManager.maxTouchPoints = 0;
org.flixel.system.layer.Atlas._atlasCache = new Hash();
org.flixel.system.layer.TileSheetData.tileSheetData = new Array();
org.flixel.system.layer.TileSheetData._DRAWCALLS = 0;
org.flixel.tweens.FlxTween.PERSIST = 1;
org.flixel.tweens.FlxTween.LOOPING = 2;
org.flixel.tweens.FlxTween.PINGPONG = 4;
org.flixel.tweens.FlxTween.ONESHOT = 8;
org.flixel.tweens.FlxTween.BACKWARD = 16;
org.flixel.tweens.util.Ease.PI = Math.PI;
org.flixel.tweens.util.Ease.PI2 = Math.PI / 2;
org.flixel.tweens.util.Ease.EL = 2 * Math.PI / .45;
org.flixel.tweens.util.Ease.B1 = 1 / 2.75;
org.flixel.tweens.util.Ease.B2 = 2 / 2.75;
org.flixel.tweens.util.Ease.B3 = 1.5 / 2.75;
org.flixel.tweens.util.Ease.B4 = 2.5 / 2.75;
org.flixel.tweens.util.Ease.B5 = 2.25 / 2.75;
org.flixel.tweens.util.Ease.B6 = 2.625 / 2.75;
ApplicationMain.main();
})();

//@ sourceMappingURL=JustEnough.js.map