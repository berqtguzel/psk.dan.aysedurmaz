import { FaLocationArrow, FaInstagram } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-16 pb-8">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-30 dark:opacity-20">
        <img
          src="/footer-grid.svg"
          alt=""
          className="h-full w-full object-cover dark:opacity-50"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw] text-slate-900 dark:text-slate-100">
          Psikolojik Danışman{" "}
          <span className="text-rose-600 dark:text-rose-400">Ayşe Durmaz</span>
        </h2>
        <p className="my-5 max-w-xl text-center text-sm text-slate-600 md:mt-10 md:text-base dark:text-slate-400">
          Kendinizi daha iyi tanımak, duygularınıza alan açmak ve bu yolculuğa
          birlikte devam etmek isterseniz; benimle her zaman iletişime
          geçebilirsiniz.
        </p>
        <a href="mailto:ayseedurmzz@gmail.com">
          <MagicButton
            title="Bana yazmak istiyorum"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="relative mt-16 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-light text-slate-600 md:text-base md:font-normal dark:text-slate-400">
          © {new Date().getFullYear()} Ayşe Durmaz. Tüm hakları saklıdır.
        </p>

        <div className="flex items-center gap-3 md:gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-rose-500/50 dark:hover:bg-rose-950/30 dark:hover:text-rose-400"
              aria-label={info.name}
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
