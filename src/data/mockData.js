export const FRIENDS = [
  { id: 1,  name: "David Kim",      lastContact: "62d ago",  tags: ["WORK"],          status: "Almost Due",  note: "Great debugger",         preferred: "email", goalDays: 30, daysSinceContact: 62, nextDue: "May 1, 2026"   },
  { id: 2,  name: "Emma Wilson",    lastContact: "65d ago",  tags: ["FAMILY"],        status: "Overdue",     note: "Former colleague, great mentor", preferred: "email", goalDays: 30, daysSinceContact: 65, nextDue: "Feb 27, 2026" },
  { id: 3,  name: "Lisa Nakamura",  lastContact: "62d ago",  tags: ["WORK"],          status: "Overdue",     note: "Design wizard",          preferred: "text",  goalDays: 30, daysSinceContact: 62, nextDue: "Mar 10, 2026"  },
  { id: 4,  name: "James Wright",   lastContact: "62d ago",  tags: ["HOBBY", "TRAVEL"], status: "Overdue",  note: "Travel buddy",           preferred: "call",  goalDays: 21, daysSinceContact: 62, nextDue: "Mar 5, 2026"   },
  { id: 5,  name: "Sarah Chen",     lastContact: "62d ago",  tags: ["WORK"],          status: "Overdue",     note: "Best brainstormer",      preferred: "email", goalDays: 14, daysSinceContact: 62, nextDue: "Apr 1, 2026"   },
  { id: 6,  name: "Marcus Johnson", lastContact: "62d ago",  tags: ["FAMILY"],        status: "On Track",    note: "Always has good advice", preferred: "call",  goalDays: 60, daysSinceContact: 62, nextDue: "May 12, 2026"  },
  { id: 7,  name: "Aisha Patel",    lastContact: "62d ago",  tags: ["WORK"],          status: "On Track",    note: "Coffee chats are the best", preferred: "text", goalDays: 30, daysSinceContact: 62, nextDue: "May 20, 2026" },
  { id: 8,  name: "Tom Baker",      lastContact: "62d ago",  tags: ["HOBBY"],         status: "Almost Due",  note: "Chess partner",          preferred: "email", goalDays: 30, daysSinceContact: 62, nextDue: "Apr 30, 2026"  },
  { id: 9,  name: "Olivia Martinez",lastContact: "62d ago",  tags: ["FAMILY"],        status: "On Track",    note: "Childhood friend",       preferred: "call",  goalDays: 45, daysSinceContact: 62, nextDue: "Jun 1, 2026"   },
  { id: 10, name: "Ryan O'Brien",   lastContact: "62d ago",  tags: ["TRAVEL"],        status: "Overdue",     note: "Road trip legend",       preferred: "text",  goalDays: 30, daysSinceContact: 62, nextDue: "Mar 20, 2026"  },
];

export const INTERACTIONS = [
  { type: "Meetup", person: "Tom Baker",       date: "March 29, 2026" },
  { type: "Text",   person: "Sarah Chen",      date: "March 28, 2026" },
  { type: "Meetup", person: "Olivia Martinez", date: "March 26, 2026" },
  { type: "Video",  person: "Aisha Patel",     date: "March 23, 2026" },
  { type: "Meetup", person: "Sarah Chen",      date: "March 20, 2026" },
  { type: "Call",   person: "Marcus Johnson",  date: "March 19, 2026" },
  { type: "Meetup", person: "Aisha Patel",     date: "March 17, 2026" },
  { type: "Text",   person: "Olivia Martinez", date: "March 13, 2026" },
  { type: "Call",   person: "Lisa Nakamura",   date: "March 11, 2026" },
  { type: "Call",   person: "Sarah Chen",      date: "March 11, 2026" },
  { type: "Video",  person: "Marcus Johnson",  date: "March 6, 2026"  },
  { type: "Video",  person: "Ryan O'Brien",    date: "February 24, 2026" },
];

export const STATS_DATA = [
  { label: "Text",   value: 14, color: "#6495ed" },
  { label: "Call",   value: 9,  color: "#2a7d5c" },
  { label: "Video",  value: 11, color: "#8b5cf6" },
  { label: "Meetup", value: 6,  color: "#f39c12" },
];
