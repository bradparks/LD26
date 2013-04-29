class ApplicationMain
{

	#if waxe
	static public var frame : wx.Frame;
	static public var autoShowFrame : Bool = true;
	#if nme
	static public var nmeStage : wx.NMEStage;
	#end
	#end
	
	public static function main()
	{
		#if nme
		nme.Lib.setPackage("Zaphod", "JustEnough", "com.example.myapp", "0.0.1");
		
		#end
		
		#if waxe
		wx.App.boot(function()
		{
			
			frame = wx.Frame.create(null, null, "JustEnough", null, { width: 640, height: 480 });
			
			#if nme
			var stage = wx.NMEStage.create(frame, null, null, { width: 640, height: 480 });
			#end
			
			Main.main();
			
			if (autoShowFrame)
			{
				wx.App.setTopWindow(frame);
				frame.shown = true;
			}
		});
		#else
		
		nme.Lib.create(function()
			{ 
				//if ((640 == 0 && 480 == 0) || true)
				//{
					nme.Lib.current.stage.align = nme.display.StageAlign.TOP_LEFT;
					nme.Lib.current.stage.scaleMode = nme.display.StageScaleMode.NO_SCALE;
				//}
				
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
					#if nme
					if (Std.is (instance, nme.display.DisplayObject)) {
						nme.Lib.current.addChild(cast instance);
					}
					#end
				}
			},
			640, 480, 
			60, 
			16777215,
			(true ? nme.Lib.HARDWARE : 0) |
			(false ? nme.Lib.ALLOW_SHADERS : 0) |
			(false ? nme.Lib.REQUIRE_SHADERS : 0) |
			(false ? nme.Lib.DEPTH_BUFFER : 0) |
			(false ? nme.Lib.STENCIL_BUFFER : 0) |
			(true ? nme.Lib.RESIZABLE : 0) |
			(false ? nme.Lib.BORDERLESS : 0) |
			(false ? nme.Lib.VSYNC : 0) |
			(true ? nme.Lib.FULLSCREEN : 0) |
			(0 == 4 ? nme.Lib.HW_AA_HIRES : 0) |
			(0 == 2 ? nme.Lib.HW_AA : 0),
			"JustEnough"
			
		);
		#end
		
	}
	
	
	#if neko
	public static function __init__ () {
		
		untyped $loader.path = $array ("@executable_path/", $loader.path);
		
	}
	#end
	
	
	public static function getAsset(inName:String):Dynamic
	{
		#if nme
		
		if (inName == "Beep")
		{
			
			return nme.Assets.getSound ("Beep");
			
		}
		
		if (inName == "Pickup")
		{
			
			return nme.Assets.getSound ("Pickup");
			
		}
		
		if (inName == "Click")
		{
			
			return nme.Assets.getSound ("Click");
			
		}
		
		if (inName == "Jump")
		{
			
			return nme.Assets.getSound ("Jump");
			
		}
		
		if (inName == "Hurt")
		{
			
			return nme.Assets.getSound ("Hurt");
			
		}
		
		if (inName == "Ambient")
		{
			
			return nme.Assets.getSound ("Ambient");
			
		}
		
		if (inName == "Upbeat")
		{
			
			return nme.Assets.getSound ("Upbeat");
			
		}
		
		if (inName == "Beat")
		{
			
			return nme.Assets.getSound ("Beat");
			
		}
		
		if (inName == "assets/beebTiles.pxi")
		{
			
			return nme.Assets.getBytes ("assets/beebTiles.pxi");
			
		}
		
		if (inName == "assets/cPower.png")
		{
			
			return nme.Assets.getBitmapData ("assets/cPower.png");
			
		}
		
		if (inName == "assets/data/autotiles.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/autotiles.png");
			
		}
		
		if (inName == "assets/data/autotiles_alt.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/autotiles_alt.png");
			
		}
		
		if (inName == "assets/data/base.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/base.png");
			
		}
		
		if (inName == "assets/data/beep.mp3")
		{
			
			return nme.Assets.getSound ("assets/data/beep.mp3");
			
		}
		
		if (inName == "assets/data/beep.wav")
		{
			
			return nme.Assets.getSound ("assets/data/beep.wav");
			
		}
		
		if (inName == "assets/data/button.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button.png");
			
		}
		
		if (inName == "assets/data/button_a.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button_a.png");
			
		}
		
		if (inName == "assets/data/button_b.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button_b.png");
			
		}
		
		if (inName == "assets/data/button_c.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button_c.png");
			
		}
		
		if (inName == "assets/data/button_down.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button_down.png");
			
		}
		
		if (inName == "assets/data/button_left.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button_left.png");
			
		}
		
		if (inName == "assets/data/button_right.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button_right.png");
			
		}
		
		if (inName == "assets/data/button_up.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button_up.png");
			
		}
		
		if (inName == "assets/data/button_x.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button_x.png");
			
		}
		
		if (inName == "assets/data/button_y.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/button_y.png");
			
		}
		
		if (inName == "assets/data/click.wav")
		{
			
			return nme.Assets.getSound ("assets/data/click.wav");
			
		}
		
		if (inName == "assets/data/courier.ttf")
		{
			
			return nme.Assets.getFont ("assets/data/courier.ttf");
			
		}
		
		if (inName == "assets/data/cursor.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/cursor.png");
			
		}
		
		if (inName == "assets/data/default.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/default.png");
			
		}
		
		if (inName == "assets/data/etherial_hibpm.mp3")
		{
			
			return nme.Assets.getSound ("assets/data/etherial_hibpm.mp3");
			
		}
		
		if (inName == "assets/data/fontData10pt.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/fontData10pt.png");
			
		}
		
		if (inName == "assets/data/fontData11pt.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/fontData11pt.png");
			
		}
		
		if (inName == "assets/data/handle.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/handle.png");
			
		}
		
		if (inName == "assets/data/hurt.wav")
		{
			
			return nme.Assets.getSound ("assets/data/hurt.wav");
			
		}
		
		if (inName == "assets/data/jump.wav")
		{
			
			return nme.Assets.getSound ("assets/data/jump.wav");
			
		}
		
		if (inName == "assets/data/logo.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/logo.png");
			
		}
		
		if (inName == "assets/data/logo_corners.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/logo_corners.png");
			
		}
		
		if (inName == "assets/data/logo_light.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/logo_light.png");
			
		}
		
		if (inName == "assets/data/nokiafc22.ttf")
		{
			
			return nme.Assets.getFont ("assets/data/nokiafc22.ttf");
			
		}
		
		if (inName == "assets/data/pickup.wav")
		{
			
			return nme.Assets.getSound ("assets/data/pickup.wav");
			
		}
		
		if (inName == "assets/data/standard_beat.mp3")
		{
			
			return nme.Assets.getSound ("assets/data/standard_beat.mp3");
			
		}
		
		if (inName == "assets/data/stick.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/stick.png");
			
		}
		
		if (inName == "assets/data/surreal_ambient.mp3")
		{
			
			return nme.Assets.getSound ("assets/data/surreal_ambient.mp3");
			
		}
		
		if (inName == "assets/data/vcr/flixel.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vcr/flixel.png");
			
		}
		
		if (inName == "assets/data/vcr/open.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vcr/open.png");
			
		}
		
		if (inName == "assets/data/vcr/pause.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vcr/pause.png");
			
		}
		
		if (inName == "assets/data/vcr/play.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vcr/play.png");
			
		}
		
		if (inName == "assets/data/vcr/record_off.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vcr/record_off.png");
			
		}
		
		if (inName == "assets/data/vcr/record_on.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vcr/record_on.png");
			
		}
		
		if (inName == "assets/data/vcr/restart.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vcr/restart.png");
			
		}
		
		if (inName == "assets/data/vcr/step.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vcr/step.png");
			
		}
		
		if (inName == "assets/data/vcr/stop.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vcr/stop.png");
			
		}
		
		if (inName == "assets/data/vis/bounds.png")
		{
			
			return nme.Assets.getBitmapData ("assets/data/vis/bounds.png");
			
		}
		
		if (inName == "assets/door.png")
		{
			
			return nme.Assets.getBitmapData ("assets/door.png");
			
		}
		
		if (inName == "assets/goal")
		{
			
			return nme.Assets.getBytes ("assets/goal");
			
		}
		
		if (inName == "assets/goal.png")
		{
			
			return nme.Assets.getBitmapData ("assets/goal.png");
			
		}
		
		if (inName == "assets/HaxeFlixel.svg")
		{
			
			return nme.Assets.getText ("assets/HaxeFlixel.svg");
			
		}
		
		if (inName == "assets/health.png")
		{
			
			return nme.Assets.getBitmapData ("assets/health.png");
			
		}
		
		if (inName == "assets/lava.png")
		{
			
			return nme.Assets.getBitmapData ("assets/lava.png");
			
		}
		
		if (inName == "assets/LevelFour.dam")
		{
			
			return nme.Assets.getText ("assets/LevelFour.dam");
			
		}
		
		if (inName == "assets/LevelFour.dam.bak")
		{
			
			return nme.Assets.getText ("assets/LevelFour.dam.bak");
			
		}
		
		if (inName == "assets/levelOne.dam")
		{
			
			return nme.Assets.getText ("assets/levelOne.dam");
			
		}
		
		if (inName == "assets/levelOne.dam.bak")
		{
			
			return nme.Assets.getText ("assets/levelOne.dam.bak");
			
		}
		
		if (inName == "assets/levels/mapCSV_Group1_Map1.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_Group1_Map1.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_Group1_Map2.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_Group1_Map2.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_LevelFour_Map1.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_LevelFour_Map1.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_LevelFour_Map2.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_LevelFour_Map2.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_levelOne_Map1.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_levelOne_Map1.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_levelOne_Map2.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_levelOne_Map2.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_LevelThree_Map1.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_LevelThree_Map1.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_LevelThree_Map2.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_LevelThree_Map2.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_LevelTwo_Map1.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_LevelTwo_Map1.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_LevelTwo_Map2.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_LevelTwo_Map2.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_Menu_Map1.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_Menu_Map1.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_Tutorial_Map2.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_Tutorial_Map2.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_Tutorial_Map3.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_Tutorial_Map3.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_Win_Map1.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_Win_Map1.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_WorldMap_Map1.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_WorldMap_Map1.csv");
			
		}
		
		if (inName == "assets/levels/mapCSV_WorldSelect_Map1.csv")
		{
			
			return nme.Assets.getText ("assets/levels/mapCSV_WorldSelect_Map1.csv");
			
		}
		
		if (inName == "assets/levels/tutorial.dam")
		{
			
			return nme.Assets.getText ("assets/levels/tutorial.dam");
			
		}
		
		if (inName == "assets/levels/tutorial.dam.bak")
		{
			
			return nme.Assets.getText ("assets/levels/tutorial.dam.bak");
			
		}
		
		if (inName == "assets/levels/WorldMap.dam")
		{
			
			return nme.Assets.getText ("assets/levels/WorldMap.dam");
			
		}
		
		if (inName == "assets/LevelThree.dam")
		{
			
			return nme.Assets.getText ("assets/LevelThree.dam");
			
		}
		
		if (inName == "assets/LevelThree.dam.bak")
		{
			
			return nme.Assets.getText ("assets/LevelThree.dam.bak");
			
		}
		
		if (inName == "assets/LevelTwo.dam")
		{
			
			return nme.Assets.getText ("assets/LevelTwo.dam");
			
		}
		
		if (inName == "assets/LevelTwo.dam.bak")
		{
			
			return nme.Assets.getText ("assets/LevelTwo.dam.bak");
			
		}
		
		if (inName == "assets/Menu.dam")
		{
			
			return nme.Assets.getText ("assets/Menu.dam");
			
		}
		
		if (inName == "assets/Platformer.dam")
		{
			
			return nme.Assets.getText ("assets/Platformer.dam");
			
		}
		
		if (inName == "assets/platformTiles.png")
		{
			
			return nme.Assets.getBitmapData ("assets/platformTiles.png");
			
		}
		
		if (inName == "assets/player.png")
		{
			
			return nme.Assets.getBitmapData ("assets/player.png");
			
		}
		
		if (inName == "assets/power.png")
		{
			
			return nme.Assets.getBitmapData ("assets/power.png");
			
		}
		
		if (inName == "assets/spriteTiles")
		{
			
			return nme.Assets.getBytes ("assets/spriteTiles");
			
		}
		
		if (inName == "assets/spriteTiles.png")
		{
			
			return nme.Assets.getBitmapData ("assets/spriteTiles.png");
			
		}
		
		if (inName == "assets/Win.dam")
		{
			
			return nme.Assets.getText ("assets/Win.dam");
			
		}
		
		if (inName == "assets/Win.dam.bak")
		{
			
			return nme.Assets.getText ("assets/Win.dam.bak");
			
		}
		
		if (inName == "assets/world.png")
		{
			
			return nme.Assets.getBitmapData ("assets/world.png");
			
		}
		
		#end
		return null;
	}
	
	
}
