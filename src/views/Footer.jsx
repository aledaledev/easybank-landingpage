
const Footer = () => {
  return (
    <footer className="py-14 bg-dark-blue text-center">
      <div className="flex flex-col gap-2 mx-auto max-w-2xl md:flex-row md:justify-between md:gap-10 lg:max-w-5xl lg:gap-28">
        <div className="flex flex-col gap-7 mb-4 items-center md:m-0 md:justify-between">
          <span className="md:self-start">
            <img src="./assets/icons/logo-footer.svg" alt="easybank-logo"/>
          </span>
          <ul className="flex flex-row gap-3">
            <li><img className="w-5 duration-100 filter-green" src="./assets/icons/icon-facebook.svg" alt="facebook" /></li>
            <li><img className="w-5 duration-100 filter-green" src="./assets/icons/icon-youtube.svg" alt="youtube" /></li>
            <li><img className="w-5 duration-100 filter-green" src="./assets/icons/icon-twitter.svg" alt="twitter" /></li>
            <li><img className="w-5 duration-100 filter-green" src="./assets/icons/icon-pinterest.svg" alt="pinterest" /></li>
            <li><img className="w-5 duration-100 filter-green" src="./assets/icons/icon-instagram.svg" alt="instagram" /></li>
          </ul>
        </div>
        <ul className="flex flex-col gap-2 min-w-max md:text-left">
          <li><a className="text-sm text-white hover:text-lime-green" href="#">About Us</a></li>
          <li><a className="text-sm text-white hover:text-lime-green" href="#">Contact</a></li>
          <li><a className="text-sm text-white hover:text-lime-green" href="#">Blog</a></li>
        </ul>
        <ul className="flex flex-col gap-2 min-w-max md:text-left ">
          <li><a className="text-sm text-white hover:text-lime-green" href="#">Careers</a></li>
          <li><a className="text-sm text-white hover:text-lime-green" href="#">Support</a></li>
          <li><a className="text-sm text-white hover:text-lime-green" href="#">Privacy Policy</a></li>
        </ul>
          <div className="flex flex-col gap-6 mt-4 justify-between items-center md:m-0 md:ml-auto">
            <button className='button min-w-max md:self-end'>request invite</button>
            <p className="capitalize text-sm min-w-max text-grayish-blue">&copy; easybank. all rights reserved</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer