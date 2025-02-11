import { UserPersonality } from "../constants/UserPersonalities";

interface UserAvatarProps {
  personality: UserPersonality;
  handleSelectUserPersonality: (personality: UserPersonality) => void;
}

export default function UserAvatar({
  personality,
  handleSelectUserPersonality,
}: UserAvatarProps) {
  return (
    <div>
      <p>{personality.name}</p>
      <button onClick={() => handleSelectUserPersonality(personality)}>
        Select Personality
      </button>
    </div>
  );
}
