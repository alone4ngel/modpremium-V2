import React from "react";
import { Icon } from "@iconify/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { motion } from "framer-motion";

interface DropdownOptionProps {
  title: string;
  description: string;
  icon: string;
  options: Array<{
    key: string;
    label: string;
  }>;
}

export const DropdownOption: React.FC<DropdownOptionProps> = ({ 
  title, 
  description, 
  icon,
  options
}) => {
  const [selected, setSelected] = React.useState(options[0]);
  
  return (
    <motion.div 
      className="space-y-2"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-2 text-white/80">
        <Icon icon={icon} className="text-lg" />
        <span className="font-medium">{title}</span>
      </div>
      
      <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
            className="w-full justify-between border-white/20 bg-white/5 text-white hover:bg-white/10"
            endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
          >
            {selected.label}
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label={title}
          onAction={(key) => {
            const option = options.find(opt => opt.key === key);
            if (option) setSelected(option);
          }}
          className="bg-black/80 backdrop-blur-lg border border-white/10 text-white"
          variant="flat"
        >
          {options.map((option) => (
            <DropdownItem 
              key={option.key}
              className="text-white data-[hover=true]:bg-white/10"
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      
      <p className="text-xs text-white/50">{description}</p>
    </motion.div>
  );
};