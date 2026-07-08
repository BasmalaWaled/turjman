import { motion } from 'framer-motion';
import { ChevronDown, Check, Star, Play, Camera, Mic, Scan, FileText, MessageCircle, WifiOff, History, Heart, Zap, Lock, Moon, ChevronRight } from 'lucide-react';

const Home = () => {
  const features = [
    { icon: Zap, title: "AI Translation", desc: "Powered by cutting-edge AI for accurate, natural translations" },
    { icon: Camera, title: "Camera Translation", desc: "Point your camera at text and translate instantly" },
    { icon: Mic, title: "Voice Translation", desc: "Speak and get real-time voice-to-voice translation" },
    { icon: Scan, title: "OCR Scanner", desc: "Extract text from images with high accuracy" },
    { icon: FileText, title: "Document Translation", desc: "Translate entire documents while preserving formatting" },
    { icon: MessageCircle, title: "Conversation Mode", desc: "Have seamless conversations across languages" },
    { icon: WifiOff, title: "Offline Translation", desc: "Translate even without an internet connection" },
    { icon: History, title: "History", desc: "Access all your past translations anytime" },
    { icon: Heart, title: "Favorites", desc: "Save your most used translations for quick access" },
    { icon: Zap, title: "Fast Performance", desc: "Lightning-fast translations with minimal latency" },
    { icon: Lock, title: "Privacy First", desc: "Your data is encrypted and never shared" },
    { icon: Moon, title: "Dark Mode", desc: "Easy on the eyes with beautiful dark theme" },
  ];

  const testimonials = [
    { name: "Sarah Johnson", country: "USA", text: "Turjman has completely changed how I communicate when traveling.", rating: 5 },
    { name: "Miguel Garcia", country: "Spain", text: "The camera translation feature is incredible. So fast and accurate!", rating: 5 },
    { name: "Yuki Tanaka", country: "Japan", text: "Best translation app I've ever used. Highly recommend!", rating: 5 },
  ];

  const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean",
    "Arabic", "Hindi", "Portuguese", "Russian", "Italian", "Dutch", "Polish",
    "Turkish", "Vietnamese", "Thai", "Indonesian", "Malay", "Hebrew", "Greek",
    "Swedish", "Norwegian", "Danish", "Finnish", "Czech", "Hungarian", "Romanian",
    "Ukrainian", "Croatian", "Serbian", "Bulgarian", "Catalan", "Galician", "Basque",
    "Welsh", "Irish", "Icelandic", "Maltese", "Latvian", "Lithuanian", "Estonian"
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-background to-white dark:from-gray-900 dark:via-darkBackground dark:to-darkBackground" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star size={16} fill="currentColor" />
                Loved by millions worldwide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text dark:text-white leading-tight mb-6">
                Translate Anything.
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Understand Everything.
                </span>
              </h1>
              <p className="text-xl text-mutedText dark:text-gray-400 mb-8 max-w-lg">
                AI-powered translation for text, voice, images, OCR, and documents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#download"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold text-lg hover:shadow-glow transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Play size={20} fill="currentColor" />
                  Download App
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-text dark:text-white border border-border dark:border-gray-700 rounded-full font-semibold text-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  Explore Features
                  <ChevronDown size={20} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full max-w-[280px] sm:max-w-[320px] h-[480px] sm:h-[600px] mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-primary/20 to-accent/20 rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🌍</div>
                      <p className="text-white font-semibold">Turjman App</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -top-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl"
              >
                <Mic className="text-primary" size={24} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden sm:block absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl"
              >
                <Camera className="text-accent" size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900 border-y border-border dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-mutedText dark:text-gray-500 mb-8 font-medium">
            Trusted technologies powering Turjman
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {["Gemini AI", "Google ML Kit", "Firebase", "OCR", "Material Design"].map((tech, i) => (
              <span key={i} className="text-xl font-bold text-text dark:text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-background dark:bg-darkBackground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text dark:text-white mb-4">
              Everything you need
            </h2>
            <p className="text-xl text-mutedText dark:text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to make translation effortless
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card dark:bg-gray-800 p-8 rounded-3xl border border-border dark:border-gray-700 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-text dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-mutedText dark:text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text dark:text-white mb-4">
              How it works
            </h2>
            <p className="text-xl text-mutedText dark:text-gray-400">
              Three simple steps to break language barriers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Open Turjman", desc: "Launch the app and choose your preferred language" },
              { num: "02", title: "Choose Mode", desc: "Select text, voice, camera, or document translation" },
              { num: "03", title: "Get Results", desc: "Instantly get accurate, natural translations" },
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.num}</div>
                <h3 className="text-2xl font-bold text-text dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-mutedText dark:text-gray-400">
                  {step.desc}
                </p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="text-primary/40" size={40} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background dark:bg-darkBackground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-text dark:text-white mb-4">
              40+ Languages
            </h2>
            <p className="text-xl text-mutedText dark:text-gray-400">
              Translate between dozens of languages instantly
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-white dark:bg-gray-800 text-text dark:text-white border border-border dark:border-gray-700 rounded-full font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text dark:text-white mb-4">
              What our users say
            </h2>
            <p className="text-xl text-mutedText dark:text-gray-400">
              Join millions of happy users worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card dark:bg-gray-800 p-8 rounded-3xl border border-border dark:border-gray-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={20} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-text dark:text-white mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-text dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-mutedText dark:text-gray-400 text-sm">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Download Turjman Today
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Available on iOS and Android. Start translating for free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-lg"
            >
              App Store
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-darkBackground text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-lg"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
