import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
    <Footer />
  </div>
);

export default Layout; 