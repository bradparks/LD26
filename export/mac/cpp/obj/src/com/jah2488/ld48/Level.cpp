#include <hxcpp.h>

#ifndef INCLUDED_com_jah2488_ld48_Level
#include <com/jah2488/ld48/Level.h>
#endif
#ifndef INCLUDED_nme_installer_Assets
#include <nme/installer/Assets.h>
#endif
#ifndef INCLUDED_org_flixel_FlxBasic
#include <org/flixel/FlxBasic.h>
#endif
#ifndef INCLUDED_org_flixel_FlxObject
#include <org/flixel/FlxObject.h>
#endif
#ifndef INCLUDED_org_flixel_FlxTilemap
#include <org/flixel/FlxTilemap.h>
#endif
namespace com{
namespace jah2488{
namespace ld48{

Void Level_obj::__construct(::String location)
{
HX_STACK_PUSH("Level::new","com/jah2488/ld48/Level.hx",20);
{
	HX_STACK_LINE(21)
	super::__construct();
	HX_STACK_LINE(22)
	this->loadMap(::nme::installer::Assets_obj::getText((HX_CSTRING("assets/levels/") + location)),HX_CSTRING("assets/platformTiles.png"),(int)16,(int)16,(int)0,(int)0,(int)1,(int)1);
}
;
	return null();
}

Level_obj::~Level_obj() { }

Dynamic Level_obj::__CreateEmpty() { return  new Level_obj; }
hx::ObjectPtr< Level_obj > Level_obj::__new(::String location)
{  hx::ObjectPtr< Level_obj > result = new Level_obj();
	result->__construct(location);
	return result;}

Dynamic Level_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Level_obj > result = new Level_obj();
	result->__construct(inArgs[0]);
	return result;}

int Level_obj::TILE_WIDTH;

int Level_obj::TILE_HEIGHT;

int Level_obj::START_INDEX;

int Level_obj::DRAW_INDEX;

int Level_obj::COLLIDE_INDEX;

::String Level_obj::MAP_DIR;

::String Level_obj::TILE_LOCATION;


Level_obj::Level_obj()
{
}

void Level_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Level);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Level_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Level_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"MAP_DIR") ) { return MAP_DIR; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"TILE_WIDTH") ) { return TILE_WIDTH; }
		if (HX_FIELD_EQ(inName,"DRAW_INDEX") ) { return DRAW_INDEX; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"TILE_HEIGHT") ) { return TILE_HEIGHT; }
		if (HX_FIELD_EQ(inName,"START_INDEX") ) { return START_INDEX; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"COLLIDE_INDEX") ) { return COLLIDE_INDEX; }
		if (HX_FIELD_EQ(inName,"TILE_LOCATION") ) { return TILE_LOCATION; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Level_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"MAP_DIR") ) { MAP_DIR=inValue.Cast< ::String >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"TILE_WIDTH") ) { TILE_WIDTH=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"DRAW_INDEX") ) { DRAW_INDEX=inValue.Cast< int >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"TILE_HEIGHT") ) { TILE_HEIGHT=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"START_INDEX") ) { START_INDEX=inValue.Cast< int >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"COLLIDE_INDEX") ) { COLLIDE_INDEX=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"TILE_LOCATION") ) { TILE_LOCATION=inValue.Cast< ::String >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Level_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("TILE_WIDTH"),
	HX_CSTRING("TILE_HEIGHT"),
	HX_CSTRING("START_INDEX"),
	HX_CSTRING("DRAW_INDEX"),
	HX_CSTRING("COLLIDE_INDEX"),
	HX_CSTRING("MAP_DIR"),
	HX_CSTRING("TILE_LOCATION"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Level_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(Level_obj::TILE_WIDTH,"TILE_WIDTH");
	HX_MARK_MEMBER_NAME(Level_obj::TILE_HEIGHT,"TILE_HEIGHT");
	HX_MARK_MEMBER_NAME(Level_obj::START_INDEX,"START_INDEX");
	HX_MARK_MEMBER_NAME(Level_obj::DRAW_INDEX,"DRAW_INDEX");
	HX_MARK_MEMBER_NAME(Level_obj::COLLIDE_INDEX,"COLLIDE_INDEX");
	HX_MARK_MEMBER_NAME(Level_obj::MAP_DIR,"MAP_DIR");
	HX_MARK_MEMBER_NAME(Level_obj::TILE_LOCATION,"TILE_LOCATION");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Level_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(Level_obj::TILE_WIDTH,"TILE_WIDTH");
	HX_VISIT_MEMBER_NAME(Level_obj::TILE_HEIGHT,"TILE_HEIGHT");
	HX_VISIT_MEMBER_NAME(Level_obj::START_INDEX,"START_INDEX");
	HX_VISIT_MEMBER_NAME(Level_obj::DRAW_INDEX,"DRAW_INDEX");
	HX_VISIT_MEMBER_NAME(Level_obj::COLLIDE_INDEX,"COLLIDE_INDEX");
	HX_VISIT_MEMBER_NAME(Level_obj::MAP_DIR,"MAP_DIR");
	HX_VISIT_MEMBER_NAME(Level_obj::TILE_LOCATION,"TILE_LOCATION");
};

Class Level_obj::__mClass;

void Level_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.Level"), hx::TCanCast< Level_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Level_obj::__boot()
{
	TILE_WIDTH= (int)16;
	TILE_HEIGHT= (int)16;
	START_INDEX= (int)0;
	DRAW_INDEX= (int)1;
	COLLIDE_INDEX= (int)1;
	MAP_DIR= HX_CSTRING("assets/levels/");
	TILE_LOCATION= HX_CSTRING("assets/platformTiles.png");
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
