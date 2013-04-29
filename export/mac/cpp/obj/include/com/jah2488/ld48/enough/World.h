#ifndef INCLUDED_com_jah2488_ld48_enough_World
#define INCLUDED_com_jah2488_ld48_enough_World

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <com/jah2488/ld48/enough/Tile.h>
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,Tile)
HX_DECLARE_CLASS4(com,jah2488,ld48,enough,World)
HX_DECLARE_CLASS2(org,flixel,FlxBasic)
HX_DECLARE_CLASS2(org,flixel,FlxObject)
HX_DECLARE_CLASS2(org,flixel,FlxSprite)
namespace com{
namespace jah2488{
namespace ld48{
namespace enough{


class World_obj : public ::com::jah2488::ld48::enough::Tile_obj{
	public:
		typedef ::com::jah2488::ld48::enough::Tile_obj super;
		typedef World_obj OBJ_;
		World_obj();
		Void __construct(Float x,Float y);

	public:
		static hx::ObjectPtr< World_obj > __new(Float x,Float y);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~World_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("World"); }

};

} // end namespace com
} // end namespace jah2488
} // end namespace ld48
} // end namespace enough

#endif /* INCLUDED_com_jah2488_ld48_enough_World */ 
