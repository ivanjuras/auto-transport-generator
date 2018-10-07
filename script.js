new Vue({
  el: "#app",

  data: {
    appTitle: "Auto Transport Content Generator",
    showButton: true,
    showContent: false,
    allStates: [],
    mainStateAbbreviation: 'AL',
    randomCityNumber: 0,
    randomBodyTypeNumber: 0,
    randomAccessoryNumber: 0,
    vehicleAccessories: [],
    vehicleBodyTypes: [],
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
          fullname = state.name
        }
      })

      return fullName
    },

    randomVehicleAccessories: function() {
      var shuffledList = this.vehicleAccessories
        .sort(function() { return .5 - Math.random() })
        .slice(0, this.randomAccessoryNumber)
    },

    introParagraph: function() {
      var randomParagraphs = this.introParagraphs
        .sort(function() { return .5 - Math.random() })
        .slice(0, 1)
      var regex = /{{mainStateFullName}}/gi
      console.log(randomParagraphs[0].content.replace(regex, this.mainStateFullName))
      return randomParagraphs[0].content.replace(regex, this.mainStateFullName)
    },
  },

  methods: {
    showAllContent: function() {
      this.showContent = true
    },

    generateRandomNumbers: function() {
      this.randomCityNumber = Math.floor(Math.random() * 15) + 1
      this.randomBodyTypeNumber = Math.floor(Math.random() * 12) + 1
      this.randomAccessoryNumber = Math.floor(Math.random() * 20) + 1
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
    })

    axios.get('https://sheetdb.io/api/v1/5bb9f4b5b0b5d?sheet=randomParagraphs').then(function(response) {
      _self.introParagraphs = response.data.filter(function(item) {
        return item.paragraphType === 'intro'
      })
    })
  }

});