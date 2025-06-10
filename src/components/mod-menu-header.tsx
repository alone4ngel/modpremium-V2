import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

interface ModMenuHeaderProps {
  onSettingsClick: () => void;
}

export const ModMenuHeader: React.FC<ModMenuHeaderProps> = ({ onSettingsClick }) => {
  return (
    <motion.div 
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 blur-xl" />
      
      <div className="relative px-6 py-8 flex flex-col items-center">
        <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            isIconOnly 
            size="sm" 
            variant="light" 
            className="text-white/70 hover:text-white"
            onPress={onSettingsClick}
          >
            <Icon icon="lucide:settings-2" className="text-lg" />
          </Button>
          
          <Button 
            isIconOnly 
            size="sm" 
            variant="light" 
            className="text-white/70 hover:text-white"
          >
            <Icon icon="lucide:x" className="text-lg" />
          </Button>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-3 shadow-lg shadow-indigo-500/20">
            <Icon icon="lucide:wand-2" className="text-3xl" />
          </div>
          
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          angelcount
          </h1>
          <p className="text-xs text-white/50 mt-1">powered by t.me/servises444 v2</p>
        </motion.div>
      </div>
    </motion.div>
  );
};