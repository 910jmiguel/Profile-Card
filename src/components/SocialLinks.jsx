import React from 'react'

const SocialLinks = () => {

    const socialLinks = [
        { url: "https://linkedin.com/in/910jmiguel", iconClass: "fa-brands fa-linkedin" },
        { url: "https://github.com/910jmiguel", iconClass: "fa-brands fa-github" },
    ];

  return (
    /*
    <div>
        
        {socialLinks.map((link, index) => (
            <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={link.iconClass}
            ></a>
        ))};
        
    </div>
    */
   <div>
    <a href="https://linkedin.com/in/910jmiguel" target="_blank" rel="noopener noreferrer">LinkedIn </a>
    <a href="https://github.com/910jmiguel" target="_blank" rel="noopener noreferrer">GitHub</a>
   </div>
  )
}

export default SocialLinks