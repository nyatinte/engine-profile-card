export type AvatarProps = {
  src: string;
  size?: number;
};

export const Avatar = ({ src, size }: AvatarProps) => {
  return (
    <div className="rounded-full overflow-hidden">
      <img
        className="object-cover object-center"
        style={{ width: size, height: size }}
        width={size}
        height={size}
        src={src}
        alt="アバター"
      />
    </div>
  );
};
