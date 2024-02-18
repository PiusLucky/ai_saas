"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function LoadingIndicator() {
  return (
    <ProgressBar height="3px" color="#9333EA" options={{ showSpinner: true }} />
  );
}
