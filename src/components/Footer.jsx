import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs' // Importing the icons from bootstrap

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    // this above code is for getting current year instead of giving hardcoded value write above function

   return (
    <>
      <footer className="ralative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20" >
         <section className='text-lg text-orange-600'>
              Copyright {year} | All rights reserved
         </section>
         <section className='flex item-center justify-center gap-5 text-2xl text-white'>
            <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                  <BsFacebook/>
            </a>
            <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                  <BsLinkedin/>
            </a>
            <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                  <BsInstagram/>
            </a>
            <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                  <BsTwitter/>
            </a>

         </section>

      </footer>
    </>
   )

}
export default Footer;