#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_enough_Goal
#include <com/jah2488/ld48/enough/Goal.h>
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

Void Goal_obj::__construct(Float x,Float y)
{
HX_STACK_PUSH("Goal::new","com/jah2488/ld48/enough/Tiles.hx",51);
{
	HX_STACK_LINE(52)
	super::__construct();
	HX_STACK_LINE(53)
	this->tile = (int)5;
	HX_STACK_LINE(54)
	this->x = x;
	HX_STACK_LINE(55)
	this->y = y;
	HX_STACK_LINE(56)
	this->loadGraphic(HX_CSTRING("assets/goal.png"),true,false,(int)16,(int)16,null(),null());
	HX_STACK_LINE(57)
	this->addAnimation(HX_CSTRING("flow"),Array_obj< int >::__new().Add((int)0).Add((int)1).Add((int)2).Add((int)3).Add((int)4),(int)5,null());
	HX_STACK_LINE(58)
	this->play(HX_CSTRING("flow"),null());
}
;
	return null();
}

Goal_obj::~Goal_obj() { }

Dynamic Goal_obj::__CreateEmpty() { return  new Goal_obj; }
hx::ObjectPtr< Goal_obj > Goal_obj::__new(Float x,Float y)
{  hx::ObjectPtr< Goal_obj > result = new Goal_obj();
	result->__construct(x,y);
	return result;}

Dynamic Goal_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Goal_obj > result = new Goal_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


Goal_obj::Goal_obj()
{
}

void Goal_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Goal);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Goal_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Goal_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic Goal_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void Goal_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Goal_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Goal_obj::__mClass,"__mClass");
};

Class Goal_obj::__mClass;

void Goal_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.Goal"), hx::TCanCast< Goal_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Goal_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
