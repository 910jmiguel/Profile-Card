import React from 'react'
import ProfilePicture from './ProfilePicture'
import ProfileHeading from './ProfileHeading'
import AboutSection from './AboutSection'
import SocialLinks from './SocialLinks'
import ContactCard from './ContactCard'

const ProfilePage = () => {
  return (
    <div className="text-center bg-vs-light shadow-indigo-500/50 shadow-xl rounded-lg px-6 py-20">
        <ProfilePicture />
        <ProfileHeading />
        <AboutSection />
        <SocialLinks />
        <ContactCard />
    </div>
  )
}

export default ProfilePage