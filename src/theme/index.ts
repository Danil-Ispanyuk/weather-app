enum Palitra {
    white = "#ffffff",
    black = "#000000",
    midnight = "#1d1e22",

    primary = "#313d4b",
    primaryDeep = "#393f4d",
    primaryLight = "#F3F3F3",
    primaryLighter = "#f7fcff",

    secondary = "#4b6777"
}

export const themeConfig = {
    light: {
        activeUnitClr: Palitra.black,
        buttonBcg: Palitra.primary,
        buttonClr: Palitra.primaryLighter,
        contentBcg: Palitra.secondary,
        contentShadow: Palitra.black,
        cityNameClr: Palitra.primary,
        dateClr: Palitra.primary,
        temperatureClr: Palitra.primary,
        temperatureUnitClr: Palitra.primary,
        mainBcg: Palitra.primaryLight,
        switchBcgNoActive: Palitra.midnight,
        switchBcgActive: Palitra.primary,
        switchClr: Palitra.primaryLighter,
        searchBcg: Palitra.primaryDeep,
        searchIconClr: Palitra.white,
        weatherInfoTitle: Palitra.primaryDeep,
        weatherInfoText: Palitra.primary,
        forecastTitle: Palitra.primary,
        forecastTemperature: Palitra.primary,
        forecastDetails: Palitra.primary,
        dropdown: {
            inputClr: Palitra.primary,
            contentBorderClr: Palitra.primaryDeep,
            optionsBcg: Palitra.primaryLight,
            optionsClr: Palitra.primary,
            optionHoverBcg: Palitra.primary,
            optionHoverClr: Palitra.primaryLight,
        }
    },
    dark: {
        loaderBcg: Palitra.primary,
        activeUnitClr: Palitra.primaryLighter,
        buttonBcg: Palitra.primaryLighter,
        buttonClr: Palitra.midnight,
        contentBcg: Palitra.secondary,
        contentShadow: Palitra.white,
        cityNameClr: Palitra.primaryLighter,
        dateClr: Palitra.primaryLighter,
        temperatureClr: Palitra.primaryLighter,
        temperatureUnitClr: Palitra.primaryLight,
        mainBcg: Palitra.midnight,
        forecastTitle: Palitra.primaryLighter,
        forecastTemperature: Palitra.primaryLighter,
        forecastDetails: Palitra.primaryLighter,
        switchBcgNoActive: Palitra.midnight,
        switchBcgActive: Palitra.primary,
        switchClr: Palitra.primaryLighter,
        searchIconClr: Palitra.midnight,
        weatherInfoTitle: Palitra.primaryLight,
        weatherInfoText: Palitra.primaryLighter,
        dropdown: {
            inputClr: Palitra.primaryLight,
            contentBorderClr: Palitra.primaryDeep,
            optionsBcg: Palitra.primary,
            optionsClr: Palitra.primaryLight,
            optionHoverBcg: Palitra.primaryLight,
            optionHoverClr: Palitra.primary,
        }
    }
}