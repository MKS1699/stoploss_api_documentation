import { Body, Footer, Header, NavBar } from "./components";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      {/* <NavBar /> */}
      <Body />
      <Footer />
    </main>
  );
}
