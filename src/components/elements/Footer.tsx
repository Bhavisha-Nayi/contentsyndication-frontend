import GroupFooterNav from "../blocks/GroupFooterNav";
import Container from "../shared/Container";
import FooterNav from "../shared/FooterNav";
import Paragraph from "../shared/Paragraph";
const footerNav1 = [
  {
    itemText: "Marketing",
    itemLink: "#",
  },
  {
    itemText: "Analylitics",
    itemLink: "#",
  },
  {
    itemText: "Commerce",
    itemLink: "#",
  },
  {
    itemText: "Insights",
    itemLink: "#",
  },
];

const footerSupport = [
  {
    itemText: "Pricing",
    itemLink: "#",
  },
  {
    itemText: "Guides",
    itemLink: "#",
  },
  {
    itemText: "FAQ",
    itemLink: "#",
  },
  {
    itemText: "Contact",
    itemLink: "#",
  },
];

const footerCompany = [
  {
    itemText: "About us",
    itemLink: "#about-us",
  },
  {
    itemText: "Services",
    itemLink: "#services",
  },
  {
    itemText: "Features",
    itemLink: "#features",
  },
  {
    itemText: "Blog",
    itemLink: "/blog",
  },
];
const footerLegal = [
  {
    itemText: "Claim",
    itemLink: "/#",
  },
  {
    itemText: "Privacy",
    itemLink: "#",
  },
  {
    itemText: "Terms",
    itemLink: "#",
  },
];

const Footer = () => {
  return (
    <>
      <div className="mt-16"></div>
      <footer className="relative  bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 pt-28 rounded-t-3xl">
        <div className="absolute right-0 top-0 h-full w-full flex justify-end">
          <div className="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl">
            <span className="absolute w-16 h-16 -top-1 -right-1 bg-customBlue rounded-md rotate-45"></span>
            <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-customOrange rounded-md rotate-45"></span>
            <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
          <div className="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl">
            <span className="absolute w-16 h-16 -top-1 -right-1 bg-customBlue rounded-md rotate-45"></span>
            <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-customOrange rounded-md rotate-45"></span>
            <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
          </div>
        </div>
        <Container className="pb-8 relative overflow-auto">
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-2xl opacity-20 w-24 h-16 sm:w-48 sm:h-36 rounded-full rotate-12 skew-x-6 bg-primary"></span>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-8 relative">
            <div className="col-span-2 lg:col-span-1 h-auto flex flex-col">
              <div className="h-full">
                <a href="/" className="relative flex items-center gap-3">
                  <div className="inline-flex text-lg font-semibold text-heading-1">
                    <span className="text-customBlue" >Content</span><span className="text-customOrange" >Syndication</span>
                  </div>
                </a>
                <p className="mt-8 text-gray-700">
                  B2B Connect Hub is a global digital platform that publishes
                  content related to technology and business insights from
                  industry experts.
                </p>
                <br />
                <p className="text-gray-700">
                  Get the latest news, discussions & strategic expertise with
                  thoughts and assessments on business challenges.
                </p>
              </div>

              <div className="min-h-max flex items-center gap-4 text-heading-3 mt-8">
                <a
                  href="https://www.facebook.com/b2bindemandpune"
                  className="transition hover:text-heading-1 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <span className="sr-only">facebook</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/b2b-indemand-pl/mycompany/"
                  className="transition hover:text-heading-1 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  <span className="sr-only">Linkedin</span>
                </a>

                <a
                  href="https://x.com/b2bindemand?lang=en"
                  className="transition hover:text-heading-1 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  <span className="sr-only">twitter</span>
                </a>

                <a
                  href="https://www.instagram.com/b2bindemand/"
                  className="transition hover:text-heading-1 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0c2.21 0 2.48.01 3.35.05.87.04 1.46.19 2.02.4.55.21 1.02.49 1.47.93.44.45.72.92.93 1.47.21.56.36 1.15.4 2.02.04.87.05 1.14.05 3.35s-.01 2.48-.05 3.35c-.04.87-.19 1.46-.4 2.02-.21.55-.49 1.02-.93 1.47-.45.44-.92.72-1.47.93-.56.21-1.15.36-2.02.4-.87.04-1.14.05-3.35.05s-2.48-.01-3.35-.05c-.87-.04-1.46-.19-2.02-.4a4.305 4.305 0 0 1-1.47-.93A4.305 4.305 0 0 1 .45 13.8c-.21-.56-.36-1.15-.4-2.02C.01 10.91 0 10.64 0 8.5s.01-2.48.05-3.35c.04-.87.19-1.46.4-2.02.21-.55.49-1.02.93-1.47.45-.44.92-.72 1.47-.93.56-.21 1.15-.36 2.02-.4C5.52.01 5.79 0 8 0zM8 1.36c-2.17 0-2.41.01-3.25.05-.82.04-1.26.17-1.56.29-.34.14-.58.3-.83.56a1.78 1.78 0 0 0-.56.83c-.12.3-.25.74-.29 1.56-.04.84-.05 1.08-.05 3.25s.01 2.41.05 3.25c.04.82.17 1.26.29 1.56.14.34.3.58.56.83.26.26.49.43.83.56.3.12.74.25 1.56.29.84.04 1.08.05 3.25.05s2.41-.01 3.25-.05c.82-.04 1.26-.17 1.56-.29.34-.14.58-.3.83-.56.26-.26.43-.49.56-.83.12-.3.25-.74.29-1.56.04-.84.05-1.08.05-3.25s-.01-2.41-.05-3.25c-.04-.82-.17-1.26-.29-1.56-.14-.34-.3-.58-.56-.83-.26-.26-.49-.43-.83-.56-.3-.12-.74-.25-1.56-.29-.84-.04-1.08-.05-3.25-.05zM8 3.64a4.36 4.36 0 1 0 0 8.72 4.36 4.36 0 0 0 0-8.72zM8 4.91a3.09 3.09 0 1 1 0 6.18 3.09 3.09 0 0 1 0-6.18zM12.69 3.64c.39 0 .71.32.71.71s-.32.71-.71.71-.71-.32-.71-.71.32-.71.71-.71z" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>

                <a
                  href="https://www.youtube.com/@B2BinDemand728"
                  className="transition hover:text-heading-1 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999c1.669-.007 6.78-.005 7.721.047 1.018.056 1.597.233 1.984.393.521.212.927.494 1.352.982.326.396.633.961.85 2.117.12.652.145 1.66.154 3.584-.009 1.923-.034 2.932-.154 3.584-.217 1.156-.524 1.721-.85 2.117-.425.488-.831.77-1.352.982-.387.16-.966.337-1.984.393-.94.052-6.051.054-7.721.047-1.669.007-6.78.005-7.721-.047-1.018-.056-1.597-.233-1.984-.393-.521-.212-.927-.494-1.352-.982-.326-.396-.633-.961-.85-2.117-.12-.652-.145-1.66-.154-3.584.009-1.923.034-2.932.154-3.584.217-1.156.524-1.721.85-2.117.425-.488.831-.77 1.352-.982.387-.16.966-.337 1.984-.393.94-.052 6.051-.054 7.721-.047zm3.879 4.564l-5.829 2.682a.5.5 0 0 0 0 .909l5.829 2.682a.5.5 0 0 0 .736-.455v-5.364a.5.5 0 0 0-.736-.454z" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>

            <GroupFooterNav>
              <FooterNav title={"Company"} navItems={footerCompany} />
              <FooterNav title={"Solutions"} navItems={footerNav1} />
            </GroupFooterNav>

            <GroupFooterNav>
              <FooterNav title={"Support"} navItems={footerSupport} />
              <FooterNav title={"Ressources"} navItems={footerLegal} />
            </GroupFooterNav>
          </div>
        </Container>
        <div className=" bg-gradient-to-tl from-box-bg py-2 relative">
          <Container>
            <div className="flex justify-between items-center gap-6 md:text-lg text-heading-3">
              <div>
                &copy; <span id="year"></span> Contentsyndication. All right
                reserved
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
