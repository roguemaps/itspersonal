"use client";

import { useEffect } from 'react';

export default function ClientRedirect() {
  useEffect(() => {
    // Handle SPA redirect from 404.html
    const { pathname, search, hash } = window.location;
    if (pathname.includes("/?/")) {
      const newPath = pathname.replace("/?/", "/");
      window.history.replaceState(null, "", newPath + search + hash);
    }
  }, []);

  return null;
}
