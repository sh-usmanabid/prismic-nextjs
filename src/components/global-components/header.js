import { PrismicNextLink } from "@prismicio/next";

export default function Header({ navigation, settings }) {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">{settings.data.sitename}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navigation.data?.links.map((item, index) => (
            <span class="mr-5 hover:text-white" key={index}>
              <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
