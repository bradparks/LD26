#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_com_jah2488_ld48_enough_Player
#include <com/jah2488/ld48/enough/Player.h>
#endif
#ifndef INCLUDED_org_flixel_FlxBasic
#include <org/flixel/FlxBasic.h>
#endif
#ifndef INCLUDED_org_flixel_FlxG
#include <org/flixel/FlxG.h>
#endif
#ifndef INCLUDED_org_flixel_FlxObject
#include <org/flixel/FlxObject.h>
#endif
#ifndef INCLUDED_org_flixel_FlxPoint
#include <org/flixel/FlxPoint.h>
#endif
#ifndef INCLUDED_org_flixel_FlxSound
#include <org/flixel/FlxSound.h>
#endif
#ifndef INCLUDED_org_flixel_FlxSprite
#include <org/flixel/FlxSprite.h>
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
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{

Void Player_obj::__construct()
{
HX_STACK_PUSH("Player::new","com/jah2488/ld48/enough/Player.hx",8);
{
	HX_STACK_LINE(20)
	this->HEALTH = (int)1;
	HX_STACK_LINE(19)
	this->DOOR = (int)2;
	HX_STACK_LINE(18)
	this->LAVA = (int)3;
	HX_STACK_LINE(17)
	this->POWER = (int)4;
	HX_STACK_LINE(16)
	this->NORMAL = (int)0;
	HX_STACK_LINE(14)
	this->upsidedown = (int)1;
	HX_STACK_LINE(13)
	this->connected = false;
	HX_STACK_LINE(12)
	this->GRAVITY = (int)375;
	HX_STACK_LINE(23)
	super::__construct(null(),null(),null());
	HX_STACK_LINE(24)
	this->loadGraphic(HX_CSTRING("assets/player.png"),true,true,(int)16,(int)16,null(),null());
	HX_STACK_LINE(25)
	this->maxVelocity->x = (int)175;
	HX_STACK_LINE(26)
	this->maxVelocity->y = (int)250;
	HX_STACK_LINE(27)
	this->acceleration->y = this->GRAVITY;
	HX_STACK_LINE(28)
	this->drag->x = (this->maxVelocity->x * (int)4);
	HX_STACK_LINE(29)
	this->PLAYER_SPEED = (this->maxVelocity->x * (int)3);
}
;
	return null();
}

Player_obj::~Player_obj() { }

Dynamic Player_obj::__CreateEmpty() { return  new Player_obj; }
hx::ObjectPtr< Player_obj > Player_obj::__new()
{  hx::ObjectPtr< Player_obj > result = new Player_obj();
	result->__construct();
	return result;}

Dynamic Player_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Player_obj > result = new Player_obj();
	result->__construct();
	return result;}

Void Player_obj::update( ){
{
		HX_STACK_PUSH("Player::update","com/jah2488/ld48/enough/Player.hx",48);
		HX_STACK_THIS(this);
		HX_STACK_LINE(50)
		this->super::update();
		HX_STACK_LINE(52)
		if (((((int(this->touching) & int((int)256))) > (int)0))){
			HX_STACK_LINE(52)
			this->connected = true;
		}
		else{
			HX_STACK_LINE(54)
			this->connected = false;
		}
		HX_STACK_LINE(58)
		if (((this->state() == this->LAVA))){
			HX_STACK_LINE(59)
			this->acceleration->y = (int)25;
			HX_STACK_LINE(60)
			this->acceleration->x = (int)0;
		}
		else{
			HX_STACK_LINE(61)
			if (((this->state() == this->DOOR))){
				HX_STACK_LINE(62)
				this->acceleration->x = (int)0;
				HX_STACK_LINE(63)
				this->acceleration->y = -(this->GRAVITY);
			}
			else{
				HX_STACK_LINE(65)
				this->acceleration->x = (int)0;
				HX_STACK_LINE(66)
				this->acceleration->y = (this->GRAVITY * this->upsidedown);
			}
		}
		HX_STACK_LINE(69)
		if (((this->acceleration->y < (int)0))){
			HX_STACK_LINE(69)
			if (((this->angle < (int)180))){
				HX_STACK_LINE(70)
				hx::AddEq(this->angle,(int)20);
			}
			else{
				HX_STACK_LINE(72)
				this->angle = (int)180;
			}
		}
		else{
			HX_STACK_LINE(75)
			if (((this->angle > (int)0))){
				HX_STACK_LINE(76)
				hx::SubEq(this->angle,(int)10);
			}
			else{
				HX_STACK_LINE(78)
				this->angle = (int)0;
			}
		}
		HX_STACK_LINE(90)
		if (((bool(::org::flixel::FlxG_obj::keys->LEFT) || bool(::org::flixel::FlxG_obj::keys->A)))){
			HX_STACK_LINE(91)
			if (((this->state() != this->DOOR))){
				HX_STACK_LINE(91)
				this->set_facing((int)1);
			}
			else{
				HX_STACK_LINE(93)
				this->set_facing((int)16);
			}
			HX_STACK_LINE(96)
			this->acceleration->x = -(this->PLAYER_SPEED);
		}
		HX_STACK_LINE(99)
		if (((bool(::org::flixel::FlxG_obj::keys->RIGHT) || bool(::org::flixel::FlxG_obj::keys->D)))){
			HX_STACK_LINE(100)
			if (((this->state() != this->DOOR))){
				HX_STACK_LINE(100)
				this->set_facing((int)16);
			}
			else{
				HX_STACK_LINE(102)
				this->set_facing((int)1);
			}
			HX_STACK_LINE(105)
			this->acceleration->x = this->PLAYER_SPEED;
		}
		HX_STACK_LINE(108)
		if (((bool((((int(this->touching) & int((int)4096))) > (int)0)) || bool((((int(this->touching) & int((int)256))) > (int)0))))){
			HX_STACK_LINE(108)
			if (((bool((bool(::org::flixel::FlxG_obj::keys->SPACE) || bool(::org::flixel::FlxG_obj::keys->UP))) || bool(::org::flixel::FlxG_obj::keys->W)))){
				HX_STACK_LINE(110)
				if (((this->connected == false))){
					HX_STACK_LINE(110)
					::org::flixel::FlxG_obj::play(HX_CSTRING("Jump"),null(),null(),null());
				}
				HX_STACK_LINE(113)
				if (((this->state() != this->DOOR))){
					struct _Function_4_1{
						inline static Float Block( ::com::jah2488::ld48::enough::Player_obj *__this){
							HX_STACK_PUSH("*::closure","com/jah2488/ld48/enough/Player.hx",114);
							{
								HX_STACK_LINE(114)
								Float Value = (Float(__this->velocity->x) / Float((int)4));		HX_STACK_VAR(Value,"Value");
								HX_STACK_LINE(114)
								return (  (((Value > (int)0))) ? Float(Value) : Float(-(Value)) );
							}
							return null();
						}
					};
					HX_STACK_LINE(113)
					this->velocity->y = -((((this->upsidedown * ((this->maxVelocity->y * 0.60))) + _Function_4_1::Block(this))));
				}
				else{
					struct _Function_4_1{
						inline static Float Block( ::com::jah2488::ld48::enough::Player_obj *__this){
							HX_STACK_PUSH("*::closure","com/jah2488/ld48/enough/Player.hx",116);
							{
								HX_STACK_LINE(116)
								Float Value = (Float(__this->velocity->x) / Float((int)4));		HX_STACK_VAR(Value,"Value");
								HX_STACK_LINE(116)
								return (  (((Value > (int)0))) ? Float(Value) : Float(-(Value)) );
							}
							return null();
						}
					};
					HX_STACK_LINE(115)
					this->velocity->y = ((this->maxVelocity->y * 0.60) + _Function_4_1::Block(this));
				}
			}
		}
	}
return null();
}


Void Player_obj::die( Float x,Float y){
{
		HX_STACK_PUSH("Player::die","com/jah2488/ld48/enough/Player.hx",40);
		HX_STACK_THIS(this);
		HX_STACK_ARG(x,"x");
		HX_STACK_ARG(y,"y");
		HX_STACK_LINE(41)
		::org::flixel::FlxG_obj::play(HX_CSTRING("Hurt"),null(),null(),null());
		HX_STACK_LINE(42)
		this->acceleration->y = this->GRAVITY;
		HX_STACK_LINE(43)
		this->acceleration->x = (int)0;
		HX_STACK_LINE(44)
		this->set_frame(this->NORMAL);
		HX_STACK_LINE(45)
		this->reset(x,y);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Player_obj,die,(void))

int Player_obj::state( ){
	HX_STACK_PUSH("Player::state","com/jah2488/ld48/enough/Player.hx",36);
	HX_STACK_THIS(this);
	HX_STACK_LINE(36)
	return ::Std_obj::_int(this->get_frame());
}


HX_DEFINE_DYNAMIC_FUNC0(Player_obj,state,return )

Void Player_obj::setColor( int color){
{
		HX_STACK_PUSH("Player::setColor","com/jah2488/ld48/enough/Player.hx",32);
		HX_STACK_THIS(this);
		HX_STACK_ARG(color,"color");
		HX_STACK_LINE(32)
		this->set_frame(color);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Player_obj,setColor,(void))


Player_obj::Player_obj()
{
}

void Player_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Player);
	HX_MARK_MEMBER_NAME(HEALTH,"HEALTH");
	HX_MARK_MEMBER_NAME(DOOR,"DOOR");
	HX_MARK_MEMBER_NAME(LAVA,"LAVA");
	HX_MARK_MEMBER_NAME(POWER,"POWER");
	HX_MARK_MEMBER_NAME(NORMAL,"NORMAL");
	HX_MARK_MEMBER_NAME(upsidedown,"upsidedown");
	HX_MARK_MEMBER_NAME(connected,"connected");
	HX_MARK_MEMBER_NAME(GRAVITY,"GRAVITY");
	HX_MARK_MEMBER_NAME(PLAYER_SPEED,"PLAYER_SPEED");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Player_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(HEALTH,"HEALTH");
	HX_VISIT_MEMBER_NAME(DOOR,"DOOR");
	HX_VISIT_MEMBER_NAME(LAVA,"LAVA");
	HX_VISIT_MEMBER_NAME(POWER,"POWER");
	HX_VISIT_MEMBER_NAME(NORMAL,"NORMAL");
	HX_VISIT_MEMBER_NAME(upsidedown,"upsidedown");
	HX_VISIT_MEMBER_NAME(connected,"connected");
	HX_VISIT_MEMBER_NAME(GRAVITY,"GRAVITY");
	HX_VISIT_MEMBER_NAME(PLAYER_SPEED,"PLAYER_SPEED");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Player_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"die") ) { return die_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"DOOR") ) { return DOOR; }
		if (HX_FIELD_EQ(inName,"LAVA") ) { return LAVA; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"state") ) { return state_dyn(); }
		if (HX_FIELD_EQ(inName,"POWER") ) { return POWER; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"HEALTH") ) { return HEALTH; }
		if (HX_FIELD_EQ(inName,"NORMAL") ) { return NORMAL; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"GRAVITY") ) { return GRAVITY; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"setColor") ) { return setColor_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"connected") ) { return connected; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"upsidedown") ) { return upsidedown; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"PLAYER_SPEED") ) { return PLAYER_SPEED; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Player_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"DOOR") ) { DOOR=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"LAVA") ) { LAVA=inValue.Cast< int >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"POWER") ) { POWER=inValue.Cast< int >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"HEALTH") ) { HEALTH=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"NORMAL") ) { NORMAL=inValue.Cast< int >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"GRAVITY") ) { GRAVITY=inValue.Cast< int >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"connected") ) { connected=inValue.Cast< bool >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"upsidedown") ) { upsidedown=inValue.Cast< int >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"PLAYER_SPEED") ) { PLAYER_SPEED=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Player_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("HEALTH"));
	outFields->push(HX_CSTRING("DOOR"));
	outFields->push(HX_CSTRING("LAVA"));
	outFields->push(HX_CSTRING("POWER"));
	outFields->push(HX_CSTRING("NORMAL"));
	outFields->push(HX_CSTRING("upsidedown"));
	outFields->push(HX_CSTRING("connected"));
	outFields->push(HX_CSTRING("GRAVITY"));
	outFields->push(HX_CSTRING("PLAYER_SPEED"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("update"),
	HX_CSTRING("die"),
	HX_CSTRING("state"),
	HX_CSTRING("setColor"),
	HX_CSTRING("HEALTH"),
	HX_CSTRING("DOOR"),
	HX_CSTRING("LAVA"),
	HX_CSTRING("POWER"),
	HX_CSTRING("NORMAL"),
	HX_CSTRING("upsidedown"),
	HX_CSTRING("connected"),
	HX_CSTRING("GRAVITY"),
	HX_CSTRING("PLAYER_SPEED"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Player_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Player_obj::__mClass,"__mClass");
};

Class Player_obj::__mClass;

void Player_obj::__register()
{
	Static(__mClass) = hx::RegisterClass(HX_CSTRING("com.jah2488.ld48.enough.Player"), hx::TCanCast< Player_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Player_obj::__boot()
{
}

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough
