export default function Footer() {
  return (
    <div className="pt-20">
      <footer className="p-4 bg-gray-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="" className="">
            MirrorPay™
          </a>
          . All Rights Reserved.
        </span>
        <span className="text-sm text-white dark:text-gray-400">
          Built with 💜 by<span className="mr-3">:</span>
          <a href="" className="mr-3 text-white hover:text-blue-500">
            Adam
          </a>{" "}
          <a
            href="https://twitter.com/Arcsh7"
            className="mr-3 text-white hover:text-blue-500"
          >
            Archit
          </a>{" "}
          <a href="" className="text-white hover:text-blue-500">
            Chiaki
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-lg text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/Architsharma7/Mirror-Pay"
              className="mr-4 hover:text-blue-500 md:mr-6 text-white"
            >
              Github
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:text-blue-500 md:mr-6 text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:text-blue-500 md:mr-6 text-white">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 text-white">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
