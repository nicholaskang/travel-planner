import { JSX } from "react";
import { ITravelPreference } from "../constants/TravelPreferences";

interface IPreference {
  preference: ITravelPreference;
  setAdditionalPreferences: (additionalPreferences: string) => void;
  disabledAfterMax: string[];
}

export default function TravelPreferenceCategories({
  preference,
  setAdditionalPreferences,
  disabledAfterMax,
}: IPreference): JSX.Element {
  return (
    <div>
      <h3>
        {preference.categoryIcon} {preference.categoryName}
      </h3>
      <ul>
        {preference.items.map((item) => {
          const isDisabled =
            disabledAfterMax.length >= 5 &&
            !disabledAfterMax.includes(item.name);
          return (
            <li key={item.key}>
              <button
                onClick={() => setAdditionalPreferences(item.name)}
                disabled={isDisabled}>
                {item.icon} {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
