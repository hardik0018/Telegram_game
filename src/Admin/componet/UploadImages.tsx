import  { useState } from "react";
import ImageBlock from "./ImageBlock";
const UploadImages = ({ }: any) => {
  const [Images, setImages] = useState([]);

  const HanldeOnChange = (e:any) => {
   console.log(e)
  };

  const handleDeleteImage = (i:any) => {
    let remove = [...Images].filter((m, index) => index != i);
    setImages(remove);
  };

  const onSubmit = async () => {};
  return (
    <div className="w-full h-full">
      <div className="w-full sm:px-4 px-3 md:px-8 sm:py-8 h-full z-10">
        <main className="container mx-auto h-full border border-gray-400 rounded-md shadow-sm shadow-gray-500">
          <article
            aria-label="File Upload Modal"
            className="relative h-full flex flex-col "
          >
            <section className="h-full overflow-auto p-8 w-full flex flex-col">
              <header className="border-dashed border-2 border-gray-400 py-2 flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                  <span>Drag and drop your</span>&nbsp;
                  <span>files anywhere or</span>
                </p>
                <input
                  id="hidden-input"
                  type="file"
                  onChange={HanldeOnChange}
                  multiple
                  className="hidden"
                />
                <label
                  htmlFor="hidden-input"
                  className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300  focus:outline-none"
                >
                  Upload a file
                </label>
              </header>

              <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                To Upload
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {Array.from(Images).map((key:any, i) => {
                  return (
                    <ImageBlock
                      src={key}
                      key={i}
                      name={key.name}
                      old={false}
                      onClick={() => handleDeleteImage(i)}
                    />
                  );
                })}
              </div>
            </section>
            <footer className="flex justify-end px-8 pb-8 pt-4">
              <button
                type="submit"
                onClick={onSubmit}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Upload
              </button>
              <button className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Cancel
              </button>
            </footer>
          </article>
        </main>
      </div>
    </div>
  );
};

export default UploadImages;
