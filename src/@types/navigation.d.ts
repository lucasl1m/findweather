export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        welcome: undefined;
        home: undefined;
        search: undefined;
        next5Days: {
            forecast: {
              forecastday: Array<IForecastData>;
            };
            forecast5Days: Array<IForecastDay>;
          };
      }
    }
  }
