#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_Level
#include <com/jah2488/ld48/Level.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_LevelOneState
#include <com/jah2488/ld48/enough/LevelOneState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_PlatformState
#include <com/jah2488/ld48/enough/PlatformState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Player
#include <com/jah2488/ld48/enough/Player.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_TutorialState
#include <com/jah2488/ld48/enough/TutorialState.h>
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

Void TutorialState_obj::__construct()
{
HX_STACK_PUSH("TutorialState::new","com/jah2488/ld48/enough/PlatformState.hx",33);
{
	HX_STACK_LINE(33)
	super::__construct();
}
;
	return null();
}

TutorialState_obj::~TutorialState_obj() { }

Dynamic TutorialState_obj::__CreateEmpty() { return  new TutorialState_obj; }
hx::ObjectPtr< TutorialState_obj > TutorialState_obj::__new()
{  hx::ObjectPtr< TutorialState_obj > result = new TutorialState_obj();
	result->__construct();
	return result;}

Dynamic TutorialState_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< TutorialState_obj > result = new TutorialState_obj();
	result->__construct();
	return result;}

Void TutorialState_obj::nextLevel( ){
{
		HX_STACK_PUSH("TutorialState::nextLevel","com/jah2488/ld48/enough/PlatformState.hx",56);
		HX_STACK_THIS(this);
		HX_STACK_LINE(56)
		::org::flixel::FlxG_obj::switchState(::com::jah2488::ld48::enough::LevelOneState_obj::__new());
	}
return null();
}


Void TutorialState_obj::create( ){
{
		HX_STACK_PUSH("TutorialState::create","com/jah2488/ld48/enough/PlatformState.hx",37);
		HX_STACK_THIS(this);
		HX_STACK_LINE(38)
		this->super::create();
		HX_STACK_LINE(40)
		this->add(this->level = ::com::jah2488::ld48::Level_obj::__new(HX_CSTRING("mapCSV_Tutorial_Map2.csv")));
		HX_STACK_LINE(41)
		this->spriteLayer = ::com::jah2488::ld48::Level_obj::__new(HX_CSTRING("mapCSV_Tutorial_Map3.csv"));
		HX_STACK_LINE(42)
		this->sprites = ::org::flixel::FlxGroup_obj::__new(null());
		HX_STACK_LINE(43)
		this->hazards = ::org::flixel::FlxGroup_obj::__new(null());
		HX_STACK_LINE(45)
		this->add(this->player);
		HX_STACK_LINE(47)
		this->assignSpritesToMap();
		HX_STACK_LINE(49)
		this->add(this->sprites);
		HX_STACK_LINE(50)
		this->add(this->hazards);
		HX_STACK_LINE(52)
		::org::flixel::FlxG_obj::camera->setBounds((int)0,(int)0,this->level->width,this->level->height,true);
		HX_STACK_LINE(53)
		::org::flixel::FlxG_obj::camera->follow(this->player,null(),null(),null());
	}
return null();
}



TutorialState_obj::TutorialState_obj()
{
}

void TutorialState_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(TutorialState);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void TutorialState_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic TutorialState_obj::__Field(const ::String &inName,bool inCallProp)
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

Dynamic TutorialState_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void TutorialState_obj::__GetFields(Array< ::String> &outFields)
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
	HX_MARK_MEMBER_NAME(TutorialState_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(TutorialState_obj::__mClass,"__mClass");
};

Class TutorialState_obj::__mClass;

void TutorialState_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.TutorialState"), hx::TCanCast< TutorialState_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void TutorialState_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
