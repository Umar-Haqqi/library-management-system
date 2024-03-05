"use client";

import { useState } from "react";
import BookList from "./components/BookList";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  return (
    <>
      <div
        className="w-full bg-slate-100 m-auto px-20 box-border"
        style={{ height: "calc(100vh - 70px)" }}
      >
        {isLogin ? <BookList /> : router.push("/login")}
      </div>
    </>
  );
}
