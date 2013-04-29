#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_enough_Spike
#include <com/jah2488/ld48/enough/Spike.h>
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

Void Spike_obj::__construct(Float x,Float y)
{
HX_STACK_PUSH("Spike::new","com/jah2488/ld48/enough/Tiles.hx",64);
{
	HX_STACK_LINE(65)
	super::__construct();
	HX_STACK_LINE(66)
	this->tile = (int)14;
	HX_STACK_LINE(67)
	this->x = x;
	HX_STACK_LINE(68)
	this->y = y;
	HX_STACK_LINE(69)
	this->width = (int)14;
	HX_STACK_LINE(70)
	this->height = (int)18;
	HX_STACK_LINE(71)
	this->visible = false;
}
;
	return null();
}

Spike_obj::~Spike_obj() { }

Dynamic Spike_obj::__CreateEmpty() { return  new Spike_obj; }
hx::ObjectPtr< Spike_obj > Spike_obj::__new(Float x,Float y)
{  hx::ObjectPtr< Spike_obj > result = new Spike_obj();
	result->__construct(x,y);
	return result;}

Dynamic Spike_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Spike_obj > result = new Spike_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


Spike_obj::Spike_obj()
{
}

void Spike_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Spike);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Spike_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Spike_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic Spike_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void Spike_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Spike_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Spike_obj::__mClass,"__mClass");
};

Class Spike_obj::__mClass;

void Spike_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.Spike"), hx::TCanCast< Spike_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Spike_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
