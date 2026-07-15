import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, MessageCircle, Bell, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// WhatsApp Chat Bubble Component
const WAChatBubble = ({
  sender,
  message,
  time,
  type = "received",
}: {
  sender?: string;
  message: string;
  time: string;
  type?: "sent" | "received";
}) => (
  <div className={`flex ${type === "sent" ? "justify-end" : "justify-start"} mb-2`}>
    <div
      className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm shadow-sm ${type === "sent"
        ? "bg-primary text-primary-foreground rounded-tr-sm"
        : "bg-white dark:bg-slate-700 text-foreground rounded-tl-sm border border-border"
        }`}
    >
      {sender && (
        <p className="text-xs font-semibold text-primary mb-0.5">{sender}</p>
      )}
      <p className="leading-relaxed">{message}</p>
      <p className={`text-xs mt-1 ${type === "sent" ? "text-primary-foreground/70" : "text-muted-foreground"} text-right`}>
        {time} {type === "sent" && "✓✓"}
      </p>
    </div>
  </div>
);

const float = {
  animate: {
    y: [0, -8, 0],
    transition: { repeat: Infinity, duration: 4 },
  },
};

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-6 relative w-[680px] h-[520px]">

      {/* Card 1: WhatsApp Chat Mockup */}
      <motion.div
        className="absolute w-[320px] -top-4 left-0 drop-shadow-2xl"
        variants={float}
        animate="animate"
      >
        <Card className="overflow-hidden border-2 border-primary/20">
          {/* WA Header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">LancarBales Bot</p>
              <p className="text-white/70 text-xs">🟢 Online</p>
            </div>
          </div>
          {/* Chat area */}
          <CardContent className="bg-[#ECE5DD] dark:bg-slate-800 p-3 space-y-1 min-h-[160px]">
            <WAChatBubble
              message="Halo Bunda Sari 👋 Reminder: Iuran SPP Ananda Dafa bulan Juni belum dibayar (Rp 350.000). Jatuh tempo: 5 Mei 2026."
              time="08:00"
              type="received"
            />
            <WAChatBubble
              message="Terima kasih remindernya! Nanti saya transfer ya."
              time="08:15"
              type="sent"
            />
            <WAChatBubble
              message="✅ Siap! Terimakasih Bunda Sari"
              time="08:15"
              type="received"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Card 2: Payment Status Dashboard */}
      <motion.div
        className="absolute right-0 top-8 w-72 drop-shadow-2xl"
        initial={{ y: 4 }}
        animate={{ y: [4, -4, 4] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
      >
        <Card className="border-2 border-primary/20">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-sm">Status Leads</p>
              <Badge variant="secondary" className="text-xs text-primary bg-primary/10">Mei 2026</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { name: "Afthar", status: "HOT Leads", color: "bg-red-500" },
              { name: "Wiwin", status: "Warm Leads", color: "bg-amber-500" },
              { name: "Aruna", status: "Cold Leads", color: "bg-blue-500" },
              { name: "Septi", status: "Cold Leads", color: "bg-blue-500" },
            ].map((s) => (
              <div key={s.name} className="flex items-center justify-between py-1 border-b border-border last:border-0">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    {s.name.charAt(0)}
                  </div>
                  <span className="text-sm">{s.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${s.color}`} />
                  <span className="text-xs text-muted-foreground">{s.status}</span>
                </div>
              </div>
            ))}
            <div className="mt-3 pt-2 border-t">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Progress Calon Pelanggan</span>
                <span className="text-primary font-semibold">75%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-3/4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Card 3: Stats card bottom-left */}
      <motion.div
        className="absolute bottom-8 left-6 w-52 drop-shadow-xl"
        initial={{ y: -4 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 4.5, delay: 0.5 }}
      >
        <Card className="border-2 border-primary/20 bg-primary text-primary-foreground">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-semibold">Reminder Terkirim</span>
            </div>
            <p className="text-3xl font-extrabold">248</p>
            <p className="text-xs text-primary-foreground/70 mt-1">Hari ini · Semua otomatis</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Card 4: Feature pill bottom-right */}
      <motion.div
        className="absolute bottom-10 right-2 drop-shadow-xl"
        initial={{ y: 2 }}
        animate={{ y: [2, -6, 2] }}
        transition={{ repeat: Infinity, duration: 5.5, delay: 1.5 }}
      >
        <Card className="border-2 border-primary/20 w-56">
          <CardContent className="p-3 space-y-2">
            {["Tanpa install aplikasi", "Notifikasi real-time", "Data siswa aman"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>{f}</span>
              </div>
            ))}
            <a
              href="#features"
              className="flex items-center gap-1 text-xs text-primary font-semibold mt-1 hover:underline"
            >
              Lihat semua fitur <ChevronRight className="w-3 h-3" />
            </a>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
