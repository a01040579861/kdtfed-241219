import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import style from "./index.module.css";

export default function Home() {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test"); // 페이지 이동
    // router.replace("/test"); // 뒤로이동하기 막기
    // router.back(); // 페이지 뒤로가기
  };

  useEffect(() => {
    router.prefetch("/test");
  }, []);
  return (
    <>
      <header>
        <Link href={"/"}>Index</Link>
        &nbsp;
        <Link href={"/search"}>Search</Link>
        &nbsp;
        <Link href={"/book/1"}>Book/1</Link>
        <div>
          <button onClick={onClickButton}>Test 페이지로 이동</button>
        </div>
      </header>
      <h1 className={style.h1}>index</h1>
    </>
  );
}
