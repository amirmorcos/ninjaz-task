import Colors from "../../../theme/colors";

export interface IconProps {
  name: string;
  color: keyof typeof Colors;
  size?: number;
}
