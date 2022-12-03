import React, { FC, useMemo, useState } from "react";
import { Home } from "./Home";

export enum TempUnits {
  metric = "Metric",
  imperial = "Imperial",
}

interface HomeContainersProps {
  theme: string;
}

const test = {
  Metric: {
    Value: 2.5,
    Unit: "C",
    UnitType: 17,
  },
  Imperial: {
    Value: 36,
    Unit: "F",
    UnitType: 18,
  },
};

const data = [
  {
    day: "Sunday",
    temperature: {
      Metric: {
        Value: 3.5,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 40,
        Unit: "F",
        UnitType: 18,
      },
    },
    details: "Sunny"
  },
  {
    day: "Monday",
    temperature: {
      Metric: {
        Value: 1.5,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 34,
        Unit: "F",
        UnitType: 18,
      },
    },
    details: "Rainy"
  },
  {
    day: "Tuesday",
    temperature: {
      Metric: {
        Value: 2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 37,
        Unit: "F",
        UnitType: 18,
      },
    },
    details: "Snow"
  },
  {
    day: "Wednesday",
    temperature: {
      Metric: {
        Value: 3,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 39,
        Unit: "F",
        UnitType: 18,
      },
    },
    details: "Sunny"
  },
  {
    day: "Thursday",
    temperature: {
      Metric: {
        Value: 5,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 42,
        Unit: "F",
        UnitType: 18,
      },
    },
    details: "Cloudly"
  }
]

export const HomeContainer: FC<HomeContainersProps> = () => {
  const [activeTemperatureUnit, setActiveTemperatureUnit] = useState(false);
  const temperature = useMemo(() => {
    return test[activeTemperatureUnit ? TempUnits.metric : TempUnits.imperial];
  }, [activeTemperatureUnit]);

  return (
    <Home
      forecasts={data}
      temperature={temperature}
      isActiveTempUnit={activeTemperatureUnit}
      handleTempUnit={() => setActiveTemperatureUnit(!activeTemperatureUnit)}
    />
  );
};
