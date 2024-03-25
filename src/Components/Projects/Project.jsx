import React from 'react'

const Project = () => {
  return (
    <div>
      <div className="container mx-auto py-8 flex justify-center">
        <div className="flex items-center">
          <img src={"/Assests/Folder.gif"} alt="" className="mr-4" />
          <h1 className="font-bold text-4xl">Projects</h1>
        </div>
      </div>
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card bg-transparent text-[#38d111] border-2 border-[#38d111] shadow-[#38d111] shadow-inner p-4 text-monospace animation-flicker">
          <img src={"/Assests/Project.gif"} alt="Projects" className='mx-auto'/>
          <div className="card-body">
            <h2 className="card-title text-2xl hover:underline text-center">
              <a href="https://github.com/Rubbershredder/College_Adimission_Website/tree/main" target='blank'><strong>Project 1</strong></a>
            </h2>
            <p>This was the my very first atempt on a frontend project all by myself. This Project is about the college admission portal</p>
          </div>
        </div>

        {<div className="card bg-transparent text-[#38d111] border-2 border-[#38d111] shadow-[#38d111] shadow-inner p-4 text-monospace animation-flicker">
        <img src={"/Assests/Project.gif"} alt="Projects" className='mx-auto'/>
          <div className="card-body">
            <h2 className="card-title text-2xl hover:underline text-center">
              <a href="https://github.com/Rubbershredder/aman_portfolio" target='blank'><strong>Project 2</strong></a>
            </h2>
            <p>This is the my very first portfolio. This project is an integration of my current knowledge in frontend and backend and a very prominent usage of Claude AI  </p>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Project