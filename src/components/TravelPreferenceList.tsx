import { JSX } from "react";
import TravelPreferences from "../constants/TravelPreferences";
import TravelPreferenceCategories from "./TravelPreferenceCategories";

interface TravelPreferenceListProps {
  setAdditionalPreferences: (additionalPreferences: string) => void;
  disabledAfterMax: string[];
}

export default function TravelPreferenceList({
  setAdditionalPreferences,
  disabledAfterMax,
}: TravelPreferenceListProps): JSX.Element {
  return (
    <>
      {TravelPreferences.map((preference) => (
        <TravelPreferenceCategories
          key={preference.key}
          preference={preference}
          setAdditionalPreferences={setAdditionalPreferences}
          disabledAfterMax={disabledAfterMax}
        />
      ))}
    </>
  );
}
