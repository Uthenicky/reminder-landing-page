import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EducationView } from "./views/EducationView";
import { TravelView } from "./views/TravelView";
import { StoreView } from "./views/StoreView";
import { GraduationCap, Wrench, Store } from "lucide-react";
import { motion } from "framer-motion";

export const BusinessModules = () => {
  return (
    <section id="business-modules" className="container py-24 sm:py-32">
      <div className="text-center space-y-4 mb-12">
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Solusi Tepat untuk{" "}
          <span className="bg-gradient-to-r from-primary to-teal-400 text-transparent bg-clip-text">
            Setiap Jenis Bisnis
          </span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Apapun bisnis Anda, Balesin hadir dengan modul khusus yang disesuaikan
          untuk mempermudah manajemen operasional dan komunikasi dengan pelanggan.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <Tabs defaultValue="education" className="w-full flex flex-col items-center">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 h-auto p-1 bg-muted/50 rounded-2xl mb-12 border border-border">
            <TabsTrigger
              value="education"
              className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-primary transition-all"
            >
              <div className="flex flex-col items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                <span className="font-medium text-sm hidden sm:inline">Sekolah & Bimbel</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="travel"
              className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-primary transition-all"
            >
              <div className="flex flex-col items-center gap-2">
                <Wrench className="w-5 h-5" />
                <span className="font-medium text-sm hidden sm:inline">Jasa & Service</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="store"
              className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-primary transition-all"
            >
              <div className="flex flex-col items-center gap-2">
                <Store className="w-5 h-5" />
                <span className="font-medium text-sm hidden sm:inline">Toko Online</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <div className="w-full relative min-h-[500px]">
            <TabsContent value="education" className="mt-0 focus-visible:outline-none">
              <EducationView />
            </TabsContent>

            <TabsContent value="travel" className="mt-0 focus-visible:outline-none">
              <TravelView />
            </TabsContent>

            <TabsContent value="store" className="mt-0 focus-visible:outline-none">
              <StoreView />
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>
    </section>
  );
};
