#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Tile
#include <com/jah2488/ld48/enough/Tile.h>
#endif
#ifndef INCLUDED_native_display_DisplayObject
#include <native/display/DisplayObject.h>
#endif
#ifndef INCLUDED_native_display_DisplayObjectContainer
#include <native/display/DisplayObjectContainer.h>
#endif
#ifndef INCLUDED_native_display_IBitmapDrawable
#include <native/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_native_display_InteractiveObject
#include <native/display/InteractiveObject.h>
#endif
#ifndef INCLUDED_native_display_Sprite
#include <native/display/Sprite.h>
#endif
#ifndef INCLUDED_native_events_EventDispatcher
#include <native/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_native_events_IEventDispatcher
#include <native/events/IEventDispatcher.h>
#endif
#ifndef INCLUDED_org_flixel_FlxBasic
#include <org/flixel/FlxBasic.h>
#endif
#ifndef INCLUDED_org_flixel_FlxG
#include <org/flixel/FlxG.h>
#endif
#ifndef INCLUDED_org_flixel_FlxGame
#include <org/flixel/FlxGame.h>
#endif
#ifndef INCLUDED_org_flixel_FlxObject
#include <org/flixel/FlxObject.h>
#endif
#ifndef INCLUDED_org_flixel_FlxSprite
#include <org/flixel/FlxSprite.h>
#endif
#ifndef INCLUDED_org_flixel_FlxTimer
#include <org/flixel/FlxTimer.h>
#endif
#ifndef INCLUDED_org_flixel_system_FlxDebugger
#include <org/flixel/system/FlxDebugger.h>
#endif
#ifndef INCLUDED_org_flixel_system_FlxWindow
#include <org/flixel/system/FlxWindow.h>
#endif
#ifndef INCLUDED_org_flixel_system_debug_Log
#include <org/flixel/system/debug/Log.h>
#endif
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{

Void Tile_obj::__construct()
{
HX_STACK_PUSH("Tile::new","com/jah2488/ld48/enough/Tiles.hx",8);
{
	HX_STACK_LINE(11)
	this->playerColor = (int)0;
	HX_STACK_LINE(10)
	this->tile = (int)0;
	HX_STACK_LINE(15)
	super::__construct(null(),null(),null());
	HX_STACK_LINE(16)
	this->deathTimer = ::org::flixel::FlxTimer_obj::__new();
}
;
	return null();
}

Tile_obj::~Tile_obj() { }

Dynamic Tile_obj::__CreateEmpty() { return  new Tile_obj; }
hx::ObjectPtr< Tile_obj > Tile_obj::__new()
{  hx::ObjectPtr< Tile_obj > result = new Tile_obj();
	result->__construct();
	return result;}

Dynamic Tile_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Tile_obj > result = new Tile_obj();
	result->__construct();
	return result;}

Void Tile_obj::update( ){
{
		HX_STACK_PUSH("Tile::update","com/jah2488/ld48/enough/Tiles.hx",30);
		HX_STACK_THIS(this);
		HX_STACK_LINE(30)
		this->super::update();
	}
return null();
}


Void Tile_obj::reviveTile( ::org::flixel::FlxTimer timer){
{
		HX_STACK_PUSH("Tile::reviveTile","com/jah2488/ld48/enough/Tiles.hx",25);
		HX_STACK_THIS(this);
		HX_STACK_ARG(timer,"timer");
		HX_STACK_LINE(26)
		this->revive();
		HX_STACK_LINE(27)
		this->reset(this->x,this->y);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Tile_obj,reviveTile,(void))

Void Tile_obj::kill( ){
{
		HX_STACK_PUSH("Tile::kill","com/jah2488/ld48/enough/Tiles.hx",19);
		HX_STACK_THIS(this);
		HX_STACK_LINE(20)
		this->super::kill();
		HX_STACK_LINE(21)
		this->deathTimer->start((int)3,(int)1,this->reviveTile_dyn());
		HX_STACK_LINE(22)
		{
			HX_STACK_LINE(22)
			Dynamic Data = this->deathTimer->get_timeLeft();		HX_STACK_VAR(Data,"Data");
			HX_STACK_LINE(22)
			if (((bool((::org::flixel::FlxG_obj::_game != null())) && bool((::org::flixel::FlxG_obj::_game->getDebugger() != null()))))){
				struct _Function_3_1{
					inline static ::String Block( Dynamic &Data){
						HX_STACK_PUSH("*::closure","com/jah2488/ld48/enough/Tiles.hx",22);
						{
							HX_STACK_LINE(22)
							Dynamic AnyArray = hx::TCastToArray(Data);		HX_STACK_VAR(AnyArray,"AnyArray");
							HX_STACK_LINE(22)
							::String string = HX_CSTRING("");		HX_STACK_VAR(string,"string");
							HX_STACK_LINE(22)
							if (((bool((AnyArray != null())) && bool((AnyArray->__Field(HX_CSTRING("length"),true) > (int)0))))){
								HX_STACK_LINE(22)
								string = ::Std_obj::string(AnyArray->__GetItem((int)0));
								HX_STACK_LINE(22)
								int i = (int)1;		HX_STACK_VAR(i,"i");
								HX_STACK_LINE(22)
								int l = AnyArray->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(l,"l");
								HX_STACK_LINE(22)
								while(((i < l))){
									HX_STACK_LINE(22)
									hx::AddEq(string,(HX_CSTRING(", ") + ::Std_obj::string(AnyArray->__GetItem((i)++))));
								}
							}
							HX_STACK_LINE(22)
							return string;
						}
						return null();
					}
				};
				HX_STACK_LINE(22)
				::org::flixel::FlxG_obj::_game->getDebugger()->log->add((  (((Data == null()))) ? ::String(HX_CSTRING("ERROR: null object")) : ::String((  ((::Std_obj::is(Data,hx::ClassOf< Array<int> >()))) ? ::String(_Function_3_1::Block(Data)) : ::String(::Std_obj::string(Data)) )) ));
			}
		}
	}
return null();
}



Tile_obj::Tile_obj()
{
}

void Tile_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Tile);
	HX_MARK_MEMBER_NAME(deathTimer,"deathTimer");
	HX_MARK_MEMBER_NAME(playerColor,"playerColor");
	HX_MARK_MEMBER_NAME(tile,"tile");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Tile_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(deathTimer,"deathTimer");
	HX_VISIT_MEMBER_NAME(playerColor,"playerColor");
	HX_VISIT_MEMBER_NAME(tile,"tile");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Tile_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"kill") ) { return kill_dyn(); }
		if (HX_FIELD_EQ(inName,"tile") ) { return tile; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"reviveTile") ) { return reviveTile_dyn(); }
		if (HX_FIELD_EQ(inName,"deathTimer") ) { return deathTimer; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"playerColor") ) { return playerColor; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Tile_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"tile") ) { tile=inValue.Cast< int >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"deathTimer") ) { deathTimer=inValue.Cast< ::org::flixel::FlxTimer >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"playerColor") ) { playerColor=inValue.Cast< int >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Tile_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("deathTimer"));
	outFields->push(HX_CSTRING("playerColor"));
	outFields->push(HX_CSTRING("tile"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("update"),
	HX_CSTRING("reviveTile"),
	HX_CSTRING("kill"),
	HX_CSTRING("deathTimer"),
	HX_CSTRING("playerColor"),
	HX_CSTRING("tile"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Tile_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Tile_obj::__mClass,"__mClass");
};

Class Tile_obj::__mClass;

void Tile_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.Tile"), hx::TCanCast< Tile_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Tile_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
