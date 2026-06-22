# 🧪 SVG Morph Lab

> An open-source, interactive playground for mathematical SVG path morphing. Blend, interpolate, and animate complex vector paths with real-time visual feedback and instant React code export.

## ✨ Features

* **Mathematical Path Interpolation:** Seamlessly morph between disparate SVG paths using Flubber.
* **Pro Code Generation:** Export results as raw `<path>` strings or production-ready React components with Framer Motion integration.
* **Drag & Drop Parsing:** Instantly extract vector math from your `.svg` files by dropping them directly into the UI.
* **Advanced Studio View:** * **X-Ray Mode:** Visualize and track coordinate vertices in real-time.
* **Onion Skinning:** Debug spatial movement with 25%, 50%, and 75% ghost trails.

* **Color Factory:** Native CSS `color-mix()` integration for seamless hex crossfading.
* **Physics Sandbox:** Test Spring, Linear, and Smooth easing physics interactively.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation:** [Framer Motion](https://www.framer.com/motion/)
* **Math Engine:** [Flubber.js](https://github.com/veltman/flubber)

---

## 📂 File Structure (Root-Level)

```text
svg-morph-lab/
├── app/
│   ├── layout.tsx         # Root HTML, fonts, and global providers
│   ├── page.tsx           # Landing page with animated hero & bento grid
│   └── lab/               
│       └── page.tsx       # Playground client workspace
├── components/
│   └── morph/             
│       ├── Playground.tsx # Main IDE, state, and drag-and-drop logic
│       └── Canvas.tsx     # Interpolation renderer with X-Ray & Onion skinning
├── hooks/
│   └── useMorph.ts        # Custom hook for flubber interpolation math
├── types/                 
│   └── index.ts           # Global TypeScript interfaces
├── tailwind.config.ts     # Design tokens
└── tsconfig.json          # Strict type-checking

```

---

## 🚀 Getting Started

1. **Clone and install:**

```bash
git clone https://github.com/bineetNaidu/svg-morph-lab.git
cd svg-morph-lab
npm install

```

2.**Run the server:**

```bash
npm run dev

```

3.**Explore:** Open [http://localhost:3000](http://localhost:3000) and enter the lab via the `/lab` route.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://www.google.com/search?q=https://github.com/bineetNaidu/svg-morph-lab/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
