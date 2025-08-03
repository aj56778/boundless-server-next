"use client";

import { Card, Code } from "@heroui/react";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <Card>
        <Code color="primary" size="lg">
          Hi hello
        </Code>
      </Card>
    </div>
  );
}
