var vm = new Vue({
	el: "#app",

	data: {
		appTitle: "Auto Transport Content Generator",
		showGenerateButton: true,
		showContent: false,
		allStates: [],
		mainStateAbbreviation: 'AL',
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
		mainStateFullName: function() {
			var _self = this,
				fullName = ''

			_self.allStates.forEach(function(state) {
				if (state.abbreviation === _self.mainStateAbbreviation) {
					fullName = state.name
				}
			})

			return fullName
		},

		wundergroundURL: function() {
			return `https://www.wunderground.com/US/${this.mainStateAbbreviation}/`
		},

		fhwaURL: function() {
			return `https://www.fhwa.dot.gov/trafficinfo/${this.mainStateAbbreviation}.htm`
		},

		mainStateRandomCities: function() {
			var shuffledList = this.mainStateCities.sort(function() { return .5 - Math.random() }).slice(0, this.randomCityNumber)
			var shuffledMainStateCities = shuffledList.map(function (item) {
				return item.name
			})
			shuffledMainStateCities[shuffledMainStateCities.length-1] = ` and ${shuffledMainStateCities[shuffledMainStateCities.length-1]}`
			return shuffledMainStateCities.join(", ")
		},

		randomBodyTypes: function() {
			var shuffledList = this.vehicleBodyTypes.sort(function() { return .5 - Math.random() }).slice(0, this.randomBodyTypeNumber)
			var shuffledVehicleBodyTypes = shuffledList.map(function (item) {
				return item.name
			})
			shuffledVehicleBodyTypes[shuffledVehicleBodyTypes.length-1] = ` and ${shuffledVehicleBodyTypes[shuffledVehicleBodyTypes.length-1]}`
			return shuffledVehicleBodyTypes.join(", ")
		},

		randomAccessories: function() {
			var shuffledList = this.vehicleAccessories.sort(function() { return .5 - Math.random() }).slice(0, this.randomAccessoryNumber)
			return shuffledList.map(function (item) {
				return item.name
			})
		},

		randomRateImpacts: function() {
			var shuffledList = this.rateImpacts.sort(function() { return .5 - Math.random() }).slice(0, this.randomRateImpactNumber)
			return shuffledList.map(function (item) {
				return item.name
			})
		},

		randomShippingImpacts: function() {
			var shuffledList = this.shippingImpacts.sort(function() { return .5 - Math.random() }).slice(0, this.randomShippingImpactNumber)
			return shuffledList.map(function (item) {
				return item.name
			})
		},

		randomTransports: function() {
			var shuffledCars = this.randomCars.sort(function() { return .5 - Math.random() }).slice(0, this.randomTransportsNumber),
					shuffledMainStateTopTenCities = this.mainStateTopTenCities.sort(function() { return .5 - Math.random() }).slice(0, this.randomTransportsNumber),
					shuffledMainStateTopTenCitiesNames = shuffledMainStateTopTenCities.map(function (item) {
						return item.name
					}), 
					shuffledTopTwentyCitiesUSA = this.topTwentyCitiesUSA.sort(function() { return .5 - Math.random() }).slice(0, this.randomTransportsNumber),
					randomTransportsArray = [],
					_self = this

					for (var i = 0, len = this.randomTransportsNumber - 1; i <= len; i += 1) {
						var arrayItem = `${shuffledCars[i].year} ${shuffledCars[i].make} ${shuffledCars[i].model}, ${shuffledMainStateTopTenCitiesNames[i]}, ${_self.mainStateAbbreviation} to ${shuffledTopTwentyCitiesUSA[i].name}`
						randomTransportsArray.push(arrayItem)
					}

					return randomTransportsArray
		},

		introParagraph: function() {
			var randomParagraphs = this.introParagraphs.sort(function() { return .5 - Math.random() }).slice(0, 1)
			var mainStateNickname = this.stateNickName[0].name

			console.log(randomParagraphs)

			var regexMainStateFullName = /{{mainStateFullName}}/gi
			var regexMainStateRandomCities = /{{mainStateRandomCities}}/gi
			var regexStateNickName = /{{stateNickname}}/gi

			var paraMutation1 = randomParagraphs[0].content.replace(regexMainStateFullName, this.mainStateFullName)
			var paraMutation2 = paraMutation1.replace(regexMainStateRandomCities, this.mainStateRandomCities)
			var paraMutation3 = paraMutation2.replace(regexStateNickName, mainStateNickname)

			return paraMutation3
		},

		ratesParagraph1: function() {
			var randomParagraphs = this.ratesParagraphs1.sort(function() { return .5 - Math.random() }).slice(0, 1)
			var regexRandomBodyTypes = /{{randomBodyTypes}}/gi
			var paraMutation1 = randomParagraphs[0].content.replace(regexRandomBodyTypes, this.randomBodyTypes)
			return paraMutation1
		},

		ratesParagraph2: function() {
			var randomParagraphs = this.ratesParagraphs2.sort(function() { return .5 - Math.random() }).slice(0, 1)
			var regexMainStateFullName = /{{mainStateFullName}}/gi
			var paraMutation1 = randomParagraphs[0].content.replace(regexMainStateFullName, this.mainStateFullName)
			return paraMutation1
		},

		ratesParagraph3: function() {
			var randomParagraphs = this.ratesParagraphs3.sort(function() { return .5 - Math.random() }).slice(0, 1)
			var regexMainStateFullName = /{{mainStateFullName}}/gi
			var paraMutation1 = randomParagraphs[0].content.replace(regexMainStateFullName, this.mainStateFullName)
			return paraMutation1
		},

		processParagraph1: function() {
			var randomParagraphs = this.processParagraphs1.sort(function() { return .5 - Math.random() }).slice(0, 1)
			var regexMainStateFullName = /{{mainStateFullName}}/gi
			var paraMutation1 = randomParagraphs[0].content.replace(regexMainStateFullName, this.mainStateFullName)
			return paraMutation1
		},

		processParagraph2: function() {
			var randomParagraphs = this.processParagraphs2.sort(function() { return .5 - Math.random() }).slice(0, 1)
			var paraMutation1 = randomParagraphs[0].content
			return paraMutation1
		},

		processParagraph3: function() {
			var randomParagraphs = this.processParagraphs3.sort(function() { return .5 - Math.random() }).slice(0, 1)
			var regexMainStateFullName = /{{mainStateFullName}}/gi
			var paraMutation1 = randomParagraphs[0].content.replace(regexMainStateFullName, this.mainStateFullName)
			return paraMutation1
		},

		roadConditionParagraph: function() {
			return this.roadConditionParagraphArray[0].name
		},

		weatherParagraph: function() {
			return this.weatherParagraphArray[0].name
		},
	},

	methods: {
		generateContent: function() {
			this.showContent = true
			this.showGenerateButton = false
			this.getMainStateData()
		},

		generateRandomNumbers: function() {
			this.randomCityNumber = Math.floor(Math.random() * 12) + 2
			this.randomBodyTypeNumber = Math.floor(Math.random() * 12) + 2
			this.randomAccessoryNumber = Math.floor(Math.random() * 12) + 2
			this.randomRateImpactNumber = Math.floor(Math.random() * 12) + 2
			this.randomShippingImpactNumber = Math.floor(Math.random() * 12) + 2
			this.randomTransportsNumber = Math.floor(Math.random() * 12) + 2
		},

		getMainStateData: function() {
			var _self = this
			
			axios.get(`https://sheetdb.io/api/v1/5bb9f4b5b0b5d?sheet=${_self.mainStateAbbreviation}`).then(function(response) {
				_self.mainStateTopTenCities = response.data.filter(function(item) {
					return item.type === 'topTenCity'
				})

				_self.mainStateCities = response.data.filter(function(item) {
					return item.type === 'city'
				})

				_self.stateNickName = response.data.filter(function(item) {
					return item.type === 'stateNickname'
				})

				_self.roadConditionParagraphArray = response.data.filter(function(item) {
					return item.type === 'roadConditionParagraph'
				})

				_self.weatherParagraphArray = response.data.filter(function(item) {
					return item.type === 'weatherParagraph'
				})
			})
		}
	},

	created: function () {
		var _self = this

		_self.generateRandomNumbers()

		axios.get('https://sheetdb.io/api/v1/5bb9f4b5b0b5d').then(function(response) {
			_self.allStates = response.data
		})

		axios.get('https://sheetdb.io/api/v1/5bb9f4b5b0b5d?sheet=randomThings').then(function(response) {
			_self.vehicleBodyTypes = response.data.filter(function(item) {
				return item.randomThingType === 'vehicleBodyType'
			})

			_self.vehicleAccessories = response.data.filter(function(item) {
				return item.randomThingType === 'vehicleAccessory'
			})

			_self.rateImpacts = response.data.filter(function(item) {
				return item.randomThingType === 'rateImpact'
			})

			_self.shippingImpacts = response.data.filter(function(item) {
				return item.randomThingType === 'shippingImpact'
			})

			_self.topTwentyCitiesUSA = response.data.filter(function(item) {
				return item.randomThingType === 'topTwentyCityUSA'
			})
		})

		axios.get('https://sheetdb.io/api/v1/5bb9f4b5b0b5d?sheet=randomCars').then(function(response) {
			_self.randomCars = response.data
		})

		axios.get('https://sheetdb.io/api/v1/5bb9f4b5b0b5d?sheet=randomParagraphs').then(function(response) {
			_self.introParagraphs = response.data.filter(function(item) {
				return item.paragraphType === 'introPara'
			})

			_self.ratesParagraphs1 = response.data.filter(function(item) {
				return item.paragraphType === 'ratesPara1'
			})

			_self.ratesParagraphs2 = response.data.filter(function(item) {
				return item.paragraphType === 'ratesPara2'
			})

			_self.ratesParagraphs3 = response.data.filter(function(item) {
				return item.paragraphType === 'ratesPara3'
			})

			_self.processParagraphs1 = response.data.filter(function(item) {
				return item.paragraphType === 'processPara1'
			})

			_self.processParagraphs2 = response.data.filter(function(item) {
				return item.paragraphType === 'processPara2'
			})

			_self.processParagraphs3 = response.data.filter(function(item) {
				return item.paragraphType === 'processPara3'
			})
		})
	}
});