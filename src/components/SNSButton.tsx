import { SocialIcon } from "react-social-icons";

export type SNSButtonProps = {
  url: string;
};

export const SNSButton = ({ url }: SNSButtonProps) => {
  return (
    <SocialIcon
      className="!w-8 !h-8"
      url={url}
      target="_blank"
      rel="noreferrer"
    />
  );
};
