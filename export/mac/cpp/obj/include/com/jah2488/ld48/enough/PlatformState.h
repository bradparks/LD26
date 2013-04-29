#ifndef INCLUDED_com_jah2488_ld48_enough_PlatformState
#define INCLUDED_com_jah2488_ld48_enough_PlatformState

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <org/flixel/FlxState.h>
HX_DECLARE_CLASS3(com,jah2488,ld48,Level)
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,PlatformState)
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,Player)
HX_DECLARE_CLASS2(org,flixel,FlxBasic)
HX_DECLARE_CLASS2(org,flixel,FlxGroup)
HX_DECLARE_CLASS2(org,flixel,FlxObject)
HX_DECLARE_CLASS2(org,flixel,FlxPoint)
HX_DECLARE_CLASS2(org,flixel,FlxSprite)
HX_DECLARE_CLASS2(org,flixel,FlxState)
HX_DECLARE_CLASS2(org,flixel,FlxTilemap)
HX_DECLARE_CLASS2(org,flixel,FlxTypedGroup)
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{


class PlatformState_obj : public ::org::flixel::FlxState_obj{
	public:
		typedef ::org::flixel::FlxState_obj super;
		typedef PlatformState_obj OBJ_;
		PlatformState_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< PlatformState_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~PlatformState_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("PlatformState"); }

		virtual Void update( );

		virtual Void hazardCollide( ::org::flixel::FlxObject player,::org::flixel::FlxObject tile);
		Dynamic hazardCollide_dyn();

		virtual Void touchLevel( ::org::flixel::FlxObject player,::org::flixel::FlxObject tile);
		Dynamic touchLevel_dyn();

		virtual Void nextLevel( );
		Dynamic nextLevel_dyn();

		virtual Void pickUp( ::org::flixel::FlxObject player,::org::flixel::FlxObject sprite);
		Dynamic pickUp_dyn();

		virtual Void destroy( );

		virtual Void assignSpritesToMap( );
		Dynamic assignSpritesToMap_dyn();

		virtual Void create( );

		::org::flixel::FlxGroup hazards; /* REM */ 
		::org::flixel::FlxGroup sprites; /* REM */ 
		::com::jah2488::ld48::Level spriteLayer; /* REM */ 
		::com::jah2488::ld48::Level level; /* REM */ 
		::com::jah2488::ld48::enough::Player player; /* REM */ 
		::org::flixel::FlxPoint LEVEL_START; /* REM */ 
};

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough

#endif /* INCLUDED_com_jah2488_ld48_enough_PlatformState */ 
