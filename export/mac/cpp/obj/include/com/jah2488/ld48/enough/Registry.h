#ifndef INCLUDED_com_jah2488_ld48_enough_Registry
#define INCLUDED_com_jah2488_ld48_enough_Registry

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS4(com,jah2488,ld48,enough,Player)
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,Registry)
HX_DECLARE_CLASS2(org,flixel,FlxBasic)
HX_DECLARE_CLASS2(org,flixel,FlxObject)
HX_DECLARE_CLASS2(org,flixel,FlxSprite)
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{


class Registry_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Registry_obj OBJ_;
		Registry_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Registry_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Registry_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Registry"); }

		static ::com::jah2488::ld48::enough::Player player; /* REM */ 
		static Void init( );
		static Dynamic init_dyn();

};

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough

#endif /* INCLUDED_com_jah2488_ld48_enough_Registry */ 
