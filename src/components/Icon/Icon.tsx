import { FunctionComponent } from 'react';
import { GithubIcon, EmailIcon, LinkedInIcon, PhoneIcon } from './icons';
import { IconShape } from '../Contact/Contact';

type OwnProps = {
  shape: IconShape;
};

type IconProps = OwnProps;

const Icon: FunctionComponent<IconProps> = ({ shape }) => {

  const icons: Record<IconShape, FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
    email: EmailIcon,
    github: GithubIcon,
    linkedin: LinkedInIcon,
    phone: PhoneIcon,
  };

  const IconComponent = icons[shape];

  return (
    <IconComponent />
  );
};

export default Icon;
