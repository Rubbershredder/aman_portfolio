import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto py-8 flex justify-center">
        <div className="flex items-center">
          <img src="./src/Components/Contact/Contact.gif" alt="" className="mr-4" />
          <h1 className="font-bold text-4xl">Contact Me</h1>
        </div>
      </div>
      <div className="container flex justify-center gap-8 mx-auto py-8">
      <h1 className="font-bold mb-4 text-center py-1"></h1>
      {/* <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}
      <a href="https://www.instagram.com/aman_muleva?igsh=OWtjNGxoZHAzZmQ2" target='blank'><img src="./src/Components/Contact/instagram.png" alt="Instagram" /></a>
      <a href="https://www.linkedin.com/in/aman-muleva-57b26b23a/" target='blank'><img src="./src/Components/Contact/linkedin.png" alt="" /></a>
      <a href="https://github.com/Rubbershredder" target='blank'><img src="./src/Components/Contact/github.png" alt="" /></a>
      <a href="mailto:amanmuleva@gmail.com" target='blank'><img src="./src/Components/Contact/mail.png" alt="" /></a>
      <a href=""><img src="./src/Components/Contact/resume.png" alt="" /></a>
    </div>
    </div>
  )
}

export default Footer