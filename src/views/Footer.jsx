
const Footer = () => {
  return (
    <footer className="py-10 bg-dark-blue text-center flex flex-col gap-6 items-center">
        <span>
            <img src="./assets/icons/logo-footer.svg" alt="easybank-logo"/>
        </span>
        <ul className="flex flex-row gap-4">
            <li><img className="w-6" src="./assets/icons/icon-facebook.svg" alt="facebook" /></li>
            <li><img className="w-6" src="./assets/icons/icon-youtube.svg" alt="youtube" /></li>
            <li><img className="w-6" src="./assets/icons/icon-twitter.svg" alt="twitter" /></li>
            <li><img className="w-6" src="./assets/icons/icon-pinterest.svg" alt="pinterest" /></li>
            <li><img className="w-6" src="./assets/icons/icon-instagram.svg" alt="instagram" /></li>
        </ul>
        <ul className="flex flex-col gap-2">
            <li><a className="text-sm text-white" href="">About Us</a></li>
            <li><a className="text-sm text-white" href="">Contact</a></li>
            <li><a className="text-sm text-white" href="">Blog</a></li>
            <li><a className="text-sm text-white" href="">Careers</a></li>
            <li><a className="text-sm text-white" href="">Support</a></li>
            <li><a className="text-sm text-white" href="">Privacy Policy</a></li>
        </ul>
        <button className='text-very-light-gray bg-gradient-to-r from-lime-green to-bringht-cyan rounded-3xl mt-3 py-3 px-9 capitalize font-bold text-sm'>request invite</button>
        <p className="capitalize text-sm text-grayish-blue">&copy; easybank. all rights reserved</p>
    </footer>
  )
}

export default Footer