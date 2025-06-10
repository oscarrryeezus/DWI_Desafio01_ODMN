import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";

export default function App() {
  return (
    <div>
      <Header />
      <main className="flex-grow-1 container py-4">
        <Content />
      </main>
      <Footer />
    </div>
  );
}