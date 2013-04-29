#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_enough_Lava
#include <com/jah2488/ld48/enough/Lava.h>
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

Void Lava_obj::__construct(Float x,Float y)
{
HX_STACK_PUSH("Lava::new","com/jah2488/ld48/enough/Tiles.hx",104);
{
	HX_STACK_LINE(105)
	super::__construct();
	HX_STACK_LINE(106)
	this->tile = (int)2;
	HX_STACK_LINE(107)
	this->playerColor = (int)3;
	HX_STACK_LINE(108)
	this->x = x;
	HX_STACK_LINE(109)
	this->y = y;
	HX_STACK_LINE(110)
	this->loadGraphic(HX_CSTRING("assets/lava.png"),true,false,(int)16,(int)16,null(),null());
	HX_STACK_LINE(111)
	this->addAnimation(HX_CSTRING("flow"),Array_obj< int >::__new().Add((int)0).Add((int)1).Add((int)2).Add((int)3).Add((int)4).Add((int)5).Add((int)6).Add((int)7).Add((int)8).Add((int)9).Add((int)10).Add((int)11).Add((int)12),(int)15,null());
	HX_STACK_LINE(112)
	this->play(HX_CSTRING("flow"),null());
}
;
	return null();
}

Lava_obj::~Lava_obj() { }

Dynamic Lava_obj::__CreateEmpty() { return  new Lava_obj; }
hx::ObjectPtr< Lava_obj > Lava_obj::__new(Float x,Float y)
{  hx::ObjectPtr< Lava_obj > result = new Lava_obj();
	result->__construct(x,y);
	return result;}

Dynamic Lava_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Lava_obj > result = new Lava_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}


Lava_obj::Lava_obj()
{
}

void Lava_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Lava);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Lava_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Lava_obj::__Field(const ::String &inName,bool inCallProp)
{
	return super::__Field(inName,inCallProp);
}

Dynamic Lava_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void Lava_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Lava_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Lava_obj::__mClass,"__mClass");
};

Class Lava_obj::__mClass;

void Lava_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.Lava"), hx::TCanCast< Lava_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Lava_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
