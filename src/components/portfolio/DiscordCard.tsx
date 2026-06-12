import { useEffect, useState } from "react";

const USER_ID = "979589726250074152";

type LanyardData = {
  discord_user: {
    id: string;
    username: string;
    global_name: string | null;
    avatar: string | null;
    discriminator: string;
  };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: Array<{ name: string; type: number; state?: string; details?: string }>;
};

const statusMeta: Record<LanyardData["discord_status"], { label: string; color: string }> = {
  online: { label: "Online", color: "#23A55A" },
  idle: { label: "Idle", color: "#F0B232" },
  dnd: { label: "Do Not Disturb", color: "#F23F43" },
  offline: { label: "Invisible / Offline", color: "#80848E" },
};

export function DiscordCard() {
  const [data, setData] = useState<LanyardData | null>(null);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${USER_ID}`);
        const json = await res.json();
        if (cancelled) return;
        if (json?.success && json.data) {
          setData(json.data);
          setError(false);
        } else {
          setError(true);
        }
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) timer = setTimeout(fetchData, 15000);
      }
    };

    fetchData();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const username = data?.discord_user.global_name || data?.discord_user.username || "nanexa";
  const handle = data?.discord_user.username ? `@${data.discord_user.username}` : "@nanexa";
  const avatarUrl = data?.discord_user.avatar
    ? `https://cdn.discordapp.com/avatars/${USER_ID}/${data.discord_user.avatar}.${data.discord_user.avatar.startsWith("a_") ? "gif" : "png"}?size=256`
    : `https://cdn.discordapp.com/embed/avatars/0.png`;
  const status = data?.discord_status ?? "offline";
  const meta = statusMeta[status];
  const activity = data?.activities?.find((a) => a.type !== 4);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(data?.discord_user.username || "nanexa");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="glass-strong rounded-3xl p-6 relative overflow-hidden flex-1">
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-50" style={{ background: "radial-gradient(circle, #5865F2, transparent 70%)" }} />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Discord — Live</div>
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: meta.color,
                boxShadow: status === "online" ? `0 0 12px ${meta.color}` : "none",
              }}
            />
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: meta.color }}>
              {meta.label}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <div className="relative">
            <img
              src={avatarUrl}
              alt={username}
              className="h-16 w-16 rounded-full object-cover border border-white/10"
            />
            <span
              className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-background"
              style={{ background: meta.color }}
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0">
            <div className="font-display text-xl truncate">{username}</div>
            <div className="text-xs text-muted-foreground truncate">{handle}</div>
            {activity && (
              <div className="text-xs text-muted-foreground/80 mt-0.5 truncate">
                {activity.type === 2 ? "Listening to " : activity.type === 1 ? "Streaming " : activity.type === 0 ? "Playing " : ""}
                {activity.name}
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button onClick={copy} className="btn-primary text-sm inline-flex items-center gap-2">
            {copied ? "✓ Copied" : "Copy username"}
          </button>
          <a
            href={`discord://-/users/${USER_ID}`}
            className="btn-glass text-sm inline-flex items-center gap-2"
          >
            Open in app
          </a>
        </div>

        {error && (
          <p className="mt-3 text-[11px] text-muted-foreground/70">
            Live status unavailable. Add me on Discord: <span className="text-foreground">{handle}</span>
          </p>
        )}
      </div>
    </div>
  );
}
