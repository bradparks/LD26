#ifndef INCLUDED_com_jah2488_ld48_Level
#define INCLUDED_com_jah2488_ld48_Level

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <org/flixel/FlxTilemap.h>
HX_DECLARE_CLASS3(com,jah2488,ld48,Level)
HX_DECLARE_CLASS2(org,flixel,FlxBasic)
HX_DECLARE_CLASS2(org,flixel,FlxObject)
HX_DECLARE_CLASS2(org,flixel,FlxTilemap)
namespace com{
namespace jah2488{
namespace ld48{


class Level_obj : public ::org::flixel::FlxTilemap_obj{
	public:
		typedef ::org::flixel::FlxTilemap_obj super;
		typedef Level_obj OBJ_;
		Level_obj();
		Void __construct(::String location);

	public:
		static hx::ObjectPtr< Level_obj > __new(::String location);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Level_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Level"); }

		static int TILE_WIDTH; /* REM */ 
		static int TILE_HEIGHT; /* REM */ 
		static int START_INDEX; /* REM */ 
		static int DRAW_INDEX; /* REM */ 
		static int COLLIDE_INDEX; /* REM */ 
		static ::String MAP_DIR; /* REM */ 
		static ::String TILE_LOCATION; /* REM */ 
};

} // end namespace com
} // end namespace jah2488
} // end namespace ld48

#endif /* INCLUDED_com_jah2488_ld48_Level */ 
