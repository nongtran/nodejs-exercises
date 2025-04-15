"use client";

import dynamic from "next/dynamic";
import React from "react";

const RemoteHelloWorld = dynamic(
  () =>
    import("remoteApp/HelloWorld").catch(() => {
      return Object.assign(() => <p>Mock Remote Component</p>, {
        displayName: "MockRemoteComponent",
      });
    }),
  {
    ssr: false,
    loading: () => <p>Loading Remote Component...</p>,
  }
);

export default function HomePage() {
  return (
    <div>
      <h1>Host App 🏠</h1>
      <RemoteHelloWorld />
    </div>
  );
}
