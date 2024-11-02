import logoImage from "@/assets/images/sphereal-logo.svg?url";
export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
];

export const Header = () => {
  return (
    <header className="border-b border-gray-200/20">
      <div className="container">
        <div className="h-18 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div
              className="size-10 bg-[conic-gradient(var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))]"
              style={{
                maskImage: `url(${logoImage.src})`,
                maskSize: "contain",
              }}
            ></div>
            <div className="text-2xl font-semibold">sphereal.ai</div>
          </div>
          <div className="h-full">
            <nav className="h-full">
              {navItems.map(({ href, name }) => {
                return (
                  <a
                    className="px-10 text-sm font-bold h-full text-gray-400 tracking-widest uppercase relative inline-flex items-center after:content-'' after:absolute after:left-0 after:bottom-0 after:w-px after:h-2 after:bg-gray-200/20 before:content-'' before:absolute before:right-0 before:bottom-0 before:w-px before:h-2 before:bg-gray-200/20 before:hidden last:before:block"
                    key={href}
                  >
                    {name}
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center">
            <button className="size-10 border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))_border-box] rounded-lg relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-0.5 bg-gray-100 -translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-0.5 bg-gray-100 translate-y-1"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
