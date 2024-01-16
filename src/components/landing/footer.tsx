import Socials from "../portfolio/socials";

const Footer = () => {
  return (
    <div className="p-8 min-h-[25vh]">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-6xl">{"Check out my socials!"}</h1>

        <Socials />
      </div>
    </div>
  );
};

export default Footer;
