import notFoundDoodle from "./not-found.svg";

function NotFound() {
  return (
    <div className="grid place-content-center">
      <div className="text-center">
        <h1 className="font-bold tracking-tight text-white text-5xl mb-10">
          Uh-oh!
        </h1>
        <div className="mx-auto mb-8">
          <img
            alt="person dropping papers"
            className="h-56 w-auto sm:h-64"
            data-testid="not-found-img"
            src={notFoundDoodle}
          />
        </div>
        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
      </div>
    </div>
  );
}

export default NotFound;
