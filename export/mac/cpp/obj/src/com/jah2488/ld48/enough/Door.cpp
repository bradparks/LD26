#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_enough_Door
#include <com/jah2488/ld48/enough/Door.h>
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

Void Door_obj::__construct(Float x,Float y)
{
HX_STACK_PUSH("Door::new","com/jah2488/ld48/enough/Tiles.hx",90);
{
	HX_STACK_LINE(91)
	super::__construct();
	HX_STACK_LINE(92)
	this->tile = (int)3;
	HX_STACK_LINE(93)
	this->playerColor = (int)2;
	HX_STACK_LINE(94)
	this->x = x;
	HX_STACK_LINE(95)
	this->y = y;
	HX_STACK_LINE(96)
	this->loadGraphic(HX_CSTRING("assets/door.png"),true,false,(int)16,(int)16,null(),null());
	HX_STACK_LINE(97)
	this->addAnimation(HX_CSTRING("flow"),Array_obj< int >::__new().Add((int)0).Add((int)1).Add((int)2).Add((int)3).Add((int)4).Add((int)5).Add((int)6).Add((int)7).Add((int)8).Add((int)9).Add((int)10).Add((int)11),(int)15,null());
	HX_STACK_LINE(98)
	this->play(HX_CSTRING("flow"),null());
}
;
	return null();
}

Door_obj::~Door_obj() { }

Dynamic Door_obj::__CreateEmpty() { return  new Door_obj; }
hx::ObjectPtr< Door_obj > Door_obj::__new(Float x,Float y)
{  hx::ObjectPtr< Door_obj > result = new Door_obj();
	result->__construct(x,y);
	return result;}

Dynamic Door_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Door_obj > result = new Door_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


Door_obj::Door_obj()
{
}

void Door_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Door);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Door_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Door_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic Door_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void Door_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Door_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Door_obj::__mClass,"__mClass");
};

Class Door_obj::__mClass;

void Door_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.Door"), hx::TCanCast< Door_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Door_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
