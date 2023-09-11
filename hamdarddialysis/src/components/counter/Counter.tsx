import { useState, useEffect, useMemo } from "react";

export default function Counter() {
  const [countries, setCountries] = useState(0);
  const [city, setCity] = useState(0);
  const [centre, setCentre] = useState(0);
  const [employees, setEmployees] = useState(0);
  const limitCountries = 4;
  const limitCity = 192;
  const limitCentre = 385;
  const limitEmployees = 4000;
  const duration = 3000; // 3 seconds

  const steps = useMemo(
    () => ({
      countries: limitCountries / (duration / 1000),
      city: limitCity / (duration / 100),
      centre: limitCentre / (duration / 100),
      employees: limitEmployees / (duration / 60),
    }),
    [limitCountries, limitCity, limitCentre, limitEmployees]
  );

  useEffect(() => {
    let interval: number;

    function updateCounters() {
      setCountries((prev) =>
        Math.floor(Math.min(prev + steps.countries, limitCountries))
      );
      setCity((prev) => Math.floor(Math.min(prev + steps.city, limitCity)));
      setCentre((prev) =>
        Math.floor(Math.min(prev + steps.centre, limitCentre))
      );
      setEmployees((prev) =>
        Math.floor(Math.min(prev + steps.employees, limitEmployees))
      );
    }

    interval = setInterval(updateCounters, 40); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, [limitCountries, limitCity, limitCentre, limitEmployees, steps]);

  return (
    <section className="grid md:grid-cols-4 grid-cols-2 gap-8 bg-white py-5 md:py-16 ">
      <div className="flex items-center justify-center flex-col gap-1 ">
        <h2 className="text-blue-600 text-2xl font-semibold ">{countries}</h2>
        <h2 className="text-red-500 text-2xl font-semibold">Countries</h2>
      </div>
      <div className="flex items-center justify-center flex-col gap-1 ">
        <h2 className="text-blue-600 text-2xl font-semibold ">{city}</h2>
        <h2 className="text-red-500 text-2xl font-semibold ">Cities</h2>
      </div>
      <div className="flex items-center justify-center flex-col gap-1 ">
        <h2 className="text-blue-600 text-2xl font-semibold ">{centre}</h2>
        <h2 className="text-red-500 text-2xl font-semibold  ">Centres</h2>
      </div>
      <div className="flex items-center justify-center flex-col gap-1 ">
        <h2 className="text-blue-600 text-2xl font-semibold ">{employees}</h2>
        <h2 className="text-red-500 text-2xl font-semibold  ">Employees</h2>
      </div>
    </section>
  );
}
