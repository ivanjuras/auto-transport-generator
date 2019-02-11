var vm = new Vue({
  el: "#app",

  data: {
    appTitle: "Auto Transport Content Generator",
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
    mainStateMilitaryObjects: [],
    secStateTopTenCities: [],
    secStateCities: [],
    secStateColleges: [],
    stateNickname: [],
    secStateMilitaryObjects: [],
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
        var arrayItem = `${shuffledCars[i].year} ${shuffledCars[i].make} ${shuffledCars[i].model}, ${shuffledMainStateTopTenCitiesNames[i]}, ${this.mainStateAbbreviation} to ${shuffledSecStateTopTenCitiesNames[i]}, ${this.secStateAbbreviation}`;

        randomTransportsArray.push(arrayItem);
      }

      return randomTransportsArray;
    },

    randomCollegeTransports() {
      var shuffledCars = this.randomCars
          .sort(() => 0.5 - Math.random())
          .slice(0, this.randomTransportsNumber),

        shuffledMainStateTopTenCities = this.mainStateTopTenCities
          .sort(() => 0.5 - Math.random())
          .slice(0, this.randomTransportsNumber),

        shuffledMainStateTopTenCitiesNames = shuffledMainStateTopTenCities
          .map((item) => item.name),

        shuffledSecStateColleges = this.secStateColleges
        .sort(() => 0.5 - Math.random())
        .slice(0, this.randomTransportsNumber),

        shuffledSecStateCollegesNames = shuffledSecStateColleges
          .map((item) => item.name),

        randomCollegeTransportsArray = [];

      for (var i = 0, len = this.randomTransportsNumber - 1; i <= len; i += 1) {
        var arrayItem = `${shuffledCars[i].year} ${shuffledCars[i].make} ${shuffledCars[i].model}, ${shuffledMainStateTopTenCitiesNames[i]}, ${this.mainStateAbbreviation} to ${shuffledSecStateCollegesNames[i]}, ${this.secStateAbbreviation}`;

        randomCollegeTransportsArray.push(arrayItem);
      }

      return randomCollegeTransportsArray;
    },

    randomMilitaryTransports() {
      var shuffledCars = this.randomCars
          .sort(() => 0.5 - Math.random())
          .slice(0, this.randomTransportsNumber),

        shuffledMainStateMilitaryObjects = this.mainStateMilitaryObjects
          .sort(() => 0.5 - Math.random())
          .slice(0, this.randomTransportsNumber),

        shuffledMainStateMilitaryObjectsNames = shuffledMainStateMilitaryObjects
          .map((item) => item.name),

        shuffledSecStateMilitaryObjects = this.secStateMilitaryObjects
          .sort(() => 0.5 - Math.random())
          .slice(0, this.randomTransportsNumber),

        shuffledSecStateMilitaryObjectsNames = shuffledSecStateMilitaryObjects
          .map((item) => item.name),

        randomMilitaryTransportArray = [];

      for (var i = 0, len = this.randomTransportsNumber - 1; i <= len; i += 1) {
        var arrayItem = `${shuffledCars[i].year} ${shuffledCars[i].make} ${shuffledCars[i].model}, ${shuffledMainStateMilitaryObjectsNames[i]}, ${this.mainStateAbbreviation} to ${shuffledSecStateMilitaryObjectsNames[i]}, ${this.secStateAbbreviation}`;

        randomMilitaryTransportArray.push(arrayItem);
      }

      return randomMilitaryTransportArray;
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
        
        return randomHeadingInput[0].content;
    },

    studentHeading() {
      var randomHeadingInput = this.studentHeadings
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);
        
        return randomHeadingInput[0].content;
    },

    militaryHeading() {
      var randomHeadingInput = this.militaryHeadings
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);
        
        return randomHeadingInput[0].content;
    },

    snowbirdHeading() {
      var randomHeadingInput = this.snowbirdHeadings
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);
        
        return randomHeadingInput[0].content;
    },

    introParagraph() {
      var randomParagraphs = this.introParagraphs
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

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

    ratesParagraph1() {
      var randomParagraphs = this.ratesParagraphs1
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;
      var regexRandomBodyTypes = /{{randomBodyTypes}}/gi;

      var paraMutation1 = randomParagraphs[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var paraMutation2 = paraMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      var paraMutation3 = paraMutation2.replace(
        regexRandomBodyTypes,
        this.randomBodyTypes
      );

      return paraMutation3;
    },

    ratesParagraph2() {
      var randomParagraphs = this.ratesParagraphs2
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      return randomParagraphs[0].content;
    },

    whyUsParagraph1() {
      var randomParagraphs = this.whyUsParagraphs1
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;

      var paraMutation1 = randomParagraphs[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var paraMutation2 = paraMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      return paraMutation2;
    },

    whyUsParagraph2() {
      var randomParagraphs = this.whyUsParagraphs2
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;

      var paraMutation1 = randomParagraphs[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var paraMutation2 = paraMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      return paraMutation2;
    },

    shippingProcessParagraph1() {
      var randomParagraphs = this.shippingProcessParagraphs1
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;

      var paraMutation1 = randomParagraphs[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var paraMutation2 = paraMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      return paraMutation2;
    },

    shippingProcessParagraph2() {
      var randomParagraphs = this.shippingProcessParagraphs2
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      return randomParagraphs[0].content;
    },

    shippingProcessParagraph3() {
      var randomParagraphs = this.shippingProcessParagraphs3
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      return randomParagraphs[0].content;
    },

    shippingImpactsParagraph1() {
      var randomParagraphs = this.shippingImpactsParagraphs1
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;
      var regexMainStateAbbreviation = /{{mainStateAbbreviation}}/gi;
      var regexSecStateAbbreviation = /{{secStateAbbreviation}}/gi;

      var paraMutation1 = randomParagraphs[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var paraMutation2 = paraMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      var paraMutation3 = paraMutation2.replace(
        regexMainStateAbbreviation,
        this.mainStateAbbreviation
      );

      var paraMutation4 = paraMutation3.replace(
        regexSecStateAbbreviation,
        this.secStateAbbreviation
      );

      return paraMutation4;
    },

    shippingImpactsParagraph2() {
      var randomParagraphs = this.shippingImpactsParagraphs2
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;
      var regexMainStateAbbreviation = /{{mainStateAbbreviation}}/gi;
      var regexSecStateAbbreviation = /{{secStateAbbreviation}}/gi;

      var paraMutation1 = randomParagraphs[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var paraMutation2 = paraMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      var paraMutation3 = paraMutation2.replace(
        regexMainStateAbbreviation,
        this.mainStateAbbreviation
      );

      var paraMutation4 = paraMutation3.replace(
        regexSecStateAbbreviation,
        this.secStateAbbreviation
      );

      return paraMutation4;
    },

    studentTransportParagraph() {
      var randomParagraphs = this.studentTransportParas
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      var regexMainStateFullName = /{{mainStateFullName}}/gi;
      var regexSecStateFullName = /{{secStateFullName}}/gi;

      var paraMutation1 = randomParagraphs[0].content.replace(
        regexMainStateFullName,
        this.mainStateFullName
      );

      var paraMutation2 = paraMutation1.replace(
        regexSecStateFullName,
        this.secStateFullName
      );

      return paraMutation2;
    },

    militaryTransportParagraph() {
      var randomParagraphs = this.militaryTransportParas
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      return randomParagraphs[0].content;
    },

    snowbirdTransportParagraph() {
      var randomParagraphs = this.snowbirdTransportParas
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      return randomParagraphs[0].content;
    },

  },

  methods: {
    generateContent() {
      this.showContent = true;
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
          this.mainStateMilitaryObjects = response.data.filter((item) => item.type === "military");
        });
    },

    getSecStateData() {
      axios
        .get(`https://sheetdb.io/api/v1/5iusht8kiio35?sheet=${this.secStateAbbreviation}`)
        .then((response) => {
          this.secStateTopTenCities = response.data.filter((item) => item.type === "topTenCity");
          this.secStateCities = response.data.filter((item) => item.type === "city");
          this.secStateColleges = response.data.filter((item) => item.type === "colleges");
          this.secStateMilitaryObjects = response.data.filter((item) => item.type === "military");
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
