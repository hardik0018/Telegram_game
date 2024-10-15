import { MdDelete } from "react-icons/md";

type ImageBlock = {
  old: Boolean;
  src: Blob;
  name: String;
  onClick: any;
};

const ImageBlock = ({ old, src, name, onClick }: ImageBlock) => {
  return (
    <div>
      <section className="w-[90%] h-[90%] relative group">
        <img
          loading="lazy"
          alt="img"
          src={
            old
              ? `${import.meta.env.VITE_PUBLIC_SERVER_HOST}/images/${src}`
              : URL.createObjectURL(src)
          }
          className="h-full w-full rounded-md"
        />
        <div className="absolute rounded-md hidden group-hover:block top-0 h-full text-white w-full bg-gray-700 opacity-30"></div>
        <div className="absolute rounded-md hidden group-hover:block top-0 h-full font-semibold text-white w-full">
          <span className="absolute top-2 left-2 z-10 truncate w-[98%]">
            {name}
          </span>
          <span className="absolute bottom-1 right-2">
            <MdDelete
              onClick={onClick}
              className="cursor-pointer text-2xl hover:text-red-600"
            />
          </span>
        </div>
      </section>
    </div>
  );
};

export default ImageBlock;
