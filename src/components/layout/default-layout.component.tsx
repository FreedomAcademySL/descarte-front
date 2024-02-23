'use client';
import { useState } from 'react';
import { Header } from '@/components';
import { Sidebar } from '../sidebar/sidebar-main.component';

export const DefaultLayout = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenCloseSideBar = (open: boolean): void => {
    setSidebarOpen(open);
  };

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className='flex h-screen overflow-hidden '>
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          handleOpenCloseSideBar={handleOpenCloseSideBar}
        />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          {/* <!-- ===== Header Start ===== --> */}
          <Header
            sidebarOpen={sidebarOpen}
            handleOpenCloseSideBar={handleOpenCloseSideBar}
          />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
};
