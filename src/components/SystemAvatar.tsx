import { SystemPersonality } from "../constants/SystemPersonalities";

interface SystemAvatarProps {
  personality: SystemPersonality;
}

export default function SystemAvatar({ personality }: SystemAvatarProps) {
  return <div>{personality.name}</div>;
}
