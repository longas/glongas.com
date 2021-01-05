interface BlogImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

const BlogFigure: React.FC<BlogImageProps> = ({ caption, ...props }) => {
  return (
    <figure className="flex flex-col justify-center items-center">
      <img className="border-4 border-white" loading="lazy" {...props} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default BlogFigure;
