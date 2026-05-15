import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: StatProps[] = [
  { value: 500, suffix: "+", label: "Lembaga Pendidikan" },
  { value: 10000, suffix: "+", label: "Siswa Terdaftar", prefix: "" },
  { value: 95, suffix: "%", label: "Tepat Bayar" },
  { value: 24, suffix: "/7", label: "Aktif Otomatis" },
];

const CountUp = ({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (target / duration) * 16;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString("id-ID")}{suffix}
    </span>
  );
};

export const Statistics = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="container py-12 md:py-16">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-extrabold text-primary leading-none">
                {inView && (
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                )}
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
