#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_enough_Player
#include <com/jah2488/ld48/enough/Player.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Registry
#include <com/jah2488/ld48/enough/Registry.h>
#endif
#ifndef INCLUDED_org_flixel_FlxBasic
#include <org/flixel/FlxBasic.h>
#endif
#ifndef INCLUDED_org_flixel_FlxObject
#include <org/flixel/FlxObject.h>
#endif
#ifndef INCLUDED_org_flixel_FlxSprite
#include <org/flixel/FlxSprite.h>
#endif
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{

Void Registry_obj::__construct()
{
	return null();
}

Registry_obj::~Registry_obj() { }

Dynamic Registry_obj::__CreateEmpty() { return  new Registry_obj; }
hx::ObjectPtr< Registry_obj > Registry_obj::__new()
{  hx::ObjectPtr< Registry_obj > result = new Registry_obj();
	result->__construct();
	return result;}

Dynamic Registry_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Registry_obj > result = new Registry_obj();
	result->__construct();
	return result;}

::com::jah2488::ld48::enough::Player Registry_obj::player;

Void Registry_obj::init( ){
{
		HX_STACK_PUSH("Registry::init","com/jah2488/ld48/enough/PlatformState.hx",28);
		HX_STACK_LINE(28)
		::com::jah2488::ld48::enough::Registry_obj::player = ::com::jah2488::ld48::enough::Player_obj::__new();
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(Registry_obj,init,(void))


Registry_obj::Registry_obj()
{
}

void Registry_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Registry);
	HX_MARK_END_CLASS();
}

void Registry_obj::__Visit(HX_VISIT_PARAMS)
{
}

Dynamic Registry_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"init") ) { return init_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"player") ) { return player; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Registry_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"player") ) { player=inValue.Cast< ::com::jah2488::ld48::enough::Player >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Registry_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("player"),
	HX_CSTRING("init"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Registry_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(Registry_obj::player,"player");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Registry_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(Registry_obj::player,"player");
};

Class Registry_obj::__mClass;

void Registry_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.Registry"), hx::TCanCast< Registry_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Registry_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
