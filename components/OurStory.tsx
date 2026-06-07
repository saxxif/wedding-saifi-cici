"use client";

import { motion } from "framer-motion";

const stories = [
  {
    year: "2014",
    image: "/images/story1.jpg",
    title: "Sebuah Pertemuan yang Tak Disadari",
    desc: "Semua bermula di masa SMP. Saat itu kami hanyalah dua anak muda yang menjalani hari-hari sekolah seperti biasa. Kami saling mengenal tanpa pernah membayangkan bahwa suatu hari nanti takdir akan membawa kami kembali dalam sebuah perjalanan yang jauh lebih besar.",
  },
  {
    year: "2017",
    image: "/images/story2.jpg",
    title: "Ketika Rasa Itu Mulai Tumbuh",
    desc: "Memasuki masa SMA, kami semakin dekat. Banyak tawa, cerita, dan kenangan yang tercipta bersama. Hari-hari yang sederhana terasa begitu berarti karena selalu ada alasan untuk saling menunggu dan berbagi cerita.",
  },
  {
    year: "2019",
    image: "/images/story3.jpg",
    title: "Dipisahkan Oleh Jarak",
    desc: "Setelah lulus SMA, kehidupan membawa kami menuju arah yang berbeda. Kami melanjutkan pendidikan di tempat yang berjauhan. Hubungan jarak jauh mengajarkan banyak hal tentang kesabaran, pengorbanan, dan keikhlasan.",
  },
  {
    year: "2020",
    image: "/images/story4.jpg",
    title: "Belajar Melepaskan",
    desc: "Ada masa ketika kami tidak lagi berjalan berdampingan. Kami mengejar mimpi, menghadapi tantangan, merasakan kegagalan, dan tumbuh menjadi pribadi yang lebih dewasa.",
  },
  {
    year: "2024",
    image: "/images/story5.jpg",
    title: "Takdir Mempertemukan Kembali",
    desc: "Setelah bertahun-tahun menjalani kehidupan masing-masing, kami kembali dipertemukan. Kali ini bukan sebagai dua remaja yang dipenuhi keraguan, melainkan dua insan yang telah belajar banyak tentang kehidupan.",
  },
  {
    year: "2025",
    image: "/images/story6.jpg",
    title: "Langkah yang Lebih Serius",
    desc: "Dengan keyakinan yang lebih kuat dan hati yang lebih matang, kami memutuskan untuk melangkah menuju masa depan yang sama.",
  },
  {
    year: "2026",
    image: "/images/story7.jpg",
    title: "Awal Dari Selamanya",
    desc: "Setelah perjalanan panjang yang penuh pertemuan, perpisahan, penantian, dan harapan, kami akhirnya berdiri di titik ini. Hari ini bukanlah akhir dari cerita kami, melainkan awal dari perjalanan baru yang akan kami jalani bersama selamanya.",
  },
];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="
      relative
      overflow-hidden
      bg-[#0d0d0d]
      "
    >
  {/* Luxury Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,180,131,0.15),transparent_60%)]" />
      </div>

            {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[#d4b483]"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
left: `${Math.random() * 100}%`,
top: `${Math.random() * 100}%`,
            }}
          />
        ))}

   {/* Heading */}
      <div className="relative z-20 py-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
          uppercase
          tracking-[12px]
          text-[#c9a86a]
          text-sm
          "
        >
          Our Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          mt-6
          text-white
          text-6xl
          md:text-[120px]
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Our Story
        </motion.h2>
      </div>

      {/* Stories */}
      <div className="relative z-20 space-y-40 pb-40">
        {stories.map((story) => (
          <motion.div
            key={story.year}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto px-6"
          >
            <div
              className="
              relative
              overflow-hidden
              rounded-[50px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-[30px]
              shadow-[0_40px_150px_rgba(0,0,0,0.6)]
              "
            >

              <div
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[700px]
                h-[700px]
                rounded-full
                bg-[#d4b483]/15
                blur-[180px]
                "
              />

              {/* Year Background */}
              <div
                className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-[180px]
                md:text-[320px]
                font-light
                text-white/[0.04]
                pointer-events-none
                tracking-[-15px]
                "
              >
                {story.year}
              </div>

              {/* Image */}
              <div className="relative overflow-hidden h-[550px] md:h-[800px]">
                <motion.img
                  src={story.image}
                  alt={story.title}
                  animate={{
                    scale: [1.15, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

                {/* Cinematic Overlay */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/30
                  to-black/10
                  "
                />

                {/* Film Grain */}
                <div
                  className="
                  absolute
                  inset-0
                  opacity-[0.06]
                  mix-blend-soft-light
                  bg-[url('/grain.png')]
                  "
                />

                {/* Content */}
                <div
                  className="
                  absolute
                  bottom-0
                  left-0
                  p-10
                  md:p-20
                  z-20
                  max-w-4xl
                  "
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="
                    inline-flex
                    items-center
                    px-6
                    py-3
                    rounded-full
                    bg-gradient-to-r
                    from-[#c9a86a]
                    to-[#b08d57]
                    text-white
                    tracking-[5px]
                    text-sm
                    mb-8
                    "
                  >
                    {story.year}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="
                    text-white
                    text-5xl
                    md:text-7xl
                    leading-tight
                    mb-8
                    "
                    style={{
                      fontFamily: "var(--font-cormorant)",
                    }}
                  >
                    {story.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="
                    text-white/80
                    text-lg
                    md:text-xl
                    leading-9
                    max-w-3xl
                    "
                  >
                    {story.desc}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grand Finale */}
      <section
        className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        "
      >
        <div
          className="
          absolute
          w-[900px]
          h-[900px]
          rounded-full
          bg-[#d4b483]/20
          blur-[250px]
          "
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative text-center z-10"
        >
          <p
            className="
            uppercase
            tracking-[15px]
            text-[#c9a86a]
            mb-8
            "
          >
            The Beginning
          </p>

          <h2
            className="
            text-white
            text-7xl
            md:text-[180px]
            leading-none
            "
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Forever
          </h2>

          <p
            className="
            mt-10
            text-white/70
            text-lg
            md:text-2xl
            max-w-3xl
            mx-auto
            "
          >
            Hari ini bukanlah akhir dari kisah kami.
            Ini adalah halaman pertama dari perjalanan
            yang akan kami tulis bersama sepanjang hidup.
          </p>
        </motion.div>
      </section>
    </section>
  );
}