import { useState } from "react";

const PAYPAL_EMAIL = "nanexprime@gmail.com";
const PAYPAL_ME_URL = "https://paypal.me/nanexprime";

export function PayPalCard() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PAYPAL_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="glass-strong rounded-3xl p-6 relative overflow-hidden flex-1">
      <div
        className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, #0070BA, transparent 70%)" }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            PayPal
          </div>
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "#0070BA",
                boxShadow: "0 0 12px #0070BA",
              }}
            />
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: "#0070BA" }}
            >
              Verified
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <div className="relative">
            <div className="h-16 w-16 rounded-full object-cover border border-white/10 grid place-items-center" style={{ background: "linear-gradient(135deg, #003087 0%, #0070BA 100%)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7.5 19.5H4.5L6 9.5C6.1 8.8 6.7 8.3 7.4 8.3H13.5C16.5 8.3 18.6 9.5 18.1 12.8C17.6 16 15.5 17.3 12.5 17.3H9.5C8.8 17.3 8.2 17.8 8.1 18.5L7.5 19.5Z" fill="white" />
                <path d="M10.5 4.5H7.5L8.3 0.5C8.4 -0.2 9 -0.7 9.7 -0.7H14.5C17.5 -0.7 19.6 0.5 19.1 3.8C18.6 7 16.5 8.3 13.5 8.3H10.5C9.8 8.3 9.2 8.8 9.1 9.5L8.5 12.5H11.5L12.1 9.5C12.2 8.8 12.8 8.3 13.5 8.3H16.5" fill="#003087" opacity="0.3" />
              </svg>
            </div>
          </div>
          <div className="min-w-0">
            <div className="font-display text-xl truncate">nanexprime</div>
            <div className="text-xs text-muted-foreground truncate">{PAYPAL_EMAIL}</div>
            <div className="text-xs text-muted-foreground/80 mt-0.5 truncate">
              Fast & secure payments accepted
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button onClick={copyEmail} className="btn-primary text-sm inline-flex items-center gap-2" style={{ background: "#0070BA", boxShadow: "0 8px 24px -8px rgba(0,112,186,0.55)" }}>
            {copied ? "✓ Copied" : "Copy email"}
          </button>
          <a
            href={PAYPAL_ME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass text-sm inline-flex items-center gap-2"
          >
            Send on PayPal
          </a>
        </div>
      </div>
    </div>
  );
}
