import { Reveal, SectionTag } from "./primitives";

export function FeaturedClient() {
  return (
    <section className="relative px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass-strong rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-20"
              style={{ background: "var(--gradient-aurora)", filter: "blur(60px)" }}
            />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-3">
                <SectionTag>Current Client</SectionTag>
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl sm:text-3xl">
                    Currently editing for <em className="italic text-aurora">Nixus Dragon</em>
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" />
                    </svg>
                    <span>87K subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 0 .13.02.16.1.32.85.64 1.7.98 2.54.04.1.09.14.19.14 1.06-.01 2.12 0 3.19-.01.11 0 .15.03.15.15-.01 1.55-.02 3.1-.03 4.64 0 .12-.04.16-.16.16-1.05 0-2.11 0-3.16.01-.1 0-.14.04-.18.13-.34.85-.68 1.69-1.01 2.54-.04.1-.09.14-.2.14-1.05 0-2.1.01-3.15 0-.12 0-.16.04-.2.15-.32.84-.64 1.68-.97 2.52-.04.1-.08.14-.19.14-1.05 0-2.1.01-3.15 0-.12 0-.17-.04-.21-.15-.68-1.76-1.36-3.52-2.04-5.27-.03-.08-.07-.12-.16-.12-1.06.01-2.12 0-3.18.01-.12 0-.16-.03-.16-.15.01-1.55.02-3.1.03-4.64 0-.12.04-.16.16-.16 1.05 0 2.11 0 3.16-.01.1 0 .15-.04.19-.13.34-.85.68-1.69 1.01-2.54.04-.1.08-.14.19-.14 1.06 0 2.11-.01 3.17 0 .12 0 .16-.04.2-.15.33-.84.66-1.68.99-2.52.04-.1.09-.14.2-.14z" />
                    </svg>
                    <span>353K followers</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.youtube.com/@Nixus_Dragon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass text-sm inline-flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z" />
                  </svg>
                  View Channel
                </a>
                <a
                  href="https://www.tiktok.com/@nixusdragon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass text-sm inline-flex items-center gap-2 rounded-full px-4 py-2.5 transition hover:bg-white/10"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 0 .13.02.16.1.32.85.64 1.7.98 2.54.04.1.09.14.19.14 1.06-.01 2.12 0 3.19-.01.11 0 .15.03.15.15-.01 1.55-.02 3.1-.03 4.64 0 .12-.04.16-.16.16-1.05 0-2.11 0-3.16.01-.1 0-.14.04-.18.13-.34.85-.68 1.69-1.01 2.54-.04.1-.09.14-.2.14-1.05 0-2.1.01-3.15 0-.12 0-.16.04-.2.15-.32.84-.64 1.68-.97 2.52-.04.1-.08.14-.19.14-1.05 0-2.1.01-3.15 0-.12 0-.17-.04-.21-.15-.68-1.76-1.36-3.52-2.04-5.27-.03-.08-.07-.12-.16-.12-1.06.01-2.12 0-3.18.01-.12 0-.16-.03-.16-.15.01-1.55.02-3.1.03-4.64 0-.12.04-.16.16-.16 1.05 0 2.11 0 3.16-.01.1 0 .15-.04.19-.13.34-.85.68-1.69 1.01-2.54.04-.1.08-.14.19-.14 1.06 0 2.11-.01 3.17 0 .12 0 .16-.04.2-.15.33-.84.66-1.68.99-2.52.04-.1.09-.14.2-.14z" />
                  </svg>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
