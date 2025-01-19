import React from 'react'
import ProfilePicture from './ProfilePicture'
import ProfileHeading from './ProfileHeading'
import AboutSection from './AboutSection'
import SocialLinks from './SocialLinks'
import ContactCard from './ContactCard'

const ProfilePage = () => {
  return (
    <>
    <div className="absolute">
      <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75"></div>
      <div className="relative text-center bg-vs-light rounded-lg px-6 py-20">
        <ProfilePicture />
        <ProfileHeading />
        <AboutSection />
        <SocialLinks />
        <ContactCard />
      </div>
    </div>
    </>
  )
}
//shadow-indigo-500/50 shadow-xl

export default ProfilePage