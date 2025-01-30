"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import '../styles/global.scss';
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import { BluetoothConnected, Facebook, Instagram, Menu, Twitter, X } from 'lucide-react'
import { navItems } from '@/data'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const switch_menu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="flex w-full justify-between items-center h-[80px] p-6 pt-8 lg:px-28 navbar self-center scroll-smooth z-50 mb-20 bg-transparent border-b-[1px] border-b-[#0000005f]">
      <Link href='/' className={cn(
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-950 w-[150px] text-xl lg:text-3xl font-extrabold"
          )}>
            <p>$SPLATCOIN</p>
      </Link>

      <div className="flex justify-center items-center gap-8">
      {navItems.map((navItem: any, idx: number) => (
        <Link 
          key={idx} 
          href={navItem.link}
          className={cn(
            "relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-950"
          )}
        >
          <span className="!cursor-pointer text-lg font-bold">{navItem.name}</span>
        </Link>
      ))}
      </div>

      <Button className="h-[55px] w-[160px] text-lg font-bold hidden lg:flex">Buy Now</Button>

      {/* <div className="flex justify-center items-center gap-2">
        <div className="w-[42px] h-[42px] bg-slate-50 border-[1px] border-black flex justify-center items-center rounded-full">
          <Twitter />
        </div>
        <div className="w-[42px] h-[42px] bg-slate-50 border-[1px] border-black flex justify-center items-center rounded-full">
          <Instagram />
        </div>
        <div className="w-[42px] h-[42px] bg-slate-50 border-[1px] border-black flex justify-center items-center rounded-full">
          <Facebook />
        </div>
      </div> */}



<nav className="lg:hidden bg-[#00030F] bg-transparent">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button text-slate-950 mt-2">
      <Menu  size={30}/>
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container bg-[#00030F] text-slate-50">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56 text-slate-950">
        <X size={30}/>
       
      </label>
      <a href="/about">ABOUT</a>
      <a href="/process">HOW TO BUY</a>
      <a href="/#tokenomic">TOKENOMICS</a>
      <Link href="/">
            <Button className="w-[320px] h-[55px] text-lg bg-[#1D4ED8] rounded-lg text-white mt-12">Get Access Now</Button>
        </Link>
    </div>
  </nav>
  </div>
  )}

export default Navbar