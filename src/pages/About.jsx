function about() {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-6 mx-auto mb-8">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 uppercase text-white">
            The Best market
          </h1>
          <p className="lg:w-2/3 mx-auto text-2xl text-center uppercase  leading-relaxed text-purple-600 ">
          you are welcome <br />
           You can find more than 70,000 different products in our store 
          
          </p>
        </div>

        <div className="flex flex-wrap -m-4 text-center justify-around ">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
            <div className="border-2 border-gray-200 px-6 py-8 rounded-lg">
              <p className="pb-4">✅</p>

              <p className="leading-relaxed  text-blue-600">
                {" "}
                We have solved more than 10,000 problems so far ✅
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
            <div className="border-2 border-gray-200 px-6 py-8 rounded-lg">
              <p className="pb-4 text-yellow-400">🎁 GIFTS 🎁</p>

              <p className="leading-relaxed  text-white">
                {" "}
                we have 💯% discount for customers every month 🎁
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-6 py-8 rounded-lg">
              <p className="pb-4 text-white">waiting...</p>
              <p className="leading-relaxed text-yellow-400 ">
                More than 789 problems are being solved 👀
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-2xl leading-relaxed text-purple-600 text-center">
      join us and get a gift 🎁
      </p>
    </section>
  );
}

export default about;
