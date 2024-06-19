'use client';

interface ErrorPageProps {
  error: { message: string };
}

export default function ErrorPage({ error }: Readonly<ErrorPageProps>) {
  return (
    <main className="w-full flex flex-col gap-10 pt-28">
      <h1 className="text-5xl text-center text-red-800">An error occurred!</h1>
      <p className="text-xl text-center">{`Error: ${error.message}`}</p>
    </main>
  );
}
