import { JSX } from "react";
import UserPersonalities, {
  IUserPersonality,
} from "../constants/UserPersonalities";
import UserAvatar from "./UserAvatar";

export default function UserAvatarList({
  handleSelectUserPersonality,
}: {
  handleSelectUserPersonality: (personality: IUserPersonality) => void;
}): JSX.Element {
  return (
    <>
      {UserPersonalities.map((personality: IUserPersonality) => (
        <UserAvatar
          key={personality.key}
          personality={personality}
          handleSelectUserPersonality={handleSelectUserPersonality}
        />
      ))}
    </>
  );
}
