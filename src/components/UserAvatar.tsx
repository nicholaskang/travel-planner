import { UserPersonality } from "../constants/UserPersonalities";

interface UserAvatarProps {
  personality: UserPersonality;
}

export default function UserAvatar({ personality }: UserAvatarProps) {
  return <div>{personality.name}</div>;
}
