#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_Level
#include <com/jah2488/ld48/Level.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_LevelFourState
#include <com/jah2488/ld48/enough/LevelFourState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_PlatformState
#include <com/jah2488/ld48/enough/PlatformState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Player
#include <com/jah2488/ld48/enough/Player.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_WinState
#include <com/jah2488/ld48/enough/WinState.h>
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

Void LevelFourState_obj::__construct()
{
HX_STACK_PUSH("LevelFourState::new","com/jah2488/ld48/enough/PlatformState.hx",153);
{
	HX_STACK_LINE(153)
	super::__construct();
}
;
	return null();
}

LevelFourState_obj::~LevelFourState_obj() { }

Dynamic LevelFourState_obj::__CreateEmpty() { return  new LevelFourState_obj; }
hx::ObjectPtr< LevelFourState_obj > LevelFourState_obj::__new()
{  hx::ObjectPtr< LevelFourState_obj > result = new LevelFourState_obj();
	result->__construct();
	return result;}

Dynamic LevelFourState_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< LevelFourState_obj > result = new LevelFourState_obj();
	result->__construct();
	return result;}

Void LevelFourState_obj::nextLevel( ){
{
		HX_STACK_PUSH("LevelFourState::nextLevel","com/jah2488/ld48/enough/PlatformState.hx",178);
		HX_STACK_THIS(this);
		HX_STACK_LINE(178)
		::org::flixel::FlxG_obj::switchState(::com::jah2488::ld48::enough::WinState_obj::__new());
	}
return null();
}


Void LevelFourState_obj::create( ){
{
		HX_STACK_PUSH("LevelFourState::create","com/jah2488/ld48/enough/PlatformState.hx",156);
		HX_STACK_THIS(this);
		HX_STACK_LINE(157)
		this->super::create();
		HX_STACK_LINE(159)
		this->player->y = this->LEVEL_START->y = (int)100;
		HX_STACK_LINE(160)
		this->player->x = this->LEVEL_START->x = (int)40;
		HX_STACK_LINE(162)
		this->add(this->level = ::com::jah2488::ld48::Level_obj::__new(HX_CSTRING("mapCSV_LevelFour_Map1.csv")));
		HX_STACK_LINE(163)
		this->spriteLayer = ::com::jah2488::ld48::Level_obj::__new(HX_CSTRING("mapCSV_LevelFour_Map2.csv"));
		HX_STACK_LINE(164)
		this->sprites = ::org::flixel::FlxGroup_obj::__new(null());
		HX_STACK_LINE(165)
		this->hazards = ::org::flixel::FlxGroup_obj::__new(null());
		HX_STACK_LINE(167)
		this->add(this->player);
		HX_STACK_LINE(169)
		this->assignSpritesToMap();
		HX_STACK_LINE(171)
		this->add(this->sprites);
		HX_STACK_LINE(172)
		this->add(this->hazards);
		HX_STACK_LINE(174)
		::org::flixel::FlxG_obj::camera->setBounds((int)0,(int)0,this->level->width,this->level->height,true);
		HX_STACK_LINE(175)
		::org::flixel::FlxG_obj::camera->follow(this->player,null(),null(),null());
	}
return null();
}



LevelFourState_obj::LevelFourState_obj()
{
}

void LevelFourState_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(LevelFourState);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void LevelFourState_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic LevelFourState_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"create") ) { return create_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"nextLevel") ) { return nextLevel_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic LevelFourState_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void LevelFourState_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("nextLevel"),
	HX_CSTRING("create"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(LevelFourState_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(LevelFourState_obj::__mClass,"__mClass");
};

Class LevelFourState_obj::__mClass;

void LevelFourState_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.LevelFourState"), hx::TCanCast< LevelFourState_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void LevelFourState_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
