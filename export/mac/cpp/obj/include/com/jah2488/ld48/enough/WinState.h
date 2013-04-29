#ifndef INCLUDED_com_jah2488_ld48_enough_WinState
#define INCLUDED_com_jah2488_ld48_enough_WinState

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/jah2488/ld48/enough/PlatformState.h>
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,PlatformState)
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,WinState)
HX_DECLARE_CLASS2(org,flixel,FlxBasic)
HX_DECLARE_CLASS2(org,flixel,FlxGroup)
HX_DECLARE_CLASS2(org,flixel,FlxObject)
HX_DECLARE_CLASS2(org,flixel,FlxSprite)
HX_DECLARE_CLASS2(org,flixel,FlxState)
HX_DECLARE_CLASS2(org,flixel,FlxText)
HX_DECLARE_CLASS2(org,flixel,FlxTypedGroup)
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{


class WinState_obj : public ::com::jah2488::ld48::enough::PlatformState_obj{
	public:
		typedef ::com::jah2488::ld48::enough::PlatformState_obj super;
		typedef WinState_obj OBJ_;
		WinState_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< WinState_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~WinState_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("WinState"); }

		virtual Void create( );

		::org::flixel::FlxText credits; /* REM */ 
};

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough

#endif /* INCLUDED_com_jah2488_ld48_enough_WinState */ 
