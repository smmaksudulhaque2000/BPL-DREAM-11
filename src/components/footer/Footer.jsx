import './footer.css'
import logo from '../../assets/image/logo-footer.png'
const Footer = () => {

    return (
        <div className="relative flex justify-center items-center">
  <div className="absolute top-0 z-10 flex flex-col justify-center items-center ft-bg gap-5 border rounded-3xl  shadow-lg w-3/4">
    <h3 className="font-bold text-4xl">Subscribe to our Newsletter</h3>
    <h4 className="text-xl">Get the latest updates and news right in your inbox!</h4>
    <div className="flex gap-5">
      <input
        className="border border-gray-300 rounded p-2"
        type="text"
        placeholder="Enter your email"
      />
      <button className="text-sm font-bold border border-gray-300 rounded p-2 ft-btn">Subscribe</button>
    </div>
  </div>

  <div className="ft-bbg flex flex-col justify-center items-center p-10 gap-10 relative mt-40 w-full img-show">
    <div>
      <img src={logo} alt="Logo" />
    </div>
    <div className="flex gap-60">
      <div className="flex flex-col gap-3">
        <p className="text-white font-bold text-xl">About Us</p>
        <p className="text-gray-500">
          We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-white font-bold text-xl">Quick Links</p>
        <ul className="text-gray-500 list-disc pl-7">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-white font-bold text-xl">Subscribe</p>
        <p className="text-gray-500">Subscribe to our newsletter for the <br /> latest updates.</p>
        <div>
          <input className="p-2 ft-inp" placeholder="Enter your email" type="text" />
          <button className="ft-btn p-2 ft-bbtn">Subscribe</button>
        </div>
      </div>
    </div>
    <hr className="border-gray-600 w-full my-10" />
    <p className="text-gray-500 text-sm">@2024 Your Company All Rights Reserved.</p>
  </div>
</div>
    );
};

export default Footer;