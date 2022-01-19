import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {

  const PersonContext = React.createContext('Onis Csadi');

  return (
    <div className="flex flex-col h-screen justify-center bg-slate-50">
      <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars2.githubusercontent.com/u/7099518?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt="" />
          <div className="text-center sm:text-left sm:flex-grow">
            <div className="mb-4">
              <PersonContext.Provider value="Onis Csadi">
                <p className="text-xl leading-tight">Onis Csadi</p>
                <p className="text-sm leading-tight text-gray-400">Software Engineer at Csadio</p>
              </PersonContext.Provider>
            </div>
            <div>
              <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal border-2 text-blue-400 border-blue-400 text-purple hover:bg-blue-400 hover:text-white">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
