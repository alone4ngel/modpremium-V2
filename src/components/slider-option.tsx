import React from "react";
import { Icon } from "@iconify/react";
import { Slider } from "@heroui/react";
import { motion } from "framer-motion";

interface SliderOptionProps {
  title: string;
  description: string;
  icon: string;
  defaultValue?: number;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
}

export const SliderOption: React.FC<SliderOptionProps> = ({ 
  title, 
  description, 
  icon,
  defaultValue = 50,
  color = "primary"
}) => {
  const [value, setValue] = React.useState(defaultValue);
  
  return (
    <motion.div 
      className="space-y-2"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <Icon icon={icon} className="text-lg" />
          <span className="font-medium">{title}</span>
        </div>
        <div className="text-sm font-mono bg-white/10 px-2 py-0.5 rounded-md text-white">
          {value}%
        </div>
      </div>
      
      <Slider
        aria-label={title}
        color={color}
        value={value}
        onChange={setValue}
        className="max-w-full"
        classNames={{
          base: "gap-3",
          track: "bg-white/20",
          filler: `bg-gradient-to-r ${color === "primary" ? "from-indigo-500 to-purple-500" : 
                   color === "success" ? "from-emerald-500 to-green-500" : 
                   color === "warning" ? "from-amber-500 to-yellow-500" : 
                   color === "danger" ? "from-rose-500 to-red-500" : 
                   "from-violet-500 to-fuchsia-500"}`
        }}
      />
      
      <p className="text-xs text-white/50">{description}</p>
    </motion.div>
  );
};