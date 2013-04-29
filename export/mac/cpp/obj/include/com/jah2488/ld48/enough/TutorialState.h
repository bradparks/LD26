#ifndef INCLUDED_com_jah2488_ld48_enough_TutorialState
#define INCLUDED_com_jah2488_ld48_enough_TutorialState

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/jah2488/ld48/enough/PlatformState.h>
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,PlatformState)
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,TutorialState)
HX_DECLARE_CLASS2(org,flixel,FlxBasic)
HX_DECLARE_CLASS2(org,flixel,FlxGroup)
HX_DECLARE_CLASS2(org,flixel,FlxState)
HX_DECLARE_CLASS2(org,flixel,FlxTypedGroup)
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{


class TutorialState_obj : public ::com::jah2488::ld48::enough::PlatformState_obj{
	public:
		typedef ::com::jah2488::ld48::enough::PlatformState_obj super;
		typedef TutorialState_obj OBJ_;
		TutorialState_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< TutorialState_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~TutorialState_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("TutorialState"); }

		virtual Void nextLevel( );

		virtual Void create( );

};

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough

#endif /* INCLUDED_com_jah2488_ld48_enough_TutorialState */ 
