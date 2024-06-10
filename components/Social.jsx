import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: <FontAwesomeIcon icon={faGithub}/>, path: "" },
  { icon: <FontAwesomeIcon icon={faLinkedin}/>, path: "" }
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
