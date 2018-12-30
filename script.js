var vm = new Vue({
	el: "#app",

	data: {
		appTitle: "Auto Transport Content Generator",
		showGenerateButton: true,
		showContent: false,
		allStates: [],
		mainStateAbbreviation: "AL",
		randomCityNumber: 0,
		randomBodyTypeNumber: 0,
		randomAccessoryNumber: 0,
		randomRateImpactNumber: 0,
		randomShippingImpactNumber: 0,
		randomTransportsNumber: 0,
		mainStateTopTenCities: [],
		mainStateCities: [],
		stateNickname: [],
		vehicleAccessories: [],
		vehicleBodyTypes: [],
		topTwentyCitiesUSA: [],
		rateImpacts: [],
		shippingImpacts: [],
		introParagraphs: [],
		ratesParagraphs1: [],
		ratesParagraphs2: [],
		ratesParagraphs3: [],
		processParagraphs1: [],
		processParagraphs2: [],
		processParagraphs3: [],
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

		wundergroundURL() {
			return `https://www.wunderground.com/US/${this.mainStateAbbreviation}/`
		},

		fhwaURL() {
			return `https://www.fhwa.dot.gov/trafficinfo/${this.mainStateAbbreviation}.htm`
		},

		mainStateRandomCities() {
			var shuffledList = this.mainStateCities
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

				shuffledTopTwentyCitiesUSA = this.topTwentyCitiesUSA
					.sort(() => 0.5 - Math.random())
					.slice(0, this.randomTransportsNumber),

				randomTransportsArray = [];

			for (var i = 0, len = this.randomTransportsNumber - 1; i <= len; i += 1) {
				var arrayItem = `${shuffledCars[i].year} ${shuffledCars[i].make} ${
					shuffledCars[i].model
				}, ${shuffledMainStateTopTenCitiesNames[i]}, ${
					this.mainStateAbbreviation
				} to ${shuffledTopTwentyCitiesUSA[i].name}`;

				randomTransportsArray.push(arrayItem);
			}

			return randomTransportsArray;
		},

		introParagraph() {
			var randomParagraphs = this.introParagraphs
				.sort(() => 0.5 - Math.random())
				.slice(0, 1);

			var mainStateNickname = this.stateNickName[0].name;

			console.log(randomParagraphs);

			var regexMainStateFullName = /{{mainStateFullName}}/gi;
			var regexMainStateRandomCities = /{{mainStateRandomCities}}/gi;
			var regexStateNickName = /{{stateNickname}}/gi;

			var paraMutation1 = randomParagraphs[0].content.replace(
				regexMainStateFullName,
				this.mainStateFullName
			);

			var paraMutation2 = paraMutation1.replace(
				regexMainStateRandomCities,
				this.mainStateRandomCities
			);

			var paraMutation3 = paraMutation2.replace(
				regexStateNickName,
				mainStateNickname
			);

			return paraMutation3;
		},

		ratesParagraph1() {
			var randomParagraphs = this.ratesParagraphs1
				.sort(() => 0.5 - Math.random())
				.slice(0, 1);

			var regexRandomBodyTypes = /{{randomBodyTypes}}/gi;

			var paraMutation1 = randomParagraphs[0].content.replace(
				regexRandomBodyTypes,
				this.randomBodyTypes
			);

			return paraMutation1;
		},

		ratesParagraph2() {
			var randomParagraphs = this.ratesParagraphs2
				.sort(() => 0.5 - Math.random())
				.slice(0, 1);

			var regexMainStateFullName = /{{mainStateFullName}}/gi;

			var paraMutation1 = randomParagraphs[0].content.replace(
				regexMainStateFullName,
				this.mainStateFullName
			);

			return paraMutation1;
		},

		ratesParagraph3() {
			var randomParagraphs = this.ratesParagraphs3
				.sort(() => 0.5 - Math.random())
				.slice(0, 1);

			var regexMainStateFullName = /{{mainStateFullName}}/gi;

			var paraMutation1 = randomParagraphs[0].content.replace(
				regexMainStateFullName,
				this.mainStateFullName
			);

			return paraMutation1;
		},

		processParagraph1() {
			var randomParagraphs = this.processParagraphs1
				.sort(() => 0.5 - Math.random())
				.slice(0, 1);

			var regexMainStateFullName = /{{mainStateFullName}}/gi;

			var paraMutation1 = randomParagraphs[0].content.replace(
				regexMainStateFullName,
				this.mainStateFullName
			);

			return paraMutation1;
		},

		processParagraph2() {
			var randomParagraphs = this.processParagraphs2
				.sort(() => 0.5 - Math.random())
				.slice(0, 1);

			var paraMutation1 = randomParagraphs[0].content;

			return paraMutation1;
		},

		processParagraph3() {
			var randomParagraphs = this.processParagraphs3
				.sort(() => 0.5 - Math.random())
				.slice(0, 1);

			var regexMainStateFullName = /{{mainStateFullName}}/gi;

			var paraMutation1 = randomParagraphs[0].content.replace(
				regexMainStateFullName,
				this.mainStateFullName
			);

			return paraMutation1;
		},

		roadConditionParagraph() {
			return this.roadConditionParagraphArray[0].name;
		},

		weatherParagraph() {
			return this.weatherParagraphArray[0].name;
		}
	},

	methods: {
		generateContent() {
			this.showContent = true;
			this.showGenerateButton = false;
			this.getMainStateData();
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
				.get(`https://sheetdb.io/api/v1/5bb9f4b5b0b5d?sheet=${this.mainStateAbbreviation}`)
				.then((response) => {
					this.mainStateTopTenCities = response.data.filter((item) => item.type === "topTenCity");
					this.mainStateCities = response.data.filter((item) => item.type === "city");
					this.stateNickName = response.data.filter((item) => item.type === "stateNickname");
					this.roadConditionParagraphArray = response.data.filter((item) => item.type === "roadConditionParagraph");
					this.weatherParagraphArray = response.data.filter((item) => item.type === "weatherParagraph");
				});
		}
	},

	created() {
		this.generateRandomNumbers();

		axios
			.get("https://sheetdb.io/api/v1/5bb9f4b5b0b5d")
			.then((response) => {
				this.allStates = response.data
			});

		axios
			.get("https://sheetdb.io/api/v1/5bb9f4b5b0b5d?sheet=randomThings")
			.then((response) => {
				this.vehicleBodyTypes = response.data.filter((item) => item.randomThingType === "vehicleBodyType");
				this.vehicleAccessories = response.data.filter((item) => item.randomThingType === "vehicleAccessory");
				this.rateImpacts = response.data.filter((item) => item.randomThingType === "rateImpact");
				this.shippingImpacts = response.data.filter((item) => item.randomThingType === "shippingImpact");
				this.topTwentyCitiesUSA = response.data.filter((item) => item.randomThingType === "topTwentyCityUSA");
			});

		axios
			.get("https://sheetdb.io/api/v1/5bb9f4b5b0b5d?sheet=randomCars")
			.then((response) => {
				this.randomCars = response.data;
			});

		axios
			.get("https://sheetdb.io/api/v1/5bb9f4b5b0b5d?sheet=randomParagraphs")
			.then((response) => {
				this.introParagraphs = response.data.filter((item) => item.paragraphType === "introPara");
				this.ratesParagraphs1 = response.data.filter((item) => item.paragraphType === "ratesPara1");
				this.ratesParagraphs2 = response.data.filter((item) => item.paragraphType === "ratesPara2");
				this.ratesParagraphs3 = response.data.filter((item) => item.paragraphType === "ratesPara3");
				this.processParagraphs1 = response.data.filter((item) => item.paragraphType === "processPara1");
				this.processParagraphs2 = response.data.filter((item) => item.paragraphType === "processPara2");
				this.processParagraphs3 = response.data.filter((item) => item.paragraphType === "processPara3");
			});
	}
});
