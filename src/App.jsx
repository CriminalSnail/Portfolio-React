import { useState } from 'react'

import './App.css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

import { SlSocialVkontakte } from "react-icons/sl";

import deved from "../src/assets/dev-ed-wave.png";
import code from "../src/assets/code.png";
import design from "../src/assets/design.png";
import consulting from "../src/assets/consulting.png";
import web1 from "../src/assets/web1.png";
import web2 from "../src/assets/web2.png";
import web3 from "../src/assets/web3.png";
import web4 from "../src/assets/web4.png";
import web5 from "../src/assets/web5.png";
import web6 from "../src/assets/web6.png";

function App() {

  const [darkMode, setDarkMode]= useState(false)
  return (
    <div className={darkMode ? "dark" : null}>
    <head>
    <title>Zaur`s Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
    </head>

    <main className="pb-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen ">
        <nav className="py-10 mb-12 flex justify-between ">
          <h1 className="text-xl font-burtons  dark:text-gray-300">developedbyme</h1>
          <ul className="flex items-center">
            <li >
              <BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)} } className="cursor-pointer text-xl  dark:text-white" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
                href="https://hh.ru/resume/d8c85732ff0c8809620039ed1f484470707a33"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Zaur Itlyashev
          </h2>
          <h3 className="text-xl py-2 md:text-3xl dark:text-gray-300  ">Starting Web-Developer</h3>
          <p className="text-medium py-5 leading-8 md:text-xl text-gray-800 max-w-xl mx-auto dark:text-gray-300">
            Looking to be a part of the team.Your team.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 dark:text-gray-300 py-3 text-gray-600  ">
          <a href="https://github.com/CriminalSnail"><AiFillGithub /></a>
          
          <a href="https://web.telegram.org/k/"><BiLogoTelegram /></a>  
          <a href="https://vk.com/id239477706"><SlSocialVkontakte /></a> 
          
        </div>
        <div className="relative mx-auto bg-gradient-to-b flex align-middle justify-center from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96  mb-10">
          <img src={deved} />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-gray-300">Skills i have </h3>
          <p className="text-md py-2 text-medium max-w-xxl mx-auto leading-8 text-gray-800 dark:text-gray-300 " >
            Since the beginning of my journey i  always strived to learn more and more, working with different frameworks and technologies, here they are: 
          </p>
          
        </div>



        <div className="lg:flex  justify-around gap-3">

        <div className="text-center flex-1 shadow-lg p-10 rounded-xl my-10  dark:bg-white">
            
              <img className="mx-auto w-auto h-auto" alt="" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
              HTML or JS i always keep it clean and simple.
              </h3>
             
              <h4 className="py-4 text-teal-600 whitespace-nowrap">Languages and frameworks i worked with: </h4>
              <p className="text-gray-800 py-1">HTML(intermediate)</p>
              <p className="text-gray-800 py-1">JavaScript (beginner) </p>
              <p className="text-gray-800 py-1">Node JS (beginner-intermediate) </p>
              <p className="text-gray-800 py-1">React(intermediate)</p>
              <p className="text-gray-800 py-1">Vue(beginner)</p>
              
            
          </div>
          <div className="text-center flex-1 shadow-lg p-10 rounded-xl my-10  dark:bg-white ">
            
              <img
                className="mx-auto w-auto h-auto"
                alt=""
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
              Pixel-perfect  cross-browser layouts.
              </h3>
              <h4 className="py-4 text-teal-600">Tools and  i use to make it happened. </h4>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Figma (Begginner level)</p>
              <p className="text-gray-800 py-1">Dev Tools</p>
            
          </div>

          

          <div className="text-center  flex-1 shadow-lg p-10 rounded-xl my-10  dark:bg-white">
            
              <img
              alt=""
                className="mx-auto w-auto h-auto"
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
              Productivity, positivity and professionalism
              </h3>
              
              <h4 className="py-4 text-teal-600">My other qualities:</h4>
              <p className="text-gray-800 py-1">Punctuality</p>
              <p className="text-gray-800 py-1">Opennes</p>
              <p className="text-gray-800 py-1">Self-organization</p>
              <p className="text-gray-800 py-1">Fast-learning</p>
              
            </div>
          </div>
        
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1  dark:text-gray-300">Portfolio</h3>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          
            <div className="basis-1/3 flex-1">
              <img
              alt=""
                className="rounded-lg object-cover w-full h-full"
                width={"100%"}
                height={"100%"}
                src={web1}
                
              />
            </div>

            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover w-full h-full"
                alt=""
                width={"100%"}
                height={"100%"}
                src={web2}
                
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover w-full h-full"
                alt=""
                width={"100%"}
                height={"100%"}
                src={web3}
                
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover w-full h-full"
                alt=""
                width={"100%"}
                height={"100%"}
                src={web4}
               
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover w-full h-full"
                alt=""
                width={"100%"}
                height={"100%"}
                src={web5}
                
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover w-full h-full"
                alt=""
                width={"100%"}
                height={"100%"}
                src={web6}
               
              />
            </div>
          </div>
        
      </section>
    </main>
    </div>
  )
}

export default App
