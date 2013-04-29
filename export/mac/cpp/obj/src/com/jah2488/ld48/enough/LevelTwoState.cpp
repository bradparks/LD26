#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_Level
#include <com/jah2488/ld48/Level.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_LevelThreeState
#include <com/jah2488/ld48/enough/LevelThreeState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_LevelTwoState
#include <com/jah2488/ld48/enough/LevelTwoState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_PlatformState
#include <com/jah2488/ld48/enough/PlatformState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Player
#include <com/jah2488/ld48/enough/Player.h>
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

Void LevelTwoState_obj::__construct()
{
HX_STACK_PUSH("LevelTwoState::new","com/jah2488/ld48/enough/PlatformState.hx",92);
{
	HX_STACK_LINE(92)
	super::__construct();
}
;
	return null();
}

LevelTwoState_obj::~LevelTwoState_obj() { }

Dynamic LevelTwoState_obj::__CreateEmpty() { return  new LevelTwoState_obj; }
hx::ObjectPtr< LevelTwoState_obj > LevelTwoState_obj::__new()
{  hx::ObjectPtr< LevelTwoState_obj > result = new LevelTwoState_obj();
	result->__construct();
	return result;}

Dynamic LevelTwoState_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< LevelTwoState_obj > result = new LevelTwoState_obj();
	result->__construct();
	return result;}

Void LevelTwoState_obj::nextLevel( ){
{
		HX_STACK_PUSH("LevelTwoState::nextLevel","com/jah2488/ld48/enough/PlatformState.hx",117);
		HX_STACK_THIS(this);
		HX_STACK_LINE(117)
		::org::flixel::FlxG_obj::switchState(::com::jah2488::ld48::enough::LevelThreeState_obj::__new());
	}
return null();
}


Void LevelTwoState_obj::create( ){
{
		HX_STACK_PUSH("LevelTwoState::create","com/jah2488/ld48/enough/PlatformState.hx",95);
		HX_STACK_THIS(this);
		HX_STACK_LINE(96)
		this->super::create();
		HX_STACK_LINE(98)
		this->player->y = this->LEVEL_START->y = (int)100;
		HX_STACK_LINE(99)
		this->player->x = this->LEVEL_START->x = (int)40;
		HX_STACK_LINE(101)
		this->add(this->level = ::com::jah2488::ld48::Level_obj::__new(HX_CSTRING("mapCSV_LevelTwo_Map1.csv")));
		HX_STACK_LINE(102)
		this->spriteLayer = ::com::jah2488::ld48::Level_obj::__new(HX_CSTRING("mapCSV_LevelTwo_Map2.csv"));
		HX_STACK_LINE(103)
		this->sprites = ::org::flixel::FlxGroup_obj::__new(null());
		HX_STACK_LINE(104)
		this->hazards = ::org::flixel::FlxGroup_obj::__new(null());
		HX_STACK_LINE(106)
		this->add(this->player);
		HX_STACK_LINE(108)
		this->assignSpritesToMap();
		HX_STACK_LINE(110)
		this->add(this->sprites);
		HX_STACK_LINE(111)
		this->add(this->hazards);
		HX_STACK_LINE(113)
		::org::flixel::FlxG_obj::camera->setBounds((int)0,(int)0,this->level->width,this->level->height,true);
		HX_STACK_LINE(114)
		::org::flixel::FlxG_obj::camera->follow(this->player,null(),null(),null());
	}
return null();
}



LevelTwoState_obj::LevelTwoState_obj()
{
}

void LevelTwoState_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(LevelTwoState);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void LevelTwoState_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic LevelTwoState_obj::__Field(const ::String &inName,bool inCallProp)
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

Dynamic LevelTwoState_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void LevelTwoState_obj::__GetFields(Array< ::String> &outFields)
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
	HX_MARK_MEMBER_NAME(LevelTwoState_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(LevelTwoState_obj::__mClass,"__mClass");
};

Class LevelTwoState_obj::__mClass;

void LevelTwoState_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.LevelTwoState"), hx::TCanCast< LevelTwoState_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void LevelTwoState_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
