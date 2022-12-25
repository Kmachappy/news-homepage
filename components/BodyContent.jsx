import Image from "next/image";

const BodyContent = () => {
  return (
    <div className="my-12 border border-purple-400 flex">
      <div className="flex flex-col">
        <div className="border border-green-400">
          <Image
            src="/images/image-web-3-desktop.jpg"
            width={600}
            height={400}
            alt="image"
          />
        </div>
        <div className="flex">
          <div>
            <h1 className="font-extrabold text-6xl">
              The Bright Future of Web 3.0?
            </h1>
          </div>
          <div>
            <div>
              <p>
                We dive int the next evolution fo the wbe that claims to put the
                power of the platforms back into the hands of the poeple. But is
                it really fulfilling its promise?
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className=" bg-purple-900">
        <div> new</div>
        <div>
          <div>hydrogen</div>
          <div>downside</div>
          <div>vc funding</div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
