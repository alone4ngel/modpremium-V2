import React from "react";
import { Icon } from "@iconify/react";
import { Switch } from "@heroui/react";
import { motion } from "framer-motion";

interface ToggleOptionProps {
  title: string;
  description: string;
  icon: string;
}

export const ToggleOption: React.FC<ToggleOptionProps> = ({ title, description, icon }) => {
  const [isSelected, setIsSelected] = React.useState(false);
  
  return (
    <motion.div 
      className="flex items-center justify-between"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="space-y-0.5">
        <div className="flex items-center gap-2 text-white/80">
          <Icon icon={icon} className="text-lg" />
          <span className="font-medium">{title}</span>
        </div>
        <p className="text-xs text-white/50">{description}</p>
      </div>
      
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}
        color="primary"
        classNames={{
          wrapper: "group-data-[selected=true]:bg-gradient-to-r from-indigo-500 to-purple-500",
          thumb: "group-data-[selected=true]:bg-white"
        }}
      />
    </motion.div>
  );
};