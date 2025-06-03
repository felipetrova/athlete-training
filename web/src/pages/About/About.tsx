import Header from '../../components/Header';

export default function About() {
  return (
    <div className="bg-white">
      <Header title="" />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            About the AT Project
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            The Athlete Training it's a simple training data project.
          </p>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            The idea of this project it's a study and build a new versions of
            FrontEnd libs/framework/tools, of course. And, get and show Strava
            API data, to show user data..
          </p>
        </div>
      </div>
    </div>
  );
}
