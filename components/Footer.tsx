import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col bg-pink-600 max-h-max p-10">
      <div className="bg-pink-200 text-pink-900 rounded-md w-full my-6 p-10 self-center">
        <p className="text-lg font-bold mb-3">Contacts</p>
        <p>Adress:</p>
        <p>Buenos Aires, Argentina.</p>
        <p className="mt-3">Phone:</p>
        <p>+11 1111-1111 or (0800) 1111-1111</p>
        <p className="mt-3">Email:</p>
        <p>ecommerce-tickets@demo.com</p>
      </div>
      <div className="bg-pink-200 rounded-md min-w-max px-20 py-3 mt-6 self-center">
        <p className="mb-3 text-pink-900">Follow us</p>
        <div className="flex justify-center space-x-3 w-10 h-10 mx-auto">
          <Image
            src="https://cdn2.iconfinder.com/data/icons/social-rounded-2/32/instagram-512.png"
            alt="instagram-icon"
            width={100}
            height={100}
            className="cursor-pointer"
          />
          <Image
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png"
            alt="facebook-icon"
            width={100}
            height={100}
            className="cursor-pointer"
          />
          <Image
            src="https://cdn2.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
            alt="linkedin-icon"
            width={100}
            height={100}
            className="cursor-pointer"
          />
          <Image
            src="https://cdn2.iconfinder.com/data/icons/social-media-black-white-2/1227/X-512.png"
            alt="x-icon"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>
      </div>
      <p className="w-full border-t-2 border-pink-200 text-pink-200 mt-10 pt-3">
        <strong>Copyright &copy; 2023 NicoDev - All Rights Reserved.</strong>
      </p>
    </div>
  );
}
