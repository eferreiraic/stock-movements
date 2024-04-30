'use client';
export default function ErrorPage({ error }: { error: { message: string } }) {
  return (
    <main className="w-full flex flex-col gap-10 pt-28">
      <h1 className="text-5xl text-center text-red-800">An error occurred!</h1>
      <p className="text-xl text-center">{`Error: ${error.message}`}</p>
    </main>
  );
}
