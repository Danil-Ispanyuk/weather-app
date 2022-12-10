import { useMemo, useState } from "react";
import { debounce } from "../../utils/debounce";
import { Home } from "./Home";

export enum TempUnits {
  metric = "Metric",
  imperial = "Imperial",
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
const options = [
  {
    "Version": 1,
    "Key": "308406",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Khartoum",
    "Country": {
      "ID": "SD",
      "LocalizedName": "Sudan"
    },
    "AdministrativeArea": {
      "ID": "KH",
      "LocalizedName": "Khartoum"
    }
  },
  {
    "Version": 1,
    "Key": "323903",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Kharkiv",
    "Country": {
      "ID": "UA",
      "LocalizedName": "Ukraine"
    },
    "AdministrativeArea": {
      "ID": "63",
      "LocalizedName": "Kharkiv"
    }
  },
  {
    "Version": 1,
    "Key": "2773473",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Kharghar",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "MH",
      "LocalizedName": "Maharashtra"
    }
  },
  {
    "Version": 1,
    "Key": "189101",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Khargone",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "MP",
      "LocalizedName": "Madhya Pradesh"
    }
  },
  {
    "Version": 1,
    "Key": "191582",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Kharagpur",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "WB",
      "LocalizedName": "West Bengal"
    }
  },
  {
    "Version": 1,
    "Key": "2879567",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Kharagpur Railway Settlement",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "WB",
      "LocalizedName": "West Bengal"
    }
  },
  {
    "Version": 1,
    "Key": "191530",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Khardaha",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "WB",
      "LocalizedName": "West Bengal"
    }
  },
  {
    "Version": 1,
    "Key": "187303",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Kharagpur",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "BR",
      "LocalizedName": "Bihar"
    }
  },
  {
    "Version": 1,
    "Key": "190121",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Kharar",
    "Country": {
      "ID": "IN",
      "LocalizedName": "India"
    },
    "AdministrativeArea": {
      "ID": "PB",
      "LocalizedName": "Punjab"
    }
  },
  {
    "Version": 1,
    "Key": "257209",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Kharan",
    "Country": {
      "ID": "PK",
      "LocalizedName": "Pakistan"
    },
    "AdministrativeArea": {
      "ID": "BA",
      "LocalizedName": "Balochistan"
    }
  }
]


export const HomeContainer = () => {
  const [activeTemperatureUnit, setActiveTemperatureUnit] = useState(false);

  const temperature = useMemo(() => {
    return test[activeTemperatureUnit ? TempUnits.metric : TempUnits.imperial];
  }, [activeTemperatureUnit]);

  const [searchValue, setSearchValue] = useState<string>('');

  const testFunc = (value: string) => {
    console.log("value", value);
  }

  const handleChange = (value: string) => {
    setSearchValue(value);
    debounce(() => testFunc(value), 500);
  };

  return (
    <Home
      forecasts={data}
      temperature={temperature}
      isActiveTempUnit={activeTemperatureUnit}
      handleTempUnit={() => setActiveTemperatureUnit(!activeTemperatureUnit)}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      handleChange={handleChange}
      options={options}
    />
  );
};
