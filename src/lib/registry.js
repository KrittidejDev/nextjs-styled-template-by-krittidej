// src/lib/registry.js
"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { GlobalStyles } from "@/styles/GlobalStyles";
import theme from "@/styles/theme.json";

export default function StyledComponentsRegistry({ children }) {
  // ใช้เฉพาะใน server side
  const [styledComponentsStyleSheet] = useState(() =>
    typeof window === "undefined" ? new ServerStyleSheet() : null
  );

  useServerInsertedHTML(() => {
    if (!styledComponentsStyleSheet) return null;

    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    // Client side - ThemeProvider + GlobalStyles
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    );
  }

  // Server side - StyleSheetManager + ThemeProvider + GlobalStyles
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet?.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
}
