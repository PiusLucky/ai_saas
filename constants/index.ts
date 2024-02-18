export const navLinks = [
  {
    label: "Dashboard",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Image Restoration",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },

  {
    label: "Background Removal",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/eraser.svg",
  },

  {
    label: "ReadMe.md",
    route: "https://github.com/PiusLucky/ai_saas/blob/main/README.md",
    icon: "/assets/icons/link.svg",
  },

  {
    label: "Credits Topup",
    route: "/credits",
    icon: "/assets/icons/card.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free Plan",
    icon: "/assets/icons/free-plan.svg",
    price: 4.99,
    credits: 50,
    inclusions: [
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Plan",
    icon: "/assets/icons/free-plan.svg",
    price: 149.99,
    credits: 120,
    inclusions: [
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Plan",
    icon: "/assets/icons/free-plan.svg",
    price: 599.99,
    credits: 2000,
    inclusions: [
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Image Restoration",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Removal",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;
