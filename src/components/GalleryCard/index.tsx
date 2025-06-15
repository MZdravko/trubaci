/* eslint-disable @next/next/no-img-element */
interface Props {
  src: string;
  onClick?: () => void;
}

const GalleryCard: React.FC<Props> = ({ src, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg aspect-square"
    >
      <img
        src={src}
        alt="Concert crowd"
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
};

export default GalleryCard;
