import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Globe, Phone, Mail } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { getNavigation, getLocalizedLanguages } from '@/data/constants/navigation'
import { defaultLang } from '@/i18n/langUtils'
import { useTranslations } from '@/i18n/utils'
import { cn } from "@/lib/utils"

// Animatsiya konstantalari
const animations = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
  },
  menu: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { type: "spring", damping: 25, stiffness: 300 }
  },
  dropdown: {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 }
  }
}

// MenuItem komponenti
interface MenuItemProps {
  item: {
    name: string;
    href?: string;
    items?: Array<{ name: string; href: string }>;
  };
  onClose: () => void;
  isExpanded: boolean;
  onToggle: (name: string) => void;
}

const MenuItem = ({ item, onClose, isExpanded, onToggle }: MenuItemProps) => {
  if (item.items) {
    return (
      <div className="px-2">
        <button
          onClick={() => onToggle(item.name)}
          className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className="font-medium">{item.name}</span>
          <ChevronDown 
            className={cn(
              "h-5 w-5 text-gray-500 transition-transform duration-200",
              isExpanded && "rotate-180"
            )} 
          />
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              {...animations.dropdown}
              className="pl-4 space-y-1 py-2"
            >
              {item.items.map((subItem) => (
                <li key={subItem.name}>
                  <a
                    href={subItem.href}
                    className="block p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    onClick={onClose}
                  >
                    {subItem.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <a
      href={item.href}
      className="block mx-2 p-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
      onClick={onClose}
    >
      {item.name}
    </a>
  )
}

// ContactInfo komponenti
const ContactInfo = () => (
  <div className="p-4 space-y-3">
    <a 
      href="tel:+998901234567" 
      className="flex items-center gap-3 hover:text-blue-600 transition-colors"
    >
      <Phone className="h-5 w-5 text-gray-500" />
      <span className="text-gray-600">+998 90 123-45-67</span>
    </a>
    <a 
      href="mailto:info@company.uz" 
      className="flex items-center gap-3 hover:text-blue-600 transition-colors"
    >
      <Mail className="h-5 w-5 text-gray-500" />
      <span className="text-gray-600">info@company.uz</span>
    </a>
  </div>
)

// LanguageSelector komponenti
interface LanguageSelectorProps {
  currentLanguage: string;
  currentPath: string;
  languages: Array<{ code: string; name: string }>;
  showLanguages: boolean;
  onLanguageSelect: (code: string) => void;
  onToggleLanguages: () => void;
  t: (key: string) => string;
}

const LanguageSelector = ({
  currentLanguage,
  currentPath,
  languages,
  showLanguages,
  onLanguageSelect,
  onToggleLanguages,
  t
}: LanguageSelectorProps) => (
  <div className="px-4 py-3 border-t">
    <button
      onClick={onToggleLanguages}
      className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <Globe className="h-5 w-5 text-gray-500" />
      <span className="font-medium">{t('nav.selectLanguage')}</span>
      <ChevronDown className={cn(
        "ml-auto h-5 w-5 text-gray-500 transition-transform duration-200",
        showLanguages && "rotate-180"
      )} />
    </button>
    
    <AnimatePresence>
      {showLanguages && (
        <motion.div {...animations.dropdown} className="mt-2 space-y-1 px-3">
          {languages.map((language) => (
            <a
              key={language.code}
              href={`/${language.code}${currentPath.substring(3)}`}
              className={cn(
                "flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",
                currentLanguage === language.code ? "bg-gray-100 text-blue-600" : "text-gray-600"
              )}
              onClick={() => onLanguageSelect(language.code)}
            >
              {language.name}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

// Asosiy MobileNav komponenti
interface MobileNavProps {
  currentPath: string;
}

export default function MobileNav({ currentPath }: MobileNavProps) {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [showLanguages, setShowLanguages] = useState(false)
  
  const lang = currentPath.split('/')[1] || defaultLang
  const [currentLanguage, setCurrentLanguage] = useState(lang)
  
  const t = useTranslations(lang)
  const menuItems = getNavigation(lang)
  const languagesList = getLocalizedLanguages(lang)

  // Client-side renderingni tekshirish
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Scroll bloklash
  useEffect(() => {
    if (isClient) {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset'
      return () => { document.body.style.overflow = 'unset' }
    }
  }, [isOpen, isClient])

  const handleClose = () => setIsOpen(false)
  const toggleSubmenu = (name: string) => setExpandedItem(expandedItem === name ? null : name)
  const handleLanguageSelect = (code: string) => {
    setCurrentLanguage(code)
    setShowLanguages(false)
    handleClose()
  }

  // SSR uchun boshlang'ich render
  if (!isClient) {
    return (
      <button className="menu-trigger p-2 text-gray-700" aria-label="Open Menu">
        <Menu className="h-6 w-6" />
      </button>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="menu-trigger p-2 text-gray-700"
        aria-label={t('nav.openMenu')}
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              {...animations.overlay}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[51]"
              onClick={handleClose}
            />
            <motion.div
              {...animations.menu}
              className="mobile-menu-container fixed inset-y-0 right-0 w-[85%] max-w-[400px] bg-white z-[52] flex flex-col shadow-xl h-[100dvh]"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-medium">{t('nav.menu')}</h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label={t('nav.closeMenu')}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <nav className="py-2">
                  <ul className="space-y-1">
                    {menuItems.map((item) => (
                      <li key={item.name}>
                        <MenuItem
                          item={item}
                          onClose={handleClose}
                          isExpanded={expandedItem === item.name}
                          onToggle={toggleSubmenu}
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="mt-auto border-t">
                <ContactInfo />
                
                <LanguageSelector
                  currentLanguage={currentLanguage}
                  currentPath={currentPath}
                  languages={languagesList}
                  showLanguages={showLanguages}
                  onLanguageSelect={handleLanguageSelect}
                  onToggleLanguages={() => setShowLanguages(!showLanguages)}
                  t={t}
                />

                <div className="p-4">
                  <button 
                    onClick={() => {
                      window.showOfferPopup?.()
                      handleClose()
                    }}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    {t('nav.submitApplication')}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
