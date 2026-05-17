export default function OfficialAuthorWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full" />
      </div>

      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-white/5 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-cyan-300">
            Официальный сайт
          </h1>

          <nav className="flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-300 transition">
              О сайте
            </a>

            <a href="#author" className="hover:text-cyan-300 transition">
              Автор
            </a>

            <a href="#contact" className="hover:text-cyan-300 transition">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm mb-5">
              Авторский проект
            </p>

            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Официальный
              <span className="block text-cyan-400">
                сайт автора
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-10">
              Персональный сайт с официальной информацией об авторе.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition shadow-2xl shadow-cyan-500/30">
                Открыть
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                Подробнее
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10">
                  <h3 className="text-2xl font-bold mb-3 text-cyan-300">
                    Автор сайта
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    Официальная информация указана ниже.
                  </p>
                </div>

                <div className="p-7 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-3">
                    Автор
                  </p>

                  <h4 className="text-3xl font-extrabold leading-snug">
                    Эскендеров Эмируллах Габибулахович
                  </h4>

                  <p className="mt-4 text-slate-300 text-lg">
                    Студент ДГУНХ
                  </p>

                  <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/30 border border-white/10">
                    <span className="text-cyan-300 font-semibold text-lg">
                      +7 (928) 218-55-70
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">
              Минимализм
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Чистый и современный интерфейс.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">
              Адаптивность
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Корректное отображение на всех устройствах.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">
              React + Tailwind
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Быстрый и современный интерфейс.
            </p>
          </div>
        </section>

        <section
          id="author"
          className="max-w-5xl mx-auto px-6 py-24 text-center"
        >
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12 backdrop-blur-2xl shadow-2xl">
            <p className="uppercase tracking-[0.35em] text-cyan-300 text-sm mb-4">
              Автор сайта
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Эскендеров
              <span className="block text-cyan-300">
                Эмируллах Габибулахович
              </span>
            </h2>

            <div className="space-y-4 text-lg text-slate-300">
              <p>Студент ДГУНХ</p>
              <p className="text-cyan-300 font-semibold text-2xl">
                +7 (928) 218-55-70
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© 2026 — Официальный сайт</p>

          <div className="text-center md:text-right">
            <p className="text-white">
              Эскендеров Эмируллах Габибулахович
            </p>

            <p className="mt-1 text-cyan-300">
              +7 (928) 218-55-70
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
