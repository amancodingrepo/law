// Premium thin-stroke icons for Veristas & Partners
import React from 'react';

const Ico = ({ children, size = 24, stroke = 1.5, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={stroke}
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    {children}
  </svg>
);

const I = {
  // utility
  ArrowRight: (p) => <Ico {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></Ico>,
  ArrowUpRight: (p) => <Ico {...p}><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></Ico>,
  Phone: (p) => <Ico {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></Ico>,
  Mail: (p) => <Ico {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></Ico>,
  MapPin: (p) => <Ico {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Ico>,
  Clock: (p) => <Ico {...p}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Ico>,
  Play: (p) => <Ico {...p}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/></Ico>,
  Close: (p) => <Ico {...p}><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></Ico>,
  Menu: (p) => <Ico {...p}><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="17" x2="21" y2="17" /></Ico>,
  ChevronLeft: (p) => <Ico {...p}><polyline points="15 18 9 12 15 6" /></Ico>,
  ChevronRight: (p) => <Ico {...p}><polyline points="9 18 15 12 9 6" /></Ico>,
  Calendar: (p) => <Ico {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></Ico>,
  MessageDots: (p) => <Ico {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></Ico>,
  WhatsApp: (p) => (
    <Ico {...p}>
      <path d="M20.5 3.5A10.5 10.5 0 0 0 3.6 16.9L2 22l5.2-1.5A10.5 10.5 0 1 0 20.5 3.5Z"/>
      <path d="M7.5 9.5c.1 1.5 1 3.2 2.3 4.5s3 2.2 4.5 2.3c.6 0 1-.1 1.4-.3l1.3-1.3c.2-.2.2-.5 0-.7l-1.7-1c-.3-.2-.6-.1-.8.1l-.5.6c-1-.4-2-1.4-2.5-2.4l.6-.6c.2-.2.3-.5.1-.8L11.2 7.4c-.2-.3-.5-.3-.7-.1L9.2 8.6c-.2.3-.3.6-.3 1l-1.4-.1Z"/>
    </Ico>
  ),
  // stats
  Scales: (p) => <Ico {...p}><path d="M12 3v18"/><path d="M5 21h14"/><path d="M5 7h14"/><path d="m5 7-3 7a4 4 0 0 0 6 0L5 7Z"/><path d="m19 7-3 7a4 4 0 0 0 6 0l-3-7Z"/></Ico>,
  Trophy: (p) => <Ico {...p}><path d="M6 9H4a2 2 0 0 1-2-2V5h4"/><path d="M18 9h2a2 2 0 0 0 2-2V5h-4"/><path d="M12 22V15"/><path d="M9 22h6"/><path d="M6 9c0 5 3 7 6 7s6-2 6-7V3H6v6Z"/></Ico>,
  Heart: (p) => <Ico {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></Ico>,
  Shield: (p) => <Ico {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Ico>,
  // practice areas
  Building: (p) => <Ico {...p}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01"/></Ico>,
  Family: (p) => <Ico {...p}><circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 21v-1a6 6 0 0 1 12 0v1"/><path d="M14 21v-1a4 4 0 0 1 7-3"/></Ico>,
  Gavel: (p) => <Ico {...p}><path d="m14 12-8.5 8.5a2.12 2.12 0 0 1-3-3L11 9"/><path d="m16 14 6-6"/><path d="m8 6 6-6"/><path d="m9 7 8 8"/><path d="m21 11-4-4"/></Ico>,
  Court: (p) => <Ico {...p}><path d="M3 21h18"/><path d="M3 10h18"/><path d="m5 6 7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v3"/><path d="M12 14v3"/><path d="M16 14v3"/></Ico>,
  Home: (p) => <Ico {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></Ico>,
  Globe: (p) => <Ico {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Ico>,
  Lightbulb: (p) => <Ico {...p}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 1 4 12.7L15 17H9l-1-2.3A7 7 0 0 1 12 2z"/></Ico>,
  Briefcase: (p) => <Ico {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></Ico>,
  // social
  Linkedin: (p) => <Ico {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></Ico>,
  Twitter: (p) => <Ico {...p}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2-3-.9-6-3-7-7 1 .3 2 .3 3 0-3-2-4-6-3-9 3.5 4 7.6 6 12 6-.7-3.4 1.6-6 4-6 1.4 0 2.7.6 3.5 1.7l4-1 .5 2.3z"/></Ico>,
  Instagram: (p) => <Ico {...p}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-8 .1 4 4 0 0 1 8-.1z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></Ico>,
  Youtube: (p) => <Ico {...p}><path d="M22.5 6.5a2.8 2.8 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.5 2.8 2.8 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.5z"/><polygon points="10 15 15 12 10 9 10 15"/></Ico>,
  // misc
  Sparkle: (p) => <Ico {...p}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></Ico>,
  Check: (p) => <Ico {...p}><polyline points="20 6 9 17 4 12"/></Ico>,
  Star: (p) => <Ico {...p}><polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 9 12 2" fill="currentColor"/></Ico>,
};

export default I;
