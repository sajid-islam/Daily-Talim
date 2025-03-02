'use client';
import Navbar from '@/components/navbar/Navbar';
import RightSidebar from '@/components/rightSidebar/RightSidebar';
import { useState } from 'react';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  return (
    <main>
      <header className="fixed z-40 h-16 w-full border-b bg-white lg:z-50">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isRightSidebarOpen={isRightSidebarOpen}
          setIsRightSidebarOpen={setIsRightSidebarOpen}
        />
      </header>
      <section className="flex gap-4">
        <div
          className={`flex-1 ${isSidebarOpen ? 'lg:pl-72' : 'pl-0'} transition-padding pt-16 duration-300 md:pr-72`}
        >
          {children}
        </div>
        <aside className="md:pt-16">
          <RightSidebar
            isRightSidebarOpen={isRightSidebarOpen}
            setIsRightSidebarOpen={setIsRightSidebarOpen}
          />
        </aside>
      </section>
    </main>
  );
};

export default MainLayout;
