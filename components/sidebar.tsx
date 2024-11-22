"use client";

import { motion } from "framer-motion";
import { useMediaQueryContext } from "./contextApp";
import { FileText } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const { isMobile } = useMediaQueryContext();
  return (
    <motion.div
      className={`fixed top-18 left-0 h-[calc(100vh-72px)] bg-white shadow-lg p-2 ${
        isMobile && !isOpen && "hidden"
      } ${!isMobile && !isOpen && "flex flex-col items-center"}`}
      animate={{
        width: isOpen ? (isMobile ? "100%" : "15.75rem") : "4rem",
      }}
      initial={false}
      transition={{ duration: 0.3 }}
    >
      {!isOpen && (
        <div className="bg-primary-100 flex items-center rounded-sm justify-center w-8 h-8">
          <FileText className="w-4 h-4 text-neutral-900" />
        </div>
      )}
      {isOpen && (
        <div className="bg-primary-100 flex flex-row h-8 items-center pl-2 gap-2">
          <FileText className="w-4 h-4 text-neutral-900" />
          <motion.span
            id="title"
            className="text-sm text-neutral-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Documentos
          </motion.span>
        </div>
      )}
    </motion.div>
  );
};
