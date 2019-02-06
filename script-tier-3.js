var vm = new Vue({
  el: "#app",

  data: {
    appTitle: "Auto Transport Content Generator",
    showGenerateButton: true,
    showContent: false,
    allStates: [],
    mainStateAbbreviation: "AL",
    secStateAbbreviation: "AK",
    randomCityNumber: 0,
    randomBodyTypeNumber: 0,
    randomAccessoryNumber: 0,
    randomRateImpactNumber: 0,
    randomShippingImpactNumber: 0,
    randomTransportsNumber: 0,
    mainStateTopTenCities: [],
    mainStateCities: [],
    secStateTopTenCities: [],
    secStateCities: [],
    stateNickname: [],
    vehicleAccessories: [],
    vehicleBodyTypes: [],
    topTwentyCitiesUSA: [],
    rateImpacts: [],
    shippingImpacts: [],
    introHeadings: [],
    ratesHeadings: [],
    whyChooseUsHeadings: [],
    studentHeadings: [],
    militaryHeadings: [],
    snowbirdHeadings: [],
    introParagraphs: [],
    ratesParagraphs1: [],
    ratesParagraphs2: [],
    whyUsParagraphs1: [],
    whyUsParagraphs2: [],
    shippingProcessParagraphs1: [],
    shippingProcessParagraphs2: [],
    shippingProcessParagraphs3: [],
    shippingImpactsParagraphs1: [],
    shippingImpactsParagraphs2: [],
    studentTransportParas: [],
    militaryTransportParas: [],
    snowbirdTransportParas: [],
    roadConditionParagraphArray: [],
    weatherParagraphArray: []
  },

  computed: {
    mainStateFullName() {
      var fullName = "";

      this.allStates.forEach( (state) => {
        if (state.abbreviation === this.mainStateAbbreviation) {
          fullName = state.name;
        }
      });

      return fullName;
    },

    secStateFullName() {
      var fullName = "";

      this.allStates.forEach( (state) => {
        if (state.abbreviation === this.secStateAbbreviation) {
          fullName = state.name;
        }
      });

      return fullName;
    },

    mainStateRandomTopTenCitiesString() {
      var shuffledList = this.mainStateTopTenCities
        .sort(() => 0.5 - Math.random())
        .slice(0, this.randomCityNumber);

      var shuffledMainStateCities = shuffledList.map((item) => item.name);

      shuffledMainStateCities[shuffledMainStateCities.length - 1] = ` and ${shuffledMainStateCities[shuffledMainStateCities.length - 1]}`;

      return shuffledMainStateCities.join(", ");
    },

    randomBodyTypes() {
      var shuffledList = this.vehicleBodyTypes
        .sort(() => 0.5 - Math.random())
        .slice(0, this.randomBodyTypeNumber);

      var shuffledVehicleBodyTypes = shuffledList.map((item) => item.name);

      shuffledVehicleBodyTypes[shuffledVehicleBodyTypes.length - 1] = ` and ${shuffledVehicleBodyTypes[shuffledVehicleBodyTypes.length - 1]}`;

      return shuffledVehicleBodyTypes.join(", ");
    },

    randomAccessories() {
      var shuffledList = this.vehicleAccessories
        .sort(() => 0.5 - Math.random())
        .slice(0, this.randomAccessoryNumber);

      return shuffledList.map((item) => item.name);
    },

    randomRateImpacts() {
      var shuffledList = this.rateImpacts
        .sort(() => 0.5 - Math.random())
        .slice(0, this.randomRateImpactNumber);

      return shuffledList.map((item) => item.name);
    },

    randomShippingImpacts() {
      var shuffledList = this.shippingImpacts
        .sort(() => 0.5 - Math.random())
        .slice(0, this.randomShippingImpactNumber);

      return shuffledList.map((item) => item.name)
    },

    randomTransports() {
      var shuffledCars = this.randomCars
          .sort(() => 0.5 - Math.random())
          .slice(0, this.randomTransportsNumber),

        shuffledMainStateTopTenCities = this.mainStateTopTenCities
          .sort(() => 0.5 - Math.random())
          .slice(0, this.randomTransportsNumber),

        shuffledMainStateTopTenCitiesNames = shuffledMainStateTopTenCities
          .map((item) => item.name),

        shuffledSecStateTopTenCities = this.secStateTopTenCities
        .sort(() => 0.5 - Math.random())
        .slice(0, this.randomTransportsNumber),

        shuffledSecStateTopTenCitiesNames = shuffledSecStateTopTenCities
          .map((item) => item.name),

        randomTransportsArray = [];

      for (var i = 0, len = this.randomTransportsNumber - 1; i <= len; i += 1) {
        console.log(shuffledCars[i].year);
        console.log(shuffledCars[i].make);

        var arrayItem = `${shuffledCars[i].year} ${shuffledCars[i].make} ${shuffledCars[i].model}, ${shuffledMainStateTopTenCitiesNames[i]}, ${this.mainStateAbbreviation} to ${shuffledSecStateTopTenCitiesNames[i]}, ${this.secStateAbbreviation}`;

        randomTransportsArray.push(arrayItem);
      }

      return randomTransportsArray;
    },

    introHeading() {
      var randomHeadingInput = this.introHeadings
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;

      var headingMutation1 = randomHeadingInput[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var headingMutation2 = headingMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      return headingMutation2;
    },

    ratesHeading() {
      var randomHeadingInput = this.ratesHeadings
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;

      var headingMutation1 = randomHeadingInput[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var headingMutation2 = headingMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      return headingMutation2;
    },

    whyChooseUsHeading() {
      var randomHeadingInput = this.whyChooseUsHeadings
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);
        
        return randomHeadingInput[0];
    },

    studentHeading() {
      var randomHeadingInput = this.studentHeadings
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);
        
        return randomHeadingInput[0];
    },

    militaryHeading() {
      var randomHeadingInput = this.militaryHeadings
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);
        
        return randomHeadingInput[0];
    },

    snowbirdHeading() {
      var randomHeadingInput = this.snowbirdHeadings
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);
        
        return randomHeadingInput[0];
    },

    introParagraph() {
      var randomParagraphs = this.introParagraphs
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      console.log(randomParagraphs[0]);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;
      var regexMainStateRandomCities = /{{topTenCity}}/gi;

      var paraMutation1 = randomParagraphs[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var paraMutation2 = paraMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      var paraMutation3 = paraMutation2.replace(
        regexMainStateRandomCities,
        this.mainStateRandomTopTenCitiesString
      );

      return paraMutation3;
    },
  },

  methods: {
    generateContent() {
      this.showContent = true;
      this.showGenerateButton = false;
      this.getMainStateData();
      this.getSecStateData();
    },

    generateRandomNumbers() {
      this.randomCityNumber = Math.floor(Math.random() * 12) + 2;
      this.randomBodyTypeNumber = Math.floor(Math.random() * 12) + 2;
      this.randomAccessoryNumber = Math.floor(Math.random() * 12) + 2;
      this.randomRateImpactNumber = Math.floor(Math.random() * 12) + 2;
      this.randomShippingImpactNumber = Math.floor(Math.random() * 12) + 2;
      this.randomTransportsNumber = Math.floor(Math.random() * 12) + 2;
    },

    getMainStateData() {
      axios
        .get(`https://sheetdb.io/api/v1/5iusht8kiio35?sheet=${this.mainStateAbbreviation}`)
        .then((response) => {
          this.mainStateTopTenCities = response.data.filter((item) => item.type === "topTenCity");
          this.mainStateCities = response.data.filter((item) => item.type === "city");
          this.stateNickName = response.data.filter((item) => item.type === "stateNickname");
        });
    },

    getSecStateData() {
      axios
        .get(`https://sheetdb.io/api/v1/5iusht8kiio35?sheet=${this.secStateAbbreviation}`)
        .then((response) => {
          this.secStateTopTenCities = response.data.filter((item) => item.type === "topTenCity");
          this.secStateCities = response.data.filter((item) => item.type === "city");
        });
    }
  },

  created() {
    this.generateRandomNumbers();

    axios
      .get("https://sheetdb.io/api/v1/5iusht8kiio35")
      .then((response) => {
        this.allStates = response.data
      });

    axios
      .get("https://sheetdb.io/api/v1/5iusht8kiio35?sheet=randomHeaders")
      .then((response) => {
        this.introHeadings = response.data.filter((item) => item.headerType === 'introHeading');
        this.ratesHeadings = response.data.filter((item) => item.headerType === 'ratesHeading');
        this.whyChooseUsHeadings = response.data.filter((item) => item.headerType === 'whyChooseUsHeading');
        this.studentHeadings = response.data.filter((item) => item.headerType === 'studentHeading');
        this.militaryHeadings = response.data.filter((item) => item.headerType === 'militaryHeading');
        this.snowbirdHeadings = response.data.filter((item) => item.headerType === 'snowbirdHeading');
    });

    axios
      .get("https://sheetdb.io/api/v1/5iusht8kiio35?sheet=randomThings")
      .then((response) => {
        this.vehicleBodyTypes = response.data.filter((item) => item.randomThingType === "vehicleBodyType");
        this.vehicleAccessories = response.data.filter((item) => item.randomThingType === "vehicleAccessory");
        this.rateImpacts = response.data.filter((item) => item.randomThingType === "rateImpact");
        this.shippingImpacts = response.data.filter((item) => item.randomThingType === "shippingImpact");
        this.topTwentyCitiesUSA = response.data.filter((item) => item.randomThingType === "topTwentyCityUSA");
      });

    axios
      .get("https://sheetdb.io/api/v1/5iusht8kiio35?sheet=randomCars")
      .then((response) => {
        this.randomCars = response.data;
      });

    axios
      .get("https://sheetdb.io/api/v1/5iusht8kiio35?sheet=randomParagraphs")
      .then((response) => {
        this.introParagraphs = response.data.filter((item) => item.paragraphType === "introPara");
        this.ratesParagraphs1 = response.data.filter((item) => item.paragraphType === "ratesPara1");
        this.ratesParagraphs2 = response.data.filter((item) => item.paragraphType === "ratesPara2");
        this.whyUsParagraphs1 = response.data.filter((item) => item.paragraphType === "whyUsPara1");
        this.whyUsParagraphs2 = response.data.filter((item) => item.paragraphType === "whyUsPara2");
        this.shippingProcessParagraphs1 = response.data.filter((item) => item.paragraphType === "shippingProcessPara1");
        this.shippingProcessParagraphs2 = response.data.filter((item) => item.paragraphType === "shippingProcessPara2");
        this.shippingProcessParagraphs3 = response.data.filter((item) => item.paragraphType === "shippingProcessPara3");
        this.shippingImpactsParagraphs1 = response.data.filter((item) => item.paragraphType === "shippingImpactsPara1");
        this.shippingImpactsParagraphs2 = response.data.filter((item) => item.paragraphType === "shippingImpactsPara2");
        this.studentTransportParas = response.data.filter((item) => item.paragraphType === "studentTransportPara");
        this.militaryTransportParas = response.data.filter((item) => item.paragraphType === "militaryTransportPara");
        this.snowbirdTransportParas = response.data.filter((item) => item.paragraphType === "snowbirdTransportPara");
      });
  }
});
