export interface Role {
  title: string
  company: string
  period: string
  location: string
  current?: boolean
  points: string[]
}

// Source: naman_resume1.pdf. Role-level wording only; no internal metrics on the public site.
export const experience: Role[] = [
  {
    title: "Full Stack Developer",
    company: "Synonyms Online Pvt. Ltd.",
    period: "Jan 2026 – Present",
    location: "Janakpuri, Delhi",
    current: true,
    points: [
      "Rebuilt the admin access-control layer in React and TypeScript, aligned with the Spring Boot backend, with a backend-driven sidebar.",
      "Extended maker-checker approval workflows with revision history and change diffs.",
      "Built the Laravel consultation service: session lifecycle, multi-astrologer routing and per-minute billing. Hardened the API against IDOR and data leaks.",
      "Built an AI support bot on GPT-4o mini with cost-aware prompting and caching.",
      "Built the customer website and astrologer portal in Next.js, with a Razorpay wallet and a provider-agnostic chat layer.",
      "Building Gurukul, an LMS on Moodle 5.3, as a sole developer, entirely as plugins.",
    ],
  },
  {
    title: "Front End Development Intern",
    company: "Softsource Technolabs",
    period: "Apr 2024 – Jul 2024",
    location: "Remote",
    points: ["Built responsive React and Tailwind pages and integrated REST APIs with backend teams."],
  },
]

export const education = {
  degree: "B.Tech, Computer Science Engineering",
  school: "KCC Institute of Technology and Management, Greater Noida",
  period: "2021 – 2025",
}
