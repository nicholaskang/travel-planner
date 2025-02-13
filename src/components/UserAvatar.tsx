import { IUserPersonality } from "../constants/UserPersonalities";

interface UserAvatarProps {
  personality: IUserPersonality;
  handleSelectUserPersonality: (personality: IUserPersonality) => void;
}

export default function UserAvatar({
  personality,
  handleSelectUserPersonality,
}: UserAvatarProps) {
  return (
    <div>
      <img
        width="120"
        src={personality.image.src}
        alt={personality.image.alt}
      />
      <p>{personality.name}</p>
      <button onClick={() => handleSelectUserPersonality(personality)}>
        Select Personality
      </button>
    </div>
  );
}
