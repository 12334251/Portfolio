// File: ui/Portal.tsx
"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
};

export function Portal({ children }: PortalProps) {
  const [mounted, setMounted] = useState(false);
  // We create a container <div> that lives at the end of document.body:
  const [container] = useState(() => {
    const el = document.createElement("div");
    el.id = "modal-portal-root";
    return el;
  });

  useEffect(() => {
    document.body.appendChild(container);
    setMounted(true);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  if (!mounted) return null;
  return createPortal(children, container);
}
