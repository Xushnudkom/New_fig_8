import Link from 'next/link'
import React from 'react'
import Logo from '@/public/Logo.svg'
import UserLogo from '@/public/User.svg'
import Image from 'next/image'
import path from 'path'



const Index = () => {
  const links =[
    {path: "/marketplace", title: "Marketplace"},
    {path: "/rankings", title: "Rankings"},
    {path: "/wallet", title: "Connect a wallet"},

  ]
    
  
  return (
    <>
    <div className='justify-end flex gap-4 pt-3 pb-3'>
    <div  className='justify-start w-full items-center'>
    <Link href={'/'}>
    <Image src={Logo} alt='Logo'/>
    </Link>
    </div>
    <div className='w-full flex gap-10 container justify-end items-center'>
      
    {
              links.map((item, index)=>{
                return <Link href={item.path} key={index} className='text-[16px] font-semibold hover:text-[#A259FF] transition-all'>
                {item.title}
                </Link>
              })
            }
      <div className='flex text-[16px] bg-[#A259FF] pt-3 pb-3 pl-6 pr-6 rounded-full cursor-pointer'>
      <button className='flex'>
        <Image src={UserLogo} alt='USerLogo' className='flex mr-3 bor'/>
        Sign Up        
        </button>
      </div>
    </div>
        </div>
    </>
  )
}

export default Index