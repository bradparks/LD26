#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_enough_Health
#include <com/jah2488/ld48/enough/Health.h>
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

Void Health_obj::__construct(Float x,Float y)
{
HX_STACK_PUSH("Health::new","com/jah2488/ld48/enough/Tiles.hx",118);
{
	HX_STACK_LINE(119)
	super::__construct();
	HX_STACK_LINE(120)
	this->tile = (int)4;
	HX_STACK_LINE(121)
	this->playerColor = (int)1;
	HX_STACK_LINE(122)
	this->x = x;
	HX_STACK_LINE(123)
	this->y = y;
	HX_STACK_LINE(124)
	this->loadGraphic(HX_CSTRING("assets/health.png"),true,false,(int)16,(int)16,null(),null());
	HX_STACK_LINE(125)
	this->addAnimation(HX_CSTRING("flow"),Array_obj< int >::__new().Add((int)0).Add((int)1).Add((int)2).Add((int)3).Add((int)4).Add((int)5).Add((int)6).Add((int)7).Add((int)8).Add((int)9).Add((int)10).Add((int)11).Add((int)12).Add((int)13).Add((int)14),(int)15,null());
	HX_STACK_LINE(126)
	this->play(HX_CSTRING("flow"),null());
}
;
	return null();
}

Health_obj::~Health_obj() { }

Dynamic Health_obj::__CreateEmpty() { return  new Health_obj; }
hx::ObjectPtr< Health_obj > Health_obj::__new(Float x,Float y)
{  hx::ObjectPtr< Health_obj > result = new Health_obj();
	result->__construct(x,y);
	return result;}

Dynamic Health_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Health_obj > result = new Health_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


Health_obj::Health_obj()
{
}

void Health_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Health);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Health_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Health_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic Health_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void Health_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Health_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Health_obj::__mClass,"__mClass");
};

Class Health_obj::__mClass;

void Health_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.Health"), hx::TCanCast< Health_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Health_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
