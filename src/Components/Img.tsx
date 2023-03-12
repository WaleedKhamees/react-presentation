export const Img = ({ src }: { src: string }) => {
  return <img loading="lazy" className="max-w-full md:max-w-full object-fill" src={src} />;
};
