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
    vehicleAccessories: [],
    vehicleBodyTypes: [],
    topTwentyCitiesUSA: [],
    rateImpacts: [],
    shippingImpacts: [],
    introParagraphs: []
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

    mainStateRandomTopTenCities: function() {
      var shuffledList = this.mainStateTopTenCities.sort(function() { return .5 - Math.random() }).slice(0, this.randomCityNumber)
      var shuffledmainStateTopTenCities = shuffledList.map(function (item) {
        return item.name
      })
      shuffledmainStateTopTenCities[shuffledmainStateTopTenCities.length-1] = ` and ${shuffledmainStateTopTenCities[shuffledmainStateTopTenCities.length-1]}`
      return shuffledmainStateTopTenCities.join(", ")
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
          shuffledMainStateCities = this.mainStateCities.sort(function() { return .5 - Math.random() }).slice(0, this.randomTransportsNumber),
          shuffledMainStateCitiesNames = shuffledMainStateCities.map(function (item) {
            return item.name
          }), 
          shuffledTopTwentyCitiesUSA = this.topTwentyCitiesUSA.sort(function() { return .5 - Math.random() }).slice(0, this.randomTransportsNumber),
          randomTransportsArray = [],
          _self = this

          for (var i = 0, len = this.randomTransportsNumber - 1; i <= len; i += 1) {
            var arrayItem = `${shuffledCars[i].year} ${shuffledCars[i].make} ${shuffledCars[i].model}, ${shuffledMainStateCitiesNames[i]}, ${_self.mainStateAbbreviation} to ${shuffledTopTwentyCitiesUSA[i].name}`
            randomTransportsArray.push(arrayItem)
          }

          return randomTransportsArray
    },

    introParagraph: function() {
      var randomParagraphs = this.introParagraphs.sort(function() { return .5 - Math.random() }).slice(0, 1)
      var regex = /{{mainStateFullName}}/gi
      return randomParagraphs[0].content.replace(regex, this.mainStateFullName)
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
      })
    }
  },

  mounted: function () {
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
        return item.paragraphType === 'intro'
      })
    })
  }

});