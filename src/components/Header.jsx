

const Header = () => {
  return (
    <>
    <header class="fixed top-0 left-0 right-0 z-50 bg-transparent text-white  py-4 pl-6 Header ">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-6">
            <a className="text-2xl font-bold" href="#">PORTFOLIO</a>
            
            <div className="w-full  md:flex md:items-center md:w-auto">
                <ul className="flex flex-col  md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                    <a className="block py-2 pr-4 pl-3 text-2xl text-white md:bg-transparent md:p-0 " href="#Home">Home</a>
                </li>
                <li>
                    <a className="block py-2 pr-4 pl-3 text-2xl text-white md:bg-transparent md:p-0 " href="#Skills">Skills</a>
                </li>  
                <li>
                    <a className="block py-2 pr-4 pl-3 text-2xl text-white md:bg-transparent md:p-0 " href="#Projects">Projects</a>
                </li>  
                <li className="pt-2 p-2 border-2 border-white rounded-full  ">
                    <i className="fa-brands fa-linkedin-in fa-2xl"></i>
                </li>  
                <li className="pt-2 p-2 border-2 border-white rounded-full ">
                <i class="fa-brands fa-github fa-2xl"></i>
                </li>  
                <li className="pt-2 p-2 border-2 border-white rounded-full  ">
                <i class="fa-brands fa-facebook fa-2xl"></i>
                </li>  
                </ul>
            </div>
            </div>
    </header>
    
    </>
    
  )
}

export default Header