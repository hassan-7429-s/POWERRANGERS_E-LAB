"use client";

import { useEffect, useMemo, useState } from "react";

const FALLBACK_ITEMS = [
  {
    id: "fallback-team-hassan",
    type: "image",
    src: "/Hassan%20image.JPG",
    caption: "Tech leadership snapshot",
    alt: "Hassan Ahmed guiding a workshop",
    tag: "Team",
    order: 1,
  },
  {
    id: "fallback-team-bruno",
    type: "image",
    src: "/Bruno%20image.jpeg",
    caption: "Coaching with heart",
    alt: "Hirwa Bruno speaking to the group",
    tag: "Team",
    order: 2,
  },
  {
    id: "fallback-team-hania",
    type: "image",
    src: "/hania%20image.jpeg",
    caption: "Voice of the mission",
    alt: "Hanai Gahitsi engaging the audience",
    tag: "Team",
    order: 3,
  },
  {
    id: "fallback-team-germain",
    type: "image",
    src: "/Germain%20image.jpeg",
    caption: "Strategy on the move",
    alt: "Germain Iradukunda planning operations",
    tag: "Team",
    order: 4,
  },
  {
    id: "fallback-team-honorate",
    type: "image",
    src: "/honorata%20image.jpeg",
    caption: "Behind the camera",
    alt: "Honorate Umwamikazi editing footage",
    tag: "Team",
    order: 5,
  },
  {
    id: "fallback-team-carla",
    type: "image",
    src: "/carla%20image.jpeg",
    caption: "Support in motion",
    alt: "Inyange Carla coordinating logistics",
    tag: "Team",
    order: 6,
  },
  {
    id: "fallback-community-group",
    type: "image",
    src: "/group%20picture.jpeg",
    caption: "Community celebration",
    alt: "PowerRanger E-Lab community portrait",
    tag: "Community",
    order: 7,
  },
  {
    id: "fallback-project-help",
    type: "image",
    src: "/Help%20Lab.jpeg",
    caption: "Creative lab session",
    alt: "Participants collaborating in the Help Lab project",
    tag: "Project",
    order: 8,
  },
  {
    id: "fallback-project-duhope",
    type: "image",
    src: "/Du%20hope%20Interview.jpeg",
    caption: "Storytelling impact",
    alt: "Du Hope interview moment",
    tag: "Impact",
    order: 9,
  },
  {
    id: "fallback-video-cinematic",
    type: "video",
    src: "/rwanda_women_empowerment_cinematic_video.mp4",
    poster: "/Du%20hope%20Interview.jpeg",
    caption: "Cinematic narrative",
    alt: "Cinematic footage of women entrepreneurs",
    tag: "Impact",
    order: 11,
  },
];

const TAG_LABELS = ["All", "Team", "Project", "Impact", "Community"];

function GalleryCard({ item }) {
  return (
    <div className="gallery-item relative group overflow-hidden border border-white/10 rounded-2xl shadow-2xl bg-white/5 min-h-[16rem] flex flex-col">
      {item.type === "video" ? (
        <video
          className="w-full h-56 rounded-t-2xl object-cover"
          src={item.src}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="w-full h-56 rounded-t-2xl object-cover"
        />
      )}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="text-xs uppercase tracking-[0.4em] text-yellow-300">{item.tag}</div>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.caption}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.alt}</p>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [activeTag, setActiveTag] = useState("All");
  const [items, setItems] = useState(FALLBACK_ITEMS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGallery() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("/api/gallery?limit=12", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load gallery");
        }

        const payload = await response.json();
        if (Array.isArray(payload) && payload.length) {
          setItems(payload);
        } else {
          setItems(FALLBACK_ITEMS);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load gallery. Showing local assets only.");
          setItems(FALLBACK_ITEMS);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();

    return () => controller.abort();
  }, []);

  const filteredItems = useMemo(() => {
    if (activeTag === "All") {
      return items;
    }
    return items.filter((item) => item.tag === activeTag);
  }, [activeTag, items]);

  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div className="space-y-3">
          <h2 className="text-4xl font-extrabold text-center text-gray-900">Gallery</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
            Moments captured from the PowerRanger E-Lab sessions, team conversations, and the women whose lives the project is transforming.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {TAG_LABELS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${activeTag === tag ? "bg-yellow-400 text-gray-900" : "bg-white text-gray-600 border border-gray-200 hover:border-yellow-400"}`}
            >
              {tag}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-64 rounded-2xl bg-gray-200/60 animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            {error && (
              <p className="text-center text-sm text-red-600">{error}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <GalleryCard item={item} key={item.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
