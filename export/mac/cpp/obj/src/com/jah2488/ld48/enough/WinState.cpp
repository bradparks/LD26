#include <hxcpp.h>

#ifndef INCLUDED_Type
#include <Type.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_Level
#include <com/jah2488/ld48/Level.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_PlatformState
#include <com/jah2488/ld48/enough/PlatformState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Tile
#include <com/jah2488/ld48/enough/Tile.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_WinState
#include <com/jah2488/ld48/enough/WinState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_World
#include <com/jah2488/ld48/enough/World.h>
#endif
#ifndef INCLUDED_org_flixel_FlxBasic
#include <org/flixel/FlxBasic.h>
#endif
#ifndef INCLUDED_org_flixel_FlxCamera
#include <org/flixel/FlxCamera.h>
#endif
#ifndef INCLUDED_org_flixel_FlxG
#include <org/flixel/FlxG.h>
#endif
#ifndef INCLUDED_org_flixel_FlxGroup
#include <org/flixel/FlxGroup.h>
#endif
#ifndef INCLUDED_org_flixel_FlxObject
#include <org/flixel/FlxObject.h>
#endif
#ifndef INCLUDED_org_flixel_FlxPoint
#include <org/flixel/FlxPoint.h>
#endif
#ifndef INCLUDED_org_flixel_FlxSprite
#include <org/flixel/FlxSprite.h>
#endif
#ifndef INCLUDED_org_flixel_FlxState
#include <org/flixel/FlxState.h>
#endif
#ifndef INCLUDED_org_flixel_FlxText
#include <org/flixel/FlxText.h>
#endif
#ifndef INCLUDED_org_flixel_FlxTilemap
#include <org/flixel/FlxTilemap.h>
#endif
#ifndef INCLUDED_org_flixel_FlxTypedGroup
#include <org/flixel/FlxTypedGroup.h>
#endif
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{

Void WinState_obj::__construct()
{
HX_STACK_PUSH("WinState::new","com/jah2488/ld48/enough/PlatformState.hx",184);
{
	HX_STACK_LINE(184)
	super::__construct();
}
;
	return null();
}

WinState_obj::~WinState_obj() { }

Dynamic WinState_obj::__CreateEmpty() { return  new WinState_obj; }
hx::ObjectPtr< WinState_obj > WinState_obj::__new()
{  hx::ObjectPtr< WinState_obj > result = new WinState_obj();
	result->__construct();
	return result;}

Dynamic WinState_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< WinState_obj > result = new WinState_obj();
	result->__construct();
	return result;}

Void WinState_obj::create( ){
{
		HX_STACK_PUSH("WinState::create","com/jah2488/ld48/enough/PlatformState.hx",189);
		HX_STACK_THIS(this);
		HX_STACK_LINE(190)
		this->super::create();
		HX_STACK_LINE(191)
		this->credits = ::org::flixel::FlxText_obj::__new(((Float(::org::flixel::FlxG_obj::width) / Float((int)2)) - (int)75),(::org::flixel::FlxG_obj::height * 0.95),(int)75,HX_CSTRING("@JAH2488"),null(),null(),null());
		HX_STACK_LINE(192)
		this->credits->set_color((int)-16777216);
		HX_STACK_LINE(194)
		this->level = ::com::jah2488::ld48::Level_obj::__new(HX_CSTRING("mapCSV_Win_Map1.csv"));
		HX_STACK_LINE(195)
		this->sprites = ::org::flixel::FlxGroup_obj::__new(null());
		HX_STACK_LINE(197)
		{
			HX_STACK_LINE(197)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< int > _g1 = Array_obj< int >::__new().Add((int)1).Add((int)2).Add((int)3);		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(197)
			while(((_g < _g1->length))){
				HX_STACK_LINE(197)
				int tile = _g1->__get(_g);		HX_STACK_VAR(tile,"tile");
				HX_STACK_LINE(197)
				++(_g);
				HX_STACK_LINE(198)
				Array< ::org::flixel::FlxPoint > c = this->level->getTileCoords(tile,false);		HX_STACK_VAR(c,"c");
				HX_STACK_LINE(199)
				if (((c != null()))){
					HX_STACK_LINE(200)
					int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
					HX_STACK_LINE(200)
					while(((_g2 < c->length))){
						HX_STACK_LINE(200)
						::org::flixel::FlxPoint point = c->__get(_g2);		HX_STACK_VAR(point,"point");
						HX_STACK_LINE(200)
						++(_g2);
						HX_STACK_LINE(201)
						::com::jah2488::ld48::enough::World sprite = ::Type_obj::createInstance(hx::ClassOf< ::com::jah2488::ld48::enough::World >(),Dynamic( Array_obj<Dynamic>::__new().Add(point->x).Add(point->y)));		HX_STACK_VAR(sprite,"sprite");
						HX_STACK_LINE(202)
						sprite->set_frame((int)3);
						HX_STACK_LINE(203)
						this->sprites->add(sprite);
					}
				}
			}
		}
		HX_STACK_LINE(208)
		this->add(this->sprites);
		HX_STACK_LINE(209)
		this->add(this->credits);
		HX_STACK_LINE(211)
		::org::flixel::FlxG_obj::camera->setBounds((int)0,(int)0,this->level->width,this->level->height,true);
	}
return null();
}



WinState_obj::WinState_obj()
{
}

void WinState_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(WinState);
	HX_MARK_MEMBER_NAME(credits,"credits");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void WinState_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(credits,"credits");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic WinState_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"create") ) { return create_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"credits") ) { return credits; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic WinState_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"credits") ) { credits=inValue.Cast< ::org::flixel::FlxText >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void WinState_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("credits"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("create"),
	HX_CSTRING("credits"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(WinState_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(WinState_obj::__mClass,"__mClass");
};

Class WinState_obj::__mClass;

void WinState_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.WinState"), hx::TCanCast< WinState_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void WinState_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
