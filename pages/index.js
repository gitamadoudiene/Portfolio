//Next image
import Image from "next/image";

//Composants
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//motion
import { motion } from 'framer-motion'

//Variants
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>

      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto '>
          {/* title */}
          <div className='h1'>
            <h1> Hi, I'm Amadou DIENE <br /> <span className='text-accent'>Full-Stack developers</span></h1>
          </div>

          {/* Subtitle */}
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16  '>
          Hey there, I'm Amadou Diene! I'm your go-to guy for all things tech - Full-Stack Developer,
           Software Tester, Instructor, and Digital Enthusiast. I love building websites and apps using
            cool tools like React,Next, Angular & Node Js.
             I'm all about making sure everything works like a charm and teaching 
             others the ropes of coding and testing. Let's dive into the exciting world of tech and build something awesome together!
          </p>
        </div>
      </div>

      {/* image */}
      <div>
        <Image src="/your-image-path.jpg" alt="Your Image" width={500} height={500} />
      </div>

    </div>
  );
};

export default Home;
