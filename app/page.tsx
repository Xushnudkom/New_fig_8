import Image from "next/image";
import RacketStart from '@/public/RocketLaunch.svg'
import InfoAdditional from '@/public/Additional Info.svg'
import IntroImage from '@/public/IntroImage.svg'
import Animal_dog from '@/public/Animals_dog.svg'
import Animal_cat from '@/public/Animals_cat.svg'
import Animal_bear from '@/public/animals_bear.svg'
import Animal_add from '@/public/animals_plus.svg'
import Avatar_cat from '@/public/avatar_cat.svg'
import Number from '@/public/Ranking Number.svg'
import Avat_woman from '@/public/Avatar_women.svg'
import Art from '@/public/Category Card.svg'
import Collection from '@/public/Category Card (1).svg'
import Music from '@/public/Category Card (2).svg'
import Photo from '@/public/Category Card (3).svg'
import Video from '@/public/Category Card (4).svg'
import Utility from '@/public/Category Card (5).svg'
import Sport from '@/public/Category Card (6).svg'
import Virtual from '@/public/Category Card (7).svg'
import Eye from '@/public/Eye.svg'
import Galaxy from '@/public/NFT Card.svg'
import Life from '@/public/NFT Card (3).svg'
import Astro from '@/public/NFT Card (2).svg'
import Bacground from '@/public/NFT Highlight.svg'
import Wallet from '@/public/Info Card.svg'


export default function Home() {
  return (
    <main className="pl-20 pr-20 w-full">
      {/* <h1 className='w-full flex justify-center text-[30px]'>
        
      </h1> */}

      <section>
        <div className="mt-12">
          <h1 className="font-semibold w-96 text-[67px]">Discover Digital Art & Collect NFTs</h1>
          <p className="text-[22px] mt-2 text-[#FFFFFF] font-light">NFT Marketplace UI Created With Anima For <br /> Figma. Collect, Buy And Sell Art From More <br /> Than 20k NFT Artists.</p>

          <div className="ml-96">
          <Image src={IntroImage} alt="IntroImage" className=" ml-96 -mt-96 justify-end rounded-2xl transition-all hover:-translate-y-1 hover:scale-110"/>
          </div>
          <button className="flex items-center bg-[#A259FF] pt-3 pb-3 pr-8 pl-8 -mt-20 font-semibold text-[16px] rounded-full">
            <Image src={RacketStart} alt="RacketStart" className="items-center mr-2"/>
            Get Started
          </button>

          <Image src={InfoAdditional} alt="infoaditional" className="mt-5"/>


        </div>
      </section>
    
        <section>
          <div>
            <h1 className="font-semibold text-[32px] pt-32">Trending Collection</h1>
            <p className="text-[22px] font-normal mt-1">Checkout Our Weekly Updated Trending Collection.</p>
            <div className="flex justify-center gap-16">
            <div className="mt-14">
              <Image src={Animal_dog} alt="dog" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              <div className="flex gap-4 mt-4">
              <Image src={Animal_cat} alt="cat" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              <Image src={Animal_bear} alt="bear" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              <Image src={Animal_add} alt="plus" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              </div>
              <p className="font-semibold text-[22px] mt-4">DSGN Animals</p>
              <div className="flex gap-3 mt-4">
              <Image src={Avatar_cat} alt="av_cat" className="font-semibold text-[16px]"/>
              <p>MrFox</p>
              </div>
            </div>

            <div className="mt-14">
              <Image src={Animal_dog} alt="dog" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              <div className="flex gap-4 mt-4">
              <Image src={Animal_cat} alt="cat" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              <Image src={Animal_bear} alt="bear" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              <Image src={Animal_add} alt="plus" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              </div>
              <p className="font-semibold text-[22px] mt-4">DSGN Animals</p>
              <div className="flex gap-3 mt-4">
              <Image src={Avatar_cat} alt="av_cat" className="font-semibold text-[16px]"/>
              <p>MrFox</p>
              </div>
            </div>

            <div className="mt-14">
              <Image src={Animal_dog} alt="dog" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              <div className="flex gap-4 mt-4">
              <Image src={Animal_cat} alt="cat" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              <Image src={Animal_bear} alt="bear" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              <Image src={Animal_add} alt="plus" className="transition-all hover:-translate-y-1 hover:scale-110"/>
              </div>
              <p className="font-semibold text-[22px] mt-4">DSGN Animals</p>
              <div className="flex gap-3 mt-4">
              <Image src={Avatar_cat} alt="av_cat" className="font-semibold text-[16px]"/>
              <p>MrFox</p>
              </div>
            </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-24">
            <p className="font-semibold text-[38px]">Top creators</p>
            <div className="flex justify-between">
            <p className="font-normal text-[22px] mt-3">Checkout Top Rated Creators on the NFT Marketplace</p>
            <button className="flex pt-3 pb-3 pr-8 pl-8 gap-2 bg-transparent hover:bg-purple-700 border border-purple-600 hover:border-purple-700 rounded-full">
              <Image src={RacketStart} alt="Rockets"/>
              View Rankings
            </button>
            </div>

            <div className="flex gap-9 justify-center mt-9">
            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center  rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            </div>

            <div className="flex gap-9 justify-center mt-2">
            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center  rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center  rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center  rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            </div>

            <div className="flex gap-9 justify-center mt-2">
            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center  rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            <div className="bg-[#3B3B3B] w-64 pt-5 pb-5 pl-10 pr-10 mt-5 text-center rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110">
              
              <Image src={Number} alt="numbers" className="-ml-5 -mt-2"/>
              <Image src={Avat_woman} alt="woman" className="ml-7"/>
            
              <p className="font-semibold text-[22px] mt-2">Keepitreal</p>
              <div className="flex gap-2 ml-3">
              <p className="font-normal text-[16px] text-[#858584]">Total Sales:</p>
              <p className="font-normal text-[16px]">34.53 ETH</p>
              </div>
            </div>

            </div>

          </div>
        </section>

        <section>
          <div>
            <h2 className="font-semibold text-[38px] mt-32">Browse Categories</h2>
            <div className="flex mt-16 gap-12 justify-center">
              <Image src={Art} alt="photo" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Collection} alt="photo" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Music} alt="photo" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Photo} alt="photo" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
            </div>
            <div className="flex mt-9 gap-12 justify-center">
              <Image src={Video} alt="photo" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Utility} alt="photo" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Sport} alt="photo" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Virtual} alt="photo" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2 className="font-semibold text-[38px] mt-28">Discover More NFTs</h2>
            <div className="flex justify-between">
            <p className="font-normal text-[22px] mt-4">Explore New Trending NFTs</p>
            <button className="flex pt-3 pb-3 pr-8 pl-8 gap-2 bg-transparent hover:bg-purple-700 border border-purple-600 hover:border-purple-700 rounded-full">
              <Image src={Eye} alt="Rockets"/>
              See All
            </button>
            </div>
            <div className="flex gap-11 mt-10 justify-center">
              <Image src={Galaxy} alt="galaxy" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Life} alt="galaxy" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Astro} alt="galaxy" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
            </div>
          </div>
        </section>

        <section>
          <div>
            <Image src={Bacground} alt="bg" className="mt-20"/>
          </div>
        </section>

        <section>
          <div className="mt-20">
            <h2 className="font-semibold text-[38px]">How It Works</h2>
            <p className="font-normal text-[22px]">Find Out How To Get Started</p>
            <div className="mt-10 flex gap-10 justify-center">
              <Image src={Wallet} alt="wallet" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Wallet} alt="wallet" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
              <Image src={Wallet} alt="wallet" className="cursor-pointer hover:opacity-70 transition ease- hover:-translate-y-1 hover:scale-110"/>
            </div>
          </div>
        </section>
        
    </main>
  );
}
