#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_enough_Power
#include <com/jah2488/ld48/enough/Power.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Tile
#include <com/jah2488/ld48/enough/Tile.h>
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

Void Power_obj::__construct(Float x,Float y)
{
HX_STACK_PUSH("Power::new","com/jah2488/ld48/enough/Tiles.hx",76);
{
	HX_STACK_LINE(77)
	super::__construct();
	HX_STACK_LINE(78)
	this->tile = (int)1;
	HX_STACK_LINE(79)
	this->playerColor = (int)4;
	HX_STACK_LINE(80)
	this->x = x;
	HX_STACK_LINE(81)
	this->y = y;
	HX_STACK_LINE(82)
	this->loadGraphic(HX_CSTRING("assets/cPower.png"),true,false,(int)16,(int)16,null(),null());
	HX_STACK_LINE(83)
	this->addAnimation(HX_CSTRING("flow"),Array_obj< int >::__new().Add((int)0).Add((int)1).Add((int)2).Add((int)3).Add((int)4).Add((int)5).Add((int)6).Add((int)7).Add((int)8).Add((int)9).Add((int)10).Add((int)11).Add((int)12).Add((int)13),(int)15,null());
	HX_STACK_LINE(84)
	this->play(HX_CSTRING("flow"),null());
}
;
	return null();
}

Power_obj::~Power_obj() { }

Dynamic Power_obj::__CreateEmpty() { return  new Power_obj; }
hx::ObjectPtr< Power_obj > Power_obj::__new(Float x,Float y)
{  hx::ObjectPtr< Power_obj > result = new Power_obj();
	result->__construct(x,y);
	return result;}

Dynamic Power_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Power_obj > result = new Power_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


Power_obj::Power_obj()
{
}

void Power_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Power);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Power_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Power_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic Power_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void Power_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Power_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Power_obj::__mClass,"__mClass");
};

Class Power_obj::__mClass;

void Power_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.Power"), hx::TCanCast< Power_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Power_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
