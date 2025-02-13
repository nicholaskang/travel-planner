import { JSX } from "react";
import { ITravelPreference } from "../constants/TravelPreferences";

interface IPreference {
  preference: ITravelPreference;
  setAdditionalPreferences: (additionalPreferences: string) => void;
}

export default function TravelPreferenceCategories({
  preference,
  setAdditionalPreferences,
}: IPreference): JSX.Element {
  return (
    <div>
      <h3>
        {preference.categoryIcon} {preference.categoryName}
      </h3>
      <ul>
        {preference.items.map((item) => (
          <li key={item.key}>
            <button onClick={() => setAdditionalPreferences(item.name)}>
              {item.icon} {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
