export const HeroHeader = ({ title }: { title: string }) => {
  return (
    <section className="w-full min-h-62.5 sm:min-h-80 md:min-h-95 relative flex items-center justify-center bg-linear-to-r from-purple-400 to-purple-300 px-5 pt-20 text-center overflow-hidden">
      <img
        alt="Sub Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/SubHero-C06ZAM0q.png"
      />

      <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h1>
    </section>
  );
};
