import { JSX } from "react";
import UserPersonalities, {
  UserPersonality,
} from "../constants/UserPersonalities";
import UserAvatar from "./UserAvatar";

export default function UserAvatarList({
  handleSelectUserPersonality,
}: {
  handleSelectUserPersonality: (personality: UserPersonality) => void;
}): JSX.Element {
  return (
    <>
      {UserPersonalities.map((personality: UserPersonality) => (
        <UserAvatar
          key={personality.key}
          personality={personality}
          handleSelectUserPersonality={handleSelectUserPersonality}
        />
      ))}
    </>
  );
}
