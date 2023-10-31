import React from "react";

const DevInfo = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-semibold text-gray-500">Who is Rasal?</h1>
      <div className="relative h-screen text-gray-800 sm:h-auto">
        <div className="h-full">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_dcatp5cr.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-sm">
            Hai , Hello , Namaste....
            <pre className="my-5 text-2xl font-semibold sm:text-sm font-mont ">
              {JSON.stringify(
                {
                  name: "Muhammed Rasal vm",
                  age: 23,
                  gender: "Male",
                  country: "India",
                },
                null,
                2
              )}
            </pre>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DevInfo;
