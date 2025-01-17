"use client";
import menuItems from "@/app/[locale]/manage/menuItems";
import { useAppStore } from "@/components/app-provider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Package2, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Dành cho desktop
export default function NavLinks() {
  const pathname = usePathname();
  const role = useAppStore((state) => state.role);

  return (
    <TooltipProvider>
      <aside className='fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex'>
        <nav className='flex flex-col items-center gap-4 px-2 py-4'>
          <Link
            href='#'
            className='flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base'
          >
            <Package2 className='w-4 h-4 transition-all group-hover:scale-110' />
            <span className='sr-only'>HaNa Restaurant</span>
          </Link>

          {menuItems.map((Item, index) => {
            const isActive = pathname === Item.href;
            if (!Item.roles.includes(role as any)) return null;
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={Item.href}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                      {
                        "bg-accent text-accent-foreground": isActive,
                        "text-muted-foreground": !isActive,
                      }
                    )}
                  >
                    <Item.Icon className='w-5 h-5' />
                    <span className='sr-only'>{Item.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>{Item.title}</TooltipContent>
              </Tooltip>
            );
          })}
        </nav>
        <nav className='flex flex-col items-center gap-4 px-2 py-4 mt-auto'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/manage/setting'
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                  {
                    "bg-accent text-accent-foreground":
                      pathname === "/manage/setting",
                    "text-muted-foreground": pathname !== "/manage/setting",
                  }
                )}
              >
                <Settings className='w-5 h-5' />
                <span className='sr-only'>Cài đặt</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Cài đặt</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  );
}
