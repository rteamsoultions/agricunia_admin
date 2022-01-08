import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: '~ Dashboard',
    to: '/',
  },

  {
    _tag: 'CSidebarNavItem',
    name: '~ About Agricunia',
    to: '/aboutagricunia',
  },

  {
    _tag: 'CSidebarNavItem',
    name: '~ About Us',
    to: '/aboutus',
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Agricademy page',
    to: '/',
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Green Market Page',
    to: '/',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '~ BIO Organic Farm page',
    to: '/farm-page',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '~ Contact Us page',
    to: '/',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Investment Page',
    to: '/',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Our Services',
    to: '/',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Partners page',
    to: '/',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Pesticide Products page',
    to: '/',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '~ Privacy Policy',
    to: '/privacy',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '~ Terms and Conditions',
    to: '/terms',
  },
  {
    _tag: 'CSidebarNavItem',
    name: '~ Users',
    to: '/user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Image Gallary',
    to: '/',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Video Gallary',
    to: '/',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Member Management',
    route: '/member',
    icon: <CIcon content={freeSet.cilGroup} />,
    _children: [
    {
    _tag: 'CSidebarNavDropdown',
    name: 'Stela member' ,
    route: '/',
    icon: <CIcon content={freeSet.cilContact} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All members',
        to: '/stelamember',
        icon: <CIcon content={freeSet.cilGroup} />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Withdrawal Member',
        to: '/withdrawalmember',
        icon: <CIcon content={freeSet.cilWallet} />,
      },
      
    ]
},
{
  _tag: 'CSidebarNavDropdown',
  name: 'Artist member' ,
  route: '/',
  icon: <CIcon content={freeSet.cilVoiceOverRecord} />,
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'All members',
      to: '/allartistmembers',
      icon: <CIcon content={freeSet.cilGroup} />,
    },
   
    
  ]
},
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Music Source',
    to: '/musicsource',
    icon:<CIcon content={freeSet.cilAudioSpectrum} />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Playlist',
    to: '/playlist',
    icon:<CIcon content={freeSet.cilMusicNote} />,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Customer Service',
    to: '/',
    icon:<CIcon content={freeSet.cilSettings} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'FAQ',
        to: '/faqlist',
        icon: <CIcon content={freeSet.cilSpeech} />,
      },
     
      
    ]
    
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Main Page',
    to: '/',
    icon:<CIcon content={freeSet.cilDevices} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'stela station',
        to: '/stelastation',
        icon: <CIcon content={freeSet.cilFeaturedPlaylist} />,
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'Today’s Collection',
        to: '/stelamember',
        icon: <CIcon content={freeSet.cilLibraryAdd} />,
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'New Launch',
        to: '/stelamember',
        icon: <CIcon content={freeSet.cilPlaylistAdd} />,
      },
     
      
    ]
    
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Admin Management',
    to: '/',
    icon:<CIcon content={freeSet.cilShieldAlt} />,
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sale Management',
    route: '/member',
    icon: <CIcon content={freeSet.cilMoney} />,
    _children: [
    {
    _tag: 'CSidebarNavDropdown',
    name: 'Payment History' ,
    route: '/',
    icon: <CIcon content={freeSet.cilGraph} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Subscription License',
        to: '/stelamember',
        icon: <CIcon content={freeSet.cilWindowRestore} />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Single License',
        to: '/theme/colors',
        icon: <CIcon content={freeSet.cilWindowMaximize} />,
      },
      
    ]
},
{
  _tag: 'CSidebarNavDropdown',
  name: 'Sales Status' ,
  route: '/',
  icon: <CIcon content={freeSet.cilCalculator} />,
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Subscription License',
      to: '/stelamember',
      icon: <CIcon content={freeSet.cilWindowRestore} />,
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Single License',
      to: '/theme/colors',
      icon: <CIcon content={freeSet.cilWindowMaximize} />,
    },
   
    
  ]
},
    ]
  },

  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Settlement',
    to: '/',
    icon:<CIcon content={freeSet.cilSettings} />,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Reserves Details',
        to: '/stelamember',
        icon: <CIcon content={freeSet.cilDescription} />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Settlement Pending',
        to: '/stelamember',
        icon: <CIcon content={freeSet.cilXCircle} />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Settlement Complete',
        to: '/stelamember',
        icon: <CIcon content={freeSet.cilCheckCircle} />,
      },
     
      
    ]
    
  },



]

export default _nav
