'use client';

import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
// import SidebarLinkGroup from './SidebarLinkGroup';
import { PiChartLineBold } from 'react-icons/pi';
import { BiBookReader } from 'react-icons/bi';
import { IoPodiumOutline } from 'react-icons/io5';
import { GoChecklist } from 'react-icons/go';
import { SideBarSectionTitle } from './sidebar-section-title.component';
import { ArrowLeftIcon, LogoutIcon } from '@/components';
import { SheetButton } from '../important-buttons';
import { MilestonesButton } from '../important-buttons';
import { SideBarList } from './sidebar-list.component';
import { VscFeedback } from 'react-icons/vsc';
import { IoMailOutline } from 'react-icons/io5';
import { BiDonateHeart } from 'react-icons/bi';
import { RxDiscordLogo } from 'react-icons/rx';
import { SideBarSubmenu } from './siderbar-submenu.component';
import { HiLockClosed } from 'react-icons/hi';

interface SidebarProps {
  sidebarOpen: boolean;
  handleOpenCloseSideBar: (open: boolean) => void;
}

const bgStyle = 'bg-graydark dark:bg-meta-4';

export const Sidebar = ({
  sidebarOpen,
  handleOpenCloseSideBar,
}: SidebarProps): JSX.Element => {
  const pathname = usePathname();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const trigger = useRef<any>(null);
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const sidebar = useRef<any>(null);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-75 flex-col overflow-y-hidden bg-bg-sidebar duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='flex items-center justify-center gap-2 px-6 py-5 lg:py-6.5'>
        <button
          ref={trigger}
          onClick={() => handleOpenCloseSideBar(!sidebarOpen)}
          aria-controls='sidebar'
          aria-expanded={sidebarOpen}
          className='block lg:hidden'
        >
          <ArrowLeftIcon color='rgb(222, 228, 238 )' />
        </button>
      </div>
      <div className='m-auto pt-5 pb-10'>
        <Link href='/'>
          <Image
            width={195}
            height={80}
            src={'/images/illustration/fa.png'}
            alt='Logo'
          />
        </Link>
      </div>

      {/* Nota JH: Aca va un scroll, lo quite para no lidiar con CSS */}
      <div className='flex flex-col duration-300 ease-linear w-auto'>
        <nav className=' px-4 pb-4 lg:mt-2 lg:px-6'>
          <div>
            <SideBarSectionTitle title='Tracking' />
            <SideBarList className='px-4 gap-3'>
              <SheetButton sheetId='13NXrcQ6AzLjngFFWZfqS6avPHCYkpWJsn5Viarcw_q0' />
              <MilestonesButton />
            </SideBarList>

            <SideBarSectionTitle title='Herramientas' />
            <SideBarList>
              <SideBarSubmenu Icon={GoChecklist} title='Program'>
                <Link
                  href='/dashboard/program'
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4.5 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
                >
                  Stage I
                </Link>
                <Link
                  href='/checklist'
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4.5 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
                >
                  Stage II
                  <HiLockClosed />
                </Link>
                <Link
                  href='/checklist'
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4.5 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
                >
                  Stage III
                  <HiLockClosed />
                </Link>
              </SideBarSubmenu>
              <Link
                href='/dashboard/leaderboard'
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname.includes('leaderboard') && bgStyle
                }`}
              >
                <IoPodiumOutline />
                Leaderboard
              </Link>
              <Link
                href='/recommendedreadings'
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname.includes('recommendedreadings') &&
                  'bg-graydark dark:bg-meta-4'
                }`}
              >
                <BiBookReader />
                Lecturas recomendadas
              </Link>
              <a
                href=''
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
              >
                <RxDiscordLogo />
                Discord
              </a>
            </SideBarList>
            <SideBarSectionTitle title='OTHER' />
            <SideBarList>
              <Link
                href='/contacto'
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname.includes('logout') && bgStyle
                }`}
              >
                <IoMailOutline />
                Contacto
              </Link>
              <Link
                href='https://cafecito.app/freedomacademy'
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname.includes('logout') && bgStyle
                }`}
              >
                <BiDonateHeart />
                Donaciones
              </Link>
              <Link
                href='https://forms.gle/WM2Y798Tdn1S2tGF7'
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname.includes('logout') && bgStyle
                }`}
              >
                <VscFeedback />
                Feedback
              </Link>
            </SideBarList>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <SideBarSectionTitle title='USER' />
            <ul className='mb-6 flex flex-col gap-1.5'>
              <li>
                <Link
                  href='/logout'
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('logout') && bgStyle
                  }`}
                >
                  <LogoutIcon />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};
