// Real photo avatars via DiceBear (free, no-auth, diverse faces)
// Each friend gets a unique deterministic avatar URL
const avatar = (seed) =>
  `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;

export const FRIENDS = [
  { id: 1,  name: "David Kim",       lastContact: "62d ago", tags: ["WORK"],           status: "Almost Due", note: "Great debugger, always calm",         preferred: "email", goalDays: 30, daysSinceContact: 62, nextDue: "May 1, 2026",    avatar: avatar("david-kim")        },
  { id: 2,  name: "Emma Wilson",     lastContact: "65d ago", tags: ["FAMILY"],         status: "Overdue",    note: "Former colleague, great mentor",      preferred: "email", goalDays: 30, daysSinceContact: 65, nextDue: "Feb 27, 2026",  avatar: avatar("emma-wilson")      },
  { id: 3,  name: "Lisa Nakamura",   lastContact: "62d ago", tags: ["WORK"],           status: "Overdue",    note: "Design wizard & coffee enthusiast",   preferred: "text",  goalDays: 30, daysSinceContact: 62, nextDue: "Mar 10, 2026",  avatar: avatar("lisa-nakamura")    },
  { id: 4,  name: "James Wright",    lastContact: "62d ago", tags: ["HOBBY","TRAVEL"], status: "Overdue",    note: "Ultimate road-trip buddy",             preferred: "call",  goalDays: 21, daysSinceContact: 62, nextDue: "Mar 5, 2026",   avatar: avatar("james-wright")     },
  { id: 5,  name: "Sarah Chen",      lastContact: "14d ago", tags: ["WORK"],           status: "On Track",   note: "Best brainstormer I know",            preferred: "email", goalDays: 30, daysSinceContact: 14, nextDue: "Apr 28, 2026",  avatar: avatar("sarah-chen")       },
  { id: 6,  name: "Marcus Johnson",  lastContact: "20d ago", tags: ["FAMILY"],         status: "On Track",   note: "Always has the right advice",         preferred: "call",  goalDays: 60, daysSinceContact: 20, nextDue: "May 12, 2026",  avatar: avatar("marcus-johnson")   },
  { id: 7,  name: "Aisha Patel",     lastContact: "10d ago", tags: ["WORK"],           status: "On Track",   note: "Coffee chats are the best",           preferred: "text",  goalDays: 30, daysSinceContact: 10, nextDue: "May 20, 2026",  avatar: avatar("aisha-patel")      },
  { id: 8,  name: "Tom Baker",       lastContact: "25d ago", tags: ["HOBBY"],          status: "Almost Due", note: "Chess partner extraordinaire",         preferred: "email", goalDays: 30, daysSinceContact: 25, nextDue: "Apr 30, 2026",  avatar: avatar("tom-baker")        },
  { id: 9,  name: "Olivia Martinez", lastContact: "18d ago", tags: ["FAMILY"],         status: "On Track",   note: "Childhood friend forever",            preferred: "call",  goalDays: 45, daysSinceContact: 18, nextDue: "Jun 1, 2026",   avatar: avatar("olivia-martinez")  },
  { id: 10, name: "Ryan O'Brien",    lastContact: "55d ago", tags: ["TRAVEL"],         status: "Overdue",    note: "Road-trip legend, podcast host",       preferred: "text",  goalDays: 30, daysSinceContact: 55, nextDue: "Mar 20, 2026",  avatar: avatar("ryan-obrien")      },
];

// Timeline starts EMPTY — entries added via Quick Check-In
export const INITIAL_TIMELINE = [];

export const STATS_DATA = [
  { label: "Text",   value: 14, color: "#6495ed" },
  { label: "Call",   value: 9,  color: "#2a7d5c" },
  { label: "Video",  value: 11, color: "#8b5cf6" },
  { label: "Meetup", value: 6,  color: "#f39c12" },
];
