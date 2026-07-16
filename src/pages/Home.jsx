
import { useState } from 'react';
import {
  CameraIcon,
  ChevronDown,
  Languages,
  Play,
  ScanLine,
  Star,
  Volume2,
  Zap,
} from 'lucide-react';

const features = [
  {
    title: 'Translate Any Text, Instantly',
    description: 'From a single word to full documents — 100+ languages, context-aware AI.',
    type: 'photo',
    side: 'right',
  },
  {
    title: 'Speak. Listen. Understand.',
    description: 'Real-time voice recognition tuned for accents and natural speech patterns.',
    type: 'conversation',
    side: 'left',
  },
  {
    title: 'Point, Shoot, Read Anything',
    description: 'AR overlay translates signs, menus, and labels instantly through your camera.',
    type: 'camera',
    side: 'right',
  },
  {
    title: 'Unlock Text in Any Photo',
    description: 'Upload screenshots or photos — every word extracted and translated accurately.',
    type: 'photo',
    side: 'left',
  },
  {
    title: 'Two Languages, One Conversation',
    description: 'Translate live discussions without losing the natural flow of the exchange.',
    type: 'conversation',
    side: 'right',
  },
  {
    title: 'No Signal? No Problem.',
    description: 'Download language packs and keep translating anywhere, even without internet.',
    type: 'languages',
    side: 'left',
  },
];

const faqs = [
  'Is Turjman free to use?',
  'Which languages does Turjman support?',
  'Does it work without an internet connection?',
  'How accurate is the AI translation?',
  'Is my data private and secure?',
];

const testimonials = [
  ['Layla Hassan', 'The Egyptian traveler', 'Turjman changed how I meet clients across the Middle East and Europe. The live conversation mode is unmatched!'],
  ['Kenji Nakamura', 'Tokyo traveler', 'The camera translation saved me countless times in Japan. Offline mode means I’m never stuck.'],
  ['Sofia Reyes', 'Language learner', 'The most accurate translation app I’ve used. My students love it and so do I!'],
];

function Phone({ type = 'conversation', className = '' }) {
  return (
    <div className={`relative w-40 rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_40px_rgba(15,23,42,0.16)] ${className}`}>
      <div className="rounded-[22px] border border-slate-100 bg-linear-to-b from-slate-50 to-blue-50 p-3">
        <div className="mb-3 flex items-center justify-between text-[9px] font-medium text-slate-500">
          <span>9:41</span>
          <span>● ◔ ▮</span>
        </div>

        <div className="rounded-2xl bg-white/80 p-3">
          {type === 'camera' ? (
            <div className="flex h-40 items-center justify-center rounded-2xl bg-linear-to-br from-slate-800 to-slate-600 text-slate-200">
              <ScanLine size={24} />
            </div>
          ) : type === 'photo' ? (
            <div className="rounded-2xl bg-blue-50 p-3 text-center">
              <div className="mb-3 flex justify-center text-blue-600">
                <CameraIcon size={20} />
              </div>
              <div className="rounded-xl bg-white px-3 py-2 text-[10px] font-semibold text-slate-700 shadow-sm">
                Image Translation
              </div>
            </div>
          ) : type === 'languages' ? (
            <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-3 text-[10px] text-slate-600">
              <div className="font-semibold text-slate-800">Download languages</div>
              {['English', 'French', 'Japanese', 'Arabic'].map((lang) => (
                <div key={lang} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-b-0 last:pb-0">
                  <span>{lang}</span>
                  <span className="font-semibold text-blue-600">↓</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 text-center">
              <div className="rounded-xl bg-slate-100 px-3 py-2 text-[10px] font-semibold text-slate-700">
                Live Conversation
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-2 text-left text-[10px] text-slate-600">
                Where are you from?
              </div>
              <div className="rounded-xl bg-blue-100 px-3 py-2 text-right text-[10px] font-medium text-blue-700">
                أين أنت من؟
              </div>
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                <Volume2 size={14} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mx-auto flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.35em] text-slate-500">
      <span className="h-px w-6 bg-slate-400" />
      {children}
      <span className="h-px w-6 bg-slate-400" />
    </div>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4 py-6">
          <a className="flex items-center gap-3 text-[15px] font-extrabold text-slate-900" href="#top">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-200">
              <Languages size={17} />
            </span>
            <span>Turjman</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-blue-600">Features</a>
            <a href="#about" className="transition hover:text-blue-600">About</a>
            <a href="#faq" className="transition hover:text-blue-600">FAQ</a>
            <a href="#testimonials" className="transition hover:text-blue-600">Testimonials</a>
            <a href="#download" className="transition hover:text-blue-600">Download</a>
          </nav>

          <a className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50" href="#download">
            Get the app
          </a>
        </header>

        <section id="top" className="py-10 text-center md:py-16">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
            <Zap size={12} />
            AI-Powered · 100+ Languages
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-6xl">
            Smart Translation
            <br />
            <em className="text-blue-600 not-italic">Application</em>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Turjman breaks language barriers with text, voice, camera, image, and live conversation translation — all in one app.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#download" className="flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-left text-white shadow-lg shadow-slate-300">
              <span className="text-lg"></span>
              <span>
                <small className="block text-[8px] uppercase opacity-70">Download on the</small>
                <strong className="block text-sm font-semibold">App Store</strong>
              </span>
            </a>
            <a href="#download" className="flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-left text-white shadow-lg shadow-blue-200">
              <Play size={13} fill="currentColor" />
              <span>
                <small className="block text-[8px] uppercase opacity-80">GET IT ON</small>
                <strong className="block text-sm font-semibold">Google Play</strong>
              </span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Phone type="photo" className="-rotate-6" />
            <Phone type="conversation" className="z-10 scale-110" />
            <Phone type="camera" className="rotate-6" />
          </div>
        </section>

        <section id="features" className="mx-auto max-w-5xl py-12 md:py-20">
          <SectionLabel>FEATURES</SectionLabel>
          <h2 className="mt-3 text-center text-3xl font-black tracking-[-0.02em] text-slate-900 sm:text-4xl">
            Every Way You Communicate
          </h2>

          <div className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <article
                className={`grid items-center gap-8 rounded-[32px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-2 md:p-8 ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
                key={feature.title}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-black tracking-[-0.02em] text-slate-900">{feature.title}</h3>
                  <p className="max-w-md text-sm leading-7 text-slate-600">{feature.description}</p>
                  <a className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200" href="#download">
                    <Play size={15} fill="currentColor" />
                    LIVE DEMO
                  </a>
                </div>
                <div className="flex justify-center">
                  <Phone type={feature.type} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-5xl py-12 md:py-20">
          <SectionLabel>ABOUT US</SectionLabel>
          <h2 className="mt-3 text-center text-3xl font-black tracking-[-0.02em] text-slate-900 sm:text-4xl">
            Breaking Language Barriers Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
            Turjman is an AI-powered translation app built for seamless multilingual communication. Whether you're traveling, studying, or working globally — Turjman understands and translates instantly across text, voice, camera, image, and live conversation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['100+', 'Languages'],
              ['50M+', 'Successful Talks'],
              ['4.9★', 'App Rating'],
              ['190+', 'Countries'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-6 text-center shadow-sm">
                <div className="text-2xl font-black text-blue-600">{value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl py-12 md:py-20">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 text-center text-3xl font-black tracking-[-0.02em] text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 rounded-[24px] border border-slate-200 bg-white/80 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            {faqs.map((faq, index) => (
              <div key={faq} className="border-b border-slate-100 last:border-b-0">
                <button
                  className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-slate-700"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq}</span>
                  <ChevronDown size={14} className={`transition ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <p className="px-4 pb-4 text-sm leading-7 text-slate-600">
                    {index === 0
                      ? 'Yes, Turjman includes a generous free plan so you can translate wherever you go.'
                      : 'Turjman supports more than 100 languages across text, voice, camera, and conversation modes.'}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-6xl py-12 md:py-20">
          <SectionLabel>TESTIMONIALS</SectionLabel>
          <h2 className="mt-3 text-center text-3xl font-black tracking-[-0.02em] text-slate-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map(([name, role, quote], index) => (
              <article key={`${name}-${index}`} className="rounded-[24px] border border-slate-200 bg-white/80 p-5 shadow-sm">
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={11} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">“{quote}”</p>
                { <footer className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{name}</div>
                    <div className="text-xs text-slate-500">{role}</div>
                  </div>
                </footer> }
              </article>
            ))}
          </div>
        </section>

       <section
  id="download"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
>
  <SectionLabel>DOWNLOAD</SectionLabel>

  <div className="mt-12 grid items-center gap-16 lg:grid-cols-2">

    {/* Left */}
    <div>
      <h2 className="text-6xl font-black leading-none text-slate-900">
        Download
        <br />
        App
      </h2>

      <p className="mt-8 max-w-md text-lg leading-9 text-slate-500">
        Get Turjman on iOS and Android.
        Translate your first conversation
        in under 30 seconds — free forever.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex gap-4">

        <a
          href="#"
          className="rounded-xl bg-black px-7 py-4 text-white shadow-lg transition hover:scale-105"
        >
          <div className="text-lg font-semibold">
            App Store
          </div>
        </a>

        <a
          href="#"
          className="rounded-xl bg-blue-600 px-7 py-4 text-white shadow-xl shadow-blue-300 transition hover:scale-105"
        >
          <div className="text-lg font-semibold">
            Google Play
          </div>
        </a>

      </div>

      {/* Features */}

      <div className="mt-10 space-y-4 text-slate-600">

        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
            ✓
          </div>
          Free to download, no hidden fees
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
            ✓
          </div>
          Offline translation for 20+ languages
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
            ✓
          </div>
          Available on iOS 14+ and Android 8+
        </div>

      </div>
    </div>

    {/* Right */}

    <div className="flex justify-center lg:justify-end">
      <Phone
        type="conversation"
        className="scale-[1.6]"
      />
    </div>

  </div>
</section>
      </div>
    </main>
  );
}

