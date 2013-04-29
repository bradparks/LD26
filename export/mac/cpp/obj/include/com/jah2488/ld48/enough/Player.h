#ifndef INCLUDED_com_jah2488_ld48_enough_Player
#define INCLUDED_com_jah2488_ld48_enough_Player

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <org/flixel/FlxSprite.h>
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,Player)
HX_DECLARE_CLASS2(org,flixel,FlxBasic)
HX_DECLARE_CLASS2(org,flixel,FlxObject)
HX_DECLARE_CLASS2(org,flixel,FlxSprite)
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{


class Player_obj : public ::org::flixel::FlxSprite_obj{
	public:
		typedef ::org::flixel::FlxSprite_obj super;
		typedef Player_obj OBJ_;
		Player_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Player_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Player_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Player"); }

		virtual Void update( );

		virtual Void die( Float x,Float y);
		Dynamic die_dyn();

		virtual int state( );
		Dynamic state_dyn();

		virtual Void setColor( int color);
		Dynamic setColor_dyn();

		int HEALTH; /* REM */ 
		int DOOR; /* REM */ 
		int LAVA; /* REM */ 
		int POWER; /* REM */ 
		int NORMAL; /* REM */ 
		int upsidedown; /* REM */ 
		bool connected; /* REM */ 
		int GRAVITY; /* REM */ 
		Float PLAYER_SPEED; /* REM */ 
};

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough

#endif /* INCLUDED_com_jah2488_ld48_enough_Player */ 
