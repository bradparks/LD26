#ifndef INCLUDED_com_jah2488_ld48_enough_Tile
#define INCLUDED_com_jah2488_ld48_enough_Tile

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <org/flixel/FlxSprite.h>
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,Tile)
HX_DECLARE_CLASS2(org,flixel,FlxBasic)
HX_DECLARE_CLASS2(org,flixel,FlxObject)
HX_DECLARE_CLASS2(org,flixel,FlxSprite)
HX_DECLARE_CLASS2(org,flixel,FlxTimer)
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{


class Tile_obj : public ::org::flixel::FlxSprite_obj{
	public:
		typedef ::org::flixel::FlxSprite_obj super;
		typedef Tile_obj OBJ_;
		Tile_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Tile_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Tile_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Tile"); }

		virtual Void update( );

		virtual Void reviveTile( ::org::flixel::FlxTimer timer);
		Dynamic reviveTile_dyn();

		virtual Void kill( );

		::org::flixel::FlxTimer deathTimer; /* REM */ 
		int playerColor; /* REM */ 
		int tile; /* REM */ 
};

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough

#endif /* INCLUDED_com_jah2488_ld48_enough_Tile */ 
