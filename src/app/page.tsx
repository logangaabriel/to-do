import NewText from "./components/NewText/NewText";
 
export default function Home() {
  return (
    <div>
      <main>
        <NewText color="red" text="Logan" />
        <NewText color="blue" text="Thiago" />
      </main>
    </div>
  );
}