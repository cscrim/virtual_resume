import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";
import LinkIcon from "./LinkIcon";

function Footer() {
  return (
    <footer className="w-full lg:container py-4 px-4 sm:px-6 flex flex-col items-start gap-4 md:flex-row md:items-center">
      <div className="space-y-2 md:basis-1/2">
        <div className="flex gap-2">
          <LinkIcon
            url="https://github.com/cscrim"
            icon={GithubLogo}
            variant="secondary"
          />

          <LinkIcon
            url="https://www.linkedin.com/in/courtneyscrimshaw/"
            icon={LinkedinLogo}
            variant="secondary"
          />

          <LinkIcon
            url="mailto:courtneyscrimshaw@gmail.com"
            icon={Envelope}
            variant="secondary"
          />
        </div>
      </div>

      <div className="md:basis-1/2">
        <p className="text-base text-blue-50 md:text-right">
          Developed by Courtney Scrimshaw
        </p>
      </div>
    </footer>
  );
}

export default Footer;