import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Button } from "./ui/button";
import { Menu, MessageCircle } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#features", label: "Fitur" },
  { href: "#how-it-works", label: "Cara Kerja" },
  { href: "#pricing", label: "Harga" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-background border-b border-border"
      )}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between">
          {/* Logo */}
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex items-center gap-2"
            >
              <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
              </div>
              <span className="text-foreground">Lancar<span className="text-primary"> Iuran</span></span>
            </a>
          </NavigationMenuItem>

          {/* Mobile */}
          <span className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu</span>
                </Menu>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl flex items-center gap-2">
                    <div className="bg-primary rounded-lg p-1.5">
                      <MessageCircle className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                    </div>
                    Lancar Iuran
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-6">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-4 w-full space-y-2">
                    <a
                      href="https://wa.me/6282299459702"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={cn(
                        "w-full flex items-center justify-center gap-2",
                        buttonVariants({ variant: "default" })
                      )}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Coba Gratis
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={cn(
                  "text-[15px] font-medium",
                  buttonVariants({ variant: "ghost" })
                )}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-2 items-center">
            <ModeToggle />
            <a
              href="https://wa.me/6282299459702"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button className="flex items-center gap-2 font-semibold">
                <MessageCircle className="w-4 h-4" />
                Coba Gratis
              </Button>
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
