import { connectToDatabase } from "./mongodb";

const DEFAULT_GALLERY_ITEMS = [
  {
    id: "default-1",
    type: "image",
    src: "/group%20picture.jpeg",
    alt: "Group portrait during the Discover Africa project",
    caption: "Community celebration",
    tag: "Community",
    order: 1,
  },
  {
    id: "default-2",
    type: "image",
    src: "/Help%20Lab.jpeg",
    alt: "Participants collaborating in the Help Lab project",
    caption: "Creative lab session",
    tag: "Project",
    order: 2,
  },
  {
    id: "default-3",
    type: "image",
    src: "/Du%20hope%20Interview.jpeg",
    alt: "Interview with Du Hope representatives",
    caption: "Storytelling impact",
    tag: "Impact",
    order: 3,
  },
  {
    id: "default-4",
    type: "image",
    src: "/Hassan%20image.JPG",
    alt: "Lead technologist Hassan Ahmed",
    caption: "Tech leadership",
    tag: "Team",
    order: 4,
  },
  {
    id: "default-5",
    type: "image",
    src: "/Bruno%20image.jpeg",
    alt: "Program coach Hirwa Bruno",
    caption: "Coaching with heart",
    tag: "Team",
    order: 5,
  },
  {
    id: "default-6",
    type: "image",
    src: "/hania%20image.jpeg",
    alt: "Team speaker Hanai Gahitsi",
    caption: "Voices for change",
    tag: "Team",
    order: 6,
  },
  {
    id: "default-7",
    type: "image",
    src: "/Germain%20image.jpeg",
    alt: "Operations lead Germain Iradukunda",
    caption: "Strategy mindset",
    tag: "Team",
    order: 7,
  },
  {
    id: "default-8",
    type: "image",
    src: "/carla%20image.jpeg",
    alt: "Operations and support specialist Inyange Carla",
    caption: "Support in motion",
    tag: "Team",
    order: 8,
  },
  {
    id: "default-9",
    type: "image",
    src: "/honorata%20image.jpeg",
    alt: "Video editor Honorate Umwamikazi",
    caption: "Creative storytelling",
    tag: "Team",
    order: 9,
  },
  {
    id: "default-10",
    type: "video",
    src: "/personal%20mission%20video.mp4",
    poster: "/group%20picture.jpeg",
    alt: "Personal mission storytelling video",
    caption: "Mission spotlight",
    tag: "Story",
    order: 10,
  },
  {
    id: "default-11",
    type: "video",
    src: "/rwanda_women_empowerment_cinematic_video.mp4",
    poster: "/Du%20hope%20Interview.jpeg",
    alt: "Cinematic footage of women entrepreneurs in Rwanda",
    caption: "Cinematic narrative",
    tag: "Impact",
    order: 11,
  },
  {
    id: "default-12",
    type: "video",
    src: "/rwanda_women_empowerment_mission_video.mp4",
    poster: "/Help%20Lab.jpeg",
    alt: "Mission-focused empowerment video",
    caption: "Mission in motion",
    tag: "Project",
    order: 12,
  },
  {
    id: "default-13",
    type: "video",
    src: "/854192-sd_640_360_25fps%20%281%29.mp4",
    poster: "/group%20picture.jpeg",
    alt: "Training moments from Rwanda footage",
    caption: "Training reel",
    tag: "Training",
    order: 13,
  },
];

function mapDocument(doc) {
  return {
    id: doc._id?.toString() ?? `doc-${Math.random().toString(36).slice(2)}`,
    type: doc.type ?? "image",
    src: doc.src,
    alt: doc.alt ?? doc.caption ?? "Gallery image",
    caption: doc.caption ?? "",
    tag: doc.tag ?? "",
    poster: doc.poster,
    order: doc.order ?? 0,
  };
}

export async function getGalleryItems({ limit } = {}) {
  if (!process.env.MONGODB_URI) {
    return limit ? DEFAULT_GALLERY_ITEMS.slice(0, limit) : DEFAULT_GALLERY_ITEMS;
  }

  try {
    const db = await connectToDatabase();
    const cursor = db.collection("gallery").find().sort({ order: 1 });
    if (limit) {
      cursor.limit(limit);
    }
    const docs = await cursor.toArray();
    if (!docs.length) {
      return DEFAULT_GALLERY_ITEMS;
    }
    const results = docs.map(mapDocument);
    return limit ? results.slice(0, limit) : results;
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    return limit ? DEFAULT_GALLERY_ITEMS.slice(0, limit) : DEFAULT_GALLERY_ITEMS;
  }
}

export async function addGalleryItem(payload) {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI must be configured to persist gallery items.");
  }

  const db = await connectToDatabase();
  const document = {
    type: payload.type ?? "image",
    src: payload.src,
    alt: payload.alt,
    caption: payload.caption ?? "",
    tag: payload.tag ?? "",
    poster: payload.poster,
    order: payload.order ?? Date.now(),
  };

  const { insertedId } = await db.collection("gallery").insertOne(document);
  return { id: insertedId.toString(), ...document };
}

export { DEFAULT_GALLERY_ITEMS };
