import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
    return (
        <>
          <header className='px-5 lg:px-0'>
            <nav>
              <Navbar></Navbar>
            </nav>
          </header>
          <main className='px-5 lg:px-0'>
            <Outlet></Outlet>  
          </main>
          <footer className='px-5 lg:px-0'>

          </footer>
        </>
    );
};

export default Root;