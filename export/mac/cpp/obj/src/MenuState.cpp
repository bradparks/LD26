#include <hxcpp.h>

#ifndef INCLUDED_MenuState
#include <MenuState.h>
#endif
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
#ifndef INCLUDED_com_jah2488_ld48_enough_TutorialState
#include <com/jah2488/ld48/enough/TutorialState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_World
#include <com/jah2488/ld48/enough/World.h>
#endif
#ifndef INCLUDED_nme_installer_Assets
#include <nme/installer/Assets.h>
#endif
#ifndef INCLUDED_org_flixel_FlxBasic
#include <org/flixel/FlxBasic.h>
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
#ifndef INCLUDED_org_flixel_system_input_FlxInputStates
#include <org/flixel/system/input/FlxInputStates.h>
#endif
#ifndef INCLUDED_org_flixel_system_input_FlxKeyboard
#include <org/flixel/system/input/FlxKeyboard.h>
#endif
#ifndef INCLUDED_org_flixel_system_input_IFlxInput
#include <org/flixel/system/input/IFlxInput.h>
#endif

Void MenuState_obj::__construct()
{
HX_STACK_PUSH("MenuState::new","MenuState.hx",24);
{
	HX_STACK_LINE(24)
	super::__construct();
}
;
	return null();
}

MenuState_obj::~MenuState_obj() { }

Dynamic MenuState_obj::__CreateEmpty() { return  new MenuState_obj; }
hx::ObjectPtr< MenuState_obj > MenuState_obj::__new()
{  hx::ObjectPtr< MenuState_obj > result = new MenuState_obj();
	result->__construct();
	return result;}

Dynamic MenuState_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< MenuState_obj > result = new MenuState_obj();
	result->__construct();
	return result;}

Void MenuState_obj::update( ){
{
		HX_STACK_PUSH("MenuState::update","MenuState.hx",62);
		HX_STACK_THIS(this);
		HX_STACK_LINE(63)
		this->super::update();
		HX_STACK_LINE(64)
		if ((::org::flixel::FlxG_obj::keys->any())){
			HX_STACK_LINE(64)
			::org::flixel::FlxG_obj::switchState(::com::jah2488::ld48::enough::TutorialState_obj::__new());
		}
	}
return null();
}


Void MenuState_obj::destroy( ){
{
		HX_STACK_PUSH("MenuState::destroy","MenuState.hx",57);
		HX_STACK_THIS(this);
		HX_STACK_LINE(57)
		this->super::destroy();
	}
return null();
}


Void MenuState_obj::addMap( ){
{
		HX_STACK_PUSH("MenuState::addMap","MenuState.hx",39);
		HX_STACK_THIS(this);
		HX_STACK_LINE(41)
		::org::flixel::FlxTilemap map = ::org::flixel::FlxTilemap_obj::__new();		HX_STACK_VAR(map,"map");
		HX_STACK_LINE(42)
		::org::flixel::FlxTilemap level = map->loadMap(::nme::installer::Assets_obj::getText(HX_CSTRING("assets/levels/mapCSV_Menu_Map1.csv")),HX_CSTRING("assets/world.png"),(int)16,(int)16,(int)0,(int)0,(int)0,(int)1);		HX_STACK_VAR(level,"level");
		HX_STACK_LINE(44)
		{
			HX_STACK_LINE(44)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< int > _g1 = Array_obj< int >::__new().Add((int)1).Add((int)2);		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(44)
			while(((_g < _g1->length))){
				HX_STACK_LINE(44)
				int tile = _g1->__get(_g);		HX_STACK_VAR(tile,"tile");
				HX_STACK_LINE(44)
				++(_g);
				HX_STACK_LINE(45)
				Array< ::org::flixel::FlxPoint > c = level->getTileCoords(tile,false);		HX_STACK_VAR(c,"c");
				HX_STACK_LINE(46)
				if (((c != null()))){
					HX_STACK_LINE(47)
					int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
					HX_STACK_LINE(47)
					while(((_g2 < c->length))){
						HX_STACK_LINE(47)
						::org::flixel::FlxPoint point = c->__get(_g2);		HX_STACK_VAR(point,"point");
						HX_STACK_LINE(47)
						++(_g2);
						HX_STACK_LINE(48)
						::com::jah2488::ld48::enough::World sprite = ::Type_obj::createInstance(hx::ClassOf< ::com::jah2488::ld48::enough::World >(),Dynamic( Array_obj<Dynamic>::__new().Add(point->x).Add(point->y)));		HX_STACK_VAR(sprite,"sprite");
						HX_STACK_LINE(49)
						this->add(sprite);
					}
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(MenuState_obj,addMap,(void))

Void MenuState_obj::flashWhite( ){
{
		HX_STACK_PUSH("MenuState::flashWhite","MenuState.hx",35);
		HX_STACK_THIS(this);
		HX_STACK_LINE(35)
		::org::flixel::FlxG_obj::flash((int)-1,(int)2,this->addMap_dyn(),null());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(MenuState_obj,flashWhite,(void))

Void MenuState_obj::create( ){
{
		HX_STACK_PUSH("MenuState::create","MenuState.hx",29);
		HX_STACK_THIS(this);
		HX_STACK_LINE(30)
		::org::flixel::FlxG_obj::playMusic(HX_CSTRING("Ambient"),null());
		HX_STACK_LINE(31)
		::org::flixel::FlxG_obj::set_bgColor((int)-16777216);
		HX_STACK_LINE(32)
		::org::flixel::FlxG_obj::flash((int)-16777216,(int)1,this->flashWhite_dyn(),null());
	}
return null();
}



MenuState_obj::MenuState_obj()
{
}

void MenuState_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(MenuState);
	HX_MARK_MEMBER_NAME(level,"level");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void MenuState_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(level,"level");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic MenuState_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"level") ) { return level; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"addMap") ) { return addMap_dyn(); }
		if (HX_FIELD_EQ(inName,"create") ) { return create_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"flashWhite") ) { return flashWhite_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic MenuState_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"level") ) { level=inValue.Cast< ::com::jah2488::ld48::Level >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void MenuState_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("level"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("update"),
	HX_CSTRING("destroy"),
	HX_CSTRING("addMap"),
	HX_CSTRING("flashWhite"),
	HX_CSTRING("create"),
	HX_CSTRING("level"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(MenuState_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(MenuState_obj::__mClass,"__mClass");
};

Class MenuState_obj::__mClass;

void MenuState_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("MenuState"), hx::TCanCast< MenuState_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void MenuState_obj::__boot()
{
}

