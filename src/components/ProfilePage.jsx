import React from 'react'
import ProfilePicture from './ProfilePicture'
import ProfileHeading from './ProfileHeading'
import AboutSection from './AboutSection'
import SocialLinks from './SocialLinks'
import ContactCard from './ContactCard'

const ProfilePage = () => {
  return (
    <div className="text-center">
        <ProfilePicture />
        <ProfileHeading />
        <AboutSection />
        <SocialLinks />
        <ContactCard />
    </div>
  )
}

export default ProfilePage