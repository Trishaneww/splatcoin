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
            "relative dark:text-slate-50 items-center flex space-x-1 text-slate-950  w-[150px] text-3xl"
          )}>
            <p>SPLATCOIN</p>
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

      <div className="flex justify-center items-center gap-2">
        <div className="w-[40px] h-[40px] bg-slate-50 border-[1px] border-black flex justify-center items-center">
          <Twitter />
        </div>
        <div className="w-[40px] h-[40px] bg-slate-50 border-[1px] border-black flex justify-center items-center">
          <Instagram />
        </div>
        <div className="w-[40px] h-[40px] bg-slate-50 border-[1px] border-black flex justify-center items-center">
          <Facebook />
        </div>
      </div>



<nav className="lg:hidden bg-[#00030F]">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button text-slate-50 mt-2">
      <Menu  size={30}/>
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container bg-[#00030F] text-slate-50">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56 text-slate-50">
        <X size={30}/>
       
      </label>
      <a href="/#faq">FAQ</a> 
      <a href="/portfolio">Portfolio</a>
      <a href="/services">Services</a>
      <a href="/pricing">Pricing</a>
      <a href="/pricing">Contact</a>
      <Link href="/">
            <Button className="w-[320px] h-[55px] text-lg bg-[#1D4ED8] rounded-lg text-white mt-12">Get Access Now</Button>
        </Link>
    </div>
  </nav>
  </div>
  )}

export default Navbar