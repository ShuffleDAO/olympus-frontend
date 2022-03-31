import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";

export default function Social() {
  return (
    <div className="social-row">
      <Link href="https://github.com/ShuffleDAO" target="_blank">
        <SvgIcon color="primary" component={GitHub} />
      </Link>

      <Link href="https://ShuffleDAO.medium.com/" target="_blank">
        <SvgIcon color="primary" component={Medium} />
      </Link>

      <Link href="https://twitter.com/shuffledao" target="_blank">
        <SvgIcon color="primary" component={Twitter} />
      </Link>

      {/* Discord needs to be updated */}
      {/* <Link href="https://discord.gg/shuffledao" target="_blank">
        <SvgIcon color="primary" component={Discord} />
      </Link> */}
    </div>
  );
}
