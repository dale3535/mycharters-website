"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { galleryItems } from "@/lib/site";

function GalleryTile({ item, index }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-xl"
    >
      {item.type === "video" ? (
        <div className="relative">
          <video
            className="w-full"
            controls
            preload="none"
            poster={item.poster}
          >
            <source src={item.src} type="video/mp4" />
          </video>
          <span className="pointer-events-none absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep/60 text-white backdrop-blur">
            <Icon name="play" className="h-4 w-4" filled />
          </span>
        </div>
      ) : (
        <div className={`relative ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      )}
      <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="p-5 font-display text-lg italic text-white">
          {item.caption}
        </p>
      </figcaption>
    </motion.figure>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-foam py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the water"
          subtitle="The colours are real. The water really is that clear. Come see for yourself."
        />
        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-4">
          {galleryItems.map((item, i) => (
            <GalleryTile key={item.src} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
