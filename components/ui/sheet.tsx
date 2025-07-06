"use client"

import * as React from "react"

// Custom X icon component
const XIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

// Simple Sheet implementation without external dependencies
interface SheetContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextType | undefined>(undefined);

const useSheet = () => {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a Sheet");
  }
  return context;
}

const Sheet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ children, asChild, ...props }, ref) => {
  const { setIsOpen } = useSheet();
  
  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as any;
    return React.cloneElement(children, {
      ...childProps,
      onClick: (e: React.MouseEvent) => {
        setIsOpen(true);
        if (childProps.onClick) {
          childProps.onClick(e);
        }
      },
      ref
    });
  }

  return (
    <button
      ref={ref}
      onClick={() => setIsOpen(true)}
      {...props}
    >
      {children}
    </button>
  );
});
SheetTrigger.displayName = "SheetTrigger";

interface SheetContentProps {
  children?: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const SheetContent: React.FC<SheetContentProps> = ({ 
  side = "right", 
  className = "", 
  children 
}) => {
  const { isOpen, setIsOpen } = useSheet();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sideClasses = {
    top: "inset-x-0 top-0 h-auto",
    bottom: "inset-x-0 bottom-0 h-auto",
    left: "inset-y-0 left-0 w-3/4 max-w-sm",
    right: "inset-y-0 right-0 w-3/4 max-w-sm"
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Content */}
      <div 
        className={`fixed ${sideClasses[side]} bg-white backdrop-blur-md shadow-lg p-6 ${className}`}
        style={{
          animation: isOpen ? 'slideIn 0.3s ease-out' : undefined
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          <XIcon />
          <span className="sr-only">Close</span>
        </button>
        
        {children}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: ${side === 'right' ? 'translateX(100%)' : 
                        side === 'left' ? 'translateX(-100%)' : 
                        side === 'top' ? 'translateY(-100%)' : 
                        'translateY(100%)'};
          }
          to {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
};

const SheetClose: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setIsOpen } = useSheet();
  
  return (
    <button onClick={() => setIsOpen(false)}>
      {children}
    </button>
  );
};

// These are just placeholder exports to maintain compatibility
const SheetPortal = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const SheetOverlay = () => null;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col space-y-2 text-center sm:text-left ${className || ""}`}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className || ""}`}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h2
    className={`text-lg font-semibold ${className || ""}`}
    {...props}
  />
);
SheetTitle.displayName = "SheetTitle";

const SheetDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p
    className={`text-sm text-gray-600 ${className || ""}`}
    {...props}
  />
);
SheetDescription.displayName = "SheetDescription";

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
