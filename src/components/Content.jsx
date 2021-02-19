import React from 'react';
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import WorksPage from './pages/WorksPage'
import AboutPage from './pages/AboutPage'
import BooksPage from './pages/Books'
import TestPage from './pages/TestPage'

const Content = () => {
    const currentPath = window.location.pathname
    return (
        <div className="component">
    
            {currentPath === '/' && <HomePage />}
            {currentPath === '/users-page' && <UserPage />}
            {currentPath === '/works' && <WorksPage />}
            {currentPath === '/books' && <BooksPage />}
            {currentPath === '/about' && <AboutPage />}
            {currentPath === '/test' && <TestPage/>}
  
       </div>
    
)
}

export default Content;