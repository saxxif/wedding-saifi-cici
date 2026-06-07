"use client";

import { motion } from "framer-motion";

const stories = [
  {
    year: "2014",
    image: "/images/story1.jpg",
    title: "Sebuah Pertemuan yang Tak Disadari",
    desc: "Semua bermula di masa SMP. Saat itu kami hanyalah dua anak muda yang menjalani hari-hari sekolah seperti biasa. Kami saling mengenal tanpa pernah membayangkan bahwa suatu hari nanti takdir akan membawa kami kembali dalam perjalanan yang jauh lebih besar.",
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
    desc: "Setelah lulus SMA, kehidupan membawa kami menuju arah yang berbeda. Hubungan jarak jauh mengajarkan banyak hal tentang kesabaran, pengorbanan, dan keikhlasan.",
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
      bg-[#080808]
      py-24
      "
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,180,131,0.12),transparent_60%)]" />

        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[900px]
          h-[900px]

          rounded-full
          bg-[#d4b483]/10

          blur-[220px]
          "
        />
      </div>

      {/* Floating Dust */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1200],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
            }}
            className="
            absolute
            rounded-full
            bg-[#d4b483]
            "
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
            }}
          />
        ))}
      </div>

      {/* Heading */}

      <div className="relative z-20 text-center px-6 mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          uppercase
          tracking-[8px]
          text-[#d4b483]
          text-[11px]
          "
        >
          OUR JOURNEY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
          mt-5
          text-white
          text-[58px]
          leading-none
          "
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Our Story
        </motion.h2>

        <div
          className="
          w-24
          h-px
          mx-auto
          mt-8
          bg-gradient-to-r
          from-transparent
          via-[#d4b483]
          to-transparent
          "
        />
      </div>

      {/* Timeline */}

      <div
        className="
        relative
        z-20

        max-w-md
        mx-auto

        px-5
        "
      >
        {stories.map((story, index) => (
          <motion.div
            key={story.year}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
            }}
            className={`
              relative
              ${index !== stories.length - 1 ? "mb-16" : ""}
            `}
          >
            {/* Connector */}

            {index !== stories.length - 1 && (
              <div
                className="
                absolute
                left-1/2
                top-full

                -translate-x-1/2

                w-px
                h-16

                bg-gradient-to-b
                from-[#d4b483]
                to-transparent
                "
              />
            )}

            {/* Card */}

            <div
              className="
              relative

              overflow-hidden

              rounded-[36px]

              border
              border-white/10

              bg-white/[0.04]

              backdrop-blur-3xl

              shadow-[0_30px_120px_rgba(0,0,0,0.45)]
              "
            >
              {/* Year */}

              <div
                className="
                absolute
                right-5
                top-5

                text-[80px]

                text-white/[0.05]

                leading-none

                pointer-events-none
                "
                style={{
                  fontFamily:
                    "var(--font-cormorant)",
                }}
              >
                {story.year}
              </div>

              {/* Image */}

              <div className="relative h-[260px] overflow-hidden">
                <motion.img
                  src={story.image}
                  alt={story.title}
                  animate={{
                    scale: [1.08, 1, 1.08],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                  "
                />

                <div
                  className="
                  absolute
                  left-5
                  bottom-5

                  px-5
                  py-2

                  rounded-full

                  bg-[#d4b483]

                  text-black

                  text-[11px]

                  tracking-[4px]

                  uppercase
                  "
                >
                  {story.year}
                </div>
              </div>

              {/* Content */}

              <div className="p-7">
                <h3
                  className="
                  text-white

                  text-[38px]

                  leading-tight
                  "
                  style={{
                    fontFamily:
                      "var(--font-cormorant)",
                  }}
                >
                  {story.title}
                </h3>

                <p
                  className="
                  mt-4

                  text-white/70

                  leading-8

                  text-[15px]
                  "
                >
                  {story.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Finale */}

      <div
        className="
        relative
        z-20

        text-center

        mt-24

        px-6
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <div
            className="
            w-32
            h-px
            mx-auto

            bg-gradient-to-r
            from-transparent
            via-[#d4b483]
            to-transparent
            "
          />

          <p
            className="
            mt-8

            uppercase

            tracking-[10px]

            text-[#d4b483]

            text-[11px]
            "
          >
            THE BEGINNING
          </p>

          <h2
            className="
            mt-5

            text-white

            text-[90px]

            leading-none
            "
            style={{
              fontFamily:
                "var(--font-cormorant)",
            }}
          >
            Forever
          </h2>

          <p
            className="
            mt-6

            text-white/70

            leading-8

            max-w-sm

            mx-auto
            "
          >
            Hari ini bukanlah akhir dari kisah kami.
            Ini adalah halaman pertama dari perjalanan
            yang akan kami tulis bersama sepanjang hidup.
          </p>
        </motion.div>
      </div>
    </section>
  );
}