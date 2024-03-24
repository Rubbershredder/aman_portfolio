import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="font-bold mb-4 text-center py-1">
        <TypeAnimation
          sequence={[
            'I am Aman Muleva',
            2000, 
            'I am A Student',
            2000, 
            'I am An AI Enthusiast',
            2000, 
            'This Website Was Created by me' + ' and prompts from Claude AI',
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          cursor={true}
          repeat={Infinity}
        />
      </h1>
      <img className='mx-auto' src="./src/Components/Home/IT.gif" alt="" />

      <p>I am Aman Muleva, a dedicated student at Sri Venkateshwara College of Engineering. 
        I am passionate about technology and am currently working as a <a className="text-lg hover:underline" href="https://roadmap.sh/react" target='blank'><b>ReactJS developer</b></a>.
         I am also an AI enthusiast and am in the process of expanding my knowledge in <a className="text-lg hover:underline" href="https://www.ibm.com/topics/machine-learning" target='blank'><b>Machine Learning</b></a>. 
         I am always striving to excel in everything I do. 
        Outside of the tech field, I enjoy playing video games and basketball. 
        These activities help me relax and unwind after a busy day of coding and learning. 
        I am excited about the future and am eager to continue growing and learning in both my personal and professional life.</p>
    </div>
  );
};

export default Home;