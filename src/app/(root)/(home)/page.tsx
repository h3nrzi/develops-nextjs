import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Hello Js Mastery</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
