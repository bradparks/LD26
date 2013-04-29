#ifndef INCLUDED_org_flixel_system_input_IFlxInput
#define INCLUDED_org_flixel_system_input_IFlxInput

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS4(org,flixel,system,input,IFlxInput)
namespace org{
namespace flixel{
namespace system{
namespace input{


class IFlxInput_obj : public hx::Interface{
	public:
		typedef hx::Interface super;
		typedef IFlxInput_obj OBJ_;
		HX_DO_INTERFACE_RTTI;
		static void __boot();
virtual Void destroy( )=0;
		Dynamic destroy_dyn();
virtual ::String toString( )=0;
		Dynamic toString_dyn();
virtual Void onFocusLost( )=0;
		Dynamic onFocusLost_dyn();
virtual Void onFocus( )=0;
		Dynamic onFocus_dyn();
virtual Void update( )=0;
		Dynamic update_dyn();
virtual Void reset( )=0;
		Dynamic reset_dyn();
};

#define DELEGATE_org_flixel_system_input_IFlxInput \
virtual Void destroy( ) { return mDelegate->destroy();}  \
virtual Dynamic destroy_dyn() { return mDelegate->destroy_dyn();}  \
virtual ::String toString( ) { return mDelegate->toString();}  \
virtual Dynamic toString_dyn() { return mDelegate->toString_dyn();}  \
virtual Void onFocusLost( ) { return mDelegate->onFocusLost();}  \
virtual Dynamic onFocusLost_dyn() { return mDelegate->onFocusLost_dyn();}  \
virtual Void onFocus( ) { return mDelegate->onFocus();}  \
virtual Dynamic onFocus_dyn() { return mDelegate->onFocus_dyn();}  \
virtual Void update( ) { return mDelegate->update();}  \
virtual Dynamic update_dyn() { return mDelegate->update_dyn();}  \
virtual Void reset( ) { return mDelegate->reset();}  \
virtual Dynamic reset_dyn() { return mDelegate->reset_dyn();}  \


template<typename IMPL>
class IFlxInput_delegate_ : public IFlxInput_obj
{
	protected:
		IMPL *mDelegate;
	public:
		IFlxInput_delegate_(IMPL *inDelegate) : mDelegate(inDelegate) {}
		hx::Object *__GetRealObject() { return mDelegate; }
		void __Visit(HX_VISIT_PARAMS) { HX_VISIT_OBJECT(mDelegate); }
		DELEGATE_org_flixel_system_input_IFlxInput
};

} // end namespace org
} // end namespace flixel
} // end namespace system
} // end namespace input

#endif /* INCLUDED_org_flixel_system_input_IFlxInput */ 