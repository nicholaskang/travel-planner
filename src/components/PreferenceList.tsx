import { JSX } from "react";
import TravelPreferences, {
  TravelPreference,
} from "../constants/TravelPreferences";

export default function PreferenceList(): JSX.Element {
  return (
    <>
      {TravelPreferences.map((preference: TravelPreference) => (
        <div key={preference.category}>
          <h3>
            {preference.icon} {preference.category}
          </h3>
          <ul>
            {preference.items.map((item) => (
              <li key={item.key}>
                {item.icon} {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
