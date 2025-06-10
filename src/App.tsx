import React from "react";
import { Icon } from "@iconify/react";
import { 
  Tabs, 
  Tab, 
  Card, 
  Switch, 
  Slider, 
  Input, 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem, 
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox
} from "@heroui/react";
import { motion } from "framer-motion";
import { ModMenuHeader } from "./components/mod-menu-header";
import { SliderOption } from "./components/slider-option";
import { ToggleOption } from "./components/toggle-option";
import { DropdownOption } from "./components/dropdown-option";

export default function App() {
  const [selected, setSelected] = React.useState("global");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-slate-900 to-slate-800 flex items-center justify-center p-4 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="w-full max-w-md"
      >
        <Card 
          className="border border-white/10 bg-black/40 backdrop-blur-xl overflow-visible"
          shadow="lg"
        >
          <ModMenuHeader onSettingsClick={onOpen} />
          
          <div className="px-4 pb-6">
            <Tabs 
              aria-label="Mod Menu Categories" 
              selectedKey={selected} 
              onSelectionChange={setSelected}
              color="primary"
              variant="underlined"
              classNames={{
                tabList: "gap-4 w-full relative rounded-none p-0 border-b border-white/10",
                cursor: "w-full bg-gradient-to-r from-indigo-500 to-purple-500",
                tab: "max-w-fit px-0 h-12 text-white/70 data-[selected=true]:text-white",
                tabContent: "group-data-[selected=true]:text-white"
              }}
            >
              <Tab 
                key="global" 
                title={
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:globe" className="text-lg" />
                    <span>Global</span>
                  </div>
                }
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="py-4 space-y-6"
                >
                  <ToggleOption 
                    title="God Mode" 
                    description="Become invincible to all damage"
                    icon="lucide:shield"
                  />
                  
                  <SliderOption 
                    title="Game Speed" 
                    description="Adjust the overall game speed"
                    icon="lucide:timer"
                    defaultValue={50}
                    color="success"
                  />
                  
                  <ToggleOption 
                    title="No Clip" 
                    description="Walk through walls and objects"
                    icon="lucide:box"
                  />
                  
                  <DropdownOption 
                    title="Teleport Location" 
                    description="Instantly move to a location"
                    icon="lucide:map-pin"
                    options={[
                      { key: "spawn", label: "Spawn Point" },
                      { key: "mission", label: "Current Mission" },
                      { key: "safehouse", label: "Safehouse" },
                      { key: "custom", label: "Custom Waypoint" }
                    ]}
                  />
                </motion.div>
              </Tab>
              
              <Tab 
                key="visual" 
                title={
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:eye" className="text-lg" />
                    <span>Visual</span>
                  </div>
                }
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="py-4 space-y-6"
                >
                  <ToggleOption 
                    title="ESP Outlines" 
                    description="See players through walls"
                    icon="lucide:user"
                  />
                  
                  <SliderOption 
                    title="Field of View" 
                    description="Adjust your camera perspective"
                    icon="lucide:camera"
                    defaultValue={70}
                    color="primary"
                  />
                  
                  <DropdownOption 
                    title="Time of Day" 
                    description="Change the game world time"
                    icon="lucide:clock"
                    options={[
                      { key: "morning", label: "Morning" },
                      { key: "noon", label: "Noon" },
                      { key: "evening", label: "Evening" },
                      { key: "night", label: "Night" },
                      { key: "freeze", label: "Freeze Time" }
                    ]}
                  />
                  
                  <SliderOption 
                    title="Brightness" 
                    description="Adjust game world brightness"
                    icon="lucide:sun"
                    defaultValue={60}
                    color="warning"
                  />
                </motion.div>
              </Tab>
              
              <Tab 
                key="weapon" 
                title={
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:target" className="text-lg" />
                    <span>Weapon</span>
                  </div>
                }
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="py-4 space-y-6"
                >
                  <ToggleOption 
                    title="Infinite Ammo" 
                    description="Never run out of ammunition"
                    icon="lucide:loader"
                  />
                  
                  <ToggleOption 
                    title="No Recoil" 
                    description="Eliminate weapon kickback"
                    icon="lucide:move-horizontal"
                  />
                  
                  <SliderOption 
                    title="Damage Multiplier" 
                    description="Increase weapon damage output"
                    icon="lucide:zap"
                    defaultValue={40}
                    color="danger"
                  />
                  
                  <DropdownOption 
                    title="Weapon Modifier" 
                    description="Apply special effects to weapons"
                    icon="lucide:wand"
                    options={[
                      { key: "explosive", label: "Explosive Rounds" },
                      { key: "fire", label: "Incendiary Ammo" },
                      { key: "freeze", label: "Cryo Rounds" },
                      { key: "emp", label: "EMP Rounds" },
                      { key: "none", label: "Standard Ammo" }
                    ]}
                  />
                </motion.div>
              </Tab>
              
              <Tab 
                key="settings" 
                title={
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:settings" className="text-lg" />
                    <span>Settings</span>
                  </div>
                }
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="py-4 space-y-6"
                >
                  <ToggleOption 
                    title="Auto-Save Configs" 
                    description="Save settings automatically"
                    icon="lucide:save"
                  />
                  
                  <SliderOption 
                    title="Menu Opacity" 
                    description="Adjust menu transparency"
                    icon="lucide:layers"
                    defaultValue={80}
                    color="secondary"
                  />
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/80">
                      <Icon icon="lucide:keyboard" className="text-lg" />
                      <span className="font-medium">Menu Hotkey</span>
                    </div>
                    <Input
                      variant="bordered"
                      placeholder="F8"
                      classNames={{
                        input: "text-white",
                        inputWrapper: "border-white/20 bg-white/5 data-[hover=true]:bg-white/10"
                      }}
                    />
                    <p className="text-xs text-white/50">Press a key to change the menu toggle hotkey</p>
                  </div>
                  
                  <DropdownOption 
                    title="Menu Position" 
                    description="Set menu location on screen"
                    icon="lucide:layout"
                    options={[
                      { key: "top-left", label: "Top Left" },
                      { key: "top-right", label: "Top Right" },
                      { key: "center", label: "Center" },
                      { key: "bottom-left", label: "Bottom Left" },
                      { key: "bottom-right", label: "Bottom Right" }
                    ]}
                  />
                </motion.div>
              </Tab>
            </Tabs>
          </div>
        </Card>
      </motion.div>
      
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        backdrop="blur"
        classNames={{
          base: "bg-black/40 backdrop-blur-xl border border-white/10",
          header: "border-b border-white/10",
          footer: "border-t border-white/10"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                Advanced Settings
              </ModalHeader>
              <ModalBody className="text-white/80">
                <div className="space-y-4">
                  <Checkbox defaultSelected color="primary">
                    Hide menu when game loses focus
                  </Checkbox>
                  
                  <Checkbox defaultSelected color="primary">
                    Show notifications for mod events
                  </Checkbox>
                  
                  <Checkbox color="primary">
                    Enable cloud sync for settings
                  </Checkbox>
                  
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-2">Menu Theme</p>
                    <div className="grid grid-cols-4 gap-2">
                      {["#3B82F6", "#10B981", "#8B5CF6", "#EC4899"].map((color, index) => (
                        <button 
                          key={index}
                          className="w-full aspect-square rounded-md border-2 border-white/20 transition-all hover:scale-105"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}