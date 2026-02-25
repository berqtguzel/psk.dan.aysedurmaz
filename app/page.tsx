"use client";

import { useState } from "react";
import Image from "next/image";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";

const INSTAGRAM_URL = "https://www.instagram.com/psk.dan.aysedurmaz/";
const EMAIL = "ayseedurmzz@gmail.com";

const Home = () => {
  const [ilanAcik, setIlanAcik] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdf7ff] via-[#fef9fb] to-[#f5f7fb] text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <FloatingNav navItems={navItems} />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-24 sm:gap-12 sm:px-8 sm:pt-28 md:gap-14 md:px-10">
        {/* Navbar sabit olduğu için üstte boşluk: ilan navbar'ın altında başlar */}

        {/* AKTİF İLAN - Tıklanınca açılır/kapanır */}
        <section
          id="ilan"
          aria-label="Aktif ilan: Ücretsiz psikolojik danışma"
          className="rounded-2xl border border-amber-200/80 bg-amber-50/80 shadow-md dark:border-amber-500/30 dark:bg-amber-950/30 sm:rounded-3xl"
        >
          <button
            type="button"
            onClick={() => setIlanAcik((a) => !a)}
            className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-5"
            aria-expanded={ilanAcik}
            aria-controls="ilan-icerik"
          >
            <span className="flex items-center gap-2">
              <span className="rounded-full bg-amber-400/25 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-800 dark:bg-amber-500/25 dark:text-amber-200">
                ✦ Aktif ilan
              </span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 sm:text-lg">
                Ücretsiz Psikolojik Danışma Hizmeti
              </span>
            </span>
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-200/60 text-slate-700 transition dark:bg-amber-800/50 dark:text-slate-200 ${ilanAcik ? "rotate-180" : ""}`}
              aria-hidden
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div
            id="ilan-icerik"
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${ilanAcik ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            aria-hidden={!ilanAcik}
          >
            <div className="overflow-hidden">
              <div className="relative border-t border-amber-200/60 px-4 pb-6 pt-4 dark:border-amber-700/40 sm:px-6 sm:pb-8 sm:pt-5">
                <div className="mx-auto max-w-2xl space-y-4 text-center text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                  <p>
                    Merhaba, Ben Ayşe Durmaz. Ankara Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümü son sınıf öğrencisiyim.
                  </p>
                  <p>
                    Bireyle Psikolojik Danışma Uygulamaları dersi kapsamında süpervizyon eşliğinde psikolojik danışma süreci yürüteceğim.
                  </p>
                  <p>
                    Görüşmeler Cebeci Kampüsü&apos;ndeki PDR biriminde{" "}
                    <strong className="font-bold text-amber-700 dark:text-amber-400">ücretsiz</strong>
                    {" "}ve{" "}
                    <strong className="font-bold text-amber-700 dark:text-amber-400">yüz yüze</strong>
                    {" "}olacaktır.
                  </p>
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    Detaylı bilgi ve başvuru için aşağıdaki adreslerden iletişime geçebilirsiniz.
                  </p>
                </div>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[280px] rounded-xl bg-amber-100/90 px-5 py-3.5 text-center font-semibold text-slate-800 shadow-sm ring-1 ring-amber-200/80 transition hover:bg-amber-200/90 dark:bg-amber-900/40 dark:text-amber-100 dark:ring-amber-700/50 dark:hover:bg-amber-800/50"
                  >
                    @psk.dan.aysedurmaz
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="w-full max-w-[280px] rounded-xl bg-amber-100/90 px-5 py-3.5 text-center font-semibold text-slate-800 shadow-sm ring-1 ring-amber-200/80 transition hover:bg-amber-200/90 dark:bg-amber-900/40 dark:text-amber-100 dark:ring-amber-700/50 dark:hover:bg-amber-800/50"
                  >
                    ayseedurmzz@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HERO - Profil fotoğrafı + tanıtım */}
        <section
          aria-labelledby="hero-heading"
          className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16"
        >
          {/* Mobilde önce fotoğraf, masaüstünde solda metin */}
          <div className="order-2 flex flex-1 flex-col gap-6 md:order-1 md:gap-7">
            <p className="inline-flex w-fit items-center rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-rose-600 shadow-sm ring-1 ring-rose-100/80 dark:bg-slate-800/90 dark:ring-slate-600/50 dark:text-rose-400">
              Psikolojik Danışman • PDR Öğrencisi
            </p>
            <h1
              id="hero-heading"
              className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-slate-100"
            >
              Psikolojik Danışman{" "}
              <span className="block font-bold text-rose-700 dark:text-rose-400">
                Ayşe Durmaz
              </span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
              Ankara Üniversitesi PDR öğrencisi olarak; psikolojik danışmanlık,
              kişisel gelişim ve öğrenme yolculuğumda edindiğim bilgi ve
              deneyimleri sizlerle paylaşmak istiyorum. Hem öğrenciler hem de
              kişisel yolculuğuna eşlik edecek bir rehber arayanlar için
              güvenli, sakin ve destekleyici bir alan sunmayı hedefliyorum.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 dark:bg-rose-500 dark:hover:bg-rose-600"
              >
                Beni tanıyın
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-rose-700 shadow-sm transition hover:border-rose-300 hover:bg-white dark:border-slate-600 dark:bg-slate-700/80 dark:text-rose-300 dark:hover:bg-slate-600"
              >
                İletişim
              </a>
            </div>
          </div>

          {/* Sağ/sol: Profil fotoğrafı + ODA AMACI kartı */}
          <div className="order-1 flex flex-1 flex-col items-center gap-6 md:order-2 md:items-end">
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl ring-2 ring-rose-100/80 dark:ring-slate-600/50 sm:rounded-3xl">
                <Image
                  src="/pp.jpeg"
                  alt="Ayşe Durmaz - Psikolojik Danışman"
                  fill
                  sizes="(max-width: 768px) 240px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="w-full max-w-sm rounded-2xl bg-white/90 p-5 shadow-lg shadow-rose-100/50 ring-1 ring-rose-100/80 dark:bg-slate-800/90 dark:shadow-none dark:ring-slate-600/50 sm:rounded-3xl sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-500 dark:text-rose-400 sm:text-sm">
                Oda amacı
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                Danışanların kendilerini yargılanmadan ifade edebildiği,
                duygularına alan açabildiği ve birlikte gelişebildiğimiz
                güvenli bir psikolojik danışma ortamı oluşturmak.
              </p>
            </div>
          </div>
        </section>

        {/* HAKKIMDA */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-600/50 sm:p-8"
        >
          <h2
            id="about-heading"
            className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl dark:text-slate-100"
          >
            Hakkımda
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
            <p>
              Ben Ayşe, Ankara Üniversitesi PDR öğrencisiyim. Kendimi
              geliştirmeyi, yeni şeyler öğrenmeyi ve öğrendiklerimi paylaşmayı
              çok seviyorum.
            </p>
            <p>
              Bu sayfada hem kişisel gelişim yolculuğumu hem de bölümümle ilgili
              bilgi ve deneyimlerimi sizlerle paylaşacağım.
            </p>
            <p>
              Okuduğum kitaplardan staj deneyimlerime, eğitimlerden küçük hayat
              notlarına kadar pek çok şeyi görebilirsiniz. Amacım sadece
              aktarmak değil aynı zamanda birlikte büyümek. Bu keyifli
              yolculuğa eşlik etmek ister misiniz?
            </p>
            <p className="text-base">💕🌸</p>
          </div>
        </section>

        {/* ÇALIŞMA ALANLARIM */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="space-y-6"
        >
          <div className="flex flex-col gap-2">
            <h2
              id="services-heading"
              className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl dark:text-slate-100"
            >
              Çalışma Alanlarım
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
              Her bireyin hikâyesi benzersizdir. Aşağıda, ilgi ve uzmanlık
              alanlarımı genel başlıklar hâlinde bulabilirsiniz. Yüz yüze ve
              online görüşme seçenekleri üzerinde birlikte karar verebiliriz.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-600/50">
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base dark:text-slate-100">
                Bireysel Psikolojik Danışma
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Duygusal zorlanmalar, kendini tanıma, yaşam geçişleri ve
                günlük streslerle başa çıkma süreçlerinde destekleyici, empatik
                bir alan.
              </p>
            </article>

            <article className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-600/50">
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base dark:text-slate-100">
                Öğrenci ve Sınav Süreçleri
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Lise ve üniversite öğrencileri için motivasyon, sınav kaygısı,
                çalışma planı oluşturma ve verimli ders çalışma becerileri.
              </p>
            </article>

            <article className="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-600/50">
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base dark:text-slate-100">
                Kişisel Gelişim & Farkındalık
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Kendini tanıma, duygularla çalışmak, sınır koyma, öz-şefkat ve
                hayata daha bilinçli bakabilmek için eşlik eden bir yolculuk.
              </p>
            </article>
          </div>
        </section>

        {/* YAZILAR & NOTLAR */}
        <section
          id="notes"
          aria-labelledby="notes-heading"
          className="space-y-6 rounded-3xl bg-white/70 p-6 ring-1 ring-slate-100 dark:bg-slate-800/60 dark:ring-slate-600/50 sm:p-8"
        >
          <div className="flex flex-col gap-2">
            <h2
              id="notes-heading"
              className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl dark:text-slate-100"
            >
              Yazılar & Küçük Hayat Notları
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
              Okuduğum kitaplardan aldığım notları, eğitim ve staj
              deneyimlerimden öğrendiklerimi ve günlük hayatta bana iyi gelen
              küçük şeyleri burada paylaşmayı planlıyorum.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-dashed border-rose-100 bg-rose-50/60 p-5 dark:border-rose-900/50 dark:bg-rose-950/30">
              <h3 className="text-sm font-semibold text-rose-800 sm:text-base dark:text-rose-300">
                Kitap Notları
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-rose-900/80 dark:text-rose-200/80">
                Psikoloji ve kişisel gelişim kitaplarından öne çıkan fikirler ve
                satır arası notlar yakında burada olacak.
              </p>
            </article>

            <article className="rounded-2xl border border-dashed border-amber-100 bg-amber-50/70 p-5 dark:border-amber-900/50 dark:bg-amber-950/30">
              <h3 className="text-sm font-semibold text-amber-900 sm:text-base dark:text-amber-300">
                Eğitim & Staj Deneyimleri
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-900/80 dark:text-amber-200/80">
                PDR öğrencisi olarak katıldığım eğitimler ve stajlardan
                öğrendiklerimi sade ve anlaşılır bir dille paylaşacağım.
              </p>
            </article>

            <article className="rounded-2xl border border-dashed border-sky-100 bg-sky-50/70 p-5 dark:border-sky-900/50 dark:bg-sky-950/30">
              <h3 className="text-sm font-semibold text-sky-900 sm:text-base dark:text-sky-300">
                Küçük Hayat Notları
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sky-900/80 dark:text-sky-200/80">
                Gün içinde iyi gelen rutinler, kendine iyi davranma pratikleri
                ve farkındalıkla ilgili küçük paylaşımlar.
              </p>
            </article>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="space-y-4 rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-600/50 sm:p-8"
        >
          <h2
            id="contact-heading"
            className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl dark:text-slate-100"
          >
            İletişim
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            Bu yolculuğa birlikte devam etmek isterseniz; soru sormak, randevu
            talep etmek ya da sadece kendinizi ifade etmek için benimle
            iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 dark:bg-rose-500 dark:hover:bg-rose-600"
            >
              E-posta ile ulaş
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-2 text-sm font-medium text-rose-700 shadow-sm transition hover:border-rose-300 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 dark:border-slate-600 dark:bg-slate-700 dark:text-rose-300 dark:hover:bg-slate-600 dark:hover:text-rose-200"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.98.44a3.097 3.097 0 00-1.308 1.308c-.233.476-.395 1.005-.44 1.98-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.44 1.98.293.562.746.96 1.308 1.308.476.233 1.005.395 1.98.44 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.98-.44a3.097 3.097 0 001.308-1.308c.233-.476.395-1.005.44-1.98.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.44-1.98a3.097 3.097 0 00-1.308-1.308c-.476-.233-1.005-.395-1.98-.44-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              Instagram
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
