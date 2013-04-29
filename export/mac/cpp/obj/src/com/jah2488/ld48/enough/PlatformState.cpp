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
#ifndef INCLUDED_com_jah2488_ld48_enough_Door
#include <com/jah2488/ld48/enough/Door.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Goal
#include <com/jah2488/ld48/enough/Goal.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Health
#include <com/jah2488/ld48/enough/Health.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Lava
#include <com/jah2488/ld48/enough/Lava.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_PlatformState
#include <com/jah2488/ld48/enough/PlatformState.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Player
#include <com/jah2488/ld48/enough/Player.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Power
#include <com/jah2488/ld48/enough/Power.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Registry
#include <com/jah2488/ld48/enough/Registry.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Spike
#include <com/jah2488/ld48/enough/Spike.h>
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
#ifndef INCLUDED_org_flixel_FlxGroup
#include <org/flixel/FlxGroup.h>
#endif
#ifndef INCLUDED_org_flixel_FlxObject
#include <org/flixel/FlxObject.h>
#endif
#ifndef INCLUDED_org_flixel_FlxPoint
#include <org/flixel/FlxPoint.h>
#endif
#ifndef INCLUDED_org_flixel_FlxRect
#include <org/flixel/FlxRect.h>
#endif
#ifndef INCLUDED_org_flixel_FlxSound
#include <org/flixel/FlxSound.h>
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
#ifndef INCLUDED_org_flixel_system_FlxQuadTree
#include <org/flixel/system/FlxQuadTree.h>
#endif
#ifndef INCLUDED_org_flixel_system_input_FlxMouse
#include <org/flixel/system/input/FlxMouse.h>
#endif
#ifndef INCLUDED_org_flixel_system_input_IFlxInput
#include <org/flixel/system/input/IFlxInput.h>
#endif
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{

Void PlatformState_obj::__construct()
{
HX_STACK_PUSH("PlatformState::new","com/jah2488/ld48/enough/PlatformState.hx",217);
{
	HX_STACK_LINE(217)
	super::__construct();
}
;
	return null();
}

PlatformState_obj::~PlatformState_obj() { }

Dynamic PlatformState_obj::__CreateEmpty() { return  new PlatformState_obj; }
hx::ObjectPtr< PlatformState_obj > PlatformState_obj::__new()
{  hx::ObjectPtr< PlatformState_obj > result = new PlatformState_obj();
	result->__construct();
	return result;}

Dynamic PlatformState_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< PlatformState_obj > result = new PlatformState_obj();
	result->__construct();
	return result;}

Void PlatformState_obj::update( ){
{
		HX_STACK_PUSH("PlatformState::update","com/jah2488/ld48/enough/PlatformState.hx",299);
		HX_STACK_THIS(this);
		HX_STACK_LINE(300)
		{
			HX_STACK_LINE(300)
			Dynamic NotifyCallback = null();		HX_STACK_VAR(NotifyCallback,"NotifyCallback");
			HX_STACK_LINE(300)
			{
				HX_STACK_LINE(300)
				::org::flixel::FlxBasic ObjectOrGroup1 = this->player;		HX_STACK_VAR(ObjectOrGroup1,"ObjectOrGroup1");
				::org::flixel::FlxBasic ObjectOrGroup2 = this->level;		HX_STACK_VAR(ObjectOrGroup2,"ObjectOrGroup2");
				HX_STACK_LINE(300)
				if (((ObjectOrGroup1 == null()))){
					HX_STACK_LINE(300)
					ObjectOrGroup1 = ::org::flixel::FlxG_obj::get_state();
				}
				HX_STACK_LINE(300)
				if (((ObjectOrGroup2 == ObjectOrGroup1))){
					HX_STACK_LINE(300)
					ObjectOrGroup2 = null();
				}
				HX_STACK_LINE(300)
				::org::flixel::system::FlxQuadTree_obj::divisions = ::org::flixel::FlxG_obj::worldDivisions;
				HX_STACK_LINE(300)
				::org::flixel::system::FlxQuadTree quadTree = ::org::flixel::system::FlxQuadTree_obj::recycle(::org::flixel::FlxG_obj::worldBounds->x,::org::flixel::FlxG_obj::worldBounds->y,::org::flixel::FlxG_obj::worldBounds->width,::org::flixel::FlxG_obj::worldBounds->height,null());		HX_STACK_VAR(quadTree,"quadTree");
				HX_STACK_LINE(300)
				quadTree->load(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,::org::flixel::FlxObject_obj::separate_dyn());
				HX_STACK_LINE(300)
				bool result = quadTree->execute();		HX_STACK_VAR(result,"result");
				HX_STACK_LINE(300)
				quadTree->destroy();
				HX_STACK_LINE(300)
				result;
			}
		}
		HX_STACK_LINE(301)
		{
			HX_STACK_LINE(301)
			Dynamic NotifyCallback = null();		HX_STACK_VAR(NotifyCallback,"NotifyCallback");
			HX_STACK_LINE(301)
			{
				HX_STACK_LINE(301)
				::org::flixel::FlxBasic ObjectOrGroup1 = this->sprites;		HX_STACK_VAR(ObjectOrGroup1,"ObjectOrGroup1");
				::org::flixel::FlxBasic ObjectOrGroup2 = this->level;		HX_STACK_VAR(ObjectOrGroup2,"ObjectOrGroup2");
				HX_STACK_LINE(301)
				if (((ObjectOrGroup1 == null()))){
					HX_STACK_LINE(301)
					ObjectOrGroup1 = ::org::flixel::FlxG_obj::get_state();
				}
				HX_STACK_LINE(301)
				if (((ObjectOrGroup2 == ObjectOrGroup1))){
					HX_STACK_LINE(301)
					ObjectOrGroup2 = null();
				}
				HX_STACK_LINE(301)
				::org::flixel::system::FlxQuadTree_obj::divisions = ::org::flixel::FlxG_obj::worldDivisions;
				HX_STACK_LINE(301)
				::org::flixel::system::FlxQuadTree quadTree = ::org::flixel::system::FlxQuadTree_obj::recycle(::org::flixel::FlxG_obj::worldBounds->x,::org::flixel::FlxG_obj::worldBounds->y,::org::flixel::FlxG_obj::worldBounds->width,::org::flixel::FlxG_obj::worldBounds->height,null());		HX_STACK_VAR(quadTree,"quadTree");
				HX_STACK_LINE(301)
				quadTree->load(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,::org::flixel::FlxObject_obj::separate_dyn());
				HX_STACK_LINE(301)
				bool result = quadTree->execute();		HX_STACK_VAR(result,"result");
				HX_STACK_LINE(301)
				quadTree->destroy();
				HX_STACK_LINE(301)
				result;
			}
		}
		HX_STACK_LINE(302)
		{
			HX_STACK_LINE(302)
			::org::flixel::FlxBasic ObjectOrGroup1 = this->player;		HX_STACK_VAR(ObjectOrGroup1,"ObjectOrGroup1");
			::org::flixel::FlxBasic ObjectOrGroup2 = this->level;		HX_STACK_VAR(ObjectOrGroup2,"ObjectOrGroup2");
			Dynamic ProcessCallback = null();		HX_STACK_VAR(ProcessCallback,"ProcessCallback");
			HX_STACK_LINE(302)
			if (((ObjectOrGroup1 == null()))){
				HX_STACK_LINE(302)
				ObjectOrGroup1 = ::org::flixel::FlxG_obj::get_state();
			}
			HX_STACK_LINE(302)
			if (((ObjectOrGroup2 == ObjectOrGroup1))){
				HX_STACK_LINE(302)
				ObjectOrGroup2 = null();
			}
			HX_STACK_LINE(302)
			::org::flixel::system::FlxQuadTree_obj::divisions = ::org::flixel::FlxG_obj::worldDivisions;
			HX_STACK_LINE(302)
			::org::flixel::system::FlxQuadTree quadTree = ::org::flixel::system::FlxQuadTree_obj::recycle(::org::flixel::FlxG_obj::worldBounds->x,::org::flixel::FlxG_obj::worldBounds->y,::org::flixel::FlxG_obj::worldBounds->width,::org::flixel::FlxG_obj::worldBounds->height,null());		HX_STACK_VAR(quadTree,"quadTree");
			HX_STACK_LINE(302)
			quadTree->load(ObjectOrGroup1,ObjectOrGroup2,this->touchLevel_dyn(),ProcessCallback);
			HX_STACK_LINE(302)
			bool result = quadTree->execute();		HX_STACK_VAR(result,"result");
			HX_STACK_LINE(302)
			quadTree->destroy();
			HX_STACK_LINE(302)
			result;
		}
		HX_STACK_LINE(303)
		{
			HX_STACK_LINE(303)
			::org::flixel::FlxBasic ObjectOrGroup1 = this->player;		HX_STACK_VAR(ObjectOrGroup1,"ObjectOrGroup1");
			::org::flixel::FlxBasic ObjectOrGroup2 = this->sprites;		HX_STACK_VAR(ObjectOrGroup2,"ObjectOrGroup2");
			HX_STACK_LINE(303)
			if (((ObjectOrGroup1 == null()))){
				HX_STACK_LINE(303)
				ObjectOrGroup1 = ::org::flixel::FlxG_obj::get_state();
			}
			HX_STACK_LINE(303)
			if (((ObjectOrGroup2 == ObjectOrGroup1))){
				HX_STACK_LINE(303)
				ObjectOrGroup2 = null();
			}
			HX_STACK_LINE(303)
			::org::flixel::system::FlxQuadTree_obj::divisions = ::org::flixel::FlxG_obj::worldDivisions;
			HX_STACK_LINE(303)
			::org::flixel::system::FlxQuadTree quadTree = ::org::flixel::system::FlxQuadTree_obj::recycle(::org::flixel::FlxG_obj::worldBounds->x,::org::flixel::FlxG_obj::worldBounds->y,::org::flixel::FlxG_obj::worldBounds->width,::org::flixel::FlxG_obj::worldBounds->height,null());		HX_STACK_VAR(quadTree,"quadTree");
			HX_STACK_LINE(303)
			quadTree->load(ObjectOrGroup1,ObjectOrGroup2,this->pickUp_dyn(),::org::flixel::FlxObject_obj::separate_dyn());
			HX_STACK_LINE(303)
			bool result = quadTree->execute();		HX_STACK_VAR(result,"result");
			HX_STACK_LINE(303)
			quadTree->destroy();
			HX_STACK_LINE(303)
			result;
		}
		HX_STACK_LINE(304)
		{
			HX_STACK_LINE(304)
			::org::flixel::FlxBasic ObjectOrGroup1 = this->player;		HX_STACK_VAR(ObjectOrGroup1,"ObjectOrGroup1");
			::org::flixel::FlxBasic ObjectOrGroup2 = this->hazards;		HX_STACK_VAR(ObjectOrGroup2,"ObjectOrGroup2");
			Dynamic ProcessCallback = null();		HX_STACK_VAR(ProcessCallback,"ProcessCallback");
			HX_STACK_LINE(304)
			if (((ObjectOrGroup1 == null()))){
				HX_STACK_LINE(304)
				ObjectOrGroup1 = ::org::flixel::FlxG_obj::get_state();
			}
			HX_STACK_LINE(304)
			if (((ObjectOrGroup2 == ObjectOrGroup1))){
				HX_STACK_LINE(304)
				ObjectOrGroup2 = null();
			}
			HX_STACK_LINE(304)
			::org::flixel::system::FlxQuadTree_obj::divisions = ::org::flixel::FlxG_obj::worldDivisions;
			HX_STACK_LINE(304)
			::org::flixel::system::FlxQuadTree quadTree = ::org::flixel::system::FlxQuadTree_obj::recycle(::org::flixel::FlxG_obj::worldBounds->x,::org::flixel::FlxG_obj::worldBounds->y,::org::flixel::FlxG_obj::worldBounds->width,::org::flixel::FlxG_obj::worldBounds->height,null());		HX_STACK_VAR(quadTree,"quadTree");
			HX_STACK_LINE(304)
			quadTree->load(ObjectOrGroup1,ObjectOrGroup2,this->hazardCollide_dyn(),ProcessCallback);
			HX_STACK_LINE(304)
			bool result = quadTree->execute();		HX_STACK_VAR(result,"result");
			HX_STACK_LINE(304)
			quadTree->destroy();
			HX_STACK_LINE(304)
			result;
		}
		HX_STACK_LINE(306)
		this->super::update();
		HX_STACK_LINE(308)
		if (((this->player->y > (this->level->height + (this->player->height * (int)4))))){
			HX_STACK_LINE(308)
			if (((this->player->state() != this->player->NORMAL))){
				HX_STACK_LINE(309)
				this->player->y = ((int)0 - this->player->height);
			}
			else{
				HX_STACK_LINE(311)
				this->player->die(this->LEVEL_START->x,this->LEVEL_START->y);
			}
		}
		HX_STACK_LINE(315)
		if (((this->player->y < ((int)0 - (this->player->height * (int)4))))){
			HX_STACK_LINE(315)
			if (((this->player->state() != this->player->NORMAL))){
				HX_STACK_LINE(316)
				this->player->y = this->level->height;
			}
			else{
				HX_STACK_LINE(318)
				this->player->die(this->LEVEL_START->x,this->LEVEL_START->y);
			}
		}
	}
return null();
}


Void PlatformState_obj::hazardCollide( ::org::flixel::FlxObject player,::org::flixel::FlxObject tile){
{
		HX_STACK_PUSH("PlatformState::hazardCollide","com/jah2488/ld48/enough/PlatformState.hx",294);
		HX_STACK_THIS(this);
		HX_STACK_ARG(player,"player");
		HX_STACK_ARG(tile,"tile");
		HX_STACK_LINE(294)
		(hx::TCast< com::jah2488::ld48::enough::Player >::cast(player))->die(this->LEVEL_START->x,this->LEVEL_START->y);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(PlatformState_obj,hazardCollide,(void))

Void PlatformState_obj::touchLevel( ::org::flixel::FlxObject player,::org::flixel::FlxObject tile){
{
		HX_STACK_PUSH("PlatformState::touchLevel","com/jah2488/ld48/enough/PlatformState.hx",286);
		HX_STACK_THIS(this);
		HX_STACK_ARG(player,"player");
		HX_STACK_ARG(tile,"tile");
		HX_STACK_LINE(287)
		::com::jah2488::ld48::enough::Player player1 = hx::TCast< com::jah2488::ld48::enough::Player >::cast(player);		HX_STACK_VAR(player1,"player1");
		HX_STACK_LINE(288)
		if (((bool((((int(player1->touching) & int((int)256))) > (int)0)) && bool((player1->connected == false))))){
			HX_STACK_LINE(289)
			player1->connected = true;
			HX_STACK_LINE(290)
			::org::flixel::FlxG_obj::play(HX_CSTRING("Click"),null(),null(),null());
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(PlatformState_obj,touchLevel,(void))

Void PlatformState_obj::nextLevel( ){
{
		HX_STACK_PUSH("PlatformState::nextLevel","com/jah2488/ld48/enough/PlatformState.hx",282);
		HX_STACK_THIS(this);
		HX_STACK_LINE(282)
		::org::flixel::FlxG_obj::switchState(::MenuState_obj::__new());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(PlatformState_obj,nextLevel,(void))

Void PlatformState_obj::pickUp( ::org::flixel::FlxObject player,::org::flixel::FlxObject sprite){
{
		HX_STACK_PUSH("PlatformState::pickUp","com/jah2488/ld48/enough/PlatformState.hx",271);
		HX_STACK_THIS(this);
		HX_STACK_ARG(player,"player");
		HX_STACK_ARG(sprite,"sprite");
		HX_STACK_LINE(271)
		if ((((hx::TCast< com::jah2488::ld48::enough::Tile >::cast(sprite))->tile == (int)5))){
			HX_STACK_LINE(272)
			::org::flixel::FlxG_obj::flash((int)-1,(int)1,this->nextLevel_dyn(),null());
		}
		else{
			HX_STACK_LINE(275)
			::org::flixel::FlxG_obj::play(HX_CSTRING("Pickup"),null(),null(),null());
			HX_STACK_LINE(276)
			player->flicker((int)1);
			HX_STACK_LINE(277)
			(hx::TCast< com::jah2488::ld48::enough::Player >::cast(player))->setColor((hx::TCast< com::jah2488::ld48::enough::Tile >::cast(sprite))->playerColor);
			HX_STACK_LINE(278)
			sprite->kill();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(PlatformState_obj,pickUp,(void))

Void PlatformState_obj::destroy( ){
{
		HX_STACK_PUSH("PlatformState::destroy","com/jah2488/ld48/enough/PlatformState.hx",266);
		HX_STACK_THIS(this);
		HX_STACK_LINE(266)
		this->super::destroy();
	}
return null();
}


Void PlatformState_obj::assignSpritesToMap( ){
{
		HX_STACK_PUSH("PlatformState::assignSpritesToMap","com/jah2488/ld48/enough/PlatformState.hx",242);
		HX_STACK_THIS(this);
		HX_STACK_LINE(243)
		{
			HX_STACK_LINE(243)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< int > _g1 = Array_obj< int >::__new().Add((int)14).Add((int)15);		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(243)
			while(((_g < _g1->length))){
				HX_STACK_LINE(243)
				int tileNum = _g1->__get(_g);		HX_STACK_VAR(tileNum,"tileNum");
				HX_STACK_LINE(243)
				++(_g);
				HX_STACK_LINE(244)
				Array< ::org::flixel::FlxPoint > c = this->level->getTileCoords(tileNum,false);		HX_STACK_VAR(c,"c");
				HX_STACK_LINE(245)
				if (((c != null()))){
					HX_STACK_LINE(246)
					int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
					HX_STACK_LINE(246)
					while(((_g2 < c->length))){
						HX_STACK_LINE(246)
						::org::flixel::FlxPoint point = c->__get(_g2);		HX_STACK_VAR(point,"point");
						HX_STACK_LINE(246)
						++(_g2);
						HX_STACK_LINE(247)
						::com::jah2488::ld48::enough::Spike sprite = ::Type_obj::createInstance(hx::ClassOf< ::com::jah2488::ld48::enough::Spike >(),Dynamic( Array_obj<Dynamic>::__new().Add((point->x + (int)1)).Add((point->y - (int)1))));		HX_STACK_VAR(sprite,"sprite");
						HX_STACK_LINE(248)
						this->hazards->add(sprite);
					}
				}
			}
		}
		HX_STACK_LINE(253)
		{
			HX_STACK_LINE(253)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Dynamic _g1 = Dynamic( Array_obj<Dynamic>::__new().Add(hx::ClassOf< ::com::jah2488::ld48::enough::Power >()).Add(hx::ClassOf< ::com::jah2488::ld48::enough::Door >()).Add(hx::ClassOf< ::com::jah2488::ld48::enough::Lava >()).Add(hx::ClassOf< ::com::jah2488::ld48::enough::Health >()).Add(hx::ClassOf< ::com::jah2488::ld48::enough::Goal >()));		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(253)
			while(((_g < _g1->__Field(HX_CSTRING("length"),true)))){
				HX_STACK_LINE(253)
				Dynamic tile = _g1->__GetItem(_g);		HX_STACK_VAR(tile,"tile");
				HX_STACK_LINE(253)
				++(_g);
				HX_STACK_LINE(254)
				Array< ::org::flixel::FlxPoint > c = this->spriteLayer->getTileCoords(::Type_obj::createInstance(tile,Dynamic( Array_obj<Dynamic>::__new().Add((int)0).Add((int)0)))->__Field(HX_CSTRING("tile"),true),false);		HX_STACK_VAR(c,"c");
				HX_STACK_LINE(255)
				if (((c != null()))){
					HX_STACK_LINE(256)
					int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
					HX_STACK_LINE(256)
					while(((_g2 < c->length))){
						HX_STACK_LINE(256)
						::org::flixel::FlxPoint point = c->__get(_g2);		HX_STACK_VAR(point,"point");
						HX_STACK_LINE(256)
						++(_g2);
						HX_STACK_LINE(257)
						::org::flixel::FlxBasic sprite = ::Type_obj::createInstance(tile,Dynamic( Array_obj<Dynamic>::__new().Add(point->x).Add(point->y)));		HX_STACK_VAR(sprite,"sprite");
						HX_STACK_LINE(258)
						this->sprites->add(sprite);
					}
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(PlatformState_obj,assignSpritesToMap,(void))

Void PlatformState_obj::create( ){
{
		HX_STACK_PUSH("PlatformState::create","com/jah2488/ld48/enough/PlatformState.hx",227);
		HX_STACK_THIS(this);
		HX_STACK_LINE(228)
		::com::jah2488::ld48::enough::Registry_obj::init();
		HX_STACK_LINE(230)
		::org::flixel::FlxG_obj::set_bgColor((int)-1);
		HX_STACK_LINE(231)
		{
			HX_STACK_LINE(231)
			::org::flixel::system::input::FlxMouse _this = ::org::flixel::FlxG_obj::mouse;		HX_STACK_VAR(_this,"_this");
			HX_STACK_LINE(231)
			_this->_updateCursorContainer = false;
			HX_STACK_LINE(231)
			_this->_cursorContainer->set_visible(false);
		}
		HX_STACK_LINE(233)
		this->LEVEL_START = ::org::flixel::FlxPoint_obj::__new(20.0,20.0);
		HX_STACK_LINE(234)
		this->player = ::com::jah2488::ld48::enough::Registry_obj::player;
		HX_STACK_LINE(235)
		this->player->x = this->LEVEL_START->x;
		HX_STACK_LINE(236)
		this->player->y = this->LEVEL_START->y;
		HX_STACK_LINE(238)
		::org::flixel::FlxG_obj::playMusic(HX_CSTRING("Upbeat"),null());
	}
return null();
}



PlatformState_obj::PlatformState_obj()
{
}

void PlatformState_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(PlatformState);
	HX_MARK_MEMBER_NAME(hazards,"hazards");
	HX_MARK_MEMBER_NAME(sprites,"sprites");
	HX_MARK_MEMBER_NAME(spriteLayer,"spriteLayer");
	HX_MARK_MEMBER_NAME(level,"level");
	HX_MARK_MEMBER_NAME(player,"player");
	HX_MARK_MEMBER_NAME(LEVEL_START,"LEVEL_START");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void PlatformState_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(hazards,"hazards");
	HX_VISIT_MEMBER_NAME(sprites,"sprites");
	HX_VISIT_MEMBER_NAME(spriteLayer,"spriteLayer");
	HX_VISIT_MEMBER_NAME(level,"level");
	HX_VISIT_MEMBER_NAME(player,"player");
	HX_VISIT_MEMBER_NAME(LEVEL_START,"LEVEL_START");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic PlatformState_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"level") ) { return level; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"pickUp") ) { return pickUp_dyn(); }
		if (HX_FIELD_EQ(inName,"create") ) { return create_dyn(); }
		if (HX_FIELD_EQ(inName,"player") ) { return player; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		if (HX_FIELD_EQ(inName,"hazards") ) { return hazards; }
		if (HX_FIELD_EQ(inName,"sprites") ) { return sprites; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"nextLevel") ) { return nextLevel_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"touchLevel") ) { return touchLevel_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"spriteLayer") ) { return spriteLayer; }
		if (HX_FIELD_EQ(inName,"LEVEL_START") ) { return LEVEL_START; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"hazardCollide") ) { return hazardCollide_dyn(); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"assignSpritesToMap") ) { return assignSpritesToMap_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic PlatformState_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"level") ) { level=inValue.Cast< ::com::jah2488::ld48::Level >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"player") ) { player=inValue.Cast< ::com::jah2488::ld48::enough::Player >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"hazards") ) { hazards=inValue.Cast< ::org::flixel::FlxGroup >(); return inValue; }
		if (HX_FIELD_EQ(inName,"sprites") ) { sprites=inValue.Cast< ::org::flixel::FlxGroup >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"spriteLayer") ) { spriteLayer=inValue.Cast< ::com::jah2488::ld48::Level >(); return inValue; }
		if (HX_FIELD_EQ(inName,"LEVEL_START") ) { LEVEL_START=inValue.Cast< ::org::flixel::FlxPoint >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void PlatformState_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("hazards"));
	outFields->push(HX_CSTRING("sprites"));
	outFields->push(HX_CSTRING("spriteLayer"));
	outFields->push(HX_CSTRING("level"));
	outFields->push(HX_CSTRING("player"));
	outFields->push(HX_CSTRING("LEVEL_START"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("update"),
	HX_CSTRING("hazardCollide"),
	HX_CSTRING("touchLevel"),
	HX_CSTRING("nextLevel"),
	HX_CSTRING("pickUp"),
	HX_CSTRING("destroy"),
	HX_CSTRING("assignSpritesToMap"),
	HX_CSTRING("create"),
	HX_CSTRING("hazards"),
	HX_CSTRING("sprites"),
	HX_CSTRING("spriteLayer"),
	HX_CSTRING("level"),
	HX_CSTRING("player"),
	HX_CSTRING("LEVEL_START"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(PlatformState_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(PlatformState_obj::__mClass,"__mClass");
};

Class PlatformState_obj::__mClass;

void PlatformState_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.PlatformState"), hx::TCanCast< PlatformState_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void PlatformState_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
