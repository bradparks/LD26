#include <hxcpp.h>

#ifndef INCLUDED_World
#include <World.h>
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

Void World_obj::__construct(Float x,Float y)
{
HX_STACK_PUSH("World::new","MenuState.hx",22);
{
	HX_STACK_LINE(23)
	super::__construct();
	HX_STACK_LINE(24)
	this->tile = (int)1;
	HX_STACK_LINE(25)
	this->playerColor = (int)4;
	HX_STACK_LINE(26)
	this->x = x;
	HX_STACK_LINE(27)
	this->y = y;
	HX_STACK_LINE(28)
	this->loadGraphic(HX_CSTRING("assets/world.png"),false,false,(int)16,(int)16,null(),null());
	HX_STACK_LINE(29)
	this->set_frame((int)1);
}
;
	return null();
}

World_obj::~World_obj() { }

Dynamic World_obj::__CreateEmpty() { return  new World_obj; }
hx::ObjectPtr< World_obj > World_obj::__new(Float x,Float y)
{  hx::ObjectPtr< World_obj > result = new World_obj();
	result->__construct(x,y);
	return result;}

Dynamic World_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< World_obj > result = new World_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


World_obj::World_obj()
{
}

void World_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(World);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void World_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic World_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic World_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void World_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(World_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(World_obj::__mClass,"__mClass");
};

Class World_obj::__mClass;

void World_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("World"), hx::TCanCast< World_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void World_obj::__boot()
{
}

